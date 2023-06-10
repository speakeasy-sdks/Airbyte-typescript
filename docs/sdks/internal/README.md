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
  connectionId: "0019c6dc-5e34-4762-b99b-fbbe6949fb2b",
  connectionState: {
    connectionId: "b4ecae6c-3d5d-4b3a-9ebd-5daea4c506a8",
    globalState: {
      sharedState: {},
      streamStates: [
        {
          streamDescriptor: {
            name: "Sergio Grant Sr.",
            namespace: "aliquid",
          },
          streamState: {},
        },
        {
          streamDescriptor: {
            name: "Gail Roob",
            namespace: "officiis",
          },
          streamState: {},
        },
        {
          streamDescriptor: {
            name: "Drew Mraz",
            namespace: "nostrum",
          },
          streamState: {},
        },
      ],
    },
    state: {},
    stateType: ConnectionStateType.Stream,
    streamState: [
      {
        streamDescriptor: {
          name: "Miss Carroll Rutherford",
          namespace: "laboriosam",
        },
        streamState: {},
      },
      {
        streamDescriptor: {
          name: "Sandra Schumm",
          namespace: "consequatur",
        },
        streamState: {},
      },
      {
        streamDescriptor: {
          name: "Julie Murazik",
          namespace: "quae",
        },
        streamState: {},
      },
    ],
  },
}).then((res: CreateOrUpdateStateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [shared.ConnectionStateCreateOrUpdate](../../models/shared/connectionstatecreateorupdate.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.CreateOrUpdateStateResponse](../../models/operations/createorupdatestateresponse.md)>**


## getAttemptNormalizationStatusesForJob

Get normalization status to determine if we can bypass normalization phase

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { GetAttemptNormalizationStatusesForJobResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.internal.getAttemptNormalizationStatusesForJob({
  id: 169819,
}).then((res: GetAttemptNormalizationStatusesForJobResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                          | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `request`                                                          | [shared.JobIdRequestBody](../../models/shared/jobidrequestbody.md) | :heavy_check_mark:                                                 | The request object to use for the request.                         |
| `config`                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)       | :heavy_minus_sign:                                                 | Available config options for making requests.                      |


### Response

**Promise<[operations.GetAttemptNormalizationStatusesForJobResponse](../../models/operations/getattemptnormalizationstatusesforjobresponse.md)>**


## saveStats

For worker to set sync stats of a running attempt.

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { SaveStatsResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.internal.saveStats({
  attemptNumber: 885797,
  jobId: 148379,
  stats: {
    bytesEmitted: 898111,
    estimatedBytes: 773259,
    estimatedRecords: 55981,
    recordsCommitted: 567693,
    recordsEmitted: 950956,
    stateMessagesEmitted: 983000,
  },
  streamStats: [
    {
      stats: {
        bytesEmitted: 982248,
        estimatedBytes: 691,
        estimatedRecords: 992667,
        recordsCommitted: 523365,
        recordsEmitted: 118615,
        stateMessagesEmitted: 380595,
      },
      streamName: "earum",
      streamNamespace: "doloribus",
    },
    {
      stats: {
        bytesEmitted: 244569,
        estimatedBytes: 260588,
        estimatedRecords: 458212,
        recordsCommitted: 446547,
        recordsEmitted: 757407,
        stateMessagesEmitted: 94697,
      },
      streamName: "neque",
      streamNamespace: "vero",
    },
    {
      stats: {
        bytesEmitted: 566312,
        estimatedBytes: 37534,
        estimatedRecords: 185816,
        recordsCommitted: 771241,
        recordsEmitted: 104736,
        stateMessagesEmitted: 278329,
      },
      streamName: "dicta",
      streamNamespace: "odit",
    },
  ],
}).then((res: SaveStatsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [shared.SaveStatsRequestBody](../../models/shared/savestatsrequestbody.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.SaveStatsResponse](../../models/operations/savestatsresponse.md)>**


## saveSyncConfig

For worker to save the AttemptSyncConfig for an attempt.

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { SaveSyncConfigResponse } from "airbyte-test/dist/sdk/models/operations";
import { ConnectionStateType } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.internal.saveSyncConfig({
  attemptNumber: 357639,
  jobId: 701441,
  syncConfig: {
    destinationConfiguration: "alias",
    sourceConfiguration: "error",
    state: {
      connectionId: "60a66815-1a47-42af-923c-5949f83f350c",
      globalState: {
        sharedState: {},
        streamStates: [
          {
            streamDescriptor: {
              name: "Clinton Hyatt",
              namespace: "nobis",
            },
            streamState: {},
          },
          {
            streamDescriptor: {
              name: "Steven Carter",
              namespace: "eveniet",
            },
            streamState: {},
          },
          {
            streamDescriptor: {
              name: "Geoffrey Powlowski",
              namespace: "fugit",
            },
            streamState: {},
          },
          {
            streamDescriptor: {
              name: "Lillian Rosenbaum",
              namespace: "blanditiis",
            },
            streamState: {},
          },
        ],
      },
      state: {},
      stateType: ConnectionStateType.Legacy,
      streamState: [
        {
          streamDescriptor: {
            name: "Lynn Wuckert",
            namespace: "deserunt",
          },
          streamState: {},
        },
        {
          streamDescriptor: {
            name: "Sheila Torphy",
            namespace: "saepe",
          },
          streamState: {},
        },
        {
          streamDescriptor: {
            name: "Delia Barton",
            namespace: "quasi",
          },
          streamState: {},
        },
        {
          streamDescriptor: {
            name: "Frederick Schaden",
            namespace: "natus",
          },
          streamState: {},
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

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [shared.SaveAttemptSyncConfigRequestBody](../../models/shared/saveattemptsyncconfigrequestbody.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.SaveSyncConfigResponse](../../models/operations/savesyncconfigresponse.md)>**


## setWorkflowInAttempt

For worker to register the workflow id in attempt.

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { SetWorkflowInAttemptResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.internal.setWorkflowInAttempt({
  attemptNumber: 793568,
  jobId: 154389,
  processingTaskQueue: "magnam",
  workflowId: "reprehenderit",
}).then((res: SetWorkflowInAttemptResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [shared.SetWorkflowInAttemptRequestBody](../../models/shared/setworkflowinattemptrequestbody.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.SetWorkflowInAttemptResponse](../../models/operations/setworkflowinattemptresponse.md)>**


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
          aliasName: "quos",
          cursorField: [
            "amet",
            "molestiae",
            "amet",
          ],
          destinationSyncMode: DestinationSyncMode.AppendDedup,
          fieldSelectionEnabled: false,
          primaryKey: [
            [
              "necessitatibus",
            ],
            [
              "molestias",
            ],
          ],
          selected: false,
          selectedFields: [
            {
              fieldPath: [
                "maiores",
              ],
            },
            {
              fieldPath: [
                "odit",
              ],
            },
          ],
          suggested: false,
          syncMode: SyncMode.Incremental,
        },
        stream: {
          defaultCursorField: [
            "ipsam",
            "eaque",
          ],
          jsonSchema: {},
          name: "Lynn Kovacek",
          namespace: "tenetur",
          sourceDefinedCursor: false,
          sourceDefinedPrimaryKey: [
            [
              "nemo",
              "suscipit",
              "pariatur",
              "sit",
            ],
            [
              "repellendus",
              "perferendis",
              "id",
            ],
          ],
          supportedSyncModes: [
            SyncMode.FullRefresh,
            SyncMode.Incremental,
            SyncMode.Incremental,
            SyncMode.Incremental,
          ],
        },
      },
      {
        config: {
          aliasName: "architecto",
          cursorField: [
            "pariatur",
          ],
          destinationSyncMode: DestinationSyncMode.AppendDedup,
          fieldSelectionEnabled: false,
          primaryKey: [
            [
              "iure",
              "explicabo",
              "minus",
              "soluta",
            ],
            [
              "velit",
              "earum",
              "praesentium",
            ],
          ],
          selected: false,
          selectedFields: [
            {
              fieldPath: [
                "quasi",
                "mollitia",
              ],
            },
            {
              fieldPath: [
                "harum",
                "cumque",
                "doloremque",
                "expedita",
              ],
            },
            {
              fieldPath: [
                "eaque",
                "deserunt",
                "aliquid",
              ],
            },
          ],
          suggested: false,
          syncMode: SyncMode.Incremental,
        },
        stream: {
          defaultCursorField: [
            "tempora",
          ],
          jsonSchema: {},
          name: "Rodney Prohaska",
          namespace: "optio",
          sourceDefinedCursor: false,
          sourceDefinedPrimaryKey: [
            [
              "quo",
              "quos",
              "asperiores",
              "voluptatum",
            ],
            [
              "corporis",
              "accusantium",
              "illo",
            ],
            [
              "doloribus",
            ],
            [
              "at",
              "possimus",
            ],
          ],
          supportedSyncModes: [
            SyncMode.Incremental,
          ],
        },
      },
      {
        config: {
          aliasName: "vel",
          cursorField: [
            "mollitia",
            "quae",
            "quos",
            "aperiam",
          ],
          destinationSyncMode: DestinationSyncMode.Append,
          fieldSelectionEnabled: false,
          primaryKey: [
            [
              "aliquam",
              "quisquam",
            ],
            [
              "consequuntur",
              "maiores",
              "inventore",
            ],
            [
              "laudantium",
              "est",
            ],
            [
              "aliquid",
            ],
          ],
          selected: false,
          selectedFields: [
            {
              fieldPath: [
                "rem",
                "voluptatum",
                "ducimus",
                "adipisci",
              ],
            },
          ],
          suggested: false,
          syncMode: SyncMode.Incremental,
        },
        stream: {
          defaultCursorField: [
            "blanditiis",
            "numquam",
          ],
          jsonSchema: {},
          name: "Margie Balistreri DVM",
          namespace: "autem",
          sourceDefinedCursor: false,
          sourceDefinedPrimaryKey: [
            [
              "porro",
              "deserunt",
              "magni",
            ],
            [
              "voluptas",
              "animi",
            ],
            [
              "alias",
              "fuga",
            ],
          ],
          supportedSyncModes: [
            SyncMode.FullRefresh,
          ],
        },
      },
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
          jsonSchema: {},
          name: "Frankie Ritchie",
          namespace: "quo",
          sourceDefinedCursor: false,
          sourceDefinedPrimaryKey: [
            [
              "minus",
              "porro",
              "id",
              "excepturi",
            ],
            [
              "libero",
              "quo",
              "esse",
            ],
          ],
          supportedSyncModes: [
            SyncMode.Incremental,
            SyncMode.FullRefresh,
            SyncMode.Incremental,
            SyncMode.FullRefresh,
          ],
        },
      },
    ],
  },
  configurationHash: "pariatur",
  connectorVersion: "eligendi",
  sourceId: "e10873e4-2b00-46d6-b887-8ba8581a5820",
}).then((res: WriteDiscoverCatalogResultResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [shared.SourceDiscoverSchemaWriteRequestBody](../../models/shared/sourcediscoverschemawriterequestbody.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.WriteDiscoverCatalogResultResponse](../../models/operations/writediscovercatalogresultresponse.md)>**

