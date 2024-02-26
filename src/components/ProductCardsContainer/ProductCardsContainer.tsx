import { FC, DetailedHTMLProps, HTMLAttributes } from "react";
import cn from "classnames";
import styles from "./ProductCardsContainer.module.scss";

import { IProductsResponseProps } from '@/types/products';

interface IProductCardsContainerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	variant: "main" | "shop" | "favorities";
	products: IProductsResponseProps | void
}

const ProductCardsContainer: FC<IProductCardsContainerProps> = ({variant, ...props }) => {
  return <div className={cn(styles.root, styles[variant])} {...props}></div>;
};

export default ProductCardsContainer;
