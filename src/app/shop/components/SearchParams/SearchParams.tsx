"use client";

import { FC, ChangeEvent, useState } from "react";
import cn from "classnames";
import styles from "./SearchParams.module.scss";

import Input from "@/ui/Input/Input";
import Select from "@/ui/Select/Select";
import { IOptionProps } from "@/ui/Select/Select";
import Range from "@/ui/Range/Range";

interface ISearchParamsProps {
  categories: IOptionProps[];
  minPrice: number;
  maxPrice: number;
}

const SearchParams: FC<ISearchParamsProps> = ({
  categories,
  minPrice = 40,
  maxPrice = 180,
  ...props
}) => {
  const [value, setValue] = useState<number>(minPrice);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const onSelectChange = (id: number | string) => {};

  const onRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
    Number(e.target.value) > minPrice
      ? setValue(Number(e.target.value))
      : setValue(minPrice);
  };

  const onRangeClick = () => {
    setValue(minPrice);
  };

  return (
    <div
      className={cn(styles.root)}
      tabIndex={0}
      aria-label='Параметры поиска товаров'
    >
      <Input
        onChange={onSearchChange}
        variant='primary'
        iconButton='search'
        iconSize={19}
        value=''
        placeholder='Поиск...'
        aria-label='Поиск'
      />
      <Select
        values={categories}
        defaultValue='Категория'
        onSelectChange={onSelectChange}
        ariaLabel='Выбор категории товаров'
      />
      <Range
        min={Number(minPrice)}
        value={Number(value)}
        max={Number(maxPrice)}
        onChange={onRangeChange}
      />
    </div>
  );
};

export default SearchParams;
