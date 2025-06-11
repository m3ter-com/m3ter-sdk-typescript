// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { Cursor, type CursorParams } from '../../pagination';

export class StatementJobs extends APIResource {
  /**
   * This endpoint creates a StatementJob for a single bill within an Organization
   * using the Bill UUID.
   *
   * The Bill Statement is generated asynchronously:
   *
   * - The default format for generating the Statement is in JSON format and
   *   according to the Bill Statement Definition you've specified at either
   *   Organization level or Account level.
   * - If you also want to generate the Statement in CSV format, use the
   *   `includeCsvFormat` request body parameter.
   * - The response body provides a time-bound pre-signed URL, which you can use to
   *   download the JSON format Statement.
   * - When you have generated a Statement for a Bill, you can also obtain a
   *   time-bound pre-signed download URL using either the
   *   [Retrieve Bill Statement in JSON Format](https://www.m3ter.com/docs/api#tag/Bill/operation/GetBillJsonStatement)
   *   and
   *   [Retrieve Bill Statement in CSV Format](https://www.m3ter.com/docs/api#tag/Bill/operation/GetBillCsvStatement)
   *   calls found in the [Bill](https://www.m3ter.com/docs/api#tag/Bill) section of
   *   this API Reference.
   *
   * **Notes:**
   *
   * - If the response to the Create StatementJob call shows the `statementJobStatus`
   *   as `PENDING` or `RUNNING`, you will not receive the pre-signed URL in the
   *   response. Wait a few minutes to allow the StatementJob to complete and then
   *   use the
   *   [Get StatmentJob](https://www.m3ter.com/docs/api#tag/StatementJob/operation/GetStatementJob)
   *   call in this section to obtain the pre-signed download URL for the generated
   *   Bill Statement.
   * - When you have submitted a StatementJob and a Bill Statement has been
   *   generated, you can also download the Statement directly from a Bill Details
   *   page in the Console. See
   *   [Working with Bill Statements](https://www.m3ter.com/docs/guides/billing-and-usage-data/running-viewing-and-managing-bills/working-with-bill-statements)
   *   in our user Documentation.
   */
  create(
    params: StatementJobCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StatementJobResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.post(`/organizations/${orgId}/statementjobs`, { body, ...options });
  }

  /**
   * Retrieves the details of a specific StatementJob using its UUID.
   *
   * Use this call to obtain the time-bound pre-signed download URL for the generated
   * Bill Statement if the initial
   * [Create StatementJob](https://www.m3ter.com/docs/api#tag/StatementJob/operation/CreateStatementJob)
   * returned a response showing the `statementJobStatus` not yet complete and as
   * `PENDING` or `RUNNING`.
   *
   * **Note:** When you have submitted a StatementJob and a Bill Statement has been
   * generated, you can also download the Statement directly from a Bill Details page
   * in the Console. See
   * [Working with Bill Statements](https://www.m3ter.com/docs/guides/billing-and-usage-data/running-viewing-and-managing-bills/working-with-bill-statements)
   * in our user Documentation.
   */
  retrieve(
    id: string,
    params?: StatementJobRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StatementJobResponse>;
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<StatementJobResponse>;
  retrieve(
    id: string,
    params: StatementJobRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<StatementJobResponse> {
    if (isRequestOptions(params)) {
      return this.retrieve(id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.get(`/organizations/${orgId}/statementjobs/${id}`, options);
  }

  /**
   * Retrieve a list of StatementJobs.
   *
   * Retrieves a list of all StatementJobs for a specific Organization. You can
   * filter the results based on:
   *
   * - StatementJob status.
   * - Whether StatementJob is neither completed nor cancelled but remains active.
   * - The ID of the Bill the StatementJob is associated with.
   *
   * You can also paginate the results for easier management.
   *
   * **WARNING!**
   *
   * - You can use only one of the valid Query parameters: `active`, `status`, or
   *   `billId` in any call. If you use more than one of these Query parameters in
   *   the same call, then a 400 Bad Request is returned with an error message.
   */
  list(
    params?: StatementJobListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<StatementJobResponsesCursor, StatementJobResponse>;
  list(options?: Core.RequestOptions): Core.PagePromise<StatementJobResponsesCursor, StatementJobResponse>;
  list(
    params: StatementJobListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<StatementJobResponsesCursor, StatementJobResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { orgId = this._client.orgId, ...query } = params;
    return this._client.getAPIList(`/organizations/${orgId}/statementjobs`, StatementJobResponsesCursor, {
      query,
      ...options,
    });
  }

  /**
   * Cancel the StatementJob with the given UUID.
   *
   * Use this endpoint to halt the execution of a specific StatementJob identified by
   * its UUID. This operation may be useful if you need to stop a StatementJob due to
   * unforeseen issues or changes.
   */
  cancel(
    id: string,
    params?: StatementJobCancelParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StatementJobResponse>;
  cancel(id: string, options?: Core.RequestOptions): Core.APIPromise<StatementJobResponse>;
  cancel(
    id: string,
    params: StatementJobCancelParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<StatementJobResponse> {
    if (isRequestOptions(params)) {
      return this.cancel(id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.post(`/organizations/${orgId}/statementjobs/${id}/cancel`, options);
  }

  /**
   * Create a batch of StatementJobs for multiple bills.
   *
   * Initiate the creation of multiple StatementJobs asynchronously for the list of
   * bills with the given UUIDs:
   *
   * - The default format for generating Bill Statements is in JSON format and
   *   according to the Bill Statement Definition you've specified at either
   *   Organization level or Account level.
   * - If you also want to generate the Statements in CSV format, use the
   *   `includeCsvFormat` request body parameter.
   * - The response body provides a time-bound pre-signed URL, which you can use to
   *   download the JSON format Statement.
   * - When you have generated a Statement for a Bill, you can also obtain a
   *   time-bound pre-signed download URL using either the
   *   [Retrieve Bill Statement in JSON Format](https://www.m3ter.com/docs/api#tag/Bill/operation/GetBillJsonStatement)
   *   and
   *   [Retrieve Bill Statement in CSV Format](https://www.m3ter.com/docs/api#tag/Bill/operation/GetBillCsvStatement)
   *   calls found in the [Bill](https://www.m3ter.com/docs/api#tag/Bill) section of
   *   this API Reference.
   *
   * **Notes:**
   *
   * - If the response to the Create StatementJob call shows the `statementJobStatus`
   *   as `PENDING` or `RUNNING`, you will not receive the pre-signed URL in the
   *   response. Wait a few minutes to allow the StatementJob to complete and then
   *   use the
   *   [Get StatmentJob](https://www.m3ter.com/docs/api#tag/StatementJob/operation/GetStatementJob)
   *   call in this section to obtain the pre-signed download URL for the generated
   *   Bill Statement.
   * - When you have submitted a StatementJob and a Bill Statement has been
   *   generated, you can also download the Statement directly from a Bill Details
   *   page in the Console. See
   *   [Working with Bill Statements](https://www.m3ter.com/docs/guides/billing-and-usage-data/running-viewing-and-managing-bills/working-with-bill-statements)
   *   in our user Documentation.
   */
  createBatch(
    params: StatementJobCreateBatchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StatementJobCreateBatchResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.post(`/organizations/${orgId}/statementjobs/batch`, { body, ...options });
  }
}

export class StatementJobResponsesCursor extends Cursor<StatementJobResponse> {}

export interface StatementJobResponse {
  /**
   * The UUID of the entity.
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
   * The unique identifier (UUID) of the bill associated with the StatementJob.
   */
  billId?: string;

  /**
   * The unique identifier (UUID) of the user who created this StatementJob.
   */
  createdBy?: string;

  /**
   * The date and time _(in ISO-8601 format)_ when the StatementJob was created.
   */
  dtCreated?: string;

  /**
   * The date and time _(in ISO-8601 format)_ when the StatementJob was last
   * modified.
   */
  dtLastModified?: string;

  /**
   * A Boolean value indicating whether the generated statement includes a CSV
   * format.
   *
   * - TRUE - includes the statement in CSV format.
   * - FALSE - no CSV format statement.
   */
  includeCsvFormat?: boolean;

  /**
   * The unique identifier (UUID) of the user who last modified this StatementJob.
   */
  lastModifiedBy?: string;

  /**
   * The unique identifier (UUID) of your Organization. The Organization represents
   * your company as a direct customer of our service.
   */
  orgId?: string;

  /**
   * The URL to access the generated statement in JSON format. This URL is temporary
   * and has a limited lifetime.
   */
  presignedJsonStatementUrl?: string;

  /**
   * The current status of the StatementJob. The status helps track the progress and
   * outcome of a StatementJob.
   */
  statementJobStatus?: 'PENDING' | 'RUNNING' | 'COMPLETE' | 'CANCELLED' | 'FAILED';
}

export type StatementJobCreateBatchResponse = Array<StatementJobResponse>;

export interface StatementJobCreateParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param: The unique identifier (UUID) of the bill associated with the
   * StatementJob.
   */
  billId: string;

  /**
   * Body param: A Boolean value indicating whether the generated statement includes
   * a CSV format.
   *
   * - TRUE - includes the statement in CSV format.
   * - FALSE - no CSV format statement.
   */
  includeCsvFormat?: boolean;

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

export interface StatementJobRetrieveParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface StatementJobListParams extends CursorParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Query param: Boolean filter on whether to only retrieve active _(i.e. not
   * completed/cancelled)_ StatementJobs.
   *
   * - TRUE - only active StatementJobs retrieved.
   * - FALSE - all StatementJobs retrieved.
   */
  active?: string;

  /**
   * Query param: Filter Statement Jobs by billId
   */
  billId?: string;

  /**
   * Query param: Filter using the StatementJobs status. Possible values:
   *
   * - `PENDING`
   * - `RUNNING`
   * - `COMPLETE`
   * - `CANCELLED`
   * - `FAILED`
   */
  status?: string;
}

export interface StatementJobCancelParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface StatementJobCreateBatchParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param: The list of unique identifiers (UUIDs) of the bills associated with
   * the StatementJob.
   */
  billIds: Array<string>;

  /**
   * Body param: A Boolean value indicating whether the generated statement includes
   * a CSV format.
   *
   * - TRUE - includes the statement in CSV format.
   * - FALSE - no CSV format statement.
   */
  includeCsvFormat?: boolean;

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

StatementJobs.StatementJobResponsesCursor = StatementJobResponsesCursor;

export declare namespace StatementJobs {
  export {
    type StatementJobResponse as StatementJobResponse,
    type StatementJobCreateBatchResponse as StatementJobCreateBatchResponse,
    StatementJobResponsesCursor as StatementJobResponsesCursor,
    type StatementJobCreateParams as StatementJobCreateParams,
    type StatementJobRetrieveParams as StatementJobRetrieveParams,
    type StatementJobListParams as StatementJobListParams,
    type StatementJobCancelParams as StatementJobCancelParams,
    type StatementJobCreateBatchParams as StatementJobCreateBatchParams,
  };
}
