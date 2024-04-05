import { FC } from "react";
import cn from "classnames";
import styles from "./ItemAbout.module.scss";
import { IAboutData } from "../../data";
import Htag from "@/ui/Htag/Htag";
import Image from 'next/image';
import Typography from '@/ui/Typography/Typography';

// interface I___Props {}

const ItemAbout: FC<IAboutData> = ({
  title,
  img,
  paragraph1,
  paragraph2,
  paragraph3,
}) => {
  return (
    <div className={cn(styles.root)}>
      <Htag tag='h2'>{title}</Htag>
      <div className={cn(styles.image)}>
        <Image src={img} alt='about image' />
      </div>
      <div className={cn(styles.paragraph)}>
        <Typography variant='t16-12px400'>{paragraph1}</Typography>
        {paragraph2 && (
          <Typography variant='t16-12px400'>{paragraph2}</Typography>
        )}
        {paragraph3 && (
          <Typography variant='t16-12px400'>{paragraph3}</Typography>
        )}
      </div>
    </div>
  );
};

export default ItemAbout;
