import type { ProfileParmas } from '@/types/member'
import { http } from './index'

export const getMemberProfileApi = <T>() => {
  return http.get<T>({ url: '/member/profile' })
}

export const putMemberProfileApi = <T>(data: ProfileParmas) => {
  return http.put<T>({ url: '/member/profile', data })
}
