"use strict";
const common_vendor = require("../../common/vendor.js");
const services_profile = require("../../services/profile.js");
require("../../stores/index.js");
const stores_modules_member = require("../../stores/modules/member.js");
require("../../services/index.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "profile",
  setup(__props) {
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    const memberStore = stores_modules_member.useMemberStore();
    const memberInfo = common_vendor.ref({});
    const getProfileData = async () => {
      const { result } = await services_profile.getMemberProfileApi();
      memberInfo.value = result;
    };
    const onAvatarChange = () => {
      common_vendor.index.chooseMedia({
        count: 1,
        mediaType: ["image"],
        success: ({ tempFiles }) => {
          const filePath = tempFiles[0].tempFilePath;
          console.log(filePath);
          common_vendor.index.uploadFile({
            url: "/member/profile/avatar",
            name: "file",
            filePath,
            success: (res) => {
              if (res.statusCode === 200) {
                const { avatar } = JSON.parse(res.data).result;
                memberInfo.value.avatar = avatar;
                memberStore.profile.avatar = avatar;
                common_vendor.index.showToast({ icon: "success", title: "更新成功" });
              } else {
                common_vendor.index.showToast({ icon: "error", title: "出现错误" });
              }
            },
            fail: (fail) => {
              console.log(fail);
            }
          });
        }
      });
    };
    const onGenderChange = (e) => {
      memberInfo.value.gender = e.detail.value;
    };
    const onDateChange = (e) => {
      memberInfo.value.birthday = e.detail.value;
    };
    let fullLocation = ["", "", ""];
    const onRegionChange = (e) => {
      fullLocation = e.detail.code;
      memberInfo.value.fullLocation = e.detail.value.join(" ");
    };
    const onSubmit = async () => {
      const data = {
        nickname: memberInfo.value.nickname,
        gender: memberInfo.value.gender,
        birthday: memberInfo.value.birthday,
        provinceCode: fullLocation[0],
        cityCode: fullLocation[1],
        countyCode: fullLocation[2],
        profession: memberInfo.value.profession
      };
      const { result } = await services_profile.putMemberProfileApi(data);
      memberInfo.value = result;
      memberStore.profile.nickname = memberInfo.value.nickname;
      common_vendor.index.showToast({ icon: "success", title: "修改成功" });
      setTimeout(() => {
        common_vendor.index.navigateBack();
      }, 500);
    };
    common_vendor.onLoad(() => {
      getProfileData();
    });
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
      return common_vendor.e({
        a: ((_a = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _a.top) + "px",
        b: (_b = memberInfo.value) == null ? void 0 : _b.avatar,
        c: common_vendor.o(onAvatarChange),
        d: common_vendor.t((_c = memberInfo.value) == null ? void 0 : _c.account),
        e: memberInfo.value.nickname,
        f: common_vendor.o(($event) => memberInfo.value.nickname = $event.detail.value),
        g: ((_d = memberInfo.value) == null ? void 0 : _d.gender) === "男",
        h: ((_e = memberInfo.value) == null ? void 0 : _e.gender) === "女",
        i: common_vendor.o(onGenderChange),
        j: (_f = memberInfo.value) == null ? void 0 : _f.birthday
      }, ((_g = memberInfo.value) == null ? void 0 : _g.birthday) ? {
        k: common_vendor.t((_h = memberInfo.value) == null ? void 0 : _h.birthday)
      } : {}, {
        l: /* @__PURE__ */ new Date(),
        m: (_i = memberInfo.value) == null ? void 0 : _i.birthday,
        n: common_vendor.o(onDateChange),
        o: (_j = memberInfo.value) == null ? void 0 : _j.fullLocation
      }, ((_k = memberInfo.value) == null ? void 0 : _k.fullLocation) ? {
        p: common_vendor.t((_l = memberInfo.value) == null ? void 0 : _l.fullLocation)
      } : {}, {
        q: (_n = (_m = memberInfo.value) == null ? void 0 : _m.fullLocation) == null ? void 0 : _n.split(" "),
        r: common_vendor.o(onRegionChange),
        s: memberInfo.value.profession,
        t: common_vendor.o(($event) => memberInfo.value.profession = $event.detail.value),
        v: common_vendor.o(onSubmit)
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Arjence/学习/uniapp/heima-shop/src/packageMember/profile/profile.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=profile.js.map
