"use strict";
const services_index = require("./index.js");
const getHotRecommendApi = (url, data) => {
  return services_index.http.get({ url, data });
};
exports.getHotRecommendApi = getHotRecommendApi;
//# sourceMappingURL=hot.js.map
