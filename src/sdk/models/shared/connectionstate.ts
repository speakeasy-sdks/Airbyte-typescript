/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ConnectionStateType } from "./connectionstatetype";
import { GlobalState } from "./globalstate";
import { StateBlob } from "./stateblob";
import { StreamState } from "./streamstate";
import { Expose, Type } from "class-transformer";

/**
 * Contains the state for a connection. The stateType field identifies what type of state it is. Only the field corresponding to that type will be set, the rest will be null. If stateType=not_set, then none of the fields will be set.
 */
export class ConnectionState extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "connectionId" })
    connectionId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "globalState" })
    @Type(() => GlobalState)
    globalState?: GlobalState;

    @SpeakeasyMetadata()
    @Expose({ name: "state" })
    @Type(() => StateBlob)
    state?: StateBlob;

    @SpeakeasyMetadata()
    @Expose({ name: "stateType" })
    stateType: ConnectionStateType;

    @SpeakeasyMetadata({ elemType: StreamState })
    @Expose({ name: "streamState" })
    @Type(() => StreamState)
    streamState?: StreamState[];
}
