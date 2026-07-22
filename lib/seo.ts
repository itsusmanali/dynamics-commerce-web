import type { Metadata } from "next";
import { site } from "@/lib/site";
import type { ContentNode } from "@/lib/wordpress/types";

export function metadataFor(node?: ContentNode | null): Metadata {
  const title = node?.seo?.title?.trim() || node?.title?.replace(/<[^>]+>/g, "") || site.name;
  const description = node?.seo?.metaDesc?.trim() || site.description;
  const image = node?.seo?.opengraphImage?.sourceUrl;

  return {
    title,
    description,
    alternates: node?.seo?.canonical ? { canonical: node.seo.canonical } : undefined,
    openGraph: {
      type: "website",
      title,
      description,
      url: node?.seo?.canonical ?? undefined,
      images: image ? [{ url: image }] : undefined,
    },
    twitter: { card: "summary_large_image", title, description, images: image ? [image] : undefined },
  };
}
