import type { ComponentType } from "react";

export type ModulePrimitive = string | number | boolean | null;
export type ModuleValues = Record<string, ModulePrimitive | string[]>;
export interface ModuleInstance { id: string; name: string; config: ModuleValues; resources: Record<string, ModuleValues>; html?: string; }
export interface ModuleRuntimeProps<TConfig extends ModuleValues, TResources extends ModuleValues> { id: string; config: TConfig; resources: TResources; locale: string; }
export type ModuleComponent = ComponentType<ModuleRuntimeProps<ModuleValues, ModuleValues>>;
export interface ModuleDefinitionField { friendlyName: string; description?: string; type: "string" | "text" | "number" | "boolean" | "color" | "select" | "url" | "image"; default?: ModulePrimitive | string[]; group?: string; options?: Array<{ label: string; value: string }>; required?: boolean; }
export type ModuleDataExecution = "server" | "client";
export type ModuleDataOperation = "query" | "mutation";
export interface ModuleDataActionDefinition { friendlyName: string; description?: string; operation: ModuleDataOperation; endpoint: string; method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE"; defaultExecution: ModuleDataExecution; allowedExecutions: ModuleDataExecution[]; }
export interface ModuleDefinition { schemaVersion: 1; friendlyName: string; name: string; description: string; categories: string[]; tags: string[]; config: Record<string, ModuleDefinitionField>; resources: Record<string, { value: ModulePrimitive; comment?: string; group?: string }>; dataActions?: Record<string, ModuleDataActionDefinition>; }
