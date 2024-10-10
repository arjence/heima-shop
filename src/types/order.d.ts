export type OrderPreResult = {
  userAddresses: Array<UserAddresses>
  goods: Array<Goods>
  summary: Summary
}
export type UserAddresses = {
  id: string
  provinceCode: string
  cityCode: string
  countyCode: string
  address: string
  isDefault: number
  receiver: string
  contact: string
  fullLocation: string
  postalCode: string
}
export type Goods = {
  id: string
  name: string
  picture: string
  count: number
  skuId: string
  attrsText: string
  price: number
  payPrice: number
  totalPrice: number
  totalPayPrice: number
}
export type Summary = {
  goodsCount: number
  totalPrice: number
  totalPayPrice: number
  postFee: number
  discountPrice: number
}

export type OderDetailResult = {
  id: string
  createTime: string
  payType: number
  orderState: number
  payLatestTime: number
  countdown: number
  postFee: string
  payMoney: string
  payChannel: number
  totalMoney: string
  totalNum: string
  deliveryTimeType: number
  receiverContact: string
  receiverMobile: string
  receiverAddress: string
  payTime: string
  consignTime: string
  arrivalEstimatedTime: string
  endTime: string
  closeTime: string
  evaluationTime: string
  skus: Array<SkuItem>
}
export type Property = {
  propertyMainName?: string
  propertyValueName?: string
}
export type SkuItem = {
  id: string
  spuId: string
  attrsText: string
  name: string
  quantity: string
  image?: string
  totalMoney: number
  realPay: number
  curPrice: number
  properties: Array<Property>
}

export type LogisticsResult = {
  picture: string
  count: number
  company: Company
  list: Array<List>
}
export type Company = {
  name: string
  number: string
  tel: string
}
export type List = {
  id: string
  text: string
  time: string
}

export type OrderListResult = {
  counts: number
  pageSize: number
  pages: number
  page: number
  items: Array<ListItem>
}

export type ListItem = {
  id: string
  createTime: string
  payType: number
  orderState: number
  payLatestTime: string
  countdown: number
  postFee: number
  payMoney: number
  totalMoney: number
  totalNum: string
  skus: Array<SkuItem>
}
