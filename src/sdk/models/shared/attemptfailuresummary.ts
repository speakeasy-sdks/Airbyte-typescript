/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AttemptFailureReason } from "./attemptfailurereason";
import { Expose, Type } from "class-transformer";

export class AttemptFailureSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AttemptFailureReason })
  @Expose({ name: "failures" })
  @Type(() => AttemptFailureReason)
  failures: AttemptFailureReason[];

  /**
   * True if the number of committed records for this attempt was greater than 0. False if 0 records were committed. If not set, the number of committed records is unknown.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "partialSuccess" })
  partialSuccess?: boolean;
}