# operation

### Available Operations

* [checkOperation](#checkoperation) - Check if an operation to be created is valid
* [createOperation](#createoperation) - Create an operation to be applied as part of a connection pipeline
* [deleteOperation](#deleteoperation) - Delete an operation
* [getOperation](#getoperation) - Returns an operation
* [listOperationsForConnection](#listoperationsforconnection) - Returns all operations for a connection.
* [updateOperation](#updateoperation) - Update an operation

## checkOperation

Check if an operation to be created is valid

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { CheckOperationResponse } from "airbyte-test/dist/sdk/models/operations";
import {
  CheckOperationReadStatus,
  OperatorNormalizationOption,
  OperatorType,
  OperatorWebhookWebhookType,
} from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.operation.checkOperation({
  dbt: {
    dbtArguments: "ut",
    dockerImage: "quaerat",
    gitRepoBranch: "architecto",
    gitRepoUrl: "praesentium",
  },
  normalization: {
    option: OperatorNormalizationOption.Basic,
  },
  operatorType: OperatorType.Webhook,
  webhook: {
    dbtCloud: {
      accountId: 221781,
      jobId: 709051,
    },
    executionBody: "libero",
    executionUrl: "iste",
    webhookConfigId: "1c8d975e-0e84-419d-8f84-f144f3e07edc",
    webhookType: OperatorWebhookWebhookType.DbtCloud,
  },
}).then((res: CheckOperationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createOperation

Create an operation to be applied as part of a connection pipeline

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { CreateOperationResponse } from "airbyte-test/dist/sdk/models/operations";
import { OperatorNormalizationOption, OperatorType, OperatorWebhookWebhookType } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.operation.createOperation({
  name: "Jay Pagac",
  operatorConfiguration: {
    dbt: {
      dbtArguments: "reiciendis",
      dockerImage: "sequi",
      gitRepoBranch: "porro",
      gitRepoUrl: "laborum",
    },
    normalization: {
      option: OperatorNormalizationOption.Basic,
    },
    operatorType: OperatorType.Webhook,
    webhook: {
      dbtCloud: {
        accountId: 842974,
        jobId: 607624,
      },
      executionBody: "aut",
      executionUrl: "ipsam",
      webhookConfigId: "a972e056-7282-427b-ad30-9470bf7a4fa8",
      webhookType: OperatorWebhookWebhookType.DbtCloud,
    },
  },
  workspaceId: "7cf535a6-fae5-44eb-b60c-321f023b75d2",
}).then((res: CreateOperationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteOperation

Delete an operation

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { DeleteOperationResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.operation.deleteOperation({
  operationId: "367fe1a0-cc8d-4f79-b0a3-96d90c364b7c",
}).then((res: DeleteOperationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getOperation

Returns an operation

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { GetOperationResponse } from "airbyte-test/dist/sdk/models/operations";
import { OperatorNormalizationOption, OperatorType, OperatorWebhookWebhookType } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.operation.getOperation({
  operationId: "15dfbace-188b-41c4-ae2c-8c6ce611feeb",
}).then((res: GetOperationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listOperationsForConnection

List operations for connection.

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { ListOperationsForConnectionResponse } from "airbyte-test/dist/sdk/models/operations";
import { OperatorNormalizationOption, OperatorType, OperatorWebhookWebhookType } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.operation.listOperationsForConnection({
  connectionId: "1c7cbdb6-eec7-4437-8ba2-5317747dc915",
}).then((res: ListOperationsForConnectionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateOperation

Update an operation

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { UpdateOperationResponse } from "airbyte-test/dist/sdk/models/operations";
import { OperatorNormalizationOption, OperatorType, OperatorWebhookWebhookType } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.operation.updateOperation({
  name: "Gilberto Corkery",
  operationId: "f5dd6723-dc0f-45ae-af3a-6b7008787561",
  operatorConfiguration: {
    dbt: {
      dbtArguments: "quaerat",
      dockerImage: "amet",
      gitRepoBranch: "sapiente",
      gitRepoUrl: "corporis",
    },
    normalization: {
      option: OperatorNormalizationOption.Basic,
    },
    operatorType: OperatorType.Dbt,
    webhook: {
      dbtCloud: {
        accountId: 435142,
        jobId: 787629,
      },
      executionBody: "provident",
      executionUrl: "laudantium",
      webhookConfigId: "b5555408-0d40-4bca-8c6c-bd6b5f3ec909",
      webhookType: OperatorWebhookWebhookType.DbtCloud,
    },
  },
}).then((res: UpdateOperationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
