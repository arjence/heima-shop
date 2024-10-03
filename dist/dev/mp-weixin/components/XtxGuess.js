"use strict";
const common_vendor = require("../common/vendor.js");
const services_home = require("../services/home.js");
require("../services/index.js");
require("../stores/index.js");
require("../stores/modules/member.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "XtxGuess",
  setup(__props, { expose }) {
    const pageParams = {
      page: 1,
      pageSize: 10
    };
    let finish = common_vendor.ref(false);
    const guessLikeList = common_vendor.ref([]);
    const getGuessLikeList = async () => {
      if (finish.value)
        return;
      const { result } = await services_home.getHomeGoodsGuessLikeApi(pageParams);
      guessLikeList.value.push(...result.items ?? []);
      pageParams.page += 1;
      if (pageParams.page > result.pages) {
        finish.value = true;
      }
    };
    const resetData = () => {
      guessLikeList.value = [];
      pageParams.page = 1;
      finish.value = false;
    };
    common_vendor.onMounted(() => {
      getGuessLikeList();
    });
    expose({
      getGuessLikeList,
      resetData
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(guessLikeList.value, (item, k0, i0) => {
          return {
            a: item.picture,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.price),
            d: item,
            e: `/pages/goods/goods?id=${item.id}`
          };
        }),
        b: common_vendor.t(common_vendor.unref(finish) ? "加载完毕~" : "正在加载...")
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Arjence/学习/uniapp/heima-shop/src/components/XtxGuess.vue"]]);
wx.createComponent(Component);
//# sourceMappingURL=XtxGuess.js.map
