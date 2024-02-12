"use client";

import { FC, useState } from "react";
import cn from "classnames";
import styles from "./SliderContainer.module.scss";
import Image from "next/image";
import Htag from "@/ui/Htag/Htag";
import Button from "@/ui/Button/Button";
import Link from "next/link";
import ArrowLeftIcon from "@/assets/icons/ArrowLeftIcon";
import ArrowRightIcon from "@/assets/icons/ArrowRightIcon";
import { AnimatePresence, motion } from "framer-motion";
import { ISliderItemProps } from "@/types/slider";

interface ISliderContainerProps {
  images: ISliderItemProps[];
}

const SliderContainer: FC<ISliderContainerProps> = ({ images }) => {
  const length = images.length;
  const [image, setImage] = useState<number>(0);

  const onRightButtonClick = (): void => {
    image <= 0 ? setImage(length - 1) : setImage(image - 1);
  };

  const onLeftButtonClick = (): void => {
    image >= length - 1 ? setImage(0) : setImage(image + 1);
  };

  return (
    <div className={cn(styles.root)}>
      <AnimatePresence>
        <motion.div className={cn(styles.title)}>
          <Htag tag='h1' color='inherit'>
            Amazing Discounts
            <br /> on Garden Products!
          </Htag>
        </motion.div>

        <motion.div
          className={cn(styles.link)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {" "}
          <Link href={"/sales"}>
            <Button width='218px'>Check out</Button>
          </Link>
        </motion.div>

        <motion.div
          className={cn(styles.buttons)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            className={cn(styles.slider_button)}
            onClick={onLeftButtonClick}
          >
            <ArrowLeftIcon width={32} height={32} fill='white' />
          </button>
          <button
            className={cn(styles.slider_button)}
            onClick={onRightButtonClick}
          >
            <ArrowRightIcon width={32} height={32} fill='white' />
          </button>
        </motion.div>

        <motion.div
          key={images[image].id}
          className={cn(styles.image_container)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            className={cn(styles.image)}
            fill
            style={{ objectFit: "cover", borderRadius: "var(--radius-big)" }}
            quality={60}
            src={images[image].url}
            alt='sliderImage'
            key={image}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SliderContainer;
