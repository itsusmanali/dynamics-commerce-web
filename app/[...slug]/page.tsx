/*---------------------------------------------------------------------------------------------
 * Copyright (c) Lumovy Technology Solutions. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

import { metadataFor } from "@/lib/seo";
import { getAllPages, getContentModules, getPageByUri, getPageTemplateSettings, getRedirectForPath } from "@/lib/wordpress/queries";
import { notFound, permanentRedirect } from "next/navigation";
import { frontendPath } from "@/lib/urls";
import { SeoSchema } from "@/components/seo-schema";
import { ModuleRenderer } from "@/components/module-renderer";
import { TemplateEnhancements } from "@/components/template-enhancements";
import { resolveCatalogRoute } from "./catalog-route";
type Props = { params: Promise<{ slug: string[] }> };
export async function generateStaticParams() { const params = (await getAllPages()).map(({ uri }) => frontendPath(uri)).filter((uri) => uri !== "/").map((uri) => ({ slug: uri.split("/").filter(Boolean) })); return params.length ? params : [{ slug: ["__wordpress-build-validation__"] }]; }
export async function generateMetadata({ params }: Props) { const parts = (await params).slug; const path = `/${parts.join("/")}`; let page = await getPageByUri(`${path}/`); const catalog = page ? null : await resolveCatalogRoute(parts); if (!page && catalog) page = await getPageByUri(catalog.templateUri); const base = metadataFor(page, path); const title = catalog?.kind === "product" ? catalog.product.Name : catalog?.category.Name; const template = page ? await getPageTemplateSettings(page.databaseId) : null; return { ...base, ...(title ? { title: { absolute: title } } : {}), other: { ...base.other, ...template?.customMeta } }; }
export default async function WordPressPage({ params }: Props) { const parts = (await params).slug; const path = `/${parts.join("/")}`; const [directPage, destination] = await Promise.all([getPageByUri(`${path}/`), getRedirectForPath(path)]); if (destination) permanentRedirect(destination); const catalog = directPage ? null : await resolveCatalogRoute(parts); const page = directPage ?? (catalog ? await getPageByUri(catalog.templateUri) : null); if (!page) notFound(); const [modules, template] = await Promise.all([getContentModules("page", page.databaseId), getPageTemplateSettings(page.databaseId)]); return <><SeoSchema seo={page.seo} path={path} /><TemplateEnhancements settings={template} /><div className={template?.bodyClass || undefined} data-catalog-kind={catalog?.kind} data-category-id={catalog?.category.RecordId} data-product-id={catalog?.kind === "product" ? catalog.product.RecordId : undefined}>{modules.length ? <ModuleRenderer modules={modules} /> : <main className="wp-content" dangerouslySetInnerHTML={{ __html: page.content ?? "" }} />}</div></>; }
