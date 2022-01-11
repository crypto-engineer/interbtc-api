[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / DefaultOracleAPI

# Class: DefaultOracleAPI

## Hierarchy

- [`DefaultTransactionAPI`](/classes/DefaultTransactionAPI.md)

  ↳ **`DefaultOracleAPI`**

## Implements

- [`OracleAPI`](/interfaces/OracleAPI.md)

## Table of contents

### Constructors

- [constructor](/classes/DefaultOracleAPI.md#constructor)

### Properties

- [api](/classes/DefaultOracleAPI.md#api)

### Methods

- [convertCollateralToWrapped](/classes/DefaultOracleAPI.md#convertcollateraltowrapped)
- [convertWrappedToCollateral](/classes/DefaultOracleAPI.md#convertwrappedtocollateral)
- [getAccount](/classes/DefaultOracleAPI.md#getaccount)
- [getBitcoinFees](/classes/DefaultOracleAPI.md#getbitcoinfees)
- [getExchangeRate](/classes/DefaultOracleAPI.md#getexchangerate)
- [getOnlineTimeout](/classes/DefaultOracleAPI.md#getonlinetimeout)
- [getRawValuesUpdated](/classes/DefaultOracleAPI.md#getrawvaluesupdated)
- [getSourcesById](/classes/DefaultOracleAPI.md#getsourcesbyid)
- [getValidUntil](/classes/DefaultOracleAPI.md#getvaliduntil)
- [hasOracleError](/classes/DefaultOracleAPI.md#hasoracleerror)
- [isOnline](/classes/DefaultOracleAPI.md#isonline)
- [sendLogged](/classes/DefaultOracleAPI.md#sendlogged)
- [setAccount](/classes/DefaultOracleAPI.md#setaccount)
- [setBitcoinFees](/classes/DefaultOracleAPI.md#setbitcoinfees)
- [setExchangeRate](/classes/DefaultOracleAPI.md#setexchangerate)
- [waitForExchangeRateUpdate](/classes/DefaultOracleAPI.md#waitforexchangerateupdate)
- [waitForFeeEstimateUpdate](/classes/DefaultOracleAPI.md#waitforfeeestimateupdate)
- [doesArrayContainEvent](/classes/DefaultOracleAPI.md#doesarraycontainevent)
- [isDispatchError](/classes/DefaultOracleAPI.md#isdispatcherror)
- [printEvents](/classes/DefaultOracleAPI.md#printevents)
- [waitForEvent](/classes/DefaultOracleAPI.md#waitforevent)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new DefaultOracleAPI**(`api`, `wrappedCurrency`, `account?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `wrappedCurrency` | `Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |
| `account?` | `AddressOrPair` |

#### Overrides

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[constructor](/classes/DefaultTransactionAPI.md#constructor)

#### Defined in

[src/parachain/oracle.ts:114](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/oracle.ts#L114)

## Properties

### <a id="api" name="api"></a> api

• **api**: `ApiPromise`

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[api](/classes/DefaultTransactionAPI.md#api)

## Methods

### <a id="convertcollateraltowrapped" name="convertcollateraltowrapped"></a> convertCollateralToWrapped

▸ **convertCollateralToWrapped**<`C`\>(`amount`): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

Converted value

#### Implementation of

[OracleAPI](/interfaces/OracleAPI.md).[convertCollateralToWrapped](/interfaces/OracleAPI.md#convertcollateraltowrapped)

#### Defined in

[src/parachain/oracle.ts:145](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/oracle.ts#L145)

___

### <a id="convertwrappedtocollateral" name="convertwrappedtocollateral"></a> convertWrappedToCollateral

▸ **convertWrappedToCollateral**<`C`\>(`amount`, `collateralCurrency`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |
| `collateralCurrency` | `Currency`<`C`\> |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

Converted value

#### Implementation of

[OracleAPI](/interfaces/OracleAPI.md).[convertWrappedToCollateral](/interfaces/OracleAPI.md#convertwrappedtocollateral)

#### Defined in

[src/parachain/oracle.ts:137](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/oracle.ts#L137)

___

### <a id="getaccount" name="getaccount"></a> getAccount

▸ **getAccount**(): `undefined` \| `AddressOrPair`

#### Returns

`undefined` \| `AddressOrPair`

#### Implementation of

[OracleAPI](/interfaces/OracleAPI.md).[getAccount](/interfaces/OracleAPI.md#getaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[getAccount](/classes/DefaultTransactionAPI.md#getaccount)

#### Defined in

[src/parachain/transaction.ts:26](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/transaction.ts#L26)

___

### <a id="getbitcoinfees" name="getbitcoinfees"></a> getBitcoinFees

▸ **getBitcoinFees**(): `Promise`<`Big`\>

Obtains the current fees for BTC transactions, in satoshi/byte.

#### Returns

`Promise`<`Big`\>

Big value for the current inclusion fees.

#### Implementation of

[OracleAPI](/interfaces/OracleAPI.md).[getBitcoinFees](/interfaces/OracleAPI.md#getbitcoinfees)

#### Defined in

[src/parachain/oracle.ts:173](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/oracle.ts#L173)

___

### <a id="getexchangerate" name="getexchangerate"></a> getExchangeRate

▸ **getExchangeRate**<`C`\>(`collateralCurrency`): `Promise`<`ExchangeRate`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }, `Currency`<`C`\>, `C`\>\>

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

The exchange rate between Bitcoin and the provided collateral currency

#### Implementation of

[OracleAPI](/interfaces/OracleAPI.md).[getExchangeRate](/interfaces/OracleAPI.md#getexchangerate)

#### Defined in

[src/parachain/oracle.ts:118](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/oracle.ts#L118)

___

### <a id="getonlinetimeout" name="getonlinetimeout"></a> getOnlineTimeout

▸ **getOnlineTimeout**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

The period of time (in milliseconds) after an oracle's last submission
during which it is considered online

#### Implementation of

[OracleAPI](/interfaces/OracleAPI.md).[getOnlineTimeout](/interfaces/OracleAPI.md#getonlinetimeout)

#### Defined in

[src/parachain/oracle.ts:152](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/oracle.ts#L152)

___

### <a id="getrawvaluesupdated" name="getrawvaluesupdated"></a> getRawValuesUpdated

▸ **getRawValuesUpdated**(`key`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `InterbtcPrimitivesOracleKey` |

#### Returns

`Promise`<`boolean`\>

Whether the oracle entr for the given key has been updated

#### Implementation of

[OracleAPI](/interfaces/OracleAPI.md).[getRawValuesUpdated](/interfaces/OracleAPI.md#getrawvaluesupdated)

#### Defined in

[src/parachain/oracle.ts:223](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/oracle.ts#L223)

___

### <a id="getsourcesbyid" name="getsourcesbyid"></a> getSourcesById

▸ **getSourcesById**(): `Promise`<`Map`<`string`, `string`\>\>

#### Returns

`Promise`<`Map`<`string`, `string`\>\>

A map from the oracle's account id to its name

#### Implementation of

[OracleAPI](/interfaces/OracleAPI.md).[getSourcesById](/interfaces/OracleAPI.md#getsourcesbyid)

#### Defined in

[src/parachain/oracle.ts:202](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/oracle.ts#L202)

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

#### Implementation of

[OracleAPI](/interfaces/OracleAPI.md).[getValidUntil](/interfaces/OracleAPI.md#getvaliduntil)

#### Defined in

[src/parachain/oracle.ts:210](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/oracle.ts#L210)

___

### <a id="hasoracleerror" name="hasoracleerror"></a> hasOracleError

▸ `Private` **hasOracleError**(`errors`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `errors` | `SecurityErrorCode`[] |

#### Returns

`boolean`

#### Defined in

[src/parachain/oracle.ts:245](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/oracle.ts#L245)

___

### <a id="isonline" name="isonline"></a> isOnline

▸ **isOnline**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

Boolean value indicating whether the oracle is online

#### Implementation of

[OracleAPI](/interfaces/OracleAPI.md).[isOnline](/interfaces/OracleAPI.md#isonline)

#### Defined in

[src/parachain/oracle.ts:217](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/oracle.ts#L217)

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

[OracleAPI](/interfaces/OracleAPI.md).[sendLogged](/interfaces/OracleAPI.md#sendlogged)

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

[OracleAPI](/interfaces/OracleAPI.md).[setAccount](/interfaces/OracleAPI.md#setaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[setAccount](/classes/DefaultTransactionAPI.md#setaccount)

#### Defined in

[src/parachain/transaction.ts:22](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/transaction.ts#L22)

___

### <a id="setbitcoinfees" name="setbitcoinfees"></a> setBitcoinFees

▸ **setBitcoinFees**(`fees`): `Promise`<`void`\>

Send a transaction to set the current fee estimate for BTC transactions

#### Parameters

| Name | Type |
| :------ | :------ |
| `fees` | `Big` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[OracleAPI](/interfaces/OracleAPI.md).[setBitcoinFees](/interfaces/OracleAPI.md#setbitcoinfees)

#### Defined in

[src/parachain/oracle.ts:189](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/oracle.ts#L189)

___

### <a id="setexchangerate" name="setexchangerate"></a> setExchangeRate

▸ **setExchangeRate**<`C`\>(`exchangeRate`): `Promise`<`void`\>

Send a transaction to set the exchange rate between Bitcoin and a collateral currency

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchangeRate` | `ExchangeRate`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }, `Currency`<`C`\>, `C`\> |

#### Returns

`Promise`<`void`\>

#### Implementation of

[OracleAPI](/interfaces/OracleAPI.md).[setExchangeRate](/interfaces/OracleAPI.md#setexchangerate)

#### Defined in

[src/parachain/oracle.ts:158](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/oracle.ts#L158)

___

### <a id="waitforexchangerateupdate" name="waitforexchangerateupdate"></a> waitForExchangeRateUpdate

▸ **waitForExchangeRateUpdate**<`C`, `U`\>(`exchangeRate`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |
| `U` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchangeRate` | `ExchangeRate`<`Currency`<`U`\>, `U`, `Currency`<`C`\>, `C`\> |

#### Returns

`Promise`<`void`\>

#### Implementation of

[OracleAPI](/interfaces/OracleAPI.md).[waitForExchangeRateUpdate](/interfaces/OracleAPI.md#waitforexchangerateupdate)

#### Defined in

[src/parachain/oracle.ts:236](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/oracle.ts#L236)

___

### <a id="waitforfeeestimateupdate" name="waitforfeeestimateupdate"></a> waitForFeeEstimateUpdate

▸ **waitForFeeEstimateUpdate**(`type?`): `Promise`<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `type` | `FeeEstimationType` | `DEFAULT_INCLUSION_TIME` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[OracleAPI](/interfaces/OracleAPI.md).[waitForFeeEstimateUpdate](/interfaces/OracleAPI.md#waitforfeeestimateupdate)

#### Defined in

[src/parachain/oracle.ts:229](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/oracle.ts#L229)

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
