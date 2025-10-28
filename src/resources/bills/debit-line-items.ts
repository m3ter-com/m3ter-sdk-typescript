// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class DebitLineItems extends APIResource {
  /**
   * Create a new Debit line item for the given bill.
   *
   * When creating Debit line items for Bills, use the Debit Reasons created for your
   * Organization. See [DebitReason](https://www.m3ter.com/docs/api#tag/DebitReason).
   */
  create(
    billID: string,
    params: DebitLineItemCreateParams,
    options?: RequestOptions,
  ): APIPromise<DebitLineItemResponse> {
    const { orgId = this._client.orgID, ...body } = params;
    return this._client.post(path`/organizations/${orgId}/bills/${billID}/debitlineitems`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieve the Debit line item with the given UUID.
   */
  retrieve(
    id: string,
    params: DebitLineItemRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<DebitLineItemResponse> {
    const { orgId = this._client.orgID, billId } = params;
    return this._client.get(path`/organizations/${orgId}/bills/${billId}/debitlineitems/${id}`, options);
  }

  /**
   * Update the Debit line item with the given UUID.
   */
  update(
    id: string,
    params: DebitLineItemUpdateParams,
    options?: RequestOptions,
  ): APIPromise<DebitLineItemResponse> {
    const { orgId = this._client.orgID, billId, ...body } = params;
    return this._client.put(path`/organizations/${orgId}/bills/${billId}/debitlineitems/${id}`, {
      body,
      ...options,
    });
  }

  /**
   * List the Debit line items for the given bill.
   */
  list(
    billID: string,
    params: DebitLineItemListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<DebitLineItemResponsesCursor, DebitLineItemResponse> {
    const { orgId = this._client.orgID, ...query } = params ?? {};
    return this._client.getAPIList(
      path`/organizations/${orgId}/bills/${billID}/debitlineitems`,
      Cursor<DebitLineItemResponse>,
      { query, ...options },
    );
  }

  /**
   * Delete the Debit line item with the given UUID.
   */
  delete(
    id: string,
    params: DebitLineItemDeleteParams,
    options?: RequestOptions,
  ): APIPromise<DebitLineItemResponse> {
    const { orgId = this._client.orgID, billId } = params;
    return this._client.delete(path`/organizations/${orgId}/bills/${billId}/debitlineitems/${id}`, options);
  }
}

export type DebitLineItemResponsesCursor = Cursor<DebitLineItemResponse>;

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

export interface DebitLineItemCreateParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param:
   */
  accountingProductId: string;

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

  /**
   * UUID of the bill.
   */
  billId: string;
}

export interface DebitLineItemUpdateParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Path param: UUID of the bill.
   */
  billId: string;

  /**
   * Body param:
   */
  accountingProductId: string;

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

  /**
   * UUID of the bill.
   */
  billId: string;
}

export declare namespace DebitLineItems {
  export {
    type DebitLineItemResponse as DebitLineItemResponse,
    type DebitLineItemResponsesCursor as DebitLineItemResponsesCursor,
    type DebitLineItemCreateParams as DebitLineItemCreateParams,
    type DebitLineItemRetrieveParams as DebitLineItemRetrieveParams,
    type DebitLineItemUpdateParams as DebitLineItemUpdateParams,
    type DebitLineItemListParams as DebitLineItemListParams,
    type DebitLineItemDeleteParams as DebitLineItemDeleteParams,
  };
}
