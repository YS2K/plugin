<!--
 * @Author: your name
 * @Date: 2020-07-13 11:26:30
 * @LastEditTime: 2020-08-28 12:01:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dailyrecord-front\src\components\weatherInfo\weatherInfo.vue
-->
<template>
  <div class="hhy-cweather-box">
    <div class="img_box">
      <div v-if="isDate" class="text">
          <span class="date">{{weatherInfo.reporttime.substring(5,10)}}<van-icon name="arrow-down" /></span>
          <span class="weatherText">{{weatherInfo.weather}}</span>
      </div>
     <img alt="天气" @click="showWeather" class="ico" :src="weatIco" />
    </div>
    <div :class="isweather?'cweather_l':'hide'">
      <div class="weather_content">
        <div class="content_box">
          <div class="ico_box">
              <img alt="天气"  class="ico" :src="weatIco" />
          </div>
          <div class="city">
            <span>{{weatherInfo.city}}</span>
            <span class="temperature">{{weatherInfo.temperature}}℃</span>
            <span>{{weatherInfo.weather}} {{weatherInfo.winddirection}}风</span>
            <span>  今日湿度：{{weatherInfo.humidity}}%</span>
          </div>
          <!-- <div class="box_tex">
            <label class="value">{{weatherInfo.winddirection}}风</label>
          </div> -->
        </div>
        <div @click="hideWeather" class="bount">
          收起
         <van-icon name="arrow-up" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {Icon} from 'vant'
import {getWeather} from '../../../service/weatherServe';
import Weather from '../../../entity/weather';
import {setSessiStorage,getSessiStorage} from '../../../utils/tool';
import img1 from '../../../assets/weather/weather.png'
import sunnyDay from '../../../assets/weather/sunnyDay.png'
import rain1 from '../../../assets/weather/rain1.png'
import rain2 from '../../../assets/weather/rain2.png'
import rain3 from '../../../assets/weather/rain3.png'
import rain4 from '../../../assets/weather/rain4.png'
import overcast from '../../../assets/weather/overcast.png'
import cloudy from '../../../assets/weather/cloudy.png'
import sleet from '../../../assets/weather/sleet.png'
import lightSnow from '../../../assets/weather/lightSnow.png'
import fog1 from '../../../assets/weather/fog.png'
import fog2 from '../../../assets/weather/fog1.png'
import fog3 from '../../../assets/weather/fog2.png'
export default {
  name: "WeatherView",
  components:{'van-icon':Icon},
  data: () => {
    return {
      isweather: false,
      weatherInfo: new Weather(),
      isDate:false,
      weatIco:img1, /**天所 */
    };
  },
  props:{
    pIsDate:false,
  },
  created(){
    this.isDate =this.$props.pIsDate?this.$props.pIsDate:false;
   let  info =getSessiStorage('weatherInfo');
   if(info){
     this.weatherInfo = JSON.parse(info);
       this.setImg(this.weatherInfo.weather);
   }else{
      this.getWeatherInfo();
   }
  },
  methods: {
    hideWeather() {
      this.isweather = false;
    },
    showWeather() {
      this.isweather = true;
    },
   async getWeatherInfo(){
        let {lives} = await getWeather();
        if(lives){        
           this.weatherInfo =lives.length>0?lives[0]: new Weather();
           let info =JSON.stringify(this.weatherInfo);
           this.setImg(this.weatherInfo.weather);
           setSessiStorage('weatherInfo',info);
        }     
        console.log('data1',lives);
    },
    /**设置跟据天气设置天气图标 */
    setImg(type){
      switch (type) {
        case '阴':
          this.weatIco = overcast;
          break;
          case '多云': case '少云': case '晴': case '晴间多云 ':
          this.weatIco = cloudy;
          break;
          case '小雨': case '雨':case '毛毛雨/细雨':
          this.weatIco = rain1;
          break;
          case '小雨-中雨':
          case '中雨':
          this.weatIco = rain2;
          break;
          case '中雨-大雨':
          case '大雨':
          this.weatIco = rain3;
          break;
          case '暴雨': 
          case '大暴雨':  case '强阵雨':case '强雷阵雨':case '极端降雨':
          case '特大暴雨':
          this.weatIco = rain4;
          break; 
          case '雨雪天气':  case '雨夹雪': case '阵雨夹雪':
          this.weatIco = sleet;
          case '雪':  case '小雪': case '中雪':case '大雪':case '暴雪':
          case '小雪-中雪':case '中雪-大雪':case '大雪-暴雪':
          this.weatIco = lightSnow;break;
          case '雾': case '轻雾':
              this.weatIco = fog1; break;
             case '浓雾': case '大雾': this.weatIco = fog2; break;
             case '强浓雾':
          case '特强浓雾':
         this.weatIco = fog3; break;
        default:
          break;
      }
    }
  },
};
</script>
<style lang="less" >
@import url("./index.less");
</style>