/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Successful operation
 */
export class SourceRead extends SpeakeasyBase {
    /**
     * The values required to configure the source. The schema for this must match the schema return by source_definition_specifications/get for the source.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "connectionConfiguration" })
    connectionConfiguration: any;

    @SpeakeasyMetadata()
    @Expose({ name: "icon" })
    icon?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "sourceDefinitionId" })
    sourceDefinitionId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "sourceId" })
    sourceId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "sourceName" })
    sourceName: string;

    @SpeakeasyMetadata()
    @Expose({ name: "workspaceId" })
    workspaceId: string;
}
