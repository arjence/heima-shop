"use strict";
const common_vendor = require("../../common/vendor.js");
const services_login = require("../../services/login.js");
require("../../stores/index.js");
const stores_modules_member = require("../../stores/modules/member.js");
require("../../services/index.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "login",
  setup(__props) {
    let code = "";
    common_vendor.onLoad(async () => {
      const res = await common_vendor.index.login();
      code = res.code;
    });
    const onGetPhoneNumber = async (e) => {
      const encryptedData = e.detail.encryptedData;
      const iv = e.detail.iv;
      const { result } = await services_login.postLoginWxMin({ code, encryptedData, iv });
      loginSuccess(result);
    };
    const onLoginSimple = async () => {
      const { result } = await services_login.postLoginWxMinSimple();
      loginSuccess(result);
    };
    const loginSuccess = (result) => {
      const memberStore = stores_modules_member.useMemberStore();
      memberStore.setProfile(result);
      common_vendor.index.showToast({ icon: "none", title: "登陆成功" });
      setTimeout(() => {
        common_vendor.index.switchTab({ url: "/pages/my/my" });
      }, 500);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onGetPhoneNumber),
        b: common_vendor.o(onLoginSimple)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Arjence/学习/uniapp/heima-shop/src/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=login.js.map
