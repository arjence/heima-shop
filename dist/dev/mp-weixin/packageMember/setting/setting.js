"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../stores/index.js");
const stores_modules_member = require("../../stores/modules/member.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "setting",
  setup(__props) {
    const memberStore = stores_modules_member.useMemberStore();
    const onLoginout = () => {
      memberStore.clearProfile();
      common_vendor.index.navigateBack();
    };
    return (_ctx, _cache) => {
      return common_vendor.e(common_vendor.e({
        a: common_vendor.unref(memberStore).profile
      }, common_vendor.unref(memberStore).profile ? {} : {}), {
        b: common_vendor.o(onLoginout)
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Arjence/学习/uniapp/heima-shop/src/packageMember/setting/setting.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=setting.js.map
