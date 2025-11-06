// This is the entry file for the Webpack project
import { foo } from './modules/module.js'
import { foo as foo2 } from './modules/module-2.js'
import { createApp } from 'vue'
import { Axis } from 'echarts'
import elementPlus from 'element-plus'
import App from './App.vue'
import { router } from './routers/index.js'

console.log(foo)
console.log(foo2)
console.log(await import(/* webpackChunkName: "module-async" */ './modules/module-async.js'))

console.log(createApp)
console.log(Axis)
console.log(elementPlus)

createApp(App)
.use(router)
.mount('#app')
