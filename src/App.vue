<!--
 * @Author: your name
 * @Date: 2020-08-01 09:40:06
 * @LastEditTime: 2020-08-28 08:55:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \assemblyss\src\App.vue
 -->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/playImg">图片轮播</router-link>|
      <router-link to="/machine">机器人</router-link>|
      <router-link to="/weatherInfo">天气</router-link>|
      <router-link to="/rulerBlockView">尺块</router-link>
      <router-link to="/temperature">温度</router-link>|
      <router-link to="/guideMachinesShellV">引导机器人</router-link>|
      <router-link to="/kkcalendar">日历</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "app",
  data: () => {
    return {
    }
  },
  created() {},
  methods: {
   
  }
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2A33F5;
   touch-action:pan-y;
  //  touch-action: none;
}


#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
