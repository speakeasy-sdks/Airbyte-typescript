# workspace

## Overview

Workspace related resources.

### Available Operations

* [createWorkspace](#createworkspace) - Creates a workspace
* [deleteWorkspace](#deleteworkspace) - Deletes a workspace
* [getWorkspace](#getworkspace) - Find workspace by ID
* [getWorkspaceByConnectionId](#getworkspacebyconnectionid) - Find workspace by connection id
* [getWorkspaceBySlug](#getworkspacebyslug) - Find workspace by slug
* [listWorkspaces](#listworkspaces) - List all workspaces registered in the current Airbyte deployment
* [updateWorkspace](#updateworkspace) - Update workspace state
* [updateWorkspaceFeedback](#updateworkspacefeedback) - Update workspace feedback state
* [updateWorkspaceName](#updateworkspacename) - Update workspace name

## createWorkspace

Creates a workspace

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { CreateWorkspaceResponse } from "airbyte-test/dist/sdk/models/operations";
import { Geography, NotificationType } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.workspace.createWorkspace({
  anonymousDataCollection: false,
  defaultGeography: Geography.Us,
  displaySetupWizard: false,
  email: "Eliseo_Feil@hotmail.com",
  name: "Becky Daugherty",
  news: false,
  notifications: [
    {
      customerioConfiguration: {},
      notificationType: NotificationType.Customerio,
      sendOnFailure: false,
      sendOnSuccess: false,
      slackConfiguration: {
        webhook: "temporibus",
      },
    },
    {
      customerioConfiguration: {},
      notificationType: NotificationType.Customerio,
      sendOnFailure: false,
      sendOnSuccess: false,
      slackConfiguration: {
        webhook: "quaerat",
      },
    },
    {
      customerioConfiguration: {},
      notificationType: NotificationType.Customerio,
      sendOnFailure: false,
      sendOnSuccess: false,
      slackConfiguration: {
        webhook: "molestiae",
      },
    },
    {
      customerioConfiguration: {},
      notificationType: NotificationType.Customerio,
      sendOnFailure: false,
      sendOnSuccess: false,
      slackConfiguration: {
        webhook: "laborum",
      },
    },
  ],
  securityUpdates: false,
  webhookConfigs: [
    {
      authToken: "rerum",
      name: "Mr. Megan Botsford",
      validationUrl: "perspiciatis",
    },
  ],
}).then((res: CreateWorkspaceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `request`                                                        | [shared.WorkspaceCreate](../../models/shared/workspacecreate.md) | :heavy_check_mark:                                               | The request object to use for the request.                       |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |


### Response

**Promise<[operations.CreateWorkspaceResponse](../../models/operations/createworkspaceresponse.md)>**


## deleteWorkspace

Deletes a workspace

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { DeleteWorkspaceResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.workspace.deleteWorkspace({
  workspaceId: "5d1e6698-fcc4-4596-a17c-297767633425",
}).then((res: DeleteWorkspaceResponse) => {
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

**Promise<[operations.DeleteWorkspaceResponse](../../models/operations/deleteworkspaceresponse.md)>**


## getWorkspace

Find workspace by ID

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { GetWorkspaceResponse } from "airbyte-test/dist/sdk/models/operations";
import { Geography, NotificationType } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.workspace.getWorkspace({
  workspaceId: "4038bfb5-971e-4981-9055-7389cedbac7f",
}).then((res: GetWorkspaceResponse) => {
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

**Promise<[operations.GetWorkspaceResponse](../../models/operations/getworkspaceresponse.md)>**


## getWorkspaceByConnectionId

Find workspace by connection id

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { GetWorkspaceByConnectionIdResponse } from "airbyte-test/dist/sdk/models/operations";
import { Geography, NotificationType } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.workspace.getWorkspaceByConnectionId({
  connectionId: "da39594d-66bc-42ae-8806-32b9954b6fa2",
}).then((res: GetWorkspaceByConnectionIdResponse) => {
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

**Promise<[operations.GetWorkspaceByConnectionIdResponse](../../models/operations/getworkspacebyconnectionidresponse.md)>**


## getWorkspaceBySlug

Find workspace by slug

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { GetWorkspaceBySlugResponse } from "airbyte-test/dist/sdk/models/operations";
import { Geography, NotificationType } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.workspace.getWorkspaceBySlug({
  slug: "explicabo",
}).then((res: GetWorkspaceBySlugResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `request`                                                        | [shared.SlugRequestBody](../../models/shared/slugrequestbody.md) | :heavy_check_mark:                                               | The request object to use for the request.                       |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |


### Response

**Promise<[operations.GetWorkspaceBySlugResponse](../../models/operations/getworkspacebyslugresponse.md)>**


## listWorkspaces

List all workspaces registered in the current Airbyte deployment

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { ListWorkspacesResponse } from "airbyte-test/dist/sdk/models/operations";
import { Geography, NotificationType } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.workspace.listWorkspaces().then((res: ListWorkspacesResponse) => {
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

**Promise<[operations.ListWorkspacesResponse](../../models/operations/listworkspacesresponse.md)>**


## updateWorkspace

Update workspace state

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { UpdateWorkspaceResponse } from "airbyte-test/dist/sdk/models/operations";
import { Geography, NotificationType } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.workspace.updateWorkspace({
  anonymousDataCollection: false,
  defaultGeography: Geography.Auto,
  displaySetupWizard: false,
  email: "Colten_Johnson@yahoo.com",
  initialSetupComplete: false,
  news: false,
  notifications: [
    {
      customerioConfiguration: {},
      notificationType: NotificationType.Customerio,
      sendOnFailure: false,
      sendOnSuccess: false,
      slackConfiguration: {
        webhook: "ipsam",
      },
    },
  ],
  securityUpdates: false,
  webhookConfigs: [
    {
      authToken: "sequi",
      name: "Mr. Pete Bergstrom III",
      validationUrl: "tempore",
    },
    {
      authToken: "necessitatibus",
      name: "Randall McLaughlin DVM",
      validationUrl: "quod",
    },
  ],
  workspaceId: "2053b749-366a-4c8e-a0f2-bf19588d40d0",
}).then((res: UpdateWorkspaceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `request`                                                        | [shared.WorkspaceUpdate](../../models/shared/workspaceupdate.md) | :heavy_check_mark:                                               | The request object to use for the request.                       |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |


### Response

**Promise<[operations.UpdateWorkspaceResponse](../../models/operations/updateworkspaceresponse.md)>**


## updateWorkspaceFeedback

Update workspace feedback state

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { UpdateWorkspaceFeedbackResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.workspace.updateWorkspaceFeedback({
  workspaceId: "3f3deba2-97be-43e9-8bc4-0df868fd5240",
}).then((res: UpdateWorkspaceFeedbackResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [shared.WorkspaceGiveFeedback](../../models/shared/workspacegivefeedback.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.UpdateWorkspaceFeedbackResponse](../../models/operations/updateworkspacefeedbackresponse.md)>**


## updateWorkspaceName

Update workspace name

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { UpdateWorkspaceNameResponse } from "airbyte-test/dist/sdk/models/operations";
import { Geography, NotificationType } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.workspace.updateWorkspaceName({
  name: "Leticia Renner",
  workspaceId: "1d492f4f-127f-4b0e-8bf1-f8217978d0ac",
}).then((res: UpdateWorkspaceNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [shared.WorkspaceUpdateName](../../models/shared/workspaceupdatename.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.UpdateWorkspaceNameResponse](../../models/operations/updateworkspacenameresponse.md)>**

