/*---------------------------------------------------------------------------------------------
 * Copyright (c) Lumovy Technology Solutions. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

import type { Category, SimpleProduct } from "@/types/commerceTypes.g";
import { GetCategories } from "@/app/api/commerce/categories/GetCategories";
import { SearchProducts } from "@/app/api/commerce/products/SearchProducts";
import { cache } from "react";

export type CatalogRoute =
  | { kind: "category"; category: Category; templateUri: "/category/" }
  | { kind: "product"; category: Category; product: SimpleProduct; templateUri: "/product/" };

export function catalogSlug(value?: string) {
  return (value ?? "").toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

// Commerce URLs stay clean: /category-name and /category-name/product-name.
export const resolveCatalogRoute = cache(async (parts: string[]): Promise<CatalogRoute | null> => {
  if (parts.length < 1 || parts.length > 2 || parts[0] === "__wordpress-build-validation__") return null;
  try {
    const request = new Request("http://internal/commerce/categories?presentation=list");
    const categories = await GetCategories(request) as Category[];
    const category = categories.find((item) => catalogSlug(item.Name) === parts[0]);
    if (!category) return null;
    if (parts.length === 1) return { kind: "category", category, templateUri: "/category/" };

    const query = new URLSearchParams({ categoryId: String(category.RecordId), search: parts[1].replaceAll("-", " "), top: "100" });
    const result = await SearchProducts(new Request(`http://internal/commerce/products?${query}`));
    const product = result.products.find((item) => catalogSlug(item.Name) === parts[1] || catalogSlug(item.ProductNumber) === parts[1]);
    return product ? { kind: "product", category, product, templateUri: "/product/" } : null;
  } catch (error) {
    console.error("Unable to resolve the Commerce URL.", error);
    return null;
  }
});
