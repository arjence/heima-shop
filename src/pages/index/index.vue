<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'

import type { BannerItem, CategoryItem, HotRecommendItem } from '@/types/home'
import { getHomeBannerApi, getHomeCategoryMutliApi, getHomeHotMutliApi } from '@/services/home'

import CustomNavBar from './cpns/CustomNavBar.vue'
import CategoryPanel from './cpns/CategoryPanel.vue'
import HotPanel from './cpns/HotPanel.vue'
import type XtxGuess from '@/components/XtxGuess.vue'
import PageSkeleton from './cpns/PageSkeleton.vue'

const bannerList = ref<BannerItem[]>([])
const getBannerList = async () => {
  const { result } = await getHomeBannerApi<BannerItem[]>()
  bannerList.value = result
}

const categoryList = ref<CategoryItem[]>([])
const getCategoryList = async () => {
  const { result } = await getHomeCategoryMutliApi<CategoryItem[]>()
  categoryList.value = result
}

const hotRecommendList = ref<HotRecommendItem[]>([])
const getHotRecommend = async () => {
  const { result } = await getHomeHotMutliApi<HotRecommendItem[]>()
  hotRecommendList.value = result
}

const guessLikeRef = ref<InstanceType<typeof XtxGuess>>()
const onScrollToLower = () => {
  guessLikeRef.value?.getGuessLikeList()
}

//下拉刷新
const refresh = ref(false)
const onRefresherRefresh = async () => {
  refresh.value = true
  //清空猜你喜欢组件数据
  guessLikeRef.value?.resetData()
  await Promise.all([
    getBannerList(),
    getCategoryList(),
    getHotRecommend(),
    guessLikeRef.value?.getGuessLikeList(),
  ])
  refresh.value = false
}

const onLoading = ref(false)
onLoad(() => {
  //加载骨架屏
  onLoading.value = true
  Promise.all([getBannerList(), getCategoryList(), getHotRecommend()])
  onLoading.value = false
})
</script>

<template>
  <CustomNavBar />
  <PageSkeleton v-if="onLoading" />
  <template v-else>
    <scroll-view
      refresher-enabled
      @refresherrefresh="onRefresherRefresh"
      :refresher-triggered="refresh"
      @scrolltolower="onScrollToLower"
      class="swiper-view"
      scroll-y
    >
      <XtxSwiper :list="bannerList" />
      <CategoryPanel :list="categoryList" />
      <HotPanel :list="hotRecommendList" />
      <XtxGuess ref="guessLikeRef" />
    </scroll-view>
  </template>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.swiper-view {
  flex: 1;
}
</style>
