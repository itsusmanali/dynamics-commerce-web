/*---------------------------------------------------------------------------------------------
 * Copyright (c) Lumovy Technology Solutions. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

import Link from "next/link";
import { Suspense } from "react";
import { searchWordPress } from "@/lib/wordpress/queries";
import { frontendPath } from "@/lib/urls";

export const metadata = { title: "Search", robots: { index: false, follow: true } };
type Props = { searchParams: Promise<{ q?: string }> };

async function Results({ searchParams }: Props) {
  const query = (await searchParams).q?.trim() ?? "";
  const results = await searchWordPress(query);
  const items = [
    ...results.pages.map((page) => ({ id: `page-${page.databaseId}`, title: page.title, excerpt: page.excerpt, href: frontendPath(page.uri), type: "Page" })),
    ...results.posts.map((post) => ({ id: `post-${post.databaseId}`, title: post.title, excerpt: post.excerpt, href: `/blog/${post.slug}`, type: "Post" })),
  ];
  if (!query) return <p className="mt-8 text-black/60">Enter a word or phrase to search the site.</p>;
  if (!items.length) return <p className="mt-8">No results found for “{query}”.</p>;
  return <div className="mt-10 space-y-8"><p className="text-sm text-black/60">{items.length} result{items.length === 1 ? "" : "s"} for “{query}”</p>{items.map((item) => <article key={item.id}><p className="text-xs font-semibold uppercase tracking-wider text-black/50">{item.type}</p><h2 className="mt-1 text-2xl font-semibold"><Link className="hover:underline" href={item.href} dangerouslySetInnerHTML={{ __html: item.title ?? "Untitled" }} /></h2>{item.excerpt ? <div className="mt-2 text-black/70" dangerouslySetInnerHTML={{ __html: item.excerpt }} /> : null}</article>)}</div>;
}

export default function SearchPage({ searchParams }: Props) {
  return <main className="site-shell py-14"><h1 className="text-4xl font-semibold">Search</h1><form className="mt-8 flex max-w-2xl gap-3" action="/search"><label className="sr-only" htmlFor="search">Search</label><input id="search" name="q" type="search" className="min-w-0 flex-1 rounded-lg border border-black/20 px-4 py-3" placeholder="Search pages and posts…" /><button className="rounded-lg bg-black px-6 py-3 text-white" type="submit">Search</button></form><Suspense fallback={<p className="mt-8">Searching…</p>}><Results searchParams={searchParams} /></Suspense></main>;
}
