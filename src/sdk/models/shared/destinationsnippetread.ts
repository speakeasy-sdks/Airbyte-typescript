/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class DestinationSnippetRead extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "destinationDefinitionId" })
    destinationDefinitionId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "destinationId" })
    destinationId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "destinationName" })
    destinationName: string;

    @SpeakeasyMetadata()
    @Expose({ name: "icon" })
    icon?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;
}
