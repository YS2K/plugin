/*
 * @Author: huahaiyan
 * @Date: 2020-08-27 10:36:16
 * @LastEditTime: 2020-08-28 15:44:52
 * @LastEditors: Please set LastEditors
 * @Description: 可移动按钮
 * @FilePath: \assemblys\packages\components\playImg\index.js
 */
import BackButtonView from './main/index.vue';
// tslint:disable-next-line:only-arrow-functions
// @ts-ignore
BackButtonView.install =  function(Vue) {
    Vue.component(BackButtonView.name, BackButtonView);
};
export default BackButtonView;
