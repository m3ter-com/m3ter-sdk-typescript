// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Jobs extends APIResource {
  /**
   * Retrieve an Export Job for the given UUID.
   *
   * The response returns:
   *
   * - The source type for the data exported by the Export Job: one of USAGE or
   *   OPERATIONAL.
   * - The status of the Export Job.
   */
  retrieve(
    id: string,
    params: JobRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DataExportJobResponse> {
    const { orgId = this._client.orgID } = params ?? {};
    return this._client.get(path`/organizations/${orgId}/dataexports/jobs/${id}`, options);
  }

  /**
   * Retrieve a list of Export Job entities.
   */
  list(
    params: JobListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<DataExportJobResponsesCursor, DataExportJobResponse> {
    const { orgId = this._client.orgID, ...query } = params ?? {};
    return this._client.getAPIList(
      path`/organizations/${orgId}/dataexports/jobs`,
      Cursor<DataExportJobResponse>,
      { query, ...options },
    );
  }

  /**
   * Returns a presigned download URL for data export file download based on the
   * `jobId` provided.
   *
   * If you omit `destinationIds` when setting up your
   * [Ad-Hoc data exports](https://www.m3ter.com/docs/api#tag/ExportAdHoc) or
   * [Scheduled data exports](https://www.m3ter.com/docs/api#tag/ExportSchedule),
   * then the data is not copied to a destination but is available for you to
   * download using the returned download URL.
   *
   * **Constraints:**
   *
   * - Only valid for Export jobs ran in the past 24 hours.
   * - The download URL is time-bound and is only valid for 15 minutes.
   *
   * **NOTE!** This ExportDestination endpoint is available in Beta release version.
   * See
   * [Feature Release Stages](https://www.m3ter.com/docs/guides/getting-started/feature-release-stages)
   * for Beta release definition.
   */
  getDownloadURL(
    jobID: string,
    params: JobGetDownloadURLParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<JobGetDownloadURLResponse> {
    const { orgId = this._client.orgID } = params ?? {};
    return this._client.get(path`/organizations/${orgId}/dataexports/jobs/${jobID}/getdownloadurl`, options);
  }
}

export type DataExportJobResponsesCursor = Cursor<DataExportJobResponse>;

export interface DataExportJobResponse {
  /**
   * The id of the Export Job.
   */
  id: string;

  /**
   * When the data Export Job was created.
   */
  dateCreated?: string;

  /**
   * The id of the data Export Schedule.
   */
  scheduleId?: string;

  sourceType?: 'USAGE' | 'OPERATIONAL';

  /**
   * When the data Export Job started running
   */
  startedAt?: string;

  status?: 'PENDING' | 'RUNNING' | 'SUCCEEDED' | 'FAILED';

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
 * It contains details for downloading an export file
 */
export interface JobGetDownloadURLResponse {
  /**
   * The expiration time of the URL
   */
  expirationTime?: string;

  /**
   * The presigned download URL
   */
  url?: string;
}

export interface JobRetrieveParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface JobListParams extends CursorParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Query param: Include only Job entities created before this date. Format:
   * yyyy-MM-dd'T'HH:mm:ss'Z'
   */
  dateCreatedEnd?: string;

  /**
   * Query param: Include only Job entities created on or after this date. Format:
   * yyyy-MM-dd'T'HH:mm:ss'Z'
   */
  dateCreatedStart?: string;

  /**
   * Query param: List Job entities for the given UUIDs
   */
  ids?: Array<string>;

  /**
   * Query param: List Job entities for the schedule UUID
   */
  scheduleId?: string;

  /**
   * Query param: List Job entities for the status
   */
  status?: 'PENDING' | 'RUNNING' | 'SUCCEEDED' | 'FAILED';
}

export interface JobGetDownloadURLParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export declare namespace Jobs {
  export {
    type DataExportJobResponse as DataExportJobResponse,
    type JobGetDownloadURLResponse as JobGetDownloadURLResponse,
    type DataExportJobResponsesCursor as DataExportJobResponsesCursor,
    type JobRetrieveParams as JobRetrieveParams,
    type JobListParams as JobListParams,
    type JobGetDownloadURLParams as JobGetDownloadURLParams,
  };
}
