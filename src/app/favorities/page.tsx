//Page under construction
import styles from "./page.module.scss";
import { API } from "@/api/api";

export default async function Favorities() {
  const products = await API.getProducts("name=Lira Earrings");
  console.log(products);

  return <main className={styles.main}>Favorities</main>;
}
