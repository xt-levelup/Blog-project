import { notFound } from "next/navigation";
import { getPost as getPostNotCacheed } from "@/lib/posts";
import { cache } from "react";

// Bằng cách này hàm getPost sẽ chỉ loading 1 lần
// thay vì 2 lần như thông thường
const getPost = cache(async (slug) => await getPostNotCacheed(slug));

export async function generateMetadata({ params }, parent) {
  try {
    const { slug } = await params;
    const { frontmatter } = await getPost(slug);
    return frontmatter;
    // --- Tương tự: ---
    // const post = await getPost(params.slug);
    // const frontmatter = post.frontmatter;
    // return frontmatter;
  } catch (e) {}
}

// Trong Next.js, tham số { params }
// có thể được truy cập trực tiếp trong các hàm
export default async function BlogPage({ params }) {
  let post;

  try {
    const { slug } = await params;
    post = await getPost(slug);
  } catch (e) {
    notFound();
  }

  return <article className="prose dark:prose-invert">{post.content}</article>;
}
