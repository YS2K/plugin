<!--
 * @Author: your name
 * @Date: 2020-08-04 09:23:47
 * @LastEditTime: 2020-08-27 11:56:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \assemblys\src\views\About.vue
-->
<template>
  <div class="about">
    <h1> 引导机器 人</h1>
    <!-- <MachinesShellView @goCallback="goCallback" @selectCallback="selectCallback" :mp3url="mp3url1" :pData="data" :isClose="isClose">
    </MachinesShellView> -->
  <guideMachinesShellView authorizationCode='Authorization' p_code='robot_ttj_index_guide' :mp3url="mp3url1" apiUrl='http://192.168.3.170:10001/tskj-cloud-notice/robotGuideMessage/messageCode'></guideMachinesShellView>
  </div>
</template>

<script>
  export default {
    name: "guideMachinesShellV",
    data: () => {
      return {    
        mp3url1: "http://192.168.3.170:10001/tskj-cloud-common/tts/txt2Voice?txt=",
      }
    },
    
    created() {},
    methods: {
      selectCallback() {
        // alert(444);
       // this.data.msgContent = "你点5点点";
      },
      goCallback() {
        
        // alert(555);
      },
    },
  };
</script>