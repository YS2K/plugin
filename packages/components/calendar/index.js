/*
 * @Author:Louis
 * @Date: 2020-12-30 09:01:00
 * @LastEditTime: 2020-12-30 09:01:00
 * @LastEditors: Please set LastEditors
 * @Description: 日历
 * @FilePath: \assemblys\packages\calendar\index.vue
 */ 
import KKcalendar from './main/index.vue';
// tslint:disable-next-line:only-arrow-functions
  // @ts-ignore
  KKcalendar.install =  function(Vue) {
    Vue.component(KKcalendar.name, KKcalendar);
};
export default KKcalendar;