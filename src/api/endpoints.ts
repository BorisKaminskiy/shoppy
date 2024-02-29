const mainUrl = process.env.NEXT_PUBLIC_DOMAIN

export const endpoints = {
	products: {
		getFilter: mainUrl + '/products/get-filter',
		getProducts: mainUrl + '/products',
		getProductBySku: mainUrl + '/products/sku'
	}
}