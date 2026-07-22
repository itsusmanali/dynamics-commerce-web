/*---------------------------------------------------------------------------------------------
 * Copyright (c) Lumovy Technology Solutions. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

import Link from "next/link";
import { metadataFor } from "@/lib/seo";
import { getAllPosts, getContentModules, getPostBySlug, getRedirectForPath } from "@/lib/wordpress/queries";
import { notFound, permanentRedirect } from "next/navigation";
import { Breadcrumbs, SeoSchema } from "@/components/seo-schema";
import { ModuleRenderer } from "@/components/module-renderer";
type Props = { params: Promise<{ slug: string }> };
export async function generateStaticParams() { const params = (await getAllPosts()).map(({ slug }) => ({ slug })); return params.length ? params : [{ slug: "__wordpress-build-validation__" }]; }
export async function generateMetadata({ params }: Props) { const { slug } = await params; return metadataFor(await getPostBySlug(slug), `/blog/${slug}`); }
export default async function BlogPost({ params }: Props) { const { slug } = await params; const path = `/blog/${slug}`; const [post, destination] = await Promise.all([getPostBySlug(slug), getRedirectForPath(path)]); if (destination) permanentRedirect(destination); if (!post) notFound(); const modules = await getContentModules("post", post.databaseId); return <><SeoSchema seo={post.seo} path={path} /><Breadcrumbs seo={post.seo} path={path} /><article className="wp-content"><header className="mb-10"><h1 className="text-4xl font-semibold" dangerouslySetInnerHTML={{ __html: post.title ?? "" }} />{post.date ? <time className="mt-3 block text-sm" dateTime={post.date}>{new Intl.DateTimeFormat("en", { dateStyle: "long" }).format(new Date(post.date))}</time> : null}</header>{modules.length ? <ModuleRenderer modules={modules} /> : <div dangerouslySetInnerHTML={{ __html: post.content ?? "" }} />}<footer className="mt-10 flex flex-wrap gap-3">{post.categories?.nodes.map((item) => <Link key={item.databaseId} href={`/blog/category/${item.slug}`}>#{item.name}</Link>)}</footer></article></>; }
