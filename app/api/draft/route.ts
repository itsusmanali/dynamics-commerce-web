/*---------------------------------------------------------------------------------------------
 * Copyright (c) Lumovy Technology Solutions. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

import { draftMode } from "next/headers";
import { NextResponse } from "next/server";
export async function GET(request: Request) {
  const url = new URL(request.url);
  const secret = url.searchParams.get("secret");
  const type = url.searchParams.get("type") === "post" ? "post" : "page";
  const id = url.searchParams.get("id");
  if (!process.env.WORDPRESS_PREVIEW_SECRET || secret !== process.env.WORDPRESS_PREVIEW_SECRET || !id || !/^\d+$/.test(id)) return new Response("Invalid preview request", { status: 401 });
  (await draftMode()).enable();
  return NextResponse.redirect(new URL(`/preview/${type}/${id}`, url.origin));
}
