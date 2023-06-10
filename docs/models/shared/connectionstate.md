# ConnectionState

Contains the state for a connection. The stateType field identifies what type of state it is. Only the field corresponding to that type will be set, the rest will be null. If stateType=not_set, then none of the fields will be set.


## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `connectionId`                                                    | *string*                                                          | :heavy_check_mark:                                                | N/A                                                               |
| `globalState`                                                     | [GlobalState](../../models/shared/globalstate.md)                 | :heavy_minus_sign:                                                | N/A                                                               |
| `state`                                                           | [StateBlob](../../models/shared/stateblob.md)                     | :heavy_minus_sign:                                                | N/A                                                               |
| `stateType`                                                       | [ConnectionStateType](../../models/shared/connectionstatetype.md) | :heavy_check_mark:                                                | N/A                                                               |
| `streamState`                                                     | [StreamState](../../models/shared/streamstate.md)[]               | :heavy_minus_sign:                                                | N/A                                                               |