import { ApiPromise, Keyring } from "@polkadot/api";
import * as fs from "fs";
import * as path from "path";
import { KeyringPair } from "@polkadot/keyring/types";

import { createSubstrateAPI } from "../../../../src/factory";
import { assert } from "../../../chai";
import { SUDO_URI, PARACHAIN_ENDPOINT, COLLATERAL_CURRENCY_TICKER, WRAPPED_CURRENCY_TICKER, ESPLORA_BASE_PATH, GOVERNANCE_CURRENCY_TICKER } from "../../../config";
import { sudo } from "../../../utils/helpers";
import { CollateralCurrency, DefaultBridgeAPI, BridgeAPI, tickerToMonetaryCurrency, WrappedCurrency, GovernanceCurrency } from "../../../../src";

describe("systemAPI", () => {
    let api: ApiPromise;
    let sudoAccount: KeyringPair;
    let interBtcAPI: BridgeAPI;
    let keyring: Keyring;

    before(async () => {
        api = await createSubstrateAPI(PARACHAIN_ENDPOINT);
        keyring = new Keyring({ type: "sr25519" });
        sudoAccount = keyring.addFromUri(SUDO_URI);
        const wrappedCurrency = tickerToMonetaryCurrency(api, WRAPPED_CURRENCY_TICKER) as WrappedCurrency;
        const governanceCurrency = tickerToMonetaryCurrency(api, GOVERNANCE_CURRENCY_TICKER) as GovernanceCurrency;
        interBtcAPI = new DefaultBridgeAPI(api, "regtest", wrappedCurrency, governanceCurrency, sudoAccount, ESPLORA_BASE_PATH);
    });

    after(async () => {
        api.disconnect();
    });

    it("should getCurrentBlockNumber", async () => {
        const currentBlockNumber = await interBtcAPI.system.getCurrentBlockNumber();
        assert.isDefined(currentBlockNumber);
    });

    it("should getStatusCode", async () => {
        const statusCode = await interBtcAPI.system.getStatusCode();
        assert.isDefined(statusCode);
    });

    // TODO: Unskip once differences between rococo-local and standalone are fixed
    it.skip("should setCode", async () => {
        const code = fs.readFileSync(
            path.join(__dirname, "../../../mock/rococo_runtime.compact.wasm")
        ).toString("hex");
        await sudo(interBtcAPI, () => interBtcAPI.system.setCode(code));
    });
});
