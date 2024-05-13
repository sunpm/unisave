import { isString } from '@/utils'

export function showToast(options: UniNamespace.ShowToastOptions | string) {
  let {
    title = '',
    icon = 'none',
    duration = 2000,
  } = options as UniNamespace.ShowToastOptions
  if (isString(options))
    title = options
  uni.showToast({
    title,
    icon,
    duration,
  })
}

export function showModal({ title = '提示', content, showCancel = true, cancelColor, confirmColor }: UniNamespace.ShowModalOptions = {}): Promise<void> {
  return new Promise((resolve, reject) => {
    uni.showModal({
      title,
      content,
      showCancel,
      cancelColor,
      confirmColor,
      success(res) {
        if (res.confirm)
          resolve()
        else if (res.cancel)
          reject(new Error('用户取消弹窗'))
      },
    })
  })
}
