import { IQuery } from "@/app/products/_components/QueryWrapper/QueryWrapper"


export const createQueryString = (params: IQuery): string => {
  let result = `?`
  Object.entries(params).forEach(item => {
    if (!!item[1]) result = result.concat(`${item[0]}=${item[1]}&`
    
    )
  })

  return result
}