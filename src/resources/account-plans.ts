// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { Cursor, type CursorParams } from '../pagination';

export class AccountPlans extends APIResource {
  /**
   * Create a new AccountPlan or AccountPlanGroup.
   *
   * This endpoint creates a new AccountPlan or AccountPlanGroup for a specific
   * Account in your Organization. The details of the new AccountPlan or
   * AccountPlanGroup should be supplied in the request body.
   *
   * **Note:** You cannot use this call to create _both_ an AccountPlan and
   * AccountPlanGroup for an Account at the same time. If you want to create both for
   * an Account, you must submit two separate calls.
   */
  create(
    params: AccountPlanCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountPlanResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.post(`/organizations/${orgId}/accountplans`, { body, ...options });
  }

  /**
   * Retrieve the AccountPlan or AccountPlanGroup details corresponding to the given
   * UUID.
   */
  retrieve(
    id: string,
    params?: AccountPlanRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountPlanResponse>;
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<AccountPlanResponse>;
  retrieve(
    id: string,
    params: AccountPlanRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountPlanResponse> {
    if (isRequestOptions(params)) {
      return this.retrieve(id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.get(`/organizations/${orgId}/accountplans/${id}`, options);
  }

  /**
   * Update the AccountPlan or AccountPlanGroup with the given UUID.
   *
   * This endpoint updates a new AccountPlan or AccountPlanGroup for a specific
   * Account in your Organization. The updated information should be provided in the
   * request body.
   *
   * **Notes:**
   *
   * - You cannot use this call to update _both_ an AccountPlan and AccountPlanGroup
   *   for an Account at the same time. If you want to update an AccounPlan and an
   *   AccountPlanGroup attached to an Account, you must submit two separate calls.
   * - If you have created Custom Fields for an AccountPlan, when you use this
   *   endpoint to update the AccountPlan use the `customFields` parameter to
   *   preserve those Custom Fields. If you omit them from the update request, they
   *   will be lost.
   */
  update(
    id: string,
    params: AccountPlanUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountPlanResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.put(`/organizations/${orgId}/accountplans/${id}`, { body, ...options });
  }

  /**
   * Retrieve a list of AccountPlan and AccountPlanGroup entities for the specified
   * Organization.
   *
   * This endpoint retrieves a list of AccountPlans and AccountPlanGroups for a
   * specific Organization. The list can be paginated for easier management, and
   * supports filtering with various parameters.
   *
   * **NOTE:** You cannot use the `product` query parameter as a single filter
   * condition, but must always use it in combination with the `account` query
   * parameter.
   */
  list(
    params?: AccountPlanListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AccountPlanResponsesCursor, AccountPlanResponse>;
  list(options?: Core.RequestOptions): Core.PagePromise<AccountPlanResponsesCursor, AccountPlanResponse>;
  list(
    params: AccountPlanListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<AccountPlanResponsesCursor, AccountPlanResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { orgId = this._client.orgId, ...query } = params;
    return this._client.getAPIList(`/organizations/${orgId}/accountplans`, AccountPlanResponsesCursor, {
      query,
      ...options,
    });
  }

  /**
   * Delete the AccountPlan or AccountPlanGroup with the given UUID.
   *
   * This endpoint deletes an AccountPlan or AccountPlanGroup that has been attached
   * to a specific Account in your Organization.
   */
  delete(
    id: string,
    params?: AccountPlanDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountPlanResponse>;
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<AccountPlanResponse>;
  delete(
    id: string,
    params: AccountPlanDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountPlanResponse> {
    if (isRequestOptions(params)) {
      return this.delete(id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.delete(`/organizations/${orgId}/accountplans/${id}`, options);
  }
}

export class AccountPlanResponsesCursor extends Cursor<AccountPlanResponse> {}

export interface AccountPlanResponse {
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
   * The unique identifier (UUID) for the Account to which the AccountPlan or
   * AccounPlanGroup is attached.
   */
  accountId?: string;

  /**
   * The initial date for creating the first bill against the Account for charges due
   * under the AccountPlan or AccountPlanGroup. All subsequent bill creation dates
   * are calculated from this date. If left empty, the first bill date definedfor the
   * Account is used. The date is in ISO-8601 format.
   */
  billEpoch?: string;

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
   * The unique short code of the AccountPlan or AccountPlanGroup.
   */
  code?: string;

  /**
   * The unique identifier (UUID) for the Contract to which the Plan or Plan Group
   * attached to the Account has been added.
   */
  contractId?: string;

  /**
   * The unique identifier (UUID) for the user who created the AccountPlan or
   * AccountPlanGroup.
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
  customFields?: Record<string, string | number>;

  /**
   * The date and time _(in ISO 8601 format)_ when the AccountPlan or
   * AccountPlanGroup was first created.
   */
  dtCreated?: string;

  /**
   * The date and time _(in ISO 8601 format)_ when the AccountPlan or
   * AccountPlanGroup was last modified.
   */
  dtLastModified?: string;

  /**
   * The end date _(in ISO-8601 format)_ for when the AccountPlan or AccountPlanGroup
   * ceases to be active for the Account. If not specified, the AccountPlan or
   * AccountPlanGroup remains active indefinitely.
   */
  endDate?: string;

  /**
   * The unique identifier (UUID) for the user who last modified the AccountPlan or
   * AccountPlanGroup.
   */
  lastModifiedBy?: string;

  /**
   * The unique identifier (UUID) of the Plan Group that has been attached to the
   * Account to create the AccountPlanGroup.
   */
  planGroupId?: string;

  /**
   * The unique identifier (UUID) of the Plan that has been attached to the Account
   * to create the AccountPlan.
   */
  planId?: string;

  /**
   * The unique identifier (UUID) for the Product associated with the AccountPlan.
   *
   * **Note:** Not present in response for AccountPlanGroup - Plan Groups can contain
   * multiple Plans belonging to different Products.
   */
  productId?: string;

  /**
   * The start date _(in ISO-8601 format)_ for the when the AccountPlan or
   * AccountPlanGroup starts to be active for the Account.
   */
  startDate?: string;
}

export interface AccountPlanCreateParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param: The unique identifier (UUID) for the Account.
   */
  accountId: string;

  /**
   * Body param: The start date _(in ISO-8601 format)_ for the AccountPlan or
   * AccountPlanGroup becoming active for the Account.
   */
  startDate: string;

  /**
   * Body param: Optional setting to define a _billing cycle date_, which acts as a
   * reference for when in the applied billing frequency period bills are created:
   *
   * - For example, if you attach a Plan to an Account where the Plan is configured
   *   for monthly billing frequency and you've defined the period the Plan will
   *   apply to the Account to be from January 1st, 2022 until January 1st, 2023. You
   *   then set a `billEpoch` date of February 15th, 2022. The first Bill will be
   *   created for the Account on February 15th, and subsequent Bills created on the
   *   15th of the months following for the remainder of the billing period - March
   *   15th, April 15th, and so on.
   * - If not defined, then the `billEpoch` date set for the Account will be used
   *   instead.
   * - The date is in ISO-8601 format.
   */
  billEpoch?: string;

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
   * Body param: A unique short code for the AccountPlan or AccountPlanGroup.
   */
  code?: string;

  /**
   * Body param: The unique identifier (UUID) for a Contract to which you want to add
   * the Plan or Plan Group being attached to the Account.
   */
  contractId?: string;

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
  customFields?: Record<string, string | number>;

  /**
   * Body param: The end date _(in ISO-8601 format)_ for when the AccountPlan or
   * AccountPlanGroup ceases to be active for the Account. If not specified, the
   * AccountPlan or AccountPlanGroup remains active indefinitely.
   */
  endDate?: string;

  /**
   * Body param: The unique identifier (UUID) of the PlanGroup to be attached to the
   * Account to create an AccountPlanGroup.
   *
   * **Note:** Exclusive of the `planId` request parameter - exactly one of `planId`
   * or `planGroupId` must be used per call.
   */
  planGroupId?: string;

  /**
   * Body param: The unique identifier (UUID) of the Plan to be attached to the
   * Account to create an AccountPlan.
   *
   * **Note:** Exclusive of the `planGroupId` request parameter - exactly one of
   * `planId` or `planGroupId` must be used per call.
   */
  planId?: string;

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

export interface AccountPlanRetrieveParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface AccountPlanUpdateParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param: The unique identifier (UUID) for the Account.
   */
  accountId: string;

  /**
   * Body param: The start date _(in ISO-8601 format)_ for the AccountPlan or
   * AccountPlanGroup becoming active for the Account.
   */
  startDate: string;

  /**
   * Body param: Optional setting to define a _billing cycle date_, which acts as a
   * reference for when in the applied billing frequency period bills are created:
   *
   * - For example, if you attach a Plan to an Account where the Plan is configured
   *   for monthly billing frequency and you've defined the period the Plan will
   *   apply to the Account to be from January 1st, 2022 until January 1st, 2023. You
   *   then set a `billEpoch` date of February 15th, 2022. The first Bill will be
   *   created for the Account on February 15th, and subsequent Bills created on the
   *   15th of the months following for the remainder of the billing period - March
   *   15th, April 15th, and so on.
   * - If not defined, then the `billEpoch` date set for the Account will be used
   *   instead.
   * - The date is in ISO-8601 format.
   */
  billEpoch?: string;

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
   * Body param: A unique short code for the AccountPlan or AccountPlanGroup.
   */
  code?: string;

  /**
   * Body param: The unique identifier (UUID) for a Contract to which you want to add
   * the Plan or Plan Group being attached to the Account.
   */
  contractId?: string;

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
  customFields?: Record<string, string | number>;

  /**
   * Body param: The end date _(in ISO-8601 format)_ for when the AccountPlan or
   * AccountPlanGroup ceases to be active for the Account. If not specified, the
   * AccountPlan or AccountPlanGroup remains active indefinitely.
   */
  endDate?: string;

  /**
   * Body param: The unique identifier (UUID) of the PlanGroup to be attached to the
   * Account to create an AccountPlanGroup.
   *
   * **Note:** Exclusive of the `planId` request parameter - exactly one of `planId`
   * or `planGroupId` must be used per call.
   */
  planGroupId?: string;

  /**
   * Body param: The unique identifier (UUID) of the Plan to be attached to the
   * Account to create an AccountPlan.
   *
   * **Note:** Exclusive of the `planGroupId` request parameter - exactly one of
   * `planId` or `planGroupId` must be used per call.
   */
  planId?: string;

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

export interface AccountPlanListParams extends CursorParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Query param: The unique identifier (UUID) for the Account whose AccountPlans and
   * AccountPlanGroups you want to retrieve.
   */
  account?: string;

  /**
   * Query param:
   */
  contract?: string | null;

  /**
   * Query param: The specific date for which you want to retrieve active
   * AccountPlans and AccountPlanGroups.
   */
  date?: string;

  /**
   * Query param: A list of unique identifiers (UUIDs) for specific AccountPlans and
   * AccountPlanGroups you want to retrieve.
   */
  ids?: Array<string>;

  /**
   * Query param: A Boolean flag that specifies whether to include both active and
   * inactive AccountPlans and AccountPlanGroups in the list.
   *
   * - **TRUE** - both active and inactive AccountPlans and AccountPlanGroups are
   *   included in the list.
   * - **FALSE** - only active AccountPlans and AccountPlanGroups are retrieved in
   *   the list.
   */
  includeall?: boolean;

  /**
   * Query param: The unique identifier (UUID) for the Plan or Plan Group whose
   * associated AccountPlans or AccountPlanGroups you want to retrieve.
   */
  plan?: string;

  /**
   * Query param: The unique identifier (UUID) for the Product whose associated
   * AccountPlans you want to retrieve.
   *
   * **NOTE:** You cannot use the `product` query parameter as a single filter
   * condition, but must always use it in combination with the `account` query
   * parameter.
   */
  product?: string;
}

export interface AccountPlanDeleteParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

AccountPlans.AccountPlanResponsesCursor = AccountPlanResponsesCursor;

export declare namespace AccountPlans {
  export {
    type AccountPlanResponse as AccountPlanResponse,
    AccountPlanResponsesCursor as AccountPlanResponsesCursor,
    type AccountPlanCreateParams as AccountPlanCreateParams,
    type AccountPlanRetrieveParams as AccountPlanRetrieveParams,
    type AccountPlanUpdateParams as AccountPlanUpdateParams,
    type AccountPlanListParams as AccountPlanListParams,
    type AccountPlanDeleteParams as AccountPlanDeleteParams,
  };
}
