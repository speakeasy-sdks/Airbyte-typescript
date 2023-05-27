/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { JobTypeResourceLimit } from "./jobtyperesourcelimit";
import { ResourceRequirements } from "./resourcerequirements";
import { Expose, Type } from "class-transformer";

/**
 * actor definition specific resource requirements. if default is set, these are the requirements that should be set for ALL jobs run for this actor definition. it is overriden by the job type specific configurations. if not set, the platform will use defaults. these values will be overriden by configuration at the connection level.
 */
export class ActorDefinitionResourceRequirements extends SpeakeasyBase {
    /**
     * optional resource requirements to run workers (blank for unbounded allocations)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "default" })
    @Type(() => ResourceRequirements)
    default?: ResourceRequirements;

    @SpeakeasyMetadata({ elemType: JobTypeResourceLimit })
    @Expose({ name: "jobSpecific" })
    @Type(() => JobTypeResourceLimit)
    jobSpecific?: JobTypeResourceLimit[];
}
