import type { PageParams } from '@/types/global'
import { http } from './index'

type ParamsType = PageParams & { subType?: string }
export const getHotRecommendApi = <T>(url: string, data?: ParamsType) => {
  return http.get<T>({ url, data })
}
