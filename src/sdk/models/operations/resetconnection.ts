/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class ResetConnectionResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Input failed validation
     */
    @SpeakeasyMetadata()
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;

    /**
     * Successful operation
     */
    @SpeakeasyMetadata()
    jobInfoRead?: shared.JobInfoRead;

    /**
     * Object with given id was not found.
     */
    @SpeakeasyMetadata()
    notFoundKnownExceptionInfo?: shared.NotFoundKnownExceptionInfo;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
