import React from "react";

import { getPosts } from "@/sanity/lib/query";
import BlogMainPage from "../components/Blog";

export default async function Blog() {
  const posts = (await getPosts("post")) || [];
  return (
    <main>
      <div className="">
        <BlogMainPage posts={posts} />
      </div>
    </main>
  );
}
