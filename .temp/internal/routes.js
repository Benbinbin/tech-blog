/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "F:\\Blog\\Tech-Blog\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-057e6eb2",
    path: "/d3js-introduction/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-057e6eb2").then(next)
    },
  },
  {
    path: "/d3js-introduction/index.html",
    redirect: "/d3js-introduction/"
  },
  {
    path: "/data/data-vis/D3/简介.html",
    redirect: "/d3js-introduction/"
  },
  {
    name: "v-679d6378",
    path: "/data/data-vis/D3/SVG.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-679d6378").then(next)
    },
  },
  {
    name: "v-7cf560fa",
    path: "/data/data-vis/D3/%E5%9F%BA%E7%A1%80%E6%93%8D%E4%BD%9C.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-7cf560fa").then(next)
    },
  },
  {
    path: "/data/data-vis/D3/基础操作.html",
    redirect: "/data/data-vis/D3/%E5%9F%BA%E7%A1%80%E6%93%8D%E4%BD%9C.html"
  },
  {
    path: "/data/data-vis/D3/基础操作.html",
    redirect: "/data/data-vis/D3/%E5%9F%BA%E7%A1%80%E6%93%8D%E4%BD%9C.html"
  },
  {
    name: "v-50dc5f6e",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("HomeLayout", "v-50dc5f6e").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-e902cc16",
    path: "/test.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-e902cc16").then(next)
    },
  },
  {
    name: "v-1055395e",
    path: "/web/CSS/CSS3.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-1055395e").then(next)
    },
  },
  {
    name: "v-b15373a0",
    path: "/web/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("ListLayout", "v-b15373a0").then(next)
    },
  },
  {
    path: "/web/index.html",
    redirect: "/web/"
  },
  {
    path: '*',
    component: GlobalLayout
  }
]