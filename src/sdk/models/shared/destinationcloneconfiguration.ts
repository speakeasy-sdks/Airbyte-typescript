/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class DestinationCloneConfiguration extends SpeakeasyBase {
    /**
     * The values required to configure the destination. The schema for this must match the schema return by destination_definition_specifications/get for the destinationDefinition.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "connectionConfiguration" })
    connectionConfiguration?: any;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}
