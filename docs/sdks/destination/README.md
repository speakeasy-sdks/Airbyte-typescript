# destination

## Overview

Destination related resources.

### Available Operations

* [checkConnectionToDestination](#checkconnectiontodestination) - Check connection to the destination
* [checkConnectionToDestinationForUpdate](#checkconnectiontodestinationforupdate) - Check connection for a proposed update to a destination
* [cloneDestination](#clonedestination) - Clone destination
* [createDestination](#createdestination) - Create a destination
* [deleteDestination](#deletedestination) - Delete the destination
* [getDestination](#getdestination) - Get configured destination
* [listDestinationsForWorkspace](#listdestinationsforworkspace) - List configured destinations for a workspace
* [searchDestinations](#searchdestinations) - Search destinations
* [updateDestination](#updatedestination) - Update a destination

## checkConnectionToDestination

Check connection to the destination

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { CheckConnectionToDestinationResponse } from "airbyte-test/dist/sdk/models/operations";
import { CheckConnectionReadStatus, JobConfigType } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.destination.checkConnectionToDestination({
  destinationId: "7956f925-1a5a-49da-a60f-f57bfaad4f9e",
}).then((res: CheckConnectionToDestinationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [shared.DestinationIdRequestBody](../../models/shared/destinationidrequestbody.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.CheckConnectionToDestinationResponse](../../models/operations/checkconnectiontodestinationresponse.md)>**


## checkConnectionToDestinationForUpdate

Check connection for a proposed update to a destination

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { CheckConnectionToDestinationForUpdateResponse } from "airbyte-test/dist/sdk/models/operations";
import { CheckConnectionReadStatus, JobConfigType } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.destination.checkConnectionToDestinationForUpdate({
  connectionConfiguration: "sapiente",
  destinationId: "c1b4512c-1032-4648-9c2f-615199ebfd0e",
  name: "Cary Toy",
}).then((res: CheckConnectionToDestinationForUpdateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `request`                                                            | [shared.DestinationUpdate](../../models/shared/destinationupdate.md) | :heavy_check_mark:                                                   | The request object to use for the request.                           |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.CheckConnectionToDestinationForUpdateResponse](../../models/operations/checkconnectiontodestinationforupdateresponse.md)>**


## cloneDestination

Clone destination

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { CloneDestinationResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.destination.cloneDestination({
  destinationCloneId: "632ca3ae-d011-4799-a312-fde04771778f",
  destinationConfiguration: {
    connectionConfiguration: "reiciendis",
    name: "Mr. Diane Stiedemann",
  },
}).then((res: CloneDestinationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [shared.DestinationCloneRequestBody](../../models/shared/destinationclonerequestbody.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.CloneDestinationResponse](../../models/operations/clonedestinationresponse.md)>**


## createDestination

Create a destination

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { CreateDestinationResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.destination.createDestination({
  connectionConfiguration: "tempora",
  destinationDefinitionId: "76360a15-db6a-4660-a59a-1adeaab5851d",
  name: "Krista Jakubowski",
  workspaceId: "b08b6189-1baa-40fe-9ade-008e6f8c5f35",
}).then((res: CreateDestinationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `request`                                                            | [shared.DestinationCreate](../../models/shared/destinationcreate.md) | :heavy_check_mark:                                                   | The request object to use for the request.                           |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.CreateDestinationResponse](../../models/operations/createdestinationresponse.md)>**


## deleteDestination

Delete the destination

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { DeleteDestinationResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.destination.deleteDestination({
  destinationId: "0d8cdb5a-3418-4143-8104-21813d5208ec",
}).then((res: DeleteDestinationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [shared.DestinationIdRequestBody](../../models/shared/destinationidrequestbody.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.DeleteDestinationResponse](../../models/operations/deletedestinationresponse.md)>**


## getDestination

Get configured destination

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { GetDestinationResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.destination.getDestination({
  destinationId: "e7e253b6-6845-41c6-86e2-05e16deab3fe",
}).then((res: GetDestinationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [shared.DestinationIdRequestBody](../../models/shared/destinationidrequestbody.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetDestinationResponse](../../models/operations/getdestinationresponse.md)>**


## listDestinationsForWorkspace

List configured destinations for a workspace

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { ListDestinationsForWorkspaceResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.destination.listDestinationsForWorkspace({
  workspaceId: "c9578a64-5842-473a-8418-d162309fb092",
}).then((res: ListDestinationsForWorkspaceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.WorkspaceIdRequestBody](../../models/shared/workspaceidrequestbody.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.ListDestinationsForWorkspaceResponse](../../models/operations/listdestinationsforworkspaceresponse.md)>**


## searchDestinations

Search destinations

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { SearchDestinationsResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.destination.searchDestinations({
  connectionConfiguration: "occaecati",
  destinationDefinitionId: "921aefb9-f58c-44d8-ae68-e4be056013f5",
  destinationId: "9da757a5-9ecf-4ef6-aef1-caa3383c2beb",
  destinationName: "dolore",
  name: "Colleen Dickinson",
  workspaceId: "c8d72f64-d1db-41f2-8431-0661e96349e1",
}).then((res: SearchDestinationsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `request`                                                            | [shared.DestinationSearch](../../models/shared/destinationsearch.md) | :heavy_check_mark:                                                   | The request object to use for the request.                           |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.SearchDestinationsResponse](../../models/operations/searchdestinationsresponse.md)>**


## updateDestination

Update a destination

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { UpdateDestinationResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.destination.updateDestination({
  connectionConfiguration: "impedit",
  destinationId: "f9e06e3a-4370-400a-a6b6-bc9b8f759eac",
  name: "Dana Ortiz",
}).then((res: UpdateDestinationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `request`                                                            | [shared.DestinationUpdate](../../models/shared/destinationupdate.md) | :heavy_check_mark:                                                   | The request object to use for the request.                           |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.UpdateDestinationResponse](../../models/operations/updatedestinationresponse.md)>**

