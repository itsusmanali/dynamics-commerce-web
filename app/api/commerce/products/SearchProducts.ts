/*---------------------------------------------------------------------------------------------
 * Copyright (c) Lumovy Technology Solutions. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

import type {
  SearchRefinerValue,
  SimpleProduct,
} from "@/types/commerceTypes.g";
import { commerceRequest } from "@/lib/api/commerce/request";
import { getCommerceConfig } from "@/lib/wordpress/queries";

export interface StorefrontProduct extends SimpleProduct { imageUrl?: string }

export interface ProductsResponse {
  products: StorefrontProduct[];
  totalCount: number;
}

export async function SearchProducts(
  request: Request,
): Promise<ProductsResponse> {
  const search = new URL(request.url).searchParams;
  const categoryId = Number(search.get("categoryId")) || undefined;
  const refinements = search.get("refinements");
  const refinementPayload = refinements
    ? (JSON.parse(refinements) as SearchRefinerValue[])
    : undefined;
  const [response, config] = await Promise.all([commerceRequest<{
    value?: SimpleProduct[];
    "@odata.count"?: number;
  }>({
    path: "/Products/SearchByCriteria",
    method: "POST",
    payload: (config) => ({
      searchCriteria: {
        Context: { ChannelId: config.channelId, CatalogId: 0 },
        IncludeAttributes: true,
        DownloadProductData: true,
        CategoryIds: categoryId ? [categoryId] : [],
        Ids: [],
        SkipVariantExpansion: true,
        Language: "en-us",
        SearchCondition: search.get("search") || undefined,
        Refinement: refinementPayload,
      },
    }),
    params: {
      $top: Number(search.get("top")) || 10,
      $skip: Number(search.get("skip")) || 0,
      $orderby: search.get("sorting") || "RANKING desc",
      $count: true,
    },
  }), getCommerceConfig()]);
  return {
    products: (response.value ?? []).map((product) => ({ ...product, imageUrl: product.PrimaryImageUrl ? (/^https?:\/\//i.test(product.PrimaryImageUrl) ? product.PrimaryImageUrl : `${config.baseImageUrl}${product.PrimaryImageUrl.replace(/^\/+/, "")}`) : undefined })),
    totalCount: response["@odata.count"] ?? 0,
  };
}
