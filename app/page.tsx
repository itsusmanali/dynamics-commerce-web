import { metadataFor } from "@/lib/seo";
import { getPageByUri } from "@/lib/wordpress/queries";
import { notFound } from "next/navigation";

export async function generateMetadata() {
  return metadataFor(await getPageByUri("/"));
}

export default async function Home() {
  const page = await getPageByUri("/");
  if (!page) notFound();
  return <main className="wp-content" dangerouslySetInnerHTML={{ __html: page.content ?? "" }} />;
}
