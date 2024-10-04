"use strict";
const services_index = require("./index.js");
const postMemberCartApi = (data) => {
  return services_index.http.post({ url: "/member/cart", data });
};
const getMemberCartApi = () => {
  return services_index.http.get({ url: "/member/cart" });
};
exports.getMemberCartApi = getMemberCartApi;
exports.postMemberCartApi = postMemberCartApi;
//# sourceMappingURL=cart.js.map
