// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as PermissionPoliciesAPI from '../permission-policies';
import * as ResourceGroupsAPI from '../resource-groups';
import * as InvitationsAPI from './invitations';
import {
  InvitationCreateParams,
  InvitationListParams,
  InvitationResponse,
  InvitationResponsesCursor,
  InvitationRetrieveParams,
  Invitations,
} from './invitations';
import { Cursor, type CursorParams } from '../../pagination';

export class Users extends APIResource {
  invitations: InvitationsAPI.Invitations = new InvitationsAPI.Invitations(this._client);

  /**
   * Retrieve the OrgUser with the given UUID.
   *
   * Retrieves detailed information for a specific user within an Organization, using
   * their unique identifier (UUID).
   */
  retrieve(
    id: string,
    params?: UserRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserResponse>;
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<UserResponse>;
  retrieve(
    id: string,
    params: UserRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserResponse> {
    if (isRequestOptions(params)) {
      return this.retrieve(id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.get(`/organizations/${orgId}/users/${id}`, options);
  }

  /**
   * Update the OrgUser with the given UUID.
   *
   * Updates the details for a specific user within an Organization using their
   * unique identifier (UUID). Use this endpoint when you need to modify user
   * information such as their permission policy.
   */
  update(id: string, params: UserUpdateParams, options?: Core.RequestOptions): Core.APIPromise<UserResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.put(`/organizations/${orgId}/users/${id}`, { body, ...options });
  }

  /**
   * Retrieve a list of OrgUsers.
   *
   * Retrieves a list of all users within a specified Organization. Use this endpoint
   * to get an overview of all users and their basic details. The list can be
   * paginated for easier management.
   */
  list(
    params?: UserListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<UserResponsesCursor, UserResponse>;
  list(options?: Core.RequestOptions): Core.PagePromise<UserResponsesCursor, UserResponse>;
  list(
    params: UserListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<UserResponsesCursor, UserResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { orgId = this._client.orgId, ...query } = params;
    return this._client.getAPIList(`/organizations/${orgId}/users`, UserResponsesCursor, {
      query,
      ...options,
    });
  }

  /**
   * Retrieve the permissions for the OrgUser with the given UUID.
   *
   * Retrieves a list of all permissions associated with a specific user in an
   * Organization using their UUID. The list can be paginated for easier management.
   */
  getPermissions(
    id: string,
    params?: UserGetPermissionsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PermissionPoliciesAPI.PermissionPolicyResponse>;
  getPermissions(
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PermissionPoliciesAPI.PermissionPolicyResponse>;
  getPermissions(
    id: string,
    params: UserGetPermissionsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PermissionPoliciesAPI.PermissionPolicyResponse> {
    if (isRequestOptions(params)) {
      return this.getPermissions(id, {}, params);
    }
    const { orgId = this._client.orgId, ...query } = params;
    return this._client.get(`/organizations/${orgId}/users/${id}/permissions`, { query, ...options });
  }

  /**
   * Retrieve a list of User Groups for an OrgUser.
   *
   * Retrieves a list of all User Groups that a specific user belongs to within an
   * Organization. The list can be paginated for easier management.
   *
   * **Notes:**
   *
   * - **User Groups as Resource Groups**. A User Group is a Resource Group - one
   *   used to group resources of type `user`. You can use the _Create ResourceGroup_
   *   call detailed in the
   *   [ResourceGroup](https://www.m3ter.com/docs/api#tag/ResourceGroup) section to
   *   create a User Resource Group, and then use the _Add Item_ and _Remove Item_
   *   calls to manage which Users belong to the User Resource Group.
   * - **Using the `inherited` parameter for the Retrieve OrgUser Groups call**.
   *   Resource Groups can be nested, which means a User Resource Group can contain
   *   another User Resource Group as a member. You can use the `inherited` parameter
   *   with this _Retrieve OrgUser Groups_ call as a _QUERY PARAMETER_ to control
   *   which User Resource Groups are returned:
   *
   * * If the user specified belongs to a User Resource Group that is nested as part
   *   of another User Resource Group:
   *   - If `inherited = TRUE`, then any Groups the user belongs to AND any parent
   *     Groups those Groups belong to as nested Groups are returned.
   *   - If `inherited = FALSE`, then only those User Resource Groups to which the
   *     user belongs are returned.
   */
  getUserGroups(
    id: string,
    params?: UserGetUserGroupsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ResourceGroupsAPI.ResourceGroupResponse>;
  getUserGroups(
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ResourceGroupsAPI.ResourceGroupResponse>;
  getUserGroups(
    id: string,
    params: UserGetUserGroupsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ResourceGroupsAPI.ResourceGroupResponse> {
    if (isRequestOptions(params)) {
      return this.getUserGroups(id, {}, params);
    }
    const { orgId = this._client.orgId, ...query } = params;
    return this._client.get(`/organizations/${orgId}/users/${id}/usergroups`, { query, ...options });
  }

  /**
   * Retrieve information about the current user
   */
  me(params?: UserMeParams, options?: Core.RequestOptions): Core.APIPromise<UserMeResponse>;
  me(options?: Core.RequestOptions): Core.APIPromise<UserMeResponse>;
  me(
    params: UserMeParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserMeResponse> {
    if (isRequestOptions(params)) {
      return this.me({}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.get(`/organizations/${orgId}/users/me`, options);
  }

  /**
   * Resend temporary password for user
   */
  resendPassword(
    id: string,
    params?: UserResendPasswordParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  resendPassword(id: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  resendPassword(
    id: string,
    params: UserResendPasswordParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(params)) {
      return this.resendPassword(id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.put(`/organizations/${orgId}/users/${id}/password/resend`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export class UserResponsesCursor extends Cursor<UserResponse> {}

export interface UserResponse {
  /**
   * The unique identifier (UUID) of this user.
   */
  id?: string;

  /**
   * The user's contact telephone number.
   */
  contactNumber?: string;

  /**
   * The user who created this user.
   */
  createdBy?: string;

  /**
   * The date and time _(in ISO-8601 format)_ when the user was created.
   */
  dtCreated?: string;

  /**
   * The date and time _(in ISO 8601 format)_ when the user's access will end. Used
   * to set or update the date and time a user's access expires.
   */
  dtEndAccess?: string;

  /**
   * The date and time _(in ISO-8601 format)_ when the user was last modified.
   */
  dtLastModified?: string;

  /**
   * The email address for this user.
   */
  email?: string;

  /**
   * The date and time _(in ISO 8601 format)_ when this user first accepted the the
   * m3ter terms and conditions.
   */
  firstAcceptedTermsAndConditions?: string;

  /**
   * The first name of the user.
   */
  firstName?: string;

  /**
   * The date and time _(in ISO 8601 format)_ when this user last accepted the the
   * m3ter terms and conditions.
   */
  lastAcceptedTermsAndConditions?: string;

  /**
   * The unique identifier (UUID) of the user who last modified this user record.
   */
  lastModifiedBy?: string;

  /**
   * The surname of the user.
   */
  lastName?: string;

  /**
   * An array listing the Organizations where this user has access.
   */
  organizations?: Array<string>;

  /**
   * An array of permission statements for the user. Each permission statement
   * defines a specific permission for the user.
   */
  permissionPolicy?: Array<PermissionPoliciesAPI.PermissionStatementResponse>;

  /**
   * Indicates whether this is a m3ter Support user.
   */
  supportUser?: boolean;

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

export interface UserMeResponse {
  organization?: UserMeResponse.Organization;

  serviceUser?: UserMeResponse.ServiceUser;

  user?: UserMeResponse.User;
}

export namespace UserMeResponse {
  export interface Organization {
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

    addressLine1?: string;

    addressLine2?: string;

    addressLine3?: string;

    addressLine4?: string;

    billingContactUserId1?: string;

    billingContactUserId2?: string;

    billingContactUserId3?: string;

    country?: string;

    /**
     * The id of the user who created this organization.
     */
    createdBy?: string;

    customerId?: string;

    /**
     * The DateTime when the organization was created.
     */
    dtCreated?: string;

    /**
     * The DateTime when the organization was last modified.
     */
    dtLastModified?: string;

    invoiceGeneralReference?: string;

    /**
     * The id of the user who last modified this organization.
     */
    lastModifiedBy?: string;

    locality?: string;

    organizationName?: string;

    orgId?: string;

    postCode?: string;

    purchaseOrderNumber?: string;

    region?: string;

    shortName?: string;

    status?: 'ACTIVE' | 'ARCHIVED';

    taxId?: string;

    type?: 'PRODUCTION' | 'SANDBOX';
  }

  export interface ServiceUser {
    id?: string;

    /**
     * The id of the user who created this service user.
     */
    createdBy?: string;

    /**
     * The DateTime when the service user was created.
     */
    dtCreated?: string;

    /**
     * The DateTime when the service user was last modified.
     */
    dtLastModified?: string;

    /**
     * The id of the user who last modified this service user.
     */
    lastModifiedBy?: string;

    name?: string;

    version?: number;
  }

  export interface User {
    /**
     * The unique identifier (UUID) of this user.
     */
    id?: string;

    /**
     * The user's contact telephone number.
     */
    contactNumber?: string;

    /**
     * The user who created this user.
     */
    createdBy?: string;

    /**
     * The date and time _(in ISO-8601 format)_ when the user was created.
     */
    dtCreated?: string;

    /**
     * The date and time _(in ISO-8601 format)_ when the user was last modified.
     */
    dtLastModified?: string;

    /**
     * The email address for this user.
     */
    email?: string;

    /**
     * The date and time _(in ISO 8601 format)_ when this user first accepted the the
     * m3ter terms and conditions.
     */
    firstAcceptedTermsAndConditions?: string;

    /**
     * The first name of the user.
     */
    firstName?: string;

    /**
     * The date and time _(in ISO 8601 format)_ when this user last accepted the the
     * m3ter terms and conditions.
     */
    lastAcceptedTermsAndConditions?: string;

    /**
     * The unique identifier (UUID) of the user who last modified this user record.
     */
    lastModifiedBy?: string;

    /**
     * The surname of the user.
     */
    lastName?: string;

    /**
     * An array listing the Organizations where this user has access.
     */
    organizations?: Array<string>;

    /**
     * Indicates whether this is a m3ter Support user.
     */
    supportUser?: boolean;

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
}

export interface UserRetrieveParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface UserUpdateParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param: The date and time _(in ISO 8601 format)_ when the user's access will
   * end. Use this to set or update the expiration of the user's access.
   */
  dtEndAccess?: string;

  /**
   * Body param: An array of permission statements for the user. Each permission
   * statement defines a specific permission for the user.
   *
   * See
   * [Understanding, Creating, and Managing Permission Policies](https://www.m3ter.com/docs/guides/organization-and-access-management/creating-and-managing-permissions)
   * for more information.
   */
  permissionPolicy?: Array<PermissionPoliciesAPI.PermissionStatementResponse>;

  /**
   * Body param: The version number of the entity:
   *
   * - **Newly created entity:** On initial Create, version is set at 1 and listed in
   *   the response.
   * - **Update Entity:** On Update, version is required and must match the existing
   *   version because a check is performed to ensure sequential versioning is
   *   preserved. Version is incremented by 1 and listed in the response.
   */
  version?: number;
}

export interface UserListParams extends CursorParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Query param: list of ids to retrieve
   */
  ids?: Array<string>;
}

export interface UserGetPermissionsParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Query param: The `nextToken` for multi-page retrievals. It is used to fetch the
   * next page of Permission Policies in a paginated list.
   */
  nextToken?: string;

  /**
   * Query param: Specifies the maximum number of Permission Policies to retrieve per
   * page.
   */
  pageSize?: number;
}

export interface UserGetUserGroupsParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Query param: The `nextToken` for multi-page retrievals. It is used to fetch the
   * next page of User Groups in a paginated list.
   */
  nextToken?: string;

  /**
   * Query param: Specifies the maximum number of User Groups to retrieve per page.
   */
  pageSize?: number;
}

export interface UserMeParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface UserResendPasswordParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

Users.UserResponsesCursor = UserResponsesCursor;
Users.Invitations = Invitations;
Users.InvitationResponsesCursor = InvitationResponsesCursor;

export declare namespace Users {
  export {
    type UserResponse as UserResponse,
    type UserMeResponse as UserMeResponse,
    UserResponsesCursor as UserResponsesCursor,
    type UserRetrieveParams as UserRetrieveParams,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserGetPermissionsParams as UserGetPermissionsParams,
    type UserGetUserGroupsParams as UserGetUserGroupsParams,
    type UserMeParams as UserMeParams,
    type UserResendPasswordParams as UserResendPasswordParams,
  };

  export {
    Invitations as Invitations,
    type InvitationResponse as InvitationResponse,
    InvitationResponsesCursor as InvitationResponsesCursor,
    type InvitationCreateParams as InvitationCreateParams,
    type InvitationRetrieveParams as InvitationRetrieveParams,
    type InvitationListParams as InvitationListParams,
  };
}
