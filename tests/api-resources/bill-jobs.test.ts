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

describe('resource billJobs', () => {
  test('create: only required params', async () => {
    const responsePromise = client.billJobs.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.billJobs.create({
      orgId: 'orgId',
      accountIds: ['string'],
      billDate: '2019-12-27',
      billFrequencyInterval: 0,
      billingFrequency: 'DAILY',
      currencyConversions: [{ from: 'EUR', to: 'USD', multiplier: 1.12 }],
      dayEpoch: '2019-12-27',
      dueDate: '2019-12-27',
      externalInvoiceDate: '2019-12-27',
      lastDateInBillingPeriod: '2019-12-27',
      monthEpoch: '2019-12-27',
      targetCurrency: 'xxx',
      timezone: 'UTC',
      version: 0,
      weekEpoch: '2019-12-27',
      yearEpoch: '2019-12-27',
    });
  });

  test('create: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.billJobs.create({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      M3ter.NotFoundError,
    );
  });

  test('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.billJobs.create(
        {
          orgId: 'orgId',
          accountIds: ['string'],
          billDate: '2019-12-27',
          billFrequencyInterval: 0,
          billingFrequency: 'DAILY',
          currencyConversions: [{ from: 'EUR', to: 'USD', multiplier: 1.12 }],
          dayEpoch: '2019-12-27',
          dueDate: '2019-12-27',
          externalInvoiceDate: '2019-12-27',
          lastDateInBillingPeriod: '2019-12-27',
          monthEpoch: '2019-12-27',
          targetCurrency: 'xxx',
          timezone: 'UTC',
          version: 0,
          weekEpoch: '2019-12-27',
          yearEpoch: '2019-12-27',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.billJobs.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.billJobs.retrieve('id', { orgId: 'orgId' });
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.billJobs.retrieve('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      M3ter.NotFoundError,
    );
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.billJobs.retrieve('id', { orgId: 'orgId' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('list: only required params', async () => {
    const responsePromise = client.billJobs.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.billJobs.list({
      orgId: 'orgId',
      active: 'active',
      nextToken: 'nextToken',
      pageSize: 1,
      status: 'status',
    });
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.billJobs.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      M3ter.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.billJobs.list(
        { orgId: 'orgId', active: 'active', nextToken: 'nextToken', pageSize: 1, status: 'status' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('cancel: only required params', async () => {
    const responsePromise = client.billJobs.cancel('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('cancel: required and optional params', async () => {
    const response = await client.billJobs.cancel('id', { orgId: 'orgId' });
  });

  test('cancel: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.billJobs.cancel('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      M3ter.NotFoundError,
    );
  });

  test('cancel: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.billJobs.cancel('id', { orgId: 'orgId' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('recalculate: only required params', async () => {
    const responsePromise = client.billJobs.recalculate({ billIds: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('recalculate: required and optional params', async () => {
    const response = await client.billJobs.recalculate({ orgId: 'orgId', billIds: ['string'], version: 0 });
  });
});
