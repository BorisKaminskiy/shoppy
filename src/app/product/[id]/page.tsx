import cn from "classnames";
import styles from "./page.module.scss";
import { API } from "@/api/api";
import { notFound } from "next/navigation";

interface IParamProps {
  params: {
    id: number;
  };
}

export const generateStaticParams = async () => {
  const products = await API.getProducts();
  return products?.products.map((product) => {
    id: product.sku;
  });
};

const Product = async ({ params }: IParamProps) => {
  const product = await API.getProductBySku(Number(params.id));
  console.log(product)
  
  
  // const product = products?.products.find(item => === params.id)
  // console.log(product)

  // if (!product) {
  //   notFound();
  // }

  // const product = products?.products.find(item => )
  // const sParams = createSearchParams(searchParams);
  // const filter = await API.getFilter();
  // let products = await API.getProducts(
  //   !!sParams.length ? "limit=6&" + sParams : "limit=1000&offset=0"
  // );

  return (
    <main className={cn(styles.main)}>
      dfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdf
    </main>
  );
};

export default Product;

