// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import M3ter from 'm3ter-sdk';
import { Response } from 'node-fetch';

const client = new M3ter({
  apiKey: 'My API Key',
  apiSecret: 'My API Secret',
  token: 'My Token',
  orgId: 'My Org ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource fileUploads', () => {
  test('generateUploadURL: only required params', async () => {
    const responsePromise = client.usage.fileUploads.generateUploadURL({
      contentLength: 1,
      contentType: 'application/json',
      fileName: 'x',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('generateUploadURL: required and optional params', async () => {
    const response = await client.usage.fileUploads.generateUploadURL({
      orgId: 'orgId',
      contentLength: 1,
      contentType: 'application/json',
      fileName: 'x',
    });
  });
});
