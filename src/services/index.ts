import { useMemberStore } from '@/stores'

interface Data<T> {
  code: string
  msg: string
  result: T
}

class Http {
  baseURL: String = ''
  constructor(baseURL: String) {
    this.baseURL = baseURL
  }

  request<T>(options: UniApp.RequestOptions) {
    //拼接url
    options.url = this.baseURL + options.url
    //请求超时时间
    options.timeout = 10000
    options.header = {
      ...options.header,
      'source-client': 'miniapp',
    }
    //设置token
    const { profile } = useMemberStore()
    const token = profile?.token
    if (token) {
      options.header.Authorization = token
    }
    return new Promise<Data<T>>((resolve, reject) => {
      uni.request({
        ...options,
        success(res) {
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve(res.data as Data<T>)
          } else if (res.statusCode === 401) {
            const store = useMemberStore()
            store.clearProfile()
            uni.navigateTo({
              url: '/pages/login/login',
            })
          } else {
            uni.showToast({
              icon: 'none',
              title: (res.data as Data<T>).msg || '数据获取失败',
            })
            reject(res)
          }
        },
        fail: (err: any) => {
          uni.showToast({
            icon: 'none',
            title: '网络错误，请切换网路！',
          })
          reject(err)
        },
      })
    })
  }

  get<T = any>(options: any) {
    return this.request<T>({ ...options, method: 'GET' })
  }

  post<T = any>(options: any) {
    return this.request<T>({ ...options, method: 'POST' })
  }
}

export const http = new Http('https://pcapi-xiaotuxian-front-devtest.itheima.net')
