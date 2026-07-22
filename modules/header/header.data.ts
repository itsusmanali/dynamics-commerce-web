/*---------------------------------------------------------------------------------------------
 * Copyright (c) Lumovy Technology Solutions. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

import type { Category } from "@/types/commerceTypes.g";

// This file contains types only. API execution is handled by the shared data-action helpers.
export interface MenuItem {
  id: string;
  label: string;
  href: string;
  audience: "retail" | "authored";
  description?: string;
  image?: string;
  featured?: boolean;
  children?: MenuItem[];
}

export interface HeaderData {
  items: MenuItem[];
  source: string;
}
export interface CategoryNode extends Category {
  children: CategoryNode[];
}
