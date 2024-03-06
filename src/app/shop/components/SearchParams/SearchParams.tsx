"use client";

import { FC, ChangeEvent, useEffect } from "react";
import cn from "classnames";
import styles from "./SearchParams.module.scss";
import Input from "@/ui/Input/Input";
import Select from "@/ui/Select/Select";
import { IFilterProps } from '@/types/filter';
import Range from "@/ui/Range/Range";
import Toggle from "@/ui/Toggle/Toggle";
import Button from "@/ui/Button/Button";
import { useSearchParamsState } from "../../../../store/store";
import { createSearchParams } from "@/utils/createSearchParams";
import { useRouter } from "next/navigation";

const SearchParams: FC<IFilterProps> = ({
  categories,
  minPrice,
  maxPrice,
  ...props
}) => {
  
  const {
    params,
    changeName,
    changeCategory,
    changeMinPrice,
    changeMaxPrice,
    changeDiscounted,
  } = useSearchParamsState();

  
  const router = useRouter();
  useEffect(() => {
    if (!params.priceMin && !params.priceMax) {
      changeMinPrice(minPrice);
      changeMaxPrice(maxPrice);
    }
  }, []);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    changeName(e.target.value);
  };

  const onSelectChange = (id: number) => {
    changeCategory(id);
  };

  const onRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
    changeMinPrice(Number(e.target.value));
  };

  const onTogle = () => {
    changeDiscounted(!params.discounted);
  };

  const onSearchParamsApplyClick = () => {
    router.push(`?${createSearchParams(params)}`);
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
        value={params.name}
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
        value={!!params.priceMin ? params.priceMin : Number(minPrice)}
        max={Number(maxPrice)}
        onChange={onRangeChange}
        aria-label='Изменение диапозона цены'
      />
      <Toggle
        isEnabled={params.discounted}
        setEnabled={onTogle}
        label='Со скидкой'
        aria-label={`Cо скидкой ${
          params.discounted ? "включено" : "выключено"
        }`}
      />
      <Button variant='secondary' onClick={onSearchParamsApplyClick}>
        Применить
      </Button>
    </div>
  );
};

export default SearchParams;
