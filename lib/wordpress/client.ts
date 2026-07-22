/*---------------------------------------------------------------------------------------------
 * Copyright (c) Lumovy Technology Solutions. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

import { cacheLife, cacheTag } from "next/cache";
import { site } from "@/lib/site";
import type { GraphQLResponse } from "@/lib/wordpress/types";

export const WORDPRESS_CACHE_TAG = "wordpress";

async function requestGraphQL<T>(query: string, variables: Record<string, unknown>, authorization?: string): Promise<GraphQLResponse<T> | null> {
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const response = await fetch(site.graphqlUrl, {
        method: "POST",
        cache: authorization ? "no-store" : undefined,
        headers: { Accept: "application/json", "Content-Type": "application/json", ...(authorization ? { Authorization: authorization } : {}) },
        body: JSON.stringify({ query, variables }),
      });
      const text = await response.text();
      if (response.ok && text.trimStart().startsWith("{")) return JSON.parse(text) as GraphQLResponse<T>;
      console.warn(`WordPress GraphQL returned ${response.status} with ${response.headers.get("content-type") || "unknown content"} (attempt ${attempt}/3).`);
    } catch (error) {
      console.warn(`WordPress GraphQL request failed (attempt ${attempt}/3).`, error);
    }
    if (attempt < 3) await new Promise((resolve) => setTimeout(resolve, attempt * 500));
  }
  return null;
}

export async function queryWordPress<T>(
  query: string,
  variables: Record<string, unknown> = {},
  tags: string[] = [],
): Promise<T | null> {
  "use cache";
  cacheLife("hours");
  cacheTag(WORDPRESS_CACHE_TAG, ...tags);

  if (!site.graphqlUrl) return null;

  const payload = await requestGraphQL<T>(query, variables);
  if (!payload) return null;
  if (payload.errors?.length) {
    throw new Error(payload.errors.map(({ message }) => message).join("; "));
  }

  return payload.data ?? null;
}

export async function queryWordPressPreview<T>(
  query: string,
  variables: Record<string, unknown> = {},
): Promise<T | null> {
  if (!site.graphqlUrl) return null;

  const payload = await requestGraphQL<T>(query, variables, process.env.WORDPRESS_AUTH_TOKEN ? `Bearer ${process.env.WORDPRESS_AUTH_TOKEN}` : undefined);
  if (!payload) return null;
  return payload.errors?.length ? null : (payload.data ?? null);
}

export async function queryWordPressOptional<T>(query: string, tags: string[] = []): Promise<T | null> {
  "use cache";
  cacheLife("hours");
  cacheTag(WORDPRESS_CACHE_TAG, ...tags);
  if (!site.graphqlUrl) return null;
  try {
    const payload = await requestGraphQL<T>(query, {});
    if (!payload) return null;
    return payload.errors?.length ? null : (payload.data ?? null);
  } catch { return null; }
}
