import styles from "../../styles/guitarras.module.css";
import Layout from "../../components/layout";
import Image from "next/image";

function Product({ guitar }) {
  console.log(guitar);
  const { name, description, price, image } = guitar[0].attributes;

  return (
    <Layout>
      <div className={styles.guitarra}>
        <Image
          src={image.data.attributes.formats.medium.url}
          width={600}
          height={400}
          alt={`Image guitar ${name}`}
        />
        <div className={styles.contenido}>
          <h3>{name}</h3>
          <p className={styles.descripcion}>{description}</p>
          <h4>{price} $</h4>
        </div>
      </div>
    </Layout>
  );
}

export default Product;

// export async function getStaticProps({ query: { url } }) {
//   const response = await fetch(
//     `${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`
//   );
//   const { data: guitar } = await response.json();
//   console.log(guitar);

//   return {
//     props: {
//       guitar,
//     },
//   };
// }

//EVERYTIME WE FETCH FROM THE API
export async function getServerSideProps({ query: { url } }) {
  const response = await fetch(
    `${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`
  );
  const { data: guitar } = await response.json();
  console.log(guitar);

  return {
    props: {
      guitar,
    },
  };
}
