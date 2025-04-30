// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as qs from './internal/qs';
import * as Core from './core';
import * as Errors from './error';
import * as Pagination from './pagination';
import { type CursorParams, CursorResponse } from './pagination';
import * as Uploads from './uploads';
import * as API from './resources/index';
import {
  AccountPlanCreateParams,
  AccountPlanDeleteParams,
  AccountPlanListParams,
  AccountPlanResponse,
  AccountPlanResponsesCursor,
  AccountPlanRetrieveParams,
  AccountPlanUpdateParams,
  AccountPlans,
} from './resources/account-plans';
import {
  AccountCreateParams,
  AccountDeleteParams,
  AccountEndDateBillingEntitiesParams,
  AccountEndDateBillingEntitiesResponse,
  AccountGetChildrenParams,
  AccountListParams,
  AccountResponse,
  AccountResponsesCursor,
  AccountRetrieveParams,
  AccountSearchParams,
  AccountSearchResponse,
  AccountUpdateParams,
  Accounts,
  Address,
} from './resources/accounts';
import {
  AggregationCreateParams,
  AggregationDeleteParams,
  AggregationListParams,
  AggregationResponse,
  AggregationResponsesCursor,
  AggregationRetrieveParams,
  AggregationUpdateParams,
  Aggregations,
} from './resources/aggregations';
import {
  Authentication,
  AuthenticationGetBearerTokenParams,
  AuthenticationGetBearerTokenResponse,
} from './resources/authentication';
import {
  BillConfig,
  BillConfigResponse,
  BillConfigRetrieveParams,
  BillConfigUpdateParams,
} from './resources/bill-config';
import {
  BillJobCancelParams,
  BillJobCreateParams,
  BillJobListParams,
  BillJobRecalculateParams,
  BillJobResponse,
  BillJobResponsesCursor,
  BillJobRetrieveParams,
  BillJobs,
} from './resources/bill-jobs';
import {
  CommitmentCreateParams,
  CommitmentDeleteParams,
  CommitmentFee,
  CommitmentListParams,
  CommitmentResponse,
  CommitmentResponsesCursor,
  CommitmentRetrieveParams,
  CommitmentSearchParams,
  CommitmentSearchResponse,
  CommitmentUpdateParams,
  Commitments,
} from './resources/commitments';
import {
  CompoundAggregationCreateParams,
  CompoundAggregationDeleteParams,
  CompoundAggregationListParams,
  CompoundAggregationResponse,
  CompoundAggregationResponsesCursor,
  CompoundAggregationRetrieveParams,
  CompoundAggregationUpdateParams,
  CompoundAggregations,
} from './resources/compound-aggregations';
import {
  ContractCreateParams,
  ContractDeleteParams,
  ContractEndDateBillingEntitiesParams,
  ContractEndDateBillingEntitiesResponse,
  ContractListParams,
  ContractResponse,
  ContractResponsesCursor,
  ContractRetrieveParams,
  ContractUpdateParams,
  Contracts,
} from './resources/contracts';
import {
  CounterAdjustmentCreateParams,
  CounterAdjustmentDeleteParams,
  CounterAdjustmentListParams,
  CounterAdjustmentResponse,
  CounterAdjustmentResponsesCursor,
  CounterAdjustmentRetrieveParams,
  CounterAdjustmentUpdateParams,
  CounterAdjustments,
} from './resources/counter-adjustments';
import {
  CounterPricingCreateParams,
  CounterPricingDeleteParams,
  CounterPricingListParams,
  CounterPricingResponse,
  CounterPricingResponsesCursor,
  CounterPricingRetrieveParams,
  CounterPricingUpdateParams,
  CounterPricings,
} from './resources/counter-pricings';
import {
  CounterCreateParams,
  CounterDeleteParams,
  CounterListParams,
  CounterResponse,
  CounterResponsesCursor,
  CounterRetrieveParams,
  CounterUpdateParams,
  Counters,
} from './resources/counters';
import {
  CreditReasonCreateParams,
  CreditReasonDeleteParams,
  CreditReasonListParams,
  CreditReasonResponse,
  CreditReasonResponsesCursor,
  CreditReasonRetrieveParams,
  CreditReasonUpdateParams,
  CreditReasons,
} from './resources/credit-reasons';
import {
  Currencies,
  CurrencyCreateParams,
  CurrencyDeleteParams,
  CurrencyListParams,
  CurrencyResponse,
  CurrencyResponsesCursor,
  CurrencyRetrieveParams,
  CurrencyUpdateParams,
} from './resources/currencies';
import {
  CustomFieldRetrieveParams,
  CustomFieldUpdateParams,
  CustomFields,
  CustomFieldsResponse,
} from './resources/custom-fields';
import {
  DebitReasonCreateParams,
  DebitReasonDeleteParams,
  DebitReasonListParams,
  DebitReasonResponse,
  DebitReasonResponsesCursor,
  DebitReasonRetrieveParams,
  DebitReasonUpdateParams,
  DebitReasons,
} from './resources/debit-reasons';
import {
  EventGetFieldsParams,
  EventGetFieldsResponse,
  EventGetTypesParams,
  EventGetTypesResponse,
  EventListParams,
  EventResponse,
  EventResponsesCursor,
  EventRetrieveParams,
  Events,
} from './resources/events';
import {
  ExternalMappingCreateParams,
  ExternalMappingDeleteParams,
  ExternalMappingListByExternalEntityParams,
  ExternalMappingListByM3terEntityParams,
  ExternalMappingListParams,
  ExternalMappingResponse,
  ExternalMappingResponsesCursor,
  ExternalMappingRetrieveParams,
  ExternalMappingUpdateParams,
  ExternalMappings,
} from './resources/external-mappings';
import {
  IntegrationConfigurationCreateParams,
  IntegrationConfigurationCreateResponse,
  IntegrationConfigurationDeleteParams,
  IntegrationConfigurationDeleteResponse,
  IntegrationConfigurationEnableParams,
  IntegrationConfigurationEnableResponse,
  IntegrationConfigurationGetByEntityParams,
  IntegrationConfigurationListParams,
  IntegrationConfigurationListResponse,
  IntegrationConfigurationListResponsesCursor,
  IntegrationConfigurationResponse,
  IntegrationConfigurationRetrieveParams,
  IntegrationConfigurationUpdateParams,
  IntegrationConfigurationUpdateResponse,
  IntegrationConfigurations,
} from './resources/integration-configurations';
import {
  DataField,
  DerivedField,
  MeterCreateParams,
  MeterDeleteParams,
  MeterListParams,
  MeterResponse,
  MeterResponsesCursor,
  MeterRetrieveParams,
  MeterUpdateParams,
  Meters,
} from './resources/meters';
import {
  NotificationConfigurationCreateParams,
  NotificationConfigurationDeleteParams,
  NotificationConfigurationListParams,
  NotificationConfigurationResponse,
  NotificationConfigurationResponsesCursor,
  NotificationConfigurationRetrieveParams,
  NotificationConfigurationUpdateParams,
  NotificationConfigurations,
} from './resources/notification-configurations';
import {
  OrganizationConfig,
  OrganizationConfigRequest,
  OrganizationConfigResponse,
  OrganizationConfigRetrieveParams,
  OrganizationConfigUpdateParams,
} from './resources/organization-config';
import {
  PermissionPolicies,
  PermissionPolicyAddToServiceUserParams,
  PermissionPolicyAddToServiceUserResponse,
  PermissionPolicyAddToSupportUserParams,
  PermissionPolicyAddToSupportUserResponse,
  PermissionPolicyAddToUserGroupParams,
  PermissionPolicyAddToUserGroupResponse,
  PermissionPolicyAddToUserParams,
  PermissionPolicyAddToUserResponse,
  PermissionPolicyCreateParams,
  PermissionPolicyDeleteParams,
  PermissionPolicyListParams,
  PermissionPolicyRemoveFromServiceUserParams,
  PermissionPolicyRemoveFromServiceUserResponse,
  PermissionPolicyRemoveFromSupportUserParams,
  PermissionPolicyRemoveFromSupportUserResponse,
  PermissionPolicyRemoveFromUserGroupParams,
  PermissionPolicyRemoveFromUserGroupResponse,
  PermissionPolicyRemoveFromUserParams,
  PermissionPolicyRemoveFromUserResponse,
  PermissionPolicyResponse,
  PermissionPolicyResponsesCursor,
  PermissionPolicyRetrieveParams,
  PermissionPolicyUpdateParams,
  PermissionStatementResponse,
  PrincipalPermissionRequest,
} from './resources/permission-policies';
import {
  PlanGroupLinkCreateParams,
  PlanGroupLinkDeleteParams,
  PlanGroupLinkListParams,
  PlanGroupLinkResponse,
  PlanGroupLinkResponsesCursor,
  PlanGroupLinkRetrieveParams,
  PlanGroupLinkUpdateParams,
  PlanGroupLinks,
} from './resources/plan-group-links';
import {
  PlanGroupCreateParams,
  PlanGroupDeleteParams,
  PlanGroupListParams,
  PlanGroupResponse,
  PlanGroupResponsesCursor,
  PlanGroupRetrieveParams,
  PlanGroupUpdateParams,
  PlanGroups,
} from './resources/plan-groups';
import {
  PlanTemplateCreateParams,
  PlanTemplateDeleteParams,
  PlanTemplateListParams,
  PlanTemplateResponse,
  PlanTemplateResponsesCursor,
  PlanTemplateRetrieveParams,
  PlanTemplateUpdateParams,
  PlanTemplates,
} from './resources/plan-templates';
import {
  PlanCreateParams,
  PlanDeleteParams,
  PlanListParams,
  PlanResponse,
  PlanResponsesCursor,
  PlanRetrieveParams,
  PlanUpdateParams,
  Plans,
} from './resources/plans';
import {
  PricingCreateParams,
  PricingDeleteParams,
  PricingListParams,
  PricingResponse,
  PricingResponsesCursor,
  PricingRetrieveParams,
  PricingUpdateParams,
  Pricings,
} from './resources/pricings';
import {
  ProductCreateParams,
  ProductDeleteParams,
  ProductListParams,
  ProductResponse,
  ProductResponsesCursor,
  ProductRetrieveParams,
  ProductUpdateParams,
  Products,
} from './resources/products';
import {
  ResourceGroupAddResourceParams,
  ResourceGroupCreateParams,
  ResourceGroupDeleteParams,
  ResourceGroupListContentsParams,
  ResourceGroupListContentsResponse,
  ResourceGroupListContentsResponsesCursor,
  ResourceGroupListParams,
  ResourceGroupListPermissionsParams,
  ResourceGroupRemoveResourceParams,
  ResourceGroupResponse,
  ResourceGroupResponsesCursor,
  ResourceGroupRetrieveParams,
  ResourceGroupUpdateParams,
  ResourceGroups,
} from './resources/resource-groups';
import {
  ScheduledEventConfigurationCreateParams,
  ScheduledEventConfigurationDeleteParams,
  ScheduledEventConfigurationListParams,
  ScheduledEventConfigurationResponse,
  ScheduledEventConfigurationResponsesCursor,
  ScheduledEventConfigurationRetrieveParams,
  ScheduledEventConfigurationUpdateParams,
  ScheduledEventConfigurations,
} from './resources/scheduled-event-configurations';
import {
  TransactionTypeCreateParams,
  TransactionTypeDeleteParams,
  TransactionTypeListParams,
  TransactionTypeResponse,
  TransactionTypeResponsesCursor,
  TransactionTypeRetrieveParams,
  TransactionTypeUpdateParams,
  TransactionTypes,
} from './resources/transaction-types';
import {
  M3terSignedCredentialsRequest,
  M3terSignedCredentialsResponse,
  Webhook,
  WebhookCreateParams,
  WebhookCreateResponse,
  WebhookDeleteParams,
  WebhookListParams,
  WebhookRetrieveParams,
  WebhookSetActiveParams,
  WebhookSetActiveResponse,
  WebhookUpdateParams,
  WebhookUpdateResponse,
  Webhooks,
  WebhooksCursor,
} from './resources/webhooks';
import {
  Balance,
  BalanceCreateParams,
  BalanceDeleteParams,
  BalanceListParams,
  BalanceRetrieveParams,
  BalanceUpdateParams,
  Balances,
  BalancesCursor,
} from './resources/balances/balances';
import {
  BillApproveParams,
  BillApproveResponse,
  BillDeleteParams,
  BillLatestByAccountParams,
  BillListParams,
  BillLockParams,
  BillResponse,
  BillResponsesCursor,
  BillRetrieveParams,
  BillSearchParams,
  BillSearchResponse,
  BillUpdateStatusParams,
  Bills,
} from './resources/bills/bills';
import {
  AdHocOperationalDataRequest,
  AdHocResponse,
  AdHocUsageDataRequest,
  DataExplorerAccountGroup,
  DataExplorerDimensionGroup,
  DataExplorerTimeGroup,
  DataExportCreateAdhocParams,
  DataExports,
} from './resources/data-exports/data-exports';
import {
  DownloadURLResponse,
  MeasurementRequest,
  SubmitMeasurementsRequest,
  SubmitMeasurementsResponse,
  Usage,
  UsageGetFailedIngestDownloadURLParams,
  UsageQueryParams,
  UsageQueryResponse,
  UsageSubmitParams,
} from './resources/usage/usage';
import {
  UserGetPermissionsParams,
  UserGetUserGroupsParams,
  UserListParams,
  UserMeParams,
  UserMeResponse,
  UserResendPasswordParams,
  UserResponse,
  UserResponsesCursor,
  UserRetrieveParams,
  UserUpdateParams,
  Users,
} from './resources/users/users';

export interface ClientOptions {
  /**
   * Defaults to process.env['M3TER_API_KEY'].
   */
  apiKey?: string | undefined;

  /**
   * Defaults to process.env['M3TER_API_SECRET'].
   */
  apiSecret?: string | undefined;

  /**
   * Defaults to process.env['M3TER_API_TOKEN'].
   */
  token?: string | null | undefined;

  /**
   * Defaults to process.env['M3TER_ORG_ID'].
   */
  orgId?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['M3TER_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number | undefined;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery | undefined;

  /**
   * By default, client-side use of this library is not allowed, as it risks exposing your secret API credentials to attackers.
   * Only set this option to `true` if you understand the risks and have appropriate mitigations in place.
   */
  dangerouslyAllowBrowser?: boolean | undefined;
}

/**
 * API Client for interfacing with the M3ter API.
 */
export class M3ter extends Core.APIClient {
  apiKey: string;
  apiSecret: string;
  token: string | null;
  orgId: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the M3ter API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['M3TER_API_KEY'] ?? undefined]
   * @param {string | undefined} [opts.apiSecret=process.env['M3TER_API_SECRET'] ?? undefined]
   * @param {string | null | undefined} [opts.token=process.env['M3TER_API_TOKEN'] ?? null]
   * @param {string | undefined} [opts.orgId=process.env['M3TER_ORG_ID'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['M3TER_BASE_URL'] ?? https://api.m3ter.com] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   * @param {boolean} [opts.dangerouslyAllowBrowser=false] - By default, client-side use of this library is not allowed, as it risks exposing your secret API credentials to attackers.
   */
  constructor({
    baseURL = Core.readEnv('M3TER_BASE_URL'),
    apiKey = Core.readEnv('M3TER_API_KEY'),
    apiSecret = Core.readEnv('M3TER_API_SECRET'),
    token = Core.readEnv('M3TER_API_TOKEN') ?? null,
    orgId = Core.readEnv('M3TER_ORG_ID'),
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.M3terError(
        "The M3TER_API_KEY environment variable is missing or empty; either provide it, or instantiate the M3ter client with an apiKey option, like new M3ter({ apiKey: 'My API Key' }).",
      );
    }
    if (apiSecret === undefined) {
      throw new Errors.M3terError(
        "The M3TER_API_SECRET environment variable is missing or empty; either provide it, or instantiate the M3ter client with an apiSecret option, like new M3ter({ apiSecret: 'My API Secret' }).",
      );
    }
    if (orgId === undefined) {
      throw new Errors.M3terError(
        "The M3TER_ORG_ID environment variable is missing or empty; either provide it, or instantiate the M3ter client with an orgId option, like new M3ter({ orgId: 'My Org ID' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      apiSecret,
      token,
      orgId,
      ...opts,
      baseURL: baseURL || `https://api.m3ter.com`,
    };

    if (!options.dangerouslyAllowBrowser && Core.isRunningInBrowser()) {
      throw new Errors.M3terError(
        'This is disabled by default, as it risks exposing your secret API credentials to attackers.\nIf you understand the risks and have appropriate mitigations in place,\nyou can set the `dangerouslyAllowBrowser` option to `true`, e.g.,\n\nnew M3ter({ dangerouslyAllowBrowser: true })',
      );
    }

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.apiKey = apiKey;
    this.apiSecret = apiSecret;
    this.token = token;
    this.orgId = orgId;
  }

  authentication: API.Authentication = new API.Authentication(this);
  accounts: API.Accounts = new API.Accounts(this);
  accountPlans: API.AccountPlans = new API.AccountPlans(this);
  aggregations: API.Aggregations = new API.Aggregations(this);
  balances: API.Balances = new API.Balances(this);
  bills: API.Bills = new API.Bills(this);
  billConfig: API.BillConfig = new API.BillConfig(this);
  commitments: API.Commitments = new API.Commitments(this);
  billJobs: API.BillJobs = new API.BillJobs(this);
  compoundAggregations: API.CompoundAggregations = new API.CompoundAggregations(this);
  contracts: API.Contracts = new API.Contracts(this);
  counters: API.Counters = new API.Counters(this);
  counterAdjustments: API.CounterAdjustments = new API.CounterAdjustments(this);
  counterPricings: API.CounterPricings = new API.CounterPricings(this);
  creditReasons: API.CreditReasons = new API.CreditReasons(this);
  currencies: API.Currencies = new API.Currencies(this);
  customFields: API.CustomFields = new API.CustomFields(this);
  dataExports: API.DataExports = new API.DataExports(this);
  debitReasons: API.DebitReasons = new API.DebitReasons(this);
  events: API.Events = new API.Events(this);
  externalMappings: API.ExternalMappings = new API.ExternalMappings(this);
  integrationConfigurations: API.IntegrationConfigurations = new API.IntegrationConfigurations(this);
  meters: API.Meters = new API.Meters(this);
  notificationConfigurations: API.NotificationConfigurations = new API.NotificationConfigurations(this);
  organizationConfig: API.OrganizationConfig = new API.OrganizationConfig(this);
  permissionPolicies: API.PermissionPolicies = new API.PermissionPolicies(this);
  plans: API.Plans = new API.Plans(this);
  planGroups: API.PlanGroups = new API.PlanGroups(this);
  planGroupLinks: API.PlanGroupLinks = new API.PlanGroupLinks(this);
  planTemplates: API.PlanTemplates = new API.PlanTemplates(this);
  pricings: API.Pricings = new API.Pricings(this);
  products: API.Products = new API.Products(this);
  resourceGroups: API.ResourceGroups = new API.ResourceGroups(this);
  scheduledEventConfigurations: API.ScheduledEventConfigurations = new API.ScheduledEventConfigurations(this);
  transactionTypes: API.TransactionTypes = new API.TransactionTypes(this);
  usage: API.Usage = new API.Usage(this);
  users: API.Users = new API.Users(this);
  webhooks: API.Webhooks = new API.Webhooks(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override validateHeaders(headers: Core.Headers, customHeaders: Core.Headers) {
    if (this.token && headers['authorization']) {
      return;
    }
    if (customHeaders['authorization'] === null) {
      return;
    }

    throw new Error(
      'Could not resolve authentication method. Expected the token to be set. Or for the "Authorization" headers to be explicitly omitted',
    );
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    if (this.token == null) {
      return {};
    }
    return { Authorization: `Bearer ${this.token}` };
  }

  protected override stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'comma' });
  }

  static M3ter = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static M3terError = Errors.M3terError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

M3ter.Authentication = Authentication;
M3ter.Accounts = Accounts;
M3ter.AccountResponsesCursor = AccountResponsesCursor;
M3ter.AccountPlans = AccountPlans;
M3ter.AccountPlanResponsesCursor = AccountPlanResponsesCursor;
M3ter.Aggregations = Aggregations;
M3ter.AggregationResponsesCursor = AggregationResponsesCursor;
M3ter.Balances = Balances;
M3ter.BalancesCursor = BalancesCursor;
M3ter.Bills = Bills;
M3ter.BillResponsesCursor = BillResponsesCursor;
M3ter.BillConfig = BillConfig;
M3ter.Commitments = Commitments;
M3ter.CommitmentResponsesCursor = CommitmentResponsesCursor;
M3ter.BillJobs = BillJobs;
M3ter.BillJobResponsesCursor = BillJobResponsesCursor;
M3ter.CompoundAggregations = CompoundAggregations;
M3ter.CompoundAggregationResponsesCursor = CompoundAggregationResponsesCursor;
M3ter.Contracts = Contracts;
M3ter.ContractResponsesCursor = ContractResponsesCursor;
M3ter.Counters = Counters;
M3ter.CounterResponsesCursor = CounterResponsesCursor;
M3ter.CounterAdjustments = CounterAdjustments;
M3ter.CounterAdjustmentResponsesCursor = CounterAdjustmentResponsesCursor;
M3ter.CounterPricings = CounterPricings;
M3ter.CounterPricingResponsesCursor = CounterPricingResponsesCursor;
M3ter.CreditReasons = CreditReasons;
M3ter.CreditReasonResponsesCursor = CreditReasonResponsesCursor;
M3ter.Currencies = Currencies;
M3ter.CurrencyResponsesCursor = CurrencyResponsesCursor;
M3ter.CustomFields = CustomFields;
M3ter.DataExports = DataExports;
M3ter.DebitReasons = DebitReasons;
M3ter.DebitReasonResponsesCursor = DebitReasonResponsesCursor;
M3ter.Events = Events;
M3ter.EventResponsesCursor = EventResponsesCursor;
M3ter.ExternalMappings = ExternalMappings;
M3ter.ExternalMappingResponsesCursor = ExternalMappingResponsesCursor;
M3ter.IntegrationConfigurations = IntegrationConfigurations;
M3ter.IntegrationConfigurationListResponsesCursor = IntegrationConfigurationListResponsesCursor;
M3ter.Meters = Meters;
M3ter.MeterResponsesCursor = MeterResponsesCursor;
M3ter.NotificationConfigurations = NotificationConfigurations;
M3ter.NotificationConfigurationResponsesCursor = NotificationConfigurationResponsesCursor;
M3ter.OrganizationConfig = OrganizationConfig;
M3ter.PermissionPolicies = PermissionPolicies;
M3ter.PermissionPolicyResponsesCursor = PermissionPolicyResponsesCursor;
M3ter.Plans = Plans;
M3ter.PlanResponsesCursor = PlanResponsesCursor;
M3ter.PlanGroups = PlanGroups;
M3ter.PlanGroupResponsesCursor = PlanGroupResponsesCursor;
M3ter.PlanGroupLinks = PlanGroupLinks;
M3ter.PlanGroupLinkResponsesCursor = PlanGroupLinkResponsesCursor;
M3ter.PlanTemplates = PlanTemplates;
M3ter.PlanTemplateResponsesCursor = PlanTemplateResponsesCursor;
M3ter.Pricings = Pricings;
M3ter.PricingResponsesCursor = PricingResponsesCursor;
M3ter.Products = Products;
M3ter.ProductResponsesCursor = ProductResponsesCursor;
M3ter.ResourceGroups = ResourceGroups;
M3ter.ResourceGroupResponsesCursor = ResourceGroupResponsesCursor;
M3ter.ResourceGroupListContentsResponsesCursor = ResourceGroupListContentsResponsesCursor;
M3ter.ScheduledEventConfigurations = ScheduledEventConfigurations;
M3ter.ScheduledEventConfigurationResponsesCursor = ScheduledEventConfigurationResponsesCursor;
M3ter.TransactionTypes = TransactionTypes;
M3ter.TransactionTypeResponsesCursor = TransactionTypeResponsesCursor;
M3ter.Usage = Usage;
M3ter.Users = Users;
M3ter.UserResponsesCursor = UserResponsesCursor;
M3ter.Webhooks = Webhooks;
M3ter.WebhooksCursor = WebhooksCursor;
export declare namespace M3ter {
  export type RequestOptions = Core.RequestOptions;

  export import Cursor = Pagination.Cursor;
  export { type CursorParams as CursorParams, type CursorResponse as CursorResponse };

  export {
    Authentication as Authentication,
    type AuthenticationGetBearerTokenResponse as AuthenticationGetBearerTokenResponse,
    type AuthenticationGetBearerTokenParams as AuthenticationGetBearerTokenParams,
  };

  export {
    Accounts as Accounts,
    type AccountResponse as AccountResponse,
    type Address as Address,
    type AccountEndDateBillingEntitiesResponse as AccountEndDateBillingEntitiesResponse,
    type AccountSearchResponse as AccountSearchResponse,
    AccountResponsesCursor as AccountResponsesCursor,
    type AccountCreateParams as AccountCreateParams,
    type AccountRetrieveParams as AccountRetrieveParams,
    type AccountUpdateParams as AccountUpdateParams,
    type AccountListParams as AccountListParams,
    type AccountDeleteParams as AccountDeleteParams,
    type AccountEndDateBillingEntitiesParams as AccountEndDateBillingEntitiesParams,
    type AccountGetChildrenParams as AccountGetChildrenParams,
    type AccountSearchParams as AccountSearchParams,
  };

  export {
    AccountPlans as AccountPlans,
    type AccountPlanResponse as AccountPlanResponse,
    AccountPlanResponsesCursor as AccountPlanResponsesCursor,
    type AccountPlanCreateParams as AccountPlanCreateParams,
    type AccountPlanRetrieveParams as AccountPlanRetrieveParams,
    type AccountPlanUpdateParams as AccountPlanUpdateParams,
    type AccountPlanListParams as AccountPlanListParams,
    type AccountPlanDeleteParams as AccountPlanDeleteParams,
  };

  export {
    Aggregations as Aggregations,
    type AggregationResponse as AggregationResponse,
    AggregationResponsesCursor as AggregationResponsesCursor,
    type AggregationCreateParams as AggregationCreateParams,
    type AggregationRetrieveParams as AggregationRetrieveParams,
    type AggregationUpdateParams as AggregationUpdateParams,
    type AggregationListParams as AggregationListParams,
    type AggregationDeleteParams as AggregationDeleteParams,
  };

  export {
    Balances as Balances,
    type Balance as Balance,
    BalancesCursor as BalancesCursor,
    type BalanceCreateParams as BalanceCreateParams,
    type BalanceRetrieveParams as BalanceRetrieveParams,
    type BalanceUpdateParams as BalanceUpdateParams,
    type BalanceListParams as BalanceListParams,
    type BalanceDeleteParams as BalanceDeleteParams,
  };

  export {
    Bills as Bills,
    type BillResponse as BillResponse,
    type BillApproveResponse as BillApproveResponse,
    type BillSearchResponse as BillSearchResponse,
    BillResponsesCursor as BillResponsesCursor,
    type BillRetrieveParams as BillRetrieveParams,
    type BillListParams as BillListParams,
    type BillDeleteParams as BillDeleteParams,
    type BillApproveParams as BillApproveParams,
    type BillLatestByAccountParams as BillLatestByAccountParams,
    type BillLockParams as BillLockParams,
    type BillSearchParams as BillSearchParams,
    type BillUpdateStatusParams as BillUpdateStatusParams,
  };

  export {
    BillConfig as BillConfig,
    type BillConfigResponse as BillConfigResponse,
    type BillConfigRetrieveParams as BillConfigRetrieveParams,
    type BillConfigUpdateParams as BillConfigUpdateParams,
  };

  export {
    Commitments as Commitments,
    type CommitmentFee as CommitmentFee,
    type CommitmentResponse as CommitmentResponse,
    type CommitmentSearchResponse as CommitmentSearchResponse,
    CommitmentResponsesCursor as CommitmentResponsesCursor,
    type CommitmentCreateParams as CommitmentCreateParams,
    type CommitmentRetrieveParams as CommitmentRetrieveParams,
    type CommitmentUpdateParams as CommitmentUpdateParams,
    type CommitmentListParams as CommitmentListParams,
    type CommitmentDeleteParams as CommitmentDeleteParams,
    type CommitmentSearchParams as CommitmentSearchParams,
  };

  export {
    BillJobs as BillJobs,
    type BillJobResponse as BillJobResponse,
    BillJobResponsesCursor as BillJobResponsesCursor,
    type BillJobCreateParams as BillJobCreateParams,
    type BillJobRetrieveParams as BillJobRetrieveParams,
    type BillJobListParams as BillJobListParams,
    type BillJobCancelParams as BillJobCancelParams,
    type BillJobRecalculateParams as BillJobRecalculateParams,
  };

  export {
    CompoundAggregations as CompoundAggregations,
    type CompoundAggregationResponse as CompoundAggregationResponse,
    CompoundAggregationResponsesCursor as CompoundAggregationResponsesCursor,
    type CompoundAggregationCreateParams as CompoundAggregationCreateParams,
    type CompoundAggregationRetrieveParams as CompoundAggregationRetrieveParams,
    type CompoundAggregationUpdateParams as CompoundAggregationUpdateParams,
    type CompoundAggregationListParams as CompoundAggregationListParams,
    type CompoundAggregationDeleteParams as CompoundAggregationDeleteParams,
  };

  export {
    Contracts as Contracts,
    type ContractResponse as ContractResponse,
    type ContractEndDateBillingEntitiesResponse as ContractEndDateBillingEntitiesResponse,
    ContractResponsesCursor as ContractResponsesCursor,
    type ContractCreateParams as ContractCreateParams,
    type ContractRetrieveParams as ContractRetrieveParams,
    type ContractUpdateParams as ContractUpdateParams,
    type ContractListParams as ContractListParams,
    type ContractDeleteParams as ContractDeleteParams,
    type ContractEndDateBillingEntitiesParams as ContractEndDateBillingEntitiesParams,
  };

  export {
    Counters as Counters,
    type CounterResponse as CounterResponse,
    CounterResponsesCursor as CounterResponsesCursor,
    type CounterCreateParams as CounterCreateParams,
    type CounterRetrieveParams as CounterRetrieveParams,
    type CounterUpdateParams as CounterUpdateParams,
    type CounterListParams as CounterListParams,
    type CounterDeleteParams as CounterDeleteParams,
  };

  export {
    CounterAdjustments as CounterAdjustments,
    type CounterAdjustmentResponse as CounterAdjustmentResponse,
    CounterAdjustmentResponsesCursor as CounterAdjustmentResponsesCursor,
    type CounterAdjustmentCreateParams as CounterAdjustmentCreateParams,
    type CounterAdjustmentRetrieveParams as CounterAdjustmentRetrieveParams,
    type CounterAdjustmentUpdateParams as CounterAdjustmentUpdateParams,
    type CounterAdjustmentListParams as CounterAdjustmentListParams,
    type CounterAdjustmentDeleteParams as CounterAdjustmentDeleteParams,
  };

  export {
    CounterPricings as CounterPricings,
    type CounterPricingResponse as CounterPricingResponse,
    CounterPricingResponsesCursor as CounterPricingResponsesCursor,
    type CounterPricingCreateParams as CounterPricingCreateParams,
    type CounterPricingRetrieveParams as CounterPricingRetrieveParams,
    type CounterPricingUpdateParams as CounterPricingUpdateParams,
    type CounterPricingListParams as CounterPricingListParams,
    type CounterPricingDeleteParams as CounterPricingDeleteParams,
  };

  export {
    CreditReasons as CreditReasons,
    type CreditReasonResponse as CreditReasonResponse,
    CreditReasonResponsesCursor as CreditReasonResponsesCursor,
    type CreditReasonCreateParams as CreditReasonCreateParams,
    type CreditReasonRetrieveParams as CreditReasonRetrieveParams,
    type CreditReasonUpdateParams as CreditReasonUpdateParams,
    type CreditReasonListParams as CreditReasonListParams,
    type CreditReasonDeleteParams as CreditReasonDeleteParams,
  };

  export {
    Currencies as Currencies,
    type CurrencyResponse as CurrencyResponse,
    CurrencyResponsesCursor as CurrencyResponsesCursor,
    type CurrencyCreateParams as CurrencyCreateParams,
    type CurrencyRetrieveParams as CurrencyRetrieveParams,
    type CurrencyUpdateParams as CurrencyUpdateParams,
    type CurrencyListParams as CurrencyListParams,
    type CurrencyDeleteParams as CurrencyDeleteParams,
  };

  export {
    CustomFields as CustomFields,
    type CustomFieldsResponse as CustomFieldsResponse,
    type CustomFieldRetrieveParams as CustomFieldRetrieveParams,
    type CustomFieldUpdateParams as CustomFieldUpdateParams,
  };

  export {
    DataExports as DataExports,
    type AdHocOperationalDataRequest as AdHocOperationalDataRequest,
    type AdHocResponse as AdHocResponse,
    type AdHocUsageDataRequest as AdHocUsageDataRequest,
    type DataExplorerAccountGroup as DataExplorerAccountGroup,
    type DataExplorerDimensionGroup as DataExplorerDimensionGroup,
    type DataExplorerTimeGroup as DataExplorerTimeGroup,
    type DataExportCreateAdhocParams as DataExportCreateAdhocParams,
  };

  export {
    DebitReasons as DebitReasons,
    type DebitReasonResponse as DebitReasonResponse,
    DebitReasonResponsesCursor as DebitReasonResponsesCursor,
    type DebitReasonCreateParams as DebitReasonCreateParams,
    type DebitReasonRetrieveParams as DebitReasonRetrieveParams,
    type DebitReasonUpdateParams as DebitReasonUpdateParams,
    type DebitReasonListParams as DebitReasonListParams,
    type DebitReasonDeleteParams as DebitReasonDeleteParams,
  };

  export {
    Events as Events,
    type EventResponse as EventResponse,
    type EventGetFieldsResponse as EventGetFieldsResponse,
    type EventGetTypesResponse as EventGetTypesResponse,
    EventResponsesCursor as EventResponsesCursor,
    type EventRetrieveParams as EventRetrieveParams,
    type EventListParams as EventListParams,
    type EventGetFieldsParams as EventGetFieldsParams,
    type EventGetTypesParams as EventGetTypesParams,
  };

  export {
    ExternalMappings as ExternalMappings,
    type ExternalMappingResponse as ExternalMappingResponse,
    ExternalMappingResponsesCursor as ExternalMappingResponsesCursor,
    type ExternalMappingCreateParams as ExternalMappingCreateParams,
    type ExternalMappingRetrieveParams as ExternalMappingRetrieveParams,
    type ExternalMappingUpdateParams as ExternalMappingUpdateParams,
    type ExternalMappingListParams as ExternalMappingListParams,
    type ExternalMappingDeleteParams as ExternalMappingDeleteParams,
    type ExternalMappingListByExternalEntityParams as ExternalMappingListByExternalEntityParams,
    type ExternalMappingListByM3terEntityParams as ExternalMappingListByM3terEntityParams,
  };

  export {
    IntegrationConfigurations as IntegrationConfigurations,
    type IntegrationConfigurationResponse as IntegrationConfigurationResponse,
    type IntegrationConfigurationCreateResponse as IntegrationConfigurationCreateResponse,
    type IntegrationConfigurationUpdateResponse as IntegrationConfigurationUpdateResponse,
    type IntegrationConfigurationListResponse as IntegrationConfigurationListResponse,
    type IntegrationConfigurationDeleteResponse as IntegrationConfigurationDeleteResponse,
    type IntegrationConfigurationEnableResponse as IntegrationConfigurationEnableResponse,
    IntegrationConfigurationListResponsesCursor as IntegrationConfigurationListResponsesCursor,
    type IntegrationConfigurationCreateParams as IntegrationConfigurationCreateParams,
    type IntegrationConfigurationRetrieveParams as IntegrationConfigurationRetrieveParams,
    type IntegrationConfigurationUpdateParams as IntegrationConfigurationUpdateParams,
    type IntegrationConfigurationListParams as IntegrationConfigurationListParams,
    type IntegrationConfigurationDeleteParams as IntegrationConfigurationDeleteParams,
    type IntegrationConfigurationEnableParams as IntegrationConfigurationEnableParams,
    type IntegrationConfigurationGetByEntityParams as IntegrationConfigurationGetByEntityParams,
  };

  export {
    Meters as Meters,
    type DataField as DataField,
    type DerivedField as DerivedField,
    type MeterResponse as MeterResponse,
    MeterResponsesCursor as MeterResponsesCursor,
    type MeterCreateParams as MeterCreateParams,
    type MeterRetrieveParams as MeterRetrieveParams,
    type MeterUpdateParams as MeterUpdateParams,
    type MeterListParams as MeterListParams,
    type MeterDeleteParams as MeterDeleteParams,
  };

  export {
    NotificationConfigurations as NotificationConfigurations,
    type NotificationConfigurationResponse as NotificationConfigurationResponse,
    NotificationConfigurationResponsesCursor as NotificationConfigurationResponsesCursor,
    type NotificationConfigurationCreateParams as NotificationConfigurationCreateParams,
    type NotificationConfigurationRetrieveParams as NotificationConfigurationRetrieveParams,
    type NotificationConfigurationUpdateParams as NotificationConfigurationUpdateParams,
    type NotificationConfigurationListParams as NotificationConfigurationListParams,
    type NotificationConfigurationDeleteParams as NotificationConfigurationDeleteParams,
  };

  export {
    OrganizationConfig as OrganizationConfig,
    type OrganizationConfigRequest as OrganizationConfigRequest,
    type OrganizationConfigResponse as OrganizationConfigResponse,
    type OrganizationConfigRetrieveParams as OrganizationConfigRetrieveParams,
    type OrganizationConfigUpdateParams as OrganizationConfigUpdateParams,
  };

  export {
    PermissionPolicies as PermissionPolicies,
    type PermissionPolicyResponse as PermissionPolicyResponse,
    type PermissionStatementResponse as PermissionStatementResponse,
    type PrincipalPermissionRequest as PrincipalPermissionRequest,
    type PermissionPolicyAddToServiceUserResponse as PermissionPolicyAddToServiceUserResponse,
    type PermissionPolicyAddToSupportUserResponse as PermissionPolicyAddToSupportUserResponse,
    type PermissionPolicyAddToUserResponse as PermissionPolicyAddToUserResponse,
    type PermissionPolicyAddToUserGroupResponse as PermissionPolicyAddToUserGroupResponse,
    type PermissionPolicyRemoveFromServiceUserResponse as PermissionPolicyRemoveFromServiceUserResponse,
    type PermissionPolicyRemoveFromSupportUserResponse as PermissionPolicyRemoveFromSupportUserResponse,
    type PermissionPolicyRemoveFromUserResponse as PermissionPolicyRemoveFromUserResponse,
    type PermissionPolicyRemoveFromUserGroupResponse as PermissionPolicyRemoveFromUserGroupResponse,
    PermissionPolicyResponsesCursor as PermissionPolicyResponsesCursor,
    type PermissionPolicyCreateParams as PermissionPolicyCreateParams,
    type PermissionPolicyRetrieveParams as PermissionPolicyRetrieveParams,
    type PermissionPolicyUpdateParams as PermissionPolicyUpdateParams,
    type PermissionPolicyListParams as PermissionPolicyListParams,
    type PermissionPolicyDeleteParams as PermissionPolicyDeleteParams,
    type PermissionPolicyAddToServiceUserParams as PermissionPolicyAddToServiceUserParams,
    type PermissionPolicyAddToSupportUserParams as PermissionPolicyAddToSupportUserParams,
    type PermissionPolicyAddToUserParams as PermissionPolicyAddToUserParams,
    type PermissionPolicyAddToUserGroupParams as PermissionPolicyAddToUserGroupParams,
    type PermissionPolicyRemoveFromServiceUserParams as PermissionPolicyRemoveFromServiceUserParams,
    type PermissionPolicyRemoveFromSupportUserParams as PermissionPolicyRemoveFromSupportUserParams,
    type PermissionPolicyRemoveFromUserParams as PermissionPolicyRemoveFromUserParams,
    type PermissionPolicyRemoveFromUserGroupParams as PermissionPolicyRemoveFromUserGroupParams,
  };

  export {
    Plans as Plans,
    type PlanResponse as PlanResponse,
    PlanResponsesCursor as PlanResponsesCursor,
    type PlanCreateParams as PlanCreateParams,
    type PlanRetrieveParams as PlanRetrieveParams,
    type PlanUpdateParams as PlanUpdateParams,
    type PlanListParams as PlanListParams,
    type PlanDeleteParams as PlanDeleteParams,
  };

  export {
    PlanGroups as PlanGroups,
    type PlanGroupResponse as PlanGroupResponse,
    PlanGroupResponsesCursor as PlanGroupResponsesCursor,
    type PlanGroupCreateParams as PlanGroupCreateParams,
    type PlanGroupRetrieveParams as PlanGroupRetrieveParams,
    type PlanGroupUpdateParams as PlanGroupUpdateParams,
    type PlanGroupListParams as PlanGroupListParams,
    type PlanGroupDeleteParams as PlanGroupDeleteParams,
  };

  export {
    PlanGroupLinks as PlanGroupLinks,
    type PlanGroupLinkResponse as PlanGroupLinkResponse,
    PlanGroupLinkResponsesCursor as PlanGroupLinkResponsesCursor,
    type PlanGroupLinkCreateParams as PlanGroupLinkCreateParams,
    type PlanGroupLinkRetrieveParams as PlanGroupLinkRetrieveParams,
    type PlanGroupLinkUpdateParams as PlanGroupLinkUpdateParams,
    type PlanGroupLinkListParams as PlanGroupLinkListParams,
    type PlanGroupLinkDeleteParams as PlanGroupLinkDeleteParams,
  };

  export {
    PlanTemplates as PlanTemplates,
    type PlanTemplateResponse as PlanTemplateResponse,
    PlanTemplateResponsesCursor as PlanTemplateResponsesCursor,
    type PlanTemplateCreateParams as PlanTemplateCreateParams,
    type PlanTemplateRetrieveParams as PlanTemplateRetrieveParams,
    type PlanTemplateUpdateParams as PlanTemplateUpdateParams,
    type PlanTemplateListParams as PlanTemplateListParams,
    type PlanTemplateDeleteParams as PlanTemplateDeleteParams,
  };

  export {
    Pricings as Pricings,
    type PricingResponse as PricingResponse,
    PricingResponsesCursor as PricingResponsesCursor,
    type PricingCreateParams as PricingCreateParams,
    type PricingRetrieveParams as PricingRetrieveParams,
    type PricingUpdateParams as PricingUpdateParams,
    type PricingListParams as PricingListParams,
    type PricingDeleteParams as PricingDeleteParams,
  };

  export {
    Products as Products,
    type ProductResponse as ProductResponse,
    ProductResponsesCursor as ProductResponsesCursor,
    type ProductCreateParams as ProductCreateParams,
    type ProductRetrieveParams as ProductRetrieveParams,
    type ProductUpdateParams as ProductUpdateParams,
    type ProductListParams as ProductListParams,
    type ProductDeleteParams as ProductDeleteParams,
  };

  export {
    ResourceGroups as ResourceGroups,
    type ResourceGroupResponse as ResourceGroupResponse,
    type ResourceGroupListContentsResponse as ResourceGroupListContentsResponse,
    ResourceGroupResponsesCursor as ResourceGroupResponsesCursor,
    ResourceGroupListContentsResponsesCursor as ResourceGroupListContentsResponsesCursor,
    type ResourceGroupCreateParams as ResourceGroupCreateParams,
    type ResourceGroupRetrieveParams as ResourceGroupRetrieveParams,
    type ResourceGroupUpdateParams as ResourceGroupUpdateParams,
    type ResourceGroupListParams as ResourceGroupListParams,
    type ResourceGroupDeleteParams as ResourceGroupDeleteParams,
    type ResourceGroupAddResourceParams as ResourceGroupAddResourceParams,
    type ResourceGroupListContentsParams as ResourceGroupListContentsParams,
    type ResourceGroupListPermissionsParams as ResourceGroupListPermissionsParams,
    type ResourceGroupRemoveResourceParams as ResourceGroupRemoveResourceParams,
  };

  export {
    ScheduledEventConfigurations as ScheduledEventConfigurations,
    type ScheduledEventConfigurationResponse as ScheduledEventConfigurationResponse,
    ScheduledEventConfigurationResponsesCursor as ScheduledEventConfigurationResponsesCursor,
    type ScheduledEventConfigurationCreateParams as ScheduledEventConfigurationCreateParams,
    type ScheduledEventConfigurationRetrieveParams as ScheduledEventConfigurationRetrieveParams,
    type ScheduledEventConfigurationUpdateParams as ScheduledEventConfigurationUpdateParams,
    type ScheduledEventConfigurationListParams as ScheduledEventConfigurationListParams,
    type ScheduledEventConfigurationDeleteParams as ScheduledEventConfigurationDeleteParams,
  };

  export {
    TransactionTypes as TransactionTypes,
    type TransactionTypeResponse as TransactionTypeResponse,
    TransactionTypeResponsesCursor as TransactionTypeResponsesCursor,
    type TransactionTypeCreateParams as TransactionTypeCreateParams,
    type TransactionTypeRetrieveParams as TransactionTypeRetrieveParams,
    type TransactionTypeUpdateParams as TransactionTypeUpdateParams,
    type TransactionTypeListParams as TransactionTypeListParams,
    type TransactionTypeDeleteParams as TransactionTypeDeleteParams,
  };

  export {
    Usage as Usage,
    type DownloadURLResponse as DownloadURLResponse,
    type MeasurementRequest as MeasurementRequest,
    type SubmitMeasurementsRequest as SubmitMeasurementsRequest,
    type SubmitMeasurementsResponse as SubmitMeasurementsResponse,
    type UsageQueryResponse as UsageQueryResponse,
    type UsageGetFailedIngestDownloadURLParams as UsageGetFailedIngestDownloadURLParams,
    type UsageQueryParams as UsageQueryParams,
    type UsageSubmitParams as UsageSubmitParams,
  };

  export {
    Users as Users,
    type UserResponse as UserResponse,
    type UserMeResponse as UserMeResponse,
    UserResponsesCursor as UserResponsesCursor,
    type UserRetrieveParams as UserRetrieveParams,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserGetPermissionsParams as UserGetPermissionsParams,
    type UserGetUserGroupsParams as UserGetUserGroupsParams,
    type UserMeParams as UserMeParams,
    type UserResendPasswordParams as UserResendPasswordParams,
  };

  export {
    Webhooks as Webhooks,
    type M3terSignedCredentialsRequest as M3terSignedCredentialsRequest,
    type M3terSignedCredentialsResponse as M3terSignedCredentialsResponse,
    type Webhook as Webhook,
    type WebhookCreateResponse as WebhookCreateResponse,
    type WebhookUpdateResponse as WebhookUpdateResponse,
    type WebhookSetActiveResponse as WebhookSetActiveResponse,
    WebhooksCursor as WebhooksCursor,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookRetrieveParams as WebhookRetrieveParams,
    type WebhookUpdateParams as WebhookUpdateParams,
    type WebhookListParams as WebhookListParams,
    type WebhookDeleteParams as WebhookDeleteParams,
    type WebhookSetActiveParams as WebhookSetActiveParams,
  };

  export type CurrencyConversion = API.CurrencyConversion;
  export type PricingBand = API.PricingBand;
  export type SetString = API.SetString;
}

export { toFile, fileFromPath } from './uploads';
export {
  M3terError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export default M3ter;
