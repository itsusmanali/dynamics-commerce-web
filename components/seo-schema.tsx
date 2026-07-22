/*---------------------------------------------------------------------------------------------
 * Copyright (c) Lumovy Technology Solutions. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

import { site } from "@/lib/site";
import { frontendUrl } from "@/lib/urls";
import type { SeoData } from "@/lib/wordpress/types";

function rewriteSchemaValue(value: unknown, wordpressCanonical: string, canonical: string): unknown {
  if (typeof value === "string") {
    if (wordpressCanonical && value.startsWith(wordpressCanonical)) return `${canonical}${value.slice(wordpressCanonical.length)}`;
    if (value.includes("?s={search_term_string}")) return `${site.url}/search?q={search_term_string}`;
    if (value === `${site.wordpressUrl}/` || value === site.wordpressUrl) return site.url;
    if (value.startsWith(`${site.wordpressUrl}/category/`)) return value.replace(`${site.wordpressUrl}/category/`, `${site.url}/blog/category/`);
    if (value.startsWith(`${site.wordpressUrl}/tag/`)) return value.replace(`${site.wordpressUrl}/tag/`, `${site.url}/blog/tag/`);
    return value;
  }
  if (Array.isArray(value)) return value.map((item) => rewriteSchemaValue(item, wordpressCanonical, canonical));
  if (value && typeof value === "object") return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, rewriteSchemaValue(item, wordpressCanonical, canonical)]));
  return value;
}

export function SeoSchema({ seo, path }: { seo?: SeoData | null; path: string }) {
  if (!seo?.schema?.raw) return null;
  let html: string;
  try {
    const parsed = JSON.parse(seo.schema.raw) as unknown;
    const schema = rewriteSchemaValue(parsed, seo.canonical?.replace(/\/+$/, "") ?? "", frontendUrl(path).replace(/\/+$/, ""));
    html = JSON.stringify(schema).replace(/</g, "\\u003c");
  } catch { return null; }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: html }} />;
}

export function SiteSchema({ name, description }: { name: string; description?: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", "@id": `${site.url}/#website`, url: `${site.url}/`, name, description, potentialAction: [{ "@type": "SearchAction", target: { "@type": "EntryPoint", urlTemplate: `${site.url}/search?q={search_term_string}` }, "query-input": "required name=search_term_string" }] },
      { "@type": "Organization", "@id": `${site.url}/#organization`, name, url: `${site.url}/` },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />;
}
