export const debounce = (
  fn: (...args: any) => void,
  delay: number,
  _immediate: boolean = false,
  callBack?: (...args: any) => void,
) => {
  let timer: number = 0
  let immediate = _immediate
  function _debounce(event: any) {
    if (immediate) {
      const res: any = fn.call(this as any, event)
      callBack && callBack(res)
      immediate = false
      return
    }

    if (timer) {
      clearTimeout(timer)
      timer = 0
    }
    timer = setTimeout(() => {
      const res = fn.call(this as any, event)
      callBack && callBack(res)
    }, delay)
  }

  _debounce.cancel = () => {
    clearTimeout(timer)
    timer = 0
  }

  return _debounce
}
