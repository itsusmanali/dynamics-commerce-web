/*---------------------------------------------------------------------------------------------
 * Copyright (c) Lumovy Technology Solutions. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

import "server-only";
import { site } from "@/lib/site";
import type { ModuleDataActionDefinition } from "@/modules/module.types";
import type { ApiSuccess } from "../contracts";
import type { DataActionParams } from "./client";

// The one server GET loader used by every module. Client actions return null automatically.
export async function loadDataAction<T>(action: ModuleDataActionDefinition, params: DataActionParams): Promise<T | null> {
  if (action.execution !== "server") return null;
  const url = new URL(action.endpoint, site.url);
  Object.entries(params).forEach(([key, value]) => { if (value !== undefined) url.searchParams.set(key, String(value)); });
  const response = await fetch(url, { cache: "no-store", headers: { Accept: "application/json" } });
  if (!response.ok) throw new Error(`Data action failed: ${action.endpoint} (${response.status})`);
  return ((await response.json()) as ApiSuccess<T>).data;
}
