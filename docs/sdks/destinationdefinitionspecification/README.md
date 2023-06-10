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
  destinationDefinitionId: "3c93c73b-9da3-4f2c-ada7-e23f2257411f",
  workspaceId: "af4b7544-e472-4e80-a857-a5b40463a7d5",
}).then((res: GetDestinationDefinitionSpecificationResponse) => {
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

**Promise<[operations.GetDestinationDefinitionSpecificationResponse](../../models/operations/getdestinationdefinitionspecificationresponse.md)>**

