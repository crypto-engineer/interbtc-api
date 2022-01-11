[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / VaultExt

# Class: VaultExt<WrappedUnit\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `WrappedUnit` | extends `BitcoinUnit` |

## Table of contents

### Constructors

- [constructor](/classes/VaultExt.md#constructor)

### Properties

- [backingCollateral](/classes/VaultExt.md#backingcollateral)
- [bannedUntil](/classes/VaultExt.md#banneduntil)
- [id](/classes/VaultExt.md#id)
- [issuedTokens](/classes/VaultExt.md#issuedtokens)
- [liquidatedCollateral](/classes/VaultExt.md#liquidatedcollateral)
- [replaceCollateral](/classes/VaultExt.md#replacecollateral)
- [status](/classes/VaultExt.md#status)
- [toBeIssuedTokens](/classes/VaultExt.md#tobeissuedtokens)
- [toBeRedeemedTokens](/classes/VaultExt.md#toberedeemedtokens)
- [toBeReplacedTokens](/classes/VaultExt.md#tobereplacedtokens)
- [wallet](/classes/VaultExt.md#wallet)

### Methods

- [computeBackingCollateral](/classes/VaultExt.md#computebackingcollateral)
- [getBackedTokens](/classes/VaultExt.md#getbackedtokens)
- [getFreeCollateral](/classes/VaultExt.md#getfreecollateral)
- [getIssuableTokens](/classes/VaultExt.md#getissuabletokens)
- [getRedeemableTokens](/classes/VaultExt.md#getredeemabletokens)
- [getSecureCollateralThreshold](/classes/VaultExt.md#getsecurecollateralthreshold)
- [getStakingPoolNonce](/classes/VaultExt.md#getstakingpoolnonce)
- [getUsedCollateral](/classes/VaultExt.md#getusedcollateral)
- [isBanned](/classes/VaultExt.md#isbanned)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new VaultExt**<`WrappedUnit`\>(`api`, `wallet`, `backingCollateral`, `id`, `status`, `bannedUntil`, `toBeIssuedTokens`, `issuedTokens`, `toBeRedeemedTokens`, `toBeReplacedTokens`, `replaceCollateral`, `liquidatedCollateral`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `WrappedUnit` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `wallet` | [`WalletExt`](/interfaces/WalletExt.md) |
| `backingCollateral` | `MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\> |
| `id` | [`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md) |
| `status` | [`VaultStatusExt`](/enums/VaultStatusExt.md) |
| `bannedUntil` | `undefined` \| `number` |
| `toBeIssuedTokens` | `MonetaryAmount`<`Currency`<`WrappedUnit`\>, `WrappedUnit`\> |
| `issuedTokens` | `MonetaryAmount`<`Currency`<`WrappedUnit`\>, `WrappedUnit`\> |
| `toBeRedeemedTokens` | `MonetaryAmount`<`Currency`<`WrappedUnit`\>, `WrappedUnit`\> |
| `toBeReplacedTokens` | `MonetaryAmount`<`Currency`<`WrappedUnit`\>, `WrappedUnit`\> |
| `replaceCollateral` | `MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\> |
| `liquidatedCollateral` | `MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\> |

#### Defined in

[src/types/vault.ts:38](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/types/vault.ts#L38)

## Properties

### <a id="backingcollateral" name="backingcollateral"></a> backingCollateral

• **backingCollateral**: `MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>

#### Defined in

[src/types/vault.ts:27](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/types/vault.ts#L27)

___

### <a id="banneduntil" name="banneduntil"></a> bannedUntil

• **bannedUntil**: `undefined` \| `number`

#### Defined in

[src/types/vault.ts:30](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/types/vault.ts#L30)

___

### <a id="id" name="id"></a> id

• **id**: [`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md)

#### Defined in

[src/types/vault.ts:28](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/types/vault.ts#L28)

___

### <a id="issuedtokens" name="issuedtokens"></a> issuedTokens

• **issuedTokens**: `MonetaryAmount`<`Currency`<`WrappedUnit`\>, `WrappedUnit`\>

#### Defined in

[src/types/vault.ts:32](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/types/vault.ts#L32)

___

### <a id="liquidatedcollateral" name="liquidatedcollateral"></a> liquidatedCollateral

• **liquidatedCollateral**: `MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>

#### Defined in

[src/types/vault.ts:36](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/types/vault.ts#L36)

___

### <a id="replacecollateral" name="replacecollateral"></a> replaceCollateral

• **replaceCollateral**: `MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>

#### Defined in

[src/types/vault.ts:35](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/types/vault.ts#L35)

___

### <a id="status" name="status"></a> status

• **status**: [`VaultStatusExt`](/enums/VaultStatusExt.md)

#### Defined in

[src/types/vault.ts:29](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/types/vault.ts#L29)

___

### <a id="tobeissuedtokens" name="tobeissuedtokens"></a> toBeIssuedTokens

• **toBeIssuedTokens**: `MonetaryAmount`<`Currency`<`WrappedUnit`\>, `WrappedUnit`\>

#### Defined in

[src/types/vault.ts:31](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/types/vault.ts#L31)

___

### <a id="toberedeemedtokens" name="toberedeemedtokens"></a> toBeRedeemedTokens

• **toBeRedeemedTokens**: `MonetaryAmount`<`Currency`<`WrappedUnit`\>, `WrappedUnit`\>

#### Defined in

[src/types/vault.ts:33](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/types/vault.ts#L33)

___

### <a id="tobereplacedtokens" name="tobereplacedtokens"></a> toBeReplacedTokens

• **toBeReplacedTokens**: `MonetaryAmount`<`Currency`<`WrappedUnit`\>, `WrappedUnit`\>

#### Defined in

[src/types/vault.ts:34](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/types/vault.ts#L34)

___

### <a id="wallet" name="wallet"></a> wallet

• **wallet**: [`WalletExt`](/interfaces/WalletExt.md)

#### Defined in

[src/types/vault.ts:26](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/types/vault.ts#L26)

## Methods

### <a id="computebackingcollateral" name="computebackingcollateral"></a> computeBackingCollateral

▸ **computeBackingCollateral**(`nonce?`): `Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nonce?` | `number` |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

#### Defined in

[src/types/vault.ts:124](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/types/vault.ts#L124)

___

### <a id="getbackedtokens" name="getbackedtokens"></a> getBackedTokens

▸ **getBackedTokens**(): `MonetaryAmount`<`Currency`<`WrappedUnit`\>, `WrappedUnit`\>

#### Returns

`MonetaryAmount`<`Currency`<`WrappedUnit`\>, `WrappedUnit`\>

#### Defined in

[src/types/vault.ts:91](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/types/vault.ts#L91)

___

### <a id="getfreecollateral" name="getfreecollateral"></a> getFreeCollateral

▸ **getFreeCollateral**(): `Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

#### Defined in

[src/types/vault.ts:95](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/types/vault.ts#L95)

___

### <a id="getissuabletokens" name="getissuabletokens"></a> getIssuableTokens

▸ **getIssuableTokens**(): `Promise`<`MonetaryAmount`<`Currency`<`WrappedUnit`\>, `WrappedUnit`\>\>

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`WrappedUnit`\>, `WrappedUnit`\>\>

#### Defined in

[src/types/vault.ts:69](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/types/vault.ts#L69)

___

### <a id="getredeemabletokens" name="getredeemabletokens"></a> getRedeemableTokens

▸ **getRedeemableTokens**(): `MonetaryAmount`<`Currency`<`WrappedUnit`\>, `WrappedUnit`\>

#### Returns

`MonetaryAmount`<`Currency`<`WrappedUnit`\>, `WrappedUnit`\>

#### Defined in

[src/types/vault.ts:65](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/types/vault.ts#L65)

___

### <a id="getsecurecollateralthreshold" name="getsecurecollateralthreshold"></a> getSecureCollateralThreshold

▸ **getSecureCollateralThreshold**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

#### Defined in

[src/types/vault.ts:118](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/types/vault.ts#L118)

___

### <a id="getstakingpoolnonce" name="getstakingpoolnonce"></a> getStakingPoolNonce

▸ **getStakingPoolNonce**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Defined in

[src/types/vault.ts:138](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/types/vault.ts#L138)

___

### <a id="getusedcollateral" name="getusedcollateral"></a> getUsedCollateral

▸ **getUsedCollateral**(): `Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

#### Defined in

[src/types/vault.ts:101](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/types/vault.ts#L101)

___

### <a id="isbanned" name="isbanned"></a> isBanned

▸ **isBanned**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/types/vault.ts:82](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/types/vault.ts#L82)
