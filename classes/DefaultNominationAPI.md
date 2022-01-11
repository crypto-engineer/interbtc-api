[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / DefaultNominationAPI

# Class: DefaultNominationAPI

## Hierarchy

- [`DefaultTransactionAPI`](/classes/DefaultTransactionAPI.md)

  ↳ **`DefaultNominationAPI`**

## Implements

- [`NominationAPI`](/interfaces/NominationAPI.md)

## Table of contents

### Constructors

- [constructor](/classes/DefaultNominationAPI.md#constructor)

### Properties

- [api](/classes/DefaultNominationAPI.md#api)
- [rewardsAPI](/classes/DefaultNominationAPI.md#rewardsapi)
- [vaultsAPI](/classes/DefaultNominationAPI.md#vaultsapi)

### Methods

- [depositCollateral](/classes/DefaultNominationAPI.md#depositcollateral)
- [getAccount](/classes/DefaultNominationAPI.md#getaccount)
- [getActiveNominatorRewards](/classes/DefaultNominationAPI.md#getactivenominatorrewards)
- [getFilteredNominations](/classes/DefaultNominationAPI.md#getfilterednominations)
- [getNominationStatus](/classes/DefaultNominationAPI.md#getnominationstatus)
- [getNominatorReward](/classes/DefaultNominationAPI.md#getnominatorreward)
- [getNonces](/classes/DefaultNominationAPI.md#getnonces)
- [getTotalNomination](/classes/DefaultNominationAPI.md#gettotalnomination)
- [isNominationEnabled](/classes/DefaultNominationAPI.md#isnominationenabled)
- [isVaultOptedIn](/classes/DefaultNominationAPI.md#isvaultoptedin)
- [list](/classes/DefaultNominationAPI.md#list)
- [listAllNominations](/classes/DefaultNominationAPI.md#listallnominations)
- [listNominatorRewards](/classes/DefaultNominationAPI.md#listnominatorrewards)
- [listVaults](/classes/DefaultNominationAPI.md#listvaults)
- [optIn](/classes/DefaultNominationAPI.md#optin)
- [optOut](/classes/DefaultNominationAPI.md#optout)
- [sendLogged](/classes/DefaultNominationAPI.md#sendlogged)
- [setAccount](/classes/DefaultNominationAPI.md#setaccount)
- [setNominationEnabled](/classes/DefaultNominationAPI.md#setnominationenabled)
- [withdrawCollateral](/classes/DefaultNominationAPI.md#withdrawcollateral)
- [doesArrayContainEvent](/classes/DefaultNominationAPI.md#doesarraycontainevent)
- [isDispatchError](/classes/DefaultNominationAPI.md#isdispatcherror)
- [printEvents](/classes/DefaultNominationAPI.md#printevents)
- [waitForEvent](/classes/DefaultNominationAPI.md#waitforevent)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new DefaultNominationAPI**(`api`, `btcNetwork`, `electrsAPI`, `wrappedCurrency`, `collateralCurrency`, `account?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `btcNetwork` | [`Network`](/interfaces/bitcoin.networks.Network.md) |
| `electrsAPI` | [`ElectrsAPI`](/interfaces/ElectrsAPI.md) |
| `wrappedCurrency` | `Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |
| `collateralCurrency` | `Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\> |
| `account?` | `AddressOrPair` |

#### Overrides

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[constructor](/classes/DefaultTransactionAPI.md#constructor)

#### Defined in

[src/parachain/nomination.ts:159](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/nomination.ts#L159)

## Properties

### <a id="api" name="api"></a> api

• **api**: `ApiPromise`

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[api](/classes/DefaultTransactionAPI.md#api)

___

### <a id="rewardsapi" name="rewardsapi"></a> rewardsAPI

• **rewardsAPI**: [`RewardsAPI`](/interfaces/RewardsAPI.md)

#### Defined in

[src/parachain/nomination.ts:157](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/nomination.ts#L157)

___

### <a id="vaultsapi" name="vaultsapi"></a> vaultsAPI

• **vaultsAPI**: [`VaultsAPI`](/interfaces/VaultsAPI.md)

#### Defined in

[src/parachain/nomination.ts:156](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/nomination.ts#L156)

## Methods

### <a id="depositcollateral" name="depositcollateral"></a> depositCollateral

▸ **depositCollateral**<`C`\>(`vaultAccountId`, `amount`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultAccountId` | `AccountId` |
| `amount` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> |

#### Returns

`Promise`<`void`\>

#### Implementation of

[NominationAPI](/interfaces/NominationAPI.md).[depositCollateral](/interfaces/NominationAPI.md#depositcollateral)

#### Defined in

[src/parachain/nomination.ts:172](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/nomination.ts#L172)

___

### <a id="getaccount" name="getaccount"></a> getAccount

▸ **getAccount**(): `undefined` \| `AddressOrPair`

#### Returns

`undefined` \| `AddressOrPair`

#### Implementation of

[NominationAPI](/interfaces/NominationAPI.md).[getAccount](/interfaces/NominationAPI.md#getaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[getAccount](/classes/DefaultTransactionAPI.md#getaccount)

#### Defined in

[src/parachain/transaction.ts:26](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/transaction.ts#L26)

___

### <a id="getactivenominatorrewards" name="getactivenominatorrewards"></a> getActiveNominatorRewards

▸ **getActiveNominatorRewards**(`nominatorId`): `Promise`<`NominationReward`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nominatorId` | `AccountId` |

#### Returns

`Promise`<`NominationReward`[]\>

The rewards a currently active nominator has accumulated

#### Implementation of

[NominationAPI](/interfaces/NominationAPI.md).[getActiveNominatorRewards](/interfaces/NominationAPI.md#getactivenominatorrewards)

#### Defined in

[src/parachain/nomination.ts:295](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/nomination.ts#L295)

___

### <a id="getfilterednominations" name="getfilterednominations"></a> getFilteredNominations

▸ **getFilteredNominations**(`vaultId?`, `collateralCurrencyId?`, `nominatorId?`): `Promise`<`Nomination`[]\>

**`remarks`** At least one of the parameters must be specified

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId?` | `AccountId` |
| `collateralCurrencyId?` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) |
| `nominatorId?` | `AccountId` |

#### Returns

`Promise`<`Nomination`[]\>

#### Implementation of

[NominationAPI](/interfaces/NominationAPI.md).[getFilteredNominations](/interfaces/NominationAPI.md#getfilterednominations)

#### Defined in

[src/parachain/nomination.ts:321](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/nomination.ts#L321)

___

### <a id="getnominationstatus" name="getnominationstatus"></a> getNominationStatus

▸ **getNominationStatus**(`vaultId`, `collateralCurrencyId`, `nominatorId`): `Promise`<[`NominationStatus`](/enums/NominationStatus.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | `AccountId` |
| `collateralCurrencyId` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) |
| `nominatorId` | `AccountId` |

#### Returns

`Promise`<[`NominationStatus`](/enums/NominationStatus.md)\>

#### Defined in

[src/parachain/nomination.ts:357](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/nomination.ts#L357)

___

### <a id="getnominatorreward" name="getnominatorreward"></a> getNominatorReward

▸ **getNominatorReward**(`vaultId`, `collateralCurrencyId`, `nominatorId`): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | `AccountId` |
| `collateralCurrencyId` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |
| `nominatorId` | `AccountId` |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

The rewards a (possibly inactive) nominator has accumulated

#### Implementation of

[NominationAPI](/interfaces/NominationAPI.md).[getNominatorReward](/interfaces/NominationAPI.md#getnominatorreward)

#### Defined in

[src/parachain/nomination.ts:304](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/nomination.ts#L304)

___

### <a id="getnonces" name="getnonces"></a> getNonces

▸ **getNonces**(): `Promise`<`Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `number`\>\>

#### Returns

`Promise`<`Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `number`\>\>

A map (vaultId => nonce), representing the nonces for each reward pool with the given currency

#### Implementation of

[NominationAPI](/interfaces/NominationAPI.md).[getNonces](/interfaces/NominationAPI.md#getnonces)

#### Defined in

[src/parachain/nomination.ts:231](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/nomination.ts#L231)

___

### <a id="gettotalnomination" name="gettotalnomination"></a> getTotalNomination

▸ **getTotalNomination**(`vaultId?`, `collateralCurrency?`, `nominatorId?`): `Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

**`remarks`** At least one of the parameters must be specified

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId?` | `AccountId` |
| `collateralCurrency?` | `Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\> |
| `nominatorId?` | `AccountId` |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

The total nominated amount, filtered using the given parameters

#### Implementation of

[NominationAPI](/interfaces/NominationAPI.md).[getTotalNomination](/interfaces/NominationAPI.md#gettotalnomination)

#### Defined in

[src/parachain/nomination.ts:375](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/nomination.ts#L375)

___

### <a id="isnominationenabled" name="isnominationenabled"></a> isNominationEnabled

▸ **isNominationEnabled**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

A boolean value representing whether the vault nomination feature is enabled

#### Implementation of

[NominationAPI](/interfaces/NominationAPI.md).[isNominationEnabled](/interfaces/NominationAPI.md#isnominationenabled)

#### Defined in

[src/parachain/nomination.ts:225](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/nomination.ts#L225)

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

#### Implementation of

[NominationAPI](/interfaces/NominationAPI.md).[isVaultOptedIn](/interfaces/NominationAPI.md#isvaultoptedin)

#### Defined in

[src/parachain/nomination.ts:404](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/nomination.ts#L404)

___

### <a id="list" name="list"></a> list

▸ **list**(): `Promise`<`Nomination`[]\>

#### Returns

`Promise`<`Nomination`[]\>

All nominations for the wrapped currency set in the API

#### Implementation of

[NominationAPI](/interfaces/NominationAPI.md).[list](/interfaces/NominationAPI.md#list)

#### Defined in

[src/parachain/nomination.ts:317](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/nomination.ts#L317)

___

### <a id="listallnominations" name="listallnominations"></a> listAllNominations

▸ **listAllNominations**(): `Promise`<`RawNomination`[]\>

#### Returns

`Promise`<`RawNomination`[]\>

#### Defined in

[src/parachain/nomination.ts:245](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/nomination.ts#L245)

___

### <a id="listnominatorrewards" name="listnominatorrewards"></a> listNominatorRewards

▸ **listNominatorRewards**(): `Promise`<`NominationReward`[]\>

#### Returns

`Promise`<`NominationReward`[]\>

The rewards a nominator has accumulated, in wrapped token (e.g. interBTC, kBTC)

#### Implementation of

[NominationAPI](/interfaces/NominationAPI.md).[listNominatorRewards](/interfaces/NominationAPI.md#listnominatorrewards)

#### Defined in

[src/parachain/nomination.ts:275](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/nomination.ts#L275)

___

### <a id="listvaults" name="listvaults"></a> listVaults

▸ **listVaults**(): `Promise`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md)[]\>

#### Returns

`Promise`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md)[]\>

A list of all vaults that opted in to the nomination feature.

#### Implementation of

[NominationAPI](/interfaces/NominationAPI.md).[listVaults](/interfaces/NominationAPI.md#listvaults)

#### Defined in

[src/parachain/nomination.ts:398](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/nomination.ts#L398)

___

### <a id="optin" name="optin"></a> optIn

▸ **optIn**(`collateralCurrency`): `Promise`<`void`\>

**`remarks`** Function callable by vaults to opt in to the nomination feature

#### Parameters

| Name | Type |
| :------ | :------ |
| `collateralCurrency` | `Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\> |

#### Returns

`Promise`<`void`\>

#### Implementation of

[NominationAPI](/interfaces/NominationAPI.md).[optIn](/interfaces/NominationAPI.md#optin)

#### Defined in

[src/parachain/nomination.ts:208](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/nomination.ts#L208)

___

### <a id="optout" name="optout"></a> optOut

▸ **optOut**(`collateralCurrency`): `Promise`<`void`\>

**`remarks`** Function callable by vaults to opt out of the nomination feature

#### Parameters

| Name | Type |
| :------ | :------ |
| `collateralCurrency` | `Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\> |

#### Returns

`Promise`<`void`\>

#### Implementation of

[NominationAPI](/interfaces/NominationAPI.md).[optOut](/interfaces/NominationAPI.md#optout)

#### Defined in

[src/parachain/nomination.ts:214](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/nomination.ts#L214)

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

[NominationAPI](/interfaces/NominationAPI.md).[sendLogged](/interfaces/NominationAPI.md#sendlogged)

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

[NominationAPI](/interfaces/NominationAPI.md).[setAccount](/interfaces/NominationAPI.md#setaccount)

#### Inherited from

[DefaultTransactionAPI](/classes/DefaultTransactionAPI.md).[setAccount](/classes/DefaultTransactionAPI.md#setaccount)

#### Defined in

[src/parachain/transaction.ts:22](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/transaction.ts#L22)

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

#### Implementation of

[NominationAPI](/interfaces/NominationAPI.md).[setNominationEnabled](/interfaces/NominationAPI.md#setnominationenabled)

#### Defined in

[src/parachain/nomination.ts:220](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/nomination.ts#L220)

___

### <a id="withdrawcollateral" name="withdrawcollateral"></a> withdrawCollateral

▸ **withdrawCollateral**<`C`\>(`vaultAccountId`, `amount`, `nonce?`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultAccountId` | `AccountId` |
| `amount` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> |
| `nonce?` | `number` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[NominationAPI](/interfaces/NominationAPI.md).[withdrawCollateral](/interfaces/NominationAPI.md#withdrawcollateral)

#### Defined in

[src/parachain/nomination.ts:187](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/parachain/nomination.ts#L187)

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
