/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { SourceCloneConfiguration } from "./sourcecloneconfiguration";
import { Expose, Type } from "class-transformer";

/**
 * The values required to configure the source. The schema for this should have an id of the existing source along with the configuration you want to change in case.
 */
export class SourceCloneRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "sourceCloneId" })
  sourceCloneId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceConfiguration" })
  @Type(() => SourceCloneConfiguration)
  sourceConfiguration?: SourceCloneConfiguration;
}