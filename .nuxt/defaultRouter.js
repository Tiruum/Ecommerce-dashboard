import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ddbe9d3a = () => interopDefault(import('..\\pages\\addproduct.vue' /* webpackChunkName: "pages/addproduct" */))
const _be188528 = () => interopDefault(import('..\\pages\\kanban.vue' /* webpackChunkName: "pages/kanban" */))
const _5cf94278 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _1056abcc = () => interopDefault(import('..\\pages\\orders.vue' /* webpackChunkName: "pages/orders" */))
const _af5f244e = () => interopDefault(import('..\\pages\\products.vue' /* webpackChunkName: "pages/products" */))
const _4d4595e3 = () => interopDefault(import('..\\pages\\users.vue' /* webpackChunkName: "pages/users" */))
const _07dbbbad = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/addproduct",
    component: _ddbe9d3a,
    name: "addproduct"
  }, {
    path: "/kanban",
    component: _be188528,
    name: "kanban"
  }, {
    path: "/login",
    component: _5cf94278,
    name: "login"
  }, {
    path: "/orders",
    component: _1056abcc,
    name: "orders"
  }, {
    path: "/products",
    component: _af5f244e,
    name: "products"
  }, {
    path: "/users",
    component: _4d4595e3,
    name: "users"
  }, {
    path: "/",
    component: _07dbbbad,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
