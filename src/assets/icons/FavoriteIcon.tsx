import { FC } from "react";
import { ISvgProps } from "./types";

const FavoriteIcon: FC<ISvgProps> = ({ ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='21'
      height='21'
      fill='#000'
      {...props}
    >
      <path d='M14.325 3v-.5h-.016l.016.5ZM10.5 4.79l-.372.333.372.415.372-.415-.372-.334ZM6.675 3l.016-.5h-.016V3ZM7.95 16.828l.356-.35-.356.35ZM9.888 18.8l.357-.35-.357.35Zm.45.19v.5-.5Zm.324 0v.5-.5Zm.45-.19-.357-.35.357.35Zm1.938-1.97-.357-.351.357.35ZM14.31 2.5a5.868 5.868 0 0 0-4.182 1.955l.744.668A4.869 4.869 0 0 1 14.341 3.5l-.032-1Zm-3.438 1.955A5.868 5.868 0 0 0 6.691 2.5l-.032 1a4.869 4.869 0 0 1 3.469 1.623l.744-.668ZM6.675 2.5C3.809 2.5 1.5 4.86 1.5 7.754h1C2.5 5.396 4.377 3.5 6.675 3.5v-1ZM1.5 7.754c0 1.871 1.104 3.769 2.363 5.386 1.272 1.631 2.789 3.081 3.73 4.039l.713-.701c-.97-.987-2.428-2.38-3.654-3.953C3.415 10.937 2.5 9.27 2.5 7.754h-1Zm6.094 9.425 1.938 1.97.713-.7-1.939-1.971-.712.701Zm1.937 1.97c.213.217.503.34.807.34v-1a.132.132 0 0 1-.093-.04l-.714.7Zm.807.34h.324v-1h-.324v1Zm.324 0c.304 0 .594-.123.807-.34l-.714-.7a.132.132 0 0 1-.094.04v1Zm.806-.34 1.938-1.97-.713-.701-1.938 1.97.713.702Zm1.938-1.97c.942-.957 2.46-2.408 3.73-4.04 1.26-1.616 2.364-3.514 2.364-5.385h-1c0 1.516-.915 3.183-2.152 4.77-1.226 1.574-2.684 2.967-3.654 3.954l.712.701ZM19.5 7.754c0-2.894-2.31-5.254-5.175-5.254v1c2.298 0 4.175 1.896 4.175 4.254h1Z' />
    </svg>
  );
};

export default FavoriteIcon;
