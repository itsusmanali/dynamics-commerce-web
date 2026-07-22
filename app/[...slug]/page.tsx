import { metadataFor } from "@/lib/seo";
import { getAllPages, getPageByUri } from "@/lib/wordpress/queries";
import { notFound } from "next/navigation";
import { frontendPath } from "@/lib/urls";
type Props = { params: Promise<{ slug: string[] }> };
export async function generateStaticParams() { const params = (await getAllPages()).map(({ uri }) => frontendPath(uri)).filter((uri) => uri !== "/").map((uri) => ({ slug: uri.split("/").filter(Boolean) })); return params.length ? params : [{ slug: ["__wordpress-build-validation__"] }]; }
export async function generateMetadata({ params }: Props) { const path = `/${(await params).slug.join("/")}`; return metadataFor(await getPageByUri(`${path}/`), path); }
export default async function WordPressPage({ params }: Props) { const page = await getPageByUri(`/${(await params).slug.join("/")}/`); if (!page) notFound(); return <main className="wp-content" dangerouslySetInnerHTML={{ __html: page.content ?? "" }} />; }
