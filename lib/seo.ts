import type { Metadata } from "next";
import { site } from "@/lib/site";
import type { ContentNode } from "@/lib/wordpress/types";
import { frontendUrl } from "@/lib/urls";

export function metadataFor(node?: ContentNode | null, path = "/"): Metadata {
  const title = node?.seo?.title?.trim() || node?.title?.replace(/<[^>]+>/g, "") || site.name;
  const description = node?.seo?.metaDesc?.trim() || site.description;
  const openGraphTitle = node?.seo?.opengraphTitle?.trim() || title;
  const openGraphDescription = node?.seo?.opengraphDescription?.trim() || description;
  const image = node?.seo?.opengraphImage?.sourceUrl || node?.featuredImage?.node?.sourceUrl;
  const twitterImage = node?.seo?.twitterImage?.sourceUrl || image;
  const canonical = frontendUrl(path);

  return {
    title: { absolute: title },
    description,
    alternates: { canonical },
    robots: {
      index: node?.seo?.metaRobotsNoindex !== "noindex",
      follow: node?.seo?.metaRobotsNofollow !== "nofollow",
    },
    openGraph: {
      type: node?.seo?.opengraphType === "article" ? "article" : "website",
      title: openGraphTitle,
      description: openGraphDescription,
      url: canonical,
      images: image ? [{ url: image }] : undefined,
      publishedTime: node?.date ?? undefined,
      modifiedTime: node?.modified ?? undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: node?.seo?.twitterTitle?.trim() || openGraphTitle,
      description: node?.seo?.twitterDescription?.trim() || openGraphDescription,
      images: twitterImage ? [twitterImage] : undefined,
    },
  };
}
