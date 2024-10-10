"use strict";
const common_vendor = require("../../common/vendor.js");
const useAddressStore = common_vendor.defineStore("address", () => {
  const selectedAddress = common_vendor.ref();
  const changeAddress = (newAddress) => {
    selectedAddress.value = newAddress;
  };
  return {
    selectedAddress,
    changeAddress
  };
});
exports.useAddressStore = useAddressStore;
//# sourceMappingURL=address.js.map
