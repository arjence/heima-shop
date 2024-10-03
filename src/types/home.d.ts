import type { GoodsItem } from './hot'

export type BannerItem = {
  hrefUrl: string
  id: string
  imgUrl: string
  type: string
}

export type CategoryItem = {
  icon: string
  id: string
  name: string
}

export type HotRecommendItem = {
  alt: string
  id: string
  pictures: string[]
  target: string
  title: string
  type: number
}

export type GuessLikeItem = GoodsItem
