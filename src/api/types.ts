import { IOptionProps } from '@/ui/Select/Select';

export interface IFilterParamsProps {
  categories: IOptionProps[];
  minPrice: number;
  maxPrice: number;
}