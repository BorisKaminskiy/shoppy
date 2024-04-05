interface Favorities {
	favoritiesSku: Set<number>

}

class Favorities {
	constructor() {
		this.favoritiesSku = new Set()
	}

	getAllFAvorities() {
		return this.favoritiesSku
	}
	
	checkSkuInFavorities(sku: number) {
		return this.favoritiesSku.has(sku)
	}

	addToFavorities(sku: number) {
		this.favoritiesSku.add(sku)
	}

	removeFromFavorities(sku: number) {
		this.favoritiesSku.delete(sku)
	}
} 

export const favorities = new Favorities()