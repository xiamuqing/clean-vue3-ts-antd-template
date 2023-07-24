import { createApp } from 'vue'
import App from './App.vue'
import MyComponent from './component'
import antd from './plugin/antd'
import { CSRF_NAME } from '@/util/constant'
import router from './router'
import store from './store'
import './style/global.less'
import './style/animation.less'
import LazyImg from 'vue3-lazy-img'
// import LazyImg from '../src/lib/dist/index.js'
import 'vue3-lazy-img/dist/index.css' 

document.cookie = `${CSRF_NAME}=${Date.now()}+${Math.random()};path=/`

createApp(App)
.use(antd)
.use(MyComponent)
.use(store)
.use(LazyImg)
.use(router)
.mount('#app')
