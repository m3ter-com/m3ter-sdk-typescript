// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import M3ter from 'm3ter-sdk';

const client = new M3ter({
  apiKey: 'My API Key',
  apiSecret: 'My API Secret',
  token: 'My Token',
  orgID: 'My Org ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource accounts', () => {
  test('create: only required params', async () => {
    const responsePromise = client.accounts.create({
      code: 'S?oC"$]C] ]]]]]5]',
      emailAddress: 'dev@stainless.com',
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
    const response = await client.accounts.create({
      orgId: 'orgId',
      code: 'S?oC"$]C] ]]]]]5]',
      emailAddress: 'dev@stainless.com',
      name: 'x',
      address: {
        addressLine1: 'addressLine1',
        addressLine2: 'addressLine2',
        addressLine3: 'addressLine3',
        addressLine4: 'addressLine4',
        country: 'country',
        locality: 'locality',
        postCode: 'postCode',
        region: 'region',
      },
      autoGenerateStatementMode: 'NONE',
      billEpoch: '2019-12-27',
      configData: { foo: 'bar' },
      creditApplicationOrder: ['PREPAYMENT'],
      currency: 'USD',
      customFields: { foo: 'string' },
      daysBeforeBillDue: 1,
      parentAccountId: 'parentAccountId',
      purchaseOrderNumber: 'purchaseOrderNumber',
      statementDefinitionId: 'statementDefinitionId',
      version: 0,
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.accounts.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.accounts.retrieve('id', { orgId: 'orgId' });
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.accounts.retrieve('id', { orgId: 'orgId' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.accounts.update('id', {
      code: 'S?oC"$]C] ]]]]]5]',
      emailAddress: 'dev@stainless.com',
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
    const response = await client.accounts.update('id', {
      orgId: 'orgId',
      code: 'S?oC"$]C] ]]]]]5]',
      emailAddress: 'dev@stainless.com',
      name: 'x',
      address: {
        addressLine1: 'addressLine1',
        addressLine2: 'addressLine2',
        addressLine3: 'addressLine3',
        addressLine4: 'addressLine4',
        country: 'country',
        locality: 'locality',
        postCode: 'postCode',
        region: 'region',
      },
      autoGenerateStatementMode: 'NONE',
      billEpoch: '2019-12-27',
      configData: { foo: 'bar' },
      creditApplicationOrder: ['PREPAYMENT'],
      currency: 'USD',
      customFields: { foo: 'string' },
      daysBeforeBillDue: 1,
      parentAccountId: 'parentAccountId',
      purchaseOrderNumber: 'purchaseOrderNumber',
      statementDefinitionId: 'statementDefinitionId',
      version: 0,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.accounts.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.accounts.list({
      orgId: 'orgId',
      codes: ['string'],
      ids: ['string'],
      nextToken: 'nextToken',
      pageSize: 1,
    });
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.accounts.list(
        { orgId: 'orgId', codes: ['string'], ids: ['string'], nextToken: 'nextToken', pageSize: 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('delete: only required params', async () => {
    const responsePromise = client.accounts.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.accounts.delete('id', { orgId: 'orgId' });
  });

  test('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.accounts.delete('id', { orgId: 'orgId' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('endDateBillingEntities: only required params', async () => {
    const responsePromise = client.accounts.endDateBillingEntities('id', {
      billingEntities: ['CONTRACT'],
      endDate: '2019-12-27T18:11:19.117Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('endDateBillingEntities: required and optional params', async () => {
    const response = await client.accounts.endDateBillingEntities('id', {
      orgId: 'orgId',
      billingEntities: ['CONTRACT'],
      endDate: '2019-12-27T18:11:19.117Z',
      applyToChildren: true,
    });
  });

  test('getChildren: only required params', async () => {
    const responsePromise = client.accounts.getChildren('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getChildren: required and optional params', async () => {
    const response = await client.accounts.getChildren('id', {
      orgId: 'orgId',
      nextToken: 'nextToken',
      pageSize: 1,
    });
  });

  test('getChildren: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.accounts.getChildren(
        'id',
        { orgId: 'orgId', nextToken: 'nextToken', pageSize: 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('search: only required params', async () => {
    const responsePromise = client.accounts.search();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('search: required and optional params', async () => {
    const response = await client.accounts.search({
      orgId: 'orgId',
      fromDocument: 0,
      operator: 'AND',
      pageSize: 1,
      searchQuery: 'searchQuery',
      sortBy: 'sortBy',
      sortOrder: 'ASC',
    });
  });

  test('search: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.accounts.search(
        {
          orgId: 'orgId',
          fromDocument: 0,
          operator: 'AND',
          pageSize: 1,
          searchQuery: 'searchQuery',
          sortBy: 'sortBy',
          sortOrder: 'ASC',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(M3ter.NotFoundError);
  });
});
