"use strict";
const common_vendor = require("../../common/vendor.js");
const composables_useGuess = require("../../composables/useGuess.js");
if (!Array) {
  const _easycom_XtxGuess2 = common_vendor.resolveComponent("XtxGuess");
  _easycom_XtxGuess2();
}
const _easycom_XtxGuess = () => "../../components/XtxGuess.js";
if (!Math) {
  _easycom_XtxGuess();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "payment",
  props: {
    id: null
  },
  setup(__props) {
    const query = __props;
    const { guessRef, onScrollToLower } = composables_useGuess.useGuess();
    return (_ctx, _cache) => {
      return {
        a: `/packageOrder/detail/detail?id=${query.id}`,
        b: common_vendor.sr(guessRef, "d5acab24-0", {
          "k": "guessRef"
        }),
        c: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(onScrollToLower) && common_vendor.unref(onScrollToLower)(...args)
        )
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Arjence/学习/uniapp/heima-shop/src/packageOrder/payment/payment.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=payment.js.map
