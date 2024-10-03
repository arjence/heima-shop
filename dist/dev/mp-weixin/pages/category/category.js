"use strict";
const common_vendor = require("../../common/vendor.js");
const services_category = require("../../services/category.js");
const services_home = require("../../services/home.js");
require("../../services/index.js");
require("../../stores/index.js");
require("../../stores/modules/member.js");
if (!Array) {
  const _easycom_XtxSwiper2 = common_vendor.resolveComponent("XtxSwiper");
  _easycom_XtxSwiper2();
}
const _easycom_XtxSwiper = () => "../../components/XtxSwiper.js";
if (!Math) {
  (PageSkeleton + _easycom_XtxSwiper)();
}
const PageSkeleton = () => "./cpns/PageSkeleton.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "category",
  setup(__props) {
    const bannerList = common_vendor.ref([]);
    const getBannerData = async () => {
      const { result } = await services_home.getHomeBannerApi(2);
      bannerList.value = result;
    };
    const activeIndex = common_vendor.ref(0);
    const categoryList = common_vendor.ref([]);
    const getCategoryTopData = async () => {
      const { result } = await services_category.getCategoryTopApi();
      categoryList.value = result;
    };
    const isFinish = common_vendor.ref(false);
    common_vendor.onLoad(async () => {
      await Promise.all([getBannerData(), getCategoryTopData()]);
      isFinish.value = true;
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !isFinish.value
      }, !isFinish.value ? {} : {
        b: common_vendor.f(categoryList.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: item.id,
            c: index === activeIndex.value ? 1 : "",
            d: common_vendor.o(($event) => activeIndex.value = index, item.id)
          };
        }),
        c: common_vendor.p({
          list: bannerList.value
        }),
        d: common_vendor.f(categoryList.value[activeIndex.value].children, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.f(item.goods, (goods, k1, i1) => {
              return {
                a: goods.picture,
                b: common_vendor.t(goods.name),
                c: common_vendor.t(goods.price),
                d: goods,
                e: `/pages/goods/goods?id=${goods.id}`
              };
            }),
            c: item.id
          };
        })
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Arjence/学习/uniapp/heima-shop/src/pages/category/category.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=category.js.map
