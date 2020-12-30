<!--
 * @Author: your name
 * @Date: 2020-07-30 13:37:39
 * @LastEditTime: 2020-08-06 16:16:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \assemblys\packages\machinesShell\main\index.vue
-->
<template>
    <div class="assemblyspage assemblysMachinesShell">
        <audio id="mp3box" ref="mp3box" v-if="$props.mp3url" class="hide" autoplay="autoplay" controls="controls"
            :src="`${datmp3url + msgContent}`" />
        <div @click="auotMp3" :class="data.show ? 'assemblysLayer sMachinesShellBox' : 'hide'">
            <div class="contentBox">
                <div class="contentMsg">
                    <div class="imgBox">
                        <img @click="onRobot" class="Shell" :src="imgs" />
                    </div>
                    <div class="tipsBoxCommt">
                        <p>{{ msgContent }}</p>
                    </div>
                </div>
                <div :class="[bottonList.length>=2?'assemblFilexBetween bountsBox':'']">
                    <div v-for="(item,i) in bottonList" :key="i" class="bnt1 bnts">
                        <span @click="go(item.url)">{{item.title}}</span>
                    </div>
                </div>
                <span @click="close" class="closeBnt">x</span>
            </div>
        </div>

    </div>
</template>
<script>
    import imgs from "../../../assets/MachinesShell.gif";
    import Machines from "../../../entity/machines";
    import {
        wxPlay
    } from "../../../utils/wx";
    export default {
        name: "BigMachinesView",
        data: () => {
            return {
                data: new Machines(),
                imgs: imgs,
                datmp3url: "",
                msgContent: "",
                isCloses: Boolean,
                bottonList: [{
                    title: '查看记录',
                    url: '/records'
                }]
            };

        },
        props: {
            pData: new Machines(),
            robotUrl: "",
            mp3url: "",
            isClose: Boolean,
        },
        created() {
            this.data = this.$props.pData ? this.$props.pData : new Machines();
            this.isCloses = this.$props.isClose;
            if (this.data.show) {
                // this.aoutPlay(true);
            }
            if (this.$props.mp3url) {
                this.datmp3url = this.$props.mp3url;
            }
        },

        watch: {
            pData: {
                handler(newVal, oldVal) {
                    this.data = newVal; //newVal即是chartData
                    if (this.data.show === false) {
                        // this.aoutPlay(false);
                    } else {
                        // this.aoutPlay(true);
                    }
                },
                immediate: true,
            },
            isClose: {
                handler(newVal, oldVal) {
                    newVal ? this.initWebSocket() : this.websocketclose();
                },
                immediate: true,
            },
        },
        methods: {
            // button 按钮跳转
            go(url) {
                let timer = setTimeout(() => {
                    clearTimeout(timer);
                }, 3000);
                this.$router.push(url);
            },
            selectCallback() {
                this.$emit("selectCallback");
            },
            goCallback() {
                this.$emit("goCallback");
            },
            onRobot() {
                if (this.$props.robotUrl) {
                    this.close();
                    window.location.href = this.$props.robotUrl;
                } else {
                    this.$emit("onRobot");
                }
            },
            //  定时关闭
            setClostTime(time) {
                let times = setTimeout(() => {
                    this.close();
                    clearTimeout(times);
                }, time * 1000);
            },
            close() {
                this.data.show = false;
                this.aoutPlay(false);
            },
            auotMp3() {
                // alert(6665552);
                this.aoutPlay(true);
            },
            aoutPlay(play = true) {
                const aout = this.$refs.mp3box;
                if (play === false) {
                    aout.pause();
                }
                if (play) {
                    // 如果是暂停状态, 让其播放, 反之暂停
                    wxPlay("mp3box");
                }
            },
            initWebSocket() {
                //初始化weosocket
                const wsuri =
                    `${this.data.wbInfo.url}${this.data.wbInfo.userId}/${this.data.wbInfo.orgId}/${this.data.wbInfo.identity}`;
                this.websock = new WebSocket(wsuri);
                this.websock.onmessage = this.websocketonmessage;
                this.websock.onopen = this.websocketonopen;
                this.websock.onerror = this.websocketonerror;
                this.websock.onclose = this.websocketclose;
            },
            websocketonopen() {
                //连接建立之后执行send方法发送数据
                let actions = {
                    tags: ["ypt/leak/textplantrecord/getlist"],
                    machineid: "18279",
                };
                this.websocketsend(JSON.stringify(actions));
                console.log("连接成功");
            },
            /**
             * 连接建立失败,断开连接
             * 1.查询一次数据库数据
             * 2.查询完后再次建立socket连接
             * */
            websocketonerror() {
                //连接建立失败重连
                let _this = this;
                console.log("连接建立失败");
                //this.websock.onclose()
                this.initWebSocket();
            },

            websocketonmessage(e) {
                const res = JSON.parse(e.data);
                console.log(res, "数据接收");
                //数据接收
                if (res) {
                    this.data.show = true;
                    this.msgContent = res.message;
                    if (res.buttons && res.buttons.length != 0) {
                        this.bottonList.length >= 2 ? this.bottonList.splice(1, this.bottonList.length - 1) : '';
                        res.buttons.forEach(el => {
                            this.bottonList.push({
                                title: el.title,
                                url: el.url
                            })
                        });
                    }
                    res.closeTime ? this.setClostTime(res.closeTime) : '';
                }
            },
            websocketsend(Data) {
                //数据发送
            },
            websocketclose(e) {
                //关闭
                console.log("断开连接", e);
            },
        },
    };
</script>
<style lang="less" scoped>
    @import url("../../../common/common.less");
    @import url("./index.less");
</style>