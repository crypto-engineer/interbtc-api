import { ApiPromise } from "@polkadot/api";
import { KeyringPair } from "@polkadot/keyring/types";
import { Bytes, u32 } from "@polkadot/types/primitive";
import { H256, Hash } from "@polkadot/types/interfaces";
import { UInt } from "@polkadot/types/codec";
import { TypeRegistry } from "@polkadot/types";
import { GenericAccountId } from "@polkadot/types/generic";
import { H256Le, Vault } from "../../../src/interfaces/default";
import { assert } from "../../chai";
import { DefaultIssueAPI } from "../../../src/apis/issue";
import { createPolkadotAPI } from "../../../src/factory";
import * as DefaultVaultsAPI from "../../../src/apis/vaults";
import { ImportMock } from "ts-mock-imports";
import { Keyring } from "@polkadot/api";

export type RequestResult = { hash: Hash; vault: Vault };

describe("issue", () => {
    let api: ApiPromise;
    let issueAPI: DefaultIssueAPI;
    let requestResult: RequestResult;
    let keyring: Keyring;

    // alice is the root account
    let alice: KeyringPair;
    const registry: TypeRegistry = new TypeRegistry();
    const defaultEndpoint = "ws://127.0.0.1:9944";
    const randomDecodedAccountId = "0xD5D5D5D5D5D5D5D5D5D5D5D5D5D5D5D5D5D5D5D5D5D5D5D5D5D5D5D5D5D5D5D5";

    describe.skip("request", () => {
        beforeEach(async () => {
            const defaultEndpoint = "ws://127.0.0.1:9944";
            api = await createPolkadotAPI(defaultEndpoint);
            issueAPI = new DefaultIssueAPI(api);
        });

        afterEach(() => {
            return api.disconnect();
        });

        it("should fail if no account is set", () => {
            const amount = api.createType("PolkaBTC", 10);
            assert.isRejected(issueAPI.request(amount));
        });
    });

    describe.skip("execute", () => {
        let api: ApiPromise;
        let issueAPI: DefaultIssueAPI;

        beforeEach(async () => {
            api = await createPolkadotAPI(defaultEndpoint);
            keyring = new Keyring({ type: "sr25519" });

            // Alice is also the root account
            alice = keyring.addFromUri("//Alice");
            const mockManager = ImportMock.mockClass(DefaultVaultsAPI, "DefaultVaultsAPI");
            mockManager.mock("selectRandomVault", <Vault>{
                id: new GenericAccountId(registry, randomDecodedAccountId),
            });
            issueAPI = new DefaultIssueAPI(api);
        });

        afterEach(() => {
            return api.disconnect();
        });

        it("should fail if no account is set", () => {
            const issueId: H256 = <H256>{};
            const txId: H256Le = <H256Le>{};
            const txBlockHeight: u32 = <u32>{};
            const merkleProof: Bytes = <Bytes>{};
            const rawTx: Bytes = <Bytes>{};
            assert.isRejected(issueAPI.execute(issueId, txId, txBlockHeight, merkleProof, rawTx));
        });

        it("should request if account is set", async () => {
            issueAPI.setAccount(alice);
            const amount = api.createType("PolkaBTC", 10);
            requestResult = await issueAPI.request(amount);
        });

        it("should send 'executeIssue' transaction after obtaining 'requestIssue' response", async () => {
            // The test does not check for the succesful termination of 'execute'.
            // Instead, it checks that the API call can be bundled into a transaction
            // and published on-chain without any errors being thrown.
            issueAPI.setAccount(alice);
            const requestHash: H256 = requestResult.hash;
            const txId: H256Le = requestHash;
            const txBlockHeight: u32 = new UInt(registry, 1);
            const merkleProof: Bytes = <Bytes>{};
            const rawTx: Bytes = <Bytes>{};
            await issueAPI.execute(requestHash, txId, txBlockHeight, merkleProof, rawTx);
        });
    });

    function delay(ms: number) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    describe.skip("cancel", () => {
        let api: ApiPromise;
        let issueAPI: DefaultIssueAPI;

        beforeEach(async () => {
            api = await createPolkadotAPI(defaultEndpoint);
            keyring = new Keyring({ type: "sr25519" });

            // Alice is also the root account
            alice = keyring.addFromUri("//Alice");
            const mockManager = ImportMock.mockClass(DefaultVaultsAPI, "DefaultVaultsAPI");
            mockManager.mock("selectRandomVault", <Vault>{
                id: new GenericAccountId(registry, randomDecodedAccountId),
            });
            issueAPI = new DefaultIssueAPI(api);
        });

        it("should cancel a request", async () => {
            issueAPI.setAccount(alice);
            const amount = api.createType("PolkaBTC", 11);
            requestResult = await issueAPI.request(amount);

            // delay the sending of the cancel transaction so that the
            // request transaction propagates and Error: 1014 does not occur
            await delay(7000);
            await issueAPI.cancel(requestResult.hash);
        });
    });
});
