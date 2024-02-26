import { IReviewProps } from './review'

export interface IProductProps {
	name: string
	price: number
	discount?: number
	description: string
	images: string[]
	categoryId: number
	sku: number
	reviews?: IReviewProps[] | []
}

export interface IProductsResponseProps {
	totalProducts: number
	limit: number
	offset: number
	products: IProductProps[] | []
}