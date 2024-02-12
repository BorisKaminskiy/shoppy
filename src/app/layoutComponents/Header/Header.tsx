import { FC } from "react";
import cn from "classnames";
import styles from "./Header.module.scss";
import Logo from "./components/Logo/Logo";
import Search from "./components/Search/Search";
import BusketModule from "./components/BusketModulle/BusketModule";
import FavoritiesModule from "./components/FavoritiesModule/FavoritiesModule";
import UserModule from "./components/UserModule/UserModule";
import NavLink from "./components/NavLink/NavLink";
import HeaderBurger from "./components/HeaderBurger/HeaderBurger";

const Header: FC = () => {
  return (
    <header className={cn(styles.root)}>
      <div className={cn(styles.logo_desktop)}>
        <Logo variant={35} />
      </div>
      <div className={cn(styles.logo_mobile)}>
        <Logo variant={25} />
      </div>

      <div className={cn(styles.navigation_desktop)}>
        <nav
          className={cn(styles.navigation_links)}
          tabIndex={0}
          aria-label='Навигационные ссылки'
        >
          <NavLink variant='shop' />
          <NavLink variant='about' />
        </nav>
        <div className={cn(styles.wrapper)}>
          <Search />
          <nav
            className={cn(styles.navigation_links_icons)}
            tabIndex={0}
            aria-label='Навигационные ссылки'
          >
            <BusketModule />
            <FavoritiesModule />
            <UserModule />
          </nav>
        </div>
      </div>
      <div className={cn(styles.navigation_mobile)}>
        <BusketModule />
        <HeaderBurger />
      </div>
    </header>
  );
};

export default Header;
