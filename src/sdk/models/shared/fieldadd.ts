/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { FieldSchema } from "./fieldschema";
import { Expose, Type } from "class-transformer";

export class FieldAdd extends SpeakeasyBase {
    /**
     * JSONSchema representation of the field
     */
    @SpeakeasyMetadata()
    @Expose({ name: "schema" })
    @Type(() => FieldSchema)
    schema?: FieldSchema;
}
