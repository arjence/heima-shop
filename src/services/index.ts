import { useMemberStore } from '@/stores'

interface Data<T> {
  code: string
  msg: string
  result: T
}

class Http {
  // baseURL: String = ''
  // constructor(baseURL: String) {
  //   this.baseURL = baseURL
  // }
  constructor() {}

  request<T>(options: UniApp.RequestOptions) {
    // //拼接url
    // options.url = this.baseURL + options.url
    // //请求超时时间
    // options.timeout = 10000
    // options.header = {
    //   ...options.header,
    //   'source-client': 'miniapp',
    // }
    // //设置token
    // const { profile } = useMemberStore()
    // const token = profile?.token
    // if (token) {
    //   options.header.Authorization = token
    // }
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

  put<T = any>(options: any) {
    return this.request<T>({ ...options, method: 'PUT' })
  }

  delete<T = any>(options: any) {
    return this.request<T>({ ...options, method: 'DELETE' })
  }
}
const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'
// 拦截器配置
const httpInterceptor = {
  // 拦截前触发
  invoke(options: UniApp.RequestOptions) {
    // 1. 非 http 开头需拼接地址
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    // 2. 请求超时
    options.timeout = 10000
    // 3. 添加小程序端请求头标识
    options.header = {
      'source-client': 'miniapp',
      ...options.header,
    }
    // 4. 添加 token 请求头标识
    const memberStore = useMemberStore()
    const token = memberStore.profile?.token
    if (token) {
      options.header.Authorization = token
    }
  },
}

// 拦截 request 请求
uni.addInterceptor('request', httpInterceptor)
// 拦截 uploadFile 文件上传
uni.addInterceptor('uploadFile', httpInterceptor)

export const http = new Http()
