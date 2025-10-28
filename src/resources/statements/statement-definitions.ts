// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class StatementDefinitions extends APIResource {
  /**
   * Create a new StatementDefinition.
   *
   * This endpoint creates a new StatementDefinition within the specified
   * Organization. The details of the StatementDefinition are provided in the request
   * body.
   */
  create(
    params: StatementDefinitionCreateParams,
    options?: RequestOptions,
  ): APIPromise<StatementDefinitionResponse> {
    const { orgId = this._client.orgID, ...body } = params;
    return this._client.post(path`/organizations/${orgId}/statementdefinitions`, { body, ...options });
  }

  /**
   * Retrieve a StatementDefinition with the given UUID.
   *
   * Retrieves the details of a specific StatementDefinition for the specified
   * Organization, using its unique identifier (UUID). This endpoint is useful when
   * you want to retrieve the complete details of a single StatementDefinition.
   */
  retrieve(
    id: string,
    params: StatementDefinitionRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StatementDefinitionResponse> {
    const { orgId = this._client.orgID } = params ?? {};
    return this._client.get(path`/organizations/${orgId}/statementdefinitions/${id}`, options);
  }

  /**
   * Update StatementDefinition for the given UUID.
   *
   * Update the details of a specific StatementDefinition for the specified
   * Organization, using its unique identifier (UUID). The updated details for the
   * StatementDefinition should be sent in the request body.
   */
  update(
    id: string,
    params: StatementDefinitionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<StatementDefinitionResponse> {
    const { orgId = this._client.orgID, ...body } = params;
    return this._client.put(path`/organizations/${orgId}/statementdefinitions/${id}`, { body, ...options });
  }

  /**
   * Retrieve a list of StatementDefinitions.
   *
   * This endpoint retrieves a list of all the StatementDefinitions within a
   * specified Organization. The list can be paginated for easier management.
   */
  list(
    params: StatementDefinitionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<StatementDefinitionResponsesCursor, StatementDefinitionResponse> {
    const { orgId = this._client.orgID, ...query } = params ?? {};
    return this._client.getAPIList(
      path`/organizations/${orgId}/statementdefinitions`,
      Cursor<StatementDefinitionResponse>,
      { query, ...options },
    );
  }

  /**
   * Delete a StatementDefinition with the given UUID.
   *
   * This endpoint deletes a specific StatementDefinition within a specified
   * Organization, using the StatementDefinition UUID.
   */
  delete(
    id: string,
    params: StatementDefinitionDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StatementDefinitionResponse> {
    const { orgId = this._client.orgID } = params ?? {};
    return this._client.delete(path`/organizations/${orgId}/statementdefinitions/${id}`, options);
  }
}

export type StatementDefinitionResponsesCursor = Cursor<StatementDefinitionResponse>;

export interface StatementDefinitionResponse {
  /**
   * The UUID of the entity.
   */
  id: string;

  /**
   * This specifies how often the Statement should aggregate data.
   */
  aggregationFrequency?: 'DAY' | 'WEEK' | 'MONTH' | 'QUARTER' | 'YEAR' | 'WHOLE_PERIOD';

  /**
   * The unique identifier (UUID) of the user who created this StatementDefinition.
   */
  createdBy?: string;

  /**
   * An array of objects, each representing a Dimension data field from a Meter _(for
   * Meters that have Dimensions setup)_.
   */
  dimensions?: Array<StatementDefinitionResponse.Dimension>;

  /**
   * The date and time _(in ISO-8601 format)_ when the StatementDefinition was
   * created.
   */
  dtCreated?: string;

  /**
   * The date and time _(in ISO-8601 format)_ when the StatementDefinition was last
   * modified.
   */
  dtLastModified?: string;

  generateSlimStatements?: boolean;

  /**
   * A Boolean indicating whether to include the price per unit in the Statement.
   *
   * - TRUE - includes the price per unit.
   * - FALSE - excludes the price per unit.
   */
  includePricePerUnit?: boolean;

  /**
   * The unique identifier (UUID) of the user who last modified this
   * StatementDefinition.
   */
  lastModifiedBy?: string;

  /**
   * An array of objects, each representing a Measure data field from a Meter.
   */
  measures?: Array<StatementDefinitionResponse.Measure>;

  /**
   * Descriptive name for the StatementDefinition providing context and information.
   */
  name?: string;

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

export namespace StatementDefinitionResponse {
  /**
   * A Dimension belonging to a Meter.
   */
  export interface Dimension {
    /**
     * The value of a Dimension to use as a filter. Use "\*" as a wildcard to filter on
     * all Dimension values.
     */
    filter: Array<string>;

    /**
     * The name of the Dimension to target in the Meter.
     */
    name: string;

    /**
     * The Dimension attribute to target.
     */
    attributes?: Array<string>;

    /**
     * The unique identifier (UUID) of the Meter containing this Dimension.
     */
    meterId?: string;
  }

  export interface Measure {
    /**
     * A list of Aggregations to apply to the Measure.
     */
    aggregations?: Array<'SUM' | 'MIN' | 'MAX' | 'COUNT' | 'LATEST' | 'MEAN' | 'UNIQUE' | 'CUSTOM_SQL'>;

    /**
     * The unique identifier (UUID) of the Meter containing this Measure.
     */
    meterId?: string;

    /**
     * The name of a Measure data field _(or blank to indicate a wildcard, i.e. all
     * fields)_. Default value is blank.
     */
    name?: string;
  }
}

export interface StatementDefinitionCreateParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param: This specifies how often the Statement should aggregate data.
   */
  aggregationFrequency: 'DAY' | 'WEEK' | 'MONTH' | 'QUARTER' | 'YEAR' | 'WHOLE_PERIOD';

  /**
   * Body param: An array of objects, each representing a Dimension data field from a
   * Meter _(for Meters that have Dimensions setup)_.
   */
  dimensions?: Array<StatementDefinitionCreateParams.Dimension>;

  /**
   * Body param:
   */
  generateSlimStatements?: boolean;

  /**
   * Body param: A Boolean indicating whether to include the price per unit in the
   * Statement.
   *
   * - TRUE - includes the price per unit.
   * - FALSE - excludes the price per unit.
   */
  includePricePerUnit?: boolean;

  /**
   * Body param: An array of objects, each representing a Measure data field from a
   * Meter.
   */
  measures?: Array<StatementDefinitionCreateParams.Measure>;

  /**
   * Body param: Descriptive name for the StatementDefinition providing context and
   * information.
   */
  name?: string;

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

export namespace StatementDefinitionCreateParams {
  /**
   * A Dimension belonging to a Meter.
   */
  export interface Dimension {
    /**
     * The value of a Dimension to use as a filter. Use "\*" as a wildcard to filter on
     * all Dimension values.
     */
    filter: Array<string>;

    /**
     * The name of the Dimension to target in the Meter.
     */
    name: string;

    /**
     * The Dimension attribute to target.
     */
    attributes?: Array<string>;

    /**
     * The unique identifier (UUID) of the Meter containing this Dimension.
     */
    meterId?: string;
  }

  export interface Measure {
    /**
     * A list of Aggregations to apply to the Measure.
     */
    aggregations?: Array<'SUM' | 'MIN' | 'MAX' | 'COUNT' | 'LATEST' | 'MEAN' | 'UNIQUE' | 'CUSTOM_SQL'>;

    /**
     * The unique identifier (UUID) of the Meter containing this Measure.
     */
    meterId?: string;

    /**
     * The name of a Measure data field _(or blank to indicate a wildcard, i.e. all
     * fields)_. Default value is blank.
     */
    name?: string;
  }
}

export interface StatementDefinitionRetrieveParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface StatementDefinitionUpdateParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param: This specifies how often the Statement should aggregate data.
   */
  aggregationFrequency: 'DAY' | 'WEEK' | 'MONTH' | 'QUARTER' | 'YEAR' | 'WHOLE_PERIOD';

  /**
   * Body param: An array of objects, each representing a Dimension data field from a
   * Meter _(for Meters that have Dimensions setup)_.
   */
  dimensions?: Array<StatementDefinitionUpdateParams.Dimension>;

  /**
   * Body param:
   */
  generateSlimStatements?: boolean;

  /**
   * Body param: A Boolean indicating whether to include the price per unit in the
   * Statement.
   *
   * - TRUE - includes the price per unit.
   * - FALSE - excludes the price per unit.
   */
  includePricePerUnit?: boolean;

  /**
   * Body param: An array of objects, each representing a Measure data field from a
   * Meter.
   */
  measures?: Array<StatementDefinitionUpdateParams.Measure>;

  /**
   * Body param: Descriptive name for the StatementDefinition providing context and
   * information.
   */
  name?: string;

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

export namespace StatementDefinitionUpdateParams {
  /**
   * A Dimension belonging to a Meter.
   */
  export interface Dimension {
    /**
     * The value of a Dimension to use as a filter. Use "\*" as a wildcard to filter on
     * all Dimension values.
     */
    filter: Array<string>;

    /**
     * The name of the Dimension to target in the Meter.
     */
    name: string;

    /**
     * The Dimension attribute to target.
     */
    attributes?: Array<string>;

    /**
     * The unique identifier (UUID) of the Meter containing this Dimension.
     */
    meterId?: string;
  }

  export interface Measure {
    /**
     * A list of Aggregations to apply to the Measure.
     */
    aggregations?: Array<'SUM' | 'MIN' | 'MAX' | 'COUNT' | 'LATEST' | 'MEAN' | 'UNIQUE' | 'CUSTOM_SQL'>;

    /**
     * The unique identifier (UUID) of the Meter containing this Measure.
     */
    meterId?: string;

    /**
     * The name of a Measure data field _(or blank to indicate a wildcard, i.e. all
     * fields)_. Default value is blank.
     */
    name?: string;
  }
}

export interface StatementDefinitionListParams extends CursorParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface StatementDefinitionDeleteParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export declare namespace StatementDefinitions {
  export {
    type StatementDefinitionResponse as StatementDefinitionResponse,
    type StatementDefinitionResponsesCursor as StatementDefinitionResponsesCursor,
    type StatementDefinitionCreateParams as StatementDefinitionCreateParams,
    type StatementDefinitionRetrieveParams as StatementDefinitionRetrieveParams,
    type StatementDefinitionUpdateParams as StatementDefinitionUpdateParams,
    type StatementDefinitionListParams as StatementDefinitionListParams,
    type StatementDefinitionDeleteParams as StatementDefinitionDeleteParams,
  };
}
