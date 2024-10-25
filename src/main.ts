import { pinia } from '@/stores'
import { createSSRApp } from 'vue'
import App from './App.vue'
import 'uno.css'

export function createApp() {
  const app = createSSRApp(App)
  app.use(pinia)
  return {
    app,
  }
}
