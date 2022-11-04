import styles from "../../styles/Home.module.css";

import HeadTags from "../organisms/head";
import Footer from "../organisms/footer";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <HeadTags />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
