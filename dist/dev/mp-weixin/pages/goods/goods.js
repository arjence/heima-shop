"use strict";
const common_vendor = require("../../common/vendor.js");
const services_goods = require("../../services/goods.js");
require("../../services/index.js");
require("../../stores/index.js");
require("../../stores/modules/member.js");
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  _easycom_uni_popup2();
}
const _easycom_uni_popup = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup.js";
if (!Math) {
  (ServicePanel + AddressPanel + _easycom_uni_popup)();
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
    const goodsResult = common_vendor.ref();
    const getGoodsDetailData = async () => {
      const { result } = await services_goods.getGoodsDetailApi(props.id);
      goodsResult.value = result;
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
        a: common_vendor.f((_a = goodsResult.value) == null ? void 0 : _a.mainPictures, (pic, k0, i0) => {
          return {
            a: common_vendor.o(($event) => onPreviewImage(pic), pic),
            b: pic,
            c: pic
          };
        }),
        b: common_vendor.o(onSwiperItemChange),
        c: common_vendor.t(currentIndex.value + 1),
        d: common_vendor.t((_b = goodsResult.value) == null ? void 0 : _b.mainPictures.length),
        e: common_vendor.t((_c = goodsResult.value) == null ? void 0 : _c.price),
        f: common_vendor.t((_d = goodsResult.value) == null ? void 0 : _d.name),
        g: common_vendor.t((_e = goodsResult.value) == null ? void 0 : _e.desc),
        h: common_vendor.o(($event) => onOpenPopup("address")),
        i: common_vendor.o(($event) => onOpenPopup("service")),
        j: common_vendor.f((_f = goodsResult.value) == null ? void 0 : _f.details.properties, (prop, k0, i0) => {
          return {
            a: common_vendor.t(prop.name),
            b: common_vendor.t(prop.value),
            c: prop.name
          };
        }),
        k: common_vendor.f((_g = goodsResult.value) == null ? void 0 : _g.details.pictures, (img, k0, i0) => {
          return {
            a: img,
            b: img
          };
        }),
        l: common_vendor.f((_h = goodsResult.value) == null ? void 0 : _h.similarProducts, (item, k0, i0) => {
          return {
            a: item.picture,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.price),
            d: item.id,
            e: `/pages/goods/goods?id=${item.id}`
          };
        }),
        m: ((_i = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _i.bottom) + "px",
        n: typeName.value === "service",
        o: common_vendor.o(($event) => {
          var _a2;
          return (_a2 = popup.value) == null ? void 0 : _a2.close();
        }),
        p: typeName.value === "address",
        q: common_vendor.o(($event) => {
          var _a2;
          return (_a2 = popup.value) == null ? void 0 : _a2.close();
        }),
        r: common_vendor.sr(popup, "2c4bd5ea-0", {
          "k": "popup"
        }),
        s: common_vendor.p({
          type: "bottom"
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Arjence/学习/uniapp/heima-shop/src/pages/goods/goods.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=goods.js.map
