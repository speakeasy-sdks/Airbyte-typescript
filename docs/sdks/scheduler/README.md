# scheduler

### Available Operations

* [executeDestinationCheckConnection](#executedestinationcheckconnection) - Run check connection for a given destination configuration
* [executeSourceCheckConnection](#executesourcecheckconnection) - Run check connection for a given source configuration
* [executeSourceDiscoverSchema](#executesourcediscoverschema) - Run discover schema for a given source a source configuration

## executeDestinationCheckConnection

Run check connection for a given destination configuration

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { ExecuteDestinationCheckConnectionResponse } from "airbyte-test/dist/sdk/models/operations";
import { CheckConnectionReadStatus, JobConfigType } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.scheduler.executeDestinationCheckConnection({
  connectionConfiguration: "ipsa",
  destinationDefinitionId: "f5ae2f3a-6b70-4087-8756-143f5a6c98b5",
  destinationId: "5554080d-40bc-4acc-acbd-6b5f3ec90930",
  workspaceId: "4f926bad-2553-4819-b474-b0ed20e56248",
}).then((res: ExecuteDestinationCheckConnectionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [shared.DestinationCoreConfig](../../models/shared/destinationcoreconfig.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.ExecuteDestinationCheckConnectionResponse](../../models/operations/executedestinationcheckconnectionresponse.md)>**


## executeSourceCheckConnection

Run check connection for a given source configuration

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { ExecuteSourceCheckConnectionResponse } from "airbyte-test/dist/sdk/models/operations";
import { CheckConnectionReadStatus, JobConfigType } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.scheduler.executeSourceCheckConnection({
  connectionConfiguration: "hic",
  sourceDefinitionId: "ff639a91-0abd-4cab-a267-6696e1ec0022",
  sourceId: "1b335d89-acb3-4ecf-9a8d-0c549ef03004",
  workspaceId: "978a61fa-1cf2-4068-8f77-c1ffc71dca16",
}).then((res: ExecuteSourceCheckConnectionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                          | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `request`                                                          | [shared.SourceCoreConfig](../../models/shared/sourcecoreconfig.md) | :heavy_check_mark:                                                 | The request object to use for the request.                         |
| `config`                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)       | :heavy_minus_sign:                                                 | Available config options for making requests.                      |


### Response

**Promise<[operations.ExecuteSourceCheckConnectionResponse](../../models/operations/executesourcecheckconnectionresponse.md)>**


## executeSourceDiscoverSchema

Run discover schema for a given source a source configuration

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { ExecuteSourceDiscoverSchemaResponse } from "airbyte-test/dist/sdk/models/operations";
import {
  ConnectionStatus,
  DestinationSyncMode,
  FieldTransformTransformType,
  JobConfigType,
  StreamTransformTransformType,
  SyncMode,
} from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.scheduler.executeSourceDiscoverSchema({
  connectionConfiguration: "consectetur",
  sourceDefinitionId: "f2a3c80a-97ff-4334-8ddf-857a9e61876c",
  sourceId: "6ab21d29-dfc9-44d6-becd-799390066a6d",
  workspaceId: "2d000355-338c-4ec0-86fa-21e9152cb311",
}).then((res: ExecuteSourceDiscoverSchemaResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                          | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `request`                                                          | [shared.SourceCoreConfig](../../models/shared/sourcecoreconfig.md) | :heavy_check_mark:                                                 | The request object to use for the request.                         |
| `config`                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)       | :heavy_minus_sign:                                                 | Available config options for making requests.                      |


### Response

**Promise<[operations.ExecuteSourceDiscoverSchemaResponse](../../models/operations/executesourcediscoverschemaresponse.md)>**

