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
