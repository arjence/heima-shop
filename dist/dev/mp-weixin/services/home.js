"use strict";
const services_index = require("./index.js");
const getHomeBannerApi = (distributionSite = 1) => {
  return services_index.http.get({ url: "/home/banner", data: { distributionSite } });
};
const getHomeCategoryMutliApi = () => {
  return services_index.http.get({ url: "/home/category/mutli" });
};
const getHomeHotMutliApi = () => {
  return services_index.http.get({ url: "/home/hot/mutli" });
};
const getHomeGoodsGuessLikeApi = ({ page = 1, pageSize = 10 }) => {
  return services_index.http.get({ url: "/home/goods/guessLike", data: { page, pageSize } });
};
exports.getHomeBannerApi = getHomeBannerApi;
exports.getHomeCategoryMutliApi = getHomeCategoryMutliApi;
exports.getHomeGoodsGuessLikeApi = getHomeGoodsGuessLikeApi;
exports.getHomeHotMutliApi = getHomeHotMutliApi;
//# sourceMappingURL=home.js.map
