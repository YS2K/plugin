export default class RulerPamer {
    wrapperId ='';  /*容器ID */
    unitString =''; /*显示单位 */
    max=400;                   //刻度尺最大的刻度    (非必须，默认为1000)
    minUnit=1;                 //刻度尺最小刻度    (非必须，默认为1)
    unitSet=10;                //刻度尺单元长度    (非必须，默认是10)
　　value=0;                   //初始化数值       (非必须，默认为1)
    mult=1;                    //刻度值倍数，默认是最小刻度值为10px，如果定mult为3则最小刻度为30px (非必须，默认为1)
    min=0 ;                    //刻度尺最小刻度
    callback=function(){};
}
