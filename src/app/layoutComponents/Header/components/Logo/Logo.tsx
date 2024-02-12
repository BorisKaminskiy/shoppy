import { FC } from "react";
import cn from "classnames";
import styles from "./Logo.module.scss";
import Link from "next/link";
import LogoIcon from "@/assets/icons/LogoIcon";

interface ILogoProps {
  variant: 25 | 35;
}

const Logo: FC<ILogoProps> = ({ variant }) => {
  return (
    <Link href={"/"} tabIndex={0} aria-label='Переход на главную страницу'>
      <LogoIcon variant={variant} />
    </Link>
  );
};

export default Logo;
