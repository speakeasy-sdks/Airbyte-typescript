<!-- Start SDK Example Usage -->
```typescript
import { AirbyteTest } from "airbyte-test";
import { SaveStatsResponse } from "airbyte-test/dist/sdk/models/operations";

const sdk = new AirbyteTest();

sdk.attempt.saveStats({
  attemptNumber: 548814,
  jobId: 592845,
  stats: {
    bytesEmitted: 715190,
    estimatedBytes: 844266,
    estimatedRecords: 602763,
    recordsCommitted: 857946,
    recordsEmitted: 544883,
    stateMessagesEmitted: 847252,
  },
  streamStats: [
    {
      stats: {
        bytesEmitted: 623564,
        estimatedBytes: 645894,
        estimatedRecords: 384382,
        recordsCommitted: 437587,
        recordsEmitted: 297534,
        stateMessagesEmitted: 891773,
      },
      streamName: "ipsa",
      streamNamespace: "delectus",
    },
    {
      stats: {
        bytesEmitted: 272656,
        estimatedBytes: 383441,
        estimatedRecords: 477665,
        recordsCommitted: 791725,
        recordsEmitted: 812169,
        stateMessagesEmitted: 528895,
      },
      streamName: "iusto",
      streamNamespace: "excepturi",
    },
  ],
}).then((res: SaveStatsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->