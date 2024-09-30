"use strict";
const common_vendor = require("./common/vendor.js");
const services_home = require("./services/home.js");
if (!Array) {
  const _easycom_XtxSwiper2 = common_vendor.resolveComponent("XtxSwiper");
  _easycom_XtxSwiper2();
}
const _easycom_XtxSwiper = () => "./components/XtxSwiper.js";
if (!Math) {
  (CustomNavBar + _easycom_XtxSwiper + common_vendor.unref(CategoryPanel))();
}
const CustomNavBar = () => "./pages/index/cpns/CustomNavBar.js";
const CategoryPanel = () => "./pages/index/index.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const bannerList = common_vendor.ref([]);
    const getBannerList = async () => {
      const { result } = await services_home.getHomeBannerApi();
      bannerList.value = result;
    };
    const categoryList = common_vendor.ref([]);
    const getCategoryList = async () => {
      const { result } = await services_home.getHomeCategoryMutliApi();
      categoryList.value = result;
    };
    common_vendor.onLoad(() => {
      getBannerList();
      getCategoryList();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          list: bannerList.value
        }),
        b: common_vendor.p({
          list: categoryList.value
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Arjence/学习/uniapp/heima-shop/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
const cGFnZXMvaW5kZXgvaW5kZXgudnVl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
exports.MiniProgramPage = MiniProgramPage;
exports.cGFnZXMvaW5kZXgvaW5kZXgudnVl = cGFnZXMvaW5kZXgvaW5kZXgudnVl;
//# sourceMappingURL=cGFnZXMvaW5kZXgvaW5kZXgudnVl.js.map
