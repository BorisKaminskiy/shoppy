import { FC } from "react";
import { ISvgProps } from "./types";

const LinkedinIcon: FC<ISvgProps> = ({ ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='19'
      height='18'
      fill='#707070'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0 2.118a2.118 2.118 0 1 1 4.235 0 2.118 2.118 0 0 1-4.235 0Zm18.53 8.904a4.881 4.881 0 0 0-3.76-4.828 4.722 4.722 0 0 0-4.182 1.133v-.445a.53.53 0 0 0-.53-.53H7.413a.53.53 0 0 0-.53.53V17.47c0 .293.237.53.53.53h2.647a.53.53 0 0 0 .53-.53V11.5a2.192 2.192 0 0 1 1.757-2.203 2.118 2.118 0 0 1 2.478 2.118v6.057c0 .292.237.529.529.529H18a.53.53 0 0 0 .53-.53v-6.448ZM4.234 6.882V17.47a.53.53 0 0 1-.53.53H1.06a.53.53 0 0 1-.53-.53V6.883a.53.53 0 0 1 .53-.53h2.647a.53.53 0 0 1 .53.53Z'
      />
    </svg>
  );
};

export default LinkedinIcon;
