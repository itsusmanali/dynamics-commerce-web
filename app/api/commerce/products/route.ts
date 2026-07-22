/*---------------------------------------------------------------------------------------------
 * Copyright (c) Lumovy Technology Solutions. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

import { createGetRoute } from "@/lib/api/route";
import { SearchProducts } from "./SearchProducts";

export const GET = createGetRoute(SearchProducts);
