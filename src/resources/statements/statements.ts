// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as StatementDefinitionsAPI from './statement-definitions';
import {
  StatementDefinitionCreateParams,
  StatementDefinitionDeleteParams,
  StatementDefinitionListParams,
  StatementDefinitionResponse,
  StatementDefinitionResponsesCursor,
  StatementDefinitionRetrieveParams,
  StatementDefinitionUpdateParams,
  StatementDefinitions,
} from './statement-definitions';
import * as StatementJobsAPI from './statement-jobs';
import {
  StatementJobCancelParams,
  StatementJobCreateBatchParams,
  StatementJobCreateBatchResponse,
  StatementJobCreateParams,
  StatementJobListParams,
  StatementJobResponse,
  StatementJobResponsesCursor,
  StatementJobRetrieveParams,
  StatementJobs,
} from './statement-jobs';

export class Statements extends APIResource {
  statementJobs: StatementJobsAPI.StatementJobs = new StatementJobsAPI.StatementJobs(this._client);
  statementDefinitions: StatementDefinitionsAPI.StatementDefinitions =
    new StatementDefinitionsAPI.StatementDefinitions(this._client);

  /**
   * Generate a specific Bill Statement for the provided Bill UUID in CSV format.
   *
   * Bill Statements are backing sheets to the invoices sent to your customers. Bill
   * Statements provide a breakdown of the usage responsible for the usage charge
   * line items shown on invoices.
   *
   * The response to this call returns a pre-signed `downloadUrl`, which you then use
   * with a `GET` call to obtain the Bill statement in CSV format.
   */
  createCsv(
    id: string,
    params?: StatementCreateCsvParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectURLResponse>;
  createCsv(id: string, options?: Core.RequestOptions): Core.APIPromise<ObjectURLResponse>;
  createCsv(
    id: string,
    params: StatementCreateCsvParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectURLResponse> {
    if (isRequestOptions(params)) {
      return this.createCsv(id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.post(`/organizations/${orgId}/bills/${id}/statement/csv`, options);
  }

  /**
   * Retrieve a specific Bill Statement for the given Bill UUID in CSV format.
   *
   * Bill Statements are backing sheets to the invoices sent to your customers. Bill
   * Statements provide a breakdown of the usage responsible for the usage charge
   * line items shown on invoices.
   *
   * The response includes a pre-signed `downloadUrl`, which must be used with a
   * separate `GET` call to download the actual Bill Statement. This ensures secure
   * access to the requested information.
   */
  getCsv(
    id: string,
    params?: StatementGetCsvParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectURLResponse>;
  getCsv(id: string, options?: Core.RequestOptions): Core.APIPromise<ObjectURLResponse>;
  getCsv(
    id: string,
    params: StatementGetCsvParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectURLResponse> {
    if (isRequestOptions(params)) {
      return this.getCsv(id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.get(`/organizations/${orgId}/bills/${id}/statement/csv`, options);
  }

  /**
   * Retrieve a Bill Statement in JSON format for a given Bill ID.
   *
   * Bill Statements are backing sheets to the invoices sent to your customers. Bill
   * Statements provide a breakdown of the usage responsible for the usage charge
   * line items shown on invoices.
   *
   * The response to this call returns a pre-signed `downloadUrl`, which you use with
   * a `GET` call to obtain the Bill Statement.
   */
  getJson(
    id: string,
    params?: StatementGetJsonParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectURLResponse>;
  getJson(id: string, options?: Core.RequestOptions): Core.APIPromise<ObjectURLResponse>;
  getJson(
    id: string,
    params: StatementGetJsonParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectURLResponse> {
    if (isRequestOptions(params)) {
      return this.getJson(id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.get(`/organizations/${orgId}/bills/${id}/statement/json`, options);
  }
}

export interface ObjectURLResponse {
  /**
   * The pre-signed download URL.
   */
  downloadUrl?: string;
}

export interface StatementCreateCsvParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface StatementGetCsvParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface StatementGetJsonParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

Statements.StatementJobs = StatementJobs;
Statements.StatementJobResponsesCursor = StatementJobResponsesCursor;
Statements.StatementDefinitions = StatementDefinitions;
Statements.StatementDefinitionResponsesCursor = StatementDefinitionResponsesCursor;

export declare namespace Statements {
  export {
    type ObjectURLResponse as ObjectURLResponse,
    type StatementCreateCsvParams as StatementCreateCsvParams,
    type StatementGetCsvParams as StatementGetCsvParams,
    type StatementGetJsonParams as StatementGetJsonParams,
  };

  export {
    StatementJobs as StatementJobs,
    type StatementJobResponse as StatementJobResponse,
    type StatementJobCreateBatchResponse as StatementJobCreateBatchResponse,
    StatementJobResponsesCursor as StatementJobResponsesCursor,
    type StatementJobCreateParams as StatementJobCreateParams,
    type StatementJobRetrieveParams as StatementJobRetrieveParams,
    type StatementJobListParams as StatementJobListParams,
    type StatementJobCancelParams as StatementJobCancelParams,
    type StatementJobCreateBatchParams as StatementJobCreateBatchParams,
  };

  export {
    StatementDefinitions as StatementDefinitions,
    type StatementDefinitionResponse as StatementDefinitionResponse,
    StatementDefinitionResponsesCursor as StatementDefinitionResponsesCursor,
    type StatementDefinitionCreateParams as StatementDefinitionCreateParams,
    type StatementDefinitionRetrieveParams as StatementDefinitionRetrieveParams,
    type StatementDefinitionUpdateParams as StatementDefinitionUpdateParams,
    type StatementDefinitionListParams as StatementDefinitionListParams,
    type StatementDefinitionDeleteParams as StatementDefinitionDeleteParams,
  };
}
