// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class ExternalMappings extends APIResource {
  /**
   * Creates a new External Mapping.
   *
   * This endpoint enables you to create a new External Mapping for the specified
   * Organization. You need to supply a request body with the details of the new
   * External Mapping.
   *
   * @example
   * ```ts
   * const externalMappingResponse =
   *   await client.externalMappings.create({
   *     externalId: 'cus_00000000000000',
   *     externalSystem: 'Stripe',
   *     externalTable: 'Customer',
   *     m3terEntity: 'Account',
   *     m3terId: '00000000-0000-0000-0000-000000000000',
   *   });
   * ```
   */
  create(params: ExternalMappingCreateParams, options?: RequestOptions): APIPromise<ExternalMappingResponse> {
    const { orgId = this._client.orgID, ...body } = params;
    return this._client.post(path`/organizations/${orgId}/externalmappings`, { body, ...options });
  }

  /**
   * Retrieve an External Mapping with the given UUID.
   *
   * This endpoint enables you to retrieve the External Mapping with the specified
   * UUID for a specific Organization.
   *
   * @example
   * ```ts
   * const externalMappingResponse =
   *   await client.externalMappings.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    params: ExternalMappingRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ExternalMappingResponse> {
    const { orgId = this._client.orgID } = params ?? {};
    return this._client.get(path`/organizations/${orgId}/externalmappings/${id}`, options);
  }

  /**
   * Updates an External Mapping with the given UUID.
   *
   * This endpoint enables you to update an existing External Mapping entity,
   * identified by its UUID. You must supply a request body with the new details for
   * the External Mapping.
   *
   * @example
   * ```ts
   * const externalMappingResponse =
   *   await client.externalMappings.update('id', {
   *     externalId: 'cus_00000000000000',
   *     externalSystem: 'Stripe',
   *     externalTable: 'Customer',
   *     m3terEntity: 'Account',
   *     m3terId: '00000000-0000-0000-0000-000000000000',
   *   });
   * ```
   */
  update(
    id: string,
    params: ExternalMappingUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ExternalMappingResponse> {
    const { orgId = this._client.orgID, ...body } = params;
    return this._client.put(path`/organizations/${orgId}/externalmappings/${id}`, { body, ...options });
  }

  /**
   * Retrieve a list of all External Mapping entities.
   *
   * This endpoint retrieves a list of all External Mapping entities for a specific
   * Organization. The list can be paginated for better management, and supports
   * filtering using the external system.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const externalMappingResponse of client.externalMappings.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    params: ExternalMappingListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ExternalMappingResponsesCursor, ExternalMappingResponse> {
    const { orgId = this._client.orgID, ...query } = params ?? {};
    return this._client.getAPIList(
      path`/organizations/${orgId}/externalmappings`,
      Cursor<ExternalMappingResponse>,
      { query, ...options },
    );
  }

  /**
   * Delete an External Mapping with the given UUID.
   *
   * @example
   * ```ts
   * const externalMappingResponse =
   *   await client.externalMappings.delete('id');
   * ```
   */
  delete(
    id: string,
    params: ExternalMappingDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ExternalMappingResponse> {
    const { orgId = this._client.orgID } = params ?? {};
    return this._client.delete(path`/organizations/${orgId}/externalmappings/${id}`, options);
  }

  /**
   * Retrieve a list of External Mapping entities for a specified external system
   * entity.
   *
   * Use this endpoint to retrieve a list of External Mapping entities associated
   * with a specific external system entity. The list can be paginated for easier
   * management.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const externalMappingResponse of client.externalMappings.listByExternalEntity(
   *   'externalId',
   *   { system: 'system', externalTable: 'externalTable' },
   * )) {
   *   // ...
   * }
   * ```
   */
  listByExternalEntity(
    externalID: string,
    params: ExternalMappingListByExternalEntityParams,
    options?: RequestOptions,
  ): PagePromise<ExternalMappingResponsesCursor, ExternalMappingResponse> {
    const { orgId = this._client.orgID, system, externalTable, ...query } = params;
    return this._client.getAPIList(
      path`/organizations/${orgId}/externalmappings/externalid/${system}/${externalTable}/${externalID}`,
      Cursor<ExternalMappingResponse>,
      { query, ...options },
    );
  }

  /**
   * Retrieve a list of External Mapping entities for a specified m3ter entity.
   *
   * Use this endpoint to retrieve a list of External Mapping entities associated
   * with a specific m3ter entity. The list can be paginated for easier management.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const externalMappingResponse of client.externalMappings.listByM3terEntity(
   *   'm3terId',
   *   { entity: 'entity' },
   * )) {
   *   // ...
   * }
   * ```
   */
  listByM3terEntity(
    m3terID: string,
    params: ExternalMappingListByM3terEntityParams,
    options?: RequestOptions,
  ): PagePromise<ExternalMappingResponsesCursor, ExternalMappingResponse> {
    const { orgId = this._client.orgID, entity, ...query } = params;
    return this._client.getAPIList(
      path`/organizations/${orgId}/externalmappings/external/${entity}/${m3terID}`,
      Cursor<ExternalMappingResponse>,
      { query, ...options },
    );
  }
}

export type ExternalMappingResponsesCursor = Cursor<ExternalMappingResponse>;

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

  /**
   * Path param: The identifier for the external system.
   */
  system: string;

  /**
   * Path param: The identifier for the external table.
   */
  externalTable: string;
}

export interface ExternalMappingListByM3terEntityParams extends CursorParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Path param: The entity type.
   */
  entity: string;
}

export declare namespace ExternalMappings {
  export {
    type ExternalMappingResponse as ExternalMappingResponse,
    type ExternalMappingResponsesCursor as ExternalMappingResponsesCursor,
    type ExternalMappingCreateParams as ExternalMappingCreateParams,
    type ExternalMappingRetrieveParams as ExternalMappingRetrieveParams,
    type ExternalMappingUpdateParams as ExternalMappingUpdateParams,
    type ExternalMappingListParams as ExternalMappingListParams,
    type ExternalMappingDeleteParams as ExternalMappingDeleteParams,
    type ExternalMappingListByExternalEntityParams as ExternalMappingListByExternalEntityParams,
    type ExternalMappingListByM3terEntityParams as ExternalMappingListByM3terEntityParams,
  };
}
