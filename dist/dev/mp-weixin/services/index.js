"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const common_vendor = require("../common/vendor.js");
require("../stores/index.js");
const stores_modules_member = require("../stores/modules/member.js");
class Http {
  constructor(baseURL) {
    __publicField(this, "baseURL", "");
    this.baseURL = baseURL;
  }
  request(options) {
    options.url = this.baseURL + options.url;
    options.timeout = 1e4;
    options.header = {
      ...options.header,
      "source-client": "miniapp"
    };
    const { profile } = stores_modules_member.useMemberStore();
    const token = profile == null ? void 0 : profile.token;
    if (token) {
      options.header.Authorization = token;
    }
    return new Promise((resolve, reject) => {
      common_vendor.index.request({
        ...options,
        success(res) {
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve(res.data);
          } else if (res.statusCode === 401) {
            const store = stores_modules_member.useMemberStore();
            store.clearProfile();
            common_vendor.index.navigateTo({
              url: "/pages/login/login"
            });
          } else {
            common_vendor.index.showToast({
              icon: "none",
              title: res.data.msg || "数据获取失败"
            });
            reject(res);
          }
        },
        fail: (err) => {
          common_vendor.index.showToast({
            icon: "none",
            title: "网络错误，请切换网路！"
          });
          reject(err);
        }
      });
    });
  }
  get(options) {
    return this.request({ ...options, method: "GET" });
  }
  post(options) {
    return this.request({ ...options, method: "POST" });
  }
}
const http = new Http("https://pcapi-xiaotuxian-front-devtest.itheima.net");
exports.http = http;
//# sourceMappingURL=index.js.map
