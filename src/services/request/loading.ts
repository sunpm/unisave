// 全局 loading 提示框
export class Loading {
  times = 0
  timer: ReturnType<typeof setTimeout> = Number.NaN

  show(loading: boolean) {
    if (!loading)
      return // 如果传入的 loading 属性为 false，则不处理

    clearTimeout(this.timer) // 如果有多个请求同时进行，则用最后请求的 loading
    this.times++
    this.timer = setTimeout(() => {
      uni.showLoading({
        title: loading && '加载中',
        mask: true,
      })
    }, 300) // 设定延迟，如果请求超过 300ms 才显示 loading
  }

  hide(loading: boolean) {
    if (!loading)
      return

    this.times--
    if (this.times <= 0) {
      clearTimeout(this.timer)
      uni.hideLoading()
      this.times = 0
    }
  }
}
