// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { Cursor, type CursorParams } from '../../pagination';

export class Invitations extends APIResource {
  /**
   * Invite a new user to your Organization.
   *
   * This sends an email to someone inviting them to join your m3ter Organization.
   */
  create(params: InvitationCreateParams, options?: Core.RequestOptions): Core.APIPromise<InvitationResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.post(`/organizations/${orgId}/invitations`, { body, ...options });
  }

  /**
   * Retrieve the specified invitation with the given UUID.
   */
  retrieve(
    id: string,
    params?: InvitationRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InvitationResponse>;
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<InvitationResponse>;
  retrieve(
    id: string,
    params: InvitationRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<InvitationResponse> {
    if (isRequestOptions(params)) {
      return this.retrieve(id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.get(`/organizations/${orgId}/invitations/${id}`, options);
  }

  /**
   * Retrieve a list of all invitations in the Organization.
   */
  list(
    params?: InvitationListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<InvitationResponsesCursor, InvitationResponse>;
  list(options?: Core.RequestOptions): Core.PagePromise<InvitationResponsesCursor, InvitationResponse>;
  list(
    params: InvitationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<InvitationResponsesCursor, InvitationResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { orgId = this._client.orgId, ...query } = params;
    return this._client.getAPIList(`/organizations/${orgId}/invitations`, InvitationResponsesCursor, {
      query,
      ...options,
    });
  }
}

export class InvitationResponsesCursor extends Cursor<InvitationResponse> {}

export interface InvitationResponse {
  /**
   * The UUID of the invitation.
   */
  id: string;

  /**
   * Boolean indicating whether the user has accepted the invitation.
   *
   * - TRUE - the invite has been accepted.
   * - FALSE - the invite has not yet been accepted.
   */
  accepted: boolean;

  /**
   * The date that access will end for the user _(in ISO-8601 format)_. If this is
   * blank, there is no end date meaning that the user has permanent access.
   */
  dtEndAccess: string;

  /**
   * The date when the invite expires _(in ISO-8601 format)_. After this date the
   * invited user can no longer accept the invite. By default, any invite is valid
   * for 30 days from the date the invite is sent.
   */
  dtExpiry: string;

  /**
   * The email address of the invitee. The invitation will be sent to this email
   * address.
   */
  email: string;

  /**
   * The first name of the invitee.
   */
  firstName: string;

  /**
   * The UUID of the user who sent the invite.
   */
  invitingPrincipalId: string;

  /**
   * The surname of the invitee.
   */
  lastName: string;

  /**
   * The IDs of the permission policies the invited user has been assigned. This
   * controls the access rights and privileges that this user will have when working
   * in the m3ter Organization.
   */
  permissionPolicyIds: Array<string>;

  /**
   * The version number. Default value when newly created is one.
   */
  version: number;

  /**
   * The UUID of the user who created the invitation.
   */
  createdBy?: string;

  /**
   * The DateTime when the invitation was created _(in ISO-8601 format)_.
   */
  dtCreated?: string;

  /**
   * The DateTime when the invitation was last modified _(in ISO-8601 format)_.
   */
  dtLastModified?: string;

  /**
   * The UUID of the user who last modified the invitation.
   */
  lastModifiedBy?: string;
}

export interface InvitationCreateParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;

  /**
   * Body param:
   */
  email: string;

  /**
   * Body param:
   */
  firstName: string;

  /**
   * Body param:
   */
  lastName: string;

  /**
   * Body param:
   */
  contactNumber?: string;

  /**
   * Body param: The date when access will end for the user _(in ISO-8601 format)_.
   * Leave blank for no end date, which gives the user permanent access.
   */
  dtEndAccess?: string;

  /**
   * Body param: The date when the invite expires _(in ISO-8601 format)_. After this
   * date the invited user can no longer accept the invite. By default, any invite is
   * valid for 30 days from the date the invite is sent.
   */
  dtExpiry?: string;

  /**
   * Body param:
   */
  m3terUser?: boolean;

  /**
   * Body param: The IDs of the permission policies the invited user has been
   * assigned. This controls the access rights and privileges that this user will
   * have when working in the m3ter Organization.
   */
  permissionPolicyIds?: Array<string>;

  /**
   * Body param:
   */
  version?: number;
}

export interface InvitationRetrieveParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

export interface InvitationListParams extends CursorParams {
  /**
   * @deprecated the org id should be set at the client level instead
   */
  orgId?: string;
}

Invitations.InvitationResponsesCursor = InvitationResponsesCursor;

export declare namespace Invitations {
  export {
    type InvitationResponse as InvitationResponse,
    InvitationResponsesCursor as InvitationResponsesCursor,
    type InvitationCreateParams as InvitationCreateParams,
    type InvitationRetrieveParams as InvitationRetrieveParams,
    type InvitationListParams as InvitationListParams,
  };
}
