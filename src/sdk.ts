/**
 * This file was auto-generated. Do not make direct changes.
 */

import _createClient from 'openapi-fetch';

import type { paths, operations } from './schema';

const createClient = _createClient<paths>;

let _client = createClient({
  baseUrl: 'https://safe-client.safe.global/api',
})

export function getClient() {
  return _client
}

export function setBaseUrl(baseUrl: string) {
  _client = createClient({ baseUrl });
}

export async function getAbout(params: operations["AboutController_getAbout"]["parameters"]) {
  return _client.GET('/about', { params });
}

export async function createAccount(params: operations["AccountsController_createAccount"]["parameters"], body: operations["AccountsController_createAccount"]["requestBody"]['content']['application/json']) {
  return _client.POST('/v1/accounts', { params, body });
}

export async function getDataTypes(params: operations["AccountsController_getDataTypes"]["parameters"]) {
  return _client.GET('/v1/accounts/data-types', { params });
}

export async function getAccountDataSettings(params: operations["AccountsController_getAccountDataSettings"]["parameters"]) {
  return _client.GET('/v1/accounts/{address}/data-settings', { params });
}

export async function getAccount(params: operations["AccountsController_getAccount"]["parameters"]) {
  return _client.GET('/v1/accounts/{address}', { params });
}

export async function getCounterfactualSafe(params: operations["CounterfactualSafesController_getCounterfactualSafe"]["parameters"]) {
  return _client.GET('/v1/accounts/{address}/counterfactual-safes/{chainId}/{predictedAddress}', { params });
}

export async function getCounterfactualSafes(params: operations["CounterfactualSafesController_getCounterfactualSafes"]["parameters"]) {
  return _client.GET('/v1/accounts/{address}/counterfactual-safes', { params });
}

export async function getBalances(params: operations["BalancesController_getBalances"]["parameters"]) {
  return _client.GET('/v1/chains/{chainId}/safes/{safeAddress}/balances/{fiatCode}', { params });
}

export async function getSupportedFiatCodes(params: operations["BalancesController_getSupportedFiatCodes"]["parameters"]) {
  return _client.GET('/v1/balances/supported-fiat-codes', { params });
}

export async function getChains(params: operations["ChainsController_getChains"]["parameters"]) {
  return _client.GET('/v1/chains', { params });
}

export async function getChain(params: operations["ChainsController_getChain"]["parameters"]) {
  return _client.GET('/v1/chains/{chainId}', { params });
}

export async function getAboutChain(params: operations["ChainsController_getAboutChain"]["parameters"]) {
  return _client.GET('/v1/chains/{chainId}/about', { params });
}

export async function getBackbone(params: operations["ChainsController_getBackbone"]["parameters"]) {
  return _client.GET('/v1/chains/{chainId}/about/backbone', { params });
}

export async function getMasterCopies(params: operations["ChainsController_getMasterCopies"]["parameters"]) {
  return _client.GET('/v1/chains/{chainId}/about/master-copies', { params });
}

export async function getIndexingStatus(params: operations["ChainsController_getIndexingStatus"]["parameters"]) {
  return _client.GET('/v1/chains/{chainId}/about/indexing', { params });
}

export async function getCollectibles(params: operations["CollectiblesController_getCollectibles"]["parameters"]) {
  return _client.GET('/v2/chains/{chainId}/safes/{safeAddress}/collectibles', { params });
}

export async function getCampaigns(params: operations["CommunityController_getCampaigns"]["parameters"]) {
  return _client.GET('/v1/community/campaigns', { params });
}

export async function getCampaignById(params: operations["CommunityController_getCampaignById"]["parameters"]) {
  return _client.GET('/v1/community/campaigns/{resourceId}', { params });
}

export async function getCampaignActivities(params: operations["CommunityController_getCampaignActivities"]["parameters"]) {
  return _client.GET('/v1/community/campaigns/{resourceId}/activities', { params });
}

export async function getCampaignLeaderboard(params: operations["CommunityController_getCampaignLeaderboard"]["parameters"]) {
  return _client.GET('/v1/community/campaigns/{resourceId}/leaderboard', { params });
}

export async function getCampaignRank(params: operations["CommunityController_getCampaignRank"]["parameters"]) {
  return _client.GET('/v1/community/campaigns/{resourceId}/leaderboard/{safeAddress}', { params });
}

export async function getLeaderboard(params: operations["CommunityController_getLeaderboard"]["parameters"]) {
  return _client.GET('/v1/community/locking/leaderboard', { params });
}

export async function getLockingRank(params: operations["CommunityController_getLockingRank"]["parameters"]) {
  return _client.GET('/v1/community/locking/{safeAddress}/rank', { params });
}

export async function getLockingHistory(params: operations["CommunityController_getLockingHistory"]["parameters"]) {
  return _client.GET('/v1/community/locking/{safeAddress}/history', { params });
}

export async function getContract(params: operations["ContractsController_getContract"]["parameters"]) {
  return _client.GET('/v1/chains/{chainId}/contracts/{contractAddress}', { params });
}

export async function getDataDecoded(params: operations["DataDecodedController_getDataDecoded"]["parameters"], body: operations["DataDecodedController_getDataDecoded"]["requestBody"]['content']['application/json']) {
  return _client.POST('/v1/chains/{chainId}/data-decoder', { params, body });
}

export async function getDelegates(params: operations["DelegatesController_getDelegates"]["parameters"]) {
  return _client.GET('/v1/chains/{chainId}/delegates', { params });
}

export async function deleteDelegate(params: operations["DelegatesController_deleteDelegate"]["parameters"], body: operations["DelegatesController_deleteDelegate"]["requestBody"]['content']['application/json']) {
  return _client.DELETE('/v1/chains/{chainId}/delegates/{delegateAddress}', { params, body });
}

export async function deleteSafeDelegate(params: operations["DelegatesController_deleteSafeDelegate"]["parameters"], body: operations["DelegatesController_deleteSafeDelegate"]["requestBody"]['content']['application/json']) {
  return _client.DELETE('/v1/chains/{chainId}/safes/{safeAddress}/delegates/{delegateAddress}', { params, body });
}

export async function getDelegatesV2(params: operations["DelegatesV2Controller_getDelegates"]["parameters"]) {
  return _client.GET('/v2/chains/{chainId}/delegates', { params });
}

export async function deleteDelegateV2(params: operations["DelegatesV2Controller_deleteDelegate"]["parameters"], body: operations["DelegatesV2Controller_deleteDelegate"]["requestBody"]['content']['application/json']) {
  return _client.DELETE('/v2/chains/{chainId}/delegates/{delegateAddress}', { params, body });
}

export async function addRecoveryModule(params: operations["RecoveryController_addRecoveryModule"]["parameters"], body: operations["RecoveryController_addRecoveryModule"]["requestBody"]['content']['application/json']) {
  return _client.POST('/v1/chains/{chainId}/safes/{safeAddress}/recovery', { params, body });
}

export async function deleteRecoveryModule(params: operations["RecoveryController_deleteRecoveryModule"]["parameters"]) {
  return _client.DELETE('/v1/chains/{chainId}/safes/{safeAddress}/recovery/{moduleAddress}', { params });
}

export async function getEstimation(params: operations["EstimationsController_getEstimation"]["parameters"], body: operations["EstimationsController_getEstimation"]["requestBody"]['content']['application/json']) {
  return _client.POST('/v2/chains/{chainId}/safes/{address}/multisig-transactions/estimations', { params, body });
}

export async function getMessageByHash(params: operations["MessagesController_getMessageByHash"]["parameters"]) {
  return _client.GET('/v1/chains/{chainId}/messages/{messageHash}', { params });
}

export async function getMessagesBySafe(params: operations["MessagesController_getMessagesBySafe"]["parameters"]) {
  return _client.GET('/v1/chains/{chainId}/safes/{safeAddress}/messages', { params });
}

export async function updateMessageSignature(params: operations["MessagesController_updateMessageSignature"]["parameters"], body: operations["MessagesController_updateMessageSignature"]["requestBody"]['content']['application/json']) {
  return _client.POST('/v1/chains/{chainId}/messages/{messageHash}/signatures', { params, body });
}

export async function registerDevice(params: operations["NotificationsController_registerDevice"]["parameters"], body: operations["NotificationsController_registerDevice"]["requestBody"]['content']['application/json']) {
  return _client.POST('/v1/register/notifications', { params, body });
}

export async function unregisterDevice(params: operations["NotificationsController_unregisterDevice"]["parameters"]) {
  return _client.DELETE('/v1/chains/{chainId}/notifications/devices/{uuid}', { params });
}

export async function unregisterSafe(params: operations["NotificationsController_unregisterSafe"]["parameters"]) {
  return _client.DELETE('/v1/chains/{chainId}/notifications/devices/{uuid}/safes/{safeAddress}', { params });
}

export async function getSafesByOwner(params: operations["OwnersController_getSafesByOwner"]["parameters"]) {
  return _client.GET('/v1/chains/{chainId}/owners/{ownerAddress}/safes', { params });
}

export async function getAllSafesByOwner(params: operations["OwnersController_getAllSafesByOwner"]["parameters"]) {
  return _client.GET('/v1/owners/{ownerAddress}/safes', { params });
}

export async function relay(params: operations["RelayController_relay"]["parameters"], body: operations["RelayController_relay"]["requestBody"]['content']['application/json']) {
  return _client.POST('/v1/chains/{chainId}/relay', { params, body });
}

export async function getRelaysRemaining(params: operations["RelayController_getRelaysRemaining"]["parameters"]) {
  return _client.GET('/v1/chains/{chainId}/relay/{safeAddress}', { params });
}

export async function getSafeApps(params: operations["SafeAppsController_getSafeApps"]["parameters"]) {
  return _client.GET('/v1/chains/{chainId}/safe-apps', { params });
}

export async function getSafe(params: operations["SafesController_getSafe"]["parameters"]) {
  return _client.GET('/v1/chains/{chainId}/safes/{safeAddress}', { params });
}

export async function getNonces(params: operations["SafesController_getNonces"]["parameters"]) {
  return _client.GET('/v1/chains/{chainId}/safes/{safeAddress}/nonces', { params });
}

export async function getSafeOverview(params: operations["SafesController_getSafeOverview"]["parameters"]) {
  return _client.GET('/v1/safes', { params });
}

export async function getTransactionById(params: operations["TransactionsController_getTransactionById"]["parameters"]) {
  return _client.GET('/v1/chains/{chainId}/transactions/{id}', { params });
}

export async function getMultisigTransactions(params: operations["TransactionsController_getMultisigTransactions"]["parameters"]) {
  return _client.GET('/v1/chains/{chainId}/safes/{safeAddress}/multisig-transactions', { params });
}

export async function deleteTransaction(params: operations["TransactionsController_deleteTransaction"]["parameters"], body: operations["TransactionsController_deleteTransaction"]["requestBody"]['content']['application/json']) {
  return _client.DELETE('/v1/chains/{chainId}/transactions/{safeTxHash}', { params, body });
}

export async function getModuleTransactions(params: operations["TransactionsController_getModuleTransactions"]["parameters"]) {
  return _client.GET('/v1/chains/{chainId}/safes/{safeAddress}/module-transactions', { params });
}

export async function addConfirmation(params: operations["TransactionsController_addConfirmation"]["parameters"], body: operations["TransactionsController_addConfirmation"]["requestBody"]['content']['application/json']) {
  return _client.POST('/v1/chains/{chainId}/transactions/{safeTxHash}/confirmations', { params, body });
}

export async function getIncomingTransfers(params: operations["TransactionsController_getIncomingTransfers"]["parameters"]) {
  return _client.GET('/v1/chains/{chainId}/safes/{safeAddress}/incoming-transfers', { params });
}

export async function previewTransaction(params: operations["TransactionsController_previewTransaction"]["parameters"], body: operations["TransactionsController_previewTransaction"]["requestBody"]['content']['application/json']) {
  return _client.POST('/v1/chains/{chainId}/transactions/{safeAddress}/preview', { params, body });
}

export async function getTransactionQueue(params: operations["TransactionsController_getTransactionQueue"]["parameters"]) {
  return _client.GET('/v1/chains/{chainId}/safes/{safeAddress}/transactions/queued', { params });
}

export async function getTransactionsHistory(params: operations["TransactionsController_getTransactionsHistory"]["parameters"]) {
  return _client.GET('/v1/chains/{chainId}/safes/{safeAddress}/transactions/history', { params });
}

export async function proposeTransaction(params: operations["TransactionsController_proposeTransaction"]["parameters"], body: operations["TransactionsController_proposeTransaction"]["requestBody"]['content']['application/json']) {
  return _client.POST('/v1/chains/{chainId}/transactions/{safeAddress}/propose', { params, body });
}

export async function getTransactionConfirmationView(params: operations["TransactionsViewController_getTransactionConfirmationView"]["parameters"], body: operations["TransactionsViewController_getTransactionConfirmationView"]["requestBody"]['content']['application/json']) {
  return _client.POST('/v1/chains/{chainId}/safes/{safeAddress}/views/transaction-confirmation', { params, body });
}