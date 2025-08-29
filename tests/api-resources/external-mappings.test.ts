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

describe('resource externalMappings', () => {
  test('create: only required params', async () => {
    const responsePromise = client.externalMappings.create({
      externalId: 'cus_00000000000000',
      externalSystem: 'Stripe',
      externalTable: 'Customer',
      m3terEntity: 'Account',
      m3terId: '00000000-0000-0000-0000-000000000000',
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
    const response = await client.externalMappings.create({
      orgId: 'orgId',
      externalId: 'cus_00000000000000',
      externalSystem: 'Stripe',
      externalTable: 'Customer',
      m3terEntity: 'Account',
      m3terId: '00000000-0000-0000-0000-000000000000',
      integrationConfigId: '00000000-0000-0000-0000-000000000000',
      version: 0,
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.externalMappings.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.externalMappings.retrieve('id', { orgId: 'orgId' });
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.externalMappings.retrieve('id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.externalMappings.retrieve('id', { orgId: 'orgId' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.externalMappings.update('id', {
      externalId: 'cus_00000000000000',
      externalSystem: 'Stripe',
      externalTable: 'Customer',
      m3terEntity: 'Account',
      m3terId: '00000000-0000-0000-0000-000000000000',
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
    const response = await client.externalMappings.update('id', {
      orgId: 'orgId',
      externalId: 'cus_00000000000000',
      externalSystem: 'Stripe',
      externalTable: 'Customer',
      m3terEntity: 'Account',
      m3terId: '00000000-0000-0000-0000-000000000000',
      integrationConfigId: '00000000-0000-0000-0000-000000000000',
      version: 0,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.externalMappings.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.externalMappings.list({
      orgId: 'orgId',
      externalSystemId: 'externalSystemId',
      integrationConfigId: 'integrationConfigId',
      m3terIds: ['string'],
      nextToken: 'nextToken',
      pageSize: 1,
    });
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.externalMappings.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      M3ter.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.externalMappings.list(
        {
          orgId: 'orgId',
          externalSystemId: 'externalSystemId',
          integrationConfigId: 'integrationConfigId',
          m3terIds: ['string'],
          nextToken: 'nextToken',
          pageSize: 1,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('delete: only required params', async () => {
    const responsePromise = client.externalMappings.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.externalMappings.delete('id', { orgId: 'orgId' });
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.externalMappings.delete('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      M3ter.NotFoundError,
    );
  });

  test('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.externalMappings.delete('id', { orgId: 'orgId' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('listByExternalEntity: only required params', async () => {
    const responsePromise = client.externalMappings.listByExternalEntity(
      'system',
      'externalTable',
      'externalId',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listByExternalEntity: required and optional params', async () => {
    const response = await client.externalMappings.listByExternalEntity(
      'system',
      'externalTable',
      'externalId',
      { orgId: 'orgId', nextToken: 'nextToken', pageSize: 1 },
    );
  });

  test('listByExternalEntity: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.externalMappings.listByExternalEntity('system', 'externalTable', 'externalId', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('listByExternalEntity: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.externalMappings.listByExternalEntity(
        'system',
        'externalTable',
        'externalId',
        { orgId: 'orgId', nextToken: 'nextToken', pageSize: 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('listByM3terEntity: only required params', async () => {
    const responsePromise = client.externalMappings.listByM3terEntity('entity', 'm3terId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listByM3terEntity: required and optional params', async () => {
    const response = await client.externalMappings.listByM3terEntity('entity', 'm3terId', {
      orgId: 'orgId',
      nextToken: 'nextToken',
      pageSize: 1,
    });
  });

  test('listByM3terEntity: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.externalMappings.listByM3terEntity('entity', 'm3terId', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('listByM3terEntity: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.externalMappings.listByM3terEntity(
        'entity',
        'm3terId',
        { orgId: 'orgId', nextToken: 'nextToken', pageSize: 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(M3ter.NotFoundError);
  });
});
