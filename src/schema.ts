/**
 * This file was auto-generated. Do not make direct changes.
 */

export type About = components["schemas"]["About"];
export type CreateAccountDto = components["schemas"]["CreateAccountDto"];
export type Account = components["schemas"]["Account"];
export type AccountDataType = components["schemas"]["AccountDataType"];
export type AccountDataSetting = components["schemas"]["AccountDataSetting"];
export type UpsertAccountDataSettingDto = components["schemas"]["UpsertAccountDataSettingDto"];
export type UpsertAccountDataSettingsDto = components["schemas"]["UpsertAccountDataSettingsDto"];
export type CounterfactualSafe = components["schemas"]["CounterfactualSafe"];
export type CreateCounterfactualSafeDto = components["schemas"]["CreateCounterfactualSafeDto"];
export type Token = components["schemas"]["Token"];
export type Balance = components["schemas"]["Balance"];
export type Balances = components["schemas"]["Balances"];
export type GasPriceOracle = components["schemas"]["GasPriceOracle"];
export type GasPriceFixed = components["schemas"]["GasPriceFixed"];
export type GasPriceFixedEIP1559 = components["schemas"]["GasPriceFixedEIP1559"];
export type NativeCurrency = components["schemas"]["NativeCurrency"];
export type BlockExplorerUriTemplate = components["schemas"]["BlockExplorerUriTemplate"];
export type BalancesProvider = components["schemas"]["BalancesProvider"];
export type ContractAddresses = components["schemas"]["ContractAddresses"];
export type RpcUri = components["schemas"]["RpcUri"];
export type Theme = components["schemas"]["Theme"];
export type Chain = components["schemas"]["Chain"];
export type ChainPage = components["schemas"]["ChainPage"];
export type AboutChain = components["schemas"]["AboutChain"];
export type Backbone = components["schemas"]["Backbone"];
export type MasterCopy = components["schemas"]["MasterCopy"];
export type Collectible = components["schemas"]["Collectible"];
export type CollectiblePage = components["schemas"]["CollectiblePage"];
export type ActivityMetadata = components["schemas"]["ActivityMetadata"];
export type Campaign = components["schemas"]["Campaign"];
export type CampaignPage = components["schemas"]["CampaignPage"];
export type CampaignRank = components["schemas"]["CampaignRank"];
export type CampaignRankPage = components["schemas"]["CampaignRankPage"];
export type LockingRank = components["schemas"]["LockingRank"];
export type LockingRankPage = components["schemas"]["LockingRankPage"];
export type LockEventItem = components["schemas"]["LockEventItem"];
export type UnlockEventItem = components["schemas"]["UnlockEventItem"];
export type WithdrawEventItem = components["schemas"]["WithdrawEventItem"];
export type LockingEventPage = components["schemas"]["LockingEventPage"];
export type Contract = components["schemas"]["Contract"];
export type TransactionDataDto = components["schemas"]["TransactionDataDto"];
export type DataDecodedParameter = components["schemas"]["DataDecodedParameter"];
export type DataDecoded = components["schemas"]["DataDecoded"];
export type Delegate = components["schemas"]["Delegate"];
export type DelegatePage = components["schemas"]["DelegatePage"];
export type CreateDelegateDto = components["schemas"]["CreateDelegateDto"];
export type DeleteDelegateDto = components["schemas"]["DeleteDelegateDto"];
export type DeleteSafeDelegateDto = components["schemas"]["DeleteSafeDelegateDto"];
export type DeleteDelegateV2Dto = components["schemas"]["DeleteDelegateV2Dto"];
export type AddRecoveryModuleDto = components["schemas"]["AddRecoveryModuleDto"];
export type GetEstimationDto = components["schemas"]["GetEstimationDto"];
export type EstimationResponse = components["schemas"]["EstimationResponse"];
export type AddressInfo = components["schemas"]["AddressInfo"];
export type Message = components["schemas"]["Message"];
export type MessageItem = components["schemas"]["MessageItem"];
export type DateLabel = components["schemas"]["DateLabel"];
export type MessagePage = components["schemas"]["MessagePage"];
export type CreateMessageDto = components["schemas"]["CreateMessageDto"];
export type UpdateMessageSignatureDto = components["schemas"]["UpdateMessageSignatureDto"];
export type SafeRegistration = components["schemas"]["SafeRegistration"];
export type RegisterDeviceDto = components["schemas"]["RegisterDeviceDto"];
export type SafeList = components["schemas"]["SafeList"];
export type RelayDto = components["schemas"]["RelayDto"];
export type SafeAppProvider = components["schemas"]["SafeAppProvider"];
export type SafeAppAccessControl = components["schemas"]["SafeAppAccessControl"];
export type SafeAppSocialProfile = components["schemas"]["SafeAppSocialProfile"];
export type SafeApp = components["schemas"]["SafeApp"];
export type SafeState = components["schemas"]["SafeState"];
export type SafeNonces = components["schemas"]["SafeNonces"];
export type RichTokenValueFragment = components["schemas"]["RichTokenValueFragment"];
export type RichTextFragment = components["schemas"]["RichTextFragment"];
export type RichAddressFragment = components["schemas"]["RichAddressFragment"];
export type RichDecodedInfo = components["schemas"]["RichDecodedInfo"];
export type TransactionInfo = components["schemas"]["TransactionInfo"];
export type TransactionData = components["schemas"]["TransactionData"];
export type MultisigExecutionDetails = components["schemas"]["MultisigExecutionDetails"];
export type ModuleExecutionDetails = components["schemas"]["ModuleExecutionDetails"];
export type SafeAppInfo = components["schemas"]["SafeAppInfo"];
export type TransactionDetails = components["schemas"]["TransactionDetails"];
export type CreationTransactionInfo = components["schemas"]["CreationTransactionInfo"];
export type CustomTransactionInfo = components["schemas"]["CustomTransactionInfo"];
export type SettingsChangeTransaction = components["schemas"]["SettingsChangeTransaction"];
export type Transfer = components["schemas"]["Transfer"];
export type TransferTransactionInfo = components["schemas"]["TransferTransactionInfo"];
export type ModuleExecutionInfo = components["schemas"]["ModuleExecutionInfo"];
export type MultisigExecutionInfo = components["schemas"]["MultisigExecutionInfo"];
export type TokenInfo = components["schemas"]["TokenInfo"];
export type SwapOrderTransactionInfo = components["schemas"]["SwapOrderTransactionInfo"];
export type SwapTransferTransactionInfo = components["schemas"]["SwapTransferTransactionInfo"];
export type TwapOrderTransactionInfo = components["schemas"]["TwapOrderTransactionInfo"];
export type Transaction = components["schemas"]["Transaction"];
export type MultisigTransaction = components["schemas"]["MultisigTransaction"];
export type MultisigTransactionPage = components["schemas"]["MultisigTransactionPage"];
export type DeleteTransactionDto = components["schemas"]["DeleteTransactionDto"];
export type ModuleTransaction = components["schemas"]["ModuleTransaction"];
export type ModuleTransactionPage = components["schemas"]["ModuleTransactionPage"];
export type AddConfirmationDto = components["schemas"]["AddConfirmationDto"];
export type IncomingTransfer = components["schemas"]["IncomingTransfer"];
export type IncomingTransferPage = components["schemas"]["IncomingTransferPage"];
export type PreviewTransactionDto = components["schemas"]["PreviewTransactionDto"];
export type TransactionPreview = components["schemas"]["TransactionPreview"];
export type ConflictHeaderQueuedItem = components["schemas"]["ConflictHeaderQueuedItem"];
export type LabelQueuedItem = components["schemas"]["LabelQueuedItem"];
export type TransactionQueuedItem = components["schemas"]["TransactionQueuedItem"];
export type QueuedItemPage = components["schemas"]["QueuedItemPage"];
export type TransactionItem = components["schemas"]["TransactionItem"];
export type TransactionItemPage = components["schemas"]["TransactionItemPage"];
export type ProposeTransactionDto = components["schemas"]["ProposeTransactionDto"];
export type BaselineConfirmationView = components["schemas"]["BaselineConfirmationView"];
export type CowSwapConfirmationView = components["schemas"]["CowSwapConfirmationView"];

export interface paths {
    "/about": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["AboutController_getAbout"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/accounts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AccountsController_createAccount"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/accounts/data-types": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["AccountsController_getDataTypes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/accounts/{address}/data-settings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["AccountsController_getAccountDataSettings"];
        put: operations["AccountsController_upsertAccountDataSettings"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/accounts/{address}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["AccountsController_getAccount"];
        put?: never;
        post?: never;
        delete: operations["AccountsController_deleteAccount"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/accounts/{address}/counterfactual-safes/{chainId}/{predictedAddress}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["CounterfactualSafesController_getCounterfactualSafe"];
        put?: never;
        post?: never;
        delete: operations["CounterfactualSafesController_deleteCounterfactualSafe"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/accounts/{address}/counterfactual-safes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["CounterfactualSafesController_getCounterfactualSafes"];
        put: operations["CounterfactualSafesController_createCounterfactualSafe"];
        post?: never;
        delete: operations["CounterfactualSafesController_deleteCounterfactualSafes"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/chains/{chainId}/safes/{safeAddress}/balances/{fiatCode}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BalancesController_getBalances"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/balances/supported-fiat-codes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BalancesController_getSupportedFiatCodes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/chains": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ChainsController_getChains"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/chains/{chainId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ChainsController_getChain"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/chains/{chainId}/about": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ChainsController_getAboutChain"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/chains/{chainId}/about/backbone": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ChainsController_getBackbone"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/chains/{chainId}/about/master-copies": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ChainsController_getMasterCopies"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/chains/{chainId}/safes/{safeAddress}/collectibles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["CollectiblesController_getCollectibles"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/community/campaigns": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["CommunityController_getCampaigns"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/community/campaigns/{resourceId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["CommunityController_getCampaignById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/community/campaigns/{resourceId}/activities": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["CommunityController_getCampaignActivities"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/community/campaigns/{resourceId}/leaderboard": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["CommunityController_getCampaignLeaderboard"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/community/campaigns/{resourceId}/leaderboard/{safeAddress}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["CommunityController_getCampaignRank"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/community/locking/leaderboard": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["CommunityController_getLeaderboard"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/community/locking/{safeAddress}/rank": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["CommunityController_getLockingRank"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/community/locking/{safeAddress}/history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["CommunityController_getLockingHistory"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/chains/{chainId}/contracts/{contractAddress}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ContractsController_getContract"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/chains/{chainId}/data-decoder": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["DataDecodedController_getDataDecoded"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/chains/{chainId}/delegates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @deprecated */
        get: operations["DelegatesController_getDelegates"];
        put?: never;
        /** @deprecated */
        post: operations["DelegatesController_postDelegate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/chains/{chainId}/delegates/{delegateAddress}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** @deprecated */
        delete: operations["DelegatesController_deleteDelegate"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/chains/{chainId}/safes/{safeAddress}/delegates/{delegateAddress}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** @deprecated */
        delete: operations["DelegatesController_deleteSafeDelegate"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/chains/{chainId}/delegates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["DelegatesV2Controller_getDelegates"];
        put?: never;
        post: operations["DelegatesV2Controller_postDelegate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/chains/{chainId}/delegates/{delegateAddress}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["DelegatesV2Controller_deleteDelegate"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/chains/{chainId}/safes/{safeAddress}/recovery": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["RecoveryController_addRecoveryModule"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/chains/{chainId}/safes/{safeAddress}/recovery/{moduleAddress}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["RecoveryController_deleteRecoveryModule"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v2/chains/{chainId}/safes/{address}/multisig-transactions/estimations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["EstimationsController_getEstimation"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/chains/{chainId}/messages/{messageHash}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["MessagesController_getMessageByHash"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/chains/{chainId}/safes/{safeAddress}/messages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["MessagesController_getMessagesBySafe"];
        put?: never;
        post: operations["MessagesController_createMessage"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/chains/{chainId}/messages/{messageHash}/signatures": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["MessagesController_updateMessageSignature"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/register/notifications": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["NotificationsController_registerDevice"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/chains/{chainId}/notifications/devices/{uuid}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["NotificationsController_unregisterDevice"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/chains/{chainId}/notifications/devices/{uuid}/safes/{safeAddress}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["NotificationsController_unregisterSafe"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/chains/{chainId}/owners/{ownerAddress}/safes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["OwnersController_getSafesByOwner"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/owners/{ownerAddress}/safes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["OwnersController_getAllSafesByOwner"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/chains/{chainId}/relay": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["RelayController_relay"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/chains/{chainId}/relay/{safeAddress}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["RelayController_getRelaysRemaining"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/chains/{chainId}/safe-apps": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["SafeAppsController_getSafeApps"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/chains/{chainId}/safes/{safeAddress}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["SafesController_getSafe"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/chains/{chainId}/safes/{safeAddress}/nonces": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["SafesController_getNonces"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/safes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["SafesController_getSafeOverview"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/chains/{chainId}/transactions/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["TransactionsController_getTransactionById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/chains/{chainId}/safes/{safeAddress}/multisig-transactions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["TransactionsController_getMultisigTransactions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/chains/{chainId}/transactions/{safeTxHash}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["TransactionsController_deleteTransaction"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/chains/{chainId}/safes/{safeAddress}/module-transactions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["TransactionsController_getModuleTransactions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/chains/{chainId}/transactions/{safeTxHash}/confirmations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["TransactionsController_addConfirmation"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/chains/{chainId}/safes/{safeAddress}/incoming-transfers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["TransactionsController_getIncomingTransfers"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/chains/{chainId}/transactions/{safeAddress}/preview": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["TransactionsController_previewTransaction"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/chains/{chainId}/safes/{safeAddress}/transactions/queued": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["TransactionsController_getTransactionQueue"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/chains/{chainId}/safes/{safeAddress}/transactions/history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["TransactionsController_getTransactionsHistory"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/chains/{chainId}/transactions/{safeAddress}/propose": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["TransactionsController_proposeTransaction"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/chains/{chainId}/safes/{safeAddress}/views/transaction-confirmation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Confirm Transaction View
         * @description This endpoint is experimental and may change.
         */
        post: operations["TransactionsViewController_getTransactionConfirmationView"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        About: {
            name: string;
            version?: string | null;
            buildNumber?: string | null;
        };
        CreateAccountDto: {
            address: string;
        };
        Account: {
            id: string;
            groupId?: string | null;
            address: string;
        };
        AccountDataType: {
            id: string;
            name: string;
            description?: string | null;
            isActive: boolean;
        };
        AccountDataSetting: {
            dataTypeId: string;
            enabled: boolean;
        };
        UpsertAccountDataSettingDto: {
            dataTypeId: string;
            enabled: boolean;
        };
        UpsertAccountDataSettingsDto: {
            accountDataSettings: components["schemas"]["UpsertAccountDataSettingDto"][];
        };
        CounterfactualSafe: {
            chainId: string;
            creator: string;
            fallbackHandler: string;
            owners: string[];
            predictedAddress: string;
            saltNonce: string;
            singletonAddress: string;
            threshold: number;
        };
        CreateCounterfactualSafeDto: {
            chainId: string;
            fallbackHandler: string;
            owners: string[];
            predictedAddress: string;
            saltNonce: string;
            singletonAddress: string;
            threshold: number;
        };
        Token: {
            address: string;
            decimals?: number | null;
            logoUri: string;
            name: string;
            symbol: string;
            /** @enum {string} */
            type: "ERC721" | "ERC20" | "NATIVE_TOKEN" | "UNKNOWN";
        };
        Balance: {
            balance: string;
            fiatBalance: string;
            fiatConversion: string;
            tokenInfo: components["schemas"]["Token"];
        };
        Balances: {
            fiatTotal: string;
            items: components["schemas"]["Balance"][];
        };
        GasPriceOracle: {
            type: string;
            gasParameter: string;
            gweiFactor: string;
            uri: string;
        };
        GasPriceFixed: {
            type: string;
            weiValue: string;
        };
        GasPriceFixedEIP1559: {
            type: string;
            maxFeePerGas: string;
            maxPriorityFeePerGas: string;
        };
        NativeCurrency: {
            decimals: number;
            logoUri: string;
            name: string;
            symbol: string;
        };
        BlockExplorerUriTemplate: {
            address: string;
            api: string;
            txHash: string;
        };
        BalancesProvider: {
            chainName?: number | null;
            enabled: boolean;
        };
        ContractAddresses: {
            safeSingletonAddress?: string | null;
            safeProxyFactoryAddress?: string | null;
            multiSendAddress?: string | null;
            multiSendCallOnlyAddress?: string | null;
            fallbackHandlerAddress?: string | null;
            signMessageLibAddress?: string | null;
            createCallAddress?: string | null;
            simulateTxAccessorAddress?: string | null;
            safeWebAuthnSignerFactoryAddress?: string | null;
        };
        RpcUri: {
            /** @enum {string} */
            authentication: "API_KEY_PATH" | "NO_AUTHENTICATION" | "UNKNOWN";
            value: string;
        };
        Theme: {
            backgroundColor: string;
            textColor: string;
        };
        Chain: {
            chainId: string;
            chainName: string;
            description: string;
            chainLogoUri?: string | null;
            l2: boolean;
            isTestnet: boolean;
            nativeCurrency: components["schemas"]["NativeCurrency"];
            transactionService: string;
            blockExplorerUriTemplate: components["schemas"]["BlockExplorerUriTemplate"];
            disabledWallets: string[];
            ensRegistryAddress?: string | null;
            balancesProvider: components["schemas"]["BalancesProvider"];
            contractAddresses: components["schemas"]["ContractAddresses"];
            features: string[];
            gasPrice: (components["schemas"]["GasPriceOracle"] | components["schemas"]["GasPriceFixed"] | components["schemas"]["GasPriceFixedEIP1559"])[];
            publicRpcUri: components["schemas"]["RpcUri"];
            rpcUri: components["schemas"]["RpcUri"];
            safeAppsRpcUri: components["schemas"]["RpcUri"];
            shortName: string;
            theme: components["schemas"]["Theme"];
        };
        ChainPage: {
            count?: number | null;
            next?: string | null;
            previous?: string | null;
            results: components["schemas"]["Chain"];
        };
        AboutChain: {
            transactionServiceBaseUri: string;
            name: string;
            version: string;
            buildNumber: string;
        };
        Backbone: {
            api_version: string;
            headers: Record<string, never>;
            host: string;
            name: string;
            secure: boolean;
            settings: Record<string, never>;
            version: string;
        };
        MasterCopy: {
            address: string;
            version: string;
        };
        Collectible: {
            address: string;
            tokenName: string;
            tokenSymbol: string;
            logoUri: string;
            id: string;
            uri?: string | null;
            name?: string | null;
            description?: string | null;
            imageUri?: string | null;
            metadata?: Record<string, never>;
        };
        CollectiblePage: {
            count?: number | null;
            next?: string | null;
            previous?: string | null;
            results: components["schemas"]["Collectible"];
        };
        ActivityMetadata: {
            name: string;
            description: string;
            maxPoints: number;
        };
        Campaign: {
            resourceId: string;
            name: string;
            description: string;
            startDate: string;
            endDate: string;
            lastUpdated?: string | null;
            activitiesMetadata: components["schemas"]["ActivityMetadata"][];
        };
        CampaignPage: {
            count?: number | null;
            next?: string | null;
            previous?: string | null;
            results: components["schemas"]["Campaign"][];
        };
        CampaignRank: {
            holder: string;
            position: number;
            boost: number;
            totalPoints: number;
            totalBoostedPoints: number;
        };
        CampaignRankPage: {
            count?: number | null;
            next?: string | null;
            previous?: string | null;
            results: components["schemas"]["CampaignRank"];
        };
        LockingRank: {
            holder: string;
            position: number;
            lockedAmount: string;
            unlockedAmount: string;
            withdrawnAmount: string;
        };
        LockingRankPage: {
            count?: number | null;
            next?: string | null;
            previous?: string | null;
            results: components["schemas"]["LockingRank"];
        };
        LockEventItem: {
            /** @enum {string} */
            eventType: "LOCKED";
            executionDate: string;
            transactionHash: string;
            holder: string;
            amount: string;
            logIndex: string;
        };
        UnlockEventItem: {
            /** @enum {string} */
            eventType: "UNLOCKED";
            executionDate: string;
            transactionHash: string;
            holder: string;
            amount: string;
            logIndex: string;
            unlockIndex: string;
        };
        WithdrawEventItem: {
            /** @enum {string} */
            eventType: "WITHDRAWN";
            executionDate: string;
            transactionHash: string;
            holder: string;
            amount: string;
            logIndex: string;
            unlockIndex: string;
        };
        LockingEventPage: {
            count?: number | null;
            next?: string | null;
            previous?: string | null;
            results: (components["schemas"]["LockEventItem"] | components["schemas"]["UnlockEventItem"] | components["schemas"]["WithdrawEventItem"])[];
        };
        Contract: {
            address: string;
            name: string;
            displayName: string;
            logoUri: string;
            contractAbi?: Record<string, never>;
            trustedForDelegateCall: boolean;
        };
        TransactionDataDto: {
            /** @description Hexadecimal value */
            data: string;
            /** @description The target Ethereum address */
            to?: string;
        };
        DataDecodedParameter: {
            name: string;
            type: string;
            value: Record<string, never>;
            valueDecoded: Record<string, never>;
        };
        DataDecoded: {
            method: string;
            parameters?: components["schemas"]["DataDecodedParameter"][] | null;
        };
        Delegate: {
            safe?: string | null;
            delegate: string;
            delegator: string;
            label: string;
        };
        DelegatePage: {
            count?: number | null;
            next?: string | null;
            previous?: string | null;
            results: components["schemas"]["Delegate"];
        };
        CreateDelegateDto: {
            safe?: Record<string, never>;
            delegate: string;
            delegator: string;
            signature: string;
            label: string;
        };
        DeleteDelegateDto: {
            delegate: string;
            delegator: string;
            signature: string;
        };
        DeleteSafeDelegateDto: {
            delegate: string;
            safe: string;
            signature: string;
        };
        DeleteDelegateV2Dto: {
            delegator?: Record<string, never>;
            safe?: Record<string, never>;
            signature: string;
        };
        AddRecoveryModuleDto: {
            moduleAddress: string;
        };
        GetEstimationDto: {
            to: string;
            value: string;
            data?: string | null;
            operation: number;
        };
        EstimationResponse: {
            currentNonce: number;
            recommendedNonce: number;
            safeTxGas: string;
        };
        AddressInfo: {
            value: string;
            name?: string | null;
            logoUri?: string | null;
        };
        Message: {
            messageHash: string;
            status: string;
            logoUri?: string | null;
            name?: string | null;
            message: Record<string, never>;
            creationTimestamp: number;
            modifiedTimestamp: number;
            confirmationsSubmitted: number;
            confirmationsRequired: number;
            proposedBy: components["schemas"]["AddressInfo"];
            confirmations: string[];
            preparedSignature?: string | null;
        };
        MessageItem: {
            messageHash: string;
            status: string;
            logoUri?: string | null;
            name?: string | null;
            message: Record<string, never>;
            creationTimestamp: number;
            modifiedTimestamp: number;
            confirmationsSubmitted: number;
            confirmationsRequired: number;
            proposedBy: components["schemas"]["AddressInfo"];
            confirmations: string[];
            preparedSignature?: string | null;
            type: string;
        };
        DateLabel: {
            type: string;
            timestamp: number;
        };
        MessagePage: {
            count?: number | null;
            next?: string | null;
            previous?: string | null;
            results: (components["schemas"]["MessageItem"] | components["schemas"]["DateLabel"])[];
        };
        CreateMessageDto: {
            message: Record<string, never>;
            safeAppId?: number | null;
            signature: string;
        };
        UpdateMessageSignatureDto: {
            signature: string;
        };
        SafeRegistration: {
            chainId: string;
            safes: string[];
            signatures: string[];
        };
        RegisterDeviceDto: {
            uuid?: string | null;
            cloudMessagingToken: string;
            buildNumber: string;
            bundle: string;
            deviceType: string;
            version: string;
            timestamp?: string | null;
            safeRegistrations: components["schemas"]["SafeRegistration"][];
        };
        SafeList: {
            safes: string[];
        };
        RelayDto: {
            version: string;
            to: string;
            data: string;
            /** @description If specified, a gas buffer of 150k will be added on top of the expected gas usage for the transaction.
             *           This is for the <a href="https://docs.gelato.network/developer-services/relay/quick-start/optional-parameters" target="_blank">
             *           Gelato Relay execution overhead</a>, reducing the chance of the task cancelling before it is executed on-chain. */
            gasLimit?: string | null;
        };
        SafeAppProvider: {
            url: string;
            name: string;
        };
        SafeAppAccessControl: {
            type: string;
            value?: string[] | null;
        };
        SafeAppSocialProfile: {
            platform: string;
            url: string;
        };
        SafeApp: {
            id: number;
            url: string;
            name: string;
            iconUrl: Record<string, never>;
            description: string;
            chainIds: string[];
            provider?: components["schemas"]["SafeAppProvider"] | null;
            accessControl: components["schemas"]["SafeAppAccessControl"];
            tags: string[];
            features: string[];
            developerWebsite?: string | null;
            socialProfiles: components["schemas"]["SafeAppSocialProfile"];
        };
        SafeState: {
            address: components["schemas"]["AddressInfo"];
            chainId: string;
            nonce: number;
            threshold: number;
            owners: string[];
            implementation: components["schemas"]["AddressInfo"];
            modules?: components["schemas"]["AddressInfo"][] | null;
            fallbackHandler?: components["schemas"]["AddressInfo"] | null;
            guard?: components["schemas"]["AddressInfo"] | null;
            version?: string | null;
            /** @enum {string} */
            implementationVersionState: "UP_TO_DATE" | "OUTDATED" | "UNKNOWN";
            collectiblesTag: Record<string, never>;
            txQueuedTag: Record<string, never>;
            txHistoryTag: Record<string, never>;
            messagesTag: Record<string, never>;
        };
        SafeNonces: {
            currentNonce: number;
            recommendedNonce: number;
        };
        RichTokenValueFragment: {
            type: string;
            value: string;
            symbol?: string | null;
            logoUri?: string | null;
        };
        RichTextFragment: {
            type: string;
            value: string;
        };
        RichAddressFragment: {
            type: string;
            value: string;
        };
        RichDecodedInfo: {
            fragments: (components["schemas"]["RichTokenValueFragment"] | components["schemas"]["RichTextFragment"] | components["schemas"]["RichAddressFragment"])[];
        };
        TransactionInfo: {
            type: string;
            humanDescription?: string | null;
            richDecodedInfo?: components["schemas"]["RichDecodedInfo"] | null;
        };
        TransactionData: {
            hexData?: string | null;
            dataDecoded?: components["schemas"]["DataDecoded"] | null;
            to: components["schemas"]["AddressInfo"];
            value?: string | null;
            operation: number;
            trustedDelegateCallTarget?: boolean | null;
            addressInfoIndex?: Record<string, never>;
        };
        MultisigExecutionDetails: {
            type: string;
            submittedAt: number;
            nonce: number;
            safeTxGas: string;
            baseGas: string;
            gasPrice: string;
            gasToken: string;
            refundReceiver: components["schemas"]["AddressInfo"];
            safeTxHash: string;
            executor?: components["schemas"]["AddressInfo"] | null;
            signers: string[];
            confirmationsRequired: number;
            confirmations: string[];
            rejectors: components["schemas"]["AddressInfo"][];
            gasTokenInfo?: components["schemas"]["Token"] | null;
            trusted: boolean;
            proposer?: components["schemas"]["AddressInfo"] | null;
        };
        ModuleExecutionDetails: {
            type: string;
            address: components["schemas"]["AddressInfo"];
        };
        SafeAppInfo: {
            name: string;
            url: string;
            logoUri?: string | null;
        };
        TransactionDetails: {
            safeAddress: string;
            txId: string;
            executedAt?: number | null;
            txStatus: string;
            txInfo: components["schemas"]["TransactionInfo"];
            txData?: components["schemas"]["TransactionData"] | null;
            detailedExecutionInfo?: (components["schemas"]["MultisigExecutionDetails"] | components["schemas"]["ModuleExecutionDetails"]) | null;
            txHash?: string | null;
            safeAppInfo?: components["schemas"]["SafeAppInfo"] | null;
        };
        CreationTransactionInfo: {
            type: string;
            humanDescription?: string | null;
            richDecodedInfo?: components["schemas"]["RichDecodedInfo"] | null;
            creator: components["schemas"]["AddressInfo"];
            transactionHash: string;
            implementation?: components["schemas"]["AddressInfo"] | null;
            factory?: components["schemas"]["AddressInfo"] | null;
        };
        CustomTransactionInfo: {
            type: string;
            humanDescription?: string | null;
            richDecodedInfo?: components["schemas"]["RichDecodedInfo"] | null;
            to: components["schemas"]["AddressInfo"];
            dataSize: string;
            value: Record<string, never>;
            isCancellation: boolean;
            methodName?: string | null;
            actionCount?: number | null;
        };
        SettingsChangeTransaction: {
            type: string;
            humanDescription?: string | null;
            richDecodedInfo?: components["schemas"]["RichDecodedInfo"] | null;
            dataDecoded: components["schemas"]["DataDecoded"];
            settingsInfo?: Record<string, never>;
        };
        Transfer: {
            type: string;
        };
        TransferTransactionInfo: {
            type: string;
            humanDescription?: string | null;
            richDecodedInfo?: components["schemas"]["RichDecodedInfo"] | null;
            sender: components["schemas"]["AddressInfo"];
            recipient: components["schemas"]["AddressInfo"];
            direction: string;
            transferInfo: components["schemas"]["Transfer"];
        };
        ModuleExecutionInfo: {
            type: string;
            address: components["schemas"]["AddressInfo"];
        };
        MultisigExecutionInfo: {
            type: string;
            nonce: number;
            confirmationsRequired: number;
            confirmationsSubmitted: number;
            missingSigners?: components["schemas"]["AddressInfo"][] | null;
        };
        TokenInfo: {
            /** @description The token address */
            address: string;
            /** @description The token decimals */
            decimals: number;
            /** @description The logo URI for the token */
            logoUri?: string | null;
            /** @description The token name */
            name: string;
            /** @description The token symbol */
            symbol: string;
            /** @description The token trusted status */
            trusted: boolean;
        };
        SwapOrderTransactionInfo: {
            /** @enum {string} */
            type: "SwapOrder";
            humanDescription?: string | null;
            richDecodedInfo?: components["schemas"]["RichDecodedInfo"] | null;
            /** @description The order UID */
            uid: string;
            /** @enum {string} */
            status: "presignaturePending" | "open" | "fulfilled" | "cancelled" | "expired" | "unknown";
            /** @enum {string} */
            kind: "buy" | "sell" | "unknown";
            /** @enum {string} */
            orderClass: "market" | "limit" | "liquidity" | "unknown";
            /** @description The timestamp when the order expires */
            validUntil: number;
            /** @description The sell token raw amount (no decimals) */
            sellAmount: string;
            /** @description The buy token raw amount (no decimals) */
            buyAmount: string;
            /** @description The executed sell token raw amount (no decimals) */
            executedSellAmount: string;
            /** @description The executed buy token raw amount (no decimals) */
            executedBuyAmount: string;
            /** @description The sell token of the order */
            sellToken: components["schemas"]["TokenInfo"];
            /** @description The buy token of the order */
            buyToken: components["schemas"]["TokenInfo"];
            /** @description The URL to the explorer page of the order */
            explorerUrl: string;
            /** @description The amount of fees paid for this order. */
            executedSurplusFee?: string | null;
            /** @description The (optional) address to receive the proceeds of the trade */
            receiver?: string | null;
            owner: string;
            /** @description The App Data for this order */
            fullAppData?: Record<string, never>;
        };
        SwapTransferTransactionInfo: {
            type: string;
            humanDescription?: string | null;
            richDecodedInfo?: components["schemas"]["RichDecodedInfo"] | null;
            sender: components["schemas"]["AddressInfo"];
            recipient: components["schemas"]["AddressInfo"];
            direction: string;
            transferInfo: components["schemas"]["Transfer"];
            /** @description The order UID */
            uid: string;
            /** @enum {string} */
            status: "presignaturePending" | "open" | "fulfilled" | "cancelled" | "expired" | "unknown";
            /** @enum {string} */
            kind: "buy" | "sell" | "unknown";
            /** @enum {string} */
            orderClass: "market" | "limit" | "liquidity" | "unknown";
            /** @description The timestamp when the order expires */
            validUntil: number;
            /** @description The sell token raw amount (no decimals) */
            sellAmount: string;
            /** @description The buy token raw amount (no decimals) */
            buyAmount: string;
            /** @description The executed sell token raw amount (no decimals) */
            executedSellAmount: string;
            /** @description The executed buy token raw amount (no decimals) */
            executedBuyAmount: string;
            /** @description The sell token of the order */
            sellToken: components["schemas"]["TokenInfo"];
            /** @description The buy token of the order */
            buyToken: components["schemas"]["TokenInfo"];
            /** @description The URL to the explorer page of the order */
            explorerUrl: string;
            /** @description The amount of fees paid for this order. */
            executedSurplusFee?: string | null;
            /** @description The (optional) address to receive the proceeds of the trade */
            receiver?: string | null;
            owner: string;
            /** @description The App Data for this order */
            fullAppData?: Record<string, never>;
        };
        TwapOrderTransactionInfo: {
            /** @enum {string} */
            type: "TwapOrder";
            humanDescription?: string | null;
            richDecodedInfo?: components["schemas"]["RichDecodedInfo"] | null;
            /**
             * @description The TWAP status
             * @enum {string}
             */
            status: "presignaturePending" | "open" | "fulfilled" | "cancelled" | "expired" | "unknown";
            /** @enum {string} */
            kind: "buy" | "sell" | "unknown";
            /** @enum {string} */
            class?: "market" | "limit" | "liquidity" | "unknown";
            /** @description The order UID of the active order, or null if none is active */
            activeOrderUid: Record<string, never>;
            /** @description The timestamp when the TWAP expires */
            validUntil: number;
            /** @description The sell token raw amount (no decimals) */
            sellAmount: string;
            /** @description The buy token raw amount (no decimals) */
            buyAmount: string;
            /** @description The executed sell token raw amount (no decimals), or null if there are too many parts */
            executedSellAmount?: Record<string, never>;
            /** @description The executed buy token raw amount (no decimals), or null if there are too many parts */
            executedBuyAmount?: Record<string, never>;
            /** @description The executed surplus fee raw amount (no decimals), or null if there are too many parts */
            executedSurplusFee?: Record<string, never>;
            /** @description The sell token of the TWAP */
            sellToken: components["schemas"]["TokenInfo"];
            /** @description The buy token of the TWAP */
            buyToken: components["schemas"]["TokenInfo"];
            /** @description The address to receive the proceeds of the trade */
            receiver: string;
            owner: string;
            /** @description The App Data for this TWAP */
            fullAppData?: Record<string, never>;
            /** @description The number of parts in the TWAP */
            numberOfParts: string;
            /** @description The amount of sellToken to sell in each part */
            partSellAmount: string;
            /** @description The amount of buyToken that must be bought in each part */
            minPartLimit: string;
            /** @description The duration of the TWAP interval */
            timeBetweenParts: number;
            /** @description Whether the TWAP is valid for the entire interval or not */
            durationOfPart: Record<string, never>;
            /** @description The start time of the TWAP */
            startTime: Record<string, never>;
        };
        Transaction: {
            id: string;
            txHash: Record<string, never>;
            timestamp: Record<string, never>;
            txStatus: string;
            txInfo: components["schemas"]["TransactionInfo"] & (components["schemas"]["CreationTransactionInfo"] | components["schemas"]["CustomTransactionInfo"] | components["schemas"]["SettingsChangeTransaction"] | components["schemas"]["SwapOrderTransactionInfo"] | components["schemas"]["SwapTransferTransactionInfo"] | components["schemas"]["TwapOrderTransactionInfo"] | components["schemas"]["TransferTransactionInfo"]);
            executionInfo?: (components["schemas"]["MultisigExecutionInfo"] | components["schemas"]["ModuleExecutionInfo"]) | null;
            safeAppInfo?: components["schemas"]["SafeAppInfo"] | null;
        };
        MultisigTransaction: {
            type: string;
            transaction: components["schemas"]["Transaction"];
            conflictType: string;
        };
        MultisigTransactionPage: {
            count?: number | null;
            next?: string | null;
            previous?: string | null;
            results: components["schemas"]["MultisigTransaction"];
        };
        DeleteTransactionDto: {
            signature: string;
        };
        ModuleTransaction: {
            type: string;
            transaction: components["schemas"]["Transaction"];
            conflictType: string;
        };
        ModuleTransactionPage: {
            count?: number | null;
            next?: string | null;
            previous?: string | null;
            results: components["schemas"]["ModuleTransaction"];
        };
        AddConfirmationDto: {
            signedSafeTxHash: string;
        };
        IncomingTransfer: {
            type: string;
            transaction: components["schemas"]["Transaction"];
            conflictType: string;
        };
        IncomingTransferPage: {
            count?: number | null;
            next?: string | null;
            previous?: string | null;
            results: components["schemas"]["IncomingTransfer"];
        };
        PreviewTransactionDto: {
            to: string;
            data?: string | null;
            value: string;
            operation: number;
        };
        TransactionPreview: {
            txInfo: components["schemas"]["TransactionInfo"] & (components["schemas"]["CreationTransactionInfo"] | components["schemas"]["CustomTransactionInfo"] | components["schemas"]["SettingsChangeTransaction"] | components["schemas"]["TransferTransactionInfo"]);
            txData: components["schemas"]["TransactionData"];
        };
        ConflictHeaderQueuedItem: {
            type: string;
            nonce: number;
        };
        LabelQueuedItem: {
            type: string;
            label: string;
        };
        TransactionQueuedItem: {
            type: string;
            transaction: components["schemas"]["Transaction"];
            conflictType: string;
        };
        QueuedItemPage: {
            count?: number | null;
            next?: string | null;
            previous?: string | null;
            results: (components["schemas"]["ConflictHeaderQueuedItem"] | components["schemas"]["LabelQueuedItem"] | components["schemas"]["TransactionQueuedItem"])[];
        };
        TransactionItem: {
            type: string;
            transaction: components["schemas"]["Transaction"];
            conflictType: string;
        };
        TransactionItemPage: {
            count?: number | null;
            next?: string | null;
            previous?: string | null;
            results: (components["schemas"]["TransactionItem"] | components["schemas"]["DateLabel"])[];
        };
        ProposeTransactionDto: {
            to: string;
            value: string;
            data?: string | null;
            nonce: string;
            operation: number;
            safeTxGas: string;
            baseGas: string;
            gasPrice: string;
            gasToken: string;
            refundReceiver?: string | null;
            safeTxHash: string;
            sender: string;
            signature?: string | null;
            origin?: string | null;
        };
        BaselineConfirmationView: {
            /** @enum {string} */
            type: "GENERIC";
            method: string;
            parameters?: components["schemas"]["DataDecodedParameter"][] | null;
        };
        CowSwapConfirmationView: {
            /** @enum {string} */
            type: "COW_SWAP_ORDER";
            method: string;
            parameters?: components["schemas"]["DataDecodedParameter"][] | null;
            /** @description The order UID */
            uid: string;
            /** @enum {string} */
            status: "presignaturePending" | "open" | "fulfilled" | "cancelled" | "expired" | "unknown";
            /** @enum {string} */
            kind: "buy" | "sell" | "unknown";
            /** @enum {string} */
            orderClass: "market" | "limit" | "liquidity" | "unknown";
            /** @description The timestamp when the order expires */
            validUntil: number;
            /** @description The sell token raw amount (no decimals) */
            sellAmount: string;
            /** @description The buy token raw amount (no decimals) */
            buyAmount: string;
            /** @description The executed sell token raw amount (no decimals) */
            executedSellAmount: string;
            /** @description The executed buy token raw amount (no decimals) */
            executedBuyAmount: string;
            /** @description The URL to the explorer page of the order */
            explorerUrl: string;
            /** @description The amount of fees paid for this order. */
            executedSurplusFee?: string | null;
            /** @description The (optional) address to receive the proceeds of the trade */
            receiver?: string | null;
            owner: string;
            /** @description The App Data for this order */
            fullAppData?: Record<string, never>;
            /** @description The sell token of the order */
            sellToken: components["schemas"]["TokenInfo"];
            /** @description The buy token of the order */
            buyToken: components["schemas"]["TokenInfo"];
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    AboutController_getAbout: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["About"];
                };
            };
        };
    };
    AccountsController_createAccount: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateAccountDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Account"];
                };
            };
        };
    };
    AccountsController_getDataTypes: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AccountDataType"][];
                };
            };
        };
    };
    AccountsController_getAccountDataSettings: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                address: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AccountDataSetting"][];
                };
            };
        };
    };
    AccountsController_upsertAccountDataSettings: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                address: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpsertAccountDataSettingsDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AccountDataSetting"][];
                };
            };
        };
    };
    AccountsController_getAccount: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                address: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Account"];
                };
            };
        };
    };
    AccountsController_deleteAccount: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                address: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CounterfactualSafesController_getCounterfactualSafe: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                address: string;
                chainId: string;
                predictedAddress: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CounterfactualSafe"];
                };
            };
        };
    };
    CounterfactualSafesController_deleteCounterfactualSafe: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                address: string;
                chainId: string;
                predictedAddress: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CounterfactualSafesController_getCounterfactualSafes: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                address: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CounterfactualSafe"][];
                };
            };
        };
    };
    CounterfactualSafesController_createCounterfactualSafe: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                address: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateCounterfactualSafeDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CounterfactualSafe"];
                };
            };
        };
    };
    CounterfactualSafesController_deleteCounterfactualSafes: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                address: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    BalancesController_getBalances: {
        parameters: {
            query: {
                trusted: boolean;
                exclude_spam: boolean;
            };
            header?: never;
            path: {
                chainId: string;
                safeAddress: string;
                fiatCode: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Balances"];
                };
            };
        };
    };
    BalancesController_getSupportedFiatCodes: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ChainsController_getChains: {
        parameters: {
            query?: {
                cursor?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChainPage"];
                };
            };
        };
    };
    ChainsController_getChain: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                chainId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Chain"];
                };
            };
        };
    };
    ChainsController_getAboutChain: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                chainId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AboutChain"];
                };
            };
        };
    };
    ChainsController_getBackbone: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                chainId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Backbone"];
                };
            };
        };
    };
    ChainsController_getMasterCopies: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                chainId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MasterCopy"][];
                };
            };
        };
    };
    CollectiblesController_getCollectibles: {
        parameters: {
            query?: {
                trusted?: boolean;
                exclude_spam?: boolean;
                cursor?: string;
            };
            header?: never;
            path: {
                chainId: string;
                safeAddress: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CollectiblePage"];
                };
            };
        };
    };
    CommunityController_getCampaigns: {
        parameters: {
            query?: {
                cursor?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CampaignPage"];
                };
            };
        };
    };
    CommunityController_getCampaignById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                resourceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Campaign"];
                };
            };
        };
    };
    CommunityController_getCampaignActivities: {
        parameters: {
            query: {
                holder: string;
            };
            header?: never;
            path: {
                resourceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CommunityController_getCampaignLeaderboard: {
        parameters: {
            query?: {
                cursor?: string;
            };
            header?: never;
            path: {
                resourceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CampaignRankPage"];
                };
            };
        };
    };
    CommunityController_getCampaignRank: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                resourceId: string;
                safeAddress: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CampaignRank"];
                };
            };
        };
    };
    CommunityController_getLeaderboard: {
        parameters: {
            query?: {
                cursor?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LockingRankPage"];
                };
            };
        };
    };
    CommunityController_getLockingRank: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                safeAddress: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LockingRank"];
                };
            };
        };
    };
    CommunityController_getLockingHistory: {
        parameters: {
            query?: {
                cursor?: string;
            };
            header?: never;
            path: {
                safeAddress: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LockingEventPage"];
                };
            };
        };
    };
    ContractsController_getContract: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                chainId: string;
                contractAddress: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Contract"];
                };
            };
        };
    };
    DataDecodedController_getDataDecoded: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                chainId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TransactionDataDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DataDecoded"];
                };
            };
        };
    };
    DelegatesController_getDelegates: {
        parameters: {
            query?: {
                safe?: string;
                delegate?: string;
                delegator?: string;
                label?: string;
                cursor?: string;
            };
            header?: never;
            path: {
                chainId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DelegatePage"];
                };
            };
        };
    };
    DelegatesController_postDelegate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                chainId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateDelegateDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DelegatesController_deleteDelegate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                chainId: string;
                delegateAddress: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DeleteDelegateDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DelegatesController_deleteSafeDelegate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                chainId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DeleteSafeDelegateDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DelegatesV2Controller_getDelegates: {
        parameters: {
            query?: {
                safe?: string;
                delegate?: string;
                delegator?: string;
                label?: string;
                cursor?: string;
            };
            header?: never;
            path: {
                chainId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DelegatePage"];
                };
            };
        };
    };
    DelegatesV2Controller_postDelegate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                chainId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateDelegateDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DelegatesV2Controller_deleteDelegate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                chainId: string;
                delegateAddress: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DeleteDelegateV2Dto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RecoveryController_addRecoveryModule: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                chainId: string;
                safeAddress: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AddRecoveryModuleDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RecoveryController_deleteRecoveryModule: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                chainId: string;
                moduleAddress: string;
                safeAddress: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    EstimationsController_getEstimation: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                chainId: string;
                address: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["GetEstimationDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EstimationResponse"];
                };
            };
        };
    };
    MessagesController_getMessageByHash: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                chainId: string;
                messageHash: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Message"];
                };
            };
        };
    };
    MessagesController_getMessagesBySafe: {
        parameters: {
            query?: {
                cursor?: string;
            };
            header?: never;
            path: {
                chainId: string;
                safeAddress: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MessagePage"];
                };
            };
        };
    };
    MessagesController_createMessage: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                chainId: string;
                safeAddress: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateMessageDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    MessagesController_updateMessageSignature: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                chainId: string;
                messageHash: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateMessageSignatureDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    NotificationsController_registerDevice: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RegisterDeviceDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    NotificationsController_unregisterDevice: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                chainId: string;
                uuid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    NotificationsController_unregisterSafe: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                chainId: string;
                uuid: string;
                safeAddress: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    OwnersController_getSafesByOwner: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                chainId: string;
                ownerAddress: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SafeList"];
                };
            };
        };
    };
    OwnersController_getAllSafesByOwner: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ownerAddress: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SafeList"];
                };
            };
        };
    };
    RelayController_relay: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                chainId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RelayDto"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RelayController_getRelaysRemaining: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                chainId: string;
                safeAddress: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    SafeAppsController_getSafeApps: {
        parameters: {
            query?: {
                clientUrl?: string;
                url?: string;
            };
            header?: never;
            path: {
                chainId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SafeApp"][];
                };
            };
        };
    };
    SafesController_getSafe: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                chainId: string;
                safeAddress: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SafeState"];
                };
            };
        };
    };
    SafesController_getNonces: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                chainId: string;
                safeAddress: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SafeNonces"];
                };
            };
        };
    };
    SafesController_getSafeOverview: {
        parameters: {
            query: {
                currency: string;
                safes: string[];
                trusted: boolean;
                exclude_spam: boolean;
                wallet_address?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    TransactionsController_getTransactionById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                chainId: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TransactionDetails"];
                };
            };
        };
    };
    TransactionsController_getMultisigTransactions: {
        parameters: {
            query?: {
                execution_date__gte?: string;
                execution_date__lte?: string;
                to?: string;
                value?: string;
                nonce?: string;
                executed?: boolean;
                cursor?: string;
            };
            header?: never;
            path: {
                chainId: string;
                safeAddress: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MultisigTransactionPage"];
                };
            };
        };
    };
    TransactionsController_deleteTransaction: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                chainId: string;
                safeTxHash: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DeleteTransactionDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    TransactionsController_getModuleTransactions: {
        parameters: {
            query: {
                to?: string;
                module?: string;
                transaction_hash: string;
                cursor?: string;
            };
            header?: never;
            path: {
                chainId: string;
                safeAddress: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ModuleTransactionPage"];
                };
            };
        };
    };
    TransactionsController_addConfirmation: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                chainId: string;
                safeTxHash: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AddConfirmationDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Transaction"];
                };
            };
        };
    };
    TransactionsController_getIncomingTransfers: {
        parameters: {
            query: {
                trusted: boolean;
                execution_date__gte?: string;
                execution_date__lte?: string;
                to?: string;
                value?: string;
                token_address?: string;
                cursor?: string;
            };
            header?: never;
            path: {
                chainId: string;
                safeAddress: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["IncomingTransferPage"];
                };
            };
        };
    };
    TransactionsController_previewTransaction: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                chainId: string;
                safeAddress: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PreviewTransactionDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TransactionPreview"];
                };
            };
        };
    };
    TransactionsController_getTransactionQueue: {
        parameters: {
            query?: {
                trusted?: boolean;
                cursor?: string;
            };
            header?: never;
            path: {
                chainId: string;
                safeAddress: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["QueuedItemPage"];
                };
            };
        };
    };
    TransactionsController_getTransactionsHistory: {
        parameters: {
            query: {
                timezone_offset?: string;
                trusted: boolean;
                imitation: boolean;
                cursor?: string;
            };
            header?: never;
            path: {
                chainId: string;
                safeAddress: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TransactionItemPage"];
                };
            };
        };
    };
    TransactionsController_proposeTransaction: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                chainId: string;
                safeAddress: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ProposeTransactionDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Transaction"];
                };
            };
        };
    };
    TransactionsViewController_getTransactionConfirmationView: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                chainId: string;
                safeAddress: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TransactionDataDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BaselineConfirmationView"] | components["schemas"]["CowSwapConfirmationView"];
                };
            };
        };
    };
}
