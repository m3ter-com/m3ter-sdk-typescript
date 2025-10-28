// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as PermissionPoliciesAPI from './permission-policies';
import { PermissionPolicyResponsesCursor } from './permission-policies';
import { APIPromise } from '../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

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
    options?: RequestOptions,
  ): APIPromise<ResourceGroupResponse> {
    const { orgId = this._client.orgID, ...body } = params;
    return this._client.post(path`/organizations/${orgId}/resourcegroups/${type}`, { body, ...options });
  }

  /**
   * Retrieve the ResourceGroup for the UUID
   *
   * @example
   * ```ts
   * const resourceGroupResponse =
   *   await client.resourceGroups.retrieve('id', {
   *     type: 'type',
   *   });
   * ```
   */
  retrieve(
    id: string,
    params: ResourceGroupRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ResourceGroupResponse> {
    const { orgId = this._client.orgID, type } = params;
    return this._client.get(path`/organizations/${orgId}/resourcegroups/${type}/${id}`, options);
  }

  /**
   * Update the ResourceGroup for the UUID
   *
   * @example
   * ```ts
   * const resourceGroupResponse =
   *   await client.resourceGroups.update('id', {
   *     type: 'type',
   *     name: 'x',
   *   });
   * ```
   */
  update(
    id: string,
    params: ResourceGroupUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ResourceGroupResponse> {
    const { orgId = this._client.orgID, type, ...body } = params;
    return this._client.put(path`/organizations/${orgId}/resourcegroups/${type}/${id}`, { body, ...options });
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
    params: ResourceGroupListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ResourceGroupResponsesCursor, ResourceGroupResponse> {
    const { orgId = this._client.orgID, ...query } = params ?? {};
    return this._client.getAPIList(
      path`/organizations/${orgId}/resourcegroups/${type}`,
      Cursor<ResourceGroupResponse>,
      { query, ...options },
    );
  }

  /**
   * Delete a ResourceGroup for the UUID
   *
   * @example
   * ```ts
   * const resourceGroupResponse =
   *   await client.resourceGroups.delete('id', {
   *     type: 'type',
   *   });
   * ```
   */
  delete(
    id: string,
    params: ResourceGroupDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ResourceGroupResponse> {
    const { orgId = this._client.orgID, type } = params;
    return this._client.delete(path`/organizations/${orgId}/resourcegroups/${type}/${id}`, options);
  }

  /**
   * Add an item to a ResourceGroup.
   *
   * @example
   * ```ts
   * const resourceGroupResponse =
   *   await client.resourceGroups.addResource(
   *     'resourceGroupId',
   *     {
   *       type: 'type',
   *       targetId: '06f6b50c-a868-4ca6-XXXX-448e507d5248',
   *       targetType: 'ITEM',
   *     },
   *   );
   * ```
   */
  addResource(
    resourceGroupID: string,
    params: ResourceGroupAddResourceParams,
    options?: RequestOptions,
  ): APIPromise<ResourceGroupResponse> {
    const { orgId = this._client.orgID, type, ...body } = params;
    return this._client.post(
      path`/organizations/${orgId}/resourcegroups/${type}/${resourceGroupID}/addresource`,
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
   *   'resourceGroupId',
   *   { type: 'type' },
   * )) {
   *   // ...
   * }
   * ```
   */
  listContents(
    resourceGroupID: string,
    params: ResourceGroupListContentsParams,
    options?: RequestOptions,
  ): PagePromise<ResourceGroupListContentsResponsesCursor, ResourceGroupListContentsResponse> {
    const { orgId = this._client.orgID, type, nextToken, pageSize } = params;
    return this._client.getAPIList(
      path`/organizations/${orgId}/resourcegroups/${type}/${resourceGroupID}/contents`,
      Cursor<ResourceGroupListContentsResponse>,
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
   *   'resourceGroupId',
   *   { type: 'type' },
   * )) {
   *   // ...
   * }
   * ```
   */
  listPermissions(
    resourceGroupID: string,
    params: ResourceGroupListPermissionsParams,
    options?: RequestOptions,
  ): PagePromise<PermissionPolicyResponsesCursor, PermissionPoliciesAPI.PermissionPolicyResponse> {
    const { orgId = this._client.orgID, type, ...query } = params;
    return this._client.getAPIList(
      path`/organizations/${orgId}/resourcegroups/${type}/${resourceGroupID}/permissions`,
      Cursor<PermissionPoliciesAPI.PermissionPolicyResponse>,
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
   *     'resourceGroupId',
   *     {
   *       type: 'type',
   *       targetId: '06f6b50c-a868-4ca6-XXXX-448e507d5248',
   *       targetType: 'ITEM',
   *     },
   *   );
   * ```
   */
  removeResource(
    resourceGroupID: string,
    params: ResourceGroupRemoveResourceParams,
    options?: RequestOptions,
  ): APIPromise<ResourceGroupResponse> {
    const { orgId = this._client.orgID, type, ...body } = params;
    return this._client.post(
      path`/organizations/${orgId}/resourcegroups/${type}/${resourceGroupID}/removeresource`,
      { body, ...options },
    );
  }
}

export type ResourceGroupResponsesCursor = Cursor<ResourceGroupResponse>;

export type ResourceGroupListContentsResponsesCursor = Cursor<ResourceGroupListContentsResponse>;

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

  /**
   * The type of resource
   */
  type: string;
}

export interface ResourceGroupUpdateParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Path param: The type of resource
   */
  type: string;

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

  /**
   * The type of resource
   */
  type: string;
}

export interface ResourceGroupAddResourceParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Path param: The type of resource the Resource Group is for, such as a Meter
   * Resource Group.
   */
  type: string;

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

  /**
   * Path param: The type of resource
   */
  type: string;
}

export interface ResourceGroupListPermissionsParams extends CursorParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Path param: The type of resource
   */
  type: string;
}

export interface ResourceGroupRemoveResourceParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Path param: The type of resource
   */
  type: string;

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

export declare namespace ResourceGroups {
  export {
    type ResourceGroupResponse as ResourceGroupResponse,
    type ResourceGroupListContentsResponse as ResourceGroupListContentsResponse,
    type ResourceGroupResponsesCursor as ResourceGroupResponsesCursor,
    type ResourceGroupListContentsResponsesCursor as ResourceGroupListContentsResponsesCursor,
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

export { type PermissionPolicyResponsesCursor };
