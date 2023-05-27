/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AirbyteCatalog } from "./airbytecatalog";
import { Expose, Type } from "class-transformer";

/**
 * to write this requested object to database.
 */
export class SourceDiscoverSchemaWriteRequestBody extends SpeakeasyBase {
    /**
     * describes the available schema (catalog).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "catalog" })
    @Type(() => AirbyteCatalog)
    catalog: AirbyteCatalog;

    @SpeakeasyMetadata()
    @Expose({ name: "configurationHash" })
    configurationHash?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "connectorVersion" })
    connectorVersion?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "sourceId" })
    sourceId?: string;
}
