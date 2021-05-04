import { PolkaBTC, RedeemRequest, DOT } from "../../../src/interfaces/default";
import { AddressOrPair } from "@polkadot/api/types";
import { AccountId, Hash, BlockNumber, H256 } from "@polkadot/types/interfaces";
import { GenericAccountId } from "@polkadot/types/generic";
import { TypeRegistry } from "@polkadot/types";
import BN from "bn.js";
import Big from "big.js";
import { RedeemAPI, RedeemRequestExt, RequestResult } from "../../../src/parachain/redeem";
import {RequestOptions} from "../../../src/utils/issueRedeem";
import { MockTransactionAPI } from "../transaction";

export class MockRedeemAPI extends MockTransactionAPI implements RedeemAPI {
    setRedeemPeriod(_blocks: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getRedeemPeriod(): Promise<number> {
        throw new Error("Method not implemented.");
    }
    burn(_amount: Big): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getMaxBurnableTokens(): Promise<Big> {
        throw new Error("Method not implemented.");
    }
    getBurnExchangeRate(): Promise<Big> {
        throw new Error("Method not implemented.");
    }
    execute(_redeemId: string, _txId: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    cancel(_redeemId: H256, _reimburse?: boolean): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async request(_amount: BN, _btcAddressEnc: string, _options?: RequestOptions): Promise<RequestResult[]> {
        return Promise.resolve([{ id: <Hash>{}, redeemRequest: (await this.list())[0] }]);
    }

    async requestAdvanced(
        _amountsPerVault: Map<AccountId, BN>,
        _btcAddressEnc: string,
        _atomic: boolean
    ): Promise<RequestResult[]> {
        return this.request(new BN(0), "");
    }

    async list(): Promise<RedeemRequestExt[]> {
        const registry = new TypeRegistry();
        const decodedAccountId = "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d";

        return Promise.resolve([
            <RedeemRequestExt>{
                vault: new GenericAccountId(registry, decodedAccountId),
                opentime: new BN(10908) as BlockNumber,
                amount_btc: new BN(4141) as PolkaBTC,
                premium_dot: new BN(140) as DOT,
                redeemer: new GenericAccountId(registry, decodedAccountId),
                btc_address: "bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq",
            },
            <RedeemRequestExt>{
                vault: new GenericAccountId(registry, decodedAccountId),
                opentime: new BN(11208) as BlockNumber,
                amount_btc: new BN(411) as PolkaBTC,
                premium_dot: new BN(10) as DOT,
                redeemer: new GenericAccountId(registry, decodedAccountId),
                btc_address: "bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq",
            },
        ]);
    }

    async mapForUser(_account: AccountId): Promise<Map<H256, RedeemRequestExt>> {
        return Promise.resolve(new Map<H256, RedeemRequestExt>());
    }

    getPagedIterator(_perPage: number): AsyncGenerator<RedeemRequest[]> {
        return {} as AsyncGenerator<RedeemRequest[]>;
    }

    async getRequestsById(_redeemIds: H256[]): Promise<RedeemRequestExt[]> {
        const request = await this.getRequestById("");
        return [request];
    }

    async getRequestById(_redeemId: string | Uint8Array | H256): Promise<RedeemRequestExt> {
        const registry = new TypeRegistry();
        const decodedAccountId = "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d";

        return <RedeemRequestExt>{
            vault: new GenericAccountId(registry, decodedAccountId),
            opentime: new BN(11208) as BlockNumber,
            amount_btc: new BN(411) as PolkaBTC,
            premium_dot: new BN(10) as DOT,
            redeemer: new GenericAccountId(registry, decodedAccountId),
            btc_address: "bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq",
        };
    }

    async getDustValue(): Promise<PolkaBTC> {
        return Promise.resolve(new BN(1) as PolkaBTC);
    }

    setAccount(_account?: AddressOrPair): void {
        return;
    }

    subscribeToRedeemExpiry(_account: AccountId, _callback: (requestRedeemId: H256) => void): Promise<() => void> {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        return Promise.resolve(() => { });
    }

    async getFeesToPay(_amount: string): Promise<string> {
        return "0.08";
    }

    async getFeeRate(): Promise<Big> {
        return new Big("0.005");
    }

    async getPremiumRedeemFee(): Promise<string> {
        return "5";
    }

}
