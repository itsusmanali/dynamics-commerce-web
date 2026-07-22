"use client";

import { useMutation, useQuery, type QueryKey, type UseMutationOptions, type UseQueryOptions } from "@tanstack/react-query";
import type { AxiosRequestConfig } from "axios";
import { browserApi } from "../http/browser-client";
import type { ApiSuccess } from "../contracts";
import type { ModuleDataActionDefinition } from "@/modules/module.types";

function request<TData, TVariables>(action: ModuleDataActionDefinition, variables?: TVariables, signal?: AbortSignal) {
  const config: AxiosRequestConfig = { url: action.endpoint.replace(/^\/api/, ""), method: action.method, signal };
  if (action.method === "GET") config.params = variables;
  else config.data = variables;
  return browserApi.request<ApiSuccess<TData>>(config).then(({ data }) => data.data);
}

export function useDataActionQuery<TData, TVariables>({ action, queryKey, variables, enabled = true, initialData, select }: {
  action: ModuleDataActionDefinition; queryKey: QueryKey; variables: TVariables; enabled?: boolean; initialData?: TData; select?: UseQueryOptions<TData, Error, TData>["select"];
}) {
  return useQuery({ queryKey, queryFn: ({ signal }) => request<TData, TVariables>(action, variables, signal), enabled: enabled && action.operation === "query" && action.defaultExecution === "client", initialData, select });
}

export function useDataActionMutation<TData, TVariables>(action: ModuleDataActionDefinition, options?: Omit<UseMutationOptions<TData, Error, TVariables>, "mutationFn">) {
  return useMutation({ mutationFn: (variables) => {
    if (action.operation !== "mutation") return Promise.reject(new Error(`${action.friendlyName} is not declared as a mutation.`));
    return request<TData, TVariables>(action, variables);
  }, ...options });
}
