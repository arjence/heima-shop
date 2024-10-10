import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { AddressItem } from '@/types/address'

export const useAddressStore = defineStore('address', () => {
  const selectedAddress = ref<AddressItem>()
  const changeAddress = (newAddress: AddressItem) => {
    selectedAddress.value = newAddress
  }

  return {
    selectedAddress,
    changeAddress,
  }
})
