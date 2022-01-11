[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / InterBTCAPI

# Interface: InterBTCAPI

## Implemented by

- [`DefaultInterBTCAPI`](/classes/DefaultInterBTCAPI.md)

## Table of contents

### Properties

- [account](/interfaces/InterBTCAPI.md#account)
- [api](/interfaces/InterBTCAPI.md#api)
- [btcRelay](/interfaces/InterBTCAPI.md#btcrelay)
- [electrsAPI](/interfaces/InterBTCAPI.md#electrsapi)
- [faucet](/interfaces/InterBTCAPI.md#faucet)
- [fee](/interfaces/InterBTCAPI.md#fee)
- [issue](/interfaces/InterBTCAPI.md#issue)
- [nomination](/interfaces/InterBTCAPI.md#nomination)
- [oracle](/interfaces/InterBTCAPI.md#oracle)
- [pools](/interfaces/InterBTCAPI.md#pools)
- [redeem](/interfaces/InterBTCAPI.md#redeem)
- [refund](/interfaces/InterBTCAPI.md#refund)
- [replace](/interfaces/InterBTCAPI.md#replace)
- [system](/interfaces/InterBTCAPI.md#system)
- [tokens](/interfaces/InterBTCAPI.md#tokens)
- [vaults](/interfaces/InterBTCAPI.md#vaults)

### Methods

- [setAccount](/interfaces/InterBTCAPI.md#setaccount)

## Properties

### <a id="account" name="account"></a> account

• `Readonly` **account**: `undefined` \| `AddressOrPair`

#### Defined in

[src/interbtc-api.ts:56](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/interbtc-api.ts#L56)

___

### <a id="api" name="api"></a> api

• `Readonly` **api**: `ApiPromise`

#### Defined in

[src/interbtc-api.ts:40](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/interbtc-api.ts#L40)

___

### <a id="btcrelay" name="btcrelay"></a> btcRelay

• `Readonly` **btcRelay**: [`BTCRelayAPI`](/interfaces/BTCRelayAPI.md)

#### Defined in

[src/interbtc-api.ts:48](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/interbtc-api.ts#L48)

___

### <a id="electrsapi" name="electrsapi"></a> electrsAPI

• `Readonly` **electrsAPI**: [`ElectrsAPI`](/interfaces/ElectrsAPI.md)

#### Defined in

[src/interbtc-api.ts:47](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/interbtc-api.ts#L47)

___

### <a id="faucet" name="faucet"></a> faucet

• `Readonly` **faucet**: [`FaucetClient`](/classes/FaucetClient.md)

#### Defined in

[src/interbtc-api.ts:45](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/interbtc-api.ts#L45)

___

### <a id="fee" name="fee"></a> fee

• `Readonly` **fee**: [`FeeAPI`](/interfaces/FeeAPI.md)

#### Defined in

[src/interbtc-api.ts:52](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/interbtc-api.ts#L52)

___

### <a id="issue" name="issue"></a> issue

• `Readonly` **issue**: [`IssueAPI`](/interfaces/IssueAPI.md)

#### Defined in

[src/interbtc-api.ts:42](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/interbtc-api.ts#L42)

___

### <a id="nomination" name="nomination"></a> nomination

• `Readonly` **nomination**: [`NominationAPI`](/interfaces/NominationAPI.md)

#### Defined in

[src/interbtc-api.ts:53](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/interbtc-api.ts#L53)

___

### <a id="oracle" name="oracle"></a> oracle

• `Readonly` **oracle**: [`OracleAPI`](/interfaces/OracleAPI.md)

#### Defined in

[src/interbtc-api.ts:46](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/interbtc-api.ts#L46)

___

### <a id="pools" name="pools"></a> pools

• `Readonly` **pools**: [`RewardsAPI`](/interfaces/RewardsAPI.md)

#### Defined in

[src/interbtc-api.ts:54](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/interbtc-api.ts#L54)

___

### <a id="redeem" name="redeem"></a> redeem

• `Readonly` **redeem**: [`RedeemAPI`](/interfaces/RedeemAPI.md)

#### Defined in

[src/interbtc-api.ts:43](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/interbtc-api.ts#L43)

___

### <a id="refund" name="refund"></a> refund

• `Readonly` **refund**: [`RefundAPI`](/interfaces/RefundAPI.md)

#### Defined in

[src/interbtc-api.ts:44](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/interbtc-api.ts#L44)

___

### <a id="replace" name="replace"></a> replace

• `Readonly` **replace**: [`ReplaceAPI`](/interfaces/ReplaceAPI.md)

#### Defined in

[src/interbtc-api.ts:51](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/interbtc-api.ts#L51)

___

### <a id="system" name="system"></a> system

• `Readonly` **system**: [`SystemAPI`](/interfaces/SystemAPI.md)

#### Defined in

[src/interbtc-api.ts:50](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/interbtc-api.ts#L50)

___

### <a id="tokens" name="tokens"></a> tokens

• `Readonly` **tokens**: [`TokensAPI`](/interfaces/TokensAPI.md)

#### Defined in

[src/interbtc-api.ts:49](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/interbtc-api.ts#L49)

___

### <a id="vaults" name="vaults"></a> vaults

• `Readonly` **vaults**: [`VaultsAPI`](/interfaces/VaultsAPI.md)

#### Defined in

[src/interbtc-api.ts:41](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/interbtc-api.ts#L41)

## Methods

### <a id="setaccount" name="setaccount"></a> setAccount

▸ **setAccount**(`account`, `signer?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `AddressOrPair` |
| `signer?` | `Signer` |

#### Returns

`void`

#### Defined in

[src/interbtc-api.ts:55](https://github.com/interlay/interbtc-api/blob/cc6b72b/src/interbtc-api.ts#L55)
