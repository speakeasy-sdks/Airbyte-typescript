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
  defaultGeography: Geography.Auto,
  displaySetupWizard: false,
  email: "Franco30@yahoo.com",
  name: "Luz Hudson",
  news: false,
  notifications: [
    {
      customerioConfiguration: {
        "voluptatibus": "facilis",
        "doloremque": "officiis",
        "nisi": "reprehenderit",
      },
      notificationType: NotificationType.Customerio,
      sendOnFailure: false,
      sendOnSuccess: false,
      slackConfiguration: {
        webhook: "alias",
      },
    },
    {
      customerioConfiguration: {
        "ut": "hic",
        "facere": "tenetur",
        "saepe": "assumenda",
      },
      notificationType: NotificationType.Slack,
      sendOnFailure: false,
      sendOnSuccess: false,
      slackConfiguration: {
        webhook: "exercitationem",
      },
    },
    {
      customerioConfiguration: {
        "sit": "recusandae",
        "a": "exercitationem",
      },
      notificationType: NotificationType.Slack,
      sendOnFailure: false,
      sendOnSuccess: false,
      slackConfiguration: {
        webhook: "mollitia",
      },
    },
  ],
  securityUpdates: false,
  webhookConfigs: [
    {
      authToken: "ut",
      name: "Ryan Prosacco",
      validationUrl: "recusandae",
    },
  ],
}).then((res: CreateWorkspaceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteWorkspace

Deletes a workspace

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { DeleteWorkspaceResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.workspace.deleteWorkspace({
  workspaceId: "99731adc-05d8-45ae-adfb-70fb3874290d",
}).then((res: DeleteWorkspaceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getWorkspace

Find workspace by ID

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { GetWorkspaceResponse } from "airbyte-test/dist/sdk/models/operations";
import { Geography, NotificationType } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.workspace.getWorkspace({
  workspaceId: "336561ec-a16e-4f89-851b-d76eeeb518c4",
}).then((res: GetWorkspaceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getWorkspaceByConnectionId

Find workspace by connection id

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { GetWorkspaceByConnectionIdResponse } from "airbyte-test/dist/sdk/models/operations";
import { Geography, NotificationType } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.workspace.getWorkspaceByConnectionId({
  connectionId: "da1fad35-512f-406d-8e5b-72f0f548568a",
}).then((res: GetWorkspaceByConnectionIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getWorkspaceBySlug

Find workspace by slug

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { GetWorkspaceBySlugResponse } from "airbyte-test/dist/sdk/models/operations";
import { Geography, NotificationType } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.workspace.getWorkspaceBySlug({
  slug: "consequatur",
}).then((res: GetWorkspaceBySlugResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

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
  email: "Effie2@gmail.com",
  initialSetupComplete: false,
  news: false,
  notifications: [
    {
      customerioConfiguration: {
        "quibusdam": "autem",
      },
      notificationType: NotificationType.Customerio,
      sendOnFailure: false,
      sendOnSuccess: false,
      slackConfiguration: {
        webhook: "tempore",
      },
    },
    {
      customerioConfiguration: {
        "modi": "ratione",
        "aliquam": "ea",
        "aliquam": "corporis",
      },
      notificationType: NotificationType.Customerio,
      sendOnFailure: false,
      sendOnSuccess: false,
      slackConfiguration: {
        webhook: "ipsa",
      },
    },
    {
      customerioConfiguration: {
        "aut": "molestias",
      },
      notificationType: NotificationType.Slack,
      sendOnFailure: false,
      sendOnSuccess: false,
      slackConfiguration: {
        webhook: "repellat",
      },
    },
  ],
  securityUpdates: false,
  webhookConfigs: [
    {
      authToken: "libero",
      name: "Alvin Runolfsdottir",
      validationUrl: "a",
    },
    {
      authToken: "tenetur",
      name: "Mr. Bernadette Quigley",
      validationUrl: "debitis",
    },
    {
      authToken: "enim",
      name: "Eloise Hintz",
      validationUrl: "animi",
    },
  ],
  workspaceId: "45ac82b8-5f8b-4c2c-aba8-da4127dd597f",
}).then((res: UpdateWorkspaceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateWorkspaceFeedback

Update workspace feedback state

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { UpdateWorkspaceFeedbackResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.workspace.updateWorkspaceFeedback({
  workspaceId: "f4711aa1-bc74-4b86-8ecc-74f77b4848bd",
}).then((res: UpdateWorkspaceFeedbackResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateWorkspaceName

Update workspace name

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { UpdateWorkspaceNameResponse } from "airbyte-test/dist/sdk/models/operations";
import { Geography, NotificationType } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.workspace.updateWorkspaceName({
  name: "Angie Johnston I",
  workspaceId: "41d2c3b8-0809-4437-be06-0459bebbad02",
}).then((res: UpdateWorkspaceNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
