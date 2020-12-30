<!--
 * @Author: your name
 * @Date: 2020-07-30 13:37:39
 * @LastEditTime: 2020-08-01 10:53:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \assemblys\packages\machinesShell\main\index.vue
--> 
<template>
  <!-- <div
    class="assemblyspage assemblysMachineTips"
    @touchstart="touch"
    @touchmove="move"
    @touchend="end"
    ref="moveDiv"
  >-->
  <div class="assemblys_tips_n" ref="moveDiv">
    <img @click="selectCallback" :src="imgs" alt />
    <div class="assemblys_msg" v-if="msg.length > 0">
      <div class="assemblys_msg_n">{{ msg }}</div>
    </div>
  </div>
  <!-- </div> -->
</template>
<script>
import imgs from "../../../assets/MachinesShell1.gif";
export default {
  name: "SmallmachineView",
  data: () => {
    return {
      msg: "",
      imgs: imgs,
      isTouch: false, //是否按下手指
      position: { x: 0, y: 0 },
      nx: "",
      ny: "",
      dx: "",
      dy: "",
      xPum: "",
      yPum: "",
    };
  },
  props: {
    pmsg: {},
  },
  created() {
    // this.pageInfo = this.$props.info ? this.$props.info : {};
    this.msg = this.$props.pmsg ? this.$props.pmsg : {};
    
  },
  watch: {
    pmsg: function (newVal, oldVal) {
      this.msg = newVal; //newVal即是chartData
    },
  },
  methods: {
    selectCallback() {
      this.$emit("selectCallback");
    },
    /**
     * 当在屏幕上按下手指时触发
     */
    // touch(e) {
    //   let moveDiv = this.$refs.moveDiv;
    //   //   console.log(e, "当在屏幕上按下手指时触发");
    //   this.isTouch = true;
    //   let touch = e.targetTouches[0];
    //   this.position.x = touch.clientX;
    //   this.position.y = touch.clientY;
    //   this.dx = moveDiv.offsetLeft;
    //   this.dy = moveDiv.offsetTop;
    // },
    /**
     * 当在屏幕上移动手指时触发
     */
    // move(event) {
    //   event.preventDefault();
    //   let moveDiv = this.$refs.moveDiv;
    //   if (this.isTouch) {
    //     let touch;
    //     if (event.touches) {
    //       touch = event.touches[0];
    //     } else {
    //       touch = event;
    //     }
    //     this.nx = touch.clientX - this.position.x;
    //     this.ny = touch.clientY - this.position.y;
    //     this.xPum = this.dx + this.nx;
    //     this.yPum = this.dy + this.ny;
    //     //添加限制：只允许在屏幕内拖动
    //     const maxWidth = document.body.clientWidth - moveDiv.offsetWidth - 105; //屏幕宽度减去悬浮框宽高
    //     const maxHeight = document.body.clientHeight - moveDiv.offsetHeight-48;
    //     if (this.xPum < 0) {
    //       //屏幕x限制
    //       this.xPum = 0;
    //     } else if (this.xPum > maxWidth) {
    //       this.xPum = maxWidth;
    //     }
    //     if (this.yPum < 0) {
    //       //屏幕y限制
    //       this.yPum = -51;
    //     } else if (this.yPum > maxHeight) {
    //       this.yPum = maxHeight;
    //     }
    //     moveDiv.style.left = this.xPum + "px";
    //     moveDiv.style.top = this.yPum + "px";
    //     //阻止页面的滑动默认事件
    //     document.addEventListener(
    //       "touchmove",
    //       function () {
    //         event.stopPropagation(); // jq 阻止冒泡事件
    //       },
    //       false
    //     );
    //   }
    // },
    /**
     * touchend 当在屏幕上抬起手指时触发
     */
    end(e) {
      this.isTouch = false;
    },
    
  },
};
</script>

<style lang="less" scoped>
@import url("../../../common/common.less");
@import url("./index.less");
</style>