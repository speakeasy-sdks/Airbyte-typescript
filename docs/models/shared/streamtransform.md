# StreamTransform


## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `streamDescriptor`                                                                  | [StreamDescriptor](../../models/shared/streamdescriptor.md)                         | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `transformType`                                                                     | [StreamTransformTransformType](../../models/shared/streamtransformtransformtype.md) | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `updateStream`                                                                      | [FieldTransform](../../models/shared/fieldtransform.md)[]                           | :heavy_minus_sign:                                                                  | list of field transformations. order does not matter.                               |