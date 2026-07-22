import { draftMode } from "next/headers";
import { getPreviewById } from "@/lib/wordpress/queries";
import { notFound } from "next/navigation";
export const metadata = { robots: { index: false, follow: false } };
type Props = { params: Promise<{ type: string; slug: string }> };
export default async function Preview({ params }: Props) {
  if (!(await draftMode()).isEnabled) notFound();
  const { slug: id } = await params;
  const node = await getPreviewById(id);
  if (!node) notFound();
  return <main className="wp-content"><div className="mb-8 rounded bg-amber-100 p-3 text-amber-950">Draft preview</div><h1 className="text-4xl font-semibold" dangerouslySetInnerHTML={{ __html: node.title ?? "" }} /><div className="mt-8" dangerouslySetInnerHTML={{ __html: node.content ?? "" }} /></main>;
}
