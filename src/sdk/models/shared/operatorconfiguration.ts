/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { OperatorDbt } from "./operatordbt";
import { OperatorNormalization } from "./operatornormalization";
import { OperatorType } from "./operatortype";
import { OperatorWebhook } from "./operatorwebhook";
import { Expose, Type } from "class-transformer";

export class OperatorConfiguration extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "dbt" })
    @Type(() => OperatorDbt)
    dbt?: OperatorDbt;

    @SpeakeasyMetadata()
    @Expose({ name: "normalization" })
    @Type(() => OperatorNormalization)
    normalization?: OperatorNormalization;

    @SpeakeasyMetadata()
    @Expose({ name: "operatorType" })
    operatorType: OperatorType;

    @SpeakeasyMetadata()
    @Expose({ name: "webhook" })
    @Type(() => OperatorWebhook)
    webhook?: OperatorWebhook;
}
