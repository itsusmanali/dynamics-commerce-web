import { draftMode } from "next/headers";
import { getPageByUri, getPostBySlug } from "@/lib/wordpress/queries";
import { notFound } from "next/navigation";
export const metadata = { robots: { index: false, follow: false } };
type Props = { params: Promise<{ type: string; slug: string }> };
export default async function Preview({ params }: Props) {
  if (!(await draftMode()).isEnabled) notFound();
  const { type, slug } = await params;
  const node = type === "post" ? await getPostBySlug(slug, true) : await getPageByUri(`/${slug}/`, true);
  if (!node) notFound();
  return <main className="wp-content"><div className="mb-8 rounded bg-amber-100 p-3 text-amber-950">Draft preview</div><h1 className="text-4xl font-semibold" dangerouslySetInnerHTML={{ __html: node.title ?? "" }} /><div className="mt-8" dangerouslySetInnerHTML={{ __html: node.content ?? "" }} /></main>;
}
