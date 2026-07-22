/*---------------------------------------------------------------------------------------------
 * Copyright (c) Lumovy Technology Solutions. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

import type { Category } from "@/types/commerceTypes.g";
import { commerceRequest } from "@/lib/api/commerce/request";
import { getCommerceConfig } from "@/lib/wordpress/queries";

export type StorefrontCategory = Category & { imageUrl?: string };
type CategoryNode = StorefrontCategory & { children: CategoryNode[] };

function buildTree(categories: StorefrontCategory[]): CategoryNode[] {
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
  const [response, config] = await Promise.all([commerceRequest<{ value?: Category[] }>({
    path: "/Categories/GetCategories",
    method: "POST",
    payload: (config) => ({ channelId: config.channelId }),
    params: { $top: "1000" },
  }), getCommerceConfig()]);
  const categories = (response.value ?? []).map((category) => { const image = category.Images?.find((item) => item.IsDefault)?.Uri ?? category.Images?.[0]?.Uri; return { ...category, imageUrl: image ? (/^https?:\/\//i.test(image) ? image : `${config.baseImageUrl}${image.replace(/^\/+/, "")}`) : undefined }; });
  return presentation === "list" ? categories : buildTree(categories);
}
