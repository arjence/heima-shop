import { http } from './index'

type LoginParms = {
  code: string
  encryptedData: string
  iv: string
}
export const postLoginWxMin = <T>(data: LoginParms) => {
  return http.post<T>({ url: '/login/wxMin', data })
}

export const postLoginWxMinSimple = <T>() => {
  return http.post({ url: '/login/wxMin/simple', data: { phoneNumber: '13028128550' } })
}
