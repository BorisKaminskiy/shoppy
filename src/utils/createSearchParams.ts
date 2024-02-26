
import { IParamsProps } from '@/store/store'

export const createSearchParams = (params: IParamsProps | {}): string => {
	const searchParams = new URLSearchParams()
	!!Object.keys(params)?.length 
		Object.keys(params)
				.map(
					(param) =>
						!!params[param] && searchParams.set(param, params[param].toString())
	)
	
	return searchParams.toString()
}