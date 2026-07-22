import Link from "next/link";
import { metadataFor } from "@/lib/seo";
import { getAllPosts, getPostBySlug } from "@/lib/wordpress/queries";
import { notFound } from "next/navigation";
type Props = { params: Promise<{ slug: string }> };
export async function generateStaticParams() { const params = (await getAllPosts()).map(({ slug }) => ({ slug })); return params.length ? params : [{ slug: "__wordpress-build-validation__" }]; }
export async function generateMetadata({ params }: Props) { return metadataFor(await getPostBySlug((await params).slug)); }
export default async function BlogPost({ params }: Props) { const post = await getPostBySlug((await params).slug); if (!post) notFound(); return <article className="wp-content"><header className="mb-10"><h1 className="text-4xl font-semibold" dangerouslySetInnerHTML={{ __html: post.title ?? "" }} />{post.date ? <time className="mt-3 block text-sm" dateTime={post.date}>{new Intl.DateTimeFormat("en", { dateStyle: "long" }).format(new Date(post.date))}</time> : null}</header><div dangerouslySetInnerHTML={{ __html: post.content ?? "" }} /><footer className="mt-10 flex flex-wrap gap-3">{post.categories?.nodes.map((item) => <Link key={item.databaseId} href={`/blog/category/${item.slug}`}>#{item.name}</Link>)}</footer></article>; }
