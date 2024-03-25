"use client";

import { FC } from "react";
import Htag from "@/ui/Htag/Htag";
import Typography from "@/ui/Typography/Typography";
import ItemAbout from '../ItemAbout/ItemAbout';
import { aboutData } from '../../data';
import cn from "classnames";
import styles from "./BlockAbout.module.scss";

const BlockAbout: FC = () => {
  return (
    <div className={cn(styles.root)}>
      <Htag tag='h1'>О нас</Htag>
      <Typography
        variant='t20-14px600'
        style={{ paddingTop: "24px", paddingBottom: "46px" }}
      >
        Мы делаем шикарные украшения для вас
      </Typography>
      <Typography variant='t16-12px400'>
        Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
        sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget
        pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna et,
        placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus, ac
        sodales lectus placerat quis.
			</Typography>
			{ aboutData.map(item => <ItemAbout key={item.title} {...item} />)}
    </div>
  );
};

export default BlockAbout;
