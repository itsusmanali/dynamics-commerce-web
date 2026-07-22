import { getAllPages, getWordPressSettings } from "@/lib/wordpress/queries";
import { frontendPath } from "@/lib/urls";

export async function getHeaderData() {
  const [settings, pages] = await Promise.all([getWordPressSettings(), getAllPages()]);
  return { siteName: settings?.title || "Dynamics Commerce", links: pages.filter((page) => !page.parent?.node).map((page) => ({ id: page.databaseId, label: page.title?.replace(/<[^>]+>/g, "") || page.slug || "Page", href: frontendPath(page.uri) })).filter((page) => page.href !== "/").slice(0, 8) };
}
