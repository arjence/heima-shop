"use strict";
const services_index = require("./index.js");
const getMemberProfileApi = () => {
  return services_index.http.get({ url: "/member/profile" });
};
const putMemberProfileApi = (data) => {
  return services_index.http.put({ url: "/member/profile", data });
};
exports.getMemberProfileApi = getMemberProfileApi;
exports.putMemberProfileApi = putMemberProfileApi;
//# sourceMappingURL=profile.js.map
