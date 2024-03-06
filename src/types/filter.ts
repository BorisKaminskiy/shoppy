import { IOptionProps } from '@/ui/Select/Select'

export interface IFilterProps {
	categories: IOptionProps[]
	maxPrice: number
	minPrice: number
}