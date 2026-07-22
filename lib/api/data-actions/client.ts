/*---------------------------------------------------------------------------------------------
 * Copyright (c) Lumovy Technology Solutions. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

"use client";

import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
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

// Paginated GET. pageParam is sent as $skip and pageSize as $top.
export function useInfiniteDataAction<TPage>({ action, params = {}, pageSize = 10, getItemCount, getTotalCount, enabled = true }: {
  action: ModuleDataActionDefinition;
  params?: DataActionParams;
  pageSize?: number;
  getItemCount: (page: TPage) => number;
  getTotalCount?: (page: TPage) => number;
  enabled?: boolean;
}) {
  return useInfiniteQuery({
    queryKey: ["infinite-data-action", action.endpoint, params, pageSize],
    queryFn: async ({ pageParam, signal }) => {
      const response = await browserApi.get<ApiSuccess<TPage>>(action.endpoint.replace(/^\/api/, ""), { params: { ...params, top: pageSize, skip: pageParam }, signal });
      return response.data.data;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => {
      const loaded = pages.reduce((total, page) => total + getItemCount(page), 0);
      const total = getTotalCount?.(lastPage);
      if (getItemCount(lastPage) < pageSize || (total !== undefined && loaded >= total)) return undefined;
      return loaded;
    },
    enabled: action.execution === "client" && enabled,
  });
}

// Dynamic writes are intentionally standard mutations, separate from definition.json.
export function useApiMutation<TData, TVariables>({ endpoint, method = "POST" }: {
  endpoint: string | ((variables: TVariables) => string);
  method?: "POST" | "PUT" | "PATCH" | "DELETE";
}) {
  return useMutation({
    mutationFn: async (variables: TVariables) => {
      const url = typeof endpoint === "function" ? endpoint(variables) : endpoint;
      const response = await browserApi.request<ApiSuccess<TData>>({ url: url.replace(/^\/api/, ""), method, data: variables });
      return response.data.data;
    },
  });
}
