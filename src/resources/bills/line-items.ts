// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class LineItems extends APIResource {
  /**
   * Retrieves a specific line item within a Bill.
   *
   * This endpoint retrieves the line item given by its unique identifier (UUID) from
   * a specific Bill.
   */
  retrieve(
    id: string,
    params: LineItemRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<LineItemResponse> {
    const { orgId = this._client.orgID, billId, ...query } = params;
    return this._client.get(path`/organizations/${orgId}/bills/${billId}/lineitems/${id}`, {
      query,
      ...options,
    });
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
    billID: string,
    params: LineItemListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<LineItemResponsesCursor, LineItemResponse> {
    const { orgId = this._client.orgID, ...query } = params ?? {};
    return this._client.getAPIList(
      path`/organizations/${orgId}/bills/${billID}/lineitems`,
      Cursor<LineItemResponse>,
      { query, ...options },
    );
  }
}

export type LineItemResponsesCursor = Cursor<LineItemResponse>;

export interface LineItemResponse {
  /**
   * The UUID of the entity.
   */
  id: string;

  /**
   * The code of the Accounting Product associated with this line item.
   */
  accountingProductCode?: string;

  /**
   * The unique identifier (UUID) for the associated Accounting Product.
   */
  accountingProductId?: string;

  /**
   * The name of the Accounting Product associated with this line item.
   */
  accountingProductName?: string;

  additional?: { [key: string]: unknown };

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

  /**
   * The unique identifier (UUID) for the Balance associated with this line item.
   */
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

  /**
   * The unique identifier (UUID) for the Charge associated with this line item.
   */
  chargeId?: string;

  /**
   * The unique identifier (UUID) of the Commitment associated with this line item.
   */
  commitmentId?: string;

  /**
   * A unique identifier (UUID) for the Compound Aggregation, if applicable.
   */
  compoundAggregationId?: string;

  /**
   * The unique identifier (UUID) for the Contract associated with this line item.
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

  /**
   * The unique identifier (UUID) for the Counter associated with this line item.
   */
  counterId?: string;

  /**
   * The ID of the user who created this line item.
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

  description?: string;

  /**
   * The DateTime when the line item was created.
   */
  dtCreated?: string;

  /**
   * The DateTime when the line item was last modified.
   */
  dtLastModified?: string;

  group?: { [key: string]: string };

  /**
   * @deprecated Boolean flag indicating whether the Bill line item has associated
   * statement usage in JSON format. When a Bill statement is generated, usage line
   * items have their usage stored in JSON format.
   */
  jsonUsageGenerated?: boolean;

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

  /**
   * The unique identifier (UUID) of the Meter responsible for tracking usage.
   */
  meterId?: string;

  /**
   * The unique identifier (UUID) of the Plan Group associated with this line item.
   */
  planGroupId?: string;

  /**
   * A unique identifier (UUID) for the billing Plan associated with this line item.
   */
  planId?: string;

  /**
   * The unique identifier (UUID) of the Pricing used for this line item,
   */
  pricingId?: string;

  /**
   * The code of the Product associated with this line item.
   */
  productCode?: string;

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
   * A unique identifier (UUID) for the reason or justification for this line item,
   * if applicable.
   */
  reasonId?: string;

  referencedBillId?: string;

  referencedLineItemId?: string;

  /**
   * Specifies the segment name or identifier when segmented Aggregation is used.
   * This is relevant for more complex billing structures.
   */
  segment?: { [key: string]: string };

  /**
   * The line item sequence number.
   */
  sequenceNumber?: number;

  servicePeriodEndDate?: string;

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

    convertedBandSubtotal?: number;

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
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Path param: The unique identifier (UUID) of the Bill containing the line item.
   */
  billId: string;

  /**
   * Query param: Comma separated list of additional fields.
   */
  additional?: Array<string>;
}

export interface LineItemListParams extends CursorParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Query param: Comma separated list of additional fields.
   */
  additional?: Array<string>;
}

export declare namespace LineItems {
  export {
    type LineItemResponse as LineItemResponse,
    type LineItemResponsesCursor as LineItemResponsesCursor,
    type LineItemRetrieveParams as LineItemRetrieveParams,
    type LineItemListParams as LineItemListParams,
  };
}
