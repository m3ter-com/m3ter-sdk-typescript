// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { Cursor, type CursorParams } from '../pagination';

export class CreditReasons extends APIResource {
  /**
   * Create a new Credit Reason for your Organization. When you've created a Credit
   * Reason, it becomes available as a credit type for adding Credit line items to
   * Bills. See [Credits](https://www.m3ter.com/docs/api#tag/Credits).
   *
   * @example
   * ```ts
   * const creditReasonResponse =
   *   await client.creditReasons.create({ name: 'x' });
   * ```
   */
  create(
    params: CreditReasonCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreditReasonResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.post(`/organizations/${orgId}/picklists/creditreasons`, { body, ...options });
  }

  /**
   * Retrieve the Credit Reason with the given UUID.
   *
   * @example
   * ```ts
   * const creditReasonResponse =
   *   await client.creditReasons.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    params?: CreditReasonRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreditReasonResponse>;
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<CreditReasonResponse>;
  retrieve(
    id: string,
    params: CreditReasonRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreditReasonResponse> {
    if (isRequestOptions(params)) {
      return this.retrieve(id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.get(`/organizations/${orgId}/picklists/creditreasons/${id}`, options);
  }

  /**
   * Update the Credit Reason with the given UUID.
   *
   * @example
   * ```ts
   * const creditReasonResponse =
   *   await client.creditReasons.update('id', { name: 'x' });
   * ```
   */
  update(
    id: string,
    params: CreditReasonUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreditReasonResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.put(`/organizations/${orgId}/picklists/creditreasons/${id}`, { body, ...options });
  }

  /**
   * Retrieve a list of the Credit Reason entities created for your Organization. You
   * can filter the list returned for the call by Credit Reason ID, Credit Reason
   * short code, or by Archive status.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const creditReasonResponse of client.creditReasons.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    params?: CreditReasonListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CreditReasonResponsesCursor, CreditReasonResponse>;
  list(options?: Core.RequestOptions): Core.PagePromise<CreditReasonResponsesCursor, CreditReasonResponse>;
  list(
    params: CreditReasonListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<CreditReasonResponsesCursor, CreditReasonResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { orgId = this._client.orgId, ...query } = params;
    return this._client.getAPIList(
      `/organizations/${orgId}/picklists/creditreasons`,
      CreditReasonResponsesCursor,
      { query, ...options },
    );
  }

  /**
   * Delete the Credit Reason with the given UUID.
   *
   * @example
   * ```ts
   * const creditReasonResponse =
   *   await client.creditReasons.delete('id');
   * ```
   */
  delete(
    id: string,
    params?: CreditReasonDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreditReasonResponse>;
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<CreditReasonResponse>;
  delete(
    id: string,
    params: CreditReasonDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreditReasonResponse> {
    if (isRequestOptions(params)) {
      return this.delete(id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.delete(`/organizations/${orgId}/picklists/creditreasons/${id}`, options);
  }
}

export class CreditReasonResponsesCursor extends Cursor<CreditReasonResponse> {}

export interface CreditReasonResponse {
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
   * The id of the user who created this credit reason.
   */
  createdBy?: string;

  /**
   * The DateTime when the credit reason was created _(in ISO-8601 format)_.
   */
  dtCreated?: string;

  /**
   * The DateTime when the credit reason was last modified _(in ISO-8601 format)_.
   */
  dtLastModified?: string;

  /**
   * The id of the user who last modified this credit reason.
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

export interface CreditReasonCreateParams {
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

export interface CreditReasonRetrieveParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface CreditReasonUpdateParams {
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

export interface CreditReasonListParams extends CursorParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Query param: TRUE / FALSE archived flag to filter the list. CreditReasons can be
   * archived once they are obsolete.
   *
   * - TRUE includes archived CreditReasons.
   * - FALSE excludes CreditReasons that are archived.
   */
  archived?: boolean;

  /**
   * Query param: List of Credit Reason short codes to retrieve.
   */
  codes?: Array<string>;

  /**
   * Query param: List of Credit Reason IDs to retrieve.
   */
  ids?: Array<string>;
}

export interface CreditReasonDeleteParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

CreditReasons.CreditReasonResponsesCursor = CreditReasonResponsesCursor;

export declare namespace CreditReasons {
  export {
    type CreditReasonResponse as CreditReasonResponse,
    CreditReasonResponsesCursor as CreditReasonResponsesCursor,
    type CreditReasonCreateParams as CreditReasonCreateParams,
    type CreditReasonRetrieveParams as CreditReasonRetrieveParams,
    type CreditReasonUpdateParams as CreditReasonUpdateParams,
    type CreditReasonListParams as CreditReasonListParams,
    type CreditReasonDeleteParams as CreditReasonDeleteParams,
  };
}
