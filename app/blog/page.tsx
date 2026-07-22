import { PostList } from "@/components/post-list";
import { getAllPosts } from "@/lib/wordpress/queries";
import { site } from "@/lib/site";
export const metadata = { title: "Blog", description: `Latest posts from ${site.name}.` };
export default async function Blog() { return <PostList posts={await getAllPosts()} />; }
