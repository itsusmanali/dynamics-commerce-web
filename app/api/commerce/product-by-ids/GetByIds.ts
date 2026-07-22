/*---------------------------------------------------------------------------------------------
 * Copyright (c) Lumovy Technology Solutions. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

import type { SimpleProduct } from "@/types/commerceTypes.g";
import { commerceRequest } from "@/lib/api/commerce/request";
import { getCommerceConfig } from "@/lib/wordpress/queries";

export interface StorefrontProduct extends SimpleProduct { imageUrl?: string }

export async function GetByIds(request: Request): Promise<StorefrontProduct[]> {
  const search = new URL(request.url).searchParams;
  const productIds = (search.get("productIds") ?? "").split(",").map(Number).filter((id) => Number.isSafeInteger(id) && id > 0).slice(0, 100);
  if (!productIds.length) return [];
  const requestedChannel = Number(search.get("channelId")) || undefined;
  const inventLocationId = search.get("inventLocationId") || null;
  const [response, config] = await Promise.all([commerceRequest<{ value?: SimpleProduct[] }>({ path: "/Products/GetByIds", method: "POST", payload: (commerce) => ({ channelId: requestedChannel ?? commerce.channelId, catalogId: 0, inventLocationId, productIds }), params: { $top: "100" } }), getCommerceConfig()]);
  return (response.value ?? []).map((product) => ({ ...product, imageUrl: product.PrimaryImageUrl ? (/^https?:\/\//i.test(product.PrimaryImageUrl) ? product.PrimaryImageUrl : `${config.baseImageUrl}${product.PrimaryImageUrl.replace(/^\/+/, "")}`) : undefined }));
}
