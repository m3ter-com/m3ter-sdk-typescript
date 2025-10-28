// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Plans extends APIResource {
  /**
   * Create a new Plan.
   */
  create(params: PlanCreateParams, options?: RequestOptions): APIPromise<PlanResponse> {
    const { orgId = this._client.orgID, ...body } = params;
    return this._client.post(path`/organizations/${orgId}/plans`, { body, ...options });
  }

  /**
   * Retrieve the Plan with the given UUID.
   */
  retrieve(
    id: string,
    params: PlanRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PlanResponse> {
    const { orgId = this._client.orgID } = params ?? {};
    return this._client.get(path`/organizations/${orgId}/plans/${id}`, options);
  }

  /**
   * Update the Plan with the given UUID.
   *
   * **Note:** If you have created Custom Fields for a Plan, when you use this
   * endpoint to update the Plan use the `customFields` parameter to preserve those
   * Custom Fields. If you omit them from the update request, they will be lost.
   */
  update(id: string, params: PlanUpdateParams, options?: RequestOptions): APIPromise<PlanResponse> {
    const { orgId = this._client.orgID, ...body } = params;
    return this._client.put(path`/organizations/${orgId}/plans/${id}`, { body, ...options });
  }

  /**
   * Retrieve a list of Plans that can be filtered by Product, Account, or Plan ID.
   */
  list(
    params: PlanListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PlanResponsesCursor, PlanResponse> {
    const { orgId = this._client.orgID, ...query } = params ?? {};
    return this._client.getAPIList(path`/organizations/${orgId}/plans`, Cursor<PlanResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Delete the Plan with the given UUID.
   */
  delete(
    id: string,
    params: PlanDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PlanResponse> {
    const { orgId = this._client.orgID } = params ?? {};
    return this._client.delete(path`/organizations/${orgId}/plans/${id}`, options);
  }
}

export type PlanResponsesCursor = Cursor<PlanResponse>;

export interface PlanResponse {
  /**
   * The UUID of the entity.
   */
  id: string;

  /**
   * _(Optional)_. The Account ID for which this plan was created as custom/bespoke.
   * A custom/bespoke Plan can only be attached to the specified Account.
   */
  accountId?: string;

  /**
   * TRUE/FALSE flag indicating whether the plan is custom/bespoke for a particular
   * Account.
   */
  bespoke?: boolean;

  /**
   * Unique short code reference for the Plan.
   */
  code?: string;

  /**
   * The id of the user who created this plan.
   */
  createdBy?: string;

  /**
   * User defined fields enabling you to attach custom data. The value for a custom
   * field can be either a string or a number.
   *
   * If `customFields` can also be defined for this entity at the Organizational
   * level,`customField` values defined at individual level override values of
   * `customFields` with the same name defined at Organization level.
   *
   * See
   * [Working with Custom Fields](https://www.m3ter.com/docs/guides/creating-and-managing-products/working-with-custom-fields)
   * in the m3ter documentation for more information.
   */
  customFields?: { [key: string]: string | number };

  /**
   * The DateTime _(in ISO-8601 format)_ when the plan was created.
   */
  dtCreated?: string;

  /**
   * The DateTime _(in ISO-8601 format)_ when the plan was last modified.
   */
  dtLastModified?: string;

  /**
   * The id of the user who last modified this plan.
   */
  lastModifiedBy?: string;

  /**
   * The product minimum spend amount per billing cycle for end customer Accounts on
   * a priced Plan.
   *
   * _(Optional)_. Overrides PlanTemplate value.
   */
  minimumSpend?: number;

  /**
   * Optional Product ID this plan's minimum spend should be attributed to for
   * accounting purposes
   */
  minimumSpendAccountingProductId?: string;

  /**
   * When TRUE, minimum spend is billed at the start of each billing period.
   *
   * When FALSE, minimum spend is billed at the end of each billing period.
   *
   * _(Optional)_. Overrides the setting at PlanTemplate level for minimum spend
   * billing in arrears/in advance.
   */
  minimumSpendBillInAdvance?: boolean;

  /**
   * Minimum spend description _(displayed on the bill line item)_.
   */
  minimumSpendDescription?: string;

  /**
   * Descriptive name for the Plan.
   */
  name?: string;

  /**
   * Assigns a rank or position to the Plan in your order of pricing plans - lower
   * numbers represent more basic pricing plans; higher numbers represent more
   * premium pricing plans.
   *
   * _(Optional)_. Overrides PlanTemplate value.
   *
   * **NOTE:** **DEPRECATED** - no longer used.
   */
  ordinal?: number;

  /**
   * UUID of the PlanTemplate the Plan belongs to.
   */
  planTemplateId?: string;

  /**
   * UUID of the Product the Plan belongs to.
   */
  productId?: string;

  /**
   * The standing charge applied to bills for end customers. This is prorated.
   *
   * _(Optional)_. Overrides PlanTemplate value.
   */
  standingCharge?: number;

  /**
   * Optional Product ID this plan's standing charge should be attributed to for
   * accounting purposes
   */
  standingChargeAccountingProductId?: string;

  /**
   * When TRUE, standing charge is billed at the start of each billing period.
   *
   * When FALSE, standing charge is billed at the end of each billing period.
   *
   * _(Optional)_. Overrides the setting at PlanTemplate level for standing charge
   * billing in arrears/in advance.
   */
  standingChargeBillInAdvance?: boolean;

  /**
   * Standing charge description _(displayed on the bill line item)_.
   */
  standingChargeDescription?: string;

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

export interface PlanCreateParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param: Unique short code reference for the Plan.
   */
  code: string;

  /**
   * Body param: Descriptive name for the Plan.
   */
  name: string;

  /**
   * Body param: UUID of the PlanTemplate the Plan belongs to.
   */
  planTemplateId: string;

  /**
   * Body param: _(Optional)_. Used to specify an Account for which the Plan will be
   * a custom/bespoke Plan:
   *
   * - Use when first creating a Plan.
   * - A custom/bespoke Plan can only be attached to the specified Account.
   * - Once created, a custom/bespoke Plan cannot be updated to be made a
   *   custom/bespoke Plan for a different Account.
   */
  accountId?: string;

  /**
   * Body param: TRUE/FALSE flag indicating whether the plan is a custom/bespoke Plan
   * for a particular Account:
   *
   * - When creating a Plan, use the `accountId` request parameter to specify the
   *   Account for which the Plan will be custom/bespoke.
   * - A custom/bespoke Plan can only be attached to the specified Account.
   */
  bespoke?: boolean;

  /**
   * Body param: User defined fields enabling you to attach custom data. The value
   * for a custom field can be either a string or a number.
   *
   * If `customFields` can also be defined for this entity at the Organizational
   * level, `customField` values defined at individual level override values of
   * `customFields` with the same name defined at Organization level.
   *
   * See
   * [Working with Custom Fields](https://www.m3ter.com/docs/guides/creating-and-managing-products/working-with-custom-fields)
   * in the m3ter documentation for more information.
   */
  customFields?: { [key: string]: string | number };

  /**
   * Body param: The product minimum spend amount per billing cycle for end customer
   * Accounts on a priced Plan.
   *
   * _(Optional)_. Overrides PlanTemplate value.
   */
  minimumSpend?: number;

  /**
   * Body param: Optional Product ID this plan's minimum spend should be attributed
   * to for accounting purposes
   */
  minimumSpendAccountingProductId?: string;

  /**
   * Body param: When TRUE, minimum spend is billed at the start of each billing
   * period.
   *
   * When FALSE, minimum spend is billed at the end of each billing period.
   *
   * _(Optional)_. Overrides the setting at PlanTemplate level for minimum spend
   * billing in arrears/in advance.
   */
  minimumSpendBillInAdvance?: boolean;

  /**
   * Body param: Minimum spend description _(displayed on the bill line item)_.
   */
  minimumSpendDescription?: string;

  /**
   * Body param: Assigns a rank or position to the Plan in your order of pricing
   * plans - lower numbers represent more basic pricing plans; higher numbers
   * represent more premium pricing plans.
   *
   * _(Optional)_. Overrides PlanTemplate value.
   *
   * **NOTE: DEPRECATED** - do not use.
   */
  ordinal?: number;

  /**
   * Body param: The standing charge applied to bills for end customers. This is
   * prorated.
   *
   * _(Optional)_. Overrides PlanTemplate value.
   */
  standingCharge?: number;

  /**
   * Body param: Optional Product ID this plan's standing charge should be attributed
   * to for accounting purposes
   */
  standingChargeAccountingProductId?: string;

  /**
   * Body param: When TRUE, standing charge is billed at the start of each billing
   * period.
   *
   * When FALSE, standing charge is billed at the end of each billing period.
   *
   * _(Optional)_. Overrides the setting at PlanTemplate level for standing charge
   * billing in arrears/in advance.
   */
  standingChargeBillInAdvance?: boolean;

  /**
   * Body param: Standing charge description _(displayed on the bill line item)_.
   */
  standingChargeDescription?: string;

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

export interface PlanRetrieveParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface PlanUpdateParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param: Unique short code reference for the Plan.
   */
  code: string;

  /**
   * Body param: Descriptive name for the Plan.
   */
  name: string;

  /**
   * Body param: UUID of the PlanTemplate the Plan belongs to.
   */
  planTemplateId: string;

  /**
   * Body param: _(Optional)_. Used to specify an Account for which the Plan will be
   * a custom/bespoke Plan:
   *
   * - Use when first creating a Plan.
   * - A custom/bespoke Plan can only be attached to the specified Account.
   * - Once created, a custom/bespoke Plan cannot be updated to be made a
   *   custom/bespoke Plan for a different Account.
   */
  accountId?: string;

  /**
   * Body param: TRUE/FALSE flag indicating whether the plan is a custom/bespoke Plan
   * for a particular Account:
   *
   * - When creating a Plan, use the `accountId` request parameter to specify the
   *   Account for which the Plan will be custom/bespoke.
   * - A custom/bespoke Plan can only be attached to the specified Account.
   */
  bespoke?: boolean;

  /**
   * Body param: User defined fields enabling you to attach custom data. The value
   * for a custom field can be either a string or a number.
   *
   * If `customFields` can also be defined for this entity at the Organizational
   * level, `customField` values defined at individual level override values of
   * `customFields` with the same name defined at Organization level.
   *
   * See
   * [Working with Custom Fields](https://www.m3ter.com/docs/guides/creating-and-managing-products/working-with-custom-fields)
   * in the m3ter documentation for more information.
   */
  customFields?: { [key: string]: string | number };

  /**
   * Body param: The product minimum spend amount per billing cycle for end customer
   * Accounts on a priced Plan.
   *
   * _(Optional)_. Overrides PlanTemplate value.
   */
  minimumSpend?: number;

  /**
   * Body param: Optional Product ID this plan's minimum spend should be attributed
   * to for accounting purposes
   */
  minimumSpendAccountingProductId?: string;

  /**
   * Body param: When TRUE, minimum spend is billed at the start of each billing
   * period.
   *
   * When FALSE, minimum spend is billed at the end of each billing period.
   *
   * _(Optional)_. Overrides the setting at PlanTemplate level for minimum spend
   * billing in arrears/in advance.
   */
  minimumSpendBillInAdvance?: boolean;

  /**
   * Body param: Minimum spend description _(displayed on the bill line item)_.
   */
  minimumSpendDescription?: string;

  /**
   * Body param: Assigns a rank or position to the Plan in your order of pricing
   * plans - lower numbers represent more basic pricing plans; higher numbers
   * represent more premium pricing plans.
   *
   * _(Optional)_. Overrides PlanTemplate value.
   *
   * **NOTE: DEPRECATED** - do not use.
   */
  ordinal?: number;

  /**
   * Body param: The standing charge applied to bills for end customers. This is
   * prorated.
   *
   * _(Optional)_. Overrides PlanTemplate value.
   */
  standingCharge?: number;

  /**
   * Body param: Optional Product ID this plan's standing charge should be attributed
   * to for accounting purposes
   */
  standingChargeAccountingProductId?: string;

  /**
   * Body param: When TRUE, standing charge is billed at the start of each billing
   * period.
   *
   * When FALSE, standing charge is billed at the end of each billing period.
   *
   * _(Optional)_. Overrides the setting at PlanTemplate level for standing charge
   * billing in arrears/in advance.
   */
  standingChargeBillInAdvance?: boolean;

  /**
   * Body param: Standing charge description _(displayed on the bill line item)_.
   */
  standingChargeDescription?: string;

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

export interface PlanListParams extends CursorParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Query param: List of Account IDs the Plan belongs to.
   */
  accountId?: Array<string>;

  /**
   * Query param: List of Plan IDs to retrieve.
   */
  ids?: Array<string>;

  /**
   * Query param: UUID of the Product to retrieve Plans for.
   */
  productId?: string;
}

export interface PlanDeleteParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export declare namespace Plans {
  export {
    type PlanResponse as PlanResponse,
    type PlanResponsesCursor as PlanResponsesCursor,
    type PlanCreateParams as PlanCreateParams,
    type PlanRetrieveParams as PlanRetrieveParams,
    type PlanUpdateParams as PlanUpdateParams,
    type PlanListParams as PlanListParams,
    type PlanDeleteParams as PlanDeleteParams,
  };
}
