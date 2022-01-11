[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / DefaultRedeemAPI

# Class: DefaultRedeemAPI

## Hierarchy

- [`DefaultTransactionAPI`](/classes/DefaultTransactionAPI.md)

  ↳ **`DefaultRedeemAPI`**

## Implements

- [`RedeemAPI`](/interfaces/RedeemAPI.md)

## Table of contents

### Constructors

- [constructor](/classes/DefaultRedeemAPI.md#constructor)

### Properties

- [api](/classes/DefaultRedeemAPI.md#api)
- [events](/classes/DefaultRedeemAPI.md#events)
- [oracleAPI](/classes/DefaultRedeemAPI.md#oracleapi)
- [requestHash](/classes/DefaultRedeemAPI.md#requesthash)
- [tokensAPI](/classes/DefaultRedeemAPI.md#tokensapi)
- [vaultsAPI](/classes/DefaultRedeemAPI.md#vaultsapi)

### Methods

- [burn](/classes/DefaultRedeemAPI.md#burn)
- [cancel](/classes/DefaultRedeemAPI.md#cancel)
- [execute](/classes/DefaultRedeemAPI.md#execute)
- [getAccount](/classes/DefaultRedeemAPI.md#getaccount)
- [getBurnExchangeRate](/classes/DefaultRedeemAPI.md#getburnexchangerate)
- [getCurrentInclusionFee](/classes/DefaultRedeemAPI.md#getcurrentinclusionfee)
- [getDustValue](/classes/DefaultRedeemAPI.md#getdustvalue)
- [getFeeRate](/classes/DefaultRedeemAPI.md#getfeerate)
- [getFeesToPay](/classes/DefaultRedeemAPI.md#getfeestopay)
- [getMaxBurnableTokens](/classes/DefaultRedeemAPI.md#getmaxburnabletokens)
- [getPremiumRedeemFeeRate](/classes/DefaultRedeemAPI.md#getpremiumredeemfeerate)
- [getRedeemIdsFromEvents](/classes/DefaultRedeemAPI.md#getredeemidsfromevents)
- [getRedeemPeriod](/classes/DefaultRedeemAPI.md#getredeemperiod)
- [getRequestById](/classes/DefaultRedeemAPI.md#getrequestbyid)
- [getRequestsByIds](/classes/DefaultRedeemAPI.md#getrequestsbyids)
- [list](/classes/DefaultRedeemAPI.md#list)
- [request](/classes/DefaultRedeemAPI.md#request)
- [requestAdvanced](/classes/DefaultRedeemAPI.md#requestadvanced)
- [sendLogged](/classes/DefaultRedeemAPI.md#sendlogged)
- [setAccount](/classes/DefaultRedeemAPI.md#setaccount)
- [setRedeemPeriod](/classes/DefaultRedeemAPI.md#setredeemperiod)
- [doesArrayContainEvent](/classes/DefaultRedeemAPI.md#doesarraycontainevent)
- [isDispatchError](/classes/DefaultRedeemAPI.md#isdispatcherror)
- [printEvents](/classes/DefaultRedeemAPI.md#printevents)
- [waitForEvent](/classes/DefaultRedeemAPI.md#waitforevent)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new DefaultRedeemAPI**(`api`, `btcNetwork`, `electrsAPI`, `wrappedCurrency`, `collateralCurrency`, `account?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `btcNetwork` | [`Network`](/interfaces/bitcoin.networks.Network.md) |
| `electrsAPI` | [`ElectrsAPI`](/interfaces/ElectrsAPI.md) |
| `wrappedCurrency` | `Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |
| `collateralCurrency` | `Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\> |
| `account?` | `AddressOrPair` |

#### Overrides

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[constructor](/classes/DefaultTransactionAPI.md#constructor)

#### Defined in

[src/parachain/redeem.ts:183](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/redeem.ts#L183)

## Properties

### <a id="api" name="api"></a> api

• **api**: `ApiPromise`

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[api](/classes/DefaultTransactionAPI.md#api)

___

### <a id="events" name="events"></a> events

• **events**: `EventRecord`[] = `[]`

#### Defined in

[src/parachain/redeem.ts:181](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/redeem.ts#L181)

___

### <a id="oracleapi" name="oracleapi"></a> oracleAPI

• `Private` **oracleAPI**: [`OracleAPI`](/interfaces/OracleAPI.md)

#### Defined in

[src/parachain/redeem.ts:179](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/redeem.ts#L179)

___

### <a id="requesthash" name="requesthash"></a> requestHash

• **requestHash**: `Hash`

#### Defined in

[src/parachain/redeem.ts:180](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/redeem.ts#L180)

___

### <a id="tokensapi" name="tokensapi"></a> tokensAPI

• `Private` **tokensAPI**: [`TokensAPI`](/interfaces/TokensAPI.md)

#### Defined in

[src/parachain/redeem.ts:178](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/redeem.ts#L178)

___

### <a id="vaultsapi" name="vaultsapi"></a> vaultsAPI

• `Private` **vaultsAPI**: [`VaultsAPI`](/interfaces/VaultsAPI.md)

#### Defined in

[src/parachain/redeem.ts:177](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/redeem.ts#L177)

## Methods

### <a id="burn" name="burn"></a> burn

▸ **burn**(`amount`, `collateralCurrency`): `Promise`<`void`\>

Burn wrapped tokens for a premium

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |
| `collateralCurrency` | `Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\> |

#### Returns

`Promise`<`void`\>

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[burn](/interfaces/RedeemAPI.md#burn)

#### Defined in

[src/parachain/redeem.ts:276](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/redeem.ts#L276)

___

### <a id="cancel" name="cancel"></a> cancel

▸ **cancel**(`requestId`, `reimburse?`): `Promise`<`void`\>

Send a redeem cancellation transaction. After the redeem period has elapsed,
the redeemal request can be cancelled. As a result, the griefing collateral
of the vault will be slashed and sent to the redeemer

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `requestId` | `string` | `undefined` |
| `reimburse` | `boolean` | `false` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[cancel](/interfaces/RedeemAPI.md#cancel)

#### Defined in

[src/parachain/redeem.ts:270](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/redeem.ts#L270)

___

### <a id="execute" name="execute"></a> execute

▸ **execute**(`requestId`, `btcTxId?`, `merkleProof?`, `rawTx?`): `Promise`<`void`\>

Send a redeem execution transaction

**`remarks`** If `txId` is not set, the `merkleProof` and `rawTx` must both be set.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestId` | `string` |
| `btcTxId?` | `string` |
| `merkleProof?` | `Bytes` |
| `rawTx?` | `Bytes` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[execute](/interfaces/RedeemAPI.md#execute)

#### Defined in

[src/parachain/redeem.ts:259](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/redeem.ts#L259)

___

### <a id="getaccount" name="getaccount"></a> getAccount

▸ **getAccount**(): `undefined` \| `AddressOrPair`

#### Returns

`undefined` \| `AddressOrPair`

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[getAccount](/interfaces/RedeemAPI.md#getaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[getAccount](/classes/DefaultTransactionAPI.md#getaccount)

#### Defined in

[src/parachain/transaction.ts:26](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/transaction.ts#L26)

___

### <a id="getburnexchangerate" name="getburnexchangerate"></a> getBurnExchangeRate

▸ **getBurnExchangeRate**<`C`\>(`collateralCurrency`): `Promise`<`ExchangeRate`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }, `Currency`<`C`\>, `C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `collateralCurrency` | `Currency`<`C`\> |

#### Returns

`Promise`<`ExchangeRate`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }, `Currency`<`C`\>, `C`\>\>

The exchange rate (collateral currency to wrapped token currency)
used when burning tokens

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[getBurnExchangeRate](/interfaces/RedeemAPI.md#getburnexchangerate)

#### Defined in

[src/parachain/redeem.ts:304](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/redeem.ts#L304)

___

### <a id="getcurrentinclusionfee" name="getcurrentinclusionfee"></a> getCurrentInclusionFee

▸ **getCurrentInclusionFee**(): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

The current inclusion fee based on the expected number of bytes
in the transaction, and the inclusion fee rate reported by the oracle

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[getCurrentInclusionFee](/interfaces/RedeemAPI.md#getcurrentinclusionfee)

#### Defined in

[src/parachain/redeem.ts:323](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/redeem.ts#L323)

___

### <a id="getdustvalue" name="getdustvalue"></a> getDustValue

▸ **getDustValue**(): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

The minimum amount of wrapped tokens that is accepted for redeem requests; any lower values would
risk the bitcoin client to reject the payment

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[getDustValue](/interfaces/RedeemAPI.md#getdustvalue)

#### Defined in

[src/parachain/redeem.ts:359](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/redeem.ts#L359)

___

### <a id="getfeerate" name="getfeerate"></a> getFeeRate

▸ **getFeeRate**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

The fee charged for redeeming. For instance, "0.005" stands for 0.5%

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[getFeeRate](/interfaces/RedeemAPI.md#getfeerate)

#### Defined in

[src/parachain/redeem.ts:353](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/redeem.ts#L353)

___

### <a id="getfeestopay" name="getfeestopay"></a> getFeesToPay

▸ **getFeesToPay**(`amount`): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

The fees

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[getFeesToPay](/interfaces/RedeemAPI.md#getfeestopay)

#### Defined in

[src/parachain/redeem.ts:346](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/redeem.ts#L346)

___

### <a id="getmaxburnabletokens" name="getmaxburnabletokens"></a> getMaxBurnableTokens

▸ **getMaxBurnableTokens**(`collateralCurrency`): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `collateralCurrency` | `Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\> |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

The maximum amount of tokens that can be burned through a liquidation redeem

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[getMaxBurnableTokens](/interfaces/RedeemAPI.md#getmaxburnabletokens)

#### Defined in

[src/parachain/redeem.ts:297](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/redeem.ts#L297)

___

### <a id="getpremiumredeemfeerate" name="getpremiumredeemfeerate"></a> getPremiumRedeemFeeRate

▸ **getPremiumRedeemFeeRate**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

If users execute a redeem with a Vault flagged for premium redeem,
they can earn a premium, slashed from the Vault's collateral.
This value is a percentage of the redeemed amount.

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[getPremiumRedeemFeeRate](/interfaces/RedeemAPI.md#getpremiumredeemfeerate)

#### Defined in

[src/parachain/redeem.ts:365](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/redeem.ts#L365)

___

### <a id="getredeemidsfromevents" name="getredeemidsfromevents"></a> getRedeemIdsFromEvents

▸ `Private` **getRedeemIdsFromEvents**(`events`, `event`): `Hash`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `EventRecord`[] |
| `event` | `AugmentedEvent`<`ApiTypes`, `AnyTuple`\> |

#### Returns

`Hash`[]

#### Defined in

[src/parachain/redeem.ts:197](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/redeem.ts#L197)

___

### <a id="getredeemperiod" name="getredeemperiod"></a> getRedeemPeriod

▸ **getRedeemPeriod**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

The time difference in number of blocks between a redeem request
is created and required completion time by a vault.
The redeem period has an upper limit to ensure the user gets their BTC in time
and to potentially punish a vault for inactivity or stealing BTC.

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[getRedeemPeriod](/interfaces/RedeemAPI.md#getredeemperiod)

#### Defined in

[src/parachain/redeem.ts:292](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/redeem.ts#L292)

___

### <a id="getrequestbyid" name="getrequestbyid"></a> getRequestById

▸ **getRequestById**(`redeemId`): `Promise`<[`Redeem`](/interfaces/Redeem.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `redeemId` | `string` \| `H256` |

#### Returns

`Promise`<[`Redeem`](/interfaces/Redeem.md)\>

A redeem request object

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[getRequestById](/interfaces/RedeemAPI.md#getrequestbyid)

#### Defined in

[src/parachain/redeem.ts:371](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/redeem.ts#L371)

___

### <a id="getrequestsbyids" name="getrequestsbyids"></a> getRequestsByIds

▸ **getRequestsByIds**(`redeemIds`): `Promise`<[`Redeem`](/interfaces/Redeem.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `redeemIds` | (`string` \| `H256`)[] |

#### Returns

`Promise`<[`Redeem`](/interfaces/Redeem.md)[]\>

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[getRequestsByIds](/interfaces/RedeemAPI.md#getrequestsbyids)

#### Defined in

[src/parachain/redeem.ts:376](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/redeem.ts#L376)

___

### <a id="list" name="list"></a> list

▸ **list**(): `Promise`<[`Redeem`](/interfaces/Redeem.md)[]\>

#### Returns

`Promise`<[`Redeem`](/interfaces/Redeem.md)[]\>

An array containing the redeem requests

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[list](/interfaces/RedeemAPI.md#list)

#### Defined in

[src/parachain/redeem.ts:333](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/redeem.ts#L333)

___

### <a id="request" name="request"></a> request

▸ **request**(`amount`, `btcAddressEnc`, `vaultId?`, `atomic?`, `retries?`, `cachedVaults?`): `Promise`<[`Redeem`](/interfaces/Redeem.md)[]\>

Send a redeem request transaction

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> | `undefined` |
| `btcAddressEnc` | `string` | `undefined` |
| `vaultId?` | [`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md) | `undefined` |
| `atomic` | `boolean` | `true` |
| `retries` | `number` | `0` |
| `cachedVaults?` | `Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\> | `undefined` |

#### Returns

`Promise`<[`Redeem`](/interfaces/Redeem.md)[]\>

An array of type {redeemId, redeemRequest} if the requests succeeded. The function throws an error otherwise.

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[request](/interfaces/RedeemAPI.md#request)

#### Defined in

[src/parachain/redeem.ts:201](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/redeem.ts#L201)

___

### <a id="requestadvanced" name="requestadvanced"></a> requestAdvanced

▸ **requestAdvanced**(`amountsPerVault`, `btcAddressEnc`, `atomic`): `Promise`<[`Redeem`](/interfaces/Redeem.md)[]\>

Send a batch of aggregated redeem transactions (to one or more vaults)

#### Parameters

| Name | Type |
| :------ | :------ |
| `amountsPerVault` | `Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\> |
| `btcAddressEnc` | `string` |
| `atomic` | `boolean` |

#### Returns

`Promise`<[`Redeem`](/interfaces/Redeem.md)[]\>

An array of type {redeemId, vault} if the requests succeeded.

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[requestAdvanced](/interfaces/RedeemAPI.md#requestadvanced)

#### Defined in

[src/parachain/redeem.ts:237](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/redeem.ts#L237)

___

### <a id="sendlogged" name="sendlogged"></a> sendLogged

▸ **sendLogged**<`T`\>(`transaction`, `successEventType?`): `Promise`<`ISubmittableResult`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Codec`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `SubmittableExtrinsic`<``"promise"``, `ISubmittableResult`\> |
| `successEventType?` | `AugmentedEvent`<`ApiTypes`, `T`\> |

#### Returns

`Promise`<`ISubmittableResult`\>

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[sendLogged](/interfaces/RedeemAPI.md#sendlogged)

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[sendLogged](/classes/DefaultTransactionAPI.md#sendlogged)

#### Defined in

[src/parachain/transaction.ts:30](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/transaction.ts#L30)

___

### <a id="setaccount" name="setaccount"></a> setAccount

▸ **setAccount**(`account`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `AddressOrPair` |

#### Returns

`void`

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[setAccount](/interfaces/RedeemAPI.md#setaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[setAccount](/classes/DefaultTransactionAPI.md#setaccount)

#### Defined in

[src/parachain/transaction.ts:22](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/transaction.ts#L22)

___

### <a id="setredeemperiod" name="setredeemperiod"></a> setRedeemPeriod

▸ **setRedeemPeriod**(`blocks`): `Promise`<`void`\>

**`remarks`** Testnet utility function

#### Parameters

| Name | Type |
| :------ | :------ |
| `blocks` | `number` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[setRedeemPeriod](/interfaces/RedeemAPI.md#setredeemperiod)

#### Defined in

[src/parachain/redeem.ts:286](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/redeem.ts#L286)

___

### <a id="doesarraycontainevent" name="doesarraycontainevent"></a> doesArrayContainEvent

▸ `Static` **doesArrayContainEvent**<`T`\>(`events`, `eventType`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Codec`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `EventRecord`[] |
| `eventType` | `AugmentedEvent`<`ApiTypes`, `T`\> |

#### Returns

`boolean`

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[doesArrayContainEvent](/classes/DefaultTransactionAPI.md#doesarraycontainevent)

#### Defined in

[src/parachain/transaction.ts:141](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/transaction.ts#L141)

___

### <a id="isdispatcherror" name="isdispatcherror"></a> isDispatchError

▸ `Static` **isDispatchError**(`eventData`): eventData is DispatchError

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventData` | `unknown` |

#### Returns

eventData is DispatchError

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[isDispatchError](/classes/DefaultTransactionAPI.md#isdispatcherror)

#### Defined in

[src/parachain/transaction.ts:137](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/transaction.ts#L137)

___

### <a id="printevents" name="printevents"></a> printEvents

▸ `Static` **printEvents**(`api`, `events`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `events` | `EventRecord`[] |

#### Returns

`void`

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[printEvents](/classes/DefaultTransactionAPI.md#printevents)

#### Defined in

[src/parachain/transaction.ts:78](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/transaction.ts#L78)

___

### <a id="waitforevent" name="waitforevent"></a> waitForEvent

▸ `Static` **waitForEvent**<`T`\>(`api`, `event`, `timeoutMs`): `Promise`<`boolean`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Codec`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `event` | `AugmentedEvent`<`ApiTypes`, `T`\> |
| `timeoutMs` | `number` |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[waitForEvent](/classes/DefaultTransactionAPI.md#waitforevent)

#### Defined in

[src/parachain/transaction.ts:108](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/transaction.ts#L108)
