import { FC } from "react";
import { ISvgProps } from "./types";

const ArrowLeftIcon: FC<ISvgProps> = ({ variant, ...props }) => {
  switch (variant) {
    case 25:
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='25'
          height='9'
          fill='#707070'
          {...props}
        >
          <path d='M0 4.991v-1.25c0-.345.28-.625.625-.625h19.381v-2.5A.625.625 0 0 1 21.07.18l3.751 3.75c.24.247.24.64 0 .887l-3.751 3.75a.625.625 0 0 1-1.063-.45v-2.5H.626A.625.625 0 0 1 0 4.991Z' />
        </svg>
      );
    case 15:
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='15'
          height='6'
          fill='#707070'
        >
          <path d='M0 2.995v-.75c0-.207.168-.375.375-.375h11.629V.37a.375.375 0 0 1 .637-.263l2.251 2.25a.382.382 0 0 1 0 .533l-2.25 2.25a.375.375 0 0 1-.638-.27v-1.5H.375A.375.375 0 0 1 0 2.995Z' />
        </svg>
      );
  }
};

export default ArrowLeftIcon;
