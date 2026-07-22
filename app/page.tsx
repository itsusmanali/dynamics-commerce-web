/*---------------------------------------------------------------------------------------------
 * Copyright (c) Lumovy Technology Solutions. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

import { metadataFor } from "@/lib/seo";
import { PostList } from "@/components/post-list";
import { getAllPosts, getContentModules, getPageByUri, getPageTemplateSettings, getWordPressSettings } from "@/lib/wordpress/queries";
import { Breadcrumbs, SeoSchema, SiteSchema } from "@/components/seo-schema";
import { ModuleRenderer } from "@/components/module-renderer";
import { TemplateEnhancements } from "@/components/template-enhancements";

export async function generateMetadata() {
  const [page, settings] = await Promise.all([getPageByUri("/"), getWordPressSettings()]);
  if (!page) return { title: settings?.title, description: settings?.description, alternates: { canonical: "/" } };
  const base = metadataFor(page, "/");
  const template = await getPageTemplateSettings(page.databaseId);
  return { ...base, other: { ...base.other, ...template?.customMeta } };
}

export default async function Home() {
  const [page, settings, posts] = await Promise.all([getPageByUri("/"), getWordPressSettings(), getAllPosts()]);
  if (page) { const [modules, template] = await Promise.all([getContentModules("page", page.databaseId), getPageTemplateSettings(page.databaseId)]); return <><SeoSchema seo={page.seo} path="/" /><Breadcrumbs seo={page.seo} path="/" /><TemplateEnhancements settings={template} /><div className={template?.bodyClass || undefined}>{modules.length ? <main><ModuleRenderer modules={modules} /></main> : <main className="wp-content" dangerouslySetInnerHTML={{ __html: page.content ?? "" }} />}</div></>; }
  return <><SiteSchema name={settings?.title || "Dynamics Commerce"} description={settings?.description} /><section className="site-shell py-20"><p className="mb-4 text-sm font-semibold uppercase tracking-widest">Welcome</p><h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-7xl">{settings?.title || "Dynamics Commerce"}</h1>{settings?.description ? <p className="mt-6 max-w-2xl text-xl text-black/65">{settings.description}</p> : null}</section><PostList posts={posts} heading="Latest insights" /></>;
}
