"use strict";
const common_vendor = require("../../common/vendor.js");
const services_cart = require("../../services/cart.js");
require("../../services/index.js");
require("../../stores/index.js");
require("../../stores/modules/member.js");
if (!Array) {
  const _easycom_uni_swipe_action_item2 = common_vendor.resolveComponent("uni-swipe-action-item");
  const _easycom_uni_swipe_action2 = common_vendor.resolveComponent("uni-swipe-action");
  const _easycom_XtxGuess2 = common_vendor.resolveComponent("XtxGuess");
  (_easycom_uni_swipe_action_item2 + _easycom_uni_swipe_action2 + _easycom_XtxGuess2)();
}
const _easycom_uni_swipe_action_item = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-swipe-action-item/uni-swipe-action-item.js";
const _easycom_uni_swipe_action = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-swipe-action/uni-swipe-action.js";
const _easycom_XtxGuess = () => "../../components/XtxGuess.js";
if (!Math) {
  (_easycom_uni_swipe_action_item + _easycom_uni_swipe_action + _easycom_XtxGuess)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "cart",
  setup(__props) {
    const memberCartList = common_vendor.ref([]);
    const getMemberCartData = async () => {
      const { result } = await services_cart.getMemberCartApi();
      memberCartList.value = result;
    };
    common_vendor.onShow(() => {
      getMemberCartData();
    });
    return (_ctx, _cache) => {
      return common_vendor.e(common_vendor.e({
        a: memberCartList.value.length
      }, memberCartList.value.length ? {
        b: common_vendor.f(memberCartList.value, (item, k0, i0) => {
          return {
            a: item.picture,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.attrsText),
            d: common_vendor.t(item.nowPrice),
            e: `/pages/goods/goods?id=${item.id}`,
            f: item.count,
            g: common_vendor.o(($event) => item.count = $event.detail.value, item.skuId),
            h: item.skuId,
            i: "873ac108-1-" + i0 + ",873ac108-0"
          };
        })
      } : {}), {
        c: common_vendor.sr("guessRef", "873ac108-2")
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Arjence/学习/uniapp/heima-shop/src/pages/cart/cart.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=cart.js.map
