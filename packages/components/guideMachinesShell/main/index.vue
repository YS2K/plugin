<!--
 * @Author: 华海燕
 * @Date: 2020-07-30 13:37:39
 * @LastEditTime: 2020-08-06 16:16:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \assemblys\packages\machinesShell\main\index.vue
--> 
<template>
    <div class="assemblyspage guideMachinesShell" >
         <audio id='guideMp3box' ref="guideMp3box" v-if="$props.mp3url" class="hide"  autoplay="autoplay" controls="controls" 
             :src='`${datmp3url+msgContent}`' />
        <div  @click="auotMp3" :class="show?'assemblysLayer sMachinesShellBox':'hide'">
            <div class="contentBox">
                <div class="contentMsg">
                    <div class="imgBox">
                         <img  class="Shell" :src="imgs"/>
                         <!-- <p class="leftMsg">
                             测试
                         </p> -->
                    </div>
                    <div class="tipsBoxCommt">
                        <p>{{msgContent}}</p> 
                    </div>
                </div>
            <!-- <div class="bountsBox">
                <div v-if="data.bntNumber===1" class="bnts bnt1" >
                    <span @click="selectCallback" >{{data.btnText ===undefined || data.btnText.length===0 ?"查看记录":data.btnText[0]}}</span>
                </div>
                <div v-if="data.bntNumber===2 && data.btnText===undefined" class="assemblFilexBetween bnts bnt2" >
                    <span @click="selectCallback">{{data.bntText?data.bntText:'查看记录'}}</span>
                    <span @click="goCallback" >{{data.bntText?data.bntText:'去录入'}}</span>
                </div>  
                <div v-if="data.bntNumber===2&&data.btnText.length===2" class="assemblFilexBetween bnts bnt2" >
                    <span @click="selectCallback">{{data.btnText[0]}}</span>
                    <span @click="goCallback" >{{data.btnText[1]}}</span>
                </div>  
            </div> -->
             <span @click="close" class="closeBnt">x</span>
            </div>
        </div>
    </div>
</template>
<script>
import imgs from '../../../assets/MachinesShell.gif';
import Machines from '../../../entity/machines';
import {wxPlay} from '../../../utils/wx';
import {messageCode} from '../../../service/robotGuide';
export default {
  name: 'guideMachinesShellView',
  data:()=>{
      return{
          msgContent:'',
          show:false,
          imgs:imgs,
          datmp3url:'',
          guideApi:'',
      }
  },
  props:{
      p_code:'',
      apiUrl:'',
      authorizationCode:'', /*存AuthorizationCode */
      mp3url:''  
  },
  created(){
      this.data=this.$props.p_code?this.$props.p_code:'';
      this.getMsge();
  },
   watch: {
      p_code: function(newVal,oldVal){
       this.getMsge();
      }
    },
   methods:{
      close(){
          this.show=false;
    //     /**关闭回调 */
    //     if(this.$listeners['closeCallback']){
    //         this.$emit("closeCallback");
    //    }
     if(this.$listeners['onIsdisplay']){
            this.$emit("onIsdisplay", this.show);
       }
          this.aoutPlay();
      },
     async getMsge(){ /**得到引导信息 */
        const res= await messageCode(this.$props.p_code,this.$props.apiUrl,this.$props.authorizationCode);
        if (res) {
            if (res.guideMessage) {
                this.msgContent =res.guideMessage;
                this.show=true;
                this.datmp3url =this.$props.mp3url;
                this.auotMp3();
                if (res.closedTime) {
                    setTimeout(()=>{
                        this.close();
                    },res.closedTime)
                }
            }else{
                 this.show=false;
            }
        }else{
              this.show=false;
        }
                /**关闭回调 */
        if(this.$listeners['onIsdisplay']){
            this.$emit("onIsdisplay", this.show);
       }
     //   console.log('机器 人语',this.datmp3url+this.msgContent);
      },
      auotMp3(){
         // alert(6665552);
       this.aoutPlay(true);
      },
      aoutPlay(play=true){
        play =this.show;
        const aout =document.getElementById('guideMp3box');
        if(play===false){
            aout.pause();
        }
        if(play){// 如果是暂停状态, 让其播放, 反之暂停
            wxPlay('guideMp3box');
        }
      }
   } 
}
</script>
<style lang="less" scoped>
      @import url('../../../common/common.less');
    @import url('./index.less');
</style>