// app/blog/[slug]/page.js

import { notFound } from "next/navigation";

const titles = {
  first: "Hello First",
  second: "Hello Second",
};

export async function generateMetadata({ params, searchParams }, parent) {
  const description = (await parent).description ?? "Default desc";

  // Kiểm tra nếu params.slug không hợp lệ
  if (!titles[params.slug]) {
    notFound();
  }
  return {
    title: titles[params.slug],
    description,
  };
}

export default function BlogPage({ params }) {
  // Kiểm tra nếu params.slug không hợp lệ
  if (!["first", "second"].includes(params.slug)) {
    notFound();
  }
  return <>Hello! {params.slug}</>;
}

// Nếu ta truy cập http://localhost:3000/blog/first
// thì sẽ cho ra Hello! first
