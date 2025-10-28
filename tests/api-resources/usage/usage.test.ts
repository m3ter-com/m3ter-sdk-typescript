// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import M3ter from 'm3ter-sdk';

const client = new M3ter({
  apiKey: 'My API Key',
  apiSecret: 'My API Secret',
  token: 'My Token',
  orgID: 'My Org ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource usage', () => {
  test('getFailedIngestDownloadURL: only required params', async () => {
    const responsePromise = client.usage.getFailedIngestDownloadURL();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getFailedIngestDownloadURL: required and optional params', async () => {
    const response = await client.usage.getFailedIngestDownloadURL({ orgId: 'orgId', file: 'file' });
  });

  test('getFailedIngestDownloadURL: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.usage.getFailedIngestDownloadURL(
        { orgId: 'orgId', file: 'file' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('query: only required params', async () => {
    const responsePromise = client.usage.query();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('query: required and optional params', async () => {
    const response = await client.usage.query({
      orgId: 'orgId',
      accountIds: ['string'],
      aggregations: [{ fieldCode: 'x', fieldType: 'DIMENSION', function: 'SUM', meterId: 'x' }],
      dimensionFilters: [{ fieldCode: 'x', meterId: 'x', values: ['string'] }],
      endDate: '2019-12-27T18:11:19.117Z',
      groups: [{ groupType: 'ACCOUNT' }],
      limit: 1,
      meterIds: ['string'],
      startDate: '2019-12-27T18:11:19.117Z',
    });
  });

  test('query: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.usage.query(
        {
          orgId: 'orgId',
          accountIds: ['string'],
          aggregations: [{ fieldCode: 'x', fieldType: 'DIMENSION', function: 'SUM', meterId: 'x' }],
          dimensionFilters: [{ fieldCode: 'x', meterId: 'x', values: ['string'] }],
          endDate: '2019-12-27T18:11:19.117Z',
          groups: [{ groupType: 'ACCOUNT' }],
          limit: 1,
          meterIds: ['string'],
          startDate: '2019-12-27T18:11:19.117Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('submit: only required params', async () => {
    const responsePromise = client.usage.submit({
      measurements: [{ account: 'Acme Corp', meter: 'string', ts: '2022-08-24T14:15:22Z' }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('submit: required and optional params', async () => {
    const response = await client.usage.submit({
      orgId: 'orgId',
      measurements: [
        {
          account: 'Acme Corp',
          meter: 'string',
          ts: '2022-08-24T14:15:22Z',
          cost: { property1: 0, property2: 0 },
          ets: '2022-08-24T15:15:22Z',
          income: { property1: 0, property2: 0 },
          measure: { property1: 0, property2: 0 },
          metadata: { property1: 'string', property2: 'string' },
          other: { property1: 'string', property2: 'string' },
          uid: 'string',
          what: { property1: 'string', property2: 'string' },
          where: { property1: 'string', property2: 'string' },
          who: { property1: 'string', property2: 'string' },
        },
      ],
    });
  });
});
