import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('@/views/home.vue'),
  },
  {
    name: '404',
    path: '/404',
    component: () => import('@/views/404.vue'),
  },
  {
    path: '*',
    beforeEnter: () => {
      window.location.href = '/404'
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes,
})
export default router
