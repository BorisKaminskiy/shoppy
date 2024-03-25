import { IFilterProps } from '@/types/filter'
import { IProductsResponseProps } from '@/types/products'
import { IProductProps } from '@/types/products'
import { IParamsProps } from '@/store/store'
import { endpoints } from './endpoints'

export const API = {
	getFilter: async (): Promise<IFilterProps | void> => {
	try {
		const filter = await fetch(endpoints.products.getFilter, {
			next: {
				revalidate: 60000,
			}
		})
		
		if (filter.status !== 200) {
				throw new Error ('Ошибка получения данных') 
			}
			return filter.json()
	} catch (error) {
		return console.error(error) 
	}
	},
	getProducts: async (searchParams: string = 'limit=1000&offset=0'): Promise<IProductsResponseProps | undefined> => {
		try {
		const products = await fetch(endpoints.products.getProducts
			+ `?${searchParams}`,
			{
			next: {
				revalidate: 10,
			}
			})
			
			
		if (products.status !== 200) {
		  throw new Error ('Ошибка получения данных') 
			}
			
		return products.json()
	} catch (error) {
		console.error(error) 
	}
	},
	getProductBySku: async (sku: number): Promise<IProductProps | void> => {
		// console.log(endpoints.products.getProductBySku + `/${sku}`)
	try {
		const product = await fetch(endpoints.products.getProductBySku
			+ `/${sku}`
			, {
			// next: {
			// 	revalidate: 60000,
			// }
			})
				
		if (product.status !== 200) {
		  throw new Error ('Ошибка получения данных') 
		}
		return product.json()
	} catch (error) {
		return console.error(error) 
	}
	},
}