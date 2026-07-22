import { NextResponse } from "next/server";
import { getHeaderData } from "@/modules/header/header.data";

export async function GET(request: Request) {
  const modeValue = new URL(request.url).searchParams.get("mode");
  const mode = modeValue === "retail" || modeValue === "authored" ? modeValue : "all";
  const menuSlug = new URL(request.url).searchParams.get("menuSlug")?.replace(/[^a-z0-9_-]/gi, "").slice(0, 80) || "primary";
  return NextResponse.json({ data: await getHeaderData(mode, menuSlug), meta: { source: "wordpress-and-demo" } }, {
    headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=3600" },
  });
}
