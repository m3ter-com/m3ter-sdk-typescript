// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { Cursor, type CursorParams } from '../../pagination';

export class CreditLineItems extends APIResource {
  /**
   * Create a new Credit line item for the given Bill.
   *
   * When creating Credit line items for Bills, use the Credit Reasons created for
   * your Organization. See
   * [CreditReason](https://www.m3ter.com/docs/api#tag/CreditReason).
   */
  create(
    billId: string,
    params: CreditLineItemCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreditLineItemResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.post(`/organizations/${orgId}/bills/${billId}/creditlineitems`, { body, ...options });
  }

  /**
   * Retrieve the Credit line item with the given UUID.
   */
  retrieve(
    billId: string,
    id: string,
    params?: CreditLineItemRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreditLineItemResponse>;
  retrieve(
    billId: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreditLineItemResponse>;
  retrieve(
    billId: string,
    id: string,
    params: CreditLineItemRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreditLineItemResponse> {
    if (isRequestOptions(params)) {
      return this.retrieve(billId, id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.get(`/organizations/${orgId}/bills/${billId}/creditlineitems/${id}`, options);
  }

  /**
   * Update the Credit line item with the given UUID.
   */
  update(
    billId: string,
    id: string,
    params: CreditLineItemUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreditLineItemResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.put(`/organizations/${orgId}/bills/${billId}/creditlineitems/${id}`, {
      body,
      ...options,
    });
  }

  /**
   * List the Credit line items for the given Bill.
   */
  list(
    billId: string,
    params?: CreditLineItemListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CreditLineItemResponsesCursor, CreditLineItemResponse>;
  list(
    billId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CreditLineItemResponsesCursor, CreditLineItemResponse>;
  list(
    billId: string,
    params: CreditLineItemListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<CreditLineItemResponsesCursor, CreditLineItemResponse> {
    if (isRequestOptions(params)) {
      return this.list(billId, {}, params);
    }
    const { orgId = this._client.orgId, ...query } = params;
    return this._client.getAPIList(
      `/organizations/${orgId}/bills/${billId}/creditlineitems`,
      CreditLineItemResponsesCursor,
      { query, ...options },
    );
  }

  /**
   * Delete the Credit line item with the given UUID.
   */
  delete(
    billId: string,
    id: string,
    params?: CreditLineItemDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreditLineItemResponse>;
  delete(billId: string, id: string, options?: Core.RequestOptions): Core.APIPromise<CreditLineItemResponse>;
  delete(
    billId: string,
    id: string,
    params: CreditLineItemDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreditLineItemResponse> {
    if (isRequestOptions(params)) {
      return this.delete(billId, id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.delete(`/organizations/${orgId}/bills/${billId}/creditlineitems/${id}`, options);
  }
}

export class CreditLineItemResponsesCursor extends Cursor<CreditLineItemResponse> {}

export interface CreditLineItemResponse {
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
   * The id of the user who created this credit line item.
   */
  createdBy?: string;

  /**
   * The UUID of the credit reason for this credit line item.
   */
  creditReasonId?: string;

  /**
   * The DateTime when the credit line item was created _(in ISO-8601 format)_.
   */
  dtCreated?: string;

  /**
   * The DateTime when the credit line item was last modified _(in ISO-8601 format)_.
   */
  dtLastModified?: string;

  /**
   * The id of the user who last modified this credit line item.
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

export interface CreditLineItemCreateParams {
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
   * Body param: The UUID of the credit reason.
   */
  creditReasonId?: string;

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

export interface CreditLineItemRetrieveParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface CreditLineItemUpdateParams {
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
   * Body param: The UUID of the credit reason.
   */
  creditReasonId?: string;

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

export interface CreditLineItemListParams extends CursorParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface CreditLineItemDeleteParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

CreditLineItems.CreditLineItemResponsesCursor = CreditLineItemResponsesCursor;

export declare namespace CreditLineItems {
  export {
    type CreditLineItemResponse as CreditLineItemResponse,
    CreditLineItemResponsesCursor as CreditLineItemResponsesCursor,
    type CreditLineItemCreateParams as CreditLineItemCreateParams,
    type CreditLineItemRetrieveParams as CreditLineItemRetrieveParams,
    type CreditLineItemUpdateParams as CreditLineItemUpdateParams,
    type CreditLineItemListParams as CreditLineItemListParams,
    type CreditLineItemDeleteParams as CreditLineItemDeleteParams,
  };
}
