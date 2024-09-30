"use strict";
const common_vendor = require("../../common/vendor.js");
const services_home = require("../../services/home.js");
require("../../services/index.js");
require("../../stores/index.js");
require("../../stores/modules/member.js");
if (!Array) {
  const _easycom_XtxSwiper2 = common_vendor.resolveComponent("XtxSwiper");
  const _easycom_XtxGuess2 = common_vendor.resolveComponent("XtxGuess");
  (_easycom_XtxSwiper2 + _easycom_XtxGuess2)();
}
const _easycom_XtxSwiper = () => "../../components/XtxSwiper.js";
const _easycom_XtxGuess = () => "../../components/XtxGuess.js";
if (!Math) {
  (CustomNavBar + _easycom_XtxSwiper + CategoryPanel + HotPanel + _easycom_XtxGuess)();
}
const CustomNavBar = () => "./cpns/CustomNavBar.js";
const CategoryPanel = () => "./cpns/CategoryPanel.js";
const HotPanel = () => "./cpns/HotPanel.js";
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
    const hotRecommendList = common_vendor.ref([]);
    const getHotRecommend = async () => {
      const { result } = await services_home.getHomeHotMutliApi();
      hotRecommendList.value = result;
    };
    const guessLikeList = common_vendor.ref([]);
    const getGuessLikeList = async () => {
      const { result } = await services_home.getHomeGoodsGuessLikeApi();
      guessLikeList.value = (result == null ? void 0 : result.items) || [];
    };
    common_vendor.onLoad(() => {
      getBannerList();
      getCategoryList();
      getHotRecommend();
      getGuessLikeList();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          list: bannerList.value
        }),
        b: common_vendor.p({
          list: categoryList.value
        }),
        c: common_vendor.p({
          list: hotRecommendList.value
        }),
        d: common_vendor.p({
          list: guessLikeList.value
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Arjence/学习/uniapp/heima-shop/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=index.js.map
