import { metadataFor } from "@/lib/seo";
import { getAllPages, getContentModules, getPageByUri, getPageTemplateSettings, getRedirectForPath } from "@/lib/wordpress/queries";
import { notFound, permanentRedirect } from "next/navigation";
import { frontendPath } from "@/lib/urls";
import { Breadcrumbs, SeoSchema } from "@/components/seo-schema";
import { ModuleRenderer } from "@/components/module-renderer";
import { TemplateEnhancements } from "@/components/template-enhancements";
type Props = { params: Promise<{ slug: string[] }> };
export async function generateStaticParams() { const params = (await getAllPages()).map(({ uri }) => frontendPath(uri)).filter((uri) => uri !== "/").map((uri) => ({ slug: uri.split("/").filter(Boolean) })); return params.length ? params : [{ slug: ["__wordpress-build-validation__"] }]; }
export async function generateMetadata({ params }: Props) { const path = `/${(await params).slug.join("/")}`; const page = await getPageByUri(`${path}/`); const base = metadataFor(page, path); const template = page ? await getPageTemplateSettings(page.databaseId) : null; return { ...base, other: { ...base.other, ...template?.customMeta } }; }
export default async function WordPressPage({ params }: Props) { const path = `/${(await params).slug.join("/")}`; const [page, destination] = await Promise.all([getPageByUri(`${path}/`), getRedirectForPath(path)]); if (destination) permanentRedirect(destination); if (!page) notFound(); const [modules, template] = await Promise.all([getContentModules("page", page.databaseId), getPageTemplateSettings(page.databaseId)]); return <><SeoSchema seo={page.seo} path={path} /><Breadcrumbs seo={page.seo} path={path} /><TemplateEnhancements settings={template} /><div className={template?.bodyClass || undefined}>{modules.length ? <main><ModuleRenderer modules={modules} /></main> : <main className="wp-content" dangerouslySetInnerHTML={{ __html: page.content ?? "" }} />}</div></>; }
