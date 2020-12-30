<template>
  <div class="RulerBlock">
   <div  id='value'><span class='value'>{{values}}</span><span id='unit'>{{RulerPamerObj.unitString}}</span></div>
   <div :id='RulerPamerObj.wrapperId'></div>
  </div>
</template>

<script> 
import {MeasureRuler} from '../../../plugUnit/h5-ruler-master/ruler.js';
import RulerPamer from '../../../entity/rulerPamer'
export default {
  name: 'RulerBlockView',
  props: {
    msg: String,
    RulerPamerObj:null,

  },data:()=>{
	  return {
		  values:0,
	  }
  },
 watch: {
      RulerPamerObj: function(newVal,oldVal){     
        if(newVal.wrapperId){
          	//  MeasureRuler(newVal) ; 
        }
      }
    },
  created(){
	  
  },
  mounted() {
  	// console.log('555');
	//初始化尺子
	// 		 MeasureRuler({
	// 			wrapperId:"rulerWrapper",     //容器ID，页面中写一个DIV就行 (必须)
	// 			max:400,                     //刻度尺最大的刻度    (非必须，默认为1000)
	// 			minUnit:1,                    //刻度尺最小刻度    (非必须，默认为1)
	// 			unitSet:10,                   //刻度尺单元长度    (非必须，默认是10)
	// 　　　 value:0,                      //初始化数值       (非必须，默认为1)
	// 			 mult:1,                       //刻度值倍数，默认是最小刻度值为10px，如果定mult为3则最小刻度为30px (非必须，默认为1)
	// 			callback:this.rulerSetValue,       //滑动尺子过程中的回调函数     (非必须)
	// 			min:0                     //刻度尺最小刻度
  // 		}) ; 
  let pamer = this.$props.RulerPamerObj;
  pamer.callback= this.rulerSetValue;
   console.log('555',this.$props.RulerPamerObj);
  if(this.$props.RulerPamerObj.wrapperId){
    this.$props.callback = this.rulerSetValue;
          		MeasureRuler(pamer) ; 
    }
  		
  },
  methods:{
	  //回调函数，参数为滑动过程中的值
	   rulerSetValue(val){
		 // console.log('bbb');
      this.values =val;
      if(this.$listeners['oncallback']){
          this.$emit("oncallback");
      }
	  	// $(".value").html(val)
	  }  
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url("../../../plugUnit/h5-ruler-master/ruler.css");
  .RulerBlock{
    text-align: center;
   box-sizing: border-box;
  }
</style>
