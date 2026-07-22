/*---------------------------------------------------------------------------------------------
 * Copyright (c) Lumovy Technology Solutions. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

"use client";

import { createContext, useContext } from "react";

interface CatalogContextValue {
  categoryId?: number;
  productId?: number;
}
const CatalogContext = createContext<CatalogContextValue>({});

export function CatalogRouteProvider({
  categoryId,
  productId,
  children,
}: CatalogContextValue & { children: React.ReactNode }) {
  return (
    <CatalogContext.Provider value={{ categoryId, productId }}>
      {children}
    </CatalogContext.Provider>
  );
}

// Modules use this hook; route-resolution details stay outside module code.
export function useCatalogRoute() {
  return useContext(CatalogContext);
}
