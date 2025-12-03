// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class CreditLineItems extends APIResource {
  /**
   * Create a new Credit line item for the given Bill.
   *
   * When creating Credit line items for Bills, use the Credit Reasons created for
   * your Organization. See
   * [CreditReason](https://www.m3ter.com/docs/api#tag/CreditReason).
   */
  create(
    billID: string,
    params: CreditLineItemCreateParams,
    options?: RequestOptions,
  ): APIPromise<CreditLineItemResponse> {
    const { orgId = this._client.orgID, ...body } = params;
    return this._client.post(path`/organizations/${orgId}/bills/${billID}/creditlineitems`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieve the Credit line item with the given UUID.
   */
  retrieve(
    id: string,
    params: CreditLineItemRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<CreditLineItemResponse> {
    const { orgId = this._client.orgID, billId } = params;
    return this._client.get(path`/organizations/${orgId}/bills/${billId}/creditlineitems/${id}`, options);
  }

  /**
   * Update the Credit line item with the given UUID.
   */
  update(
    id: string,
    params: CreditLineItemUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CreditLineItemResponse> {
    const { orgId = this._client.orgID, billId, ...body } = params;
    return this._client.put(path`/organizations/${orgId}/bills/${billId}/creditlineitems/${id}`, {
      body,
      ...options,
    });
  }

  /**
   * List the Credit line items for the given Bill.
   */
  list(
    billID: string,
    params: CreditLineItemListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CreditLineItemResponsesCursor, CreditLineItemResponse> {
    const { orgId = this._client.orgID, ...query } = params ?? {};
    return this._client.getAPIList(
      path`/organizations/${orgId}/bills/${billID}/creditlineitems`,
      Cursor<CreditLineItemResponse>,
      { query, ...options },
    );
  }

  /**
   * Delete the Credit line item with the given UUID.
   */
  delete(
    id: string,
    params: CreditLineItemDeleteParams,
    options?: RequestOptions,
  ): APIPromise<CreditLineItemResponse> {
    const { orgId = this._client.orgID, billId } = params;
    return this._client.delete(path`/organizations/${orgId}/bills/${billId}/creditlineitems/${id}`, options);
  }
}

export type CreditLineItemResponsesCursor = Cursor<CreditLineItemResponse>;

export interface CreditLineItemResponse {
  /**
   * The UUID of the entity.
   */
  id: string;

  /**
   * The credit amount.
   */
  amount?: number;

  /**
   * The ID of the user who created this line item.
   */
  createdBy?: string;

  /**
   * The UUID of the credit reason for this credit line item.
   */
  creditReasonId?: string;

  description?: string;

  /**
   * The DateTime when the line item was created.
   */
  dtCreated?: string;

  /**
   * The DateTime when the line item was last modified.
   */
  dtLastModified?: string;

  /**
   * The ID of the user who last modified this line item.
   */
  lastModifiedBy?: string;

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
    | 'BALANCE_FEE'
    | 'AD_HOC';

  productId?: string;

  referencedBillId?: string;

  referencedLineItemId?: string;

  servicePeriodEndDate?: string;

  servicePeriodStartDate?: string;

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
   * Body param:
   */
  amountToApplyOnBill?: number;

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
    | 'BALANCE_FEE'
    | 'AD_HOC';

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

  /**
   * UUID of the Bill.
   */
  billId: string;
}

export interface CreditLineItemUpdateParams {
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
   * Body param:
   */
  amountToApplyOnBill?: number;

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
    | 'BALANCE_FEE'
    | 'AD_HOC';

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

  /**
   * UUID of the bill.
   */
  billId: string;
}

export declare namespace CreditLineItems {
  export {
    type CreditLineItemResponse as CreditLineItemResponse,
    type CreditLineItemResponsesCursor as CreditLineItemResponsesCursor,
    type CreditLineItemCreateParams as CreditLineItemCreateParams,
    type CreditLineItemRetrieveParams as CreditLineItemRetrieveParams,
    type CreditLineItemUpdateParams as CreditLineItemUpdateParams,
    type CreditLineItemListParams as CreditLineItemListParams,
    type CreditLineItemDeleteParams as CreditLineItemDeleteParams,
  };
}
