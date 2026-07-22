/*---------------------------------------------------------------------------------------------
 * Copyright (c) Lumovy Technology Solutions. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

import "server-only";
import type { Method } from "axios";
import { getCommerceConfig } from "@/lib/wordpress/queries";
import { createCommerceApi } from "../http/commerce-client";
import type { CommerceConfig } from "./config";

type CommercePayload = Record<string, unknown> | unknown[];
type Payload = CommercePayload | ((config: CommerceConfig) => CommercePayload);

// Shared Commerce request. Tokens, OUN, channel config, API version, base URL,
// timeout and interceptors are already handled here.
export async function commerceRequest<T>({ path, method, payload, params }: {
  path: string;
  method: Method;
  payload?: Payload;
  params?: Record<string, string | number | boolean | undefined>;
}) {
  const config = await getCommerceConfig();
  const data = typeof payload === "function" ? payload(config) : payload;
  const response = await createCommerceApi(config).request<T>({ url: path, method, data, params });
  return response.data;
}
