// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { RequestInit, RequestInfo, BodyInit } from './internal/builtin-types';
import type { HTTPMethod, PromiseOrValue, MergedRequestInit, FinalizedRequestInit } from './internal/types';
import { uuid4 } from './internal/utils/uuid';
import { validatePositiveInteger, isAbsoluteURL, safeJSON } from './internal/utils/values';
import { sleep } from './internal/utils/sleep';
export type { Logger, LogLevel } from './internal/utils/log';
import { castToError, isAbortError } from './internal/errors';
import type { APIResponseProps } from './internal/parse';
import { getPlatformHeaders } from './internal/detect-platform';
import * as Shims from './internal/shims';
import * as Opts from './internal/request-options';
import * as qs from './internal/qs';
import { VERSION } from './version';
import * as Errors from './core/error';
import * as Pagination from './core/pagination';
import { AbstractPage, type CursorParams, CursorResponse } from './core/pagination';
import * as Uploads from './core/uploads';
import * as API from './resources/index';
import { APIPromise } from './core/api-promise';
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
  WebhookDeleteParams,
  WebhookListParams,
  WebhookRetrieveParams,
  WebhookSetActiveParams,
  WebhookUpdateParams,
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
  DataExplorerGroup,
  DataExplorerTimeGroup,
  DataExportCreateAdhocParams,
  DataExports,
} from './resources/data-exports/data-exports';
import {
  ObjectURLResponse,
  StatementCreateCsvParams,
  StatementGetCsvParams,
  StatementGetJsonParams,
  Statements,
} from './resources/statements/statements';
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
import { type Fetch } from './internal/builtin-types';
import { isRunningInBrowser } from './internal/detect-platform';
import { HeadersLike, NullableHeaders, buildHeaders } from './internal/headers';
import { FinalRequestOptions, RequestOptions } from './internal/request-options';
import { readEnv } from './internal/utils/env';
import {
  type LogLevel,
  type Logger,
  formatRequestDetails,
  loggerFor,
  parseLogLevel,
} from './internal/utils/log';
import { isEmptyObj } from './internal/utils/values';
import { toBase64 } from './internal/utils/base64';

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
  orgID?: string | undefined;

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
   *
   * @unit milliseconds
   */
  timeout?: number | undefined;
  /**
   * Additional `RequestInit` options to be passed to `fetch` calls.
   * Properties will be overridden by per-request `fetchOptions`.
   */
  fetchOptions?: MergedRequestInit | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we expect that `fetch` is defined globally.
   */
  fetch?: Fetch | undefined;

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
   * header to `null` in request options.
   */
  defaultHeaders?: HeadersLike | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Record<string, string | undefined> | undefined;

  /**
   * By default, client-side use of this library is not allowed, as it risks exposing your secret API credentials to attackers.
   * Only set this option to `true` if you understand the risks and have appropriate mitigations in place.
   */
  dangerouslyAllowBrowser?: boolean | undefined;

  /**
   * Set the log level.
   *
   * Defaults to process.env['M3TER_LOG'] or 'warn' if it isn't set.
   */
  logLevel?: LogLevel | undefined;

  /**
   * Set the logger.
   *
   * Defaults to globalThis.console.
   */
  logger?: Logger | undefined;
}

/**
 * API Client for interfacing with the M3ter API.
 */
export class M3ter {
  apiKey: string;
  apiSecret: string;
  token: string | null;
  orgID: string;

  tokenExpiry: Date | undefined;

  baseURL: string;
  maxRetries: number;
  timeout: number;
  logger: Logger | undefined;
  logLevel: LogLevel | undefined;
  fetchOptions: MergedRequestInit | undefined;

  private fetch: Fetch;
  #encoder: Opts.RequestEncoder;
  protected idempotencyHeader?: string;
  private _options: ClientOptions;

  /**
   * API Client for interfacing with the M3ter API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['M3TER_API_KEY'] ?? undefined]
   * @param {string | undefined} [opts.apiSecret=process.env['M3TER_API_SECRET'] ?? undefined]
   * @param {string | null | undefined} [opts.token=process.env['M3TER_API_TOKEN'] ?? null]
   * @param {string | undefined} [opts.orgID=process.env['M3TER_ORG_ID'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['M3TER_BASE_URL'] ?? https://api.m3ter.com] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {MergedRequestInit} [opts.fetchOptions] - Additional `RequestInit` options to be passed to `fetch` calls.
   * @param {Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {HeadersLike} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Record<string, string | undefined>} opts.defaultQuery - Default query parameters to include with every request to the API.
   * @param {boolean} [opts.dangerouslyAllowBrowser=false] - By default, client-side use of this library is not allowed, as it risks exposing your secret API credentials to attackers.
   */
  constructor({
    baseURL = readEnv('M3TER_BASE_URL'),
    apiKey = readEnv('M3TER_API_KEY'),
    apiSecret = readEnv('M3TER_API_SECRET'),
    token = readEnv('M3TER_API_TOKEN') ?? null,
    orgID = readEnv('M3TER_ORG_ID'),
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
    if (orgID === undefined) {
      throw new Errors.M3terError(
        "The M3TER_ORG_ID environment variable is missing or empty; either provide it, or instantiate the M3ter client with an orgID option, like new M3ter({ orgID: 'My Org ID' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      apiSecret,
      token,
      orgID,
      ...opts,
      baseURL: baseURL || `https://api.m3ter.com`,
    };

    if (!options.dangerouslyAllowBrowser && isRunningInBrowser()) {
      throw new Errors.M3terError(
        'This is disabled by default, as it risks exposing your secret API credentials to attackers.\nIf you understand the risks and have appropriate mitigations in place,\nyou can set the `dangerouslyAllowBrowser` option to `true`, e.g.,\n\nnew M3ter({ dangerouslyAllowBrowser: true })',
      );
    }

    this.baseURL = options.baseURL!;
    this.timeout = options.timeout ?? M3ter.DEFAULT_TIMEOUT /* 1 minute */;
    this.logger = options.logger ?? console;
    const defaultLogLevel = 'warn';
    // Set default logLevel early so that we can log a warning in parseLogLevel.
    this.logLevel = defaultLogLevel;
    this.logLevel =
      parseLogLevel(options.logLevel, 'ClientOptions.logLevel', this) ??
      parseLogLevel(readEnv('M3TER_LOG'), "process.env['M3TER_LOG']", this) ??
      defaultLogLevel;
    this.fetchOptions = options.fetchOptions;
    this.maxRetries = options.maxRetries ?? 2;
    this.fetch = options.fetch ?? Shims.getDefaultFetch();
    this.#encoder = Opts.FallbackEncoder;

    this._options = options;

    this.apiKey = apiKey;
    this.apiSecret = apiSecret;
    this.token = token;
    this.orgID = orgID;
  }

  /**
   * Create a new client instance re-using the same options given to the current client with optional overriding.
   */
  withOptions(options: Partial<ClientOptions>): this {
    const client = new (this.constructor as any as new (props: ClientOptions) => typeof this)({
      ...this._options,
      baseURL: this.baseURL,
      maxRetries: this.maxRetries,
      timeout: this.timeout,
      logger: this.logger,
      logLevel: this.logLevel,
      fetch: this.fetch,
      fetchOptions: this.fetchOptions,
      apiKey: this.apiKey,
      apiSecret: this.apiSecret,
      token: this.token,
      orgID: this.orgID,
      ...options,
    });
    return client;
  }

  /**
   * Check whether the base URL is set to its default.
   */
  #baseURLOverridden(): boolean {
    return this.baseURL !== 'https://api.m3ter.com';
  }

  protected defaultQuery(): Record<string, string | undefined> | undefined {
    return this._options.defaultQuery;
  }

  protected validateHeaders({ values, nulls }: NullableHeaders) {
    // When making the token request we have an `authorization` header in `customHeaders`.
    // Using this to skip validating the token on token requests themselves.
    if (values.get('authorization')) {
      return;
    }

    if (this.token && values.get('authorization')) {
      return;
    }
    if (nulls.has('authorization')) {
      return;
    }

    throw new Error(
      'Could not resolve authentication method. Expected the token to be set. Or for the "Authorization" headers to be explicitly omitted',
    );
  }

  protected async authHeaders(opts: FinalRequestOptions): Promise<NullableHeaders | undefined> {
    if (this.token == null) {
      return undefined;
    }
    return buildHeaders([{ Authorization: `Bearer ${this.token}` }]);
  }

  protected stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'comma' });
  }

  private getUserAgent(): string {
    return `${this.constructor.name}/JS ${VERSION}`;
  }

  protected defaultIdempotencyKey(): string {
    return `stainless-node-retry-${uuid4()}`;
  }

  protected makeStatusError(
    status: number,
    error: Object,
    message: string | undefined,
    headers: Headers,
  ): Errors.APIError {
    return Errors.APIError.generate(status, error, message, headers);
  }

  buildURL(
    path: string,
    query: Record<string, unknown> | null | undefined,
    defaultBaseURL?: string | undefined,
  ): string {
    const baseURL = (!this.#baseURLOverridden() && defaultBaseURL) || this.baseURL;
    const url =
      isAbsoluteURL(path) ?
        new URL(path)
      : new URL(baseURL + (baseURL.endsWith('/') && path.startsWith('/') ? path.slice(1) : path));

    const defaultQuery = this.defaultQuery();
    if (!isEmptyObj(defaultQuery)) {
      query = { ...defaultQuery, ...query };
    }

    if (typeof query === 'object' && query && !Array.isArray(query)) {
      url.search = this.stringifyQuery(query as Record<string, unknown>);
    }

    return url.toString();
  }

  /**
   * Used as a callback for mutating the given `FinalRequestOptions` object.
   */
  protected async prepareOptions(options: FinalRequestOptions): Promise<void> {
    // When manually setting the token we won't have a `tokenExpiry` so consider that valid.
    const tokenValid = !!this.token && (!this.tokenExpiry || this.tokenExpiry > new Date());

    // Prevent infinite loop of token requests.
    if (!tokenValid && !options.path.endsWith('/oauth/token')) {
      const auth = toBase64(`${this.apiKey}:${this.apiSecret}`);
      const token = await this.authentication.getBearerToken(
        { grant_type: 'client_credentials' },
        { headers: { authorization: `Basic ${auth}` } },
      );
      this.token = token.access_token;

      // Store token expiry (minus 5 minutes) for automatic refreshing.
      const now = new Date();
      this.tokenExpiry = new Date(now.getTime() + token.expires_in * 1000 - 300000);
    }
  }

  /**
   * Used as a callback for mutating the given `RequestInit` object.
   *
   * This is useful for cases where you want to add certain headers based off of
   * the request properties, e.g. `method` or `url`.
   */
  protected async prepareRequest(
    request: RequestInit,
    { url, options }: { url: string; options: FinalRequestOptions },
  ): Promise<void> {}

  get<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('get', path, opts);
  }

  post<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('post', path, opts);
  }

  patch<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('patch', path, opts);
  }

  put<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('put', path, opts);
  }

  delete<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('delete', path, opts);
  }

  private methodRequest<Rsp>(
    method: HTTPMethod,
    path: string,
    opts?: PromiseOrValue<RequestOptions>,
  ): APIPromise<Rsp> {
    return this.request(
      Promise.resolve(opts).then((opts) => {
        return { method, path, ...opts };
      }),
    );
  }

  request<Rsp>(
    options: PromiseOrValue<FinalRequestOptions>,
    remainingRetries: number | null = null,
  ): APIPromise<Rsp> {
    return new APIPromise(this, this.makeRequest(options, remainingRetries, undefined));
  }

  private async makeRequest(
    optionsInput: PromiseOrValue<FinalRequestOptions>,
    retriesRemaining: number | null,
    retryOfRequestLogID: string | undefined,
  ): Promise<APIResponseProps> {
    const options = await optionsInput;
    const maxRetries = options.maxRetries ?? this.maxRetries;
    if (retriesRemaining == null) {
      retriesRemaining = maxRetries;
    }

    await this.prepareOptions(options);

    const { req, url, timeout } = await this.buildRequest(options, {
      retryCount: maxRetries - retriesRemaining,
    });

    await this.prepareRequest(req, { url, options });

    /** Not an API request ID, just for correlating local log entries. */
    const requestLogID = 'log_' + ((Math.random() * (1 << 24)) | 0).toString(16).padStart(6, '0');
    const retryLogStr = retryOfRequestLogID === undefined ? '' : `, retryOf: ${retryOfRequestLogID}`;
    const startTime = Date.now();

    loggerFor(this).debug(
      `[${requestLogID}] sending request`,
      formatRequestDetails({
        retryOfRequestLogID,
        method: options.method,
        url,
        options,
        headers: req.headers,
      }),
    );

    if (options.signal?.aborted) {
      throw new Errors.APIUserAbortError();
    }

    const controller = new AbortController();
    const response = await this.fetchWithTimeout(url, req, timeout, controller).catch(castToError);
    const headersTime = Date.now();

    if (response instanceof globalThis.Error) {
      const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;
      if (options.signal?.aborted) {
        throw new Errors.APIUserAbortError();
      }
      // detect native connection timeout errors
      // deno throws "TypeError: error sending request for url (https://example/): client error (Connect): tcp connect error: Operation timed out (os error 60): Operation timed out (os error 60)"
      // undici throws "TypeError: fetch failed" with cause "ConnectTimeoutError: Connect Timeout Error (attempted address: example:443, timeout: 1ms)"
      // others do not provide enough information to distinguish timeouts from other connection errors
      const isTimeout =
        isAbortError(response) ||
        /timed? ?out/i.test(String(response) + ('cause' in response ? String(response.cause) : ''));
      if (retriesRemaining) {
        loggerFor(this).info(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - ${retryMessage}`,
        );
        loggerFor(this).debug(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url,
            durationMs: headersTime - startTime,
            message: response.message,
          }),
        );
        return this.retryRequest(options, retriesRemaining, retryOfRequestLogID ?? requestLogID);
      }
      loggerFor(this).info(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - error; no more retries left`,
      );
      loggerFor(this).debug(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (error; no more retries left)`,
        formatRequestDetails({
          retryOfRequestLogID,
          url,
          durationMs: headersTime - startTime,
          message: response.message,
        }),
      );
      if (isTimeout) {
        throw new Errors.APIConnectionTimeoutError();
      }
      throw new Errors.APIConnectionError({ cause: response });
    }

    const responseInfo = `[${requestLogID}${retryLogStr}] ${req.method} ${url} ${
      response.ok ? 'succeeded' : 'failed'
    } with status ${response.status} in ${headersTime - startTime}ms`;

    if (!response.ok) {
      const shouldRetry = await this.shouldRetry(response);
      if (retriesRemaining && shouldRetry) {
        const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;

        // We don't need the body of this response.
        await Shims.CancelReadableStream(response.body);
        loggerFor(this).info(`${responseInfo} - ${retryMessage}`);
        loggerFor(this).debug(
          `[${requestLogID}] response error (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url: response.url,
            status: response.status,
            headers: response.headers,
            durationMs: headersTime - startTime,
          }),
        );
        return this.retryRequest(
          options,
          retriesRemaining,
          retryOfRequestLogID ?? requestLogID,
          response.headers,
        );
      }

      const retryMessage = shouldRetry ? `error; no more retries left` : `error; not retryable`;

      loggerFor(this).info(`${responseInfo} - ${retryMessage}`);

      const errText = await response.text().catch((err: any) => castToError(err).message);
      const errJSON = safeJSON(errText);
      const errMessage = errJSON ? undefined : errText;

      loggerFor(this).debug(
        `[${requestLogID}] response error (${retryMessage})`,
        formatRequestDetails({
          retryOfRequestLogID,
          url: response.url,
          status: response.status,
          headers: response.headers,
          message: errMessage,
          durationMs: Date.now() - startTime,
        }),
      );

      const err = this.makeStatusError(response.status, errJSON, errMessage, response.headers);
      throw err;
    }

    loggerFor(this).info(responseInfo);
    loggerFor(this).debug(
      `[${requestLogID}] response start`,
      formatRequestDetails({
        retryOfRequestLogID,
        url: response.url,
        status: response.status,
        headers: response.headers,
        durationMs: headersTime - startTime,
      }),
    );

    return { response, options, controller, requestLogID, retryOfRequestLogID, startTime };
  }

  getAPIList<Item, PageClass extends Pagination.AbstractPage<Item> = Pagination.AbstractPage<Item>>(
    path: string,
    Page: new (...args: any[]) => PageClass,
    opts?: RequestOptions,
  ): Pagination.PagePromise<PageClass, Item> {
    return this.requestAPIList(Page, { method: 'get', path, ...opts });
  }

  requestAPIList<
    Item = unknown,
    PageClass extends Pagination.AbstractPage<Item> = Pagination.AbstractPage<Item>,
  >(
    Page: new (...args: ConstructorParameters<typeof Pagination.AbstractPage>) => PageClass,
    options: FinalRequestOptions,
  ): Pagination.PagePromise<PageClass, Item> {
    const request = this.makeRequest(options, null, undefined);
    return new Pagination.PagePromise<PageClass, Item>(this as any as M3ter, request, Page);
  }

  async fetchWithTimeout(
    url: RequestInfo,
    init: RequestInit | undefined,
    ms: number,
    controller: AbortController,
  ): Promise<Response> {
    const { signal, method, ...options } = init || {};
    if (signal) signal.addEventListener('abort', () => controller.abort());

    const timeout = setTimeout(() => controller.abort(), ms);

    const isReadableBody =
      ((globalThis as any).ReadableStream && options.body instanceof (globalThis as any).ReadableStream) ||
      (typeof options.body === 'object' && options.body !== null && Symbol.asyncIterator in options.body);

    const fetchOptions: RequestInit = {
      signal: controller.signal as any,
      ...(isReadableBody ? { duplex: 'half' } : {}),
      method: 'GET',
      ...options,
    };
    if (method) {
      // Custom methods like 'patch' need to be uppercased
      // See https://github.com/nodejs/undici/issues/2294
      fetchOptions.method = method.toUpperCase();
    }

    try {
      // use undefined this binding; fetch errors if bound to something else in browser/cloudflare
      return await this.fetch.call(undefined, url, fetchOptions);
    } finally {
      clearTimeout(timeout);
    }
  }

  private async shouldRetry(response: Response): Promise<boolean> {
    // Note this is not a standard header.
    const shouldRetryHeader = response.headers.get('x-should-retry');

    // If the server explicitly says whether or not to retry, obey.
    if (shouldRetryHeader === 'true') return true;
    if (shouldRetryHeader === 'false') return false;

    // Retry on request timeouts.
    if (response.status === 408) return true;

    // Retry on lock timeouts.
    if (response.status === 409) return true;

    // Retry on rate limits.
    if (response.status === 429) return true;

    // Retry internal errors.
    if (response.status >= 500) return true;

    return false;
  }

  private async retryRequest(
    options: FinalRequestOptions,
    retriesRemaining: number,
    requestLogID: string,
    responseHeaders?: Headers | undefined,
  ): Promise<APIResponseProps> {
    let timeoutMillis: number | undefined;

    // Note the `retry-after-ms` header may not be standard, but is a good idea and we'd like proactive support for it.
    const retryAfterMillisHeader = responseHeaders?.get('retry-after-ms');
    if (retryAfterMillisHeader) {
      const timeoutMs = parseFloat(retryAfterMillisHeader);
      if (!Number.isNaN(timeoutMs)) {
        timeoutMillis = timeoutMs;
      }
    }

    // About the Retry-After header: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After
    const retryAfterHeader = responseHeaders?.get('retry-after');
    if (retryAfterHeader && !timeoutMillis) {
      const timeoutSeconds = parseFloat(retryAfterHeader);
      if (!Number.isNaN(timeoutSeconds)) {
        timeoutMillis = timeoutSeconds * 1000;
      } else {
        timeoutMillis = Date.parse(retryAfterHeader) - Date.now();
      }
    }

    // If the API asks us to wait a certain amount of time (and it's a reasonable amount),
    // just do what it says, but otherwise calculate a default
    if (!(timeoutMillis && 0 <= timeoutMillis && timeoutMillis < 60 * 1000)) {
      const maxRetries = options.maxRetries ?? this.maxRetries;
      timeoutMillis = this.calculateDefaultRetryTimeoutMillis(retriesRemaining, maxRetries);
    }
    await sleep(timeoutMillis);

    return this.makeRequest(options, retriesRemaining - 1, requestLogID);
  }

  private calculateDefaultRetryTimeoutMillis(retriesRemaining: number, maxRetries: number): number {
    const initialRetryDelay = 0.5;
    const maxRetryDelay = 8.0;

    const numRetries = maxRetries - retriesRemaining;

    // Apply exponential backoff, but not more than the max.
    const sleepSeconds = Math.min(initialRetryDelay * Math.pow(2, numRetries), maxRetryDelay);

    // Apply some jitter, take up to at most 25 percent of the retry time.
    const jitter = 1 - Math.random() * 0.25;

    return sleepSeconds * jitter * 1000;
  }

  async buildRequest(
    inputOptions: FinalRequestOptions,
    { retryCount = 0 }: { retryCount?: number } = {},
  ): Promise<{ req: FinalizedRequestInit; url: string; timeout: number }> {
    const options = { ...inputOptions };
    const { method, path, query, defaultBaseURL } = options;

    const url = this.buildURL(path!, query as Record<string, unknown>, defaultBaseURL);
    if ('timeout' in options) validatePositiveInteger('timeout', options.timeout);
    options.timeout = options.timeout ?? this.timeout;
    const { bodyHeaders, body } = this.buildBody({ options });
    const reqHeaders = await this.buildHeaders({ options: inputOptions, method, bodyHeaders, retryCount });

    const req: FinalizedRequestInit = {
      method,
      headers: reqHeaders,
      ...(options.signal && { signal: options.signal }),
      ...((globalThis as any).ReadableStream &&
        body instanceof (globalThis as any).ReadableStream && { duplex: 'half' }),
      ...(body && { body }),
      ...((this.fetchOptions as any) ?? {}),
      ...((options.fetchOptions as any) ?? {}),
    };

    return { req, url, timeout: options.timeout };
  }

  private async buildHeaders({
    options,
    method,
    bodyHeaders,
    retryCount,
  }: {
    options: FinalRequestOptions;
    method: HTTPMethod;
    bodyHeaders: HeadersLike;
    retryCount: number;
  }): Promise<Headers> {
    let idempotencyHeaders: HeadersLike = {};
    if (this.idempotencyHeader && method !== 'get') {
      if (!options.idempotencyKey) options.idempotencyKey = this.defaultIdempotencyKey();
      idempotencyHeaders[this.idempotencyHeader] = options.idempotencyKey;
    }

    const headers = buildHeaders([
      idempotencyHeaders,
      {
        Accept: 'application/json',
        'User-Agent': this.getUserAgent(),
        'X-Stainless-Retry-Count': String(retryCount),
        ...(options.timeout ? { 'X-Stainless-Timeout': String(Math.trunc(options.timeout / 1000)) } : {}),
        ...getPlatformHeaders(),
      },
      await this.authHeaders(options),
      this._options.defaultHeaders,
      bodyHeaders,
      options.headers,
    ]);

    this.validateHeaders(headers);

    return headers.values;
  }

  private buildBody({ options: { body, headers: rawHeaders } }: { options: FinalRequestOptions }): {
    bodyHeaders: HeadersLike;
    body: BodyInit | undefined;
  } {
    if (!body) {
      return { bodyHeaders: undefined, body: undefined };
    }
    const headers = buildHeaders([rawHeaders]);
    if (
      // Pass raw type verbatim
      ArrayBuffer.isView(body) ||
      body instanceof ArrayBuffer ||
      body instanceof DataView ||
      (typeof body === 'string' &&
        // Preserve legacy string encoding behavior for now
        headers.values.has('content-type')) ||
      // `Blob` is superset of `File`
      ((globalThis as any).Blob && body instanceof (globalThis as any).Blob) ||
      // `FormData` -> `multipart/form-data`
      body instanceof FormData ||
      // `URLSearchParams` -> `application/x-www-form-urlencoded`
      body instanceof URLSearchParams ||
      // Send chunked stream (each chunk has own `length`)
      ((globalThis as any).ReadableStream && body instanceof (globalThis as any).ReadableStream)
    ) {
      return { bodyHeaders: undefined, body: body as BodyInit };
    } else if (
      typeof body === 'object' &&
      (Symbol.asyncIterator in body ||
        (Symbol.iterator in body && 'next' in body && typeof body.next === 'function'))
    ) {
      return { bodyHeaders: undefined, body: Shims.ReadableStreamFrom(body as AsyncIterable<Uint8Array>) };
    } else {
      return this.#encoder({ body, headers });
    }
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
  statements: API.Statements = new API.Statements(this);
  transactionTypes: API.TransactionTypes = new API.TransactionTypes(this);
  usage: API.Usage = new API.Usage(this);
  users: API.Users = new API.Users(this);
  webhooks: API.Webhooks = new API.Webhooks(this);
}

M3ter.Authentication = Authentication;
M3ter.Accounts = Accounts;
M3ter.AccountPlans = AccountPlans;
M3ter.Aggregations = Aggregations;
M3ter.Balances = Balances;
M3ter.Bills = Bills;
M3ter.BillConfig = BillConfig;
M3ter.Commitments = Commitments;
M3ter.BillJobs = BillJobs;
M3ter.CompoundAggregations = CompoundAggregations;
M3ter.Contracts = Contracts;
M3ter.Counters = Counters;
M3ter.CounterAdjustments = CounterAdjustments;
M3ter.CounterPricings = CounterPricings;
M3ter.CreditReasons = CreditReasons;
M3ter.Currencies = Currencies;
M3ter.CustomFields = CustomFields;
M3ter.DataExports = DataExports;
M3ter.DebitReasons = DebitReasons;
M3ter.Events = Events;
M3ter.ExternalMappings = ExternalMappings;
M3ter.IntegrationConfigurations = IntegrationConfigurations;
M3ter.Meters = Meters;
M3ter.NotificationConfigurations = NotificationConfigurations;
M3ter.OrganizationConfig = OrganizationConfig;
M3ter.PermissionPolicies = PermissionPolicies;
M3ter.Plans = Plans;
M3ter.PlanGroups = PlanGroups;
M3ter.PlanGroupLinks = PlanGroupLinks;
M3ter.PlanTemplates = PlanTemplates;
M3ter.Pricings = Pricings;
M3ter.Products = Products;
M3ter.ResourceGroups = ResourceGroups;
M3ter.ScheduledEventConfigurations = ScheduledEventConfigurations;
M3ter.Statements = Statements;
M3ter.TransactionTypes = TransactionTypes;
M3ter.Usage = Usage;
M3ter.Users = Users;
M3ter.Webhooks = Webhooks;

export declare namespace M3ter {
  export type RequestOptions = Opts.RequestOptions;

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
    type AccountResponsesCursor as AccountResponsesCursor,
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
    type AccountPlanResponsesCursor as AccountPlanResponsesCursor,
    type AccountPlanCreateParams as AccountPlanCreateParams,
    type AccountPlanRetrieveParams as AccountPlanRetrieveParams,
    type AccountPlanUpdateParams as AccountPlanUpdateParams,
    type AccountPlanListParams as AccountPlanListParams,
    type AccountPlanDeleteParams as AccountPlanDeleteParams,
  };

  export {
    Aggregations as Aggregations,
    type AggregationResponse as AggregationResponse,
    type AggregationResponsesCursor as AggregationResponsesCursor,
    type AggregationCreateParams as AggregationCreateParams,
    type AggregationRetrieveParams as AggregationRetrieveParams,
    type AggregationUpdateParams as AggregationUpdateParams,
    type AggregationListParams as AggregationListParams,
    type AggregationDeleteParams as AggregationDeleteParams,
  };

  export {
    Balances as Balances,
    type Balance as Balance,
    type BalancesCursor as BalancesCursor,
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
    type BillResponsesCursor as BillResponsesCursor,
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
    type CommitmentResponsesCursor as CommitmentResponsesCursor,
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
    type BillJobResponsesCursor as BillJobResponsesCursor,
    type BillJobCreateParams as BillJobCreateParams,
    type BillJobRetrieveParams as BillJobRetrieveParams,
    type BillJobListParams as BillJobListParams,
    type BillJobCancelParams as BillJobCancelParams,
    type BillJobRecalculateParams as BillJobRecalculateParams,
  };

  export {
    CompoundAggregations as CompoundAggregations,
    type CompoundAggregationResponse as CompoundAggregationResponse,
    type CompoundAggregationResponsesCursor as CompoundAggregationResponsesCursor,
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
    type ContractResponsesCursor as ContractResponsesCursor,
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
    type CounterResponsesCursor as CounterResponsesCursor,
    type CounterCreateParams as CounterCreateParams,
    type CounterRetrieveParams as CounterRetrieveParams,
    type CounterUpdateParams as CounterUpdateParams,
    type CounterListParams as CounterListParams,
    type CounterDeleteParams as CounterDeleteParams,
  };

  export {
    CounterAdjustments as CounterAdjustments,
    type CounterAdjustmentResponse as CounterAdjustmentResponse,
    type CounterAdjustmentResponsesCursor as CounterAdjustmentResponsesCursor,
    type CounterAdjustmentCreateParams as CounterAdjustmentCreateParams,
    type CounterAdjustmentRetrieveParams as CounterAdjustmentRetrieveParams,
    type CounterAdjustmentUpdateParams as CounterAdjustmentUpdateParams,
    type CounterAdjustmentListParams as CounterAdjustmentListParams,
    type CounterAdjustmentDeleteParams as CounterAdjustmentDeleteParams,
  };

  export {
    CounterPricings as CounterPricings,
    type CounterPricingResponse as CounterPricingResponse,
    type CounterPricingResponsesCursor as CounterPricingResponsesCursor,
    type CounterPricingCreateParams as CounterPricingCreateParams,
    type CounterPricingRetrieveParams as CounterPricingRetrieveParams,
    type CounterPricingUpdateParams as CounterPricingUpdateParams,
    type CounterPricingListParams as CounterPricingListParams,
    type CounterPricingDeleteParams as CounterPricingDeleteParams,
  };

  export {
    CreditReasons as CreditReasons,
    type CreditReasonResponse as CreditReasonResponse,
    type CreditReasonResponsesCursor as CreditReasonResponsesCursor,
    type CreditReasonCreateParams as CreditReasonCreateParams,
    type CreditReasonRetrieveParams as CreditReasonRetrieveParams,
    type CreditReasonUpdateParams as CreditReasonUpdateParams,
    type CreditReasonListParams as CreditReasonListParams,
    type CreditReasonDeleteParams as CreditReasonDeleteParams,
  };

  export {
    Currencies as Currencies,
    type CurrencyResponse as CurrencyResponse,
    type CurrencyResponsesCursor as CurrencyResponsesCursor,
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
    type DataExplorerGroup as DataExplorerGroup,
    type DataExplorerTimeGroup as DataExplorerTimeGroup,
    type DataExportCreateAdhocParams as DataExportCreateAdhocParams,
  };

  export {
    DebitReasons as DebitReasons,
    type DebitReasonResponse as DebitReasonResponse,
    type DebitReasonResponsesCursor as DebitReasonResponsesCursor,
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
    type EventResponsesCursor as EventResponsesCursor,
    type EventRetrieveParams as EventRetrieveParams,
    type EventListParams as EventListParams,
    type EventGetFieldsParams as EventGetFieldsParams,
    type EventGetTypesParams as EventGetTypesParams,
  };

  export {
    ExternalMappings as ExternalMappings,
    type ExternalMappingResponse as ExternalMappingResponse,
    type ExternalMappingResponsesCursor as ExternalMappingResponsesCursor,
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
    type IntegrationConfigurationListResponsesCursor as IntegrationConfigurationListResponsesCursor,
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
    type MeterResponsesCursor as MeterResponsesCursor,
    type MeterCreateParams as MeterCreateParams,
    type MeterRetrieveParams as MeterRetrieveParams,
    type MeterUpdateParams as MeterUpdateParams,
    type MeterListParams as MeterListParams,
    type MeterDeleteParams as MeterDeleteParams,
  };

  export {
    NotificationConfigurations as NotificationConfigurations,
    type NotificationConfigurationResponse as NotificationConfigurationResponse,
    type NotificationConfigurationResponsesCursor as NotificationConfigurationResponsesCursor,
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
    type PermissionPolicyResponsesCursor as PermissionPolicyResponsesCursor,
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
    type PlanResponsesCursor as PlanResponsesCursor,
    type PlanCreateParams as PlanCreateParams,
    type PlanRetrieveParams as PlanRetrieveParams,
    type PlanUpdateParams as PlanUpdateParams,
    type PlanListParams as PlanListParams,
    type PlanDeleteParams as PlanDeleteParams,
  };

  export {
    PlanGroups as PlanGroups,
    type PlanGroupResponse as PlanGroupResponse,
    type PlanGroupResponsesCursor as PlanGroupResponsesCursor,
    type PlanGroupCreateParams as PlanGroupCreateParams,
    type PlanGroupRetrieveParams as PlanGroupRetrieveParams,
    type PlanGroupUpdateParams as PlanGroupUpdateParams,
    type PlanGroupListParams as PlanGroupListParams,
    type PlanGroupDeleteParams as PlanGroupDeleteParams,
  };

  export {
    PlanGroupLinks as PlanGroupLinks,
    type PlanGroupLinkResponse as PlanGroupLinkResponse,
    type PlanGroupLinkResponsesCursor as PlanGroupLinkResponsesCursor,
    type PlanGroupLinkCreateParams as PlanGroupLinkCreateParams,
    type PlanGroupLinkRetrieveParams as PlanGroupLinkRetrieveParams,
    type PlanGroupLinkUpdateParams as PlanGroupLinkUpdateParams,
    type PlanGroupLinkListParams as PlanGroupLinkListParams,
    type PlanGroupLinkDeleteParams as PlanGroupLinkDeleteParams,
  };

  export {
    PlanTemplates as PlanTemplates,
    type PlanTemplateResponse as PlanTemplateResponse,
    type PlanTemplateResponsesCursor as PlanTemplateResponsesCursor,
    type PlanTemplateCreateParams as PlanTemplateCreateParams,
    type PlanTemplateRetrieveParams as PlanTemplateRetrieveParams,
    type PlanTemplateUpdateParams as PlanTemplateUpdateParams,
    type PlanTemplateListParams as PlanTemplateListParams,
    type PlanTemplateDeleteParams as PlanTemplateDeleteParams,
  };

  export {
    Pricings as Pricings,
    type PricingResponse as PricingResponse,
    type PricingResponsesCursor as PricingResponsesCursor,
    type PricingCreateParams as PricingCreateParams,
    type PricingRetrieveParams as PricingRetrieveParams,
    type PricingUpdateParams as PricingUpdateParams,
    type PricingListParams as PricingListParams,
    type PricingDeleteParams as PricingDeleteParams,
  };

  export {
    Products as Products,
    type ProductResponse as ProductResponse,
    type ProductResponsesCursor as ProductResponsesCursor,
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
    type ResourceGroupResponsesCursor as ResourceGroupResponsesCursor,
    type ResourceGroupListContentsResponsesCursor as ResourceGroupListContentsResponsesCursor,
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
    type ScheduledEventConfigurationResponsesCursor as ScheduledEventConfigurationResponsesCursor,
    type ScheduledEventConfigurationCreateParams as ScheduledEventConfigurationCreateParams,
    type ScheduledEventConfigurationRetrieveParams as ScheduledEventConfigurationRetrieveParams,
    type ScheduledEventConfigurationUpdateParams as ScheduledEventConfigurationUpdateParams,
    type ScheduledEventConfigurationListParams as ScheduledEventConfigurationListParams,
    type ScheduledEventConfigurationDeleteParams as ScheduledEventConfigurationDeleteParams,
  };

  export {
    Statements as Statements,
    type ObjectURLResponse as ObjectURLResponse,
    type StatementCreateCsvParams as StatementCreateCsvParams,
    type StatementGetCsvParams as StatementGetCsvParams,
    type StatementGetJsonParams as StatementGetJsonParams,
  };

  export {
    TransactionTypes as TransactionTypes,
    type TransactionTypeResponse as TransactionTypeResponse,
    type TransactionTypeResponsesCursor as TransactionTypeResponsesCursor,
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
    type UserResponsesCursor as UserResponsesCursor,
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
    type WebhooksCursor as WebhooksCursor,
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
