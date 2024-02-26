import { FC } from "react";
import cn from "classnames";
import styles from "./BusketModule.module.scss";
import Link from "next/link";
import BusketIcon from "@/assets/icons/BusketIcon";
import Typography from "@/ui/Typography/Typography";

//under construction, will be added to store, temp
let count = 12;

const BusketModule: FC = () => {
  
  return (
    <Link
      href={"/busket"}
      className={cn(styles.root)}
      aria-label='Навигационная ссылка корзина товаров'
    >
      <BusketIcon />
      {!!count && (
        <div className={cn(styles.label)}>
          <Typography variant='t7px400' color='black'>
            {count}
          </Typography>
        </div>
      )}
    </Link>
  );
};

export default BusketModule;
