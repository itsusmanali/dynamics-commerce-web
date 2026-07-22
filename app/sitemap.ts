/*---------------------------------------------------------------------------------------------
 * Copyright (c) Lumovy Technology Solutions. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { getAllPages, getAllPosts, getTaxonomies } from "@/lib/wordpress/queries";
import { frontendUrl } from "@/lib/urls";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [pages, posts, taxonomies] = await Promise.all([getAllPages(), getAllPosts(), getTaxonomies()]);
  return [
    ...pages.map((page) => ({ url: frontendUrl(page.uri), lastModified: page.modified ? new Date(page.modified) : undefined, changeFrequency: "monthly" as const, priority: page.uri === "/" ? 1 : 0.7 })),
    ...posts.map((post) => ({ url: `${site.url}/blog/${post.slug}`, lastModified: post.modified ? new Date(post.modified) : undefined, changeFrequency: "monthly" as const, priority: 0.6 })),
    ...taxonomies.categories.map((category) => ({ url: `${site.url}/blog/category/${category.slug}`, changeFrequency: "weekly" as const, priority: 0.4 })),
    ...taxonomies.tags.map((tag) => ({ url: `${site.url}/blog/tag/${tag.slug}`, changeFrequency: "weekly" as const, priority: 0.3 })),
  ];
}
