// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { Cursor, type CursorParams } from '../pagination';

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
    options?: Core.RequestOptions,
  ): Core.APIPromise<PermissionPolicyResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.post(`/organizations/${orgId}/permissionpolicies`, { body, ...options });
  }

  /**
   * Retrieve the permission policy for the UUID
   */
  retrieve(
    id: string,
    params?: PermissionPolicyRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PermissionPolicyResponse>;
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<PermissionPolicyResponse>;
  retrieve(
    id: string,
    params: PermissionPolicyRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PermissionPolicyResponse> {
    if (isRequestOptions(params)) {
      return this.retrieve(id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.get(`/organizations/${orgId}/permissionpolicies/${id}`, options);
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
    options?: Core.RequestOptions,
  ): Core.APIPromise<PermissionPolicyResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.put(`/organizations/${orgId}/permissionpolicies/${id}`, { body, ...options });
  }

  /**
   * Retrieve a list of PermissionPolicy entities
   */
  list(
    params?: PermissionPolicyListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PermissionPolicyResponsesCursor, PermissionPolicyResponse>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<PermissionPolicyResponsesCursor, PermissionPolicyResponse>;
  list(
    params: PermissionPolicyListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<PermissionPolicyResponsesCursor, PermissionPolicyResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { orgId = this._client.orgId, ...query } = params;
    return this._client.getAPIList(
      `/organizations/${orgId}/permissionpolicies`,
      PermissionPolicyResponsesCursor,
      { query, ...options },
    );
  }

  /**
   * Delete the PermissionPolicy for the UUID
   */
  delete(
    id: string,
    params?: PermissionPolicyDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PermissionPolicyResponse>;
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<PermissionPolicyResponse>;
  delete(
    id: string,
    params: PermissionPolicyDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PermissionPolicyResponse> {
    if (isRequestOptions(params)) {
      return this.delete(id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.delete(`/organizations/${orgId}/permissionpolicies/${id}`, options);
  }

  /**
   * Add a permission policy to a service user.
   */
  addToServiceUser(
    permissionPolicyId: string,
    params: PermissionPolicyAddToServiceUserParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PermissionPolicyAddToServiceUserResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.post(
      `/organizations/${orgId}/permissionpolicies/${permissionPolicyId}/addtoserviceuser`,
      { body, ...options },
    );
  }

  /**
   * Add a permission policy to support users for an organization.
   */
  addToSupportUser(
    permissionPolicyId: string,
    params: PermissionPolicyAddToSupportUserParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PermissionPolicyAddToSupportUserResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.post(
      `/organizations/${orgId}/permissionpolicies/${permissionPolicyId}/addtosupportusers`,
      { body, ...options },
    );
  }

  /**
   * Add a permission policy to a user.
   */
  addToUser(
    permissionPolicyId: string,
    params: PermissionPolicyAddToUserParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PermissionPolicyAddToUserResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.post(`/organizations/${orgId}/permissionpolicies/${permissionPolicyId}/addtouser`, {
      body,
      ...options,
    });
  }

  /**
   * Add a permission Policy to a user group
   */
  addToUserGroup(
    permissionPolicyId: string,
    params: PermissionPolicyAddToUserGroupParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PermissionPolicyAddToUserGroupResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.post(
      `/organizations/${orgId}/permissionpolicies/${permissionPolicyId}/addtousergroup`,
      { body, ...options },
    );
  }

  /**
   * Remove a permission policy from a service user.
   */
  removeFromServiceUser(
    permissionPolicyId: string,
    params: PermissionPolicyRemoveFromServiceUserParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PermissionPolicyRemoveFromServiceUserResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.post(
      `/organizations/${orgId}/permissionpolicies/${permissionPolicyId}/removefromserviceuser`,
      { body, ...options },
    );
  }

  /**
   * Remove a permission policy from support users for an organization.
   */
  removeFromSupportUser(
    permissionPolicyId: string,
    params?: PermissionPolicyRemoveFromSupportUserParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PermissionPolicyRemoveFromSupportUserResponse>;
  removeFromSupportUser(
    permissionPolicyId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PermissionPolicyRemoveFromSupportUserResponse>;
  removeFromSupportUser(
    permissionPolicyId: string,
    params: PermissionPolicyRemoveFromSupportUserParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PermissionPolicyRemoveFromSupportUserResponse> {
    if (isRequestOptions(params)) {
      return this.removeFromSupportUser(permissionPolicyId, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.post(
      `/organizations/${orgId}/permissionpolicies/${permissionPolicyId}/removefromsupportusers`,
      options,
    );
  }

  /**
   * Remove a permission policy from a user.
   */
  removeFromUser(
    permissionPolicyId: string,
    params: PermissionPolicyRemoveFromUserParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PermissionPolicyRemoveFromUserResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.post(
      `/organizations/${orgId}/permissionpolicies/${permissionPolicyId}/removefromuser`,
      { body, ...options },
    );
  }

  /**
   * Remove a permission policy from a user group.
   */
  removeFromUserGroup(
    permissionPolicyId: string,
    params: PermissionPolicyRemoveFromUserGroupParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PermissionPolicyRemoveFromUserGroupResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.post(
      `/organizations/${orgId}/permissionpolicies/${permissionPolicyId}/removefromusergroup`,
      { body, ...options },
    );
  }
}

export class PermissionPolicyResponsesCursor extends Cursor<PermissionPolicyResponse> {}

export interface PermissionPolicyResponse {
  /**
   * The unique identifier (UUID) for this Permission Policy.
   */
  id?: string;

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
   * The version number. Default value when newly created is one.
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
  id?: string;

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
  id?: string;

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
  id?: string;

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
  id?: string;

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
  id?: string;

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
  id?: string;

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
  id?: string;

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
  id?: string;

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
   * Path param: UUID of the organization
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
   * UUID of the organization
   */
  orgId?: string;
}

export interface PermissionPolicyUpdateParams {
  /**
   * Path param: UUID of the organization
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
   * Path param: UUID of the organization
   */
  orgId?: string;
}

export interface PermissionPolicyDeleteParams {
  /**
   * UUID of the organization
   */
  orgId?: string;
}

export interface PermissionPolicyAddToServiceUserParams {
  /**
   * Path param: UUID of the organization
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
   * Path param: UUID of the organization
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
   * Path param: UUID of the organization
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
   * Path param: UUID of the organization
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
   * Path param: UUID of the organization
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
   * UUID of the organization
   */
  orgId?: string;
}

export interface PermissionPolicyRemoveFromUserParams {
  /**
   * Path param: UUID of the organization
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
   * Path param: UUID of the organization
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

PermissionPolicies.PermissionPolicyResponsesCursor = PermissionPolicyResponsesCursor;

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
    PermissionPolicyResponsesCursor as PermissionPolicyResponsesCursor,
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
