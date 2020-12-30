/*
 * @Author:华海燕
 * @Date: 2020-07-30 13:35:30
 * @LastEditTime: 2020-08-01 09:50:52
 * @LastEditors: Please set LastEditors
 * @Description: 机器人弹层
 * @FilePath: \assemblys\packages\machinesShell\index.ts
 */ 
import MachinesShellView from './main/index.vue';
// tslint:disable-next-line:only-arrow-functions
  // @ts-ignore
MachinesShellView.install =  function(Vue) {
    Vue.component(MachinesShellView.name, MachinesShellView);
};
export default MachinesShellView;
