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
    <h1>机器 人</h1>
    <MachinesShellView @goCallback="goCallback" @selectCallback="selectCallback" :mp3url="mp3url1" :pData="data" :isClose="isClose">
    </MachinesShellView>
    <!-- <BigMachinesView @goCallback="goCallback" @selectCallback="selectCallback" :mp3url="mp3url1" :pData="data" :isClose="isClose">
    </BigMachinesView> -->
    <!-- <MachineTipsView @selectCallback="selectCallback" :pmsg="pmsgTxt"></MachineTipsView> -->
    <SmallmachineView
      @selectCallback="selectCallback"
      :pmsg="pmsgTxt"
    ></SmallmachineView>
  </div>
</template>

<script>
  export default {
    name: "Machine",
    data: () => {
      return {
        data: {
          show: true,
          bntNumber: 1,
          msgContent:
            "有些版本的iphone4中,audio和video默认播放事件不会触发,比如使audio和video默认播放事件不会触发audio和video默认播放事件不会触发audio和video默认播放事件不会触发audio和video默认播放事件不会触发audio和video默认播放事件不会触发audio和video默认播放事件不会触发用window.onload或计时器等都不能触发播放,必须用js写事件让用户手动点击触发才会开始",
          btnText: ['查看记录'],
          // wbInfo: {
          //   url: "ws://192.168.3.116:10001/tskj-cloud-notice/robotServer/", // websocket 地址
          //   userId: "244463011417464832", // 用户id
          //   orgId: 70, // 机构id
          //   identity: "role_code_1", // 身份
          // },
        },
        isClose:false, // 是否断开长连接
        pmsgTxt: "你的消息是xxxxxxxxxxxx",
        baurl: "https://www.baidu.com",
        mp3url1: "http://192.168.3.170:10000/service-common/tts/txt2Voice?txt=",
        info: {
          url: "ws://192.168.3.170:10001/tskj-cloud-notice/robotServer/",
          userId: "244463011417464832",
          orgId: 70,
          identity: "role_code_1",
        },
      };
    },
    created() {},
    methods: {
      selectCallback() {
        // alert(444);
        this.data.msgContent = "你点5点点";
      },
      goCallback() {
        
        // alert(555);
      },
    },
  };
</script>