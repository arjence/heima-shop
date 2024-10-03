import type { CategoryTopItem } from '@/types/catogery'

import { http } from './index'

export const getCategoryTopApi = <CategoryTopItem>() => {
  return http.get<CategoryTopItem>({ url: '/category/top' })
}
