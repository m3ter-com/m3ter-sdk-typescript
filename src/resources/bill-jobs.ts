// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as Shared from './shared';
import { Cursor, type CursorParams } from '../pagination';

export class BillJobs extends APIResource {
  /**
   * Create a new BillJob to handle asynchronous bill calculations for a specific
   * Organization.
   *
   * This operation allows you to initiate the processing of bills according to
   * specified parameters. For example, create a BillJob to run only those bills
   * where `billingFrequency` is `MONTHLY`. Note that if you want to run a BillJob
   * for all billing frequencies, simply omit the `billingFrequency` request
   * parameter.
   *
   * Once created, the BillJob's progress can be monitored:
   *
   * - In the Running Tasks panel in the m3ter Console - for more details, see
   *   [Running Bills Manually](https://www.m3ter.com/docs/guides/billing-and-usage-data/running-viewing-and-managing-bills/running-bills-and-viewing-bill-details#running-bills-manually)
   * - Queried using the
   *   [List BillJobs](https://www.m3ter.com/docs/api#tag/BillJob/operation/ListBillJobs)
   *   operation.
   *
   * **NOTES:**
   *
   * - **Consolidated bills**. If you've already run billing with the Consolidate
   *   bills option disabled for your Organization but you then enable it, subsequent
   *   Bills for specific bill dates will now start afresh and not update earlier
   *   non-consolidated Bills for the same bill date. To avoid any billing conflicts,
   *   you might want to archive these earlier versions or delete them entirely.
   * - **Maximum concurrent BillJobs**. If you already have 10 BillJobs currently
   *   running, and try to create another one, you'll get an HTTP 429 response (Too
   *   many requests). When one of the existing BillJobs has completed, you'll be
   *   able to submit another job
   *
   * @example
   * ```ts
   * const billJobResponse = await client.billJobs.create();
   * ```
   */
  create(params?: BillJobCreateParams, options?: Core.RequestOptions): Core.APIPromise<BillJobResponse>;
  create(options?: Core.RequestOptions): Core.APIPromise<BillJobResponse>;
  create(
    params: BillJobCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillJobResponse> {
    if (isRequestOptions(params)) {
      return this.create({}, params);
    }
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.post(`/organizations/${orgId}/billjobs`, { body, ...options });
  }

  /**
   * Retrieve a Bill Job for the given UUID.
   *
   * @example
   * ```ts
   * const billJobResponse = await client.billJobs.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(
    id: string,
    params?: BillJobRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillJobResponse>;
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<BillJobResponse>;
  retrieve(
    id: string,
    params: BillJobRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillJobResponse> {
    if (isRequestOptions(params)) {
      return this.retrieve(id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.get(`/organizations/${orgId}/billjobs/${id}`, options);
  }

  /**
   * Retrieve a list of BillJobs.
   *
   * This endpoint retrieves a list of BillJobs for a specified organization. The
   * list can be paginated for easier management, and allows you to query and filter
   * based on various parameters, such as BillJob `status` and whether or not BillJob
   * remains `active`.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const billJobResponse of client.billJobs.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    params?: BillJobListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<BillJobResponsesCursor, BillJobResponse>;
  list(options?: Core.RequestOptions): Core.PagePromise<BillJobResponsesCursor, BillJobResponse>;
  list(
    params: BillJobListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<BillJobResponsesCursor, BillJobResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { orgId = this._client.orgId, ...query } = params;
    return this._client.getAPIList(`/organizations/${orgId}/billjobs`, BillJobResponsesCursor, {
      query,
      ...options,
    });
  }

  /**
   * Cancel an ongoing BillJob for the given Organization and BillJob UUID.
   *
   * This endpoint allows you to halt the processing of a specific BillJob, which
   * might be necessary if there are changes in billing requirements or other
   * operational considerations.
   *
   * @example
   * ```ts
   * const billJobResponse = await client.billJobs.cancel('id');
   * ```
   */
  cancel(
    id: string,
    params?: BillJobCancelParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillJobResponse>;
  cancel(id: string, options?: Core.RequestOptions): Core.APIPromise<BillJobResponse>;
  cancel(
    id: string,
    params: BillJobCancelParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillJobResponse> {
    if (isRequestOptions(params)) {
      return this.cancel(id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.post(`/organizations/${orgId}/billjobs/${id}/cancel`, options);
  }

  /**
   * Create a new BillJob specifically to recalculate existing bills for a given
   * Organization.
   *
   * This operation is essential when adjustments or corrections are required in
   * previously calculated bills. The recalculated bills when the BillJob is complete
   * can be checked in the m3ter Console Bill Management page or queried by using the
   * [List Bills](https://www.m3ter.com/docs/api#tag/Bill/operation/ListBills)
   * operation.
   *
   * **NOTE:**
   *
   * - **Response Schema**. The response schema for this call is dynamic. This means
   *   that the response might not contain all of the parameters listed. If set to
   *   null,the parameter is hidden to help simplify the output as well as to reduce
   *   its size and improve performance.
   *
   * @example
   * ```ts
   * const billJobResponse = await client.billJobs.recalculate({
   *   billIds: ['string'],
   * });
   * ```
   */
  recalculate(
    params: BillJobRecalculateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillJobResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.post(`/organizations/${orgId}/billjobs/recalculate`, { body, ...options });
  }
}

export class BillJobResponsesCursor extends Cursor<BillJobResponse> {}

export interface BillJobResponse {
  /**
   * The UUID of the entity.
   */
  id: string;

  /**
   * An array of UUIDs representing the end customer Accounts associated with the
   * BillJob.
   */
  accountIds?: Array<string>;

  /**
   * The specific billing date _(in ISO 8601 format)_, determining when the Bill was
   * generated.
   *
   * For example: `"2023-01-24"`.
   */
  billDate?: string;

  /**
   * How often Bills are issued - used in conjunction with `billingFrequency`.
   *
   * For example, if `billingFrequency` is set to Monthly and `billFrequencyInterval`
   * is set to 3, Bills are issued every three months.
   */
  billFrequencyInterval?: number;

  /**
   * An array of Bill IDs related to the BillJob, providing references to the
   * specific Bills generated.
   */
  billIds?: Array<string>;

  /**
   * Defines how often Bills are generated.
   *
   * - **Daily**. Starting at midnight each day, covering a twenty-four hour period
   *   following.
   *
   * - **Weekly**. Starting at midnight on a Monday morning covering the seven-day
   *   period following.
   *
   * - **Monthly**. Starting at midnight on the morning of the first day of each
   *   month covering the entire calendar month following.
   *
   * - **Annually**. Starting at midnight on the morning of the first day of each
   *   year covering the entire calendar year following.
   *
   * - **Ad_Hoc**. Use this setting when a custom billing schedule is used for
   *   billing an Account, such as for billing of Prepayment/Commitment fees using a
   *   custom billing schedule.
   */
  billingFrequency?: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'ANNUALLY' | 'AD_HOC';

  /**
   * The unique identifier (UUID) for the user who created the BillJob.
   */
  createdBy?: string;

  /**
   * An array of currency conversion rates from Bill currency to Organization
   * currency. For example, if Account is billed in GBP and Organization is set to
   * USD, Bill line items are calculated in GBP and then converted to USD using the
   * defined rate.
   */
  currencyConversions?: Array<Shared.CurrencyConversion>;

  /**
   * The starting date _(epoch)_ for Daily billing frequency _(in ISO 8601 format)_,
   * determining the first Bill date for daily Bills.
   */
  dayEpoch?: string;

  /**
   * The date and time _(in ISO 8601 format)_ when the BillJob was first created.
   */
  dtCreated?: string;

  /**
   * The date and time _(in ISO 8601 format)_ when the BillJob was last modified.
   */
  dtLastModified?: string;

  /**
   * The due date _(in ISO 8601 format)_ for payment of the Bill.
   *
   * For example: `"2023-02-24"`.
   */
  dueDate?: string;

  /**
   * For accounting purposes, the date set at Organization level to use for external
   * invoicing with respect to billing periods - two options:
   *
   * - `FIRST_DAY_OF_NEXT_PERIOD` _(Default)_. Used when you want to recognize usage
   *   revenue in the following period.
   * - `LAST_DAY_OF_ARREARS`. Used when you want to recognize usage revenue in the
   *   same period that it's consumed, instead of in the following period.
   *
   * For example, if the retrieved Bill was on a monthly billing frequency and the
   * billing period for the Bill is September 2023 and the _External invoice date_ is
   * set at `FIRST_DAY_OF_NEXT_PERIOD`, then the `externalInvoiceDate` will be
   * `"2023-10-01"`.
   */
  externalInvoiceDate?: string;

  /**
   * Specifies the date _(in ISO 8601 format)_ of the last day in the billing period,
   * defining the time range for the associated Bills.
   *
   * For example: `"2023-03-24"`.
   */
  lastDateInBillingPeriod?: string;

  /**
   * The unique identifier (UUID) for the user who last modified this BillJob.
   */
  lastModifiedBy?: string;

  /**
   * The starting date _(epoch)_ for Monthly billing frequency _(in ISO 8601
   * format)_, determining the first Bill date for monthly Bills.
   */
  monthEpoch?: string;

  /**
   * The number of pending actions or calculations within the BillJob.
   */
  pending?: number;

  /**
   * The current status of the BillJob, indicating its progress or completion state.
   */
  status?: 'PENDING' | 'INITIALIZING' | 'RUNNING' | 'COMPLETE' | 'CANCELLED';

  /**
   * The currency code used for the Bill, such as USD, GBP, or EUR.
   */
  targetCurrency?: string;

  /**
   * Specifies the time zone used for the generated Bills, ensuring alignment with
   * the local time zone.
   */
  timezone?: string;

  /**
   * The total number of Bills or calculations related to the BillJob.
   */
  total?: number;

  /**
   * Specifies the type of BillJob.
   *
   * - **CREATE** Returned for a _Create BillJob_ call.
   * - **RECALCULATE** Returned for a successful _Create Recalculation BillJob_ call.
   */
  type?: 'CREATE' | 'RECALCULATE';

  /**
   * The version number:
   *
   * - **Create:** On initial Create to insert a new entity, the version is set at 1
   *   in the response.
   * - **Update:** On successful Update, the version is incremented by 1 in the
   *   response.
   */
  version?: number;

  /**
   * The starting date _(epoch)_ for Weekly billing frequency _(in ISO 8601 format)_,
   * determining the first Bill date for weekly Bills.
   */
  weekEpoch?: string;

  /**
   * The starting date _(epoch)_ for Yearly billing frequency _(in ISO 8601 format)_,
   * determining the first Bill date for yearly Bills.
   */
  yearEpoch?: string;
}

export interface BillJobCreateParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param: An array of UUIDs representing the end customer Accounts associated
   * with the BillJob.
   */
  accountIds?: Array<string>;

  /**
   * Body param: The specific billing date _(in ISO 8601 format)_, determining when
   * the Bill was generated.
   *
   * For example: `"2023-01-24"`.
   */
  billDate?: string;

  /**
   * Body param: How often Bills are issued - used in conjunction with
   * `billingFrequency`.
   *
   * For example, if `billingFrequency` is set to Monthly and `billFrequencyInterval`
   * is set to 3, Bills are issued every three months.
   */
  billFrequencyInterval?: number;

  /**
   * Body param: How often Bills are generated.
   *
   * - **Daily**. Starting at midnight each day, covering a twenty-four hour period
   *   following.
   *
   * - **Weekly**. Starting at midnight on a Monday morning covering the seven-day
   *   period following.
   *
   * - **Monthly**. Starting at midnight on the morning of the first day of each
   *   month covering the entire calendar month following.
   *
   * - **Annually**. Starting at midnight on the morning of the first day of each
   *   year covering the entire calendar year following.
   *
   * - **Ad_Hoc**. Use this setting when a custom billing schedule is used for
   *   billing an Account, such as for billing of Prepayment/Commitment fees using a
   *   custom billing schedule.
   */
  billingFrequency?: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'ANNUALLY' | 'AD_HOC';

  /**
   * Body param: An array of currency conversion rates from Bill currency to
   * Organization currency. For example, if Account is billed in GBP and Organization
   * is set to USD, Bill line items are calculated in GBP and then converted to USD
   * using the defined rate.
   */
  currencyConversions?: Array<Shared.CurrencyConversion>;

  /**
   * Body param: The starting date _(epoch)_ for Daily billing frequency _(in ISO
   * 8601 format)_, determining the first Bill date for daily Bills.
   */
  dayEpoch?: string;

  /**
   * Body param: The due date _(in ISO 8601 format)_ for payment of the Bill.
   *
   * For example: `"2023-02-24"`.
   */
  dueDate?: string;

  /**
   * Body param: For accounting purposes, the date set at Organization level to use
   * for external invoicing with respect to billing periods - two options:
   *
   * - `FIRST_DAY_OF_NEXT_PERIOD` _(Default)_. Used when you want to recognize usage
   *   revenue in the following period.
   * - `LAST_DAY_OF_ARREARS`. Used when you want to recognize usage revenue in the
   *   same period that it's consumed, instead of in the following period.
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
   * Body param: Specifies the date _(in ISO 8601 format)_ of the last day in the
   * billing period, defining the time range for the associated Bills.
   *
   * For example: `"2023-03-24"`.
   */
  lastDateInBillingPeriod?: string;

  /**
   * Body param: The starting date _(epoch)_ for Monthly billing frequency _(in ISO
   * 8601 format)_, determining the first Bill date for monthly Bills.
   */
  monthEpoch?: string;

  /**
   * Body param: The currency code used for the Bill, such as USD, GBP, or EUR.
   */
  targetCurrency?: string;

  /**
   * Body param: Specifies the time zone used for the generated Bills, ensuring
   * alignment with the local time zone.
   */
  timezone?: string;

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

  /**
   * Body param: The starting date _(epoch)_ for Weekly billing frequency _(in ISO
   * 8601 format)_, determining the first Bill date for weekly Bills.
   */
  weekEpoch?: string;

  /**
   * Body param: The starting date _(epoch)_ for Yearly billing frequency _(in ISO
   * 8601 format)_, determining the first Bill date for yearly Bills.
   */
  yearEpoch?: string;
}

export interface BillJobRetrieveParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface BillJobListParams extends CursorParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Query param: Boolean filter to retrieve only active BillJobs and exclude
   * completed or cancelled BillJobs from the results.
   *
   * - TRUE - only active BillJobs.
   * - FALSE - all BillJobs including completed and cancelled BillJobs.
   */
  active?: string;

  /**
   * Query param: Filter BillJobs by specific status. Allows for targeted retrieval
   * of BillJobs based on their current processing status.
   *
   * Possible states are:
   *
   * - PENDING
   * - INITIALIZING
   * - RUNNING
   * - COMPLETE
   * - CANCELLED
   */
  status?: string;
}

export interface BillJobCancelParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface BillJobRecalculateParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param: The array of unique identifiers (UUIDs) for the Bills which are to
   * be recalculated.
   */
  billIds: Array<string>;

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

BillJobs.BillJobResponsesCursor = BillJobResponsesCursor;

export declare namespace BillJobs {
  export {
    type BillJobResponse as BillJobResponse,
    BillJobResponsesCursor as BillJobResponsesCursor,
    type BillJobCreateParams as BillJobCreateParams,
    type BillJobRetrieveParams as BillJobRetrieveParams,
    type BillJobListParams as BillJobListParams,
    type BillJobCancelParams as BillJobCancelParams,
    type BillJobRecalculateParams as BillJobRecalculateParams,
  };
}
