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
import { CheckConnectionReadStatusEnum, JobConfigTypeEnum } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.scheduler.executeDestinationCheckConnection({
  connectionConfiguration: "adipisci",
  destinationDefinitionId: "04f926ba-d255-4381-9b47-4b0ed20e5624",
  destinationId: "8fff639a-910a-4bdc-ab62-676696e1ec00",
  workspaceId: "221b335d-89ac-4b3e-8fda-8d0c549ef030",
}).then((res: ExecuteDestinationCheckConnectionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## executeSourceCheckConnection

Run check connection for a given source configuration

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { ExecuteSourceCheckConnectionResponse } from "airbyte-test/dist/sdk/models/operations";
import { CheckConnectionReadStatusEnum, JobConfigTypeEnum } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.scheduler.executeSourceCheckConnection({
  connectionConfiguration: "doloremque",
  sourceDefinitionId: "4978a61f-a1cf-4206-88f7-7c1ffc71dca1",
  sourceId: "63f2a3c8-0a97-4ff3-b4cd-df857a9e6187",
  workspaceId: "6c6ab21d-29df-4c94-96fe-cd799390066a",
}).then((res: ExecuteSourceCheckConnectionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## executeSourceDiscoverSchema

Run discover schema for a given source a source configuration

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { ExecuteSourceDiscoverSchemaResponse } from "airbyte-test/dist/sdk/models/operations";
import {
  ConnectionStatusEnum,
  DestinationSyncModeEnum,
  FieldTransformTransformTypeEnum,
  JobConfigTypeEnum,
  StreamTransformTransformTypeEnum,
  SyncModeEnum,
} from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.scheduler.executeSourceDiscoverSchema({
  connectionConfiguration: "autem",
  sourceDefinitionId: "d2d00035-5338-4cec-886f-a21e9152cb31",
  sourceId: "19167b8e-3c8d-4b03-808d-6d364ffd4559",
  workspaceId: "06d1263d-48e9-435c-ac9e-81f30be3e432",
}).then((res: ExecuteSourceDiscoverSchemaResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
