"use client";

import { FC } from "react";
import cn from "classnames";
import styles from "./FavoritiesModule.module.scss";
import Link from "next/link";
import { LinkProps } from "next/link";
import FavoriteIcon from "@/assets/icons/FavoriteIcon";
import Typography from "@/ui/Typography/Typography";
import { useWindowSize } from "@/hooks/useWindowResize";
import { useFavoritiesState } from "@/store/favorities";

interface IFavoritiesModuleProps {
  onClick?: () => void;
}

//wil be added to store, temp

const FavoritiesModule: FC<IFavoritiesModuleProps> = ({ ...props }) => {
  const { isMobile } = useWindowSize();
  const favorities = useFavoritiesState(state => state.favorities);

  return (
    <Link
      href={"/favorities"}
      aria-label='Навигационная ссылка избранные товары'
      className={cn(styles.root)}
      {...props}
    >
      <div className={cn(styles.container)}>
        <FavoriteIcon className={cn(styles.icon)} />

        {!!favorities && (
          <div className={cn(styles.label)}>
            <Typography variant='t7px400' color='black'>
              {favorities.size}
            </Typography>
          </div>
        )}
      </div>

      {isMobile && <Typography variant='t16-20px400'>Избранное</Typography>}
    </Link>
  );
};

export default FavoritiesModule;
