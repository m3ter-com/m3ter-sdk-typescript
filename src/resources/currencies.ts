// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

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
  create(params: CurrencyCreateParams, options?: RequestOptions): APIPromise<CurrencyResponse> {
    const { orgId = this._client.orgID, ...body } = params;
    return this._client.post(path`/organizations/${orgId}/picklists/currency`, { body, ...options });
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
    params: CurrencyRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CurrencyResponse> {
    const { orgId = this._client.orgID } = params ?? {};
    return this._client.get(path`/organizations/${orgId}/picklists/currency/${id}`, options);
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
  update(id: string, params: CurrencyUpdateParams, options?: RequestOptions): APIPromise<CurrencyResponse> {
    const { orgId = this._client.orgID, ...body } = params;
    return this._client.put(path`/organizations/${orgId}/picklists/currency/${id}`, { body, ...options });
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
    params: CurrencyListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CurrencyResponsesCursor, CurrencyResponse> {
    const { orgId = this._client.orgID, ...query } = params ?? {};
    return this._client.getAPIList(
      path`/organizations/${orgId}/picklists/currency`,
      Cursor<CurrencyResponse>,
      { query, ...options },
    );
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
    params: CurrencyDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CurrencyResponse> {
    const { orgId = this._client.orgID } = params ?? {};
    return this._client.delete(path`/organizations/${orgId}/picklists/currency/${id}`, options);
  }
}

export type CurrencyResponsesCursor = Cursor<CurrencyResponse>;

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

export declare namespace Currencies {
  export {
    type CurrencyResponse as CurrencyResponse,
    type CurrencyResponsesCursor as CurrencyResponsesCursor,
    type CurrencyCreateParams as CurrencyCreateParams,
    type CurrencyRetrieveParams as CurrencyRetrieveParams,
    type CurrencyUpdateParams as CurrencyUpdateParams,
    type CurrencyListParams as CurrencyListParams,
    type CurrencyDeleteParams as CurrencyDeleteParams,
  };
}
