import { FC } from "react";
import cn from "classnames";
import styles from "./NavLink.module.scss";
import Link from "next/link";
import Typography from "@/ui/Typography/Typography";
import { TNavLink } from "./navigationItems";
import { navigationItems } from "./navigationItems";

interface INavLink {
  variant: TNavLink;
  onClick?: () => void
}

const NavLink: FC<INavLink> = ({ variant, onClick }) => {
  const link = navigationItems.find((item) => item.link === variant);

  return (
    <>
      {!!link && (
        <Link
          href={ link.href }
          onClick={onClick}
          aria-label={`Навигационная ссылка ${link.title}`}
          className={cn(styles.root)}
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
