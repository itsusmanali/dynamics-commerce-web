import Link from "next/link";
import { getAllPages, getWordPressSettings } from "@/lib/wordpress/queries";
import { frontendPath } from "@/lib/urls";

export async function SiteFooter() {
  const [settings, pages] = await Promise.all([getWordPressSettings(), getAllPages()]);
  return <footer className="mt-auto border-t border-black/10 bg-zinc-50"><div className="site-shell grid gap-8 py-12 md:grid-cols-2">
    <div><p className="text-lg font-semibold">{settings?.title || "Dynamics Commerce"}</p>{settings?.description ? <p className="mt-3 max-w-md text-sm text-black/60">{settings.description}</p> : null}</div>
    <nav aria-label="Footer navigation" className="md:text-right"><ul className="flex flex-wrap gap-x-5 gap-y-2 md:justify-end">{pages.slice(0, 6).map((page) => <li key={page.databaseId}><Link className="text-sm hover:underline" href={frontendPath(page.uri)}>{page.title?.replace(/<[^>]+>/g, "") || page.slug}</Link></li>)}<li><Link className="text-sm hover:underline" href="/feed.xml">RSS</Link></li></ul></nav>
  </div><div className="border-t border-black/10"><p className="site-shell py-5 text-xs text-black/55">© 2026 {settings?.title || "Dynamics Commerce"}. All rights reserved.</p></div></footer>;
}
