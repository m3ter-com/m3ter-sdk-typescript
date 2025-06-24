// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { Cursor, type CursorParams } from '../pagination';

export class Currencies extends APIResource {
  /**
   * Creates a new Currency for the specified Organization.
   *
   * Used to create a Currency that your Organization will start to use.
   *
   * @example
   * ```ts
   * const currencyResponse = await client.currencies.create({
   *   name: 'x',
   * });
   * ```
   */
  create(params: CurrencyCreateParams, options?: Core.RequestOptions): Core.APIPromise<CurrencyResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.post(`/organizations/${orgId}/picklists/currency`, { body, ...options });
  }

  /**
   * Retrieve the specified Currency with the given UUID. Used to obtain the details
   * of a specified existing Currency in your Organization.
   *
   * @example
   * ```ts
   * const currencyResponse = await client.currencies.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(
    id: string,
    params?: CurrencyRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CurrencyResponse>;
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<CurrencyResponse>;
  retrieve(
    id: string,
    params: CurrencyRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CurrencyResponse> {
    if (isRequestOptions(params)) {
      return this.retrieve(id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.get(`/organizations/${orgId}/picklists/currency/${id}`, options);
  }

  /**
   * Update a Currency with the given UUID.
   *
   * Used to update the attributes of the specified Currency for the specified
   * Organization.
   *
   * @example
   * ```ts
   * const currencyResponse = await client.currencies.update(
   *   'id',
   *   { name: 'x' },
   * );
   * ```
   */
  update(
    id: string,
    params: CurrencyUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CurrencyResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.put(`/organizations/${orgId}/picklists/currency/${id}`, { body, ...options });
  }

  /**
   * Retrieve a list of Currencies.
   *
   * Retrieves a list of Currencies for the specified Organization. This endpoint
   * supports pagination and includes various query parameters to filter the
   * Currencies based on Currency ID, and short codes.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const currencyResponse of client.currencies.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    params?: CurrencyListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CurrencyResponsesCursor, CurrencyResponse>;
  list(options?: Core.RequestOptions): Core.PagePromise<CurrencyResponsesCursor, CurrencyResponse>;
  list(
    params: CurrencyListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<CurrencyResponsesCursor, CurrencyResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { orgId = this._client.orgId, ...query } = params;
    return this._client.getAPIList(`/organizations/${orgId}/picklists/currency`, CurrencyResponsesCursor, {
      query,
      ...options,
    });
  }

  /**
   * Delete the Currency with the given UUID.
   *
   * Used to remove an existing Currency from your Organization that is no longer
   * required.
   *
   * @example
   * ```ts
   * const currencyResponse = await client.currencies.delete(
   *   'id',
   * );
   * ```
   */
  delete(
    id: string,
    params?: CurrencyDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CurrencyResponse>;
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<CurrencyResponse>;
  delete(
    id: string,
    params: CurrencyDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CurrencyResponse> {
    if (isRequestOptions(params)) {
      return this.delete(id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.delete(`/organizations/${orgId}/picklists/currency/${id}`, options);
  }
}

export class CurrencyResponsesCursor extends Cursor<CurrencyResponse> {}

export interface CurrencyResponse {
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
   * The unique identifier (UUID) of the user who created this Currency.
   */
  createdBy?: string;

  /**
   * The date and time _(in ISO-8601 format)_ when the Currency was created.
   */
  dtCreated?: string;

  /**
   * The date and time _(in ISO-8601 format)_ when the Currency was last modified.
   */
  dtLastModified?: string;

  /**
   * The unique identifier (UUID) of the user who last modified this Currency.
   */
  lastModifiedBy?: string;

  /**
   * This indicates the maximum number of decimal places to use for this Currency.
   */
  maxDecimalPlaces?: number;

  /**
   * The name of the data entity.
   */
  name?: string;

  roundingMode?: 'UP' | 'DOWN' | 'CEILING' | 'FLOOR' | 'HALF_UP' | 'HALF_DOWN' | 'HALF_EVEN' | 'UNNECESSARY';

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

export interface CurrencyCreateParams {
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
   * Body param: Indicates the maximum number of decimal places to use for this
   * Currency.
   */
  maxDecimalPlaces?: number;

  /**
   * Body param:
   */
  roundingMode?: 'UP' | 'DOWN' | 'CEILING' | 'FLOOR' | 'HALF_UP' | 'HALF_DOWN' | 'HALF_EVEN' | 'UNNECESSARY';

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

export interface CurrencyRetrieveParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface CurrencyUpdateParams {
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
   * Body param: Indicates the maximum number of decimal places to use for this
   * Currency.
   */
  maxDecimalPlaces?: number;

  /**
   * Body param:
   */
  roundingMode?: 'UP' | 'DOWN' | 'CEILING' | 'FLOOR' | 'HALF_UP' | 'HALF_DOWN' | 'HALF_EVEN' | 'UNNECESSARY';

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

export interface CurrencyListParams extends CursorParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Query param: Filter by archived flag. A True / False flag indicating whether to
   * return Currencies that are archived _(obsolete)_.
   *
   * - TRUE - return archived Currencies.
   * - FALSE - archived Currencies are not returned.
   */
  archived?: boolean;

  /**
   * Query param: An optional parameter to retrieve specific Currencies based on
   * their short codes.
   */
  codes?: Array<string>;

  /**
   * Query param: An optional parameter to filter the list based on specific Currency
   * unique identifiers (UUIDs).
   */
  ids?: Array<string>;
}

export interface CurrencyDeleteParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

Currencies.CurrencyResponsesCursor = CurrencyResponsesCursor;

export declare namespace Currencies {
  export {
    type CurrencyResponse as CurrencyResponse,
    CurrencyResponsesCursor as CurrencyResponsesCursor,
    type CurrencyCreateParams as CurrencyCreateParams,
    type CurrencyRetrieveParams as CurrencyRetrieveParams,
    type CurrencyUpdateParams as CurrencyUpdateParams,
    type CurrencyListParams as CurrencyListParams,
    type CurrencyDeleteParams as CurrencyDeleteParams,
  };
}
