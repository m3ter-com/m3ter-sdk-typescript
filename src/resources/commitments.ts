// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { Cursor, type CursorParams } from '../pagination';

export class Commitments extends APIResource {
  /**
   * Create a new Commitment.
   *
   * Creates a new Commitment for an Organization. The request body must include all
   * the necessary details such as the agreed amount, overage surcharge percentage,
   * and the associated account and product details.
   *
   * **Note:** If some of the agreed Commitment amount remains unpaid at the start of
   * an end-customer contract period, when you create a Commitment for an Account you
   * can set up billing for the outstanding amount in one of two ways:
   *
   * - Select a Product _Plan to bill with_. Use the `billingPlanId` request
   *   parameter to select the Plan used for billing.
   * - Define a _schedule of billing dates_. Omit a `billingPlanId` and use the
   *   `feeDates` request parameter to define a precise schedule of bill dates and
   *   amounts.
   */
  create(params: CommitmentCreateParams, options?: Core.RequestOptions): Core.APIPromise<CommitmentResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.post(`/organizations/${orgId}/commitments`, { body, ...options });
  }

  /**
   * Retrieve a specific Commitment.
   *
   * Retrieve the details of the Commitment with the given UUID. It provides
   * comprehensive information about the Commitment, such as the agreed amount,
   * overage surcharge percentage, and other related details.
   */
  retrieve(
    id: string,
    params?: CommitmentRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CommitmentResponse>;
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<CommitmentResponse>;
  retrieve(
    id: string,
    params: CommitmentRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CommitmentResponse> {
    if (isRequestOptions(params)) {
      return this.retrieve(id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.get(`/organizations/${orgId}/commitments/${id}`, options);
  }

  /**
   * Modify a specific Commitment.
   *
   * Update the details of the Commitment with the given UUID. Use this endpoint to
   * adjust Commitment parameters such as the fixed amount, overage surcharge
   * percentage, or associated contract details.
   */
  update(
    id: string,
    params: CommitmentUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CommitmentResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.put(`/organizations/${orgId}/commitments/${id}`, { body, ...options });
  }

  /**
   * Retrieve a list of Commitments.
   *
   * Retrieves a list of all Commitments associated with an Organization. This
   * endpoint supports pagination and includes various query parameters to filter the
   * Commitments based on Account, Product, date, and end dates.
   */
  list(
    params?: CommitmentListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CommitmentResponsesCursor, CommitmentResponse>;
  list(options?: Core.RequestOptions): Core.PagePromise<CommitmentResponsesCursor, CommitmentResponse>;
  list(
    params: CommitmentListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<CommitmentResponsesCursor, CommitmentResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { orgId = this._client.orgId, ...query } = params;
    return this._client.getAPIList(`/organizations/${orgId}/commitments`, CommitmentResponsesCursor, {
      query,
      ...options,
    });
  }

  /**
   * Remove a specific Commitment.
   *
   * Deletes the Commitment with the given UUID. Use this endpoint when a Commitment
   * is no longer valid or needs to be removed from the system.
   */
  delete(
    id: string,
    params?: CommitmentDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CommitmentResponse>;
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<CommitmentResponse>;
  delete(
    id: string,
    params: CommitmentDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CommitmentResponse> {
    if (isRequestOptions(params)) {
      return this.delete(id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.delete(`/organizations/${orgId}/commitments/${id}`, options);
  }

  /**
   * Search for commitment entities.
   *
   * This endpoint executes a search query for Commitments based on the user
   * specified search criteria. The search query is customizable, allowing for
   * complex nested conditions and sorting. The returned list of Commitments can be
   * paginated for easier management.
   */
  search(
    params?: CommitmentSearchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CommitmentSearchResponse>;
  search(options?: Core.RequestOptions): Core.APIPromise<CommitmentSearchResponse>;
  search(
    params: CommitmentSearchParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CommitmentSearchResponse> {
    if (isRequestOptions(params)) {
      return this.search({}, params);
    }
    const { orgId = this._client.orgId, ...query } = params;
    return this._client.get(`/organizations/${orgId}/commitments/search`, { query, ...options });
  }
}

export class CommitmentResponsesCursor extends Cursor<CommitmentResponse> {}

export interface CommitmentFee {
  amount: number;

  date: string;

  servicePeriodEndDate: string;

  servicePeriodStartDate: string;
}

export interface CommitmentResponse {
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
   * The unique identifier (UUID) for the end customer Account the Commitment is
   * added to.
   */
  accountId?: string;

  /**
   * The unique identifier (UUID) for the Product linked to the Commitment for
   * accounting purposes.
   */
  accountingProductId?: string;

  /**
   * The total amount that the customer has committed to pay.
   */
  amount?: number;

  /**
   * The amount to be billed in the first invoice.
   */
  amountFirstBill?: number;

  /**
   * The amount that the customer has already paid upfront at the start of the
   * Commitment service period.
   */
  amountPrePaid?: number;

  /**
   * The total amount of the Commitment that the customer has spent so far.
   */
  amountSpent?: number;

  /**
   * The starting date _(in ISO-8601 date format)_ from which the billing cycles are
   * calculated.
   */
  billEpoch?: string;

  /**
   * How often the Commitment fees are applied to bills. For example, if the plan
   * being used to bill for Commitment fees is set to issue bills every three months
   * and the `billingInterval` is set to 2, then the Commitment fees are applied
   * every six months.
   */
  billingInterval?: number;

  /**
   * The offset for when the Commitment fees are first applied to bills on the
   * Account. For example, if bills are issued every three months and the
   * `billingOffset` is 0, then the charge is applied to the first bill (at three
   * months); if set to 1, it's applied to the next bill (at six months), and so on.
   */
  billingOffset?: number;

  /**
   * The unique identifier (UUID) for the Product Plan used for billing Commitment
   * fees due.
   */
  billingPlanId?: string;

  /**
   * If the Account is either a Parent or a Child Account, this specifies the Account
   * hierarchy billing mode. The mode determines how billing will be handled and
   * shown on bills for charges due on the Parent Account, and charges due on Child
   * Accounts:
   *
   * - **Parent Breakdown** - a separate bill line item per Account. Default setting.
   *
   * - **Parent Summary** - single bill line item for all Accounts.
   *
   * - **Child** - the Child Account is billed.
   */
  childBillingMode?: 'PARENT_SUMMARY' | 'PARENT_BREAKDOWN' | 'CHILD';

  /**
   * A boolean value indicating whether the Commitment fee is billed in advance
   * _(start of each billing period)_ or arrears _(end of each billing period)_.
   *
   * - **TRUE** - bill in advance _(start of each billing period)_.
   * - **FALSE** - bill in arrears _(end of each billing period)_.
   */
  commitmentFeeBillInAdvance?: boolean;

  /**
   * A textual description of the Commitment fee.
   */
  commitmentFeeDescription?: string;

  /**
   * A textual description of the Commitment usage.
   */
  commitmentUsageDescription?: string;

  /**
   * The unique identifier (UUID) for a Contract you've created for the Account and
   * to which the Commitment has been added.
   */
  contractId?: string;

  /**
   * The unique identifier (UUID) of the user who created this Commitment.
   */
  createdBy?: string;

  /**
   * The currency used for the Commitment. For example, 'USD'.
   */
  currency?: string;

  drawdownsAccountingProductId?: string;

  /**
   * The date and time _(in ISO-8601 format)_ when the Commitment was created.
   */
  dtCreated?: string;

  /**
   * The date and time _(in ISO-8601 format)_ when the Commitment was last modified.
   */
  dtLastModified?: string;

  /**
   * The end date of the Commitment period in ISO-8601 format.
   */
  endDate?: string;

  /**
   * Used for billing any outstanding Commitment fees _on a schedule_.
   *
   * An array defining a series of bill dates and amounts covering specified service
   * periods:
   *
   * - `date` - the billing date _(in ISO-8601 format)_.
   * - `amount` - the billed amount.
   * - `servicePeriodStartDate` and `servicePeriodEndDate` - defines the service
   *   period the bill covers _(in ISO-8601 format)_.
   */
  feeDates?: Array<CommitmentFee>;

  feesAccountingProductId?: string;

  /**
   * The unique identifier (UUID) of the user who last modified this Commitment.
   */
  lastModifiedBy?: string;

  /**
   * Specifies the line item charge types that can draw-down at billing against the
   * Commitment amount. Options are:
   *
   * - `MINIMUM_SPEND`
   * - `STANDING_CHARGE`
   * - `USAGE`
   * - `"COUNTER_RUNNING_TOTAL_CHARGE"`
   * - `"COUNTER_ADJUSTMENT_DEBIT"`
   */
  lineItemTypes?: Array<
    | 'STANDING_CHARGE'
    | 'USAGE'
    | 'MINIMUM_SPEND'
    | 'COUNTER_RUNNING_TOTAL_CHARGE'
    | 'COUNTER_ADJUSTMENT_DEBIT'
  >;

  /**
   * A textual description of the overage charges.
   */
  overageDescription?: string;

  /**
   * The percentage surcharge applied to the usage charges that exceed the Commitment
   * amount.
   */
  overageSurchargePercent?: number;

  /**
   * A list of unique identifiers (UUIDs) for Products the Account consumes. Charges
   * due for these Products will be made available for draw-down against the
   * Commitment.
   *
   * **Note:** If not used, then charges due for all Products the Account consumes
   * will be made available for draw-down against the Commitment.
   */
  productIds?: Array<string>;

  /**
   * A boolean value indicating whether the overage usage is billed separately or
   * together. If overage usage is separated and a Commitment amount has been
   * consumed by an Account, any subsequent line items on Bills against the Account
   * for usage will show as separate "overage usage" charges, not simply as "usage"
   * charges:
   *
   * - **TRUE** - billed separately.
   * - **FALSE** - billed together.
   */
  separateOverageUsage?: boolean;

  /**
   * The start date of the Commitment period in ISO-8601 format.
   */
  startDate?: string;
}

export interface CommitmentSearchResponse {
  /**
   * The list of Commitments information.
   */
  data?: Array<CommitmentResponse>;

  /**
   * The `nextToken` for multi-page retrievals. It is used to fetch the next page of
   * Commitments in a paginated list.
   */
  nextToken?: string;
}

export interface CommitmentCreateParams {
  /**
   * Path param: The unique identifier (UUID) for your Organization. This represents
   * your company as a direct customer of our service.
   */
  orgId?: string;

  /**
   * Body param: The unique identifier (UUID) for the end customer Account the
   * Commitment is added to.
   */
  accountId: string;

  /**
   * Body param: The total amount that the customer has committed to pay.
   */
  amount: number;

  /**
   * Body param: The currency used for the Commitment. For example: USD.
   */
  currency: string;

  /**
   * Body param: The end date of the Commitment period in ISO-8601 format.
   *
   * **Note:** End date is exclusive - if you set an end date of June 1st 2022, then
   * the Commitment ceases to be active for the Account at midnight on May 31st 2022,
   * and any Prepayment fees due are calculated up to that point in time, NOT up to
   * midnight on June 1st
   */
  endDate: string;

  /**
   * Body param: The start date of the Commitment period in ISO-8601 format.
   */
  startDate: string;

  /**
   * Body param: The unique identifier (UUID) for the Product linked to the
   * Commitment for accounting purposes. _(Optional)_
   *
   * **NOTE:** If you're planning to set up an integration for sending Bills to an
   * external accounts receivable system, please check requirements for your chosen
   * system. Some systems, such as NetSuite, require a Product to be linked with any
   * Bill line items associated with Account Commitments, and the integration will
   * fail if this is not present
   */
  accountingProductId?: string;

  /**
   * Body param: The amount to be billed in the first invoice.
   */
  amountFirstBill?: number;

  /**
   * Body param: The amount that the customer has already paid upfront at the start
   * of the Commitment service period.
   */
  amountPrePaid?: number;

  /**
   * Body param: The starting date _(in ISO-8601 date format)_ from which the billing
   * cycles are calculated.
   */
  billEpoch?: string;

  /**
   * Body param: How often the Commitment fees are applied to bills. For example, if
   * the plan being used to bill for Commitment fees is set to issue bills every
   * three months and the `billingInterval` is set to 2, then the Commitment fees are
   * applied every six months.
   */
  billingInterval?: number;

  /**
   * Body param: Defines an offset for when the Commitment fees are first applied to
   * bills on the Account. For example, if bills are issued every three months and
   * the `billingOffset` is 0, then the charge is applied to the first bill (at three
   * months); if set to 1, it's applied to the next bill (at six months), and so on.
   */
  billingOffset?: number;

  /**
   * Body param: The unique identifier (UUID) for the Product Plan used for billing
   * Commitment fees due.
   */
  billingPlanId?: string;

  /**
   * Body param: If the Account is either a Parent or a Child Account, this specifies
   * the Account hierarchy billing mode. The mode determines how billing will be
   * handled and shown on bills for charges due on the Parent Account, and charges
   * due on Child Accounts:
   *
   * - **Parent Breakdown** - a separate bill line item per Account. Default setting.
   *
   * - **Parent Summary** - single bill line item for all Accounts.
   *
   * - **Child** - the Child Account is billed.
   */
  childBillingMode?: 'PARENT_SUMMARY' | 'PARENT_BREAKDOWN' | 'CHILD';

  /**
   * Body param: A boolean value indicating whether the Commitment fee is billed in
   * advance _(start of each billing period)_ or arrears _(end of each billing
   * period)_.
   *
   * If no value is supplied, then the Organization Configuration value is used.
   *
   * - **TRUE** - bill in advance _(start of each billing period)_.
   * - **FALSE** - bill in arrears _(end of each billing period)_.
   */
  commitmentFeeBillInAdvance?: boolean;

  /**
   * Body param: A textual description of the Commitment fee.
   */
  commitmentFeeDescription?: string;

  /**
   * Body param: A textual description of the Commitment usage.
   */
  commitmentUsageDescription?: string;

  /**
   * Body param: The unique identifier (UUID) for a Contract you've created for the
   * Account - used to add the Commitment to this Contract.
   *
   * **Note:** If you associate the Commitment with a Contract you must ensure the
   * Account Plan attached to the Account has the same Contract associated with it.
   * If the Account Plan Contract and Commitment Contract do not match, then at
   * billing the Commitment amount will not be drawn-down against.
   */
  contractId?: string;

  /**
   * Body param: Optional Product ID this Commitment consumptions should be
   * attributed to for accounting purposes
   */
  drawdownsAccountingProductId?: string;

  /**
   * Body param: Used for billing any outstanding Commitment fees _on a schedule_.
   *
   * Create an array to define a series of bill dates and amounts covering specified
   * service periods:
   *
   * - `date` - the billing date _(in ISO-8601 format)_.
   * - `amount` - the billed amount.
   * - `servicePeriodStartDate` and `servicePeriodEndDate` - defines the service
   *   period the bill covers _(in ISO-8601 format)_.
   *
   * **Notes:**
   *
   * - If you try to set `servicePeriodStartDate` _after_ `servicePeriodEndDate`,
   *   you'll receive an error.
   * - You can set `servicePeriodStartDate` and `servicePeriodEndDate` to the _same
   *   date_ without receiving an error, but _please be sure_ your Commitment billing
   *   use case requires this.
   */
  feeDates?: Array<CommitmentFee>;

  /**
   * Body param: Optional Product ID this Commitment fees should be attributed to for
   * accounting purposes
   */
  feesAccountingProductId?: string;

  /**
   * Body param: Specify the line item charge types that can draw-down at billing
   * against the Commitment amount. Options are:
   *
   * - `MINIMUM_SPEND`
   * - `STANDING_CHARGE`
   * - `USAGE`
   * - `"COUNTER_RUNNING_TOTAL_CHARGE"`
   * - `"COUNTER_ADJUSTMENT_DEBIT"`
   *
   * **NOTE:** If no charge types are specified, by default _all types_ can draw-down
   * against the Commitment amount at billing.
   */
  lineItemTypes?: Array<
    | 'STANDING_CHARGE'
    | 'USAGE'
    | 'MINIMUM_SPEND'
    | 'COUNTER_RUNNING_TOTAL_CHARGE'
    | 'COUNTER_ADJUSTMENT_DEBIT'
  >;

  /**
   * Body param: A textual description of the overage charges.
   */
  overageDescription?: string;

  /**
   * Body param: The percentage surcharge applied to usage charges that exceed the
   * Commitment amount.
   *
   * **Note:** You can enter a _negative percentage_ if you want to give a discount
   * rate for usage to end customers who exceed their Commitment amount
   */
  overageSurchargePercent?: number;

  /**
   * Body param: A list of unique identifiers (UUIDs) for Products the Account
   * consumes. Charges due for these Products will be made available for draw-down
   * against the Commitment.
   *
   * **Note:** If not used, then charges due for all Products the Account consumes
   * will be made available for draw-down against the Commitment.
   */
  productIds?: Array<string>;

  /**
   * Body param: A boolean value indicating whether the overage usage is billed
   * separately or together. If overage usage is separated and a Commitment amount
   * has been consumed by an Account, any subsequent line items on Bills against the
   * Account for usage will show as separate "overage usage" charges, not simply as
   * "usage" charges:
   *
   * - **TRUE** - billed separately.
   * - **FALSE** - billed together.
   *
   * **Notes:**
   *
   * - Can be used only if no value or 0 has been defined for the
   *   `overageSurchargePercent` parameter. If you try to separate overage usage when
   *   a value other than 0 has been defined for `overageSurchargePercent`, you'll
   *   receive an error.
   * - If a priced Plan is used to bill any outstanding Commitment fees due and the
   *   Plan is set up with overage pricing on a _tiered pricing structure_ and you
   *   enable separate bill line items for overage usage, then overage usage charges
   *   will be rated according to the overage pricing defined for the tiered pricing
   *   on the Plan.
   */
  separateOverageUsage?: boolean;

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

export interface CommitmentRetrieveParams {
  /**
   * The unique identifier (UUID) for your Organization. The Organization represents
   * your company as a direct customer of our service.
   */
  orgId?: string;
}

export interface CommitmentUpdateParams {
  /**
   * Path param: The unique identifier (UUID) for your Organization. The Organization
   * represents your company as a direct customer of our service.
   */
  orgId?: string;

  /**
   * Body param: The unique identifier (UUID) for the end customer Account the
   * Commitment is added to.
   */
  accountId: string;

  /**
   * Body param: The total amount that the customer has committed to pay.
   */
  amount: number;

  /**
   * Body param: The currency used for the Commitment. For example: USD.
   */
  currency: string;

  /**
   * Body param: The end date of the Commitment period in ISO-8601 format.
   *
   * **Note:** End date is exclusive - if you set an end date of June 1st 2022, then
   * the Commitment ceases to be active for the Account at midnight on May 31st 2022,
   * and any Prepayment fees due are calculated up to that point in time, NOT up to
   * midnight on June 1st
   */
  endDate: string;

  /**
   * Body param: The start date of the Commitment period in ISO-8601 format.
   */
  startDate: string;

  /**
   * Body param: The unique identifier (UUID) for the Product linked to the
   * Commitment for accounting purposes. _(Optional)_
   *
   * **NOTE:** If you're planning to set up an integration for sending Bills to an
   * external accounts receivable system, please check requirements for your chosen
   * system. Some systems, such as NetSuite, require a Product to be linked with any
   * Bill line items associated with Account Commitments, and the integration will
   * fail if this is not present
   */
  accountingProductId?: string;

  /**
   * Body param: The amount to be billed in the first invoice.
   */
  amountFirstBill?: number;

  /**
   * Body param: The amount that the customer has already paid upfront at the start
   * of the Commitment service period.
   */
  amountPrePaid?: number;

  /**
   * Body param: The starting date _(in ISO-8601 date format)_ from which the billing
   * cycles are calculated.
   */
  billEpoch?: string;

  /**
   * Body param: How often the Commitment fees are applied to bills. For example, if
   * the plan being used to bill for Commitment fees is set to issue bills every
   * three months and the `billingInterval` is set to 2, then the Commitment fees are
   * applied every six months.
   */
  billingInterval?: number;

  /**
   * Body param: Defines an offset for when the Commitment fees are first applied to
   * bills on the Account. For example, if bills are issued every three months and
   * the `billingOffset` is 0, then the charge is applied to the first bill (at three
   * months); if set to 1, it's applied to the next bill (at six months), and so on.
   */
  billingOffset?: number;

  /**
   * Body param: The unique identifier (UUID) for the Product Plan used for billing
   * Commitment fees due.
   */
  billingPlanId?: string;

  /**
   * Body param: If the Account is either a Parent or a Child Account, this specifies
   * the Account hierarchy billing mode. The mode determines how billing will be
   * handled and shown on bills for charges due on the Parent Account, and charges
   * due on Child Accounts:
   *
   * - **Parent Breakdown** - a separate bill line item per Account. Default setting.
   *
   * - **Parent Summary** - single bill line item for all Accounts.
   *
   * - **Child** - the Child Account is billed.
   */
  childBillingMode?: 'PARENT_SUMMARY' | 'PARENT_BREAKDOWN' | 'CHILD';

  /**
   * Body param: A boolean value indicating whether the Commitment fee is billed in
   * advance _(start of each billing period)_ or arrears _(end of each billing
   * period)_.
   *
   * If no value is supplied, then the Organization Configuration value is used.
   *
   * - **TRUE** - bill in advance _(start of each billing period)_.
   * - **FALSE** - bill in arrears _(end of each billing period)_.
   */
  commitmentFeeBillInAdvance?: boolean;

  /**
   * Body param: A textual description of the Commitment fee.
   */
  commitmentFeeDescription?: string;

  /**
   * Body param: A textual description of the Commitment usage.
   */
  commitmentUsageDescription?: string;

  /**
   * Body param: The unique identifier (UUID) for a Contract you've created for the
   * Account - used to add the Commitment to this Contract.
   *
   * **Note:** If you associate the Commitment with a Contract you must ensure the
   * Account Plan attached to the Account has the same Contract associated with it.
   * If the Account Plan Contract and Commitment Contract do not match, then at
   * billing the Commitment amount will not be drawn-down against.
   */
  contractId?: string;

  /**
   * Body param: Optional Product ID this Commitment consumptions should be
   * attributed to for accounting purposes
   */
  drawdownsAccountingProductId?: string;

  /**
   * Body param: Used for billing any outstanding Commitment fees _on a schedule_.
   *
   * Create an array to define a series of bill dates and amounts covering specified
   * service periods:
   *
   * - `date` - the billing date _(in ISO-8601 format)_.
   * - `amount` - the billed amount.
   * - `servicePeriodStartDate` and `servicePeriodEndDate` - defines the service
   *   period the bill covers _(in ISO-8601 format)_.
   *
   * **Notes:**
   *
   * - If you try to set `servicePeriodStartDate` _after_ `servicePeriodEndDate`,
   *   you'll receive an error.
   * - You can set `servicePeriodStartDate` and `servicePeriodEndDate` to the _same
   *   date_ without receiving an error, but _please be sure_ your Commitment billing
   *   use case requires this.
   */
  feeDates?: Array<CommitmentFee>;

  /**
   * Body param: Optional Product ID this Commitment fees should be attributed to for
   * accounting purposes
   */
  feesAccountingProductId?: string;

  /**
   * Body param: Specify the line item charge types that can draw-down at billing
   * against the Commitment amount. Options are:
   *
   * - `MINIMUM_SPEND`
   * - `STANDING_CHARGE`
   * - `USAGE`
   * - `"COUNTER_RUNNING_TOTAL_CHARGE"`
   * - `"COUNTER_ADJUSTMENT_DEBIT"`
   *
   * **NOTE:** If no charge types are specified, by default _all types_ can draw-down
   * against the Commitment amount at billing.
   */
  lineItemTypes?: Array<
    | 'STANDING_CHARGE'
    | 'USAGE'
    | 'MINIMUM_SPEND'
    | 'COUNTER_RUNNING_TOTAL_CHARGE'
    | 'COUNTER_ADJUSTMENT_DEBIT'
  >;

  /**
   * Body param: A textual description of the overage charges.
   */
  overageDescription?: string;

  /**
   * Body param: The percentage surcharge applied to usage charges that exceed the
   * Commitment amount.
   *
   * **Note:** You can enter a _negative percentage_ if you want to give a discount
   * rate for usage to end customers who exceed their Commitment amount
   */
  overageSurchargePercent?: number;

  /**
   * Body param: A list of unique identifiers (UUIDs) for Products the Account
   * consumes. Charges due for these Products will be made available for draw-down
   * against the Commitment.
   *
   * **Note:** If not used, then charges due for all Products the Account consumes
   * will be made available for draw-down against the Commitment.
   */
  productIds?: Array<string>;

  /**
   * Body param: A boolean value indicating whether the overage usage is billed
   * separately or together. If overage usage is separated and a Commitment amount
   * has been consumed by an Account, any subsequent line items on Bills against the
   * Account for usage will show as separate "overage usage" charges, not simply as
   * "usage" charges:
   *
   * - **TRUE** - billed separately.
   * - **FALSE** - billed together.
   *
   * **Notes:**
   *
   * - Can be used only if no value or 0 has been defined for the
   *   `overageSurchargePercent` parameter. If you try to separate overage usage when
   *   a value other than 0 has been defined for `overageSurchargePercent`, you'll
   *   receive an error.
   * - If a priced Plan is used to bill any outstanding Commitment fees due and the
   *   Plan is set up with overage pricing on a _tiered pricing structure_ and you
   *   enable separate bill line items for overage usage, then overage usage charges
   *   will be rated according to the overage pricing defined for the tiered pricing
   *   on the Plan.
   */
  separateOverageUsage?: boolean;

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

export interface CommitmentListParams extends CursorParams {
  /**
   * Path param: The unique identifier (UUID) for your Organization. The Organization
   * represents your company as a direct customer of our service.
   */
  orgId?: string;

  /**
   * Query param: The unique identifier (UUID) for the Account. This parameter helps
   * filter the Commitments related to a specific end-customer Account.
   */
  accountId?: string;

  /**
   * Query param:
   */
  contractId?: string | null;

  /**
   * Query param: A date _(in ISO-8601 format)_ to filter Commitments which are
   * active on this specific date.
   */
  date?: string;

  /**
   * Query param: A date _(in ISO-8601 format)_ used to filter Commitments. Only
   * Commitments with end dates before this date will be included.
   */
  endDateEnd?: string;

  /**
   * Query param: A date _(in ISO-8601 format)_ used to filter Commitments. Only
   * Commitments with end dates on or after this date will be included.
   */
  endDateStart?: string;

  /**
   * Query param: A list of unique identifiers (UUIDs) for the Commitments to
   * retrieve. Use this to fetch specific Commitments in a single request.
   */
  ids?: Array<string>;

  /**
   * Query param: The unique identifier (UUID) for the Product. This parameter helps
   * filter the Commitments related to a specific Product.
   */
  productId?: string;
}

export interface CommitmentDeleteParams {
  /**
   * The unique identifier (UUID) for your organization. The Organization represents
   * your company as a direct customer our service.
   */
  orgId?: string;
}

export interface CommitmentSearchParams {
  /**
   * Path param: The unique identifier (UUID) of your Organization. The Organization
   * represents your company as a direct customer of our service.
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
   * Query param: Number of Commitments to retrieve per page.
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
   * - Allowed parameters: startDate, endDate, contractId, accountId, productId,
   *   productIds, id, createdBy, dtCreated, lastModifiedBy, ids.
   * - Query example:
   *   - searchQuery=startDate>2023-01-01$accountId:062085ab-a301-4f21-a081-411020864452.
   *   - This query is translated into: find commitments where the startDate is older
   *     than 2023-01-01 AND the accountId is equal to
   *     062085ab-a301-4f21-a081-411020864452.
   *
   * **Note:** Using the ~ match phrase/prefix comparator. For best results, we
   * recommend treating this as a "starts with" comparator for your search query.
   */
  searchQuery?: string;

  /**
   * Query param: Name of the parameter on which sorting is performed. Use any field
   * available on the Commitment entity to sort by, such as `accountId`, `endDate`,
   * and so on.
   */
  sortBy?: string;

  /**
   * Query param: Sorting order.
   */
  sortOrder?: 'ASC' | 'DESC';
}

Commitments.CommitmentResponsesCursor = CommitmentResponsesCursor;

export declare namespace Commitments {
  export {
    type CommitmentFee as CommitmentFee,
    type CommitmentResponse as CommitmentResponse,
    type CommitmentSearchResponse as CommitmentSearchResponse,
    CommitmentResponsesCursor as CommitmentResponsesCursor,
    type CommitmentCreateParams as CommitmentCreateParams,
    type CommitmentRetrieveParams as CommitmentRetrieveParams,
    type CommitmentUpdateParams as CommitmentUpdateParams,
    type CommitmentListParams as CommitmentListParams,
    type CommitmentDeleteParams as CommitmentDeleteParams,
    type CommitmentSearchParams as CommitmentSearchParams,
  };
}
