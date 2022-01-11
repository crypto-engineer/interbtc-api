[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / DefaultRefundAPI

# Class: DefaultRefundAPI

## Hierarchy

- [`DefaultTransactionAPI`](/classes/DefaultTransactionAPI.md)

  ↳ **`DefaultRefundAPI`**

## Implements

- [`RefundAPI`](/interfaces/RefundAPI.md)

## Table of contents

### Constructors

- [constructor](/classes/DefaultRefundAPI.md#constructor)

### Properties

- [api](/classes/DefaultRefundAPI.md#api)

### Methods

- [execute](/classes/DefaultRefundAPI.md#execute)
- [getAccount](/classes/DefaultRefundAPI.md#getaccount)
- [getRequestById](/classes/DefaultRefundAPI.md#getrequestbyid)
- [getRequestByIssueId](/classes/DefaultRefundAPI.md#getrequestbyissueid)
- [list](/classes/DefaultRefundAPI.md#list)
- [sendLogged](/classes/DefaultRefundAPI.md#sendlogged)
- [setAccount](/classes/DefaultRefundAPI.md#setaccount)
- [doesArrayContainEvent](/classes/DefaultRefundAPI.md#doesarraycontainevent)
- [isDispatchError](/classes/DefaultRefundAPI.md#isdispatcherror)
- [printEvents](/classes/DefaultRefundAPI.md#printevents)
- [waitForEvent](/classes/DefaultRefundAPI.md#waitforevent)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new DefaultRefundAPI**(`api`, `btcNetwork`, `electrsAPI`, `wrappedCurrency`, `account?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `btcNetwork` | [`Network`](/interfaces/bitcoin.networks.Network.md) |
| `electrsAPI` | [`ElectrsAPI`](/interfaces/ElectrsAPI.md) |
| `wrappedCurrency` | `Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |
| `account?` | `AddressOrPair` |

#### Overrides

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[constructor](/classes/DefaultTransactionAPI.md#constructor)

#### Defined in

[src/parachain/refund.ts:43](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/refund.ts#L43)

## Properties

### <a id="api" name="api"></a> api

• **api**: `ApiPromise`

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[api](/classes/DefaultTransactionAPI.md#api)

## Methods

### <a id="execute" name="execute"></a> execute

▸ **execute**(`requestId`, `btcTxId?`, `merkleProof?`, `rawTx?`): `Promise`<`void`\>

Execute a refund request

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

[RefundAPI](/interfaces/RefundAPI.md).[execute](/interfaces/RefundAPI.md#execute)

#### Defined in

[src/parachain/refund.ts:53](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/refund.ts#L53)

___

### <a id="getaccount" name="getaccount"></a> getAccount

▸ **getAccount**(): `undefined` \| `AddressOrPair`

#### Returns

`undefined` \| `AddressOrPair`

#### Implementation of

[RefundAPI](/interfaces/RefundAPI.md).[getAccount](/interfaces/RefundAPI.md#getaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[getAccount](/classes/DefaultTransactionAPI.md#getaccount)

#### Defined in

[src/parachain/transaction.ts:26](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/transaction.ts#L26)

___

### <a id="getrequestbyid" name="getrequestbyid"></a> getRequestById

▸ **getRequestById**(`refundId`): `Promise`<[`RefundRequestExt`](/interfaces/RefundRequestExt.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refundId` | `H256` |

#### Returns

`Promise`<[`RefundRequestExt`](/interfaces/RefundRequestExt.md)\>

A refund object

#### Implementation of

[RefundAPI](/interfaces/RefundAPI.md).[getRequestById](/interfaces/RefundAPI.md#getrequestbyid)

#### Defined in

[src/parachain/refund.ts:68](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/refund.ts#L68)

___

### <a id="getrequestbyissueid" name="getrequestbyissueid"></a> getRequestByIssueId

▸ **getRequestByIssueId**(`issueId`): `Promise`<[`RefundRequestExt`](/interfaces/RefundRequestExt.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `issueId` | `string` |

#### Returns

`Promise`<[`RefundRequestExt`](/interfaces/RefundRequestExt.md)\>

A refund request object

#### Implementation of

[RefundAPI](/interfaces/RefundAPI.md).[getRequestByIssueId](/interfaces/RefundAPI.md#getrequestbyissueid)

#### Defined in

[src/parachain/refund.ts:81](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/refund.ts#L81)

___

### <a id="list" name="list"></a> list

▸ **list**(): `Promise`<[`RefundRequestExt`](/interfaces/RefundRequestExt.md)[]\>

#### Returns

`Promise`<[`RefundRequestExt`](/interfaces/RefundRequestExt.md)[]\>

An array containing the refund requests

#### Implementation of

[RefundAPI](/interfaces/RefundAPI.md).[list](/interfaces/RefundAPI.md#list)

#### Defined in

[src/parachain/refund.ts:60](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/refund.ts#L60)

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

[RefundAPI](/interfaces/RefundAPI.md).[sendLogged](/interfaces/RefundAPI.md#sendlogged)

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

[RefundAPI](/interfaces/RefundAPI.md).[setAccount](/interfaces/RefundAPI.md#setaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[setAccount](/classes/DefaultTransactionAPI.md#setaccount)

#### Defined in

[src/parachain/transaction.ts:22](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/transaction.ts#L22)

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
