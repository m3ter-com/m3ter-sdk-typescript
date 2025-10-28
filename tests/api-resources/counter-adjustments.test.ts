// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import M3ter from 'm3ter-sdk';

const client = new M3ter({
  apiKey: 'My API Key',
  apiSecret: 'My API Secret',
  token: 'My Token',
  orgID: 'My Org ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource counterAdjustments', () => {
  test('create: only required params', async () => {
    const responsePromise = client.counterAdjustments.create({
      accountId: 'x',
      counterId: 'x',
      date: '2022-01-04',
      value: 0,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.counterAdjustments.create({
      orgId: 'orgId',
      accountId: 'x',
      counterId: 'x',
      date: '2022-01-04',
      value: 0,
      purchaseOrderNumber: 'purchaseOrderNumber',
      version: 0,
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.counterAdjustments.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.counterAdjustments.retrieve('id', { orgId: 'orgId' });
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.counterAdjustments.retrieve('id', { orgId: 'orgId' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.counterAdjustments.update('id', {
      accountId: 'x',
      counterId: 'x',
      date: '2022-01-04',
      value: 0,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.counterAdjustments.update('id', {
      orgId: 'orgId',
      accountId: 'x',
      counterId: 'x',
      date: '2022-01-04',
      value: 0,
      purchaseOrderNumber: 'purchaseOrderNumber',
      version: 0,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.counterAdjustments.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.counterAdjustments.list({
      orgId: 'orgId',
      accountId: 'accountId',
      counterId: 'counterId',
      date: 'date',
      dateEnd: 'dateEnd',
      dateStart: 'dateStart',
      endDateEnd: 'endDateEnd',
      endDateStart: 'endDateStart',
      nextToken: 'nextToken',
      pageSize: 1,
      sortOrder: 'sortOrder',
    });
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.counterAdjustments.list(
        {
          orgId: 'orgId',
          accountId: 'accountId',
          counterId: 'counterId',
          date: 'date',
          dateEnd: 'dateEnd',
          dateStart: 'dateStart',
          endDateEnd: 'endDateEnd',
          endDateStart: 'endDateStart',
          nextToken: 'nextToken',
          pageSize: 1,
          sortOrder: 'sortOrder',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('delete: only required params', async () => {
    const responsePromise = client.counterAdjustments.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.counterAdjustments.delete('id', { orgId: 'orgId' });
  });

  test('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.counterAdjustments.delete('id', { orgId: 'orgId' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(M3ter.NotFoundError);
  });
});
