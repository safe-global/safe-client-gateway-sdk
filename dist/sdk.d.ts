/**
 * This file was auto-generated. Do not make direct changes.
 */
import type { paths, operations } from "./schema";
export declare function getClient(): import("openapi-fetch").Client<
  paths,
  `${string}/${string}`
>;
export declare function setBaseUrl(baseUrl: string): void;
export declare function getAbout(
  params: operations["AboutController_getAbout"]["parameters"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
            "application/json": import("./schema").components["schemas"]["About"];
          };
        };
      };
    },
    {
      params: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
    },
    `${string}/${string}`
  >
>;
export declare function createAccount(
  params: operations["AccountsController_createAccount"]["parameters"],
  body: operations["AccountsController_createAccount"]["requestBody"]["content"]["application/json"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody: {
        content: {
          "application/json": import("./schema").components["schemas"]["CreateAccountDto"];
        };
      };
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "application/json": import("./schema").components["schemas"]["Account"];
          };
        };
      };
    },
    {
      params: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      body: {
        address: string;
      };
    },
    `${string}/${string}`
  >
>;
export declare function getDataTypes(
  params: operations["AccountsController_getDataTypes"]["parameters"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
            "application/json": import("./schema").components["schemas"]["AccountDataType"][];
          };
        };
      };
    },
    {
      params: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
    },
    `${string}/${string}`
  >
>;
export declare function getAccountDataSettings(
  params: operations["AccountsController_getAccountDataSettings"]["parameters"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
            "application/json": import("./schema").components["schemas"]["AccountDataSetting"][];
          };
        };
      };
    },
    {
      params: {
        query?: never;
        header?: never;
        path: {
          address: string;
        };
        cookie?: never;
      };
    },
    `${string}/${string}`
  >
>;
export declare function getAccount(
  params: operations["AccountsController_getAccount"]["parameters"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
            "application/json": import("./schema").components["schemas"]["Account"];
          };
        };
      };
    },
    {
      params: {
        query?: never;
        header?: never;
        path: {
          address: string;
        };
        cookie?: never;
      };
    },
    `${string}/${string}`
  >
>;
export declare function getCounterfactualSafe(
  params: operations["CounterfactualSafesController_getCounterfactualSafe"]["parameters"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
            "application/json": import("./schema").components["schemas"]["CounterfactualSafe"];
          };
        };
      };
    },
    {
      params: {
        query?: never;
        header?: never;
        path: {
          address: string;
          chainId: string;
          predictedAddress: string;
        };
        cookie?: never;
      };
    },
    `${string}/${string}`
  >
>;
export declare function getCounterfactualSafes(
  params: operations["CounterfactualSafesController_getCounterfactualSafes"]["parameters"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
            "application/json": import("./schema").components["schemas"]["CounterfactualSafe"][];
          };
        };
      };
    },
    {
      params: {
        query?: never;
        header?: never;
        path: {
          address: string;
        };
        cookie?: never;
      };
    },
    `${string}/${string}`
  >
>;
export declare function getBalances(
  params: operations["BalancesController_getBalances"]["parameters"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
            "application/json": import("./schema").components["schemas"]["Balances"];
          };
        };
      };
    },
    {
      params: {
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
    },
    `${string}/${string}`
  >
>;
export declare function getSupportedFiatCodes(
  params: operations["BalancesController_getSupportedFiatCodes"]["parameters"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
    },
    {
      params: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
    },
    `${string}/${string}`
  >
>;
export declare function getChains(
  params: operations["ChainsController_getChains"]["parameters"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
            "application/json": import("./schema").components["schemas"]["ChainPage"];
          };
        };
      };
    },
    {
      params: {
        query?: {
          cursor?: string;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
    },
    `${string}/${string}`
  >
>;
export declare function getChain(
  params: operations["ChainsController_getChain"]["parameters"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
            "application/json": import("./schema").components["schemas"]["Chain"];
          };
        };
      };
    },
    {
      params: {
        query?: never;
        header?: never;
        path: {
          chainId: string;
        };
        cookie?: never;
      };
    },
    `${string}/${string}`
  >
>;
export declare function getAboutChain(
  params: operations["ChainsController_getAboutChain"]["parameters"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
            "application/json": import("./schema").components["schemas"]["AboutChain"];
          };
        };
      };
    },
    {
      params: {
        query?: never;
        header?: never;
        path: {
          chainId: string;
        };
        cookie?: never;
      };
    },
    `${string}/${string}`
  >
>;
export declare function getBackbone(
  params: operations["ChainsController_getBackbone"]["parameters"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
            "application/json": import("./schema").components["schemas"]["Backbone"];
          };
        };
      };
    },
    {
      params: {
        query?: never;
        header?: never;
        path: {
          chainId: string;
        };
        cookie?: never;
      };
    },
    `${string}/${string}`
  >
>;
export declare function getMasterCopies(
  params: operations["ChainsController_getMasterCopies"]["parameters"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
            "application/json": import("./schema").components["schemas"]["MasterCopy"][];
          };
        };
      };
    },
    {
      params: {
        query?: never;
        header?: never;
        path: {
          chainId: string;
        };
        cookie?: never;
      };
    },
    `${string}/${string}`
  >
>;
export declare function getCollectibles(
  params: operations["CollectiblesController_getCollectibles"]["parameters"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
            "application/json": import("./schema").components["schemas"]["CollectiblePage"];
          };
        };
      };
    },
    {
      params: {
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
    },
    `${string}/${string}`
  >
>;
export declare function getCampaigns(
  params: operations["CommunityController_getCampaigns"]["parameters"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
            "application/json": import("./schema").components["schemas"]["CampaignPage"];
          };
        };
      };
    },
    {
      params: {
        query?: {
          cursor?: string;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
    },
    `${string}/${string}`
  >
>;
export declare function getCampaignById(
  params: operations["CommunityController_getCampaignById"]["parameters"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
            "application/json": import("./schema").components["schemas"]["Campaign"];
          };
        };
      };
    },
    {
      params: {
        query?: never;
        header?: never;
        path: {
          resourceId: string;
        };
        cookie?: never;
      };
    },
    `${string}/${string}`
  >
>;
export declare function getCampaignActivities(
  params: operations["CommunityController_getCampaignActivities"]["parameters"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
    },
    {
      params: {
        query: {
          holder: string;
        };
        header?: never;
        path: {
          resourceId: string;
        };
        cookie?: never;
      };
    },
    `${string}/${string}`
  >
>;
export declare function getCampaignLeaderboard(
  params: operations["CommunityController_getCampaignLeaderboard"]["parameters"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
            "application/json": import("./schema").components["schemas"]["CampaignRankPage"];
          };
        };
      };
    },
    {
      params: {
        query?: {
          cursor?: string;
        };
        header?: never;
        path: {
          resourceId: string;
        };
        cookie?: never;
      };
    },
    `${string}/${string}`
  >
>;
export declare function getCampaignRank(
  params: operations["CommunityController_getCampaignRank"]["parameters"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
            "application/json": import("./schema").components["schemas"]["CampaignRank"];
          };
        };
      };
    },
    {
      params: {
        query?: never;
        header?: never;
        path: {
          resourceId: string;
          safeAddress: string;
        };
        cookie?: never;
      };
    },
    `${string}/${string}`
  >
>;
export declare function getLeaderboard(
  params: operations["CommunityController_getLeaderboard"]["parameters"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
            "application/json": import("./schema").components["schemas"]["LockingRankPage"];
          };
        };
      };
    },
    {
      params: {
        query?: {
          cursor?: string;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
    },
    `${string}/${string}`
  >
>;
export declare function getLockingRank(
  params: operations["CommunityController_getLockingRank"]["parameters"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
            "application/json": import("./schema").components["schemas"]["LockingRank"];
          };
        };
      };
    },
    {
      params: {
        query?: never;
        header?: never;
        path: {
          safeAddress: string;
        };
        cookie?: never;
      };
    },
    `${string}/${string}`
  >
>;
export declare function getLockingHistory(
  params: operations["CommunityController_getLockingHistory"]["parameters"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
            "application/json": import("./schema").components["schemas"]["LockingEventPage"];
          };
        };
      };
    },
    {
      params: {
        query?: {
          cursor?: string;
        };
        header?: never;
        path: {
          safeAddress: string;
        };
        cookie?: never;
      };
    },
    `${string}/${string}`
  >
>;
export declare function getContract(
  params: operations["ContractsController_getContract"]["parameters"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
            "application/json": import("./schema").components["schemas"]["Contract"];
          };
        };
      };
    },
    {
      params: {
        query?: never;
        header?: never;
        path: {
          chainId: string;
          contractAddress: string;
        };
        cookie?: never;
      };
    },
    `${string}/${string}`
  >
>;
export declare function getDataDecoded(
  params: operations["DataDecodedController_getDataDecoded"]["parameters"],
  body: operations["DataDecodedController_getDataDecoded"]["requestBody"]["content"]["application/json"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
          "application/json": import("./schema").components["schemas"]["TransactionDataDto"];
        };
      };
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "application/json": import("./schema").components["schemas"]["DataDecoded"];
          };
        };
      };
    },
    {
      params: {
        query?: never;
        header?: never;
        path: {
          chainId: string;
        };
        cookie?: never;
      };
      body: {
        data: string;
        to?: string;
      };
    },
    `${string}/${string}`
  >
>;
export declare function getDelegates(
  params: operations["DelegatesController_getDelegates"]["parameters"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
            "application/json": import("./schema").components["schemas"]["DelegatePage"];
          };
        };
      };
    },
    {
      params: {
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
    },
    `${string}/${string}`
  >
>;
export declare function deleteDelegate(
  params: operations["DelegatesController_deleteDelegate"]["parameters"],
  body: operations["DelegatesController_deleteDelegate"]["requestBody"]["content"]["application/json"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
          "application/json": import("./schema").components["schemas"]["DeleteDelegateDto"];
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
    },
    {
      params: {
        query?: never;
        header?: never;
        path: {
          chainId: string;
          delegateAddress: string;
        };
        cookie?: never;
      };
      body: {
        delegate: string;
        delegator: string;
        signature: string;
      };
    },
    `${string}/${string}`
  >
>;
export declare function deleteSafeDelegate(
  params: operations["DelegatesController_deleteSafeDelegate"]["parameters"],
  body: operations["DelegatesController_deleteSafeDelegate"]["requestBody"]["content"]["application/json"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
          "application/json": import("./schema").components["schemas"]["DeleteSafeDelegateDto"];
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
    },
    {
      params: {
        query?: never;
        header?: never;
        path: {
          chainId: string;
        };
        cookie?: never;
      };
      body: {
        delegate: string;
        safe: string;
        signature: string;
      };
    },
    `${string}/${string}`
  >
>;
export declare function getDelegatesV2(
  params: operations["DelegatesV2Controller_getDelegates"]["parameters"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
            "application/json": import("./schema").components["schemas"]["DelegatePage"];
          };
        };
      };
    },
    {
      params: {
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
    },
    `${string}/${string}`
  >
>;
export declare function deleteDelegateV2(
  params: operations["DelegatesV2Controller_deleteDelegate"]["parameters"],
  body: operations["DelegatesV2Controller_deleteDelegate"]["requestBody"]["content"]["application/json"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
          "application/json": import("./schema").components["schemas"]["DeleteDelegateV2Dto"];
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
    },
    {
      params: {
        query?: never;
        header?: never;
        path: {
          chainId: string;
          delegateAddress: string;
        };
        cookie?: never;
      };
      body: {
        delegator?: Record<string, never>;
        safe?: Record<string, never>;
        signature: string;
      };
    },
    `${string}/${string}`
  >
>;
export declare function addRecoveryModule(
  params: operations["RecoveryController_addRecoveryModule"]["parameters"],
  body: operations["RecoveryController_addRecoveryModule"]["requestBody"]["content"]["application/json"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
          "application/json": import("./schema").components["schemas"]["AddRecoveryModuleDto"];
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
    },
    {
      params: {
        query?: never;
        header?: never;
        path: {
          chainId: string;
          safeAddress: string;
        };
        cookie?: never;
      };
      body: {
        moduleAddress: string;
      };
    },
    `${string}/${string}`
  >
>;
export declare function deleteRecoveryModule(
  params: operations["RecoveryController_deleteRecoveryModule"]["parameters"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
    },
    {
      params: {
        query?: never;
        header?: never;
        path: {
          chainId: string;
          moduleAddress: string;
          safeAddress: string;
        };
        cookie?: never;
      };
    },
    `${string}/${string}`
  >
>;
export declare function getEstimation(
  params: operations["EstimationsController_getEstimation"]["parameters"],
  body: operations["EstimationsController_getEstimation"]["requestBody"]["content"]["application/json"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
          "application/json": import("./schema").components["schemas"]["GetEstimationDto"];
        };
      };
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "application/json": import("./schema").components["schemas"]["EstimationResponse"];
          };
        };
      };
    },
    {
      params: {
        query?: never;
        header?: never;
        path: {
          chainId: string;
          address: string;
        };
        cookie?: never;
      };
      body: {
        to: string;
        value: string;
        data?: string | null;
        operation: number;
      };
    },
    `${string}/${string}`
  >
>;
export declare function getMessageByHash(
  params: operations["MessagesController_getMessageByHash"]["parameters"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
            "application/json": import("./schema").components["schemas"]["Message"];
          };
        };
      };
    },
    {
      params: {
        query?: never;
        header?: never;
        path: {
          chainId: string;
          messageHash: string;
        };
        cookie?: never;
      };
    },
    `${string}/${string}`
  >
>;
export declare function getMessagesBySafe(
  params: operations["MessagesController_getMessagesBySafe"]["parameters"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
            "application/json": import("./schema").components["schemas"]["MessagePage"];
          };
        };
      };
    },
    {
      params: {
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
    },
    `${string}/${string}`
  >
>;
export declare function updateMessageSignature(
  params: operations["MessagesController_updateMessageSignature"]["parameters"],
  body: operations["MessagesController_updateMessageSignature"]["requestBody"]["content"]["application/json"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
          "application/json": import("./schema").components["schemas"]["UpdateMessageSignatureDto"];
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
    },
    {
      params: {
        query?: never;
        header?: never;
        path: {
          chainId: string;
          messageHash: string;
        };
        cookie?: never;
      };
      body: {
        signature: string;
      };
    },
    `${string}/${string}`
  >
>;
export declare function registerDevice(
  params: operations["NotificationsController_registerDevice"]["parameters"],
  body: operations["NotificationsController_registerDevice"]["requestBody"]["content"]["application/json"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody: {
        content: {
          "application/json": import("./schema").components["schemas"]["RegisterDeviceDto"];
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
    },
    {
      params: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      body: {
        uuid?: string | null;
        cloudMessagingToken: string;
        buildNumber: string;
        bundle: string;
        deviceType: string;
        version: string;
        timestamp?: string | null;
        safeRegistrations: import("./schema").components["schemas"]["SafeRegistration"][];
      };
    },
    `${string}/${string}`
  >
>;
export declare function unregisterDevice(
  params: operations["NotificationsController_unregisterDevice"]["parameters"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
    },
    {
      params: {
        query?: never;
        header?: never;
        path: {
          chainId: string;
          uuid: string;
        };
        cookie?: never;
      };
    },
    `${string}/${string}`
  >
>;
export declare function unregisterSafe(
  params: operations["NotificationsController_unregisterSafe"]["parameters"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
    },
    {
      params: {
        query?: never;
        header?: never;
        path: {
          chainId: string;
          uuid: string;
          safeAddress: string;
        };
        cookie?: never;
      };
    },
    `${string}/${string}`
  >
>;
export declare function getSafesByOwner(
  params: operations["OwnersController_getSafesByOwner"]["parameters"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
            "application/json": import("./schema").components["schemas"]["SafeList"];
          };
        };
      };
    },
    {
      params: {
        query?: never;
        header?: never;
        path: {
          chainId: string;
          ownerAddress: string;
        };
        cookie?: never;
      };
    },
    `${string}/${string}`
  >
>;
export declare function getAllSafesByOwner(
  params: operations["OwnersController_getAllSafesByOwner"]["parameters"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
            "application/json": import("./schema").components["schemas"]["SafeList"];
          };
        };
      };
    },
    {
      params: {
        query?: never;
        header?: never;
        path: {
          ownerAddress: string;
        };
        cookie?: never;
      };
    },
    `${string}/${string}`
  >
>;
export declare function relay(
  params: operations["RelayController_relay"]["parameters"],
  body: operations["RelayController_relay"]["requestBody"]["content"]["application/json"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
          "application/json": import("./schema").components["schemas"]["RelayDto"];
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
    },
    {
      params: {
        query?: never;
        header?: never;
        path: {
          chainId: string;
        };
        cookie?: never;
      };
      body: {
        version: string;
        to: string;
        data: string;
        gasLimit?: string | null;
      };
    },
    `${string}/${string}`
  >
>;
export declare function getRelaysRemaining(
  params: operations["RelayController_getRelaysRemaining"]["parameters"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
    },
    {
      params: {
        query?: never;
        header?: never;
        path: {
          chainId: string;
          safeAddress: string;
        };
        cookie?: never;
      };
    },
    `${string}/${string}`
  >
>;
export declare function getSafeApps(
  params: operations["SafeAppsController_getSafeApps"]["parameters"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
            "application/json": import("./schema").components["schemas"]["SafeApp"][];
          };
        };
      };
    },
    {
      params: {
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
    },
    `${string}/${string}`
  >
>;
export declare function getSafe(
  params: operations["SafesController_getSafe"]["parameters"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
            "application/json": import("./schema").components["schemas"]["SafeState"];
          };
        };
      };
    },
    {
      params: {
        query?: never;
        header?: never;
        path: {
          chainId: string;
          safeAddress: string;
        };
        cookie?: never;
      };
    },
    `${string}/${string}`
  >
>;
export declare function getNonces(
  params: operations["SafesController_getNonces"]["parameters"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
            "application/json": import("./schema").components["schemas"]["SafeNonces"];
          };
        };
      };
    },
    {
      params: {
        query?: never;
        header?: never;
        path: {
          chainId: string;
          safeAddress: string;
        };
        cookie?: never;
      };
    },
    `${string}/${string}`
  >
>;
export declare function getSafeOverview(
  params: operations["SafesController_getSafeOverview"]["parameters"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
    },
    {
      params: {
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
    },
    `${string}/${string}`
  >
>;
export declare function getTransactionById(
  params: operations["TransactionsController_getTransactionById"]["parameters"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
            "application/json": import("./schema").components["schemas"]["TransactionDetails"];
          };
        };
      };
    },
    {
      params: {
        query?: never;
        header?: never;
        path: {
          chainId: string;
          id: string;
        };
        cookie?: never;
      };
    },
    `${string}/${string}`
  >
>;
export declare function getMultisigTransactions(
  params: operations["TransactionsController_getMultisigTransactions"]["parameters"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
            "application/json": import("./schema").components["schemas"]["MultisigTransactionPage"];
          };
        };
      };
    },
    {
      params: {
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
    },
    `${string}/${string}`
  >
>;
export declare function deleteTransaction(
  params: operations["TransactionsController_deleteTransaction"]["parameters"],
  body: operations["TransactionsController_deleteTransaction"]["requestBody"]["content"]["application/json"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
          "application/json": import("./schema").components["schemas"]["DeleteTransactionDto"];
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
    },
    {
      params: {
        query?: never;
        header?: never;
        path: {
          chainId: string;
          safeTxHash: string;
        };
        cookie?: never;
      };
      body: {
        signature: string;
      };
    },
    `${string}/${string}`
  >
>;
export declare function getModuleTransactions(
  params: operations["TransactionsController_getModuleTransactions"]["parameters"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
            "application/json": import("./schema").components["schemas"]["ModuleTransactionPage"];
          };
        };
      };
    },
    {
      params: {
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
    },
    `${string}/${string}`
  >
>;
export declare function addConfirmation(
  params: operations["TransactionsController_addConfirmation"]["parameters"],
  body: operations["TransactionsController_addConfirmation"]["requestBody"]["content"]["application/json"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
          "application/json": import("./schema").components["schemas"]["AddConfirmationDto"];
        };
      };
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "application/json": import("./schema").components["schemas"]["Transaction"];
          };
        };
      };
    },
    {
      params: {
        query?: never;
        header?: never;
        path: {
          chainId: string;
          safeTxHash: string;
        };
        cookie?: never;
      };
      body: {
        signedSafeTxHash: string;
      };
    },
    `${string}/${string}`
  >
>;
export declare function getIncomingTransfers(
  params: operations["TransactionsController_getIncomingTransfers"]["parameters"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
            "application/json": import("./schema").components["schemas"]["IncomingTransferPage"];
          };
        };
      };
    },
    {
      params: {
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
    },
    `${string}/${string}`
  >
>;
export declare function previewTransaction(
  params: operations["TransactionsController_previewTransaction"]["parameters"],
  body: operations["TransactionsController_previewTransaction"]["requestBody"]["content"]["application/json"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
          "application/json": import("./schema").components["schemas"]["PreviewTransactionDto"];
        };
      };
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "application/json": import("./schema").components["schemas"]["TransactionPreview"];
          };
        };
      };
    },
    {
      params: {
        query?: never;
        header?: never;
        path: {
          chainId: string;
          safeAddress: string;
        };
        cookie?: never;
      };
      body: {
        to: string;
        data?: string | null;
        value: string;
        operation: number;
      };
    },
    `${string}/${string}`
  >
>;
export declare function getTransactionQueue(
  params: operations["TransactionsController_getTransactionQueue"]["parameters"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
            "application/json": import("./schema").components["schemas"]["QueuedItemPage"];
          };
        };
      };
    },
    {
      params: {
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
    },
    `${string}/${string}`
  >
>;
export declare function getTransactionsHistory(
  params: operations["TransactionsController_getTransactionsHistory"]["parameters"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
            "application/json": import("./schema").components["schemas"]["TransactionItemPage"];
          };
        };
      };
    },
    {
      params: {
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
    },
    `${string}/${string}`
  >
>;
export declare function proposeTransaction(
  params: operations["TransactionsController_proposeTransaction"]["parameters"],
  body: operations["TransactionsController_proposeTransaction"]["requestBody"]["content"]["application/json"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
          "application/json": import("./schema").components["schemas"]["ProposeTransactionDto"];
        };
      };
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "application/json": import("./schema").components["schemas"]["Transaction"];
          };
        };
      };
    },
    {
      params: {
        query?: never;
        header?: never;
        path: {
          chainId: string;
          safeAddress: string;
        };
        cookie?: never;
      };
      body: {
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
    },
    `${string}/${string}`
  >
>;
export declare function getTransactionConfirmationView(
  params: operations["TransactionsViewController_getTransactionConfirmationView"]["parameters"],
  body: operations["TransactionsViewController_getTransactionConfirmationView"]["requestBody"]["content"]["application/json"],
): Promise<
  import("openapi-fetch").FetchResponse<
    {
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
          "application/json": import("./schema").components["schemas"]["TransactionDataDto"];
        };
      };
      responses: {
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "application/json":
              | import("./schema").components["schemas"]["BaselineConfirmationView"]
              | import("./schema").components["schemas"]["CowSwapConfirmationView"];
          };
        };
      };
    },
    {
      params: {
        query?: never;
        header?: never;
        path: {
          chainId: string;
          safeAddress: string;
        };
        cookie?: never;
      };
      body: {
        data: string;
        to?: string;
      };
    },
    `${string}/${string}`
  >
>;
