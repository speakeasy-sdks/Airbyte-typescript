/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AttemptRead } from "./attemptread";
import { LogRead } from "./logread";
import { Expose, Type } from "class-transformer";

export class AttemptInfoRead extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "attempt" })
    @Type(() => AttemptRead)
    attempt: AttemptRead;

    @SpeakeasyMetadata()
    @Expose({ name: "logs" })
    @Type(() => LogRead)
    logs: LogRead;
}
