"use client";

import { FC, ChangeEvent, useState } from "react";
import cn from "classnames";
import styles from "./SearchParams.module.scss";
import Input from "@/ui/Input/Input";
import Select from "@/ui/Select/Select";
import { IFilterParamsProps } from "@/api/getFilter";
import Range from "@/ui/Range/Range";
import Toggle from "@/ui/Toggle/Toggle";

const SearchParams: FC<IFilterParamsProps> = ({
  categories,
  minPrice,
  maxPrice,
  ...props
}) => {
  const [value, setValue] = useState<number>(minPrice);
  const [isEnabled, setEnabled] = useState<boolean>(false);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const onSelectChange = (id: number) => {
    console.log(id);
  };

  const onRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
    Number(e.target.value) > minPrice
      ? setValue(Number(e.target.value))
      : setValue(minPrice);
  };

  const onRangeClick = () => {
    setValue(minPrice);
  };

  const onTogle = () => {
    setEnabled(!isEnabled);
    console.log(isEnabled);
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
        // iconButton='search'
        // iconSize={19}
        value='vccvxc'
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
        aria-label='Изменение диапозона цены'
      />
      <Toggle
        isEnabled={isEnabled}
        setEnabled={onTogle}
        label='Со скидкой'
        aria-label={`Cо скидкой ${isEnabled ? "включено" : "выключено"}`}
      />
    </div>
  );
};

export default SearchParams;
