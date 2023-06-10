# notifications

### Available Operations

* [tryNotificationConfig](#trynotificationconfig) - Try sending a notifications

## tryNotificationConfig

Try sending a notifications

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { TryNotificationConfigResponse } from "airbyte-test/dist/sdk/models/operations";
import { NotificationReadStatus, NotificationType } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.notifications.tryNotificationConfig({
  customerioConfiguration: {},
  notificationType: NotificationType.Slack,
  sendOnFailure: false,
  sendOnSuccess: false,
  slackConfiguration: {
    webhook: "sunt",
  },
}).then((res: TryNotificationConfigResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.Notification](../../models/shared/notification.md)   | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.TryNotificationConfigResponse](../../models/operations/trynotificationconfigresponse.md)>**

