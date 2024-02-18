import { endpoints } from './endpoints';
import { IOptionProps } from "@/ui/Select/Select";

export interface IFilterParamsProps {
  categories: IOptionProps[];
  minPrice: number;
  maxPrice: number;
}

export const getFilter = async () => {

	try {
		const filter = await fetch(endpoints.products.getFilter)
		if (!filter.status) {
		  throw new Error ('Ошибка получения данных') 
		}
		return filter.json()
	} catch (error) {
		return console.error(error) 
	}
}