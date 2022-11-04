import React from "react";
import Layout from "../components/layout";
import Guitar from "../components/guitar";
import styles from "../styles/grid.module.css";

function Shop({ guitars }) {
  console.log(guitars.image);

  return (
    <Layout title="Shop" description="Shop">
      <main className="container">
        <h1 className="heading"> Our colection</h1>
        <div className={styles.grid}>
          {guitars.map((guitar) => (
            <Guitar guitar={guitar.attributes} key={guitar.id} />
          ))}
        </div>
      </main>
    </Layout>
  );
}

export default Shop;

export async function getStaticProps() {
  const response = await fetch(`${process.env.API_URL}/guitars?populate=image`);
  const { data: guitars } = await response.json();
  console.log(guitars);

  return {
    props: { guitars },
  };
}
