import type { GoodsItem } from './hot'

export interface CategoryTopItem {
  id?: string
  name?: string
  picture?: string
  imageBanners?: string[]
  children?: Array<CategoryChildItem>
}
export type CategoryChildItem = {
  id?: string
  name?: string
  picture?: string
  parentId?: null
  parentName?: null
  goods?: Array<GoodsItem>
  categories?: null
  brands?: null
  saleProperties?: null
}
