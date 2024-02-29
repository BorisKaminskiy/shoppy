import { FC } from "react";
import cn from "classnames";
import styles from "./root.module.scss";
import Htag from "@/ui/Htag/Htag";
import Typography from "@/ui/Typography/Typography";
import Button from "@/ui/Button/Button";
import Link from "next/link";

const Notfound: FC = () => {
  return (
    <div className={cn(styles.notfound)}>
      <div className={cn(styles.notfound_container)}>
        <Htag tag='h1' color='black' className={cn(styles.notfound_children)}>
          404 ошибка
        </Htag>
        <Typography
          variant='t20-18px400'
          color='gray30'
          isCenter
          className={cn(styles.notfound_children)}
        >
          Страница не найдена, попробуйте перейти на главную страницу
        </Typography>
        <Link href={"/"}>
          <Button variant='secondary' size='large' width={187}>
            Главная страница
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Notfound;
