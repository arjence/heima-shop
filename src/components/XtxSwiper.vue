<template>
  <view class="carousel">
    <swiper indicator-dots autoplay circular duration="2000">
      <swiper-item v-for="item of list" :key="item.id">
        <navigator url="/pages/index/index" hover-class="none" class="navigator">
          <image mode="widthFix" class="image" :src="item.imgUrl"></image>
        </navigator>
      </swiper-item>
    </swiper>
  </view>
</template>

<script lang="ts" setup>
import type { BannerItem } from '@/types/home'

const props = defineProps<{
  list: BannerItem[]
}>()
</script>

<style lang="scss">
.carousel {
  height: 280rpx;
}
</style>
