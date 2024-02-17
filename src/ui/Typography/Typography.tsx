import { DetailedHTMLProps, FC, ReactNode, HTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Typography.module.scss";
import { TColors } from "../../types/colors";

interface ITypographyProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  variant:
    | "t16-20px400"
    | "t7px400"
    | "t16-12px400"
    | "t16px169"
    | "t20-18px400"
    | "t16px700"
    | "t14px400";
  children: ReactNode;
  isUppercase?: boolean;
  isCenter?: boolean;
  isBold?: boolean;
  color?: TColors;
}

const Typography: FC<ITypographyProps> = ({
  variant,
  color = "inherit",
  children,
  isUppercase,
  isCenter,
  isBold,
  ...props
}): JSX.Element => {
  return (
    <span
      className={cn(
        styles.root,
        styles[variant],
        isBold && styles[`${variant}_bold`]
      )}
      style={{
        color: `var(--${color})`,
        textTransform: isUppercase ? "uppercase" : "none",
        textAlign: isCenter ? "center" : "inherit",
      }}
      {...props}
    >
      {children}
    </span>
  );
};

export default Typography;
