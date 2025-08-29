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

describe('resource notificationConfigurations', () => {
  test('create: only required params', async () => {
    const responsePromise = client.notificationConfigurations.create({
      code: 'commitment_under_10_percent',
      description: 'Commitment amount fell below 10%',
      eventName: 'configuration.commitment.updated',
      name: 'Commitment has under 10% remaining',
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
    const response = await client.notificationConfigurations.create({
      orgId: 'orgId',
      code: 'commitment_under_10_percent',
      description: 'Commitment amount fell below 10%',
      eventName: 'configuration.commitment.updated',
      name: 'Commitment has under 10% remaining',
      active: true,
      alwaysFireEvent: false,
      calculation:
        '(new.amountSpent >= ((new.amount*90)/100)) \nAND ((old.amountSpent <= ((old.amount*90)/100)) OR (old.amountSpent == null))',
      version: 0,
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.notificationConfigurations.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.notificationConfigurations.retrieve('id', { orgId: 'orgId' });
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.notificationConfigurations.retrieve('id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.notificationConfigurations.retrieve(
        'id',
        { orgId: 'orgId' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.notificationConfigurations.update('id', {
      code: 'commitment_under_10_percent',
      description: 'Commitment amount fell below 10%',
      eventName: 'configuration.commitment.updated',
      name: 'Commitment has under 10% remaining',
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
    const response = await client.notificationConfigurations.update('id', {
      orgId: 'orgId',
      code: 'commitment_under_10_percent',
      description: 'Commitment amount fell below 10%',
      eventName: 'configuration.commitment.updated',
      name: 'Commitment has under 10% remaining',
      active: true,
      alwaysFireEvent: false,
      calculation:
        '(new.amountSpent >= ((new.amount*90)/100)) \nAND ((old.amountSpent <= ((old.amount*90)/100)) OR (old.amountSpent == null))',
      version: 0,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.notificationConfigurations.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.notificationConfigurations.list({
      orgId: 'orgId',
      active: true,
      eventName: 'eventName',
      ids: ['string'],
      nextToken: 'nextToken',
      pageSize: 1,
    });
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.notificationConfigurations.list({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.notificationConfigurations.list(
        {
          orgId: 'orgId',
          active: true,
          eventName: 'eventName',
          ids: ['string'],
          nextToken: 'nextToken',
          pageSize: 1,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('delete: only required params', async () => {
    const responsePromise = client.notificationConfigurations.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.notificationConfigurations.delete('id', { orgId: 'orgId' });
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.notificationConfigurations.delete('id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.notificationConfigurations.delete(
        'id',
        { orgId: 'orgId' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(M3ter.NotFoundError);
  });
});
