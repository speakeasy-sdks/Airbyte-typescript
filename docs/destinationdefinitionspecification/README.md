# destinationDefinitionSpecification

## Overview

DestinationDefinitionSpecification related resources.

### Available Operations

* [getDestinationDefinitionSpecification](#getdestinationdefinitionspecification) - Get specification for a destinationDefinition

## getDestinationDefinitionSpecification

Get specification for a destinationDefinition

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { GetDestinationDefinitionSpecificationResponse } from "airbyte-test/dist/sdk/models/operations";
import {
  AdvancedAuthAuthFlowType,
  DestinationAuthSpecificationAuthType,
  DestinationSyncMode,
  JobConfigType,
} from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.destinationDefinitionSpecification.getDestinationDefinitionSpecification({
  destinationDefinitionId: "a08088d1-00ef-4ada-a00e-f0422eb2164c",
  workspaceId: "f9ab8366-c723-4ffd-a9e0-6bee4825c1fc",
}).then((res: GetDestinationDefinitionSpecificationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
