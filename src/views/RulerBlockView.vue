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
    <h1>尺块 </h1>
    <RulerBlockView @oncallback="setValue" v-if="obj.wrapperId" :RulerPamerObj="obj"></RulerBlockView>
     <RulerBlockView @oncallback="setValue" v-if="obj1.wrapperId" :RulerPamerObj="obj1"></RulerBlockView>
  </div>
</template>
<script>
import RulerPamer from '../../packages/entity/rulerPamer';
export default {
  name: "Machine",
  data: () => {
    return {
      obj:'',
      obj1:'',
    };
  },
  created() {
    let then = this;
    this.obj ={
      wrapperId:'relue1',
      unitString:'kg',
       max:30,
       minUnit:1,
       unitSet:10,
       value:15,
       mult:1,
       min:0,
      // callback:then.setValue
    }
      this.obj1 ={
      wrapperId:'relue2',
      unitString:'kg',
       max:30,
       minUnit:1,
       unitSet:10,
       value:0,
       mult:1,
       min:0,
      // callback:then.setValue
    }
  },
  methods: {
    selectCallback() {
      // alert(444);
      this.data.msgContent ='你点5点点';
    },
    setValue(value) {
      console.log('value55',value);
      this.value = value;
      // alert(555);
    },
  },
};

</script>
