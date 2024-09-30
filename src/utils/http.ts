import { useMemberStore } from '@/stores'

const baseUrl = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

const httpInterceptor = {
  invoke(options: UniApp.RequestOptions) {
    if (!options.url.startsWith('http')) {
      options.url = baseUrl + options.url
    }

    options.timeout = 10000

    options.header = {
      ...options.header,
      'source-client': 'miniapp',
    }
    const { profile } = useMemberStore()
    const token = profile?.token
    if (token) {
      options.header.Authorization = token
    }
    console.log(options)
  },
}
//拦截器
uni.addInterceptor('request', httpInterceptor)
