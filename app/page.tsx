import { metadataFor } from "@/lib/seo";
import { PostList } from "@/components/post-list";
import { getAllPosts, getPageByUri, getWordPressSettings } from "@/lib/wordpress/queries";

export async function generateMetadata() {
  const [page, settings] = await Promise.all([getPageByUri("/"), getWordPressSettings()]);
  return page ? metadataFor(page, "/") : { title: settings?.title, description: settings?.description, alternates: { canonical: "/" } };
}

export default async function Home() {
  const [page, settings, posts] = await Promise.all([getPageByUri("/"), getWordPressSettings(), getAllPosts()]);
  if (page) return <main className="wp-content" dangerouslySetInnerHTML={{ __html: page.content ?? "" }} />;
  return <><section className="site-shell py-20"><p className="mb-4 text-sm font-semibold uppercase tracking-widest">Welcome</p><h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-7xl">{settings?.title || "Dynamics Commerce"}</h1>{settings?.description ? <p className="mt-6 max-w-2xl text-xl text-black/65">{settings.description}</p> : null}</section><PostList posts={posts} heading="Latest insights" /></>;
}
