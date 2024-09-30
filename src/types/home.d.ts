export type BannerItem = {
  hrefUrl?: string
  id?: string
  imgUrl?: string
  type?: string
}

export type CategoryItem = {
  icon?: string
  id?: string
  name?: string
}

export type HotRecommendItem = {
  alt?: string
  id?: string
  pictures?: string[]
  target?: string
  title?: string
  type?: number
}

export type GuessLikeData = {
  counts?: number
  items?: Array<GuessLikeItem>
  page?: number
  pageSize?: number
  pages?: number
}
export type GuessLikeItem = {
  desc?: string
  id?: string
  name?: string
  orderNum?: number
  picture?: string
  price?: string
}
