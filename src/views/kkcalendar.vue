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
    <h1>日历</h1>
    <KKcalendar :minDate="minDate" :maxDate="maxDate" :fullList='fulldate'></KKcalendar>
  </div>
</template>

<script>
  import dayjs from 'dayjs';
  export default {
    data: () => {
      return {
            minDate: dayjs('2020-12-19'),
            maxDate: dayjs('2020-12-21'),
            fulldate:[
                '2020-12-20'
            ]
      }
    },
  };
</script>