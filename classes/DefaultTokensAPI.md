[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / DefaultTokensAPI

# Class: DefaultTokensAPI

## Hierarchy

- [`DefaultTransactionAPI`](/classes/DefaultTransactionAPI.md)

  ↳ **`DefaultTokensAPI`**

## Implements

- [`TokensAPI`](/interfaces/TokensAPI.md)

## Table of contents

### Constructors

- [constructor](/classes/DefaultTokensAPI.md#constructor)

### Properties

- [api](/classes/DefaultTokensAPI.md#api)

### Methods

- [balance](/classes/DefaultTokensAPI.md#balance)
- [balanceLocked](/classes/DefaultTokensAPI.md#balancelocked)
- [getAccount](/classes/DefaultTokensAPI.md#getaccount)
- [getAccountData](/classes/DefaultTokensAPI.md#getaccountdata)
- [sendLogged](/classes/DefaultTokensAPI.md#sendlogged)
- [setAccount](/classes/DefaultTokensAPI.md#setaccount)
- [subscribeToBalance](/classes/DefaultTokensAPI.md#subscribetobalance)
- [total](/classes/DefaultTokensAPI.md#total)
- [transfer](/classes/DefaultTokensAPI.md#transfer)
- [doesArrayContainEvent](/classes/DefaultTokensAPI.md#doesarraycontainevent)
- [isDispatchError](/classes/DefaultTokensAPI.md#isdispatcherror)
- [printEvents](/classes/DefaultTokensAPI.md#printevents)
- [waitForEvent](/classes/DefaultTokensAPI.md#waitforevent)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new DefaultTokensAPI**(`api`, `account?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `account?` | `AddressOrPair` |

#### Overrides

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[constructor](/classes/DefaultTransactionAPI.md#constructor)

#### Defined in

[src/parachain/tokens.ts:55](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/tokens.ts#L55)

## Properties

### <a id="api" name="api"></a> api

• **api**: `ApiPromise`

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[api](/classes/DefaultTransactionAPI.md#api)

## Methods

### <a id="balance" name="balance"></a> balance

▸ **balance**<`U`\>(`currency`, `id`): `Promise`<`MonetaryAmount`<`Currency`<`U`\>, `U`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `currency` | `Currency`<`U`\> |
| `id` | `AccountId` |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`U`\>, `U`\>\>

The user's free balance

#### Implementation of

[TokensAPI](/interfaces/TokensAPI.md).[balance](/interfaces/TokensAPI.md#balance)

#### Defined in

[src/parachain/tokens.ts:74](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/tokens.ts#L74)

___

### <a id="balancelocked" name="balancelocked"></a> balanceLocked

▸ **balanceLocked**<`U`\>(`currency`, `id`): `Promise`<`MonetaryAmount`<`Currency`<`U`\>, `U`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `currency` | `Currency`<`U`\> |
| `id` | `AccountId` |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`U`\>, `U`\>\>

The user's locked balance

#### Implementation of

[TokensAPI](/interfaces/TokensAPI.md).[balanceLocked](/interfaces/TokensAPI.md#balancelocked)

#### Defined in

[src/parachain/tokens.ts:82](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/tokens.ts#L82)

___

### <a id="getaccount" name="getaccount"></a> getAccount

▸ **getAccount**(): `undefined` \| `AddressOrPair`

#### Returns

`undefined` \| `AddressOrPair`

#### Implementation of

[TokensAPI](/interfaces/TokensAPI.md).[getAccount](/interfaces/TokensAPI.md#getaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[getAccount](/classes/DefaultTransactionAPI.md#getaccount)

#### Defined in

[src/parachain/transaction.ts:26](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/transaction.ts#L26)

___

### <a id="getaccountdata" name="getaccountdata"></a> getAccountData

▸ **getAccountData**<`U`\>(`currency`, `id`): `Promise`<`OrmlTokensAccountData`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `currency` | `Currency`<`U`\> |
| `id` | `AccountId` |

#### Returns

`Promise`<`OrmlTokensAccountData`\>

#### Defined in

[src/parachain/tokens.ts:66](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/tokens.ts#L66)

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

[TokensAPI](/interfaces/TokensAPI.md).[sendLogged](/interfaces/TokensAPI.md#sendlogged)

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

[TokensAPI](/interfaces/TokensAPI.md).[setAccount](/interfaces/TokensAPI.md#setaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[setAccount](/classes/DefaultTransactionAPI.md#setaccount)

#### Defined in

[src/parachain/transaction.ts:22](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/transaction.ts#L22)

___

### <a id="subscribetobalance" name="subscribetobalance"></a> subscribeToBalance

▸ **subscribeToBalance**<`U`\>(`currency`, `account`, `callback`): `Promise`<() => `void`\>

Subscribe to balance updates

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `currency` | `Currency`<`U`\> |
| `account` | `string` |
| `callback` | (`account`: `string`, `balance`: `MonetaryAmount`<`Currency`<`U`\>, `U`\>) => `void` |

#### Returns

`Promise`<() => `void`\>

#### Implementation of

[TokensAPI](/interfaces/TokensAPI.md).[subscribeToBalance](/interfaces/TokensAPI.md#subscribetobalance)

#### Defined in

[src/parachain/tokens.ts:90](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/tokens.ts#L90)

___

### <a id="total" name="total"></a> total

▸ **total**<`U`\>(`currency`): `Promise`<`MonetaryAmount`<`Currency`<`U`\>, `U`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `currency` | `Currency`<`U`\> |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`U`\>, `U`\>\>

The total amount in the system

#### Implementation of

[TokensAPI](/interfaces/TokensAPI.md).[total](/interfaces/TokensAPI.md#total)

#### Defined in

[src/parachain/tokens.ts:59](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/tokens.ts#L59)

___

### <a id="transfer" name="transfer"></a> transfer

▸ **transfer**<`U`\>(`destination`, `amount`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | `string` |
| `amount` | `MonetaryAmount`<`Currency`<`U`\>, `U`\> |

#### Returns

`Promise`<`void`\>

#### Implementation of

[TokensAPI](/interfaces/TokensAPI.md).[transfer](/interfaces/TokensAPI.md#transfer)

#### Defined in

[src/parachain/tokens.ts:115](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/tokens.ts#L115)

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
