/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { InvalidInputProperty } from "./invalidinputproperty";
import { Expose, Type } from "class-transformer";

/**
 * Input failed validation
 */
export class InvalidInputExceptionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "exceptionClassName" })
  exceptionClassName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "exceptionStack" })
  exceptionStack?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata({ elemType: InvalidInputProperty })
  @Expose({ name: "validationErrors" })
  @Type(() => InvalidInputProperty)
  validationErrors: InvalidInputProperty[];
}