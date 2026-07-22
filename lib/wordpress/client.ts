import { cacheLife, cacheTag } from "next/cache";
import { site } from "@/lib/site";
import type { GraphQLResponse } from "@/lib/wordpress/types";

export const WORDPRESS_CACHE_TAG = "wordpress";

export async function queryWordPress<T>(
  query: string,
  variables: Record<string, unknown> = {},
  tags: string[] = [],
): Promise<T | null> {
  "use cache";
  cacheLife("hours");
  cacheTag(WORDPRESS_CACHE_TAG, ...tags);

  if (!site.graphqlUrl) return null;

  const response = await fetch(site.graphqlUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    throw new Error(`WordPress GraphQL request failed (${response.status}).`);
  }

  const payload = (await response.json()) as GraphQLResponse<T>;
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

  const response = await fetch(site.graphqlUrl, {
    method: "POST",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      ...(process.env.WORDPRESS_AUTH_TOKEN
        ? { Authorization: `Bearer ${process.env.WORDPRESS_AUTH_TOKEN}` }
        : {}),
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) return null;
  const payload = (await response.json()) as GraphQLResponse<T>;
  return payload.errors?.length ? null : (payload.data ?? null);
}

export async function queryWordPressOptional<T>(query: string, tags: string[] = []): Promise<T | null> {
  "use cache";
  cacheLife("hours");
  cacheTag(WORDPRESS_CACHE_TAG, ...tags);
  if (!site.graphqlUrl) return null;
  try {
    const response = await fetch(site.graphqlUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });
    if (!response.ok) return null;
    const payload = (await response.json()) as GraphQLResponse<T>;
    return payload.errors?.length ? null : (payload.data ?? null);
  } catch { return null; }
}
