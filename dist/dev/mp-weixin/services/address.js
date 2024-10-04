"use strict";
const services_index = require("./index.js");
const getMemberAddressApi = () => {
  return services_index.http.get({ url: "/member/address" });
};
const postMemberAddressApi = (data) => {
  return services_index.http.post({ url: "/member/address", data });
};
const putMemberAddressByIdApi = (id, data) => {
  return services_index.http.put({ url: `/member/address/${id}`, data });
};
const getMemberAddressByIdApi = (id) => {
  return services_index.http.get({ url: `/member/address/${id}` });
};
const deleteMemberAddressByIdApi = (id) => {
  return services_index.http.delete({ url: `/member/address/${id}` });
};
exports.deleteMemberAddressByIdApi = deleteMemberAddressByIdApi;
exports.getMemberAddressApi = getMemberAddressApi;
exports.getMemberAddressByIdApi = getMemberAddressByIdApi;
exports.postMemberAddressApi = postMemberAddressApi;
exports.putMemberAddressByIdApi = putMemberAddressByIdApi;
//# sourceMappingURL=address.js.map
