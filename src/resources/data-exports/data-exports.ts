// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as DataExportsAPI from './data-exports';
import * as DestinationsAPI from './destinations';
import {
  DataExportDestinationGoogleCloudStorageRequest,
  DataExportDestinationResponse,
  DataExportDestinationResponsesCursor,
  DataExportDestinationS3Request,
  DestinationCreateParams,
  DestinationCreateResponse,
  DestinationDeleteParams,
  DestinationDeleteResponse,
  DestinationListParams,
  DestinationRetrieveParams,
  DestinationRetrieveResponse,
  DestinationUpdateParams,
  DestinationUpdateResponse,
  Destinations,
} from './destinations';
import * as JobsAPI from './jobs';
import {
  DataExportJobResponse,
  DataExportJobResponsesCursor,
  JobGetDownloadURLParams,
  JobGetDownloadURLResponse,
  JobListParams,
  JobRetrieveParams,
  Jobs,
} from './jobs';
import * as SchedulesAPI from './schedules';
import {
  OperationalDataExportScheduleRequest,
  OperationalDataExportScheduleResponse,
  ScheduleCreateParams,
  ScheduleCreateResponse,
  ScheduleDeleteParams,
  ScheduleDeleteResponse,
  ScheduleListParams,
  ScheduleListResponse,
  ScheduleListResponsesCursor,
  ScheduleRetrieveParams,
  ScheduleRetrieveResponse,
  ScheduleUpdateParams,
  ScheduleUpdateResponse,
  Schedules,
  UsageDataExportScheduleRequest,
  UsageDataExportScheduleResponse,
} from './schedules';

export class DataExports extends APIResource {
  destinations: DestinationsAPI.Destinations = new DestinationsAPI.Destinations(this._client);
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);
  schedules: SchedulesAPI.Schedules = new SchedulesAPI.Schedules(this._client);

  /**
   * Trigger an ad-hoc Data Export. Each ad-hoc Export can be configured for
   * exporting _only one of_ either Usage or Operational data:
   *
   * **Operational Data Exports**.
   *
   * - **Entity Types**. Use the `operationalDataTypes` parameter to specify the
   *   entities whose operational data you want to include in the ad-hoc export.
   * - **Export Files**. For each of the entity types you select, when the ad-hoc
   *   export runs a separate file is compiled containing the operational data for
   *   all entities of that type that exist in your Organization
   *
   * **Usage Data Exports**.
   *
   * - Select the Meters and Accounts whose usage data you want to include in the
   *   ad-hoc export.
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
   * **Date Range for Operational Data Exports**. To restrict the operational data
   * included in the export by a date/time range, use the `startDate` and `endDate`
   * date/time request parameters to specify the period. Constraints:
   *
   * - `startDate` with no `endDate` is valid.
   * - `endDate` with no `startDate` is valid.
   * - If both are set,`startDate` must be before `endDate`.
   * - `endDate` must be before now UTC.
   *
   * **Date Range for Usage Data Exports**. To restrict the usage data included in
   * the export by date/time range, use the `startDate` and `endDate` date/time
   * parameters:
   *
   * - Both `startDate` and `endDate` are required.
   * - `endDate` must be after `startDate`.
   * - `endDate` cannot be after tomorrow at midnight UTC. For example if today is
   *   May 20th 2025, you can only choose `endDate` to be equal or before
   *   2025-05-21T00:00:00.000Z.
   *
   * **NOTE:** You can use the ExportJob `id` returned to check the status of the
   * triggered ad-hoc export. See the
   * [ExportJob](https://www.m3ter.com/docs/api#tag/ExportJob) section of this API
   * Reference.
   */
  createAdhoc(
    params: DataExportCreateAdhocParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AdHocResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.post(`/organizations/${orgId}/dataexports/adhoc`, { body, ...options });
  }
}

export interface AdHocOperationalDataRequest {
  /**
   * The list of the operational data types should be exported for.
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

/**
 * Response containing data export ad-hoc jobId
 */
export interface AdHocResponse {
  /**
   * The id of the job
   */
  jobId?: string;
}

export interface AdHocUsageDataRequest {
  /**
   * The type of data to export. Possible values are: USAGE
   */
  sourceType: 'USAGE';

  /**
   * List of account IDs for which the usage data will be exported.
   */
  accountIds?: Array<string>;

  /**
   * List of aggregations to apply
   */
  aggregations?: Array<AdHocUsageDataRequest.Aggregation>;

  /**
   * List of dimension filters to apply
   */
  dimensionFilters?: Array<AdHocUsageDataRequest.DimensionFilter>;

  /**
   * List of groups to apply
   */
  groups?: Array<
    | AdHocUsageDataRequest.DataExportsDataExplorerAccountGroup
    | AdHocUsageDataRequest.DataExportsDataExplorerDimensionGroup
    | AdHocUsageDataRequest.DataExportsDataExplorerTimeGroup
  >;

  /**
   * List of meter IDs for which the usage data will be exported.
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

export namespace AdHocUsageDataRequest {
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

  /**
   * Group by account
   */
  export interface DataExportsDataExplorerAccountGroup extends DataExportsAPI.DataExplorerAccountGroup {
    groupType?: 'ACCOUNT' | 'DIMENSION' | 'TIME';
  }

  /**
   * Group by dimension
   */
  export interface DataExportsDataExplorerDimensionGroup extends DataExportsAPI.DataExplorerDimensionGroup {
    groupType?: 'ACCOUNT' | 'DIMENSION' | 'TIME';
  }

  /**
   * Group by time
   */
  export interface DataExportsDataExplorerTimeGroup extends DataExportsAPI.DataExplorerTimeGroup {
    groupType?: 'ACCOUNT' | 'DIMENSION' | 'TIME';
  }
}

/**
 * Group by account
 */
export interface DataExplorerAccountGroup {
  groupType?: 'ACCOUNT' | 'DIMENSION' | 'TIME';
}

/**
 * Group by dimension
 */
export interface DataExplorerDimensionGroup {
  /**
   * Field code to group by
   */
  fieldCode: string;

  /**
   * Meter ID to group by
   */
  meterId: string;

  groupType?: 'ACCOUNT' | 'DIMENSION' | 'TIME';
}

/**
 * Group by time
 */
export interface DataExplorerTimeGroup {
  /**
   * Frequency of usage data
   */
  frequency: 'DAY' | 'HOUR' | 'WEEK' | 'MONTH' | 'QUARTER';

  groupType?: 'ACCOUNT' | 'DIMENSION' | 'TIME';
}

export type DataExportCreateAdhocParams =
  | DataExportCreateAdhocParams.AdHocOperationalDataRequest
  | DataExportCreateAdhocParams.AdHocUsageDataRequest;

export declare namespace DataExportCreateAdhocParams {
  export interface AdHocOperationalDataRequest {
    /**
     * @deprecated the org id should be set at the client level instead
     */
    orgId?: string;

    /**
     * Body param: The list of the operational data types should be exported for.
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

  export interface AdHocUsageDataRequest {
    /**
     * @deprecated the org id should be set at the client level instead
     */
    orgId?: string;

    /**
     * Body param: The type of data to export. Possible values are: USAGE
     */
    sourceType: 'USAGE';

    /**
     * Body param: List of account IDs for which the usage data will be exported.
     */
    accountIds?: Array<string>;

    /**
     * Body param: List of aggregations to apply
     */
    aggregations?: Array<AdHocUsageDataRequest.Aggregation>;

    /**
     * Body param: List of dimension filters to apply
     */
    dimensionFilters?: Array<AdHocUsageDataRequest.DimensionFilter>;

    /**
     * Body param: List of groups to apply
     */
    groups?: Array<
      | AdHocUsageDataRequest.DataExportsDataExplorerAccountGroup
      | AdHocUsageDataRequest.DataExportsDataExplorerDimensionGroup
      | AdHocUsageDataRequest.DataExportsDataExplorerTimeGroup
    >;

    /**
     * Body param: List of meter IDs for which the usage data will be exported.
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

  export namespace AdHocUsageDataRequest {
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

    /**
     * Group by account
     */
    export interface DataExportsDataExplorerAccountGroup extends DataExportsAPI.DataExplorerAccountGroup {
      groupType?: 'ACCOUNT' | 'DIMENSION' | 'TIME';
    }

    /**
     * Group by dimension
     */
    export interface DataExportsDataExplorerDimensionGroup extends DataExportsAPI.DataExplorerDimensionGroup {
      groupType?: 'ACCOUNT' | 'DIMENSION' | 'TIME';
    }

    /**
     * Group by time
     */
    export interface DataExportsDataExplorerTimeGroup extends DataExportsAPI.DataExplorerTimeGroup {
      groupType?: 'ACCOUNT' | 'DIMENSION' | 'TIME';
    }
  }
}

DataExports.Destinations = Destinations;
DataExports.DataExportDestinationResponsesCursor = DataExportDestinationResponsesCursor;
DataExports.Jobs = Jobs;
DataExports.DataExportJobResponsesCursor = DataExportJobResponsesCursor;
DataExports.Schedules = Schedules;
DataExports.ScheduleListResponsesCursor = ScheduleListResponsesCursor;

export declare namespace DataExports {
  export {
    type AdHocOperationalDataRequest as AdHocOperationalDataRequest,
    type AdHocResponse as AdHocResponse,
    type AdHocUsageDataRequest as AdHocUsageDataRequest,
    type DataExplorerAccountGroup as DataExplorerAccountGroup,
    type DataExplorerDimensionGroup as DataExplorerDimensionGroup,
    type DataExplorerTimeGroup as DataExplorerTimeGroup,
    type DataExportCreateAdhocParams as DataExportCreateAdhocParams,
  };

  export {
    Destinations as Destinations,
    type DataExportDestinationGoogleCloudStorageRequest as DataExportDestinationGoogleCloudStorageRequest,
    type DataExportDestinationResponse as DataExportDestinationResponse,
    type DataExportDestinationS3Request as DataExportDestinationS3Request,
    type DestinationCreateResponse as DestinationCreateResponse,
    type DestinationRetrieveResponse as DestinationRetrieveResponse,
    type DestinationUpdateResponse as DestinationUpdateResponse,
    type DestinationDeleteResponse as DestinationDeleteResponse,
    DataExportDestinationResponsesCursor as DataExportDestinationResponsesCursor,
    type DestinationCreateParams as DestinationCreateParams,
    type DestinationRetrieveParams as DestinationRetrieveParams,
    type DestinationUpdateParams as DestinationUpdateParams,
    type DestinationListParams as DestinationListParams,
    type DestinationDeleteParams as DestinationDeleteParams,
  };

  export {
    Jobs as Jobs,
    type DataExportJobResponse as DataExportJobResponse,
    type JobGetDownloadURLResponse as JobGetDownloadURLResponse,
    DataExportJobResponsesCursor as DataExportJobResponsesCursor,
    type JobRetrieveParams as JobRetrieveParams,
    type JobListParams as JobListParams,
    type JobGetDownloadURLParams as JobGetDownloadURLParams,
  };

  export {
    Schedules as Schedules,
    type OperationalDataExportScheduleRequest as OperationalDataExportScheduleRequest,
    type OperationalDataExportScheduleResponse as OperationalDataExportScheduleResponse,
    type UsageDataExportScheduleRequest as UsageDataExportScheduleRequest,
    type UsageDataExportScheduleResponse as UsageDataExportScheduleResponse,
    type ScheduleCreateResponse as ScheduleCreateResponse,
    type ScheduleRetrieveResponse as ScheduleRetrieveResponse,
    type ScheduleUpdateResponse as ScheduleUpdateResponse,
    type ScheduleListResponse as ScheduleListResponse,
    type ScheduleDeleteResponse as ScheduleDeleteResponse,
    ScheduleListResponsesCursor as ScheduleListResponsesCursor,
    type ScheduleCreateParams as ScheduleCreateParams,
    type ScheduleRetrieveParams as ScheduleRetrieveParams,
    type ScheduleUpdateParams as ScheduleUpdateParams,
    type ScheduleListParams as ScheduleListParams,
    type ScheduleDeleteParams as ScheduleDeleteParams,
  };
}
