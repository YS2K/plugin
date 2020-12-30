/*
 * @Author: hhy
 * @Date: 2020-08-27 14:23:05
 * @LastEditTime: 2020-08-27 17:08:58
 * @LastEditors: Please set LastEditors
 * @Description: 天气
 * @FilePath: \assemblys\packages\components\weatherInfo\index.js
 */
import WeatherView from './main/index.vue';

WeatherView.install =function(){
    Vue.component(WeatherView.name,WeatherView);
}
export default WeatherView; 