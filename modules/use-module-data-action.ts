"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { ModuleDataActionDefinition } from "./module.types";

export function useModuleDataAction<T>({ moduleName, actionName, action, params, enabled, initialData }: {
  moduleName: string;
  actionName: string;
  action: ModuleDataActionDefinition;
  params?: Record<string, string>;
  enabled: boolean;
  initialData?: T;
}) {
  return useQuery({
    queryKey: ["module-data", moduleName, actionName, params],
    queryFn: async ({ signal }) => (await axios.get<T>(action.endpoint, { params, signal, timeout: 10_000 })).data,
    enabled,
    initialData,
  });
}
