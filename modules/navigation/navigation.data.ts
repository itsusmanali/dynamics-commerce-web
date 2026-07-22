/*---------------------------------------------------------------------------------------------
 * Copyright (c) Lumovy Technology Solutions. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

import type { Category } from "@/types/commerceTypes.g";
export interface NavigationItem { id: string; label: string; href: string; audience: "retail" | "authored"; description?: string; imageUrl?: string; children?: NavigationItem[]; }
export interface NavigationData { items: NavigationItem[]; source: string; }
export interface CategoryNode extends Category { imageUrl?: string; children: CategoryNode[]; }
