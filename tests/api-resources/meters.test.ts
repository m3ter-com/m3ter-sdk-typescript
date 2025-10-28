// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import M3ter from 'm3ter-sdk';

const client = new M3ter({
  apiKey: 'My API Key',
  apiSecret: 'My API Secret',
  token: 'My Token',
  orgID: 'My Org ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource meters', () => {
  test('create: only required params', async () => {
    const responsePromise = client.meters.create({
      code: 'S?oC"$]C] ]]]]]5]',
      dataFields: [{ category: 'WHO', code: '{1{}}_', name: 'x' }],
      derivedFields: [{ category: 'WHO', code: '{1{}}_', name: 'x', calculation: 'x' }],
      name: 'x',
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
    const response = await client.meters.create({
      orgId: 'orgId',
      code: 'S?oC"$]C] ]]]]]5]',
      dataFields: [{ category: 'WHO', code: '{1{}}_', name: 'x', unit: 'x' }],
      derivedFields: [{ category: 'WHO', code: '{1{}}_', name: 'x', unit: 'x', calculation: 'x' }],
      name: 'x',
      customFields: { foo: 'string' },
      groupId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      productId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      version: 0,
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.meters.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.meters.retrieve('id', { orgId: 'orgId' });
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.meters.retrieve('id', { orgId: 'orgId' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.meters.update('id', {
      code: 'S?oC"$]C] ]]]]]5]',
      dataFields: [{ category: 'WHO', code: '{1{}}_', name: 'x' }],
      derivedFields: [{ category: 'WHO', code: '{1{}}_', name: 'x', calculation: 'x' }],
      name: 'x',
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
    const response = await client.meters.update('id', {
      orgId: 'orgId',
      code: 'S?oC"$]C] ]]]]]5]',
      dataFields: [{ category: 'WHO', code: '{1{}}_', name: 'x', unit: 'x' }],
      derivedFields: [{ category: 'WHO', code: '{1{}}_', name: 'x', unit: 'x', calculation: 'x' }],
      name: 'x',
      customFields: { foo: 'string' },
      groupId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      productId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      version: 0,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.meters.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.meters.list({
      orgId: 'orgId',
      codes: ['string'],
      ids: ['string'],
      nextToken: 'nextToken',
      pageSize: 1,
      productId: ['string'],
    });
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.meters.list(
        {
          orgId: 'orgId',
          codes: ['string'],
          ids: ['string'],
          nextToken: 'nextToken',
          pageSize: 1,
          productId: ['string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('delete: only required params', async () => {
    const responsePromise = client.meters.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.meters.delete('id', { orgId: 'orgId' });
  });

  test('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.meters.delete('id', { orgId: 'orgId' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(M3ter.NotFoundError);
  });
});
