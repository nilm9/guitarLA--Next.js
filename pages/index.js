import Head from "next/head";
import Layout from "../components/layout";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Layout title={"Home"} description={"Musicblog and more"}>
        <h1>Hello from Next</h1>
        <Link href="/us">Us</Link>
      </Layout>
    </>
  );
}
