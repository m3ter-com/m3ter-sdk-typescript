// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as CreditLineItemsAPI from './credit-line-items';
import {
  CreditLineItemCreateParams,
  CreditLineItemDeleteParams,
  CreditLineItemListParams,
  CreditLineItemResponse,
  CreditLineItemResponsesCursor,
  CreditLineItemRetrieveParams,
  CreditLineItemUpdateParams,
  CreditLineItems,
} from './credit-line-items';
import * as DebitLineItemsAPI from './debit-line-items';
import {
  DebitLineItemCreateParams,
  DebitLineItemDeleteParams,
  DebitLineItemListParams,
  DebitLineItemResponse,
  DebitLineItemResponsesCursor,
  DebitLineItemRetrieveParams,
  DebitLineItemUpdateParams,
  DebitLineItems,
} from './debit-line-items';
import * as LineItemsAPI from './line-items';
import {
  LineItemListParams,
  LineItemResponse,
  LineItemResponsesCursor,
  LineItemRetrieveParams,
  LineItems,
} from './line-items';
import { Cursor, type CursorParams } from '../../pagination';

export class Bills extends APIResource {
  creditLineItems: CreditLineItemsAPI.CreditLineItems = new CreditLineItemsAPI.CreditLineItems(this._client);
  debitLineItems: DebitLineItemsAPI.DebitLineItems = new DebitLineItemsAPI.DebitLineItems(this._client);
  lineItems: LineItemsAPI.LineItems = new LineItemsAPI.LineItems(this._client);

  /**
   * Retrieve the Bill with the given UUID.
   *
   * This endpoint retrieves the Bill with the given unique identifier (UUID) and
   * specific Organization.
   */
  retrieve(
    id: string,
    params?: BillRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillResponse>;
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<BillResponse>;
  retrieve(
    id: string,
    params: BillRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillResponse> {
    if (isRequestOptions(params)) {
      return this.retrieve(id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.get(`/organizations/${orgId}/bills/${id}`, options);
  }

  /**
   * Retrieve a list of Bills.
   *
   * This endpoint retrieves a list of all Bills for the given Account within the
   * specified Organization. Optional filters can be applied such as by date range,
   * lock status, or other attributes. The list can also be paginated for easier
   * management.
   */
  list(
    params?: BillListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<BillResponsesCursor, BillResponse>;
  list(options?: Core.RequestOptions): Core.PagePromise<BillResponsesCursor, BillResponse>;
  list(
    params: BillListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<BillResponsesCursor, BillResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { orgId = this._client.orgId, ...query } = params;
    return this._client.getAPIList(`/organizations/${orgId}/bills`, BillResponsesCursor, {
      query,
      ...options,
    });
  }

  /**
   * Delete the Bill with the given UUID.
   *
   * This endpoint deletes the specified Bill with the given unique identifier. Use
   * with caution since deleted Bills cannot be recovered. Suitable for removing
   * incorrect or obsolete Bills, and for Bills that have not been sent to customers.
   * Where end-customer invoices for Bills have been sent to customers, Bills should
   * not be deleted to ensure you have an audit trail of how the invoice was created.
   */
  delete(id: string, params?: BillDeleteParams, options?: Core.RequestOptions): Core.APIPromise<BillResponse>;
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<BillResponse>;
  delete(
    id: string,
    params: BillDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillResponse> {
    if (isRequestOptions(params)) {
      return this.delete(id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.delete(`/organizations/${orgId}/bills/${id}`, options);
  }

  /**
   * Approve multiple Bills for the specified Organization based on the given
   * criteria.
   *
   * This endpoint allows you to change currently _Pending_ Bills to _Approved_
   * status for further processing.
   *
   * Query Parameters:
   *
   * - Use `accountIds` to approve Bills for specifed Accounts.
   *
   * Request Body Schema Parameter:
   *
   * - Use `billIds` to specify a collection of Bills for batch approval.
   *
   * **Important!** If you use the `billIds` Request Body Schema parameter, any Query
   * parameters you might have also used are ignored when the call is processed.
   */
  approve(params: BillApproveParams, options?: Core.RequestOptions): Core.APIPromise<BillApproveResponse> {
    const {
      orgId = this._client.orgId,
      accountIds,
      externalInvoiceDateEnd,
      externalInvoiceDateStart,
      ...body
    } = params;
    return this._client.post(`/organizations/${orgId}/bills/approve`, {
      query: { accountIds, externalInvoiceDateEnd, externalInvoiceDateStart },
      body,
      ...options,
    });
  }

  /**
   * Retrieve the latest Bill for the given Account.
   *
   * This endpoint retrieves the latest Bill for the given Account in the specified
   * Organization. It facilitates tracking of the most recent charges and consumption
   * details.
   */
  latestByAccount(
    accountId: string,
    params?: BillLatestByAccountParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillResponse>;
  latestByAccount(accountId: string, options?: Core.RequestOptions): Core.APIPromise<BillResponse>;
  latestByAccount(
    accountId: string,
    params: BillLatestByAccountParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillResponse> {
    if (isRequestOptions(params)) {
      return this.latestByAccount(accountId, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.get(`/organizations/${orgId}/bills/latest/${accountId}`, options);
  }

  /**
   * Lock the specific Bill identified by the given UUID. Once a Bill is locked, no
   * further changes can be made to it.
   *
   * **NOTE:** You cannot lock a Bill whose current status is `PENDING`. You will
   * receive an error message if you try to do this. You must first use the
   * [Approve Bills](https://www.m3ter.com/docs/api#tag/Bill/operation/ApproveBills)
   * call to approve a Bill before you can lock it.
   */
  lock(id: string, params?: BillLockParams, options?: Core.RequestOptions): Core.APIPromise<BillResponse>;
  lock(id: string, options?: Core.RequestOptions): Core.APIPromise<BillResponse>;
  lock(
    id: string,
    params: BillLockParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillResponse> {
    if (isRequestOptions(params)) {
      return this.lock(id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.put(`/organizations/${orgId}/bills/${id}/lock`, options);
  }

  /**
   * Search for Bill entities.
   *
   * This endpoint executes a search query for Bills based on the user specified
   * search criteria. The search query is customizable, allowing for complex nested
   * conditions and sorting. The returned list of Bills can be paginated for easier
   * management.
   */
  search(params?: BillSearchParams, options?: Core.RequestOptions): Core.APIPromise<BillSearchResponse>;
  search(options?: Core.RequestOptions): Core.APIPromise<BillSearchResponse>;
  search(
    params: BillSearchParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillSearchResponse> {
    if (isRequestOptions(params)) {
      return this.search({}, params);
    }
    const { orgId = this._client.orgId, ...query } = params;
    return this._client.get(`/organizations/${orgId}/bills/search`, { query, ...options });
  }

  /**
   * Updates the status of a specified Bill with the given Bill ID.
   *
   * This endpoint allows you to transition a Bill's status through various stages,
   * such as from "Pending" to "Approved".
   */
  updateStatus(
    id: string,
    params: BillUpdateStatusParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.put(`/organizations/${orgId}/bills/${id}/status`, { body, ...options });
  }
}

export class BillResponsesCursor extends Cursor<BillResponse> {}

export interface BillResponse {
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

  accountCode?: string;

  accountId?: string;

  billDate?: string;

  billFrequencyInterval?: number;

  billingFrequency?: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'ANNUALLY' | 'AD_HOC' | 'MIXED';

  billJobId?: string;

  /**
   * The sum total for the Bill.
   */
  billTotal?: number;

  /**
   * The unique identifier (UUID) for the user who created the Bill.
   */
  createdBy?: string;

  createdDate?: string;

  /**
   * Flag to indicate that the statement in CSV format has been generated for the
   * Bill.
   *
   * - **TRUE** - CSV statement has been generated.
   * - **FALSE** - no CSV statement generated.
   */
  csvStatementGenerated?: boolean;

  currency?: string;

  currencyConversions?: Array<Shared.CurrencyConversion>;

  /**
   * The date and time _(in ISO 8601 format)_ when the Bill was first created.
   */
  dtCreated?: string;

  /**
   * The date and time _(in ISO 8601 format)_ when the Bill was last modified.
   */
  dtLastModified?: string;

  dueDate?: string;

  endDate?: string;

  endDateTimeUTC?: string;

  /**
   * For accounting purposes, the date set at Organization level to use for external
   * invoicing with respect to billing periods - two options:
   *
   * - `FIRST_DAY_OF_NEXT_PERIOD` _(Default)_.
   * - `LAST_DAY_OF_ARREARS`
   *
   * For example, if the retrieved Bill was on a monthly billing frequency and the
   * billing period for the Bill is September 2023 and the _External invoice date_ is
   * set at `FIRST_DAY_OF_NEXT_PERIOD`, then the `externalInvoiceDate` will be
   * `"2023-10-01"`.
   *
   * **NOTE:** To change the `externalInvoiceDate` setting for your Organization, you
   * can use the
   * [Update OrganizationConfig](https://www.m3ter.com/docs/api#tag/OrganizationConfig/operation/GetOrganizationConfig)
   * call.
   */
  externalInvoiceDate?: string;

  /**
   * The reference ID to use for external invoice.
   */
  externalInvoiceReference?: string;

  /**
   * Flag to indicate that the statement in JSON format has been generated for the
   * Bill.
   *
   * - **TRUE** - JSON statement has been generated.
   * - **FALSE** - no JSON statement generated.
   */
  jsonStatementGenerated?: boolean;

  lastCalculatedDate?: string;

  /**
   * The unique identifier (UUID) for the user who last modified this Bill.
   */
  lastModifiedBy?: string;

  /**
   * An array of the Bill line items.
   */
  lineItems?: Array<BillResponse.LineItem>;

  locked?: boolean;

  /**
   * Purchase Order number linked to the Account the Bill is for.
   */
  purchaseOrderNumber?: string;

  /**
   * The sequential invoice number of the Bill.
   *
   * **NOTE:** If you have not defined a `billPrefix` for your Organization, a
   * `sequentialInvoiceNumber` is not returned in the response. See
   * [Update OrganizationConfig](https://www.m3ter.com/docs/api#tag/OrganizationConfig/operation/UpdateOrganizationConfig)
   */
  sequentialInvoiceNumber?: string;

  startDate?: string;

  startDateTimeUTC?: string;

  status?: 'PENDING' | 'APPROVED';

  timezone?: string;
}

export namespace BillResponse {
  export interface LineItem {
    /**
     * The average unit price across all tiers / pricing bands.
     */
    averageUnitPrice: number;

    /**
     * The currency conversion rate if currency conversion is required for the line
     * item.
     */
    conversionRate: number;

    /**
     * The converted subtotal amount if currency conversions have been used.
     */
    convertedSubtotal: number;

    /**
     * The currency code for the currency used in the line item. For example: USD, GBP,
     * or EUR.
     */
    currency: string;

    /**
     * Line item description.
     */
    description: string;

    lineItemType:
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
     * The amount of usage for the line item.
     */
    quantity: number;

    /**
     * The subtotal amount for the line item, before any currency conversions.
     */
    subtotal: number;

    /**
     * The unit for the usage data in thie line item. For example: **GB** of disk
     * storage space.
     */
    unit: string;

    /**
     * The number of units used for the line item.
     */
    units: number;

    /**
     * The UUID for the line item.
     */
    id?: string;

    /**
     * The Aggregation ID used for the line item.
     */
    aggregationId?: string;

    balanceId?: string;

    chargeId?: string;

    /**
     * If part of a Parent/Child account billing hierarchy, this is the code for the
     * child Account.
     */
    childAccountCode?: string;

    /**
     * If part of a Parent/Child account billing hierarchy, this is the child Account
     * UUID.
     */
    childAccountId?: string;

    /**
     * If Commitments _(prepayments)_ are used in the line item, this shows the
     * Commitment UUID.
     */
    commitmentId?: string;

    /**
     * The Compound Aggregation ID for the line item if a Compound Aggregation has been
     * used.
     */
    compoundAggregationId?: string;

    /**
     * The UUID for the Contract used in the line item.
     */
    contractId?: string;

    counterId?: string;

    creditTypeId?: string;

    group?: Record<string, string>;

    /**
     * The UUID of the Meter used in the line item.
     */
    meterId?: string;

    /**
     * The UUID of the PlanGroup, provided the line item used a PlanGroup.
     */
    planGroupId?: string;

    /**
     * The ID of the Plan used for the line item.
     */
    planId?: string;

    /**
     * The UUID of the Pricing used on the line item.
     */
    pricingId?: string;

    productCode?: string;

    /**
     * The UUID of the Product for the line item.
     */
    productId?: string;

    /**
     * The name of the Product for the line item.
     */
    productName?: string;

    reasonId?: string;

    referencedBillId?: string;

    referencedLineItemId?: string;

    /**
     * Applies only when segmented Aggregations have been used. The Segment to which
     * the usage data in this line item belongs.
     */
    segment?: Record<string, string>;

    /**
     * The number used for sequential invoices.
     */
    sequenceNumber?: number;

    /**
     * The ending date _(exclusive)_ for the service period _(in ISO 8601 format)_.
     */
    servicePeriodEndDate?: string;

    /**
     * The starting date _(inclusive)_ for the service period _(in ISO 8601 format)_.
     */
    servicePeriodStartDate?: string;

    /**
     * Shows the usage by pricing band for tiered pricing structures.
     */
    usagePerPricingBand?: Array<LineItem.UsagePerPricingBand>;
  }

  export namespace LineItem {
    /**
     * Array containing the pricing band information, which shows the details for each
     * pricing band or tier.
     */
    export interface UsagePerPricingBand {
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
}

export interface BillApproveResponse {
  /**
   * A message indicating the success or failure of the Bills' approval, along with
   * relevant details.
   */
  message?: string;
}

export interface BillSearchResponse {
  /**
   * An array containing the list of requested Bills.
   */
  data?: Array<BillResponse>;

  /**
   * The `nextToken` for multi-page retrievals. It is used to fetch the next page of
   * Bills in a paginated list.
   */
  nextToken?: string;
}

export interface BillRetrieveParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface BillListParams extends CursorParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Query param: Optional filter. An Account ID - returns the Bills for the single
   * specified Account.
   */
  accountId?: string;

  /**
   * Query param: The specific date in ISO 8601 format for which you want to retrieve
   * Bills.
   */
  billDate?: string;

  /**
   * Query param: Only include Bills with bill dates earlier than this date.
   */
  billDateEnd?: string;

  /**
   * Query param: Only include Bills with bill dates equal to or later than this
   * date.
   */
  billDateStart?: string;

  /**
   * Query param:
   */
  billingFrequency?: string | null;

  /**
   * Query param: Exclude Line Items
   */
  excludeLineItems?: boolean;

  /**
   * Query param: Only include Bills with external invoice dates earlier than this
   * date.
   */
  externalInvoiceDateEnd?: string;

  /**
   * Query param: Only include Bills with external invoice dates equal to or later
   * than this date.
   */
  externalInvoiceDateStart?: string;

  /**
   * Query param: Optional filter. The list of Bill IDs to retrieve.
   */
  ids?: Array<string>;

  /**
   * Query param: Include Bill Total
   */
  includeBillTotal?: boolean;

  /**
   * Query param: Boolean flag specifying whether to include Bills with "locked"
   * status.
   *
   * - **TRUE** - the list inlcudes "locked" Bills.
   * - **FALSE** - excludes "locked" Bills from the list.
   */
  locked?: boolean;

  /**
   * Query param: Only include Bills having the given status
   */
  status?: 'PENDING' | 'APPROVED';
}

export interface BillDeleteParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface BillApproveParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param: Use to specify a collection of Bills by their IDs for batch approval
   */
  billIds: Array<string>;

  /**
   * Query param: List of Account IDs to filter Bills. This allows you to approve
   * Bills for specific Accounts within the Organization.
   */
  accountIds?: string;

  /**
   * Query param: End date for filtering Bills by external invoice date. Includes
   * Bills with dates earlier than this date.
   */
  externalInvoiceDateEnd?: string;

  /**
   * Query param: Start date for filtering Bills by external invoice date. Includes
   * Bills with dates equal to or later than this date.
   */
  externalInvoiceDateStart?: string;
}

export interface BillLatestByAccountParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface BillLockParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface BillSearchParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Query param: `fromDocument` for multi page retrievals.
   */
  fromDocument?: number;

  /**
   * Query param: Search Operator to be used while querying search.
   */
  operator?: 'AND' | 'OR';

  /**
   * Query param: Number of Bills to retrieve per page.
   *
   * **NOTE:** If not defined, default is 10.
   */
  pageSize?: number;

  /**
   * Query param: Query for data using special syntax:
   *
   * - Query parameters should be delimited using $ (dollar sign).
   * - Allowed comparators are:
   *   - (greater than) >
   *   - (greater than or equal to) >=
   *   - (equal to) :
   *   - (less than) <
   *   - (less than or equal to) <=
   *   - (match phrase/prefix) ~
   * - Allowed parameters: accountId, locked, billDate, startDate, endDate, dueDate,
   *   billingFrequency, id, createdBy, dtCreated, lastModifiedBy, ids.
   * - Query example:
   *   - searchQuery=startDate>2023-01-01$accountId:62eaad67-5790-407e-b853-881564f0e543.
   *   - This query is translated into: find Bills that startDate is older than
   *     2023-01-01 AND accountId is equal to 62eaad67-5790-407e-b853-881564f0e543.
   *
   * **Note:** Using the ~ match phrase/prefix comparator. For best results, we
   * recommend treating this as a "starts with" comparator for your search query.
   */
  searchQuery?: string;

  /**
   * Query param: Name of the parameter on which sorting is performed. Use any field
   * available on the Bill entity to sort by, such as `accountId`, `endDate`, and so
   * on.
   */
  sortBy?: string;

  /**
   * Query param: Sorting order.
   */
  sortOrder?: 'ASC' | 'DESC';
}

export interface BillUpdateStatusParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param: The new status you want to assign to the Bill. Must be one "Pending"
   * or "Approved".
   */
  status: 'PENDING' | 'APPROVED';
}

Bills.BillResponsesCursor = BillResponsesCursor;
Bills.CreditLineItems = CreditLineItems;
Bills.CreditLineItemResponsesCursor = CreditLineItemResponsesCursor;
Bills.DebitLineItems = DebitLineItems;
Bills.DebitLineItemResponsesCursor = DebitLineItemResponsesCursor;
Bills.LineItems = LineItems;
Bills.LineItemResponsesCursor = LineItemResponsesCursor;

export declare namespace Bills {
  export {
    type BillResponse as BillResponse,
    type BillApproveResponse as BillApproveResponse,
    type BillSearchResponse as BillSearchResponse,
    BillResponsesCursor as BillResponsesCursor,
    type BillRetrieveParams as BillRetrieveParams,
    type BillListParams as BillListParams,
    type BillDeleteParams as BillDeleteParams,
    type BillApproveParams as BillApproveParams,
    type BillLatestByAccountParams as BillLatestByAccountParams,
    type BillLockParams as BillLockParams,
    type BillSearchParams as BillSearchParams,
    type BillUpdateStatusParams as BillUpdateStatusParams,
  };

  export {
    CreditLineItems as CreditLineItems,
    type CreditLineItemResponse as CreditLineItemResponse,
    CreditLineItemResponsesCursor as CreditLineItemResponsesCursor,
    type CreditLineItemCreateParams as CreditLineItemCreateParams,
    type CreditLineItemRetrieveParams as CreditLineItemRetrieveParams,
    type CreditLineItemUpdateParams as CreditLineItemUpdateParams,
    type CreditLineItemListParams as CreditLineItemListParams,
    type CreditLineItemDeleteParams as CreditLineItemDeleteParams,
  };

  export {
    DebitLineItems as DebitLineItems,
    type DebitLineItemResponse as DebitLineItemResponse,
    DebitLineItemResponsesCursor as DebitLineItemResponsesCursor,
    type DebitLineItemCreateParams as DebitLineItemCreateParams,
    type DebitLineItemRetrieveParams as DebitLineItemRetrieveParams,
    type DebitLineItemUpdateParams as DebitLineItemUpdateParams,
    type DebitLineItemListParams as DebitLineItemListParams,
    type DebitLineItemDeleteParams as DebitLineItemDeleteParams,
  };

  export {
    LineItems as LineItems,
    type LineItemResponse as LineItemResponse,
    LineItemResponsesCursor as LineItemResponsesCursor,
    type LineItemRetrieveParams as LineItemRetrieveParams,
    type LineItemListParams as LineItemListParams,
  };
}
