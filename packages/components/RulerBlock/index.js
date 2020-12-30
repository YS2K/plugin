/*
 * @Author: huahaiyan
 * @Date: 2020-08-27 10:36:16
 * @LastEditTime: 2020-08-27 10:43:11
 * @LastEditors: Please set LastEditors
 * @Description: 尺块组件
 * @FilePath: \assemblys\packages\components\playImg\index.js
 */
import RulerBlockView from './main/index.vue';
// tslint:disable-next-line:only-arrow-functions
// @ts-ignore
RulerBlockView.install =  function(Vue) {
    Vue.component(RulerBlockView.name, RulerBlockView);
};
export default RulerBlockView;