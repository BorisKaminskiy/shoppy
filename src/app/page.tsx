import styles from "./page.module.scss";
import Slider from "./components/Slider/Slider";

export default function Home() {
  return (
    <main className={styles.main}>
      <Slider />
      <div>
        libero eveniet modi rem voluptas id, unde, ipsum molestiae temporibus
        recusandae inventore veniam quas culpa sint minima molestias. Blanditiis
        hic rem vel, perspiciatis tempora omnis laborum soluta nulla expedita
      </div>
    </main>
  );
}
