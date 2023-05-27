/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { OperatorConfiguration } from "./operatorconfiguration";
import { Expose, Type } from "class-transformer";

export class OperationUpdate extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "operationId" })
    operationId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "operatorConfiguration" })
    @Type(() => OperatorConfiguration)
    operatorConfiguration: OperatorConfiguration;
}
