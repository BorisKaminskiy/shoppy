import { FC } from "react";
import { ISvgProps } from "./types";

const ArrowDownIcon: FC<ISvgProps> = ({ ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='14'
      height='8'
      fill='#000'
      {...props}
    >
      <path d='M12.655.104a.35.35 0 0 1 .497 0l.742.741a.336.336 0 0 1 0 .49L7.462 7.767a.525.525 0 0 1-.371.154h-.182a.525.525 0 0 1-.37-.154L.105 1.335a.336.336 0 0 1 0-.49L.848.104a.35.35 0 0 1 .497 0L7 5.759 12.655.104Z' />
    </svg>
  );
};

export default ArrowDownIcon;
