// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Contracts extends APIResource {
  /**
   * Create a new Contract.
   *
   * Creates a new Contract for the specified Account. The Contract includes
   * information such as the associated Account along with start and end dates.
   */
  create(params: ContractCreateParams, options?: RequestOptions): APIPromise<ContractResponse> {
    const { orgId = this._client.orgID, ...body } = params;
    return this._client.post(path`/organizations/${orgId}/contracts`, { body, ...options });
  }

  /**
   * Retrieves the Contract with the given UUID. Used to obtain the details of a
   * Contract.
   */
  retrieve(
    id: string,
    params: ContractRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ContractResponse> {
    const { orgId = this._client.orgID } = params ?? {};
    return this._client.get(path`/organizations/${orgId}/contracts/${id}`, options);
  }

  /**
   * Update the Contract with the given UUID.
   *
   * This endpoint updates the details of the Contract with the specified ID. Used to
   * modify details of an existing Contract such as the start or end dates.
   *
   * **Note:** If you have created Custom Fields for a Contract, when you use this
   * endpoint to update the Contract use the `customFields` parameter to preserve
   * those Custom Fields. If you omit them from the update request, they will be
   * lost.
   */
  update(id: string, params: ContractUpdateParams, options?: RequestOptions): APIPromise<ContractResponse> {
    const { orgId = this._client.orgID, ...body } = params;
    return this._client.put(path`/organizations/${orgId}/contracts/${id}`, { body, ...options });
  }

  /**
   * Retrieves a list of Contracts by Organization ID. Supports pagination and
   * includes various query parameters to filter the Contracts returned based on
   * Contract IDs or short codes.
   */
  list(
    params: ContractListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ContractResponsesCursor, ContractResponse> {
    const { orgId = this._client.orgID, ...query } = params ?? {};
    return this._client.getAPIList(path`/organizations/${orgId}/contracts`, Cursor<ContractResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Deletes the Contract with the specified UUID. Used to remove an existing
   * Contract from an Account.
   *
   * **Note:** This call will fail if there are any AccountPlans or Commitments that
   * have been added to the Contract.
   */
  delete(
    id: string,
    params: ContractDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ContractResponse> {
    const { orgId = this._client.orgID } = params ?? {};
    return this._client.delete(path`/organizations/${orgId}/contracts/${id}`, options);
  }

  /**
   * Apply the specified end-date to billing entities associated with Accounts the
   * Contract has been added to, and apply the end-date to the Contract itself.
   *
   * **NOTES:**
   *
   * - If you want to apply the end-date to the Contract _itself_ - the Contract `id`
   *   you use as the required PATH PARAMETER - you must also specify `CONTRACT` as a
   *   `billingEntities` option in the request body schema.
   * - Only the Contract whose id you specify for the PATH PARAMETER will be
   *   end-dated. If there are other Contracts associated with the Account, these
   *   will not be end-dated.
   * - When you successfully end-date billing entities, the version number of each
   *   entity is incremented.
   */
  endDateBillingEntities(
    id: string,
    params: ContractEndDateBillingEntitiesParams,
    options?: RequestOptions,
  ): APIPromise<ContractEndDateBillingEntitiesResponse> {
    const { orgId = this._client.orgID, ...body } = params;
    return this._client.put(path`/organizations/${orgId}/contracts/${id}/enddatebillingentities`, {
      body,
      ...options,
    });
  }
}

export type ContractResponsesCursor = Cursor<ContractResponse>;

export interface ContractResponse {
  /**
   * The UUID of the entity.
   */
  id: string;

  /**
   * The unique identifier (UUID) of the Account associated with this Contract.
   */
  accountId?: string;

  applyContractPeriodLimits?: boolean;

  billGroupingKeyId?: string;

  /**
   * The short code of the Contract.
   */
  code?: string;

  /**
   * The unique identifier (UUID) of the user who created this Contract.
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
   * The description of the Contract, which provides context and information.
   */
  description?: string;

  /**
   * The date and time _(in ISO-8601 format)_ when the Contract was created.
   */
  dtCreated?: string;

  /**
   * The date and time _(in ISO-8601 format)_ when the Contract was last modified.
   */
  dtLastModified?: string;

  /**
   * The exclusive end date of the Contract _(in ISO-8601 format)_. This means the
   * Contract is active until midnight on the day **_before_** this date.
   */
  endDate?: string;

  /**
   * The unique identifier (UUID) of the user who last modified this Contract.
   */
  lastModifiedBy?: string;

  /**
   * The name of the Contract.
   */
  name?: string;

  /**
   * The Purchase Order Number associated with the Contract.
   */
  purchaseOrderNumber?: string;

  /**
   * The start date for the Contract _(in ISO-8601 format)_. This date is inclusive,
   * meaning the Contract is active from this date onward.
   */
  startDate?: string;

  usageFilters?: Array<ContractResponse.UsageFilter>;

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

export namespace ContractResponse {
  /**
   * Filters that determine which usage records are included in contract billing
   */
  export interface UsageFilter {
    dimensionCode: string;

    mode: 'INCLUDE' | 'EXCLUDE';

    value: string;
  }
}

export interface ContractEndDateBillingEntitiesResponse {
  /**
   * A dictionary with keys as identifiers of billing entities and values as lists
   * containing details of the entities for which the update failed.
   */
  failedEntities?: ContractEndDateBillingEntitiesResponse.FailedEntities;

  /**
   * A message indicating the status of the operation.
   */
  statusMessage?: string;

  /**
   * A dictionary with keys as identifiers of billing entities and values as lists
   * containing details of the updated entities.
   */
  updatedEntities?: ContractEndDateBillingEntitiesResponse.UpdatedEntities;
}

export namespace ContractEndDateBillingEntitiesResponse {
  /**
   * A dictionary with keys as identifiers of billing entities and values as lists
   * containing details of the entities for which the update failed.
   */
  export interface FailedEntities {
    ACCOUNTPLAN?: Shared.SetString;

    CONTRACT?: Shared.SetString;

    COUNTER_PRICINGS?: Shared.SetString;

    PREPAYMENT?: Shared.SetString;

    PRICINGS?: Shared.SetString;
  }

  /**
   * A dictionary with keys as identifiers of billing entities and values as lists
   * containing details of the updated entities.
   */
  export interface UpdatedEntities {
    ACCOUNTPLAN?: Shared.SetString;

    CONTRACT?: Shared.SetString;

    COUNTER_PRICINGS?: Shared.SetString;

    PREPAYMENT?: Shared.SetString;

    PRICINGS?: Shared.SetString;
  }
}

export interface ContractCreateParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param: The unique identifier (UUID) of the Account associated with this
   * Contract.
   */
  accountId: string;

  /**
   * Body param: The exclusive end date of the Contract _(in ISO-8601 format)_. This
   * means the Contract is active until midnight on the day **_before_** this date.
   */
  endDate: string;

  /**
   * Body param: The name of the Contract.
   */
  name: string;

  /**
   * Body param: The start date for the Contract _(in ISO-8601 format)_. This date is
   * inclusive, meaning the Contract is active from this date onward.
   */
  startDate: string;

  /**
   * Body param:
   */
  applyContractPeriodLimits?: boolean;

  /**
   * Body param:
   */
  billGroupingKeyId?: string;

  /**
   * Body param: The short code of the Contract.
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
   * Body param: The description of the Contract, which provides context and
   * information.
   */
  description?: string;

  /**
   * Body param: The Purchase Order Number associated with the Contract.
   */
  purchaseOrderNumber?: string;

  /**
   * Body param:
   */
  usageFilters?: Array<ContractCreateParams.UsageFilter>;

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

export namespace ContractCreateParams {
  /**
   * Filters that determine which usage records are included in contract billing
   */
  export interface UsageFilter {
    dimensionCode: string;

    mode: 'INCLUDE' | 'EXCLUDE';

    value: string;
  }
}

export interface ContractRetrieveParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface ContractUpdateParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param: The unique identifier (UUID) of the Account associated with this
   * Contract.
   */
  accountId: string;

  /**
   * Body param: The exclusive end date of the Contract _(in ISO-8601 format)_. This
   * means the Contract is active until midnight on the day **_before_** this date.
   */
  endDate: string;

  /**
   * Body param: The name of the Contract.
   */
  name: string;

  /**
   * Body param: The start date for the Contract _(in ISO-8601 format)_. This date is
   * inclusive, meaning the Contract is active from this date onward.
   */
  startDate: string;

  /**
   * Body param:
   */
  applyContractPeriodLimits?: boolean;

  /**
   * Body param:
   */
  billGroupingKeyId?: string;

  /**
   * Body param: The short code of the Contract.
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
   * Body param: The description of the Contract, which provides context and
   * information.
   */
  description?: string;

  /**
   * Body param: The Purchase Order Number associated with the Contract.
   */
  purchaseOrderNumber?: string;

  /**
   * Body param:
   */
  usageFilters?: Array<ContractUpdateParams.UsageFilter>;

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

export namespace ContractUpdateParams {
  /**
   * Filters that determine which usage records are included in contract billing
   */
  export interface UsageFilter {
    dimensionCode: string;

    mode: 'INCLUDE' | 'EXCLUDE';

    value: string;
  }
}

export interface ContractListParams extends CursorParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Query param:
   */
  accountId?: string | null;

  /**
   * Query param: An optional parameter to retrieve specific Contracts based on their
   * short codes.
   */
  codes?: Array<string>;

  /**
   * Query param: An optional parameter to filter the list based on specific Contract
   * unique identifiers (UUIDs).
   */
  ids?: Array<string>;
}

export interface ContractDeleteParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface ContractEndDateBillingEntitiesParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param: Defines which billing entities associated with the Account will have
   * the specified end-date applied. For example, if you want the specified end-date
   * to be applied to all Prepayments/Commitments created for the Account use
   * `"PREPAYMENT"`.
   */
  billingEntities: Array<'CONTRACT' | 'ACCOUNTPLAN' | 'PREPAYMENT' | 'PRICINGS' | 'COUNTER_PRICINGS'>;

  /**
   * Body param: The end date and time applied to the specified billing entities _(in
   * ISO 8601 format)_.
   */
  endDate: string;

  /**
   * Body param: A Boolean TRUE/FALSE flag. For Parent Accounts, set to TRUE if you
   * want the specified end-date to be applied to any billing entities associated
   * with Child Accounts. _(Optional)_
   */
  applyToChildren?: boolean;
}

export declare namespace Contracts {
  export {
    type ContractResponse as ContractResponse,
    type ContractEndDateBillingEntitiesResponse as ContractEndDateBillingEntitiesResponse,
    type ContractResponsesCursor as ContractResponsesCursor,
    type ContractCreateParams as ContractCreateParams,
    type ContractRetrieveParams as ContractRetrieveParams,
    type ContractUpdateParams as ContractUpdateParams,
    type ContractListParams as ContractListParams,
    type ContractDeleteParams as ContractDeleteParams,
    type ContractEndDateBillingEntitiesParams as ContractEndDateBillingEntitiesParams,
  };
}
