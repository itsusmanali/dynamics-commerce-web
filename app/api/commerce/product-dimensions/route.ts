/*---------------------------------------------------------------------------------------------
 * Copyright (c) Lumovy Technology Solutions. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

import { createMutationRoute } from "@/lib/api/route";
import { ProductDimensions, type ProductDimensionsInput } from "./ProductDimensions";

export const POST = createMutationRoute<ProductDimensionsInput, Awaited<ReturnType<typeof ProductDimensions>>>(ProductDimensions);
