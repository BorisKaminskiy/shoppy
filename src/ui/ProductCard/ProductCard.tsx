import { DetailedHTMLProps, FC, LiHTMLAttributes } from "react";
import cn from "classnames";
import styles from "./ProductCard.module.scss";
import { IProductProps } from "@/types/products";
import Image from "next/image";

interface IProductCardProps
  extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>,
    IProductProps {
  variant: "sm" | "lg";
}

const ProductCard: FC<IProductCardProps> = ({
  variant,
  name,
  price,
  discount,
  description,
  images,
  categoryId,
  sku,
  reviews,
  ...props
}) => {
  return (
    <li className={cn(styles.root, styles[variant])} {...props}>
      {images.length && (
        <Image
          src={images[0]}
          className={cn(styles.image)}
          width={380}
          height={380}
          alt='изображение товара'
        />
      )}
    </li>
  );
};

export default ProductCard;
