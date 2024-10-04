<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

import { getMemberProfileApi, putMemberProfileApi } from '@/services/profile'
import { useMemberStore } from '@/stores'
import type { ProfileResult, ProfileParmas, Gender } from '@/types/member'
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()

const memberStore = useMemberStore()
const memberInfo = ref({} as ProfileResult)
const getProfileData = async () => {
  const { result } = await getMemberProfileApi<ProfileResult>()
  memberInfo.value = result
}

const onAvatarChange = () => {
  uni.chooseMedia({
    count: 1,
    mediaType: ['image'],
    success: ({ tempFiles }) => {
      const filePath = tempFiles[0].tempFilePath
      console.log(filePath)

      uni.uploadFile({
        url: '/member/profile/avatar',
        name: 'file',
        filePath,
        success: (res) => {
          if (res.statusCode === 200) {
            // 提取头像
            const { avatar } = JSON.parse(res.data).result
            // 当前页面更新头像
            memberInfo.value!.avatar = avatar // [!code ++]
            // 更新 Store 头像
            memberStore.profile!.avatar = avatar // [!code ++]
            uni.showToast({ icon: 'success', title: '更新成功' })
          } else {
            uni.showToast({ icon: 'error', title: '出现错误' })
          }
        },
        fail: (fail) => {
          console.log(fail)
        },
      })
    },
  })
}

const onGenderChange: UniHelper.RadioGroupOnChange = (e) => {
  memberInfo.value.gender = e.detail.value as Gender
}

const onDateChange: UniHelper.DatePickerOnChange = (e) => {
  memberInfo.value.birthday = e.detail.value
}

let fullLocation: [string, string, string] = ['', '', '']
const onRegionChange: UniHelper.RegionPickerOnChange = (e) => {
  fullLocation = e.detail.code!
  memberInfo.value.fullLocation = e.detail.value.join(' ')
}

const onSubmit = async () => {
  const data: ProfileParmas = {
    nickname: memberInfo.value.nickname,
    gender: memberInfo.value.gender,
    birthday: memberInfo.value.birthday,
    provinceCode: fullLocation[0],
    cityCode: fullLocation[1],
    countyCode: fullLocation[2],
    profession: memberInfo.value.profession,
  }
  const { result } = await putMemberProfileApi<ProfileResult>(data)
  memberInfo.value = result
  memberStore.profile!.nickname = memberInfo.value.nickname
  uni.showToast({ icon: 'success', title: '修改成功' })
  setTimeout(() => {
    uni.navigateBack()
  }, 500)
}

onLoad(() => {
  getProfileData()
})
</script>

<template>
  <view class="viewport">
    <!-- 导航栏 -->
    <view class="navbar" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
      <navigator open-type="navigateBack" class="back icon-left" hover-class="none"></navigator>
      <view class="title">个人信息</view>
    </view>
    <!-- 头像 -->
    <view class="avatar" @tap="onAvatarChange">
      <view class="avatar-content">
        <image class="image" :src="memberInfo?.avatar" mode="aspectFill" />
        <text class="text">点击修改头像</text>
      </view>
    </view>
    <!-- 表单 -->
    <view class="form">
      <!-- 表单内容 -->
      <view class="form-content">
        <view class="form-item">
          <text class="label">账号</text>
          <text class="account">{{ memberInfo?.account }}</text>
        </view>
        <view class="form-item">
          <text class="label">昵称</text>
          <input
            class="input"
            type="text"
            placeholder="请填写昵称"
            v-model="memberInfo!.nickname"
          />
        </view>
        <view class="form-item">
          <text class="label">性别</text>
          <radio-group @change="onGenderChange">
            <label class="radio">
              <radio value="男" color="#27ba9b" :checked="memberInfo?.gender === '男'" />
              男
            </label>
            <label class="radio">
              <radio value="女" color="#27ba9b" :checked="memberInfo?.gender === '女'" />
              女
            </label>
          </radio-group>
        </view>
        <view class="form-item">
          <text class="label">生日</text>
          <picker
            class="picker"
            mode="date"
            start="1900-01-01"
            :end="new Date()"
            :value="memberInfo?.birthday"
            @change="onDateChange"
          >
            <view v-if="memberInfo?.birthday">{{ memberInfo?.birthday }}</view>
            <view class="placeholder" v-else>请选择日期</view>
          </picker>
        </view>
        <view class="form-item">
          <text class="label">城市</text>
          <picker
            class="picker"
            mode="region"
            :value="memberInfo?.fullLocation?.split(' ')"
            @change="onRegionChange"
          >
            <view v-if="memberInfo?.fullLocation">{{ memberInfo?.fullLocation }}</view>
            <view class="placeholder" v-else>请选择城市</view>
          </picker>
        </view>
        <view class="form-item">
          <text class="label">职业</text>
          <input
            class="input"
            type="text"
            placeholder="请填写职业"
            v-model="memberInfo!.profession"
          />
        </view>
      </view>
      <!-- 提交按钮 -->
      <button class="form-button" @tap="onSubmit">保 存</button>
    </view>
  </view>
</template>

<style lang="scss">
page {
  background-color: #f4f4f4;
}

.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-image: url(https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/order_bg.png);
  background-size: auto 420rpx;
  background-repeat: no-repeat;
}

// 导航栏
.navbar {
  position: relative;

  .title {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
  }

  .back {
    position: absolute;
    height: 40px;
    width: 40px;
    left: 0;
    font-size: 20px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

// 头像
.avatar {
  text-align: center;
  width: 100%;
  height: 260rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .image {
    width: 160rpx;
    height: 160rpx;
    border-radius: 50%;
    background-color: #eee;
  }

  .text {
    display: block;
    padding-top: 20rpx;
    line-height: 1;
    font-size: 26rpx;
    color: #fff;
  }
}

// 表单
.form {
  background-color: #f4f4f4;

  &-content {
    margin: 20rpx 20rpx 0;
    padding: 0 20rpx;
    border-radius: 10rpx;
    background-color: #fff;
  }

  &-item {
    display: flex;
    height: 96rpx;
    line-height: 46rpx;
    padding: 25rpx 10rpx;
    background-color: #fff;
    font-size: 28rpx;
    border-bottom: 1rpx solid #ddd;

    &:last-child {
      border: none;
    }

    .label {
      width: 180rpx;
      color: #333;
    }

    .account {
      color: #666;
    }

    .input {
      flex: 1;
      display: block;
      height: 46rpx;
    }

    .radio {
      margin-right: 20rpx;
    }

    .picker {
      flex: 1;
    }
    .placeholder {
      color: #808080;
    }
  }

  &-button {
    height: 80rpx;
    text-align: center;
    line-height: 80rpx;
    margin: 30rpx 20rpx;
    color: #fff;
    border-radius: 80rpx;
    font-size: 30rpx;
    background-color: #27ba9b;
  }
}
</style>
