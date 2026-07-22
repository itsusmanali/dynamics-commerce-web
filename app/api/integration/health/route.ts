/*---------------------------------------------------------------------------------------------
 * Copyright (c) Lumovy Technology Solutions. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

import { site } from "@/lib/site";

export async function POST(request: Request) {
  const supplied = request.headers.get("x-wordpress-secret");
  if (!process.env.WORDPRESS_REVALIDATION_SECRET || supplied !== process.env.WORDPRESS_REVALIDATION_SECRET) {
    return Response.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json().catch(() => null)) as { wordpressUrl?: string } | null;
  const expectedWordPress = site.wordpressUrl.toLowerCase();
  const suppliedWordPress = body?.wordpressUrl?.replace(/\/+$/, "").toLowerCase();
  if (!suppliedWordPress || suppliedWordPress !== expectedWordPress || !site.graphqlUrl) {
    return Response.json({ ok: false, error: "WordPress URL does not match Vercel configuration" }, { status: 409 });
  }

  try {
    const response = await fetch(site.graphqlUrl, {
      method: "POST",
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: "query ConnectorHealth { generalSettings { url } }" }),
    });
    const payload = (await response.json()) as { data?: { generalSettings?: { url?: string } }; errors?: unknown[] };
    const graphqlUrl = payload.data?.generalSettings?.url?.replace(/\/+$/, "").toLowerCase();
    if (!response.ok || payload.errors?.length || graphqlUrl !== expectedWordPress) throw new Error("GraphQL validation failed");
    return Response.json({ ok: true, wordpress: site.wordpressUrl, frontend: site.url });
  } catch {
    return Response.json({ ok: false, error: "GraphQL is unreachable or misconfigured" }, { status: 502 });
  }
}
