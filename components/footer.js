import React from "react";
import Link from "next/link";
import styles from "../styles/footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.contenido}`}>
        <nav className={styles.navegacion}>
          <Link href="/">Home</Link>
          <Link href="/us">About us</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/shop">Shop</Link>
        </nav>
        <p className={styles.copyright}>
          All the rights reserved {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
