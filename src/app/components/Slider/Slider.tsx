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
import { images } from "./items";

const Slider: FC = () => {
  return (
    <div className={cn(styles.slider_wrapper)}>
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
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <Image
                src={item.src}
                alt={item.alt}
                className={cn(styles.image)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
