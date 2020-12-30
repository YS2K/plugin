/*
 * @Author: your name
 * @Date: 2020-08-01 09:40:06
 * @LastEditTime: 2020-08-28 15:56:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \assemblyss\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import MachinesShellView from '../packages/index';
import MachineTipsView from '../packages/index';
import PlayImgView from '../packages/index';
import WeatherView from '../packages/index';
import BackButtonView from '../packages/index';
import RulerBlockView from '../packages/index';
import TemperatureView from '../packages/index';
import guideMachinesShellView from '../packages/index';
import KKcalendar from '../packages/index';

Vue.use(MachinesShellView);
Vue.use(MachineTipsView);
Vue.use(PlayImgView);
Vue.use(WeatherView);
Vue.use(BackButtonView);
Vue.use(RulerBlockView);
Vue.use(TemperatureView);
Vue.use(guideMachinesShellView);
Vue.use(KKcalendar);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
