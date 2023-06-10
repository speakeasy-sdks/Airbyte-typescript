# health

## Overview

Healthchecks

### Available Operations

* [getHealthCheck](#gethealthcheck) - Health Check

## getHealthCheck

Health Check

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { GetHealthCheckResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.health.getHealthCheck().then((res: GetHealthCheckResponse) => {
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

**Promise<[operations.GetHealthCheckResponse](../../models/operations/gethealthcheckresponse.md)>**

