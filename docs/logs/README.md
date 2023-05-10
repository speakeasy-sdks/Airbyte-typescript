# logs

### Available Operations

* [getLogs](#getlogs) - Get logs

## getLogs

Get logs

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { GetLogsResponse } from "airbyte-test/dist/sdk/models/operations";
import { LogTypeEnum } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.logs.getLogs({
  logType: LogTypeEnum.Server,
}).then((res: GetLogsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
