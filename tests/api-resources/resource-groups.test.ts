// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import M3ter from 'm3ter-sdk';

const client = new M3ter({
  apiKey: 'My API Key',
  apiSecret: 'My API Secret',
  token: 'My Token',
  orgID: 'My Org ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource resourceGroups', () => {
  test('create: only required params', async () => {
    const responsePromise = client.resourceGroups.create('type', { name: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.resourceGroups.create('type', { orgId: 'orgId', name: 'x', version: 0 });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.resourceGroups.retrieve('id', { type: 'type' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.resourceGroups.retrieve('id', { orgId: 'orgId', type: 'type' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.resourceGroups.update('id', { type: 'type', name: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.resourceGroups.update('id', {
      orgId: 'orgId',
      type: 'type',
      name: 'x',
      version: 0,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.resourceGroups.list('type');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.resourceGroups.list('type', {
      orgId: 'orgId',
      nextToken: 'nextToken',
      pageSize: 1,
    });
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.resourceGroups.list(
        'type',
        { orgId: 'orgId', nextToken: 'nextToken', pageSize: 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('delete: only required params', async () => {
    const responsePromise = client.resourceGroups.delete('id', { type: 'type' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.resourceGroups.delete('id', { orgId: 'orgId', type: 'type' });
  });

  test('addResource: only required params', async () => {
    const responsePromise = client.resourceGroups.addResource('resourceGroupId', {
      type: 'type',
      targetId: '06f6b50c-a868-4ca6-XXXX-448e507d5248',
      targetType: 'ITEM',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('addResource: required and optional params', async () => {
    const response = await client.resourceGroups.addResource('resourceGroupId', {
      orgId: 'orgId',
      type: 'type',
      targetId: '06f6b50c-a868-4ca6-XXXX-448e507d5248',
      targetType: 'ITEM',
      version: 0,
    });
  });

  test('listContents: only required params', async () => {
    const responsePromise = client.resourceGroups.listContents('resourceGroupId', { type: 'type' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listContents: required and optional params', async () => {
    const response = await client.resourceGroups.listContents('resourceGroupId', {
      orgId: 'orgId',
      type: 'type',
      nextToken: 'nextToken',
      pageSize: 1,
    });
  });

  test('listPermissions: only required params', async () => {
    const responsePromise = client.resourceGroups.listPermissions('resourceGroupId', { type: 'type' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listPermissions: required and optional params', async () => {
    const response = await client.resourceGroups.listPermissions('resourceGroupId', {
      orgId: 'orgId',
      type: 'type',
      nextToken: 'nextToken',
      pageSize: 1,
    });
  });

  test('removeResource: only required params', async () => {
    const responsePromise = client.resourceGroups.removeResource('resourceGroupId', {
      type: 'type',
      targetId: '06f6b50c-a868-4ca6-XXXX-448e507d5248',
      targetType: 'ITEM',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('removeResource: required and optional params', async () => {
    const response = await client.resourceGroups.removeResource('resourceGroupId', {
      orgId: 'orgId',
      type: 'type',
      targetId: '06f6b50c-a868-4ca6-XXXX-448e507d5248',
      targetType: 'ITEM',
      version: 0,
    });
  });
});
