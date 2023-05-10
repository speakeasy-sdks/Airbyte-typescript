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
import { JobTypeEnum, ReleaseStageEnum } from "airbyte-test/dist/sdk/models/shared";
import { RFCDate } from "airbyte-test/dist/sdk/types";

const sdk = new AirbyteTest();

sdk.destinationDefinition.createCustomDestinationDefinition({
  destinationDefinition: {
    dockerImageTag: "repudiandae",
    dockerRepository: "accusantium",
    documentationUrl: "https://uneven-codpiece.org",
    icon: "odio",
    name: "Fred Champlin",
    resourceRequirements: {
      default: {
        cpuLimit: "earum",
        cpuRequest: "adipisci",
        memoryLimit: "recusandae",
        memoryRequest: "similique",
      },
      jobSpecific: [
        {
          jobType: JobTypeEnum.ResetConnection,
          resourceRequirements: {
            cpuLimit: "quis",
            cpuRequest: "beatae",
            memoryLimit: "unde",
            memoryRequest: "molestiae",
          },
        },
        {
          jobType: JobTypeEnum.Replicate,
          resourceRequirements: {
            cpuLimit: "cupiditate",
            cpuRequest: "fugit",
            memoryLimit: "numquam",
            memoryRequest: "numquam",
          },
        },
      ],
    },
  },
  workspaceId: "3da7ce52-b895-4c53-bc64-54efb0b34896",
}).then((res: CreateCustomDestinationDefinitionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteDestinationDefinition

Delete a destination definition

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { DeleteDestinationDefinitionResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.destinationDefinition.deleteDestinationDefinition({
  destinationDefinitionId: "c3ca5acf-be2f-4d57-8757-7929177deac6",
}).then((res: DeleteDestinationDefinitionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getDestinationDefinition

Get destinationDefinition

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { GetDestinationDefinitionResponse } from "airbyte-test/dist/sdk/models/operations";
import { JobTypeEnum, ReleaseStageEnum } from "airbyte-test/dist/sdk/models/shared";
import { RFCDate } from "airbyte-test/dist/sdk/types";

const sdk = new AirbyteTest();

sdk.destinationDefinition.getDestinationDefinition({
  destinationDefinitionId: "46ecb573-409e-43eb-9e5a-2b12eb07f116",
}).then((res: GetDestinationDefinitionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getDestinationDefinitionForWorkspace

Get a destinationDefinition that is configured for the given workspace

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { GetDestinationDefinitionForWorkspaceResponse } from "airbyte-test/dist/sdk/models/operations";
import { JobTypeEnum, ReleaseStageEnum } from "airbyte-test/dist/sdk/models/shared";
import { RFCDate } from "airbyte-test/dist/sdk/types";

const sdk = new AirbyteTest();

sdk.destinationDefinition.getDestinationDefinitionForWorkspace({
  destinationDefinitionId: "db99545f-c95f-4a88-970e-189dbb30fcb3",
  workspaceId: "3ea055b1-97cd-444e-af52-d82d3513bb6f",
}).then((res: GetDestinationDefinitionForWorkspaceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## grantDestinationDefinitionToWorkspace

grant a private, non-custom destinationDefinition to a given workspace

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { GrantDestinationDefinitionToWorkspaceResponse } from "airbyte-test/dist/sdk/models/operations";
import { JobTypeEnum, ReleaseStageEnum } from "airbyte-test/dist/sdk/models/shared";
import { RFCDate } from "airbyte-test/dist/sdk/types";

const sdk = new AirbyteTest();

sdk.destinationDefinition.grantDestinationDefinitionToWorkspace({
  destinationDefinitionId: "48b656bc-db35-4ff2-a4b2-7537a8cd9e73",
  workspaceId: "19c177d5-25f7-47b1-94ee-b52ff785fc37",
}).then((res: GrantDestinationDefinitionToWorkspaceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listDestinationDefinitions

List all the destinationDefinitions the current Airbyte deployment is configured to use

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { ListDestinationDefinitionsResponse } from "airbyte-test/dist/sdk/models/operations";
import { JobTypeEnum, ReleaseStageEnum } from "airbyte-test/dist/sdk/models/shared";
import { RFCDate } from "airbyte-test/dist/sdk/types";

const sdk = new AirbyteTest();

sdk.destinationDefinition.listDestinationDefinitions().then((res: ListDestinationDefinitionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listDestinationDefinitionsForWorkspace

List all the destinationDefinitions the given workspace is configured to use

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { ListDestinationDefinitionsForWorkspaceResponse } from "airbyte-test/dist/sdk/models/operations";
import { JobTypeEnum, ReleaseStageEnum } from "airbyte-test/dist/sdk/models/shared";
import { RFCDate } from "airbyte-test/dist/sdk/types";

const sdk = new AirbyteTest();

sdk.destinationDefinition.listDestinationDefinitionsForWorkspace({
  workspaceId: "814d4c98-e0c2-4bb8-9eb7-5dad636c6005",
}).then((res: ListDestinationDefinitionsForWorkspaceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listLatestDestinationDefinitions

Guaranteed to retrieve the latest information on supported destinations.

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { ListLatestDestinationDefinitionsResponse } from "airbyte-test/dist/sdk/models/operations";
import { JobTypeEnum, ReleaseStageEnum } from "airbyte-test/dist/sdk/models/shared";
import { RFCDate } from "airbyte-test/dist/sdk/types";

const sdk = new AirbyteTest();

sdk.destinationDefinition.listLatestDestinationDefinitions().then((res: ListLatestDestinationDefinitionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listPrivateDestinationDefinitions

List all private, non-custom destinationDefinitions, and for each indicate whether the given workspace has a grant for using the definition. Used by admins to view and modify a given workspace's grants.

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { ListPrivateDestinationDefinitionsResponse } from "airbyte-test/dist/sdk/models/operations";
import { JobTypeEnum, ReleaseStageEnum } from "airbyte-test/dist/sdk/models/shared";
import { RFCDate } from "airbyte-test/dist/sdk/types";

const sdk = new AirbyteTest();

sdk.destinationDefinition.listPrivateDestinationDefinitions({
  workspaceId: "03d8bb31-180f-4739-ae9e-057eb809e281",
}).then((res: ListPrivateDestinationDefinitionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## revokeDestinationDefinitionFromWorkspace

revoke a grant to a private, non-custom destinationDefinition from a given workspace

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { RevokeDestinationDefinitionFromWorkspaceResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.destinationDefinition.revokeDestinationDefinitionFromWorkspace({
  destinationDefinitionId: "0331f398-1d4c-4700-b607-f3c93c73b9da",
  workspaceId: "3f2ceda7-e23f-4225-b411-faf4b7544e47",
}).then((res: RevokeDestinationDefinitionFromWorkspaceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateDestinationDefinition

Update destinationDefinition

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { UpdateDestinationDefinitionResponse } from "airbyte-test/dist/sdk/models/operations";
import { JobTypeEnum, ReleaseStageEnum } from "airbyte-test/dist/sdk/models/shared";
import { RFCDate } from "airbyte-test/dist/sdk/types";

const sdk = new AirbyteTest();

sdk.destinationDefinition.updateDestinationDefinition({
  destinationDefinitionId: "2e802857-a5b4-4046-ba7d-575f1400e764",
  dockerImageTag: "dolorum",
  resourceRequirements: {
    default: {
      cpuLimit: "possimus",
      cpuRequest: "voluptate",
      memoryLimit: "consectetur",
      memoryRequest: "nesciunt",
    },
    jobSpecific: [
      {
        jobType: JobTypeEnum.Replicate,
        resourceRequirements: {
          cpuLimit: "minus",
          cpuRequest: "sunt",
          memoryLimit: "distinctio",
          memoryRequest: "iusto",
        },
      },
      {
        jobType: JobTypeEnum.Sync,
        resourceRequirements: {
          cpuLimit: "et",
          cpuRequest: "facilis",
          memoryLimit: "amet",
          memoryRequest: "autem",
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
