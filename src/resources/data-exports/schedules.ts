// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DataExportsAPI from './data-exports';
import { APIPromise } from '../../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Schedules extends APIResource {
  /**
   * Create a new Data Export Schedule. Each Schedule can be configured for exporting
   * _only one_ of either Usage or Operational data:
   *
   * **Operational Data Exports**.
   *
   * - Use the `operationalDataTypes` parameter to specify the entities whose
   *   operational data you want to include in the export each time the Export
   *   Schedule runs.
   * - For each of the entity types you select, each time the Export Schedule runs a
   *   separate file is compiled containing the operational data for all entities of
   *   that type that exist in your Organization
   *
   * **Usage Data Exports**.
   *
   * - Select the Meters and Accounts whose usage data you want to include in the
   *   export each time the Export Schedule runs.
   * - You can use the `dimensionFilters` parameter to filter the usage data returned
   *   for export by adding specific values of non-numeric Dimension data fields on
   *   included Meters. Only the data collected for the values you've added for the
   *   selected Dimension fields will be included in the export.
   * - You can use the `aggregations` to apply aggregation methods the usage data
   *   returned for export. This restricts the range of usage data returned for
   *   export to only the data collected by aggregated fields on selected Meters.
   *   Nothing is returned for any non-aggregated fields on Meters. The usage data
   *   for Meter fields is returned as the values resulting from applying the
   *   selected aggregation method. See the
   *   [Aggregations for Queries - Options and Consequences](https://www.m3ter.com/docs/guides/data-explorer/usage-data-explorer-v2#aggregations-for-queries---understanding-options-and-consequences)
   *   for more details.
   * - If you've applied `aggregations` to the usage returned for export, you can
   *   then use the `groups` parameter to group the data by _Account_, _Dimension_,
   *   or _Time_.
   *
   * Request and Response schema:
   *
   * - Use the selector under the `sourceType` parameter to expose the relevant
   *   request and response schema for the source data type.
   *
   * Request and Response samples:
   *
   * - Use the **Example** selector to show the relevant request and response samples
   *   for source data type.
   */
  create(params: ScheduleCreateParams, options?: RequestOptions): APIPromise<ScheduleCreateResponse> {
    const { orgId = this._client.orgID, ...body } = params;
    return this._client.post(path`/organizations/${orgId}/dataexports/schedules`, { body, ...options });
  }

  /**
   * Retrieve a Data Export Schedule for the given UUID. Each Schedule can be
   * configured for exporting _only one_ of either Usage or Operational data.
   */
  retrieve(
    id: string,
    params: ScheduleRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ScheduleRetrieveResponse> {
    const { orgId = this._client.orgID } = params ?? {};
    return this._client.get(path`/organizations/${orgId}/dataexports/schedules/${id}`, options);
  }

  /**
   * Update a Data Export Schedule for the given UUID. Each Schedule can be
   * configured for exporting _only one_ of either Usage or Operational data:
   *
   * **Operational Data Exports**.
   *
   * - Use the `operationalDataTypes` parameter to specify the entities whose
   *   operational data you want to include in the export each time the Export
   *   Schedule runs.
   * - For each of the entity types you select, each time the Export Schedule runs a
   *   separate file is compiled containing the operational data for all entities of
   *   that type that exist in your Organization
   *
   * **Usage Data Exports**.
   *
   * - Select the Meters and Accounts whose usage data you want to include in the
   *   export each time the Export Schedule runs.
   * - You can use the `dimensionFilters` parameter to filter the usage data returned
   *   for export by adding specific values of non-numeric Dimension data fields on
   *   included Meters. Only the data collected for the values you've added for the
   *   selected Dimension fields will be included in the export.
   * - You can use the `aggregations` to apply aggregation methods the usage data
   *   returned for export. This restricts the range of usage data returned for
   *   export to only the data collected by aggregated fields on selected Meters.
   *   Nothing is returned for any non-aggregated fields on Meters. The usage data
   *   for Meter fields is returned as the values resulting from applying the
   *   selected aggregation method. See the
   *   [Aggregations for Queries - Options and Consequences](https://www.m3ter.com/docs/guides/data-explorer/usage-data-explorer-v2#aggregations-for-queries---understanding-options-and-consequences)
   *   for more details.
   * - If you've applied `aggregations` to the usage returned for export, you can
   *   then use the `groups` parameter to group the data by _Account_, _Dimension_,
   *   or _Time_.
   */
  update(
    id: string,
    params: ScheduleUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ScheduleUpdateResponse> {
    const { orgId = this._client.orgID, ...body } = params;
    return this._client.put(path`/organizations/${orgId}/dataexports/schedules/${id}`, { body, ...options });
  }

  /**
   * Retrieve a list of Data Export Schedules created for your Organization. You can
   * filter the response by Schedules `ids`.
   *
   * The response will contain an array for both the operational and usage Data
   * Export Schedules in your Organization.
   */
  list(
    params: ScheduleListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ScheduleListResponsesCursor, ScheduleListResponse> {
    const { orgId = this._client.orgID, ...query } = params ?? {};
    return this._client.getAPIList(
      path`/organizations/${orgId}/dataexports/schedules`,
      Cursor<ScheduleListResponse>,
      { query, ...options },
    );
  }

  /**
   * Delete the Data Export Schedule for the given UUID. Each Schedule can be
   * configured for exporting _only one_ of either Usage or Operational data.
   */
  delete(
    id: string,
    params: ScheduleDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ScheduleDeleteResponse> {
    const { orgId = this._client.orgID } = params ?? {};
    return this._client.delete(path`/organizations/${orgId}/dataexports/schedules/${id}`, options);
  }
}

export type ScheduleListResponsesCursor = Cursor<ScheduleListResponse>;

export interface OperationalDataExportScheduleRequest {
  /**
   * A list of the entities whose operational data is included in the data export.
   */
  operationalDataTypes: Array<
    | 'BILLS'
    | 'COMMITMENTS'
    | 'ACCOUNTS'
    | 'BALANCES'
    | 'CONTRACTS'
    | 'ACCOUNT_PLANS'
    | 'AGGREGATIONS'
    | 'PLANS'
    | 'PRICING'
    | 'PRICING_BANDS'
    | 'BILL_LINE_ITEMS'
    | 'METERS'
    | 'PRODUCTS'
    | 'COMPOUND_AGGREGATIONS'
    | 'PLAN_GROUPS'
    | 'PLAN_GROUP_LINKS'
    | 'PLAN_TEMPLATES'
    | 'BALANCE_TRANSACTIONS'
    | 'TRANSACTION_TYPES'
    | 'CHARGES'
  >;

  /**
   * The type of data to export. Possible values are: OPERATIONAL
   */
  sourceType: 'OPERATIONAL';

  /**
   * The version number of the entity:
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

export interface OperationalDataExportScheduleResponse {
  /**
   * The id of the schedule.
   */
  id: string;

  /**
   * A list of the entities whose operational data is included in the data export.
   */
  operationalDataTypes?: Array<
    | 'BILLS'
    | 'COMMITMENTS'
    | 'ACCOUNTS'
    | 'BALANCES'
    | 'CONTRACTS'
    | 'ACCOUNT_PLANS'
    | 'AGGREGATIONS'
    | 'PLANS'
    | 'PRICING'
    | 'PRICING_BANDS'
    | 'BILL_LINE_ITEMS'
    | 'METERS'
    | 'PRODUCTS'
    | 'COMPOUND_AGGREGATIONS'
    | 'PLAN_GROUPS'
    | 'PLAN_GROUP_LINKS'
    | 'PLAN_TEMPLATES'
    | 'BALANCE_TRANSACTIONS'
    | 'TRANSACTION_TYPES'
    | 'CHARGES'
  >;

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

export interface UsageDataExportScheduleRequest {
  /**
   * The type of data to export. Possible values are: USAGE
   */
  sourceType: 'USAGE';

  /**
   * Define a time period to control the range of usage data you want the data export
   * to contain when it runs:
   *
   * - **TODAY**. Data collected for the current day up until the time the export is
   *   scheduled to run.
   * - **YESTERDAY**. Data collected for the day before the export runs under the
   *   schedule - that is, the 24 hour period from midnight to midnight of the day
   *   before.
   * - **PREVIOUS_WEEK**, **PREVIOUS_MONTH**, **PREVIOUS_QUARTER**,
   *   **PREVIOUS_YEAR**. Data collected for the previous full week, month, quarter,
   *   or year period. For example if **PREVIOUS_WEEK**, weeks run Monday to Monday -
   *   if the export is scheduled to run on June 12th 2024, which is a Wednesday, the
   *   export will contain data for the period running from Monday, June 3rd 2024 to
   *   midnight on Sunday, June 9th 2024.
   * - **WEEK_TO_DATE**, **MONTH_TO_DATE**, or **YEAR_TO_DATE**. Data collected for
   *   the period covering the current week, month, or year period. For example if
   *   **WEEK_TO_DATE**, weeks run Monday to Monday - if the Export is scheduled to
   *   run at 10 a.m. UTC on October 16th 2024, which is a Wednesday, it will contain
   *   all usage data collected starting Monday October 14th 2024 through to the
   *   Wednesday at 10 a.m. UTC of the current week.
   * - **LAST_12_HOURS**. Data collected for the twelve hour period up to the start
   *   of the hour in which the export is scheduled to run.
   * - **LAST_7_DAYS**, **LAST_30_DAYS**, **LAST_35_DAYS**, **LAST_90_DAYS**,
   *   **LAST_120_DAYS** **LAST_YEAR**. Data collected for the selected period prior
   *   to the date the export is scheduled to run. For example if **LAST_30_DAYS**
   *   and the export is scheduled to run for any time on June 15th 2024, it will
   *   contain usage data collected for the previous 30 days - starting May 16th 2024
   *   through to midnight on June 14th 2024
   *
   * For more details and examples, see the
   * [Time Period](https://www.m3ter.com/docs/guides/data-exports/creating-export-schedules#time-period)
   * section in our main User Documentation.
   */
  timePeriod:
    | 'TODAY'
    | 'YESTERDAY'
    | 'WEEK_TO_DATE'
    | 'MONTH_TO_DATE'
    | 'YEAR_TO_DATE'
    | 'PREVIOUS_WEEK'
    | 'PREVIOUS_MONTH'
    | 'PREVIOUS_QUARTER'
    | 'PREVIOUS_YEAR'
    | 'LAST_12_HOURS'
    | 'LAST_7_DAYS'
    | 'LAST_30_DAYS'
    | 'LAST_35_DAYS'
    | 'LAST_90_DAYS'
    | 'LAST_120_DAYS'
    | 'LAST_YEAR';

  /**
   * List of account IDs to export
   */
  accountIds?: Array<string>;

  /**
   * List of aggregations to apply
   */
  aggregations?: Array<UsageDataExportScheduleRequest.Aggregation>;

  /**
   * List of dimension filters to apply
   */
  dimensionFilters?: Array<UsageDataExportScheduleRequest.DimensionFilter>;

  /**
   * List of groups to apply
   */
  groups?: Array<DataExportsAPI.DataExplorerGroup>;

  /**
   * List of meter IDs to export
   */
  meterIds?: Array<string>;

  /**
   * The version number of the entity:
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

export namespace UsageDataExportScheduleRequest {
  export interface Aggregation {
    /**
     * Field code
     */
    fieldCode: string;

    /**
     * Type of field
     */
    fieldType: 'DIMENSION' | 'MEASURE';

    /**
     * Aggregation function
     */
    function: 'SUM' | 'MIN' | 'MAX' | 'COUNT' | 'LATEST' | 'MEAN' | 'UNIQUE';

    /**
     * Meter ID
     */
    meterId: string;
  }

  export interface DimensionFilter {
    /**
     * Field code
     */
    fieldCode: string;

    /**
     * Meter ID
     */
    meterId: string;

    /**
     * Values to filter by
     */
    values: Array<string>;
  }
}

export interface UsageDataExportScheduleResponse {
  /**
   * The id of the schedule configuration.
   */
  id: string;

  /**
   * List of account IDs for which the usage data will be exported.
   */
  accountIds?: Array<string>;

  /**
   * List of aggregations to apply
   */
  aggregations?: Array<UsageDataExportScheduleResponse.Aggregation>;

  /**
   * List of dimension filters to apply
   */
  dimensionFilters?: Array<UsageDataExportScheduleResponse.DimensionFilter>;

  /**
   * List of groups to apply
   */
  groups?: Array<DataExportsAPI.DataExplorerGroup>;

  /**
   * List of meter IDs for which the usage data will be exported.
   */
  meterIds?: Array<string>;

  /**
   * Define a time period to control the range of usage data you want the data export
   * to contain when it runs:
   *
   * - **TODAY**. Data collected for the current day up until the time the export is
   *   scheduled to run.
   * - **YESTERDAY**. Data collected for the day before the export runs under the
   *   schedule - that is, the 24 hour period from midnight to midnight of the day
   *   before.
   * - **PREVIOUS_WEEK**, **PREVIOUS_MONTH**, **PREVIOUS_QUARTER**,
   *   **PREVIOUS_YEAR**. Data collected for the previous full week, month, quarter,
   *   or year period. For example if **PREVIOUS_WEEK**, weeks run Monday to Monday -
   *   if the export is scheduled to run on June 12th 2024, which is a Wednesday, the
   *   export will contain data for the period running from Monday, June 3rd 2024 to
   *   midnight on Sunday, June 9th 2024.
   * - **WEEK_TO_DATE**, **MONTH_TO_DATE**, or **YEAR_TO_DATE**. Data collected for
   *   the period covering the current week, month, or year period. For example if
   *   **WEEK_TO_DATE**, weeks run Monday to Monday - if the Export is scheduled to
   *   run at 10 a.m. UTC on October 16th 2024, which is a Wednesday, it will contain
   *   all usage data collected starting Monday October 14th 2024 through to the
   *   Wednesday at 10 a.m. UTC of the current week.
   * - **LAST_12_HOURS**. Data collected for the twelve hour period up to the start
   *   of the hour in which the export is scheduled to run.
   * - **LAST_7_DAYS**, **LAST_30_DAYS**, **LAST_35_DAYS**, **LAST_90_DAYS**,
   *   **LAST_120_DAYS** **LAST_YEAR**. Data collected for the selected period prior
   *   to the date the export is scheduled to run. For example if **LAST_30_DAYS**
   *   and the export is scheduled to run for any time on June 15th 2024, it will
   *   contain usage data collected for the previous 30 days - starting May 16th 2024
   *   through to midnight on June 14th 2024
   *
   * For more details and examples, see the
   * [Time Period](https://www.m3ter.com/docs/guides/data-exports/creating-export-schedules#time-period)
   * section in our main User Documentation.
   */
  timePeriod?:
    | 'TODAY'
    | 'YESTERDAY'
    | 'WEEK_TO_DATE'
    | 'MONTH_TO_DATE'
    | 'YEAR_TO_DATE'
    | 'PREVIOUS_WEEK'
    | 'PREVIOUS_MONTH'
    | 'PREVIOUS_QUARTER'
    | 'PREVIOUS_YEAR'
    | 'LAST_12_HOURS'
    | 'LAST_7_DAYS'
    | 'LAST_30_DAYS'
    | 'LAST_35_DAYS'
    | 'LAST_90_DAYS'
    | 'LAST_120_DAYS'
    | 'LAST_YEAR';

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

export namespace UsageDataExportScheduleResponse {
  export interface Aggregation {
    /**
     * Field code
     */
    fieldCode: string;

    /**
     * Type of field
     */
    fieldType: 'DIMENSION' | 'MEASURE';

    /**
     * Aggregation function
     */
    function: 'SUM' | 'MIN' | 'MAX' | 'COUNT' | 'LATEST' | 'MEAN' | 'UNIQUE';

    /**
     * Meter ID
     */
    meterId: string;
  }

  export interface DimensionFilter {
    /**
     * Field code
     */
    fieldCode: string;

    /**
     * Meter ID
     */
    meterId: string;

    /**
     * Values to filter by
     */
    values: Array<string>;
  }
}

/**
 * Response representing an operational data export configuration.
 */
export type ScheduleCreateResponse = OperationalDataExportScheduleResponse | UsageDataExportScheduleResponse;

/**
 * Response representing an operational data export configuration.
 */
export type ScheduleRetrieveResponse =
  | OperationalDataExportScheduleResponse
  | UsageDataExportScheduleResponse;

/**
 * Response representing an operational data export configuration.
 */
export type ScheduleUpdateResponse = OperationalDataExportScheduleResponse | UsageDataExportScheduleResponse;

export interface ScheduleListResponse {
  /**
   * The id of the Data Export Schedule.
   */
  id: string;

  /**
   * Unique short code of the Data Export Schedule.
   */
  code?: string;

  /**
   * The id of the user who created this Schedule.
   */
  createdBy?: string;

  /**
   * A cron expression (https://en.wikipedia.org/wiki/Cron) describing the frequency
   * of the expression. Executions cannot be more frequent than every 15 minutes.
   */
  cronExpression?: string;

  /**
   * The Export Destination ids.
   */
  destinationIds?: Array<string>;

  /**
   * The DateTime when the Data Export Schedule was created.
   */
  dtCreated?: string;

  /**
   * The DateTime when the Schedule was last modified.
   */
  dtLastModified?: string;

  exportFileFormat?: 'CSV' | 'JSONL';

  /**
   * The id of the user who last modified this Data Export Schedule.
   */
  lastModifiedBy?: string;

  /**
   * The name of the Data Export Schedule.
   */
  name?: string;

  /**
   * Offset indicating starting point of the export within the configured
   * scheduleType. For DAY, offset is in hours. For HOUR, offset is in minutes.
   * Offset is not valid for MINUTE.
   */
  offset?: number;

  /**
   * Defines the Schedule frequency for the Data Export to run in Hours, Days, or
   * Minutes. Used in conjunction with the `scheduleType` parameter.
   */
  period?: number;

  scheduleType?: 'HOUR' | 'DAY' | 'MINUTE' | 'AD_HOC';

  sourceType?: 'USAGE' | 'OPERATIONAL';

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

/**
 * Response representing an operational data export configuration.
 */
export type ScheduleDeleteResponse = OperationalDataExportScheduleResponse | UsageDataExportScheduleResponse;

export type ScheduleCreateParams =
  | ScheduleCreateParams.OperationalDataExportScheduleRequest
  | ScheduleCreateParams.UsageDataExportScheduleRequest;

export declare namespace ScheduleCreateParams {
  export interface OperationalDataExportScheduleRequest {
    /**
     * @deprecated the org id should be set at the client level instead
     */
    orgId?: string;

    /**
     * Body param: A list of the entities whose operational data is included in the
     * data export.
     */
    operationalDataTypes: Array<
      | 'BILLS'
      | 'COMMITMENTS'
      | 'ACCOUNTS'
      | 'BALANCES'
      | 'CONTRACTS'
      | 'ACCOUNT_PLANS'
      | 'AGGREGATIONS'
      | 'PLANS'
      | 'PRICING'
      | 'PRICING_BANDS'
      | 'BILL_LINE_ITEMS'
      | 'METERS'
      | 'PRODUCTS'
      | 'COMPOUND_AGGREGATIONS'
      | 'PLAN_GROUPS'
      | 'PLAN_GROUP_LINKS'
      | 'PLAN_TEMPLATES'
      | 'BALANCE_TRANSACTIONS'
      | 'TRANSACTION_TYPES'
      | 'CHARGES'
    >;

    /**
     * Body param: The type of data to export. Possible values are: OPERATIONAL
     */
    sourceType: 'OPERATIONAL';

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

  export interface UsageDataExportScheduleRequest {
    /**
     * @deprecated the org id should be set at the client level instead
     */
    orgId?: string;

    /**
     * Body param: The type of data to export. Possible values are: USAGE
     */
    sourceType: 'USAGE';

    /**
     * Body param: Define a time period to control the range of usage data you want the
     * data export to contain when it runs:
     *
     * - **TODAY**. Data collected for the current day up until the time the export is
     *   scheduled to run.
     * - **YESTERDAY**. Data collected for the day before the export runs under the
     *   schedule - that is, the 24 hour period from midnight to midnight of the day
     *   before.
     * - **PREVIOUS_WEEK**, **PREVIOUS_MONTH**, **PREVIOUS_QUARTER**,
     *   **PREVIOUS_YEAR**. Data collected for the previous full week, month, quarter,
     *   or year period. For example if **PREVIOUS_WEEK**, weeks run Monday to Monday -
     *   if the export is scheduled to run on June 12th 2024, which is a Wednesday, the
     *   export will contain data for the period running from Monday, June 3rd 2024 to
     *   midnight on Sunday, June 9th 2024.
     * - **WEEK_TO_DATE**, **MONTH_TO_DATE**, or **YEAR_TO_DATE**. Data collected for
     *   the period covering the current week, month, or year period. For example if
     *   **WEEK_TO_DATE**, weeks run Monday to Monday - if the Export is scheduled to
     *   run at 10 a.m. UTC on October 16th 2024, which is a Wednesday, it will contain
     *   all usage data collected starting Monday October 14th 2024 through to the
     *   Wednesday at 10 a.m. UTC of the current week.
     * - **LAST_12_HOURS**. Data collected for the twelve hour period up to the start
     *   of the hour in which the export is scheduled to run.
     * - **LAST_7_DAYS**, **LAST_30_DAYS**, **LAST_35_DAYS**, **LAST_90_DAYS**,
     *   **LAST_120_DAYS** **LAST_YEAR**. Data collected for the selected period prior
     *   to the date the export is scheduled to run. For example if **LAST_30_DAYS**
     *   and the export is scheduled to run for any time on June 15th 2024, it will
     *   contain usage data collected for the previous 30 days - starting May 16th 2024
     *   through to midnight on June 14th 2024
     *
     * For more details and examples, see the
     * [Time Period](https://www.m3ter.com/docs/guides/data-exports/creating-export-schedules#time-period)
     * section in our main User Documentation.
     */
    timePeriod:
      | 'TODAY'
      | 'YESTERDAY'
      | 'WEEK_TO_DATE'
      | 'MONTH_TO_DATE'
      | 'YEAR_TO_DATE'
      | 'PREVIOUS_WEEK'
      | 'PREVIOUS_MONTH'
      | 'PREVIOUS_QUARTER'
      | 'PREVIOUS_YEAR'
      | 'LAST_12_HOURS'
      | 'LAST_7_DAYS'
      | 'LAST_30_DAYS'
      | 'LAST_35_DAYS'
      | 'LAST_90_DAYS'
      | 'LAST_120_DAYS'
      | 'LAST_YEAR';

    /**
     * Body param: List of account IDs to export
     */
    accountIds?: Array<string>;

    /**
     * Body param: List of aggregations to apply
     */
    aggregations?: Array<UsageDataExportScheduleRequest.Aggregation>;

    /**
     * Body param: List of dimension filters to apply
     */
    dimensionFilters?: Array<UsageDataExportScheduleRequest.DimensionFilter>;

    /**
     * Body param: List of groups to apply
     */
    groups?: Array<DataExportsAPI.DataExplorerGroup>;

    /**
     * Body param: List of meter IDs to export
     */
    meterIds?: Array<string>;

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

  export namespace UsageDataExportScheduleRequest {
    export interface Aggregation {
      /**
       * Field code
       */
      fieldCode: string;

      /**
       * Type of field
       */
      fieldType: 'DIMENSION' | 'MEASURE';

      /**
       * Aggregation function
       */
      function: 'SUM' | 'MIN' | 'MAX' | 'COUNT' | 'LATEST' | 'MEAN' | 'UNIQUE';

      /**
       * Meter ID
       */
      meterId: string;
    }

    export interface DimensionFilter {
      /**
       * Field code
       */
      fieldCode: string;

      /**
       * Meter ID
       */
      meterId: string;

      /**
       * Values to filter by
       */
      values: Array<string>;
    }
  }
}

export interface ScheduleRetrieveParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export type ScheduleUpdateParams =
  | ScheduleUpdateParams.OperationalDataExportScheduleRequest
  | ScheduleUpdateParams.UsageDataExportScheduleRequest;

export declare namespace ScheduleUpdateParams {
  export interface OperationalDataExportScheduleRequest {
    /**
     * @deprecated the org id should be set at the client level instead
     */
    orgId?: string;

    /**
     * Body param: A list of the entities whose operational data is included in the
     * data export.
     */
    operationalDataTypes: Array<
      | 'BILLS'
      | 'COMMITMENTS'
      | 'ACCOUNTS'
      | 'BALANCES'
      | 'CONTRACTS'
      | 'ACCOUNT_PLANS'
      | 'AGGREGATIONS'
      | 'PLANS'
      | 'PRICING'
      | 'PRICING_BANDS'
      | 'BILL_LINE_ITEMS'
      | 'METERS'
      | 'PRODUCTS'
      | 'COMPOUND_AGGREGATIONS'
      | 'PLAN_GROUPS'
      | 'PLAN_GROUP_LINKS'
      | 'PLAN_TEMPLATES'
      | 'BALANCE_TRANSACTIONS'
      | 'TRANSACTION_TYPES'
      | 'CHARGES'
    >;

    /**
     * Body param: The type of data to export. Possible values are: OPERATIONAL
     */
    sourceType: 'OPERATIONAL';

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

  export interface UsageDataExportScheduleRequest {
    /**
     * @deprecated the org id should be set at the client level instead
     */
    orgId?: string;

    /**
     * Body param: The type of data to export. Possible values are: USAGE
     */
    sourceType: 'USAGE';

    /**
     * Body param: Define a time period to control the range of usage data you want the
     * data export to contain when it runs:
     *
     * - **TODAY**. Data collected for the current day up until the time the export is
     *   scheduled to run.
     * - **YESTERDAY**. Data collected for the day before the export runs under the
     *   schedule - that is, the 24 hour period from midnight to midnight of the day
     *   before.
     * - **PREVIOUS_WEEK**, **PREVIOUS_MONTH**, **PREVIOUS_QUARTER**,
     *   **PREVIOUS_YEAR**. Data collected for the previous full week, month, quarter,
     *   or year period. For example if **PREVIOUS_WEEK**, weeks run Monday to Monday -
     *   if the export is scheduled to run on June 12th 2024, which is a Wednesday, the
     *   export will contain data for the period running from Monday, June 3rd 2024 to
     *   midnight on Sunday, June 9th 2024.
     * - **WEEK_TO_DATE**, **MONTH_TO_DATE**, or **YEAR_TO_DATE**. Data collected for
     *   the period covering the current week, month, or year period. For example if
     *   **WEEK_TO_DATE**, weeks run Monday to Monday - if the Export is scheduled to
     *   run at 10 a.m. UTC on October 16th 2024, which is a Wednesday, it will contain
     *   all usage data collected starting Monday October 14th 2024 through to the
     *   Wednesday at 10 a.m. UTC of the current week.
     * - **LAST_12_HOURS**. Data collected for the twelve hour period up to the start
     *   of the hour in which the export is scheduled to run.
     * - **LAST_7_DAYS**, **LAST_30_DAYS**, **LAST_35_DAYS**, **LAST_90_DAYS**,
     *   **LAST_120_DAYS** **LAST_YEAR**. Data collected for the selected period prior
     *   to the date the export is scheduled to run. For example if **LAST_30_DAYS**
     *   and the export is scheduled to run for any time on June 15th 2024, it will
     *   contain usage data collected for the previous 30 days - starting May 16th 2024
     *   through to midnight on June 14th 2024
     *
     * For more details and examples, see the
     * [Time Period](https://www.m3ter.com/docs/guides/data-exports/creating-export-schedules#time-period)
     * section in our main User Documentation.
     */
    timePeriod:
      | 'TODAY'
      | 'YESTERDAY'
      | 'WEEK_TO_DATE'
      | 'MONTH_TO_DATE'
      | 'YEAR_TO_DATE'
      | 'PREVIOUS_WEEK'
      | 'PREVIOUS_MONTH'
      | 'PREVIOUS_QUARTER'
      | 'PREVIOUS_YEAR'
      | 'LAST_12_HOURS'
      | 'LAST_7_DAYS'
      | 'LAST_30_DAYS'
      | 'LAST_35_DAYS'
      | 'LAST_90_DAYS'
      | 'LAST_120_DAYS'
      | 'LAST_YEAR';

    /**
     * Body param: List of account IDs to export
     */
    accountIds?: Array<string>;

    /**
     * Body param: List of aggregations to apply
     */
    aggregations?: Array<UsageDataExportScheduleRequest.Aggregation>;

    /**
     * Body param: List of dimension filters to apply
     */
    dimensionFilters?: Array<UsageDataExportScheduleRequest.DimensionFilter>;

    /**
     * Body param: List of groups to apply
     */
    groups?: Array<DataExportsAPI.DataExplorerGroup>;

    /**
     * Body param: List of meter IDs to export
     */
    meterIds?: Array<string>;

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

  export namespace UsageDataExportScheduleRequest {
    export interface Aggregation {
      /**
       * Field code
       */
      fieldCode: string;

      /**
       * Type of field
       */
      fieldType: 'DIMENSION' | 'MEASURE';

      /**
       * Aggregation function
       */
      function: 'SUM' | 'MIN' | 'MAX' | 'COUNT' | 'LATEST' | 'MEAN' | 'UNIQUE';

      /**
       * Meter ID
       */
      meterId: string;
    }

    export interface DimensionFilter {
      /**
       * Field code
       */
      fieldCode: string;

      /**
       * Meter ID
       */
      meterId: string;

      /**
       * Values to filter by
       */
      values: Array<string>;
    }
  }
}

export interface ScheduleListParams extends CursorParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Query param: Data Export Schedule IDs to filter the returned list by.
   */
  ids?: Array<string>;
}

export interface ScheduleDeleteParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export declare namespace Schedules {
  export {
    type OperationalDataExportScheduleRequest as OperationalDataExportScheduleRequest,
    type OperationalDataExportScheduleResponse as OperationalDataExportScheduleResponse,
    type UsageDataExportScheduleRequest as UsageDataExportScheduleRequest,
    type UsageDataExportScheduleResponse as UsageDataExportScheduleResponse,
    type ScheduleCreateResponse as ScheduleCreateResponse,
    type ScheduleRetrieveResponse as ScheduleRetrieveResponse,
    type ScheduleUpdateResponse as ScheduleUpdateResponse,
    type ScheduleListResponse as ScheduleListResponse,
    type ScheduleDeleteResponse as ScheduleDeleteResponse,
    type ScheduleListResponsesCursor as ScheduleListResponsesCursor,
    type ScheduleCreateParams as ScheduleCreateParams,
    type ScheduleRetrieveParams as ScheduleRetrieveParams,
    type ScheduleUpdateParams as ScheduleUpdateParams,
    type ScheduleListParams as ScheduleListParams,
    type ScheduleDeleteParams as ScheduleDeleteParams,
  };
}
