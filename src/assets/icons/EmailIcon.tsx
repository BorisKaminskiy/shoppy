import { FC } from "react";
import { ISvgProps } from "./types";

const EmailIcon: FC<ISvgProps> = ({ ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='22'
      height='18'
			fill='#707070'
			{...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M19.125.947h-17C.951.947 0 1.848 0 2.96v12.08c0 1.111.951 2.013 2.125 2.013h17c1.174 0 2.125-.902 2.125-2.014V2.96c0-1.111-.951-2.012-2.125-2.012Zm0 2.014V5.88l-7.81 5.184a1.267 1.267 0 0 1-1.38 0L2.124 5.88V2.96h17Zm-17 5.033v7.046h17V7.994l-6.747 4.47a3.2 3.2 0 0 1-3.506 0l-6.747-4.47Z'
      />
    </svg>
  );
};

export default EmailIcon;
