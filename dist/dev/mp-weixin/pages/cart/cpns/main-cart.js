"use strict";
const common_vendor = require("../../../common/vendor.js");
const services_cart = require("../../../services/cart.js");
const utils_debounce = require("../../../utils/debounce.js");
const composables_useGuess = require("../../../composables/useGuess.js");
require("../../../services/index.js");
require("../../../stores/index.js");
require("../../../stores/modules/member.js");
if (!Array) {
  const _easycom_vk_data_input_number_box2 = common_vendor.resolveComponent("vk-data-input-number-box");
  const _easycom_uni_swipe_action_item2 = common_vendor.resolveComponent("uni-swipe-action-item");
  const _easycom_uni_swipe_action2 = common_vendor.resolveComponent("uni-swipe-action");
  const _easycom_XtxGuess2 = common_vendor.resolveComponent("XtxGuess");
  (_easycom_vk_data_input_number_box2 + _easycom_uni_swipe_action_item2 + _easycom_uni_swipe_action2 + _easycom_XtxGuess2)();
}
const _easycom_vk_data_input_number_box = () => "../../../components/vk-data-input-number-box/vk-data-input-number-box.js";
const _easycom_uni_swipe_action_item = () => "../../../node-modules/@dcloudio/uni-ui/lib/uni-swipe-action-item/uni-swipe-action-item.js";
const _easycom_uni_swipe_action = () => "../../../node-modules/@dcloudio/uni-ui/lib/uni-swipe-action/uni-swipe-action.js";
const _easycom_XtxGuess = () => "../../../components/XtxGuess.js";
if (!Math) {
  (_easycom_vk_data_input_number_box + _easycom_uni_swipe_action_item + _easycom_uni_swipe_action + _easycom_XtxGuess)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "main-cart",
  props: {
    isTab: { type: Boolean }
  },
  setup(__props) {
    let { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    const { guessRef, onScrollToLower } = composables_useGuess.useGuess();
    const memberCartList = common_vendor.ref([]);
    const getMemberCartData = async () => {
      const { result } = await services_cart.getMemberCartApi();
      memberCartList.value = result;
    };
    const onDelete = (skuId) => {
      common_vendor.index.showModal({
        content: "确定删除吗？",
        success: async (success) => {
          if (success) {
            const { result } = await services_cart.deleteMemberCartBySkuIdsApi([skuId]);
            if (result) {
              const index = memberCartList.value.findIndex((item) => item.skuId === skuId);
              memberCartList.value.splice(index, 1);
            } else {
              common_vendor.index.showToast({ icon: "fail", title: "删除失败，请重试！" });
            }
          }
        }
      });
    };
    const onChangeCount = utils_debounce.debounce((e) => {
      services_cart.putMemberCartBySkuIdApi(e.index, { count: e.value });
    }, 200);
    const onChangeSelect = (item) => {
      item.selected = !item.selected;
      services_cart.putMemberCartBySkuIdApi(item.skuId, { selected: item.selected });
    };
    const selectAll = common_vendor.computed(() => memberCartList.value.every((item) => item.selected), {});
    const changeSelectAll = () => {
      const _selectAll = !selectAll.value;
      memberCartList.value.forEach((item) => item.selected = _selectAll);
      services_cart.putMemberCartSelectedApi(_selectAll);
    };
    const selectedList = common_vendor.computed(() => memberCartList.value.filter((item) => item.selected));
    const selectedAllCount = common_vendor.computed(() => {
      return selectedList.value.reduce((pre, cur) => pre + cur.count, 0);
    });
    const selectedAccount = common_vendor.computed(() => {
      return selectedList.value.reduce((pre, cur) => pre + cur.nowPrice * 100 * cur.count / 100, 0);
    });
    const onSettleAccount = () => {
      if (selectedList.value.length === 0) {
        return common_vendor.index.showToast({
          title: "请选择商品！"
        });
      }
      common_vendor.index.navigateTo({ url: "/packageOrder/create/create" });
    };
    common_vendor.onShow(() => {
      getMemberCartData();
    });
    return (_ctx, _cache) => {
      var _a;
      return common_vendor.e(common_vendor.e({
        a: memberCartList.value.length
      }, memberCartList.value.length ? {
        b: common_vendor.f(memberCartList.value, (item, k0, i0) => {
          return {
            a: common_vendor.o(($event) => onChangeSelect(item), item.skuId),
            b: item.selected ? 1 : "",
            c: item.picture,
            d: common_vendor.t(item.name),
            e: common_vendor.t(item.attrsText),
            f: common_vendor.t(item.nowPrice),
            g: `/pages/goods/goods?id=${item.id}`,
            h: common_vendor.o(common_vendor.unref(onChangeCount), item.skuId),
            i: "6e5cbfb3-2-" + i0 + "," + ("6e5cbfb3-1-" + i0),
            j: common_vendor.o(($event) => item.count = $event, item.skuId),
            k: common_vendor.p({
              min: 1,
              max: item.stock,
              index: item.skuId,
              modelValue: item.count
            }),
            l: common_vendor.o(($event) => onDelete(item.skuId), item.skuId),
            m: item.skuId,
            n: "6e5cbfb3-1-" + i0 + ",6e5cbfb3-0"
          };
        })
      } : {}, {
        c: common_vendor.o(changeSelectAll),
        d: common_vendor.unref(selectAll) ? 1 : "",
        e: common_vendor.t(common_vendor.unref(selectedAccount)),
        f: common_vendor.t(common_vendor.unref(selectedAllCount)),
        g: common_vendor.o(onSettleAccount),
        h: common_vendor.unref(selectedList).length === 0 ? 1 : "",
        i: (__props.isTab ? 0 : (_a = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _a.bottom) + "px"
      }), {
        j: common_vendor.sr(guessRef, "6e5cbfb3-3", {
          "k": "guessRef"
        }),
        k: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(onScrollToLower) && common_vendor.unref(onScrollToLower)(...args)
        )
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Arjence/学习/uniapp/heima-shop/src/pages/cart/cpns/main-cart.vue"]]);
wx.createComponent(Component);
//# sourceMappingURL=main-cart.js.map
