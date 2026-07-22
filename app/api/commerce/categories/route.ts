/*---------------------------------------------------------------------------------------------
 * Copyright (c) Lumovy Technology Solutions. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

import { NextResponse } from "next/server";
import { getCategories } from "@/lib/api/commerce/categories/categories.server";
import { apiErrorResponse } from "@/lib/api/errors";

export async function GET(request: Request) {
  const requestId = crypto.randomUUID();
  try {
    const presentation =
      new URL(request.url).searchParams.get("presentation") === "list"
        ? "list"
        : "tree";
    const data = await getCategories(presentation);
    return NextResponse.json(
      { data, meta: { source: "dynamics-commerce", requestId } },
      {
        headers: {
          "Cache-Control": "private, no-store",
          "X-Request-Id": requestId,
        },
      },
    );
  } catch (error) {
    return apiErrorResponse(error, requestId);
  }
}
