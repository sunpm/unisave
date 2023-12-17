import { createSSRApp } from "vue";
import uviewPlus from 'uview-plus'
import App from "./App.vue";
import 'virtual:uno.css'


export function createApp() {
  const app = createSSRApp(App);
  app.use(uviewPlus)
  return {
    app,
  };
}
