import cn from "classnames";
import styles from "./page.module.scss";
import Slider from "./components/Slider/Slider";
import { Products } from "./components/Products/Products";
import { API } from "@/api/api";

export default async function Home() {
  const products = await API.getProducts("limit=6&offset=0");
  
  return (
    <main className={cn(styles.main)}>
      <Slider />
      <Products products={products?.products} />
    </main>
  );
}
