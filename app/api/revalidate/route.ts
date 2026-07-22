import { revalidatePath, revalidateTag } from "next/cache";
import { WORDPRESS_CACHE_TAG } from "@/lib/wordpress/client";

export async function POST(request: Request) {
  const supplied = request.headers.get("x-wordpress-secret");
  if (!process.env.WORDPRESS_REVALIDATION_SECRET || supplied !== process.env.WORDPRESS_REVALIDATION_SECRET) return Response.json({ revalidated: false }, { status: 401 });
  const payload = await request.json().catch(() => ({})) as { slug?: string; type?: "post" | "page" };
  const slug = payload.slug?.replace(/^\/+|\/+$/g, "");
  revalidateTag(WORDPRESS_CACHE_TAG, "max");
  if (slug && /^[a-z0-9/_-]+$/i.test(slug)) {
    revalidateTag(`${payload.type ?? "page"}:${payload.type === "page" ? `/${slug}/` : slug}`, "max");
    revalidatePath(payload.type === "post" ? `/blog/${slug}` : `/${slug}`);
  }
  return Response.json({ revalidated: true, slug: slug ?? null });
}
