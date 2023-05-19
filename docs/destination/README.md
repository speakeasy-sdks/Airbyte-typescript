# destination

## Overview

Destination related resources.

### Available Operations

* [checkConnectionToDestination](#checkconnectiontodestination) - Check connection to the destination
* [checkConnectionToDestinationForUpdate](#checkconnectiontodestinationforupdate) - Check connection for a proposed update to a destination
* [cloneDestination](#clonedestination) - Clone destination
* [createDestination](#createdestination) - Create a destination
* [deleteDestination](#deletedestination) - Delete the destination
* [getDestination](#getdestination) - Get configured destination
* [listDestinationsForWorkspace](#listdestinationsforworkspace) - List configured destinations for a workspace
* [searchDestinations](#searchdestinations) - Search destinations
* [updateDestination](#updatedestination) - Update a destination

## checkConnectionToDestination

Check connection to the destination

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { CheckConnectionToDestinationResponse } from "airbyte-test/dist/sdk/models/operations";
import { CheckConnectionReadStatus, JobConfigType } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.destination.checkConnectionToDestination({
  destinationId: "6312fde0-4771-4778-bf61-d017476360a1",
}).then((res: CheckConnectionToDestinationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## checkConnectionToDestinationForUpdate

Check connection for a proposed update to a destination

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { CheckConnectionToDestinationForUpdateResponse } from "airbyte-test/dist/sdk/models/operations";
import { CheckConnectionReadStatus, JobConfigType } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.destination.checkConnectionToDestinationForUpdate({
  connectionConfiguration: "nostrum",
  destinationId: "db6a6606-59a1-4ade-aab5-851d6c645b08",
  name: "Gene Brekke",
}).then((res: CheckConnectionToDestinationForUpdateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## cloneDestination

Clone destination

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { CloneDestinationResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.destination.cloneDestination({
  destinationCloneId: "1baa0fe1-ade0-408e-af8c-5f350d8cdb5a",
  destinationConfiguration: {
    connectionConfiguration: "dolor",
    name: "Mrs. Stephanie Lind",
  },
}).then((res: CloneDestinationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createDestination

Create a destination

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { CreateDestinationResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.destination.createDestination({
  connectionConfiguration: "consequatur",
  destinationDefinitionId: "10421813-d520-48ec-a7e2-53b668451c6c",
  name: "Mrs. Kate Cronin",
  workspaceId: "16deab3f-ec95-478a-a458-4273a8418d16",
}).then((res: CreateDestinationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteDestination

Delete the destination

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { DeleteDestinationResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.destination.deleteDestination({
  destinationId: "2309fb09-2992-41ae-bb9f-58c4d86e68e4",
}).then((res: DeleteDestinationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getDestination

Get configured destination

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { GetDestinationResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.destination.getDestination({
  destinationId: "be056013-f59d-4a75-ba59-ecfef66ef1ca",
}).then((res: GetDestinationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listDestinationsForWorkspace

List configured destinations for a workspace

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { ListDestinationsForWorkspaceResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.destination.listDestinationsForWorkspace({
  workspaceId: "a3383c2b-eb47-4737-bc8d-72f64d1db1f2",
}).then((res: ListDestinationsForWorkspaceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## searchDestinations

Search destinations

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { SearchDestinationsResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.destination.searchDestinations({
  connectionConfiguration: "porro",
  destinationDefinitionId: "4310661e-9634-49e1-8f9e-06e3a437000a",
  destinationId: "e6b6bc9b-8f75-49ea-855a-9741d3113529",
  destinationName: "ex",
  name: "Patty Reinger",
  workspaceId: "72026114-35e1-439d-bc22-59b1abda8c07",
}).then((res: SearchDestinationsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateDestination

Update a destination

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { UpdateDestinationResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.destination.updateDestination({
  connectionConfiguration: "ipsa",
  destinationId: "e1084cb0-672d-41ad-879e-eb9665b85efb",
  name: "Robert Crona",
}).then((res: UpdateDestinationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
