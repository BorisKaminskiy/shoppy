import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface IUseFavoritiesStateProps {
	favorities: Set<number>,
	addToFavorities: (sku: number) => void  
	deleteFromFavorities: (sku: number) => void
}

export const useFavoritiesState = create<IUseFavoritiesStateProps>(set => (
	{
		favorities: new Set(),
		addToFavorities: (sku) => set(state => {
		
			if (!state.favorities.has(sku)) {
				return state.favorities.add(sku)
			} 
		}),
		deleteFromFavorities: (sku) => set(state=> {
			if (state.favorities.has(sku)) {
				return state.favorities.delete(sku)
			} 
		})
	} 
))

// const favorities = useFavoritiesState(state => state.favorities)
