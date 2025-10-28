// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Jobs extends APIResource {
  /**
   * Get the file upload job response using the UUID of the file upload job.
   *
   * Part of the file upload service for measurements ingest.
   *
   * @example
   * ```ts
   * const fileUploadJobResponse =
   *   await client.usage.fileUploads.jobs.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    params: JobRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FileUploadJobResponse> {
    const { orgId = this._client.orgID } = params ?? {};
    return this._client.get(path`/organizations/${orgId}/fileuploads/measurements/jobs/${id}`, options);
  }

  /**
   * Lists the File Upload jobs. Part of the File Upload service for measurements
   * ingest:
   *
   * - You can use the `dateCreatedStart` and `dateCreatedEnd` optional Query
   *   parameters to define a date range to filter the File Uploads jobs returned for
   *   this call.
   * - If `dateCreatedStart` and `dateCreatedEnd` Query parameters are not used, then
   *   all File Upload jobs are returned.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const fileUploadJobResponse of client.usage.fileUploads.jobs.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    params: JobListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<FileUploadJobResponsesCursor, FileUploadJobResponse> {
    const { orgId = this._client.orgID, ...query } = params ?? {};
    return this._client.getAPIList(
      path`/organizations/${orgId}/fileuploads/measurements/jobs`,
      Cursor<FileUploadJobResponse>,
      { query, ...options },
    );
  }

  /**
   * Use the original file upload job id to obtain a download URL, which you can then
   * use to retrieve the file you originally uploaded to the file upload service:
   *
   * - A download URL is returned together with a download job id.
   * - You can then use a `GET` using the returned download URL as the endpoint to
   *   retrieve the file you originally uploaded.
   *
   * Part of the file upload service for submitting measurements data files.
   *
   * @example
   * ```ts
   * const response =
   *   await client.usage.fileUploads.jobs.getOriginalDownloadURL(
   *     'id',
   *   );
   * ```
   */
  getOriginalDownloadURL(
    id: string,
    params: JobGetOriginalDownloadURLParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<JobGetOriginalDownloadURLResponse> {
    const { orgId = this._client.orgID } = params ?? {};
    return this._client.get(
      path`/organizations/${orgId}/fileuploads/measurements/jobs/${id}/original`,
      options,
    );
  }
}

export type FileUploadJobResponsesCursor = Cursor<FileUploadJobResponse>;

/**
 * Response containing the upload job details.
 */
export interface FileUploadJobResponse {
  /**
   * UUID of the file upload job.
   */
  id?: string;

  /**
   * The size of the body in bytes. For example: `"contentLength": 485`, where 485 is
   * the size in bytes of the file uploaded.
   */
  contentLength?: number;

  /**
   * The number of rows that failed processing during ingest.
   */
  failedRows?: number;

  /**
   * The name of the measurements file for the upload job.
   */
  fileName?: string;

  /**
   * The number of rows that were processed during ingest.
   */
  processedRows?: number;

  /**
   * The status of the file upload job.
   */
  status?: 'notUploaded' | 'running' | 'failed' | 'succeeded';

  /**
   * The total number of rows in the file.
   */
  totalRows?: number;

  /**
   * The upload date for the upload job _(in ISO-8601 format)_.
   */
  uploadDate?: string;

  /**
   * The version number. Default value when newly created is one.
   */
  version?: number;
}

/**
 * It contains details for downloading a file
 */
export interface JobGetOriginalDownloadURLResponse {
  /**
   * The headers
   */
  headers?: { [key: string]: string };

  /**
   * UUID of the download job
   */
  jobId?: string;

  /**
   * The URL
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
   * Query param: Include only File Upload jobs created before this date. Required
   * format is ISO-8601: yyyy-MM-dd'T'HH:mm:ss'Z'
   */
  dateCreatedEnd?: string;

  /**
   * Query param: Include only File Upload jobs created on or after this date.
   * Required format is ISO-8601: yyyy-MM-dd'T'HH:mm:ss'Z'
   */
  dateCreatedStart?: string;

  /**
   * Query param: <<deprecated>>
   */
  fileKey?: string | null;
}

export interface JobGetOriginalDownloadURLParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export declare namespace Jobs {
  export {
    type FileUploadJobResponse as FileUploadJobResponse,
    type JobGetOriginalDownloadURLResponse as JobGetOriginalDownloadURLResponse,
    type FileUploadJobResponsesCursor as FileUploadJobResponsesCursor,
    type JobRetrieveParams as JobRetrieveParams,
    type JobListParams as JobListParams,
    type JobGetOriginalDownloadURLParams as JobGetOriginalDownloadURLParams,
  };
}
