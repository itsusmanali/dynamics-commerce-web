/*---------------------------------------------------------------------------------------------
 * Copyright (c) Lumovy Technology Solutions. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

import { site } from "@/lib/site";

export function frontendPath(value?: string | null) {
  if (!value) return "/";
  try {
    const url = new URL(value, site.wordpressUrl || site.url);
    return `${url.pathname.replace(/\/+$/, "") || "/"}${url.search}${url.hash}`;
  } catch {
    const path = `/${value}`.replace(/\/{2,}/g, "/");
    return path.replace(/\/+$/, "") || "/";
  }
}

export function frontendUrl(path?: string | null) {
  return new URL(frontendPath(path), `${site.url}/`).toString();
}
