"use strict";
const services_index = require("./index.js");
const getGoodsDetailApi = (id) => {
  return services_index.http.get({ url: `/goods?id=${id}` });
};
exports.getGoodsDetailApi = getGoodsDetailApi;
//# sourceMappingURL=goods.js.map
