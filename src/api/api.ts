import { IFilterProps } from '@/types/filter'
import { IProductsResponseProps } from '@/types/products'
import { IProductProps } from '@/types/products'
import { IParamsProps } from '@/store/store'
import { endpoints } from './endpoints'

export const API = {
	getFilter: async (): Promise<IFilterProps | void> => {
	try {
		const filter = await fetch(endpoints.products.getFilter, {
			// next: {
			// 	revalidate: 60000,
			// }
		})
			if (!filter.status) {
				throw new Error ('Ошибка получения данных') 
			}
			return filter.json()
	} catch (error) {
		return console.error(error) 
	}
	},
	getProducts: async (searchParams: string): Promise<IProductsResponseProps | undefined> => {
		try {
		const products = await fetch(endpoints.products.getProducts
			+ `?${searchParams}`,
			{
			// next: {
			// 	revalidate: 60000,
			// }
		})
		if (!products.status) {
		  throw new Error ('Ошибка получения данных') 
		}
		return products.json()
	} catch (error) {
		console.error(error) 
	}
	},
	getProductBySku: async (sku: number): Promise<IProductProps | void> => {
	try {
		const product = await fetch(endpoints.products.getProductBySku
			+ `/${sku}`
			, {
			// next: {
			// 	revalidate: 60000,
			// }
		})
		if (!product.status) {
		  throw new Error ('Ошибка получения данных') 
		}
		return product.json()
	} catch (error) {
		return console.error(error) 
	}
	},
}