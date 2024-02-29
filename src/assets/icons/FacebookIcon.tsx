import { FC } from "react";
import { ISvgProps } from "./types";

const FacebookIcon: FC<ISvgProps> = ({ ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='10'
      height='18'
      fill='#707070'
      {...props}
    >
      <path d='M9.5 2.842h-3c-.552 0-1 .424-1 .948v2.842h4a.357.357 0 0 1 .29.134c.067.087.086.2.05.302L9.1 9.152a.498.498 0 0 1-.47.322H5.5v7.106a.487.487 0 0 1-.5.473H2.5a.487.487 0 0 1-.5-.473V9.474H.5A.487.487 0 0 1 0 9V7.106c0-.262.224-.474.5-.474H2V3.79C2 1.697 3.79 0 6 0h3.5c.276 0 .5.212.5.474v1.895a.487.487 0 0 1-.5.473Z' />
    </svg>
  );
};

export default FacebookIcon;
