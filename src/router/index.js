/*
 * @Author: your name
 * @Date: 2020-08-04 09:23:47
 * @LastEditTime: 2020-08-27 16:49:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \assemblys\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/playImg.vue'
import weather from '../views/weather.vue'
import RulerBlockView from '../views/RulerBlockView.vue'
import temperature from '../views/temperature.vue'
import guideMachinesShellV from '../views/guideMachinesShellV.vue'
import kkcalendar from '../views/kkcalendar.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/playImg',
    name: 'playImg',
    component: Home
  },
  {
    path: '/machine',
    name: 'Machine',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Machine.vue')
  },
  {
    path: '/weatherInfo',
    name: 'weatherInfo',
    component: weather
  },
  {
    path: '/rulerBlockView',
    name: 'rulerBlockView',
    component: RulerBlockView
  },
  {
    path: '/temperature',
    name: 'temperature',
    component: temperature
  },
  {
    path: '/guideMachinesShellV',
    name: 'guideMachinesShellV',
    component: guideMachinesShellV
  },
  {
    path: '/kkcalendar',
    name: 'kkcalendar',
    component: kkcalendar
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
