import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist-uni'

export * from './modules'

export const pinia = createPinia()

pinia.use(piniaPersist)
