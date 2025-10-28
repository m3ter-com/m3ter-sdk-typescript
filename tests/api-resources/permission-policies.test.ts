// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import M3ter from 'm3ter-sdk';

const client = new M3ter({
  apiKey: 'My API Key',
  apiSecret: 'My API Secret',
  token: 'My Token',
  orgID: 'My Org ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource permissionPolicies', () => {
  test('create: only required params', async () => {
    const responsePromise = client.permissionPolicies.create({
      name: 'x',
      permissionPolicy: [{ action: ['ALL'], effect: 'ALLOW', resource: ['string'] }],
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
    const response = await client.permissionPolicies.create({
      orgId: 'orgId',
      name: 'x',
      permissionPolicy: [{ action: ['ALL'], effect: 'ALLOW', resource: ['string'] }],
      version: 0,
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.permissionPolicies.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.permissionPolicies.retrieve('id', { orgId: 'orgId' });
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.permissionPolicies.retrieve('id', { orgId: 'orgId' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.permissionPolicies.update('id', {
      name: 'x',
      permissionPolicy: [{ action: ['ALL'], effect: 'ALLOW', resource: ['string'] }],
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
    const response = await client.permissionPolicies.update('id', {
      orgId: 'orgId',
      name: 'x',
      permissionPolicy: [{ action: ['ALL'], effect: 'ALLOW', resource: ['string'] }],
      version: 0,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.permissionPolicies.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.permissionPolicies.list({
      orgId: 'orgId',
      nextToken: 'nextToken',
      pageSize: 1,
    });
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.permissionPolicies.list(
        { orgId: 'orgId', nextToken: 'nextToken', pageSize: 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('delete: only required params', async () => {
    const responsePromise = client.permissionPolicies.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.permissionPolicies.delete('id', { orgId: 'orgId' });
  });

  test('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.permissionPolicies.delete('id', { orgId: 'orgId' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('addToServiceUser: only required params', async () => {
    const responsePromise = client.permissionPolicies.addToServiceUser('permissionPolicyId', {
      principalId: 'x',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('addToServiceUser: required and optional params', async () => {
    const response = await client.permissionPolicies.addToServiceUser('permissionPolicyId', {
      orgId: 'orgId',
      principalId: 'x',
      version: 0,
    });
  });

  test('addToSupportUser: only required params', async () => {
    const responsePromise = client.permissionPolicies.addToSupportUser('permissionPolicyId', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('addToSupportUser: required and optional params', async () => {
    const response = await client.permissionPolicies.addToSupportUser('permissionPolicyId', {
      orgId: 'orgId',
      version: 0,
    });
  });

  test('addToUser: only required params', async () => {
    const responsePromise = client.permissionPolicies.addToUser('permissionPolicyId', { principalId: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('addToUser: required and optional params', async () => {
    const response = await client.permissionPolicies.addToUser('permissionPolicyId', {
      orgId: 'orgId',
      principalId: 'x',
      version: 0,
    });
  });

  test('addToUserGroup: only required params', async () => {
    const responsePromise = client.permissionPolicies.addToUserGroup('permissionPolicyId', {
      principalId: 'x',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('addToUserGroup: required and optional params', async () => {
    const response = await client.permissionPolicies.addToUserGroup('permissionPolicyId', {
      orgId: 'orgId',
      principalId: 'x',
      version: 0,
    });
  });

  test('removeFromServiceUser: only required params', async () => {
    const responsePromise = client.permissionPolicies.removeFromServiceUser('permissionPolicyId', {
      principalId: 'x',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('removeFromServiceUser: required and optional params', async () => {
    const response = await client.permissionPolicies.removeFromServiceUser('permissionPolicyId', {
      orgId: 'orgId',
      principalId: 'x',
      version: 0,
    });
  });

  test('removeFromSupportUser: only required params', async () => {
    const responsePromise = client.permissionPolicies.removeFromSupportUser('permissionPolicyId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('removeFromSupportUser: required and optional params', async () => {
    const response = await client.permissionPolicies.removeFromSupportUser('permissionPolicyId', {
      orgId: 'orgId',
    });
  });

  test('removeFromSupportUser: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.permissionPolicies.removeFromSupportUser(
        'permissionPolicyId',
        { orgId: 'orgId' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('removeFromUser: only required params', async () => {
    const responsePromise = client.permissionPolicies.removeFromUser('permissionPolicyId', {
      principalId: 'x',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('removeFromUser: required and optional params', async () => {
    const response = await client.permissionPolicies.removeFromUser('permissionPolicyId', {
      orgId: 'orgId',
      principalId: 'x',
      version: 0,
    });
  });

  test('removeFromUserGroup: only required params', async () => {
    const responsePromise = client.permissionPolicies.removeFromUserGroup('permissionPolicyId', {
      principalId: 'x',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('removeFromUserGroup: required and optional params', async () => {
    const response = await client.permissionPolicies.removeFromUserGroup('permissionPolicyId', {
      orgId: 'orgId',
      principalId: 'x',
      version: 0,
    });
  });
});
