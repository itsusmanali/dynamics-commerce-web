import { PostList } from "@/components/post-list";
import { getPostsByTaxonomy } from "@/lib/wordpress/queries";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return [{ slug: "__wordpress-build-validation__" }]; }
export async function generateMetadata({ params }: Props) { return { title: `Tag: ${(await params).slug}` }; }
export default async function Tag({ params }: Props) { const { slug } = await params; return <PostList posts={await getPostsByTaxonomy("tag", slug)} heading={`Tag: ${slug}`} />; }
