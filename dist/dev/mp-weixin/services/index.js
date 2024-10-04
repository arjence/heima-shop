"use strict";
const common_vendor = require("../common/vendor.js");
require("../stores/index.js");
const stores_modules_member = require("../stores/modules/member.js");
class Http {
  // baseURL: String = ''
  // constructor(baseURL: String) {
  //   this.baseURL = baseURL
  // }
  constructor() {
  }
  request(options) {
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
  put(options) {
    return this.request({ ...options, method: "PUT" });
  }
  delete(options) {
    return this.request({ ...options, method: "DELETE" });
  }
}
const baseURL = "https://pcapi-xiaotuxian-front-devtest.itheima.net";
const httpInterceptor = {
  // 拦截前触发
  invoke(options) {
    var _a;
    if (!options.url.startsWith("http")) {
      options.url = baseURL + options.url;
    }
    options.timeout = 1e4;
    options.header = {
      "source-client": "miniapp",
      ...options.header
    };
    const memberStore = stores_modules_member.useMemberStore();
    const token = (_a = memberStore.profile) == null ? void 0 : _a.token;
    if (token) {
      options.header.Authorization = token;
    }
  }
};
common_vendor.index.addInterceptor("request", httpInterceptor);
common_vendor.index.addInterceptor("uploadFile", httpInterceptor);
const http = new Http();
exports.http = http;
//# sourceMappingURL=index.js.map
