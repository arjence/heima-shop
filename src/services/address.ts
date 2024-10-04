import type { AddressParams } from '@/types/address'
import { http } from './index'

export const getMemberAddressApi = <T>() => {
  return http.get<T>({ url: '/member/address' })
}

export const postMemberAddressApi = (data: AddressParams) => {
  return http.post({ url: '/member/address', data })
}

export const putMemberAddressByIdApi = (id: string, data: AddressParams) => {
  return http.put({ url: `/member/address/${id}`, data })
}

export const getMemberAddressByIdApi = (id: string) => {
  return http.get({ url: `/member/address/${id}` })
}

export const deleteMemberAddressByIdApi = (id: string) => {
  return http.delete({ url: `/member/address/${id}` })
}
