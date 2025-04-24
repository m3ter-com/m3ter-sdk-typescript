// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { Cursor, type CursorParams } from '../../pagination';

export class LineItems extends APIResource {
  /**
   * Retrieves a specific line item within a Bill.
   *
   * This endpoint retrieves the line item given by its unique identifier (UUID) from
   * a specific Bill.
   */
  retrieve(
    billId: string,
    id: string,
    params?: LineItemRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LineItemResponse>;
  retrieve(billId: string, id: string, options?: Core.RequestOptions): Core.APIPromise<LineItemResponse>;
  retrieve(
    billId: string,
    id: string,
    params: LineItemRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LineItemResponse> {
    if (isRequestOptions(params)) {
      return this.retrieve(billId, id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.get(`/organizations/${orgId}/bills/${billId}/lineitems/${id}`, options);
  }

  /**
   * Lists all the line items for a specific Bill.
   *
   * This endpoint retrieves a list of line items for the given Bill within the
   * specified Organization. The list can also be paginated for easier management.
   * The line items returned in the list include individual charges, discounts, or
   * adjustments within a Bill.
   */
  list(
    billId: string,
    params?: LineItemListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<LineItemResponsesCursor, LineItemResponse>;
  list(
    billId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<LineItemResponsesCursor, LineItemResponse>;
  list(
    billId: string,
    params: LineItemListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<LineItemResponsesCursor, LineItemResponse> {
    if (isRequestOptions(params)) {
      return this.list(billId, {}, params);
    }
    const { orgId = this._client.orgId, ...query } = params;
    return this._client.getAPIList(
      `/organizations/${orgId}/bills/${billId}/lineitems`,
      LineItemResponsesCursor,
      { query, ...options },
    );
  }
}

export class LineItemResponsesCursor extends Cursor<LineItemResponse> {}

export interface LineItemResponse {
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
   * A unique identifier (UUID) for the Aggregation that contributes to this Bill
   * line item.
   */
  aggregationId?: string;

  /**
   * Represents the average unit price calculated across all pricing bands or tiers
   * for this line item.
   */
  averageUnitPrice?: number;

  balanceId?: string;

  /**
   * Array containing the pricing band information, which shows the details for each
   * pricing band or tier.
   */
  bandUsage?: Array<LineItemResponse.BandUsage>;

  /**
   * The unique identifier (UUID) for the Bill that includes this line item.
   */
  billId?: string;

  chargeId?: string;

  /**
   * The unique identifier (UUID) of the Commitment _(if this is used)_.
   */
  commitmentId?: string;

  /**
   * A unique identifier (UUID) for the Compound Aggregation, if applicable.
   */
  compoundAggregationId?: string;

  /**
   * The unique identifier (UUID) for the contract associated with this line item.
   */
  contractId?: string;

  /**
   * The currency conversion rate _(if used)_ for the line item.
   */
  conversionRate?: number;

  /**
   * The subtotal amount for this line item after currency conversion, if applicable.
   */
  convertedSubtotal?: number;

  counterId?: string;

  /**
   * The unique identifier (UUID) for the user who created the Bill line item.
   */
  createdBy?: string;

  /**
   * The unique identifier (UUID) for the type of credit applied to this line item.
   */
  creditTypeId?: string;

  /**
   * The currency in which the line item is billed, represented as a currency code.
   * For example, USD, GBP, or EUR.
   */
  currency?: string;

  /**
   * A detailed description providing context for the line item within the Bill.
   */
  description?: string;

  /**
   * The date and time _(in ISO 8601 format)_ when the Bill line item was first
   * created.
   */
  dtCreated?: string;

  /**
   * The date and time _(in ISO 8601 format)_ when the Bill line item was last
   * modified.
   */
  dtLastModified?: string;

  group?: Record<string, string>;

  /**
   * Boolean flag indicating whether the Bill line item has associated statement
   * usage in JSON format. When a Bill statement is generated, usage line items have
   * their usage stored in JSON format.
   *
   * See
   * [Working with Bill Statements](https://www.m3ter.com/docs/guides/running-viewing-and-managing-bills/working-with-bill-statements)
   * for more information.
   */
  jsonUsageGenerated?: boolean;

  /**
   * The unique identifier (UUID) for the user who last modified this Bill line item.
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
    | 'BALANCE_FEE';

  /**
   * The unique identifier (UUID) of the Meter responsible for tracking usage.
   */
  meterId?: string;

  /**
   * The UUID of the PlanGroup.
   *
   * The unique identifier (UUID) for the PlanGroup, if applicable.
   */
  planGroupId?: string;

  /**
   * A unique identifier (UUID) for the billing Plan associated with this line item,
   */
  planId?: string;

  /**
   * The unique identifier (UUID) of the Pricing used for this line item,
   */
  pricingId?: string;

  productCode?: string;

  /**
   * The unique identifier (UUID) for the associated Product.
   */
  productId?: string;

  /**
   * The name of the Product associated with this line item.
   */
  productName?: string;

  /**
   * The amount of the product or service used in this line item.
   */
  quantity?: number;

  /**
   * The UUID of the reason used for the line item.
   *
   * A unique identifier (UUID) for the reason or justification for this line item,
   * if applicable.
   */
  reasonId?: string;

  /**
   * A unique identifier (UUID) for a Bill that this line item may be related to or
   * derived from.
   */
  referencedBillId?: string;

  /**
   * A unique identifier (UUID) for another line item that this line item may be
   * related to or derived from.
   */
  referencedLineItemId?: string;

  /**
   * Specifies the segment name or identifier when segmented Aggregation is used.
   * This is relevant for more complex billing structures.
   */
  segment?: Record<string, string>;

  /**
   * The number used for sequential invoices.
   */
  sequenceNumber?: number;

  /**
   * The _(exclusive)_ end date for the service period in ISO 68601 format.
   */
  servicePeriodEndDate?: string;

  /**
   * The _(inclusive)_ start date for the service period in ISO 8601 format.
   */
  servicePeriodStartDate?: string;

  /**
   * The subtotal amount when not currency converted _(in the cases where currency
   * conversion is required)_.
   */
  subtotal?: number;

  /**
   * Specifies the unit type. For example: **MB**, **GB**, **api_calls**, and so on.
   */
  unit?: string;

  /**
   * The number of units rated in the line item, each of which is of the type
   * specified in the `unit` field. For example: 400 api_calls.
   *
   * In this example, the unit type of **api_calls** is read from the `unit` field.
   */
  units?: number;
}

export namespace LineItemResponse {
  /**
   * Array containing the pricing band information, which shows the details for each
   * pricing band or tier.
   */
  export interface BandUsage {
    /**
     * Usage amount within the band.
     */
    bandQuantity?: number;

    /**
     * Subtotal amount for the band.
     */
    bandSubtotal?: number;

    /**
     * The number of units used within the band.
     */
    bandUnits?: number;

    /**
     * The UUID of the credit type.
     */
    creditTypeId?: string;

    /**
     * Fixed price is a charge entered for certain pricing types such as Stairstep,
     * Custom Tiered, and Custom Volume. It is a set price and not dependent on usage.
     */
    fixedPrice?: number;

    /**
     * The lower limit _(start)_ of the pricing band.
     */
    lowerLimit?: number;

    /**
     * The UUID for the pricing band.
     */
    pricingBandId?: string;

    /**
     * The price per unit in the band.
     */
    unitPrice?: number;

    /**
     * The subtotal of the unit usage.
     */
    unitSubtotal?: number;
  }
}

export interface LineItemRetrieveParams {
  /**
   * The unique identifier (UUID) of your Organization. The Organization represents
   * your company as a direct customer of our service.
   */
  orgId?: string;
}

export interface LineItemListParams extends CursorParams {
  /**
   * Path param: The unique identifier (UUID) of your Organization. The Organization
   * represents your company as a direct customer of our service.
   */
  orgId?: string;
}

LineItems.LineItemResponsesCursor = LineItemResponsesCursor;

export declare namespace LineItems {
  export {
    type LineItemResponse as LineItemResponse,
    LineItemResponsesCursor as LineItemResponsesCursor,
    type LineItemRetrieveParams as LineItemRetrieveParams,
    type LineItemListParams as LineItemListParams,
  };
}
