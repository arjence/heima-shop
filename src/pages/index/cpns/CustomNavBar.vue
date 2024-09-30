<script lang="ts" setup>
const { safeAreaInsets } = uni.getSystemInfoSync()
</script>

<template>
  <view class="nav-bar" :style="{ paddingTop: (safeAreaInsets?.top || 0) + 'px' }">
    <view class="logo">
      <image class="img" src="@/static/images/logo.png" mode="widthFix" />
      <text>新鲜 · 亲民 · 快捷</text>
    </view>
    <view class="search">
      <text class="icon-search">搜索商品</text>
      <text class="icon-scan"></text>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.nav-bar {
  background-image: url(@/static/images/navigator_bg.png);
  background-size: cover;
  display: flex;
  flex-direction: column;
  padding: 0 20rpx;
  padding-top: 20rpx;
  box-sizing: border-box;
  color: white;
  .logo {
    display: flex;
    .img {
      width: 200rpx;
    }
  }
  .search {
    padding: 10rpx 20rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 4% / 50%;
    margin: 30rpx 0 30rpx 0;
  }
}
</style>
