import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component: () => import(/* webpackChunkName: "index" */ '../views/index.vue') },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
