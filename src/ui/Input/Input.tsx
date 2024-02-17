import { DetailedHTMLProps, FC, InputHTMLAttributes, MouseEventHandler } from "react";
import cn from "classnames";
import styles from "./Input.module.scss";

import { TIconType } from "@/types/icons";
import { setIcon } from "@/utils/setIcon";

interface IInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  variant: "primary" | "secondary";
  kind?: "email";
  label?: string;
  value: string;
  iconButton?: TIconType;
  onButtonClick?: () => void;
  iconSize?: number;
  error?: string | null;
}

const Input: FC<IInputProps> = ({
  variant = "primary",
  label,
  value,
  name,
  iconButton,
  onButtonClick,
  iconSize,
  error,
  ...props
}) => {

 

  return (
    <label className={cn(styles.root)} aria-label={label}>
      {!!label && (
        <span className={cn(styles.label, styles[`label_${variant}`])}>
          {label}
        </span>
      )}
      <input
        className={cn(styles.input, styles[variant])}
        name={name}
        value={value}
        {...props}
      />
      {!!iconButton && (
        <button onClick={onButtonClick} className={cn(styles.icon_container)}>
          {setIcon(iconButton, iconSize)}
        </button>
      )}
      {!!error && <span className={cn(styles.error)}>{error}</span>}
    </label>
  );
};

export default Input;
