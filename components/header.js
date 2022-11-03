import Image from "next/image";
import Link from "next/link";
import styles from "../styles/header.module.css";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <Link href={"/"}>
          <Image src="/img/logo.svg" width={300} height={40} alt="img logo" />
        </Link>

        <nav className="navegacion">
          <Link
            href="/"
            className={router.pathname === "/" ? styles.active : ""}
          >
            Home
          </Link>
          <Link
            href="/us"
            className={router.pathname === "/us" ? styles.active : ""}
          >
            About us
          </Link>
          <Link
            href="/blog"
            className={router.pathname === "/blog" ? styles.active : ""}
          >
            Blog
          </Link>
          <Link
            href="/shop"
            className={router.pathname === "/shop" ? styles.active : ""}
          >
            Shop
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
