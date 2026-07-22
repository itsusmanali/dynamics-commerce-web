import { PostList } from "@/components/post-list";
import { getPostsByTaxonomy } from "@/lib/wordpress/queries";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return [{ slug: "__wordpress-build-validation__" }]; }
export async function generateMetadata({ params }: Props) { return { title: `Category: ${(await params).slug}` }; }
export default async function Category({ params }: Props) { const { slug } = await params; return <PostList posts={await getPostsByTaxonomy("category", slug)} heading={`Category: ${slug}`} />; }
