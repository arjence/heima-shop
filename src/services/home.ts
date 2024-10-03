import type { PageParams } from '@/types/global'
import { http } from './index'

export const getHomeBannerApi = <T>(distributionSite: number = 1) => {
  return http.get<T>({ url: '/home/banner', data: { distributionSite } })
}

export const getHomeCategoryMutliApi = <T>() => {
  return http.get<T>({ url: '/home/category/mutli' })
}

export const getHomeHotMutliApi = <T>() => {
  return http.get<T>({ url: '/home/hot/mutli' })
}

export const getHomeGoodsGuessLikeApi = <T>({ page = 1, pageSize = 10 }: PageParams) => {
  return http.get<T>({ url: '/home/goods/guessLike', data: { page, pageSize } })
}
