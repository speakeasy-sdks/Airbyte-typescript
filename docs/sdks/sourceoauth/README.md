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
  oAuthInputConfiguration: "incidunt",
  queryParams: {
    "sunt": "ullam",
    "quam": "illum",
    "voluptates": "officia",
    "est": "in",
  },
  redirectUrl: "illo",
  sourceDefinitionId: "70f445ac-cf66-47aa-b9bb-ad185fe431d6",
  sourceId: "bf5c838f-bb8c-420c-b67f-c4b425e99e62",
  workspaceId: "34c9f7b7-9dfe-4b77-a5c3-8d4baf91e506",
}).then((res: CompleteSourceOAuthResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [shared.CompleteSourceOauthRequest](../../models/shared/completesourceoauthrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.CompleteSourceOAuthResponse](../../models/operations/completesourceoauthresponse.md)>**


## getSourceOAuthConsent

Given a source connector definition ID, return the URL to the consent screen where to redirect the user to.

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { GetSourceOAuthConsentResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.sourceOauth.getSourceOAuthConsent({
  oAuthInputConfiguration: "eveniet",
  redirectUrl: "delectus",
  sourceDefinitionId: "890a54b4-75f1-46f5-ad38-5a3c4ac631b9",
  sourceId: "9e26ced8-f9fd-4b94-90f6-3bbf817837b0",
  workspaceId: "1afdd788-6241-489e-b448-73f5033f19db",
}).then((res: GetSourceOAuthConsentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [shared.SourceOauthConsentRequest](../../models/shared/sourceoauthconsentrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetSourceOAuthConsentResponse](../../models/operations/getsourceoauthconsentresponse.md)>**


## setInstancewideSourceOauthParams

Sets instancewide variables to be used for the oauth flow when creating this source. When set, these variables will be injected into a connector's configuration before any interaction with the connector image itself. This enables running oauth flows with consistent variables e.g: the company's Google Ads developer_token, client_id, and client_secret without the user having to know about these variables.


### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { SetInstancewideSourceOauthParamsResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.sourceOauth.setInstancewideSourceOauthParams({
  params: {
    "quasi": "consequuntur",
    "nemo": "nobis",
    "debitis": "labore",
    "veritatis": "minima",
  },
  sourceDefinitionId: "2eab9cd7-e522-44a6-a0e1-23b7847ec59e",
}).then((res: SetInstancewideSourceOauthParamsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [shared.SetInstancewideSourceOauthParamsRequestBody](../../models/shared/setinstancewidesourceoauthparamsrequestbody.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.SetInstancewideSourceOauthParamsResponse](../../models/operations/setinstancewidesourceoauthparamsresponse.md)>**

