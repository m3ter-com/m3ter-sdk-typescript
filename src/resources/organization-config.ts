// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as Shared from './shared';

export class OrganizationConfig extends APIResource {
  /**
   * Retrieve the Organization-wide configuration details.
   *
   * @example
   * ```ts
   * const organizationConfigResponse =
   *   await client.organizationConfig.retrieve();
   * ```
   */
  retrieve(
    params?: OrganizationConfigRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrganizationConfigResponse>;
  retrieve(options?: Core.RequestOptions): Core.APIPromise<OrganizationConfigResponse>;
  retrieve(
    params: OrganizationConfigRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrganizationConfigResponse> {
    if (isRequestOptions(params)) {
      return this.retrieve({}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.get(`/organizations/${orgId}/organizationconfig`, options);
  }

  /**
   * Update the Organization-wide configuration details.
   *
   * @example
   * ```ts
   * const organizationConfigResponse =
   *   await client.organizationConfig.update({
   *     currency: 'USD',
   *     dayEpoch: '2022-01-01',
   *     daysBeforeBillDue: 1,
   *     monthEpoch: '2022-01-01',
   *     timezone: 'UTC',
   *     weekEpoch: '2022-01-04',
   *     yearEpoch: '2022-01-01',
   *   });
   * ```
   */
  update(
    params: OrganizationConfigUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrganizationConfigResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.put(`/organizations/${orgId}/organizationconfig`, { body, ...options });
  }
}

export interface OrganizationConfigRequest {
  /**
   * The currency code for the Organization. For example: USD, GBP, or EUR:
   *
   * - This defines the _billing currency_ for the Organization. You can override
   *   this by selecting a different billing currency at individual Account level.
   * - You must first define the currencies you want to use in your Organization. See
   *   the [Currency](https://www.m3ter.com/docs/api#tag/Currency) section in this
   *   API Reference.
   *
   * **Note:** If you use a different currency as the _pricing currency_ for Plans to
   * set charge rates for Product consumption by an Account, you must define a
   * currency conversion rate from the pricing currency to the billing currency
   * before you run billing for the Account, otherwise billing will fail. See below
   * for the `currencyConversions` request parameter.
   */
  currency: string;

  /**
   * Optional setting that defines the billing cycle date for Accounts that are
   * billed daily. Defines the date of the first Bill:
   *
   * - For example, suppose the Plan you attach to an Account is configured for daily
   *   billing frequency and will apply to the Account from January 1st, 2022 until
   *   June 30th, 2022. If you set a `dayEpoch` date of January 2nd, 2022, then the
   *   first Bill is created for the Account on that date and subsequent Bills are
   *   created for the Account each day following through to the end of the billing
   *   service period.
   * - The date is in ISO-8601 format.
   */
  dayEpoch: string;

  /**
   * Enter the number of days after the Bill generation date that you want to show on
   * Bills as the due date.
   *
   * **Note:** If you define `daysBeforeBillDue` at individual Account level, this
   * will take precedence over any `daysBeforeBillDue` setting defined at
   * Organization level.
   */
  daysBeforeBillDue: number;

  /**
   * Optional setting that defines the billing cycle date for Accounts that are
   * billed monthly. Defines the date of the first Bill and then acts as reference
   * for when subsequent Bills are created for the Account:
   *
   * - For example, suppose the Plan you attach to an Account is configured for
   *   monthly billing frequency and will apply to the Account from January 1st, 2022
   *   until June 30th, 2022. If you set a `monthEpoch` date of January 15th, 2022,
   *   then the first Bill is created for the Account on that date and subsequent
   *   Bills are created for the Account on the 15th of each month following through
   *   to the end of the billing service period - February 15th, March 15th, and so
   *   on.
   * - The date is in ISO-8601 format.
   */
  monthEpoch: string;

  /**
   * Sets the timezone for the Organization.
   */
  timezone: string;

  /**
   * Optional setting that defines the billing cycle date for Accounts that are
   * billed weekly. Defines the date of the first Bill and then acts as reference for
   * when subsequent Bills are created for the Account:
   *
   * - For example, suppose the Plan you attach to an Account is configured for
   *   weekly billing frequency and will apply to the Account from January 1st, 2022
   *   until June 30th, 2022. If you set a `weekEpoch` date of January 15th, 2022,
   *   which falls on a Saturday, then the first Bill is created for the Account on
   *   that date and subsequent Bills are created for the Account on Saturday of each
   *   week following through to the end of the billing service period.
   * - The date is in ISO-8601 format.
   */
  weekEpoch: string;

  /**
   * Optional setting that defines the billing cycle date for Accounts that are
   * billed yearly. Defines the date of the first Bill and then acts as reference for
   * when subsequent Bills are created for the Account:
   *
   * - For example, suppose the Plan you attach to an Account is configured for
   *   yearly billing frequency and will apply to the Account from January 1st, 2022
   *   until January 15th, 2028. If you set a `yearEpoch` date of January 1st, 2023,
   *   then the first Bill is created for the Account on that date and subsequent
   *   Bills are created for the Account on January 1st of each year following
   *   through to the end of the billing service period - January 1st, 2023, January
   *   1st, 2024 and so on.
   * - The date is in ISO-8601 format.
   */
  yearEpoch: string;

  /**
   * Grace period before bills are auto-approved. Used in combination with
   * `autoApproveBillsGracePeriodUnit` parameter.
   *
   * **Note:** When used in combination with `autoApproveBillsGracePeriodUnit`
   * enables auto-approval of Bills for Organization, which occurs when the specified
   * time period has elapsed after Bill generation.
   */
  autoApproveBillsGracePeriod?: number;

  /**
   * Time unit of grace period before bills are auto-approved. Used in combination
   * with `autoApproveBillsGracePeriod` parameter. Allowed options are MINUTES,
   * HOURS, or DAYS.
   *
   * **Note:** When used in combination with `autoApproveBillsGracePeriod` enables
   * auto-approval of Bills for Organization, which occurs when the specified time
   * period has elapsed after Bill generation.
   */
  autoApproveBillsGracePeriodUnit?: string;

  /**
   * Specify whether to auto-generate statements once Bills are _approved_ or
   * _locked_. It will not auto-generate if a bill is in _pending_ state.
   *
   * The default value is **None**.
   *
   * - **None**. Statements will not be auto-generated.
   * - **JSON**. Statements are auto-generated in JSON format.
   * - **JSON and CSV**. Statements are auto-generated in both JSON and CSV formats.
   */
  autoGenerateStatementMode?: 'NONE' | 'JSON' | 'JSON_AND_CSV';

  /**
   * Prefix to be used for sequential invoice numbers. This will be combined with the
   * `sequenceStartNumber`.
   *
   * **NOTES:**
   *
   * - If you do not define a `billPrefix`, a default will be used in the Console for
   *   the Bill **REFERENCE** number. This default will concatenate **INV-** with the
   *   last four characters of the `billId`.
   * - If you do not define a `billPrefix`, the Bill response schema for API calls
   *   that retrieve Bill data will not contain a `sequentialInvoiceNumber`.
   */
  billPrefix?: string;

  /**
   * Boolean setting to specify whether commitments _(prepayments)_ are billed in
   * advance at the start of each billing period, or billed in arrears at the end of
   * each billing period.
   *
   * - **TRUE** - bill in advance _(start of each billing period)_.
   * - **FALSE** - bill in arrears _(end of each billing period)_.
   */
  commitmentFeeBillInAdvance?: boolean;

  /**
   * Boolean setting to consolidate different billing frequencies onto the same bill.
   *
   * - **TRUE** - consolidate different billing frequencies onto the same bill.
   * - **FALSE** - bills are not consolidated.
   */
  consolidateBills?: boolean;

  /**
   * Define the order in which any Prepayment or Balance amounts on Accounts are to
   * be drawn-down against for billing. Four options:
   *
   * - `"PREPAYMENT","BALANCE"`. Draw-down against Prepayment credit before Balance
   *   credit.
   * - `"BALANCE","PREPAYMENT"`. Draw-down against Balance credit before Prepayment
   *   credit.
   * - `"PREPAYMENT"`. Only draw-down against Prepayment credit.
   * - `"BALANCE"`. Only draw-down against Balance credit.
   *
   * **NOTES:**
   *
   * - You can override this Organization-level setting for `creditApplicationOrder`
   *   at the level of an individual Account.
   * - If the Account belongs to a Parent/Child Account hierarchy, then the
   *   `creditApplicationOrder` settings are not available, and the draw-down order
   *   defaults always to Prepayment then Balance order.
   */
  creditApplicationOrder?: Array<'PREPAYMENT' | 'BALANCE'>;

  /**
   * Define currency conversion rates from _pricing currency_ to _billing currency_:
   *
   * - You can use the `currency` request parameter with this call to define the
   *   billing currency for your Organization - see above.
   * - You can also define a billing currency at the individual Account level and
   *   this will override the Organization billing currency.
   * - A Plan used to set Product consumption charge rates on an Account might use a
   *   different pricing currency. At billing, charges are calculated in the pricing
   *   currency and then converted into billing currency amounts to appear on Bills.
   *   If you haven't defined a currency conversion rate from pricing to billing
   *   currency, billing will fail for the Account.
   */
  currencyConversions?: Array<Shared.CurrencyConversion>;

  /**
   * Organization level default `statementDefinitionId` to be used when there is no
   * statement definition linked to the account.
   *
   * Statement definitions are used to generate bill statements, which are
   * informative backing sheets to invoices.
   */
  defaultStatementDefinitionId?: string;

  /**
   * Date to use for the invoice date. Allowed values are `FIRST_DAY_OF_NEXT_PERIOD`
   * or `LAST_DAY_OF_ARREARS`.
   */
  externalInvoiceDate?: string;

  /**
   * Boolean setting to specify whether minimum spend amounts are billed in advance
   * at the start of each billing period, or billed in arrears at the end of each
   * billing period.
   *
   * - **TRUE** - bill in advance _(start of each billing period)_.
   * - **FALSE** - bill in arrears _(end of each billing period)_.
   */
  minimumSpendBillInAdvance?: boolean;

  /**
   * Sets the required interval for updating bills. It is an optional parameter that
   * can be set as:
   *
   * - **For portions of an hour (minutes)**. Two options: **0.25** (15 minutes) and
   *   **0.5** (30 minutes).
   * - **For full hours.** Enter **1** for every hour, **2** for every two hours, and
   *   so on. Eight options: **1**, **2**, **3**, **4**, **6**, **8**, **12**, or
   *   **24**.
   * - **Default.** The default is **0**, which disables scheduling.
   */
  scheduledBillInterval?: number;

  /**
   * The starting number to be used for sequential invoice numbers. This will be
   * combined with the `billPrefix`.
   *
   * For example, if you define `billPrefix` to be **INVOICE-** and you set the
   * `seqenceStartNumber` as **100**, the first Bill created after updating your
   * Organization Configuration will have a `sequentialInvoiceNumber` assigned of
   * **INVOICE-101**. Subsequent Bills created will be numbered in time sequence for
   * their initial creation date/time.
   */
  sequenceStartNumber?: number;

  /**
   * Boolean setting to specify whether the standing charge is billed in advance at
   * the start of each billing period, or billed in arrears at the end of each
   * billing period.
   *
   * - **TRUE** - bill in advance _(start of each billing period)_.
   * - **FALSE** - bill in arrears _(end of each billing period)_.
   */
  standingChargeBillInAdvance?: boolean;

  /**
   * Boolean setting that supresses generating bills that have no line items.
   *
   * - **TRUE** - prevents generating bills with no line items.
   * - **FALSE** - bills are still generated even when they have no line items.
   */
  suppressedEmptyBills?: boolean;

  /**
   * The version number of the entity:
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

export interface OrganizationConfigResponse {
  /**
   * The UUID of the entity.
   */
  id: string;

  /**
   * Grace period before bills are auto-approved. Used in combination with the field
   * `autoApproveBillsGracePeriodUnit`.
   */
  autoApproveBillsGracePeriod?: number;

  autoApproveBillsGracePeriodUnit?: 'MINUTES' | 'HOURS' | 'DAYS';

  /**
   * Specifies whether to auto-generate statements once Bills are _approved_ or
   * _locked_. It will not auto-generate if a bill is in _pending_ state.
   *
   * The default value is **None**.
   *
   * - **None**. Statements will not be auto-generated.
   * - **JSON**. Statements are auto-generated in JSON format.
   * - **JSON and CSV**. Statements are auto-generated in both JSON and CSV formats.
   */
  autoGenerateStatementMode?: 'NONE' | 'JSON' | 'JSON_AND_CSV';

  /**
   * Prefix to be used for sequential invoice numbers. This will be combined with the
   * `sequenceStartNumber`.
   */
  billPrefix?: string;

  /**
   * Specifies whether commitments _(prepayments)_ are billed in advance at the start
   * of each billing period, or billed in arrears at the end of each billing period.
   *
   * - **TRUE** - bill in advance _(start of each billing period)_.
   * - **FALSE** - bill in arrears _(end of each billing period)_.
   */
  commitmentFeeBillInAdvance?: boolean;

  /**
   * Specifies whether to consolidate different billing frequencies onto the same
   * bill.
   *
   * - **TRUE** - consolidate different billing frequencies onto the same bill.
   * - **FALSE** - bills are not consolidated.
   */
  consolidateBills?: boolean;

  /**
   * The id of the user who created this organization config.
   */
  createdBy?: string;

  /**
   * The order in which any Prepayment or Balance credit amounts on Accounts are to
   * be drawn-down against for billing. Four options:
   *
   * - `"PREPAYMENT","BALANCE"`. Draw-down against Prepayment credit before Balance
   *   credit.
   * - `"BALANCE","PREPAYMENT"`. Draw-down against Balance credit before Prepayment
   *   credit.
   * - `"PREPAYMENT"`. Only draw-down against Prepayment credit.
   * - `"BALANCE"`. Only draw-down against Balance credit.
   */
  creditApplicationOrder?: Array<'PREPAYMENT' | 'BALANCE'>;

  /**
   * The currency code for the currency used in this Organization. For example: USD,
   * GBP, or EUR.
   */
  currency?: string;

  /**
   * Currency conversion rates from Bill currency to Organization currency.
   *
   * For example, if Account is billed in GBP and Organization is set to USD, Bill
   * line items are calculated in GBP and then converted to USD using the defined
   * rate.
   */
  currencyConversions?: Array<Shared.CurrencyConversion>;

  /**
   * The first bill date _(in ISO-8601 format)_ for daily billing periods.
   */
  dayEpoch?: string;

  /**
   * The number of days after the Bill generation date shown on Bills as the due
   * date.
   */
  daysBeforeBillDue?: number;

  /**
   * Organization level default `statementDefinitionId` to be used when there is no
   * statement definition linked to the account.
   *
   * Statement definitions are used to generate bill statements, which are
   * informative backing sheets to invoices.
   */
  defaultStatementDefinitionId?: string;

  /**
   * The DateTime when the organization config was created _(in ISO-8601 format)_.
   */
  dtCreated?: string;

  /**
   * The DateTime when the organization config was last modified _(in ISO-8601
   * format)_.
   */
  dtLastModified?: string;

  externalInvoiceDate?: 'LAST_DAY_OF_ARREARS' | 'FIRST_DAY_OF_NEXT_PERIOD';

  /**
   * The id of the user who last modified this organization config.
   */
  lastModifiedBy?: string;

  /**
   * Specifies whether minimum spend amounts are billed in advance at the start of
   * each billing period, or billed in arrears at the end of each billing period.
   *
   * - **TRUE** - bill in advance _(start of each billing period)_.
   * - **FALSE** - bill in arrears _(end of each billing period)_.
   */
  minimumSpendBillInAdvance?: boolean;

  /**
   * The first bill date _(in ISO-8601 format)_ for monthly billing periods.
   */
  monthEpoch?: string;

  /**
   * Specifies the required interval for updating bills.
   *
   * - **For portions of an hour (minutes)**. Two options: **0.25** (15 minutes) and
   *   **0.5** (30 minutes).
   * - **For full hours.** Eight possible values: **1**, **2**, **3**, **4**, **6**,
   *   **8**, **12**, or **24**.
   * - **Default.** The default is **0**, which disables scheduling.
   */
  scheduledBillInterval?: number;

  /**
   * The starting number to be used for sequential invoice numbers. This will be
   * combined with the `billPrefix`.
   */
  sequenceStartNumber?: number;

  /**
   * Specifies whether the standing charge is billed in advance at the start of each
   * billing period, or billed in arrears at the end of each billing period.
   *
   * - **TRUE** - bill in advance _(start of each billing period)_.
   * - **FALSE** - bill in arrears _(end of each billing period)_.
   */
  standingChargeBillInAdvance?: boolean;

  /**
   * Specifies whether to supress generating bills that have no line items.
   *
   * - **TRUE** - prevents generating bills with no line items.
   * - **FALSE** - bills are still generated even when they have no line items.
   */
  suppressedEmptyBills?: boolean;

  /**
   * The timezone for the Organization.
   */
  timezone?: string;

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
   * The first bill date _(in ISO-8601 format)_ for weekly billing periods.
   */
  weekEpoch?: string;

  /**
   * The first bill date _(in ISO-8601 format)_ for yearly billing periods.
   */
  yearEpoch?: string;
}

export interface OrganizationConfigRetrieveParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface OrganizationConfigUpdateParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param: The currency code for the Organization. For example: USD, GBP, or
   * EUR:
   *
   * - This defines the _billing currency_ for the Organization. You can override
   *   this by selecting a different billing currency at individual Account level.
   * - You must first define the currencies you want to use in your Organization. See
   *   the [Currency](https://www.m3ter.com/docs/api#tag/Currency) section in this
   *   API Reference.
   *
   * **Note:** If you use a different currency as the _pricing currency_ for Plans to
   * set charge rates for Product consumption by an Account, you must define a
   * currency conversion rate from the pricing currency to the billing currency
   * before you run billing for the Account, otherwise billing will fail. See below
   * for the `currencyConversions` request parameter.
   */
  currency: string;

  /**
   * Body param: Optional setting that defines the billing cycle date for Accounts
   * that are billed daily. Defines the date of the first Bill:
   *
   * - For example, suppose the Plan you attach to an Account is configured for daily
   *   billing frequency and will apply to the Account from January 1st, 2022 until
   *   June 30th, 2022. If you set a `dayEpoch` date of January 2nd, 2022, then the
   *   first Bill is created for the Account on that date and subsequent Bills are
   *   created for the Account each day following through to the end of the billing
   *   service period.
   * - The date is in ISO-8601 format.
   */
  dayEpoch: string;

  /**
   * Body param: Enter the number of days after the Bill generation date that you
   * want to show on Bills as the due date.
   *
   * **Note:** If you define `daysBeforeBillDue` at individual Account level, this
   * will take precedence over any `daysBeforeBillDue` setting defined at
   * Organization level.
   */
  daysBeforeBillDue: number;

  /**
   * Body param: Optional setting that defines the billing cycle date for Accounts
   * that are billed monthly. Defines the date of the first Bill and then acts as
   * reference for when subsequent Bills are created for the Account:
   *
   * - For example, suppose the Plan you attach to an Account is configured for
   *   monthly billing frequency and will apply to the Account from January 1st, 2022
   *   until June 30th, 2022. If you set a `monthEpoch` date of January 15th, 2022,
   *   then the first Bill is created for the Account on that date and subsequent
   *   Bills are created for the Account on the 15th of each month following through
   *   to the end of the billing service period - February 15th, March 15th, and so
   *   on.
   * - The date is in ISO-8601 format.
   */
  monthEpoch: string;

  /**
   * Body param: Sets the timezone for the Organization.
   */
  timezone: string;

  /**
   * Body param: Optional setting that defines the billing cycle date for Accounts
   * that are billed weekly. Defines the date of the first Bill and then acts as
   * reference for when subsequent Bills are created for the Account:
   *
   * - For example, suppose the Plan you attach to an Account is configured for
   *   weekly billing frequency and will apply to the Account from January 1st, 2022
   *   until June 30th, 2022. If you set a `weekEpoch` date of January 15th, 2022,
   *   which falls on a Saturday, then the first Bill is created for the Account on
   *   that date and subsequent Bills are created for the Account on Saturday of each
   *   week following through to the end of the billing service period.
   * - The date is in ISO-8601 format.
   */
  weekEpoch: string;

  /**
   * Body param: Optional setting that defines the billing cycle date for Accounts
   * that are billed yearly. Defines the date of the first Bill and then acts as
   * reference for when subsequent Bills are created for the Account:
   *
   * - For example, suppose the Plan you attach to an Account is configured for
   *   yearly billing frequency and will apply to the Account from January 1st, 2022
   *   until January 15th, 2028. If you set a `yearEpoch` date of January 1st, 2023,
   *   then the first Bill is created for the Account on that date and subsequent
   *   Bills are created for the Account on January 1st of each year following
   *   through to the end of the billing service period - January 1st, 2023, January
   *   1st, 2024 and so on.
   * - The date is in ISO-8601 format.
   */
  yearEpoch: string;

  /**
   * Body param: Grace period before bills are auto-approved. Used in combination
   * with `autoApproveBillsGracePeriodUnit` parameter.
   *
   * **Note:** When used in combination with `autoApproveBillsGracePeriodUnit`
   * enables auto-approval of Bills for Organization, which occurs when the specified
   * time period has elapsed after Bill generation.
   */
  autoApproveBillsGracePeriod?: number;

  /**
   * Body param: Time unit of grace period before bills are auto-approved. Used in
   * combination with `autoApproveBillsGracePeriod` parameter. Allowed options are
   * MINUTES, HOURS, or DAYS.
   *
   * **Note:** When used in combination with `autoApproveBillsGracePeriod` enables
   * auto-approval of Bills for Organization, which occurs when the specified time
   * period has elapsed after Bill generation.
   */
  autoApproveBillsGracePeriodUnit?: string;

  /**
   * Body param: Specify whether to auto-generate statements once Bills are
   * _approved_ or _locked_. It will not auto-generate if a bill is in _pending_
   * state.
   *
   * The default value is **None**.
   *
   * - **None**. Statements will not be auto-generated.
   * - **JSON**. Statements are auto-generated in JSON format.
   * - **JSON and CSV**. Statements are auto-generated in both JSON and CSV formats.
   */
  autoGenerateStatementMode?: 'NONE' | 'JSON' | 'JSON_AND_CSV';

  /**
   * Body param: Prefix to be used for sequential invoice numbers. This will be
   * combined with the `sequenceStartNumber`.
   *
   * **NOTES:**
   *
   * - If you do not define a `billPrefix`, a default will be used in the Console for
   *   the Bill **REFERENCE** number. This default will concatenate **INV-** with the
   *   last four characters of the `billId`.
   * - If you do not define a `billPrefix`, the Bill response schema for API calls
   *   that retrieve Bill data will not contain a `sequentialInvoiceNumber`.
   */
  billPrefix?: string;

  /**
   * Body param: Boolean setting to specify whether commitments _(prepayments)_ are
   * billed in advance at the start of each billing period, or billed in arrears at
   * the end of each billing period.
   *
   * - **TRUE** - bill in advance _(start of each billing period)_.
   * - **FALSE** - bill in arrears _(end of each billing period)_.
   */
  commitmentFeeBillInAdvance?: boolean;

  /**
   * Body param: Boolean setting to consolidate different billing frequencies onto
   * the same bill.
   *
   * - **TRUE** - consolidate different billing frequencies onto the same bill.
   * - **FALSE** - bills are not consolidated.
   */
  consolidateBills?: boolean;

  /**
   * Body param: Define the order in which any Prepayment or Balance amounts on
   * Accounts are to be drawn-down against for billing. Four options:
   *
   * - `"PREPAYMENT","BALANCE"`. Draw-down against Prepayment credit before Balance
   *   credit.
   * - `"BALANCE","PREPAYMENT"`. Draw-down against Balance credit before Prepayment
   *   credit.
   * - `"PREPAYMENT"`. Only draw-down against Prepayment credit.
   * - `"BALANCE"`. Only draw-down against Balance credit.
   *
   * **NOTES:**
   *
   * - You can override this Organization-level setting for `creditApplicationOrder`
   *   at the level of an individual Account.
   * - If the Account belongs to a Parent/Child Account hierarchy, then the
   *   `creditApplicationOrder` settings are not available, and the draw-down order
   *   defaults always to Prepayment then Balance order.
   */
  creditApplicationOrder?: Array<'PREPAYMENT' | 'BALANCE'>;

  /**
   * Body param: Define currency conversion rates from _pricing currency_ to _billing
   * currency_:
   *
   * - You can use the `currency` request parameter with this call to define the
   *   billing currency for your Organization - see above.
   * - You can also define a billing currency at the individual Account level and
   *   this will override the Organization billing currency.
   * - A Plan used to set Product consumption charge rates on an Account might use a
   *   different pricing currency. At billing, charges are calculated in the pricing
   *   currency and then converted into billing currency amounts to appear on Bills.
   *   If you haven't defined a currency conversion rate from pricing to billing
   *   currency, billing will fail for the Account.
   */
  currencyConversions?: Array<Shared.CurrencyConversion>;

  /**
   * Body param: Organization level default `statementDefinitionId` to be used when
   * there is no statement definition linked to the account.
   *
   * Statement definitions are used to generate bill statements, which are
   * informative backing sheets to invoices.
   */
  defaultStatementDefinitionId?: string;

  /**
   * Body param: Date to use for the invoice date. Allowed values are
   * `FIRST_DAY_OF_NEXT_PERIOD` or `LAST_DAY_OF_ARREARS`.
   */
  externalInvoiceDate?: string;

  /**
   * Body param: Boolean setting to specify whether minimum spend amounts are billed
   * in advance at the start of each billing period, or billed in arrears at the end
   * of each billing period.
   *
   * - **TRUE** - bill in advance _(start of each billing period)_.
   * - **FALSE** - bill in arrears _(end of each billing period)_.
   */
  minimumSpendBillInAdvance?: boolean;

  /**
   * Body param: Sets the required interval for updating bills. It is an optional
   * parameter that can be set as:
   *
   * - **For portions of an hour (minutes)**. Two options: **0.25** (15 minutes) and
   *   **0.5** (30 minutes).
   * - **For full hours.** Enter **1** for every hour, **2** for every two hours, and
   *   so on. Eight options: **1**, **2**, **3**, **4**, **6**, **8**, **12**, or
   *   **24**.
   * - **Default.** The default is **0**, which disables scheduling.
   */
  scheduledBillInterval?: number;

  /**
   * Body param: The starting number to be used for sequential invoice numbers. This
   * will be combined with the `billPrefix`.
   *
   * For example, if you define `billPrefix` to be **INVOICE-** and you set the
   * `seqenceStartNumber` as **100**, the first Bill created after updating your
   * Organization Configuration will have a `sequentialInvoiceNumber` assigned of
   * **INVOICE-101**. Subsequent Bills created will be numbered in time sequence for
   * their initial creation date/time.
   */
  sequenceStartNumber?: number;

  /**
   * Body param: Boolean setting to specify whether the standing charge is billed in
   * advance at the start of each billing period, or billed in arrears at the end of
   * each billing period.
   *
   * - **TRUE** - bill in advance _(start of each billing period)_.
   * - **FALSE** - bill in arrears _(end of each billing period)_.
   */
  standingChargeBillInAdvance?: boolean;

  /**
   * Body param: Boolean setting that supresses generating bills that have no line
   * items.
   *
   * - **TRUE** - prevents generating bills with no line items.
   * - **FALSE** - bills are still generated even when they have no line items.
   */
  suppressedEmptyBills?: boolean;

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

export declare namespace OrganizationConfig {
  export {
    type OrganizationConfigRequest as OrganizationConfigRequest,
    type OrganizationConfigResponse as OrganizationConfigResponse,
    type OrganizationConfigRetrieveParams as OrganizationConfigRetrieveParams,
    type OrganizationConfigUpdateParams as OrganizationConfigUpdateParams,
  };
}
