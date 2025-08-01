// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { M3ter } from './index';

export abstract class APIResource {
  protected _client: M3ter;

  constructor(client: M3ter) {
    this._client = client;
  }
}
