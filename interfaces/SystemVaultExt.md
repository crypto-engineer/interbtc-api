[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / SystemVaultExt

# Interface: SystemVaultExt<WrappedUnit\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `WrappedUnit` | extends `BitcoinUnit` |

## Table of contents

### Properties

- [collateral](/interfaces/SystemVaultExt.md#collateral)
- [currencyPair](/interfaces/SystemVaultExt.md#currencypair)
- [issuedTokens](/interfaces/SystemVaultExt.md#issuedtokens)
- [toBeIssuedTokens](/interfaces/SystemVaultExt.md#tobeissuedtokens)
- [toBeRedeemedTokens](/interfaces/SystemVaultExt.md#toberedeemedtokens)

## Properties

### <a id="collateral" name="collateral"></a> collateral

• **collateral**: `MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>

#### Defined in

[src/types/vault.ts:149](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/types/vault.ts#L149)

___

### <a id="currencypair" name="currencypair"></a> currencyPair

• **currencyPair**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `collateralCurrency` | `Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\> |
| `wrappedCurrency` | `Currency`<`WrappedUnit`\> |

#### Defined in

[src/types/vault.ts:150](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/types/vault.ts#L150)

___

### <a id="issuedtokens" name="issuedtokens"></a> issuedTokens

• **issuedTokens**: `MonetaryAmount`<`Currency`<`WrappedUnit`\>, `WrappedUnit`\>

#### Defined in

[src/types/vault.ts:147](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/types/vault.ts#L147)

___

### <a id="tobeissuedtokens" name="tobeissuedtokens"></a> toBeIssuedTokens

• **toBeIssuedTokens**: `MonetaryAmount`<`Currency`<`WrappedUnit`\>, `WrappedUnit`\>

#### Defined in

[src/types/vault.ts:146](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/types/vault.ts#L146)

___

### <a id="toberedeemedtokens" name="toberedeemedtokens"></a> toBeRedeemedTokens

• **toBeRedeemedTokens**: `MonetaryAmount`<`Currency`<`WrappedUnit`\>, `WrappedUnit`\>

#### Defined in

[src/types/vault.ts:148](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/types/vault.ts#L148)
