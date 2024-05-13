// 防抖函数（debounce）。优化处理频繁触发的事件（如键盘输入、窗口大小调整等）时。与节流函数类似，防抖函数通过延迟执行来减少函数调用的频率，但它的工作方式略有不同：防抖函数会在事件停止触发后的一段时间才执行函数，如果在这段时间内事件再次被触发，则重新计时。
export function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number = 500,
  immediate: boolean = false,
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    const later = () => {
      timeoutId = null
      if (!immediate)
        func.apply(this as ThisParameterType<T>, args)
    }

    const shouldCallNow = immediate && timeoutId === null

    if (timeoutId !== null)
      clearTimeout(timeoutId)

    timeoutId = setTimeout(later, wait)

    if (shouldCallNow)
      func.apply(this, args)
  }
}
