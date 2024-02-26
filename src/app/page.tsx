import { FC } from "react";
import cn from "classnames";
import styles from "./page.module.scss";
import Slider from "./components/Slider/Slider";
import ProductCardsContainer from "@/components/ProductCardsContainer/ProductCardsContainer";
import Htag from "@/ui/Htag/Htag";
import Link from "next/link";
import { API } from '@/api/api';
import Typography from "@/ui/Typography/Typography";

export default async function Home() {
  const products = await API.getProducts(6);

  return (
    <main className={cn(styles.main)}>
      <Slider />
      <section className={cn(styles.section_product)}>
        <div className={cn(styles.section_title)}>
          <Htag tag='h1'>Последние поступления</Htag>
          <Link href={"/shop"}>
            <Typography variant='t20-14px600' color='gold'>
              Все
            </Typography>
          </Link>
        </div>
        <ProductCardsContainer variant='main' products={products} />
      </section>
    </main>
  );
}
