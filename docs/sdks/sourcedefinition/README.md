# sourceDefinition

## Overview

SourceDefinition related resources.

### Available Operations

* [createCustomSourceDefinition](#createcustomsourcedefinition) - Creates a custom sourceDefinition for the given workspace
* [deleteSourceDefinition](#deletesourcedefinition) - Delete a source definition
* [getSourceDefinition](#getsourcedefinition) - Get source
* [getSourceDefinitionForWorkspace](#getsourcedefinitionforworkspace) - Get a sourceDefinition that is configured for the given workspace
* [grantSourceDefinitionToWorkspace](#grantsourcedefinitiontoworkspace) - grant a private, non-custom sourceDefinition to a given workspace
* [listLatestSourceDefinitions](#listlatestsourcedefinitions) - List the latest sourceDefinitions Airbyte supports
* [listPrivateSourceDefinitions](#listprivatesourcedefinitions) - List all private, non-custom sourceDefinitions, and for each indicate whether the given workspace has a grant for using the definition. Used by admins to view and modify a given workspace's grants.
* [listSourceDefinitions](#listsourcedefinitions) - List all the sourceDefinitions the current Airbyte deployment is configured to use
* [listSourceDefinitionsForWorkspace](#listsourcedefinitionsforworkspace) - List all the sourceDefinitions the given workspace is configured to use
* [revokeSourceDefinitionFromWorkspace](#revokesourcedefinitionfromworkspace) - revoke a grant to a private, non-custom sourceDefinition from a given workspace
* [updateSourceDefinition](#updatesourcedefinition) - Update a sourceDefinition

## createCustomSourceDefinition

Creates a custom sourceDefinition for the given workspace

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { CreateCustomSourceDefinitionResponse } from "airbyte-test/dist/sdk/models/operations";
import { JobType, ReleaseStage, SourceDefinitionReadSourceType } from "airbyte-test/dist/sdk/models/shared";
import { RFCDate } from "airbyte-test/dist/sdk/types";

const sdk = new AirbyteTest();

sdk.sourceDefinition.createCustomSourceDefinition({
  sourceDefinition: {
    dockerImageTag: "vero",
    dockerRepository: "eos",
    documentationUrl: "http://tattered-pilgrimage.com",
    icon: "commodi",
    name: "Sylvester Cormier",
    resourceRequirements: {
      default: {
        cpuLimit: "iusto",
        cpuRequest: "ab",
        memoryLimit: "deserunt",
        memoryRequest: "sed",
      },
      jobSpecific: [
        {
          jobType: JobType.ResetConnection,
          resourceRequirements: {
            cpuLimit: "placeat",
            cpuRequest: "ullam",
            memoryLimit: "molestiae",
            memoryRequest: "itaque",
          },
        },
        {
          jobType: JobType.Sync,
          resourceRequirements: {
            cpuLimit: "nemo",
            cpuRequest: "non",
            memoryLimit: "recusandae",
            memoryRequest: "omnis",
          },
        },
        {
          jobType: JobType.GetSpec,
          resourceRequirements: {
            cpuLimit: "aliquam",
            cpuRequest: "dolor",
            memoryLimit: "occaecati",
            memoryRequest: "quibusdam",
          },
        },
      ],
    },
  },
  workspaceId: "22246569-4624-4070-84f7-ab37cef02225",
}).then((res: CreateCustomSourceDefinitionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [shared.CustomSourceDefinitionCreate](../../models/shared/customsourcedefinitioncreate.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.CreateCustomSourceDefinitionResponse](../../models/operations/createcustomsourcedefinitionresponse.md)>**


## deleteSourceDefinition

Delete a source definition

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { DeleteSourceDefinitionResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.sourceDefinition.deleteSourceDefinition({
  sourceDefinitionId: "194db554-10ad-4c66-9af9-0a26c7cdc981",
}).then((res: DeleteSourceDefinitionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [shared.SourceDefinitionIdRequestBody](../../models/shared/sourcedefinitionidrequestbody.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.DeleteSourceDefinitionResponse](../../models/operations/deletesourcedefinitionresponse.md)>**


## getSourceDefinition

Get source

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { GetSourceDefinitionResponse } from "airbyte-test/dist/sdk/models/operations";
import { JobType, ReleaseStage, SourceDefinitionReadSourceType } from "airbyte-test/dist/sdk/models/shared";
import { RFCDate } from "airbyte-test/dist/sdk/types";

const sdk = new AirbyteTest();

sdk.sourceDefinition.getSourceDefinition({
  sourceDefinitionId: "f068981d-6bb3-43cf-aa34-8c31bf407ee4",
}).then((res: GetSourceDefinitionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [shared.SourceDefinitionIdRequestBody](../../models/shared/sourcedefinitionidrequestbody.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetSourceDefinitionResponse](../../models/operations/getsourcedefinitionresponse.md)>**


## getSourceDefinitionForWorkspace

Get a sourceDefinition that is configured for the given workspace

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { GetSourceDefinitionForWorkspaceResponse } from "airbyte-test/dist/sdk/models/operations";
import { JobType, ReleaseStage, SourceDefinitionReadSourceType } from "airbyte-test/dist/sdk/models/shared";
import { RFCDate } from "airbyte-test/dist/sdk/types";

const sdk = new AirbyteTest();

sdk.sourceDefinition.getSourceDefinitionForWorkspace({
  sourceDefinitionId: "fcf0c42b-78f1-4562-a398-a0dc766324cc",
  workspaceId: "b06c8ca1-2d02-4529-a70b-8d5722dd895b",
}).then((res: GetSourceDefinitionForWorkspaceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [shared.SourceDefinitionIdWithWorkspaceId](../../models/shared/sourcedefinitionidwithworkspaceid.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetSourceDefinitionForWorkspaceResponse](../../models/operations/getsourcedefinitionforworkspaceresponse.md)>**


## grantSourceDefinitionToWorkspace

grant a private, non-custom sourceDefinition to a given workspace

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { GrantSourceDefinitionToWorkspaceResponse } from "airbyte-test/dist/sdk/models/operations";
import { JobType, ReleaseStage, SourceDefinitionReadSourceType } from "airbyte-test/dist/sdk/models/shared";
import { RFCDate } from "airbyte-test/dist/sdk/types";

const sdk = new AirbyteTest();

sdk.sourceDefinition.grantSourceDefinitionToWorkspace({
  sourceDefinitionId: "8bcf24db-9596-4933-92f7-4533994d78de",
  workspaceId: "3b6e9389-f5ab-4b7f-a625-50a28382ac48",
}).then((res: GrantSourceDefinitionToWorkspaceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [shared.SourceDefinitionIdWithWorkspaceId](../../models/shared/sourcedefinitionidwithworkspaceid.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GrantSourceDefinitionToWorkspaceResponse](../../models/operations/grantsourcedefinitiontoworkspaceresponse.md)>**


## listLatestSourceDefinitions

Guaranteed to retrieve the latest information on supported sources.

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { ListLatestSourceDefinitionsResponse } from "airbyte-test/dist/sdk/models/operations";
import { JobType, ReleaseStage, SourceDefinitionReadSourceType } from "airbyte-test/dist/sdk/models/shared";
import { RFCDate } from "airbyte-test/dist/sdk/types";

const sdk = new AirbyteTest();

sdk.sourceDefinition.listLatestSourceDefinitions().then((res: ListLatestSourceDefinitionsResponse) => {
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

**Promise<[operations.ListLatestSourceDefinitionsResponse](../../models/operations/listlatestsourcedefinitionsresponse.md)>**


## listPrivateSourceDefinitions

List all private, non-custom sourceDefinitions, and for each indicate whether the given workspace has a grant for using the definition. Used by admins to view and modify a given workspace's grants.

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { ListPrivateSourceDefinitionsResponse } from "airbyte-test/dist/sdk/models/operations";
import { JobType, ReleaseStage, SourceDefinitionReadSourceType } from "airbyte-test/dist/sdk/models/shared";
import { RFCDate } from "airbyte-test/dist/sdk/types";

const sdk = new AirbyteTest();

sdk.sourceDefinition.listPrivateSourceDefinitions({
  workspaceId: "3afd2315-bba6-4501-a4e0-6f5bf6ae591b",
}).then((res: ListPrivateSourceDefinitionsResponse) => {
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

**Promise<[operations.ListPrivateSourceDefinitionsResponse](../../models/operations/listprivatesourcedefinitionsresponse.md)>**


## listSourceDefinitions

List all the sourceDefinitions the current Airbyte deployment is configured to use

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { ListSourceDefinitionsResponse } from "airbyte-test/dist/sdk/models/operations";
import { JobType, ReleaseStage, SourceDefinitionReadSourceType } from "airbyte-test/dist/sdk/models/shared";
import { RFCDate } from "airbyte-test/dist/sdk/types";

const sdk = new AirbyteTest();

sdk.sourceDefinition.listSourceDefinitions().then((res: ListSourceDefinitionsResponse) => {
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

**Promise<[operations.ListSourceDefinitionsResponse](../../models/operations/listsourcedefinitionsresponse.md)>**


## listSourceDefinitionsForWorkspace

List all the sourceDefinitions the given workspace is configured to use

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { ListSourceDefinitionsForWorkspaceResponse } from "airbyte-test/dist/sdk/models/operations";
import { JobType, ReleaseStage, SourceDefinitionReadSourceType } from "airbyte-test/dist/sdk/models/shared";
import { RFCDate } from "airbyte-test/dist/sdk/types";

const sdk = new AirbyteTest();

sdk.sourceDefinition.listSourceDefinitionsForWorkspace({
  workspaceId: "c8bdef36-12b6-43c2-85fd-a840774a68a9",
}).then((res: ListSourceDefinitionsForWorkspaceResponse) => {
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

**Promise<[operations.ListSourceDefinitionsForWorkspaceResponse](../../models/operations/listsourcedefinitionsforworkspaceresponse.md)>**


## revokeSourceDefinitionFromWorkspace

revoke a grant to a private, non-custom sourceDefinition from a given workspace

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { RevokeSourceDefinitionFromWorkspaceResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.sourceDefinition.revokeSourceDefinitionFromWorkspace({
  sourceDefinitionId: "a35d086b-6f66-4fef-820e-9f443b4257b9",
  workspaceId: "92c8dbda-6a61-4efa-a198-258fd0a9eba4",
}).then((res: RevokeSourceDefinitionFromWorkspaceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [shared.SourceDefinitionIdWithWorkspaceId](../../models/shared/sourcedefinitionidwithworkspaceid.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.RevokeSourceDefinitionFromWorkspaceResponse](../../models/operations/revokesourcedefinitionfromworkspaceresponse.md)>**


## updateSourceDefinition

Update a sourceDefinition

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { UpdateSourceDefinitionResponse } from "airbyte-test/dist/sdk/models/operations";
import { JobType, ReleaseStage, SourceDefinitionReadSourceType } from "airbyte-test/dist/sdk/models/shared";
import { RFCDate } from "airbyte-test/dist/sdk/types";

const sdk = new AirbyteTest();

sdk.sourceDefinition.updateSourceDefinition({
  dockerImageTag: "voluptate",
  resourceRequirements: {
    default: {
      cpuLimit: "voluptatibus",
      cpuRequest: "quam",
      memoryLimit: "nulla",
      memoryRequest: "dolorem",
    },
    jobSpecific: [
      {
        jobType: JobType.Replicate,
        resourceRequirements: {
          cpuLimit: "perferendis",
          cpuRequest: "quaerat",
          memoryLimit: "excepturi",
          memoryRequest: "aliquid",
        },
      },
      {
        jobType: JobType.DiscoverSchema,
        resourceRequirements: {
          cpuLimit: "voluptatem",
          cpuRequest: "illum",
          memoryLimit: "laboriosam",
          memoryRequest: "culpa",
        },
      },
      {
        jobType: JobType.GetSpec,
        resourceRequirements: {
          cpuLimit: "atque",
          cpuRequest: "ratione",
          memoryLimit: "vitae",
          memoryRequest: "quisquam",
        },
      },
      {
        jobType: JobType.Sync,
        resourceRequirements: {
          cpuLimit: "nihil",
          cpuRequest: "culpa",
          memoryLimit: "temporibus",
          memoryRequest: "a",
        },
      },
    ],
  },
  sourceDefinitionId: "596fdf1a-d837-4ae8-8c1c-19c95ba99867",
}).then((res: UpdateSourceDefinitionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.SourceDefinitionUpdate](../../models/shared/sourcedefinitionupdate.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.UpdateSourceDefinitionResponse](../../models/operations/updatesourcedefinitionresponse.md)>**

