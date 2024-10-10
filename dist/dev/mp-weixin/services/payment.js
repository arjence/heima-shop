"use strict";
const services_index = require("./index.js");
const getPayMockAPI = (data) => {
  return services_index.http.get({
    url: "/pay/mock",
    data
  });
};
exports.getPayMockAPI = getPayMockAPI;
//# sourceMappingURL=payment.js.map
