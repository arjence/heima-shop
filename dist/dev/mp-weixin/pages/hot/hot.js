"use strict";
const common_vendor = require("../../common/vendor.js");
const services_hot = require("../../services/hot.js");
require("../../services/index.js");
require("../../stores/index.js");
require("../../stores/modules/member.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "hot",
  props: {
    type: null
  },
  setup(__props) {
    const props = __props;
    const hotMap = [
      { type: "1", title: "特惠推荐", url: "/hot/preference" },
      { type: "2", title: "爆款推荐", url: "/hot/inVogue" },
      { type: "3", title: "一站买全", url: "/hot/oneStop" },
      { type: "4", title: "新鲜好物", url: "/hot/new" }
    ];
    const activeIndex = common_vendor.ref(0);
    const hotItem = hotMap.find((item) => item.type == props.type);
    common_vendor.index.setNavigationBarTitle({ title: hotItem.title });
    const subTypes = common_vendor.ref();
    const bannerPic = common_vendor.ref("");
    const url = hotItem == null ? void 0 : hotItem.url;
    const getHotRecommendData = async () => {
      const { result } = await services_hot.getHotRecommendApi(url, {
        page: 30
      });
      subTypes.value = result.subTypes;
      bannerPic.value = result.bannerPicture;
    };
    const onScrollToLower = async () => {
      const currentSubTypes = subTypes.value[activeIndex.value];
      if (currentSubTypes.goodsItems.page < currentSubTypes.goodsItems.pages) {
        currentSubTypes.goodsItems.page++;
      } else {
        currentSubTypes.finish = true;
        return;
      }
      const { result } = await services_hot.getHotRecommendApi(url, {
        page: currentSubTypes.goodsItems.page,
        pageSize: currentSubTypes.goodsItems.pageSize,
        subType: currentSubTypes.id
      });
      const newSubTypes = result.subTypes[activeIndex.value];
      currentSubTypes.goodsItems.items.push(...newSubTypes.goodsItems.items);
    };
    common_vendor.onLoad(() => {
      getHotRecommendData();
    });
    return (_ctx, _cache) => {
      return {
        a: bannerPic.value,
        b: common_vendor.f(subTypes.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.o(($event) => activeIndex.value = index, item.id),
            c: index === activeIndex.value ? 1 : "",
            d: item.id
          };
        }),
        c: common_vendor.f(subTypes.value[activeIndex.value].goodsItems.items, (goods, k0, i0) => {
          return {
            a: goods.picture,
            b: common_vendor.t(goods.name),
            c: common_vendor.t(goods.price),
            d: goods,
            e: `/pages/goods/goods?id=${goods.id}`
          };
        }),
        d: common_vendor.t(subTypes.value[activeIndex.value].finish ? "数据加载完毕~" : "正在加载..."),
        e: common_vendor.o(onScrollToLower)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Arjence/学习/uniapp/heima-shop/src/pages/hot/hot.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=hot.js.map
