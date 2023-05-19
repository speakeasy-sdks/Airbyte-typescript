# sourceDefinitionSpecification

## Overview

SourceDefinition specification related resources.

### Available Operations

* [getSourceDefinitionSpecification](#getsourcedefinitionspecification) - Get specification for a SourceDefinition.

## getSourceDefinitionSpecification

Get specification for a SourceDefinition.

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { GetSourceDefinitionSpecificationResponse } from "airbyte-test/dist/sdk/models/operations";
import { AdvancedAuthAuthFlowType, JobConfigType, SourceAuthSpecificationAuthType } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.sourceDefinitionSpecification.getSourceDefinitionSpecification({
  sourceDefinitionId: "ef890a54-b475-4f16-b56d-385a3c4ac631",
  workspaceId: "b99e26ce-d8f9-4fdb-9410-f63bbf817837",
}).then((res: GetSourceDefinitionSpecificationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
