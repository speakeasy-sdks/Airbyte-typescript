# FieldTransform

Describes the difference between two Streams.


## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `addField`                                                                        | [FieldAdd](../../models/shared/fieldadd.md)                                       | :heavy_minus_sign:                                                                | N/A                                                                               |
| `breaking`                                                                        | *boolean*                                                                         | :heavy_check_mark:                                                                | N/A                                                                               |
| `fieldName`                                                                       | *string*[]                                                                        | :heavy_check_mark:                                                                | A field name is a list of strings that form the path to the field.                |
| `removeField`                                                                     | [FieldRemove](../../models/shared/fieldremove.md)                                 | :heavy_minus_sign:                                                                | N/A                                                                               |
| `transformType`                                                                   | [FieldTransformTransformType](../../models/shared/fieldtransformtransformtype.md) | :heavy_check_mark:                                                                | N/A                                                                               |
| `updateFieldSchema`                                                               | [FieldSchemaUpdate](../../models/shared/fieldschemaupdate.md)                     | :heavy_minus_sign:                                                                | N/A                                                                               |