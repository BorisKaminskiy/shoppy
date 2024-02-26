import cn from "classnames";
import styles from "./page.module.scss";
import Htag from "@/ui/Htag/Htag";
import SearchParams from "./components/SearchParams/SearchParams";
import { API } from "@/api/api";
import { IParamsProps } from "@/store/store";
import { createSearchParams } from "@/utils/createSearchParams";

interface IParamProps {
  params?: any;
  searchParams: IParamsProps | {};
}

export default async function Shop({ params, searchParams }: IParamProps) {
  const sParams = createSearchParams(searchParams);
  const filter = await API.getFilter();
  let products;

  Object.keys(searchParams).length
    ? (products = await API.getProducts(sParams))
    : (products = await API.getProducts(`limit=1000&offset=0`));

  return (
    <main className={cn(styles.main)}>
      <div className={cn(styles.outer_wrapper)}>
        <Htag tag='h1' color='black'>
          Каталог товаров
        </Htag>
        <section className={cn(styles.wrapper)}>
          {!!filter && <SearchParams {...filter} />}
        </section>
      </div>
      <div className={cn(styles.product_cards)}>
        {!!products &&
          !!products.products.length &&
          products.products.map((item) => (
            <div key={item.sku}>{item.name}</div>
          ))}
      </div>
    </main>
  );
}
