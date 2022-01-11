[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / OracleAPI

# Interface: OracleAPI

## Hierarchy

- [`TransactionAPI`](/interfaces/TransactionAPI.md)

  ↳ **`OracleAPI`**

## Implemented by

- [`DefaultOracleAPI`](/classes/DefaultOracleAPI.md)

## Table of contents

### Methods

- [convertCollateralToWrapped](/interfaces/OracleAPI.md#convertcollateraltowrapped)
- [convertWrappedToCollateral](/interfaces/OracleAPI.md#convertwrappedtocollateral)
- [getAccount](/interfaces/OracleAPI.md#getaccount)
- [getBitcoinFees](/interfaces/OracleAPI.md#getbitcoinfees)
- [getExchangeRate](/interfaces/OracleAPI.md#getexchangerate)
- [getOnlineTimeout](/interfaces/OracleAPI.md#getonlinetimeout)
- [getRawValuesUpdated](/interfaces/OracleAPI.md#getrawvaluesupdated)
- [getSourcesById](/interfaces/OracleAPI.md#getsourcesbyid)
- [getValidUntil](/interfaces/OracleAPI.md#getvaliduntil)
- [isOnline](/interfaces/OracleAPI.md#isonline)
- [sendLogged](/interfaces/OracleAPI.md#sendlogged)
- [setAccount](/interfaces/OracleAPI.md#setaccount)
- [setBitcoinFees](/interfaces/OracleAPI.md#setbitcoinfees)
- [setExchangeRate](/interfaces/OracleAPI.md#setexchangerate)
- [waitForExchangeRateUpdate](/interfaces/OracleAPI.md#waitforexchangerateupdate)
- [waitForFeeEstimateUpdate](/interfaces/OracleAPI.md#waitforfeeestimateupdate)

## Methods

### <a id="convertcollateraltowrapped" name="convertcollateraltowrapped"></a> convertCollateralToWrapped

▸ **convertCollateralToWrapped**<`C`\>(`amount`, `wrappedCurrency`): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> | The amount of collateral tokens to convert |
| `wrappedCurrency` | `Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\> | - |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

Converted value

#### Defined in

[src/parachain/oracle.ts:84](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/oracle.ts#L84)

___

### <a id="convertwrappedtocollateral" name="convertwrappedtocollateral"></a> convertWrappedToCollateral

▸ **convertWrappedToCollateral**<`C`\>(`amount`, `collateralCurrency`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> | The amount of wrapped tokens to convert |
| `collateralCurrency` | `Currency`<`C`\> | A `Monetary.js` object |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

Converted value

#### Defined in

[src/parachain/oracle.ts:75](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/oracle.ts#L75)

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

### <a id="getbitcoinfees" name="getbitcoinfees"></a> getBitcoinFees

▸ **getBitcoinFees**(): `Promise`<`Big`\>

Obtains the current fees for BTC transactions, in satoshi/byte.

#### Returns

`Promise`<`Big`\>

Big value for the current inclusion fees.

#### Defined in

[src/parachain/oracle.ts:45](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/oracle.ts#L45)

___

### <a id="getexchangerate" name="getexchangerate"></a> getExchangeRate

▸ **getExchangeRate**<`C`\>(`collateralCurrency`, `wrappedCurrency?`): `Promise`<`ExchangeRate`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }, `Currency`<`C`\>, `C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collateralCurrency` | `Currency`<`C`\> | - |
| `wrappedCurrency?` | `Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\> | The wrapped currency to use in the returned exchange rate type, defaults to `Bitcoin` |

#### Returns

`Promise`<`ExchangeRate`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }, `Currency`<`C`\>, `C`\>\>

The exchange rate between Bitcoin and the provided collateral currency

#### Defined in

[src/parachain/oracle.ts:37](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/oracle.ts#L37)

___

### <a id="getonlinetimeout" name="getonlinetimeout"></a> getOnlineTimeout

▸ **getOnlineTimeout**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

The period of time (in milliseconds) after an oracle's last submission
during which it is considered online

#### Defined in

[src/parachain/oracle.ts:92](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/oracle.ts#L92)

___

### <a id="getrawvaluesupdated" name="getrawvaluesupdated"></a> getRawValuesUpdated

▸ **getRawValuesUpdated**(`key`): `Promise`<`boolean`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `InterbtcPrimitivesOracleKey` | A key defining an exchange rate or a BTC network fee estimate |

#### Returns

`Promise`<`boolean`\>

Whether the oracle entr for the given key has been updated

#### Defined in

[src/parachain/oracle.ts:97](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/oracle.ts#L97)

___

### <a id="getsourcesbyid" name="getsourcesbyid"></a> getSourcesById

▸ **getSourcesById**(): `Promise`<`Map`<`string`, `string`\>\>

#### Returns

`Promise`<`Map`<`string`, `string`\>\>

A map from the oracle's account id to its name

#### Defined in

[src/parachain/oracle.ts:53](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/oracle.ts#L53)

___

### <a id="getvaliduntil" name="getvaliduntil"></a> getValidUntil

▸ **getValidUntil**<`U`\>(`counterCurrency`): `Promise`<`Date`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `counterCurrency` | `Currency`<`U`\> |

#### Returns

`Promise`<`Date`\>

Last exchange rate time

#### Defined in

[src/parachain/oracle.ts:49](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/oracle.ts#L49)

___

### <a id="isonline" name="isonline"></a> isOnline

▸ **isOnline**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

Boolean value indicating whether the oracle is online

#### Defined in

[src/parachain/oracle.ts:57](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/oracle.ts#L57)

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

### <a id="setbitcoinfees" name="setbitcoinfees"></a> setBitcoinFees

▸ **setBitcoinFees**(`fees`): `Promise`<`void`\>

Send a transaction to set the current fee estimate for BTC transactions

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fees` | `Big` | Estimated Satoshis per bytes to get a transaction included |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/oracle.ts:69](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/oracle.ts#L69)

___

### <a id="setexchangerate" name="setexchangerate"></a> setExchangeRate

▸ **setExchangeRate**<`C`\>(`exchangeRate`): `Promise`<`void`\>

Send a transaction to set the exchange rate between Bitcoin and a collateral currency

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `exchangeRate` | `ExchangeRate`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }, `Currency`<`C`\>, `C`\> | The rate to set |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/oracle.ts:62](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/oracle.ts#L62)

___

### <a id="waitforexchangerateupdate" name="waitforexchangerateupdate"></a> waitForExchangeRateUpdate

▸ **waitForExchangeRateUpdate**<`C`, `U`\>(`exchangeRate`): `Promise`<`void`\>

**`remark`** Awaits an oracle update to the exchange rate

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |
| `U` | extends `Object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `exchangeRate` | `ExchangeRate`<`Currency`<`U`\>, `U`, `Currency`<`C`\>, `C`\> | The exchange rate whose counter currency to await an update for (with respect to BTC) |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/oracle.ts:108](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/oracle.ts#L108)

___

### <a id="waitforfeeestimateupdate" name="waitforfeeestimateupdate"></a> waitForFeeEstimateUpdate

▸ **waitForFeeEstimateUpdate**(`type?`): `Promise`<`void`\>

**`remark`** Awaits an oracle update to the BTC inclusion fee

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type?` | `FeeEstimationType` | The fee estimate type whose update is awaited |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/oracle.ts:102](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/oracle.ts#L102)
