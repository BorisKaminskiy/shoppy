"use client";

import { FC } from "react";
import cn from "classnames";
import styles from "./Slider.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";

import img1 from "../../../assets/img/Img 1.png";
import img2 from "../../../assets/img/Img 2.png";

const images = [
  {
    src: img1,
  },
  {
    src: "https://cdn.freshfruitportal.com/2020/10/Fruta-shutterstock_116466427.jpg",
  },
];

const Slider: FC = () => {
  return (
    <div className={cn(styles.root)}>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <Image src={img1} alt='image' className={cn(styles.image)} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img2} alt='image' className={cn(styles.image)} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
