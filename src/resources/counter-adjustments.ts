// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { Cursor, type CursorParams } from '../pagination';

export class CounterAdjustments extends APIResource {
  /**
   * Create a new CounterAdjustment for an Account using a Counter.
   *
   * **Notes:**
   *
   * - Use the new absolute value for the Counter for the selected date - if it was
   *   15 and has increased to 20, enter 20; if it was 15 and has decreased to 10,
   *   enter 10. _Do not enter_ the plus or minus value relative to the previous
   *   Counter value on the Account.
   * - CounterAdjustments on Accounts are supported down to a _specific day_ of
   *   granularity - you cannot create more than one CounterAdjustment for any given
   *   day using the same Counter and you'll receive an error if you try to do this.
   */
  create(
    params: CounterAdjustmentCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CounterAdjustmentResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.post(`/organizations/${orgId}/counteradjustments`, { body, ...options });
  }

  /**
   * Retrieve a CounterAdjustment for the given UUID.
   */
  retrieve(
    id: string,
    params?: CounterAdjustmentRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CounterAdjustmentResponse>;
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<CounterAdjustmentResponse>;
  retrieve(
    id: string,
    params: CounterAdjustmentRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CounterAdjustmentResponse> {
    if (isRequestOptions(params)) {
      return this.retrieve(id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.get(`/organizations/${orgId}/counteradjustments/${id}`, options);
  }

  /**
   * Update a CounterAdjustment for an Account.
   */
  update(
    id: string,
    params: CounterAdjustmentUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CounterAdjustmentResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.put(`/organizations/${orgId}/counteradjustments/${id}`, { body, ...options });
  }

  /**
   * Retrieve a list of CounterAdjustments created for Accounts in your Organization.
   * You can filter the list returned by date, Account ID, or Counter ID.
   *
   * **CONSTRAINTS:**
   *
   * - The `counterId` query parameter is always required when calling this endpoint,
   *   used either as a single query parameter or in combination with any of the
   *   other query parameters.
   * - If you want to use the `date`, `dateStart`, or `dateEnd` query parameters, you
   *   must also use the `accountId` query parameter.
   */
  list(
    params?: CounterAdjustmentListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CounterAdjustmentResponsesCursor, CounterAdjustmentResponse>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<CounterAdjustmentResponsesCursor, CounterAdjustmentResponse>;
  list(
    params: CounterAdjustmentListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<CounterAdjustmentResponsesCursor, CounterAdjustmentResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { orgId = this._client.orgId, ...query } = params;
    return this._client.getAPIList(
      `/organizations/${orgId}/counteradjustments`,
      CounterAdjustmentResponsesCursor,
      { query, ...options },
    );
  }

  /**
   * Delete a CounterAdjustment for the given UUID.
   */
  delete(
    id: string,
    params?: CounterAdjustmentDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CounterAdjustmentResponse>;
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<CounterAdjustmentResponse>;
  delete(
    id: string,
    params: CounterAdjustmentDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CounterAdjustmentResponse> {
    if (isRequestOptions(params)) {
      return this.delete(id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.delete(`/organizations/${orgId}/counteradjustments/${id}`, options);
  }
}

export class CounterAdjustmentResponsesCursor extends Cursor<CounterAdjustmentResponse> {}

export interface CounterAdjustmentResponse {
  /**
   * The UUID of the entity.
   */
  id: string;

  /**
   * The version number:
   *
   * - **Create:** On initial Create to insert a new entity, the version is set at 1
   *   in the response.
   * - **Update:** On successful Update, the version is incremented by 1 in the
   *   response.
   */
  version: number;

  /**
   * The Account ID the CounterAdjustment was created for.
   */
  accountId?: string;

  /**
   * The ID of the Counter that was used to make the CounterAdjustment on the
   * Account.
   */
  counterId?: string;

  /**
   * The ID of the user who created this item.
   */
  createdBy?: string;

  /**
   * The date the CounterAdjustment was created for the Account _(in ISO-8601 date
   * format)_.
   */
  date?: string;

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
   * Purchase Order Number for the Counter Adjustment. _(Optional)_
   */
  purchaseOrderNumber?: string;

  /**
   * Integer Value of the Counter that was used to make the CounterAdjustment.
   */
  value?: number;
}

export interface CounterAdjustmentCreateParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param: The Account ID the CounterAdjustment is created for.
   */
  accountId: string;

  /**
   * Body param: The ID of the Counter used for the CounterAdjustment on the Account.
   */
  counterId: string;

  /**
   * Body param: The date the CounterAdjustment is created for the Account _(in
   * ISO-8601 date format)_.
   *
   * **Note:** CounterAdjustments on Accounts are supported down to a _specific day_
   * of granularity - you cannot create more than one CounterAdjustment for any given
   * day using the same Counter and you'll receive an error if you try to do this.
   */
  date: string;

  /**
   * Body param: Integer Value of the Counter used for the CounterAdjustment.
   *
   * **Note:** Use the new absolute value for the Counter for the selected date - if
   * it was 15 and has increased to 20, enter 20; if it was 15 and has decreased to
   * 10, enter 10. _Do not enter_ the plus or minus value relative to the previous
   * Counter value on the Account.
   */
  value: number;

  /**
   * Body param: Purchase Order Number for the Counter Adjustment. _(Optional)_
   */
  purchaseOrderNumber?: string;

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

export interface CounterAdjustmentRetrieveParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface CounterAdjustmentUpdateParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param: The Account ID the CounterAdjustment is created for.
   */
  accountId: string;

  /**
   * Body param: The ID of the Counter used for the CounterAdjustment on the Account.
   */
  counterId: string;

  /**
   * Body param: The date the CounterAdjustment is created for the Account _(in
   * ISO-8601 date format)_.
   *
   * **Note:** CounterAdjustments on Accounts are supported down to a _specific day_
   * of granularity - you cannot create more than one CounterAdjustment for any given
   * day using the same Counter and you'll receive an error if you try to do this.
   */
  date: string;

  /**
   * Body param: Integer Value of the Counter used for the CounterAdjustment.
   *
   * **Note:** Use the new absolute value for the Counter for the selected date - if
   * it was 15 and has increased to 20, enter 20; if it was 15 and has decreased to
   * 10, enter 10. _Do not enter_ the plus or minus value relative to the previous
   * Counter value on the Account.
   */
  value: number;

  /**
   * Body param: Purchase Order Number for the Counter Adjustment. _(Optional)_
   */
  purchaseOrderNumber?: string;

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

export interface CounterAdjustmentListParams extends CursorParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Query param: List CounterAdjustment items for the Account UUID.
   */
  accountId?: string;

  /**
   * Query param: List CounterAdjustment items for the Counter UUID.
   */
  counterId?: string;

  /**
   * Query param: List CounterAdjustment items for the given date.
   */
  date?: string;

  /**
   * Query param:
   */
  dateEnd?: string | null;

  /**
   * Query param:
   */
  dateStart?: string | null;

  /**
   * Query param: Only include CounterAdjustments with end dates earlier than this
   * date.
   */
  endDateEnd?: string;

  /**
   * Query param: Only include CounterAdjustments with end dates equal to or later
   * than this date.
   */
  endDateStart?: string;

  /**
   * Query param: Sort order for the results
   */
  sortOrder?: string;
}

export interface CounterAdjustmentDeleteParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

CounterAdjustments.CounterAdjustmentResponsesCursor = CounterAdjustmentResponsesCursor;

export declare namespace CounterAdjustments {
  export {
    type CounterAdjustmentResponse as CounterAdjustmentResponse,
    CounterAdjustmentResponsesCursor as CounterAdjustmentResponsesCursor,
    type CounterAdjustmentCreateParams as CounterAdjustmentCreateParams,
    type CounterAdjustmentRetrieveParams as CounterAdjustmentRetrieveParams,
    type CounterAdjustmentUpdateParams as CounterAdjustmentUpdateParams,
    type CounterAdjustmentListParams as CounterAdjustmentListParams,
    type CounterAdjustmentDeleteParams as CounterAdjustmentDeleteParams,
  };
}
