/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AirbyteCatalog } from "./airbytecatalog";
import { ConnectionSchedule } from "./connectionschedule";
import { ConnectionScheduleData } from "./connectionscheduledata";
import { ConnectionScheduleType } from "./connectionscheduletype";
import { ConnectionStatus } from "./connectionstatus";
import { Geography } from "./geography";
import { NamespaceDefinitionType } from "./namespacedefinitiontype";
import { NonBreakingChangesPreference } from "./nonbreakingchangespreference";
import { ResourceRequirements } from "./resourcerequirements";
import { WebBackendOperationCreateOrUpdate } from "./webbackendoperationcreateorupdate";
import { Expose, Type } from "class-transformer";

/**
 * Used to apply a patch-style update to a connection, which means that null properties remain unchanged
 */
export class WebBackendConnectionUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "connectionId" })
  connectionId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "geography" })
  geography?: Geography;

  /**
   * Name that will be set to the connection
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  /**
   * Method used for computing final namespace in destination
   */
  @SpeakeasyMetadata()
  @Expose({ name: "namespaceDefinition" })
  namespaceDefinition?: NamespaceDefinitionType;

  /**
   * Used when namespaceDefinition is 'customformat'. If blank then behaves like namespaceDefinition = 'destination'. If "${SOURCE_NAMESPACE}" then behaves like namespaceDefinition = 'source'.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "namespaceFormat" })
  namespaceFormat?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "nonBreakingChangesPreference" })
  nonBreakingChangesPreference?: NonBreakingChangesPreference;

  @SpeakeasyMetadata()
  @Expose({ name: "notifySchemaChanges" })
  notifySchemaChanges?: boolean;

  @SpeakeasyMetadata({ elemType: WebBackendOperationCreateOrUpdate })
  @Expose({ name: "operations" })
  @Type(() => WebBackendOperationCreateOrUpdate)
  operations?: WebBackendOperationCreateOrUpdate[];

  /**
   * Prefix that will be prepended to the name of each stream when it is written to the destination.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "prefix" })
  prefix?: string;

  /**
   * optional resource requirements to run workers (blank for unbounded allocations)
   */
  @SpeakeasyMetadata()
  @Expose({ name: "resourceRequirements" })
  @Type(() => ResourceRequirements)
  resourceRequirements?: ResourceRequirements;

  /**
   * if null, then no schedule is set.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "schedule" })
  @Type(() => ConnectionSchedule)
  schedule?: ConnectionSchedule;

  /**
   * schedule for when the the connection should run, per the schedule type
   */
  @SpeakeasyMetadata()
  @Expose({ name: "scheduleData" })
  @Type(() => ConnectionScheduleData)
  scheduleData?: ConnectionScheduleData;

  /**
   * determine how the schedule data should be interpreted
   */
  @SpeakeasyMetadata()
  @Expose({ name: "scheduleType" })
  scheduleType?: ConnectionScheduleType;

  @SpeakeasyMetadata()
  @Expose({ name: "skipReset" })
  skipReset?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceCatalogId" })
  sourceCatalogId?: string;

  /**
   * Active means that data is flowing through the connection. Inactive means it is not. Deprecated means the connection is off and cannot be re-activated. the schema field describes the elements of the schema that will be synced.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: ConnectionStatus;

  /**
   * describes the available schema (catalog).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "syncCatalog" })
  @Type(() => AirbyteCatalog)
  syncCatalog?: AirbyteCatalog;
}
