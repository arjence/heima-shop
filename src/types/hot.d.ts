import type { PageData } from './global'

export type HotResult = {
  bannerPicture: string
  id: string
  subTypes: Array<SubTypes>
  title: string
}

export type SubTypes = {
  goodsItems: PageData<GoodsItem[]>
  id: string
  title: string
}

export type GoodsItem = {
  desc: string
  id: string
  name: string
  orderNum: number
  picture: string
  price: string
}
