/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { JobConfigTypeEnum } from "./jobconfigtypeenum";
import { JobStatusEnum } from "./jobstatusenum";
import { ResetConfig } from "./resetconfig";
import { Expose, Type } from "class-transformer";

export class JobRead extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "configId" })
  configId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "configType" })
  configType: JobConfigTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "createdAt" })
  createdAt: number;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: number;

  /**
   * contains information about how a reset was configured. only populated if the job was a reset.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "resetConfig" })
  @Type(() => ResetConfig)
  resetConfig?: ResetConfig;

  @SpeakeasyMetadata()
  @Expose({ name: "startedAt" })
  startedAt?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: JobStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "updatedAt" })
  updatedAt: number;
}