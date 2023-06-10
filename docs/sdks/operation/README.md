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
    dbtArguments: "impedit",
    dockerImage: "eius",
    gitRepoBranch: "voluptatum",
    gitRepoUrl: "ipsa",
  },
  normalization: {
    option: OperatorNormalizationOption.Basic,
  },
  operatorType: OperatorType.Webhook,
  webhook: {
    dbtCloud: {
      accountId: 209860,
      jobId: 999854,
    },
    executionBody: "aspernatur",
    executionUrl: "inventore",
    webhookConfigId: "32af0310-2d51-44f4-8c6f-18bf9621a6a4",
    webhookType: OperatorWebhookWebhookType.DbtCloud,
  },
}).then((res: CheckOperationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [shared.OperatorConfiguration](../../models/shared/operatorconfiguration.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.CheckOperationResponse](../../models/operations/checkoperationresponse.md)>**


## createOperation

Create an operation to be applied as part of a connection pipeline

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { CreateOperationResponse } from "airbyte-test/dist/sdk/models/operations";
import { OperatorNormalizationOption, OperatorType, OperatorWebhookWebhookType } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.operation.createOperation({
  name: "Julio Koch",
  operatorConfiguration: {
    dbt: {
      dbtArguments: "esse",
      dockerImage: "eveniet",
      gitRepoBranch: "earum",
      gitRepoUrl: "velit",
    },
    normalization: {
      option: OperatorNormalizationOption.Basic,
    },
    operatorType: OperatorType.Webhook,
    webhook: {
      dbtCloud: {
        accountId: 263346,
        jobId: 701978,
      },
      executionBody: "itaque",
      executionUrl: "dignissimos",
      webhookConfigId: "52c65b34-418e-43bb-91c8-d975e0e8419d",
      webhookType: OperatorWebhookWebhookType.DbtCloud,
    },
  },
  workspaceId: "8f84f144-f3e0-47ed-8c4a-a5f3cabd905a",
}).then((res: CreateOperationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `request`                                                        | [shared.OperationCreate](../../models/shared/operationcreate.md) | :heavy_check_mark:                                               | The request object to use for the request.                       |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |


### Response

**Promise<[operations.CreateOperationResponse](../../models/operations/createoperationresponse.md)>**


## deleteOperation

Delete an operation

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { DeleteOperationResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.operation.deleteOperation({
  operationId: "972e0567-2822-47b2-9309-470bf7a4fa87",
}).then((res: DeleteOperationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.OperationIdRequestBody](../../models/shared/operationidrequestbody.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.DeleteOperationResponse](../../models/operations/deleteoperationresponse.md)>**


## getOperation

Returns an operation

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { GetOperationResponse } from "airbyte-test/dist/sdk/models/operations";
import { OperatorNormalizationOption, OperatorType, OperatorWebhookWebhookType } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.operation.getOperation({
  operationId: "cf535a6f-ae54-4ebf-a0c3-21f023b75d23",
}).then((res: GetOperationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.OperationIdRequestBody](../../models/shared/operationidrequestbody.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetOperationResponse](../../models/operations/getoperationresponse.md)>**


## listOperationsForConnection

List operations for connection.

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { ListOperationsForConnectionResponse } from "airbyte-test/dist/sdk/models/operations";
import { OperatorNormalizationOption, OperatorType, OperatorWebhookWebhookType } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.operation.listOperationsForConnection({
  connectionId: "67fe1a0c-c8df-479f-8a39-6d90c364b7c1",
}).then((res: ListOperationsForConnectionResponse) => {
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

**Promise<[operations.ListOperationsForConnectionResponse](../../models/operations/listoperationsforconnectionresponse.md)>**


## updateOperation

Update an operation

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { UpdateOperationResponse } from "airbyte-test/dist/sdk/models/operations";
import { OperatorNormalizationOption, OperatorType, OperatorWebhookWebhookType } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.operation.updateOperation({
  name: "Betsy Wuckert",
  operationId: "ce188b1c-4ee2-4c8c-ace6-11feeb1c7cbd",
  operatorConfiguration: {
    dbt: {
      dbtArguments: "cum",
      dockerImage: "suscipit",
      gitRepoBranch: "saepe",
      gitRepoUrl: "earum",
    },
    normalization: {
      option: OperatorNormalizationOption.Basic,
    },
    operatorType: OperatorType.Webhook,
    webhook: {
      dbtCloud: {
        accountId: 469588,
        jobId: 310930,
      },
      executionBody: "ipsum",
      executionUrl: "ducimus",
      webhookConfigId: "8ba25317-747d-4c91-9ad2-caf5dd6723dc",
      webhookType: OperatorWebhookWebhookType.DbtCloud,
    },
  },
}).then((res: UpdateOperationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `request`                                                        | [shared.OperationUpdate](../../models/shared/operationupdate.md) | :heavy_check_mark:                                               | The request object to use for the request.                       |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |


### Response

**Promise<[operations.UpdateOperationResponse](../../models/operations/updateoperationresponse.md)>**

