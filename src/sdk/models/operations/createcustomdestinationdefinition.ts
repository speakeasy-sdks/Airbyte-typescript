/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class CreateCustomDestinationDefinitionResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Successful operation
     */
    @SpeakeasyMetadata()
    destinationDefinitionRead?: shared.DestinationDefinitionRead;

    /**
     * Input failed validation
     */
    @SpeakeasyMetadata()
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
