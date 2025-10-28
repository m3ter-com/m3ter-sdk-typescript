// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
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
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

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
    params: StatementCreateCsvParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ObjectURLResponse> {
    const { orgId = this._client.orgID } = params ?? {};
    return this._client.post(path`/organizations/${orgId}/bills/${id}/statement/csv`, options);
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
    params: StatementGetCsvParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ObjectURLResponse> {
    const { orgId = this._client.orgID } = params ?? {};
    return this._client.get(path`/organizations/${orgId}/bills/${id}/statement/csv`, options);
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
    params: StatementGetJsonParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ObjectURLResponse> {
    const { orgId = this._client.orgID } = params ?? {};
    return this._client.get(path`/organizations/${orgId}/bills/${id}/statement/json`, options);
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
Statements.StatementDefinitions = StatementDefinitions;

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
    type StatementJobResponsesCursor as StatementJobResponsesCursor,
    type StatementJobCreateParams as StatementJobCreateParams,
    type StatementJobRetrieveParams as StatementJobRetrieveParams,
    type StatementJobListParams as StatementJobListParams,
    type StatementJobCancelParams as StatementJobCancelParams,
    type StatementJobCreateBatchParams as StatementJobCreateBatchParams,
  };

  export {
    StatementDefinitions as StatementDefinitions,
    type StatementDefinitionResponse as StatementDefinitionResponse,
    type StatementDefinitionResponsesCursor as StatementDefinitionResponsesCursor,
    type StatementDefinitionCreateParams as StatementDefinitionCreateParams,
    type StatementDefinitionRetrieveParams as StatementDefinitionRetrieveParams,
    type StatementDefinitionUpdateParams as StatementDefinitionUpdateParams,
    type StatementDefinitionListParams as StatementDefinitionListParams,
    type StatementDefinitionDeleteParams as StatementDefinitionDeleteParams,
  };
}
