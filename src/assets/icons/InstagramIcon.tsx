import { FC } from "react";
import { ISvgProps } from "./types";

const InstagramIcon: FC<ISvgProps> = ({ ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='18'
      height='18'
      fill='#707070'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13 0H5a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5Zm3.25 13A3.26 3.26 0 0 1 13 16.25H5A3.26 3.26 0 0 1 1.75 13V5A3.26 3.26 0 0 1 5 1.75h8A3.26 3.26 0 0 1 16.25 5v8Zm-2.5-7.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM9 4.5A4.5 4.5 0 1 0 13.5 9 4.49 4.49 0 0 0 9 4.5ZM6.25 9a2.75 2.75 0 1 0 5.5 0 2.75 2.75 0 0 0-5.5 0Z'
      />
    </svg>
  );
};

export default InstagramIcon;
