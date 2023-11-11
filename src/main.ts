import { createApp } from 'vue'

import App from './App.vue'
// import './style.css'
import './index.css'
import router from './router'
import Vueform from '@vueform/vueform'
import vueformConfig from './../vueform.config'


const app = createApp(App)
app.use(router)

app.use(Vueform, vueformConfig)
app.mount('#app')
