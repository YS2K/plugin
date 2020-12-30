<!--
 * @Author: your name
 * @Date: 2020-07-30 13:37:39
 * @LastEditTime: 2020-08-06 16:16:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \assemblys\packages\machinesShell\main\index.vue
--> 
<template>
    <div class="assemblyspage assemblysMachinesShell" >
         <audio id='machinesShellMp3box' ref="mp3box" v-if="$props.mp3url" class="hide"  autoplay="autoplay" controls="controls" 
             :src='`${datmp3url+data.msgContent}`' />
        <div  @click="auotMp3" :class="data.show?'assemblysLayer sMachinesShellBox':'hide'">
            <div class="contentBox">
                <div class="contentMsg">
                    <div class="imgBox">
                         <img @click="onRobot" class="Shell" :src="imgs"/>
                         <!-- <p class="leftMsg">
                             测试
                         </p> -->
                    </div>
                    <div class="tipsBoxCommt">
                        <p>{{data.msgContent}} fsdfs</p>
                        
                    </div>
                </div>
            <div class="bountsBox">
                <div v-if="data.bntNumber===1" class="bnts bnt1" >
                    <span @click="selectCallback" >{{data.btnText ===undefined || data.btnText.length===0 ?"查看记录":data.btnText[0]}}</span>
                    <!-- <span @click="selectCallback" v-if="data.btnText ==='undefined'">查看记录</span> -->
                    <!-- <span @click="selectCallback" v-if="data.btnText ===undefined">查看记录</span> -->

                    <!-- <span @click="selectCallback" >{{data.bntText?data.bntText:'查看记录'}}</span> -->
                </div>
                <div v-if="data.bntNumber===2 && data.btnText===undefined" class="assemblFilexBetween bnts bnt2" >
                    <span @click="selectCallback">{{data.bntText?data.bntText:'查看记录'}}</span>
                    <span @click="goCallback" >{{data.bntText?data.bntText:'去录入'}}</span>
                </div>  
                <div v-if="data.bntNumber===2&&data.btnText.length===2" class="assemblFilexBetween bnts bnt2" >
                    <span @click="selectCallback">{{data.btnText[0]}}</span>
                    <span @click="goCallback" >{{data.btnText[1]}}</span>
                </div>  
            </div>
             <span @click="close" class="closeBnt">x</span>
            </div>
        </div>
    </div>
</template>
<script>
import imgs from '../../../assets/MachinesShell.gif';
import Machines from '../../../entity/machines';
import {wxPlay} from '../../../utils/wx';
export default {
  name: 'MachinesShellView',
  data:()=>{
      return{
          data:new Machines(),
          imgs:imgs,
          datmp3url:''
      }
  },
  props:{
      pData:new Machines(),
      robotUrl:'',
      mp3url:''  
  },
  created(){
      console.log('pro52s',this.$props);
      this.data=this.$props.pData?this.$props.pData:new Machines();
      if(this.data.show){
        this.aoutPlay(true);
      }
      if(this.$props.mp3url){
          this.datmp3url =this.$props.mp3url;
      }
      console.log('data',this.data);
  },
   watch: {
      pData: function(newVal,oldVal){
        this.data = newVal; //newVal即是chartData
        if(this.data.show===false){
            this.aoutPlay(false);
        }else{
            this.aoutPlay(true);
        }
      }
    },
   methods:{
      selectCallback(){
            this.$emit("selectCallback");
      },
      goCallback(){
            this.$emit("goCallback");
      },
      onRobot(){
            if(this.$props.robotUrl){
                 this.close();  
                window.location.href = this.$props.robotUrl;
            }else{
                this.$emit("onRobot");
            }
      },
      close(){
          this.data.show=false;
        if(this.$listeners['closeCallback']){
            this.$emit("closeCallback", this.show);
        }
          this.aoutPlay(false);
      },
      auotMp3(){
         // alert(6665552);
        this.aoutPlay(true);
      },
      aoutPlay(play=true){
          play =this.data.show;
        const aout =document.getElementById('machinesShellMp3box');
        if(play===false){
            aout.pause();
        }
        if(play){// 如果是暂停状态, 让其播放, 反之暂停
            wxPlay('machinesShellMp3box');
        }
      }
   } 
}
</script>
<style lang="less" scoped>
      @import url('../../../common/common.less');
    @import url('./index.less');
</style>