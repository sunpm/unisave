
## 平台兼容性
在技术考量上，优先同时支持下列的平台，为兼容多个平台而舍弃一些实用的依赖插件。如发现下列平台环境开发编译出现问题，欢迎提 [issue](https://github.com/sunpm/vitesse-uniapp-vue3/issues/new) or [pr](https://github.com/sunpm/vitesse-uniapp-vue3/pulls)

| H5 | IOS  | 安卓 | 微信小程序 | 字节小程序 | 快手小程序 | 支付宝小程序 |
|:--:| :--: | :--: | :--------: | :--------: | :--------: | :----------: |
| √  |  √   |  √   |     √      |     √      |     √      |      √       |

## 环境建议
**Node >= 18**

[//]: # (**pnpm 8**)

## 使用该模版
```sh
npx degit sunpm/vitesse-uniapp-vue3#main my-vitesse-uniapp-vue3
cd my-vitesse-uniapp-vue3
#pnpm i # 如果你没装过 pnpm, 可以先运行: npm install -g pnpm
```

## 预配置

### UI 框架
- [uview-plus](https://uiadmin.net/uview-plus) uview-plus3.0是基于uView2.x修改的vue3版本
- [unocss](https://github.com/unocss/unocss) 即时按需原子 css 引擎
- [unocss-preset-uni](https://github.com/uni-helper/unocss-preset-uni) 专为 uni-app 打造的 UnoCSS 预设
