import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import cn from "classnames";
import styles from "./HeaderBurgerButton.module.scss";

interface IHeaderBurgerButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isActive: boolean;
}

const HeaderBurgerButton: FC<IHeaderBurgerButtonProps> = ({
  isActive,
  ...props
}) => {
  return (
    <button
      className={cn(styles.root, isActive && styles.active)}
      type='button'
      aria-label='Бургер меню'
      {...props}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default HeaderBurgerButton;
