"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../stores/index.js");
const composables_useGuess = require("../../composables/useGuess.js");
const stores_modules_member = require("../../stores/modules/member.js");
if (!Array) {
  const _easycom_XtxGuess2 = common_vendor.resolveComponent("XtxGuess");
  _easycom_XtxGuess2();
}
const _easycom_XtxGuess = () => "../../components/XtxGuess.js";
if (!Math) {
  _easycom_XtxGuess();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "my",
  setup(__props) {
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    const orderTypes = [
      { type: 1, text: "待付款", icon: "icon-currency" },
      { type: 2, text: "待发货", icon: "icon-gift" },
      { type: 3, text: "待收货", icon: "icon-check" },
      { type: 4, text: "待评价", icon: "icon-comment" }
    ];
    const memberStore = stores_modules_member.useMemberStore();
    const { guessRef, onScrollToLower } = composables_useGuess.useGuess();
    return (_ctx, _cache) => {
      var _a, _b;
      return common_vendor.e({
        a: common_vendor.unref(memberStore).profile
      }, common_vendor.unref(memberStore).profile ? {
        b: common_vendor.unref(memberStore).profile.avatar,
        c: common_vendor.t(((_a = common_vendor.unref(memberStore).profile) == null ? void 0 : _a.nickname) ?? ((_b = common_vendor.unref(memberStore).profile) == null ? void 0 : _b.account))
      } : {}, {
        d: common_vendor.unref(safeAreaInsets).top + "px",
        e: common_vendor.f(orderTypes, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.text),
            b: item.type,
            c: common_vendor.n(item.icon),
            d: `/packageOrder/list/list?type=${item.type}`
          };
        }),
        f: common_vendor.sr(guessRef, "cb03c388-0", {
          "k": "guessRef"
        }),
        g: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(onScrollToLower) && common_vendor.unref(onScrollToLower)(...args)
        )
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Arjence/学习/uniapp/heima-shop/src/pages/my/my.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=my.js.map
