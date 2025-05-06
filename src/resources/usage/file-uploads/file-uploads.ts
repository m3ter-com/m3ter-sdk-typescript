// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as JobsAPI from './jobs';
import {
  FileUploadJobResponse,
  FileUploadJobResponsesCursor,
  JobGetOriginalDownloadURLParams,
  JobGetOriginalDownloadURLResponse,
  JobListParams,
  JobRetrieveParams,
  Jobs,
} from './jobs';

export class FileUploads extends APIResource {
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);

  /**
   * Generate a URL for uploading a file containing measurements to the platform in
   * preparation for the measurements it contains to be ingested:
   *
   * - An upload URL is returned together with an upload job id:
   * - You can then upload your data measurements file using a `PUT` request using
   *   the returned upload URL as the endpoint.
   * - You can use the returned upload job id with other calls to the File Upload
   *   Service for any follow-up or troubleshooting.
   *
   * **Important:**
   *
   * - The `contentLength` request parameter is required.
   * - The upload URL is time limited - it is valid for **_one_** minute.
   *
   * Part of the file upload service for submitting measurements data files.
   *
   * @example
   * ```ts
   * const response =
   *   await client.usage.fileUploads.generateUploadURL({
   *     contentType: 'x',
   *     fileName: 'x',
   *   });
   * ```
   */
  generateUploadURL(
    params: FileUploadGenerateUploadURLParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FileUploadGenerateUploadURLResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.post(`/organizations/${orgId}/fileuploads/measurements/generateUploadUrl`, {
      body,
      ...options,
    });
  }
}

/**
 * Response containing the upload job URL details
 */
export interface FileUploadGenerateUploadURLResponse {
  /**
   * The headers
   */
  headers?: Record<string, string>;

  /**
   * UUID of the upload job
   */
  jobId?: string;

  /**
   * The URL
   */
  url?: string;
}

export interface FileUploadGenerateUploadURLParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param: The media type of the entity body sent, for example:
   * `"contentType":"text/json"`.
   *
   * **NOTE:** Currently only a JSON formatted file type is supported by the File
   * Upload Service.
   */
  contentType: string;

  /**
   * Body param: The name of the measurements file to be uploaded.
   */
  fileName: string;

  /**
   * Body param: The size of the body in bytes. For example: `"contentLength": 485`,
   * where 485 is the size in bytes of the file to upload.
   *
   * **NOTE:** Required.
   */
  contentLength?: number;
}

FileUploads.Jobs = Jobs;
FileUploads.FileUploadJobResponsesCursor = FileUploadJobResponsesCursor;

export declare namespace FileUploads {
  export {
    type FileUploadGenerateUploadURLResponse as FileUploadGenerateUploadURLResponse,
    type FileUploadGenerateUploadURLParams as FileUploadGenerateUploadURLParams,
  };

  export {
    Jobs as Jobs,
    type FileUploadJobResponse as FileUploadJobResponse,
    type JobGetOriginalDownloadURLResponse as JobGetOriginalDownloadURLResponse,
    FileUploadJobResponsesCursor as FileUploadJobResponsesCursor,
    type JobRetrieveParams as JobRetrieveParams,
    type JobListParams as JobListParams,
    type JobGetOriginalDownloadURLParams as JobGetOriginalDownloadURLParams,
  };
}
