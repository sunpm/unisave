import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  easycom: {
    // 注意一定要放在custom里，否则无效，https://ask.dcloud.net.cn/question/131175
    custom: {
      '^u--(.*)': 'uview-plus/components/u-$1/u-$1.vue',
      '^up-(.*)': 'uview-plus/components/u-$1/u-$1.vue',
      '^u-([^-].*)': 'uview-plus/components/u-$1/u-$1.vue',
    },
  },
  // 你也可以定义 pages 字段，它具有最高的优先级。
  pages: [],
  globalStyle: {
    'navigationBarBackgroundColor': '#fff',
    'backgroundColor': '#fff',
    'navigationBarTextStyle': 'black',
    'navigationBarTitleText': 'vitesse-uniapp-vue3',
    'app-plus': {
      titleNView: false, // 移除 H5、APP 顶部导航
    },
  },
})
