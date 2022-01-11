[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / NominationAPI

# Interface: NominationAPI

## Hierarchy

- [`TransactionAPI`](/interfaces/TransactionAPI.md)

  ↳ **`NominationAPI`**

## Implemented by

- [`DefaultNominationAPI`](/classes/DefaultNominationAPI.md)

## Table of contents

### Methods

- [depositCollateral](/interfaces/NominationAPI.md#depositcollateral)
- [getAccount](/interfaces/NominationAPI.md#getaccount)
- [getActiveNominatorRewards](/interfaces/NominationAPI.md#getactivenominatorrewards)
- [getFilteredNominations](/interfaces/NominationAPI.md#getfilterednominations)
- [getNominatorReward](/interfaces/NominationAPI.md#getnominatorreward)
- [getNonces](/interfaces/NominationAPI.md#getnonces)
- [getTotalNomination](/interfaces/NominationAPI.md#gettotalnomination)
- [isNominationEnabled](/interfaces/NominationAPI.md#isnominationenabled)
- [isVaultOptedIn](/interfaces/NominationAPI.md#isvaultoptedin)
- [list](/interfaces/NominationAPI.md#list)
- [listNominatorRewards](/interfaces/NominationAPI.md#listnominatorrewards)
- [listVaults](/interfaces/NominationAPI.md#listvaults)
- [optIn](/interfaces/NominationAPI.md#optin)
- [optOut](/interfaces/NominationAPI.md#optout)
- [sendLogged](/interfaces/NominationAPI.md#sendlogged)
- [setAccount](/interfaces/NominationAPI.md#setaccount)
- [setNominationEnabled](/interfaces/NominationAPI.md#setnominationenabled)
- [withdrawCollateral](/interfaces/NominationAPI.md#withdrawcollateral)

## Methods

### <a id="depositcollateral" name="depositcollateral"></a> depositCollateral

▸ **depositCollateral**<`C`\>(`vaultAccountId`, `amount`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultAccountId` | `AccountId` | Vault to nominate collateral to |
| `amount` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> | Amount to deposit, as a `Monetary.js` object |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/nomination.ts:59](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/nomination.ts#L59)

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

### <a id="getactivenominatorrewards" name="getactivenominatorrewards"></a> getActiveNominatorRewards

▸ **getActiveNominatorRewards**(`nominatorId`): `Promise`<`NominationReward`[]\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nominatorId` | `AccountId` | Id of user who nominated to one or more vaults |

#### Returns

`Promise`<`NominationReward`[]\>

The rewards a currently active nominator has accumulated

#### Defined in

[src/parachain/nomination.ts:135](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/nomination.ts#L135)

___

### <a id="getfilterednominations" name="getfilterednominations"></a> getFilteredNominations

▸ **getFilteredNominations**(`vaultAccountId?`, `collateralCurrencyId?`, `nominatorId?`): `Promise`<`Nomination`[]\>

**`remarks`** At least one of the parameters must be specified

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultAccountId?` | `AccountId` | Id of vault who is opted in to nomination |
| `collateralCurrencyId?` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) | The collateral currency of the nominations |
| `nominatorId?` | `AccountId` | Id of user who nominated to one or more vaults |

#### Returns

`Promise`<`Nomination`[]\>

#### Defined in

[src/parachain/nomination.ts:113](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/nomination.ts#L113)

___

### <a id="getnominatorreward" name="getnominatorreward"></a> getNominatorReward

▸ **getNominatorReward**(`vaultAccountId`, `collateralCurrencyId`, `nominatorId`): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultAccountId` | `AccountId` | Id of nominated vault |
| `collateralCurrencyId` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) | The currency towards whose issuance the nomination was made |
| `nominatorId` | `AccountId` | Id of user who nominated to one or more vaults |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

The rewards a (possibly inactive) nominator has accumulated

#### Defined in

[src/parachain/nomination.ts:144](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/nomination.ts#L144)

___

### <a id="getnonces" name="getnonces"></a> getNonces

▸ **getNonces**(): `Promise`<`Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `number`\>\>

#### Returns

`Promise`<`Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `number`\>\>

A map (vaultId => nonce), representing the nonces for each reward pool with the given currency

#### Defined in

[src/parachain/nomination.ts:152](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/nomination.ts#L152)

___

### <a id="gettotalnomination" name="gettotalnomination"></a> getTotalNomination

▸ **getTotalNomination**(`vaultAccountId?`, `collateralCurrency?`, `nominatorId?`): `Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

**`remarks`** At least one of the parameters must be specified

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultAccountId?` | `AccountId` | Id of vault who is opted in to nomination |
| `collateralCurrency?` | `Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\> | The collateral currency of the nominations |
| `nominatorId?` | `AccountId` | Id of user who nominated to one or more vaults |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

The total nominated amount, filtered using the given parameters

#### Defined in

[src/parachain/nomination.ts:125](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/nomination.ts#L125)

___

### <a id="isnominationenabled" name="isnominationenabled"></a> isNominationEnabled

▸ **isNominationEnabled**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

A boolean value representing whether the vault nomination feature is enabled

#### Defined in

[src/parachain/nomination.ts:88](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/nomination.ts#L88)

___

### <a id="isvaultoptedin" name="isvaultoptedin"></a> isVaultOptedIn

▸ **isVaultOptedIn**(`accountId`, `collateralCurrencyIdLiteral`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountId` | `AccountId` |
| `collateralCurrencyIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |

#### Returns

`Promise`<`boolean`\>

A boolean value

#### Defined in

[src/parachain/nomination.ts:106](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/nomination.ts#L106)

___

### <a id="list" name="list"></a> list

▸ **list**(): `Promise`<`Nomination`[]\>

#### Returns

`Promise`<`Nomination`[]\>

All nominations for the wrapped currency set in the API

#### Defined in

[src/parachain/nomination.ts:92](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/nomination.ts#L92)

___

### <a id="listnominatorrewards" name="listnominatorrewards"></a> listNominatorRewards

▸ **listNominatorRewards**(): `Promise`<`NominationReward`[]\>

#### Returns

`Promise`<`NominationReward`[]\>

The rewards a nominator has accumulated, in wrapped token (e.g. interBTC, kBTC)

#### Defined in

[src/parachain/nomination.ts:97](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/nomination.ts#L97)

___

### <a id="listvaults" name="listvaults"></a> listVaults

▸ **listVaults**(): `Promise`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md)[]\>

#### Returns

`Promise`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md)[]\>

A list of all vaults that opted in to the nomination feature.

#### Defined in

[src/parachain/nomination.ts:101](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/nomination.ts#L101)

___

### <a id="optin" name="optin"></a> optIn

▸ **optIn**(`collateralCurrency`): `Promise`<`void`\>

**`remarks`** Function callable by vaults to opt in to the nomination feature

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collateralCurrency` | `Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\> | Currency to accept as nomination |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/nomination.ts:75](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/nomination.ts#L75)

___

### <a id="optout" name="optout"></a> optOut

▸ **optOut**(`collateralCurrency`): `Promise`<`void`\>

**`remarks`** Function callable by vaults to opt out of the nomination feature

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collateralCurrency` | `Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\> | Currency to stop accepting as nomination |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/nomination.ts:80](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/nomination.ts#L80)

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

### <a id="setnominationenabled" name="setnominationenabled"></a> setNominationEnabled

▸ **setNominationEnabled**(`enabled`): `Promise`<`void`\>

**`remarks`** Testnet utility function

#### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/nomination.ts:84](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/nomination.ts#L84)

___

### <a id="withdrawcollateral" name="withdrawcollateral"></a> withdrawCollateral

▸ **withdrawCollateral**<`C`\>(`vaultAccountId`, `amount`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultAccountId` | `AccountId` | Vault that collateral was nominated to |
| `amount` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> | Amount to withdraw, as a `Monetary.js` object |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/nomination.ts:67](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/nomination.ts#L67)
