"use strict";
const services_index = require("./index.js");
const postMemberCartApi = (data) => {
  return services_index.http.post({ url: "/member/cart", data });
};
const getMemberCartApi = () => {
  return services_index.http.get({ url: "/member/cart" });
};
const deleteMemberCartBySkuIdsApi = (ids) => {
  return services_index.http.delete({ url: "/member/cart", data: { ids } });
};
const putMemberCartBySkuIdApi = (skuId, data) => {
  return services_index.http.put({ url: `/member/cart/${skuId}`, data });
};
const putMemberCartSelectedApi = (selected) => {
  return services_index.http.put({ url: `/member/cart/selected`, data: { selected } });
};
exports.deleteMemberCartBySkuIdsApi = deleteMemberCartBySkuIdsApi;
exports.getMemberCartApi = getMemberCartApi;
exports.postMemberCartApi = postMemberCartApi;
exports.putMemberCartBySkuIdApi = putMemberCartBySkuIdApi;
exports.putMemberCartSelectedApi = putMemberCartSelectedApi;
//# sourceMappingURL=cart.js.map
