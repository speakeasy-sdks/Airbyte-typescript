# state

## Overview

Interactions with state related resources.

### Available Operations

* [createOrUpdateState](#createorupdatestate) - Create or update the state for a connection.
* [getState](#getstate) - Fetch the current state for a connection.

## createOrUpdateState

Create or update the state for a connection.

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { CreateOrUpdateStateResponse } from "airbyte-test/dist/sdk/models/operations";
import { ConnectionStateTypeEnum } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.state.createOrUpdateState({
  connectionId: "15ceb4d6-e1ea-4e0f-b5ae-df2acab58b99",
  connectionState: {
    connectionId: "1c926ddb-5894-461e-b421-cbe6d9502f0e",
    globalState: {
      sharedState: {
        "error": "ratione",
        "perferendis": "distinctio",
        "voluptas": "sint",
      },
      streamStates: [
        {
          streamDescriptor: {
            name: "Lee Runte",
            namespace: "esse",
          },
          streamState: {
            "delectus": "quos",
          },
        },
        {
          streamDescriptor: {
            name: "Miss Jon Bailey I",
            namespace: "occaecati",
          },
          streamState: {
            "veritatis": "ex",
          },
        },
        {
          streamDescriptor: {
            name: "Ms. Tracey D'Amore",
            namespace: "blanditiis",
          },
          streamState: {
            "voluptates": "minus",
            "autem": "vel",
            "beatae": "quos",
          },
        },
        {
          streamDescriptor: {
            name: "Latoya West",
            namespace: "suscipit",
          },
          streamState: {
            "unde": "debitis",
            "quidem": "magnam",
          },
        },
      ],
    },
    state: {
      "accusamus": "quod",
    },
    stateType: ConnectionStateTypeEnum.Global,
    streamState: [
      {
        streamDescriptor: {
          name: "Cameron Wehner",
          namespace: "rerum",
        },
        streamState: {
          "nam": "ullam",
        },
      },
      {
        streamDescriptor: {
          name: "Lois Ondricka",
          namespace: "error",
        },
        streamState: {
          "reprehenderit": "eligendi",
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

## getState

Fetch the current state for a connection.

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { GetStateResponse } from "airbyte-test/dist/sdk/models/operations";
import { ConnectionStateTypeEnum } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.state.getState({
  connectionId: "baaf4452-c484-42c9-b2ad-32dafe81a88f",
}).then((res: GetStateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
