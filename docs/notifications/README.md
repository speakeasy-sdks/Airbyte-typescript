# notifications

### Available Operations

* [tryNotificationConfig](#trynotificationconfig) - Try sending a notifications

## tryNotificationConfig

Try sending a notifications

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { TryNotificationConfigResponse } from "airbyte-test/dist/sdk/models/operations";
import { NotificationReadStatusEnum, NotificationTypeEnum } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.notifications.tryNotificationConfig({
  customerioConfiguration: {
    "explicabo": "impedit",
    "aliquid": "quis",
  },
  notificationType: NotificationTypeEnum.Customerio,
  sendOnFailure: false,
  sendOnSuccess: false,
  slackConfiguration: {
    webhook: "ipsum",
  },
}).then((res: TryNotificationConfigResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
