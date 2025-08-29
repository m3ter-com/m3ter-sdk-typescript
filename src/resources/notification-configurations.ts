// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { Cursor, type CursorParams } from '../pagination';

export class NotificationConfigurations extends APIResource {
  /**
   * Create a new Notification for an Event.
   *
   * This endpoint enables you to create a new Event Notification for the specified
   * Organization. You need to supply a request body with the details of the new
   * Notification.
   *
   * @example
   * ```ts
   * const notificationConfigurationResponse =
   *   await client.notificationConfigurations.create({
   *     code: 'commitment_under_10_percent',
   *     description: 'Commitment amount fell below 10%',
   *     eventName: 'configuration.commitment.updated',
   *     name: 'Commitment has under 10% remaining',
   *   });
   * ```
   */
  create(
    params: NotificationConfigurationCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NotificationConfigurationResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.post(`/organizations/${orgId}/notifications/configurations`, { body, ...options });
  }

  /**
   * Retrieve the details of a specific Notification using its UUID. Includes the
   * Event the Notification is based on, and any calculation referencing the Event's
   * field and which defines further conditions that must be met to trigger the
   * Notification when the Event occurs.
   *
   * @example
   * ```ts
   * const notificationConfigurationResponse =
   *   await client.notificationConfigurations.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    params?: NotificationConfigurationRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NotificationConfigurationResponse>;
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<NotificationConfigurationResponse>;
  retrieve(
    id: string,
    params: NotificationConfigurationRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<NotificationConfigurationResponse> {
    if (isRequestOptions(params)) {
      return this.retrieve(id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.get(`/organizations/${orgId}/notifications/configurations/${id}`, options);
  }

  /**
   * Update a Notification with the given UUID.
   *
   * This endpoint modifies the configuration details of an existing Notification.
   * You can change the Event that triggers the Notification and/or update the
   * conditions for sending the Notification.
   *
   * @example
   * ```ts
   * const notificationConfigurationResponse =
   *   await client.notificationConfigurations.update('id', {
   *     code: 'commitment_under_10_percent',
   *     description: 'Commitment amount fell below 10%',
   *     eventName: 'configuration.commitment.updated',
   *     name: 'Commitment has under 10% remaining',
   *   });
   * ```
   */
  update(
    id: string,
    params: NotificationConfigurationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NotificationConfigurationResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.put(`/organizations/${orgId}/notifications/configurations/${id}`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieve a list of Event Notifications for the specified Organization.
   *
   * This endpoint retrieves a list of all Event Notifications for the Organization
   * identified by its UUID. The list can be paginated for easier management. The
   * list also supports filtering by parameters such as Notification UUID.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const notificationConfigurationResponse of client.notificationConfigurations.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    params?: NotificationConfigurationListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<NotificationConfigurationResponsesCursor, NotificationConfigurationResponse>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<NotificationConfigurationResponsesCursor, NotificationConfigurationResponse>;
  list(
    params: NotificationConfigurationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<NotificationConfigurationResponsesCursor, NotificationConfigurationResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { orgId = this._client.orgId, ...query } = params;
    return this._client.getAPIList(
      `/organizations/${orgId}/notifications/configurations`,
      NotificationConfigurationResponsesCursor,
      { query, ...options },
    );
  }

  /**
   * Delete the Notification with the given UUID.
   *
   * This endpoint permanently removes a specified Notification and its
   * configuration. This action cannot be undone.
   *
   * @example
   * ```ts
   * const notificationConfigurationResponse =
   *   await client.notificationConfigurations.delete('id');
   * ```
   */
  delete(
    id: string,
    params?: NotificationConfigurationDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NotificationConfigurationResponse>;
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<NotificationConfigurationResponse>;
  delete(
    id: string,
    params: NotificationConfigurationDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<NotificationConfigurationResponse> {
    if (isRequestOptions(params)) {
      return this.delete(id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.delete(`/organizations/${orgId}/notifications/configurations/${id}`, options);
  }
}

export class NotificationConfigurationResponsesCursor extends Cursor<NotificationConfigurationResponse> {}

export interface NotificationConfigurationResponse {
  /**
   * The UUID of the entity.
   */
  id: string;

  /**
   * The short code for the Notification.
   */
  code: string;

  /**
   * The description for the Notification providing a brief overview of its purpose
   * and functionality.
   */
  description: string;

  /**
   * The name of the Notification.
   */
  name: string;

  /**
   * A Boolean flag indicating whether or not the Notification is active.
   *
   * - **TRUE** - active Notification.
   * - **FALSE** - inactive Notification.
   */
  active?: boolean;

  /**
   * A Boolean flag indicating whether the Notification is always triggered,
   * regardless of other conditions and omitting reference to any calculation. This
   * means the Notification will be triggered simply by the Event it is based on
   * occurring and with no further conditions having to be met.
   *
   * - **TRUE** - the Notification is always triggered and omits any reference to the
   *   calculation to check for other conditions being true before triggering the
   *   Notification.
   * - **FALSE** - the Notification is only triggered when the Event it is based on
   *   occurs and any calculation is checked and all conditions defined by the
   *   calculation are met.
   */
  alwaysFireEvent?: boolean;

  /**
   * A logical expression that that is evaluated to a Boolean. If it evaluates as
   * `True`, a Notification for the Event is created and sent to the configured
   * destination. Calculations can reference numeric, string, and boolean Event
   * fields.
   *
   * See
   * [Creating Calculations](https://www.m3ter.com/docs/guides/utilizing-events-and-notifications/key-concepts-and-relationships#creating-calculations)
   * in the m3ter documentation for more information.
   */
  calculation?: string;

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
   * The name of the Event that the Notification is based on. When this Event occurs
   * and the calculation evaluates to `True`, the Notification is triggered.
   *
   * **Note:** If the Notification is set to always fire, then the Notification will
   * always be sent when the Event it is based on occurs, and without any other
   * conditions defined by a calculation having to be met.
   */
  eventName?: string;

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

export interface NotificationConfigurationCreateParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param: The short code for the Notification.
   */
  code: string;

  /**
   * Body param: The description for the Notification providing a brief overview of
   * its purpose and functionality.
   */
  description: string;

  /**
   * Body param: The name of the _Event type_ that the Notification is based on. When
   * an Event of this type occurs and any calculation built into the Notification
   * evaluates to `True`, the Notification is triggered.
   *
   * **Note:** If the Notification is set to always fire, then the Notification will
   * always be sent when the Event of the type it is based on occurs, and without any
   * other conditions defined by a calculation having to be met.
   */
  eventName: string;

  /**
   * Body param: The name of the Notification.
   */
  name: string;

  /**
   * Body param: Boolean flag that sets the Notification as active or inactive. Only
   * active Notifications are sent when triggered by the Event they are based on:
   *
   * - **TRUE** - set Notification as active.
   * - **FALSE** - set Notification as inactive.
   */
  active?: boolean;

  /**
   * Body param: A Boolean flag indicating whether the Notification is always
   * triggered, regardless of other conditions and omitting reference to any
   * calculation. This means the Notification will be triggered simply by the Event
   * it is based on occurring and with no further conditions having to be met.
   *
   * - **TRUE** - the Notification is always triggered and omits any reference to the
   *   calculation to check for other conditions being true before triggering the
   *   Notification.
   * - **FALSE** - the Notification is only triggered when the Event it is based on
   *   occurs and any calculation is checked and all conditions defined by the
   *   calculation are met.
   */
  alwaysFireEvent?: boolean;

  /**
   * Body param: A logical expression that that is evaluated to a Boolean. If it
   * evaluates as `True`, a Notification for the Event is created and sent to the
   * configured destination. Calculations can reference numeric, string, and boolean
   * Event fields.
   *
   * See
   * [Creating Calculations](https://www.m3ter.com/docs/guides/utilizing-events-and-notifications/key-concepts-and-relationships#creating-calculations)
   * in the m3ter documentation for more information.
   */
  calculation?: string;

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

export interface NotificationConfigurationRetrieveParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface NotificationConfigurationUpdateParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param: The short code for the Notification.
   */
  code: string;

  /**
   * Body param: The description for the Notification providing a brief overview of
   * its purpose and functionality.
   */
  description: string;

  /**
   * Body param: The name of the _Event type_ that the Notification is based on. When
   * an Event of this type occurs and any calculation built into the Notification
   * evaluates to `True`, the Notification is triggered.
   *
   * **Note:** If the Notification is set to always fire, then the Notification will
   * always be sent when the Event of the type it is based on occurs, and without any
   * other conditions defined by a calculation having to be met.
   */
  eventName: string;

  /**
   * Body param: The name of the Notification.
   */
  name: string;

  /**
   * Body param: Boolean flag that sets the Notification as active or inactive. Only
   * active Notifications are sent when triggered by the Event they are based on:
   *
   * - **TRUE** - set Notification as active.
   * - **FALSE** - set Notification as inactive.
   */
  active?: boolean;

  /**
   * Body param: A Boolean flag indicating whether the Notification is always
   * triggered, regardless of other conditions and omitting reference to any
   * calculation. This means the Notification will be triggered simply by the Event
   * it is based on occurring and with no further conditions having to be met.
   *
   * - **TRUE** - the Notification is always triggered and omits any reference to the
   *   calculation to check for other conditions being true before triggering the
   *   Notification.
   * - **FALSE** - the Notification is only triggered when the Event it is based on
   *   occurs and any calculation is checked and all conditions defined by the
   *   calculation are met.
   */
  alwaysFireEvent?: boolean;

  /**
   * Body param: A logical expression that that is evaluated to a Boolean. If it
   * evaluates as `True`, a Notification for the Event is created and sent to the
   * configured destination. Calculations can reference numeric, string, and boolean
   * Event fields.
   *
   * See
   * [Creating Calculations](https://www.m3ter.com/docs/guides/utilizing-events-and-notifications/key-concepts-and-relationships#creating-calculations)
   * in the m3ter documentation for more information.
   */
  calculation?: string;

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

export interface NotificationConfigurationListParams extends CursorParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Query param: A Boolean flag indicating whether to retrieve only active or only
   * inactive Notifications.
   *
   * - **TRUE** - only active Notifications are returned.
   * - **FALSE** - only inactive Notifications are returned.
   */
  active?: boolean;

  /**
   * Query param: Use this to filter the Notifications returned - only those
   * Notifications that are based on the _Event type_ specified by `eventName` are
   * returned.
   */
  eventName?: string;

  /**
   * Query param: A list of specific Notification UUIDs to retrieve.
   */
  ids?: Array<string>;
}

export interface NotificationConfigurationDeleteParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

NotificationConfigurations.NotificationConfigurationResponsesCursor =
  NotificationConfigurationResponsesCursor;

export declare namespace NotificationConfigurations {
  export {
    type NotificationConfigurationResponse as NotificationConfigurationResponse,
    NotificationConfigurationResponsesCursor as NotificationConfigurationResponsesCursor,
    type NotificationConfigurationCreateParams as NotificationConfigurationCreateParams,
    type NotificationConfigurationRetrieveParams as NotificationConfigurationRetrieveParams,
    type NotificationConfigurationUpdateParams as NotificationConfigurationUpdateParams,
    type NotificationConfigurationListParams as NotificationConfigurationListParams,
    type NotificationConfigurationDeleteParams as NotificationConfigurationDeleteParams,
  };
}
