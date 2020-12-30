/*
 * @Author: your name
 * @Date: 2020-08-06 09:44:09
 * @LastEditTime: 2020-08-06 16:19:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \assemblys\packages\utils\wx.js
 */
import wx from 'weixin-js-sdk';
//判断是否微信
export function isWeixin(){
    var ua = window.navigator.userAgent.toLowerCase();
    console.log(ua);//mozilla/5.0 (iphone; cpu iphone os 9_1 like mac os x) applewebkit/601.1.46 (khtml, like gecko)version/9.0 mobile/13b143 safari/601.1
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    return true;
    } else {
    return false;
    }
}
//微信
export function wxPlay(domName){  
    if(isWeixin()){
        wx.config({ 
             appId: 'wx1c73e29ac42878a0', 
             timestamp: (new Date().getTime()),
             nonceStr: '',
             signature: '',
             jsApiList:['checkJsApi']
            });
        wx.ready(function() {
            const aout =document.getElementById(domName);
            if(aout.play){// 如果是暂停状态, 让其播放, 反之暂停
                aout.load();
                aout.play();
            }
        });  
    }else{
        const aout =document.getElementById(domName);
        if(aout.play){// 如果是暂停状态, 让其播放, 反之暂停
            aout.load();
            aout.play();
        }
    }
}