// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { Cursor, type CursorParams } from '../pagination';

export class Events extends APIResource {
  /**
   * Retrieve a specific Event.
   *
   * Retrieves detailed information about the specific Event with the given UUID. An
   * Event corresponds to a unique instance of a state change within the system,
   * classified under a specific Event Type.
   */
  retrieve(
    id: string,
    params?: EventRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EventResponse>;
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<EventResponse>;
  retrieve(
    id: string,
    params: EventRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<EventResponse> {
    if (isRequestOptions(params)) {
      return this.retrieve(id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.get(`/organizations/${orgId}/events/${id}`, options);
  }

  /**
   * List all Events.
   *
   * Retrieve a list of all Events, with options to filter the returned list based on
   * various criteria. Each Event represents a unique instance of a state change
   * within the system, classified under a specific kind of Event.
   *
   * **NOTES:** You can:
   *
   * - Use `eventName` as a valid Query parameter to filter the list of Events
   *   returned. For example:
   *   `.../organizations/{orgId}/events?eventName=configuration.commitment.created`
   * - Use the
   *   [List Notification Events](https://www.m3ter.com/docs/api#tag/Events/operation/ListEventTypes)
   *   endpoint in this section. The response lists the valid Query parameters.
   */
  list(
    params?: EventListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<EventResponsesCursor, EventResponse>;
  list(options?: Core.RequestOptions): Core.PagePromise<EventResponsesCursor, EventResponse>;
  list(
    params: EventListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<EventResponsesCursor, EventResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { orgId = this._client.orgId, ...query } = params;
    return this._client.getAPIList(`/organizations/${orgId}/events`, EventResponsesCursor, {
      query,
      ...options,
    });
  }

  /**
   * List Event Fields.
   *
   * Retrieves a list of Fields for a specific Event Type. These Fields are dynamic
   * and forward compatibile, enabling calculation operations on the Event schema.
   *
   * **Notes:**
   *
   * - In many of the Response schema for this call, such as when you retrieve the
   *   Fields for a `configuration.commitment.created` Event Type, `new` represents
   *   the attributes the newly created object has. The Response to a call to
   *   retrieve the Fields for a `configuration.commitment.updated` Event Type will
   *   contain Field values for both the `old` and `new` objects. The Response to a
   *   call to retrieve the Fields for a `configuration.commitment.deleted` Event
   *   Type will only contain `old` Fields, for values at point of deletion. Having
   *   access to reference both `new` and `old` Field values for an object can be
   *   very useful if you want to base a Notification rule on an Event and include a
   *   calculation in the rule that, for example, compares `new` values with `old` -
   *   for example, trigger a Notification only when a Commitment has been updated
   *   and the `new` value for the `amount` is at least $1,000 greater than the `old`
   *   value.
   * - Some Event types will show `customFields` even though the specific billing or
   *   configuration object the Event is for does not yet have the custom fields
   *   functionality implemented. For these Events, their `customFields` values will
   *   not be populated until such time as the custom fields functionality is
   *   implemented for them
   */
  getFields(
    params?: EventGetFieldsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EventGetFieldsResponse>;
  getFields(options?: Core.RequestOptions): Core.APIPromise<EventGetFieldsResponse>;
  getFields(
    params: EventGetFieldsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<EventGetFieldsResponse> {
    if (isRequestOptions(params)) {
      return this.getFields({}, params);
    }
    const { orgId = this._client.orgId, ...query } = params;
    return this._client.get(`/organizations/${orgId}/events/fields`, { query, ...options });
  }

  /**
   * Retrieve a list of Notification Event Types.
   *
   * This endpoint retrieves a list of Event Types that can have Notification rules
   * configured.
   */
  getTypes(
    params?: EventGetTypesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EventGetTypesResponse>;
  getTypes(options?: Core.RequestOptions): Core.APIPromise<EventGetTypesResponse>;
  getTypes(
    params: EventGetTypesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<EventGetTypesResponse> {
    if (isRequestOptions(params)) {
      return this.getTypes({}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.get(`/organizations/${orgId}/events/types`, options);
  }
}

export class EventResponsesCursor extends Cursor<EventResponse> {}

/**
 * Response containing an Event entity.
 */
export interface EventResponse {
  /**
   * The uniqie identifier (UUID) of the Event.
   */
  id: string;

  /**
   * When an Event was actioned. It follows the ISO 8601 date and time format.
   *
   * You can action an Event to indicate that it has been followed up and resolved -
   * this is useful when dealing with integration error Events or ingest failure
   * Events.
   */
  dtActioned: string;

  /**
   * The name of the Event as it is registered in the system. This name is used to
   * categorize and trigger associated actions.
   */
  eventName: string;

  /**
   * The time when the Event was triggered, using the ISO 8601 date and time format.
   */
  eventTime: string;

  /**
   * The Data Transfer Object (DTO) containing the details of the Event.
   */
  m3terEvent: unknown;
}

/**
 * Response containing the list of Fields for an Event Type.
 */
export interface EventGetFieldsResponse {
  /**
   * An object containing the list of Fields for the queried Event Type.
   *
   * See the 200 Response sample where we have queried to get the Fields for the
   * `configuration.commitment.created` Event Type.
   *
   * **Note:** `new` represents the attributes the newly created object has.
   */
  events?: Record<string, Record<string, string>>;
}

/**
 * Response containing list of Event Types that can have Notification rules
 * configured.
 */
export interface EventGetTypesResponse {
  /**
   * An array containing a list of all Event Types for which Notification rules can
   * be configured. Each Event Type is represented by a string.
   */
  events?: Array<string>;
}

export interface EventRetrieveParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface EventListParams extends CursorParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Query param: The Account ID associated with the Event to filter the results.
   * Returns the Events that have been generated for the Account.
   */
  accountId?: string;

  /**
   * Query param:
   */
  eventName?: string | null;

  /**
   * Query param: The category of Events to filter the results by. Options:
   *
   * - Notification
   * - IntegrationEvent
   * - IngestValidationFailure
   * - DataExportJobFailure
   */
  eventType?: string;

  /**
   * Query param: List of Event UUIDs to filter the results.
   *
   * **NOTE:** cannot be used with other filters.
   */
  ids?: Array<string>;

  /**
   * Query param: A Boolean flag indicating whether to return Events that have been
   * actioned.
   *
   * - **TRUE** - include actioned Events.
   * - **FALSE** - exclude actioned Events.
   */
  includeActioned?: boolean;

  /**
   * Query param: Short code of the Notification to filter the results. Returns the
   * Events that have triggered the Notification.
   */
  notificationCode?: string;

  /**
   * Query param: Notification UUID to filter the results. Returns the Events that
   * have triggered the Notification.
   */
  notificationId?: string;

  /**
   * Query param:
   */
  resourceId?: string | null;
}

export interface EventGetFieldsParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Query param: The name of the specific Event Type to use as a list filter, for
   * example `configuration.commitment.created`.
   */
  eventName?: string;
}

export interface EventGetTypesParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

Events.EventResponsesCursor = EventResponsesCursor;

export declare namespace Events {
  export {
    type EventResponse as EventResponse,
    type EventGetFieldsResponse as EventGetFieldsResponse,
    type EventGetTypesResponse as EventGetTypesResponse,
    EventResponsesCursor as EventResponsesCursor,
    type EventRetrieveParams as EventRetrieveParams,
    type EventListParams as EventListParams,
    type EventGetFieldsParams as EventGetFieldsParams,
    type EventGetTypesParams as EventGetTypesParams,
  };
}
