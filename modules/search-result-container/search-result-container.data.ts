/*---------------------------------------------------------------------------------------------
 * Copyright (c) Lumovy Technology Solutions. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

import type { Category, SimpleProduct } from "@/types/commerceTypes.g";

export type CommerceCategory = Category;
export interface StorefrontProduct extends SimpleProduct {
  imageUrl?: string;
}
export interface ProductsResponse {
  products: StorefrontProduct[];
  totalCount: number;
}
