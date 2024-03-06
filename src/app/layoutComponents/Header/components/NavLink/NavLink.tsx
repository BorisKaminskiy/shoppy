'use client'

import { FC } from "react";
import cn from "classnames";
import styles from "./NavLink.module.scss";
import Link from "next/link";
import Typography from "@/ui/Typography/Typography";
import { TNavLink } from "./navigationItems";
import { navigationItems } from "./navigationItems";
import { usePathname } from 'next/navigation';

interface INavLink {
  variant: TNavLink;
  onClick?: () => void
}

const NavLink: FC<INavLink> = ({ variant, onClick }) => {
  const link = navigationItems.find((item) => item.link === variant);
  const pathName = usePathname()

  return (
    <>
      {!!link && (
        <Link
          href={ link.href }
          onClick={onClick}
          aria-label={`Навигационная ссылка ${link.title}`}
          className={cn(styles.root, link.href === pathName && styles.active)}
        >
          <Typography variant='t16-20px400' color='black'>
            {link.title}
          </Typography>
        </Link>
      )}
    </>
  );
};

export default NavLink;
