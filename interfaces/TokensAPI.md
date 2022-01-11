[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / TokensAPI

# Interface: TokensAPI

## Hierarchy

- [`TransactionAPI`](/interfaces/TransactionAPI.md)

  ↳ **`TokensAPI`**

## Implemented by

- [`DefaultTokensAPI`](/classes/DefaultTokensAPI.md)

## Table of contents

### Methods

- [balance](/interfaces/TokensAPI.md#balance)
- [balanceLocked](/interfaces/TokensAPI.md#balancelocked)
- [getAccount](/interfaces/TokensAPI.md#getaccount)
- [sendLogged](/interfaces/TokensAPI.md#sendlogged)
- [setAccount](/interfaces/TokensAPI.md#setaccount)
- [subscribeToBalance](/interfaces/TokensAPI.md#subscribetobalance)
- [total](/interfaces/TokensAPI.md#total)
- [transfer](/interfaces/TokensAPI.md#transfer)

## Methods

### <a id="balance" name="balance"></a> balance

▸ **balance**<`U`\>(`currency`, `id`): `Promise`<`MonetaryAmount`<`Currency`<`U`\>, `U`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `currency` | `Currency`<`U`\> | The currency specification, a `Monetary.js` object |
| `id` | `AccountId` | The AccountId of a user |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`U`\>, `U`\>\>

The user's free balance

#### Defined in

[src/parachain/tokens.ts:25](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/tokens.ts#L25)

___

### <a id="balancelocked" name="balancelocked"></a> balanceLocked

▸ **balanceLocked**<`U`\>(`currency`, `id`): `Promise`<`MonetaryAmount`<`Currency`<`U`\>, `U`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `currency` | `Currency`<`U`\> | The currency specification, a `Monetary.js` object |
| `id` | `AccountId` | The AccountId of a user |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`U`\>, `U`\>\>

The user's locked balance

#### Defined in

[src/parachain/tokens.ts:31](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/tokens.ts#L31)

___

### <a id="getaccount" name="getaccount"></a> getAccount

▸ **getAccount**(): `undefined` \| `AddressOrPair`

#### Returns

`undefined` \| `AddressOrPair`

#### Inherited from

[TransactionAPI](/interfaces/TransactionAPI.md).[getAccount](/interfaces/TransactionAPI.md#getaccount)

#### Defined in

[src/parachain/transaction.ts:12](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/transaction.ts#L12)

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

#### Inherited from

[TransactionAPI](/interfaces/TransactionAPI.md).[sendLogged](/interfaces/TransactionAPI.md#sendlogged)

#### Defined in

[src/parachain/transaction.ts:13](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/transaction.ts#L13)

___

### <a id="setaccount" name="setaccount"></a> setAccount

▸ **setAccount**(`account`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `AddressOrPair` |

#### Returns

`void`

#### Inherited from

[TransactionAPI](/interfaces/TransactionAPI.md).[setAccount](/interfaces/TransactionAPI.md#setaccount)

#### Defined in

[src/parachain/transaction.ts:11](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/transaction.ts#L11)

___

### <a id="subscribetobalance" name="subscribetobalance"></a> subscribeToBalance

▸ **subscribeToBalance**<`U`\>(`currency`, `account`, `callback`): `Promise`<() => `void`\>

Subscribe to balance updates

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `currency` | `Currency`<`U`\> | The currency specification, a `Monetary.js` object |
| `account` | `string` | AccountId string |
| `callback` | (`account`: `string`, `balance`: `MonetaryAmount`<`Currency`<`U`\>, `U`\>) => `void` | Function to be called whenever the balance of an account is updated. Its parameters are (accountIdString, freeBalance) |

#### Returns

`Promise`<() => `void`\>

#### Defined in

[src/parachain/tokens.ts:47](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/tokens.ts#L47)

___

### <a id="total" name="total"></a> total

▸ **total**<`U`\>(`currency`): `Promise`<`MonetaryAmount`<`Currency`<`U`\>, `U`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `currency` | `Currency`<`U`\> | The currency specification, a `Monetary.js` object |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`U`\>, `U`\>\>

The total amount in the system

#### Defined in

[src/parachain/tokens.ts:19](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/tokens.ts#L19)

___

### <a id="transfer" name="transfer"></a> transfer

▸ **transfer**<`U`\>(`destination`, `amount`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destination` | `string` | The address of a user |
| `amount` | `MonetaryAmount`<`Currency`<`U`\>, `U`\> | The amount to transfer, as a `Monetary.js` object |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/tokens.ts:39](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/tokens.ts#L39)
