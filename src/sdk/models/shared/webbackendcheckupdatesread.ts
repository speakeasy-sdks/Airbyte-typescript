/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Summary of source and destination definitions that could be updated
 */
export class WebBackendCheckUpdatesRead extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "destinationDefinitions" })
    destinationDefinitions: number;

    @SpeakeasyMetadata()
    @Expose({ name: "sourceDefinitions" })
    sourceDefinitions: number;
}
