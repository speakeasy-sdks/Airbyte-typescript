# SynchronousJobRead


## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `configId`                                            | *string*                                              | :heavy_minus_sign:                                    | only present if a config id was provided.             |
| `configType`                                          | [JobConfigType](../../models/shared/jobconfigtype.md) | :heavy_check_mark:                                    | N/A                                                   |
| `connectorConfigurationUpdated`                       | *boolean*                                             | :heavy_minus_sign:                                    | N/A                                                   |
| `createdAt`                                           | *number*                                              | :heavy_check_mark:                                    | N/A                                                   |
| `endedAt`                                             | *number*                                              | :heavy_check_mark:                                    | N/A                                                   |
| `id`                                                  | *string*                                              | :heavy_check_mark:                                    | N/A                                                   |
| `logs`                                                | [LogRead](../../models/shared/logread.md)             | :heavy_minus_sign:                                    | N/A                                                   |
| `succeeded`                                           | *boolean*                                             | :heavy_check_mark:                                    | N/A                                                   |