"use strict";
const common_vendor = require("../../common/vendor.js");
const composables_useGuess = require("../../composables/useGuess.js");
const services_order = require("../../services/order.js");
const services_payment = require("../../services/payment.js");
const services_constants = require("../../services/constants.js");
require("../../services/index.js");
require("../../stores/index.js");
require("../../stores/modules/member.js");
if (!Array) {
  const _easycom_uni_countdown2 = common_vendor.resolveComponent("uni-countdown");
  const _easycom_XtxGuess2 = common_vendor.resolveComponent("XtxGuess");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_countdown2 + _easycom_XtxGuess2 + _easycom_uni_popup2)();
}
const _easycom_uni_countdown = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-countdown/uni-countdown.js";
const _easycom_XtxGuess = () => "../../components/XtxGuess.js";
const _easycom_uni_popup = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_countdown + _easycom_XtxGuess + PageSkeleton + _easycom_uni_popup)();
}
const PageSkeleton = () => "./cpns/PageSkeleton.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "detail",
  props: {
    id: null
  },
  setup(__props) {
    const query = __props;
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    const { guessRef, onScrollToLower } = composables_useGuess.useGuess();
    const popup = common_vendor.ref();
    const reasonList = common_vendor.ref([
      "商品无货",
      "不想要了",
      "商品信息填错了",
      "地址信息填写错误",
      "商品降价",
      "其它"
    ]);
    const reason = common_vendor.ref("");
    const onCopy = (id) => {
      common_vendor.index.setClipboardData({ data: id });
    };
    const pages = getCurrentPages();
    const pageInstance = pages.at(-1);
    const orderDetailInfo = common_vendor.ref({});
    const getMemberOrderData = async () => {
      const { result } = await services_order.getMemberOrderByIdApi(query.id);
      orderDetailInfo.value = result;
      getOrderLogisticsData();
    };
    const onTimeup = () => {
      orderDetailInfo.value.orderState = services_constants.OrderState.YiQuXiao;
    };
    const onPayment = async () => {
      {
        await services_payment.getPayMockAPI({ orderId: query.id });
      }
      common_vendor.index.redirectTo({ url: `/packageOrder/payment/payment?id=${query.id}` });
    };
    const isDev = true;
    const onMockPay = async () => {
      const { result } = await services_order.getMockPayApi(query.id);
      console.log(result);
      orderDetailInfo.value.orderState = services_constants.OrderState.DaiShouHuo;
    };
    const logisticsInfo = common_vendor.ref();
    const getOrderLogisticsData = async () => {
      if ([services_constants.OrderState.DaiPingJia, services_constants.OrderState.DaiShouHuo, services_constants.OrderState.YiWanCheng].includes(
        orderDetailInfo.value.orderState
      )) {
        const { result } = await services_order.getMemberOrderLogisticsById(query.id);
        logisticsInfo.value = result;
      }
    };
    const onConfirmOrder = () => {
      common_vendor.index.showModal({
        content: "为保障您的权益，请收到货并确认无误后，再确认收货",
        success: async (confirm) => {
          if (confirm) {
            await services_order.putMemberOrderReceiptByIdApi(query.id);
            orderDetailInfo.value.orderState = services_constants.OrderState.YiWanCheng;
          }
        }
      });
    };
    const onCancelOrder = async () => {
      common_vendor.index.showModal({
        content: "确认取消订单？",
        success: async (success) => {
          var _a, _b;
          if (success) {
            (_b = (_a = popup.value) == null ? void 0 : _a.close) == null ? void 0 : _b.call(_a);
            await services_order.putMemberOrderCancelByIdApi(query.id, { cancelReason: reason.value });
            orderDetailInfo.value.orderState = services_constants.OrderState.YiQuXiao;
          }
        }
      });
    };
    const onDeleteOrder = async () => {
      common_vendor.index.showModal({
        content: "确认删除订单？",
        success: async (success) => {
          if (success) {
            await services_order.deleteMemberOrderByIdApi({ ids: [query.id] });
            common_vendor.index.redirectTo({ url: "/packageOrder/list/list" });
          }
        }
      });
    };
    common_vendor.onLoad(() => {
      getMemberOrderData();
    });
    common_vendor.onReady(() => {
      pageInstance.animate(
        ".navbar",
        // 选择器
        [{ backgroundColor: "transparent" }, { backgroundColor: "#f8f8f8" }],
        // 关键帧信息
        1e3,
        // 动画持续时长
        {
          scrollSource: "#scroller",
          // scroll-view 的选择器
          startScrollOffset: 0,
          // 开始滚动偏移量
          endScrollOffset: 50,
          // 停止滚动偏移量
          timeRange: 1e3
          // 时间长度
        }
      );
      pageInstance.animate(".navbar .title", [{ color: "transparent" }, { color: "#000" }], 1e3, {
        scrollSource: "#scroller",
        timeRange: 1e3,
        startScrollOffset: 0,
        endScrollOffset: 50
      });
      pageInstance.animate(".navbar .back", [{ color: "#fff" }, { color: "#000" }], 1e3, {
        scrollSource: "#scroller",
        timeRange: 1e3,
        startScrollOffset: 0,
        endScrollOffset: 50
      });
    });
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
      return common_vendor.e({
        a: common_vendor.unref(pages).length > 1
      }, common_vendor.unref(pages).length > 1 ? {} : {}, {
        b: ((_a = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _a.top) + "px",
        c: orderDetailInfo.value.id
      }, orderDetailInfo.value.id ? common_vendor.e({
        d: ((_b = orderDetailInfo.value) == null ? void 0 : _b.orderState) === common_vendor.unref(services_constants.OrderState).DaiFuKuan
      }, ((_c = orderDetailInfo.value) == null ? void 0 : _c.orderState) === common_vendor.unref(services_constants.OrderState).DaiFuKuan ? {
        e: common_vendor.t((_d = orderDetailInfo.value) == null ? void 0 : _d.payMoney),
        f: common_vendor.o(onTimeup),
        g: common_vendor.p({
          ["show-day"]: false,
          ["show-colon"]: false,
          color: "#fff",
          splitorColor: "#fff",
          second: orderDetailInfo.value.countdown
        }),
        h: common_vendor.o(onPayment)
      } : common_vendor.e({
        i: common_vendor.t(common_vendor.unref(services_constants.orderStateList)[((_e = orderDetailInfo.value) == null ? void 0 : _e.orderState) ?? 0].text),
        j: `/packageOrder/create/create?orderId=${query.id}`,
        k: common_vendor.unref(isDev) && orderDetailInfo.value.orderState === common_vendor.unref(services_constants.OrderState).DaiFaHuo
      }, common_vendor.unref(isDev) && orderDetailInfo.value.orderState === common_vendor.unref(services_constants.OrderState).DaiFaHuo ? {
        l: common_vendor.o(onMockPay)
      } : {}), {
        m: common_vendor.unref(safeAreaInsets).top + 20 + "px",
        n: common_vendor.f((_f = logisticsInfo.value) == null ? void 0 : _f.list, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.text),
            b: common_vendor.t(item.time),
            c: item.id
          };
        }),
        o: common_vendor.t(orderDetailInfo.value.receiverContact + " " + orderDetailInfo.value.receiverMobile),
        p: common_vendor.t(orderDetailInfo.value.receiverAddress),
        q: common_vendor.f((_g = orderDetailInfo.value) == null ? void 0 : _g.skus, (item, k0, i0) => {
          return {
            a: item.image,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.attrsText),
            d: common_vendor.t(item.realPay),
            e: common_vendor.t(item.quantity),
            f: item.spuId,
            g: `/pages/goods/goods?id=${item.id}`
          };
        }),
        r: orderDetailInfo.value.orderState === common_vendor.unref(services_constants.OrderState).DaiPingJia
      }, orderDetailInfo.value.orderState === common_vendor.unref(services_constants.OrderState).DaiPingJia ? {} : {}, {
        s: common_vendor.t((_h = orderDetailInfo.value) == null ? void 0 : _h.totalMoney),
        t: common_vendor.t((_i = orderDetailInfo.value) == null ? void 0 : _i.postFee),
        v: common_vendor.t((_j = orderDetailInfo.value) == null ? void 0 : _j.payMoney),
        w: common_vendor.t(query.id),
        x: common_vendor.o(($event) => onCopy(query.id)),
        y: common_vendor.t((_k = orderDetailInfo.value) == null ? void 0 : _k.createTime),
        z: common_vendor.sr(guessRef, "f50e6700-1", {
          "k": "guessRef"
        }),
        A: ((_l = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _l.bottom) + "px",
        B: orderDetailInfo.value.orderState === common_vendor.unref(services_constants.OrderState).DaiFuKuan
      }, orderDetailInfo.value.orderState === common_vendor.unref(services_constants.OrderState).DaiFuKuan ? {
        C: common_vendor.o(onPayment),
        D: common_vendor.o(($event) => {
          var _a2, _b2;
          return (_b2 = (_a2 = popup.value) == null ? void 0 : _a2.open) == null ? void 0 : _b2.call(_a2);
        })
      } : common_vendor.e({
        E: `/packageOrder/create/create?orderId=${query.id}`,
        F: orderDetailInfo.value.orderState === common_vendor.unref(services_constants.OrderState).DaiShouHuo
      }, orderDetailInfo.value.orderState === common_vendor.unref(services_constants.OrderState).DaiShouHuo ? {
        G: common_vendor.o(onConfirmOrder)
      } : {}, {
        H: orderDetailInfo.value.orderState === common_vendor.unref(services_constants.OrderState).DaiPingJia
      }, orderDetailInfo.value.orderState === common_vendor.unref(services_constants.OrderState).DaiPingJia ? {} : {}, {
        I: orderDetailInfo.value.orderState >= common_vendor.unref(services_constants.OrderState).DaiPingJia
      }, orderDetailInfo.value.orderState >= common_vendor.unref(services_constants.OrderState).DaiPingJia ? {
        J: common_vendor.o(onDeleteOrder)
      } : {}), {
        K: ((_m = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _m.bottom) + "px"
      }) : {}, {
        L: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(onScrollToLower) && common_vendor.unref(onScrollToLower)(...args)
        ),
        M: common_vendor.f(reasonList.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item),
            b: item === reason.value ? 1 : "",
            c: item,
            d: common_vendor.o(($event) => reason.value = item, item)
          };
        }),
        N: common_vendor.o(($event) => {
          var _a2, _b2;
          return (_b2 = (_a2 = popup.value) == null ? void 0 : _a2.close) == null ? void 0 : _b2.call(_a2);
        }),
        O: common_vendor.o(onCancelOrder),
        P: common_vendor.sr(popup, "f50e6700-3", {
          "k": "popup"
        }),
        Q: common_vendor.p({
          type: "bottom",
          ["background-color"]: "#fff"
        })
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Arjence/学习/uniapp/heima-shop/src/packageOrder/detail/detail.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=detail.js.map
