/*---------------------------------------------------------------------------------------------
 * Copyright (c) Lumovy Technology Solutions. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

import type { ComponentType, ReactNode } from "react";

export type ModulePrimitive = string | number | boolean | null;
export type ModuleValues = Record<string, ModulePrimitive | string[]>;
export interface ModuleInstance {
  id: string;
  name: string;
  config: ModuleValues;
  resources: Record<string, ModuleValues>;
  slots?: Record<string, ModuleInstance[]>;
  html?: string;
}
export interface ModuleRuntimeProps<
  TConfig extends ModuleValues,
  TResources extends ModuleValues,
> {
  id: string;
  config: TConfig;
  resources: TResources;
  locale: string;
  slots: Record<string, ReactNode>;
}
export type ModuleComponent = ComponentType<
  ModuleRuntimeProps<ModuleValues, ModuleValues>
>;
export interface ModuleDefinitionField {
  friendlyName: string;
  description?: string;
  type:
    | "string"
    | "text"
    | "number"
    | "boolean"
    | "color"
    | "select"
    | "url"
    | "image";
  default?: ModulePrimitive | string[];
  group?: string;
  options?: Array<{ label: string; value: string }>;
  required?: boolean;
}
export type ModuleDataExecution = "server" | "client";
export interface ModuleDataActionDefinition {
  endpoint: string;
  method: "GET";
  execution: ModuleDataExecution;
}
export interface ModuleSlotDefinition {
  friendlyName: string;
  description?: string;
  allowedModules: string[];
  required?: boolean;
}
export interface ModuleDefinition {
  schemaVersion: 1;
  friendlyName: string;
  name: string;
  description: string;
  categories: string[];
  tags: string[];
  config: Record<string, ModuleDefinitionField>;
  resources: Record<
    string,
    { value: ModulePrimitive; comment?: string; group?: string }
  >;
  slots?: Record<string, ModuleSlotDefinition>;
  dataActions?: Record<string, ModuleDataActionDefinition>;
}
