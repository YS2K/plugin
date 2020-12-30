<template>
  <div class="temperature">
   <!-- <div  id='value'><span class='value'>{{values}}</span><span id='unit'>{{RulerPamerObj.unitString}}</span></div>
   <div :id='RulerPamerObj.wrapperId'></div> -->
   <div class="content">
   
     <!-- <ul style="width:30px">
       <li style="width:10px">
           <span class="sizeNo">0</span>
       </li>
       <li style="width:10px"></li>
       <li style="width:10px"></li>
       <li style="width:10px"></li>
       <li style="width:10px"></li>
       <li style="width:10px"></li>
       <li style="width:10px"></li>
       <li style="width:10px"></li>
       <li style="width:10px"></li>
      <li style="width:10px">
         <span class="sizeNo">1</span>
      </li>
      </ul> -->
      <ul></ul>
      <ul v-for="(item,index) in dataLent" :key="'ul'+index">
          <li v-if="index!=dataLent"  style="width:5px" v-for="(item1,index2) in data.unitSet" :key="'li'+index2">
              <span v-if="index2===0" class="sizeNo">{{data.max-index}}</span>
          </li>
          
      </ul>
   </div>
  </div>
</template>

<script> 
import RulerPamer from '../../../entity/rulerPamer'
export default {
  name: 'TemperatureView',
  props: {
    msg: String,
    RulerPamerObj:null,

  },data:()=>{
	  return {
      values:0,
      data:{
        max:42.0,
        unitSet:10, 
        min:34.0,
      },
      dataLent:0,
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
	  this.dataLent =this.data.max-this.data.min;
  },
  mounted() {

  let pamer = this.$props.RulerPamerObj;
  pamer.callback= this.rulerSetValue;
  //  console.log('555',this.$props.RulerPamerObj);
  // if(this.$props.RulerPamerObj.wrapperId){
  //   this.$props.callback = this.rulerSetValue;
  //         		MeasureRuler(pamer) ; 
  //   }
  		
  },
  methods:{
	  //回调函数，参数为滑动过程中的值
	   rulerSetValue(val){
      this.values =val;
      if(this.$listeners['oncallback']){
          this.$emit("oncallback");
      }
	  }  
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style  lang="less" scoped>
  @import url("./index.less");
</style>
