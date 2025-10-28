# Migration guide

This guide outlines the changes and steps needed to migrate your codebase to the latest version of the m3ter SDK.

The main changes are that the SDK now relies on the [builtin Web fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) instead of `node-fetch` and has zero dependencies.

## Migration CLI

Most programs will only need minimal changes, but to assist there is a migration tool that will automatically update your code for the new version.
To use it, upgrade the `m3ter-sdk` package, then run `./node_modules/.bin/m3ter-sdk migrate ./your/src/folders` to update your code.
To preview the changes without writing them to disk, run the tool with `--dry`.

## Environment requirements

The minimum supported runtime and tooling versions are now:

- Node.js 20 LTS (Most recent non-EOL Node version)
- TypeScript 4.9
- Jest 28

## Breaking changes

### Web types for `withResponse`, `asResponse`, and `APIError.headers`

Because we now use the builtin Web fetch API on all platforms, if you wrote code that used `withResponse` or `asResponse` and then accessed `node-fetch`-specific properties on the result, you will need to switch to standardized alternatives.
For example, `body` is now a [Web `ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream) rather than a [node `Readable`](https://nodejs.org/api/stream.html#readable-streams).

```ts
// Before:
const res = await client.example.retrieve('string/with/slash').asResponse();
res.body.pipe(process.stdout);

// After:
import { Readable } from 'node:stream';
const res = await client.example.retrieve('string/with/slash').asResponse();
Readable.fromWeb(res.body).pipe(process.stdout);
```

Additionally, the `headers` property on `APIError` objects is now an instance of the Web [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers) class. It was previously defined as `Record<string, string | null | undefined>`.

### Named path parameters

Methods that take multiple path parameters typically now use named instead of positional arguments for better clarity and to prevent a footgun where it was easy to accidentally pass arguments in the incorrect order.

For example, for a method that would call an endpoint at `/v1/parents/{parent_id}/children/{child_id}`, only the _last_ path parameter is positional and the rest must be passed as named arguments.

```ts
// Before
client.parents.children.retrieve('p_123', 'c_456');

// After
client.parents.children.retrieve('c_456', { parent_id: 'p_123' });
```

<details>

<summary>This affects the following methods</summary>

- `client.accounts.retrieve()`
- `client.accounts.update()`
- `client.accounts.delete()`
- `client.accounts.endDateBillingEntities()`
- `client.accounts.getChildren()`
- `client.accountPlans.retrieve()`
- `client.accountPlans.update()`
- `client.accountPlans.delete()`
- `client.aggregations.retrieve()`
- `client.aggregations.update()`
- `client.aggregations.delete()`
- `client.balances.retrieve()`
- `client.balances.update()`
- `client.balances.delete()`
- `client.balances.transactions.create()`
- `client.balances.transactions.list()`
- `client.balances.transactions.summary()`
- `client.bills.retrieve()`
- `client.bills.delete()`
- `client.bills.latestByAccount()`
- `client.bills.lock()`
- `client.bills.updateStatus()`
- `client.bills.creditLineItems.create()`
- `client.bills.creditLineItems.retrieve()`
- `client.bills.creditLineItems.update()`
- `client.bills.creditLineItems.list()`
- `client.bills.creditLineItems.delete()`
- `client.bills.debitLineItems.create()`
- `client.bills.debitLineItems.retrieve()`
- `client.bills.debitLineItems.update()`
- `client.bills.debitLineItems.list()`
- `client.bills.debitLineItems.delete()`
- `client.bills.lineItems.retrieve()`
- `client.bills.lineItems.list()`
- `client.commitments.retrieve()`
- `client.commitments.update()`
- `client.commitments.delete()`
- `client.billJobs.retrieve()`
- `client.billJobs.cancel()`
- `client.compoundAggregations.retrieve()`
- `client.compoundAggregations.update()`
- `client.compoundAggregations.delete()`
- `client.contracts.retrieve()`
- `client.contracts.update()`
- `client.contracts.delete()`
- `client.contracts.endDateBillingEntities()`
- `client.counters.retrieve()`
- `client.counters.update()`
- `client.counters.delete()`
- `client.counterAdjustments.retrieve()`
- `client.counterAdjustments.update()`
- `client.counterAdjustments.delete()`
- `client.counterPricings.retrieve()`
- `client.counterPricings.update()`
- `client.counterPricings.delete()`
- `client.creditReasons.retrieve()`
- `client.creditReasons.update()`
- `client.creditReasons.delete()`
- `client.currencies.retrieve()`
- `client.currencies.update()`
- `client.currencies.delete()`
- `client.dataExports.destinations.retrieve()`
- `client.dataExports.destinations.update()`
- `client.dataExports.destinations.delete()`
- `client.dataExports.jobs.retrieve()`
- `client.dataExports.jobs.getDownloadURL()`
- `client.dataExports.schedules.retrieve()`
- `client.dataExports.schedules.update()`
- `client.dataExports.schedules.delete()`
- `client.debitReasons.retrieve()`
- `client.debitReasons.update()`
- `client.debitReasons.delete()`
- `client.events.retrieve()`
- `client.externalMappings.retrieve()`
- `client.externalMappings.update()`
- `client.externalMappings.delete()`
- `client.externalMappings.listByExternalEntity()`
- `client.externalMappings.listByM3terEntity()`
- `client.integrationConfigurations.retrieve()`
- `client.integrationConfigurations.update()`
- `client.integrationConfigurations.delete()`
- `client.integrationConfigurations.enable()`
- `client.integrationConfigurations.getByEntity()`
- `client.meters.retrieve()`
- `client.meters.update()`
- `client.meters.delete()`
- `client.notificationConfigurations.retrieve()`
- `client.notificationConfigurations.update()`
- `client.notificationConfigurations.delete()`
- `client.permissionPolicies.retrieve()`
- `client.permissionPolicies.update()`
- `client.permissionPolicies.delete()`
- `client.permissionPolicies.addToServiceUser()`
- `client.permissionPolicies.addToSupportUser()`
- `client.permissionPolicies.addToUser()`
- `client.permissionPolicies.addToUserGroup()`
- `client.permissionPolicies.removeFromServiceUser()`
- `client.permissionPolicies.removeFromSupportUser()`
- `client.permissionPolicies.removeFromUser()`
- `client.permissionPolicies.removeFromUserGroup()`
- `client.plans.retrieve()`
- `client.plans.update()`
- `client.plans.delete()`
- `client.planGroups.retrieve()`
- `client.planGroups.update()`
- `client.planGroups.delete()`
- `client.planGroupLinks.retrieve()`
- `client.planGroupLinks.update()`
- `client.planGroupLinks.delete()`
- `client.planTemplates.retrieve()`
- `client.planTemplates.update()`
- `client.planTemplates.delete()`
- `client.pricings.retrieve()`
- `client.pricings.update()`
- `client.pricings.delete()`
- `client.products.retrieve()`
- `client.products.update()`
- `client.products.delete()`
- `client.resourceGroups.create()`
- `client.resourceGroups.retrieve()`
- `client.resourceGroups.update()`
- `client.resourceGroups.list()`
- `client.resourceGroups.delete()`
- `client.resourceGroups.addResource()`
- `client.resourceGroups.listContents()`
- `client.resourceGroups.listPermissions()`
- `client.resourceGroups.removeResource()`
- `client.scheduledEventConfigurations.retrieve()`
- `client.scheduledEventConfigurations.update()`
- `client.scheduledEventConfigurations.delete()`
- `client.statements.createCsv()`
- `client.statements.getCsv()`
- `client.statements.getJson()`
- `client.statements.statementJobs.retrieve()`
- `client.statements.statementJobs.cancel()`
- `client.statements.statementDefinitions.retrieve()`
- `client.statements.statementDefinitions.update()`
- `client.statements.statementDefinitions.delete()`
- `client.transactionTypes.retrieve()`
- `client.transactionTypes.update()`
- `client.transactionTypes.delete()`
- `client.usage.fileUploads.jobs.retrieve()`
- `client.usage.fileUploads.jobs.getOriginalDownloadURL()`
- `client.users.retrieve()`
- `client.users.update()`
- `client.users.getPermissions()`
- `client.users.getUserGroups()`
- `client.users.resendPassword()`
- `client.users.invitations.retrieve()`
- `client.webhooks.retrieve()`
- `client.webhooks.update()`
- `client.webhooks.delete()`
- `client.webhooks.setActive()`

</details>

### URI encoded path parameters

Path params are now properly encoded by default. If you were manually encoding path parameters before giving them to the SDK, you must now stop doing that and pass the
param without any encoding applied.

For example:

```diff
- client.example.retrieve(encodeURIComponent('string/with/slash'))
+ client.example.retrieve('string/with/slash') // retrieves /example/string%2Fwith%2Fslash
```

Previously without the `encodeURIComponent()` call we would have used the path `/example/string/with/slash`; now we'll use `/example/string%2Fwith%2Fslash`.

### Removed request options overloads

When making requests with no required body, query or header parameters, you must now explicitly pass `null`, `undefined` or an empty object `{}` to the params argument in order to customise request options.

```diff
client.example.list();
client.example.list({}, { headers: { ... } });
client.example.list(null, { headers: { ... } });
client.example.list(undefined, { headers: { ... } });
- client.example.list({ headers: { ... } });
+ client.example.list({}, { headers: { ... } });
```

<details>

<summary>This affects the following methods</summary>

- `client.accounts.retrieve()`
- `client.accounts.list()`
- `client.accounts.delete()`
- `client.accounts.getChildren()`
- `client.accounts.search()`
- `client.accountPlans.retrieve()`
- `client.accountPlans.list()`
- `client.accountPlans.delete()`
- `client.aggregations.retrieve()`
- `client.aggregations.list()`
- `client.aggregations.delete()`
- `client.balances.retrieve()`
- `client.balances.list()`
- `client.balances.delete()`
- `client.balances.transactions.list()`
- `client.balances.transactions.summary()`
- `client.bills.retrieve()`
- `client.bills.list()`
- `client.bills.delete()`
- `client.bills.latestByAccount()`
- `client.bills.lock()`
- `client.bills.search()`
- `client.bills.creditLineItems.list()`
- `client.bills.debitLineItems.list()`
- `client.bills.lineItems.list()`
- `client.billConfig.retrieve()`
- `client.billConfig.update()`
- `client.commitments.retrieve()`
- `client.commitments.list()`
- `client.commitments.delete()`
- `client.commitments.search()`
- `client.billJobs.create()`
- `client.billJobs.retrieve()`
- `client.billJobs.list()`
- `client.billJobs.cancel()`
- `client.compoundAggregations.retrieve()`
- `client.compoundAggregations.list()`
- `client.compoundAggregations.delete()`
- `client.contracts.retrieve()`
- `client.contracts.list()`
- `client.contracts.delete()`
- `client.counters.retrieve()`
- `client.counters.list()`
- `client.counters.delete()`
- `client.counterAdjustments.retrieve()`
- `client.counterAdjustments.list()`
- `client.counterAdjustments.delete()`
- `client.counterPricings.retrieve()`
- `client.counterPricings.list()`
- `client.counterPricings.delete()`
- `client.creditReasons.retrieve()`
- `client.creditReasons.list()`
- `client.creditReasons.delete()`
- `client.currencies.retrieve()`
- `client.currencies.list()`
- `client.currencies.delete()`
- `client.customFields.retrieve()`
- `client.customFields.update()`
- `client.dataExports.destinations.retrieve()`
- `client.dataExports.destinations.list()`
- `client.dataExports.destinations.delete()`
- `client.dataExports.jobs.retrieve()`
- `client.dataExports.jobs.list()`
- `client.dataExports.jobs.getDownloadURL()`
- `client.dataExports.schedules.retrieve()`
- `client.dataExports.schedules.list()`
- `client.dataExports.schedules.delete()`
- `client.debitReasons.retrieve()`
- `client.debitReasons.list()`
- `client.debitReasons.delete()`
- `client.events.retrieve()`
- `client.events.list()`
- `client.events.getFields()`
- `client.events.getTypes()`
- `client.externalMappings.retrieve()`
- `client.externalMappings.list()`
- `client.externalMappings.delete()`
- `client.integrationConfigurations.retrieve()`
- `client.integrationConfigurations.list()`
- `client.integrationConfigurations.delete()`
- `client.integrationConfigurations.enable()`
- `client.integrationConfigurations.getByEntity()`
- `client.meters.retrieve()`
- `client.meters.list()`
- `client.meters.delete()`
- `client.notificationConfigurations.retrieve()`
- `client.notificationConfigurations.list()`
- `client.notificationConfigurations.delete()`
- `client.organizationConfig.retrieve()`
- `client.permissionPolicies.retrieve()`
- `client.permissionPolicies.list()`
- `client.permissionPolicies.delete()`
- `client.permissionPolicies.removeFromSupportUser()`
- `client.plans.retrieve()`
- `client.plans.list()`
- `client.plans.delete()`
- `client.planGroups.retrieve()`
- `client.planGroups.list()`
- `client.planGroups.delete()`
- `client.planGroupLinks.retrieve()`
- `client.planGroupLinks.list()`
- `client.planGroupLinks.delete()`
- `client.planTemplates.retrieve()`
- `client.planTemplates.list()`
- `client.planTemplates.delete()`
- `client.pricings.retrieve()`
- `client.pricings.list()`
- `client.pricings.delete()`
- `client.products.retrieve()`
- `client.products.list()`
- `client.products.delete()`
- `client.resourceGroups.list()`
- `client.scheduledEventConfigurations.retrieve()`
- `client.scheduledEventConfigurations.list()`
- `client.scheduledEventConfigurations.delete()`
- `client.statements.createCsv()`
- `client.statements.getCsv()`
- `client.statements.getJson()`
- `client.statements.statementJobs.retrieve()`
- `client.statements.statementJobs.list()`
- `client.statements.statementJobs.cancel()`
- `client.statements.statementDefinitions.retrieve()`
- `client.statements.statementDefinitions.list()`
- `client.statements.statementDefinitions.delete()`
- `client.transactionTypes.retrieve()`
- `client.transactionTypes.list()`
- `client.transactionTypes.delete()`
- `client.usage.getFailedIngestDownloadURL()`
- `client.usage.query()`
- `client.usage.fileUploads.jobs.retrieve()`
- `client.usage.fileUploads.jobs.list()`
- `client.usage.fileUploads.jobs.getOriginalDownloadURL()`
- `client.users.retrieve()`
- `client.users.list()`
- `client.users.getPermissions()`
- `client.users.getUserGroups()`
- `client.users.me()`
- `client.users.resendPassword()`
- `client.users.invitations.retrieve()`
- `client.users.invitations.list()`
- `client.webhooks.retrieve()`
- `client.webhooks.list()`
- `client.webhooks.delete()`
- `client.webhooks.setActive()`

</details>

### Removed `httpAgent` in favor of `fetchOptions`

The `httpAgent` client option has been removed in favor of a [platform-specific `fetchOptions` property](https://github.com/stainless-sdks/m3ter-sdk-typescript#fetch-options).
This change was made as `httpAgent` relied on `node:http` agents which are not supported by any runtime's builtin fetch implementation.

If you were using `httpAgent` for proxy support, check out the [new proxy documentation](https://github.com/stainless-sdks/m3ter-sdk-typescript#configuring-proxies).

Before:

```ts
import M3ter from 'm3ter-sdk';
import http from 'http';
import { HttpsProxyAgent } from 'https-proxy-agent';

// Configure the default for all requests:
const client = new M3ter({
  apiKey: 'My API Key',
  apiSecret: 'My API Secret',
  orgID: 'My Org ID',
  httpAgent: new HttpsProxyAgent(process.env.PROXY_URL),
});
```

After:

```ts
import M3ter from 'm3ter-sdk';
import * as undici from 'undici';

const proxyAgent = new undici.ProxyAgent(process.env.PROXY_URL);
const client = new M3ter({
  fetchOptions: {
    dispatcher: proxyAgent,
  },
});
```

### Changed exports

#### Refactor of `m3ter-sdk/core`, `error`, `pagination`, `resource` and `uploads`

Much of the `m3ter-sdk/core` file was intended to be internal-only but it was publicly accessible, as such it has been refactored and split up into internal and public files, with public-facing code moved to a new `core` folder and internal code moving to the private `internal` folder.

At the same time, we moved some public-facing files which were previously at the top level into `core` to make the file structure cleaner and more clear:

```typescript
// Before
import 'm3ter-sdk/error';
import 'm3ter-sdk/pagination';
import 'm3ter-sdk/resource';
import 'm3ter-sdk/uploads';

// After
import 'm3ter-sdk/core/error';
import 'm3ter-sdk/core/pagination';
import 'm3ter-sdk/core/resource';
import 'm3ter-sdk/core/uploads';
```

If you were relying on anything that was only exported from `m3ter-sdk/core` and is also not accessible anywhere else, please open an issue and we'll consider adding it to the public API.

#### Resource classes

Previously under certain circumstances it was possible to import resource classes like `Authentication` directly from the root of the package. This was never valid at the type level and only worked in CommonJS files.
Now you must always either reference them as static class properties or import them directly from the files in which they are defined.

```typescript
// Before
const { Authentication } = require('m3ter-sdk');

// After
const { M3ter } = require('m3ter-sdk');
M3ter.Authentication; // or import directly from m3ter-sdk/resources/authentication
```

#### Cleaned up `uploads` exports

As part of the `core` refactor, `m3ter-sdk/uploads` was moved to `m3ter-sdk/core/uploads`
and the following exports were removed, as they were not intended to be a part of the public API:

- `fileFromPath`
- `BlobPart`
- `BlobLike`
- `FileLike`
- `ResponseLike`
- `isResponseLike`
- `isBlobLike`
- `isFileLike`
- `isUploadable`
- `isMultipartBody`
- `maybeMultipartFormRequestOptions`
- `multipartFormRequestOptions`
- `createForm`

Note that `Uploadable` & `toFile` **are** still exported:

```typescript
import { type Uploadable, toFile } from 'm3ter-sdk/core/uploads';
```

#### `APIClient`

The `APIClient` base client class has been removed as it is no longer needed. If you were importing this class then you must now import the main client class:

```typescript
// Before
import { APIClient } from 'm3ter-sdk/core';

// After
import { M3ter } from 'm3ter-sdk';
```

### File handling

The deprecated `fileFromPath` helper has been removed in favor of native Node.js streams:

```ts
// Before
M3ter.fileFromPath('path/to/file');

// After
import fs from 'fs';
fs.createReadStream('path/to/file');
```

Note that this function previously only worked on Node.js. If you're using Bun, you can use [`Bun.file`](https://bun.sh/docs/api/file-io) instead.

### Shims removal

Previously you could configure the types that the SDK used like this:

```ts
// Tell TypeScript and the package to use the global Web fetch instead of node-fetch.
import 'm3ter-sdk/shims/web';
import M3ter from 'm3ter-sdk';
```

The `m3ter-sdk/shims` imports have been removed. Your global types must now be [correctly configured](#minimum-types-requirements).

### Pagination changes

The `for await` syntax **is not affected**. This still works as-is:

```ts
// Automatically fetches more pages as needed.
for await (const productResponse of client.products.list()) {
  console.log(productResponse);
}
```

The interface for manually paginating through list results has been simplified:

```ts
// Before
page.nextPageParams();
page.nextPageInfo();
// Required manually handling { url } | { params } type

// After
page.nextPageRequestOptions();
```

#### Removed unnecessary classes

Page classes for individual methods are now type aliases:

```ts
// Before
export class ProductResponsesCursor extends Cursor<ProductResponse> {}

// After
export type ProductResponsesCursor = Cursor<ProductResponse>;
```

If you were importing these classes at runtime, you'll need to switch to importing the base class or only import them at the type-level.

### `m3ter-sdk/src` directory removed

Previously IDEs may have auto-completed imports from the `m3ter-sdk/src` directory, however this
directory was only included for an improved go-to-definition experience and should not have been used at runtime.

If you have any `m3ter-sdk/src/*` imports, you will need to replace them with `m3ter-sdk/*`.

```ts
// Before
import M3ter from 'm3ter-sdk/src';

// After
import M3ter from 'm3ter-sdk';
```

## TypeScript troubleshooting

When referencing the library after updating, you may encounter new type errors related to JS features like private properties or fetch classes like Request, Response, and Headers.
To resolve these issues, configure your tsconfig.json and install the appropriate `@types` packages for your runtime environment using the guidelines below:

### Browsers

`tsconfig.json`

```jsonc
{
  "target": "ES2018", // note: we recommend ES2020 or higher
  "lib": ["DOM", "DOM.Iterable", "ES2018"]
}
```

### Node.js

`tsconfig.json`

```jsonc
{
  "target": "ES2018" // note: we recommend ES2020 or higher
}
```

`package.json`

```json
{
  "devDependencies": {
    "@types/node": ">= 20"
  }
}
```

### Cloudflare Workers

`tsconfig.json`

```jsonc
{
  "target": "ES2018", // note: we recommend ES2020 or higher
  "lib": ["ES2020"], // <- needed by @cloudflare/workers-types
  "types": ["@cloudflare/workers-types"]
}
```

`package.json`

```json
{
  "devDependencies": {
    "@cloudflare/workers-types": ">= 0.20221111.0"
  }
}
```

### Bun

`tsconfig.json`

```jsonc
{
  "target": "ES2018" // note: we recommend ES2020 or higher
}
```

`package.json`

```json
{
  "devDependencies": {
    "@types/bun": ">= 1.2.0"
  }
}
```
