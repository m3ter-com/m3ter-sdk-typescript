// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import M3ter from 'm3ter-sdk';

const client = new M3ter({
  apiKey: 'My API Key',
  apiSecret: 'My API Secret',
  token: 'My Token',
  orgID: 'My Org ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource dataExports', () => {
  test('createAdhoc: only required params', async () => {
    const responsePromise = client.dataExports.createAdhoc({
      operationalDataTypes: ['BILLS'],
      sourceType: 'OPERATIONAL',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createAdhoc: required and optional params', async () => {
    const response = await client.dataExports.createAdhoc({
      orgId: 'orgId',
      operationalDataTypes: ['BILLS'],
      sourceType: 'OPERATIONAL',
      version: 0,
    });
  });
});
