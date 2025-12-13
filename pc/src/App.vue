<template>
    <div id="app" :class="(night_mode==null||parseInt(night_mode)==0)?'night':'day'">
        <router-view/>
    </div>
</template>

<style lang="scss">
    .flex {
        display: flex;
        flex-direction: row;
    }

    .el-loading-mask.is-fullscreen {
        background-color: transparent !important;
    }

    .column {
        flex-direction: column;
    }

    .flex-all {
        flex: 1;
    }
</style>

<script>

    export default {
        name: "App",
        data() {
            return {
                'night_mode': '1',
                timer: false
            }
        },
        created() {
            let that = this;
            // let configURL = '/api/front';
            // this.$http({
            //     url: configURL,
            //     method: "get",
            // }).then(res => {
            //     that.bus.finfo = res.data
            // });


            // this.timer = setInterval(() => {
            //     if (window.localStorage.getItem('token').length>10) {
            //         that.$http({
            //             url: '/api/user/active',
            //             method: "get",
            //             headers: {Authorization: window.localStorage.getItem('token')}
            //         }).then(res => {

            //         })
            //     }
            // }, 10000);

            this.$http({
                url: "/api/getSiteConfig?lang=" + window.localStorage.getItem("lang"),
                method: "get",
                data: {}
            }).then(t=>{
                document.title = t.data.message.site_name
				localStorage.setItem('head_logo',t.data.message.site_pc_logo)
            })
            this.night_mode = localStorage.getItem('night_mode');
            // this.$http({
            //   url: "/api/" + "currency/quotation_new",
            //   method: "get",
            //   data: {},
            //   headers: {Authorization: localStorage.getItem("token")}
            // })
            //         .then(res => {
            //           if (res.data.type == "ok") {
            //             this.tabList = res.data.message;
            //             var msg = res.data.message;
            //             var arr_quota = [];
            //             for (var i = 0; i < msg.length; i++) {
            //               arr_quota[i] = msg[i].quotation;
            //             }
            //             if (!window.localStorage.getItem("downUp")) {
            //               window.localStorage.setItem("downUp", arr_quota[0][0].change);
            //             }
            //             if (!window.localStorage.getItem("legal_id_cur")) {
            //               window.localStorage.setItem(
            //                       "legal_id_cur",
            //                       arr_quota[0][0].currency_id
            //               );
            //             }
            //             if (
            //                     !localStorage.getItem("legal_id") &&
            //                     !localStorage.getItem("currency_id") &&
            //                     !localStorage.getItem("legal_name") &&
            //                     !localStorage.getItem("currency_name")
            //             ) {
            //               window.localStorage.setItem(
            //                       "legal_id",
            //                       msg[0].quotation[0].legal_id
            //               );
            //               window.localStorage.setItem(
            //                       "currency_id",
            //                       msg[0].quotation[0].currency_id
            //               );
            //               window.localStorage.setItem(
            //                       "legal_name",
            //                       msg[0].quotation[0].legal_name
            //               );
            //               window.localStorage.setItem(
            //                       "currency_name",
            //                       msg[0].quotation[0].currency_name
            //               );
            //               var symbol =
            //                       msg[0].quotation[0].currency_name +
            //                       "/" +
            //                       msg[0].quotation[0].legal_name;
            //               window.localStorage.setItem(
            //                       "shareNum",
            //                       msg[0].quotation[0].lever_share_num
            //               );
            //               // var priceScale=Math.pow(10,5);
            //               var priceScale = 100000;
            //               window.localStorage.setItem("priceScale", priceScale);
            //               window.localStorage.setItem("symbol", symbol);
            //             }
            //           }
            //         })
            //         .catch(error => {
            //           console.log(error);
            //         });
        }
    };
</script>

<style lang='scss'>
    #app {
        .el-slider__runway {
            background-color: #2e3244;
        }
    }
</style>

