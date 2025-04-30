// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { Cursor, type CursorParams } from '../pagination';

export class ExternalMappings extends APIResource {
  /**
   * Creates a new External Mapping.
   *
   * This endpoint enables you to create a new External Mapping for the specified
   * Organization. You need to supply a request body with the details of the new
   * External Mapping.
   */
  create(
    params: ExternalMappingCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExternalMappingResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.post(`/organizations/${orgId}/externalmappings`, { body, ...options });
  }

  /**
   * Retrieve an External Mapping with the given UUID.
   *
   * This endpoint enables you to retrieve the External Mapping with the specified
   * UUID for a specific Organization.
   */
  retrieve(
    id: string,
    params?: ExternalMappingRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExternalMappingResponse>;
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<ExternalMappingResponse>;
  retrieve(
    id: string,
    params: ExternalMappingRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExternalMappingResponse> {
    if (isRequestOptions(params)) {
      return this.retrieve(id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.get(`/organizations/${orgId}/externalmappings/${id}`, options);
  }

  /**
   * Updates an External Mapping with the given UUID.
   *
   * This endpoint enables you to update an existing External Mapping entity,
   * identified by its UUID. You must supply a request body with the new details for
   * the External Mapping.
   */
  update(
    id: string,
    params: ExternalMappingUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExternalMappingResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.put(`/organizations/${orgId}/externalmappings/${id}`, { body, ...options });
  }

  /**
   * Retrieve a list of all External Mapping entities.
   *
   * This endpoint retrieves a list of all External Mapping entities for a specific
   * Organization. The list can be paginated for better management, and supports
   * filtering using the external system.
   */
  list(
    params?: ExternalMappingListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ExternalMappingResponsesCursor, ExternalMappingResponse>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<ExternalMappingResponsesCursor, ExternalMappingResponse>;
  list(
    params: ExternalMappingListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ExternalMappingResponsesCursor, ExternalMappingResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { orgId = this._client.orgId, ...query } = params;
    return this._client.getAPIList(
      `/organizations/${orgId}/externalmappings`,
      ExternalMappingResponsesCursor,
      { query, ...options },
    );
  }

  /**
   * Delete an External Mapping with the given UUID.
   */
  delete(
    id: string,
    params?: ExternalMappingDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExternalMappingResponse>;
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<ExternalMappingResponse>;
  delete(
    id: string,
    params: ExternalMappingDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExternalMappingResponse> {
    if (isRequestOptions(params)) {
      return this.delete(id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.delete(`/organizations/${orgId}/externalmappings/${id}`, options);
  }

  /**
   * Retrieve a list of External Mapping entities for a specified external system
   * entity.
   *
   * Use this endpoint to retrieve a list of External Mapping entities associated
   * with a specific external system entity. The list can be paginated for easier
   * management.
   */
  listByExternalEntity(
    system: string,
    externalTable: string,
    externalId: string,
    params?: ExternalMappingListByExternalEntityParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ExternalMappingResponsesCursor, ExternalMappingResponse>;
  listByExternalEntity(
    system: string,
    externalTable: string,
    externalId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ExternalMappingResponsesCursor, ExternalMappingResponse>;
  listByExternalEntity(
    system: string,
    externalTable: string,
    externalId: string,
    params: ExternalMappingListByExternalEntityParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ExternalMappingResponsesCursor, ExternalMappingResponse> {
    if (isRequestOptions(params)) {
      return this.listByExternalEntity(system, externalTable, externalId, {}, params);
    }
    const { orgId = this._client.orgId, ...query } = params;
    return this._client.getAPIList(
      `/organizations/${orgId}/externalmappings/externalid/${system}/${externalTable}/${externalId}`,
      ExternalMappingResponsesCursor,
      { query, ...options },
    );
  }

  /**
   * Retrieve a list of External Mapping entities for a specified m3ter entity.
   *
   * Use this endpoint to retrieve a list of External Mapping entities associated
   * with a specific m3ter entity. The list can be paginated for easier management.
   */
  listByM3terEntity(
    entity: string,
    m3terId: string,
    params?: ExternalMappingListByM3terEntityParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ExternalMappingResponsesCursor, ExternalMappingResponse>;
  listByM3terEntity(
    entity: string,
    m3terId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ExternalMappingResponsesCursor, ExternalMappingResponse>;
  listByM3terEntity(
    entity: string,
    m3terId: string,
    params: ExternalMappingListByM3terEntityParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ExternalMappingResponsesCursor, ExternalMappingResponse> {
    if (isRequestOptions(params)) {
      return this.listByM3terEntity(entity, m3terId, {}, params);
    }
    const { orgId = this._client.orgId, ...query } = params;
    return this._client.getAPIList(
      `/organizations/${orgId}/externalmappings/external/${entity}/${m3terId}`,
      ExternalMappingResponsesCursor,
      { query, ...options },
    );
  }
}

export class ExternalMappingResponsesCursor extends Cursor<ExternalMappingResponse> {}

export interface ExternalMappingResponse {
  /**
   * The UUID of the entity.
   */
  id: string;

  /**
   * The unique identifier (UUID) of the entity in the external system.
   */
  externalId: string;

  /**
   * The name of the external system where the entity you are mapping resides.
   */
  externalSystem: string;

  /**
   * The name of the table in the external system where the entity resides.
   */
  externalTable: string;

  /**
   * The name of the m3ter entity that is part of the External Mapping. For example,
   * this could be "Account".
   */
  m3terEntity: string;

  /**
   * The unique identifier (UUID) of the m3ter entity.
   */
  m3terId: string;

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
   * The ID of the user who created this item.
   */
  createdBy?: string;

  /**
   * The DateTime when this item was created _(in ISO-8601 format)_.
   */
  dtCreated?: string;

  /**
   * The DateTime when this item was last modified _(in ISO-8601 format)_.
   */
  dtLastModified?: string;

  /**
   * UUID of the configuration this mapping is for
   */
  integrationConfigId?: string;

  /**
   * The ID of the user who last modified this item.
   */
  lastModifiedBy?: string;
}

export interface ExternalMappingCreateParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param: The unique identifier (UUID) of the entity in the external system.
   * This UUID should already exist in the external system.
   */
  externalId: string;

  /**
   * Body param: The name of the external system where the entity you are mapping
   * resides.
   */
  externalSystem: string;

  /**
   * Body param: The name of the table in ther external system where the entity
   * resides.
   */
  externalTable: string;

  /**
   * Body param: The name of the m3ter entity that you are creating or modifying an
   * External Mapping for. As an example, this could be an "Account".
   */
  m3terEntity: string;

  /**
   * Body param: The unique identifier (UUID) of the m3ter entity.
   */
  m3terId: string;

  /**
   * Body param: UUID of the integration config to link this mapping to
   */
  integrationConfigId?: string;

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

export interface ExternalMappingRetrieveParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface ExternalMappingUpdateParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param: The unique identifier (UUID) of the entity in the external system.
   * This UUID should already exist in the external system.
   */
  externalId: string;

  /**
   * Body param: The name of the external system where the entity you are mapping
   * resides.
   */
  externalSystem: string;

  /**
   * Body param: The name of the table in ther external system where the entity
   * resides.
   */
  externalTable: string;

  /**
   * Body param: The name of the m3ter entity that you are creating or modifying an
   * External Mapping for. As an example, this could be an "Account".
   */
  m3terEntity: string;

  /**
   * Body param: The unique identifier (UUID) of the m3ter entity.
   */
  m3terId: string;

  /**
   * Body param: UUID of the integration config to link this mapping to
   */
  integrationConfigId?: string;

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

export interface ExternalMappingListParams extends CursorParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Query param: The name of the external system to use as a filter.
   *
   * For example, if you want to list only those external mappings created for your
   * Organization for the Salesforce external system, use:
   *
   * `?externalSystemId=Salesforce`
   */
  externalSystemId?: string;

  /**
   * Query param: ID of the integration config
   */
  integrationConfigId?: string;

  /**
   * Query param: IDs for m3ter entities
   */
  m3terIds?: Array<string>;
}

export interface ExternalMappingDeleteParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface ExternalMappingListByExternalEntityParams extends CursorParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface ExternalMappingListByM3terEntityParams extends CursorParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

ExternalMappings.ExternalMappingResponsesCursor = ExternalMappingResponsesCursor;

export declare namespace ExternalMappings {
  export {
    type ExternalMappingResponse as ExternalMappingResponse,
    ExternalMappingResponsesCursor as ExternalMappingResponsesCursor,
    type ExternalMappingCreateParams as ExternalMappingCreateParams,
    type ExternalMappingRetrieveParams as ExternalMappingRetrieveParams,
    type ExternalMappingUpdateParams as ExternalMappingUpdateParams,
    type ExternalMappingListParams as ExternalMappingListParams,
    type ExternalMappingDeleteParams as ExternalMappingDeleteParams,
    type ExternalMappingListByExternalEntityParams as ExternalMappingListByExternalEntityParams,
    type ExternalMappingListByM3terEntityParams as ExternalMappingListByM3terEntityParams,
  };
}
