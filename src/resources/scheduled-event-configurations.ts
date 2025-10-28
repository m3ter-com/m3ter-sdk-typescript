// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class ScheduledEventConfigurations extends APIResource {
  /**
   * Create a new ScheduledEventConfiguration.
   *
   * @example
   * ```ts
   * const scheduledEventConfigurationResponse =
   *   await client.scheduledEventConfigurations.create({
   *     entity: 'Bill',
   *     field: 'dueDate',
   *     name: '10 Days After Bill Due Date',
   *     offset: 10,
   *   });
   * ```
   */
  create(
    params: ScheduledEventConfigurationCreateParams,
    options?: RequestOptions,
  ): APIPromise<ScheduledEventConfigurationResponse> {
    const { orgId = this._client.orgID, ...body } = params;
    return this._client.post(path`/organizations/${orgId}/scheduledevents/configurations`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieve a ScheduledEventConfiguration for the given UUID.
   *
   * @example
   * ```ts
   * const scheduledEventConfigurationResponse =
   *   await client.scheduledEventConfigurations.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    params: ScheduledEventConfigurationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ScheduledEventConfigurationResponse> {
    const { orgId = this._client.orgID } = params ?? {};
    return this._client.get(path`/organizations/${orgId}/scheduledevents/configurations/${id}`, options);
  }

  /**
   * Update a ScheduledEventConfiguration for the given UUID.
   *
   * @example
   * ```ts
   * const scheduledEventConfigurationResponse =
   *   await client.scheduledEventConfigurations.update('id', {
   *     entity: 'Bill',
   *     field: 'dueDate',
   *     name: '10 Days After Bill Due Date',
   *     offset: 10,
   *   });
   * ```
   */
  update(
    id: string,
    params: ScheduledEventConfigurationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ScheduledEventConfigurationResponse> {
    const { orgId = this._client.orgID, ...body } = params;
    return this._client.put(path`/organizations/${orgId}/scheduledevents/configurations/${id}`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieve a list of ScheduledEventConfiguration entities
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const scheduledEventConfigurationResponse of client.scheduledEventConfigurations.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    params: ScheduledEventConfigurationListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ScheduledEventConfigurationResponsesCursor, ScheduledEventConfigurationResponse> {
    const { orgId = this._client.orgID, ...query } = params ?? {};
    return this._client.getAPIList(
      path`/organizations/${orgId}/scheduledevents/configurations`,
      Cursor<ScheduledEventConfigurationResponse>,
      { query, ...options },
    );
  }

  /**
   * Delete the ScheduledEventConfiguration for the given UUID.
   *
   * @example
   * ```ts
   * const scheduledEventConfigurationResponse =
   *   await client.scheduledEventConfigurations.delete('id');
   * ```
   */
  delete(
    id: string,
    params: ScheduledEventConfigurationDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ScheduledEventConfigurationResponse> {
    const { orgId = this._client.orgID } = params ?? {};
    return this._client.delete(path`/organizations/${orgId}/scheduledevents/configurations/${id}`, options);
  }
}

export type ScheduledEventConfigurationResponsesCursor = Cursor<ScheduledEventConfigurationResponse>;

export interface ScheduledEventConfigurationResponse {
  /**
   * The UUID of the entity.
   */
  id: string;

  /**
   * The referenced configuration or billing entity for which the desired scheduled
   * Event will trigger.
   */
  entity: string;

  /**
   * A DateTime field for which the desired scheduled Event will trigger - this must
   * be a DateTime field on the referenced billing or configuration entity.
   */
  field: string;

  /**
   * The name of the custom Scheduled Event Configuration.
   */
  name: string;

  /**
   * The offset in days from the specified DateTime field on the referenced entity
   * when the scheduled Event will trigger.
   */
  offset: number;

  /**
   * The ID of the user who created this item.
   */
  createdBy?: string;

  /**
   * The DateTime when this item was created _(in ISO-8601 format)_.
   */
  dtCreated?: string;

  /**
   * The DateTime when this item was last modified _(in ISO-8601 format)_.
   */
  dtLastModified?: string;

  /**
   * The ID of the user who last modified this item.
   */
  lastModifiedBy?: string;

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

export interface ScheduledEventConfigurationCreateParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param: The referenced configuration or billing entity for which the desired
   * scheduled Event will trigger.
   */
  entity: string;

  /**
   * Body param: A DateTime field for which the desired scheduled Event will
   * trigger - this must be a DateTime field on the referenced billing or
   * configuration entity.
   */
  field: string;

  /**
   * Body param: The name of the custom Scheduled Event Configuration.
   *
   * This must be in the format:
   *
   * - scheduled._name of entity_._custom event name_
   *
   * For example:
   *
   * - `scheduled.bill.endDateEvent`
   */
  name: string;

  /**
   * Body param: The offset in days from the specified DateTime field on the
   * referenced entity when the scheduled Event will trigger.
   */
  offset: number;

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

export interface ScheduledEventConfigurationRetrieveParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface ScheduledEventConfigurationUpdateParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param: The referenced configuration or billing entity for which the desired
   * scheduled Event will trigger.
   */
  entity: string;

  /**
   * Body param: A DateTime field for which the desired scheduled Event will
   * trigger - this must be a DateTime field on the referenced billing or
   * configuration entity.
   */
  field: string;

  /**
   * Body param: The name of the custom Scheduled Event Configuration.
   *
   * This must be in the format:
   *
   * - scheduled._name of entity_._custom event name_
   *
   * For example:
   *
   * - `scheduled.bill.endDateEvent`
   */
  name: string;

  /**
   * Body param: The offset in days from the specified DateTime field on the
   * referenced entity when the scheduled Event will trigger.
   */
  offset: number;

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

export interface ScheduledEventConfigurationListParams extends CursorParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Query param: list of UUIDs to retrieve
   */
  ids?: Array<string>;
}

export interface ScheduledEventConfigurationDeleteParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export declare namespace ScheduledEventConfigurations {
  export {
    type ScheduledEventConfigurationResponse as ScheduledEventConfigurationResponse,
    type ScheduledEventConfigurationResponsesCursor as ScheduledEventConfigurationResponsesCursor,
    type ScheduledEventConfigurationCreateParams as ScheduledEventConfigurationCreateParams,
    type ScheduledEventConfigurationRetrieveParams as ScheduledEventConfigurationRetrieveParams,
    type ScheduledEventConfigurationUpdateParams as ScheduledEventConfigurationUpdateParams,
    type ScheduledEventConfigurationListParams as ScheduledEventConfigurationListParams,
    type ScheduledEventConfigurationDeleteParams as ScheduledEventConfigurationDeleteParams,
  };
}
