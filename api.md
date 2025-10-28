# Shared

Types:

- <code><a href="./src/resources/shared.ts">CurrencyConversion</a></code>
- <code><a href="./src/resources/shared.ts">PricingBand</a></code>
- <code><a href="./src/resources/shared.ts">SetString</a></code>

# Authentication

Types:

- <code><a href="./src/resources/authentication.ts">AuthenticationGetBearerTokenResponse</a></code>

Methods:

- <code title="post /oauth/token">client.authentication.<a href="./src/resources/authentication.ts">getBearerToken</a>({ ...params }) -> AuthenticationGetBearerTokenResponse</code>

# Accounts

Types:

- <code><a href="./src/resources/accounts.ts">AccountResponse</a></code>
- <code><a href="./src/resources/accounts.ts">Address</a></code>
- <code><a href="./src/resources/accounts.ts">AccountEndDateBillingEntitiesResponse</a></code>
- <code><a href="./src/resources/accounts.ts">AccountSearchResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/accounts">client.accounts.<a href="./src/resources/accounts.ts">create</a>({ ...params }) -> AccountResponse</code>
- <code title="get /organizations/{orgId}/accounts/{id}">client.accounts.<a href="./src/resources/accounts.ts">retrieve</a>(id, { ...params }) -> AccountResponse</code>
- <code title="put /organizations/{orgId}/accounts/{id}">client.accounts.<a href="./src/resources/accounts.ts">update</a>(id, { ...params }) -> AccountResponse</code>
- <code title="get /organizations/{orgId}/accounts">client.accounts.<a href="./src/resources/accounts.ts">list</a>({ ...params }) -> AccountResponsesCursor</code>
- <code title="delete /organizations/{orgId}/accounts/{id}">client.accounts.<a href="./src/resources/accounts.ts">delete</a>(id, { ...params }) -> AccountResponse</code>
- <code title="put /organizations/{orgId}/accounts/{id}/enddatebillingentities">client.accounts.<a href="./src/resources/accounts.ts">endDateBillingEntities</a>(id, { ...params }) -> AccountEndDateBillingEntitiesResponse</code>
- <code title="get /organizations/{orgId}/accounts/{id}/children">client.accounts.<a href="./src/resources/accounts.ts">getChildren</a>(id, { ...params }) -> AccountResponse</code>
- <code title="get /organizations/{orgId}/accounts/search">client.accounts.<a href="./src/resources/accounts.ts">search</a>({ ...params }) -> AccountSearchResponse</code>

# AccountPlans

Types:

- <code><a href="./src/resources/account-plans.ts">AccountPlanResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/accountplans">client.accountPlans.<a href="./src/resources/account-plans.ts">create</a>({ ...params }) -> AccountPlanResponse</code>
- <code title="get /organizations/{orgId}/accountplans/{id}">client.accountPlans.<a href="./src/resources/account-plans.ts">retrieve</a>(id, { ...params }) -> AccountPlanResponse</code>
- <code title="put /organizations/{orgId}/accountplans/{id}">client.accountPlans.<a href="./src/resources/account-plans.ts">update</a>(id, { ...params }) -> AccountPlanResponse</code>
- <code title="get /organizations/{orgId}/accountplans">client.accountPlans.<a href="./src/resources/account-plans.ts">list</a>({ ...params }) -> AccountPlanResponsesCursor</code>
- <code title="delete /organizations/{orgId}/accountplans/{id}">client.accountPlans.<a href="./src/resources/account-plans.ts">delete</a>(id, { ...params }) -> AccountPlanResponse</code>

# Aggregations

Types:

- <code><a href="./src/resources/aggregations.ts">AggregationResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/aggregations">client.aggregations.<a href="./src/resources/aggregations.ts">create</a>({ ...params }) -> AggregationResponse</code>
- <code title="get /organizations/{orgId}/aggregations/{id}">client.aggregations.<a href="./src/resources/aggregations.ts">retrieve</a>(id, { ...params }) -> AggregationResponse</code>
- <code title="put /organizations/{orgId}/aggregations/{id}">client.aggregations.<a href="./src/resources/aggregations.ts">update</a>(id, { ...params }) -> AggregationResponse</code>
- <code title="get /organizations/{orgId}/aggregations">client.aggregations.<a href="./src/resources/aggregations.ts">list</a>({ ...params }) -> AggregationResponsesCursor</code>
- <code title="delete /organizations/{orgId}/aggregations/{id}">client.aggregations.<a href="./src/resources/aggregations.ts">delete</a>(id, { ...params }) -> AggregationResponse</code>

# Balances

Types:

- <code><a href="./src/resources/balances/balances.ts">Balance</a></code>

Methods:

- <code title="post /organizations/{orgId}/balances">client.balances.<a href="./src/resources/balances/balances.ts">create</a>({ ...params }) -> Balance</code>
- <code title="get /organizations/{orgId}/balances/{id}">client.balances.<a href="./src/resources/balances/balances.ts">retrieve</a>(id, { ...params }) -> Balance</code>
- <code title="put /organizations/{orgId}/balances/{id}">client.balances.<a href="./src/resources/balances/balances.ts">update</a>(id, { ...params }) -> Balance</code>
- <code title="get /organizations/{orgId}/balances">client.balances.<a href="./src/resources/balances/balances.ts">list</a>({ ...params }) -> BalancesCursor</code>
- <code title="delete /organizations/{orgId}/balances/{id}">client.balances.<a href="./src/resources/balances/balances.ts">delete</a>(id, { ...params }) -> Balance</code>

## Transactions

Types:

- <code><a href="./src/resources/balances/transactions.ts">TransactionResponse</a></code>
- <code><a href="./src/resources/balances/transactions.ts">TransactionSummaryResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/balances/{balanceId}/transactions">client.balances.transactions.<a href="./src/resources/balances/transactions.ts">create</a>(balanceID, { ...params }) -> TransactionResponse</code>
- <code title="get /organizations/{orgId}/balances/{balanceId}/transactions">client.balances.transactions.<a href="./src/resources/balances/transactions.ts">list</a>(balanceID, { ...params }) -> TransactionResponsesCursor</code>
- <code title="get /organizations/{orgId}/balances/{balanceId}/transactions/summary">client.balances.transactions.<a href="./src/resources/balances/transactions.ts">summary</a>(balanceID, { ...params }) -> TransactionSummaryResponse</code>

# Bills

Types:

- <code><a href="./src/resources/bills/bills.ts">BillResponse</a></code>
- <code><a href="./src/resources/bills/bills.ts">BillApproveResponse</a></code>
- <code><a href="./src/resources/bills/bills.ts">BillSearchResponse</a></code>

Methods:

- <code title="get /organizations/{orgId}/bills/{id}">client.bills.<a href="./src/resources/bills/bills.ts">retrieve</a>(id, { ...params }) -> BillResponse</code>
- <code title="get /organizations/{orgId}/bills">client.bills.<a href="./src/resources/bills/bills.ts">list</a>({ ...params }) -> BillResponsesCursor</code>
- <code title="delete /organizations/{orgId}/bills/{id}">client.bills.<a href="./src/resources/bills/bills.ts">delete</a>(id, { ...params }) -> BillResponse</code>
- <code title="post /organizations/{orgId}/bills/approve">client.bills.<a href="./src/resources/bills/bills.ts">approve</a>({ ...params }) -> BillApproveResponse</code>
- <code title="get /organizations/{orgId}/bills/latest/{accountId}">client.bills.<a href="./src/resources/bills/bills.ts">latestByAccount</a>(accountID, { ...params }) -> BillResponse</code>
- <code title="put /organizations/{orgId}/bills/{id}/lock">client.bills.<a href="./src/resources/bills/bills.ts">lock</a>(id, { ...params }) -> BillResponse</code>
- <code title="get /organizations/{orgId}/bills/search">client.bills.<a href="./src/resources/bills/bills.ts">search</a>({ ...params }) -> BillSearchResponse</code>
- <code title="put /organizations/{orgId}/bills/{id}/status">client.bills.<a href="./src/resources/bills/bills.ts">updateStatus</a>(id, { ...params }) -> BillResponse</code>

## CreditLineItems

Types:

- <code><a href="./src/resources/bills/credit-line-items.ts">CreditLineItemResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/bills/{billId}/creditlineitems">client.bills.creditLineItems.<a href="./src/resources/bills/credit-line-items.ts">create</a>(billID, { ...params }) -> CreditLineItemResponse</code>
- <code title="get /organizations/{orgId}/bills/{billId}/creditlineitems/{id}">client.bills.creditLineItems.<a href="./src/resources/bills/credit-line-items.ts">retrieve</a>(id, { ...params }) -> CreditLineItemResponse</code>
- <code title="put /organizations/{orgId}/bills/{billId}/creditlineitems/{id}">client.bills.creditLineItems.<a href="./src/resources/bills/credit-line-items.ts">update</a>(id, { ...params }) -> CreditLineItemResponse</code>
- <code title="get /organizations/{orgId}/bills/{billId}/creditlineitems">client.bills.creditLineItems.<a href="./src/resources/bills/credit-line-items.ts">list</a>(billID, { ...params }) -> CreditLineItemResponsesCursor</code>
- <code title="delete /organizations/{orgId}/bills/{billId}/creditlineitems/{id}">client.bills.creditLineItems.<a href="./src/resources/bills/credit-line-items.ts">delete</a>(id, { ...params }) -> CreditLineItemResponse</code>

## DebitLineItems

Types:

- <code><a href="./src/resources/bills/debit-line-items.ts">DebitLineItemResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/bills/{billId}/debitlineitems">client.bills.debitLineItems.<a href="./src/resources/bills/debit-line-items.ts">create</a>(billID, { ...params }) -> DebitLineItemResponse</code>
- <code title="get /organizations/{orgId}/bills/{billId}/debitlineitems/{id}">client.bills.debitLineItems.<a href="./src/resources/bills/debit-line-items.ts">retrieve</a>(id, { ...params }) -> DebitLineItemResponse</code>
- <code title="put /organizations/{orgId}/bills/{billId}/debitlineitems/{id}">client.bills.debitLineItems.<a href="./src/resources/bills/debit-line-items.ts">update</a>(id, { ...params }) -> DebitLineItemResponse</code>
- <code title="get /organizations/{orgId}/bills/{billId}/debitlineitems">client.bills.debitLineItems.<a href="./src/resources/bills/debit-line-items.ts">list</a>(billID, { ...params }) -> DebitLineItemResponsesCursor</code>
- <code title="delete /organizations/{orgId}/bills/{billId}/debitlineitems/{id}">client.bills.debitLineItems.<a href="./src/resources/bills/debit-line-items.ts">delete</a>(id, { ...params }) -> DebitLineItemResponse</code>

## LineItems

Types:

- <code><a href="./src/resources/bills/line-items.ts">LineItemResponse</a></code>

Methods:

- <code title="get /organizations/{orgId}/bills/{billId}/lineitems/{id}">client.bills.lineItems.<a href="./src/resources/bills/line-items.ts">retrieve</a>(id, { ...params }) -> LineItemResponse</code>
- <code title="get /organizations/{orgId}/bills/{billId}/lineitems">client.bills.lineItems.<a href="./src/resources/bills/line-items.ts">list</a>(billID, { ...params }) -> LineItemResponsesCursor</code>

# BillConfig

Types:

- <code><a href="./src/resources/bill-config.ts">BillConfigResponse</a></code>

Methods:

- <code title="get /organizations/{orgId}/billconfig">client.billConfig.<a href="./src/resources/bill-config.ts">retrieve</a>({ ...params }) -> BillConfigResponse</code>
- <code title="put /organizations/{orgId}/billconfig">client.billConfig.<a href="./src/resources/bill-config.ts">update</a>({ ...params }) -> BillConfigResponse</code>

# Commitments

Types:

- <code><a href="./src/resources/commitments.ts">CommitmentFee</a></code>
- <code><a href="./src/resources/commitments.ts">CommitmentResponse</a></code>
- <code><a href="./src/resources/commitments.ts">CommitmentSearchResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/commitments">client.commitments.<a href="./src/resources/commitments.ts">create</a>({ ...params }) -> CommitmentResponse</code>
- <code title="get /organizations/{orgId}/commitments/{id}">client.commitments.<a href="./src/resources/commitments.ts">retrieve</a>(id, { ...params }) -> CommitmentResponse</code>
- <code title="put /organizations/{orgId}/commitments/{id}">client.commitments.<a href="./src/resources/commitments.ts">update</a>(id, { ...params }) -> CommitmentResponse</code>
- <code title="get /organizations/{orgId}/commitments">client.commitments.<a href="./src/resources/commitments.ts">list</a>({ ...params }) -> CommitmentResponsesCursor</code>
- <code title="delete /organizations/{orgId}/commitments/{id}">client.commitments.<a href="./src/resources/commitments.ts">delete</a>(id, { ...params }) -> CommitmentResponse</code>
- <code title="get /organizations/{orgId}/commitments/search">client.commitments.<a href="./src/resources/commitments.ts">search</a>({ ...params }) -> CommitmentSearchResponse</code>

# BillJobs

Types:

- <code><a href="./src/resources/bill-jobs.ts">BillJobResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/billjobs">client.billJobs.<a href="./src/resources/bill-jobs.ts">create</a>({ ...params }) -> BillJobResponse</code>
- <code title="get /organizations/{orgId}/billjobs/{id}">client.billJobs.<a href="./src/resources/bill-jobs.ts">retrieve</a>(id, { ...params }) -> BillJobResponse</code>
- <code title="get /organizations/{orgId}/billjobs">client.billJobs.<a href="./src/resources/bill-jobs.ts">list</a>({ ...params }) -> BillJobResponsesCursor</code>
- <code title="post /organizations/{orgId}/billjobs/{id}/cancel">client.billJobs.<a href="./src/resources/bill-jobs.ts">cancel</a>(id, { ...params }) -> BillJobResponse</code>
- <code title="post /organizations/{orgId}/billjobs/recalculate">client.billJobs.<a href="./src/resources/bill-jobs.ts">recalculate</a>({ ...params }) -> BillJobResponse</code>

# CompoundAggregations

Types:

- <code><a href="./src/resources/compound-aggregations.ts">CompoundAggregationResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/compoundaggregations">client.compoundAggregations.<a href="./src/resources/compound-aggregations.ts">create</a>({ ...params }) -> AggregationResponse</code>
- <code title="get /organizations/{orgId}/compoundaggregations/{id}">client.compoundAggregations.<a href="./src/resources/compound-aggregations.ts">retrieve</a>(id, { ...params }) -> CompoundAggregationResponse</code>
- <code title="put /organizations/{orgId}/compoundaggregations/{id}">client.compoundAggregations.<a href="./src/resources/compound-aggregations.ts">update</a>(id, { ...params }) -> AggregationResponse</code>
- <code title="get /organizations/{orgId}/compoundaggregations">client.compoundAggregations.<a href="./src/resources/compound-aggregations.ts">list</a>({ ...params }) -> CompoundAggregationResponsesCursor</code>
- <code title="delete /organizations/{orgId}/compoundaggregations/{id}">client.compoundAggregations.<a href="./src/resources/compound-aggregations.ts">delete</a>(id, { ...params }) -> CompoundAggregationResponse</code>

# Contracts

Types:

- <code><a href="./src/resources/contracts.ts">ContractResponse</a></code>
- <code><a href="./src/resources/contracts.ts">ContractEndDateBillingEntitiesResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/contracts">client.contracts.<a href="./src/resources/contracts.ts">create</a>({ ...params }) -> ContractResponse</code>
- <code title="get /organizations/{orgId}/contracts/{id}">client.contracts.<a href="./src/resources/contracts.ts">retrieve</a>(id, { ...params }) -> ContractResponse</code>
- <code title="put /organizations/{orgId}/contracts/{id}">client.contracts.<a href="./src/resources/contracts.ts">update</a>(id, { ...params }) -> ContractResponse</code>
- <code title="get /organizations/{orgId}/contracts">client.contracts.<a href="./src/resources/contracts.ts">list</a>({ ...params }) -> ContractResponsesCursor</code>
- <code title="delete /organizations/{orgId}/contracts/{id}">client.contracts.<a href="./src/resources/contracts.ts">delete</a>(id, { ...params }) -> ContractResponse</code>
- <code title="put /organizations/{orgId}/contracts/{id}/enddatebillingentities">client.contracts.<a href="./src/resources/contracts.ts">endDateBillingEntities</a>(id, { ...params }) -> ContractEndDateBillingEntitiesResponse</code>

# Counters

Types:

- <code><a href="./src/resources/counters.ts">CounterResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/counters">client.counters.<a href="./src/resources/counters.ts">create</a>({ ...params }) -> CounterResponse</code>
- <code title="get /organizations/{orgId}/counters/{id}">client.counters.<a href="./src/resources/counters.ts">retrieve</a>(id, { ...params }) -> CounterResponse</code>
- <code title="put /organizations/{orgId}/counters/{id}">client.counters.<a href="./src/resources/counters.ts">update</a>(id, { ...params }) -> CounterResponse</code>
- <code title="get /organizations/{orgId}/counters">client.counters.<a href="./src/resources/counters.ts">list</a>({ ...params }) -> CounterResponsesCursor</code>
- <code title="delete /organizations/{orgId}/counters/{id}">client.counters.<a href="./src/resources/counters.ts">delete</a>(id, { ...params }) -> CounterResponse</code>

# CounterAdjustments

Types:

- <code><a href="./src/resources/counter-adjustments.ts">CounterAdjustmentResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/counteradjustments">client.counterAdjustments.<a href="./src/resources/counter-adjustments.ts">create</a>({ ...params }) -> CounterAdjustmentResponse</code>
- <code title="get /organizations/{orgId}/counteradjustments/{id}">client.counterAdjustments.<a href="./src/resources/counter-adjustments.ts">retrieve</a>(id, { ...params }) -> CounterAdjustmentResponse</code>
- <code title="put /organizations/{orgId}/counteradjustments/{id}">client.counterAdjustments.<a href="./src/resources/counter-adjustments.ts">update</a>(id, { ...params }) -> CounterAdjustmentResponse</code>
- <code title="get /organizations/{orgId}/counteradjustments">client.counterAdjustments.<a href="./src/resources/counter-adjustments.ts">list</a>({ ...params }) -> CounterAdjustmentResponsesCursor</code>
- <code title="delete /organizations/{orgId}/counteradjustments/{id}">client.counterAdjustments.<a href="./src/resources/counter-adjustments.ts">delete</a>(id, { ...params }) -> CounterAdjustmentResponse</code>

# CounterPricings

Types:

- <code><a href="./src/resources/counter-pricings.ts">CounterPricingResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/counterpricings">client.counterPricings.<a href="./src/resources/counter-pricings.ts">create</a>({ ...params }) -> CounterPricingResponse</code>
- <code title="get /organizations/{orgId}/counterpricings/{id}">client.counterPricings.<a href="./src/resources/counter-pricings.ts">retrieve</a>(id, { ...params }) -> CounterPricingResponse</code>
- <code title="put /organizations/{orgId}/counterpricings/{id}">client.counterPricings.<a href="./src/resources/counter-pricings.ts">update</a>(id, { ...params }) -> CounterPricingResponse</code>
- <code title="get /organizations/{orgId}/counterpricings">client.counterPricings.<a href="./src/resources/counter-pricings.ts">list</a>({ ...params }) -> CounterPricingResponsesCursor</code>
- <code title="delete /organizations/{orgId}/counterpricings/{id}">client.counterPricings.<a href="./src/resources/counter-pricings.ts">delete</a>(id, { ...params }) -> CounterPricingResponse</code>

# CreditReasons

Types:

- <code><a href="./src/resources/credit-reasons.ts">CreditReasonResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/picklists/creditreasons">client.creditReasons.<a href="./src/resources/credit-reasons.ts">create</a>({ ...params }) -> CreditReasonResponse</code>
- <code title="get /organizations/{orgId}/picklists/creditreasons/{id}">client.creditReasons.<a href="./src/resources/credit-reasons.ts">retrieve</a>(id, { ...params }) -> CreditReasonResponse</code>
- <code title="put /organizations/{orgId}/picklists/creditreasons/{id}">client.creditReasons.<a href="./src/resources/credit-reasons.ts">update</a>(id, { ...params }) -> CreditReasonResponse</code>
- <code title="get /organizations/{orgId}/picklists/creditreasons">client.creditReasons.<a href="./src/resources/credit-reasons.ts">list</a>({ ...params }) -> CreditReasonResponsesCursor</code>
- <code title="delete /organizations/{orgId}/picklists/creditreasons/{id}">client.creditReasons.<a href="./src/resources/credit-reasons.ts">delete</a>(id, { ...params }) -> CreditReasonResponse</code>

# Currencies

Types:

- <code><a href="./src/resources/currencies.ts">CurrencyResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/picklists/currency">client.currencies.<a href="./src/resources/currencies.ts">create</a>({ ...params }) -> CurrencyResponse</code>
- <code title="get /organizations/{orgId}/picklists/currency/{id}">client.currencies.<a href="./src/resources/currencies.ts">retrieve</a>(id, { ...params }) -> CurrencyResponse</code>
- <code title="put /organizations/{orgId}/picklists/currency/{id}">client.currencies.<a href="./src/resources/currencies.ts">update</a>(id, { ...params }) -> CurrencyResponse</code>
- <code title="get /organizations/{orgId}/picklists/currency">client.currencies.<a href="./src/resources/currencies.ts">list</a>({ ...params }) -> CurrencyResponsesCursor</code>
- <code title="delete /organizations/{orgId}/picklists/currency/{id}">client.currencies.<a href="./src/resources/currencies.ts">delete</a>(id, { ...params }) -> CurrencyResponse</code>

# CustomFields

Types:

- <code><a href="./src/resources/custom-fields.ts">CustomFieldsResponse</a></code>

Methods:

- <code title="get /organizations/{orgId}/customfields">client.customFields.<a href="./src/resources/custom-fields.ts">retrieve</a>({ ...params }) -> CustomFieldsResponse</code>
- <code title="put /organizations/{orgId}/customfields">client.customFields.<a href="./src/resources/custom-fields.ts">update</a>({ ...params }) -> CustomFieldsResponse</code>

# DataExports

Types:

- <code><a href="./src/resources/data-exports/data-exports.ts">AdHocOperationalDataRequest</a></code>
- <code><a href="./src/resources/data-exports/data-exports.ts">AdHocResponse</a></code>
- <code><a href="./src/resources/data-exports/data-exports.ts">AdHocUsageDataRequest</a></code>
- <code><a href="./src/resources/data-exports/data-exports.ts">DataExplorerAccountGroup</a></code>
- <code><a href="./src/resources/data-exports/data-exports.ts">DataExplorerDimensionGroup</a></code>
- <code><a href="./src/resources/data-exports/data-exports.ts">DataExplorerGroup</a></code>
- <code><a href="./src/resources/data-exports/data-exports.ts">DataExplorerTimeGroup</a></code>

Methods:

- <code title="post /organizations/{orgId}/dataexports/adhoc">client.dataExports.<a href="./src/resources/data-exports/data-exports.ts">createAdhoc</a>({ ...params }) -> AdHocResponse</code>

## Destinations

Types:

- <code><a href="./src/resources/data-exports/destinations.ts">DataExportDestinationGoogleCloudStorageRequest</a></code>
- <code><a href="./src/resources/data-exports/destinations.ts">DataExportDestinationResponse</a></code>
- <code><a href="./src/resources/data-exports/destinations.ts">DataExportDestinationS3Request</a></code>
- <code><a href="./src/resources/data-exports/destinations.ts">DestinationCreateResponse</a></code>
- <code><a href="./src/resources/data-exports/destinations.ts">DestinationRetrieveResponse</a></code>
- <code><a href="./src/resources/data-exports/destinations.ts">DestinationUpdateResponse</a></code>
- <code><a href="./src/resources/data-exports/destinations.ts">DestinationDeleteResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/dataexports/destinations">client.dataExports.destinations.<a href="./src/resources/data-exports/destinations.ts">create</a>({ ...params }) -> DestinationCreateResponse</code>
- <code title="get /organizations/{orgId}/dataexports/destinations/{id}">client.dataExports.destinations.<a href="./src/resources/data-exports/destinations.ts">retrieve</a>(id, { ...params }) -> DestinationRetrieveResponse</code>
- <code title="put /organizations/{orgId}/dataexports/destinations/{id}">client.dataExports.destinations.<a href="./src/resources/data-exports/destinations.ts">update</a>(id, { ...params }) -> DestinationUpdateResponse</code>
- <code title="get /organizations/{orgId}/dataexports/destinations">client.dataExports.destinations.<a href="./src/resources/data-exports/destinations.ts">list</a>({ ...params }) -> DataExportDestinationResponsesCursor</code>
- <code title="delete /organizations/{orgId}/dataexports/destinations/{id}">client.dataExports.destinations.<a href="./src/resources/data-exports/destinations.ts">delete</a>(id, { ...params }) -> DestinationDeleteResponse</code>

## Jobs

Types:

- <code><a href="./src/resources/data-exports/jobs.ts">DataExportJobResponse</a></code>
- <code><a href="./src/resources/data-exports/jobs.ts">JobGetDownloadURLResponse</a></code>

Methods:

- <code title="get /organizations/{orgId}/dataexports/jobs/{id}">client.dataExports.jobs.<a href="./src/resources/data-exports/jobs.ts">retrieve</a>(id, { ...params }) -> DataExportJobResponse</code>
- <code title="get /organizations/{orgId}/dataexports/jobs">client.dataExports.jobs.<a href="./src/resources/data-exports/jobs.ts">list</a>({ ...params }) -> DataExportJobResponsesCursor</code>
- <code title="get /organizations/{orgId}/dataexports/jobs/{jobId}/getdownloadurl">client.dataExports.jobs.<a href="./src/resources/data-exports/jobs.ts">getDownloadURL</a>(jobID, { ...params }) -> JobGetDownloadURLResponse</code>

## Schedules

Types:

- <code><a href="./src/resources/data-exports/schedules.ts">OperationalDataExportScheduleRequest</a></code>
- <code><a href="./src/resources/data-exports/schedules.ts">OperationalDataExportScheduleResponse</a></code>
- <code><a href="./src/resources/data-exports/schedules.ts">UsageDataExportScheduleRequest</a></code>
- <code><a href="./src/resources/data-exports/schedules.ts">UsageDataExportScheduleResponse</a></code>
- <code><a href="./src/resources/data-exports/schedules.ts">ScheduleCreateResponse</a></code>
- <code><a href="./src/resources/data-exports/schedules.ts">ScheduleRetrieveResponse</a></code>
- <code><a href="./src/resources/data-exports/schedules.ts">ScheduleUpdateResponse</a></code>
- <code><a href="./src/resources/data-exports/schedules.ts">ScheduleListResponse</a></code>
- <code><a href="./src/resources/data-exports/schedules.ts">ScheduleDeleteResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/dataexports/schedules">client.dataExports.schedules.<a href="./src/resources/data-exports/schedules.ts">create</a>({ ...params }) -> ScheduleCreateResponse</code>
- <code title="get /organizations/{orgId}/dataexports/schedules/{id}">client.dataExports.schedules.<a href="./src/resources/data-exports/schedules.ts">retrieve</a>(id, { ...params }) -> ScheduleRetrieveResponse</code>
- <code title="put /organizations/{orgId}/dataexports/schedules/{id}">client.dataExports.schedules.<a href="./src/resources/data-exports/schedules.ts">update</a>(id, { ...params }) -> ScheduleUpdateResponse</code>
- <code title="get /organizations/{orgId}/dataexports/schedules">client.dataExports.schedules.<a href="./src/resources/data-exports/schedules.ts">list</a>({ ...params }) -> ScheduleListResponsesCursor</code>
- <code title="delete /organizations/{orgId}/dataexports/schedules/{id}">client.dataExports.schedules.<a href="./src/resources/data-exports/schedules.ts">delete</a>(id, { ...params }) -> ScheduleDeleteResponse</code>

# DebitReasons

Types:

- <code><a href="./src/resources/debit-reasons.ts">DebitReasonResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/picklists/debitreasons">client.debitReasons.<a href="./src/resources/debit-reasons.ts">create</a>({ ...params }) -> DebitReasonResponse</code>
- <code title="get /organizations/{orgId}/picklists/debitreasons/{id}">client.debitReasons.<a href="./src/resources/debit-reasons.ts">retrieve</a>(id, { ...params }) -> DebitReasonResponse</code>
- <code title="put /organizations/{orgId}/picklists/debitreasons/{id}">client.debitReasons.<a href="./src/resources/debit-reasons.ts">update</a>(id, { ...params }) -> DebitReasonResponse</code>
- <code title="get /organizations/{orgId}/picklists/debitreasons">client.debitReasons.<a href="./src/resources/debit-reasons.ts">list</a>({ ...params }) -> DebitReasonResponsesCursor</code>
- <code title="delete /organizations/{orgId}/picklists/debitreasons/{id}">client.debitReasons.<a href="./src/resources/debit-reasons.ts">delete</a>(id, { ...params }) -> DebitReasonResponse</code>

# Events

Types:

- <code><a href="./src/resources/events.ts">EventResponse</a></code>
- <code><a href="./src/resources/events.ts">EventGetFieldsResponse</a></code>
- <code><a href="./src/resources/events.ts">EventGetTypesResponse</a></code>

Methods:

- <code title="get /organizations/{orgId}/events/{id}">client.events.<a href="./src/resources/events.ts">retrieve</a>(id, { ...params }) -> EventResponse</code>
- <code title="get /organizations/{orgId}/events">client.events.<a href="./src/resources/events.ts">list</a>({ ...params }) -> EventResponsesCursor</code>
- <code title="get /organizations/{orgId}/events/fields">client.events.<a href="./src/resources/events.ts">getFields</a>({ ...params }) -> EventGetFieldsResponse</code>
- <code title="get /organizations/{orgId}/events/types">client.events.<a href="./src/resources/events.ts">getTypes</a>({ ...params }) -> EventGetTypesResponse</code>

# ExternalMappings

Types:

- <code><a href="./src/resources/external-mappings.ts">ExternalMappingResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/externalmappings">client.externalMappings.<a href="./src/resources/external-mappings.ts">create</a>({ ...params }) -> ExternalMappingResponse</code>
- <code title="get /organizations/{orgId}/externalmappings/{id}">client.externalMappings.<a href="./src/resources/external-mappings.ts">retrieve</a>(id, { ...params }) -> ExternalMappingResponse</code>
- <code title="put /organizations/{orgId}/externalmappings/{id}">client.externalMappings.<a href="./src/resources/external-mappings.ts">update</a>(id, { ...params }) -> ExternalMappingResponse</code>
- <code title="get /organizations/{orgId}/externalmappings">client.externalMappings.<a href="./src/resources/external-mappings.ts">list</a>({ ...params }) -> ExternalMappingResponsesCursor</code>
- <code title="delete /organizations/{orgId}/externalmappings/{id}">client.externalMappings.<a href="./src/resources/external-mappings.ts">delete</a>(id, { ...params }) -> ExternalMappingResponse</code>
- <code title="get /organizations/{orgId}/externalmappings/externalid/{system}/{externalTable}/{externalId}">client.externalMappings.<a href="./src/resources/external-mappings.ts">listByExternalEntity</a>(externalID, { ...params }) -> ExternalMappingResponsesCursor</code>
- <code title="get /organizations/{orgId}/externalmappings/external/{entity}/{m3terId}">client.externalMappings.<a href="./src/resources/external-mappings.ts">listByM3terEntity</a>(m3terID, { ...params }) -> ExternalMappingResponsesCursor</code>

# IntegrationConfigurations

Types:

- <code><a href="./src/resources/integration-configurations.ts">IntegrationConfigurationResponse</a></code>
- <code><a href="./src/resources/integration-configurations.ts">IntegrationConfigurationCreateResponse</a></code>
- <code><a href="./src/resources/integration-configurations.ts">IntegrationConfigurationUpdateResponse</a></code>
- <code><a href="./src/resources/integration-configurations.ts">IntegrationConfigurationListResponse</a></code>
- <code><a href="./src/resources/integration-configurations.ts">IntegrationConfigurationDeleteResponse</a></code>
- <code><a href="./src/resources/integration-configurations.ts">IntegrationConfigurationEnableResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/integrationconfigs">client.integrationConfigurations.<a href="./src/resources/integration-configurations.ts">create</a>({ ...params }) -> IntegrationConfigurationCreateResponse</code>
- <code title="get /organizations/{orgId}/integrationconfigs/{id}">client.integrationConfigurations.<a href="./src/resources/integration-configurations.ts">retrieve</a>(id, { ...params }) -> IntegrationConfigurationResponse</code>
- <code title="put /organizations/{orgId}/integrationconfigs/{id}">client.integrationConfigurations.<a href="./src/resources/integration-configurations.ts">update</a>(id, { ...params }) -> IntegrationConfigurationUpdateResponse</code>
- <code title="get /organizations/{orgId}/integrationconfigs">client.integrationConfigurations.<a href="./src/resources/integration-configurations.ts">list</a>({ ...params }) -> IntegrationConfigurationListResponsesCursor</code>
- <code title="delete /organizations/{orgId}/integrationconfigs/{id}">client.integrationConfigurations.<a href="./src/resources/integration-configurations.ts">delete</a>(id, { ...params }) -> IntegrationConfigurationDeleteResponse</code>
- <code title="post /organizations/{orgId}/integrationconfigs/{id}/enable">client.integrationConfigurations.<a href="./src/resources/integration-configurations.ts">enable</a>(id, { ...params }) -> IntegrationConfigurationEnableResponse</code>
- <code title="get /organizations/{orgId}/integrationconfigs/entity/{entityType}">client.integrationConfigurations.<a href="./src/resources/integration-configurations.ts">getByEntity</a>(entityType, { ...params }) -> IntegrationConfigurationResponse</code>

# Meters

Types:

- <code><a href="./src/resources/meters.ts">DataField</a></code>
- <code><a href="./src/resources/meters.ts">DerivedField</a></code>
- <code><a href="./src/resources/meters.ts">MeterResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/meters">client.meters.<a href="./src/resources/meters.ts">create</a>({ ...params }) -> MeterResponse</code>
- <code title="get /organizations/{orgId}/meters/{id}">client.meters.<a href="./src/resources/meters.ts">retrieve</a>(id, { ...params }) -> MeterResponse</code>
- <code title="put /organizations/{orgId}/meters/{id}">client.meters.<a href="./src/resources/meters.ts">update</a>(id, { ...params }) -> MeterResponse</code>
- <code title="get /organizations/{orgId}/meters">client.meters.<a href="./src/resources/meters.ts">list</a>({ ...params }) -> MeterResponsesCursor</code>
- <code title="delete /organizations/{orgId}/meters/{id}">client.meters.<a href="./src/resources/meters.ts">delete</a>(id, { ...params }) -> MeterResponse</code>

# NotificationConfigurations

Types:

- <code><a href="./src/resources/notification-configurations.ts">NotificationConfigurationResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/notifications/configurations">client.notificationConfigurations.<a href="./src/resources/notification-configurations.ts">create</a>({ ...params }) -> NotificationConfigurationResponse</code>
- <code title="get /organizations/{orgId}/notifications/configurations/{id}">client.notificationConfigurations.<a href="./src/resources/notification-configurations.ts">retrieve</a>(id, { ...params }) -> NotificationConfigurationResponse</code>
- <code title="put /organizations/{orgId}/notifications/configurations/{id}">client.notificationConfigurations.<a href="./src/resources/notification-configurations.ts">update</a>(id, { ...params }) -> NotificationConfigurationResponse</code>
- <code title="get /organizations/{orgId}/notifications/configurations">client.notificationConfigurations.<a href="./src/resources/notification-configurations.ts">list</a>({ ...params }) -> NotificationConfigurationResponsesCursor</code>
- <code title="delete /organizations/{orgId}/notifications/configurations/{id}">client.notificationConfigurations.<a href="./src/resources/notification-configurations.ts">delete</a>(id, { ...params }) -> NotificationConfigurationResponse</code>

# OrganizationConfig

Types:

- <code><a href="./src/resources/organization-config.ts">OrganizationConfigRequest</a></code>
- <code><a href="./src/resources/organization-config.ts">OrganizationConfigResponse</a></code>

Methods:

- <code title="get /organizations/{orgId}/organizationconfig">client.organizationConfig.<a href="./src/resources/organization-config.ts">retrieve</a>({ ...params }) -> OrganizationConfigResponse</code>
- <code title="put /organizations/{orgId}/organizationconfig">client.organizationConfig.<a href="./src/resources/organization-config.ts">update</a>({ ...params }) -> OrganizationConfigResponse</code>

# PermissionPolicies

Types:

- <code><a href="./src/resources/permission-policies.ts">PermissionPolicyResponse</a></code>
- <code><a href="./src/resources/permission-policies.ts">PermissionStatementResponse</a></code>
- <code><a href="./src/resources/permission-policies.ts">PrincipalPermissionRequest</a></code>
- <code><a href="./src/resources/permission-policies.ts">PermissionPolicyAddToServiceUserResponse</a></code>
- <code><a href="./src/resources/permission-policies.ts">PermissionPolicyAddToSupportUserResponse</a></code>
- <code><a href="./src/resources/permission-policies.ts">PermissionPolicyAddToUserResponse</a></code>
- <code><a href="./src/resources/permission-policies.ts">PermissionPolicyAddToUserGroupResponse</a></code>
- <code><a href="./src/resources/permission-policies.ts">PermissionPolicyRemoveFromServiceUserResponse</a></code>
- <code><a href="./src/resources/permission-policies.ts">PermissionPolicyRemoveFromSupportUserResponse</a></code>
- <code><a href="./src/resources/permission-policies.ts">PermissionPolicyRemoveFromUserResponse</a></code>
- <code><a href="./src/resources/permission-policies.ts">PermissionPolicyRemoveFromUserGroupResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/permissionpolicies">client.permissionPolicies.<a href="./src/resources/permission-policies.ts">create</a>({ ...params }) -> PermissionPolicyResponse</code>
- <code title="get /organizations/{orgId}/permissionpolicies/{id}">client.permissionPolicies.<a href="./src/resources/permission-policies.ts">retrieve</a>(id, { ...params }) -> PermissionPolicyResponse</code>
- <code title="put /organizations/{orgId}/permissionpolicies/{id}">client.permissionPolicies.<a href="./src/resources/permission-policies.ts">update</a>(id, { ...params }) -> PermissionPolicyResponse</code>
- <code title="get /organizations/{orgId}/permissionpolicies">client.permissionPolicies.<a href="./src/resources/permission-policies.ts">list</a>({ ...params }) -> PermissionPolicyResponsesCursor</code>
- <code title="delete /organizations/{orgId}/permissionpolicies/{id}">client.permissionPolicies.<a href="./src/resources/permission-policies.ts">delete</a>(id, { ...params }) -> PermissionPolicyResponse</code>
- <code title="post /organizations/{orgId}/permissionpolicies/{permissionPolicyId}/addtoserviceuser">client.permissionPolicies.<a href="./src/resources/permission-policies.ts">addToServiceUser</a>(permissionPolicyID, { ...params }) -> PermissionPolicyAddToServiceUserResponse</code>
- <code title="post /organizations/{orgId}/permissionpolicies/{permissionPolicyId}/addtosupportusers">client.permissionPolicies.<a href="./src/resources/permission-policies.ts">addToSupportUser</a>(permissionPolicyID, { ...params }) -> PermissionPolicyAddToSupportUserResponse</code>
- <code title="post /organizations/{orgId}/permissionpolicies/{permissionPolicyId}/addtouser">client.permissionPolicies.<a href="./src/resources/permission-policies.ts">addToUser</a>(permissionPolicyID, { ...params }) -> PermissionPolicyAddToUserResponse</code>
- <code title="post /organizations/{orgId}/permissionpolicies/{permissionPolicyId}/addtousergroup">client.permissionPolicies.<a href="./src/resources/permission-policies.ts">addToUserGroup</a>(permissionPolicyID, { ...params }) -> PermissionPolicyAddToUserGroupResponse</code>
- <code title="post /organizations/{orgId}/permissionpolicies/{permissionPolicyId}/removefromserviceuser">client.permissionPolicies.<a href="./src/resources/permission-policies.ts">removeFromServiceUser</a>(permissionPolicyID, { ...params }) -> PermissionPolicyRemoveFromServiceUserResponse</code>
- <code title="post /organizations/{orgId}/permissionpolicies/{permissionPolicyId}/removefromsupportusers">client.permissionPolicies.<a href="./src/resources/permission-policies.ts">removeFromSupportUser</a>(permissionPolicyID, { ...params }) -> PermissionPolicyRemoveFromSupportUserResponse</code>
- <code title="post /organizations/{orgId}/permissionpolicies/{permissionPolicyId}/removefromuser">client.permissionPolicies.<a href="./src/resources/permission-policies.ts">removeFromUser</a>(permissionPolicyID, { ...params }) -> PermissionPolicyRemoveFromUserResponse</code>
- <code title="post /organizations/{orgId}/permissionpolicies/{permissionPolicyId}/removefromusergroup">client.permissionPolicies.<a href="./src/resources/permission-policies.ts">removeFromUserGroup</a>(permissionPolicyID, { ...params }) -> PermissionPolicyRemoveFromUserGroupResponse</code>

# Plans

Types:

- <code><a href="./src/resources/plans.ts">PlanResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/plans">client.plans.<a href="./src/resources/plans.ts">create</a>({ ...params }) -> PlanResponse</code>
- <code title="get /organizations/{orgId}/plans/{id}">client.plans.<a href="./src/resources/plans.ts">retrieve</a>(id, { ...params }) -> PlanResponse</code>
- <code title="put /organizations/{orgId}/plans/{id}">client.plans.<a href="./src/resources/plans.ts">update</a>(id, { ...params }) -> PlanResponse</code>
- <code title="get /organizations/{orgId}/plans">client.plans.<a href="./src/resources/plans.ts">list</a>({ ...params }) -> PlanResponsesCursor</code>
- <code title="delete /organizations/{orgId}/plans/{id}">client.plans.<a href="./src/resources/plans.ts">delete</a>(id, { ...params }) -> PlanResponse</code>

# PlanGroups

Types:

- <code><a href="./src/resources/plan-groups.ts">PlanGroupResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/plangroups">client.planGroups.<a href="./src/resources/plan-groups.ts">create</a>({ ...params }) -> PlanGroupResponse</code>
- <code title="get /organizations/{orgId}/plangroups/{id}">client.planGroups.<a href="./src/resources/plan-groups.ts">retrieve</a>(id, { ...params }) -> PlanGroupResponse</code>
- <code title="put /organizations/{orgId}/plangroups/{id}">client.planGroups.<a href="./src/resources/plan-groups.ts">update</a>(id, { ...params }) -> PlanGroupResponse</code>
- <code title="get /organizations/{orgId}/plangroups">client.planGroups.<a href="./src/resources/plan-groups.ts">list</a>({ ...params }) -> PlanGroupResponsesCursor</code>
- <code title="delete /organizations/{orgId}/plangroups/{id}">client.planGroups.<a href="./src/resources/plan-groups.ts">delete</a>(id, { ...params }) -> PlanGroupResponse</code>

# PlanGroupLinks

Types:

- <code><a href="./src/resources/plan-group-links.ts">PlanGroupLinkResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/plangrouplinks">client.planGroupLinks.<a href="./src/resources/plan-group-links.ts">create</a>({ ...params }) -> PlanGroupLinkResponse</code>
- <code title="get /organizations/{orgId}/plangrouplinks/{id}">client.planGroupLinks.<a href="./src/resources/plan-group-links.ts">retrieve</a>(id, { ...params }) -> PlanGroupLinkResponse</code>
- <code title="put /organizations/{orgId}/plangrouplinks/{id}">client.planGroupLinks.<a href="./src/resources/plan-group-links.ts">update</a>(id, { ...params }) -> PlanGroupLinkResponse</code>
- <code title="get /organizations/{orgId}/plangrouplinks">client.planGroupLinks.<a href="./src/resources/plan-group-links.ts">list</a>({ ...params }) -> PlanGroupLinkResponsesCursor</code>
- <code title="delete /organizations/{orgId}/plangrouplinks/{id}">client.planGroupLinks.<a href="./src/resources/plan-group-links.ts">delete</a>(id, { ...params }) -> PlanGroupLinkResponse</code>

# PlanTemplates

Types:

- <code><a href="./src/resources/plan-templates.ts">PlanTemplateResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/plantemplates">client.planTemplates.<a href="./src/resources/plan-templates.ts">create</a>({ ...params }) -> PlanTemplateResponse</code>
- <code title="get /organizations/{orgId}/plantemplates/{id}">client.planTemplates.<a href="./src/resources/plan-templates.ts">retrieve</a>(id, { ...params }) -> PlanTemplateResponse</code>
- <code title="put /organizations/{orgId}/plantemplates/{id}">client.planTemplates.<a href="./src/resources/plan-templates.ts">update</a>(id, { ...params }) -> PlanTemplateResponse</code>
- <code title="get /organizations/{orgId}/plantemplates">client.planTemplates.<a href="./src/resources/plan-templates.ts">list</a>({ ...params }) -> PlanTemplateResponsesCursor</code>
- <code title="delete /organizations/{orgId}/plantemplates/{id}">client.planTemplates.<a href="./src/resources/plan-templates.ts">delete</a>(id, { ...params }) -> PlanTemplateResponse</code>

# Pricings

Types:

- <code><a href="./src/resources/pricings.ts">PricingResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/pricings">client.pricings.<a href="./src/resources/pricings.ts">create</a>({ ...params }) -> PricingResponse</code>
- <code title="get /organizations/{orgId}/pricings/{id}">client.pricings.<a href="./src/resources/pricings.ts">retrieve</a>(id, { ...params }) -> PricingResponse</code>
- <code title="put /organizations/{orgId}/pricings/{id}">client.pricings.<a href="./src/resources/pricings.ts">update</a>(id, { ...params }) -> PricingResponse</code>
- <code title="get /organizations/{orgId}/pricings">client.pricings.<a href="./src/resources/pricings.ts">list</a>({ ...params }) -> PricingResponsesCursor</code>
- <code title="delete /organizations/{orgId}/pricings/{id}">client.pricings.<a href="./src/resources/pricings.ts">delete</a>(id, { ...params }) -> PricingResponse</code>

# Products

Types:

- <code><a href="./src/resources/products.ts">ProductResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/products">client.products.<a href="./src/resources/products.ts">create</a>({ ...params }) -> ProductResponse</code>
- <code title="get /organizations/{orgId}/products/{id}">client.products.<a href="./src/resources/products.ts">retrieve</a>(id, { ...params }) -> ProductResponse</code>
- <code title="put /organizations/{orgId}/products/{id}">client.products.<a href="./src/resources/products.ts">update</a>(id, { ...params }) -> ProductResponse</code>
- <code title="get /organizations/{orgId}/products">client.products.<a href="./src/resources/products.ts">list</a>({ ...params }) -> ProductResponsesCursor</code>
- <code title="delete /organizations/{orgId}/products/{id}">client.products.<a href="./src/resources/products.ts">delete</a>(id, { ...params }) -> ProductResponse</code>

# ResourceGroups

Types:

- <code><a href="./src/resources/resource-groups.ts">ResourceGroupResponse</a></code>
- <code><a href="./src/resources/resource-groups.ts">ResourceGroupListContentsResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/resourcegroups/{type}">client.resourceGroups.<a href="./src/resources/resource-groups.ts">create</a>(type, { ...params }) -> ResourceGroupResponse</code>
- <code title="get /organizations/{orgId}/resourcegroups/{type}/{id}">client.resourceGroups.<a href="./src/resources/resource-groups.ts">retrieve</a>(id, { ...params }) -> ResourceGroupResponse</code>
- <code title="put /organizations/{orgId}/resourcegroups/{type}/{id}">client.resourceGroups.<a href="./src/resources/resource-groups.ts">update</a>(id, { ...params }) -> ResourceGroupResponse</code>
- <code title="get /organizations/{orgId}/resourcegroups/{type}">client.resourceGroups.<a href="./src/resources/resource-groups.ts">list</a>(type, { ...params }) -> ResourceGroupResponsesCursor</code>
- <code title="delete /organizations/{orgId}/resourcegroups/{type}/{id}">client.resourceGroups.<a href="./src/resources/resource-groups.ts">delete</a>(id, { ...params }) -> ResourceGroupResponse</code>
- <code title="post /organizations/{orgId}/resourcegroups/{type}/{resourceGroupId}/addresource">client.resourceGroups.<a href="./src/resources/resource-groups.ts">addResource</a>(resourceGroupID, { ...params }) -> ResourceGroupResponse</code>
- <code title="post /organizations/{orgId}/resourcegroups/{type}/{resourceGroupId}/contents">client.resourceGroups.<a href="./src/resources/resource-groups.ts">listContents</a>(resourceGroupID, { ...params }) -> ResourceGroupListContentsResponsesCursor</code>
- <code title="get /organizations/{orgId}/resourcegroups/{type}/{resourceGroupId}/permissions">client.resourceGroups.<a href="./src/resources/resource-groups.ts">listPermissions</a>(resourceGroupID, { ...params }) -> PermissionPolicyResponsesCursor</code>
- <code title="post /organizations/{orgId}/resourcegroups/{type}/{resourceGroupId}/removeresource">client.resourceGroups.<a href="./src/resources/resource-groups.ts">removeResource</a>(resourceGroupID, { ...params }) -> ResourceGroupResponse</code>

# ScheduledEventConfigurations

Types:

- <code><a href="./src/resources/scheduled-event-configurations.ts">ScheduledEventConfigurationResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/scheduledevents/configurations">client.scheduledEventConfigurations.<a href="./src/resources/scheduled-event-configurations.ts">create</a>({ ...params }) -> ScheduledEventConfigurationResponse</code>
- <code title="get /organizations/{orgId}/scheduledevents/configurations/{id}">client.scheduledEventConfigurations.<a href="./src/resources/scheduled-event-configurations.ts">retrieve</a>(id, { ...params }) -> ScheduledEventConfigurationResponse</code>
- <code title="put /organizations/{orgId}/scheduledevents/configurations/{id}">client.scheduledEventConfigurations.<a href="./src/resources/scheduled-event-configurations.ts">update</a>(id, { ...params }) -> ScheduledEventConfigurationResponse</code>
- <code title="get /organizations/{orgId}/scheduledevents/configurations">client.scheduledEventConfigurations.<a href="./src/resources/scheduled-event-configurations.ts">list</a>({ ...params }) -> ScheduledEventConfigurationResponsesCursor</code>
- <code title="delete /organizations/{orgId}/scheduledevents/configurations/{id}">client.scheduledEventConfigurations.<a href="./src/resources/scheduled-event-configurations.ts">delete</a>(id, { ...params }) -> ScheduledEventConfigurationResponse</code>

# Statements

Types:

- <code><a href="./src/resources/statements/statements.ts">ObjectURLResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/bills/{id}/statement/csv">client.statements.<a href="./src/resources/statements/statements.ts">createCsv</a>(id, { ...params }) -> ObjectURLResponse</code>
- <code title="get /organizations/{orgId}/bills/{id}/statement/csv">client.statements.<a href="./src/resources/statements/statements.ts">getCsv</a>(id, { ...params }) -> ObjectURLResponse</code>
- <code title="get /organizations/{orgId}/bills/{id}/statement/json">client.statements.<a href="./src/resources/statements/statements.ts">getJson</a>(id, { ...params }) -> ObjectURLResponse</code>

## StatementJobs

Types:

- <code><a href="./src/resources/statements/statement-jobs.ts">StatementJobResponse</a></code>
- <code><a href="./src/resources/statements/statement-jobs.ts">StatementJobCreateBatchResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/statementjobs">client.statements.statementJobs.<a href="./src/resources/statements/statement-jobs.ts">create</a>({ ...params }) -> StatementJobResponse</code>
- <code title="get /organizations/{orgId}/statementjobs/{id}">client.statements.statementJobs.<a href="./src/resources/statements/statement-jobs.ts">retrieve</a>(id, { ...params }) -> StatementJobResponse</code>
- <code title="get /organizations/{orgId}/statementjobs">client.statements.statementJobs.<a href="./src/resources/statements/statement-jobs.ts">list</a>({ ...params }) -> StatementJobResponsesCursor</code>
- <code title="post /organizations/{orgId}/statementjobs/{id}/cancel">client.statements.statementJobs.<a href="./src/resources/statements/statement-jobs.ts">cancel</a>(id, { ...params }) -> StatementJobResponse</code>
- <code title="post /organizations/{orgId}/statementjobs/batch">client.statements.statementJobs.<a href="./src/resources/statements/statement-jobs.ts">createBatch</a>({ ...params }) -> StatementJobCreateBatchResponse</code>

## StatementDefinitions

Types:

- <code><a href="./src/resources/statements/statement-definitions.ts">StatementDefinitionResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/statementdefinitions">client.statements.statementDefinitions.<a href="./src/resources/statements/statement-definitions.ts">create</a>({ ...params }) -> StatementDefinitionResponse</code>
- <code title="get /organizations/{orgId}/statementdefinitions/{id}">client.statements.statementDefinitions.<a href="./src/resources/statements/statement-definitions.ts">retrieve</a>(id, { ...params }) -> StatementDefinitionResponse</code>
- <code title="put /organizations/{orgId}/statementdefinitions/{id}">client.statements.statementDefinitions.<a href="./src/resources/statements/statement-definitions.ts">update</a>(id, { ...params }) -> StatementDefinitionResponse</code>
- <code title="get /organizations/{orgId}/statementdefinitions">client.statements.statementDefinitions.<a href="./src/resources/statements/statement-definitions.ts">list</a>({ ...params }) -> StatementDefinitionResponsesCursor</code>
- <code title="delete /organizations/{orgId}/statementdefinitions/{id}">client.statements.statementDefinitions.<a href="./src/resources/statements/statement-definitions.ts">delete</a>(id, { ...params }) -> StatementDefinitionResponse</code>

# TransactionTypes

Types:

- <code><a href="./src/resources/transaction-types.ts">TransactionTypeResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/picklists/transactiontypes">client.transactionTypes.<a href="./src/resources/transaction-types.ts">create</a>({ ...params }) -> TransactionTypeResponse</code>
- <code title="get /organizations/{orgId}/picklists/transactiontypes/{id}">client.transactionTypes.<a href="./src/resources/transaction-types.ts">retrieve</a>(id, { ...params }) -> TransactionTypeResponse</code>
- <code title="put /organizations/{orgId}/picklists/transactiontypes/{id}">client.transactionTypes.<a href="./src/resources/transaction-types.ts">update</a>(id, { ...params }) -> TransactionTypeResponse</code>
- <code title="get /organizations/{orgId}/picklists/transactiontypes">client.transactionTypes.<a href="./src/resources/transaction-types.ts">list</a>({ ...params }) -> TransactionTypeResponsesCursor</code>
- <code title="delete /organizations/{orgId}/picklists/transactiontypes/{id}">client.transactionTypes.<a href="./src/resources/transaction-types.ts">delete</a>(id, { ...params }) -> TransactionTypeResponse</code>

# Usage

Types:

- <code><a href="./src/resources/usage/usage.ts">DownloadURLResponse</a></code>
- <code><a href="./src/resources/usage/usage.ts">MeasurementRequest</a></code>
- <code><a href="./src/resources/usage/usage.ts">SubmitMeasurementsRequest</a></code>
- <code><a href="./src/resources/usage/usage.ts">SubmitMeasurementsResponse</a></code>
- <code><a href="./src/resources/usage/usage.ts">UsageQueryResponse</a></code>

Methods:

- <code title="get /organizations/{orgId}/measurements/failedIngest/getDownloadUrl">client.usage.<a href="./src/resources/usage/usage.ts">getFailedIngestDownloadURL</a>({ ...params }) -> DownloadURLResponse</code>
- <code title="post /organizations/{orgId}/usage/query">client.usage.<a href="./src/resources/usage/usage.ts">query</a>({ ...params }) -> UsageQueryResponse</code>
- <code title="post /organizations/{orgId}/measurements">client.usage.<a href="./src/resources/usage/usage.ts">submit</a>({ ...params }) -> SubmitMeasurementsResponse</code>

## FileUploads

Types:

- <code><a href="./src/resources/usage/file-uploads/file-uploads.ts">FileUploadGenerateUploadURLResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/fileuploads/measurements/generateUploadUrl">client.usage.fileUploads.<a href="./src/resources/usage/file-uploads/file-uploads.ts">generateUploadURL</a>({ ...params }) -> FileUploadGenerateUploadURLResponse</code>

### Jobs

Types:

- <code><a href="./src/resources/usage/file-uploads/jobs.ts">FileUploadJobResponse</a></code>
- <code><a href="./src/resources/usage/file-uploads/jobs.ts">JobGetOriginalDownloadURLResponse</a></code>

Methods:

- <code title="get /organizations/{orgId}/fileuploads/measurements/jobs/{id}">client.usage.fileUploads.jobs.<a href="./src/resources/usage/file-uploads/jobs.ts">retrieve</a>(id, { ...params }) -> FileUploadJobResponse</code>
- <code title="get /organizations/{orgId}/fileuploads/measurements/jobs">client.usage.fileUploads.jobs.<a href="./src/resources/usage/file-uploads/jobs.ts">list</a>({ ...params }) -> FileUploadJobResponsesCursor</code>
- <code title="get /organizations/{orgId}/fileuploads/measurements/jobs/{id}/original">client.usage.fileUploads.jobs.<a href="./src/resources/usage/file-uploads/jobs.ts">getOriginalDownloadURL</a>(id, { ...params }) -> JobGetOriginalDownloadURLResponse</code>

# Users

Types:

- <code><a href="./src/resources/users/users.ts">UserResponse</a></code>
- <code><a href="./src/resources/users/users.ts">UserMeResponse</a></code>

Methods:

- <code title="get /organizations/{orgId}/users/{id}">client.users.<a href="./src/resources/users/users.ts">retrieve</a>(id, { ...params }) -> UserResponse</code>
- <code title="put /organizations/{orgId}/users/{id}">client.users.<a href="./src/resources/users/users.ts">update</a>(id, { ...params }) -> UserResponse</code>
- <code title="get /organizations/{orgId}/users">client.users.<a href="./src/resources/users/users.ts">list</a>({ ...params }) -> UserResponsesCursor</code>
- <code title="get /organizations/{orgId}/users/{id}/permissions">client.users.<a href="./src/resources/users/users.ts">getPermissions</a>(id, { ...params }) -> PermissionPolicyResponse</code>
- <code title="get /organizations/{orgId}/users/{id}/usergroups">client.users.<a href="./src/resources/users/users.ts">getUserGroups</a>(id, { ...params }) -> ResourceGroupResponse</code>
- <code title="get /organizations/{orgId}/users/me">client.users.<a href="./src/resources/users/users.ts">me</a>({ ...params }) -> UserMeResponse</code>
- <code title="put /organizations/{orgId}/users/{id}/password/resend">client.users.<a href="./src/resources/users/users.ts">resendPassword</a>(id, { ...params }) -> void</code>

## Invitations

Types:

- <code><a href="./src/resources/users/invitations.ts">InvitationResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/invitations">client.users.invitations.<a href="./src/resources/users/invitations.ts">create</a>({ ...params }) -> InvitationResponse</code>
- <code title="get /organizations/{orgId}/invitations/{id}">client.users.invitations.<a href="./src/resources/users/invitations.ts">retrieve</a>(id, { ...params }) -> InvitationResponse</code>
- <code title="get /organizations/{orgId}/invitations">client.users.invitations.<a href="./src/resources/users/invitations.ts">list</a>({ ...params }) -> InvitationResponsesCursor</code>

# Webhooks

Types:

- <code><a href="./src/resources/webhooks.ts">M3terSignedCredentialsRequest</a></code>
- <code><a href="./src/resources/webhooks.ts">M3terSignedCredentialsResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">Webhook</a></code>

Methods:

- <code title="post /organizations/{orgId}/integrationdestinations/webhooks">client.webhooks.<a href="./src/resources/webhooks.ts">create</a>({ ...params }) -> Webhook</code>
- <code title="get /organizations/{orgId}/integrationdestinations/webhooks/{id}">client.webhooks.<a href="./src/resources/webhooks.ts">retrieve</a>(id, { ...params }) -> Webhook</code>
- <code title="put /organizations/{orgId}/integrationdestinations/webhooks/{id}">client.webhooks.<a href="./src/resources/webhooks.ts">update</a>(id, { ...params }) -> Webhook</code>
- <code title="get /organizations/{orgId}/integrationdestinations/webhooks">client.webhooks.<a href="./src/resources/webhooks.ts">list</a>({ ...params }) -> WebhooksCursor</code>
- <code title="delete /organizations/{orgId}/integrationdestinations/webhooks/{id}">client.webhooks.<a href="./src/resources/webhooks.ts">delete</a>(id, { ...params }) -> Webhook</code>
- <code title="put /organizations/{orgId}/integrationdestinations/webhooks/{id}/active">client.webhooks.<a href="./src/resources/webhooks.ts">setActive</a>(id, { ...params }) -> Webhook</code>
