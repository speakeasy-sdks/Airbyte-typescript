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
import { CheckConnectionReadStatusEnum, JobConfigTypeEnum } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.source.checkConnectionToSource({
  sourceId: "02d72165-7650-4664-9870-d9d21f9ad030",
}).then((res: CheckConnectionToSourceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## checkConnectionToSourceForUpdate

Check connection for a proposed update to a source

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { CheckConnectionToSourceForUpdateResponse } from "airbyte-test/dist/sdk/models/operations";
import { CheckConnectionReadStatusEnum, JobConfigTypeEnum } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.source.checkConnectionToSourceForUpdate({
  connectionConfiguration: "optio",
  name: "Raquel Runolfsdottir Sr.",
  sourceId: "a0836429-068b-4850-aa55-e7f73bc845e3",
}).then((res: CheckConnectionToSourceForUpdateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## cloneSource

Clone source

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { CloneSourceResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.source.cloneSource({
  sourceCloneId: "20a319f4-badf-4947-89a8-67bc42426665",
  sourceConfiguration: {
    connectionConfiguration: "quos",
    name: "Laurie Sporer",
  },
}).then((res: CloneSourceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createSource

Create a source

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { CreateSourceResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.source.createSource({
  connectionConfiguration: "culpa",
  name: "Pat Wuckert DVM",
  sourceDefinitionId: "cb4c593e-c12c-4daa-90ec-7afedbd80df4",
  workspaceId: "48a47f93-90c5-4888-8983-dabf9ef3ffdd",
}).then((res: CreateSourceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteSource

Delete a source

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { DeleteSourceResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.source.deleteSource({
  sourceId: "9f7f079a-f4d3-4572-8cdb-0f4d281187d5",
}).then((res: DeleteSourceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## discoverSchemaForSource

Discover the schema catalog of the source

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { DiscoverSchemaForSourceResponse } from "airbyte-test/dist/sdk/models/operations";
import {
  ConnectionStatusEnum,
  DestinationSyncModeEnum,
  FieldTransformTransformTypeEnum,
  JobConfigTypeEnum,
  StreamTransformTransformTypeEnum,
  SyncModeEnum,
} from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.source.discoverSchemaForSource({
  connectionId: "6844eded-85a9-4065-a628-bdfc2032b6c8",
  disableCache: false,
  notifySchemaChange: false,
  sourceId: "79923b7e-1358-44f7-ae12-c6891f82ce11",
}).then((res: DiscoverSchemaForSourceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getMostRecentSourceActorCatalog

Get most recent ActorCatalog for source

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { GetMostRecentSourceActorCatalogResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.source.getMostRecentSourceActorCatalog({
  sourceId: "57172305-377d-4cfa-89df-975e35668609",
}).then((res: GetMostRecentSourceActorCatalogResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getSource

Get source

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { GetSourceResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.source.getSource({
  sourceId: "2e9c3ddc-5f11-41de-a102-6d541a4d190f",
}).then((res: GetSourceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listSourcesForWorkspace

List sources for workspace. Does not return deleted sources.

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { ListSourcesForWorkspaceResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.source.listSourcesForWorkspace({
  workspaceId: "eb21780b-ccc0-4dbb-9db4-84708fb4e391",
}).then((res: ListSourcesForWorkspaceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## searchSources

Search sources

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { SearchSourcesResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.source.searchSources({
  connectionConfiguration: "officiis",
  name: "Mrs. Susie Schowalter",
  sourceDefinitionId: "c4c4e545-99ea-4342-a60e-9b200ce78a1b",
  sourceId: "d8fb7a0a-116c-4e72-bd40-97fa30e9af72",
  sourceName: "ipsam",
  workspaceId: "b2912203-0d83-4f5a-ab77-99d22e8c1f84",
}).then((res: SearchSourcesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateSource

Update a source

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { UpdateSourceResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.source.updateSource({
  connectionConfiguration: "perspiciatis",
  name: "Naomi Cassin",
  sourceId: "dc42c876-c2c2-4dfb-8cfc-1c76230f841f",
}).then((res: UpdateSourceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## writeDiscoverCatalogResult

Should only called from worker, to write result from discover activity back to DB.

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { WriteDiscoverCatalogResultResponse } from "airbyte-test/dist/sdk/models/operations";
import { DestinationSyncModeEnum, SyncModeEnum } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.source.writeDiscoverCatalogResult({
  catalog: {
    streams: [
      {
        config: {
          aliasName: "architecto",
          cursorField: [
            "assumenda",
            "eos",
            "dolorem",
          ],
          destinationSyncMode: DestinationSyncModeEnum.AppendDedup,
          fieldSelectionEnabled: false,
          primaryKey: [
            [
              "ab",
              "magnam",
              "pariatur",
            ],
            [
              "autem",
              "tempore",
              "recusandae",
            ],
            [
              "officia",
              "voluptas",
            ],
            [
              "corporis",
              "excepturi",
              "natus",
            ],
          ],
          selected: false,
          selectedFields: [
            {
              fieldPath: [
                "aspernatur",
                "dolores",
                "laborum",
                "vero",
              ],
            },
            {
              fieldPath: [
                "voluptatem",
              ],
            },
            {
              fieldPath: [
                "id",
                "quae",
                "commodi",
                "a",
              ],
            },
          ],
          suggested: false,
          syncMode: SyncModeEnum.Incremental,
        },
        stream: {
          defaultCursorField: [
            "nam",
          ],
          jsonSchema: {
            "iusto": "ab",
          },
          name: "Louis Kuvalis",
          namespace: "ullam",
          sourceDefinedCursor: false,
          sourceDefinedPrimaryKey: [
            [
              "rem",
              "nemo",
              "non",
              "recusandae",
            ],
            [
              "ipsa",
              "aliquam",
              "dolor",
            ],
          ],
          supportedSyncModes: [
            SyncModeEnum.Incremental,
            SyncModeEnum.FullRefresh,
            SyncModeEnum.FullRefresh,
          ],
        },
      },
      {
        config: {
          aliasName: "consequuntur",
          cursorField: [
            "commodi",
            "ipsam",
          ],
          destinationSyncMode: DestinationSyncModeEnum.Overwrite,
          fieldSelectionEnabled: false,
          primaryKey: [
            [
              "nisi",
              "explicabo",
            ],
            [
              "doloremque",
              "odio",
            ],
            [
              "voluptatum",
            ],
          ],
          selected: false,
          selectedFields: [
            {
              fieldPath: [
                "quam",
                "dolorum",
                "libero",
                "ratione",
              ],
            },
            {
              fieldPath: [
                "optio",
                "saepe",
              ],
            },
          ],
          suggested: false,
          syncMode: SyncModeEnum.Incremental,
        },
        stream: {
          defaultCursorField: [
            "sed",
          ],
          jsonSchema: {
            "consequuntur": "quis",
          },
          name: "Violet Greenfelder",
          namespace: "exercitationem",
          sourceDefinedCursor: false,
          sourceDefinedPrimaryKey: [
            [
              "quasi",
              "quae",
            ],
            [
              "possimus",
              "quo",
              "suscipit",
            ],
          ],
          supportedSyncModes: [
            SyncModeEnum.Incremental,
            SyncModeEnum.Incremental,
          ],
        },
      },
      {
        config: {
          aliasName: "doloribus",
          cursorField: [
            "alias",
            "deserunt",
            "fugit",
          ],
          destinationSyncMode: DestinationSyncModeEnum.Overwrite,
          fieldSelectionEnabled: false,
          primaryKey: [
            [
              "maxime",
              "facere",
            ],
            [
              "cupiditate",
              "deleniti",
              "quasi",
              "maiores",
            ],
            [
              "aliquid",
            ],
            [
              "unde",
              "corrupti",
              "quae",
            ],
          ],
          selected: false,
          selectedFields: [
            {
              fieldPath: [
                "libero",
                "nam",
              ],
            },
            {
              fieldPath: [
                "adipisci",
              ],
            },
            {
              fieldPath: [
                "hic",
                "similique",
                "fuga",
                "consectetur",
              ],
            },
            {
              fieldPath: [
                "laudantium",
                "cumque",
              ],
            },
          ],
          suggested: false,
          syncMode: SyncModeEnum.FullRefresh,
        },
        stream: {
          defaultCursorField: [
            "nam",
          ],
          jsonSchema: {
            "magnam": "aperiam",
            "ducimus": "itaque",
            "necessitatibus": "numquam",
            "doloribus": "eligendi",
          },
          name: "James Russel",
          namespace: "nobis",
          sourceDefinedCursor: false,
          sourceDefinedPrimaryKey: [
            [
              "reiciendis",
              "vitae",
              "ullam",
            ],
            [
              "consequuntur",
              "voluptas",
            ],
          ],
          supportedSyncModes: [
            SyncModeEnum.Incremental,
          ],
        },
      },
    ],
  },
  configurationHash: "corrupti",
  connectorVersion: "est",
  sourceId: "0dc76632-4ccb-406c-8ca1-2d02529270b8",
}).then((res: WriteDiscoverCatalogResultResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
