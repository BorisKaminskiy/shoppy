import { create } from 'zustand'

export interface IParamsProps {
	limit?: number,
	offset?: string,
	name?: string,
	priceMin?: number | null,
	priceMax?: number | null,
	categoryId?: number | null,
	discounted?: boolean
}

interface IUseSearchParamsStateProps {
	params: IParamsProps
	changeOffset: (offset: number) => void
	changeName: (name: string) => void
	changeMinPrice: (priceMin: number) => void
	changeMaxPrice: (priceMax: number) => void
	changeCategory: (categoryId: number) => void
	changeDiscounted: (discounted: boolean) => void
}

export const useSearchParamsState = create<IUseSearchParamsStateProps>(set => (
	{
		params: {
			limit: 1000,
			offset: '0',
			name: '',
			priceMin: null,
			priceMax: null,
			categoryId: null,
			discounted: false
		},
		changeOffset: (offset: number) => set(state => {
			return {params: {...state.params, offset: String(offset)}}
		}),
		changeName: (name) => set(state => {
			return {params: {...state.params, name}}
		}),
		changeMinPrice: (priceMin) => set(state => {
			return {params: {...state.params, priceMin}}
		}),
		changeMaxPrice: (priceMax) => set(state => {
			return {params: {...state.params, priceMax}}
		}),
		changeCategory: (categoryId) => set(state => {
			return {params: {...state.params, categoryId}}
		}),
		changeDiscounted: (discounted) => set(state => {
			return {params: {...state.params, discounted}}
		}),
	} 
))
