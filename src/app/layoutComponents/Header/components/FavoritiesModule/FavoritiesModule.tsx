"use client";

import { FC } from "react";
import cn from "classnames";
import styles from "./FavoritiesModule.module.scss";
import Link from "next/link";
import { LinkProps } from 'next/link';
import FavoriteIcon from "@/assets/icons/FavoriteIcon";
import Typography from "@/ui/Typography/Typography";
import { useWindowSize } from "@/hooks/useWindowResize";

interface IFavoritiesModuleProps {
  onClick?: () => void
}

const FavoritiesModule: FC<IFavoritiesModuleProps> = ({ ...props }) => {
  const windowSize = useWindowSize();
  let count = 12;

  return (
    <Link
      href={"/favorities"}
      aria-label='Навигационная ссылка избранные товары'
      className={ cn(styles.root) }
      {...props}
    >
      <div className={cn(styles.container)}>
        <FavoriteIcon className={cn(styles.icon)} />

        {!!count && (
          <div className={cn(styles.label)}>
            <Typography variant='t7px400' color='black'>
              {count}
            </Typography>
          </div>
        )}
      </div>

      {Number(windowSize.width) < 1000 && (
        <Typography variant='t16-20px400'>Избранное</Typography>
      )}
    </Link>
  );
};

export default FavoritiesModule;
