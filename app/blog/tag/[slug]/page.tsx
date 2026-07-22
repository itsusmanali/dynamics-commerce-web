import { PostList } from "@/components/post-list";
import { getPostsByTaxonomy, getTaxonomies } from "@/lib/wordpress/queries";
type Props = { params: Promise<{ slug: string }> };
export async function generateStaticParams() { const items = (await getTaxonomies()).tags; return items.length ? items.map(({ slug }) => ({ slug })) : [{ slug: "__wordpress-build-validation__" }]; }
export async function generateMetadata({ params }: Props) { const { slug } = await params; return { title: `Tag: ${slug}`, alternates: { canonical: `/blog/tag/${slug}` } }; }
export default async function Tag({ params }: Props) { const { slug } = await params; return <PostList posts={await getPostsByTaxonomy("tag", slug)} heading={`Tag: ${slug}`} />; }
