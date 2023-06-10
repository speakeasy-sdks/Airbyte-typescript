# logs

### Available Operations

* [getLogs](#getlogs) - Get logs

## getLogs

Get logs

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { GetLogsResponse } from "airbyte-test/dist/sdk/models/operations";
import { LogType } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.logs.getLogs({
  logType: LogType.Scheduler,
}).then((res: GetLogsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `request`                                                        | [shared.LogsRequestBody](../../models/shared/logsrequestbody.md) | :heavy_check_mark:                                               | The request object to use for the request.                       |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |


### Response

**Promise<[operations.GetLogsResponse](../../models/operations/getlogsresponse.md)>**

