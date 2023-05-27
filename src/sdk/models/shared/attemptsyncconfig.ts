/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ConnectionState } from "./connectionstate";
import { Expose, Type } from "class-transformer";

export class AttemptSyncConfig extends SpeakeasyBase {
    /**
     * The values required to configure the destination. The schema for this must match the schema return by destination_definition_specifications/get for the destinationDefinition.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "destinationConfiguration" })
    destinationConfiguration: any;

    /**
     * The values required to configure the source. The schema for this must match the schema return by source_definition_specifications/get for the source.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sourceConfiguration" })
    sourceConfiguration: any;

    /**
     * Contains the state for a connection. The stateType field identifies what type of state it is. Only the field corresponding to that type will be set, the rest will be null. If stateType=not_set, then none of the fields will be set.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "state" })
    @Type(() => ConnectionState)
    state?: ConnectionState;
}
