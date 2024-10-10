"use strict";
const common_vendor = require("../../common/vendor.js");
const services_order = require("../../services/order.js");
const stores_modules_address = require("../../stores/modules/address.js");
require("../../services/index.js");
require("../../stores/index.js");
require("../../stores/modules/member.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "create",
  props: {
    skuId: null,
    count: null,
    orderId: null
  },
  setup(__props) {
    const props = __props;
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    const buyerMessage = common_vendor.ref("");
    const deliveryList = common_vendor.ref([
      { type: 1, text: "时间不限 (周一至周日)" },
      { type: 2, text: "工作日送 (周一至周五)" },
      { type: 3, text: "周末配送 (周六至周日)" }
    ]);
    const activeIndex = common_vendor.ref(0);
    const activeDelivery = common_vendor.computed(() => deliveryList.value[activeIndex.value]);
    const onChangeDelivery = (ev) => {
      activeIndex.value = ev.detail.value;
    };
    const addressStore = stores_modules_address.useAddressStore();
    const addressInfo = common_vendor.computed(
      () => {
        var _a, _b;
        return addressStore.selectedAddress ?? ((_b = (_a = orderPreInfo.value) == null ? void 0 : _a.userAddresses) == null ? void 0 : _b.find((item) => item.isDefault));
      }
    );
    const orderPreInfo = common_vendor.ref();
    const getOrderPreData = async () => {
      if (props.skuId) {
        const { result } = await services_order.getMemberOrderPreNowApi({
          skuId: props.skuId,
          count: props.count
        });
        console.log(result);
        orderPreInfo.value = result;
      } else if (props.orderId) {
        const { result } = await services_order.getMemberOrderRepurchaseByIdApi(props.orderId);
        orderPreInfo.value = result;
      } else {
        const { result } = await services_order.getMemberOrderPreApi();
        orderPreInfo.value = result;
      }
    };
    const submitOrder = async () => {
      if (!addressInfo.value) {
        return common_vendor.index.showToast({
          title: "请添加地址信息！",
          icon: "none"
        });
      }
      const { result } = await services_order.postMemberOrderApi({
        goods: orderPreInfo.value.goods.map((item) => ({
          count: item.count,
          skuId: item.skuId
        })),
        addressId: addressInfo.value.id,
        deliveryTimeType: activeIndex.value,
        buyerMessage: buyerMessage.value,
        payChannel: 1,
        payType: 1
      });
      common_vendor.index.redirectTo({ url: `/packageOrder/detail/detail?id=${result.id}` });
    };
    common_vendor.onLoad(() => {
      getOrderPreData();
    });
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f;
      return common_vendor.e({
        a: common_vendor.unref(addressInfo)
      }, common_vendor.unref(addressInfo) ? {
        b: common_vendor.t(common_vendor.unref(addressInfo).receiver),
        c: common_vendor.t(common_vendor.unref(addressInfo).contact),
        d: common_vendor.t(common_vendor.unref(addressInfo).fullLocation)
      } : {}, {
        e: common_vendor.f((_a = orderPreInfo.value) == null ? void 0 : _a.goods, (item, k0, i0) => {
          return {
            a: item.picture,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.attrsText),
            d: common_vendor.t(item.payPrice),
            e: common_vendor.t(item.price),
            f: common_vendor.t(item.count),
            g: item.skuId,
            h: `/pages/goods/goods?id=${item.id}`
          };
        }),
        f: common_vendor.t(common_vendor.unref(activeDelivery).text),
        g: deliveryList.value,
        h: common_vendor.o(onChangeDelivery),
        i: buyerMessage.value,
        j: common_vendor.o(($event) => buyerMessage.value = $event.detail.value),
        k: common_vendor.t((_b = orderPreInfo.value) == null ? void 0 : _b.summary.totalPrice),
        l: common_vendor.t((_c = orderPreInfo.value) == null ? void 0 : _c.summary.postFee),
        m: common_vendor.t((_d = orderPreInfo.value) == null ? void 0 : _d.summary.totalPayPrice),
        n: common_vendor.o(submitOrder),
        o: !((_e = orderPreInfo.value) == null ? void 0 : _e.goods.length) ? 1 : "",
        p: ((_f = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _f.bottom) + "px"
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Arjence/学习/uniapp/heima-shop/src/packageOrder/create/create.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=create.js.map
