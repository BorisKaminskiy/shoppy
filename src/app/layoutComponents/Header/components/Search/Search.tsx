"use client";

import { FC, useState, useEffect, ChangeEvent } from "react";
import { useWindowSize } from "@/hooks/useWindowResize";
import { useSearchParamsState } from "@/store/store";
import SearchInput from "../SearchInput/SearchInput";
import SearchIcon from "@/assets/icons/SearchIcon";
import cn from "classnames";
import styles from "./Search.module.scss";

const Search: FC = ({ ...props }) => {
  const { isDesktop, isMobile } = useWindowSize();
  const { params, changeName } = useSearchParamsState();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const onClearClick = () => {
    changeName("");
    isDesktop && setIsOpen(!isOpen);
  };

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    changeName(e.currentTarget.value);
  };

  const onSearchClick = () => {
    setValue("");
  };

  return (
    <div
      className={cn(styles.root)}
      tabIndex={0}
      aria-label='Поиск'
      aria-expanded={isDesktop && isOpen ? true : false}
      {...props}
    >
      {isDesktop && (
        <div
          className={cn(
            styles.root_header,
            isOpen ? styles.root_open : styles.root_close
          )}
        >
          <SearchInput
            value={params.name}
            onChange={onSearchChange}
            onClearClick={onClearClick}
            onSearchClick={onSearchClick}
          />
        </div>
      )}
      {isMobile && (
        <div className={cn(styles.root_section)}>
          <SearchInput
            value={value}
            onChange={onSearchChange}
            onClearClick={onClearClick}
            onSearchClick={onSearchClick}
          />
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(isOpen ? styles.button_hidden : styles.button)}
      >
        <SearchIcon />
      </button>
    </div>
  );
};

export default Search;
