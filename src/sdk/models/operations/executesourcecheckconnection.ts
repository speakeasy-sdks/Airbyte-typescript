/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class ExecuteSourceCheckConnectionResponse extends SpeakeasyBase {
  /**
   * Successful operation
   */
  @SpeakeasyMetadata()
  checkConnectionRead?: shared.CheckConnectionRead;

  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Input failed validation
   */
  @SpeakeasyMetadata()
  invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}