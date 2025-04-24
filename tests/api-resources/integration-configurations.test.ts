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

describe('resource integrationConfigurations', () => {
  test('create: only required params', async () => {
    const responsePromise = client.integrationConfigurations.create({
      configData: { foo: 'bar' },
      credentials: { type: 'HTTP_BASIC' },
      destination: 'destination',
      destinationId: 'destinationId',
      entityId: 'entityId',
      entityType: 'entityType',
      integrationCredentialsId: 'integrationCredentialsId',
      name: 'name',
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
    const response = await client.integrationConfigurations.create({
      orgId: 'orgId',
      configData: { foo: 'bar' },
      credentials: { type: 'HTTP_BASIC', destination: 'WEBHOOK', empty: true, name: 'name', version: 0 },
      destination: 'destination',
      destinationId: 'destinationId',
      entityId: 'entityId',
      entityType: 'entityType',
      integrationCredentialsId: 'integrationCredentialsId',
      name: 'name',
      version: 0,
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.integrationConfigurations.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.integrationConfigurations.retrieve('id', { orgId: 'orgId' });
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.integrationConfigurations.retrieve('id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.integrationConfigurations.retrieve(
        'id',
        { orgId: 'orgId' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.integrationConfigurations.update('id', {
      configData: { foo: 'bar' },
      credentials: { type: 'HTTP_BASIC' },
      destination: 'destination',
      destinationId: 'destinationId',
      entityId: 'entityId',
      entityType: 'entityType',
      integrationCredentialsId: 'integrationCredentialsId',
      name: 'name',
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
    const response = await client.integrationConfigurations.update('id', {
      orgId: 'orgId',
      configData: { foo: 'bar' },
      credentials: { type: 'HTTP_BASIC', destination: 'WEBHOOK', empty: true, name: 'name', version: 0 },
      destination: 'destination',
      destinationId: 'destinationId',
      entityId: 'entityId',
      entityType: 'entityType',
      integrationCredentialsId: 'integrationCredentialsId',
      name: 'name',
      version: 0,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.integrationConfigurations.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.integrationConfigurations.list({
      orgId: 'orgId',
      nextToken: 'nextToken',
      pageSize: 1,
    });
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.integrationConfigurations.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      M3ter.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.integrationConfigurations.list(
        { orgId: 'orgId', nextToken: 'nextToken', pageSize: 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('delete: only required params', async () => {
    const responsePromise = client.integrationConfigurations.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.integrationConfigurations.delete('id', { orgId: 'orgId' });
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.integrationConfigurations.delete('id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.integrationConfigurations.delete('id', { orgId: 'orgId' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('enable: only required params', async () => {
    const responsePromise = client.integrationConfigurations.enable('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('enable: required and optional params', async () => {
    const response = await client.integrationConfigurations.enable('id', { orgId: 'orgId' });
  });

  test('enable: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.integrationConfigurations.enable('id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('enable: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.integrationConfigurations.enable('id', { orgId: 'orgId' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('getByEntity: only required params', async () => {
    const responsePromise = client.integrationConfigurations.getByEntity('entityType');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getByEntity: required and optional params', async () => {
    const response = await client.integrationConfigurations.getByEntity('entityType', {
      orgId: 'orgId',
      destination: 'destination',
      destinationId: 'destinationId',
      entityId: 'entityId',
    });
  });

  test('getByEntity: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.integrationConfigurations.getByEntity('entityType', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('getByEntity: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.integrationConfigurations.getByEntity(
        'entityType',
        { orgId: 'orgId', destination: 'destination', destinationId: 'destinationId', entityId: 'entityId' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(M3ter.NotFoundError);
  });
});
