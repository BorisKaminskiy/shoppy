"use client";

import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
import SearchIcon from "@/assets/icons/SearchIcon";
import CloseIcon from "@/assets/icons/CloseIcon";
import { useWindowSize } from "@/hooks/useWindowResize";
import cn from "classnames";
import styles from "./SearchInput.module.scss";

interface ISearchInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  onSearchClick: () => void;
  onClearClick: () => void;
}

const SearchInput: FC<ISearchInputProps> = ({
  onSearchClick,
  onClearClick,
  value,

  ...props
}) => {
  const {isDesktop} = useWindowSize();
  

  return (
    <div className={cn(styles.root)}>
      <button
        onClick={onSearchClick}
        className={cn(styles.button_find)}
        aria-label='Поиск'
      >
        <SearchIcon variant={12} />
      </button>
      <input
        value={value}
        className={cn(styles.input)}
        type='text'
        placeholder='Поиск'
        aria-label='Строка поиска'
        {...props}
      />
      <button
        onClick={onClearClick}
        className={cn(styles.button_close)}
        aria-label={`Очистить ${
          isDesktop && "и закрыть"
        } поиск`}
      >
        <CloseIcon variant={12} fill='#707070' />
      </button>
    </div>
  );
};

export default SearchInput;
