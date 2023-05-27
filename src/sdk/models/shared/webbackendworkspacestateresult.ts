/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Successful operation
 */
export class WebBackendWorkspaceStateResult extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "hasConnections" })
    hasConnections: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "hasDestinations" })
    hasDestinations: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "hasSources" })
    hasSources: boolean;
}
