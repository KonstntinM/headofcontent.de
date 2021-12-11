import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d7cc6bfc = () => interopDefault(import('../pages/aktuelles/index.vue' /* webpackChunkName: "pages/aktuelles/index" */))
const _ac9a91aa = () => interopDefault(import('../pages/datenschutzerklärung/index.vue' /* webpackChunkName: "pages/datenschutzerklärung/index" */))
const _539760f1 = () => interopDefault(import('../pages/impressum/index.vue' /* webpackChunkName: "pages/impressum/index" */))
const _9ba93e3a = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _07e76298 = () => interopDefault(import('../pages/videos/index.vue' /* webpackChunkName: "pages/videos/index" */))
const _cf93362c = () => interopDefault(import('../pages/aktuelles/_id.vue' /* webpackChunkName: "pages/aktuelles/_id" */))
const _97f323c8 = () => interopDefault(import('../pages/videos/_id.vue' /* webpackChunkName: "pages/videos/_id" */))
const _52027f49 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/aktuelles",
    component: _d7cc6bfc,
    name: "aktuelles"
  }, {
    path: "/datenschutzerkl%C3%A4rung",
    component: _ac9a91aa,
    name: "datenschutzerklärung"
  }, {
    path: "/impressum",
    component: _539760f1,
    name: "impressum"
  }, {
    path: "/login",
    component: _9ba93e3a,
    name: "login"
  }, {
    path: "/videos",
    component: _07e76298,
    name: "videos"
  }, {
    path: "/aktuelles/:id",
    component: _cf93362c,
    name: "aktuelles-id"
  }, {
    path: "/videos/:id",
    component: _97f323c8,
    name: "videos-id"
  }, {
    path: "/",
    component: _52027f49,
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
