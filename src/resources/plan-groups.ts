// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { Cursor, type CursorParams } from '../pagination';

export class PlanGroups extends APIResource {
  /**
   * Create a new PlanGroup. This endpoint creates a new PlanGroup within the
   * specified organization.
   */
  create(params: PlanGroupCreateParams, options?: Core.RequestOptions): Core.APIPromise<PlanGroupResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.post(`/organizations/${orgId}/plangroups`, { body, ...options });
  }

  /**
   * Retrieve a specific PlanGroup with the given UUID.
   *
   * This endpoint retrieves detailed information about a specific PlanGroup
   * identified by the given UUID within a specific organization.
   */
  retrieve(
    id: string,
    params?: PlanGroupRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PlanGroupResponse>;
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<PlanGroupResponse>;
  retrieve(
    id: string,
    params: PlanGroupRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PlanGroupResponse> {
    if (isRequestOptions(params)) {
      return this.retrieve(id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.get(`/organizations/${orgId}/plangroups/${id}`, options);
  }

  /**
   * Update the PlanGroup with the given UUID.
   *
   * This endpoint updates the details of a specific PlanGroup identified by the
   * given UUID within a specific organization. This allows modifications to existing
   * PlanGroup attributes.
   *
   * **Note:** If you have created Custom Fields for a PlanGroup, when you use this
   * endpoint to update the PlanGroup use the `customFields` parameter to preserve
   * those Custom Fields. If you omit them from the update request, they will be
   * lost.
   */
  update(
    id: string,
    params: PlanGroupUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PlanGroupResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.put(`/organizations/${orgId}/plangroups/${id}`, { body, ...options });
  }

  /**
   * Retrieve a list of PlanGroups.
   *
   * Retrieves a list of PlanGroups within the specified organization. You can
   * optionally filter by Account IDs or PlanGroup IDs, and also paginate the results
   * for easier management.
   */
  list(
    params?: PlanGroupListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PlanGroupResponsesCursor, PlanGroupResponse>;
  list(options?: Core.RequestOptions): Core.PagePromise<PlanGroupResponsesCursor, PlanGroupResponse>;
  list(
    params: PlanGroupListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<PlanGroupResponsesCursor, PlanGroupResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { orgId = this._client.orgId, ...query } = params;
    return this._client.getAPIList(`/organizations/${orgId}/plangroups`, PlanGroupResponsesCursor, {
      query,
      ...options,
    });
  }

  /**
   * Delete a PlanGroup with the given UUID.
   *
   * This endpoint deletes the PlanGroup identified by the given UUID within a
   * specific organization. This operation is irreversible and removes the PlanGroup
   * along with any associated settings.
   */
  delete(
    id: string,
    params?: PlanGroupDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PlanGroupResponse>;
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<PlanGroupResponse>;
  delete(
    id: string,
    params: PlanGroupDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PlanGroupResponse> {
    if (isRequestOptions(params)) {
      return this.delete(id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.delete(`/organizations/${orgId}/plangroups/${id}`, options);
  }
}

export class PlanGroupResponsesCursor extends Cursor<PlanGroupResponse> {}

export interface PlanGroupResponse {
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
   * Optional. This PlanGroup was created as bespoke for the associated Account with
   * this Account ID.
   */
  accountId?: string;

  /**
   * The short code representing the PlanGroup.
   */
  code?: string;

  /**
   * The unique identifier (UUID) for the user who created the PlanGroup.
   */
  createdBy?: string;

  /**
   * Currency code for the PlanGroup (For example, USD).
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
   * The date and time _(in ISO 8601 format)_ when the PlanGroup was first created.
   */
  dtCreated?: string;

  /**
   * The date and time _(in ISO 8601 format)_ when the PlanGroup was last modified.
   */
  dtLastModified?: string;

  /**
   * The unique identifier (UUID) for the user who last modified the PlanGroup.
   */
  lastModifiedBy?: string;

  /**
   * The minimum spend amount for the PlanGroup.
   */
  minimumSpend?: number;

  /**
   * Optional. Product ID to attribute the PlanGroup's minimum spend for accounting
   * purposes.
   */
  minimumSpendAccountingProductId?: string;

  /**
   * A boolean flag that determines when the minimum spend is billed. This flag
   * overrides the setting at Organizational level for minimum spend billing in
   * arrears/in advance.
   *
   * - **TRUE** - minimum spend is billed at the start of each billing period.
   * - **FALSE** - minimum spend is billed at the end of each billing period.
   */
  minimumSpendBillInAdvance?: boolean;

  /**
   * Description of the minimum spend, displayed on the bill line item.
   */
  minimumSpendDescription?: string;

  /**
   * The name of the PlanGroup.
   */
  name?: string;

  /**
   * Standing charge amount for the PlanGroup.
   */
  standingCharge?: number;

  /**
   * Optional. Product ID to attribute the PlanGroup's standing charge for accounting
   * purposes.
   */
  standingChargeAccountingProductId?: string;

  /**
   * A boolean flag that determines when the standing charge is billed. This flag
   * overrides the setting at Organizational level for standing charge billing in
   * arrears/in advance.
   *
   * - **TRUE** - standing charge is billed at the start of each billing period.
   * - **FALSE** - standing charge is billed at the end of each billing period.
   */
  standingChargeBillInAdvance?: boolean;

  /**
   * Description of the standing charge, displayed on the bill line item.
   */
  standingChargeDescription?: string;
}

export interface PlanGroupCreateParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param: Currency code for the PlanGroup (For example, USD).
   */
  currency: string;

  /**
   * Body param: The name of the PlanGroup.
   */
  name: string;

  /**
   * Body param: Optional. This PlanGroup is created as bespoke for the associated
   * Account with this Account ID.
   */
  accountId?: string;

  /**
   * Body param: The short code representing the PlanGroup.
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
   * Body param: The minimum spend amount for the PlanGroup.
   */
  minimumSpend?: number;

  /**
   * Body param: Optional. Product ID to attribute the PlanGroup's minimum spend for
   * accounting purposes.
   */
  minimumSpendAccountingProductId?: string;

  /**
   * Body param: A boolean flag that determines when the minimum spend is billed.
   * This flag overrides the setting at Organizational level for minimum spend
   * billing in arrears/in advance.
   *
   * - **TRUE** - minimum spend is billed at the start of each billing period.
   * - **FALSE** - minimum spend is billed at the end of each billing period.
   */
  minimumSpendBillInAdvance?: boolean;

  /**
   * Body param: Description of the minimum spend, displayed on the bill line item.
   */
  minimumSpendDescription?: string;

  /**
   * Body param: Standing charge amount for the PlanGroup.
   */
  standingCharge?: number;

  /**
   * Body param: Optional. Product ID to attribute the PlanGroup's standing charge
   * for accounting purposes.
   */
  standingChargeAccountingProductId?: string;

  /**
   * Body param: A boolean flag that determines when the standing charge is billed.
   * This flag overrides the setting at Organizational level for standing charge
   * billing in arrears/in advance.
   *
   * - **TRUE** - standing charge is billed at the start of each billing period.
   * - **FALSE** - standing charge is billed at the end of each billing period.
   */
  standingChargeBillInAdvance?: boolean;

  /**
   * Body param: Description of the standing charge, displayed on the bill line item.
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

export interface PlanGroupRetrieveParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface PlanGroupUpdateParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param: Currency code for the PlanGroup (For example, USD).
   */
  currency: string;

  /**
   * Body param: The name of the PlanGroup.
   */
  name: string;

  /**
   * Body param: Optional. This PlanGroup is created as bespoke for the associated
   * Account with this Account ID.
   */
  accountId?: string;

  /**
   * Body param: The short code representing the PlanGroup.
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
   * Body param: The minimum spend amount for the PlanGroup.
   */
  minimumSpend?: number;

  /**
   * Body param: Optional. Product ID to attribute the PlanGroup's minimum spend for
   * accounting purposes.
   */
  minimumSpendAccountingProductId?: string;

  /**
   * Body param: A boolean flag that determines when the minimum spend is billed.
   * This flag overrides the setting at Organizational level for minimum spend
   * billing in arrears/in advance.
   *
   * - **TRUE** - minimum spend is billed at the start of each billing period.
   * - **FALSE** - minimum spend is billed at the end of each billing period.
   */
  minimumSpendBillInAdvance?: boolean;

  /**
   * Body param: Description of the minimum spend, displayed on the bill line item.
   */
  minimumSpendDescription?: string;

  /**
   * Body param: Standing charge amount for the PlanGroup.
   */
  standingCharge?: number;

  /**
   * Body param: Optional. Product ID to attribute the PlanGroup's standing charge
   * for accounting purposes.
   */
  standingChargeAccountingProductId?: string;

  /**
   * Body param: A boolean flag that determines when the standing charge is billed.
   * This flag overrides the setting at Organizational level for standing charge
   * billing in arrears/in advance.
   *
   * - **TRUE** - standing charge is billed at the start of each billing period.
   * - **FALSE** - standing charge is billed at the end of each billing period.
   */
  standingChargeBillInAdvance?: boolean;

  /**
   * Body param: Description of the standing charge, displayed on the bill line item.
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

export interface PlanGroupListParams extends CursorParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Query param: Optional filter. The list of Account IDs to which the PlanGroups
   * belong.
   */
  accountId?: Array<string>;

  /**
   * Query param: Optional filter. The list of PlanGroup IDs to retrieve.
   */
  ids?: Array<string>;
}

export interface PlanGroupDeleteParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

PlanGroups.PlanGroupResponsesCursor = PlanGroupResponsesCursor;

export declare namespace PlanGroups {
  export {
    type PlanGroupResponse as PlanGroupResponse,
    PlanGroupResponsesCursor as PlanGroupResponsesCursor,
    type PlanGroupCreateParams as PlanGroupCreateParams,
    type PlanGroupRetrieveParams as PlanGroupRetrieveParams,
    type PlanGroupUpdateParams as PlanGroupUpdateParams,
    type PlanGroupListParams as PlanGroupListParams,
    type PlanGroupDeleteParams as PlanGroupDeleteParams,
  };
}
