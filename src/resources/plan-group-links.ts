// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { Cursor, type CursorParams } from '../pagination';

export class PlanGroupLinks extends APIResource {
  /**
   * Create a new PlanGroupLink.
   */
  create(
    params: PlanGroupLinkCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PlanGroupLinkResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.post(`/organizations/${orgId}/plangrouplinks`, { body, ...options });
  }

  /**
   * Retrieve a PlanGroupLink for the given UUID.
   */
  retrieve(
    id: string,
    params?: PlanGroupLinkRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PlanGroupLinkResponse>;
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<PlanGroupLinkResponse>;
  retrieve(
    id: string,
    params: PlanGroupLinkRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PlanGroupLinkResponse> {
    if (isRequestOptions(params)) {
      return this.retrieve(id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.get(`/organizations/${orgId}/plangrouplinks/${id}`, options);
  }

  /**
   * Update PlanGroupLink for the given UUID.
   */
  update(
    id: string,
    params: PlanGroupLinkUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PlanGroupLinkResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.put(`/organizations/${orgId}/plangrouplinks/${id}`, { body, ...options });
  }

  /**
   * Retrieve a list of PlanGroupLink entities
   */
  list(
    params?: PlanGroupLinkListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PlanGroupLinkResponsesCursor, PlanGroupLinkResponse>;
  list(options?: Core.RequestOptions): Core.PagePromise<PlanGroupLinkResponsesCursor, PlanGroupLinkResponse>;
  list(
    params: PlanGroupLinkListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<PlanGroupLinkResponsesCursor, PlanGroupLinkResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { orgId = this._client.orgId, ...query } = params;
    return this._client.getAPIList(`/organizations/${orgId}/plangrouplinks`, PlanGroupLinkResponsesCursor, {
      query,
      ...options,
    });
  }

  /**
   * Delete a PlanGroupLink for the given UUID.
   */
  delete(
    id: string,
    params?: PlanGroupLinkDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PlanGroupLinkResponse>;
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<PlanGroupLinkResponse>;
  delete(
    id: string,
    params: PlanGroupLinkDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PlanGroupLinkResponse> {
    if (isRequestOptions(params)) {
      return this.delete(id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.delete(`/organizations/${orgId}/plangrouplinks/${id}`, options);
  }
}

export class PlanGroupLinkResponsesCursor extends Cursor<PlanGroupLinkResponse> {}

export interface PlanGroupLinkResponse {
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
   * The id of the user who created this plan group link.
   */
  createdBy?: string;

  /**
   * The DateTime _(in ISO-8601 format)_ when the plan group link was created.
   */
  dtCreated?: string;

  /**
   * The DateTime _(in ISO-8601 format)_ when the plan group link was last modified.
   */
  dtLastModified?: string;

  /**
   * The id of the user who last modified this plan group link.
   */
  lastModifiedBy?: string;

  /**
   * ID of the linked PlanGroup
   */
  planGroupId?: string;

  /**
   * ID of the linked Plan
   */
  planId?: string;
}

export interface PlanGroupLinkCreateParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param:
   */
  planGroupId: string;

  /**
   * Body param:
   */
  planId: string;

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

export interface PlanGroupLinkRetrieveParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface PlanGroupLinkUpdateParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param:
   */
  planGroupId: string;

  /**
   * Body param:
   */
  planId: string;

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

export interface PlanGroupLinkListParams extends CursorParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Query param: list of IDs to retrieve
   */
  ids?: Array<string>;

  /**
   * Query param: UUID of the Plan to retrieve PlanGroupLinks for
   */
  plan?: string;

  /**
   * Query param: UUID of the PlanGroup to retrieve PlanGroupLinks for
   */
  planGroup?: string;
}

export interface PlanGroupLinkDeleteParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

PlanGroupLinks.PlanGroupLinkResponsesCursor = PlanGroupLinkResponsesCursor;

export declare namespace PlanGroupLinks {
  export {
    type PlanGroupLinkResponse as PlanGroupLinkResponse,
    PlanGroupLinkResponsesCursor as PlanGroupLinkResponsesCursor,
    type PlanGroupLinkCreateParams as PlanGroupLinkCreateParams,
    type PlanGroupLinkRetrieveParams as PlanGroupLinkRetrieveParams,
    type PlanGroupLinkUpdateParams as PlanGroupLinkUpdateParams,
    type PlanGroupLinkListParams as PlanGroupLinkListParams,
    type PlanGroupLinkDeleteParams as PlanGroupLinkDeleteParams,
  };
}
