import { FC } from "react";
import { ISvgProps } from "./types";

const UserIcon: FC<ISvgProps> = ({ ...props }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='16' height='19' fill='#000' {...props}>
      <path d='M4.25 3.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Zm8.751 5h-.691l-3.889 7.895 1.454-7.27L8 7.5 6.125 9.375l1.454 7.27L3.69 8.75h-.692c-2.5 0-2.5 1.68-2.5 3.75v6.25h15V12.5c0-2.07 0-3.75-2.498-3.75h.001Z' />
    </svg>
  );
};

export default UserIcon;
