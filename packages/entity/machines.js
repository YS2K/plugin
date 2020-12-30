/*
 * @Author: 华海燕
 * @Date: 2020-07-30 13:47:23
 * @LastEditTime: 2020-08-01 09:44:13
 * @LastEditors: Please set LastEditors
 * @Description: 机器人
 * @FilePath: \assemblys\packages\entity\machines.ts
 */ 
export default class Machines {
     bntNumber = 1; // 默认值
     bntText = []; // 按钮文字
    //  msgContent = ''; // 文本内容
     MachinesMsg = ''; // 机器人提示内容
     show = true;
     wbInfo={}; // 机器人 websocket 连接参数
    constructor(bntNumber, bntText, MachinesMsg, show = true,wbInfo){
        this.MachinesMsg = MachinesMsg;
        this.bntText = bntText;
        // this.msgContent = msgContent;
        this.show = show;
        this.wbInfo=wbInfo;
    }
}