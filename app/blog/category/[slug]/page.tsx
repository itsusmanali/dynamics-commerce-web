import { PostList } from "@/components/post-list";
import { getPostsByTaxonomy, getTaxonomies } from "@/lib/wordpress/queries";
type Props = { params: Promise<{ slug: string }> };
export async function generateStaticParams() { const items = (await getTaxonomies()).categories; return items.length ? items.map(({ slug }) => ({ slug })) : [{ slug: "__wordpress-build-validation__" }]; }
export async function generateMetadata({ params }: Props) { const { slug } = await params; return { title: `Category: ${slug}`, alternates: { canonical: `/blog/category/${slug}` } }; }
export default async function Category({ params }: Props) { const { slug } = await params; return <PostList posts={await getPostsByTaxonomy("category", slug)} heading={`Category: ${slug}`} />; }
