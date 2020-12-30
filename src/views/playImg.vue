<!--
 * @Author: your name
 * @Date: 2020-08-04 09:23:47
 * @LastEditTime: 2020-08-28 16:54:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \assemblys\src\views\Home.vue
-->
<template>
  <div class="home">
    <h1>轮播图</h1>
    <PlayImgView :pisFrame="true" :pData="data"></PlayImgView> 
    <BackButtonView @goHome="goHome" :pBntUrl="dataImg"></BackButtonView>
  </div>
</template>

<script>
// @ is an alias to /src
import imgurls from '@/assets/homBnt.png'
export default {
  name: 'playImg',
  data:()=>{
    return { data:[{
      imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598510194114&di=3b594b61de84c94da98024335c525298&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D3204887199%2C3790688592%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D4610%26h%3D2968',
      jmpurl:'',
    },{
      imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598510194114&di=3b594b61de84c94da98024335c525298&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D3204887199%2C3790688592%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D4610%26h%3D2968',
      jmpurl:'www.baidu.com',
    }],
    dataImg:imgurls,
    }
  },
  methods:{
    goHome(){
      alert(444);
    }
  }
}
</script>
