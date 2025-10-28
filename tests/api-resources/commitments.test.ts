// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import M3ter from 'm3ter-sdk';

const client = new M3ter({
  apiKey: 'My API Key',
  apiSecret: 'My API Secret',
  token: 'My Token',
  orgID: 'My Org ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource commitments', () => {
  test('create: only required params', async () => {
    const responsePromise = client.commitments.create({
      accountId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      amount: 1,
      currency: 'x',
      endDate: '2019-12-27',
      startDate: '2019-12-27',
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
    const response = await client.commitments.create({
      orgId: 'orgId',
      accountId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      amount: 1,
      currency: 'x',
      endDate: '2019-12-27',
      startDate: '2019-12-27',
      accountingProductId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      amountFirstBill: 0,
      amountPrePaid: 0,
      billEpoch: '2019-12-27',
      billingInterval: 1,
      billingOffset: 0,
      billingPlanId: 'billingPlanId',
      childBillingMode: 'PARENT_SUMMARY',
      commitmentFeeBillInAdvance: true,
      commitmentFeeDescription: 'commitmentFeeDescription',
      commitmentUsageDescription: 'commitmentUsageDescription',
      contractId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      drawdownsAccountingProductId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      feeDates: [
        {
          amount: 1,
          date: '2019-12-27',
          servicePeriodEndDate: '2019-12-27T18:11:19.117Z',
          servicePeriodStartDate: '2019-12-27T18:11:19.117Z',
        },
      ],
      feesAccountingProductId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      lineItemTypes: ['STANDING_CHARGE'],
      overageDescription: 'overageDescription',
      overageSurchargePercent: 0,
      productIds: ['string'],
      separateOverageUsage: true,
      version: 0,
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.commitments.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.commitments.retrieve('id', { orgId: 'orgId' });
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.commitments.retrieve('id', { orgId: 'orgId' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.commitments.update('id', {
      accountId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      amount: 1,
      currency: 'x',
      endDate: '2019-12-27',
      startDate: '2019-12-27',
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
    const response = await client.commitments.update('id', {
      orgId: 'orgId',
      accountId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      amount: 1,
      currency: 'x',
      endDate: '2019-12-27',
      startDate: '2019-12-27',
      accountingProductId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      amountFirstBill: 0,
      amountPrePaid: 0,
      billEpoch: '2019-12-27',
      billingInterval: 1,
      billingOffset: 0,
      billingPlanId: 'billingPlanId',
      childBillingMode: 'PARENT_SUMMARY',
      commitmentFeeBillInAdvance: true,
      commitmentFeeDescription: 'commitmentFeeDescription',
      commitmentUsageDescription: 'commitmentUsageDescription',
      contractId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      drawdownsAccountingProductId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      feeDates: [
        {
          amount: 1,
          date: '2019-12-27',
          servicePeriodEndDate: '2019-12-27T18:11:19.117Z',
          servicePeriodStartDate: '2019-12-27T18:11:19.117Z',
        },
      ],
      feesAccountingProductId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      lineItemTypes: ['STANDING_CHARGE'],
      overageDescription: 'overageDescription',
      overageSurchargePercent: 0,
      productIds: ['string'],
      separateOverageUsage: true,
      version: 0,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.commitments.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.commitments.list({
      orgId: 'orgId',
      accountId: 'accountId',
      contractId: 'contractId',
      date: 'date',
      endDateEnd: 'endDateEnd',
      endDateStart: 'endDateStart',
      ids: ['string'],
      nextToken: 'nextToken',
      pageSize: 1,
      productId: 'productId',
    });
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.commitments.list(
        {
          orgId: 'orgId',
          accountId: 'accountId',
          contractId: 'contractId',
          date: 'date',
          endDateEnd: 'endDateEnd',
          endDateStart: 'endDateStart',
          ids: ['string'],
          nextToken: 'nextToken',
          pageSize: 1,
          productId: 'productId',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('delete: only required params', async () => {
    const responsePromise = client.commitments.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.commitments.delete('id', { orgId: 'orgId' });
  });

  test('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.commitments.delete('id', { orgId: 'orgId' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('search: only required params', async () => {
    const responsePromise = client.commitments.search();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('search: required and optional params', async () => {
    const response = await client.commitments.search({
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
      client.commitments.search(
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
