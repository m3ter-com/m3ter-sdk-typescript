// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class BillConfig extends APIResource {
  /**
   * Retrieve the Organization-wide BillConfig.
   */
  retrieve(
    params?: BillConfigRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillConfigResponse>;
  retrieve(options?: Core.RequestOptions): Core.APIPromise<BillConfigResponse>;
  retrieve(
    params: BillConfigRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillConfigResponse> {
    if (isRequestOptions(params)) {
      return this.retrieve({}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.get(`/organizations/${orgId}/billconfig`, options);
  }

  /**
   * Update the Organization-wide BillConfig.
   *
   * You can use this endpoint to set a global lock date for **all** Bills - any Bill
   * with a service period end date on or before the set date will be locked and
   * cannot be updated or recalculated.
   */
  update(params?: BillConfigUpdateParams, options?: Core.RequestOptions): Core.APIPromise<BillConfigResponse>;
  update(options?: Core.RequestOptions): Core.APIPromise<BillConfigResponse>;
  update(
    params: BillConfigUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillConfigResponse> {
    if (isRequestOptions(params)) {
      return this.update({}, params);
    }
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.put(`/organizations/${orgId}/billconfig`, { body, ...options });
  }
}

export interface BillConfigResponse {
  /**
   * The Organization UUID. The Organization represents your company as a direct
   * customer of the m3ter service.
   */
  id?: string;

  /**
   * The global lock date _(in ISO 8601 format)_ when all Bills will be locked.
   *
   * For example: `"2024-03-01"`.
   */
  billLockDate?: string;

  /**
   * The id of the user who created this bill config.
   */
  createdBy?: string;

  /**
   * The DateTime _(in ISO-8601 format)_ when the bill config was first created.
   */
  dtCreated?: string;

  /**
   * The DateTime _(in ISO-8601 format)_ when the bill config was last modified.
   */
  dtLastModified?: string;

  /**
   * The id of the user who last modified this bill config.
   */
  lastModifiedBy?: string;

  /**
   * The version number:
   *
   * - Default value when newly created is one.
   * - Incremented by 1 each time it is updated.
   */
  version?: number;
}

export interface BillConfigRetrieveParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface BillConfigUpdateParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param: The global lock date when all Bills will be locked _(in ISO 8601
   * format)_.
   *
   * For example: `"2024-03-01"`.
   */
  billLockDate?: string;

  /**
   * Body param: The version number:
   *
   * - Default value when newly created is one.
   * - On Update, version is required and must match the existing version because a
   *   check is performed to ensure sequential versioning is preserved. Version is
   *   incremented by 1 and listed in the response
   */
  version?: number;
}

export declare namespace BillConfig {
  export {
    type BillConfigResponse as BillConfigResponse,
    type BillConfigRetrieveParams as BillConfigRetrieveParams,
    type BillConfigUpdateParams as BillConfigUpdateParams,
  };
}
