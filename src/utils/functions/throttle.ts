// throttle（节流）。优化处理频繁触发的事件（例如窗口的 resize、scroll 事件或者是键盘事件等）。其核心思想是在一定时间内，不管你触发了多少次回调，我都只执行一次。
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  wait: number = 500,
  immediate: boolean = true,
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null
  let initialCall = true

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    const callNow = immediate && initialCall
    const next = () => {
      func.apply(this as ThisParameterType<T>, args)
      timeout = null
    }

    if (callNow) {
      initialCall = false
      next()
    }

    if (!timeout) {
      timeout = setTimeout(() => {
        initialCall = true // Reset initial call for the next debounce delay
        next()
      }, wait)
    }
  }
}
