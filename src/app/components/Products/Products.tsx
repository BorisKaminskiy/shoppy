import { FC } from "react";
import Htag from '@/ui/Htag/Htag';
import Typography from '@/ui/Typography/Typography';
import Link from 'next/link';
import ProductCardsContainer from '@/components/ProductCardsContainer/ProductCardsContainer';
import { IProductProps } from '@/types/products';
import cn from "classnames";
import styles from "./Products.module.scss";

interface IProductsProps {
	products: IProductProps[] | [] | undefined
}

export const Products: FC<IProductsProps> = ({products}) => {

	return (
    <section className={cn(styles.section_products)}>
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
  );
} 
