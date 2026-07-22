/*---------------------------------------------------------------------------------------------
 * Copyright (c) Lumovy Technology Solutions. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

import { PostList } from "@/components/post-list";
import { getAllPosts } from "@/lib/wordpress/queries";
import { site } from "@/lib/site";
export const metadata = { title: "Blog", description: `Latest posts from ${site.name}.`, alternates: { canonical: "/blog" } };
export default async function Blog() { return <PostList posts={await getAllPosts()} />; }
