import { ApiPromise } from "@polkadot/api";
import { AddressOrPair } from "@polkadot/api/types";
import { AccountId, Hash, H256, Header } from "@polkadot/types/interfaces";
import { EventRecord } from "@polkadot/types/interfaces/system";
import { Bytes } from "@polkadot/types";
import { ApiTypes, AugmentedEvent } from "@polkadot/api/types";
import type { AnyTuple } from "@polkadot/types/types";
import { Network } from "bitcoinjs-lib";
import Big from "big.js";

import { VaultsAPI, DefaultVaultsAPI } from "./vaults";
import {
    decodeBtcAddress,
    decodeFixedPointType,
    encodeParachainRequest,
    btcToSat,
    satToBTC,
    getTxProof,
} from "../utils";
import { stripHexPrefix } from "../utils";
import { CollateralAPI } from ".";
import { DefaultCollateralAPI } from "./collateral";
import { ElectrsAPI } from "../external";
import { DefaultTransactionAPI, TransactionAPI } from "./transaction";
import { RedeemRequest } from "../interfaces/default";
import { DefaultOracleAPI, OracleAPI } from "./oracle";

export type RequestResult = { id: Hash; redeemRequest: RedeemRequestExt };

export interface RedeemRequestExt extends Omit<RedeemRequest, "btc_address"> {
    // network encoded btc address
    btc_address: string;
}

export function encodeRedeemRequest(req: RedeemRequest, network: Network): RedeemRequestExt {
    return encodeParachainRequest<RedeemRequest, RedeemRequestExt>(req, network);
}

/**
 * @category PolkaBTC Bridge
 * The type Big represents DOT or PolkaBTC denominations,
 * while the type BN represents Planck or Satoshi denominations.
 */
export interface RedeemAPI extends TransactionAPI {
    /**
     * @returns An array containing the redeem requests
     */
    list(): Promise<RedeemRequestExt[]>;
    /**
     * Send a redeem request transaction
     * @param amount PolkaBTC amount (denoted in Bitcoin) to redeem
     * @param btcAddressEnc Bitcoin address where the redeemed BTC should be sent
     * @returns An object of type {redeemId, vault} if the request succeeded. The function throws an error otherwise.
     */
    request(amount: Big, btcAddressEnc: string, vaultId?: AccountId): Promise<RequestResult>;
    /**
     * Send a redeem execution transaction
     * @remarks If `txId` is not set, the `merkleProof` and `rawTx` must both be set.
     *
     * @param redeemId The ID generated by the redeem request transaction
     * @param txId (Optional) The ID of the Bitcoin transaction that sends funds from the vault to the redeemer's address
     * @param merkleProof (Optional) The merkle inclusion proof of the Bitcoin transaction.
     * @param rawTx (Optional) The raw bytes of the Bitcoin transaction
     * @returns A boolean value indicating whether the execution was successful. The function throws an error otherwise.
     */
    execute(redeemId: string, txId?: string, merkleProof?: Bytes, rawTx?: Bytes): Promise<boolean>;
    /**
     * Send a redeem cancellation transaction. After the redeem period has elapsed,
     * the redeemal of PolkaBTC can be cancelled. As a result, the griefing collateral
     * of the vault will be slashed and sent to the redeemer
     * @param redeemId The ID returned by the redeem request transaction
     * @param reimburse (Optional) In case of redeem failure:
     *  - `false` = retry redeeming, with a different Vault
     *  - `true` = accept reimbursement in polkaBTC
     */
    cancel(redeemId: H256, reimburse?: boolean): Promise<void>;
    /**
     * @remarks Testnet utility function
     * @param blocks The time difference in number of blocks between a redeem request
     * is created and required completion time by a vault.
     * The redeem period has an upper limit to ensure the user gets their BTC in time
     * and to potentially punish a vault for inactivity or stealing BTC.
     */
    setRedeemPeriod(blocks: number): Promise<void>;
     /**
     *
     * @returns The time difference in number of blocks between a redeem request
     * is created and required completion time by a vault.
     * The redeem period has an upper limit to ensure the user gets their BTC in time
     * and to potentially punish a vault for inactivity or stealing BTC.
     */
    getRedeemPeriod(): Promise<number>;
    /**
     * Set an account to use when sending transactions from this API
     * @param account Keyring account
     */
    setAccount(account: AddressOrPair): void;
    /**
     * @param account The ID of the account whose redeem requests are to be retrieved
     * @returns A mapping from the redeem request ID to the redeem request object, corresponding to the requests of
     * the given account
     */
    mapForUser(account: AccountId): Promise<Map<H256, RedeemRequestExt>>;
    /**
     * @param redeemId The ID of the redeem request to fetch
     * @returns A redeem request object
     */
    getRequestById(redeemId: H256): Promise<RedeemRequestExt>;
    /**
     * Whenever a redeem request associated with `account` expires, call the callback function with the
     * ID of the expired request. Already expired requests are stored in memory, so as not to call back
     * twice for the same request.
     * @param account The ID of the account whose redeem requests are to be checked for expiry
     * @param callback Function to be called whenever a redeem request expires
     */
    subscribeToRedeemExpiry(account: AccountId, callback: (requestRedeemId: H256) => void): Promise<() => void>;
    /**
     * @returns The minimum amount of btc that is accepted for redeem requests; any lower values would
     * risk the bitcoin client to reject the payment
     */
    getDustValue(): Promise<Big>;
    /**
     * @returns The fee charged for redeeming. For instance, "0.005" stands for 0.5%
     */
    getFeeRate(): Promise<Big>;
    /**
     * @param amountBtc The amount, in BTC, for which to compute the redeem fees
     * @returns The fees, in BTC
     */
    getFeesToPay(amount: Big): Promise<Big>;
    /**
     * @returns If users execute a redeem with a Vault flagged for premium redeem,
     * they can earn a DOT premium, slashed from the Vault's collateral.
     */
    getPremiumRedeemFee(): Promise<string>;
    /**
     * Burn wrapped tokens for a premium
     * @param amount The amount of PolkaBTC to burn, denominated as PolkaBTC
     */
    burn(amount: Big): Promise<void>;
    /**
     * @returns The maximum amount of tokens that can be burned through a liquidation redeem
     */
    getMaxBurnableTokens(): Promise<Big>;
    /**
     * @returns The exchange rate (collateral currency to wrapped token currency)
     * used when burning tokens
     */
    getBurnExchangeRate(): Promise<Big>;
    /**
     * @returns The current inclusion fee based on the expected number of bytes
     * in the transaction, and the inclusion fee rate reported by the oracle
     */
    getCurrentInclusionFee(): Promise<Big>;
}

export class DefaultRedeemAPI extends DefaultTransactionAPI implements RedeemAPI {
    private vaultsAPI: VaultsAPI;
    private collateralAPI: CollateralAPI;
    private oracleAPI: OracleAPI;
    requestHash: Hash = this.api.createType("Hash");
    events: EventRecord[] = [];

    constructor(api: ApiPromise, private btcNetwork: Network, private electrsAPI: ElectrsAPI, account?: AddressOrPair) {
        super(api, account);
        this.vaultsAPI = new DefaultVaultsAPI(api, btcNetwork, account);
        this.collateralAPI = new DefaultCollateralAPI(api, account);
        this.oracleAPI = new DefaultOracleAPI(api, account);
    }

    /**
     * @param events The EventRecord array returned after sending a redeem transaction
     * @param methodToCheck The name of the event method whose existence to check
     * @returns The redeemId associated with the transaction. If the EventRecord array does not
     * contain redeem events, the function throws an error.
     */
    private getRedeemIdFromEvents(events: EventRecord[], eventToFind: AugmentedEvent<ApiTypes, AnyTuple>): Hash {
        for (const { event } of events) {
            if (eventToFind.is(event)) {
                // the redeem id has type H256 and is the first item of the event data array
                const id = this.api.createType("Hash", event.data[0]);
                return id;
            }
        }
        throw new Error("Redeem transaction failed");
    }

    async request(amount: Big, btcAddressEnc: string, vaultId?: AccountId): Promise<RequestResult> {
        if (!vaultId) {
            vaultId = await this.vaultsAPI.selectRandomVaultRedeem(amount);
        }
        const amountSat = this.api.createType("Wrapped", btcToSat(amount.toString()));
        const btcAddress = this.api.createType("BtcAddress", decodeBtcAddress(btcAddressEnc, this.btcNetwork));
        const requestRedeemTx = this.api.tx.redeem.requestRedeem(amountSat, btcAddress, vaultId);
        const result = await this.sendLogged(requestRedeemTx, this.api.events.redeem.RequestRedeem);
        try {
            const id = this.getRedeemIdFromEvents(result.events, this.api.events.redeem.RequestRedeem);
            const redeemRequest = await this.getRequestById(id);
            return { id, redeemRequest };
        } catch (e) {
            return Promise.reject(e);
        }
    }

    async execute(requestId: string, btcTxId?: string, merkleProof?: Bytes, rawTx?: Bytes): Promise<boolean> {
        const parsedRequestId = this.api.createType("H256", requestId);
        [merkleProof, rawTx] = await getTxProof(this.electrsAPI, btcTxId, merkleProof, rawTx);
        const executeRedeemTx = this.api.tx.redeem.executeRedeem(parsedRequestId, merkleProof, rawTx);
        const result = await this.sendLogged(executeRedeemTx, this.api.events.redeem.ExecuteRedeem);
        const id = this.getRedeemIdFromEvents(result.events, this.api.events.redeem.ExecuteRedeem);
        if (id) {
            return true;
        }
        return false;
    }

    async cancel(redeemId: H256, reimburse?: boolean): Promise<void> {
        const reimburseValue = reimburse ? reimburse : false;
        const cancelRedeemTx = this.api.tx.redeem.cancelRedeem(redeemId, reimburseValue);
        await this.sendLogged(cancelRedeemTx, this.api.events.redeem.CancelRedeem);
    }

    async burn(amount: Big): Promise<void> {
        const amountSat = this.api.createType("Balance", btcToSat(amount.toString()));
        const burnRedeemTx = this.api.tx.redeem.liquidationRedeem(amountSat);
        await this.sendLogged(burnRedeemTx, this.api.events.redeem.LiquidationRedeem);
    }

    async setRedeemPeriod(blocks: number): Promise<void> {
        const period = this.api.createType("BlockNumber", blocks);
        const tx = this.api.tx.sudo
            .sudo(
                this.api.tx.redeem.setRedeemPeriod(period)
            );
        await this.sendLogged(tx);
    }

    async getRedeemPeriod(): Promise<number> {
        const blockNumber = await this.api.query.redeem.redeemPeriod();
        return blockNumber.toNumber();
    }

    async getMaxBurnableTokens(): Promise<Big> {
        const liquidationVault = await this.vaultsAPI.getLiquidationVault();
        return new Big(satToBTC(liquidationVault.issued_tokens.toString()));
    }

    async getBurnExchangeRate(): Promise<Big> {
        const liquidationVault = await this.vaultsAPI.getLiquidationVault();
        const wrappedSatoshi = liquidationVault.issued_tokens.add(liquidationVault.to_be_issued_tokens);
        if(wrappedSatoshi.isZero()) {
            return Promise.reject("There are no burnable tokens. The burn exchange rate is undefined");
        }
        const wrappedBtc = new Big(satToBTC(wrappedSatoshi.toString()));
        const liquidationVaultId = await this.vaultsAPI.getLiquidationVaultId();
        const collateralDot = await this.collateralAPI.balanceLocked(
            this.api.createType("AccountId", liquidationVaultId)
        );
        return collateralDot.div(wrappedBtc);
    }

    async getCurrentInclusionFee(): Promise<Big> {
        const head = await this.api.rpc.chain.getFinalizedHead();
        const [size, satoshiFees] = await Promise.all([
            this.api.query.redeem.redeemTransactionSize.at(head),
            this.oracleAPI.getBtcTxFeesPerByte()
        ]);
        const btcFees = new Big(satToBTC(satoshiFees.fast.toString()));
        return btcFees.mul(new Big(size.toString()));
    }

    async list(): Promise<RedeemRequestExt[]> {
        const head = await this.api.rpc.chain.getFinalizedHead();
        const redeemRequests = await this.api.query.redeem.redeemRequests.entriesAt(head);
        return redeemRequests.map((v) => encodeRedeemRequest(v[1], this.btcNetwork));
    }

    async mapForUser(account: AccountId): Promise<Map<H256, RedeemRequestExt>> {
        const redeemRequestPairs: [H256, RedeemRequest][] = await this.api.rpc.redeem.getRedeemRequests(account);
        const mapForUser: Map<H256, RedeemRequestExt> = new Map<H256, RedeemRequestExt>();
        redeemRequestPairs.forEach((redeemRequestPair) =>
            mapForUser.set(redeemRequestPair[0], encodeRedeemRequest(redeemRequestPair[1], this.btcNetwork))
        );
        return mapForUser;
    }

    async subscribeToRedeemExpiry(account: AccountId, callback: (requestRedeemId: H256) => void): Promise<() => void> {
        const expired = new Set();
        try {
            const unsubscribe = await this.api.rpc.chain.subscribeFinalizedHeads(async (header: Header) => {
                const redeemRequests = await this.mapForUser(account);
                const redeemPeriod = this.api.createType("BlockNumber", await this.getRedeemPeriod());
                const currentParachainBlockHeight = header.number.toBn();
                redeemRequests.forEach((request, id) => {
                    if (request.opentime.add(redeemPeriod).lte(currentParachainBlockHeight) && !expired.has(id)) {
                        expired.add(id);
                        callback(this.api.createType("H256", stripHexPrefix(id.toString())));
                    }
                });
            });
            return unsubscribe;
        } catch (error) {
            console.log(`Error during expired redeem callback: ${error}`);
        }
        // as a fallback, return an empty void function
        return () => {
            return;
        };
    }

    async getFeesToPay(amount: Big): Promise<Big> {
        const feePercentage = await this.getFeeRate();
        return amount.mul(feePercentage);
    }

    async getFeeRate(): Promise<Big> {
        const head = await this.api.rpc.chain.getFinalizedHead();
        const redeemFee = await this.api.query.fee.redeemFee.at(head);
        return new Big(decodeFixedPointType(redeemFee));
    }

    async getDustValue(): Promise<Big> {
        const head = await this.api.rpc.chain.getFinalizedHead();
        const dustValueSat = await this.api.query.redeem.redeemBtcDustValue.at(head);
        return new Big(satToBTC(dustValueSat.toString()));
    }

    async getPremiumRedeemFee(): Promise<string> {
        const head = await this.api.rpc.chain.getFinalizedHead();
        const premiumRedeemFee = await this.api.query.fee.premiumRedeemFee.at(head);
        return decodeFixedPointType(premiumRedeemFee);
    }

    async getRequestById(redeemId: H256): Promise<RedeemRequestExt> {
        const head = await this.api.rpc.chain.getFinalizedHead();
        return encodeRedeemRequest(await this.api.query.redeem.redeemRequests.at(head, redeemId), this.btcNetwork);
    }
}
