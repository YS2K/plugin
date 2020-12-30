/*
 * @Author:hhy
 * @Date: 2020-07-30 13:51:26
 * @LastEditTime: 2020-08-28 15:59:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \assemblys\packages\index.ts
 */ 
import MachinesShellView from './components/machinesShell/index';
import MachineTipsView from './components/machineTips/index';
import SmallmachineView from './components/smallmachine/index';
import BigMachinesView from './components/bigMachines/index';
import PlayImgView from './components/playImg/index';
import weatherView from './components/weatherInfo/index';
import BackButtonView from './components/backButton/index';
import RulerBlockView from './components/RulerBlock/index';
import TemperatureView from './components/temperature/index';
import guideMachinesShellView from './components/guideMachinesShell/index';
import KKcalendar from './components/calendar/index';


const components = [ MachinesShellView,BigMachinesView, MachineTipsView,SmallmachineView, PlayImgView,weatherView,BackButtonView,RulerBlockView,TemperatureView,guideMachinesShellView,KKcalendar];
// 定义 install 方法
const install = function (Vue) {
    // @ts-ignore
    if (install.installed) return;
    // @ts-ignore
    install.installed = true;
    // 遍历并注册全局组件
    components.map((component) => {
        Vue.component(component.name, component);
    });
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    // 导出的对象必须具备一个 install 方法
    install,
    // 组件列表
    ...components,
};