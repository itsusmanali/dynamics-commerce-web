/*---------------------------------------------------------------------------------------------
 * Copyright (c) Lumovy Technology Solutions. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

import type { Category } from "@/types/commerceTypes.g";
import { commerceRequest } from "@/lib/api/commerce/request";

type CategoryNode = Category & { children: CategoryNode[] };

function buildTree(categories: Category[]): CategoryNode[] {
  const map = new Map(categories.map((category) => [category.RecordId, { ...category, children: [] } as CategoryNode]));
  const roots: CategoryNode[] = [];
  for (const category of map.values()) {
    const parent = category.ParentCategory ? map.get(category.ParentCategory) : undefined;
    if (parent) parent.children.push(category); else roots.push(category);
  }
  return roots;
}

// EDIT ONLY THIS FUNCTION for this API: path, method, payload, params and result.
export async function GetCategories(request: Request) {
  const presentation = new URL(request.url).searchParams.get("presentation") === "list" ? "list" : "tree";
  const response = await commerceRequest<{ value?: Category[] }>({
    path: "/Categories/GetCategories",
    method: "POST",
    payload: (config) => ({ channelId: config.channelId }),
    params: { $top: "1000" },
  });
  const categories = response.value ?? [];
  return presentation === "list" ? categories : buildTree(categories);
}
