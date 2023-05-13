/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AttemptRead } from "./attemptread";
import { JobRead } from "./jobread";
import { Expose, Type } from "class-transformer";

export class JobWithAttemptsRead extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AttemptRead })
  @Expose({ name: "attempts" })
  @Type(() => AttemptRead)
  attempts?: AttemptRead[];

  @SpeakeasyMetadata()
  @Expose({ name: "job" })
  @Type(() => JobRead)
  job?: JobRead;
}