/*---------------------------------------------------------------------------------------------
 * Copyright (c) Lumovy Technology Solutions. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

"use client";

import { useQuery } from "@tanstack/react-query";
import type { ModuleDataActionDefinition } from "@/modules/module.types";
import type { ApiSuccess } from "../contracts";
import { browserApi } from "../http/browser-client";

export type DataActionParams = Record<string, string | number | boolean | undefined>;

// The one GET hook used by every module. It returns all normal React Query states.
export function useDataAction<T>(action: ModuleDataActionDefinition, params: DataActionParams, initialData?: T | null, enabled = true) {
  return useQuery({
    queryKey: ["data-action", action.endpoint, params],
    queryFn: async ({ signal }) => {
      const response = await browserApi.get<ApiSuccess<T>>(action.endpoint.replace(/^\/api/, ""), { params, signal });
      return response.data.data;
    },
    enabled: action.execution === "client" && enabled,
    initialData: initialData ?? undefined,
  });
}
