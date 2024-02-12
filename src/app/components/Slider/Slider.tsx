import { FC } from "react";
import cn from "classnames";
import styles from "./Slider.module.scss";
import { getImagesForSlider } from "@/api/slider";
import SliderContainer from "./components/SliderContainer/SliderContainer";

const Slider: FC = async () => {
  const images = await getImagesForSlider();
  
  return (
    <div className={cn(styles.root)}>
      <SliderContainer images={images} />
    </div>
  );
};

export default Slider;
