import { http } from './index'

export const getMemberOrderPreApi = <T>() => {
  return http.get<T>({ url: '/member/order/pre' })
}

export const getMemberOrderPreNowApi = <T>(data: {
  count: number
  skuId: string
  addressId?: string
}) => {
  return http.get<T>({ url: '/member/order/pre/now', data })
}

type DataParams = {
  goods: Array<{
    skuId: string
    count: number
  }>
  addressId: string
  deliveryTimeType: number
  buyerMessage?: string
  /** 支付渠道：支付渠道，1支付宝、2微信--支付方式为在线支付时，传值，为货到付款时，不传值 */
  payChannel: 1 | 2
  /** 支付方式，1为在线支付，2为货到付款 */
  payType: 1 | 2
}

export const postMemberOrderApi = <T>(data: DataParams) => {
  return http.post<T>({ url: '/member/order', data })
}

export const getMemberOrderByIdApi = <T>(id: string) => {
  return http.get({ url: `/member/order/${id}` })
}

export const getMemberOrderRepurchaseByIdApi = <T>(orderId: string) => {
  return http.get<T>({ url: `/member/order/repurchase/${orderId}` })
}

export const getMockPayApi = (id: string) => {
  return http.get({ url: `/member/order/consignment/${id}` })
}

export const getMemberOrderLogisticsById = <T>(id: string) => {
  return http.get<T>({ url: `/member/order/${id}/logistics` })
}

export const putMemberOrderReceiptByIdApi = (id: string) => {
  return http.put({ url: `/member/order/${id}/receipt` })
}

export const putMemberOrderCancelByIdApi = (id: string, data: { cancelReason: string }) => {
  return http.put({ url: `/member/order/${id}/cancel`, data })
}

export const deleteMemberOrderByIdApi = (data: { ids: string[] }) => {
  return http.delete({ url: `/member/order`, data })
}

export const getMemberOrderApi = <T>(data?: {
  page?: number
  pageSize?: number
  orderState?: number
}) => {
  return http.get<T>({ url: '/member/order', data })
}
