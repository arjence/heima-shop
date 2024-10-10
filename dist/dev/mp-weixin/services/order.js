"use strict";
const services_index = require("./index.js");
const getMemberOrderPreApi = () => {
  return services_index.http.get({ url: "/member/order/pre" });
};
const getMemberOrderPreNowApi = (data) => {
  return services_index.http.get({ url: "/member/order/pre/now", data });
};
const postMemberOrderApi = (data) => {
  return services_index.http.post({ url: "/member/order", data });
};
const getMemberOrderByIdApi = (id) => {
  return services_index.http.get({ url: `/member/order/${id}` });
};
const getMemberOrderRepurchaseByIdApi = (orderId) => {
  return services_index.http.get({ url: `/member/order/repurchase/${orderId}` });
};
const getMockPayApi = (id) => {
  return services_index.http.get({ url: `/member/order/consignment/${id}` });
};
const getMemberOrderLogisticsById = (id) => {
  return services_index.http.get({ url: `/member/order/${id}/logistics` });
};
const putMemberOrderReceiptByIdApi = (id) => {
  return services_index.http.put({ url: `/member/order/${id}/receipt` });
};
const putMemberOrderCancelByIdApi = (id, data) => {
  return services_index.http.put({ url: `/member/order/${id}/cancel`, data });
};
const deleteMemberOrderByIdApi = (data) => {
  return services_index.http.delete({ url: `/member/order`, data });
};
const getMemberOrderApi = (data) => {
  return services_index.http.get({ url: "/member/order", data });
};
exports.deleteMemberOrderByIdApi = deleteMemberOrderByIdApi;
exports.getMemberOrderApi = getMemberOrderApi;
exports.getMemberOrderByIdApi = getMemberOrderByIdApi;
exports.getMemberOrderLogisticsById = getMemberOrderLogisticsById;
exports.getMemberOrderPreApi = getMemberOrderPreApi;
exports.getMemberOrderPreNowApi = getMemberOrderPreNowApi;
exports.getMemberOrderRepurchaseByIdApi = getMemberOrderRepurchaseByIdApi;
exports.getMockPayApi = getMockPayApi;
exports.postMemberOrderApi = postMemberOrderApi;
exports.putMemberOrderCancelByIdApi = putMemberOrderCancelByIdApi;
exports.putMemberOrderReceiptByIdApi = putMemberOrderReceiptByIdApi;
//# sourceMappingURL=order.js.map
