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
