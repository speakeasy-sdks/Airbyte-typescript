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

## saveSyncConfig

For worker to save the AttemptSyncConfig for an attempt.

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { SaveSyncConfigResponse } from "airbyte-test/dist/sdk/models/operations";
import { ConnectionStateTypeEnum } from "airbyte-test/dist/sdk/models/shared";

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
        sharedState: {
          "ipsa": "reiciendis",
        },
        streamStates: [
          {
            streamDescriptor: {
              name: "Cameron Dach",
              namespace: "explicabo",
            },
            streamState: {
              "enim": "omnis",
              "nemo": "minima",
              "excepturi": "accusantium",
              "iure": "culpa",
            },
          },
          {
            streamDescriptor: {
              name: "Darrin Brakus",
              namespace: "culpa",
            },
            streamState: {
              "repellat": "mollitia",
            },
          },
          {
            streamDescriptor: {
              name: "Francis Jerde",
              namespace: "velit",
            },
            streamState: {
              "quia": "quis",
              "vitae": "laborum",
              "animi": "enim",
            },
          },
        ],
      },
      state: {
        "quo": "sequi",
      },
      stateType: ConnectionStateTypeEnum.NotSet,
      streamState: [
        {
          streamDescriptor: {
            name: "Miss Rufus Ankunding",
            namespace: "laborum",
          },
          streamState: {
            "reiciendis": "voluptatibus",
          },
        },
        {
          streamDescriptor: {
            name: "Jessie Langosh V",
            namespace: "voluptate",
          },
          streamState: {
            "perferendis": "doloremque",
            "reprehenderit": "ut",
            "maiores": "dicta",
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

sdk.attempt.setWorkflowInAttempt({
  attemptNumber: 359444,
  jobId: 296140,
  processingTaskQueue: "iusto",
  workflowId: "dicta",
}).then((res: SetWorkflowInAttemptResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
