import { DetailedHTMLProps, FC, LiHTMLAttributes } from "react";
import cn from "classnames";
import styles from "./ProductCard.module.scss";
import { getProductBySku } from '@/api/getProductBySku';

interface IProductCardProps
  extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  title: string;
  variant: 'sm' | 'lg'
}

const ProductCard: FC<IProductCardProps> = ({ ...props }) => {
  return <li className={cn(styles.root)}></li>;
};

export default ProductCard;
