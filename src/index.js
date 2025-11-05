import { foo } from './module.js'
import { foo as foo2 } from './module-2.js'
import { createApp } from 'vue'
import { Axis } from 'echarts'
import elementPlus from 'element-plus'

console.log(foo)
console.log(foo2)
console.log(await import('./module-async.js'))

console.log(createApp)
console.log(Axis)
console.log(elementPlus)
