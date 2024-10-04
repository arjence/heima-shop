type BaseProfile = {
  id: number
  nickname: string
  avatar: string
  account: string
}

export type LoginResult = BaseProfile & {
  mobile: string
  token: string
}

export type ProfileResult = BaseProfile & {
  gender?: Gender
  birthday?: string
  fullLocation?: string
  profession?: string
}

type Gender = '男' | '女'

export type ProfileParmas = Pick<
  ProfileResult,
  'nickname' | 'gender' | 'birthday' | 'profession'
> & {
  provinceCode?: string
  cityCode?: string
  countyCode?: string
}
