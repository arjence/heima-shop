"use strict";
const common_vendor = require("../../../common/vendor.js");
const services_order = require("../../../services/order.js");
const services_constants = require("../../../services/constants.js");
require("../../../services/index.js");
require("../../../stores/index.js");
require("../../../stores/modules/member.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "order-list",
  props: {
    type: null
  },
  setup(__props) {
    const props = __props;
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    const orderInfo = common_vendor.ref();
    const finish = common_vendor.ref(false);
    let page = 0;
    const getOderListData = async () => {
      if (finish.value)
        return;
      const { result } = await services_order.getMemberOrderApi({
        page,
        pageSize: 10,
        orderState: props.type
      });
      orderInfo.value = result;
      page += 1;
      if (page > result.pages) {
        finish.value = true;
      }
    };
    const onDeleteOrder = async (id) => {
      common_vendor.index.showModal({
        content: "确认删除订单？",
        success: async (success) => {
          var _a, _b;
          if (success) {
            await services_order.deleteMemberOrderByIdApi({ ids: [id] });
            const index = (_a = orderInfo.value) == null ? void 0 : _a.items.findIndex((item) => item.id === id);
            (_b = orderInfo.value) == null ? void 0 : _b.items.splice(index, 1);
          }
        }
      });
    };
    const onConfirmOrder = (item) => {
      common_vendor.index.showModal({
        content: "为保障您的权益，请收到货并确认无误后，再确认收货",
        success: async (confirm) => {
          if (confirm) {
            await services_order.putMemberOrderReceiptByIdApi(item.id);
            item.orderState = services_constants.OrderState.YiWanCheng;
          }
        }
      });
    };
    const refresherTrigger = common_vendor.ref(false);
    const onRefresherefresh = async () => {
      refresherTrigger.value = true;
      page = 0;
      finish.value = false;
      await getOderListData();
      refresherTrigger.value = false;
    };
    const onScrollTolower = () => {
      getOderListData();
    };
    common_vendor.onMounted(() => {
      getOderListData();
    });
    return (_ctx, _cache) => {
      var _a, _b;
      return {
        a: common_vendor.f((_a = orderInfo.value) == null ? void 0 : _a.items, (item, k0, i0) => {
          return common_vendor.e({
            a: common_vendor.t(item.createTime),
            b: common_vendor.t(common_vendor.unref(services_constants.orderStateList)[item.orderState].text),
            c: item.orderState >= common_vendor.unref(services_constants.OrderState).DaiPingJia
          }, item.orderState >= common_vendor.unref(services_constants.OrderState).DaiPingJia ? {
            d: common_vendor.o(($event) => onDeleteOrder(item.id), item.id)
          } : {}, {
            e: common_vendor.f(item.skus, (sku, k1, i1) => {
              return {
                a: sku.image,
                b: common_vendor.t(sku.name),
                c: common_vendor.t(sku.attrsText),
                d: sku.spuId,
                e: `packageOrder/detail/detail?id=${sku.id}`
              };
            }),
            f: common_vendor.t(item.totalNum),
            g: common_vendor.t(item.payMoney),
            h: item.orderState === common_vendor.unref(services_constants.OrderState).DaiFuKuan
          }, item.orderState === common_vendor.unref(services_constants.OrderState).DaiFuKuan ? {} : common_vendor.e({
            i: `/packageOrder/create/create?orderId=${item.id}`,
            j: item.orderState === common_vendor.unref(services_constants.OrderState).DaiShouHuo
          }, item.orderState === common_vendor.unref(services_constants.OrderState).DaiShouHuo ? {
            k: common_vendor.o(($event) => onConfirmOrder(item), item.id)
          } : {}), {
            l: item.id
          });
        }),
        b: common_vendor.t(finish.value ? "没有更多数据~" : "正在加载..."),
        c: ((_b = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _b.bottom) + "px",
        d: common_vendor.o(onScrollTolower),
        e: refresherTrigger.value,
        f: common_vendor.o(onRefresherefresh)
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Arjence/学习/uniapp/heima-shop/src/packageOrder/list/cpns/order-list.vue"]]);
wx.createComponent(Component);
//# sourceMappingURL=order-list.js.map
