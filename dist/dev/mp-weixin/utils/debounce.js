"use strict";
const debounce = (fn, delay, _immediate = false, callBack) => {
  let timer = 0;
  let immediate = _immediate;
  function _debounce(event) {
    if (immediate) {
      const res = fn.call(this, event);
      callBack && callBack(res);
      immediate = false;
      return;
    }
    if (timer) {
      clearTimeout(timer);
      timer = 0;
    }
    timer = setTimeout(() => {
      const res = fn.call(this, event);
      callBack && callBack(res);
    }, delay);
  }
  _debounce.cancel = () => {
    clearTimeout(timer);
    timer = 0;
  };
  return _debounce;
};
exports.debounce = debounce;
//# sourceMappingURL=debounce.js.map
