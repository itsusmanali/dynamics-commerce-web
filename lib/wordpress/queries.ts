/*---------------------------------------------------------------------------------------------
 * Copyright (c) Lumovy Technology Solutions. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

import { queryWordPress, queryWordPressOptional, queryWordPressPreview } from "./client";
import type { Page, Post, TaxonomyArchive } from "./types";
import type { ModuleInstance } from "@/modules/module.types";
import type { PageTemplateSettings } from "@/templates/template.types";
import type { NavigationItem as MenuItem } from "@/modules/navigation/navigation.data";
import { defaultCommerceConfig, type CommerceConfig } from "@/lib/api/commerce/config";

export interface WordPressSettings {
  title: string;
  description: string;
  url: string;
}

const SEO_FIELDS = `seo {
  title metaDesc canonical metaRobotsNoindex metaRobotsNofollow
  opengraphTitle opengraphDescription opengraphType opengraphImage { sourceUrl }
  twitterTitle twitterDescription twitterImage { sourceUrl }
  breadcrumbs { text url }
  schema { raw }
}`;
const IMAGE_FIELDS = `featuredImage { node { altText sourceUrl mediaDetails { width height } } }`;

export async function getPageByUri(uri: string, preview = false) {
  const query = `query PageByUri($uri: ID!) {
    page(id: $uri, idType: URI) {
      databaseId slug uri title(format: RENDERED) content(format: RENDERED)
      date modified ${IMAGE_FIELDS} ${SEO_FIELDS}
    }
  }`;
  const data = preview
    ? await queryWordPressPreview<{ page: Page | null }>(query, { uri })
    : await queryWordPress<{ page: Page | null }>(query, { uri }, [`page:${uri}`]);
  return data?.page ?? null;
}

export async function getPostBySlug(slug: string, preview = false) {
  const query = `query PostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      databaseId slug title(format: RENDERED) content(format: RENDERED)
      excerpt(format: RENDERED) date modified ${IMAGE_FIELDS} ${SEO_FIELDS}
      author { node { name } }
      categories { nodes { databaseId name slug } }
      tags { nodes { databaseId name slug } }
    }
  }`;
  const data = preview
    ? await queryWordPressPreview<{ post: Post | null }>(query, { slug })
    : await queryWordPress<{ post: Post | null }>(query, { slug }, [`post:${slug}`]);
  return data?.post ?? null;
}

export async function getPreviewById(id: string) {
  const data = await queryWordPressPreview<{ dynamicsPreview: string | null }>(
    `query DynamicsPreview($id: ID!, $secret: String!) {
      dynamicsPreview(id: $id, secret: $secret)
    }`,
    { id, secret: process.env.WORDPRESS_PREVIEW_SECRET ?? "" },
  );
  if (!data?.dynamicsPreview) return null;
  try {
    return JSON.parse(data.dynamicsPreview) as Page | Post;
  } catch {
    return null;
  }
}

export async function getAllPosts() {
  const posts: Post[] = [];
  let after: string | null = null;
  for (let page = 0; page < 100; page += 1) {
    const data: { posts: { nodes: Post[]; pageInfo: { hasNextPage: boolean; endCursor?: string | null } } } | null = await queryWordPress(
    `query AllPosts($after: String) { posts(first: 100, after: $after, where: { status: PUBLISH }) { nodes {
      databaseId slug title(format: RENDERED) excerpt(format: RENDERED)
      date modified ${IMAGE_FIELDS} ${SEO_FIELDS}
    } pageInfo { hasNextPage endCursor } } }`,
    { after },
    ["posts"],
  );
    if (!data) break;
    posts.push(...data.posts.nodes);
    if (!data.posts.pageInfo.hasNextPage || !data.posts.pageInfo.endCursor) break;
    after = data.posts.pageInfo.endCursor;
  }
  return posts;
}

export async function getAllPages() {
  const pages: Page[] = [];
  let after: string | null = null;
  for (let page = 0; page < 100; page += 1) {
    const data: { pages: { nodes: Page[]; pageInfo: { hasNextPage: boolean; endCursor?: string | null } } } | null = await queryWordPress(
    `query AllPages($after: String) { pages(first: 100, after: $after, where: { status: PUBLISH }) { nodes {
      databaseId slug uri title(format: RENDERED) modified parent { node { databaseId } } ${SEO_FIELDS}
    } pageInfo { hasNextPage endCursor } } }`,
    { after },
    ["pages"],
  );
    if (!data) break;
    pages.push(...data.pages.nodes);
    if (!data.pages.pageInfo.hasNextPage || !data.pages.pageInfo.endCursor) break;
    after = data.pages.pageInfo.endCursor;
  }
  return pages;
}

export async function getWordPressSettings() {
  const data = await queryWordPress<{ generalSettings: WordPressSettings }>(
    `query WordPressSettings { generalSettings { title description url } }`,
    {},
    ["settings"],
  );
  return data?.generalSettings ?? null;
}

export async function getCommerceConfig(): Promise<CommerceConfig> {
  const data = await queryWordPressOptional<{ dynamicsCommerceConfig: string | null }>(`query DynamicsCommerceConfig { dynamicsCommerceConfig }`, ["settings", "commerce"]);
  if (!data?.dynamicsCommerceConfig) return defaultCommerceConfig;
  try { return { ...defaultCommerceConfig, ...(JSON.parse(data.dynamicsCommerceConfig) as Partial<CommerceConfig>) }; }
  catch { return defaultCommerceConfig; }
}

interface WordPressMenuNode { id: string; databaseId: number; parentDatabaseId?: number | null; label?: string | null; path?: string | null; uri?: string | null; description?: string | null; }

export async function getWordPressMenu(slug: string): Promise<MenuItem[]> {
  try {
    const data = await queryWordPress<{ menu: { menuItems: { nodes: WordPressMenuNode[] } } | null }>(
      `query DynamicsMenu($id: ID!) { menu(id: $id, idType: SLUG) { menuItems(first: 100) { nodes { id databaseId parentDatabaseId label path uri description } } } }`,
      { id: slug },
      ["menus", `menu:${slug}`],
    );
    const nodes = data?.menu?.menuItems.nodes ?? [];
    const byParent = new Map<number, WordPressMenuNode[]>();
    for (const node of nodes) {
      const parent = node.parentDatabaseId ?? 0;
      byParent.set(parent, [...(byParent.get(parent) ?? []), node]);
    }
    const build = (parent: number, depth: number): MenuItem[] => depth > 4 ? [] : (byParent.get(parent) ?? []).map((node) => ({
      id: node.id || String(node.databaseId),
      label: node.label || "Menu item",
      href: node.path || node.uri || "#",
      audience: "authored",
      description: node.description || undefined,
      children: build(node.databaseId, depth + 1),
    }));
    return build(0, 1);
  } catch { return []; }
}

export async function getPostsByTaxonomy(type: "category" | "tag", slug: string) {
  const where = type === "category" ? "categoryName" : "tag";
  const data = await queryWordPress<{ posts: { nodes: Post[] } }>(
    `query TaxonomyPosts($slug: String!) { posts(first: 100, where: { ${where}: $slug, status: PUBLISH }) { nodes {
      databaseId slug title(format: RENDERED) excerpt(format: RENDERED)
      date modified ${IMAGE_FIELDS} ${SEO_FIELDS}
    } } }`,
    { slug },
    [`${type}:${slug}`, "posts"],
  );
  return data?.posts.nodes ?? [];
}

export async function getTaxonomyBySlug(type: "category" | "tag", slug: string) {
  const field = type === "category" ? "category" : "tag";
  const data = await queryWordPress<Record<string, { name: string; seo?: Page["seo"] } | null>>(
    `query TaxonomySeo($slug: ID!) {
      ${field}(id: $slug, idType: SLUG) { name ${SEO_FIELDS} }
    }`,
    { slug },
    [`${type}:${slug}`],
  );
  return data?.[field] ?? null;
}

export async function getTaxonomies() {
  const data = await queryWordPress<{
    categories: { nodes: TaxonomyArchive[] };
    tags: { nodes: TaxonomyArchive[] };
  }>(
    `query Taxonomies {
      categories(first: 100, where: { hideEmpty: true }) { nodes { databaseId name slug count } }
      tags(first: 100, where: { hideEmpty: true }) { nodes { databaseId name slug count } }
    }`,
    {},
    ["taxonomies"],
  );
  return { categories: data?.categories.nodes ?? [], tags: data?.tags.nodes ?? [] };
}

export async function searchWordPress(search: string) {
  const term = search.trim().slice(0, 100);
  if (!term) return { pages: [] as Page[], posts: [] as Post[] };
  const data = await queryWordPress<{
    pages: { nodes: Page[] };
    posts: { nodes: Post[] };
  }>(
    `query Search($search: String!) {
      pages(first: 50, where: { search: $search, status: PUBLISH }) { nodes {
        databaseId slug uri title(format: RENDERED) ${SEO_FIELDS}
      } }
      posts(first: 50, where: { search: $search, status: PUBLISH }) { nodes {
        databaseId slug title(format: RENDERED) excerpt(format: RENDERED) date ${IMAGE_FIELDS} ${SEO_FIELDS}
      } }
    }`,
    { search: term },
    [`search:${term.toLowerCase()}`],
  );
  return { pages: data?.pages.nodes ?? [], posts: data?.posts.nodes ?? [] };
}

export async function getRedirects() {
  const data = await queryWordPressOptional<{ dynamicsRedirects: string | null }>(
    `query DynamicsRedirects { dynamicsRedirects }`, ["redirects"],
  );
  if (!data?.dynamicsRedirects) return [] as Array<{ from: string; to: string }>;
  try { return JSON.parse(data.dynamicsRedirects) as Array<{ from: string; to: string }>; }
  catch { return [] as Array<{ from: string; to: string }>; }
}

export async function getRedirectForPath(path: string) {
  return (await getRedirects()).find((rule) => rule.from === path)?.to ?? null;
}

function parseModules(value?: string | null) {
  if (!value) return [] as ModuleInstance[];
  try { return JSON.parse(value) as ModuleInstance[]; }
  catch { return [] as ModuleInstance[]; }
}

export async function getContentModules(type: "page" | "post", databaseId: number) {
  const field = type === "page" ? "page" : "post";
  const data = await queryWordPressOptional<Record<string, { dynamicsModules?: string | null } | null>>(
    `query ContentModules { ${field}(id: "${databaseId}", idType: DATABASE_ID) { dynamicsModules } }`,
    ["modules", `${type}:${databaseId}`],
  );
  return parseModules(data?.[field]?.dynamicsModules);
}

export async function getPageTemplateSettings(databaseId: number) {
  const data = await queryWordPressOptional<{ page: { dynamicsTemplateSettings?: string | null } | null }>(
    `query PageTemplateSettings { page(id: "${databaseId}", idType: DATABASE_ID) { dynamicsTemplateSettings } }`,
    ["modules", `page:${databaseId}`],
  );
  if (!data?.page?.dynamicsTemplateSettings) return null;
  try { return JSON.parse(data.page.dynamicsTemplateSettings) as PageTemplateSettings; }
  catch { return null; }
}
