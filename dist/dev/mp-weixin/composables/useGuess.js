"use strict";
const common_vendor = require("../common/vendor.js");
const useGuess = () => {
  const guessRef = common_vendor.ref();
  const onScrollToLower = () => {
    var _a;
    (_a = guessRef.value) == null ? void 0 : _a.getGuessLikeList();
  };
  return {
    guessRef,
    onScrollToLower
  };
};
exports.useGuess = useGuess;
//# sourceMappingURL=useGuess.js.map
