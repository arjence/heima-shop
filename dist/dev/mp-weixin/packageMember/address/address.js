"use strict";
const common_vendor = require("../../common/vendor.js");
const services_address = require("../../services/address.js");
require("../../services/index.js");
require("../../stores/index.js");
require("../../stores/modules/member.js");
if (!Array) {
  const _easycom_uni_swipe_action_item2 = common_vendor.resolveComponent("uni-swipe-action-item");
  const _easycom_uni_swipe_action2 = common_vendor.resolveComponent("uni-swipe-action");
  (_easycom_uni_swipe_action_item2 + _easycom_uni_swipe_action2)();
}
const _easycom_uni_swipe_action_item = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-swipe-action-item/uni-swipe-action-item.js";
const _easycom_uni_swipe_action = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-swipe-action/uni-swipe-action.js";
if (!Math) {
  (_easycom_uni_swipe_action_item + _easycom_uni_swipe_action)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "address",
  setup(__props) {
    const addressList = common_vendor.ref([]);
    const getMemberAddressData = async () => {
      const { result } = await services_address.getMemberAddressApi();
      addressList.value = result;
    };
    const onDeleteAddress = (id) => {
      common_vendor.index.showModal({
        title: "确定删除吗？",
        success: async (success) => {
          var _a, _b;
          if (success.confirm) {
            await services_address.deleteMemberAddressByIdApi(id);
            const index = (_a = addressList.value) == null ? void 0 : _a.findIndex((item) => item.id === id);
            if (index) {
              (_b = addressList.value) == null ? void 0 : _b.splice(index, 1);
              common_vendor.index.showToast({ icon: "success", title: "删除成功" });
            }
          }
        }
      });
    };
    common_vendor.onShow(() => {
      getMemberAddressData();
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: addressList.value.length
      }, addressList.value.length ? {
        b: common_vendor.f(addressList.value, (item, k0, i0) => {
          return common_vendor.e({
            a: common_vendor.t(item.receiver),
            b: common_vendor.t(item.contact),
            c: item.isDefault
          }, item.isDefault ? {} : {}, {
            d: common_vendor.t(item.fullLocation + " " + item.address),
            e: `/packageMember/address-form/address-form?id=${item.id}`,
            f: common_vendor.o(($event) => onDeleteAddress(item.id), item.id),
            g: item.id,
            h: "00fa93a2-1-" + i0 + ",00fa93a2-0"
          });
        })
      } : {});
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Arjence/学习/uniapp/heima-shop/src/packageMember/address/address.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=address.js.map
