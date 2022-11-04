import React from "react";
import styles from "../styles/guitarras.module.css";
import Image from "next/image";
import Link from "next/link";
const Guitar = ({ guitar }) => {
  const { name, description, price, image, url } = guitar;
  return (
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
        <Link href={`/guitars/${url}`} className={styles.enlace}>
          View Product
        </Link>
      </div>
    </div>
  );
};

export default Guitar;
