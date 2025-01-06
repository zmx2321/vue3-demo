import DataVVue3 from '@kjgl77/datav-vue3'
import { createApp } from 'vue'
import App from './App.vue'
// 页面样式
import '@/styles/index.scss'
// eslint-disable-next-line import/order
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import components from '@/components/index.js'

// svg-icons
import 'virtual:svg-icons-register'
//  vue router
import router from './router'
// pinia store
import pinia from '@/store'
// errorHandler
import errorHandler from '@/utils/errorHandler'
// custom directives
import directives from '@/directives/index'
import ElementPlus from 'element-plus'  //引入element-plus库

const app = createApp(App)

/* import VForm3 from 'vform3-builds'  //引入VForm3库
import 'vform3-builds/dist/designer.style.css'  //引入VForm3样式 */

app.config.errorHandler = errorHandler
Object.entries(ElementPlusIconsVue).forEach(([key, component]) => {
  app.component(key, component)
})

app.use(ElementPlus)  //全局注册element-plus
app.use(VForm3) //使用VForm3库

app.use(DataVVue3)
app.use(pinia).use(directives).use(router).use(components).mount('#app')
