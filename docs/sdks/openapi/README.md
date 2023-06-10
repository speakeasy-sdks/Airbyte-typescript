# openapi

### Available Operations

* [getOpenApiSpec](#getopenapispec) - Returns the openapi specification

## getOpenApiSpec

Returns the openapi specification

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { GetOpenApiSpecResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.openapi.getOpenApiSpec().then((res: GetOpenApiSpecResponse) => {
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

**Promise<[operations.GetOpenApiSpecResponse](../../models/operations/getopenapispecresponse.md)>**

