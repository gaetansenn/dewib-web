import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('~/views/home.vue' /* webpackChunkName: 'views/home.vue' */).then(m => m.default || m)

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    routes: [
      {
        name: 'home',
        path: '/',
        component: Home
      }
    ]
  })
}
