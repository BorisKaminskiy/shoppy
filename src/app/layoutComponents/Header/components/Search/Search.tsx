"use client";

import { FC, useState, useEffect, ChangeEvent } from "react";
import { useWindowSize } from "@/hooks/useWindowResize";
import SearchInput from "../SearchInput/SearchInput";
import SearchIcon from "@/assets/icons/SearchIcon";
import cn from "classnames";
import styles from "./Search.module.scss";

// interface I___Props {}

const Search: FC = ({ ...props }) => {
  const windowSize = useWindowSize();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const onClearClick = () => {
    setValue("");

    Number(windowSize.width) > 1000 && setIsOpen(!isOpen);
  };

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const onSearchClick = () => {
    setValue("");
  };

  return (
    <div
      className={cn(styles.root)}
      tabIndex={0}
      aria-label='Поиск'
      aria-expanded={Number(windowSize.width) > 1000 && isOpen ? true : false}
      {...props}
    >
      {Number(windowSize.width) > 1000 && (
        <div
          className={cn(
            styles.root_header,
            isOpen ? styles.root_open : styles.root_close
          )}
        >
          <SearchInput
            value={value}
            onChange={onSearchChange}
            onClearClick={onClearClick}
            onSearchClick={onSearchClick}
          />
        </div>
      )}
      {Number(windowSize.width) <= 1000 && (
        <div className={cn(styles.root_section)}>
          <SearchInput
            value={value}
            onChange={onSearchChange}
            onClearClick={onClearClick}
            onSearchClick={onSearchClick}
          />
        </div>
      )}

      {/* {Number(windowSize.width) > 1000 && ( */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(isOpen ? styles.button_hidden : styles.button)}
      >
        <SearchIcon />
      </button>
      {/* )} */}
    </div>
  );
};

export default Search;
