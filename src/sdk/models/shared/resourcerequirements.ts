/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * optional resource requirements to run workers (blank for unbounded allocations)
 */
export class ResourceRequirements extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "cpu_limit" })
    cpuLimit?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "cpu_request" })
    cpuRequest?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "memory_limit" })
    memoryLimit?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "memory_request" })
    memoryRequest?: string;
}
