import cn from "classnames";
import styles from "./page.module.scss";
import Htag from "@/ui/Htag/Htag";
import SearchParams from "./components/SearchParams/SearchParams";
import { API } from "@/api/api";
import { IParamsProps } from "@/store/store";
import { createSearchParams } from "@/utils/createSearchParams";
import ProductCardsContainer from "@/components/ProductCardsContainer/ProductCardsContainer";
import { MobileSearchParams } from "./components/MobileSearchParams/MobileSearchParams";

interface IParamProps {
  params?: any;
  searchParams: IParamsProps;
}

export default async function Shop({ params, searchParams }: IParamProps) {
  const sParams = createSearchParams(searchParams);
  const filter = await API.getFilter();
  let products = await API.getProducts(
    !!sParams.length ? "limit=6&" + sParams : "limit=1000&offset=0"
  );

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
      <div className={cn(styles.search_params__mobile)}>
        {!!filter && <MobileSearchParams {...filter} />}
      </div>
      <div className={cn(styles.product_cards)} key={sParams}>
        {products && (
          <ProductCardsContainer products={products.products} variant='main' />
        )}
      </div>
    </main>
  );
}
