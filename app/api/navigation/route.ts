/*---------------------------------------------------------------------------------------------
 * Copyright (c) Lumovy Technology Solutions. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

import { NextResponse } from "next/server";
import { getWordPressMenu } from "@/lib/wordpress/queries";
import type { NavigationData as HeaderData, NavigationItem as MenuItem } from "@/modules/navigation/navigation.data";

// Returns WordPress navigation plus the Commerce entry populated by the categories action.
export async function GET(request: Request) {
  const search = new URL(request.url).searchParams;
  const mode = search.get("mode") === "retail" || search.get("mode") === "authored" ? search.get("mode") : "all";
  const menuSlug = search.get("menuSlug")?.replace(/[^a-z0-9_-]/gi, "").slice(0, 80) || "primary";
  const authored = await getWordPressMenu(menuSlug);
  const commerce: MenuItem = { id: "commerce", label: "Commerce", href: "/commerce", audience: "retail", children: [] };
  const items = mode === "retail" ? [commerce] : mode === "authored" ? authored : [commerce, ...authored];
  return NextResponse.json({ data: { items, source: "wordpress-graphql" } satisfies HeaderData });
}
