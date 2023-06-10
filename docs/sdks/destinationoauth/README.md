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
  destinationDefinitionId: "75f1400e-764a-4d73-b4ec-1b781b36a080",
  destinationId: "88d100ef-ada2-400e-b042-2eb2164cf9ab",
  oAuthInputConfiguration: "totam",
  queryParams: {
    "aliquid": "ea",
  },
  redirectUrl: "impedit",
  workspaceId: "723ffda9-e06b-4ee4-825c-1fc0e115c80b",
}).then((res: CompleteDestinationOAuthResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [shared.CompleteDestinationOAuthRequest](../../models/shared/completedestinationoauthrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.CompleteDestinationOAuthResponse](../../models/operations/completedestinationoauthresponse.md)>**


## getDestinationOAuthConsent

Given a destination connector definition ID, return the URL to the consent screen where to redirect the user to.

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { GetDestinationOAuthConsentResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.destinationOauth.getDestinationOAuthConsent({
  destinationDefinitionId: "ff918544-ec42-4def-8ce8-f1977773e635",
  destinationId: "62a7b408-f05e-43d4-8fda-f313a1f5fd94",
  oAuthInputConfiguration: "explicabo",
  redirectUrl: "ipsam",
  workspaceId: "9c0b36f2-5ea9-444f-bb75-6c11f6c37a51",
}).then((res: GetDestinationOAuthConsentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [shared.DestinationOauthConsentRequest](../../models/shared/destinationoauthconsentrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetDestinationOAuthConsentResponse](../../models/operations/getdestinationoauthconsentresponse.md)>**


## setInstancewideDestinationOauthParams

Sets instancewide variables to be used for the oauth flow when creating this destination. When set, these variables will be injected into a connector's configuration before any interaction with the connector image itself. This enables running oauth flows with consistent variables e.g: the company's Google Ads developer_token, client_id, and client_secret without the user having to know about these variables.


### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { SetInstancewideDestinationOauthParamsResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.destinationOauth.setInstancewideDestinationOauthParams({
  destinationDefinitionId: "26243835-bbc0-45a2-ba45-cefc5fde10a0",
  params: {
    "necessitatibus": "quia",
    "dicta": "vel",
    "perspiciatis": "debitis",
    "ullam": "architecto",
  },
}).then((res: SetInstancewideDestinationOauthParamsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                          | [shared.SetInstancewideDestinationOauthParamsRequestBody](../../models/shared/setinstancewidedestinationoauthparamsrequestbody.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.SetInstancewideDestinationOauthParamsResponse](../../models/operations/setinstancewidedestinationoauthparamsresponse.md)>**

