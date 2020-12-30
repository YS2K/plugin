<!--
 * @Author: your name
 * @Date: 2020-08-27 10:36:50
 * @LastEditTime: 2020-08-28 16:53:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \assemblys\packages\components\playImg\main\playImg.vue
-->
<template>
  <div
    class="hhy-backButton"
    @mousedown="down1"
    @touchstart.stop="down1"
    @mousemove="move1"
    @touchmove.stop="move1"
    @mouseup="end1"
    @touchend.stop="end1"
    :style="{ top: position1.y + 'px', left: position1.x + 'px' }"
    @click="goHome"
  >
    <img :alt="bntAlt" v-if="bntUrl" :src="bntUrl" />
    <span v-if="bntText">{{bntText}}</span>
  </div>
</template>
<script>
import Banner from "../../../entity/banner";
const screenHeight = window.screen.height;
const screenWidth = window.screen.width;
export default {
  name: "BackButtonView",
  data: () => {
    return {
      bntUrl: "",
      bntText: "",
      bntAlt: "",
      position1: {
        x:screenWidth-80,
        y: 460,
      },
      flags1: false,
    };
  },
  props: {
    pBntUrl: "",
    PBntText: "",
  },
  created() {
    console.log("be", this.$props.pBntUrl);
    this.bntUrl = this.$props.pBntUrl ? this.$props.pBntUrl : "";
    this.bntText = this.$props.PBntText ? this.$props.PBntText : "";
  },
  methods: {
    down1(event) {
      this.flags1 = true;
      let touch;
      if (event.touches) {
        touch = event.touches[0];
      } else {
        touch = event;
      }
    },
    move1(event) {
      event.preventDefault();
      if (this.flags1) {
        let touch;
        if (event.touches) {
          touch = event.touches[0];
        } else {
          touch = event;
        }
        // 定位滑块的位置
        let y = touch.clientY; // - dy
        let x = touch.clientX; // - dy
        if (y < 0) {
            y = 0;
        } else if ( y >screenHeight - touch.target.clientHeight) {
          y = screenHeight - touch.target.clientHeight;
        }
        if(x<0){
           x=0;
        }else if ( x >screenWidth - touch.target.clientWidth) {
          x = screenWidth - touch.target.clientWidth;
        }
       this.position1.y =y;
       this.position1.x = x;         
        // 阻止页面的滑动默认事件
        document.addEventListener(
          "touchmove",
          function () {
            event.preventDefault();
          },
          false
        );
      }
    },
    end1() {
      this.flags1 = false;
    },
    goHome() {
       if(this.$listeners['goHome']){
          this.$emit("goHome");
      }
    },
  },
};
</script>
<style lang="less">
@import url("./index.less");
</style>>
