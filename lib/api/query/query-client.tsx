"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export function ApiQueryProvider({ children }: { children: React.ReactNode }) {
  const [client] = useState(() => new QueryClient({ defaultOptions: { queries: { staleTime: 300_000, gcTime: 600_000, retry: 1, refetchOnWindowFocus: false }, mutations: { retry: 0 } } }));
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
