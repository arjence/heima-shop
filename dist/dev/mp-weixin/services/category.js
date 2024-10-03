"use strict";
const services_index = require("./index.js");
const getCategoryTopApi = () => {
  return services_index.http.get({ url: "/category/top" });
};
exports.getCategoryTopApi = getCategoryTopApi;
//# sourceMappingURL=category.js.map
