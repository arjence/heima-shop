"use strict";
const common_vendor = require("../../common/vendor.js");
const services_home = require("../../services/home.js");
const composables_useGuess = require("../../composables/useGuess.js");
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
  (CustomNavBar + PageSkeleton + _easycom_XtxSwiper + CategoryPanel + HotPanel + _easycom_XtxGuess)();
}
const CustomNavBar = () => "./cpns/CustomNavBar.js";
const CategoryPanel = () => "./cpns/CategoryPanel.js";
const HotPanel = () => "./cpns/HotPanel.js";
const PageSkeleton = () => "./cpns/PageSkeleton.js";
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
    const { guessRef: guessLikeRef, onScrollToLower } = composables_useGuess.useGuess();
    const refresh = common_vendor.ref(false);
    const onRefresherRefresh = async () => {
      var _a, _b;
      refresh.value = true;
      (_a = guessLikeRef.value) == null ? void 0 : _a.resetData();
      await Promise.all([
        getBannerList(),
        getCategoryList(),
        getHotRecommend(),
        (_b = guessLikeRef.value) == null ? void 0 : _b.getGuessLikeList()
      ]);
      refresh.value = false;
    };
    const onLoading = common_vendor.ref(false);
    common_vendor.onLoad(() => {
      onLoading.value = true;
      Promise.all([getBannerList(), getCategoryList(), getHotRecommend()]);
      onLoading.value = false;
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: onLoading.value
      }, onLoading.value ? {} : {
        b: common_vendor.p({
          list: bannerList.value
        }),
        c: common_vendor.p({
          list: categoryList.value
        }),
        d: common_vendor.p({
          list: hotRecommendList.value
        }),
        e: common_vendor.sr(guessLikeRef, "2b6b2fe2-5", {
          "k": "guessLikeRef"
        }),
        f: common_vendor.o(onRefresherRefresh),
        g: refresh.value,
        h: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(onScrollToLower) && common_vendor.unref(onScrollToLower)(...args)
        )
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Arjence/学习/uniapp/heima-shop/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=index.js.map
