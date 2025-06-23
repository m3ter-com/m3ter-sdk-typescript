// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import { Cursor, type CursorParams } from '../../../pagination';

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
    params?: JobRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FileUploadJobResponse>;
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<FileUploadJobResponse>;
  retrieve(
    id: string,
    params: JobRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<FileUploadJobResponse> {
    if (isRequestOptions(params)) {
      return this.retrieve(id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.get(`/organizations/${orgId}/fileuploads/measurements/jobs/${id}`, options);
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
    params?: JobListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<FileUploadJobResponsesCursor, FileUploadJobResponse>;
  list(options?: Core.RequestOptions): Core.PagePromise<FileUploadJobResponsesCursor, FileUploadJobResponse>;
  list(
    params: JobListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<FileUploadJobResponsesCursor, FileUploadJobResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { orgId = this._client.orgId, ...query } = params;
    return this._client.getAPIList(
      `/organizations/${orgId}/fileuploads/measurements/jobs`,
      FileUploadJobResponsesCursor,
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
    params?: JobGetOriginalDownloadURLParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<JobGetOriginalDownloadURLResponse>;
  getOriginalDownloadURL(
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<JobGetOriginalDownloadURLResponse>;
  getOriginalDownloadURL(
    id: string,
    params: JobGetOriginalDownloadURLParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<JobGetOriginalDownloadURLResponse> {
    if (isRequestOptions(params)) {
      return this.getOriginalDownloadURL(id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.get(`/organizations/${orgId}/fileuploads/measurements/jobs/${id}/original`, options);
  }
}

export class FileUploadJobResponsesCursor extends Cursor<FileUploadJobResponse> {}

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

Jobs.FileUploadJobResponsesCursor = FileUploadJobResponsesCursor;

export declare namespace Jobs {
  export {
    type FileUploadJobResponse as FileUploadJobResponse,
    type JobGetOriginalDownloadURLResponse as JobGetOriginalDownloadURLResponse,
    FileUploadJobResponsesCursor as FileUploadJobResponsesCursor,
    type JobRetrieveParams as JobRetrieveParams,
    type JobListParams as JobListParams,
    type JobGetOriginalDownloadURLParams as JobGetOriginalDownloadURLParams,
  };
}
