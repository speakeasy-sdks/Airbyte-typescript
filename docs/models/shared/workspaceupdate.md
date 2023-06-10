# WorkspaceUpdate

Used to apply a patch-style update to a workspace, which means that null properties remain unchanged


## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `anonymousDataCollection`                                         | *boolean*                                                         | :heavy_minus_sign:                                                | N/A                                                               |
| `defaultGeography`                                                | [Geography](../../models/shared/geography.md)                     | :heavy_minus_sign:                                                | N/A                                                               |
| `displaySetupWizard`                                              | *boolean*                                                         | :heavy_minus_sign:                                                | N/A                                                               |
| `email`                                                           | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `initialSetupComplete`                                            | *boolean*                                                         | :heavy_minus_sign:                                                | N/A                                                               |
| `news`                                                            | *boolean*                                                         | :heavy_minus_sign:                                                | N/A                                                               |
| `notifications`                                                   | [Notification](../../models/shared/notification.md)[]             | :heavy_minus_sign:                                                | N/A                                                               |
| `securityUpdates`                                                 | *boolean*                                                         | :heavy_minus_sign:                                                | N/A                                                               |
| `webhookConfigs`                                                  | [WebhookConfigWrite](../../models/shared/webhookconfigwrite.md)[] | :heavy_minus_sign:                                                | N/A                                                               |
| `workspaceId`                                                     | *string*                                                          | :heavy_check_mark:                                                | N/A                                                               |