"use client";

import { FC, RefObject } from "react";
import cn from "classnames";
import styles from "./MobileSearchParams.module.scss";
import { useElementToogle } from "@/hooks/useSetElementToogle";
import { motion } from "framer-motion";
import SearchParams from "../SearchParams/SearchParams";
import { IFilterProps } from "@/types/filter";
import Button from "@/ui/Button/Button";
import SearchParamsIcon from "@/assets/icons/SearchParamsIcon";
import Typography from "@/ui/Typography/Typography";

interface IMobileSearchParams {
  props: IFilterProps;
}

export const MobileSearchParams: FC<IFilterProps> = ({ ...props }) => {
  const { isOpen, setOpen, elementRef } = useElementToogle();
  let user = true;

  return (
    <div
      className={cn(styles.header_burger)}
      ref={elementRef as RefObject<HTMLDivElement>}
      tabIndex={0}
      aria-label='Бургер меню'
      aria-expanded={isOpen ? true : false}
    >
      <Button variant='primary' onClick={() => setOpen(!isOpen)}>
        <div className={cn(styles.button)}>
          <SearchParamsIcon />
          <Typography variant='t16-12px400' color='gold'>
            Фильтры
          </Typography>
        </div>
      </Button>
      {/* <HeaderBurgerButton onClick={() => setOpen(!isOpen)} isActive={isOpen} /> */}

      {isOpen && (
        <motion.div
          className={cn(styles.header_burger__container)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          aria-label='Навигационное меню'
        >
          <SearchParams {...props} />
        </motion.div>
      )}
    </div>
  );
};
