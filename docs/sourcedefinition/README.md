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
    dockerImageTag: "possimus",
    dockerRepository: "ipsam",
    documentationUrl: "http://cool-cartilage.org",
    icon: "illum",
    name: "Kirk Heidenreich",
    resourceRequirements: {
      default: {
        cpuLimit: "facilis",
        cpuRequest: "placeat",
        memoryLimit: "reiciendis",
        memoryRequest: "dolores",
      },
      jobSpecific: [
        {
          jobType: JobType.Replicate,
          resourceRequirements: {
            cpuLimit: "facilis",
            cpuRequest: "cupiditate",
            memoryLimit: "nemo",
            memoryRequest: "natus",
          },
        },
        {
          jobType: JobType.DiscoverSchema,
          resourceRequirements: {
            cpuLimit: "provident",
            cpuRequest: "amet",
            memoryLimit: "dolor",
            memoryRequest: "nostrum",
          },
        },
      ],
    },
  },
  workspaceId: "2f745339-94d7-48de-bb6e-9389f5abb7f6",
}).then((res: CreateCustomSourceDefinitionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteSourceDefinition

Delete a source definition

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { DeleteSourceDefinitionResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.sourceDefinition.deleteSourceDefinition({
  sourceDefinitionId: "62550a28-382a-4c48-bafd-2315bba65016",
}).then((res: DeleteSourceDefinitionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

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
  sourceDefinitionId: "4e06f5bf-6ae5-491b-88bd-ef3612b63c20",
}).then((res: GetSourceDefinitionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

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
  sourceDefinitionId: "5fda8407-74a6-48a9-a35d-086b6f66fef0",
  workspaceId: "20e9f443-b425-47b9-92c8-dbda6a61efa2",
}).then((res: GetSourceDefinitionForWorkspaceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

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
  sourceDefinitionId: "198258fd-0a9e-4ba4-bf7d-3ef049640d6a",
  workspaceId: "1831c87a-df59-46fd-b1ad-837ae80c1c19",
}).then((res: GrantSourceDefinitionToWorkspaceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

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
  workspaceId: "c95ba998-678f-4a3f-a969-91af388ce036",
}).then((res: ListPrivateSourceDefinitionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

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
  workspaceId: "14448c79-77a0-4ef2-b536-028efeef9341",
}).then((res: ListSourceDefinitionsForWorkspaceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## revokeSourceDefinitionFromWorkspace

revoke a grant to a private, non-custom sourceDefinition from a given workspace

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { RevokeSourceDefinitionFromWorkspaceResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.sourceDefinition.revokeSourceDefinitionFromWorkspace({
  sourceDefinitionId: "52ed7e25-3f4c-4157-9eaa-7170f445accf",
  workspaceId: "667aaf9b-bad1-485f-a431-d6bf5c838fbb",
}).then((res: RevokeSourceDefinitionFromWorkspaceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

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
  dockerImageTag: "totam",
  resourceRequirements: {
    default: {
      cpuLimit: "quod",
      cpuRequest: "aspernatur",
      memoryLimit: "eaque",
      memoryRequest: "impedit",
    },
    jobSpecific: [
      {
        jobType: JobType.DiscoverSchema,
        resourceRequirements: {
          cpuLimit: "odio",
          cpuRequest: "delectus",
          memoryLimit: "minus",
          memoryRequest: "ut",
        },
      },
      {
        jobType: JobType.ConnectionUpdater,
        resourceRequirements: {
          cpuLimit: "eius",
          cpuRequest: "eos",
          memoryLimit: "veniam",
          memoryRequest: "repudiandae",
        },
      },
      {
        jobType: JobType.ResetConnection,
        resourceRequirements: {
          cpuLimit: "occaecati",
          cpuRequest: "debitis",
          memoryLimit: "laboriosam",
          memoryRequest: "eos",
        },
      },
    ],
  },
  sourceDefinitionId: "34c9f7b7-9dfe-4b77-a5c3-8d4baf91e506",
}).then((res: UpdateSourceDefinitionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
