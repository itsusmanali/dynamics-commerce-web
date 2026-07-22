import { metadataFor } from "@/lib/seo";
import { getAllPages, getPageByUri, getRedirectForPath } from "@/lib/wordpress/queries";
import { notFound, permanentRedirect } from "next/navigation";
import { frontendPath } from "@/lib/urls";
import { Breadcrumbs, SeoSchema } from "@/components/seo-schema";
type Props = { params: Promise<{ slug: string[] }> };
export async function generateStaticParams() { const params = (await getAllPages()).map(({ uri }) => frontendPath(uri)).filter((uri) => uri !== "/").map((uri) => ({ slug: uri.split("/").filter(Boolean) })); return params.length ? params : [{ slug: ["__wordpress-build-validation__"] }]; }
export async function generateMetadata({ params }: Props) { const path = `/${(await params).slug.join("/")}`; return metadataFor(await getPageByUri(`${path}/`), path); }
export default async function WordPressPage({ params }: Props) { const path = `/${(await params).slug.join("/")}`; const [page, destination] = await Promise.all([getPageByUri(`${path}/`), getRedirectForPath(path)]); if (destination) permanentRedirect(destination); if (!page) notFound(); return <><SeoSchema seo={page.seo} path={path} /><Breadcrumbs seo={page.seo} path={path} /><main className="wp-content" dangerouslySetInnerHTML={{ __html: page.content ?? "" }} /></>; }
