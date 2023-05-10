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
  AttemptFailureOriginEnum,
  AttemptFailureTypeEnum,
  AttemptStatusEnum,
  JobConfigTypeEnum,
  JobStatusEnum,
} from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.jobs.cancelJob({
  id: 685467,
}).then((res: CancelJobResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getAttemptNormalizationStatusesForJob

Get normalization status to determine if we can bypass normalization phase

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { GetAttemptNormalizationStatusesForJobResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.jobs.getAttemptNormalizationStatusesForJob({
  id: 943103,
}).then((res: GetAttemptNormalizationStatusesForJobResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getJobDebugInfo

Gets all information needed to debug this job

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { GetJobDebugInfoResponse } from "airbyte-test/dist/sdk/models/operations";
import {
  AttemptFailureOriginEnum,
  AttemptFailureTypeEnum,
  AttemptStatusEnum,
  JobConfigTypeEnum,
  JobStatusEnum,
  JobTypeEnum,
  ReleaseStageEnum,
  SourceDefinitionReadSourceTypeEnum,
} from "airbyte-test/dist/sdk/models/shared";
import { RFCDate } from "airbyte-test/dist/sdk/types";

const sdk = new AirbyteTest();

sdk.jobs.getJobDebugInfo({
  id: 49499,
}).then((res: GetJobDebugInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getJobInfo

Get information about a job

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { GetJobInfoResponse } from "airbyte-test/dist/sdk/models/operations";
import {
  AttemptFailureOriginEnum,
  AttemptFailureTypeEnum,
  AttemptStatusEnum,
  JobConfigTypeEnum,
  JobStatusEnum,
} from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.jobs.getJobInfo({
  id: 211301,
}).then((res: GetJobInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getJobInfoLight

Get information about a job excluding attempt info and logs

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { GetJobInfoLightResponse } from "airbyte-test/dist/sdk/models/operations";
import { JobConfigTypeEnum, JobStatusEnum } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.jobs.getJobInfoLight({
  id: 101854,
}).then((res: GetJobInfoLightResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getLastReplicationJob

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { GetLastReplicationJobResponse } from "airbyte-test/dist/sdk/models/operations";
import { JobConfigTypeEnum, JobStatusEnum } from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.jobs.getLastReplicationJob({
  connectionId: "02d514f4-cc6f-418b-b962-1a6a4f77a87e",
}).then((res: GetLastReplicationJobResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listJobsFor

Returns recent jobs for a connection. Jobs are returned in descending order by createdAt.

### Example Usage

```typescript
import { AirbyteTest } from "airbyte-test";
import { ListJobsForResponse } from "airbyte-test/dist/sdk/models/operations";
import {
  AttemptFailureOriginEnum,
  AttemptFailureTypeEnum,
  AttemptStatusEnum,
  JobConfigTypeEnum,
  JobStatusEnum,
} from "airbyte-test/dist/sdk/models/shared";

const sdk = new AirbyteTest();

sdk.jobs.listJobsFor({
  configId: "earum",
  configTypes: [
    JobConfigTypeEnum.ResetConnection,
  ],
  includingJobId: 263346,
  pagination: {
    pageSize: 701978,
    rowOffset: 930111,
  },
}).then((res: ListJobsForResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
