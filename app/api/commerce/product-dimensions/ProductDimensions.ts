/*---------------------------------------------------------------------------------------------
 * Copyright (c) Lumovy Technology Solutions. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

import type { ProductDimensionValueInventoryAvailability } from "@/types/commerceTypes.g";
import { commerceRequest } from "@/lib/api/commerce/request";

export interface ProductDimensionsInput {
  recordId: number;
  requestedDimensions: number[];
  matchingDimensions?: Array<{ DimensionTypeValue: number; DimensionValue: { RecordId: number; Value: string } }>;
}

export async function ProductDimensions(input: ProductDimensionsInput): Promise<ProductDimensionValueInventoryAvailability[]> {
  const response = await commerceRequest<{ value?: ProductDimensionValueInventoryAvailability[] }>({
    path: `/Products(${input.recordId})/GetDimensionValuesWithEstimatedAvailabilities`,
    method: "POST",
    payload: { searchCriteria: { RequestedDimensionTypeValues: input.requestedDimensions, MatchingDimensionValues: input.matchingDimensions ?? [], DefaultWarehouseOnly: true, CatalogId: 0 } },
    params: { $top: "100" },
  });
  return response.value ?? [];
}
