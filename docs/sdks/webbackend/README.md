# webBackend

## Overview

Endpoints for the Airbyte web application. Those APIs should not be called outside the web application implementation and are not
guaranteeing any backwards compatibility.


### Available Operations

* [getStateType](#getstatetype) - Fetch the current state type for a connection.
* [webBackendCheckUpdates](#webbackendcheckupdates) - Returns a summary of source and destination definitions that could be updated.
* [webBackendCreateConnection](#webbackendcreateconnection) - Create a connection
* [webBackendGetConnection](#webbackendgetconnection) - Get a connection
* [webBackendGetWorkspaceState](#webbackendgetworkspacestate) - Returns the current state of a workspace
* [webBackendListConnectionsForWorkspace](#webbackendlistconnectionsforworkspace) - Returns all non-deleted connections for a workspace.
* [webBackendListGeographies](#webbackendlistgeographies) - Returns available geographies can be selected to run data syncs in a particular geography.
The 'auto' entry indicates that the sync will be automatically assigned to a geography according
to the platform default behavior. Entries other than 'auto' are two-letter country codes that
follow the ISO 3166-1 alpha-2 standard.

* [webBackendUpdateConnection](#webbackendupdateconnection) - Update a connection

## getStateType

Fetch the current state type for a connection.

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { GetStateTypeResponse } from "airbyte-test/dist/sdk/models/operations";
import { ConnectionStateType } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.webBackend.getStateType({
  connectionId: "044f65fe-72dc-4407-bd0c-c3f408efc15c",
}).then((res: GetStateTypeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [shared.ConnectionIdRequestBody](../../models/shared/connectionidrequestbody.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.GetStateTypeResponse](../../models/operations/getstatetyperesponse.md)>**


## webBackendCheckUpdates

Returns a summary of source and destination definitions that could be updated.

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { WebBackendCheckUpdatesResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.webBackend.webBackendCheckUpdates().then((res: WebBackendCheckUpdatesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.WebBackendCheckUpdatesResponse](../../models/operations/webbackendcheckupdatesresponse.md)>**


## webBackendCreateConnection

Create a connection

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { WebBackendCreateConnectionResponse } from "airbyte-test/dist/sdk/models/operations";
import {
  ConnectionScheduleDataBasicScheduleTimeUnit,
  ConnectionScheduleTimeUnit,
  ConnectionScheduleType,
  ConnectionStatus,
  DestinationSyncMode,
  FieldTransformTransformType,
  Geography,
  JobStatus,
  NamespaceDefinitionType,
  NonBreakingChangesPreference,
  OperatorNormalizationOption,
  OperatorType,
  OperatorWebhookWebhookType,
  SchemaChange,
  StreamTransformTransformType,
  SyncMode,
} from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.webBackend.webBackendCreateConnection({
  destinationId: "eb4d6e1e-ae0f-475a-adf2-acab58b991c9",
  geography: Geography.Auto,
  name: "Mable Stroman",
  namespaceDefinition: NamespaceDefinitionType.Destination,
  namespaceFormat: "${SOURCE_NAMESPACE}",
  nonBreakingChangesPreference: NonBreakingChangesPreference.Disable,
  operationIds: [
    "61e7421c-be6d-4950-af0e-a930b69f7ac2",
    "f72f8850-0904-4911-a082-07888ec66183",
  ],
  operations: [
    {
      name: "Terence Mertz",
      operatorConfiguration: {
        dbt: {
          dbtArguments: "unde",
          dockerImage: "debitis",
          gitRepoBranch: "quidem",
          gitRepoUrl: "magnam",
        },
        normalization: {
          option: OperatorNormalizationOption.Basic,
        },
        operatorType: OperatorType.Normalization,
        webhook: {
          dbtCloud: {
            accountId: 881095,
            jobId: 800761,
          },
          executionBody: "sunt",
          executionUrl: "voluptas",
          webhookConfigId: "faf75b0b-532a-44da-b7cb-aaf4452c4842",
          webhookType: OperatorWebhookWebhookType.DbtCloud,
        },
      },
      workspaceId: "c9b2ad32-dafe-481a-88f4-444573fecd47",
    },
    {
      name: "Vivian Donnelly",
      operatorConfiguration: {
        dbt: {
          dbtArguments: "dolor",
          dockerImage: "placeat",
          gitRepoBranch: "quos",
          gitRepoUrl: "sed",
        },
        normalization: {
          option: OperatorNormalizationOption.Basic,
        },
        operatorType: OperatorType.Normalization,
        webhook: {
          dbtCloud: {
            accountId: 617060,
            jobId: 191202,
          },
          executionBody: "nihil",
          executionUrl: "unde",
          webhookConfigId: "aa69cd5f-bcf7-49da-98a7-822bf95894e6",
          webhookType: OperatorWebhookWebhookType.DbtCloud,
        },
      },
      workspaceId: "861adb55-f9e5-4d75-9c9f-e8f7502bfdc3",
    },
    {
      name: "Veronica Abshire",
      operatorConfiguration: {
        dbt: {
          dbtArguments: "illo",
          dockerImage: "a",
          gitRepoBranch: "et",
          gitRepoUrl: "molestiae",
        },
        normalization: {
          option: OperatorNormalizationOption.Basic,
        },
        operatorType: OperatorType.Dbt,
        webhook: {
          dbtCloud: {
            accountId: 294314,
            jobId: 261219,
          },
          executionBody: "nostrum",
          executionUrl: "ex",
          webhookConfigId: "379f3fb2-7e21-4f86-a657-b36fc6b9f587",
          webhookType: OperatorWebhookWebhookType.DbtCloud,
        },
      },
      workspaceId: "ce525c67-641a-4831-ae50-47b4c21ccb42",
    },
  ],
  prefix: "amet",
  resourceRequirements: {
    cpuLimit: "culpa",
    cpuRequest: "facilis",
    memoryLimit: "minus",
    memoryRequest: "vero",
  },
  schedule: {
    timeUnit: ConnectionScheduleTimeUnit.Weeks,
    units: 607242,
  },
  scheduleData: {
    basicSchedule: {
      timeUnit: ConnectionScheduleDataBasicScheduleTimeUnit.Minutes,
      units: 939131,
    },
    cron: {
      cronExpression: "fuga",
      cronTimeZone: "est",
    },
  },
  scheduleType: ConnectionScheduleType.Cron,
  sourceCatalogId: "dd88e71f-6c48-4252-9777-1e7fd074009e",
  sourceId: "f8d29de1-dd70-497b-9da0-8c57fa6c78a2",
  status: ConnectionStatus.Active,
  syncCatalog: {
    streams: [
      {
        config: {
          aliasName: "accusamus",
          cursorField: [
            "excepturi",
          ],
          destinationSyncMode: DestinationSyncMode.AppendDedup,
          fieldSelectionEnabled: false,
          primaryKey: [
            [
              "repudiandae",
              "minus",
              "officia",
              "laboriosam",
            ],
            [
              "cupiditate",
            ],
            [
              "aliquam",
            ],
          ],
          selected: false,
          selectedFields: [
            {
              fieldPath: [
                "dicta",
                "magnam",
                "doloremque",
              ],
            },
            {
              fieldPath: [
                "suscipit",
                "eius",
                "maiores",
              ],
            },
            {
              fieldPath: [
                "quos",
                "id",
                "officiis",
                "ab",
              ],
            },
          ],
          suggested: false,
          syncMode: SyncMode.FullRefresh,
        },
        stream: {
          defaultCursorField: [
            "itaque",
          ],
          jsonSchema: {},
          name: "Donald Ernser",
          namespace: "a",
          sourceDefinedCursor: false,
          sourceDefinedPrimaryKey: [
            [
              "recusandae",
              "numquam",
            ],
          ],
          supportedSyncModes: [
            SyncMode.Incremental,
            SyncMode.Incremental,
            SyncMode.FullRefresh,
          ],
        },
      },
      {
        config: {
          aliasName: "quas",
          cursorField: [
            "enim",
            "corporis",
          ],
          destinationSyncMode: DestinationSyncMode.Overwrite,
          fieldSelectionEnabled: false,
          primaryKey: [
            [
              "voluptate",
              "nesciunt",
            ],
            [
              "animi",
            ],
          ],
          selected: false,
          selectedFields: [
            {
              fieldPath: [
                "temporibus",
                "porro",
              ],
            },
            {
              fieldPath: [
                "commodi",
                "autem",
                "praesentium",
              ],
            },
            {
              fieldPath: [
                "quisquam",
              ],
            },
          ],
          suggested: false,
          syncMode: SyncMode.Incremental,
        },
        stream: {
          defaultCursorField: [
            "eaque",
            "delectus",
          ],
          jsonSchema: {},
          name: "Kim Wiegand",
          namespace: "a",
          sourceDefinedCursor: false,
          sourceDefinedPrimaryKey: [
            [
              "earum",
              "occaecati",
            ],
            [
              "quidem",
            ],
            [
              "laborum",
              "molestias",
              "a",
            ],
          ],
          supportedSyncModes: [
            SyncMode.FullRefresh,
            SyncMode.Incremental,
          ],
        },
      },
    ],
  },
}).then((res: WebBackendCreateConnectionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [shared.WebBackendConnectionCreate](../../models/shared/webbackendconnectioncreate.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.WebBackendCreateConnectionResponse](../../models/operations/webbackendcreateconnectionresponse.md)>**


## webBackendGetConnection

Get a connection

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { WebBackendGetConnectionResponse } from "airbyte-test/dist/sdk/models/operations";
import {
  ConnectionScheduleDataBasicScheduleTimeUnit,
  ConnectionScheduleTimeUnit,
  ConnectionScheduleType,
  ConnectionStatus,
  DestinationSyncMode,
  FieldTransformTransformType,
  Geography,
  JobStatus,
  NamespaceDefinitionType,
  NonBreakingChangesPreference,
  OperatorNormalizationOption,
  OperatorType,
  OperatorWebhookWebhookType,
  SchemaChange,
  StreamTransformTransformType,
  SyncMode,
} from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.webBackend.webBackendGetConnection({
  connectionId: "46e2c330-9db0-4536-99e7-5ca006f5392c",
  withRefreshedCatalog: false,
}).then((res: WebBackendGetConnectionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [shared.WebBackendConnectionRequestBody](../../models/shared/webbackendconnectionrequestbody.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.WebBackendGetConnectionResponse](../../models/operations/webbackendgetconnectionresponse.md)>**


## webBackendGetWorkspaceState

Returns the current state of a workspace

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { WebBackendGetWorkspaceStateResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.webBackend.webBackendGetWorkspaceState({
  workspaceId: "11a25a8b-f92f-4974-a8ad-9a9f8bf82211",
}).then((res: WebBackendGetWorkspaceStateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [shared.WebBackendWorkspaceState](../../models/shared/webbackendworkspacestate.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.WebBackendGetWorkspaceStateResponse](../../models/operations/webbackendgetworkspacestateresponse.md)>**


## webBackendListConnectionsForWorkspace

Returns all non-deleted connections for a workspace.

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { WebBackendListConnectionsForWorkspaceResponse } from "airbyte-test/dist/sdk/models/operations";
import {
  ConnectionScheduleDataBasicScheduleTimeUnit,
  ConnectionScheduleType,
  ConnectionStatus,
  JobStatus,
  SchemaChange,
} from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.webBackend.webBackendListConnectionsForWorkspace({
  destinationId: [
    "5359d983-87f7-4a79-8d72-cd2484da2172",
  ],
  sourceId: [
    "f2ac41ef-5725-4f11-a9ac-1e41d8a23c23",
    "e34f2dfa-4a19-47f6-9e92-2151fe171209",
    "9853e9f5-43d8-4544-b9ee-224460443bc1",
  ],
  workspaceId: "54188c2f-56e8-45da-b832-eabd617c3b0d",
}).then((res: WebBackendListConnectionsForWorkspaceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [shared.WebBackendConnectionListRequestBody](../../models/shared/webbackendconnectionlistrequestbody.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.WebBackendListConnectionsForWorkspaceResponse](../../models/operations/webbackendlistconnectionsforworkspaceresponse.md)>**


## webBackendListGeographies

Returns all available geographies in which a data sync can run.

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { WebBackendListGeographiesResponse } from "airbyte-test/dist/sdk/models/operations";
import { Geography } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.webBackend.webBackendListGeographies().then((res: WebBackendListGeographiesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.WebBackendListGeographiesResponse](../../models/operations/webbackendlistgeographiesresponse.md)>**


## webBackendUpdateConnection

Apply a patch-style update to a connection. Only fields present on the update request body will be updated.
Any operations that lack an ID will be created. Then, the newly created operationId will be applied to the
connection along with the rest of the operationIds in the request body.
Apply a patch-style update to a connection. Only fields present on the update request body will be updated.
Note that if a catalog is present in the request body, the connection's entire catalog will be replaced
with the catalog from the request. This means that to modify a single stream, the entire new catalog
containing the updated stream needs to be sent.


### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { WebBackendUpdateConnectionResponse } from "airbyte-test/dist/sdk/models/operations";
import {
  ConnectionScheduleDataBasicScheduleTimeUnit,
  ConnectionScheduleTimeUnit,
  ConnectionScheduleType,
  ConnectionStatus,
  DestinationSyncMode,
  FieldTransformTransformType,
  Geography,
  JobStatus,
  NamespaceDefinitionType,
  NonBreakingChangesPreference,
  OperatorNormalizationOption,
  OperatorType,
  OperatorWebhookWebhookType,
  SchemaChange,
  StreamTransformTransformType,
  SyncMode,
} from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.webBackend.webBackendUpdateConnection({
  connectionId: "51a44bf0-1bad-4870-ad46-082bfbdc41ff",
  geography: Geography.Us,
  name: "Clifford Torp",
  namespaceDefinition: NamespaceDefinitionType.Customformat,
  namespaceFormat: "${SOURCE_NAMESPACE}",
  nonBreakingChangesPreference: NonBreakingChangesPreference.Ignore,
  notifySchemaChanges: false,
  operations: [
    {
      name: "Warren Rutherford",
      operationId: "5d17638f-1edb-4783-99ec-c5cb860f8cd5",
      operatorConfiguration: {
        dbt: {
          dbtArguments: "praesentium",
          dockerImage: "perferendis",
          gitRepoBranch: "soluta",
          gitRepoUrl: "animi",
        },
        normalization: {
          option: OperatorNormalizationOption.Basic,
        },
        operatorType: OperatorType.Dbt,
        webhook: {
          dbtCloud: {
            accountId: 197872,
            jobId: 559715,
          },
          executionBody: "sunt",
          executionUrl: "aperiam",
          webhookConfigId: "e4fe4447-297c-4d3b-9dd3-bbce247b7684",
          webhookType: OperatorWebhookWebhookType.DbtCloud,
        },
      },
      workspaceId: "eff50126-d71c-4ffb-90eb-74b8421953b4",
    },
    {
      name: "Melody Stoltenberg",
      operationId: "43159d33-e595-43c0-8113-9863aa41e6c3",
      operatorConfiguration: {
        dbt: {
          dbtArguments: "ab",
          dockerImage: "maxime",
          gitRepoBranch: "porro",
          gitRepoUrl: "explicabo",
        },
        normalization: {
          option: OperatorNormalizationOption.Basic,
        },
        operatorType: OperatorType.Webhook,
        webhook: {
          dbtCloud: {
            accountId: 120600,
            jobId: 942436,
          },
          executionBody: "porro",
          executionUrl: "tempore",
          webhookConfigId: "51c9a41f-fbe9-4cbd-b95e-e65e076cc7ab",
          webhookType: OperatorWebhookWebhookType.DbtCloud,
        },
      },
      workspaceId: "f616ea5c-7164-4193-8b90-f2e09d19d2fc",
    },
    {
      name: "Faith Mosciski",
      operationId: "e105944b-935d-4237-a72f-90849d6aed4a",
      operatorConfiguration: {
        dbt: {
          dbtArguments: "eveniet",
          dockerImage: "optio",
          gitRepoBranch: "soluta",
          gitRepoUrl: "dignissimos",
        },
        normalization: {
          option: OperatorNormalizationOption.Basic,
        },
        operatorType: OperatorType.Dbt,
        webhook: {
          dbtCloud: {
            accountId: 204877,
            jobId: 458597,
          },
          executionBody: "placeat",
          executionUrl: "at",
          webhookConfigId: "9222c9ff-5749-41aa-bfa2-e761f0ca4d45",
          webhookType: OperatorWebhookWebhookType.DbtCloud,
        },
      },
      workspaceId: "6ef1031e-6899-4f0c-a001-e22cd55cc058",
    },
    {
      name: "Hattie Botsford",
      operationId: "d76d971f-c820-4c65-b037-bb8e0cc88518",
      operatorConfiguration: {
        dbt: {
          dbtArguments: "molestiae",
          dockerImage: "officiis",
          gitRepoBranch: "labore",
          gitRepoUrl: "nulla",
        },
        normalization: {
          option: OperatorNormalizationOption.Basic,
        },
        operatorType: OperatorType.Webhook,
        webhook: {
          dbtCloud: {
            accountId: 9687,
            jobId: 284927,
          },
          executionBody: "laborum",
          executionUrl: "hic",
          webhookConfigId: "28c5dddb-46aa-41cf-96d8-28da01319112",
          webhookType: OperatorWebhookWebhookType.DbtCloud,
        },
      },
      workspaceId: "9646645c-1d81-4f29-842f-569b7aff0ea2",
    },
  ],
  prefix: "eos",
  resourceRequirements: {
    cpuLimit: "veritatis",
    cpuRequest: "vel",
    memoryLimit: "placeat",
    memoryRequest: "libero",
  },
  schedule: {
    timeUnit: ConnectionScheduleTimeUnit.Months,
    units: 57719,
  },
  scheduleData: {
    basicSchedule: {
      timeUnit: ConnectionScheduleDataBasicScheduleTimeUnit.Days,
      units: 82503,
    },
    cron: {
      cronExpression: "harum",
      cronTimeZone: "cumque",
    },
  },
  scheduleType: ConnectionScheduleType.Manual,
  skipReset: false,
  sourceCatalogId: "63e279a3-b084-4da9-9257-d04f40847a74",
  status: ConnectionStatus.Active,
  syncCatalog: {
    streams: [
      {
        config: {
          aliasName: "blanditiis",
          cursorField: [
            "eius",
            "cupiditate",
          ],
          destinationSyncMode: DestinationSyncMode.Overwrite,
          fieldSelectionEnabled: false,
          primaryKey: [
            [
              "facere",
              "earum",
              "debitis",
            ],
            [
              "reiciendis",
              "ex",
              "tempore",
              "provident",
            ],
            [
              "soluta",
              "maxime",
              "commodi",
            ],
            [
              "corporis",
            ],
          ],
          selected: false,
          selectedFields: [
            {
              fieldPath: [
                "eveniet",
              ],
            },
            {
              fieldPath: [
                "asperiores",
                "temporibus",
                "delectus",
              ],
            },
          ],
          suggested: false,
          syncMode: SyncMode.FullRefresh,
        },
        stream: {
          defaultCursorField: [
            "porro",
            "dolores",
          ],
          jsonSchema: {},
          name: "Ms. Mario Sawayn DDS",
          namespace: "accusantium",
          sourceDefinedCursor: false,
          sourceDefinedPrimaryKey: [
            [
              "et",
              "fugit",
              "quos",
            ],
            [
              "voluptate",
              "autem",
            ],
          ],
          supportedSyncModes: [
            SyncMode.Incremental,
            SyncMode.Incremental,
          ],
        },
      },
      {
        config: {
          aliasName: "earum",
          cursorField: [
            "assumenda",
            "doloremque",
          ],
          destinationSyncMode: DestinationSyncMode.AppendDedup,
          fieldSelectionEnabled: false,
          primaryKey: [
            [
              "vel",
              "itaque",
              "nulla",
              "excepturi",
            ],
            [
              "in",
              "nesciunt",
              "temporibus",
              "temporibus",
            ],
          ],
          selected: false,
          selectedFields: [
            {
              fieldPath: [
                "ut",
              ],
            },
            {
              fieldPath: [
                "dignissimos",
                "illo",
              ],
            },
          ],
          suggested: false,
          syncMode: SyncMode.FullRefresh,
        },
        stream: {
          defaultCursorField: [
            "occaecati",
          ],
          jsonSchema: {},
          name: "Nelson Walker",
          namespace: "doloremque",
          sourceDefinedCursor: false,
          sourceDefinedPrimaryKey: [
            [
              "minus",
            ],
            [
              "id",
              "architecto",
            ],
            [
              "perspiciatis",
              "quod",
              "magni",
              "incidunt",
            ],
            [
              "quisquam",
            ],
          ],
          supportedSyncModes: [
            SyncMode.Incremental,
            SyncMode.FullRefresh,
          ],
        },
      },
      {
        config: {
          aliasName: "aliquid",
          cursorField: [
            "illo",
            "reiciendis",
            "ipsum",
          ],
          destinationSyncMode: DestinationSyncMode.Append,
          fieldSelectionEnabled: false,
          primaryKey: [
            [
              "non",
              "facere",
            ],
            [
              "exercitationem",
              "quidem",
              "ea",
              "molestiae",
            ],
            [
              "excepturi",
            ],
            [
              "iste",
              "eaque",
              "reiciendis",
            ],
          ],
          selected: false,
          selectedFields: [
            {
              fieldPath: [
                "est",
              ],
            },
            {
              fieldPath: [
                "nobis",
                "expedita",
              ],
            },
          ],
          suggested: false,
          syncMode: SyncMode.FullRefresh,
        },
        stream: {
          defaultCursorField: [
            "atque",
          ],
          jsonSchema: {},
          name: "Jordan Hegmann",
          namespace: "laboriosam",
          sourceDefinedCursor: false,
          sourceDefinedPrimaryKey: [
            [
              "perspiciatis",
              "dicta",
            ],
          ],
          supportedSyncModes: [
            SyncMode.FullRefresh,
            SyncMode.FullRefresh,
            SyncMode.FullRefresh,
            SyncMode.Incremental,
          ],
        },
      },
      {
        config: {
          aliasName: "sequi",
          cursorField: [
            "consequuntur",
            "quae",
            "veniam",
            "sint",
          ],
          destinationSyncMode: DestinationSyncMode.AppendDedup,
          fieldSelectionEnabled: false,
          primaryKey: [
            [
              "nesciunt",
              "maiores",
              "veniam",
              "autem",
            ],
            [
              "officiis",
              "aperiam",
            ],
            [
              "sed",
              "corporis",
              "consequuntur",
              "odio",
            ],
          ],
          selected: false,
          selectedFields: [
            {
              fieldPath: [
                "nobis",
                "beatae",
              ],
            },
            {
              fieldPath: [
                "ex",
                "consequuntur",
                "delectus",
                "nobis",
              ],
            },
          ],
          suggested: false,
          syncMode: SyncMode.Incremental,
        },
        stream: {
          defaultCursorField: [
            "optio",
            "debitis",
            "architecto",
          ],
          jsonSchema: {},
          name: "David Casper III",
          namespace: "quod",
          sourceDefinedCursor: false,
          sourceDefinedPrimaryKey: [
            [
              "aspernatur",
            ],
            [
              "sint",
            ],
            [
              "deleniti",
              "earum",
              "consequuntur",
              "enim",
            ],
            [
              "quibusdam",
              "accusantium",
              "nulla",
              "inventore",
            ],
          ],
          supportedSyncModes: [
            SyncMode.Incremental,
            SyncMode.Incremental,
            SyncMode.FullRefresh,
          ],
        },
      },
    ],
  },
}).then((res: WebBackendUpdateConnectionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [shared.WebBackendConnectionUpdate](../../models/shared/webbackendconnectionupdate.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.WebBackendUpdateConnectionResponse](../../models/operations/webbackendupdateconnectionresponse.md)>**

