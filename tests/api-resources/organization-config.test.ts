// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import M3ter from 'm3ter-sdk';

const client = new M3ter({
  apiKey: 'My API Key',
  apiSecret: 'My API Secret',
  token: 'My Token',
  orgID: 'My Org ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource organizationConfig', () => {
  test('retrieve: only required params', async () => {
    const responsePromise = client.organizationConfig.retrieve();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.organizationConfig.retrieve({ orgId: 'orgId' });
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.organizationConfig.retrieve({ orgId: 'orgId' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.organizationConfig.update({
      currency: 'USD',
      dayEpoch: '2022-01-01',
      daysBeforeBillDue: 1,
      monthEpoch: '2022-01-01',
      timezone: 'UTC',
      weekEpoch: '2022-01-04',
      yearEpoch: '2022-01-01',
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
    const response = await client.organizationConfig.update({
      orgId: 'orgId',
      currency: 'USD',
      dayEpoch: '2022-01-01',
      daysBeforeBillDue: 1,
      monthEpoch: '2022-01-01',
      timezone: 'UTC',
      weekEpoch: '2022-01-04',
      yearEpoch: '2022-01-01',
      autoApproveBillsGracePeriod: 2,
      autoApproveBillsGracePeriodUnit: 'DAYS',
      autoGenerateStatementMode: 'NONE',
      billPrefix: 'Bill-',
      commitmentFeeBillInAdvance: true,
      consolidateBills: true,
      creditApplicationOrder: ['PREPAYMENT'],
      currencyConversions: [{ from: 'EUR', to: 'USD', multiplier: 1.12 }],
      defaultStatementDefinitionId: 'defaultStatementDefinitionId',
      externalInvoiceDate: 'LAST_DAY_OF_ARREARS',
      minimumSpendBillInAdvance: true,
      scheduledBillInterval: 0,
      sequenceStartNumber: 1000,
      standingChargeBillInAdvance: true,
      suppressedEmptyBills: true,
      version: 0,
    });
  });
});
