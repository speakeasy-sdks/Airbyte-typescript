# attempt

## Overview

Interactions with attempt related resources.

### Available Operations

* [saveStats](#savestats) - For worker to set sync stats of a running attempt.
* [saveSyncConfig](#savesyncconfig) - For worker to save the AttemptSyncConfig for an attempt.
* [setWorkflowInAttempt](#setworkflowinattempt) - For worker to register the workflow id in attempt.

## saveStats

For worker to set sync stats of a running attempt.

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { SaveStatsResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.attempt.saveStats({
  attemptNumber: 392785,
  jobId: 925597,
  stats: {
    bytesEmitted: 836079,
    estimatedBytes: 71036,
    estimatedRecords: 337396,
    recordsCommitted: 87129,
    recordsEmitted: 648172,
    stateMessagesEmitted: 20218,
  },
  streamStats: [
    {
      stats: {
        bytesEmitted: 832620,
        estimatedBytes: 957156,
        estimatedRecords: 778157,
        recordsCommitted: 140350,
        recordsEmitted: 870013,
        stateMessagesEmitted: 870088,
      },
      streamName: "maiores",
      streamNamespace: "molestiae",
    },
    {
      stats: {
        bytesEmitted: 799159,
        estimatedBytes: 800911,
        estimatedRecords: 461479,
        recordsCommitted: 520478,
        recordsEmitted: 780529,
        stateMessagesEmitted: 678880,
      },
      streamName: "dicta",
      streamNamespace: "nam",
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

sdk.attempt.saveSyncConfig({
  attemptNumber: 639921,
  jobId: 582020,
  syncConfig: {
    destinationConfiguration: "fugit",
    sourceConfiguration: "deleniti",
    state: {
      connectionId: "fc816742-cb73-4920-9929-396fea7596eb",
      globalState: {
        sharedState: {},
        streamStates: [
          {
            streamDescriptor: {
              name: "Lela Orn",
              namespace: "dolores",
            },
            streamState: {},
          },
        ],
      },
      state: {},
      stateType: ConnectionStateType.Global,
      streamState: [
        {
          streamDescriptor: {
            name: "Della Halvorson",
            namespace: "minima",
          },
          streamState: {},
        },
        {
          streamDescriptor: {
            name: "Brian Kessler",
            namespace: "sapiente",
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

sdk.attempt.setWorkflowInAttempt({
  attemptNumber: 102044,
  jobId: 652790,
  processingTaskQueue: "dolorem",
  workflowId: "culpa",
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

