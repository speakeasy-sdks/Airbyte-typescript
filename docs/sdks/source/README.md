# source

## Overview

Source related resources.

### Available Operations

* [checkConnectionToSource](#checkconnectiontosource) - Check connection to the source
* [checkConnectionToSourceForUpdate](#checkconnectiontosourceforupdate) - Check connection for a proposed update to a source
* [cloneSource](#clonesource) - Clone source
* [createSource](#createsource) - Create a source
* [deleteSource](#deletesource) - Delete a source
* [discoverSchemaForSource](#discoverschemaforsource) - Discover the schema catalog of the source
* [getMostRecentSourceActorCatalog](#getmostrecentsourceactorcatalog) - Get most recent ActorCatalog for source
* [getSource](#getsource) - Get source
* [listSourcesForWorkspace](#listsourcesforworkspace) - List sources for workspace
* [searchSources](#searchsources) - Search sources
* [updateSource](#updatesource) - Update a source
* [writeDiscoverCatalogResult](#writediscovercatalogresult) - Should only called from worker, to write result from discover activity back to DB.

## checkConnectionToSource

Check connection to the source

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { CheckConnectionToSourceResponse } from "airbyte-test/dist/sdk/models/operations";
import { CheckConnectionReadStatus, JobConfigType } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.source.checkConnectionToSource({
  sourceId: "9167b8e3-c8db-4034-88d6-d364ffd45590",
}).then((res: CheckConnectionToSourceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [shared.SourceIdRequestBody](../../models/shared/sourceidrequestbody.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.CheckConnectionToSourceResponse](../../models/operations/checkconnectiontosourceresponse.md)>**


## checkConnectionToSourceForUpdate

Check connection for a proposed update to a source

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { CheckConnectionToSourceForUpdateResponse } from "airbyte-test/dist/sdk/models/operations";
import { CheckConnectionReadStatus, JobConfigType } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.source.checkConnectionToSourceForUpdate({
  connectionConfiguration: "ex",
  name: "Keith Crist",
  sourceId: "d48e935c-2c9e-481f-b0be-3e43202d7216",
}).then((res: CheckConnectionToSourceForUpdateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.SourceUpdate](../../models/shared/sourceupdate.md)   | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CheckConnectionToSourceForUpdateResponse](../../models/operations/checkconnectiontosourceforupdateresponse.md)>**


## cloneSource

Clone source

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { CloneSourceResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.source.cloneSource({
  sourceCloneId: "57650664-1870-4d9d-a1f9-ad030c4ecc11",
  sourceConfiguration: {
    connectionConfiguration: "id",
    name: "Brandy Dicki",
  },
}).then((res: CloneSourceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.SourceCloneRequestBody](../../models/shared/sourceclonerequestbody.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.CloneSourceResponse](../../models/operations/clonesourceresponse.md)>**


## createSource

Create a source

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { CreateSourceResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.source.createSource({
  connectionConfiguration: "eos",
  name: "Kenneth Hoppe",
  sourceDefinitionId: "8502a55e-7f73-4bc8-85e3-20a319f4badf",
  workspaceId: "947c9a86-7bc4-4242-a665-816ddca8ef51",
}).then((res: CreateSourceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.SourceCreate](../../models/shared/sourcecreate.md)   | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateSourceResponse](../../models/operations/createsourceresponse.md)>**


## deleteSource

Delete a source

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { DeleteSourceResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.source.deleteSource({
  sourceId: "fcb4c593-ec12-4cda-ad0e-c7afedbd80df",
}).then((res: DeleteSourceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [shared.SourceIdRequestBody](../../models/shared/sourceidrequestbody.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.DeleteSourceResponse](../../models/operations/deletesourceresponse.md)>**


## discoverSchemaForSource

Discover the schema catalog of the source

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { DiscoverSchemaForSourceResponse } from "airbyte-test/dist/sdk/models/operations";
import {
  ConnectionStatus,
  DestinationSyncMode,
  FieldTransformTransformType,
  JobConfigType,
  StreamTransformTransformType,
  SyncMode,
} from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.source.discoverSchemaForSource({
  connectionId: "448a47f9-390c-4588-8098-3dabf9ef3ffd",
  disableCache: false,
  notifySchemaChange: false,
  sourceId: "d9f7f079-af4d-4357-a4cd-b0f4d281187d",
}).then((res: DiscoverSchemaForSourceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [shared.SourceDiscoverSchemaRequestBody](../../models/shared/sourcediscoverschemarequestbody.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.DiscoverSchemaForSourceResponse](../../models/operations/discoverschemaforsourceresponse.md)>**


## getMostRecentSourceActorCatalog

Get most recent ActorCatalog for source

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { GetMostRecentSourceActorCatalogResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.source.getMostRecentSourceActorCatalog({
  sourceId: "56844ede-d85a-4906-9e62-8bdfc2032b6c",
}).then((res: GetMostRecentSourceActorCatalogResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [shared.SourceIdRequestBody](../../models/shared/sourceidrequestbody.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.GetMostRecentSourceActorCatalogResponse](../../models/operations/getmostrecentsourceactorcatalogresponse.md)>**


## getSource

Get source

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { GetSourceResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.source.getSource({
  sourceId: "879923b7-e135-484f-bae1-2c6891f82ce1",
}).then((res: GetSourceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [shared.SourceIdRequestBody](../../models/shared/sourceidrequestbody.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.GetSourceResponse](../../models/operations/getsourceresponse.md)>**


## listSourcesForWorkspace

List sources for workspace. Does not return deleted sources.

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { ListSourcesForWorkspaceResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.source.listSourcesForWorkspace({
  workspaceId: "15717230-5377-4dcf-a89d-f975e3566860",
}).then((res: ListSourcesForWorkspaceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.WorkspaceIdRequestBody](../../models/shared/workspaceidrequestbody.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.ListSourcesForWorkspaceResponse](../../models/operations/listsourcesforworkspaceresponse.md)>**


## searchSources

Search sources

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { SearchSourcesResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.source.searchSources({
  connectionConfiguration: "perspiciatis",
  name: "Kellie Miller",
  sourceDefinitionId: "ddc5f111-dea1-4026-9541-a4d190feb217",
  sourceId: "80bccc0d-bbdd-4b48-8708-fb4e391e6bc1",
  sourceName: "ad",
  workspaceId: "8c4c4e54-599e-4a34-a260-e9b200ce78a1",
}).then((res: SearchSourcesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.SourceSearch](../../models/shared/sourcesearch.md)   | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.SearchSourcesResponse](../../models/operations/searchsourcesresponse.md)>**


## updateSource

Update a source

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { UpdateSourceResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.source.updateSource({
  connectionConfiguration: "expedita",
  name: "Isaac Wyman",
  sourceId: "a0a116ce-723d-4409-bfa3-0e9af725b291",
}).then((res: UpdateSourceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.SourceUpdate](../../models/shared/sourceupdate.md)   | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.UpdateSourceResponse](../../models/operations/updatesourceresponse.md)>**


## writeDiscoverCatalogResult

Should only called from worker, to write result from discover activity back to DB.

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { WriteDiscoverCatalogResultResponse } from "airbyte-test/dist/sdk/models/operations";
import { DestinationSyncMode, SyncMode } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.source.writeDiscoverCatalogResult({
  catalog: {
    streams: [
      {
        config: {
          aliasName: "explicabo",
          cursorField: [
            "amet",
          ],
          destinationSyncMode: DestinationSyncMode.Append,
          fieldSelectionEnabled: false,
          primaryKey: [
            [
              "velit",
              "hic",
              "ullam",
            ],
            [
              "itaque",
              "distinctio",
              "iusto",
            ],
            [
              "provident",
              "occaecati",
            ],
            [
              "sunt",
              "odit",
              "vero",
              "deleniti",
            ],
          ],
          selected: false,
          selectedFields: [
            {
              fieldPath: [
                "repellat",
              ],
            },
            {
              fieldPath: [
                "magnam",
                "perspiciatis",
                "amet",
              ],
            },
            {
              fieldPath: [
                "sunt",
                "nemo",
                "delectus",
              ],
            },
            {
              fieldPath: [
                "porro",
                "quaerat",
                "magni",
                "cumque",
              ],
            },
          ],
          suggested: false,
          syncMode: SyncMode.Incremental,
        },
        stream: {
          defaultCursorField: [
            "commodi",
            "maxime",
          ],
          jsonSchema: {},
          name: "Alexandra Crooks",
          namespace: "harum",
          sourceDefinedCursor: false,
          sourceDefinedPrimaryKey: [
            [
              "hic",
              "quo",
              "illo",
              "nobis",
            ],
            [
              "nisi",
              "explicabo",
            ],
          ],
          supportedSyncModes: [
            SyncMode.FullRefresh,
          ],
        },
      },
    ],
  },
  configurationHash: "reiciendis",
  connectorVersion: "quos",
  sourceId: "41fb1bd2-3fdb-414d-b6be-5a685998e22a",
}).then((res: WriteDiscoverCatalogResultResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [shared.SourceDiscoverSchemaWriteRequestBody](../../models/shared/sourcediscoverschemawriterequestbody.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.WriteDiscoverCatalogResultResponse](../../models/operations/writediscovercatalogresultresponse.md)>**

