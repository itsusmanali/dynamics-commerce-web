"use client";

import type { ModuleDataActionDefinition } from "@/modules/module.types";
import { useDataActionQuery } from "../../query/actions";
import { commerceQueryKeys } from "../../query/query-keys";
import type { CategoriesRequest, CommerceCategory, CommerceCategoryNode } from "./categories.types";

export function useCategoriesQuery(action: ModuleDataActionDefinition, request: CategoriesRequest, enabled = true, initialData?: CommerceCategory[] | CommerceCategoryNode[]) {
  return useDataActionQuery<CommerceCategory[] | CommerceCategoryNode[], CategoriesRequest>({ action, queryKey: commerceQueryKeys.categories(request.presentation), variables: request, enabled, initialData });
}
