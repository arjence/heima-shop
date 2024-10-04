import { http } from './index'

export const postMemberCartApi = (data: { skuId: string; count: number }) => {
  return http.post({ url: '/member/cart', data })
}

export const getMemberCartApi = <T>() => {
  return http.get<T>({ url: '/member/cart' })
}
