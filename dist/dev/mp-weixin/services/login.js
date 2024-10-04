"use strict";
const services_index = require("./index.js");
const postLoginWxMin = (data) => {
  return services_index.http.post({ url: "/login/wxMin", data });
};
const postLoginWxMinSimple = () => {
  return services_index.http.post({ url: "/login/wxMin/simple", data: { phoneNumber: "13028128550" } });
};
exports.postLoginWxMin = postLoginWxMin;
exports.postLoginWxMinSimple = postLoginWxMinSimple;
//# sourceMappingURL=login.js.map
