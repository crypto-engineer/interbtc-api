[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / RewardsAPI

# Interface: RewardsAPI

## Implemented by

- [`DefaultRewardsAPI`](/classes/DefaultRewardsAPI.md)

## Table of contents

### Methods

- [computeCollateralInStakingPool](/interfaces/RewardsAPI.md#computecollateralinstakingpool)
- [computeReward](/interfaces/RewardsAPI.md#computereward)
- [computeRewardInRewardsPool](/interfaces/RewardsAPI.md#computerewardinrewardspool)
- [computeRewardInStakingPool](/interfaces/RewardsAPI.md#computerewardinstakingpool)
- [getFeesWrapped](/interfaces/RewardsAPI.md#getfeeswrapped)
- [getRewardsPoolRewardPerToken](/interfaces/RewardsAPI.md#getrewardspoolrewardpertoken)
- [getRewardsPoolRewardTally](/interfaces/RewardsAPI.md#getrewardspoolrewardtally)
- [getRewardsPoolStake](/interfaces/RewardsAPI.md#getrewardspoolstake)
- [getStakingPoolNonce](/interfaces/RewardsAPI.md#getstakingpoolnonce)
- [getStakingPoolRewardPerToken](/interfaces/RewardsAPI.md#getstakingpoolrewardpertoken)
- [getStakingPoolRewardTally](/interfaces/RewardsAPI.md#getstakingpoolrewardtally)
- [getStakingPoolStake](/interfaces/RewardsAPI.md#getstakingpoolstake)

## Methods

### <a id="computecollateralinstakingpool" name="computecollateralinstakingpool"></a> computeCollateralInStakingPool

▸ **computeCollateralInStakingPool**(`vaultId`, `nominatorId`, `collateralCurrencyIdLiteral`): `Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultId` | `AccountId` | The account ID of the staking pool nominee |
| `nominatorId` | `AccountId` | The account ID of the staking pool nominator |
| `collateralCurrencyIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) | Collateral used by the vault |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

A Monetary.js amount object, representing the collateral in the given currency

#### Defined in

[src/parachain/rewards.ts:100](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/rewards.ts#L100)

___

### <a id="computereward" name="computereward"></a> computeReward

▸ **computeReward**(`vaultAccountId`, `nominatorId`, `vaultCollateralIdLiteral`, `rewardCurrencyIdLiteral`): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

Compute the total reward, including the staking (local) pool and the rewards (global) pool

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultAccountId` | `AccountId` | The vault ID whose reward pool to check |
| `nominatorId` | `AccountId` | The account ID of the staking pool nominator |
| `vaultCollateralIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) | Collateral used by the vault |
| `rewardCurrencyIdLiteral` | [`WrappedIdLiteral`](/modules.md#wrappedidliteral) | The reward currency |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

A Monetary.js amount object, representing the total reward in the given currency

#### Defined in

[src/parachain/rewards.ts:135](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/rewards.ts#L135)

___

### <a id="computerewardinrewardspool" name="computerewardinrewardspool"></a> computeRewardInRewardsPool

▸ **computeRewardInRewardsPool**(`rewardCurrencyIdLiteral`, `vaultCollateralIdLiteral`, `vaultAccountId`): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rewardCurrencyIdLiteral` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) | The reward currency |
| `vaultCollateralIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) | Collateral used by the vault |
| `vaultAccountId` | `AccountId` | The vault ID whose reward to compute |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

A Monetary.js amount object, representing the reward in the given currency

#### Defined in

[src/parachain/rewards.ts:89](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/rewards.ts#L89)

___

### <a id="computerewardinstakingpool" name="computerewardinstakingpool"></a> computeRewardInStakingPool

▸ **computeRewardInStakingPool**(`vaultAccountId`, `nominatorId`, `collateralCurrencyId`): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultAccountId` | `AccountId` | - |
| `nominatorId` | `AccountId` | The account ID of the staking pool nominator |
| `collateralCurrencyId` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) | Collateral currency used by the vault |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

A Monetary.js amount object, representing the reward in the given currency

#### Defined in

[src/parachain/rewards.ts:37](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/rewards.ts#L37)

___

### <a id="getfeeswrapped" name="getfeeswrapped"></a> getFeesWrapped

▸ **getFeesWrapped**(`vaultAccountId`, `vaultCollateralIdLiteral`, `rewardCurrencyIdLiteral`): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultAccountId` | `AccountId` | The vault ID whose reward pool to check |
| `vaultCollateralIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) | Collateral used by the vault |
| `rewardCurrencyIdLiteral` | [`WrappedIdLiteral`](/modules.md#wrappedidliteral) | The reward currency |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

The total wrapped token reward collected by the vault

#### Defined in

[src/parachain/rewards.ts:147](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/rewards.ts#L147)

___

### <a id="getrewardspoolrewardpertoken" name="getrewardspoolrewardpertoken"></a> getRewardsPoolRewardPerToken

▸ **getRewardsPoolRewardPerToken**(`currencyId`): `Promise`<`Big`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `currencyId` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) | The reward currency |

#### Returns

`Promise`<`Big`\>

The reward per token, as a Big object

#### Defined in

[src/parachain/rewards.ts:126](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/rewards.ts#L126)

___

### <a id="getrewardspoolrewardtally" name="getrewardspoolrewardtally"></a> getRewardsPoolRewardTally

▸ **getRewardsPoolRewardTally**(`rewardCurrencyIdLiteral`, `vaultCollateralIdLiteral`, `vaultAccountId`): `Promise`<`Big`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rewardCurrencyIdLiteral` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) | The reward currency |
| `vaultCollateralIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) | Collateral used by the vault |
| `vaultAccountId` | `AccountId` | The vault ID whose reward pool to check |

#### Returns

`Promise`<`Big`\>

The reward tally, as a Big object

#### Defined in

[src/parachain/rewards.ts:117](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/rewards.ts#L117)

___

### <a id="getrewardspoolstake" name="getrewardspoolstake"></a> getRewardsPoolStake

▸ **getRewardsPoolStake**(`currencyId`, `accountId`): `Promise`<`Big`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `currencyId` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) | The reward currency |
| `accountId` | `AccountId` | An account ID string |

#### Returns

`Promise`<`Big`\>

The stake, as a Big object

#### Defined in

[src/parachain/rewards.ts:110](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/rewards.ts#L110)

___

### <a id="getstakingpoolnonce" name="getstakingpoolnonce"></a> getStakingPoolNonce

▸ **getStakingPoolNonce**(`currencyId`, `vaultId`): `Promise`<`number`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `currencyId` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) | The staked currency |
| `vaultId` | `AccountId` | The account ID of the staking pool nominee |

#### Returns

`Promise`<`number`\>

The current nonce of the staking pool

#### Defined in

[src/parachain/rewards.ts:82](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/rewards.ts#L82)

___

### <a id="getstakingpoolrewardpertoken" name="getstakingpoolrewardpertoken"></a> getStakingPoolRewardPerToken

▸ **getStakingPoolRewardPerToken**(`wrappedCurrencyId`, `vaultId`, `collateralCurrencyId`, `nonce?`): `Promise`<`Big`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wrappedCurrencyId` | [`WrappedIdLiteral`](/modules.md#wrappedidliteral) | - |
| `vaultId` | `AccountId` | The account ID of the staking pool nominee |
| `collateralCurrencyId` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) | Collateral currency used by the vault |
| `nonce?` | `number` | Nonce of the rewards pool |

#### Returns

`Promise`<`Big`\>

The reward per token, as a Big object

#### Defined in

[src/parachain/rewards.ts:71](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/rewards.ts#L71)

___

### <a id="getstakingpoolrewardtally" name="getstakingpoolrewardtally"></a> getStakingPoolRewardTally

▸ **getStakingPoolRewardTally**(`currencyId`, `vaultId`, `nominatorId`, `collateralCurrencyId`, `nonce?`): `Promise`<`Big`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `currencyId` | [`WrappedIdLiteral`](/modules.md#wrappedidliteral) | The staked currency |
| `vaultId` | `AccountId` | The account ID of the staking pool nominee |
| `nominatorId` | `AccountId` | The account ID of the staking pool nominator |
| `collateralCurrencyId` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) | Collateral currency used by the vault |
| `nonce?` | `number` | Nonce of the rewards pool |

#### Returns

`Promise`<`Big`\>

The reward tally, as a Big object

#### Defined in

[src/parachain/rewards.ts:57](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/rewards.ts#L57)

___

### <a id="getstakingpoolstake" name="getstakingpoolstake"></a> getStakingPoolStake

▸ **getStakingPoolStake**(`currencyId`, `vaultId`, `nominatorId`): `Promise`<`Big`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `currencyId` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) | The staked currency |
| `vaultId` | `AccountId` | The account ID of the staking pool nominee |
| `nominatorId` | `AccountId` | The account ID of the staking pool nominator |

#### Returns

`Promise`<`Big`\>

The stake, as a Big object

#### Defined in

[src/parachain/rewards.ts:48](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/rewards.ts#L48)
