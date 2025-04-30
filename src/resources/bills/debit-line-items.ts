// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { Cursor, type CursorParams } from '../../pagination';

export class DebitLineItems extends APIResource {
  /**
   * Create a new Debit line item for the given bill.
   *
   * When creating Debit line items for Bills, use the Debit Reasons created for your
   * Organization. See [DebitReason](https://www.m3ter.com/docs/api#tag/DebitReason).
   */
  create(
    billId: string,
    params: DebitLineItemCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DebitLineItemResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.post(`/organizations/${orgId}/bills/${billId}/debitlineitems`, { body, ...options });
  }

  /**
   * Retrieve the Debit line item with the given UUID.
   */
  retrieve(
    billId: string,
    id: string,
    params?: DebitLineItemRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DebitLineItemResponse>;
  retrieve(billId: string, id: string, options?: Core.RequestOptions): Core.APIPromise<DebitLineItemResponse>;
  retrieve(
    billId: string,
    id: string,
    params: DebitLineItemRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DebitLineItemResponse> {
    if (isRequestOptions(params)) {
      return this.retrieve(billId, id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.get(`/organizations/${orgId}/bills/${billId}/debitlineitems/${id}`, options);
  }

  /**
   * Update the Debit line item with the given UUID.
   */
  update(
    billId: string,
    id: string,
    params: DebitLineItemUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DebitLineItemResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.put(`/organizations/${orgId}/bills/${billId}/debitlineitems/${id}`, {
      body,
      ...options,
    });
  }

  /**
   * List the Debit line items for the given bill.
   */
  list(
    billId: string,
    params?: DebitLineItemListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DebitLineItemResponsesCursor, DebitLineItemResponse>;
  list(
    billId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DebitLineItemResponsesCursor, DebitLineItemResponse>;
  list(
    billId: string,
    params: DebitLineItemListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<DebitLineItemResponsesCursor, DebitLineItemResponse> {
    if (isRequestOptions(params)) {
      return this.list(billId, {}, params);
    }
    const { orgId = this._client.orgId, ...query } = params;
    return this._client.getAPIList(
      `/organizations/${orgId}/bills/${billId}/debitlineitems`,
      DebitLineItemResponsesCursor,
      { query, ...options },
    );
  }

  /**
   * Delete the Debit line item with the given UUID.
   */
  delete(
    billId: string,
    id: string,
    params?: DebitLineItemDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DebitLineItemResponse>;
  delete(billId: string, id: string, options?: Core.RequestOptions): Core.APIPromise<DebitLineItemResponse>;
  delete(
    billId: string,
    id: string,
    params: DebitLineItemDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DebitLineItemResponse> {
    if (isRequestOptions(params)) {
      return this.delete(billId, id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.delete(`/organizations/${orgId}/bills/${billId}/debitlineitems/${id}`, options);
  }
}

export class DebitLineItemResponsesCursor extends Cursor<DebitLineItemResponse> {}

export interface DebitLineItemResponse {
  /**
   * The UUID of the entity.
   */
  id: string;

  /**
   * The amount for the line item.
   */
  amount: number;

  /**
   * The description of the line item.
   */
  description: string;

  /**
   * The UUID of the Product.
   */
  productId: string;

  /**
   * The UUID of the bill for the line item.
   */
  referencedBillId: string;

  /**
   * The UUID of the line item.
   */
  referencedLineItemId: string;

  /**
   * The service period end date in ISO-8601 format. _(exclusive of the ending
   * date)_.
   */
  servicePeriodEndDate: string;

  /**
   * The service period start date in ISO-8601 format. _(inclusive of the starting
   * date)_.
   */
  servicePeriodStartDate: string;

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
   * The id of the user who created this debit line item.
   */
  createdBy?: string;

  /**
   * The UUID of the debit reason for this debit line item.
   */
  debitReasonId?: string;

  /**
   * The DateTime when the debit line item was created _(in ISO-8601 format)_.
   */
  dtCreated?: string;

  /**
   * The DateTime when the debit line item was last modified _(in ISO-8601 format)_.
   */
  dtLastModified?: string;

  /**
   * The id of the user who last modified this debit line item.
   */
  lastModifiedBy?: string;
}

export interface DebitLineItemCreateParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param: The amount for the line item.
   */
  amount: number;

  /**
   * Body param: The description for the line item.
   */
  description: string;

  /**
   * Body param: The UUID of the Product.
   */
  productId: string;

  /**
   * Body param: The UUID of the bill for the line item.
   */
  referencedBillId: string;

  /**
   * Body param: The UUID of the line item.
   */
  referencedLineItemId: string;

  /**
   * Body param: The service period end date in ISO-8601 format._(exclusive of the
   * ending date)_.
   */
  servicePeriodEndDate: string;

  /**
   * Body param: The service period start date in ISO-8601 format. _(inclusive of the
   * starting date)_.
   */
  servicePeriodStartDate: string;

  /**
   * Body param: The ID of the Debit Reason given for this debit line item.
   */
  debitReasonId?: string;

  /**
   * Body param:
   */
  lineItemType?:
    | 'STANDING_CHARGE'
    | 'USAGE'
    | 'COUNTER_RUNNING_TOTAL_CHARGE'
    | 'COUNTER_ADJUSTMENT_DEBIT'
    | 'COUNTER_ADJUSTMENT_CREDIT'
    | 'USAGE_CREDIT'
    | 'MINIMUM_SPEND'
    | 'MINIMUM_SPEND_REFUND'
    | 'CREDIT_DEDUCTION'
    | 'MANUAL_ADJUSTMENT'
    | 'CREDIT_MEMO'
    | 'DEBIT_MEMO'
    | 'COMMITMENT_CONSUMED'
    | 'COMMITMENT_FEE'
    | 'OVERAGE_SURCHARGE'
    | 'OVERAGE_USAGE'
    | 'BALANCE_CONSUMED'
    | 'BALANCE_FEE';

  /**
   * Body param: The UUID of the line item reason.
   */
  reasonId?: string;

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

export interface DebitLineItemRetrieveParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface DebitLineItemUpdateParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param: The amount for the line item.
   */
  amount: number;

  /**
   * Body param: The description for the line item.
   */
  description: string;

  /**
   * Body param: The UUID of the Product.
   */
  productId: string;

  /**
   * Body param: The UUID of the bill for the line item.
   */
  referencedBillId: string;

  /**
   * Body param: The UUID of the line item.
   */
  referencedLineItemId: string;

  /**
   * Body param: The service period end date in ISO-8601 format._(exclusive of the
   * ending date)_.
   */
  servicePeriodEndDate: string;

  /**
   * Body param: The service period start date in ISO-8601 format. _(inclusive of the
   * starting date)_.
   */
  servicePeriodStartDate: string;

  /**
   * Body param: The ID of the Debit Reason given for this debit line item.
   */
  debitReasonId?: string;

  /**
   * Body param:
   */
  lineItemType?:
    | 'STANDING_CHARGE'
    | 'USAGE'
    | 'COUNTER_RUNNING_TOTAL_CHARGE'
    | 'COUNTER_ADJUSTMENT_DEBIT'
    | 'COUNTER_ADJUSTMENT_CREDIT'
    | 'USAGE_CREDIT'
    | 'MINIMUM_SPEND'
    | 'MINIMUM_SPEND_REFUND'
    | 'CREDIT_DEDUCTION'
    | 'MANUAL_ADJUSTMENT'
    | 'CREDIT_MEMO'
    | 'DEBIT_MEMO'
    | 'COMMITMENT_CONSUMED'
    | 'COMMITMENT_FEE'
    | 'OVERAGE_SURCHARGE'
    | 'OVERAGE_USAGE'
    | 'BALANCE_CONSUMED'
    | 'BALANCE_FEE';

  /**
   * Body param: The UUID of the line item reason.
   */
  reasonId?: string;

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

export interface DebitLineItemListParams extends CursorParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface DebitLineItemDeleteParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

DebitLineItems.DebitLineItemResponsesCursor = DebitLineItemResponsesCursor;

export declare namespace DebitLineItems {
  export {
    type DebitLineItemResponse as DebitLineItemResponse,
    DebitLineItemResponsesCursor as DebitLineItemResponsesCursor,
    type DebitLineItemCreateParams as DebitLineItemCreateParams,
    type DebitLineItemRetrieveParams as DebitLineItemRetrieveParams,
    type DebitLineItemUpdateParams as DebitLineItemUpdateParams,
    type DebitLineItemListParams as DebitLineItemListParams,
    type DebitLineItemDeleteParams as DebitLineItemDeleteParams,
  };
}
