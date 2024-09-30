<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'

import type {
  BannerItem,
  CategoryItem,
  HotRecommendItem,
  GuessLikeData,
  GuessLikeItem,
} from '@/types/home'
import {
  getHomeBannerApi,
  getHomeCategoryMutliApi,
  getHomeHotMutliApi,
  getHomeGoodsGuessLikeApi,
} from '@/services/home'

import CustomNavBar from './cpns/CustomNavBar.vue'
import CategoryPanel from './cpns/CategoryPanel.vue'
import HotPanel from './cpns/HotPanel.vue'

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

const guessLikeList = ref<GuessLikeItem[]>([])
const getGuessLikeList = async () => {
  const { result } = await getHomeGoodsGuessLikeApi<GuessLikeData>()
  guessLikeList.value = result?.items || []
}

onLoad(() => {
  getBannerList()
  getCategoryList()
  getHotRecommend()
  getGuessLikeList()
})
</script>

<template>
  <CustomNavBar />
  <scroll-view class="swiper-view" scroll-y>
    <XtxSwiper :list="bannerList" />
    <CategoryPanel :list="categoryList" />
    <HotPanel :list="hotRecommendList" />
    <XtxGuess :list="guessLikeList" />
  </scroll-view>
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
