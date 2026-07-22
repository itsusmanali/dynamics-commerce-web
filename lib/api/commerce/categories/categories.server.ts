import "server-only";
import { createCommerceApi } from "../../http/commerce-client";
import { getCommerceConfig } from "@/lib/wordpress/queries";
import type { CategoriesRequest, CommerceCategory, CommerceCategoryNode } from "./categories.types";

export function buildCategoryTree(categories: CommerceCategory[]): CommerceCategoryNode[] {
  const map = new Map<number, CommerceCategoryNode>();
  categories.forEach((category) => map.set(category.RecordId, { ...category, children: [] }));
  const roots: CommerceCategoryNode[] = [];
  for (const category of map.values()) {
    const parent = category.ParentCategory ? map.get(category.ParentCategory) : undefined;
    if (parent) parent.children.push(category); else roots.push(category);
  }
  const sort = (items: CommerceCategoryNode[]): CommerceCategoryNode[] => items
    .sort((a, b) => Number(Boolean(b.children.length)) - Number(Boolean(a.children.length)))
    .map((category) => ({ ...category, children: sort(category.children) }));
  return sort(roots);
}

export async function getCategories({ presentation }: CategoriesRequest) {
  const config = await getCommerceConfig();
  const response = await createCommerceApi(config).post<{ value?: CommerceCategory[] }>("/Categories/GetCategories", { channelId: Number(config.channelId) }, { params: { $top: "1000" } });
  const categories = response.data?.value ?? [];
  return presentation === "list" ? categories : buildCategoryTree(categories);
}
