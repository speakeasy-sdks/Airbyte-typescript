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
import { ConnectionStateType } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.state.createOrUpdateState({
  connectionId: "1f67f3c4-cce4-4b6d-b696-ff3c57475013",
  connectionState: {
    connectionId: "57e44f51-f8b0-484c-b197-e193a245467f",
    globalState: {
      sharedState: {},
      streamStates: [
        {
          streamDescriptor: {
            name: "Naomi Kozey",
            namespace: "fugit",
          },
          streamState: {},
        },
        {
          streamDescriptor: {
            name: "Vernon Rohan",
            namespace: "perspiciatis",
          },
          streamState: {},
        },
        {
          streamDescriptor: {
            name: "Lois Dibbert",
            namespace: "saepe",
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
          name: "Nicolas Legros",
          namespace: "corporis",
        },
        streamState: {},
      },
      {
        streamDescriptor: {
          name: "Richard Bartell",
          namespace: "odio",
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


## getState

Fetch the current state for a connection.

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { GetStateResponse } from "airbyte-test/dist/sdk/models/operations";
import { ConnectionStateType } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.state.getState({
  connectionId: "9ef20387-3205-490c-8c10-96400313b3e5",
}).then((res: GetStateResponse) => {
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

**Promise<[operations.GetStateResponse](../../models/operations/getstateresponse.md)>**

