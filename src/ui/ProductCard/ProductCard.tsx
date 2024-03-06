"use client";

import { DetailedHTMLProps, FC, LiHTMLAttributes, useState } from "react";
import cn from "classnames";
import styles from "./ProductCard.module.scss";
import { IProductProps } from "@/types/products";
import Image from "next/image";
import Typography from "../Typography/Typography";
import Button from "../Button/Button";
import BusketIcon from "@/assets/icons/BusketIcon";
import FavoriteIcon from "@/assets/icons/FavoriteIcon";
import EyeIcon from "@/assets/icons/EyeIcon";
import { motion } from "framer-motion";
import { useFavoritiesState } from "@/store/favorities";
import { favorities } from '@/store/expStore';

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
  const [isVisible, setIsVisible] = useState<boolean>(false);
  // const fav = favorities.getAllFAvorities()
  // console.log(fav)
  // const favorities = useFavoritiesState(state => state.favorities) 
  // const addToFavorities = favorities.addToFavorities(sku)
  const isFavorited = favorities.checkSkuInFavorities(sku);

  const setVisible = () => {
    setIsVisible(true);
  };

  const setUnvisible = () => {
    setIsVisible(false);
  };

  return (
    <li
      className={cn(styles.root, styles[variant])}
      {...props}
      onMouseEnter={setVisible}
      onMouseLeave={setUnvisible}
    >
      {images.length && (
        <div className={cn(styles.image_wrapper)}>
          <Image
            src={images[0]}
            width={380}
            height={380}
            alt='изображение товара'
            className={cn(styles.image)}
          />
          {isVisible && (
            <motion.div
              className={cn(styles.card_controls)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Button variant='icon' width={30} aria-label='Добавить в корзину'>
                <BusketIcon />
              </Button>
              <Button variant='icon' width={30} aria-label='Посмотреть товар'>
                <EyeIcon />
              </Button>
              <Button
                onClick={() => isFavorited? favorities.removeFromFavorities(sku) : favorities.addToFavorities(sku)}
                // disabled={isFavorited}
                variant='icon'
                width={30}
                aria-label='Добавить в избранное'
              >
                <FavoriteIcon />
              </Button>
            </motion.div>
          )}
        </div>
      )}
      <div className={cn(styles.product_title)}>
        <Typography variant='t20-14px600' color='black'>
          {name}
        </Typography>
      </div>
      <div className={cn(styles.product_price)}>
        {discount && (
          <div className={cn(styles.price_discount)}>
            <Typography variant='t20-12px400' color='red' isLineThrough>
              ${price}
            </Typography>
            <Typography variant='t20-12px400' color='gold'>
              ${(price * (100 - discount)) / 100}
            </Typography>
          </div>
        )}
        {!discount && (
          <Typography variant='t20-12px400' color='gold'>
            ${price}
          </Typography>
        )}
      </div>
      <div className={cn(styles.card_info)}>
        <div className={cn(discount && styles.info_discount)}>
          {discount && (
            <Typography variant='t20-12px400' color='white'>
              -{discount}%
            </Typography>
          )}
        </div>
        <div className={cn(styles.info_controls)}>
          {isFavorited && <FavoriteIcon fill='#a18a68'/>}
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
