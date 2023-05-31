import Link from "next/link";
import Head from "next/head";
import styles from "./MainContainer.module.css";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={"nextJS learning" + keywords}></meta>
        <title>nextJS learning</title>
      </Head>

      <nav className={styles.nav}>
        <Link href="/" className={styles.link}>
          Main
        </Link>
        <Link href="/users" className={styles.link}>
          Users
        </Link>
      </nav>
      <div>{children}</div>
    </>
  );
};

export default MainContainer;
