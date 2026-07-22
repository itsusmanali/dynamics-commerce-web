import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { getAllPages, getAllPosts } from "@/lib/wordpress/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [pages, posts] = await Promise.all([getAllPages(), getAllPosts()]);
  return [
    ...pages.map((page) => ({ url: new URL(page.uri, site.url).toString(), lastModified: page.modified ? new Date(page.modified) : undefined, changeFrequency: "monthly" as const, priority: page.uri === "/" ? 1 : 0.7 })),
    ...posts.map((post) => ({ url: `${site.url}/blog/${post.slug}`, lastModified: post.modified ? new Date(post.modified) : undefined, changeFrequency: "monthly" as const, priority: 0.6 })),
  ];
}
