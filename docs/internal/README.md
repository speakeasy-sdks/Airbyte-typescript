# internal

### Available Operations

* [createOrUpdateState](#createorupdatestate) - Create or update the state for a connection.
* [getAttemptNormalizationStatusesForJob](#getattemptnormalizationstatusesforjob) - Get normalization status to determine if we can bypass normalization phase
* [saveStats](#savestats) - For worker to set sync stats of a running attempt.
* [saveSyncConfig](#savesyncconfig) - For worker to save the AttemptSyncConfig for an attempt.
* [setWorkflowInAttempt](#setworkflowinattempt) - For worker to register the workflow id in attempt.
* [writeDiscoverCatalogResult](#writediscovercatalogresult) - Should only called from worker, to write result from discover activity back to DB.

## createOrUpdateState

Create or update the state for a connection.

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { CreateOrUpdateStateResponse } from "airbyte-test/dist/sdk/models/operations";
import { ConnectionStateType } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.internal.createOrUpdateState({
  connectionId: "00dec001-ac80-42e2-ac09-ff8f0f816ff3",
  connectionState: {
    connectionId: "477c13e9-02c1-4412-9b09-60a668151a47",
    globalState: {
      sharedState: {
        "deserunt": "delectus",
      },
      streamStates: [
        {
          streamDescriptor: {
            name: "Peggy Schneider",
            namespace: "aliquam",
          },
          streamState: {
            "maiores": "laudantium",
            "velit": "reiciendis",
            "amet": "nemo",
          },
        },
        {
          streamDescriptor: {
            name: "Adrienne White",
            namespace: "aliquid",
          },
          streamState: {
            "a": "nobis",
            "perspiciatis": "accusantium",
            "dicta": "minus",
            "commodi": "eveniet",
          },
        },
        {
          streamDescriptor: {
            name: "Geoffrey Powlowski",
            namespace: "fugit",
          },
          streamState: {
            "sequi": "eligendi",
            "asperiores": "esse",
          },
        },
      ],
    },
    state: {
      "sint": "repellat",
      "a": "animi",
      "maiores": "itaque",
    },
    stateType: ConnectionStateType.NotSet,
    streamState: [
      {
        streamDescriptor: {
          name: "Sheila Torphy",
          namespace: "saepe",
        },
        streamState: {
          "repudiandae": "accusantium",
          "officia": "impedit",
        },
      },
      {
        streamDescriptor: {
          name: "Mattie Gibson",
          namespace: "nobis",
        },
        streamState: {
          "minus": "quia",
          "magnam": "reprehenderit",
          "quod": "quos",
        },
      },
      {
        streamDescriptor: {
          name: "Allen Kozey",
          namespace: "modi",
        },
        streamState: {
          "necessitatibus": "architecto",
        },
      },
    ],
  },
}).then((res: CreateOrUpdateStateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getAttemptNormalizationStatusesForJob

Get normalization status to determine if we can bypass normalization phase

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { GetAttemptNormalizationStatusesForJobResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.internal.getAttemptNormalizationStatusesForJob({
  id: 564627,
}).then((res: GetAttemptNormalizationStatusesForJobResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## saveStats

For worker to set sync stats of a running attempt.

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { SaveStatsResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.internal.saveStats({
  attemptNumber: 292177,
  jobId: 125811,
  stats: {
    bytesEmitted: 982991,
    estimatedBytes: 205011,
    estimatedRecords: 139745,
    recordsCommitted: 936845,
    recordsEmitted: 330596,
    stateMessagesEmitted: 373106,
  },
  streamStats: [
    {
      stats: {
        bytesEmitted: 350387,
        estimatedBytes: 331269,
        estimatedRecords: 469994,
        recordsCommitted: 320326,
        recordsEmitted: 394161,
        stateMessagesEmitted: 946808,
      },
      streamName: "quis",
      streamNamespace: "quibusdam",
    },
  ],
}).then((res: SaveStatsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## saveSyncConfig

For worker to save the AttemptSyncConfig for an attempt.

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { SaveSyncConfigResponse } from "airbyte-test/dist/sdk/models/operations";
import { ConnectionStateType } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.internal.saveSyncConfig({
  attemptNumber: 366480,
  jobId: 382764,
  syncConfig: {
    destinationConfiguration: "pariatur",
    sourceConfiguration: "sit",
    state: {
      connectionId: "bd0af2df-e13d-4b4f-a2cb-a3f8941aebc0",
      globalState: {
        sharedState: {
          "corrupti": "eaque",
          "deserunt": "aliquid",
          "excepturi": "magni",
        },
        streamStates: [
          {
            streamDescriptor: {
              name: "Rodney Prohaska",
              namespace: "optio",
            },
            streamState: {
              "minus": "quo",
              "quos": "asperiores",
              "voluptatum": "iste",
              "corporis": "accusantium",
            },
          },
          {
            streamDescriptor: {
              name: "Susan Wyman",
              namespace: "possimus",
            },
            streamState: {
              "pariatur": "vel",
            },
          },
        ],
      },
      state: {
        "mollitia": "quae",
        "quos": "aperiam",
        "non": "voluptates",
        "ad": "aliquam",
      },
      stateType: ConnectionStateType.NotSet,
      streamState: [
        {
          streamDescriptor: {
            name: "Ebony Bode",
            namespace: "est",
          },
          streamState: {
            "aliquid": "consectetur",
          },
        },
        {
          streamDescriptor: {
            name: "Ian Legros",
            namespace: "recusandae",
          },
          streamState: {
            "blanditiis": "numquam",
            "sequi": "voluptatum",
          },
        },
        {
          streamDescriptor: {
            name: "Olivia Boehm",
            namespace: "quidem",
          },
          streamState: {
            "porro": "deserunt",
            "magni": "nihil",
            "voluptas": "animi",
          },
        },
      ],
    },
  },
}).then((res: SaveSyncConfigResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## setWorkflowInAttempt

For worker to register the workflow id in attempt.

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { SetWorkflowInAttemptResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.internal.setWorkflowInAttempt({
  attemptNumber: 413780,
  jobId: 716,
  processingTaskQueue: "fuga",
  workflowId: "aut",
}).then((res: SetWorkflowInAttemptResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## writeDiscoverCatalogResult

Should only called from worker, to write result from discover activity back to DB.

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { WriteDiscoverCatalogResultResponse } from "airbyte-test/dist/sdk/models/operations";
import { DestinationSyncMode, SyncMode } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.internal.writeDiscoverCatalogResult({
  catalog: {
    streams: [
      {
        config: {
          aliasName: "maxime",
          cursorField: [
            "iste",
            "ullam",
          ],
          destinationSyncMode: DestinationSyncMode.AppendDedup,
          fieldSelectionEnabled: false,
          primaryKey: [
            [
              "occaecati",
              "unde",
            ],
            [
              "nihil",
            ],
            [
              "libero",
            ],
            [
              "quasi",
              "cumque",
            ],
          ],
          selected: false,
          selectedFields: [
            {
              fieldPath: [
                "facere",
                "facilis",
                "beatae",
              ],
            },
          ],
          suggested: false,
          syncMode: SyncMode.Incremental,
        },
        stream: {
          defaultCursorField: [
            "labore",
            "expedita",
            "corrupti",
            "rem",
          ],
          jsonSchema: {
            "officiis": "cum",
            "pariatur": "sapiente",
            "quo": "incidunt",
          },
          name: "Kim Sauer",
          namespace: "occaecati",
          sourceDefinedCursor: false,
          sourceDefinedPrimaryKey: [
            [
              "esse",
              "hic",
              "maxime",
              "accusantium",
            ],
            [
              "fugit",
              "pariatur",
              "eligendi",
            ],
            [
              "veritatis",
              "aut",
              "laudantium",
              "iusto",
            ],
          ],
          supportedSyncModes: [
            SyncMode.Incremental,
          ],
        },
      },
      {
        config: {
          aliasName: "tempora",
          cursorField: [
            "rerum",
          ],
          destinationSyncMode: DestinationSyncMode.Append,
          fieldSelectionEnabled: false,
          primaryKey: [
            [
              "at",
              "eum",
            ],
          ],
          selected: false,
          selectedFields: [
            {
              fieldPath: [
                "blanditiis",
                "nihil",
                "atque",
              ],
            },
            {
              fieldPath: [
                "deserunt",
                "atque",
                "nostrum",
              ],
            },
          ],
          suggested: false,
          syncMode: SyncMode.Incremental,
        },
        stream: {
          defaultCursorField: [
            "est",
          ],
          jsonSchema: {
            "rem": "magni",
            "quae": "quas",
          },
          name: "Lloyd Grant",
          namespace: "delectus",
          sourceDefinedCursor: false,
          sourceDefinedPrimaryKey: [
            [
              "cumque",
              "natus",
              "quaerat",
            ],
            [
              "quia",
              "officiis",
              "mollitia",
              "cumque",
            ],
            [
              "enim",
              "eum",
            ],
          ],
          supportedSyncModes: [
            SyncMode.Incremental,
            SyncMode.FullRefresh,
          ],
        },
      },
    ],
  },
  configurationHash: "sit",
  connectorVersion: "odio",
  sourceId: "cfee8120-6e28-413f-a4a4-1c480d3f2132",
}).then((res: WriteDiscoverCatalogResultResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
