// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { Cursor, type CursorParams } from '../pagination';

export class Counters extends APIResource {
  /**
   * Create a new Counter.
   */
  create(params: CounterCreateParams, options?: Core.RequestOptions): Core.APIPromise<CounterResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.post(`/organizations/${orgId}/counters`, { body, ...options });
  }

  /**
   * Retrieve a Counter for the given UUID.
   */
  retrieve(
    id: string,
    params?: CounterRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CounterResponse>;
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<CounterResponse>;
  retrieve(
    id: string,
    params: CounterRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CounterResponse> {
    if (isRequestOptions(params)) {
      return this.retrieve(id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.get(`/organizations/${orgId}/counters/${id}`, options);
  }

  /**
   * Update Counter for the given UUID.
   */
  update(
    id: string,
    params: CounterUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CounterResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.put(`/organizations/${orgId}/counters/${id}`, { body, ...options });
  }

  /**
   * Retrieve a list of Counter entities that can be filtered by Product, Counter ID,
   * or Codes.
   */
  list(
    params?: CounterListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CounterResponsesCursor, CounterResponse>;
  list(options?: Core.RequestOptions): Core.PagePromise<CounterResponsesCursor, CounterResponse>;
  list(
    params: CounterListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<CounterResponsesCursor, CounterResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { orgId = this._client.orgId, ...query } = params;
    return this._client.getAPIList(`/organizations/${orgId}/counters`, CounterResponsesCursor, {
      query,
      ...options,
    });
  }

  /**
   * Delete a Counter for the given UUID.
   */
  delete(
    id: string,
    params?: CounterDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CounterResponse>;
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<CounterResponse>;
  delete(
    id: string,
    params: CounterDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CounterResponse> {
    if (isRequestOptions(params)) {
      return this.delete(id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.delete(`/organizations/${orgId}/counters/${id}`, options);
  }
}

export class CounterResponsesCursor extends Cursor<CounterResponse> {}

export interface CounterResponse {
  /**
   * The UUID of the entity.
   */
  id: string;

  /**
   * Code of the Counter. A unique short code to identify the Counter.
   */
  code?: string;

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
   * Name of the Counter.
   */
  name?: string;

  /**
   * UUID of the product the Counter belongs to. _(Optional)_ - if no `productId` is
   * returned, the Counter is Global. A Global Counter can be used to price Plans or
   * Plan Templates belonging to any Product.
   */
  productId?: string;

  /**
   * Label for units shown on Bill line items, and indicating to customers what they
   * are being charged for.
   */
  unit?: string;

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

export interface CounterCreateParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param: Descriptive name for the Counter.
   */
  name: string;

  /**
   * Body param: User defined label for units shown on Bill line items, and
   * indicating to your customers what they are being charged for.
   */
  unit: string;

  /**
   * Body param: Code for the Counter. A unique short code to identify the Counter.
   */
  code?: string;

  /**
   * Body param: UUID of the product the Counter belongs to. _(Optional)_ - if left
   * blank, the Counter is Global. A Global Counter can be used to price Plans or
   * Plan Templates belonging to any Product.
   */
  productId?: string;

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

export interface CounterRetrieveParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface CounterUpdateParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param: Descriptive name for the Counter.
   */
  name: string;

  /**
   * Body param: User defined label for units shown on Bill line items, and
   * indicating to your customers what they are being charged for.
   */
  unit: string;

  /**
   * Body param: Code for the Counter. A unique short code to identify the Counter.
   */
  code?: string;

  /**
   * Body param: UUID of the product the Counter belongs to. _(Optional)_ - if left
   * blank, the Counter is Global. A Global Counter can be used to price Plans or
   * Plan Templates belonging to any Product.
   */
  productId?: string;

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

export interface CounterListParams extends CursorParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Query param: List of Counter codes to retrieve. These are unique short codes to
   * identify each Counter.
   */
  codes?: Array<string>;

  /**
   * Query param: List of Counter IDs to retrieve.
   */
  ids?: Array<string>;

  /**
   * Query param: List of Products UUIDs to retrieve Counters for.
   */
  productId?: Array<string>;
}

export interface CounterDeleteParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

Counters.CounterResponsesCursor = CounterResponsesCursor;

export declare namespace Counters {
  export {
    type CounterResponse as CounterResponse,
    CounterResponsesCursor as CounterResponsesCursor,
    type CounterCreateParams as CounterCreateParams,
    type CounterRetrieveParams as CounterRetrieveParams,
    type CounterUpdateParams as CounterUpdateParams,
    type CounterListParams as CounterListParams,
    type CounterDeleteParams as CounterDeleteParams,
  };
}
