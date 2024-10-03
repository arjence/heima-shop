import { http } from './index'

export const getGoodsDetailApi = <T>(id: string) => {
  return http.get<T>({ url: `/goods?id=${id}` })
}
