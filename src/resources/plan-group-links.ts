// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class PlanGroupLinks extends APIResource {
  /**
   * Create a new PlanGroupLink.
   */
  create(params: PlanGroupLinkCreateParams, options?: RequestOptions): APIPromise<PlanGroupLinkResponse> {
    const { orgId = this._client.orgID, ...body } = params;
    return this._client.post(path`/organizations/${orgId}/plangrouplinks`, { body, ...options });
  }

  /**
   * Retrieve a PlanGroupLink for the given UUID.
   */
  retrieve(
    id: string,
    params: PlanGroupLinkRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PlanGroupLinkResponse> {
    const { orgId = this._client.orgID } = params ?? {};
    return this._client.get(path`/organizations/${orgId}/plangrouplinks/${id}`, options);
  }

  /**
   * Update PlanGroupLink for the given UUID.
   */
  update(
    id: string,
    params: PlanGroupLinkUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PlanGroupLinkResponse> {
    const { orgId = this._client.orgID, ...body } = params;
    return this._client.put(path`/organizations/${orgId}/plangrouplinks/${id}`, { body, ...options });
  }

  /**
   * Retrieve a list of PlanGroupLink entities
   */
  list(
    params: PlanGroupLinkListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PlanGroupLinkResponsesCursor, PlanGroupLinkResponse> {
    const { orgId = this._client.orgID, ...query } = params ?? {};
    return this._client.getAPIList(
      path`/organizations/${orgId}/plangrouplinks`,
      Cursor<PlanGroupLinkResponse>,
      { query, ...options },
    );
  }

  /**
   * Delete a PlanGroupLink for the given UUID.
   */
  delete(
    id: string,
    params: PlanGroupLinkDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PlanGroupLinkResponse> {
    const { orgId = this._client.orgID } = params ?? {};
    return this._client.delete(path`/organizations/${orgId}/plangrouplinks/${id}`, options);
  }
}

export type PlanGroupLinkResponsesCursor = Cursor<PlanGroupLinkResponse>;

export interface PlanGroupLinkResponse {
  /**
   * The UUID of the entity.
   */
  id: string;

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

export declare namespace PlanGroupLinks {
  export {
    type PlanGroupLinkResponse as PlanGroupLinkResponse,
    type PlanGroupLinkResponsesCursor as PlanGroupLinkResponsesCursor,
    type PlanGroupLinkCreateParams as PlanGroupLinkCreateParams,
    type PlanGroupLinkRetrieveParams as PlanGroupLinkRetrieveParams,
    type PlanGroupLinkUpdateParams as PlanGroupLinkUpdateParams,
    type PlanGroupLinkListParams as PlanGroupLinkListParams,
    type PlanGroupLinkDeleteParams as PlanGroupLinkDeleteParams,
  };
}
