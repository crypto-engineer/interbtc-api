[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / DefaultSystemAPI

# Class: DefaultSystemAPI

## Hierarchy

- [`DefaultTransactionAPI`](/classes/DefaultTransactionAPI.md)

  ↳ **`DefaultSystemAPI`**

## Implements

- [`SystemAPI`](/interfaces/SystemAPI.md)

## Table of contents

### Constructors

- [constructor](/classes/DefaultSystemAPI.md#constructor)

### Properties

- [api](/classes/DefaultSystemAPI.md#api)

### Methods

- [getAccount](/classes/DefaultSystemAPI.md#getaccount)
- [getCurrentActiveBlockNumber](/classes/DefaultSystemAPI.md#getcurrentactiveblocknumber)
- [getCurrentBlockNumber](/classes/DefaultSystemAPI.md#getcurrentblocknumber)
- [getStatusCode](/classes/DefaultSystemAPI.md#getstatuscode)
- [sendLogged](/classes/DefaultSystemAPI.md#sendlogged)
- [setAccount](/classes/DefaultSystemAPI.md#setaccount)
- [setCode](/classes/DefaultSystemAPI.md#setcode)
- [subscribeToFinalizedBlockHeads](/classes/DefaultSystemAPI.md#subscribetofinalizedblockheads)
- [doesArrayContainEvent](/classes/DefaultSystemAPI.md#doesarraycontainevent)
- [isDispatchError](/classes/DefaultSystemAPI.md#isdispatcherror)
- [printEvents](/classes/DefaultSystemAPI.md#printevents)
- [waitForEvent](/classes/DefaultSystemAPI.md#waitforevent)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new DefaultSystemAPI**(`api`, `account?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `account?` | `AddressOrPair` |

#### Overrides

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[constructor](/classes/DefaultTransactionAPI.md#constructor)

#### Defined in

[src/parachain/system.ts:40](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/system.ts#L40)

## Properties

### <a id="api" name="api"></a> api

• **api**: `ApiPromise`

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[api](/classes/DefaultTransactionAPI.md#api)

## Methods

### <a id="getaccount" name="getaccount"></a> getAccount

▸ **getAccount**(): `undefined` \| `AddressOrPair`

#### Returns

`undefined` \| `AddressOrPair`

#### Implementation of

[SystemAPI](/interfaces/SystemAPI.md).[getAccount](/interfaces/SystemAPI.md#getaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[getAccount](/classes/DefaultTransactionAPI.md#getaccount)

#### Defined in

[src/parachain/transaction.ts:26](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/transaction.ts#L26)

___

### <a id="getcurrentactiveblocknumber" name="getcurrentactiveblocknumber"></a> getCurrentActiveBlockNumber

▸ **getCurrentActiveBlockNumber**(`atBlock?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `atBlock?` | `BlockHash` |

#### Returns

`Promise`<`number`\>

The current active block number being processed.

#### Implementation of

[SystemAPI](/interfaces/SystemAPI.md).[getCurrentActiveBlockNumber](/interfaces/SystemAPI.md#getcurrentactiveblocknumber)

#### Defined in

[src/parachain/system.ts:49](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/system.ts#L49)

___

### <a id="getcurrentblocknumber" name="getcurrentblocknumber"></a> getCurrentBlockNumber

▸ **getCurrentBlockNumber**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

The current block number being processed.

#### Implementation of

[SystemAPI](/interfaces/SystemAPI.md).[getCurrentBlockNumber](/interfaces/SystemAPI.md#getcurrentblocknumber)

#### Defined in

[src/parachain/system.ts:44](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/system.ts#L44)

___

### <a id="getstatuscode" name="getstatuscode"></a> getStatusCode

▸ **getStatusCode**(): `Promise`<[`SecurityStatusCode`](/interfaces/SecurityStatusCode.md)\>

#### Returns

`Promise`<[`SecurityStatusCode`](/interfaces/SecurityStatusCode.md)\>

The parachain status code object.

#### Implementation of

[SystemAPI](/interfaces/SystemAPI.md).[getStatusCode](/interfaces/SystemAPI.md#getstatuscode)

#### Defined in

[src/parachain/system.ts:61](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/system.ts#L61)

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

[SystemAPI](/interfaces/SystemAPI.md).[sendLogged](/interfaces/SystemAPI.md#sendlogged)

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

[SystemAPI](/interfaces/SystemAPI.md).[setAccount](/interfaces/SystemAPI.md#setaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[setAccount](/classes/DefaultTransactionAPI.md#setaccount)

#### Defined in

[src/parachain/transaction.ts:22](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/transaction.ts#L22)

___

### <a id="setcode" name="setcode"></a> setCode

▸ **setCode**(`code`): `Promise`<`void`\>

**`remarks`** Upgrades runtime using `sudoUncheckedWeight`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[SystemAPI](/interfaces/SystemAPI.md).[setCode](/interfaces/SystemAPI.md#setcode)

#### Defined in

[src/parachain/system.ts:66](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/system.ts#L66)

___

### <a id="subscribetofinalizedblockheads" name="subscribetofinalizedblockheads"></a> subscribeToFinalizedBlockHeads

▸ **subscribeToFinalizedBlockHeads**(`callback`): `Promise`<() => `void`\>

On every new parachain block, call the callback function with the new block header

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`blockHeader`: `Header`) => `void` |

#### Returns

`Promise`<() => `void`\>

#### Implementation of

[SystemAPI](/interfaces/SystemAPI.md).[subscribeToFinalizedBlockHeads](/interfaces/SystemAPI.md#subscribetofinalizedblockheads)

#### Defined in

[src/parachain/system.ts:54](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/system.ts#L54)

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
