/*---------------------------------------------------------------------------------------------
 * Copyright (c) Lumovy Technology Solutions. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

export interface SeoData {
  title?: string | null;
  metaDesc?: string | null;
  canonical?: string | null;
  opengraphImage?: { sourceUrl?: string | null } | null;
  opengraphTitle?: string | null;
  opengraphDescription?: string | null;
  opengraphType?: string | null;
  metaRobotsNoindex?: string | null;
  metaRobotsNofollow?: string | null;
  twitterTitle?: string | null;
  twitterDescription?: string | null;
  twitterImage?: { sourceUrl?: string | null } | null;
  breadcrumbs?: Array<{ text?: string | null; url?: string | null }> | null;
  schema?: { raw?: string | null } | null;
}

export interface FeaturedImage {
  altText?: string | null;
  sourceUrl: string;
  mediaDetails?: { width?: number | null; height?: number | null } | null;
}

export interface ContentNode {
  databaseId: number;
  slug?: string | null;
  uri?: string | null;
  title?: string | null;
  content?: string | null;
  excerpt?: string | null;
  date?: string | null;
  modified?: string | null;
  seo?: SeoData | null;
  featuredImage?: { node?: FeaturedImage | null } | null;
}

export interface Post extends ContentNode {
  slug: string;
  author?: { node?: { name?: string | null } | null } | null;
  categories?: { nodes: Taxonomy[] } | null;
  tags?: { nodes: Taxonomy[] } | null;
}

export interface Page extends ContentNode {
  uri: string;
  parent?: { node?: { databaseId: number } | null } | null;
}

export interface Taxonomy {
  databaseId: number;
  name: string;
  slug: string;
}

export interface TaxonomyArchive extends Taxonomy {
  count?: number | null;
}

export interface GraphQLResponse<T> {
  data?: T;
  errors?: Array<{ message: string }>;
}
