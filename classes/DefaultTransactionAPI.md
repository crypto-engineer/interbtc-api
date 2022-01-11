[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / DefaultTransactionAPI

# Class: DefaultTransactionAPI

## Hierarchy

- **`DefaultTransactionAPI`**

  ↳ [`DefaultVaultsAPI`](/classes/DefaultVaultsAPI.md)

  ↳ [`DefaultIssueAPI`](/classes/DefaultIssueAPI.md)

  ↳ [`DefaultRedeemAPI`](/classes/DefaultRedeemAPI.md)

  ↳ [`DefaultRefundAPI`](/classes/DefaultRefundAPI.md)

  ↳ [`DefaultOracleAPI`](/classes/DefaultOracleAPI.md)

  ↳ [`DefaultTokensAPI`](/classes/DefaultTokensAPI.md)

  ↳ [`DefaultSystemAPI`](/classes/DefaultSystemAPI.md)

  ↳ [`DefaultReplaceAPI`](/classes/DefaultReplaceAPI.md)

  ↳ [`DefaultNominationAPI`](/classes/DefaultNominationAPI.md)

## Table of contents

### Constructors

- [constructor](/classes/DefaultTransactionAPI.md#constructor)

### Properties

- [api](/classes/DefaultTransactionAPI.md#api)

### Methods

- [getAccount](/classes/DefaultTransactionAPI.md#getaccount)
- [sendLogged](/classes/DefaultTransactionAPI.md#sendlogged)
- [setAccount](/classes/DefaultTransactionAPI.md#setaccount)
- [doesArrayContainEvent](/classes/DefaultTransactionAPI.md#doesarraycontainevent)
- [isDispatchError](/classes/DefaultTransactionAPI.md#isdispatcherror)
- [printEvents](/classes/DefaultTransactionAPI.md#printevents)
- [waitForEvent](/classes/DefaultTransactionAPI.md#waitforevent)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new DefaultTransactionAPI**(`api`, `account?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `account?` | `AddressOrPair` |

#### Defined in

[src/parachain/transaction.ts:20](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/transaction.ts#L20)

## Properties

### <a id="api" name="api"></a> api

• **api**: `ApiPromise`

## Methods

### <a id="getaccount" name="getaccount"></a> getAccount

▸ **getAccount**(): `undefined` \| `AddressOrPair`

#### Returns

`undefined` \| `AddressOrPair`

#### Defined in

[src/parachain/transaction.ts:26](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/transaction.ts#L26)

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

#### Defined in

[src/parachain/transaction.ts:108](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/transaction.ts#L108)
