/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Object with given id was not found.
 */
export class NotFoundKnownExceptionInfo extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "exceptionClassName" })
    exceptionClassName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "exceptionStack" })
    exceptionStack?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message: string;

    @SpeakeasyMetadata()
    @Expose({ name: "rootCauseExceptionClassName" })
    rootCauseExceptionClassName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "rootCauseExceptionStack" })
    rootCauseExceptionStack?: string[];
}
