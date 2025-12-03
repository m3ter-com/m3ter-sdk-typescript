// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class IntegrationConfigurations extends APIResource {
  /**
   * Set the integration configuration for the entity.
   *
   * @example
   * ```ts
   * const integrationConfiguration =
   *   await client.integrationConfigurations.create({
   *     destination: 'Stripe',
   *     entityType: 'Bill',
   *   });
   * ```
   */
  create(
    params: IntegrationConfigurationCreateParams,
    options?: RequestOptions,
  ): APIPromise<IntegrationConfigurationCreateResponse> {
    const { orgId = this._client.orgID, ...body } = params;
    return this._client.post(path`/organizations/${orgId}/integrationconfigs`, { body, ...options });
  }

  /**
   * Retrieve the integration configuration for the given UUID.
   *
   * This endpoint retrieves the configuration details of a specific integration
   * within an organization. It is useful for obtaining the settings and parameters
   * of an integration.
   *
   * @example
   * ```ts
   * const integrationConfigurationResponse =
   *   await client.integrationConfigurations.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    params: IntegrationConfigurationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IntegrationConfigurationResponse> {
    const { orgId = this._client.orgID } = params ?? {};
    return this._client.get(path`/organizations/${orgId}/integrationconfigs/${id}`, options);
  }

  /**
   * Update the integration configuration for the given UUID.
   *
   * This endpoint allows you to update the configuration of a specific integration
   * within your organization. It is used to modify settings or parameters of an
   * existing integration.
   *
   * @example
   * ```ts
   * const integrationConfiguration =
   *   await client.integrationConfigurations.update('id', {
   *     destination: 'Stripe',
   *     entityType: 'Bill',
   *   });
   * ```
   */
  update(
    id: string,
    params: IntegrationConfigurationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<IntegrationConfigurationUpdateResponse> {
    const { orgId = this._client.orgID, ...body } = params;
    return this._client.put(path`/organizations/${orgId}/integrationconfigs/${id}`, { body, ...options });
  }

  /**
   * List all integration configurations.
   *
   * This endpoint retrieves a list of all integration configurations for the
   * specified Organization. The list can be paginated for easier management.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const integrationConfigurationListResponse of client.integrationConfigurations.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    params: IntegrationConfigurationListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<IntegrationConfigurationListResponsesCursor, IntegrationConfigurationListResponse> {
    const { orgId = this._client.orgID, ...query } = params ?? {};
    return this._client.getAPIList(
      path`/organizations/${orgId}/integrationconfigs`,
      Cursor<IntegrationConfigurationListResponse>,
      { query, ...options },
    );
  }

  /**
   * Delete the integration configuration for the given UUID.
   *
   * Use this endpoint to delete the configuration of a specific integration within
   * your organization. It is intended for removing integration settings that are no
   * longer needed.
   *
   * @example
   * ```ts
   * const integrationConfiguration =
   *   await client.integrationConfigurations.delete('id');
   * ```
   */
  delete(
    id: string,
    params: IntegrationConfigurationDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IntegrationConfigurationDeleteResponse> {
    const { orgId = this._client.orgID } = params ?? {};
    return this._client.delete(path`/organizations/${orgId}/integrationconfigs/${id}`, options);
  }

  /**
   * Enables a previously disabled integration configuration, allowing it to be
   * operational again.
   *
   * @example
   * ```ts
   * const response =
   *   await client.integrationConfigurations.enable('id');
   * ```
   */
  enable(
    id: string,
    params: IntegrationConfigurationEnableParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IntegrationConfigurationEnableResponse> {
    const { orgId = this._client.orgID } = params ?? {};
    return this._client.post(path`/organizations/${orgId}/integrationconfigs/${id}/enable`, options);
  }

  /**
   * Retrieve the integration configuration for the entity
   *
   * @example
   * ```ts
   * const integrationConfigurationResponse =
   *   await client.integrationConfigurations.getByEntity(
   *     'entityType',
   *   );
   * ```
   */
  getByEntity(
    entityType: string,
    params: IntegrationConfigurationGetByEntityParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IntegrationConfigurationResponse> {
    const { orgId = this._client.orgID, ...query } = params ?? {};
    return this._client.get(path`/organizations/${orgId}/integrationconfigs/entity/${entityType}`, {
      query,
      ...options,
    });
  }
}

export type IntegrationConfigurationListResponsesCursor = Cursor<IntegrationConfigurationListResponse>;

export interface IntegrationConfigurationResponse {
  /**
   * The UUID of the entity.
   */
  id: string;

  /**
   * The destination system for the integration run.
   */
  destination: string;

  /**
   * The unique identifier (UUID) of the entity the integration run is for.
   */
  entityId: string;

  /**
   * The type of entity the integration run is for. Two options:
   *
   * - Bill
   * - Notification
   */
  entityType: string;

  status:
    | 'WAITING'
    | 'STARTED'
    | 'COMPLETE'
    | 'ERROR'
    | 'AWAITING_RETRY'
    | 'AUTH_FAILED'
    | 'ACCOUNTING_PERIOD_CLOSED'
    | 'INVOICE_ALREADY_PAID'
    | 'DISABLED'
    | 'TIMEOUT_LIMIT_EXCEEDED'
    | 'RATE_LIMIT_RETRY';

  /**
   * The ID of the user who created this item.
   */
  createdBy?: string;

  /**
   * Identifier of the destination
   */
  destinationId?: string;

  /**
   * The date and time the integration was completed. _(in ISO-8601 format)_.
   */
  dtCompleted?: string;

  /**
   * The DateTime when this item was created _(in ISO-8601 format)_.
   */
  dtCreated?: string;

  /**
   * The DateTime when this item was last modified _(in ISO-8601 format)_.
   */
  dtLastModified?: string;

  /**
   * The date and time the integration run was started _(in ISO-8601 format)_.
   */
  dtStarted?: string;

  /**
   * Describes any errors encountered during the integration run.
   */
  error?: string;

  /**
   * The external ID in the destination system if available.
   */
  externalId?: string;

  /**
   * The ID of the user who last modified this item.
   */
  lastModifiedBy?: string;

  /**
   * ID of the parent integration run, or null if this is a parent integration run
   */
  parentIntegrationRunId?: string;

  /**
   * The URL of the entity in the destination system if available.
   */
  url?: string;

  /**
   * The version number:
   *
   * - **Create:** On initial Create to insert a new entity, the version is set at 1
   *   in the response.
   * - **Update:** On successful Update, the version is incremented by 1 in the
   *   response.
   */
  version?: number;
}

export interface IntegrationConfigurationCreateResponse {
  /**
   * The UUID of the entity.
   */
  id: string;

  /**
   * The type of destination _(e.g. Netsuite, webhooks)_.
   */
  destination: string;

  /**
   * The type of entity the integration is for _(e.g. Bill)_.
   */
  entityType: string;

  /**
   * A flag indicating whether the integration configuration is authorized.
   *
   * - TRUE - authorized.
   * - FALSE - not authorized.
   */
  authorized?: boolean;

  /**
   * Configuration data for the integration
   */
  configData?: { [key: string]: unknown };

  /**
   * The ID of the user who created this item.
   */
  createdBy?: string;

  /**
   * The unique identifier (UUID) of the entity the integration is for.
   */
  destinationId?: string;

  /**
   * The DateTime when this item was created _(in ISO-8601 format)_.
   */
  dtCreated?: string;

  /**
   * The DateTime when this item was last modified _(in ISO-8601 format)_.
   */
  dtLastModified?: string;

  /**
   * A flag indicating whether the integration configuration is currently enabled or
   * disabled.
   *
   * - TRUE - enabled.
   * - FALSE - disabled.
   */
  enabled?: boolean;

  /**
   * The unique identifier (UUID) of the entity this integration is for _(e.g. the ID
   * of a notification configuration. Optional.)_
   */
  entityId?: string;

  /**
   * UUID of the credentials to use for this integration
   */
  integrationCredentialsId?: string;

  /**
   * The ID of the user who last modified this item.
   */
  lastModifiedBy?: string;

  /**
   * The name of the configuration
   */
  name?: string;

  /**
   * @deprecated Specifies the type of trigger for the integration.
   */
  triggerType?: 'EVENT' | 'SCHEDULE';

  /**
   * The version number:
   *
   * - **Create:** On initial Create to insert a new entity, the version is set at 1
   *   in the response.
   * - **Update:** On successful Update, the version is incremented by 1 in the
   *   response.
   */
  version?: number;
}

export interface IntegrationConfigurationUpdateResponse {
  /**
   * The UUID of the entity.
   */
  id: string;

  /**
   * The type of destination _(e.g. Netsuite, webhooks)_.
   */
  destination: string;

  /**
   * The type of entity the integration is for _(e.g. Bill)_.
   */
  entityType: string;

  /**
   * A flag indicating whether the integration configuration is authorized.
   *
   * - TRUE - authorized.
   * - FALSE - not authorized.
   */
  authorized?: boolean;

  /**
   * Configuration data for the integration
   */
  configData?: { [key: string]: unknown };

  /**
   * The ID of the user who created this item.
   */
  createdBy?: string;

  /**
   * The unique identifier (UUID) of the entity the integration is for.
   */
  destinationId?: string;

  /**
   * The DateTime when this item was created _(in ISO-8601 format)_.
   */
  dtCreated?: string;

  /**
   * The DateTime when this item was last modified _(in ISO-8601 format)_.
   */
  dtLastModified?: string;

  /**
   * A flag indicating whether the integration configuration is currently enabled or
   * disabled.
   *
   * - TRUE - enabled.
   * - FALSE - disabled.
   */
  enabled?: boolean;

  /**
   * The unique identifier (UUID) of the entity this integration is for _(e.g. the ID
   * of a notification configuration. Optional.)_
   */
  entityId?: string;

  /**
   * UUID of the credentials to use for this integration
   */
  integrationCredentialsId?: string;

  /**
   * The ID of the user who last modified this item.
   */
  lastModifiedBy?: string;

  /**
   * The name of the configuration
   */
  name?: string;

  /**
   * @deprecated Specifies the type of trigger for the integration.
   */
  triggerType?: 'EVENT' | 'SCHEDULE';

  /**
   * The version number:
   *
   * - **Create:** On initial Create to insert a new entity, the version is set at 1
   *   in the response.
   * - **Update:** On successful Update, the version is incremented by 1 in the
   *   response.
   */
  version?: number;
}

export interface IntegrationConfigurationListResponse {
  /**
   * The UUID of the entity.
   */
  id: string;

  /**
   * The type of destination _(e.g. Netsuite, webhooks)_.
   */
  destination: string;

  /**
   * The type of entity the integration is for _(e.g. Bill)_.
   */
  entityType: string;

  /**
   * A flag indicating whether the integration configuration is authorized.
   *
   * - TRUE - authorized.
   * - FALSE - not authorized.
   */
  authorized?: boolean;

  /**
   * Configuration data for the integration
   */
  configData?: { [key: string]: unknown };

  /**
   * The ID of the user who created this item.
   */
  createdBy?: string;

  /**
   * The unique identifier (UUID) of the entity the integration is for.
   */
  destinationId?: string;

  /**
   * The DateTime when this item was created _(in ISO-8601 format)_.
   */
  dtCreated?: string;

  /**
   * The DateTime when this item was last modified _(in ISO-8601 format)_.
   */
  dtLastModified?: string;

  /**
   * A flag indicating whether the integration configuration is currently enabled or
   * disabled.
   *
   * - TRUE - enabled.
   * - FALSE - disabled.
   */
  enabled?: boolean;

  /**
   * The unique identifier (UUID) of the entity this integration is for _(e.g. the ID
   * of a notification configuration. Optional.)_
   */
  entityId?: string;

  /**
   * UUID of the credentials to use for this integration
   */
  integrationCredentialsId?: string;

  /**
   * The ID of the user who last modified this item.
   */
  lastModifiedBy?: string;

  /**
   * The name of the configuration
   */
  name?: string;

  /**
   * @deprecated Specifies the type of trigger for the integration.
   */
  triggerType?: 'EVENT' | 'SCHEDULE';

  /**
   * The version number:
   *
   * - **Create:** On initial Create to insert a new entity, the version is set at 1
   *   in the response.
   * - **Update:** On successful Update, the version is incremented by 1 in the
   *   response.
   */
  version?: number;
}

export interface IntegrationConfigurationDeleteResponse {
  /**
   * The UUID of the entity.
   */
  id: string;

  /**
   * The type of destination _(e.g. Netsuite, webhooks)_.
   */
  destination: string;

  /**
   * The type of entity the integration is for _(e.g. Bill)_.
   */
  entityType: string;

  /**
   * A flag indicating whether the integration configuration is authorized.
   *
   * - TRUE - authorized.
   * - FALSE - not authorized.
   */
  authorized?: boolean;

  /**
   * Configuration data for the integration
   */
  configData?: { [key: string]: unknown };

  /**
   * The ID of the user who created this item.
   */
  createdBy?: string;

  /**
   * The unique identifier (UUID) of the entity the integration is for.
   */
  destinationId?: string;

  /**
   * The DateTime when this item was created _(in ISO-8601 format)_.
   */
  dtCreated?: string;

  /**
   * The DateTime when this item was last modified _(in ISO-8601 format)_.
   */
  dtLastModified?: string;

  /**
   * A flag indicating whether the integration configuration is currently enabled or
   * disabled.
   *
   * - TRUE - enabled.
   * - FALSE - disabled.
   */
  enabled?: boolean;

  /**
   * The unique identifier (UUID) of the entity this integration is for _(e.g. the ID
   * of a notification configuration. Optional.)_
   */
  entityId?: string;

  /**
   * UUID of the credentials to use for this integration
   */
  integrationCredentialsId?: string;

  /**
   * The ID of the user who last modified this item.
   */
  lastModifiedBy?: string;

  /**
   * The name of the configuration
   */
  name?: string;

  /**
   * @deprecated Specifies the type of trigger for the integration.
   */
  triggerType?: 'EVENT' | 'SCHEDULE';

  /**
   * The version number:
   *
   * - **Create:** On initial Create to insert a new entity, the version is set at 1
   *   in the response.
   * - **Update:** On successful Update, the version is incremented by 1 in the
   *   response.
   */
  version?: number;
}

export interface IntegrationConfigurationEnableResponse {
  /**
   * The UUID of the entity.
   */
  id: string;

  /**
   * The type of destination _(e.g. Netsuite, webhooks)_.
   */
  destination: string;

  /**
   * The type of entity the integration is for _(e.g. Bill)_.
   */
  entityType: string;

  /**
   * A flag indicating whether the integration configuration is authorized.
   *
   * - TRUE - authorized.
   * - FALSE - not authorized.
   */
  authorized?: boolean;

  /**
   * Configuration data for the integration
   */
  configData?: { [key: string]: unknown };

  /**
   * The ID of the user who created this item.
   */
  createdBy?: string;

  /**
   * The unique identifier (UUID) of the entity the integration is for.
   */
  destinationId?: string;

  /**
   * The DateTime when this item was created _(in ISO-8601 format)_.
   */
  dtCreated?: string;

  /**
   * The DateTime when this item was last modified _(in ISO-8601 format)_.
   */
  dtLastModified?: string;

  /**
   * A flag indicating whether the integration configuration is currently enabled or
   * disabled.
   *
   * - TRUE - enabled.
   * - FALSE - disabled.
   */
  enabled?: boolean;

  /**
   * The unique identifier (UUID) of the entity this integration is for _(e.g. the ID
   * of a notification configuration. Optional.)_
   */
  entityId?: string;

  /**
   * UUID of the credentials to use for this integration
   */
  integrationCredentialsId?: string;

  /**
   * The ID of the user who last modified this item.
   */
  lastModifiedBy?: string;

  /**
   * The name of the configuration
   */
  name?: string;

  /**
   * @deprecated Specifies the type of trigger for the integration.
   */
  triggerType?: 'EVENT' | 'SCHEDULE';

  /**
   * The version number:
   *
   * - **Create:** On initial Create to insert a new entity, the version is set at 1
   *   in the response.
   * - **Update:** On successful Update, the version is incremented by 1 in the
   *   response.
   */
  version?: number;
}

export interface IntegrationConfigurationCreateParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param: Denotes the integration destination. This field identifies the
   * target platform or service for the integration.
   */
  destination: string;

  /**
   * Body param: Specifies the type of entity for which the integration configuration
   * is being updated. Must be a valid alphanumeric string.
   */
  entityType: string;

  /**
   * Body param: A flexible object to include any additional configuration data
   * specific to the integration.
   */
  configData?: { [key: string]: unknown };

  /**
   * Body param: Base model for defining integration credentials across different
   * types of integrations.
   */
  credentials?: IntegrationConfigurationCreateParams.Credentials;

  /**
   * Body param: The unique identifier (UUID) for the integration destination.
   */
  destinationId?: string;

  /**
   * Body param: The unique identifier (UUID) of the entity. This field is used to
   * specify which entity's integration configuration you're updating.
   */
  entityId?: string;

  /**
   * Body param:
   */
  integrationCredentialsId?: string;

  /**
   * Body param:
   */
  name?: string;

  /**
   * Body param: The version number of the entity:
   *
   * - **Create entity:** Not valid for initial insertion of new entity - _do not use
   *   for Create_. On initial Create, version is set at 1 and listed in the
   *   response.
   * - **Update Entity:** On Update, version is required and must match the existing
   *   version because a check is performed to ensure sequential versioning is
   *   preserved. Version is incremented by 1 and listed in the response.
   */
  version?: number;
}

export namespace IntegrationConfigurationCreateParams {
  /**
   * Base model for defining integration credentials across different types of
   * integrations.
   */
  export interface Credentials {
    /**
     * Specifies the type of authorization required for the integration.
     */
    type:
      | 'HTTP_BASIC'
      | 'OAUTH_CLIENT_CREDENTIALS'
      | 'M3TER_SIGNED_REQUEST'
      | 'AWS_INTEGRATION'
      | 'PADDLE_AUTH'
      | 'NETSUITE_AUTH'
      | 'CHARGEBEE_AUTH'
      | 'M3TER_APP_SIGNATURE'
      | 'M3TER_SERVICE_USER'
      | 'STRIPE_SIGNED_REQUEST'
      | 'HUBSPOT_ACCESS_TOKEN'
      | 'HUBSPOT_CLIENT_SECRET'
      | 'OPSGENIE_KEY'
      | 'SAP_BYD'
      | 'SLACK_WEBHOOK'
      | 'SAGE_INTACCT_CLIENT_CREDENTIALS';

    destination?:
      | 'WEBHOOK'
      | 'NETSUITE'
      | 'STRIPE'
      | 'STRIPE_TEST'
      | 'AWS'
      | 'PADDLE'
      | 'PADDLE_SANDBOX'
      | 'SALESFORCE'
      | 'XERO'
      | 'CHARGEBEE'
      | 'QUICKBOOKS'
      | 'QUICKBOOKS_SANDBOX'
      | 'M3TER';

    /**
     * A flag to indicate whether the credentials are empty.
     *
     * - TRUE - empty credentials.
     * - FALSE - credential details required.
     */
    empty?: boolean;

    /**
     * The name of the credentials
     */
    name?: string;

    /**
     * The version number of the entity:
     *
     * - **Create entity:** Not valid for initial insertion of new entity - _do not use
     *   for Create_. On initial Create, version is set at 1 and listed in the
     *   response.
     * - **Update Entity:** On Update, version is required and must match the existing
     *   version because a check is performed to ensure sequential versioning is
     *   preserved. Version is incremented by 1 and listed in the response.
     */
    version?: number;
  }
}

export interface IntegrationConfigurationRetrieveParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface IntegrationConfigurationUpdateParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param: Denotes the integration destination. This field identifies the
   * target platform or service for the integration.
   */
  destination: string;

  /**
   * Body param: Specifies the type of entity for which the integration configuration
   * is being updated. Must be a valid alphanumeric string.
   */
  entityType: string;

  /**
   * Body param: A flexible object to include any additional configuration data
   * specific to the integration.
   */
  configData?: { [key: string]: unknown };

  /**
   * Body param: Base model for defining integration credentials across different
   * types of integrations.
   */
  credentials?: IntegrationConfigurationUpdateParams.Credentials;

  /**
   * Body param: The unique identifier (UUID) for the integration destination.
   */
  destinationId?: string;

  /**
   * Body param: The unique identifier (UUID) of the entity. This field is used to
   * specify which entity's integration configuration you're updating.
   */
  entityId?: string;

  /**
   * Body param:
   */
  integrationCredentialsId?: string;

  /**
   * Body param:
   */
  name?: string;

  /**
   * Body param: The version number of the entity:
   *
   * - **Create entity:** Not valid for initial insertion of new entity - _do not use
   *   for Create_. On initial Create, version is set at 1 and listed in the
   *   response.
   * - **Update Entity:** On Update, version is required and must match the existing
   *   version because a check is performed to ensure sequential versioning is
   *   preserved. Version is incremented by 1 and listed in the response.
   */
  version?: number;
}

export namespace IntegrationConfigurationUpdateParams {
  /**
   * Base model for defining integration credentials across different types of
   * integrations.
   */
  export interface Credentials {
    /**
     * Specifies the type of authorization required for the integration.
     */
    type:
      | 'HTTP_BASIC'
      | 'OAUTH_CLIENT_CREDENTIALS'
      | 'M3TER_SIGNED_REQUEST'
      | 'AWS_INTEGRATION'
      | 'PADDLE_AUTH'
      | 'NETSUITE_AUTH'
      | 'CHARGEBEE_AUTH'
      | 'M3TER_APP_SIGNATURE'
      | 'M3TER_SERVICE_USER'
      | 'STRIPE_SIGNED_REQUEST'
      | 'HUBSPOT_ACCESS_TOKEN'
      | 'HUBSPOT_CLIENT_SECRET'
      | 'OPSGENIE_KEY'
      | 'SAP_BYD'
      | 'SLACK_WEBHOOK'
      | 'SAGE_INTACCT_CLIENT_CREDENTIALS';

    destination?:
      | 'WEBHOOK'
      | 'NETSUITE'
      | 'STRIPE'
      | 'STRIPE_TEST'
      | 'AWS'
      | 'PADDLE'
      | 'PADDLE_SANDBOX'
      | 'SALESFORCE'
      | 'XERO'
      | 'CHARGEBEE'
      | 'QUICKBOOKS'
      | 'QUICKBOOKS_SANDBOX'
      | 'M3TER';

    /**
     * A flag to indicate whether the credentials are empty.
     *
     * - TRUE - empty credentials.
     * - FALSE - credential details required.
     */
    empty?: boolean;

    /**
     * The name of the credentials
     */
    name?: string;

    /**
     * The version number of the entity:
     *
     * - **Create entity:** Not valid for initial insertion of new entity - _do not use
     *   for Create_. On initial Create, version is set at 1 and listed in the
     *   response.
     * - **Update Entity:** On Update, version is required and must match the existing
     *   version because a check is performed to ensure sequential versioning is
     *   preserved. Version is incremented by 1 and listed in the response.
     */
    version?: number;
  }
}

export interface IntegrationConfigurationListParams extends CursorParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Query param: optional filter for a specific destination
   */
  destinationId?: string;
}

export interface IntegrationConfigurationDeleteParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface IntegrationConfigurationEnableParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface IntegrationConfigurationGetByEntityParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Query param: Destination type to retrieve IntegrationConfigs for
   */
  destination?: string;

  /**
   * Query param: UUID of the destination to retrieve IntegrationConfigs for
   */
  destinationId?: string;

  /**
   * Query param: UUID of the entity to retrieve IntegrationConfigs for
   */
  entityId?: string;

  /**
   * Query param: nextToken for multi page retrievals
   */
  nextToken?: string;

  /**
   * Query param: Number of configs to retrieve per page
   */
  pageSize?: number;
}

export declare namespace IntegrationConfigurations {
  export {
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
}
