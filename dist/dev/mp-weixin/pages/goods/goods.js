"use strict";
const common_vendor = require("../../common/vendor.js");
const services_goods = require("../../services/goods.js");
const services_cart = require("../../services/cart.js");
require("../../services/index.js");
require("../../stores/index.js");
require("../../stores/modules/member.js");
if (!Array) {
  const _easycom_vk_data_goods_sku_popup2 = common_vendor.resolveComponent("vk-data-goods-sku-popup");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_vk_data_goods_sku_popup2 + _easycom_uni_popup2)();
}
const _easycom_vk_data_goods_sku_popup = () => "../../components/vk-data-goods-sku-popup/vk-data-goods-sku-popup.js";
const _easycom_uni_popup = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_vk_data_goods_sku_popup + ServicePanel + AddressPanel + _easycom_uni_popup)();
}
const ServicePanel = () => "./cpns/ServicePanel.js";
const AddressPanel = () => "./cpns/AddressPanel.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "goods",
  props: {
    id: null
  },
  setup(__props) {
    const props = __props;
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    const showSkuPopup = common_vendor.ref(false);
    const localdata = common_vendor.ref();
    const goodsResult = common_vendor.ref();
    const getGoodsDetailData = async () => {
      const { result } = await services_goods.getGoodsDetailApi(props.id);
      goodsResult.value = result;
      localdata.value = {
        _id: result.id,
        name: result.name,
        goods_thumb: result.mainPictures[0],
        spec_list: result.specs.map((item) => {
          return { name: item.name, list: item.values };
        }),
        sku_list: result.skus.map((item) => {
          return {
            _id: item.id,
            goods_id: result.id,
            goods_name: result.name,
            image: item.picture,
            price: item.price * 100,
            sku_name_arr: item.specs.map((item2) => item2.valueName),
            stock: item.inventory
          };
        })
      };
    };
    const skuMode = common_vendor.ref(
      1
      /* BOTH */
    );
    const onShowSkuPopup = (mode) => {
      skuMode.value = mode;
      showSkuPopup.value = true;
    };
    const skuPopupRef = common_vendor.ref();
    const skuSelectArr = common_vendor.computed(() => {
      var _a, _b;
      return ((_b = (_a = skuPopupRef.value) == null ? void 0 : _a.selectArr) == null ? void 0 : _b.join(" ").trim()) || "请选择商品规格";
    });
    const onAddCart = async (selectShop) => {
      await services_cart.postMemberCartApi({ skuId: selectShop._id, count: selectShop.buy_num });
      common_vendor.index.showToast({ icon: "success", title: "添加成功" });
      showSkuPopup.value = false;
    };
    const currentIndex = common_vendor.ref(0);
    const onSwiperItemChange = (e) => {
      currentIndex.value = e.detail.current;
    };
    const onPreviewImage = (current) => {
      var _a;
      common_vendor.index.previewImage({
        current,
        urls: ((_a = goodsResult.value) == null ? void 0 : _a.mainPictures) || []
      });
    };
    const popup = common_vendor.ref();
    const typeName = common_vendor.ref();
    const onOpenPopup = (type) => {
      var _a;
      console.log(type);
      typeName.value = type;
      (_a = popup.value) == null ? void 0 : _a.open();
    };
    common_vendor.onLoad(() => {
      getGoodsDetailData();
    });
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      return {
        a: common_vendor.sr(skuPopupRef, "2c4bd5ea-0", {
          "k": "skuPopupRef"
        }),
        b: common_vendor.o(onAddCart),
        c: common_vendor.o(($event) => showSkuPopup.value = $event),
        d: common_vendor.p({
          ["buy-now-background-color"]: "#27ba9b",
          ["add-cart-background-color"]: "#ffa868",
          localdata: localdata.value,
          mode: skuMode.value,
          modelValue: showSkuPopup.value
        }),
        e: common_vendor.f((_a = goodsResult.value) == null ? void 0 : _a.mainPictures, (pic, k0, i0) => {
          return {
            a: common_vendor.o(($event) => onPreviewImage(pic), pic),
            b: pic,
            c: pic
          };
        }),
        f: common_vendor.o(onSwiperItemChange),
        g: common_vendor.t(currentIndex.value + 1),
        h: common_vendor.t((_b = goodsResult.value) == null ? void 0 : _b.mainPictures.length),
        i: common_vendor.t((_c = goodsResult.value) == null ? void 0 : _c.price),
        j: common_vendor.t((_d = goodsResult.value) == null ? void 0 : _d.name),
        k: common_vendor.t((_e = goodsResult.value) == null ? void 0 : _e.desc),
        l: common_vendor.t(common_vendor.unref(skuSelectArr)),
        m: common_vendor.o(($event) => onShowSkuPopup(
          1
          /* BOTH */
        )),
        n: common_vendor.o(($event) => onOpenPopup("address")),
        o: common_vendor.o(($event) => onOpenPopup("service")),
        p: common_vendor.f((_f = goodsResult.value) == null ? void 0 : _f.details.properties, (prop, k0, i0) => {
          return {
            a: common_vendor.t(prop.name),
            b: common_vendor.t(prop.value),
            c: prop.name
          };
        }),
        q: common_vendor.f((_g = goodsResult.value) == null ? void 0 : _g.details.pictures, (img, k0, i0) => {
          return {
            a: img,
            b: img
          };
        }),
        r: common_vendor.f((_h = goodsResult.value) == null ? void 0 : _h.similarProducts, (item, k0, i0) => {
          return {
            a: item.picture,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.price),
            d: item.id,
            e: `/pages/goods/goods?id=${item.id}`
          };
        }),
        s: common_vendor.o(($event) => onShowSkuPopup(
          2
          /* CART */
        )),
        t: common_vendor.o(($event) => onShowSkuPopup(
          3
          /* BUY */
        )),
        v: ((_i = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _i.bottom) + "px",
        w: typeName.value === "service",
        x: common_vendor.o(($event) => {
          var _a2;
          return (_a2 = popup.value) == null ? void 0 : _a2.close();
        }),
        y: typeName.value === "address",
        z: common_vendor.o(($event) => {
          var _a2;
          return (_a2 = popup.value) == null ? void 0 : _a2.close();
        }),
        A: common_vendor.sr(popup, "2c4bd5ea-1", {
          "k": "popup"
        }),
        B: common_vendor.p({
          type: "bottom"
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Arjence/学习/uniapp/heima-shop/src/pages/goods/goods.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=goods.js.map
