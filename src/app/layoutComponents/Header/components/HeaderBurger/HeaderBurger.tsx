"use client";

import cn from "classnames";
import { FC, RefObject } from "react";
import Search from "../Search/Search";
import HeaderBurgerButton from "../HeaderBurgerButton/HeaderBurgerButton";
import NavLink from "../NavLink/NavLink";
import UserModule from "../UserModule/UserModule";
import FavoritiesModule from "../FavoritiesModule/FavoritiesModule";
import ExitIcon from "@/assets/icons/ExitIcon";
import Typography from "@/ui/Typography/Typography";
import { useElementToogle } from "@/hooks/useSetElementToogle";
import { motion } from "framer-motion";

import styles from "./HeaderBurger.module.scss";

const HeaderBurger: FC = () => {
  const { isOpen, setOpen, elementRef } = useElementToogle();
  let user = true;

  const onLinkClick = () => {
    setOpen(false);
  };

  const onExitButtonClick = () => {};

  return (
    <div
      className={cn(styles.header_burger)}
      ref={elementRef as RefObject<HTMLDivElement>}
      tabIndex={0}
      aria-label='Бургер меню'
      aria-expanded={isOpen ? true : false}
    >
      <HeaderBurgerButton onClick={() => setOpen(!isOpen)} isActive={isOpen} />

      {isOpen && (
        <motion.div
          className={cn(styles.header_burger__container)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          // onClick={() => setOpen(!isOpen)}
          aria-label='Навигационное меню'
        >
          <Search />
          <nav className={cn(styles.links)}>
            <NavLink variant='main' onClick={onLinkClick} />
            <NavLink variant='shop' onClick={onLinkClick} />
            <NavLink variant='about' onClick={onLinkClick} />
          </nav>
          <nav className={cn(styles.icon_links)}>
            <UserModule onClick={onLinkClick} />
            <FavoritiesModule onClick={onLinkClick} />
          </nav>
          {!!user && (
            <button
              onClick={onExitButtonClick}
              className={cn(styles.button_exit)}
              aria-label='Выход из аккаунта'
            >
              <ExitIcon />
              <Typography variant='t16-20px400'>Выход</Typography>
            </button>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default HeaderBurger;
