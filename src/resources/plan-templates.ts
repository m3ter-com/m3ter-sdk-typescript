// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class PlanTemplates extends APIResource {
  /**
   * Create a new PlanTemplate.
   *
   * This endpoint creates a new PlanTemplate within a specific Organization,
   * identified by its unique UUID. The request body should contain the necessary
   * information for the new PlanTemplate.
   *
   * @example
   * ```ts
   * const planTemplateResponse =
   *   await client.planTemplates.create({
   *     billFrequency: 'DAILY',
   *     currency: 'xxx',
   *     name: 'x',
   *     productId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
   *     standingCharge: 0,
   *   });
   * ```
   */
  create(params: PlanTemplateCreateParams, options?: RequestOptions): APIPromise<PlanTemplateResponse> {
    const { orgId = this._client.orgID, ...body } = params;
    return this._client.post(path`/organizations/${orgId}/plantemplates`, { body, ...options });
  }

  /**
   * Retrieve a specific PlanTemplate.
   *
   * This endpoint allows you to retrieve a specific PlanTemplate within a specific
   * Organization, both identified by their unique identifiers (UUIDs).
   *
   * @example
   * ```ts
   * const planTemplateResponse =
   *   await client.planTemplates.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    params: PlanTemplateRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PlanTemplateResponse> {
    const { orgId = this._client.orgID } = params ?? {};
    return this._client.get(path`/organizations/${orgId}/plantemplates/${id}`, options);
  }

  /**
   * Update a specific PlanTemplate.
   *
   * This endpoint enables you to update a specific PlanTemplate within a specific
   * Organization, both identified by their unique identifiers (UUIDs). The request
   * body should contain the updated information for the PlanTemplate.
   *
   * **Note:** If you have created Custom Fields for a Plan Template, when you use
   * this endpoint to update the Plan Template use the `customFields` parameter to
   * preserve those Custom Fields. If you omit them from the update request, they
   * will be lost.
   *
   * @example
   * ```ts
   * const planTemplateResponse =
   *   await client.planTemplates.update('id', {
   *     billFrequency: 'DAILY',
   *     currency: 'xxx',
   *     name: 'x',
   *     productId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
   *     standingCharge: 0,
   *   });
   * ```
   */
  update(
    id: string,
    params: PlanTemplateUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PlanTemplateResponse> {
    const { orgId = this._client.orgID, ...body } = params;
    return this._client.put(path`/organizations/${orgId}/plantemplates/${id}`, { body, ...options });
  }

  /**
   * Retrieve a list of PlanTemplates.
   *
   * This endpoint enables you to retrieve a paginated list of PlanTemplates
   * belonging to a specific Organization, identified by its UUID. You can filter the
   * list by PlanTemplate IDs or Product IDs for more focused retrieval.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const planTemplateResponse of client.planTemplates.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    params: PlanTemplateListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PlanTemplateResponsesCursor, PlanTemplateResponse> {
    const { orgId = this._client.orgID, ...query } = params ?? {};
    return this._client.getAPIList(
      path`/organizations/${orgId}/plantemplates`,
      Cursor<PlanTemplateResponse>,
      { query, ...options },
    );
  }

  /**
   * Delete a specific PlanTemplate.
   *
   * This endpoint enables you to delete a specific PlanTemplate within a specific
   * Organization, both identified by their unique identifiers (UUIDs).
   *
   * @example
   * ```ts
   * const planTemplateResponse =
   *   await client.planTemplates.delete('id');
   * ```
   */
  delete(
    id: string,
    params: PlanTemplateDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PlanTemplateResponse> {
    const { orgId = this._client.orgID } = params ?? {};
    return this._client.delete(path`/organizations/${orgId}/plantemplates/${id}`, options);
  }
}

export type PlanTemplateResponsesCursor = Cursor<PlanTemplateResponse>;

export interface PlanTemplateResponse {
  /**
   * The UUID of the entity.
   */
  id: string;

  /**
   * Determines the frequency at which bills are generated.
   *
   * - **Daily**. Starting at midnight each day, covering the twenty-four hour period
   *   following.
   *
   * - **Weekly**. Starting at midnight on a Monday, covering the seven-day period
   *   following.
   *
   * - **Monthly**. Starting at midnight on the first day of each month, covering the
   *   entire calendar month following.
   *
   * - **Annually**. Starting at midnight on first day of each year covering the
   *   entire calendar year following.
   */
  billFrequency?: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'ANNUALLY' | 'AD_HOC' | 'MIXED';

  /**
   * How often bills are issued. For example, if `billFrequency` is Monthly and
   * `billFrequencyInterval` is 3, bills are issued every three months.
   */
  billFrequencyInterval?: number;

  /**
   * A unique, short code reference for the PlanTemplate. This code should not
   * contain control characters or spaces.
   */
  code?: string;

  /**
   * The unique identifier (UUID) of the user who created this PlanTemplate.
   */
  createdBy?: string;

  /**
   * The ISO currency code for the pricing currency used by Plans based on the Plan
   * Template to define charge rates for Product consumption - for example USD, GBP,
   * EUR.
   */
  currency?: string;

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
   * The date and time _(in ISO-8601 format)_ when the PlanTemplate was created.
   */
  dtCreated?: string;

  /**
   * The date and time _(in ISO-8601 format)_ when the PlanTemplate was last
   * modified.
   */
  dtLastModified?: string;

  /**
   * The unique identifier (UUID) of the user who last modified this PlanTemplate.
   */
  lastModifiedBy?: string;

  /**
   * The Product minimum spend amount per billing cycle for end customer Accounts on
   * a pricing Plan based on the PlanTemplate. This must be a non-negative number.
   */
  minimumSpend?: number;

  /**
   * A boolean that determines when the minimum spend is billed.
   *
   * - TRUE - minimum spend is billed at the start of each billing period.
   * - FALSE - minimum spend is billed at the end of each billing period.
   *
   * Overrides the setting at Organizational level for minimum spend billing in
   * arrears/in advance.
   */
  minimumSpendBillInAdvance?: boolean;

  /**
   * Minimum spend description _(displayed on the bill line item)_.
   */
  minimumSpendDescription?: string;

  /**
   * Descriptive name for the PlanTemplate.
   */
  name?: string;

  /**
   * The ranking of the PlanTemplate among your pricing plans. Lower numbers
   * represent more basic plans, while higher numbers represent premium plans. This
   * must be a non-negative integer.
   *
   * **NOTE:** **DEPRECATED** - no longer used.
   */
  ordinal?: number;

  /**
   * The unique identifier (UUID) of the Product associated with this PlanTemplate.
   */
  productId?: string;

  /**
   * The fixed charge _(standing charge)_ applied to customer bills. This charge is
   * prorated and must be a non-negative number.
   */
  standingCharge?: number;

  /**
   * A boolean that determines when the standing charge is billed.
   *
   * - TRUE - standing charge is billed at the start of each billing period.
   * - FALSE - standing charge is billed at the end of each billing period.
   *
   * Overrides the setting at Organizational level for standing charge billing in
   * arrears/in advance.
   */
  standingChargeBillInAdvance?: boolean;

  /**
   * Standing charge description _(displayed on the bill line item)_.
   */
  standingChargeDescription?: string;

  /**
   * How often the standing charge is applied. For example, if the bill is issued
   * every three months and `standingChargeInterval` is 2, then the standing charge
   * is applied every six months.
   */
  standingChargeInterval?: number;

  /**
   * Defines an offset for when the standing charge is first applied. For example, if
   * the bill is issued every three months and the `standingChargeOfset` is 0, then
   * the charge is applied to the first bill _(at three months)_; if 1, it would be
   * applied to the second bill _(at six months)_, and so on.
   */
  standingChargeOffset?: number;

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

export interface PlanTemplateCreateParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param: Determines the frequency at which bills are generated.
   *
   * - **Daily**. Starting at midnight each day, covering the twenty-four hour period
   *   following.
   *
   * - **Weekly**. Starting at midnight on a Monday, covering the seven-day period
   *   following.
   *
   * - **Monthly**. Starting at midnight on the first day of each month, covering the
   *   entire calendar month following.
   *
   * - **Annually**. Starting at midnight on first day of each year covering the
   *   entire calendar year following.
   */
  billFrequency: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'ANNUALLY' | 'AD_HOC' | 'MIXED';

  /**
   * Body param: The ISO currency code for the currency used to charge end users -
   * for example USD, GBP, EUR. This defines the _pricing currency_ and is inherited
   * by any Plans based on the Plan Template.
   *
   * **Notes:**
   *
   * - You can define a currency at Organization-level or Account-level to be used as
   *   the _billing currency_. This can be a different currency to that used for the
   *   Plan as the _pricing currency_.
   * - If the billing currency for an Account is different to the pricing currency
   *   used by a Plan attached to the Account, you must ensure a _currency conversion
   *   rate_ is defined for your Organization to convert the pricing currency into
   *   the billing currency at billing, otherwise Bills will fail for the Account.
   * - To define any required currency conversion rates, use the
   *   `currencyConversions` request body parameter for the
   *   [Update OrganizationConfig](https://www.m3ter.com/docs/api#tag/OrganizationConfig/operation/UpdateOrganizationConfig)
   *   call.
   */
  currency: string;

  /**
   * Body param: Descriptive name for the PlanTemplate.
   */
  name: string;

  /**
   * Body param: The unique identifier (UUID) of the Product associated with this
   * PlanTemplate.
   */
  productId: string;

  /**
   * Body param: The fixed charge _(standing charge)_ applied to customer bills. This
   * charge is prorated and must be a non-negative number.
   */
  standingCharge: number;

  /**
   * Body param: How often bills are issued. For example, if `billFrequency` is
   * Monthly and `billFrequencyInterval` is 3, bills are issued every three months.
   */
  billFrequencyInterval?: number;

  /**
   * Body param: A unique, short code reference for the PlanTemplate. This code
   * should not contain control characters or spaces.
   */
  code?: string;

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
   * Body param: The Product minimum spend amount per billing cycle for end customer
   * Accounts on a pricing Plan based on the PlanTemplate. This must be a
   * non-negative number.
   */
  minimumSpend?: number;

  /**
   * Body param: A boolean that determines when the minimum spend is billed.
   *
   * - TRUE - minimum spend is billed at the start of each billing period.
   * - FALSE - minimum spend is billed at the end of each billing period.
   *
   * Overrides the setting at Organizational level for minimum spend billing in
   * arrears/in advance.
   */
  minimumSpendBillInAdvance?: boolean;

  /**
   * Body param: Minimum spend description _(displayed on the bill line item)_.
   */
  minimumSpendDescription?: string;

  /**
   * Body param: The ranking of the PlanTemplate among your pricing plans. Lower
   * numbers represent more basic plans, while higher numbers represent premium
   * plans. This must be a non-negative integer.
   *
   * **NOTE: DEPRECATED** - do not use.
   */
  ordinal?: number;

  /**
   * Body param: A boolean that determines when the standing charge is billed.
   *
   * - TRUE - standing charge is billed at the start of each billing period.
   * - FALSE - standing charge is billed at the end of each billing period.
   *
   * Overrides the setting at Organizational level for standing charge billing in
   * arrears/in advance.
   */
  standingChargeBillInAdvance?: boolean;

  /**
   * Body param: Standing charge description _(displayed on the bill line item)_.
   */
  standingChargeDescription?: string;

  /**
   * Body param: How often the standing charge is applied. For example, if the bill
   * is issued every three months and `standingChargeInterval` is 2, then the
   * standing charge is applied every six months.
   */
  standingChargeInterval?: number;

  /**
   * Body param: Defines an offset for when the standing charge is first applied. For
   * example, if the bill is issued every three months and the `standingChargeOfset`
   * is 0, then the charge is applied to the first bill _(at three months)_; if 1, it
   * would be applied to the second bill _(at six months)_, and so on.
   */
  standingChargeOffset?: number;

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

export interface PlanTemplateRetrieveParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface PlanTemplateUpdateParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param: Determines the frequency at which bills are generated.
   *
   * - **Daily**. Starting at midnight each day, covering the twenty-four hour period
   *   following.
   *
   * - **Weekly**. Starting at midnight on a Monday, covering the seven-day period
   *   following.
   *
   * - **Monthly**. Starting at midnight on the first day of each month, covering the
   *   entire calendar month following.
   *
   * - **Annually**. Starting at midnight on first day of each year covering the
   *   entire calendar year following.
   */
  billFrequency: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'ANNUALLY' | 'AD_HOC' | 'MIXED';

  /**
   * Body param: The ISO currency code for the currency used to charge end users -
   * for example USD, GBP, EUR. This defines the _pricing currency_ and is inherited
   * by any Plans based on the Plan Template.
   *
   * **Notes:**
   *
   * - You can define a currency at Organization-level or Account-level to be used as
   *   the _billing currency_. This can be a different currency to that used for the
   *   Plan as the _pricing currency_.
   * - If the billing currency for an Account is different to the pricing currency
   *   used by a Plan attached to the Account, you must ensure a _currency conversion
   *   rate_ is defined for your Organization to convert the pricing currency into
   *   the billing currency at billing, otherwise Bills will fail for the Account.
   * - To define any required currency conversion rates, use the
   *   `currencyConversions` request body parameter for the
   *   [Update OrganizationConfig](https://www.m3ter.com/docs/api#tag/OrganizationConfig/operation/UpdateOrganizationConfig)
   *   call.
   */
  currency: string;

  /**
   * Body param: Descriptive name for the PlanTemplate.
   */
  name: string;

  /**
   * Body param: The unique identifier (UUID) of the Product associated with this
   * PlanTemplate.
   */
  productId: string;

  /**
   * Body param: The fixed charge _(standing charge)_ applied to customer bills. This
   * charge is prorated and must be a non-negative number.
   */
  standingCharge: number;

  /**
   * Body param: How often bills are issued. For example, if `billFrequency` is
   * Monthly and `billFrequencyInterval` is 3, bills are issued every three months.
   */
  billFrequencyInterval?: number;

  /**
   * Body param: A unique, short code reference for the PlanTemplate. This code
   * should not contain control characters or spaces.
   */
  code?: string;

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
   * Body param: The Product minimum spend amount per billing cycle for end customer
   * Accounts on a pricing Plan based on the PlanTemplate. This must be a
   * non-negative number.
   */
  minimumSpend?: number;

  /**
   * Body param: A boolean that determines when the minimum spend is billed.
   *
   * - TRUE - minimum spend is billed at the start of each billing period.
   * - FALSE - minimum spend is billed at the end of each billing period.
   *
   * Overrides the setting at Organizational level for minimum spend billing in
   * arrears/in advance.
   */
  minimumSpendBillInAdvance?: boolean;

  /**
   * Body param: Minimum spend description _(displayed on the bill line item)_.
   */
  minimumSpendDescription?: string;

  /**
   * Body param: The ranking of the PlanTemplate among your pricing plans. Lower
   * numbers represent more basic plans, while higher numbers represent premium
   * plans. This must be a non-negative integer.
   *
   * **NOTE: DEPRECATED** - do not use.
   */
  ordinal?: number;

  /**
   * Body param: A boolean that determines when the standing charge is billed.
   *
   * - TRUE - standing charge is billed at the start of each billing period.
   * - FALSE - standing charge is billed at the end of each billing period.
   *
   * Overrides the setting at Organizational level for standing charge billing in
   * arrears/in advance.
   */
  standingChargeBillInAdvance?: boolean;

  /**
   * Body param: Standing charge description _(displayed on the bill line item)_.
   */
  standingChargeDescription?: string;

  /**
   * Body param: How often the standing charge is applied. For example, if the bill
   * is issued every three months and `standingChargeInterval` is 2, then the
   * standing charge is applied every six months.
   */
  standingChargeInterval?: number;

  /**
   * Body param: Defines an offset for when the standing charge is first applied. For
   * example, if the bill is issued every three months and the `standingChargeOfset`
   * is 0, then the charge is applied to the first bill _(at three months)_; if 1, it
   * would be applied to the second bill _(at six months)_, and so on.
   */
  standingChargeOffset?: number;

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

export interface PlanTemplateListParams extends CursorParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Query param: List of specific PlanTemplate UUIDs to retrieve.
   */
  ids?: Array<string>;

  /**
   * Query param: The unique identifiers (UUIDs) of the Products to retrieve
   * associated PlanTemplates.
   */
  productId?: string;
}

export interface PlanTemplateDeleteParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export declare namespace PlanTemplates {
  export {
    type PlanTemplateResponse as PlanTemplateResponse,
    type PlanTemplateResponsesCursor as PlanTemplateResponsesCursor,
    type PlanTemplateCreateParams as PlanTemplateCreateParams,
    type PlanTemplateRetrieveParams as PlanTemplateRetrieveParams,
    type PlanTemplateUpdateParams as PlanTemplateUpdateParams,
    type PlanTemplateListParams as PlanTemplateListParams,
    type PlanTemplateDeleteParams as PlanTemplateDeleteParams,
  };
}
