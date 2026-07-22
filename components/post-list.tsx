import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/wordpress/types";

export function PostList({ posts, heading = "Latest posts" }: { posts: Post[]; heading?: string }) {
  return <main className="site-shell py-12"><h1 className="mb-8 text-4xl font-semibold">{heading}</h1>
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{posts.map((post, index) => {
      const image = post.featuredImage?.node;
      return <article key={post.databaseId} className="overflow-hidden rounded-xl border border-black/10">
        {image?.sourceUrl ? <Image src={image.sourceUrl} alt={image.altText || post.title?.replace(/<[^>]+>/g, "") || ""} width={image.mediaDetails?.width || 800} height={image.mediaDetails?.height || 450} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" priority={index < 2} className="aspect-video h-auto w-full object-cover" /> : null}
        <div className="p-6"><h2 className="text-2xl font-semibold"><Link href={`/blog/${post.slug}`} dangerouslySetInnerHTML={{ __html: post.title ?? "" }} /></h2>
          {post.excerpt ? <div className="mt-3" dangerouslySetInnerHTML={{ __html: post.excerpt }} /> : null}</div>
      </article>;
    })}</div>
  </main>;
}
