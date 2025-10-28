// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Meters extends APIResource {
  /**
   * Create a new Meter.
   *
   * When you create a Meter, you can define two types of field for usage data
   * collection and ingest into the platform:
   *
   * - `dataFields` to collect raw usage data measures - numeric quantitative data
   *   values or non-numeric point data values.
   * - `derivedFields` to derive usage data measures that are the result of applying
   *   a calculation to `dataFields`, `customFields`, or system `Timestamp` fields.
   *
   * You can also:
   *
   * - Create `customFields` for a Meter, which allows you to attach custom data to
   *   the Meter as name/value pairs.
   * - Create Global Meters, which are not tied to a specific Product and allow you
   *   collect to usage data that will form the basis of usage-based pricing across
   *   more than one of your Products.
   *
   * **IMPORTANT! - use of PII:** The use of any of your end-customers' Personally
   * Identifiable Information (PII) in m3ter is restricted to a few fields on the
   * **Account** entity. Please ensure that any fields you configure for Meters, such
   * as Data Fields or Derived Fields, do not contain any end-customer PII data. See
   * the [Introduction section](https://www.m3ter.com/docs/api#section/Introduction)
   * above for more details.
   *
   * See also:
   *
   * - [Reviewing Meter Options](https://www.m3ter.com/docs/guides/setting-up-usage-data-meters-and-aggregations/reviewing-meter-options).
   */
  create(params: MeterCreateParams, options?: RequestOptions): APIPromise<MeterResponse> {
    const { orgId = this._client.orgID, ...body } = params;
    return this._client.post(path`/organizations/${orgId}/meters`, { body, ...options });
  }

  /**
   * Retrieve the Meter with the given UUID.
   */
  retrieve(
    id: string,
    params: MeterRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MeterResponse> {
    const { orgId = this._client.orgID } = params ?? {};
    return this._client.get(path`/organizations/${orgId}/meters/${id}`, options);
  }

  /**
   * Update the Meter with the given UUID.
   *
   * **Note:** If you have created Custom Fields for a Meter, when you use this
   * endpoint to update the Meter use the `customFields` parameter to preserve those
   * Custom Fields. If you omit them from the update request, they will be lost.
   */
  update(id: string, params: MeterUpdateParams, options?: RequestOptions): APIPromise<MeterResponse> {
    const { orgId = this._client.orgID, ...body } = params;
    return this._client.put(path`/organizations/${orgId}/meters/${id}`, { body, ...options });
  }

  /**
   * Retrieve a list of Meters that can be filtered by Product, Meter ID, or Meter
   * short code.
   */
  list(
    params: MeterListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MeterResponsesCursor, MeterResponse> {
    const { orgId = this._client.orgID, ...query } = params ?? {};
    return this._client.getAPIList(path`/organizations/${orgId}/meters`, Cursor<MeterResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Delete the Meter with the given UUID.
   */
  delete(
    id: string,
    params: MeterDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MeterResponse> {
    const { orgId = this._client.orgID } = params ?? {};
    return this._client.delete(path`/organizations/${orgId}/meters/${id}`, options);
  }
}

export type MeterResponsesCursor = Cursor<MeterResponse>;

export interface DataField {
  /**
   * The type of field (WHO, WHAT, WHERE, MEASURE, METADATA, INCOME, COST, OTHER).
   */
  category: 'WHO' | 'WHERE' | 'WHAT' | 'OTHER' | 'METADATA' | 'MEASURE' | 'INCOME' | 'COST';

  /**
   * Short code to identify the field
   *
   * **NOTE:** Code has a maximum length of 80 characters and can only contain
   * letters, numbers, underscore, and the dollar character, and must not start with
   * a number.
   */
  code: string;

  /**
   * Descriptive name of the field.
   */
  name: string;

  /**
   * The units to measure the data with. Should conform to _Unified Code for Units of
   * Measure_ (UCUM). Required only for numeric field categories.
   */
  unit?: string;
}

export interface DerivedField extends DataField {
  /**
   * The calculation used to transform the value of submitted `dataFields` in usage
   * data. Calculation can reference `dataFields`, `customFields`, or system
   * `Timestamp` fields. _(Example: datafieldms datafieldgb)_
   */
  calculation: string;
}

export interface MeterResponse {
  /**
   * The UUID of the entity.
   */
  id: string;

  /**
   * Code of the Meter - unique short code used to identify the Meter.
   */
  code?: string;

  /**
   * The id of the user who created this meter.
   */
  createdBy?: string;

  /**
   * User defined fields enabling you to attach custom data. The value for a custom
   * field can be either a string or a number.
   *
   * If `customFields` can also be defined for this entity at the Organizational
   * level,`customField` values defined at individual level override values of
   * `customFields` with the same name defined at Organization level.
   *
   * See
   * [Working with Custom Fields](https://www.m3ter.com/docs/guides/creating-and-managing-products/working-with-custom-fields)
   * in the m3ter documentation for more information.
   */
  customFields?: { [key: string]: string | number };

  /**
   * Used to submit categorized raw usage data values for ingest into the platform -
   * either numeric quantitative values or non-numeric data values. At least one
   * required per Meter; maximum 15 per Meter.
   */
  dataFields?: Array<DataField>;

  /**
   * Used to submit usage data values for ingest into the platform that are the
   * result of a calculation performed on `dataFields`, `customFields`, or system
   * `Timestamp` fields. Raw usage data is not submitted using `derivedFields`.
   * Maximum 15 per Meter. _(Optional)_.
   */
  derivedFields?: Array<DerivedField>;

  /**
   * The DateTime when the meter was created _(in ISO-8601 format)_.
   */
  dtCreated?: string;

  /**
   * The DateTime when the meter was last modified _(in ISO-8601 format)_.
   */
  dtLastModified?: string;

  /**
   * UUID of the MeterGroup the Meter belongs to. _(Optional)_.
   */
  groupId?: string;

  /**
   * The id of the user who last modified this meter.
   */
  lastModifiedBy?: string;

  /**
   * Descriptive name for the Meter.
   */
  name?: string;

  /**
   * UUID of the Product the Meter belongs to. _(Optional)_ - if blank, the Meter is
   * global.
   */
  productId?: string;

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

export interface MeterCreateParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param: Code of the Meter - unique short code used to identify the Meter.
   *
   * **NOTE:** Code has a maximum length of 80 characters and must not contain
   * non-printable or whitespace characters (except space), and cannot start/end with
   * whitespace.
   */
  code: string;

  /**
   * Body param: Used to submit categorized raw usage data values for ingest into the
   * platform - either numeric quantitative values or non-numeric data values. At
   * least one required per Meter; maximum 15 per Meter.
   */
  dataFields: Array<DataField>;

  /**
   * Body param: Used to submit usage data values for ingest into the platform that
   * are the result of a calculation performed on `dataFields`, `customFields`, or
   * system `Timestamp` fields. Raw usage data is not submitted using
   * `derivedFields`. Maximum 15 per Meter. _(Optional)_.
   *
   * **Note:** Required parameter. If you want to create a Meter without Derived
   * Fields, use an empty array `[]`. If you use a `null`, you'll receive an error.
   */
  derivedFields: Array<DerivedField>;

  /**
   * Body param: Descriptive name for the Meter.
   */
  name: string;

  /**
   * Body param: User defined fields enabling you to attach custom data. The value
   * for a custom field can be either a string or a number.
   *
   * If `customFields` can also be defined for this entity at the Organizational
   * level, `customField` values defined at individual level override values of
   * `customFields` with the same name defined at Organization level.
   *
   * See
   * [Working with Custom Fields](https://www.m3ter.com/docs/guides/creating-and-managing-products/working-with-custom-fields)
   * in the m3ter documentation for more information.
   */
  customFields?: { [key: string]: string | number };

  /**
   * Body param: UUID of the group the Meter belongs to. _(Optional)_.
   */
  groupId?: string;

  /**
   * Body param: UUID of the product the Meter belongs to. _(Optional)_ - if left
   * blank, the Meter is global.
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

export interface MeterRetrieveParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface MeterUpdateParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param: Code of the Meter - unique short code used to identify the Meter.
   *
   * **NOTE:** Code has a maximum length of 80 characters and must not contain
   * non-printable or whitespace characters (except space), and cannot start/end with
   * whitespace.
   */
  code: string;

  /**
   * Body param: Used to submit categorized raw usage data values for ingest into the
   * platform - either numeric quantitative values or non-numeric data values. At
   * least one required per Meter; maximum 15 per Meter.
   */
  dataFields: Array<DataField>;

  /**
   * Body param: Used to submit usage data values for ingest into the platform that
   * are the result of a calculation performed on `dataFields`, `customFields`, or
   * system `Timestamp` fields. Raw usage data is not submitted using
   * `derivedFields`. Maximum 15 per Meter. _(Optional)_.
   *
   * **Note:** Required parameter. If you want to create a Meter without Derived
   * Fields, use an empty array `[]`. If you use a `null`, you'll receive an error.
   */
  derivedFields: Array<DerivedField>;

  /**
   * Body param: Descriptive name for the Meter.
   */
  name: string;

  /**
   * Body param: User defined fields enabling you to attach custom data. The value
   * for a custom field can be either a string or a number.
   *
   * If `customFields` can also be defined for this entity at the Organizational
   * level, `customField` values defined at individual level override values of
   * `customFields` with the same name defined at Organization level.
   *
   * See
   * [Working with Custom Fields](https://www.m3ter.com/docs/guides/creating-and-managing-products/working-with-custom-fields)
   * in the m3ter documentation for more information.
   */
  customFields?: { [key: string]: string | number };

  /**
   * Body param: UUID of the group the Meter belongs to. _(Optional)_.
   */
  groupId?: string;

  /**
   * Body param: UUID of the product the Meter belongs to. _(Optional)_ - if left
   * blank, the Meter is global.
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

export interface MeterListParams extends CursorParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Query param: List of Meter codes to retrieve. These are the unique short codes
   * that identify each Meter.
   */
  codes?: Array<string>;

  /**
   * Query param: List of Meter IDs to retrieve.
   */
  ids?: Array<string>;

  /**
   * Query param: The UUIDs of the Products to retrieve Meters for.
   */
  productId?: Array<string>;
}

export interface MeterDeleteParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export declare namespace Meters {
  export {
    type DataField as DataField,
    type DerivedField as DerivedField,
    type MeterResponse as MeterResponse,
    type MeterResponsesCursor as MeterResponsesCursor,
    type MeterCreateParams as MeterCreateParams,
    type MeterRetrieveParams as MeterRetrieveParams,
    type MeterUpdateParams as MeterUpdateParams,
    type MeterListParams as MeterListParams,
    type MeterDeleteParams as MeterDeleteParams,
  };
}
