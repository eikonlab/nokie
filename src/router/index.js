import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Memo from '../views/Memo.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

// let isFirstLoad = true;

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
  path: '/home',
  name: 'Home',
  component: Home
  },
  {
    path: '/game',
    name: 'Game',
    component: () => import(/* webpackChunkName: "game" */ '../views/Game.vue')
  },
  {
    path: '/memo',
    name: 'Memo',
    component: Memo
  },  {
    path: '/about',
    name: 'About',
    component: About
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
