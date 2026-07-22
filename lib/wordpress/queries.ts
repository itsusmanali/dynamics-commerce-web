import { queryWordPress, queryWordPressPreview } from "./client";
import type { Page, Post } from "./types";

export interface WordPressSettings {
  title: string;
  description: string;
  url: string;
}

const SEO_FIELDS = `seo { title metaDesc canonical opengraphImage { sourceUrl } }`;
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
  const data = await queryWordPress<{ posts: { nodes: Post[] } }>(
    `query AllPosts { posts(first: 100, where: { status: PUBLISH }) { nodes {
      databaseId slug title(format: RENDERED) excerpt(format: RENDERED)
      date modified ${IMAGE_FIELDS} ${SEO_FIELDS}
    } } }`,
    {},
    ["posts"],
  );
  return data?.posts.nodes ?? [];
}

export async function getAllPages() {
  const data = await queryWordPress<{ pages: { nodes: Page[] } }>(
    `query AllPages { pages(first: 100, where: { status: PUBLISH }) { nodes {
      databaseId slug uri modified ${SEO_FIELDS}
    } } }`,
    {},
    ["pages"],
  );
  return data?.pages.nodes ?? [];
}

export async function getWordPressSettings() {
  const data = await queryWordPress<{ generalSettings: WordPressSettings }>(
    `query WordPressSettings { generalSettings { title description url } }`,
    {},
    ["settings"],
  );
  return data?.generalSettings ?? null;
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
