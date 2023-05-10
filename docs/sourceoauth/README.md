# sourceOauth

## Overview

Source OAuth related resources to delegate access from user.

### Available Operations

* [completeSourceOAuth](#completesourceoauth) - Given a source def ID generate an access/refresh token etc.
* [getSourceOAuthConsent](#getsourceoauthconsent) - Given a source connector definition ID, return the URL to the consent screen where to redirect the user to.
* [setInstancewideSourceOauthParams](#setinstancewidesourceoauthparams) - Sets instancewide variables to be used for the oauth flow when creating this source. When set, these variables will be injected into a connector's configuration before any interaction with the connector image itself. This enables running oauth flows with consistent variables e.g: the company's Google Ads developer_token, client_id, and client_secret without the user having to know about these variables.


## completeSourceOAuth

Given a source def ID generate an access/refresh token etc.

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { CompleteSourceOAuthResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.sourceOauth.completeSourceOAuth({
  oAuthInputConfiguration: "nam",
  queryParams: {
    "vitae": "mollitia",
  },
  redirectUrl: "asperiores",
  sourceDefinitionId: "dd788624-189e-4b44-873f-5033f19dbf12",
  sourceId: "5ce4152e-ab9c-4d7e-9224-a6a0e123b784",
  workspaceId: "7ec59e1f-67f3-4c4c-8e4b-6d7696ff3c57",
}).then((res: CompleteSourceOAuthResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getSourceOAuthConsent

Given a source connector definition ID, return the URL to the consent screen where to redirect the user to.

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { GetSourceOAuthConsentResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.sourceOauth.getSourceOAuthConsent({
  oAuthInputConfiguration: "eius",
  redirectUrl: "dignissimos",
  sourceDefinitionId: "501357e4-4f51-4f8b-884c-3197e193a245",
  sourceId: "467f9487-4c2d-45cc-8972-233e66bd8fe5",
  workspaceId: "d00b979e-f203-4873-a059-0ccc10964003",
}).then((res: GetSourceOAuthConsentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## setInstancewideSourceOauthParams

Sets instancewide variables to be used for the oauth flow when creating this source. When set, these variables will be injected into a connector's configuration before any interaction with the connector image itself. This enables running oauth flows with consistent variables e.g: the company's Google Ads developer_token, client_id, and client_secret without the user having to know about these variables.


### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { SetInstancewideSourceOauthParamsResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.sourceOauth.setInstancewideSourceOauthParams({
  params: {
    "sequi": "rerum",
  },
  sourceDefinitionId: "3e5044f6-5fe7-42dc-8077-d0cc3f408efc",
}).then((res: SetInstancewideSourceOauthParamsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
