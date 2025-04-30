// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { Cursor, type CursorParams } from '../../pagination';

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
    params?: JobRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DataExportJobResponse>;
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<DataExportJobResponse>;
  retrieve(
    id: string,
    params: JobRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DataExportJobResponse> {
    if (isRequestOptions(params)) {
      return this.retrieve(id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.get(`/organizations/${orgId}/dataexports/jobs/${id}`, options);
  }

  /**
   * Retrieve a list of Export Job entities.
   */
  list(
    params?: JobListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DataExportJobResponsesCursor, DataExportJobResponse>;
  list(options?: Core.RequestOptions): Core.PagePromise<DataExportJobResponsesCursor, DataExportJobResponse>;
  list(
    params: JobListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<DataExportJobResponsesCursor, DataExportJobResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { orgId = this._client.orgId, ...query } = params;
    return this._client.getAPIList(`/organizations/${orgId}/dataexports/jobs`, DataExportJobResponsesCursor, {
      query,
      ...options,
    });
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
   * Beta release features are functional but may be incomplete, and there is no
   * commitment at this stage to particular functionality or timelines.
   */
  getDownloadURL(
    jobId: string,
    params?: JobGetDownloadURLParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<JobGetDownloadURLResponse>;
  getDownloadURL(jobId: string, options?: Core.RequestOptions): Core.APIPromise<JobGetDownloadURLResponse>;
  getDownloadURL(
    jobId: string,
    params: JobGetDownloadURLParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<JobGetDownloadURLResponse> {
    if (isRequestOptions(params)) {
      return this.getDownloadURL(jobId, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.get(`/organizations/${orgId}/dataexports/jobs/${jobId}/getdownloadurl`, options);
  }
}

export class DataExportJobResponsesCursor extends Cursor<DataExportJobResponse> {}

export interface DataExportJobResponse {
  /**
   * The id of the Export Job.
   */
  id: string;

  /**
   * The version number:
   *
   * - **Create:** On initial Create to insert a new entity, the version is set at 1
   *   in the response.
   * - **Update:** On successful Update, the version is incremented by 1 in the
   *   response.
   */
  version: number;

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

Jobs.DataExportJobResponsesCursor = DataExportJobResponsesCursor;

export declare namespace Jobs {
  export {
    type DataExportJobResponse as DataExportJobResponse,
    type JobGetDownloadURLResponse as JobGetDownloadURLResponse,
    DataExportJobResponsesCursor as DataExportJobResponsesCursor,
    type JobRetrieveParams as JobRetrieveParams,
    type JobListParams as JobListParams,
    type JobGetDownloadURLParams as JobGetDownloadURLParams,
  };
}
