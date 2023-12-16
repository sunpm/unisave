/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module "uview-plus" {
  import v3 from "@ttou/uview-typings/v3"
  export default v3.GlobalComponents
}

// 重写 u--form ref 类型
declare interface _FormRef extends _FormRef{
  validateField: (value, cb?: ((errorsRes) => any)) => any
}
