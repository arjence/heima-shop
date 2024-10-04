<script setup lang="ts">
import { ref } from 'vue'
import {
  postMemberAddressApi,
  getMemberAddressByIdApi,
  putMemberAddressByIdApi,
} from '@/services/address'
import { onLoad } from '@dcloudio/uni-app'

const props = defineProps<{
  id: string
}>()

// 表单数据
const form = ref({
  receiver: '', // 收货人
  contact: '', // 联系方式
  fullLocation: '', // 省市区(前端展示)
  provinceCode: '', // 省份编码(后端参数)
  cityCode: '', // 城市编码(后端参数)
  countyCode: '', // 区/县编码(后端参数)
  address: '', // 详细地址
  isDefault: 0, // 默认地址，1为是，0为否
})

const formRef = ref<UniHelper.UniFormsInstance>()

const formRules: UniHelper.UniFormsRules = {
  receiver: {
    rules: [{ required: true, errorMessage: '收货人名称不能为空' }],
  },
  contact: {
    rules: [
      { required: true, errorMessage: '联系方式不能为空' },
      { pattern: /^1[3-9]\d{9}$/, errorMessage: '请输入正确的联系方式' },
    ],
  },
  fullLocation: {
    rules: [{ required: true, errorMessage: '地区信息不能为空' }],
  },
  address: {
    rules: [{ required: true, errorMessage: '详细地址不能为空' }],
  },
}

const getMemberAddressDataById = async () => {
  const { result } = await getMemberAddressByIdApi(props.id)
  form.value = result
}

const onRegionChange: UniHelper.RegionPickerOnChange = (e) => {
  form.value.fullLocation = e.detail.value.join(' ')
  form.value.provinceCode = e.detail.code![0]
  form.value.cityCode = e.detail.code![1]
  form.value.countyCode = e.detail.code![2]
  // const [provinceCode, cityCode, countyCode] = e.detail.code!
  // Object.assign(form.value, provinceCode, cityCode, countyCode)
}

const onSwitchChange: UniHelper.SwitchOnChange = (e) => {
  form.value.isDefault = e.detail.value ? 1 : 0
}

const onSubmit = async () => {
  await formRef.value?.validate?.()
  //编辑
  if (props.id) {
    await putMemberAddressByIdApi(props.id, form.value)
  } else {
    //新增
    await postMemberAddressApi(form.value)
  }
  uni.showToast({ icon: 'success', title: props.id ? '编辑成功' : '新增成功' })
  setTimeout(() => {
    uni.navigateBack()
  }, 500)
}

onLoad(() => {
  if (props.id) {
    getMemberAddressDataById()
    uni.setNavigationBarTitle({ title: '修改地址' })
  } else {
    uni.setNavigationBarTitle({ title: '新增地址' })
  }
})
</script>

<template>
  <view class="content">
    <uni-forms ref="formRef" :modelValue="form" :rules="formRules">
      <!-- 表单内容 -->
      <uni-forms-item class="form-item" name="receiver">
        <text class="label">收货人</text>
        <input class="input" placeholder="请填写收货人姓名" v-model="form.receiver" />
      </uni-forms-item>
      <uni-forms-item class="form-item" name="contact">
        <text class="label">手机号码</text>
        <input class="input" placeholder="请填写收货人手机号码" v-model="form.contact" />
      </uni-forms-item>
      <uni-forms-item class="form-item" name="fullLocation">
        <text class="label">所在地区</text>
        <picker class="picker" mode="region" :value="form.fullLocation" @change="onRegionChange">
          <view v-if="form.fullLocation">{{ form.fullLocation }}</view>
          <view v-else class="placeholder">请选择省/市/区(县)</view>
        </picker>
      </uni-forms-item>
      <uni-forms-item class="form-item" name="address">
        <text class="label">详细地址</text>
        <input class="input" placeholder="街道、楼牌号等信息" v-model="form.address" />
      </uni-forms-item>
      <uni-forms-item class="form-item">
        <label class="label">设为默认地址</label>
        <switch
          class="switch"
          color="#27ba9b"
          :checked="form.isDefault === 1"
          @change="onSwitchChange"
        />
      </uni-forms-item>
    </uni-forms>
  </view>
  <!-- 提交按钮 -->
  <button class="button" @tap="onSubmit">保存并使用</button>
</template>

<style lang="scss">
page {
  background-color: #f4f4f4;
}

.content {
  margin: 20rpx 20rpx 0;
  padding: 0 20rpx;
  border-radius: 10rpx;
  background-color: #fff;

  .form-item,
  .uni-forms-item {
    display: flex;
    align-items: center;
    min-height: 96rpx;
    padding: 25rpx 10rpx 40rpx;
    background-color: #fff;
    font-size: 28rpx;
    border-bottom: 1rpx solid #ddd;
    position: relative;
    margin-bottom: 0;

    /**调整 uni-forms 样式*/
    .uni-forms-item__content {
      display: flex;
    }

    .uni-forms-item__error {
      margin-left: 200rpx;
    }

    &:last-child {
      border: none;
    }

    .label {
      width: 200rpx;
      color: #333;
    }

    .input {
      flex: 1;
      display: block;
      height: 46rpx;
    }

    .switch {
      position: absolute;
      right: -20rpx;
      transform: scale(0.8);
    }

    .picker {
      flex: 1;
    }

    .placeholder {
      color: #808080;
    }
  }
}

.button {
  height: 80rpx;
  margin: 30rpx 20rpx;
  color: #fff;
  border-radius: 80rpx;
  font-size: 30rpx;
  background-color: #27ba9b;
}
</style>
