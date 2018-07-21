import Vue from 'vue'
import Router from 'vue-router'
import ComicAppi from '@/components/ComicAppi'
import renderComic from '@/components/renderComic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ComicAppi',
      component: ComicAppi
    },
    {
      path: '/:id',
      name: 'renderComic',
      component: renderComic
    }
  ]
})
