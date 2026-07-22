/*---------------------------------------------------------------------------------------------
 * Copyright (c) Lumovy Technology Solutions. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

import "server-only";
import { createCommerceApi } from "../../http/commerce-client";
import { getCommerceConfig } from "@/lib/wordpress/queries";
import type { Category } from "@/types/commerceTypes.g";

type CategoryNode = Category & { children: CategoryNode[] };

export function buildCategoryTree(categories: Category[]): CategoryNode[] {
  const map = new Map<number, CategoryNode>();
  categories.forEach((category) =>
    map.set(category.RecordId, { ...category, children: [] }),
  );
  const roots: CategoryNode[] = [];
  for (const category of map.values()) {
    const parent = category.ParentCategory
      ? map.get(category.ParentCategory)
      : undefined;
    if (parent) parent.children.push(category);
    else roots.push(category);
  }
  const sort = (items: CategoryNode[]): CategoryNode[] =>
    items
      .sort(
        (a, b) =>
          Number(Boolean(b.children.length)) -
          Number(Boolean(a.children.length)),
      )
      .map((category) => ({ ...category, children: sort(category.children) }));
  return sort(roots);
}

export async function getCategories(presentation: "list" | "tree") {
  const config = await getCommerceConfig();
  const response = await createCommerceApi(config).post<{ value?: Category[] }>(
    "/Categories/GetCategories",
    { channelId: Number(config.channelId) },
    { params: { $top: "1000" } },
  );
  const categories = response.data?.value ?? [];
  return presentation === "list" ? categories : buildCategoryTree(categories);
}
