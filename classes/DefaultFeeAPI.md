[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / DefaultFeeAPI

# Class: DefaultFeeAPI

## Implements

- [`FeeAPI`](/interfaces/FeeAPI.md)

## Table of contents

### Constructors

- [constructor](/classes/DefaultFeeAPI.md#constructor)

### Properties

- [oracleAPI](/classes/DefaultFeeAPI.md#oracleapi)

### Methods

- [calculateAPY](/classes/DefaultFeeAPI.md#calculateapy)
- [getGriefingCollateral](/classes/DefaultFeeAPI.md#getgriefingcollateral)
- [getIssueFee](/classes/DefaultFeeAPI.md#getissuefee)
- [getIssueGriefingCollateralRate](/classes/DefaultFeeAPI.md#getissuegriefingcollateralrate)
- [getReplaceGriefingCollateralRate](/classes/DefaultFeeAPI.md#getreplacegriefingcollateralrate)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new DefaultFeeAPI**(`api`, `wrappedCurrency`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `wrappedCurrency` | `Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |

#### Defined in

[src/parachain/fee.ts:58](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/fee.ts#L58)

## Properties

### <a id="oracleapi" name="oracleapi"></a> oracleAPI

• `Private` **oracleAPI**: [`OracleAPI`](/interfaces/OracleAPI.md)

#### Defined in

[src/parachain/fee.ts:56](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/fee.ts#L56)

## Methods

### <a id="calculateapy" name="calculateapy"></a> calculateAPY

▸ **calculateAPY**<`C`\>(`feesWrapped`, `lockedCollateral`, `exchangeRate?`): `Promise`<`Big`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `feesWrapped` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |
| `lockedCollateral` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> |
| `exchangeRate?` | `ExchangeRate`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }, `Currency`<`C`\>, `C`\> |

#### Returns

`Promise`<`Big`\>

The APY, given the parameters

#### Implementation of

[FeeAPI](/interfaces/FeeAPI.md).[calculateAPY](/interfaces/FeeAPI.md#calculateapy)

#### Defined in

[src/parachain/fee.ts:103](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/fee.ts#L103)

___

### <a id="getgriefingcollateral" name="getgriefingcollateral"></a> getGriefingCollateral

▸ **getGriefingCollateral**<`C`\>(`amount`, `collateralCurrency`, `type`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |
| `collateralCurrency` | `Currency`<`C`\> |
| `type` | `GriefingCollateralType` |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

The griefing collateral

#### Implementation of

[FeeAPI](/interfaces/FeeAPI.md).[getGriefingCollateral](/interfaces/FeeAPI.md#getgriefingcollateral)

#### Defined in

[src/parachain/fee.ts:62](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/fee.ts#L62)

___

### <a id="getissuefee" name="getissuefee"></a> getIssueFee

▸ **getIssueFee**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

The percentage of issued token that is received by the vault as reward

#### Implementation of

[FeeAPI](/interfaces/FeeAPI.md).[getIssueFee](/interfaces/FeeAPI.md#getissuefee)

#### Defined in

[src/parachain/fee.ts:97](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/fee.ts#L97)

___

### <a id="getissuegriefingcollateralrate" name="getissuegriefingcollateralrate"></a> getIssueGriefingCollateralRate

▸ **getIssueGriefingCollateralRate**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

The griefing collateral rate for issuing InterBTC

#### Implementation of

[FeeAPI](/interfaces/FeeAPI.md).[getIssueGriefingCollateralRate](/interfaces/FeeAPI.md#getissuegriefingcollateralrate)

#### Defined in

[src/parachain/fee.ts:85](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/fee.ts#L85)

___

### <a id="getreplacegriefingcollateralrate" name="getreplacegriefingcollateralrate"></a> getReplaceGriefingCollateralRate

▸ **getReplaceGriefingCollateralRate**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

The griefing collateral rate for the Vault replace request

#### Implementation of

[FeeAPI](/interfaces/FeeAPI.md).[getReplaceGriefingCollateralRate](/interfaces/FeeAPI.md#getreplacegriefingcollateralrate)

#### Defined in

[src/parachain/fee.ts:91](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/fee.ts#L91)
