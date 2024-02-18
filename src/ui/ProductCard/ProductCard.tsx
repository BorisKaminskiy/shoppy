import { DetailedHTMLProps, FC, LiHTMLAttributes } from "react";
import cn from "classnames";
import styles from "./ProductCard.module.scss";

interface IProductCardProps
  extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  title: string;
}

const ProductCard: FC<IProductCardProps> = ({ ...props }) => {
  return <li></li>;
};

export default ProductCard;
