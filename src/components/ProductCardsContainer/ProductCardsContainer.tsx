import { FC, DetailedHTMLProps, HTMLAttributes } from "react";
import ProductCard from '@/ui/ProductCard/ProductCard';
import cn from "classnames";
import styles from "./ProductCardsContainer.module.scss";

import { IProductsResponseProps } from "@/types/products";

interface IProductCardsContainerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>,HTMLUListElement>
   {
  variant: "main" | "shop" | "favorities";
  products: IProductsResponseProps | undefined;
}

const ProductCardsContainer: FC<IProductCardsContainerProps> = ({
  products,
  variant,
  ...props
}) => {
  return (
    <ul className={cn(styles.root, styles[variant])} {...props}>
      {products &&
        products.products.length &&
        products.products.map((item) => <ProductCard key={ item.sku } { ...item} variant='lg'/>)}
    </ul>
  );
};

export default ProductCardsContainer;
