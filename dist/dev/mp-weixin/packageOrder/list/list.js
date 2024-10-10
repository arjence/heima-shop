"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  OrderList();
}
const OrderList = () => "./cpns/order-list.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "list",
  props: {
    type: null
  },
  setup(__props) {
    const props = __props;
    const orderTabs = common_vendor.ref([
      { orderState: 0, title: "全部" },
      { orderState: 1, title: "待付款" },
      { orderState: 2, title: "待发货" },
      { orderState: 3, title: "待收货" },
      { orderState: 4, title: "待评价" }
    ]);
    const onChange = (e) => {
      activeIndex.value = e.detail.current;
    };
    const activeIndex = common_vendor.ref(props.type ?? 0);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(orderTabs.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.o(($event) => activeIndex.value = item.orderState, item.title),
            c: item.title
          };
        }),
        b: activeIndex.value * 20 + "%",
        c: common_vendor.f(orderTabs.value, (item, k0, i0) => {
          return {
            a: "576da0a0-0-" + i0,
            b: common_vendor.p({
              type: item.orderState
            }),
            c: item.title
          };
        }),
        d: common_vendor.o(onChange),
        e: activeIndex.value
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Arjence/学习/uniapp/heima-shop/src/packageOrder/list/list.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=list.js.map
