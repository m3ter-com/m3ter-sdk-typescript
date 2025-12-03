// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class PermissionPolicies extends APIResource {
  /**
   * Create a new Permission Policy
   *
   * **NOTE:** When you set up a policy statement for this call using the
   * `permissionPolicy` request parameter to specify the `effect`, `action`, and
   * `resource`, you must use all lower case and the format as shown in this example
   * for a Permission Policy statement that grants full CRUD access to all meters:
   *
   * ```
   * "permissionPolicy" : [
   * 	{
   * 		"effect" : "allow",
   * 		"action" : [
   * 		"config:create",
   * 		"config:delete",
   * 		"config:retrieve",
   * 		"config:update"
   * 		]
   * 		"resource" : [
   * 		"config:meter/*"
   * 		]
   * 	}
   * ]
   * ```
   *
   * For more details and further examples, see
   * [Understanding, Creating, and Managing Permission Policies](https://www.m3ter.com/docs/guides/organization-and-access-management/creating-and-managing-permissions#permission-policy-statements---available-actions-and-resources)
   * in our main Documentation.
   */
  create(
    params: PermissionPolicyCreateParams,
    options?: RequestOptions,
  ): APIPromise<PermissionPolicyResponse> {
    const { orgId = this._client.orgID, ...body } = params;
    return this._client.post(path`/organizations/${orgId}/permissionpolicies`, { body, ...options });
  }

  /**
   * Retrieve the permission policy for the UUID
   */
  retrieve(
    id: string,
    params: PermissionPolicyRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PermissionPolicyResponse> {
    const { orgId = this._client.orgID } = params ?? {};
    return this._client.get(path`/organizations/${orgId}/permissionpolicies/${id}`, options);
  }

  /**
   * Update a Permission Policy for the UUID
   *
   * **NOTE:** When you set up a policy statement for this call to specify the
   * `effect`, `action`, and `resource`, you must use all lower case and the format
   * as shown in this example - a Permission Policy statement that grants full CRUD
   * access to all meters:
   *
   * ```
   * "permissionPolicy" : [
   * 	{
   * 		"effect" : "allow",
   * 		"action" : [
   * 		"config:create",
   * 		"config:delete",
   * 		"config:retrieve",
   * 		"config:update"
   * 		]
   * 		"resource" : [
   * 		"config:meter/*"
   * 		]
   * 	}
   * ]
   * ```
   *
   * For more details and further examples, see
   * [Understanding, Creating, and Managing Permission Policies](https://www.m3ter.com/docs/guides/organization-and-access-management/creating-and-managing-permissions#permission-policy-statements---available-actions-and-resources)
   * in our main Documentation.
   */
  update(
    id: string,
    params: PermissionPolicyUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PermissionPolicyResponse> {
    const { orgId = this._client.orgID, ...body } = params;
    return this._client.put(path`/organizations/${orgId}/permissionpolicies/${id}`, { body, ...options });
  }

  /**
   * Retrieve a list of PermissionPolicy entities
   */
  list(
    params: PermissionPolicyListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PermissionPolicyResponsesCursor, PermissionPolicyResponse> {
    const { orgId = this._client.orgID, ...query } = params ?? {};
    return this._client.getAPIList(
      path`/organizations/${orgId}/permissionpolicies`,
      Cursor<PermissionPolicyResponse>,
      { query, ...options },
    );
  }

  /**
   * Delete the PermissionPolicy for the UUID
   */
  delete(
    id: string,
    params: PermissionPolicyDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PermissionPolicyResponse> {
    const { orgId = this._client.orgID } = params ?? {};
    return this._client.delete(path`/organizations/${orgId}/permissionpolicies/${id}`, options);
  }

  /**
   * Add a permission policy to a service user.
   */
  addToServiceUser(
    permissionPolicyID: string,
    params: PermissionPolicyAddToServiceUserParams,
    options?: RequestOptions,
  ): APIPromise<PermissionPolicyAddToServiceUserResponse> {
    const { orgId = this._client.orgID, ...body } = params;
    return this._client.post(
      path`/organizations/${orgId}/permissionpolicies/${permissionPolicyID}/addtoserviceuser`,
      { body, ...options },
    );
  }

  /**
   * Add a permission policy to support users for an organization.
   */
  addToSupportUser(
    permissionPolicyID: string,
    params: PermissionPolicyAddToSupportUserParams,
    options?: RequestOptions,
  ): APIPromise<PermissionPolicyAddToSupportUserResponse> {
    const { orgId = this._client.orgID, ...body } = params;
    return this._client.post(
      path`/organizations/${orgId}/permissionpolicies/${permissionPolicyID}/addtosupportusers`,
      { body, ...options },
    );
  }

  /**
   * Add a permission policy to a user.
   */
  addToUser(
    permissionPolicyID: string,
    params: PermissionPolicyAddToUserParams,
    options?: RequestOptions,
  ): APIPromise<PermissionPolicyAddToUserResponse> {
    const { orgId = this._client.orgID, ...body } = params;
    return this._client.post(
      path`/organizations/${orgId}/permissionpolicies/${permissionPolicyID}/addtouser`,
      { body, ...options },
    );
  }

  /**
   * Add a permission Policy to a user group
   */
  addToUserGroup(
    permissionPolicyID: string,
    params: PermissionPolicyAddToUserGroupParams,
    options?: RequestOptions,
  ): APIPromise<PermissionPolicyAddToUserGroupResponse> {
    const { orgId = this._client.orgID, ...body } = params;
    return this._client.post(
      path`/organizations/${orgId}/permissionpolicies/${permissionPolicyID}/addtousergroup`,
      { body, ...options },
    );
  }

  /**
   * Remove a permission policy from a service user.
   */
  removeFromServiceUser(
    permissionPolicyID: string,
    params: PermissionPolicyRemoveFromServiceUserParams,
    options?: RequestOptions,
  ): APIPromise<PermissionPolicyRemoveFromServiceUserResponse> {
    const { orgId = this._client.orgID, ...body } = params;
    return this._client.post(
      path`/organizations/${orgId}/permissionpolicies/${permissionPolicyID}/removefromserviceuser`,
      { body, ...options },
    );
  }

  /**
   * Remove a permission policy from support users for an organization.
   */
  removeFromSupportUser(
    permissionPolicyID: string,
    params: PermissionPolicyRemoveFromSupportUserParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PermissionPolicyRemoveFromSupportUserResponse> {
    const { orgId = this._client.orgID } = params ?? {};
    return this._client.post(
      path`/organizations/${orgId}/permissionpolicies/${permissionPolicyID}/removefromsupportusers`,
      options,
    );
  }

  /**
   * Remove a permission policy from a user.
   */
  removeFromUser(
    permissionPolicyID: string,
    params: PermissionPolicyRemoveFromUserParams,
    options?: RequestOptions,
  ): APIPromise<PermissionPolicyRemoveFromUserResponse> {
    const { orgId = this._client.orgID, ...body } = params;
    return this._client.post(
      path`/organizations/${orgId}/permissionpolicies/${permissionPolicyID}/removefromuser`,
      { body, ...options },
    );
  }

  /**
   * Remove a permission policy from a user group.
   */
  removeFromUserGroup(
    permissionPolicyID: string,
    params: PermissionPolicyRemoveFromUserGroupParams,
    options?: RequestOptions,
  ): APIPromise<PermissionPolicyRemoveFromUserGroupResponse> {
    const { orgId = this._client.orgID, ...body } = params;
    return this._client.post(
      path`/organizations/${orgId}/permissionpolicies/${permissionPolicyID}/removefromusergroup`,
      { body, ...options },
    );
  }
}

export type PermissionPolicyResponsesCursor = Cursor<PermissionPolicyResponse>;

export interface PermissionPolicyResponse {
  /**
   * The UUID of the entity.
   */
  id: string;

  /**
   * The unique identifier (UUID) of the user who created this Permission Policy.
   */
  createdBy?: string;

  /**
   * The date and time _(in ISO-8601 format)_ when the Permission Policy was created.
   */
  dtCreated?: string;

  /**
   * The date and time _(in ISO-8601 format)_ when the Permission Policy was last
   * modified.
   */
  dtLastModified?: string;

  /**
   * The unique identifier (UUID) of the user who last modified this Permission
   * Policy.
   */
  lastModifiedBy?: string;

  /**
   * Indicates whether this is a system generated Managed Permission Policy.
   */
  managedPolicy?: boolean;

  /**
   * The name of the Permission Policy.
   */
  name?: string;

  /**
   * Array containing the Permission Policies information.
   */
  permissionPolicy?: Array<PermissionStatementResponse>;

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

export interface PermissionStatementResponse {
  /**
   * The actions available to users who are assigned the Permission Policy - what
   * they can do or cannot do with respect to the specified resource.
   *
   * **NOTE:** Use lower case and a colon-separated format, for example, if you want
   * to confer full CRUD, use:
   *
   * ```
   * "config:create",
   * "config:delete",
   * "config:retrieve",
   * "config:update"
   * ```
   */
  action: Array<
    | 'ALL'
    | 'CONFIG_CREATE'
    | 'CONFIG_RETRIEVE'
    | 'CONFIG_UPDATE'
    | 'CONFIG_DELETE'
    | 'CONFIG_EXPORT'
    | 'ANALYTICS_QUERY'
    | 'MEASUREMENTS_UPLOAD'
    | 'MEASUREMENTS_FILEUPLOAD'
    | 'MEASUREMENTS_RETRIEVE'
    | 'MEASUREMENTS_EXPORT'
    | 'FORECAST_RETRIEVE'
    | 'HEALTHSCORES_RETRIEVE'
    | 'ANOMALIES_RETRIEVE'
    | 'EXPORTS_DOWNLOAD'
    | 'MARKETPLACE_USAGE_CREATE'
    | 'MARKETPLACE_USAGE_RETRIEVE'
    | 'AUDIT_RETRIEVE'
  >;

  /**
   * Specifies whether or not the user is allowed to perform the action on the
   * resource.
   *
   * **NOTE:** Use lower case, for example: `"allow"`. If you use upper case, you'll
   * receive an error.
   */
  effect: 'ALLOW' | 'DENY';

  /**
   * See
   * [Statements - Available Resources](https://www.m3ter.com/docs/guides/managing-organization-and-users/creating-and-managing-permissions#statements---available-resources)
   * for a listing of available resources for Permission Policy statements.
   */
  resource: Array<string>;
}

export interface PrincipalPermissionRequest {
  principalId: string;

  /**
   * The version number of the entity:
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

export interface PermissionPolicyAddToServiceUserResponse {
  /**
   * The UUID of the entity.
   */
  id: string;

  /**
   * The id of the user who created this principal permission.
   */
  createdBy?: string;

  /**
   * The DateTime _(in ISO-8601 format)_ when the principal permission was created.
   */
  dtCreated?: string;

  /**
   * The DateTime _(in ISO-8601 format)_ when the principal permission was last
   * modified.
   */
  dtLastModified?: string;

  /**
   * The id of the user who last modified this principal permission.
   */
  lastModifiedBy?: string;

  permissionPolicyId?: string;

  principalId?: string;

  principalType?: 'USER' | 'USERGROUP' | 'SERVICEUSER' | 'SUPPORTUSERS';

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

export interface PermissionPolicyAddToSupportUserResponse {
  /**
   * The UUID of the entity.
   */
  id: string;

  /**
   * The id of the user who created this principal permission.
   */
  createdBy?: string;

  /**
   * The DateTime _(in ISO-8601 format)_ when the principal permission was created.
   */
  dtCreated?: string;

  /**
   * The DateTime _(in ISO-8601 format)_ when the principal permission was last
   * modified.
   */
  dtLastModified?: string;

  /**
   * The id of the user who last modified this principal permission.
   */
  lastModifiedBy?: string;

  permissionPolicyId?: string;

  principalId?: string;

  principalType?: 'USER' | 'USERGROUP' | 'SERVICEUSER' | 'SUPPORTUSERS';

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

export interface PermissionPolicyAddToUserResponse {
  /**
   * The UUID of the entity.
   */
  id: string;

  /**
   * The id of the user who created this principal permission.
   */
  createdBy?: string;

  /**
   * The DateTime _(in ISO-8601 format)_ when the principal permission was created.
   */
  dtCreated?: string;

  /**
   * The DateTime _(in ISO-8601 format)_ when the principal permission was last
   * modified.
   */
  dtLastModified?: string;

  /**
   * The id of the user who last modified this principal permission.
   */
  lastModifiedBy?: string;

  permissionPolicyId?: string;

  principalId?: string;

  principalType?: 'USER' | 'USERGROUP' | 'SERVICEUSER' | 'SUPPORTUSERS';

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

export interface PermissionPolicyAddToUserGroupResponse {
  /**
   * The UUID of the entity.
   */
  id: string;

  /**
   * The id of the user who created this principal permission.
   */
  createdBy?: string;

  /**
   * The DateTime _(in ISO-8601 format)_ when the principal permission was created.
   */
  dtCreated?: string;

  /**
   * The DateTime _(in ISO-8601 format)_ when the principal permission was last
   * modified.
   */
  dtLastModified?: string;

  /**
   * The id of the user who last modified this principal permission.
   */
  lastModifiedBy?: string;

  permissionPolicyId?: string;

  principalId?: string;

  principalType?: 'USER' | 'USERGROUP' | 'SERVICEUSER' | 'SUPPORTUSERS';

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

export interface PermissionPolicyRemoveFromServiceUserResponse {
  /**
   * The UUID of the entity.
   */
  id: string;

  /**
   * The id of the user who created this principal permission.
   */
  createdBy?: string;

  /**
   * The DateTime _(in ISO-8601 format)_ when the principal permission was created.
   */
  dtCreated?: string;

  /**
   * The DateTime _(in ISO-8601 format)_ when the principal permission was last
   * modified.
   */
  dtLastModified?: string;

  /**
   * The id of the user who last modified this principal permission.
   */
  lastModifiedBy?: string;

  permissionPolicyId?: string;

  principalId?: string;

  principalType?: 'USER' | 'USERGROUP' | 'SERVICEUSER' | 'SUPPORTUSERS';

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

export interface PermissionPolicyRemoveFromSupportUserResponse {
  /**
   * The UUID of the entity.
   */
  id: string;

  /**
   * The id of the user who created this principal permission.
   */
  createdBy?: string;

  /**
   * The DateTime _(in ISO-8601 format)_ when the principal permission was created.
   */
  dtCreated?: string;

  /**
   * The DateTime _(in ISO-8601 format)_ when the principal permission was last
   * modified.
   */
  dtLastModified?: string;

  /**
   * The id of the user who last modified this principal permission.
   */
  lastModifiedBy?: string;

  permissionPolicyId?: string;

  principalId?: string;

  principalType?: 'USER' | 'USERGROUP' | 'SERVICEUSER' | 'SUPPORTUSERS';

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

export interface PermissionPolicyRemoveFromUserResponse {
  /**
   * The UUID of the entity.
   */
  id: string;

  /**
   * The id of the user who created this principal permission.
   */
  createdBy?: string;

  /**
   * The DateTime _(in ISO-8601 format)_ when the principal permission was created.
   */
  dtCreated?: string;

  /**
   * The DateTime _(in ISO-8601 format)_ when the principal permission was last
   * modified.
   */
  dtLastModified?: string;

  /**
   * The id of the user who last modified this principal permission.
   */
  lastModifiedBy?: string;

  permissionPolicyId?: string;

  principalId?: string;

  principalType?: 'USER' | 'USERGROUP' | 'SERVICEUSER' | 'SUPPORTUSERS';

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

export interface PermissionPolicyRemoveFromUserGroupResponse {
  /**
   * The UUID of the entity.
   */
  id: string;

  /**
   * The id of the user who created this principal permission.
   */
  createdBy?: string;

  /**
   * The DateTime _(in ISO-8601 format)_ when the principal permission was created.
   */
  dtCreated?: string;

  /**
   * The DateTime _(in ISO-8601 format)_ when the principal permission was last
   * modified.
   */
  dtLastModified?: string;

  /**
   * The id of the user who last modified this principal permission.
   */
  lastModifiedBy?: string;

  permissionPolicyId?: string;

  principalId?: string;

  principalType?: 'USER' | 'USERGROUP' | 'SERVICEUSER' | 'SUPPORTUSERS';

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

export interface PermissionPolicyCreateParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param:
   */
  name: string;

  /**
   * Body param:
   */
  permissionPolicy: Array<PermissionStatementResponse>;

  /**
   * Body param: The version number of the entity:
   *
   * - **Create entity:** Not valid for initial insertion of new entity - do not use
   *   for Create. On initial Create, version is set at 1 and listed in the response.
   * - **Update Entity:** On Update, version is required and must match the existing
   *   version because a check is performed to ensure sequential versioning is
   *   preserved. Version is incremented by 1 and listed in the response.
   */
  version?: number;
}

export interface PermissionPolicyRetrieveParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface PermissionPolicyUpdateParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param:
   */
  name: string;

  /**
   * Body param:
   */
  permissionPolicy: Array<PermissionStatementResponse>;

  /**
   * Body param: The version number of the entity:
   *
   * - **Create entity:** Not valid for initial insertion of new entity - do not use
   *   for Create. On initial Create, version is set at 1 and listed in the response.
   * - **Update Entity:** On Update, version is required and must match the existing
   *   version because a check is performed to ensure sequential versioning is
   *   preserved. Version is incremented by 1 and listed in the response.
   */
  version?: number;
}

export interface PermissionPolicyListParams extends CursorParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface PermissionPolicyDeleteParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface PermissionPolicyAddToServiceUserParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param:
   */
  principalId: string;

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

export interface PermissionPolicyAddToSupportUserParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

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

export interface PermissionPolicyAddToUserParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param:
   */
  principalId: string;

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

export interface PermissionPolicyAddToUserGroupParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param:
   */
  principalId: string;

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

export interface PermissionPolicyRemoveFromServiceUserParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param:
   */
  principalId: string;

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

export interface PermissionPolicyRemoveFromSupportUserParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface PermissionPolicyRemoveFromUserParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param:
   */
  principalId: string;

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

export interface PermissionPolicyRemoveFromUserGroupParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param:
   */
  principalId: string;

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

export declare namespace PermissionPolicies {
  export {
    type PermissionPolicyResponse as PermissionPolicyResponse,
    type PermissionStatementResponse as PermissionStatementResponse,
    type PrincipalPermissionRequest as PrincipalPermissionRequest,
    type PermissionPolicyAddToServiceUserResponse as PermissionPolicyAddToServiceUserResponse,
    type PermissionPolicyAddToSupportUserResponse as PermissionPolicyAddToSupportUserResponse,
    type PermissionPolicyAddToUserResponse as PermissionPolicyAddToUserResponse,
    type PermissionPolicyAddToUserGroupResponse as PermissionPolicyAddToUserGroupResponse,
    type PermissionPolicyRemoveFromServiceUserResponse as PermissionPolicyRemoveFromServiceUserResponse,
    type PermissionPolicyRemoveFromSupportUserResponse as PermissionPolicyRemoveFromSupportUserResponse,
    type PermissionPolicyRemoveFromUserResponse as PermissionPolicyRemoveFromUserResponse,
    type PermissionPolicyRemoveFromUserGroupResponse as PermissionPolicyRemoveFromUserGroupResponse,
    type PermissionPolicyResponsesCursor as PermissionPolicyResponsesCursor,
    type PermissionPolicyCreateParams as PermissionPolicyCreateParams,
    type PermissionPolicyRetrieveParams as PermissionPolicyRetrieveParams,
    type PermissionPolicyUpdateParams as PermissionPolicyUpdateParams,
    type PermissionPolicyListParams as PermissionPolicyListParams,
    type PermissionPolicyDeleteParams as PermissionPolicyDeleteParams,
    type PermissionPolicyAddToServiceUserParams as PermissionPolicyAddToServiceUserParams,
    type PermissionPolicyAddToSupportUserParams as PermissionPolicyAddToSupportUserParams,
    type PermissionPolicyAddToUserParams as PermissionPolicyAddToUserParams,
    type PermissionPolicyAddToUserGroupParams as PermissionPolicyAddToUserGroupParams,
    type PermissionPolicyRemoveFromServiceUserParams as PermissionPolicyRemoveFromServiceUserParams,
    type PermissionPolicyRemoveFromSupportUserParams as PermissionPolicyRemoveFromSupportUserParams,
    type PermissionPolicyRemoveFromUserParams as PermissionPolicyRemoveFromUserParams,
    type PermissionPolicyRemoveFromUserGroupParams as PermissionPolicyRemoveFromUserGroupParams,
  };
}
