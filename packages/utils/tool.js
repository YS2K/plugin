/*
 * @Author: your name
 * @Date: 2020-08-27 17:23:48
 * @LastEditTime: 2020-08-28 16:44:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \assemblys\packages\utils\tool.js
 */
//存储
export function setSessiStorage(name,value){
    window.sessionStorage.setItem(name,value);
}
//得到存储
export function getSessiStorage(name){
   return window.sessionStorage.getItem(name)==='null'?'': window.sessionStorage.getItem(name);
}
//得到存储
export function getlocalStorage(name){
    return window.localStorage.getItem(name)==='null'?'': window.localStorage.getItem(name);
 }