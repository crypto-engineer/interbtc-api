# InterBTC JS

JavaScript library to interact with InterBTC

## Getting started

You can spin up the parachain including the different clients with docker-compose:

```bash
docker-compose up
```

If you want to run components individually, you can clone the repositories and run the commands as done in `docker-compose.yml`.

To install dependencies, run

```
yarn install
```

Build the library using

```
yarn build
```

To run only unit tests, use

```
yarn test:unit
```

Note that the parachain needs to be running for all tests to pass.

Then, to run tests, run

```
yarn test
```

### Updating Types

Run the parachain (or indeed any Substrate node) and download the metadata:

```bash
curl -H "Content-Type: application/json" -d '{"id":"1", "jsonrpc":"2.0", "method": "state_getMetadata", "params":[]}' http://localhost:9933 > src/json/parachain.json
```

Then, update the metadata by building the library:

```bash
yarn build
```

## Usage

The library assumes you have a [BTC-Parachain](https://github.com/interlay/btc-parachain) running locally.

To use the library, you will first need to create a PolkadotJS `APIPromise` instance,
and then to instantiate a `InterBTCAPI` instance.

```typescript
import { createInterbtcAPI } from "@interlay/interbtc";

const DEFAULT_PARACHAIN_ENDPOINT = "ws://127.0.0.1:9944";
const isMainnet = false;
const interBTC = await createInterbtcAPI(defaultParachainEndpoint, isMainnet);
```

To emit transactions, an `account` has to be set.
The account should conform to the `AddressOrPair` interface.
If the account is not of the `KeyringPair` type, then a signer must also
be provided (such as an injected extension signer, from the Polkadot wallet).
See more details here: https://polkadot.js.org/docs/extension/usage/

```typescript
import { createTestKeyring } from "@polkadot/keyring/testing";
const keyring = createTestKeyring();
const keypair = keyring.getPairs()[0];
interBTC.setAccount(keypair);
```

The different functionalities are then exposed through the `InterBTCAPI` instance.


Certain API calls require a parameters of type `AccountId`. For testing, an empty accountId will suffice:

```typescript
import { AccountId } from "@polkadot/types/interfaces/runtime";

const activeStakedRelayerId = <AccountId>{};
const feesEarnedByActiveStakedRelayer = await interBTC.stakedRelayer.getFeesEarned(
    activeStakedRelayerId
);
```
