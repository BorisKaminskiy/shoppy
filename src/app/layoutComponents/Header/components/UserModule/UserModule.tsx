"use client";

import { FC } from "react";
import cn from "classnames";
import styles from "./UserModule.module.scss";
import Link from "next/link";
import AuthIcon from "@/assets/icons/AuthIcon";
import UserIcon from "@/assets/icons/UserIcon";
import Typography from "@/ui/Typography/Typography";
import { useWindowSize } from "@/hooks/useWindowResize";

interface IUserModuleProps {
  onClick?: () => void;
}

const UserModule: FC<IUserModuleProps> = ({...props}) => {
  const {isMobile} = useWindowSize();
  let user = true;

  return (
    <Link
      href={!!user ? "/user" : "/account"}
      aria-label='Навигационная ссылка избранные товары'
      className={ cn(styles.root) }
      {...props}
    >
      {!!user ? <UserIcon /> : <AuthIcon />}

      {isMobile && (
        <Typography variant='t16-20px400'>
          {!!user ? "Мой аккаунт" : "Войти в систему"}
        </Typography>
      )}
    </Link>
  );
};

export default UserModule;
