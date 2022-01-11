[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / DefaultIssueAPI

# Class: DefaultIssueAPI

## Hierarchy

- [`DefaultTransactionAPI`](/classes/DefaultTransactionAPI.md)

  ↳ **`DefaultIssueAPI`**

## Implements

- [`IssueAPI`](/interfaces/IssueAPI.md)

## Table of contents

### Constructors

- [constructor](/classes/DefaultIssueAPI.md#constructor)

### Properties

- [api](/classes/DefaultIssueAPI.md#api)
- [feeAPI](/classes/DefaultIssueAPI.md#feeapi)
- [vaultsAPI](/classes/DefaultIssueAPI.md#vaultsapi)

### Methods

- [cancel](/classes/DefaultIssueAPI.md#cancel)
- [craftRequestTx](/classes/DefaultIssueAPI.md#craftrequesttx)
- [execute](/classes/DefaultIssueAPI.md#execute)
- [getAccount](/classes/DefaultIssueAPI.md#getaccount)
- [getFeeRate](/classes/DefaultIssueAPI.md#getfeerate)
- [getFeesToPay](/classes/DefaultIssueAPI.md#getfeestopay)
- [getIssueIdsFromEvents](/classes/DefaultIssueAPI.md#getissueidsfromevents)
- [getIssuePeriod](/classes/DefaultIssueAPI.md#getissueperiod)
- [getRequestById](/classes/DefaultIssueAPI.md#getrequestbyid)
- [getRequestLimits](/classes/DefaultIssueAPI.md#getrequestlimits)
- [getRequestsByIds](/classes/DefaultIssueAPI.md#getrequestsbyids)
- [list](/classes/DefaultIssueAPI.md#list)
- [request](/classes/DefaultIssueAPI.md#request)
- [requestAdvanced](/classes/DefaultIssueAPI.md#requestadvanced)
- [sendLogged](/classes/DefaultIssueAPI.md#sendlogged)
- [setAccount](/classes/DefaultIssueAPI.md#setaccount)
- [setIssuePeriod](/classes/DefaultIssueAPI.md#setissueperiod)
- [doesArrayContainEvent](/classes/DefaultIssueAPI.md#doesarraycontainevent)
- [isDispatchError](/classes/DefaultIssueAPI.md#isdispatcherror)
- [printEvents](/classes/DefaultIssueAPI.md#printevents)
- [waitForEvent](/classes/DefaultIssueAPI.md#waitforevent)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new DefaultIssueAPI**(`api`, `btcNetwork`, `electrsAPI`, `wrappedCurrency`, `collateralCurrency`, `account?`)

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

[src/parachain/issue.ts:149](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/issue.ts#L149)

## Properties

### <a id="api" name="api"></a> api

• **api**: `ApiPromise`

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[api](/classes/DefaultTransactionAPI.md#api)

___

### <a id="feeapi" name="feeapi"></a> feeAPI

• `Private` **feeAPI**: [`FeeAPI`](/interfaces/FeeAPI.md)

#### Defined in

[src/parachain/issue.ts:147](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/issue.ts#L147)

___

### <a id="vaultsapi" name="vaultsapi"></a> vaultsAPI

• `Private` **vaultsAPI**: [`VaultsAPI`](/interfaces/VaultsAPI.md)

#### Defined in

[src/parachain/issue.ts:146](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/issue.ts#L146)

## Methods

### <a id="cancel" name="cancel"></a> cancel

▸ **cancel**(`requestId`): `Promise`<`void`\>

Send an issue cancellation transaction. After the issue period has elapsed,
the issuance request can be cancelled. As a result, the griefing collateral
of the requester will be slashed and sent to the vault that had prepared to issue.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestId` | `string` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IssueAPI](/interfaces/IssueAPI.md).[cancel](/interfaces/IssueAPI.md#cancel)

#### Defined in

[src/parachain/issue.ts:297](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/issue.ts#L297)

___

### <a id="craftrequesttx" name="craftrequesttx"></a> craftRequestTx

▸ **craftRequestTx**(`vaultId`, `amount`): `Promise`<`SubmittableExtrinsic`<``"promise"``, `ISubmittableResult`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | [`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md) |
| `amount` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |

#### Returns

`Promise`<`SubmittableExtrinsic`<``"promise"``, `ISubmittableResult`\>\>

#### Defined in

[src/parachain/issue.ts:247](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/issue.ts#L247)

___

### <a id="execute" name="execute"></a> execute

▸ **execute**(`requestId`, `btcTxId?`, `merkleProof?`, `rawTx?`): `Promise`<`void`\>

Send an issue execution transaction

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

[IssueAPI](/interfaces/IssueAPI.md).[execute](/interfaces/IssueAPI.md#execute)

#### Defined in

[src/parachain/issue.ts:290](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/issue.ts#L290)

___

### <a id="getaccount" name="getaccount"></a> getAccount

▸ **getAccount**(): `undefined` \| `AddressOrPair`

#### Returns

`undefined` \| `AddressOrPair`

#### Implementation of

[IssueAPI](/interfaces/IssueAPI.md).[getAccount](/interfaces/IssueAPI.md#getaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[getAccount](/classes/DefaultTransactionAPI.md#getaccount)

#### Defined in

[src/parachain/transaction.ts:26](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/transaction.ts#L26)

___

### <a id="getfeerate" name="getfeerate"></a> getFeeRate

▸ **getFeeRate**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

The fee charged for issuing. For instance, "0.005" stands for 0.5%

#### Implementation of

[IssueAPI](/interfaces/IssueAPI.md).[getFeeRate](/interfaces/IssueAPI.md#getfeerate)

#### Defined in

[src/parachain/issue.ts:334](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/issue.ts#L334)

___

### <a id="getfeestopay" name="getfeestopay"></a> getFeesToPay

▸ **getFeesToPay**(`amount`): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

The fees, in BTC

#### Implementation of

[IssueAPI](/interfaces/IssueAPI.md).[getFeesToPay](/interfaces/IssueAPI.md#getfeestopay)

#### Defined in

[src/parachain/issue.ts:327](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/issue.ts#L327)

___

### <a id="getissueidsfromevents" name="getissueidsfromevents"></a> getIssueIdsFromEvents

▸ `Private` **getIssueIdsFromEvents**(`events`): `Hash`[]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `events` | `EventRecord`[] | The EventRecord array returned after sending an issue request transaction |

#### Returns

`Hash`[]

The issueId associated with the request. If the EventRecord array does not
contain issue request events, the function throws an error.

#### Defined in

[src/parachain/issue.ts:188](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/issue.ts#L188)

___

### <a id="getissueperiod" name="getissueperiod"></a> getIssuePeriod

▸ **getIssuePeriod**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

The time difference in number of blocks between an issue request is created
and required completion time by a user. The issue period has an upper limit
to prevent griefing of vault collateral.

#### Implementation of

[IssueAPI](/interfaces/IssueAPI.md).[getIssuePeriod](/interfaces/IssueAPI.md#getissueperiod)

#### Defined in

[src/parachain/issue.ts:309](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/issue.ts#L309)

___

### <a id="getrequestbyid" name="getrequestbyid"></a> getRequestById

▸ **getRequestById**(`issueId`): `Promise`<[`Issue`](/interfaces/Issue.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `issueId` | `string` \| `H256` |

#### Returns

`Promise`<[`Issue`](/interfaces/Issue.md)\>

An issue request object

#### Implementation of

[IssueAPI](/interfaces/IssueAPI.md).[getRequestById](/interfaces/IssueAPI.md#getrequestbyid)

#### Defined in

[src/parachain/issue.ts:340](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/issue.ts#L340)

___

### <a id="getrequestlimits" name="getrequestlimits"></a> getRequestLimits

▸ **getRequestLimits**(`vaults?`): `Promise`<`IssueLimits`\>

Gets the threshold for issuing with a single vault, and the maximum total
issue request size. Additionally passes the list of vaults for caching.

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaults?` | `Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\> |

#### Returns

`Promise`<`IssueLimits`\>

An object of type {singleVault, maxTotal, vaultsCache}

#### Implementation of

[IssueAPI](/interfaces/IssueAPI.md).[getRequestLimits](/interfaces/IssueAPI.md#getrequestlimits)

#### Defined in

[src/parachain/issue.ts:162](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/issue.ts#L162)

___

### <a id="getrequestsbyids" name="getrequestsbyids"></a> getRequestsByIds

▸ **getRequestsByIds**(`issueIds`): `Promise`<[`Issue`](/interfaces/Issue.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `issueIds` | (`string` \| `H256`)[] |

#### Returns

`Promise`<[`Issue`](/interfaces/Issue.md)[]\>

The issue request objects

#### Implementation of

[IssueAPI](/interfaces/IssueAPI.md).[getRequestsByIds](/interfaces/IssueAPI.md#getrequestsbyids)

#### Defined in

[src/parachain/issue.ts:344](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/issue.ts#L344)

___

### <a id="list" name="list"></a> list

▸ **list**(): `Promise`<[`Issue`](/interfaces/Issue.md)[]\>

#### Returns

`Promise`<[`Issue`](/interfaces/Issue.md)[]\>

An array containing the issue requests

#### Implementation of

[IssueAPI](/interfaces/IssueAPI.md).[list](/interfaces/IssueAPI.md#list)

#### Defined in

[src/parachain/issue.ts:314](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/issue.ts#L314)

___

### <a id="request" name="request"></a> request

▸ **request**(`amount`, `vaultAccountId?`, `collateralCurrencyIdLiteral?`, `atomic?`, `retries?`, `cachedVaults?`): `Promise`<[`Issue`](/interfaces/Issue.md)[]\>

Request issuing wrapped tokens (e.g. interBTC, kBTC).

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> | `undefined` |
| `vaultAccountId?` | `AccountId` | `undefined` |
| `collateralCurrencyIdLiteral?` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) | `undefined` |
| `atomic` | `boolean` | `true` |
| `retries` | `number` | `0` |
| `cachedVaults?` | `Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\> | `undefined` |

#### Returns

`Promise`<[`Issue`](/interfaces/Issue.md)[]\>

An array of type {issueId, issueRequest} if the requests succeeded. The function throws an error otherwise.

#### Implementation of

[IssueAPI](/interfaces/IssueAPI.md).[request](/interfaces/IssueAPI.md#request)

#### Defined in

[src/parachain/issue.ts:192](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/issue.ts#L192)

___

### <a id="requestadvanced" name="requestadvanced"></a> requestAdvanced

▸ **requestAdvanced**(`amountsPerVault`, `atomic`): `Promise`<[`Issue`](/interfaces/Issue.md)[]\>

Send a batch of aggregated issue transactions (to one or more vaults)

#### Parameters

| Name | Type |
| :------ | :------ |
| `amountsPerVault` | `Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\> |
| `atomic` | `boolean` |

#### Returns

`Promise`<[`Issue`](/interfaces/Issue.md)[]\>

An array of `Issue` objects, if the requests succeeded.

#### Implementation of

[IssueAPI](/interfaces/IssueAPI.md).[requestAdvanced](/interfaces/IssueAPI.md#requestadvanced)

#### Defined in

[src/parachain/issue.ts:263](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/issue.ts#L263)

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

[IssueAPI](/interfaces/IssueAPI.md).[sendLogged](/interfaces/IssueAPI.md#sendlogged)

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

[IssueAPI](/interfaces/IssueAPI.md).[setAccount](/interfaces/IssueAPI.md#setaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[setAccount](/classes/DefaultTransactionAPI.md#setaccount)

#### Defined in

[src/parachain/transaction.ts:22](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/transaction.ts#L22)

___

### <a id="setissueperiod" name="setissueperiod"></a> setIssuePeriod

▸ **setIssuePeriod**(`blocks`): `Promise`<`void`\>

**`remarks`** Testnet utility function

#### Parameters

| Name | Type |
| :------ | :------ |
| `blocks` | `number` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IssueAPI](/interfaces/IssueAPI.md).[setIssuePeriod](/interfaces/IssueAPI.md#setissueperiod)

#### Defined in

[src/parachain/issue.ts:303](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/issue.ts#L303)

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
