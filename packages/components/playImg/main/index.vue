<!--
 * @Author: your name
 * @Date: 2020-08-27 10:36:50
 * @LastEditTime: 2020-08-28 11:00:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \assemblys\packages\components\playImg\main\playImg.vue
-->
<template>
  <div  :style="{width:width,height:high}" class="hhy-PlayImgBox">
    <van-swipe v-if="data.length>=2" :style="{height:high}"  class="my-swipe" indicator-color='#0E7C1B' :autoplay="3000">
      <van-swipe-item v-for="(item,index) in data" :key="index">
          <img @click="jump(item.jmpurl,item)" :alt="item.imgName" :style="{width:width,height:high}" :src="item.imgUrl"/>
      </van-swipe-item>
    </van-swipe>
    <img @click="jump(data[0].jmpurl,item)" :style="{height:high}"  v-if="data.length===1" :src="data[0].imgUrl">
    <van-popup closeable :style="{ height: '100%',width:'100%' }"  close-icon="clear" close-icon-position="top-left" v-model="frameShow" position='left'>
            <iframe :style="{ height: '100%' }" :src="url"></iframe>
    </van-popup>
  </div>
</template>
<script>
import { Swipe, SwipeItem,Popup} from 'vant';
import Banner from '../../../entity/banner'
//  components:{'van-swipe':Swipe,'van-swipe-item':SwipeItem,'van-popup':Popup},
export default {
  name:'PlayImgView',
  components:{'van-swipe':Swipe,'van-swipe-item':SwipeItem,'van-popup':Popup},
  data:()=>{
    return{
      data:[],
      width:'',
      frameShow:false,
      url:'',
      high:'170px',
      isFrame:false,
    }
  },
  props:{
    pData:undefined,
    pWidth:'',
    pisFrame:false,
    phigh:'',
  },
  watch: {
      pData: function(newVal,oldVal){
        this.data = newVal?newVal:[]; //newVal即是chartData
      }
    },
  created(){
        this.data=this.$props.pData?this.$props.pData:[];
        this.width=this.$props.pWidth?this.$props.pWidth:'100%';
        this.isFrame=this.$props.pisFrame?this.$props.pisFrame:false;
        this.high=this.$props.phigh?this.$props.phigh:'170px';
  },
  methods:{
    jump(url,item){
      if(!url){
        return;
      }
      if(this.$listeners['pjump']){
          this.$emit("pjump",item);
      }
       if (url.indexOf('http://') < 0) {
              url  = 'http://' + url;
          }
       if (this.isFrame) {
          this.frameShow = true ;
          this.url = url;
        } else {
          window.location.href = url;
        }
    }
  }
}

</script>
<style lang="less">
  @import url('./index.less');
</style>>
