# jobs

### Available Operations

* [cancelJob](#canceljob) - Cancels a job
* [getAttemptNormalizationStatusesForJob](#getattemptnormalizationstatusesforjob) - Get normalization status to determine if we can bypass normalization phase
* [getJobDebugInfo](#getjobdebuginfo) - Gets all information needed to debug this job
* [getJobInfo](#getjobinfo) - Get information about a job
* [getJobInfoLight](#getjobinfolight) - Get information about a job excluding attempt info and logs
* [getLastReplicationJob](#getlastreplicationjob)
* [listJobsFor](#listjobsfor) - Returns recent jobs for a connection. Jobs are returned in descending order by createdAt.

## cancelJob

Cancels a job

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { CancelJobResponse } from "airbyte-test/dist/sdk/models/operations";
import {
  AttemptFailureOrigin,
  AttemptFailureType,
  AttemptStatus,
  JobConfigType,
  JobStatus,
} from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.jobs.cancelJob({
  id: 556133,
}).then((res: CancelJobResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                          | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `request`                                                          | [shared.JobIdRequestBody](../../models/shared/jobidrequestbody.md) | :heavy_check_mark:                                                 | The request object to use for the request.                         |
| `config`                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)       | :heavy_minus_sign:                                                 | Available config options for making requests.                      |


### Response

**Promise<[operations.CancelJobResponse](../../models/operations/canceljobresponse.md)>**


## getAttemptNormalizationStatusesForJob

Get normalization status to determine if we can bypass normalization phase

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { GetAttemptNormalizationStatusesForJobResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.jobs.getAttemptNormalizationStatusesForJob({
  id: 811259,
}).then((res: GetAttemptNormalizationStatusesForJobResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                          | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `request`                                                          | [shared.JobIdRequestBody](../../models/shared/jobidrequestbody.md) | :heavy_check_mark:                                                 | The request object to use for the request.                         |
| `config`                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)       | :heavy_minus_sign:                                                 | Available config options for making requests.                      |


### Response

**Promise<[operations.GetAttemptNormalizationStatusesForJobResponse](../../models/operations/getattemptnormalizationstatusesforjobresponse.md)>**


## getJobDebugInfo

Gets all information needed to debug this job

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { GetJobDebugInfoResponse } from "airbyte-test/dist/sdk/models/operations";
import {
  AttemptFailureOrigin,
  AttemptFailureType,
  AttemptStatus,
  JobConfigType,
  JobStatus,
  JobType,
  ReleaseStage,
  SourceDefinitionReadSourceType,
} from "airbyte-test/dist/sdk/models/shared";
import { RFCDate } from "airbyte-test/dist/sdk/types";

const sdk = new AirbyteTest();

sdk.jobs.getJobDebugInfo({
  id: 318028,
}).then((res: GetJobDebugInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                          | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `request`                                                          | [shared.JobIdRequestBody](../../models/shared/jobidrequestbody.md) | :heavy_check_mark:                                                 | The request object to use for the request.                         |
| `config`                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)       | :heavy_minus_sign:                                                 | Available config options for making requests.                      |


### Response

**Promise<[operations.GetJobDebugInfoResponse](../../models/operations/getjobdebuginforesponse.md)>**


## getJobInfo

Get information about a job

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { GetJobInfoResponse } from "airbyte-test/dist/sdk/models/operations";
import {
  AttemptFailureOrigin,
  AttemptFailureType,
  AttemptStatus,
  JobConfigType,
  JobStatus,
} from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.jobs.getJobInfo({
  id: 286453,
}).then((res: GetJobInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                          | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `request`                                                          | [shared.JobIdRequestBody](../../models/shared/jobidrequestbody.md) | :heavy_check_mark:                                                 | The request object to use for the request.                         |
| `config`                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)       | :heavy_minus_sign:                                                 | Available config options for making requests.                      |


### Response

**Promise<[operations.GetJobInfoResponse](../../models/operations/getjobinforesponse.md)>**


## getJobInfoLight

Get information about a job excluding attempt info and logs

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { GetJobInfoLightResponse } from "airbyte-test/dist/sdk/models/operations";
import { JobConfigType, JobStatus } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.jobs.getJobInfoLight({
  id: 958068,
}).then((res: GetJobInfoLightResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                          | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `request`                                                          | [shared.JobIdRequestBody](../../models/shared/jobidrequestbody.md) | :heavy_check_mark:                                                 | The request object to use for the request.                         |
| `config`                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)       | :heavy_minus_sign:                                                 | Available config options for making requests.                      |


### Response

**Promise<[operations.GetJobInfoLightResponse](../../models/operations/getjobinfolightresponse.md)>**


## getLastReplicationJob

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { GetLastReplicationJobResponse } from "airbyte-test/dist/sdk/models/operations";
import { JobConfigType, JobStatus } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.jobs.getLastReplicationJob({
  connectionId: "efa9c95f-2eac-4556-9d30-7cfee81206e2",
}).then((res: GetLastReplicationJobResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [shared.ConnectionIdRequestBody](../../models/shared/connectionidrequestbody.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.GetLastReplicationJobResponse](../../models/operations/getlastreplicationjobresponse.md)>**


## listJobsFor

Returns recent jobs for a connection. Jobs are returned in descending order by createdAt.

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { ListJobsForResponse } from "airbyte-test/dist/sdk/models/operations";
import {
  AttemptFailureOrigin,
  AttemptFailureType,
  AttemptStatus,
  JobConfigType,
  JobStatus,
} from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.jobs.listJobsFor({
  configId: "deleniti",
  configTypes: [
    JobConfigType.CheckConnectionDestination,
  ],
  includingJobId: 963913,
  pagination: {
    pageSize: 673653,
    rowOffset: 303421,
  },
}).then((res: ListJobsForResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [shared.JobListRequestBody](../../models/shared/joblistrequestbody.md) | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.ListJobsForResponse](../../models/operations/listjobsforresponse.md)>**

