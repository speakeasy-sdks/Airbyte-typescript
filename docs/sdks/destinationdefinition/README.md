# destinationDefinition

## Overview

DestinationDefinition related resources.

### Available Operations

* [createCustomDestinationDefinition](#createcustomdestinationdefinition) - Creates a custom destinationDefinition for the given workspace
* [deleteDestinationDefinition](#deletedestinationdefinition) - Delete a destination definition
* [getDestinationDefinition](#getdestinationdefinition) - Get destinationDefinition
* [getDestinationDefinitionForWorkspace](#getdestinationdefinitionforworkspace) - Get a destinationDefinition that is configured for the given workspace
* [grantDestinationDefinitionToWorkspace](#grantdestinationdefinitiontoworkspace) - grant a private, non-custom destinationDefinition to a given workspace
* [listDestinationDefinitions](#listdestinationdefinitions) - List all the destinationDefinitions the current Airbyte deployment is configured to use
* [listDestinationDefinitionsForWorkspace](#listdestinationdefinitionsforworkspace) - List all the destinationDefinitions the given workspace is configured to use
* [listLatestDestinationDefinitions](#listlatestdestinationdefinitions) - List the latest destinationDefinitions Airbyte supports
* [listPrivateDestinationDefinitions](#listprivatedestinationdefinitions) - List all private, non-custom destinationDefinitions, and for each indicate whether the given workspace has a grant for using the definition. Used by admins to view and modify a given workspace's grants.
* [revokeDestinationDefinitionFromWorkspace](#revokedestinationdefinitionfromworkspace) - revoke a grant to a private, non-custom destinationDefinition from a given workspace
* [updateDestinationDefinition](#updatedestinationdefinition) - Update destinationDefinition

## createCustomDestinationDefinition

Creates a custom destinationDefinition for the given workspace

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { CreateCustomDestinationDefinitionResponse } from "airbyte-test/dist/sdk/models/operations";
import { JobType, ReleaseStage } from "airbyte-test/dist/sdk/models/shared";
import { RFCDate } from "airbyte-test/dist/sdk/types";

const sdk = new AirbyteTest();

sdk.destinationDefinition.createCustomDestinationDefinition({
  destinationDefinition: {
    dockerImageTag: "labore",
    dockerRepository: "veritatis",
    documentationUrl: "https://empty-buffer.com",
    icon: "dolorem",
    name: "Tina Moore",
    resourceRequirements: {
      default: {
        cpuLimit: "soluta",
        cpuRequest: "libero",
        memoryLimit: "rem",
        memoryRequest: "dolorum",
      },
      jobSpecific: [
        {
          jobType: JobType.CheckConnection,
          resourceRequirements: {
            cpuLimit: "alias",
            cpuRequest: "magni",
            memoryLimit: "vel",
            memoryRequest: "quae",
          },
        },
        {
          jobType: JobType.GetSpec,
          resourceRequirements: {
            cpuLimit: "modi",
            cpuRequest: "neque",
            memoryLimit: "exercitationem",
            memoryRequest: "itaque",
          },
        },
      ],
    },
  },
  workspaceId: "139dbc22-59b1-4abd-a8c0-70e1084cb067",
}).then((res: CreateCustomDestinationDefinitionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [shared.CustomDestinationDefinitionCreate](../../models/shared/customdestinationdefinitioncreate.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.CreateCustomDestinationDefinitionResponse](../../models/operations/createcustomdestinationdefinitionresponse.md)>**


## deleteDestinationDefinition

Delete a destination definition

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { DeleteDestinationDefinitionResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.destinationDefinition.deleteDestinationDefinition({
  destinationDefinitionId: "2d1ad879-eeb9-4665-b85e-fbd02bae0be2",
}).then((res: DeleteDestinationDefinitionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [shared.DestinationDefinitionIdRequestBody](../../models/shared/destinationdefinitionidrequestbody.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.DeleteDestinationDefinitionResponse](../../models/operations/deletedestinationdefinitionresponse.md)>**


## getDestinationDefinition

Get destinationDefinition

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { GetDestinationDefinitionResponse } from "airbyte-test/dist/sdk/models/operations";
import { JobType, ReleaseStage } from "airbyte-test/dist/sdk/models/shared";
import { RFCDate } from "airbyte-test/dist/sdk/types";

const sdk = new AirbyteTest();

sdk.destinationDefinition.getDestinationDefinition({
  destinationDefinitionId: "d782259e-3ea4-4b51-97f9-2443da7ce52b",
}).then((res: GetDestinationDefinitionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [shared.DestinationDefinitionIdRequestBody](../../models/shared/destinationdefinitionidrequestbody.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GetDestinationDefinitionResponse](../../models/operations/getdestinationdefinitionresponse.md)>**


## getDestinationDefinitionForWorkspace

Get a destinationDefinition that is configured for the given workspace

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { GetDestinationDefinitionForWorkspaceResponse } from "airbyte-test/dist/sdk/models/operations";
import { JobType, ReleaseStage } from "airbyte-test/dist/sdk/models/shared";
import { RFCDate } from "airbyte-test/dist/sdk/types";

const sdk = new AirbyteTest();

sdk.destinationDefinition.getDestinationDefinitionForWorkspace({
  destinationDefinitionId: "895c537c-6454-4efb-8b34-896c3ca5acfb",
  workspaceId: "e2fd5707-5779-4291-b7de-ac646ecb5734",
}).then((res: GetDestinationDefinitionForWorkspaceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [shared.DestinationDefinitionIdWithWorkspaceId](../../models/shared/destinationdefinitionidwithworkspaceid.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.GetDestinationDefinitionForWorkspaceResponse](../../models/operations/getdestinationdefinitionforworkspaceresponse.md)>**


## grantDestinationDefinitionToWorkspace

grant a private, non-custom destinationDefinition to a given workspace

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { GrantDestinationDefinitionToWorkspaceResponse } from "airbyte-test/dist/sdk/models/operations";
import { JobType, ReleaseStage } from "airbyte-test/dist/sdk/models/shared";
import { RFCDate } from "airbyte-test/dist/sdk/types";

const sdk = new AirbyteTest();

sdk.destinationDefinition.grantDestinationDefinitionToWorkspace({
  destinationDefinitionId: "09e3eb1e-5a2b-412e-b07f-116db99545fc",
  workspaceId: "95fa8897-0e18-49db-b30f-cb33ea055b19",
}).then((res: GrantDestinationDefinitionToWorkspaceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [shared.DestinationDefinitionIdWithWorkspaceId](../../models/shared/destinationdefinitionidwithworkspaceid.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.GrantDestinationDefinitionToWorkspaceResponse](../../models/operations/grantdestinationdefinitiontoworkspaceresponse.md)>**


## listDestinationDefinitions

List all the destinationDefinitions the current Airbyte deployment is configured to use

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { ListDestinationDefinitionsResponse } from "airbyte-test/dist/sdk/models/operations";
import { JobType, ReleaseStage } from "airbyte-test/dist/sdk/models/shared";
import { RFCDate } from "airbyte-test/dist/sdk/types";

const sdk = new AirbyteTest();

sdk.destinationDefinition.listDestinationDefinitions().then((res: ListDestinationDefinitionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListDestinationDefinitionsResponse](../../models/operations/listdestinationdefinitionsresponse.md)>**


## listDestinationDefinitionsForWorkspace

List all the destinationDefinitions the given workspace is configured to use

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { ListDestinationDefinitionsForWorkspaceResponse } from "airbyte-test/dist/sdk/models/operations";
import { JobType, ReleaseStage } from "airbyte-test/dist/sdk/models/shared";
import { RFCDate } from "airbyte-test/dist/sdk/types";

const sdk = new AirbyteTest();

sdk.destinationDefinition.listDestinationDefinitionsForWorkspace({
  workspaceId: "7cd44e2f-52d8-42d3-913b-b6f48b656bcd",
}).then((res: ListDestinationDefinitionsForWorkspaceResponse) => {
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

**Promise<[operations.ListDestinationDefinitionsForWorkspaceResponse](../../models/operations/listdestinationdefinitionsforworkspaceresponse.md)>**


## listLatestDestinationDefinitions

Guaranteed to retrieve the latest information on supported destinations.

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { ListLatestDestinationDefinitionsResponse } from "airbyte-test/dist/sdk/models/operations";
import { JobType, ReleaseStage } from "airbyte-test/dist/sdk/models/shared";
import { RFCDate } from "airbyte-test/dist/sdk/types";

const sdk = new AirbyteTest();

sdk.destinationDefinition.listLatestDestinationDefinitions().then((res: ListLatestDestinationDefinitionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListLatestDestinationDefinitionsResponse](../../models/operations/listlatestdestinationdefinitionsresponse.md)>**


## listPrivateDestinationDefinitions

List all private, non-custom destinationDefinitions, and for each indicate whether the given workspace has a grant for using the definition. Used by admins to view and modify a given workspace's grants.

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { ListPrivateDestinationDefinitionsResponse } from "airbyte-test/dist/sdk/models/operations";
import { JobType, ReleaseStage } from "airbyte-test/dist/sdk/models/shared";
import { RFCDate } from "airbyte-test/dist/sdk/types";

const sdk = new AirbyteTest();

sdk.destinationDefinition.listPrivateDestinationDefinitions({
  workspaceId: "b35ff2e4-b275-437a-8cd9-e7319c177d52",
}).then((res: ListPrivateDestinationDefinitionsResponse) => {
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

**Promise<[operations.ListPrivateDestinationDefinitionsResponse](../../models/operations/listprivatedestinationdefinitionsresponse.md)>**


## revokeDestinationDefinitionFromWorkspace

revoke a grant to a private, non-custom destinationDefinition from a given workspace

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { RevokeDestinationDefinitionFromWorkspaceResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.destinationDefinition.revokeDestinationDefinitionFromWorkspace({
  destinationDefinitionId: "5f77b114-eeb5-42ff-b85f-c37814d4c98e",
  workspaceId: "0c2bb89e-b75d-4ad6-b6c6-00503d8bb311",
}).then((res: RevokeDestinationDefinitionFromWorkspaceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [shared.DestinationDefinitionIdWithWorkspaceId](../../models/shared/destinationdefinitionidwithworkspaceid.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.RevokeDestinationDefinitionFromWorkspaceResponse](../../models/operations/revokedestinationdefinitionfromworkspaceresponse.md)>**


## updateDestinationDefinition

Update destinationDefinition

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { UpdateDestinationDefinitionResponse } from "airbyte-test/dist/sdk/models/operations";
import { JobType, ReleaseStage } from "airbyte-test/dist/sdk/models/shared";
import { RFCDate } from "airbyte-test/dist/sdk/types";

const sdk = new AirbyteTest();

sdk.destinationDefinition.updateDestinationDefinition({
  destinationDefinitionId: "80f739ae-9e05-47eb-809e-2810331f3981",
  dockerImageTag: "at",
  resourceRequirements: {
    default: {
      cpuLimit: "labore",
      cpuRequest: "minus",
      memoryLimit: "esse",
      memoryRequest: "voluptatem",
    },
    jobSpecific: [
      {
        jobType: JobType.ResetConnection,
        resourceRequirements: {
          cpuLimit: "ea",
          cpuRequest: "aperiam",
          memoryLimit: "dignissimos",
          memoryRequest: "repellat",
        },
      },
    ],
  },
}).then((res: UpdateDestinationDefinitionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [shared.DestinationDefinitionUpdate](../../models/shared/destinationdefinitionupdate.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.UpdateDestinationDefinitionResponse](../../models/operations/updatedestinationdefinitionresponse.md)>**

