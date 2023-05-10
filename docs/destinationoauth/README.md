# destinationOauth

## Overview

Source OAuth related resources to delegate access from user.

### Available Operations

* [completeDestinationOAuth](#completedestinationoauth) - Given a destination def ID generate an access/refresh token etc.
* [getDestinationOAuthConsent](#getdestinationoauthconsent) - Given a destination connector definition ID, return the URL to the consent screen where to redirect the user to.
* [setInstancewideDestinationOauthParams](#setinstancewidedestinationoauthparams) - Sets instancewide variables to be used for the oauth flow when creating this destination. When set, these variables will be injected into a connector's configuration before any interaction with the connector image itself. This enables running oauth flows with consistent variables e.g: the company's Google Ads developer_token, client_id, and client_secret without the user having to know about these variables.


## completeDestinationOAuth

Given a destination def ID generate an access/refresh token etc.

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { CompleteDestinationOAuthResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.destinationOauth.completeDestinationOAuth({
  destinationDefinitionId: "0e115c80-bff9-4185-84ec-42defcce8f19",
  destinationId: "77773e63-562a-47b4-88f0-5e3d48fdaf31",
  oAuthInputConfiguration: "nesciunt",
  queryParams: {
    "illo": "repellat",
    "nemo": "doloribus",
    "possimus": "unde",
  },
  redirectUrl: "incidunt",
  workspaceId: "259c0b36-f25e-4a94-8f3b-756c11f6c37a",
}).then((res: CompleteDestinationOAuthResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getDestinationOAuthConsent

Given a destination connector definition ID, return the URL to the consent screen where to redirect the user to.

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { GetDestinationOAuthConsentResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.destinationOauth.getDestinationOAuthConsent({
  destinationDefinitionId: "51262438-35bb-4c05-a23a-45cefc5fde10",
  destinationId: "a0ce2169-e510-4019-86dc-5e34762799bf",
  oAuthInputConfiguration: "facilis",
  redirectUrl: "quidem",
  workspaceId: "e6949fb2-bb4e-4cae-ac3d-5db3adebd5da",
}).then((res: GetDestinationOAuthConsentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## setInstancewideDestinationOauthParams

Sets instancewide variables to be used for the oauth flow when creating this destination. When set, these variables will be injected into a connector's configuration before any interaction with the connector image itself. This enables running oauth flows with consistent variables e.g: the company's Google Ads developer_token, client_id, and client_secret without the user having to know about these variables.


### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { SetInstancewideDestinationOauthParamsResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.destinationOauth.setInstancewideDestinationOauthParams({
  destinationDefinitionId: "ea4c506a-8aa9-44c0-a644-cf5e9d9a4578",
  params: {
    "facere": "impedit",
    "quasi": "deserunt",
    "quod": "laboriosam",
  },
}).then((res: SetInstancewideDestinationOauthParamsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
