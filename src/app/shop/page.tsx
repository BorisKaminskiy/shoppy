import cn from "classnames";
import styles from "./page.module.scss";
import Htag from "@/ui/Htag/Htag";
import SearchParams from "./components/SearchParams/SearchParams";

export default function Shop() {
  return (
    <main className={cn(styles.main)}>
      <Htag tag='h1' color='black'>
        Каталог товаров
      </Htag>
      <section className={cn(styles.wrapper)}>
        <SearchParams />
      </section>
      dignissimos sunt at id! Minus, cum. Illo inventore quidem quam quis fugiat
      vitae, sit aut eos nam reiciendis excepturi totam, blanditiis unde
      perferendis explicabo, possimus vero delectus necessitatibus molestiae
    </main>
  );
}
