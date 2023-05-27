/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RFCDate } from "../../types";
import { ActorDefinitionResourceRequirements } from "./actordefinitionresourcerequirements";
import { NormalizationDestinationDefinitionConfig } from "./normalizationdestinationdefinitionconfig";
import { ReleaseStage } from "./releasestage";
import { Expose, Transform, Type } from "class-transformer";

/**
 * Successful operation
 */
export class DestinationDefinitionRead extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "destinationDefinitionId" })
    destinationDefinitionId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "dockerImageTag" })
    dockerImageTag: string;

    @SpeakeasyMetadata()
    @Expose({ name: "dockerRepository" })
    dockerRepository: string;

    @SpeakeasyMetadata()
    @Expose({ name: "documentationUrl" })
    documentationUrl: string;

    @SpeakeasyMetadata()
    @Expose({ name: "icon" })
    icon?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * describes a normalization config for destination definition
     */
    @SpeakeasyMetadata()
    @Expose({ name: "normalizationConfig" })
    @Type(() => NormalizationDestinationDefinitionConfig)
    normalizationConfig: NormalizationDestinationDefinitionConfig;

    /**
     * The Airbyte Protocol version supported by the connector
     */
    @SpeakeasyMetadata()
    @Expose({ name: "protocolVersion" })
    protocolVersion?: string;

    /**
     * The date when this connector was first released, in yyyy-mm-dd format.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "releaseDate" })
    @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
    releaseDate?: RFCDate;

    @SpeakeasyMetadata()
    @Expose({ name: "releaseStage" })
    releaseStage?: ReleaseStage;

    /**
     * actor definition specific resource requirements. if default is set, these are the requirements that should be set for ALL jobs run for this actor definition. it is overriden by the job type specific configurations. if not set, the platform will use defaults. these values will be overriden by configuration at the connection level.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "resourceRequirements" })
    @Type(() => ActorDefinitionResourceRequirements)
    resourceRequirements?: ActorDefinitionResourceRequirements;

    /**
     * an optional flag indicating whether DBT is used in the normalization. If the flag value is NULL - DBT is not used.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "supportsDbt" })
    supportsDbt: boolean;
}
