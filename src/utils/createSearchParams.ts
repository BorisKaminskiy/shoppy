import { IParamsProps } from '@/store/store'
import { TParams } from '@/store/store'

export const createSearchParams = (params: IParamsProps): string => {
	const searchParams = new URLSearchParams()
	const keys = Object.keys(params) as TParams[] | undefined 
	keys?.length &&
		keys.map((param) =>
						(!!params[param]) && searchParams.set(param, params[param].toString())
	)
	
	return searchParams.toString()
}