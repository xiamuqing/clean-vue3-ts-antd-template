import { createApp } from 'vue'
import App from './App.vue'
import MyComponent from './component'
import antd from './plugin/antd'
import { CSRF_NAME } from '@/util/constant'
import router from './router'
import store from './store'
import './style/global.less'
import './style/animation.less'


document.cookie = `${CSRF_NAME}=${Date.now()}+${Math.random()};path=/`

createApp(App)
.use(antd)
.use(MyComponent)
.use(store)
.use(router)
.mount('#app')
