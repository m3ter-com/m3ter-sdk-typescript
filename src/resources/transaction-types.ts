// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class TransactionTypes extends APIResource {
  /**
   * Create a new TransactionType for the specified Organization. Details of the new
   * TransactionType should be included in the request body.
   *
   * @example
   * ```ts
   * const transactionTypeResponse =
   *   await client.transactionTypes.create({ name: 'x' });
   * ```
   */
  create(params: TransactionTypeCreateParams, options?: RequestOptions): APIPromise<TransactionTypeResponse> {
    const { orgId = this._client.orgID, ...body } = params;
    return this._client.post(path`/organizations/${orgId}/picklists/transactiontypes`, { body, ...options });
  }

  /**
   * Retrieves the TransactionType with the given UUID from the specified
   * Organization.
   *
   * @example
   * ```ts
   * const transactionTypeResponse =
   *   await client.transactionTypes.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    params: TransactionTypeRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TransactionTypeResponse> {
    const { orgId = this._client.orgID } = params ?? {};
    return this._client.get(path`/organizations/${orgId}/picklists/transactiontypes/${id}`, options);
  }

  /**
   * Updates the TransactionType with the specified UUID for the specified
   * Organization. Update details for the TransactionType should be included in the
   * request body.
   *
   * @example
   * ```ts
   * const transactionTypeResponse =
   *   await client.transactionTypes.update('id', { name: 'x' });
   * ```
   */
  update(
    id: string,
    params: TransactionTypeUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TransactionTypeResponse> {
    const { orgId = this._client.orgID, ...body } = params;
    return this._client.put(path`/organizations/${orgId}/picklists/transactiontypes/${id}`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieves a list of TransactionType entities for the specified Organization. The
   * list can be paginated for easier management, and supports filtering by various
   * parameters.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const transactionTypeResponse of client.transactionTypes.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    params: TransactionTypeListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<TransactionTypeResponsesCursor, TransactionTypeResponse> {
    const { orgId = this._client.orgID, ...query } = params ?? {};
    return this._client.getAPIList(
      path`/organizations/${orgId}/picklists/transactiontypes`,
      Cursor<TransactionTypeResponse>,
      { query, ...options },
    );
  }

  /**
   * Deletes the TransactionType with the given UUID from the specified Organization.
   *
   * @example
   * ```ts
   * const transactionTypeResponse =
   *   await client.transactionTypes.delete('id');
   * ```
   */
  delete(
    id: string,
    params: TransactionTypeDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TransactionTypeResponse> {
    const { orgId = this._client.orgID } = params ?? {};
    return this._client.delete(path`/organizations/${orgId}/picklists/transactiontypes/${id}`, options);
  }
}

export type TransactionTypeResponsesCursor = Cursor<TransactionTypeResponse>;

export interface TransactionTypeResponse {
  /**
   * The UUID of the entity.
   */
  id: string;

  /**
   * TRUE / FALSE flag indicating whether the data entity is archived. An entity can
   * be archived if it is obsolete.
   */
  archived?: boolean;

  /**
   * The short code of the data entity.
   */
  code?: string;

  /**
   * The unique identifier (UUID) of the user who created this TransactionType.
   */
  createdBy?: string;

  /**
   * The date and time _(in ISO-8601 format)_ when the TransactionType was created.
   */
  dtCreated?: string;

  /**
   * The date and time _(in ISO-8601 format)_ when the TransactionType was last
   * modified.
   */
  dtLastModified?: string;

  /**
   * The unique identifier (UUID) of the user who last modified this TransactionType.
   */
  lastModifiedBy?: string;

  /**
   * The name of the data entity.
   */
  name?: string;

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

export interface TransactionTypeCreateParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param: The name of the entity.
   */
  name: string;

  /**
   * Body param: A Boolean TRUE / FALSE flag indicating whether the entity is
   * archived. An entity can be archived if it is obsolete.
   *
   * - TRUE - the entity is in the archived state.
   * - FALSE - the entity is not in the archived state.
   */
  archived?: boolean;

  /**
   * Body param: The short code for the entity.
   */
  code?: string;

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

export interface TransactionTypeRetrieveParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface TransactionTypeUpdateParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param: The name of the entity.
   */
  name: string;

  /**
   * Body param: A Boolean TRUE / FALSE flag indicating whether the entity is
   * archived. An entity can be archived if it is obsolete.
   *
   * - TRUE - the entity is in the archived state.
   * - FALSE - the entity is not in the archived state.
   */
  archived?: boolean;

  /**
   * Body param: The short code for the entity.
   */
  code?: string;

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

export interface TransactionTypeListParams extends CursorParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Query param: Filter with this Boolean flag whether to include TransactionTypes
   * that are archived.
   *
   * - TRUE - include archived TransactionTypes in the list.
   * - FALSE - exclude archived TransactionTypes.
   */
  archived?: boolean;

  /**
   * Query param: A list of TransactionType short codes to retrieve.
   */
  codes?: Array<string>;

  /**
   * Query param: A list of TransactionType unique identifiers (UUIDs) to retrieve.
   */
  ids?: Array<string>;
}

export interface TransactionTypeDeleteParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export declare namespace TransactionTypes {
  export {
    type TransactionTypeResponse as TransactionTypeResponse,
    type TransactionTypeResponsesCursor as TransactionTypeResponsesCursor,
    type TransactionTypeCreateParams as TransactionTypeCreateParams,
    type TransactionTypeRetrieveParams as TransactionTypeRetrieveParams,
    type TransactionTypeUpdateParams as TransactionTypeUpdateParams,
    type TransactionTypeListParams as TransactionTypeListParams,
    type TransactionTypeDeleteParams as TransactionTypeDeleteParams,
  };
}
