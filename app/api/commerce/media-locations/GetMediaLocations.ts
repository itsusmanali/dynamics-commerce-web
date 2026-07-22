/*---------------------------------------------------------------------------------------------
 * Copyright (c) Lumovy Technology Solutions. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

import type { MediaLocation } from "@/types/commerceTypes.g";
import { commerceRequest } from "@/lib/api/commerce/request";
import { getCommerceConfig } from "@/lib/wordpress/queries";

export interface StorefrontMediaLocation extends MediaLocation { imageUrl?: string }

export async function GetMediaLocations(request: Request): Promise<StorefrontMediaLocation[]> {
  const recordId = Number(new URL(request.url).searchParams.get("recordId"));
  if (!Number.isSafeInteger(recordId) || recordId <= 0) return [];
  const config = await getCommerceConfig();
  const response = await commerceRequest<{ value?: MediaLocation[] }>({ path: `/Products(${recordId})/GetMediaLocations(channelId=${config.channelId},catalogId=0)`, method: "GET", params: { $top: "100" } });
  return (response.value ?? []).sort((a, b) => (a.DisplayOrder ?? a.Priority ?? 0) - (b.DisplayOrder ?? b.Priority ?? 0)).map((media) => ({ ...media, imageUrl: media.Uri ? (/^https?:\/\//i.test(media.Uri) ? media.Uri : `${config.baseImageUrl}${media.Uri.replace(/^\/+/, "")}`) : undefined }));
}
