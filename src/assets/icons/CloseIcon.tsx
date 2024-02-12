import { FC } from "react";
import { ISvgProps } from "./types";

const CloseIcon: FC<ISvgProps> = ({ variant, ...props }) => {
  switch (variant) {
    case 12:
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='14'
          height='14'
          fill='#000'
          {...props}
        >
          <path d='M1.4 14 0 12.6 5.6 7 0 1.4 1.4 0 7 5.6 12.6 0 14 1.4 8.4 7l5.6 5.6-1.4 1.4L7 8.4 1.4 14Z' />
        </svg>
      );
    case 32:
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='32'
          height='32'
          fill='#000'
          {...props}
        >
          <path d='M3.2 32 0 28.8 12.8 16 0 3.2 3.2 0 16 12.8 28.8 0 32 3.2 19.2 16 32 28.8 28.8 32 16 19.2 3.2 32Z' />
        </svg>
      );
  }
};

export default CloseIcon;
