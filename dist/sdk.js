"use strict";
/**
 * This file was auto-generated. Do not make direct changes.
 */
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClient = getClient;
exports.setBaseUrl = setBaseUrl;
exports.getAbout = getAbout;
exports.createAccount = createAccount;
exports.getDataTypes = getDataTypes;
exports.getAccountDataSettings = getAccountDataSettings;
exports.getAccount = getAccount;
exports.getCounterfactualSafe = getCounterfactualSafe;
exports.getCounterfactualSafes = getCounterfactualSafes;
exports.getBalances = getBalances;
exports.getSupportedFiatCodes = getSupportedFiatCodes;
exports.getChains = getChains;
exports.getChain = getChain;
exports.getAboutChain = getAboutChain;
exports.getBackbone = getBackbone;
exports.getMasterCopies = getMasterCopies;
exports.getIndexingStatus = getIndexingStatus;
exports.getCollectibles = getCollectibles;
exports.getCampaigns = getCampaigns;
exports.getCampaignById = getCampaignById;
exports.getCampaignActivities = getCampaignActivities;
exports.getCampaignLeaderboard = getCampaignLeaderboard;
exports.getCampaignRank = getCampaignRank;
exports.getLeaderboard = getLeaderboard;
exports.getLockingRank = getLockingRank;
exports.getLockingHistory = getLockingHistory;
exports.getContract = getContract;
exports.getDataDecoded = getDataDecoded;
exports.getDelegates = getDelegates;
exports.deleteDelegate = deleteDelegate;
exports.deleteSafeDelegate = deleteSafeDelegate;
exports.getDelegatesV2 = getDelegatesV2;
exports.deleteDelegateV2 = deleteDelegateV2;
exports.addRecoveryModule = addRecoveryModule;
exports.deleteRecoveryModule = deleteRecoveryModule;
exports.getEstimation = getEstimation;
exports.getMessageByHash = getMessageByHash;
exports.getMessagesBySafe = getMessagesBySafe;
exports.updateMessageSignature = updateMessageSignature;
exports.registerDevice = registerDevice;
exports.unregisterDevice = unregisterDevice;
exports.unregisterSafe = unregisterSafe;
exports.getSafesByOwner = getSafesByOwner;
exports.getAllSafesByOwner = getAllSafesByOwner;
exports.relay = relay;
exports.getRelaysRemaining = getRelaysRemaining;
exports.getSafeApps = getSafeApps;
exports.getSafe = getSafe;
exports.getNonces = getNonces;
exports.getSafeOverview = getSafeOverview;
exports.getTransactionById = getTransactionById;
exports.getMultisigTransactions = getMultisigTransactions;
exports.deleteTransaction = deleteTransaction;
exports.getModuleTransactions = getModuleTransactions;
exports.addConfirmation = addConfirmation;
exports.getIncomingTransfers = getIncomingTransfers;
exports.previewTransaction = previewTransaction;
exports.getTransactionQueue = getTransactionQueue;
exports.getTransactionsHistory = getTransactionsHistory;
exports.proposeTransaction = proposeTransaction;
exports.getCreationTransaction = getCreationTransaction;
exports.getTransactionConfirmationView = getTransactionConfirmationView;
const openapi_fetch_1 = __importDefault(require("openapi-fetch"));
const createClient = openapi_fetch_1.default;
let _client = createClient({
  baseUrl: "https://safe-client.safe.global/api",
});
function getClient() {
  return _client;
}
function setBaseUrl(baseUrl) {
  _client = createClient({ baseUrl });
}
async function getAbout(params) {
  return _client.GET("/about", { params });
}
async function createAccount(params, body) {
  return _client.POST("/v1/accounts", { params, body });
}
async function getDataTypes(params) {
  return _client.GET("/v1/accounts/data-types", { params });
}
async function getAccountDataSettings(params) {
  return _client.GET("/v1/accounts/{address}/data-settings", { params });
}
async function getAccount(params) {
  return _client.GET("/v1/accounts/{address}", { params });
}
async function getCounterfactualSafe(params) {
  return _client.GET(
    "/v1/accounts/{address}/counterfactual-safes/{chainId}/{predictedAddress}",
    { params },
  );
}
async function getCounterfactualSafes(params) {
  return _client.GET("/v1/accounts/{address}/counterfactual-safes", { params });
}
async function getBalances(params) {
  return _client.GET(
    "/v1/chains/{chainId}/safes/{safeAddress}/balances/{fiatCode}",
    { params },
  );
}
async function getSupportedFiatCodes(params) {
  return _client.GET("/v1/balances/supported-fiat-codes", { params });
}
async function getChains(params) {
  return _client.GET("/v1/chains", { params });
}
async function getChain(params) {
  return _client.GET("/v1/chains/{chainId}", { params });
}
async function getAboutChain(params) {
  return _client.GET("/v1/chains/{chainId}/about", { params });
}
async function getBackbone(params) {
  return _client.GET("/v1/chains/{chainId}/about/backbone", { params });
}
async function getMasterCopies(params) {
  return _client.GET("/v1/chains/{chainId}/about/master-copies", { params });
}
async function getIndexingStatus(params) {
  return _client.GET("/v1/chains/{chainId}/about/indexing", { params });
}
async function getCollectibles(params) {
  return _client.GET("/v2/chains/{chainId}/safes/{safeAddress}/collectibles", {
    params,
  });
}
async function getCampaigns(params) {
  return _client.GET("/v1/community/campaigns", { params });
}
async function getCampaignById(params) {
  return _client.GET("/v1/community/campaigns/{resourceId}", { params });
}
async function getCampaignActivities(params) {
  return _client.GET("/v1/community/campaigns/{resourceId}/activities", {
    params,
  });
}
async function getCampaignLeaderboard(params) {
  return _client.GET("/v1/community/campaigns/{resourceId}/leaderboard", {
    params,
  });
}
async function getCampaignRank(params) {
  return _client.GET(
    "/v1/community/campaigns/{resourceId}/leaderboard/{safeAddress}",
    { params },
  );
}
async function getLeaderboard(params) {
  return _client.GET("/v1/community/locking/leaderboard", { params });
}
async function getLockingRank(params) {
  return _client.GET("/v1/community/locking/{safeAddress}/rank", { params });
}
async function getLockingHistory(params) {
  return _client.GET("/v1/community/locking/{safeAddress}/history", { params });
}
async function getContract(params) {
  return _client.GET("/v1/chains/{chainId}/contracts/{contractAddress}", {
    params,
  });
}
async function getDataDecoded(params, body) {
  return _client.POST("/v1/chains/{chainId}/data-decoder", { params, body });
}
async function getDelegates(params) {
  return _client.GET("/v1/chains/{chainId}/delegates", { params });
}
async function deleteDelegate(params, body) {
  return _client.DELETE("/v1/chains/{chainId}/delegates/{delegateAddress}", {
    params,
    body,
  });
}
async function deleteSafeDelegate(params, body) {
  return _client.DELETE(
    "/v1/chains/{chainId}/safes/{safeAddress}/delegates/{delegateAddress}",
    { params, body },
  );
}
async function getDelegatesV2(params) {
  return _client.GET("/v2/chains/{chainId}/delegates", { params });
}
async function deleteDelegateV2(params, body) {
  return _client.DELETE("/v2/chains/{chainId}/delegates/{delegateAddress}", {
    params,
    body,
  });
}
async function addRecoveryModule(params, body) {
  return _client.POST("/v1/chains/{chainId}/safes/{safeAddress}/recovery", {
    params,
    body,
  });
}
async function deleteRecoveryModule(params) {
  return _client.DELETE(
    "/v1/chains/{chainId}/safes/{safeAddress}/recovery/{moduleAddress}",
    { params },
  );
}
async function getEstimation(params, body) {
  return _client.POST(
    "/v2/chains/{chainId}/safes/{address}/multisig-transactions/estimations",
    { params, body },
  );
}
async function getMessageByHash(params) {
  return _client.GET("/v1/chains/{chainId}/messages/{messageHash}", { params });
}
async function getMessagesBySafe(params) {
  return _client.GET("/v1/chains/{chainId}/safes/{safeAddress}/messages", {
    params,
  });
}
async function updateMessageSignature(params, body) {
  return _client.POST(
    "/v1/chains/{chainId}/messages/{messageHash}/signatures",
    { params, body },
  );
}
async function registerDevice(params, body) {
  return _client.POST("/v1/register/notifications", { params, body });
}
async function unregisterDevice(params) {
  return _client.DELETE("/v1/chains/{chainId}/notifications/devices/{uuid}", {
    params,
  });
}
async function unregisterSafe(params) {
  return _client.DELETE(
    "/v1/chains/{chainId}/notifications/devices/{uuid}/safes/{safeAddress}",
    { params },
  );
}
async function getSafesByOwner(params) {
  return _client.GET("/v1/chains/{chainId}/owners/{ownerAddress}/safes", {
    params,
  });
}
async function getAllSafesByOwner(params) {
  return _client.GET("/v1/owners/{ownerAddress}/safes", { params });
}
async function relay(params, body) {
  return _client.POST("/v1/chains/{chainId}/relay", { params, body });
}
async function getRelaysRemaining(params) {
  return _client.GET("/v1/chains/{chainId}/relay/{safeAddress}", { params });
}
async function getSafeApps(params) {
  return _client.GET("/v1/chains/{chainId}/safe-apps", { params });
}
async function getSafe(params) {
  return _client.GET("/v1/chains/{chainId}/safes/{safeAddress}", { params });
}
async function getNonces(params) {
  return _client.GET("/v1/chains/{chainId}/safes/{safeAddress}/nonces", {
    params,
  });
}
async function getSafeOverview(params) {
  return _client.GET("/v1/safes", { params });
}
async function getTransactionById(params) {
  return _client.GET("/v1/chains/{chainId}/transactions/{id}", { params });
}
async function getMultisigTransactions(params) {
  return _client.GET(
    "/v1/chains/{chainId}/safes/{safeAddress}/multisig-transactions",
    { params },
  );
}
async function deleteTransaction(params, body) {
  return _client.DELETE("/v1/chains/{chainId}/transactions/{safeTxHash}", {
    params,
    body,
  });
}
async function getModuleTransactions(params) {
  return _client.GET(
    "/v1/chains/{chainId}/safes/{safeAddress}/module-transactions",
    { params },
  );
}
async function addConfirmation(params, body) {
  return _client.POST(
    "/v1/chains/{chainId}/transactions/{safeTxHash}/confirmations",
    { params, body },
  );
}
async function getIncomingTransfers(params) {
  return _client.GET(
    "/v1/chains/{chainId}/safes/{safeAddress}/incoming-transfers",
    { params },
  );
}
async function previewTransaction(params, body) {
  return _client.POST(
    "/v1/chains/{chainId}/transactions/{safeAddress}/preview",
    { params, body },
  );
}
async function getTransactionQueue(params) {
  return _client.GET(
    "/v1/chains/{chainId}/safes/{safeAddress}/transactions/queued",
    { params },
  );
}
async function getTransactionsHistory(params) {
  return _client.GET(
    "/v1/chains/{chainId}/safes/{safeAddress}/transactions/history",
    { params },
  );
}
async function proposeTransaction(params, body) {
  return _client.POST(
    "/v1/chains/{chainId}/transactions/{safeAddress}/propose",
    { params, body },
  );
}
async function getCreationTransaction(params) {
  return _client.GET(
    "/v1/chains/{chainId}/safes/{safeAddress}/transactions/creation",
    { params },
  );
}
async function getTransactionConfirmationView(params, body) {
  return _client.POST(
    "/v1/chains/{chainId}/safes/{safeAddress}/views/transaction-confirmation",
    { params, body },
  );
}
//# sourceMappingURL=sdk.js.map
