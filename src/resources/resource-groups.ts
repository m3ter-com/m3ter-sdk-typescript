// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as PermissionPoliciesAPI from './permission-policies';
import { PermissionPolicyResponsesCursor } from './permission-policies';
import { Cursor, type CursorParams } from '../pagination';

export class ResourceGroups extends APIResource {
  /**
   * Create a ResourceGroup for the UUID
   *
   * @example
   * ```ts
   * const resourceGroupResponse =
   *   await client.resourceGroups.create('type', { name: 'x' });
   * ```
   */
  create(
    type: string,
    params: ResourceGroupCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ResourceGroupResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.post(`/organizations/${orgId}/resourcegroups/${type}`, { body, ...options });
  }

  /**
   * Retrieve the ResourceGroup for the UUID
   *
   * @example
   * ```ts
   * const resourceGroupResponse =
   *   await client.resourceGroups.retrieve('type', 'id');
   * ```
   */
  retrieve(
    type: string,
    id: string,
    params?: ResourceGroupRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ResourceGroupResponse>;
  retrieve(type: string, id: string, options?: Core.RequestOptions): Core.APIPromise<ResourceGroupResponse>;
  retrieve(
    type: string,
    id: string,
    params: ResourceGroupRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ResourceGroupResponse> {
    if (isRequestOptions(params)) {
      return this.retrieve(type, id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.get(`/organizations/${orgId}/resourcegroups/${type}/${id}`, options);
  }

  /**
   * Update the ResourceGroup for the UUID
   *
   * @example
   * ```ts
   * const resourceGroupResponse =
   *   await client.resourceGroups.update('type', 'id', {
   *     name: 'x',
   *   });
   * ```
   */
  update(
    type: string,
    id: string,
    params: ResourceGroupUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ResourceGroupResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.put(`/organizations/${orgId}/resourcegroups/${type}/${id}`, { body, ...options });
  }

  /**
   * Retrieve a list of ResourceGroup entities
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const resourceGroupResponse of client.resourceGroups.list(
   *   'type',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    type: string,
    params?: ResourceGroupListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ResourceGroupResponsesCursor, ResourceGroupResponse>;
  list(
    type: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ResourceGroupResponsesCursor, ResourceGroupResponse>;
  list(
    type: string,
    params: ResourceGroupListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ResourceGroupResponsesCursor, ResourceGroupResponse> {
    if (isRequestOptions(params)) {
      return this.list(type, {}, params);
    }
    const { orgId = this._client.orgId, ...query } = params;
    return this._client.getAPIList(
      `/organizations/${orgId}/resourcegroups/${type}`,
      ResourceGroupResponsesCursor,
      { query, ...options },
    );
  }

  /**
   * Delete a ResourceGroup for the UUID
   *
   * @example
   * ```ts
   * const resourceGroupResponse =
   *   await client.resourceGroups.delete('type', 'id');
   * ```
   */
  delete(
    type: string,
    id: string,
    params?: ResourceGroupDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ResourceGroupResponse>;
  delete(type: string, id: string, options?: Core.RequestOptions): Core.APIPromise<ResourceGroupResponse>;
  delete(
    type: string,
    id: string,
    params: ResourceGroupDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ResourceGroupResponse> {
    if (isRequestOptions(params)) {
      return this.delete(type, id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.delete(`/organizations/${orgId}/resourcegroups/${type}/${id}`, options);
  }

  /**
   * Add an item to a ResourceGroup.
   *
   * @example
   * ```ts
   * const resourceGroupResponse =
   *   await client.resourceGroups.addResource(
   *     'type',
   *     'resourceGroupId',
   *     {
   *       targetId: '06f6b50c-a868-4ca6-XXXX-448e507d5248',
   *       targetType: 'ITEM',
   *     },
   *   );
   * ```
   */
  addResource(
    type: string,
    resourceGroupId: string,
    params: ResourceGroupAddResourceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ResourceGroupResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.post(
      `/organizations/${orgId}/resourcegroups/${type}/${resourceGroupId}/addresource`,
      { body, ...options },
    );
  }

  /**
   * Retrieve a list of items for a ResourceGroup
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const resourceGroupListContentsResponse of client.resourceGroups.listContents(
   *   'type',
   *   'resourceGroupId',
   * )) {
   *   // ...
   * }
   * ```
   */
  listContents(
    type: string,
    resourceGroupId: string,
    params?: ResourceGroupListContentsParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ResourceGroupListContentsResponsesCursor, ResourceGroupListContentsResponse>;
  listContents(
    type: string,
    resourceGroupId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ResourceGroupListContentsResponsesCursor, ResourceGroupListContentsResponse>;
  listContents(
    type: string,
    resourceGroupId: string,
    params: ResourceGroupListContentsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ResourceGroupListContentsResponsesCursor, ResourceGroupListContentsResponse> {
    if (isRequestOptions(params)) {
      return this.listContents(type, resourceGroupId, {}, params);
    }
    const { orgId = this._client.orgId, nextToken, pageSize } = params;
    return this._client.getAPIList(
      `/organizations/${orgId}/resourcegroups/${type}/${resourceGroupId}/contents`,
      ResourceGroupListContentsResponsesCursor,
      { query: { nextToken, pageSize }, method: 'post', ...options },
    );
  }

  /**
   * Retrieve a list of permission policies for a ResourceGroup
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const permissionPolicyResponse of client.resourceGroups.listPermissions(
   *   'type',
   *   'resourceGroupId',
   * )) {
   *   // ...
   * }
   * ```
   */
  listPermissions(
    type: string,
    resourceGroupId: string,
    params?: ResourceGroupListPermissionsParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PermissionPolicyResponsesCursor, PermissionPoliciesAPI.PermissionPolicyResponse>;
  listPermissions(
    type: string,
    resourceGroupId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PermissionPolicyResponsesCursor, PermissionPoliciesAPI.PermissionPolicyResponse>;
  listPermissions(
    type: string,
    resourceGroupId: string,
    params: ResourceGroupListPermissionsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<PermissionPolicyResponsesCursor, PermissionPoliciesAPI.PermissionPolicyResponse> {
    if (isRequestOptions(params)) {
      return this.listPermissions(type, resourceGroupId, {}, params);
    }
    const { orgId = this._client.orgId, ...query } = params;
    return this._client.getAPIList(
      `/organizations/${orgId}/resourcegroups/${type}/${resourceGroupId}/permissions`,
      PermissionPolicyResponsesCursor,
      { query, ...options },
    );
  }

  /**
   * Remove an item from a ResourceGroup.
   *
   * @example
   * ```ts
   * const resourceGroupResponse =
   *   await client.resourceGroups.removeResource(
   *     'type',
   *     'resourceGroupId',
   *     {
   *       targetId: '06f6b50c-a868-4ca6-XXXX-448e507d5248',
   *       targetType: 'ITEM',
   *     },
   *   );
   * ```
   */
  removeResource(
    type: string,
    resourceGroupId: string,
    params: ResourceGroupRemoveResourceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ResourceGroupResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.post(
      `/organizations/${orgId}/resourcegroups/${type}/${resourceGroupId}/removeresource`,
      { body, ...options },
    );
  }
}

export class ResourceGroupResponsesCursor extends Cursor<ResourceGroupResponse> {}

export class ResourceGroupListContentsResponsesCursor extends Cursor<ResourceGroupListContentsResponse> {}

export interface ResourceGroupResponse {
  /**
   * The unique identifier (UUID) of the Resource Group.
   */
  id?: string;

  /**
   * The unique identifier (UUID) of the user who created this Resource Group.
   */
  createdBy?: string;

  /**
   * The date and time _(in ISO-8601 format)_ when the Resource Group was created.
   */
  dtCreated?: string;

  /**
   * The date and time _(in ISO-8601 format)_ when the Resource Group was last
   * modified.
   */
  dtLastModified?: string;

  /**
   * The unique identifier (UUID) of the user who last modified this Resource Group.
   */
  lastModifiedBy?: string;

  /**
   * The name of the Resource Group.
   */
  name?: string;

  /**
   * The version number. Default value when newly created is one.
   */
  version?: number;
}

export interface ResourceGroupListContentsResponse {
  /**
   * The id of the user who created this item for the resource group.
   */
  createdBy?: string;

  /**
   * The DateTime when the item was created for the resource group.
   */
  dtCreated?: string;

  /**
   * The DateTime when the resource group item was last modified.
   */
  dtLastModified?: string;

  /**
   * The id of the user who last modified this item for the resource group.
   */
  lastModifiedBy?: string;

  /**
   * The UUID of the item.
   */
  targetId?: string;

  targetType?: 'ITEM' | 'GROUP';
}

export interface ResourceGroupCreateParams {
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
  version?: number;
}

export interface ResourceGroupRetrieveParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface ResourceGroupUpdateParams {
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
  version?: number;
}

export interface ResourceGroupListParams extends CursorParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface ResourceGroupDeleteParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface ResourceGroupAddResourceParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param: The id of the item or group you want to:
   *
   * - _Add Item_ call: add to a Resource Group.
   * - _Remove Item_ call: remove from the Resource Group.
   */
  targetId: string;

  /**
   * Body param: When adding to or removing from a Resource Group, specify whether a
   * single item or group:
   *
   * - `item`
   *   - _Add Item_ call: use to add a single meter to a Resource Group
   *   - _Remove Item_ call: use to remove a single from a Resource Group.
   * - `group`
   *   - _Add Item_ call: use to add a Resource Group to another Resource Group and
   *     form a nested Resource Group
   *   - _Remove Item_ call: use remove a nested Resource Group from a Resource
   *     Group.
   */
  targetType: 'ITEM' | 'GROUP';

  /**
   * Body param: The version number of the group.
   */
  version?: number;
}

export interface ResourceGroupListContentsParams extends CursorParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface ResourceGroupListPermissionsParams extends CursorParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface ResourceGroupRemoveResourceParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param: The id of the item or group you want to:
   *
   * - _Add Item_ call: add to a Resource Group.
   * - _Remove Item_ call: remove from the Resource Group.
   */
  targetId: string;

  /**
   * Body param: When adding to or removing from a Resource Group, specify whether a
   * single item or group:
   *
   * - `item`
   *   - _Add Item_ call: use to add a single meter to a Resource Group
   *   - _Remove Item_ call: use to remove a single from a Resource Group.
   * - `group`
   *   - _Add Item_ call: use to add a Resource Group to another Resource Group and
   *     form a nested Resource Group
   *   - _Remove Item_ call: use remove a nested Resource Group from a Resource
   *     Group.
   */
  targetType: 'ITEM' | 'GROUP';

  /**
   * Body param: The version number of the group.
   */
  version?: number;
}

ResourceGroups.ResourceGroupResponsesCursor = ResourceGroupResponsesCursor;
ResourceGroups.ResourceGroupListContentsResponsesCursor = ResourceGroupListContentsResponsesCursor;

export declare namespace ResourceGroups {
  export {
    type ResourceGroupResponse as ResourceGroupResponse,
    type ResourceGroupListContentsResponse as ResourceGroupListContentsResponse,
    ResourceGroupResponsesCursor as ResourceGroupResponsesCursor,
    ResourceGroupListContentsResponsesCursor as ResourceGroupListContentsResponsesCursor,
    type ResourceGroupCreateParams as ResourceGroupCreateParams,
    type ResourceGroupRetrieveParams as ResourceGroupRetrieveParams,
    type ResourceGroupUpdateParams as ResourceGroupUpdateParams,
    type ResourceGroupListParams as ResourceGroupListParams,
    type ResourceGroupDeleteParams as ResourceGroupDeleteParams,
    type ResourceGroupAddResourceParams as ResourceGroupAddResourceParams,
    type ResourceGroupListContentsParams as ResourceGroupListContentsParams,
    type ResourceGroupListPermissionsParams as ResourceGroupListPermissionsParams,
    type ResourceGroupRemoveResourceParams as ResourceGroupRemoveResourceParams,
  };
}

export { PermissionPolicyResponsesCursor };
