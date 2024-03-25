import styles from "./page.module.scss";
import BlockAbout from "./components/BlockAbout/BlockAbout";

export default function About() {
  return (
    <main className={styles.main}>
      <BlockAbout />
    </main>
  );
}
