/*
 * @Author: huahaiyan
 * @Date: 2020-08-27 10:36:16
 * @LastEditTime: 2020-08-27 10:43:11
 * @LastEditors: Please set LastEditors
 * @Description: 多图轮播或一张图展示
 * @FilePath: \assemblys\packages\components\playImg\index.js
 */
import PlayImgView from './main/index.vue';
// tslint:disable-next-line:only-arrow-functions
// @ts-ignore
PlayImgView.install =  function(Vue) {
    Vue.component(PlayImgView.name, PlayImgView);
};
export default PlayImgView;
