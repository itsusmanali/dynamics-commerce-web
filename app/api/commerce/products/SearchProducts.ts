/*---------------------------------------------------------------------------------------------
 * Copyright (c) Lumovy Technology Solutions. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

import type {
  SearchRefinerValue,
  SimpleProduct,
} from "@/types/commerceTypes.g";
import { commerceRequest } from "@/lib/api/commerce/request";

export interface ProductsResponse {
  products: SimpleProduct[];
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
  const response = await commerceRequest<{
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
  });
  return {
    products: response.value ?? [],
    totalCount: response["@odata.count"] ?? 0,
  };
}
