import { FC } from "react";
import { ISvgProps } from "./types";

const EyeIcon: FC<ISvgProps> = ({ ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      fill='#000'
      stroke='#000'
      {...props}
    >
      <path
        d='m2.125 16 1.637 1.637c6.75 6.75 17.732 6.75 24.482 0L29.875 16l-1.637-1.637c-6.75-6.75-17.732-6.75-24.482 0L2.125 16ZM16 23.887a18.445 18.445 0 0 1-13.081-5.412L.862 16.419a.6.6 0 0 1 0-.844l2.057-2.056c7.212-7.213 18.95-7.213 26.162 0l2.056 2.056a.6.6 0 0 1 0 .844l-2.056 2.056A18.445 18.445 0 0 1 16 23.887Z'
        strokeWidth='.3'
      />
      <path
        d='M16 11.469A4.534 4.534 0 0 0 11.469 16c0 2.5 2.031 4.531 4.531 4.531 2.5 0 4.531-2.031 4.531-4.531 0-2.5-2.031-4.531-4.531-4.531Zm0 10.25A5.726 5.726 0 0 1 10.281 16 5.726 5.726 0 0 1 16 10.281 5.73 5.73 0 0 1 21.719 16 5.722 5.722 0 0 1 16 21.719Z'
        strokeWidth='.3'
      />
    </svg>
  );
};

export default EyeIcon;
