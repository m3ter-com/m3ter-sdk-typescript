// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class CustomFields extends APIResource {
  /**
   * Retrieve all Custom Fields added at Organizational level for the entities that
   * support them.
   *
   * @example
   * ```ts
   * const customFieldsResponse =
   *   await client.customFields.retrieve();
   * ```
   */
  retrieve(
    params?: CustomFieldRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomFieldsResponse>;
  retrieve(options?: Core.RequestOptions): Core.APIPromise<CustomFieldsResponse>;
  retrieve(
    params: CustomFieldRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomFieldsResponse> {
    if (isRequestOptions(params)) {
      return this.retrieve({}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.get(`/organizations/${orgId}/customfields`, options);
  }

  /**
   * Update Custom Fields added at Organization level to entities that support them.
   *
   * @example
   * ```ts
   * const customFieldsResponse =
   *   await client.customFields.update();
   * ```
   */
  update(
    params?: CustomFieldUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomFieldsResponse>;
  update(options?: Core.RequestOptions): Core.APIPromise<CustomFieldsResponse>;
  update(
    params: CustomFieldUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomFieldsResponse> {
    if (isRequestOptions(params)) {
      return this.update({}, params);
    }
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.put(`/organizations/${orgId}/customfields`, { body, ...options });
  }
}

export interface CustomFieldsResponse {
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
   * CustomFields added to Account entities.
   */
  account?: { [key: string]: string | number };

  /**
   * CustomFields added to accountPlan entities.
   */
  accountPlan?: { [key: string]: string | number };

  /**
   * CustomFields added to simple Aggregation entities.
   */
  aggregation?: { [key: string]: string | number };

  /**
   * CustomFields added to Compound Aggregation entities.
   */
  compoundAggregation?: { [key: string]: string | number };

  /**
   * CustomFields added to Contract entities.
   */
  contract?: { [key: string]: string | number };

  /**
   * The id of the user who created this custom field.
   */
  createdBy?: string;

  /**
   * The DateTime when the Organization was created _(in ISO-8601 format)_.
   */
  dtCreated?: string;

  /**
   * The DateTime when a custom field was last modified - created, modified, or
   * deleted - for the Organization _(in ISO-8601 format)_.
   */
  dtLastModified?: string;

  /**
   * The id of the user who last modified this custom field.
   */
  lastModifiedBy?: string;

  /**
   * CustomFields added to Meter entities.
   */
  meter?: { [key: string]: string | number };

  /**
   * CustomFields added to the Organization.
   */
  organization?: { [key: string]: string | number };

  /**
   * CustomFields added to Plan entities.
   */
  plan?: { [key: string]: string | number };

  /**
   * CustomFields added to planTemplate entities.
   */
  planTemplate?: { [key: string]: string | number };

  /**
   * CustomFields added to Product entities.
   */
  product?: { [key: string]: string | number };
}

export interface CustomFieldRetrieveParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface CustomFieldUpdateParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param: Updates to Account entity CustomFields.
   */
  account?: { [key: string]: string | number };

  /**
   * Body param: Updates to AccountPlan entity CustomFields.
   */
  accountPlan?: { [key: string]: string | number };

  /**
   * Body param: Updates to simple Aggregation entity CustomFields.
   */
  aggregation?: { [key: string]: string | number };

  /**
   * Body param: Updates to Compound Aggregation entity CustomFields.
   */
  compoundAggregation?: { [key: string]: string | number };

  /**
   * Body param: Updates to Contract entity CustomFields.
   */
  contract?: { [key: string]: string | number };

  /**
   * Body param: Updates to Meter entity CustomFields.
   */
  meter?: { [key: string]: string | number };

  /**
   * Body param: Updates to Organization CustomFields.
   */
  organization?: { [key: string]: string | number };

  /**
   * Body param: Updates to Plan entity CustomFields.
   */
  plan?: { [key: string]: string | number };

  /**
   * Body param: Updates to planTemplate entity CustomFields.
   */
  planTemplate?: { [key: string]: string | number };

  /**
   * Body param: Updates to Product entity CustomFields.
   */
  product?: { [key: string]: string | number };

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

export declare namespace CustomFields {
  export {
    type CustomFieldsResponse as CustomFieldsResponse,
    type CustomFieldRetrieveParams as CustomFieldRetrieveParams,
    type CustomFieldUpdateParams as CustomFieldUpdateParams,
  };
}
