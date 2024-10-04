"use strict";
const common_vendor = require("../../common/vendor.js");
const services_address = require("../../services/address.js");
require("../../services/index.js");
require("../../stores/index.js");
require("../../stores/modules/member.js");
if (!Array) {
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_forms_item2 + _easycom_uni_forms2)();
}
const _easycom_uni_forms_item = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_forms_item + _easycom_uni_forms)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "address-form",
  props: {
    id: null
  },
  setup(__props) {
    const props = __props;
    const form = common_vendor.ref({
      receiver: "",
      // 收货人
      contact: "",
      // 联系方式
      fullLocation: "",
      // 省市区(前端展示)
      provinceCode: "",
      // 省份编码(后端参数)
      cityCode: "",
      // 城市编码(后端参数)
      countyCode: "",
      // 区/县编码(后端参数)
      address: "",
      // 详细地址
      isDefault: 0
      // 默认地址，1为是，0为否
    });
    const formRef = common_vendor.ref();
    const formRules = {
      receiver: {
        rules: [{ required: true, errorMessage: "收货人名称不能为空" }]
      },
      contact: {
        rules: [
          { required: true, errorMessage: "联系方式不能为空" },
          { pattern: /^1[3-9]\d{9}$/, errorMessage: "请输入正确的联系方式" }
        ]
      },
      fullLocation: {
        rules: [{ required: true, errorMessage: "地区信息不能为空" }]
      },
      address: {
        rules: [{ required: true, errorMessage: "详细地址不能为空" }]
      }
    };
    const getMemberAddressDataById = async () => {
      const { result } = await services_address.getMemberAddressByIdApi(props.id);
      form.value = result;
    };
    const onRegionChange = (e) => {
      form.value.fullLocation = e.detail.value.join(" ");
      form.value.provinceCode = e.detail.code[0];
      form.value.cityCode = e.detail.code[1];
      form.value.countyCode = e.detail.code[2];
    };
    const onSwitchChange = (e) => {
      form.value.isDefault = e.detail.value ? 1 : 0;
    };
    const onSubmit = async () => {
      var _a, _b;
      await ((_b = (_a = formRef.value) == null ? void 0 : _a.validate) == null ? void 0 : _b.call(_a));
      if (props.id) {
        await services_address.putMemberAddressByIdApi(props.id, form.value);
      } else {
        await services_address.postMemberAddressApi(form.value);
      }
      common_vendor.index.showToast({ icon: "success", title: props.id ? "编辑成功" : "新增成功" });
      setTimeout(() => {
        common_vendor.index.navigateBack();
      }, 500);
    };
    common_vendor.onLoad(() => {
      if (props.id) {
        getMemberAddressDataById();
        common_vendor.index.setNavigationBarTitle({ title: "修改地址" });
      } else {
        common_vendor.index.setNavigationBarTitle({ title: "新增地址" });
      }
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: form.value.receiver,
        b: common_vendor.o(($event) => form.value.receiver = $event.detail.value),
        c: common_vendor.p({
          name: "receiver"
        }),
        d: form.value.contact,
        e: common_vendor.o(($event) => form.value.contact = $event.detail.value),
        f: common_vendor.p({
          name: "contact"
        }),
        g: form.value.fullLocation
      }, form.value.fullLocation ? {
        h: common_vendor.t(form.value.fullLocation)
      } : {}, {
        i: form.value.fullLocation,
        j: common_vendor.o(onRegionChange),
        k: common_vendor.p({
          name: "fullLocation"
        }),
        l: form.value.address,
        m: common_vendor.o(($event) => form.value.address = $event.detail.value),
        n: common_vendor.p({
          name: "address"
        }),
        o: form.value.isDefault === 1,
        p: common_vendor.o(onSwitchChange),
        q: common_vendor.sr(formRef, "0397b358-0", {
          "k": "formRef"
        }),
        r: common_vendor.p({
          modelValue: form.value,
          rules: formRules
        }),
        s: common_vendor.o(onSubmit)
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Arjence/学习/uniapp/heima-shop/src/packageMember/address-form/address-form.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=address-form.js.map
