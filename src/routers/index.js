import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component: () => import(/* webpackChunkName: "demo" */ '../views/demo.vue') },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
