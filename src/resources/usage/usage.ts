// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DataExportsAPI from '../data-exports/data-exports';
import * as FileUploadsAPI from './file-uploads/file-uploads';
import {
  FileUploadGenerateUploadURLParams,
  FileUploadGenerateUploadURLResponse,
  FileUploads,
} from './file-uploads/file-uploads';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Usage extends APIResource {
  fileUploads: FileUploadsAPI.FileUploads = new FileUploadsAPI.FileUploads(this._client);

  /**
   * Returns a presigned download URL for failed ingest file download based on the
   * file path provided.
   *
   * If a usage data ingest measurement you submit to the m3ter platform fails, an
   * `ingest.validation.failure` Event is generated. Use this call to obtain a
   * download URL which you can then use to download a file containing details of
   * what went wrong with the attempted usage data measurement ingest, and allowing
   * you to follow-up and resolve the issue.
   *
   * To obtain the `file` query parameter:
   *
   * - Use the
   *   [List Events](https://www.m3ter.com/docs/api#tag/Events/operation/ListEventFields)
   *   call with the `ingest.validation.failure` for the `eventName` query parameter.
   * - The response contains a `getDownloadUrl` response parameter and this contains
   *   the file path you can use to obtain the failed ingest file download URL.
   *
   * **Notes:**
   *
   * - The presigned Url returned to use for failed ingest file download is
   *   time-bound and expires after 5 minutes.
   * - If you make a List Events call for `ingest.validation.failure` Events in your
   *   Organization, then you can perform this **GET** call using the full URL
   *   returned for any ingest failure Event to obtain a failed ingest file download
   *   URL for the Event.
   *
   * @example
   * ```ts
   * const downloadURLResponse =
   *   await client.usage.getFailedIngestDownloadURL();
   * ```
   */
  getFailedIngestDownloadURL(
    params: UsageGetFailedIngestDownloadURLParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DownloadURLResponse> {
    const { orgId = this._client.orgID, ...query } = params ?? {};
    return this._client.get(path`/organizations/${orgId}/measurements/failedIngest/getDownloadUrl`, {
      query,
      ...options,
    });
  }

  /**
   * Query and filter usage data collected for your Organization.
   *
   * You can use several parameters to filter the range of usage data returned:
   *
   * - **Time period.** Use `startDate` and `endDate` to define a period. The query
   *   references the `timestamp` values of usage data submissions for applying the
   *   defined time period, and not the time submissions were `receivedAt` by the
   *   platform. Only usage data with a `timestamp` that falls in the defined time
   *   period are returned.(Required)
   * - **Meters.** Specify the Meters you want the query to return data for.
   * - **Accounts.** Specify the Accounts you want the query to return data for.
   * - **Dimension Filters.** Specify values for Dimension data fields on included
   *   Meters. Only data that match the specified Dimension field values will be
   *   returned for the query.
   *
   * You can apply Aggregations functions to the usage data returned for the query.
   * If you apply Aggregations, you can select to group the data by:
   *
   * - **Account**
   * - **Time**
   * - **Dimension**
   *
   * @example
   * ```ts
   * const usageQueryResponse = await client.usage.query();
   * ```
   */
  query(
    params: UsageQueryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UsageQueryResponse> {
    const { orgId = this._client.orgID, ...body } = params ?? {};
    return this._client.post(path`/organizations/${orgId}/usage/query`, { body, ...options });
  }

  /**
   * Submit a measurement or multiple measurements to the m3ter platform. The maximum
   * size of the payload needs to be less than 512,000 bytes.
   *
   * **NOTES:**
   *
   * - **Non-existent Accounts.** The `account` request parameter is required.
   *   However, if you want to submit a usage data measurement for an Account which
   *   does not yet exist in your Organization, you can use an `account` code for a
   *   non-existent Account. A new skeleton Account will be automatically created.
   *   The usage data measurement is accepted and ingested as data belonging to the
   *   new auto-created Account. At a later date, you can edit the Account's
   *   Code,??Name, and??e-mail address. For more details, see
   *   [Submitting Usage Data for Non-Existent Accounts](https://www.m3ter.com/docs/guides/billing-and-usage-data/submitting-usage-data/submitting-usage-data-for-non-existent-accounts)
   *   in our main documentation.
   * - **Usage Data Adjustments.** If you need to make corrections for billing
   *   retrospectively against an Account, you can use date/time values in the past
   *   for the `ts` (timestamp) request parameter to submit positive or negative
   *   usage data amounts to correct and reconcile earlier billing anomalies. For
   *   more details, see
   *   [Submitting Usage Data Adjustments Using Timestamp](https://www.m3ter.com/docs/guides/billing-and-usage-data/submitting-usage-data/submitting-usage-data-adjustments-using-timestamp)
   *   in our main documentation.
   * - **Ingest Validation Failure Events.** After the intial submission of a usage
   *   data measurement to the Ingest API, a data enrichment stage is performed to
   *   check for any errors in the usage data measurement, such as a missing field.
   *   If an error is identified, this might result in the submission being rejected.
   *   In these cases, an _ingest validation failure_ Event is generated, which you
   *   can review on the
   *   [Ingest Events](https://www.m3ter.com/docs/guides/billing-and-usage-data/submitting-usage-data/reviewing-and-resolving-ingest-events)
   *   page in the Console. See also the
   *   [Events](https://www.m3ter.com/docs/api#tag/Events) section in this API
   *   Reference.
   *
   * **IMPORTANT! - Use of PII:** The use of any of your end-customers' Personally
   * Identifiable Information (PII) in m3ter is restricted to a few fields on the
   * **Account** entity. Please ensure that any measurements you submit do not
   * contain any end-customer PII data. See the
   * [Introduction section](https://www.m3ter.com/docs/api#section/Introduction)
   * above for more details.
   *
   * @example
   * ```ts
   * const submitMeasurementsResponse =
   *   await client.usage.submit({
   *     measurements: [
   *       {
   *         account: 'Acme Corp',
   *         meter: 'string',
   *         ts: '2022-08-24T14:15:22Z',
   *       },
   *     ],
   *   });
   * ```
   */
  submit(params: UsageSubmitParams, options?: RequestOptions): APIPromise<SubmitMeasurementsResponse> {
    const { orgId = this._client.orgID, ...body } = params;
    return this._client.post(path`/organizations/${orgId}/measurements`, {
      body,
      defaultBaseURL: 'https://ingest.m3ter.com',
      ...options,
    });
  }
}

/**
 * It contains details for downloading a file
 */
export interface DownloadURLResponse {
  /**
   * The presigned download URL
   */
  url?: string;
}

export interface MeasurementRequest {
  /**
   * Code of the Account the measurement is for.
   */
  account: string;

  /**
   * Short code identifying the Meter the measurement is for.
   */
  meter: string;

  /**
   * Timestamp for the measurement _(in ISO 8601 format)_.
   */
  ts: string;

  /**
   * 'cost' values
   */
  cost?: { [key: string]: number };

  /**
   * End timestamp for the measurement _(in ISO 8601 format)_. _(Optional)_.
   *
   * Can be used in the case a usage event needs to have an explicit start and end
   * rather than being instantaneous.
   */
  ets?: string;

  /**
   * 'income' values
   */
  income?: { [key: string]: number };

  /**
   * 'measure' values
   */
  measure?: { [key: string]: number };

  /**
   * 'metadata' values
   */
  metadata?: { [key: string]: string };

  /**
   * 'other' values
   */
  other?: { [key: string]: string };

  /**
   * Unique ID for this measurement.
   */
  uid?: string;

  /**
   * 'what' values
   */
  what?: { [key: string]: string };

  /**
   * 'where' values
   */
  where?: { [key: string]: string };

  /**
   * 'who' values
   */
  who?: { [key: string]: string };
}

export interface SubmitMeasurementsRequest {
  /**
   * Request containing the usage data measurements for submission.
   */
  measurements: Array<MeasurementRequest>;
}

export interface SubmitMeasurementsResponse {
  /**
   * `accepted` is returned when successful.
   */
  result?: string;
}

export interface UsageQueryResponse {
  data?: Array<{ [key: string]: unknown }>;

  /**
   * Boolean flag to indicate whether or not there are more data available for the
   * query than are returned:
   *
   * - If there are more data, then TRUE.
   * - If there are no more data, then FALSE.
   *
   * **NOTES:**
   *
   * - The limit on the size of the return is 20000 data items. If the query returns
   *   more than this limit, only 20000 items are returned with most recent first and
   *   `hasMoreData` will be TRUE.
   * - If you have set `limit` in your query request at fewer than the number
   *   returned by the query, then `hasMoreData` will be TRUE in the response.
   */
  hasMoreData?: boolean;
}

export interface UsageGetFailedIngestDownloadURLParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Query param: The file path
   */
  file?: string;
}

export interface UsageQueryParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param: Specify the Accounts you want the query to return usage data for.
   */
  accountIds?: Array<string>;

  /**
   * Body param: Define the Aggregation functions you want to apply to data fields on
   * included Meters:
   *
   * - **SUM**. Adds the values.
   * - **MIN**. Uses the minimum value.
   * - **MAX**. Uses the maximum value.
   * - **COUNT**. Counts the number of values.
   * - **LATEST**. Uses the most recent value.
   * - **MEAN**. Uses the arithmetic mean of the values.
   * - **UNIQUE**. Uses a count of the number of unique values.
   *
   * **NOTE!** The Aggregation functions that can be applied depend on the data field
   * type:
   *
   * - **Measure** fields. `SUM`, `MIN`, `MAX`, `COUNT`, `LATEST`, or `MEAN`
   *   functions can be applied.
   * - **Dimension** field. `COUNT` or `UNIQUE` functions can be applied.
   */
  aggregations?: Array<UsageQueryParams.Aggregation>;

  /**
   * Body param: Define Dimension filters you want to apply for the query.
   *
   * Specify values for Dimension data fields on included Meters. Only data that
   * match the specified Dimension field values will be returned for the query.
   */
  dimensionFilters?: Array<UsageQueryParams.DimensionFilter>;

  /**
   * Body param: The exclusive end date to define a time period to filter by. (_ISO
   * 8601 formatted_)
   */
  endDate?: string;

  /**
   * Body param: If you've applied Aggregations for your query, specify any grouping
   * you want to impose on the returned data:
   *
   * - **Account**
   * - **Time** - group by frequency. Five options: `DAY`, `HOUR`, `WEEK`, `MONTH`,
   *   or `QUARTER`.
   * - **Dimension** - group by Meter and data field.
   *
   * **NOTE:** If you attempt to impose grouping for a query that doesn't apply
   * Aggregations, you'll receive an error.
   */
  groups?: Array<DataExportsAPI.DataExplorerGroup>;

  /**
   * Body param: Define a limit for the number of usage data items you want the query
   * to return, starting with the most recently received data item.
   */
  limit?: number;

  /**
   * Body param: Specify the Meters you want the query to return usage data for.
   */
  meterIds?: Array<string>;

  /**
   * Body param: The inclusive start date to define a time period to filter by. (_ISO
   * 8601 formatted_)
   */
  startDate?: string;
}

export namespace UsageQueryParams {
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

export interface UsageSubmitParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param: Request containing the usage data measurements for submission.
   */
  measurements: Array<MeasurementRequest>;
}

Usage.FileUploads = FileUploads;

export declare namespace Usage {
  export {
    type DownloadURLResponse as DownloadURLResponse,
    type MeasurementRequest as MeasurementRequest,
    type SubmitMeasurementsRequest as SubmitMeasurementsRequest,
    type SubmitMeasurementsResponse as SubmitMeasurementsResponse,
    type UsageQueryResponse as UsageQueryResponse,
    type UsageGetFailedIngestDownloadURLParams as UsageGetFailedIngestDownloadURLParams,
    type UsageQueryParams as UsageQueryParams,
    type UsageSubmitParams as UsageSubmitParams,
  };

  export {
    FileUploads as FileUploads,
    type FileUploadGenerateUploadURLResponse as FileUploadGenerateUploadURLResponse,
    type FileUploadGenerateUploadURLParams as FileUploadGenerateUploadURLParams,
  };
}
