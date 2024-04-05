import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from "react";
import Typography from "../Typography/Typography";
import cn from "classnames";
import styles from "./Button.module.scss";

interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  variant: "primary" | "secondary" | "icon";
  size?: "small" | "medium" | "large";
  width?: number;
  isUppercase?: boolean;
  isBold?: boolean;
}

const Button: FC<IButtonProps> = ({
  children,
  variant = "primary",
  width,
  isUppercase,
  isBold,
  ...props
}) => {
  return (
    <button
      style={{ width: width !== undefined ? `${width}px` : "inherit" }}
      className={cn(styles.root, styles[variant])}
      {...props}
    >
      <Typography variant='t16px700' isUppercase={isUppercase} isBold={isBold}>
        {children}
      </Typography>
    </button>
  );
};

export default Button;
