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
import { ConnectionStateTypeEnum } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.webBackend.getStateType({
  connectionId: "4444573f-ecd4-4735-bf63-c8209379aa69",
}).then((res: GetStateTypeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

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

## webBackendCreateConnection

Create a connection

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { WebBackendCreateConnectionResponse } from "airbyte-test/dist/sdk/models/operations";
import {
  ConnectionScheduleDataBasicScheduleTimeUnitEnum,
  ConnectionScheduleTimeUnitEnum,
  ConnectionScheduleTypeEnum,
  ConnectionStatusEnum,
  DestinationSyncModeEnum,
  FieldTransformTransformTypeEnum,
  GeographyEnum,
  JobStatusEnum,
  NamespaceDefinitionTypeEnum,
  NonBreakingChangesPreferenceEnum,
  OperatorNormalizationOptionEnum,
  OperatorTypeEnum,
  OperatorWebhookWebhookTypeEnum,
  SchemaChangeEnum,
  StreamTransformTransformTypeEnum,
  SyncModeEnum,
} from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.webBackend.webBackendCreateConnection({
  destinationId: "cd5fbcf7-9da1-48a7-822b-f95894e6861a",
  geography: GeographyEnum.Eu,
  name: "Pedro Haley",
  namespaceDefinition: NamespaceDefinitionTypeEnum.Customformat,
  namespaceFormat: "${SOURCE_NAMESPACE}",
  nonBreakingChangesPreference: NonBreakingChangesPreferenceEnum.Ignore,
  operationIds: [
    "751c9fe8-f750-42bf-9c34-50841f176445",
    "6379f3fb-27e2-41f8-a265-7b36fc6b9f58",
    "7ce525c6-7641-4a83-92e5-047b4c21ccb4",
    "23abcdc9-1faa-4bdd-88e7-1f6c48252d77",
  ],
  operations: [
    {
      name: "Olive Klocko",
      operatorConfiguration: {
        dbt: {
          dbtArguments: "perferendis",
          dockerImage: "in",
          gitRepoBranch: "eius",
          gitRepoUrl: "aut",
        },
        normalization: {
          option: OperatorNormalizationOptionEnum.Basic,
        },
        operatorType: OperatorTypeEnum.Normalization,
        webhook: {
          dbtCloud: {
            accountId: 611485,
            jobId: 881413,
          },
          executionBody: "repellat",
          executionUrl: "voluptatum",
          webhookConfigId: "d29de1dd-7097-4b5d-a08c-57fa6c78a216",
          webhookType: OperatorWebhookWebhookTypeEnum.DbtCloud,
        },
      },
      workspaceId: "e19bafec-a619-4149-8140-b64ff8ae170e",
    },
    {
      name: "Donald Ernser",
      operatorConfiguration: {
        dbt: {
          dbtArguments: "a",
          dockerImage: "neque",
          gitRepoBranch: "nihil",
          gitRepoUrl: "recusandae",
        },
        normalization: {
          option: OperatorNormalizationOptionEnum.Basic,
        },
        operatorType: OperatorTypeEnum.Normalization,
        webhook: {
          dbtCloud: {
            accountId: 652013,
            jobId: 651504,
          },
          executionBody: "blanditiis",
          executionUrl: "suscipit",
          webhookConfigId: "85559667-32aa-45dc-b668-2cb70f8cfd5f",
          webhookType: OperatorWebhookWebhookTypeEnum.DbtCloud,
        },
      },
      workspaceId: "b6e91b9a-9f74-4846-a2c3-309db0536d9e",
    },
  ],
  prefix: "nihil",
  resourceRequirements: {
    cpuLimit: "ad",
    cpuRequest: "eligendi",
    memoryLimit: "fuga",
    memoryRequest: "consequatur",
  },
  schedule: {
    timeUnit: ConnectionScheduleTimeUnitEnum.Minutes,
    units: 434632,
  },
  scheduleData: {
    basicSchedule: {
      timeUnit: ConnectionScheduleDataBasicScheduleTimeUnitEnum.Months,
      units: 337581,
    },
    cron: {
      cronExpression: "dolorem",
      cronTimeZone: "omnis",
    },
  },
  scheduleType: ConnectionScheduleTypeEnum.Manual,
  sourceCatalogId: "c11a25a8-bf92-4f97-828a-d9a9f8bf8221",
  sourceId: "125359d9-8387-4f7a-b9cd-72cd2484da21",
  status: ConnectionStatusEnum.Inactive,
  syncCatalog: {
    streams: [
      {
        config: {
          aliasName: "omnis",
          cursorField: [
            "qui",
            "similique",
            "eligendi",
            "numquam",
          ],
          destinationSyncMode: DestinationSyncModeEnum.Append,
          fieldSelectionEnabled: false,
          primaryKey: [
            [
              "exercitationem",
              "nihil",
              "quia",
              "quis",
            ],
            [
              "dicta",
              "dicta",
              "eum",
              "sint",
            ],
            [
              "nobis",
              "quasi",
              "itaque",
            ],
            [
              "vitae",
              "temporibus",
            ],
          ],
          selected: false,
          selectedFields: [
            {
              fieldPath: [
                "aspernatur",
                "neque",
                "impedit",
              ],
            },
            {
              fieldPath: [
                "neque",
              ],
            },
            {
              fieldPath: [
                "amet",
                "labore",
                "repellat",
                "eos",
              ],
            },
          ],
          suggested: false,
          syncMode: SyncModeEnum.Incremental,
        },
        stream: {
          defaultCursorField: [
            "mollitia",
            "quaerat",
            "officia",
            "sunt",
          ],
          jsonSchema: {
            "quam": "a",
            "iure": "nulla",
            "recusandae": "iste",
          },
          name: "Judy Bosco DVM",
          namespace: "saepe",
          sourceDefinedCursor: false,
          sourceDefinedPrimaryKey: [
            [
              "architecto",
              "sed",
            ],
          ],
          supportedSyncModes: [
            SyncModeEnum.Incremental,
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

## webBackendGetConnection

Get a connection

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { WebBackendGetConnectionResponse } from "airbyte-test/dist/sdk/models/operations";
import {
  ConnectionScheduleDataBasicScheduleTimeUnitEnum,
  ConnectionScheduleTimeUnitEnum,
  ConnectionScheduleTypeEnum,
  ConnectionStatusEnum,
  DestinationSyncModeEnum,
  FieldTransformTransformTypeEnum,
  GeographyEnum,
  JobStatusEnum,
  NamespaceDefinitionTypeEnum,
  NonBreakingChangesPreferenceEnum,
  OperatorNormalizationOptionEnum,
  OperatorTypeEnum,
  OperatorWebhookWebhookTypeEnum,
  SchemaChangeEnum,
  StreamTransformTransformTypeEnum,
  SyncModeEnum,
} from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.webBackend.webBackendGetConnection({
  connectionId: "9853e9f5-43d8-4544-b9ee-224460443bc1",
  withRefreshedCatalog: false,
}).then((res: WebBackendGetConnectionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## webBackendGetWorkspaceState

Returns the current state of a workspace

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { WebBackendGetWorkspaceStateResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.webBackend.webBackendGetWorkspaceState({
  workspaceId: "54188c2f-56e8-45da-b832-eabd617c3b0d",
}).then((res: WebBackendGetWorkspaceStateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## webBackendListConnectionsForWorkspace

Returns all non-deleted connections for a workspace.

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { WebBackendListConnectionsForWorkspaceResponse } from "airbyte-test/dist/sdk/models/operations";
import {
  ConnectionScheduleDataBasicScheduleTimeUnitEnum,
  ConnectionScheduleTypeEnum,
  ConnectionStatusEnum,
  JobStatusEnum,
  SchemaChangeEnum,
} from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.webBackend.webBackendListConnectionsForWorkspace({
  destinationId: [
    "1a44bf01-bad8-4706-9460-82bfbdc41ff5",
    "d4e2ae4f-b5cb-435d-9763-8f1edb78359e",
  ],
  sourceId: [
    "c5cb860f-8cd5-480b-a738-10e4fe444729",
    "7cd3b1dd-3bbc-4e24-bb76-84eff50126d7",
    "1cffbd0e-b74b-4842-9953-b44bd3c43159",
    "d33e5953-c001-4139-863a-a41e6c31cc2f",
  ],
  workspaceId: "1fcb51c9-a41f-4fbe-9cbd-795ee65e076c",
}).then((res: WebBackendListConnectionsForWorkspaceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## webBackendListGeographies

Returns all available geographies in which a data sync can run.

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { WebBackendListGeographiesResponse } from "airbyte-test/dist/sdk/models/operations";
import { GeographyEnum } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.webBackend.webBackendListGeographies().then((res: WebBackendListGeographiesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

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
  ConnectionScheduleDataBasicScheduleTimeUnitEnum,
  ConnectionScheduleTimeUnitEnum,
  ConnectionScheduleTypeEnum,
  ConnectionStatusEnum,
  DestinationSyncModeEnum,
  FieldTransformTransformTypeEnum,
  GeographyEnum,
  JobStatusEnum,
  NamespaceDefinitionTypeEnum,
  NonBreakingChangesPreferenceEnum,
  OperatorNormalizationOptionEnum,
  OperatorTypeEnum,
  OperatorWebhookWebhookTypeEnum,
  SchemaChangeEnum,
  StreamTransformTransformTypeEnum,
  SyncModeEnum,
} from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.webBackend.webBackendUpdateConnection({
  connectionId: "c7abf616-ea5c-4716-8193-4b90f2e09d19",
  geography: GeographyEnum.Eu,
  name: "Dr. Lorene Runte",
  namespaceDefinition: NamespaceDefinitionTypeEnum.Customformat,
  namespaceFormat: "${SOURCE_NAMESPACE}",
  nonBreakingChangesPreference: NonBreakingChangesPreferenceEnum.Ignore,
  notifySchemaChanges: false,
  operations: [
    {
      name: "Barbara Hilll",
      operationId: "4b935d23-7a72-4f90-849d-6aed4aecb753",
      operatorConfiguration: {
        dbt: {
          dbtArguments: "esse",
          dockerImage: "placeat",
          gitRepoBranch: "at",
          gitRepoUrl: "excepturi",
        },
        normalization: {
          option: OperatorNormalizationOptionEnum.Basic,
        },
        operatorType: OperatorTypeEnum.Normalization,
        webhook: {
          dbtCloud: {
            accountId: 139505,
            jobId: 154268,
          },
          executionBody: "maxime",
          executionUrl: "excepturi",
          webhookConfigId: "ff57491a-abfa-42e7-a1f0-ca4d456ef103",
          webhookType: OperatorWebhookWebhookTypeEnum.DbtCloud,
        },
      },
      workspaceId: "1e6899f0-c200-41e2-acd5-5cc0584a184d",
    },
    {
      name: "Melanie Schumm",
      operationId: "1fc820c6-5b03-47bb-8e0c-c885187e4de0",
      operatorConfiguration: {
        dbt: {
          dbtArguments: "ut",
          dockerImage: "laborum",
          gitRepoBranch: "hic",
          gitRepoUrl: "sed",
        },
        normalization: {
          option: OperatorNormalizationOptionEnum.Basic,
        },
        operatorType: OperatorTypeEnum.Dbt,
        webhook: {
          dbtCloud: {
            accountId: 803763,
            jobId: 323614,
          },
          executionBody: "quibusdam",
          executionUrl: "facere",
          webhookConfigId: "db46aa1c-fd6d-4828-9a01-319112964664",
          webhookType: OperatorWebhookWebhookTypeEnum.DbtCloud,
        },
      },
      workspaceId: "5c1d81f2-9042-4f56-9b7a-ff0ea2216cbe",
    },
    {
      name: "Stella Boehm",
      operationId: "163e279a-3b08-44da-9925-7d04f40847a7",
      operatorConfiguration: {
        dbt: {
          dbtArguments: "numquam",
          dockerImage: "quia",
          gitRepoBranch: "repellendus",
          gitRepoUrl: "blanditiis",
        },
        normalization: {
          option: OperatorNormalizationOptionEnum.Basic,
        },
        operatorType: OperatorTypeEnum.Normalization,
        webhook: {
          dbtCloud: {
            accountId: 259019,
            jobId: 585730,
          },
          executionBody: "nisi",
          executionUrl: "placeat",
          webhookConfigId: "bdeecf6b-99bc-4635-a2eb-fdf55c294c06",
          webhookType: OperatorWebhookWebhookTypeEnum.DbtCloud,
        },
      },
      workspaceId: "0b06a128-7764-4eef-ad0c-6d6ed9c73dd6",
    },
    {
      name: "Leslie Heaney II",
      operationId: "09a8e870-d3c5-4a1f-9c24-2c7b66a1f30c",
      operatorConfiguration: {
        dbt: {
          dbtArguments: "dignissimos",
          dockerImage: "non",
          gitRepoBranch: "facere",
          gitRepoUrl: "repellat",
        },
        normalization: {
          option: OperatorNormalizationOptionEnum.Basic,
        },
        operatorType: OperatorTypeEnum.Dbt,
        webhook: {
          dbtCloud: {
            accountId: 693988,
            jobId: 408208,
          },
          executionBody: "molestiae",
          executionUrl: "vitae",
          webhookConfigId: "9890f42a-4bb4-438d-85b2-60591d745e3c",
          webhookType: OperatorWebhookWebhookTypeEnum.DbtCloud,
        },
      },
      workspaceId: "2059c9c3-f567-4e0e-a527-65b1d62fcdac",
    },
  ],
  prefix: "debitis",
  resourceRequirements: {
    cpuLimit: "architecto",
    cpuRequest: "reiciendis",
    memoryLimit: "consequatur",
    memoryRequest: "sunt",
  },
  schedule: {
    timeUnit: ConnectionScheduleTimeUnitEnum.Minutes,
    units: 80673,
  },
  scheduleData: {
    basicSchedule: {
      timeUnit: ConnectionScheduleDataBasicScheduleTimeUnitEnum.Hours,
      units: 799730,
    },
    cron: {
      cronExpression: "repudiandae",
      cronTimeZone: "consequuntur",
    },
  },
  scheduleType: ConnectionScheduleTypeEnum.Manual,
  skipReset: false,
  sourceCatalogId: "39e8f25c-d0d1-49d9-99f4-39e39266cbd9",
  status: ConnectionStatusEnum.Active,
  syncCatalog: {
    streams: [
      {
        config: {
          aliasName: "molestiae",
          cursorField: [
            "laborum",
            "odit",
            "rerum",
          ],
          destinationSyncMode: DestinationSyncModeEnum.Append,
          fieldSelectionEnabled: false,
          primaryKey: [
            [
              "et",
            ],
            [
              "nisi",
            ],
          ],
          selected: false,
          selectedFields: [
            {
              fieldPath: [
                "temporibus",
                "et",
              ],
            },
            {
              fieldPath: [
                "nisi",
                "aliquid",
                "excepturi",
                "quas",
              ],
            },
            {
              fieldPath: [
                "placeat",
                "eligendi",
                "quaerat",
                "veniam",
              ],
            },
          ],
          suggested: false,
          syncMode: SyncModeEnum.Incremental,
        },
        stream: {
          defaultCursorField: [
            "dolores",
            "dicta",
          ],
          jsonSchema: {
            "maxime": "dolores",
            "molestias": "quam",
          },
          name: "Beth Klocko",
          namespace: "velit",
          sourceDefinedCursor: false,
          sourceDefinedPrimaryKey: [
            [
              "ad",
            ],
            [
              "alias",
              "adipisci",
            ],
          ],
          supportedSyncModes: [
            SyncModeEnum.Incremental,
            SyncModeEnum.Incremental,
            SyncModeEnum.Incremental,
          ],
        },
      },
      {
        config: {
          aliasName: "minima",
          cursorField: [
            "molestiae",
            "et",
            "accusamus",
          ],
          destinationSyncMode: DestinationSyncModeEnum.Overwrite,
          fieldSelectionEnabled: false,
          primaryKey: [
            [
              "perspiciatis",
            ],
            [
              "corporis",
            ],
            [
              "molestiae",
              "adipisci",
            ],
          ],
          selected: false,
          selectedFields: [
            {
              fieldPath: [
                "optio",
                "itaque",
                "at",
              ],
            },
            {
              fieldPath: [
                "id",
                "cumque",
                "in",
              ],
            },
            {
              fieldPath: [
                "quibusdam",
                "culpa",
                "dolor",
                "occaecati",
              ],
            },
          ],
          suggested: false,
          syncMode: SyncModeEnum.FullRefresh,
        },
        stream: {
          defaultCursorField: [
            "labore",
            "pariatur",
            "vel",
          ],
          jsonSchema: {
            "soluta": "minus",
            "magni": "mollitia",
          },
          name: "Ms. Jim Macejkovic",
          namespace: "explicabo",
          sourceDefinedCursor: false,
          sourceDefinedPrimaryKey: [
            [
              "occaecati",
              "enim",
              "tempora",
            ],
            [
              "iure",
              "voluptatibus",
              "id",
            ],
            [
              "explicabo",
            ],
          ],
          supportedSyncModes: [
            SyncModeEnum.FullRefresh,
          ],
        },
      },
      {
        config: {
          aliasName: "nesciunt",
          cursorField: [
            "molestias",
            "atque",
          ],
          destinationSyncMode: DestinationSyncModeEnum.Append,
          fieldSelectionEnabled: false,
          primaryKey: [
            [
              "nemo",
              "sequi",
            ],
            [
              "libero",
              "ab",
              "alias",
              "accusantium",
            ],
            [
              "autem",
            ],
          ],
          selected: false,
          selectedFields: [
            {
              fieldPath: [
                "reiciendis",
                "incidunt",
                "provident",
                "dolores",
              ],
            },
            {
              fieldPath: [
                "recusandae",
              ],
            },
            {
              fieldPath: [
                "magni",
                "sit",
                "voluptas",
                "nesciunt",
              ],
            },
          ],
          suggested: false,
          syncMode: SyncModeEnum.Incremental,
        },
        stream: {
          defaultCursorField: [
            "eius",
            "perspiciatis",
          ],
          jsonSchema: {
            "ex": "aliquid",
          },
          name: "Wilson Ledner",
          namespace: "voluptatem",
          sourceDefinedCursor: false,
          sourceDefinedPrimaryKey: [
            [
              "libero",
            ],
            [
              "veritatis",
              "provident",
              "veniam",
              "quos",
            ],
            [
              "facere",
              "eius",
              "doloremque",
            ],
            [
              "aut",
              "sequi",
              "reiciendis",
              "neque",
            ],
          ],
          supportedSyncModes: [
            SyncModeEnum.Incremental,
            SyncModeEnum.Incremental,
            SyncModeEnum.Incremental,
            SyncModeEnum.FullRefresh,
          ],
        },
      },
      {
        config: {
          aliasName: "natus",
          cursorField: [
            "facilis",
            "earum",
          ],
          destinationSyncMode: DestinationSyncModeEnum.Append,
          fieldSelectionEnabled: false,
          primaryKey: [
            [
              "consequatur",
              "harum",
              "nobis",
            ],
            [
              "consequatur",
              "temporibus",
            ],
            [
              "quos",
              "commodi",
              "blanditiis",
              "voluptatibus",
            ],
            [
              "nemo",
              "ratione",
              "dolore",
              "perferendis",
            ],
          ],
          selected: false,
          selectedFields: [
            {
              fieldPath: [
                "libero",
                "dolor",
                "nesciunt",
                "vitae",
              ],
            },
            {
              fieldPath: [
                "numquam",
                "provident",
                "quia",
                "reiciendis",
              ],
            },
          ],
          suggested: false,
          syncMode: SyncModeEnum.FullRefresh,
        },
        stream: {
          defaultCursorField: [
            "et",
            "qui",
            "iusto",
            "a",
          ],
          jsonSchema: {
            "aperiam": "saepe",
            "voluptatem": "soluta",
            "hic": "beatae",
          },
          name: "Ms. Casey Corkery",
          namespace: "dignissimos",
          sourceDefinedCursor: false,
          sourceDefinedPrimaryKey: [
            [
              "consequatur",
              "similique",
              "eligendi",
              "impedit",
            ],
            [
              "odio",
              "voluptate",
              "mollitia",
            ],
            [
              "tempore",
              "voluptate",
              "cum",
              "esse",
            ],
          ],
          supportedSyncModes: [
            SyncModeEnum.FullRefresh,
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
