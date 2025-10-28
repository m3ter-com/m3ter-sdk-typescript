// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Authentication extends APIResource {
  /**
   * Get authentication token
   *
   * @example
   * ```ts
   * const response = await client.authentication.getBearerToken(
   *   { grant_type: 'client_credentials' },
   * );
   * ```
   */
  getBearerToken(
    body: AuthenticationGetBearerTokenParams,
    options?: RequestOptions,
  ): APIPromise<AuthenticationGetBearerTokenResponse> {
    return this._client.post('/oauth/token', { body, ...options });
  }
}

export interface AuthenticationGetBearerTokenResponse {
  /**
   * The access token.
   */
  access_token: string;

  /**
   * Token expiry time in seconds.
   */
  expires_in: number;

  /**
   * Not used.
   */
  scope?: string;

  /**
   * The token type, which in this case is "bearer".
   */
  token_type?: string;
}

export interface AuthenticationGetBearerTokenParams {
  /**
   * The grant type.
   */
  grant_type: 'client_credentials';

  /**
   * Not used. The JWT scope.
   */
  scope?: string;
}

export declare namespace Authentication {
  export {
    type AuthenticationGetBearerTokenResponse as AuthenticationGetBearerTokenResponse,
    type AuthenticationGetBearerTokenParams as AuthenticationGetBearerTokenParams,
  };
}
