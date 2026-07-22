import Link from "next/link";
import { getAllPages, getWordPressSettings } from "@/lib/wordpress/queries";
import { frontendPath } from "@/lib/urls";

export async function SiteHeader() {
  const [settings, pages] = await Promise.all([getWordPressSettings(), getAllPages()]);
  const links = pages
    .map((page) => ({ id: page.databaseId, label: page.title?.replace(/<[^>]+>/g, "") || page.slug || "Page", href: frontendPath(page.uri), parent: page.parent?.node?.databaseId }))
    .filter((page) => !page.parent && page.href !== "/")
    .slice(0, 8);

  return <header className="border-b border-black/10 bg-white"><div className="site-shell flex min-h-18 items-center justify-between gap-8 py-4">
    <Link href="/" className="text-lg font-semibold tracking-tight">{settings?.title || "Dynamics Commerce"}</Link>
    <nav aria-label="Primary navigation"><ul className="flex flex-wrap items-center justify-end gap-x-6 gap-y-2 text-sm">
      {links.map((link) => <li key={link.id}><Link className="hover:underline" href={link.href}>{link.label}</Link></li>)}
      <li><Link className="hover:underline" href="/blog">Blog</Link></li><li><Link className="hover:underline" href="/search">Search</Link></li>
    </ul></nav>
  </div></header>;
}
