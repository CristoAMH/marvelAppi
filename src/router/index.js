import Vue from 'vue'
import Router from 'vue-router'
import ComicAppi from '@/components/ComicAppi'
import renderComic from '@/components/renderComic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/comics',
      name: 'ComicAppi',
      component: ComicAppi
    },
    {
      path: '/comic',
      name: 'renderComic',
      component: renderComic
    },
    {
      path: '/comics/search:search',
      name: 'GetComicsFromSearch',
      component : ComicAppi
    },
    {
      path: '/comics/p:pages',
      name: 'getComicsFromPages',
      component: ComicAppi
    }

  ]
})
