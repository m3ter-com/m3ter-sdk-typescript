// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Pricings extends APIResource {
  /**
   * Create a new Pricing.
   *
   * **Note:** Either `planId` or `planTemplateId` request parameters are required
   * for this call to be valid. If you omit both, then you will receive a validation
   * error.
   */
  create(params: PricingCreateParams, options?: RequestOptions): APIPromise<PricingResponse> {
    const { orgId = this._client.orgID, ...body } = params;
    return this._client.post(path`/organizations/${orgId}/pricings`, { body, ...options });
  }

  /**
   * Retrieve the Pricing with the given UUID.
   */
  retrieve(
    id: string,
    params: PricingRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PricingResponse> {
    const { orgId = this._client.orgID } = params ?? {};
    return this._client.get(path`/organizations/${orgId}/pricings/${id}`, options);
  }

  /**
   * Update Pricing for the given UUID.
   *
   * **Note:** Either `planId` or `planTemplateId` request parameters are required
   * for this call to be valid. If you omit both, then you will receive a validation
   * error.
   */
  update(id: string, params: PricingUpdateParams, options?: RequestOptions): APIPromise<PricingResponse> {
    const { orgId = this._client.orgID, ...body } = params;
    return this._client.put(path`/organizations/${orgId}/pricings/${id}`, { body, ...options });
  }

  /**
   * Retrieve a list of Pricings filtered by date, Plan ID, PlanTemplate ID, or
   * Pricing ID.
   */
  list(
    params: PricingListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PricingResponsesCursor, PricingResponse> {
    const { orgId = this._client.orgID, ...query } = params ?? {};
    return this._client.getAPIList(path`/organizations/${orgId}/pricings`, Cursor<PricingResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Delete the Pricing with the given UUID.
   */
  delete(
    id: string,
    params: PricingDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PricingResponse> {
    const { orgId = this._client.orgID } = params ?? {};
    return this._client.delete(path`/organizations/${orgId}/pricings/${id}`, options);
  }
}

export type PricingResponsesCursor = Cursor<PricingResponse>;

export interface PricingResponse {
  /**
   * The UUID of the entity.
   */
  id: string;

  accountingProductId?: string;

  /**
   * UUID of the Aggregation used to create the Pricing. Use this when creating a
   * Pricing for a segmented aggregation.
   */
  aggregationId?: string;

  aggregationType?: 'SIMPLE' | 'COMPOUND';

  /**
   * Unique short code for the Pricing.
   */
  code?: string;

  /**
   * UUID of the Compound Aggregation used to create the Pricing.
   */
  compoundAggregationId?: string;

  /**
   * The ID of the user who created this item.
   */
  createdBy?: string;

  /**
   * Controls whether or not charge rates under a set of pricing bands configured for
   * a Pricing are applied according to each separate band or at the highest band
   * reached.
   *
   * The default value is **TRUE**.
   *
   * - When TRUE, at billing charge rates are applied according to each separate
   *   band.
   *
   * - When FALSE, at billing charge rates are applied according to highest band
   *   reached.
   */
  cumulative?: boolean;

  /**
   * Displayed on Bill line items.
   */
  description?: string;

  /**
   * The DateTime when this item was created _(in ISO-8601 format)_.
   */
  dtCreated?: string;

  /**
   * The DateTime when this item was last modified _(in ISO-8601 format)_.
   */
  dtLastModified?: string;

  /**
   * The end date _(in ISO-8601 format)_ for when the Pricing ceases to be active for
   * the Plan or Plan Template.
   *
   * If not specified, the Pricing remains active indefinitely.
   */
  endDate?: string;

  /**
   * The ID of the user who last modified this item.
   */
  lastModifiedBy?: string;

  /**
   * The minimum spend amount per billing cycle for end customer Accounts on a Plan
   * to which the Pricing is applied.
   */
  minimumSpend?: number;

  /**
   * The default value is **FALSE**.
   *
   * - When TRUE, minimum spend is billed at the start of each billing period.
   *
   * - When FALSE, minimum spend is billed at the end of each billing period.
   *
   * _(Optional)_. Overrides the setting at Organization level for minimum spend
   * billing in arrears/in advance.
   */
  minimumSpendBillInAdvance?: boolean;

  /**
   * Minimum spend description _(displayed on the bill line item)_.
   */
  minimumSpendDescription?: string;

  /**
   * The Prepayment/Balance overage pricing in pricing bands for the case of a
   * **Tiered** pricing structure.
   */
  overagePricingBands?: Array<Shared.PricingBand>;

  /**
   * UUID of the Plan the Pricing is created for.
   */
  planId?: string;

  /**
   * UUID of the Plan Template the Pricing was created for.
   */
  planTemplateId?: string;

  pricingBands?: Array<Shared.PricingBand>;

  /**
   * Name of the segment for which you are defining a Pricing.
   *
   * For each segment in a segmented aggregation, make a separate call using
   * `aggregationId` parameter to update a Pricing.
   */
  segment?: { [key: string]: string };

  segmentString?: string;

  /**
   * The start date _(in ISO-8601 format)_ for when the Pricing starts to be active
   * for the Plan of Plan Template.
   */
  startDate?: string;

  /**
   * The default value is **FALSE**.
   *
   * - If TRUE, usage accumulates over the entire period the priced Plan is active
   *   for the account, and is not reset for pricing band rates at the start of each
   *   billing period.
   *
   * - If FALSE, usage does not accumulate, and is reset for pricing bands at the
   *   start of each billing period.
   */
  tiersSpanPlan?: boolean;

  /**
   * - **DEBIT**. Default setting. The amount calculated using the Pricing is added
   *   to the bill as a debit.
   *
   * - **PRODUCT_CREDIT**. The amount calculated using the Pricing is added to the
   *   bill as a credit _(negative amount)_. To prevent negative billing, the bill
   *   will be capped at the total of other line items for the _same_ Product.
   *
   * - **GLOBAL_CREDIT**. The amount calculated using the Pricing is added to the
   *   bill as a credit _(negative amount)_. To prevent negative billing, the bill
   *   will be capped at the total of other line items for the entire bill, which
   *   might include other Products the Account consumes.
   */
  type?: 'DEBIT' | 'PRODUCT_CREDIT' | 'GLOBAL_CREDIT';

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

export interface PricingCreateParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param:
   */
  pricingBands: Array<Shared.PricingBand>;

  /**
   * Body param: The start date _(in ISO-8601 format)_ for when the Pricing starts to
   * be active for the Plan of Plan Template._(Required)_
   */
  startDate: string;

  /**
   * Body param: Optional Product ID this Pricing should be attributed to for
   * accounting purposes
   */
  accountingProductId?: string;

  /**
   * Body param: UUID of the Aggregation used to create the Pricing. Use this when
   * creating a Pricing for a segmented aggregation.
   */
  aggregationId?: string;

  /**
   * Body param: Unique short code for the Pricing.
   */
  code?: string;

  /**
   * Body param: UUID of the Compound Aggregation used to create the Pricing.
   */
  compoundAggregationId?: string;

  /**
   * Body param: Controls whether or not charge rates under a set of pricing bands
   * configured for a Pricing are applied according to each separate band or at the
   * highest band reached.
   *
   * _(Optional)_. The default value is **FALSE**.
   *
   * - When TRUE, at billing charge rates are applied according to each separate
   *   band.
   *
   * - When FALSE, at billing charge rates are applied according to highest band
   *   reached.
   *
   * **NOTE:** Use the `cumulative` parameter to create the type of Pricing you
   * require. For example, for Tiered Pricing set to **TRUE**; for Volume Pricing,
   * set to **FALSE**.
   */
  cumulative?: boolean;

  /**
   * Body param: Displayed on Bill line items.
   */
  description?: string;

  /**
   * Body param: The end date _(in ISO-8601 format)_ for when the Pricing ceases to
   * be active for the Plan or Plan Template.
   *
   * _(Optional)_ If not specified, the Pricing remains active indefinitely.
   */
  endDate?: string;

  /**
   * Body param: The minimum spend amount per billing cycle for end customer Accounts
   * on a Plan to which the Pricing is applied.
   */
  minimumSpend?: number;

  /**
   * Body param: The default value is **FALSE**.
   *
   * - When TRUE, minimum spend is billed at the start of each billing period.
   *
   * - When FALSE, minimum spend is billed at the end of each billing period.
   *
   * _(Optional)_. Overrides the setting at Organization level for minimum spend
   * billing in arrears/in advance.
   */
  minimumSpendBillInAdvance?: boolean;

  /**
   * Body param: Minimum spend description _(displayed on the bill line item)_.
   */
  minimumSpendDescription?: string;

  /**
   * Body param: Specify Prepayment/Balance overage pricing in pricing bands for the
   * case of a **Tiered** pricing structure.
   */
  overagePricingBands?: Array<Shared.PricingBand>;

  /**
   * Body param: UUID of the Plan the Pricing is created for.
   */
  planId?: string;

  /**
   * Body param: UUID of the Plan Template the Pricing is created for.
   */
  planTemplateId?: string;

  /**
   * Body param: Specifies the segment value which you are defining a Pricing for
   * using this call:
   *
   * - For each segment value defined on a Segmented Aggregation you must create a
   *   separate Pricing and use the appropriate `aggregationId` parameter for the
   *   call.
   * - If you specify a segment value that has not been defined for the Aggregation,
   *   you'll receive an error.
   * - If you've defined segment values for the Aggregation using a single wildcard
   *   or multiple wildcards, you can create Pricing for these wildcard segment
   *   values also.
   *
   * For more details on creating Pricings for segment values on a Segmented
   * Aggregation using this call, together with some examples, see the
   * [Using API Call to Create Segmented Pricings](https://www.m3ter.com/docs/guides/plans-and-pricing/pricing-plans/pricing-plans-using-segmented-aggregations#using-api-call-to-create-a-segmented-pricing)
   * in our User Documentation.
   */
  segment?: { [key: string]: string };

  /**
   * Body param: The default value is **FALSE**.
   *
   * - If TRUE, usage accumulates over the entire period the priced Plan is active
   *   for the account, and is not reset for pricing band rates at the start of each
   *   billing period.
   *
   * - If FALSE, usage does not accumulate, and is reset for pricing bands at the
   *   start of each billing period.
   */
  tiersSpanPlan?: boolean;

  /**
   * Body param: \* **DEBIT**. Default setting. The amount calculated using the
   * Pricing is added to the bill as a debit.
   *
   * - **PRODUCT_CREDIT**. The amount calculated using the Pricing is added to the
   *   bill as a credit _(negative amount)_. To prevent negative billing, the bill
   *   will be capped at the total of other line items for the same Product.
   *
   * - **GLOBAL_CREDIT**. The amount calculated using the Pricing is added to the
   *   bill as a credit _(negative amount)_. To prevent negative billing, the bill
   *   will be capped at the total of other line items for the entire bill, which
   *   might include other Products the Account consumes.
   */
  type?: 'DEBIT' | 'PRODUCT_CREDIT' | 'GLOBAL_CREDIT';

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

export interface PricingRetrieveParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface PricingUpdateParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param:
   */
  pricingBands: Array<Shared.PricingBand>;

  /**
   * Body param: The start date _(in ISO-8601 format)_ for when the Pricing starts to
   * be active for the Plan of Plan Template._(Required)_
   */
  startDate: string;

  /**
   * Body param: Optional Product ID this Pricing should be attributed to for
   * accounting purposes
   */
  accountingProductId?: string;

  /**
   * Body param: UUID of the Aggregation used to create the Pricing. Use this when
   * creating a Pricing for a segmented aggregation.
   */
  aggregationId?: string;

  /**
   * Body param: Unique short code for the Pricing.
   */
  code?: string;

  /**
   * Body param: UUID of the Compound Aggregation used to create the Pricing.
   */
  compoundAggregationId?: string;

  /**
   * Body param: Controls whether or not charge rates under a set of pricing bands
   * configured for a Pricing are applied according to each separate band or at the
   * highest band reached.
   *
   * _(Optional)_. The default value is **FALSE**.
   *
   * - When TRUE, at billing charge rates are applied according to each separate
   *   band.
   *
   * - When FALSE, at billing charge rates are applied according to highest band
   *   reached.
   *
   * **NOTE:** Use the `cumulative` parameter to create the type of Pricing you
   * require. For example, for Tiered Pricing set to **TRUE**; for Volume Pricing,
   * set to **FALSE**.
   */
  cumulative?: boolean;

  /**
   * Body param: Displayed on Bill line items.
   */
  description?: string;

  /**
   * Body param: The end date _(in ISO-8601 format)_ for when the Pricing ceases to
   * be active for the Plan or Plan Template.
   *
   * _(Optional)_ If not specified, the Pricing remains active indefinitely.
   */
  endDate?: string;

  /**
   * Body param: The minimum spend amount per billing cycle for end customer Accounts
   * on a Plan to which the Pricing is applied.
   */
  minimumSpend?: number;

  /**
   * Body param: The default value is **FALSE**.
   *
   * - When TRUE, minimum spend is billed at the start of each billing period.
   *
   * - When FALSE, minimum spend is billed at the end of each billing period.
   *
   * _(Optional)_. Overrides the setting at Organization level for minimum spend
   * billing in arrears/in advance.
   */
  minimumSpendBillInAdvance?: boolean;

  /**
   * Body param: Minimum spend description _(displayed on the bill line item)_.
   */
  minimumSpendDescription?: string;

  /**
   * Body param: Specify Prepayment/Balance overage pricing in pricing bands for the
   * case of a **Tiered** pricing structure.
   */
  overagePricingBands?: Array<Shared.PricingBand>;

  /**
   * Body param: UUID of the Plan the Pricing is created for.
   */
  planId?: string;

  /**
   * Body param: UUID of the Plan Template the Pricing is created for.
   */
  planTemplateId?: string;

  /**
   * Body param: Specifies the segment value which you are defining a Pricing for
   * using this call:
   *
   * - For each segment value defined on a Segmented Aggregation you must create a
   *   separate Pricing and use the appropriate `aggregationId` parameter for the
   *   call.
   * - If you specify a segment value that has not been defined for the Aggregation,
   *   you'll receive an error.
   * - If you've defined segment values for the Aggregation using a single wildcard
   *   or multiple wildcards, you can create Pricing for these wildcard segment
   *   values also.
   *
   * For more details on creating Pricings for segment values on a Segmented
   * Aggregation using this call, together with some examples, see the
   * [Using API Call to Create Segmented Pricings](https://www.m3ter.com/docs/guides/plans-and-pricing/pricing-plans/pricing-plans-using-segmented-aggregations#using-api-call-to-create-a-segmented-pricing)
   * in our User Documentation.
   */
  segment?: { [key: string]: string };

  /**
   * Body param: The default value is **FALSE**.
   *
   * - If TRUE, usage accumulates over the entire period the priced Plan is active
   *   for the account, and is not reset for pricing band rates at the start of each
   *   billing period.
   *
   * - If FALSE, usage does not accumulate, and is reset for pricing bands at the
   *   start of each billing period.
   */
  tiersSpanPlan?: boolean;

  /**
   * Body param: \* **DEBIT**. Default setting. The amount calculated using the
   * Pricing is added to the bill as a debit.
   *
   * - **PRODUCT_CREDIT**. The amount calculated using the Pricing is added to the
   *   bill as a credit _(negative amount)_. To prevent negative billing, the bill
   *   will be capped at the total of other line items for the same Product.
   *
   * - **GLOBAL_CREDIT**. The amount calculated using the Pricing is added to the
   *   bill as a credit _(negative amount)_. To prevent negative billing, the bill
   *   will be capped at the total of other line items for the entire bill, which
   *   might include other Products the Account consumes.
   */
  type?: 'DEBIT' | 'PRODUCT_CREDIT' | 'GLOBAL_CREDIT';

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

export interface PricingListParams extends CursorParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Query param: UUID of the Aggregation to retrieve pricings for
   */
  aggregationId?: string;

  /**
   * Query param: Date on which to retrieve active Pricings.
   */
  date?: string;

  /**
   * Query param: List of Pricing IDs to retrieve.
   */
  ids?: Array<string>;

  /**
   * Query param: UUID of the Plan to retrieve Pricings for.
   */
  planId?: string;

  /**
   * Query param: UUID of the PlanTemplate to retrieve Pricings for.
   */
  planTemplateId?: string;
}

export interface PricingDeleteParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export declare namespace Pricings {
  export {
    type PricingResponse as PricingResponse,
    type PricingResponsesCursor as PricingResponsesCursor,
    type PricingCreateParams as PricingCreateParams,
    type PricingRetrieveParams as PricingRetrieveParams,
    type PricingUpdateParams as PricingUpdateParams,
    type PricingListParams as PricingListParams,
    type PricingDeleteParams as PricingDeleteParams,
  };
}
