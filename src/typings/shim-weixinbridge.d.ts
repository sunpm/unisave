declare namespace WeixinJSBridge {
  interface WxBridgeInvoke {
    appId: string

    timeStamp: string

    nonceStr: string

    package: string

    signType: string

    paySign: string
  }

  // eslint-disable-next-line ts/no-unsafe-function-type
  function invoke(key: string, obj: WxBridgeInvoke, cb: Function): void
}
