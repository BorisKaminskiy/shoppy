import { FC } from "react";
import { ISvgProps } from "./types";

const SuccessIcon: FC<ISvgProps> = ({ ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      fill='#A18A68'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0 10C0 4.477 4.477 0 10 0A10 10 0 1 1 0 10Zm8.73 3.35 5.62-5.62a.5.5 0 0 0 0-.69l-.53-.53a.5.5 0 0 0-.7 0l-4.74 4.74-1.5-1.49a.48.48 0 0 0-.7 0l-.53.53a.5.5 0 0 0 0 .71l2.38 2.35a.48.48 0 0 0 .7 0Z'
      />
    </svg>
  );
};

export default SuccessIcon;
