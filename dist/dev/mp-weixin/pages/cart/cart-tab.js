"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  MainCart();
}
const MainCart = () => "./cpns/main-cart.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "cart-tab",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          isTab: true
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Arjence/学习/uniapp/heima-shop/src/pages/cart/cart-tab.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=cart-tab.js.map
