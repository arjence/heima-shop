import { http } from './index'

export const postMemberCartApi = (data: { skuId: string; count: number }) => {
  return http.post({ url: '/member/cart', data })
}

export const getMemberCartApi = <T>() => {
  return http.get<T>({ url: '/member/cart' })
}

export const deleteMemberCartBySkuIdsApi = (ids: string[]) => {
  return http.delete({ url: '/member/cart', data: { ids } })
}

export const putMemberCartBySkuIdApi = (
  skuId: string,
  data: { count?: number; selected?: boolean },
) => {
  return http.put({ url: `/member/cart/${skuId}`, data })
}

export const putMemberCartSelectedApi = (selected: boolean) => {
  return http.put({ url: `/member/cart/selected`, data: { selected } })
}
