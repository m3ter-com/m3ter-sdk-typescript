// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AggregationsAPI from './aggregations';
import { APIPromise } from '../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class CompoundAggregations extends APIResource {
  /**
   * Create a new CompoundAggregation.
   *
   * This endpoint allows you to create a new CompoundAggregation for a specific
   * Organization. The request body must include all the necessary details such as
   * the Calculation formula.
   *
   * @example
   * ```ts
   * const aggregationResponse =
   *   await client.compoundAggregations.create({
   *     calculation: 'x',
   *     name: 'x',
   *     quantityPerUnit: 1,
   *     rounding: 'UP',
   *     unit: 'x',
   *   });
   * ```
   */
  create(
    params: CompoundAggregationCreateParams,
    options?: RequestOptions,
  ): APIPromise<AggregationsAPI.AggregationResponse> {
    const { orgId = this._client.orgID, ...body } = params;
    return this._client.post(path`/organizations/${orgId}/compoundaggregations`, { body, ...options });
  }

  /**
   * Retrieve a CompoundAggregation using the given UUID.
   *
   * This endpoint returns a specific CompoundAggregation associated with an
   * Organization. It provides detailed information about the CompoundAggregation.
   *
   * @example
   * ```ts
   * const compoundAggregationResponse =
   *   await client.compoundAggregations.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    params: CompoundAggregationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CompoundAggregationResponse> {
    const { orgId = this._client.orgID } = params ?? {};
    return this._client.get(path`/organizations/${orgId}/compoundaggregations/${id}`, options);
  }

  /**
   * Update the CompoundAggregation with the given UUID.
   *
   * This endpoint allows you to update the details of a specific CompoundAggregation
   * associated with an Organization. Use it to modify details of an existing
   * CompoundAggregation such as the Calculation formula.
   *
   * **Note:** If you have created Custom Fields for a Compound Aggregation, when you
   * use this endpoint to update the Compound Aggregation use the `customFields`
   * parameter to preserve those Custom Fields. If you omit them from the update
   * request, they will be lost.
   *
   * @example
   * ```ts
   * const aggregationResponse =
   *   await client.compoundAggregations.update('id', {
   *     calculation: 'x',
   *     name: 'x',
   *     quantityPerUnit: 1,
   *     rounding: 'UP',
   *     unit: 'x',
   *   });
   * ```
   */
  update(
    id: string,
    params: CompoundAggregationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AggregationsAPI.AggregationResponse> {
    const { orgId = this._client.orgID, ...body } = params;
    return this._client.put(path`/organizations/${orgId}/compoundaggregations/${id}`, { body, ...options });
  }

  /**
   * Retrieve a list of all CompoundAggregations.
   *
   * This endpoint retrieves a list of CompoundAggregations associated with a
   * specific organization. CompoundAggregations enable you to define numerical
   * measures based on simple Aggregations of usage data. It supports pagination, and
   * includes various query parameters to filter the CompoundAggregations based on
   * Product, CompoundAggregation IDs or short codes.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const compoundAggregationResponse of client.compoundAggregations.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    params: CompoundAggregationListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CompoundAggregationResponsesCursor, CompoundAggregationResponse> {
    const { orgId = this._client.orgID, ...query } = params ?? {};
    return this._client.getAPIList(
      path`/organizations/${orgId}/compoundaggregations`,
      Cursor<CompoundAggregationResponse>,
      { query, ...options },
    );
  }

  /**
   * Delete a CompoundAggregation with the given UUID.
   *
   * This endpoint enables deletion of a specific CompoundAggregation associated with
   * a specific Organization. Useful when you need to remove an existing
   * CompoundAggregation that is no longer required, such as when changing pricing or
   * planning models.
   *
   * @example
   * ```ts
   * const compoundAggregationResponse =
   *   await client.compoundAggregations.delete('id');
   * ```
   */
  delete(
    id: string,
    params: CompoundAggregationDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CompoundAggregationResponse> {
    const { orgId = this._client.orgID } = params ?? {};
    return this._client.delete(path`/organizations/${orgId}/compoundaggregations/${id}`, options);
  }
}

export type CompoundAggregationResponsesCursor = Cursor<CompoundAggregationResponse>;

export interface CompoundAggregationResponse {
  /**
   * The UUID of the entity.
   */
  id: string;

  accountingProductId?: string;

  /**
   * This field is a string that represents the formula for the calculation. This
   * formula determines how the CompoundAggregation is calculated from the underlying
   * usage data.
   */
  calculation?: string;

  /**
   * Code of the Aggregation. A unique short code to identify the Aggregation.
   */
  code?: string;

  /**
   * The unique identifier (UUID) of the user who created this CompoundAggregation.
   */
  createdBy?: string;

  customFields?: { [key: string]: string | number };

  /**
   * The date and time _(in ISO-8601 format)_ when the CompoundAggregation was
   * created.
   */
  dtCreated?: string;

  /**
   * The date and time _(in ISO-8601 format)_ when the CompoundAggregation was last
   * modified.
   */
  dtLastModified?: string;

  /**
   * This is a boolean True / False flag.
   *
   * If set to TRUE, the calculation will be evaluated even if the referenced
   * aggregation has no usage data.
   */
  evaluateNullAggregations?: boolean;

  /**
   * The unique identifier (UUID) of the user who last modified this
   * CompoundAggregation.
   */
  lastModifiedBy?: string;

  /**
   * Descriptive name for the Aggregation.
   */
  name?: string;

  /**
   * This field represents the unique identifier (UUID) of the Product that is
   * associated with the CompoundAggregation.
   */
  productId?: string;

  /**
   * Defines how much of a quantity equates to 1 unit. Used when setting the price
   * per unit for billing purposes - if charging for kilobytes per second (KiBy/s) at
   * rate of $0.25 per 500 KiBy/s, then set quantityPerUnit to 500 and price Plan at
   * $0.25 per unit.
   *
   * If `quantityPerUnit` is set to a value other than one, rounding is typically set
   * to UP.
   */
  quantityPerUnit?: number;

  /**
   * Specifies how you want to deal with non-integer, fractional number Aggregation
   * values.
   *
   * **NOTES:**
   *
   * - **NEAREST** rounds to the nearest half: 5.1 is rounded to 5, and 3.5 is
   *   rounded to 4.
   * - Also used in combination with `quantityPerUnit`. Rounds the number of units
   *   after `quantityPerUnit` is applied. If you set `quantityPerUnit` to a value
   *   other than one, you would typically set Rounding to **UP**. For example,
   *   suppose you charge by kilobytes per second (KiBy/s), set `quantityPerUnit` =
   *   500, and set charge rate at $0.25 per unit used. If your customer used 48,900
   *   KiBy/s in a billing period, the charge would be 48,900 / 500 = 97.8 rounded up
   *   to 98 \* 0.25 = $2.45.
   *
   * Enum: ???UP??? ???DOWN??? ???NEAREST??? ???NONE???
   */
  rounding?: 'UP' | 'DOWN' | 'NEAREST' | 'NONE';

  /**
   * _(Optional)_. Used when creating a segmented Aggregation, which segments the
   * usage data collected by a single Meter. Works together with `segmentedFields`.
   *
   * Contains the values that are to be used as the segments, read from the fields in
   * the meter pointed at by `segmentedFields`.
   */
  segments?: Array<{ [key: string]: string }>;

  /**
   * User defined or following the _Unified Code for Units of Measure_ (UCUM).
   *
   * Used as the label for billing, indicating to your customers what they are being
   * charged for.
   */
  unit?: string;

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

export interface CompoundAggregationCreateParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param: String that represents the formula for the calculation. This formula
   * determines how the CompoundAggregation value is calculated. The calculation can
   * reference simple Aggregations or Custom Fields. This field is required when
   * creating or updating a CompoundAggregation.
   *
   * **NOTE:** If a simple Aggregation referenced by a Compound Aggregation has a
   * **Quantity per unit** defined or a **Rounding** defined, these will not be
   * factored into the value used by the calculation. For example, if the simple
   * Aggregation referenced has a base value of 100 and has **Quantity per unit** set
   * at 10, the Compound Aggregation calculation _will use the base value of 100 not
   * 10_.
   */
  calculation: string;

  /**
   * Body param: Descriptive name for the Aggregation.
   */
  name: string;

  /**
   * Body param: Defines how much of a quantity equates to 1 unit. Used when setting
   * the price per unit for billing purposes - if charging for kilobytes per second
   * (KiBy/s) at rate of $0.25 per 500 KiBy/s, then set quantityPerUnit to 500 and
   * price Plan at $0.25 per unit.
   *
   * **Note:** If `quantityPerUnit` is set to a value other than one, `rounding` is
   * typically set to `"UP"`.
   */
  quantityPerUnit: number;

  /**
   * Body param: Specifies how you want to deal with non-integer, fractional number
   * Aggregation values.
   *
   * **NOTES:**
   *
   * - **NEAREST** rounds to the nearest half: 5.1 is rounded to 5, and 3.5 is
   *   rounded to 4.
   * - Also used in combination with `quantityPerUnit`. Rounds the number of units
   *   after `quantityPerUnit` is applied. If you set `quantityPerUnit` to a value
   *   other than one, you would typically set Rounding to **UP**. For example,
   *   suppose you charge by kilobytes per second (KiBy/s), set `quantityPerUnit` =
   *   500, and set charge rate at $0.25 per unit used. If your customer used 48,900
   *   KiBy/s in a billing period, the charge would be 48,900 / 500 = 97.8 rounded up
   *   to 98 \* 0.25 = $2.45.
   *
   * Enum: ???UP??? ???DOWN??? ???NEAREST??? ???NONE???
   */
  rounding: 'UP' | 'DOWN' | 'NEAREST' | 'NONE';

  /**
   * Body param: User defined label for units shown for Bill line items, indicating
   * to your customers what they are being charged for.
   */
  unit: string;

  /**
   * Body param: Optional Product ID this Aggregation should be attributed to for
   * accounting purposes
   */
  accountingProductId?: string;

  /**
   * Body param: Code of the new Aggregation. A unique short code to identify the
   * Aggregation.
   */
  code?: string;

  /**
   * Body param:
   */
  customFields?: { [key: string]: string | number };

  /**
   * Body param: Boolean True / False flag:
   *
   * - **TRUE** - set to TRUE if you want to allow null values from the simple
   *   Aggregations referenced in the Compound Aggregation to be passed in. Simple
   *   Aggregations based on Meter Target Fields where no usage data is available
   *   will have null values.
   * - **FALSE** Default.
   *
   * **Note:** If any of the simple Aggregations you reference in a Compound
   * Aggregation calculation might have null values, you must set their Default Value
   * to 0. This ensures that any null values passed into the Compound Aggregation are
   * passed in correctly with value = 0.
   */
  evaluateNullAggregations?: boolean;

  /**
   * Body param: Unique identifier (UUID) of the Product the CompoundAggregation
   * belongs to.
   *
   * **Note:** Omit this parameter if you want to create a _Global_
   * CompoundAggregation.
   */
  productId?: string;

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

export interface CompoundAggregationRetrieveParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface CompoundAggregationUpdateParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param: String that represents the formula for the calculation. This formula
   * determines how the CompoundAggregation value is calculated. The calculation can
   * reference simple Aggregations or Custom Fields. This field is required when
   * creating or updating a CompoundAggregation.
   *
   * **NOTE:** If a simple Aggregation referenced by a Compound Aggregation has a
   * **Quantity per unit** defined or a **Rounding** defined, these will not be
   * factored into the value used by the calculation. For example, if the simple
   * Aggregation referenced has a base value of 100 and has **Quantity per unit** set
   * at 10, the Compound Aggregation calculation _will use the base value of 100 not
   * 10_.
   */
  calculation: string;

  /**
   * Body param: Descriptive name for the Aggregation.
   */
  name: string;

  /**
   * Body param: Defines how much of a quantity equates to 1 unit. Used when setting
   * the price per unit for billing purposes - if charging for kilobytes per second
   * (KiBy/s) at rate of $0.25 per 500 KiBy/s, then set quantityPerUnit to 500 and
   * price Plan at $0.25 per unit.
   *
   * **Note:** If `quantityPerUnit` is set to a value other than one, `rounding` is
   * typically set to `"UP"`.
   */
  quantityPerUnit: number;

  /**
   * Body param: Specifies how you want to deal with non-integer, fractional number
   * Aggregation values.
   *
   * **NOTES:**
   *
   * - **NEAREST** rounds to the nearest half: 5.1 is rounded to 5, and 3.5 is
   *   rounded to 4.
   * - Also used in combination with `quantityPerUnit`. Rounds the number of units
   *   after `quantityPerUnit` is applied. If you set `quantityPerUnit` to a value
   *   other than one, you would typically set Rounding to **UP**. For example,
   *   suppose you charge by kilobytes per second (KiBy/s), set `quantityPerUnit` =
   *   500, and set charge rate at $0.25 per unit used. If your customer used 48,900
   *   KiBy/s in a billing period, the charge would be 48,900 / 500 = 97.8 rounded up
   *   to 98 \* 0.25 = $2.45.
   *
   * Enum: ???UP??? ???DOWN??? ???NEAREST??? ???NONE???
   */
  rounding: 'UP' | 'DOWN' | 'NEAREST' | 'NONE';

  /**
   * Body param: User defined label for units shown for Bill line items, indicating
   * to your customers what they are being charged for.
   */
  unit: string;

  /**
   * Body param: Optional Product ID this Aggregation should be attributed to for
   * accounting purposes
   */
  accountingProductId?: string;

  /**
   * Body param: Code of the new Aggregation. A unique short code to identify the
   * Aggregation.
   */
  code?: string;

  /**
   * Body param:
   */
  customFields?: { [key: string]: string | number };

  /**
   * Body param: Boolean True / False flag:
   *
   * - **TRUE** - set to TRUE if you want to allow null values from the simple
   *   Aggregations referenced in the Compound Aggregation to be passed in. Simple
   *   Aggregations based on Meter Target Fields where no usage data is available
   *   will have null values.
   * - **FALSE** Default.
   *
   * **Note:** If any of the simple Aggregations you reference in a Compound
   * Aggregation calculation might have null values, you must set their Default Value
   * to 0. This ensures that any null values passed into the Compound Aggregation are
   * passed in correctly with value = 0.
   */
  evaluateNullAggregations?: boolean;

  /**
   * Body param: Unique identifier (UUID) of the Product the CompoundAggregation
   * belongs to.
   *
   * **Note:** Omit this parameter if you want to create a _Global_
   * CompoundAggregation.
   */
  productId?: string;

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

export interface CompoundAggregationListParams extends CursorParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Query param: An optional parameter to retrieve specific CompoundAggregations
   * based on their short codes.
   */
  codes?: Array<string>;

  /**
   * Query param: An optional parameter to retrieve specific CompoundAggregations
   * based on their unique identifiers (UUIDs).
   */
  ids?: Array<string>;

  /**
   * Query param: An optional parameter to filter the CompoundAggregations based on
   * specific Product unique identifiers (UUIDs).
   */
  productId?: Array<string>;
}

export interface CompoundAggregationDeleteParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export declare namespace CompoundAggregations {
  export {
    type CompoundAggregationResponse as CompoundAggregationResponse,
    type CompoundAggregationResponsesCursor as CompoundAggregationResponsesCursor,
    type CompoundAggregationCreateParams as CompoundAggregationCreateParams,
    type CompoundAggregationRetrieveParams as CompoundAggregationRetrieveParams,
    type CompoundAggregationUpdateParams as CompoundAggregationUpdateParams,
    type CompoundAggregationListParams as CompoundAggregationListParams,
    type CompoundAggregationDeleteParams as CompoundAggregationDeleteParams,
  };
}
