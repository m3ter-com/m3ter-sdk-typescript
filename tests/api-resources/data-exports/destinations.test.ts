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

describe('resource destinations', () => {
  test('create: only required params', async () => {
    const responsePromise = client.dataExports.destinations.create({
      bucketName: 'xxx',
      iamRoleArn: 'arn:aws:iam::321669910225:role/z',
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
    const response = await client.dataExports.destinations.create({
      orgId: 'orgId',
      bucketName: 'xxx',
      iamRoleArn: 'arn:aws:iam::321669910225:role/z',
      partitionOrder: 'TYPE_FIRST',
      prefix: 'prefix',
      version: 0,
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.dataExports.destinations.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.dataExports.destinations.retrieve('id', { orgId: 'orgId' });
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.dataExports.destinations.retrieve('id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.dataExports.destinations.retrieve(
        'id',
        { orgId: 'orgId' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.dataExports.destinations.update('id', {
      bucketName: 'xxx',
      iamRoleArn: 'arn:aws:iam::321669910225:role/z',
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
    const response = await client.dataExports.destinations.update('id', {
      orgId: 'orgId',
      bucketName: 'xxx',
      iamRoleArn: 'arn:aws:iam::321669910225:role/z',
      partitionOrder: 'TYPE_FIRST',
      prefix: 'prefix',
      version: 0,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.dataExports.destinations.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.dataExports.destinations.list({
      orgId: 'orgId',
      ids: ['string'],
      nextToken: 'nextToken',
      pageSize: 1,
    });
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.dataExports.destinations.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      M3ter.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.dataExports.destinations.list(
        { orgId: 'orgId', ids: ['string'], nextToken: 'nextToken', pageSize: 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('delete: only required params', async () => {
    const responsePromise = client.dataExports.destinations.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.dataExports.destinations.delete('id', { orgId: 'orgId' });
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.dataExports.destinations.delete('id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.dataExports.destinations.delete('id', { orgId: 'orgId' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(M3ter.NotFoundError);
  });
});
