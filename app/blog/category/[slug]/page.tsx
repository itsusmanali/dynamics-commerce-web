/*---------------------------------------------------------------------------------------------
 * Copyright (c) Lumovy Technology Solutions. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

import { PostList } from "@/components/post-list";
import { getPostsByTaxonomy, getTaxonomies, getTaxonomyBySlug } from "@/lib/wordpress/queries";
import { metadataFor } from "@/lib/seo";
import { Breadcrumbs, SeoSchema } from "@/components/seo-schema";
type Props = { params: Promise<{ slug: string }> };
export async function generateStaticParams() { const items = (await getTaxonomies()).categories; return items.length ? items.map(({ slug }) => ({ slug })) : [{ slug: "__wordpress-build-validation__" }]; }
export async function generateMetadata({ params }: Props) { const { slug } = await params; const item = await getTaxonomyBySlug("category", slug); return metadataFor(item ? { databaseId: 0, title: item.name, seo: item.seo } : null, `/blog/category/${slug}`); }
export default async function Category({ params }: Props) { const { slug } = await params; const path = `/blog/category/${slug}`; const [posts, item] = await Promise.all([getPostsByTaxonomy("category", slug), getTaxonomyBySlug("category", slug)]); return <><SeoSchema seo={item?.seo} path={path} /><Breadcrumbs seo={item?.seo} path={path} /><PostList posts={posts} heading={item?.name || `Category: ${slug}`} /></>; }
