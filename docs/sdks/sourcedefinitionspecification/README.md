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
  sourceDefinitionId: "8fa3f696-991a-4f38-8ce0-3614448c7977",
  workspaceId: "a0ef2f53-6028-4efe-af93-4152ed7e253f",
}).then((res: GetSourceDefinitionSpecificationResponse) => {
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

**Promise<[operations.GetSourceDefinitionSpecificationResponse](../../models/operations/getsourcedefinitionspecificationresponse.md)>**

