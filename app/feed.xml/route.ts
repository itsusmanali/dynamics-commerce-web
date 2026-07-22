import { getAllPosts } from "@/lib/wordpress/queries";
import { site } from "@/lib/site";
const xml = (value: string) => value.replace(/[<>&'"]/g, (char) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" })[char]!);
export async function GET() {
  const items = (await getAllPosts()).map((post) => `<item><title>${xml(post.title?.replace(/<[^>]+>/g, "") ?? "")}</title><description>${xml(post.excerpt?.replace(/<[^>]+>/g, "") ?? "")}</description><link>${site.url}/blog/${post.slug}</link><guid>${site.url}/blog/${post.slug}</guid>${post.date ? `<pubDate>${new Date(post.date).toUTCString()}</pubDate>` : ""}</item>`).join("");
  const body = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${xml(site.name)}</title><description>${xml(site.description)}</description><link>${site.url}</link>${items}</channel></rss>`;
  return new Response(body, { headers: { "Content-Type": "application/rss+xml; charset=utf-8", "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400" } });
}
