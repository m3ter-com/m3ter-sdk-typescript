// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class DebitReasons extends APIResource {
  /**
   * Create a new Debit Reason for your Organization. When you've created a Debit
   * Reason, it becomes available as a debit type for adding Debit line items to
   * Bills. See [Debits](https://www.m3ter.com/docs/api#tag/Debits).
   *
   * @example
   * ```ts
   * const debitReasonResponse =
   *   await client.debitReasons.create({ name: 'x' });
   * ```
   */
  create(params: DebitReasonCreateParams, options?: RequestOptions): APIPromise<DebitReasonResponse> {
    const { orgId = this._client.orgID, ...body } = params;
    return this._client.post(path`/organizations/${orgId}/picklists/debitreasons`, { body, ...options });
  }

  /**
   * Retrieve the Debit Reason with the given UUID.
   *
   * @example
   * ```ts
   * const debitReasonResponse =
   *   await client.debitReasons.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    params: DebitReasonRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DebitReasonResponse> {
    const { orgId = this._client.orgID } = params ?? {};
    return this._client.get(path`/organizations/${orgId}/picklists/debitreasons/${id}`, options);
  }

  /**
   * Update the Debit Reason with the given UUID.
   *
   * @example
   * ```ts
   * const debitReasonResponse =
   *   await client.debitReasons.update('id', { name: 'x' });
   * ```
   */
  update(
    id: string,
    params: DebitReasonUpdateParams,
    options?: RequestOptions,
  ): APIPromise<DebitReasonResponse> {
    const { orgId = this._client.orgID, ...body } = params;
    return this._client.put(path`/organizations/${orgId}/picklists/debitreasons/${id}`, { body, ...options });
  }

  /**
   * Retrieve a list of the Debit Reason entities created for your Organization. You
   * can filter the list returned for the call by Debit Reason ID, Debit Reason short
   * code, or by Archive status.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const debitReasonResponse of client.debitReasons.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    params: DebitReasonListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<DebitReasonResponsesCursor, DebitReasonResponse> {
    const { orgId = this._client.orgID, ...query } = params ?? {};
    return this._client.getAPIList(
      path`/organizations/${orgId}/picklists/debitreasons`,
      Cursor<DebitReasonResponse>,
      { query, ...options },
    );
  }

  /**
   * Delete the Debit Reason with the given UUID.
   *
   * @example
   * ```ts
   * const debitReasonResponse =
   *   await client.debitReasons.delete('id');
   * ```
   */
  delete(
    id: string,
    params: DebitReasonDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DebitReasonResponse> {
    const { orgId = this._client.orgID } = params ?? {};
    return this._client.delete(path`/organizations/${orgId}/picklists/debitreasons/${id}`, options);
  }
}

export type DebitReasonResponsesCursor = Cursor<DebitReasonResponse>;

export interface DebitReasonResponse {
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
   * The id of the user who created this debit reason.
   */
  createdBy?: string;

  /**
   * The DateTime when the debit reason was created _(in ISO-8601 format)_.
   */
  dtCreated?: string;

  /**
   * The DateTime when the debit reason was last modified _(in ISO-8601 format)_.
   */
  dtLastModified?: string;

  /**
   * The id of the user who last modified this debit reason.
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

export interface DebitReasonCreateParams {
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

export interface DebitReasonRetrieveParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface DebitReasonUpdateParams {
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

export interface DebitReasonListParams extends CursorParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Query param: Filter using the boolean archived flag. DebitReasons can be
   * archived if they are obsolete.
   *
   * - TRUE includes DebitReasons that have been archived.
   * - FALSE excludes archived DebitReasons.
   */
  archived?: boolean;

  /**
   * Query param: List of Debit Reason short codes to retrieve.
   */
  codes?: Array<string>;

  /**
   * Query param: List of Debit Reason IDs to retrieve.
   */
  ids?: Array<string>;
}

export interface DebitReasonDeleteParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export declare namespace DebitReasons {
  export {
    type DebitReasonResponse as DebitReasonResponse,
    type DebitReasonResponsesCursor as DebitReasonResponsesCursor,
    type DebitReasonCreateParams as DebitReasonCreateParams,
    type DebitReasonRetrieveParams as DebitReasonRetrieveParams,
    type DebitReasonUpdateParams as DebitReasonUpdateParams,
    type DebitReasonListParams as DebitReasonListParams,
    type DebitReasonDeleteParams as DebitReasonDeleteParams,
  };
}
