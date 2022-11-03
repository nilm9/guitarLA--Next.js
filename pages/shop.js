import React from "react";
import Link from "next/link";
import Layout from "../components/layout";

export async function getStaticProps() {
  const response = await fetch(
    "http://127.0.0.1:1337/api/guitars?populate=image"
  );
  const res = await response.json();
  console.log(res);

  return {
    props: {},
  };
}

function Shop({ guitars }) {
  return (
    <Layout title="Shop" description="Shop">
      <Link href="/">Go to Home</Link>
    </Layout>
  );
}

export default Shop;
