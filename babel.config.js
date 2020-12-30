/*
 * @Author: your name
 * @Date: 2020-08-04 09:23:47
 * @LastEditTime: 2020-08-27 13:59:52
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \assemblys\babel.config.js
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ["import", {
    "libraryName": "vant",
    "libraryDirectory": "es",
    "style": true
  }],
]
}
