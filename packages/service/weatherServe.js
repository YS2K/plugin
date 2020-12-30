/*
 * @Author: your name
 * @Date: 2020-08-27 16:06:24
 * @LastEditTime: 2020-08-27 17:13:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \assemblys\packages\service\weatherServe.js
 */
import axios  from 'axios';
// 查天气接口
export function getWeather(keyCode,cityCode) {
    const url = `https://restapi.amap.com/v3/weather/weatherInfo`;
        const key = keyCode?keyCode: '0b7d33d8bb294d4553e0598901fbc4cc';
        const city =cityCode?cityCode:'500100';
        const pars = {key, city: city};
        return new Promise(function(resolev,reject){
            axios.get(url, { params: pars }).then((res) => {
                const data = res.data;
                resolev(data);
                reject();
            });
        });
}