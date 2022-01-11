[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / DefaultRewardsAPI

# Class: DefaultRewardsAPI

## Implements

- [`RewardsAPI`](/interfaces/RewardsAPI.md)

## Table of contents

### Constructors

- [constructor](/classes/DefaultRewardsAPI.md#constructor)

### Properties

- [api](/classes/DefaultRewardsAPI.md#api)

### Methods

- [backingCollateralProportion](/classes/DefaultRewardsAPI.md#backingcollateralproportion)
- [computeCollateralInStakingPool](/classes/DefaultRewardsAPI.md#computecollateralinstakingpool)
- [computeReward](/classes/DefaultRewardsAPI.md#computereward)
- [computeRewardInRewardsPool](/classes/DefaultRewardsAPI.md#computerewardinrewardspool)
- [computeRewardInStakingPool](/classes/DefaultRewardsAPI.md#computerewardinstakingpool)
- [getFeesWrapped](/classes/DefaultRewardsAPI.md#getfeeswrapped)
- [getRewardsPoolRewardPerToken](/classes/DefaultRewardsAPI.md#getrewardspoolrewardpertoken)
- [getRewardsPoolRewardTally](/classes/DefaultRewardsAPI.md#getrewardspoolrewardtally)
- [getRewardsPoolStake](/classes/DefaultRewardsAPI.md#getrewardspoolstake)
- [getStakingPoolNonce](/classes/DefaultRewardsAPI.md#getstakingpoolnonce)
- [getStakingPoolRewardPerToken](/classes/DefaultRewardsAPI.md#getstakingpoolrewardpertoken)
- [getStakingPoolRewardTally](/classes/DefaultRewardsAPI.md#getstakingpoolrewardtally)
- [getStakingPoolSlashPerToken](/classes/DefaultRewardsAPI.md#getstakingpoolslashpertoken)
- [getStakingPoolSlashTally](/classes/DefaultRewardsAPI.md#getstakingpoolslashtally)
- [getStakingPoolStake](/classes/DefaultRewardsAPI.md#getstakingpoolstake)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new DefaultRewardsAPI**(`api`, `btcNetwork`, `electrsAPI`, `wrappedCurrency`, `collateralCurrency`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `btcNetwork` | [`Network`](/interfaces/bitcoin.networks.Network.md) |
| `electrsAPI` | [`ElectrsAPI`](/interfaces/ElectrsAPI.md) |
| `wrappedCurrency` | `Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |
| `collateralCurrency` | `Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\> |

#### Defined in

[src/parachain/rewards.ts:155](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/rewards.ts#L155)

## Properties

### <a id="api" name="api"></a> api

• **api**: `ApiPromise`

## Methods

### <a id="backingcollateralproportion" name="backingcollateralproportion"></a> backingCollateralProportion

▸ **backingCollateralProportion**(`vaultAccountId`, `nominatorId`, `collateralCurrencyIdLiteral`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultAccountId` | `AccountId` |
| `nominatorId` | `AccountId` |
| `collateralCurrencyIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |

#### Returns

`Promise`<`Big`\>

#### Defined in

[src/parachain/rewards.ts:356](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/rewards.ts#L356)

___

### <a id="computecollateralinstakingpool" name="computecollateralinstakingpool"></a> computeCollateralInStakingPool

▸ **computeCollateralInStakingPool**(`vaultAccountId`, `nominatorId`, `collateralCurrencyIdLiteral`): `Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultAccountId` | `AccountId` |
| `nominatorId` | `AccountId` |
| `collateralCurrencyIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

A Monetary.js amount object, representing the collateral in the given currency

#### Implementation of

[RewardsAPI](/interfaces/RewardsAPI.md).[computeCollateralInStakingPool](/interfaces/RewardsAPI.md#computecollateralinstakingpool)

#### Defined in

[src/parachain/rewards.ts:253](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/rewards.ts#L253)

___

### <a id="computereward" name="computereward"></a> computeReward

▸ **computeReward**(`vaultAccountId`, `nominatorId`, `collateralCurrencyId`, `rewardCurrencyId`, `nonce?`): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

Compute the total reward, including the staking (local) pool and the rewards (global) pool

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultAccountId` | `AccountId` |
| `nominatorId` | `AccountId` |
| `collateralCurrencyId` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |
| `rewardCurrencyId` | [`WrappedIdLiteral`](/modules.md#wrappedidliteral) |
| `nonce?` | `number` |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

A Monetary.js amount object, representing the total reward in the given currency

#### Implementation of

[RewardsAPI](/interfaces/RewardsAPI.md).[computeReward](/interfaces/RewardsAPI.md#computereward)

#### Defined in

[src/parachain/rewards.ts:377](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/rewards.ts#L377)

___

### <a id="computerewardinrewardspool" name="computerewardinrewardspool"></a> computeRewardInRewardsPool

▸ **computeRewardInRewardsPool**(`rewardCurrencyIdLiteral`, `vaultCollateralIdLiteral`, `vaultAccountId`): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `rewardCurrencyIdLiteral` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) |
| `vaultCollateralIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |
| `vaultAccountId` | `AccountId` |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

A Monetary.js amount object, representing the reward in the given currency

#### Implementation of

[RewardsAPI](/interfaces/RewardsAPI.md).[computeRewardInRewardsPool](/interfaces/RewardsAPI.md#computerewardinrewardspool)

#### Defined in

[src/parachain/rewards.ts:308](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/rewards.ts#L308)

___

### <a id="computerewardinstakingpool" name="computerewardinstakingpool"></a> computeRewardInStakingPool

▸ **computeRewardInStakingPool**(`vaultAccountId`, `nominatorId`, `collateralCurrencyId`, `nonce?`): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultAccountId` | `AccountId` |
| `nominatorId` | `AccountId` |
| `collateralCurrencyId` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |
| `nonce?` | `number` |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

A Monetary.js amount object, representing the reward in the given currency

#### Implementation of

[RewardsAPI](/interfaces/RewardsAPI.md).[computeRewardInStakingPool](/interfaces/RewardsAPI.md#computerewardinstakingpool)

#### Defined in

[src/parachain/rewards.ts:163](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/rewards.ts#L163)

___

### <a id="getfeeswrapped" name="getfeeswrapped"></a> getFeesWrapped

▸ **getFeesWrapped**(`vaultAccountId`, `collateralCurrency`): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultAccountId` | `AccountId` |
| `collateralCurrency` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

The total wrapped token reward collected by the vault

#### Implementation of

[RewardsAPI](/interfaces/RewardsAPI.md).[getFeesWrapped](/interfaces/RewardsAPI.md#getfeeswrapped)

#### Defined in

[src/parachain/rewards.ts:393](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/rewards.ts#L393)

___

### <a id="getrewardspoolrewardpertoken" name="getrewardspoolrewardpertoken"></a> getRewardsPoolRewardPerToken

▸ **getRewardsPoolRewardPerToken**(`currencyId`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `currencyId` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) |

#### Returns

`Promise`<`Big`\>

The reward per token, as a Big object

#### Implementation of

[RewardsAPI](/interfaces/RewardsAPI.md).[getRewardsPoolRewardPerToken](/interfaces/RewardsAPI.md#getrewardspoolrewardpertoken)

#### Defined in

[src/parachain/rewards.ts:349](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/rewards.ts#L349)

___

### <a id="getrewardspoolrewardtally" name="getrewardspoolrewardtally"></a> getRewardsPoolRewardTally

▸ **getRewardsPoolRewardTally**(`rewardCurrencyIdLiteral`, `vaultCollateralIdLiteral`, `vaultAccountId`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `rewardCurrencyIdLiteral` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) |
| `vaultCollateralIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |
| `vaultAccountId` | `AccountId` |

#### Returns

`Promise`<`Big`\>

The reward tally, as a Big object

#### Implementation of

[RewardsAPI](/interfaces/RewardsAPI.md).[getRewardsPoolRewardTally](/interfaces/RewardsAPI.md#getrewardspoolrewardtally)

#### Defined in

[src/parachain/rewards.ts:334](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/rewards.ts#L334)

___

### <a id="getrewardspoolstake" name="getrewardspoolstake"></a> getRewardsPoolStake

▸ **getRewardsPoolStake**(`vaultCollateralIdLiteral`, `vaultAccountId`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultCollateralIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |
| `vaultAccountId` | `AccountId` |

#### Returns

`Promise`<`Big`\>

The stake, as a Big object

#### Implementation of

[RewardsAPI](/interfaces/RewardsAPI.md).[getRewardsPoolStake](/interfaces/RewardsAPI.md#getrewardspoolstake)

#### Defined in

[src/parachain/rewards.ts:325](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/rewards.ts#L325)

___

### <a id="getstakingpoolnonce" name="getstakingpoolnonce"></a> getStakingPoolNonce

▸ **getStakingPoolNonce**(`collateralCurrencyIdLiteral`, `vaultAccountId`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `collateralCurrencyIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |
| `vaultAccountId` | `AccountId` |

#### Returns

`Promise`<`number`\>

The current nonce of the staking pool

#### Implementation of

[RewardsAPI](/interfaces/RewardsAPI.md).[getStakingPoolNonce](/interfaces/RewardsAPI.md#getstakingpoolnonce)

#### Defined in

[src/parachain/rewards.ts:179](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/rewards.ts#L179)

___

### <a id="getstakingpoolrewardpertoken" name="getstakingpoolrewardpertoken"></a> getStakingPoolRewardPerToken

▸ **getStakingPoolRewardPerToken**(`wrappedCurrencyIdLiteral`, `vaultAccountId`, `collateralCurrencyIdLiteral`, `nonce?`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wrappedCurrencyIdLiteral` | [`WrappedIdLiteral`](/modules.md#wrappedidliteral) |
| `vaultAccountId` | `AccountId` |
| `collateralCurrencyIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |
| `nonce?` | `number` |

#### Returns

`Promise`<`Big`\>

The reward per token, as a Big object

#### Implementation of

[RewardsAPI](/interfaces/RewardsAPI.md).[getStakingPoolRewardPerToken](/interfaces/RewardsAPI.md#getstakingpoolrewardpertoken)

#### Defined in

[src/parachain/rewards.ts:231](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/rewards.ts#L231)

___

### <a id="getstakingpoolrewardtally" name="getstakingpoolrewardtally"></a> getStakingPoolRewardTally

▸ **getStakingPoolRewardTally**(`currencyId`, `vaultAccountId`, `nominatorId`, `collateralCurrencyIdLiteral`, `nonce?`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `currencyId` | [`WrappedIdLiteral`](/modules.md#wrappedidliteral) |
| `vaultAccountId` | `AccountId` |
| `nominatorId` | `AccountId` |
| `collateralCurrencyIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |
| `nonce?` | `number` |

#### Returns

`Promise`<`Big`\>

The reward tally, as a Big object

#### Implementation of

[RewardsAPI](/interfaces/RewardsAPI.md).[getStakingPoolRewardTally](/interfaces/RewardsAPI.md#getstakingpoolrewardtally)

#### Defined in

[src/parachain/rewards.ts:210](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/rewards.ts#L210)

___

### <a id="getstakingpoolslashpertoken" name="getstakingpoolslashpertoken"></a> getStakingPoolSlashPerToken

▸ **getStakingPoolSlashPerToken**(`vaultCollateralIdLiteral`, `vaultAccountId`, `nonce?`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultCollateralIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |
| `vaultAccountId` | `AccountId` |
| `nonce?` | `number` |

#### Returns

`Promise`<`Big`\>

#### Defined in

[src/parachain/rewards.ts:275](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/rewards.ts#L275)

___

### <a id="getstakingpoolslashtally" name="getstakingpoolslashtally"></a> getStakingPoolSlashTally

▸ **getStakingPoolSlashTally**(`collateralCurrencyIdLiteral`, `vaultAccountId`, `nominatorId`, `nonce?`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `collateralCurrencyIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |
| `vaultAccountId` | `AccountId` |
| `nominatorId` | `AccountId` |
| `nonce?` | `number` |

#### Returns

`Promise`<`Big`\>

#### Defined in

[src/parachain/rewards.ts:291](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/rewards.ts#L291)

___

### <a id="getstakingpoolstake" name="getstakingpoolstake"></a> getStakingPoolStake

▸ **getStakingPoolStake**(`collateralCurrencyIdLiteral`, `vaultAccountId`, `nominatorId`, `nonce?`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `collateralCurrencyIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |
| `vaultAccountId` | `AccountId` |
| `nominatorId` | `AccountId` |
| `nonce?` | `number` |

#### Returns

`Promise`<`Big`\>

The stake, as a Big object

#### Implementation of

[RewardsAPI](/interfaces/RewardsAPI.md).[getStakingPoolStake](/interfaces/RewardsAPI.md#getstakingpoolstake)

#### Defined in

[src/parachain/rewards.ts:192](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/rewards.ts#L192)
