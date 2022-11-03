import React from "react";
import Link from "next/link";
import Layout from "../components/layout";

function Blog() {
  return (
    <Layout
      title="blog"
      description="Music blog, guitars on sale, tips and more"
    >
      <Link href="/"> Go to Home</Link>
    </Layout>
  );
}

export default Blog;
