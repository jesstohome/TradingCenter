<template>
    <div>
        <indexHeader></indexHeader>
        <div id="cloud-computing-root">
            <div class="clound-home">
                <div class="clound-home-banner">
                    <div class="container clound-home-text">
                        <div class="text-left medium-text">
                            <h1>Staking</h1>
                            <p class="normal-text" style="color: white;">{{$t("mxDefi.title_normal_text")}}</p>
                        </div>
                    </div>
                    <div class="header-bottom">
                        <div class="container header-bottom-help flex" style="max-width: 1200px;">
                            <ul class="header-tabs flex">
                                <li class="tab-item medium-text active" style="color: rgb(39, 109, 255);">Staking</li>
                            </ul>
                            <ul class="header-tabs-r" style="margin-inline-end: 20px;">
                                <li class="medium-text align-center">
                                    <a href="#/earn" class="" style="display: flex; align-items: center;">
                                        <svg focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024" data-icon="MiningOutlined" class="icon-symbol mx-icon iconfont iconwakuang">
                                            <path d="M103.131429 817.005714V128.365714h642.779428V403.748571h91.794286V82.432A45.933714 45.933714 0 0 0 791.844571 36.571429H57.270857a45.933714 45.933714 0 0 0-45.933714 45.860571v780.434286c0 25.380571 20.553143 45.933714 45.933714 45.933714h367.250286V817.005714H103.204571z"></path>
                                            <path d="M194.998857 266.093714v91.794286h413.184V266.093714H194.998857zM194.998857 541.622857V449.828571h229.522286v91.794286H194.998857zM1011.2 864.914286c0.731429 9.947429 1.462857 20.041143 1.462857 30.134857h-0.731428l0.146285 4.388571c0.073143 1.974857 0.146286 3.803429 0.073143 5.705143l-89.965714 11.702857a505.344 505.344 0 0 0-97.133714-182.418285L571.977143 987.428571l-64.877714-64.950857 253.074285-253.074285a505.197714 505.197714 0 0 0-182.418285-97.133715l8.777142-68.022857-0.731428-22.162286a424.228571 424.228571 0 0 1 44.617143 1.170286 409.014857 409.014857 0 0 1 226.816 89.014857l34.377143-34.377143 64.950857 64.950858-34.377143 34.377142c1.097143 1.316571 2.048 2.633143 2.998857 4.022858l2.413714 3.291428 1.682286 2.194286c5.12 6.656 10.24 13.385143 14.848 20.333714 1.755429 2.56 3.291429 5.193143 4.827429 7.899429l2.779428 4.827428 1.901714 2.998857c3.949714 6.436571 7.972571 12.946286 11.483429 19.602286l3.510857 7.460572c0.731429 1.609143 1.462857 3.291429 2.340572 4.900571l0.365714 0.731429c3.876571 8.045714 7.826286 16.091429 11.117714 24.356571 0.804571 1.974857 1.462857 4.022857 2.194286 6.070857l1.609143 4.388572c3.657143 9.508571 6.875429 19.017143 9.728 28.818285 0.512 1.536 0.877714 3.145143 1.243428 4.681143l0.731429 3.145143a400.530286 400.530286 0 0 1 13.092571 74.971429l0.146286 2.925714zM1012.662857 895.049143z"></path>
                                        </svg> 
                                        {{$t("mxDefi.mining_records")}} 
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="mx-defi_wrapper__zu_Rs" style="display: block; position: relative;">
                    <div class="mx-defi_mainContent__SeCH1">
                        <div class="mx-defi_content__OPgmW mxc-content-wrapper">
                            <div class="mx-defi_classWrapper__ssNcL">
                                <h3 style="margin-top: 20px;">
                                    <b class="mx-defi_titleIcon__oa5Qx">
                                        <svg focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024" data-icon="HammerOutlined" class="sc-bcXHqe fzgrYP mx-icon iconfont iconVector1">
                                            <path d="M507.037538 72.940308a42.377846 42.377846 0 0 0-60.179692 0.078769L296.329846 223.940923a42.771692 42.771692 0 0 0-0.078769 60.258462L446.385231 434.806154l-391.483077 392.428308a42.771692 42.771692 0 0 0-0.157539 60.258461l120.201847 120.516923a42.377846 42.377846 0 0 0 60.179692-0.157538l391.483077-392.428308 165.257846 165.572923a42.377846 42.377846 0 0 0 60.179692 0l71.68-71.916308a42.850462 42.850462 0 0 0 10.397539-43.638153L852.519385 419.052308 507.037538 72.940308zM597.070769 283.805538l181.169231 181.484308 66.953846 202.121846-23.000615 23.079385-195.347693-195.662769-421.651692 422.518154-60.100923-60.179693 421.730462-422.596923-60.100923-60.179692 90.348307-90.584616zM476.868923 163.446154l60.100923 60.179692-90.427077 90.584616-60.022154-60.258462 90.348308-90.584615z"></path>
                                        </svg>
                                    </b>
                                    Staking 
                                </h3>
                                <div class="mx-defi_defiList__Vta1K">
                                    <div class="mx-defi_defiItem__T9eKy" v-for="(item,index) in list" :key="index">
                                        <span class="mx-defi_tag__DznSi">{{item.currency_name}}</span>
                                        <div class="mx-defi_icon__wpk_V">
                                            <div class="mx-defi_img__8t31N">
                                                <img :src="item.currency_logo" style="width: 100%; height: 100%;">
                                            </div>
                                            <span>{{item.currency_name}}</span>
                                        </div>
                                        <div class="mx-defi_miningInfo__z4O7k">
                                            <div class="mx-defi_textInfo__21iY0">
                                                <div>
                                                    <b class="mx-defi_f26__JuBYM mx-defi_mocha6__9co7P">{{item.intro}}</b>
                                                    <span class="mx-defi_f12__X_bD9 mx-defi_grey__xeo8A mx-defi_block__dTFE2">{{$t("mxDefi.expected_annualized_earnings")}} 0.8%</span>
                                                </div>
                                                <div class="mx-defi_tr__l7Ond">
                                                    <b class="mx-defi_f20__JyTFM">{{item.day}}{{$t("mxDefi.day")}}</b>
                                                    <span class="mx-defi_f12__X_bD9 mx-defi_grey__xeo8A mx-defi_block__dTFE2">{{$t("mxDefi.minimum_number_of_lock_up_days")}}</span>
                                                </div>
                                            </div>
                                            <div class="mx-defi_stakeAmount__it_jY">
                                                <span>{{$t("mxDefi.staking_amount")}}:</span>
                                                <b class="mx-defi_mocha6__9co7P mx-defi_fontWidthNormal__X8n2I">{{$t("mxDefi.no_upper_limit")}}</b>
                                            </div>
                                        </div>
                                        <button class="ant-btn ant-btn-primary ant-btn-block" @click="jumpDetail(item)">{{$t("mxDefi.go_to_staking")}}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <indexFooter></indexFooter>
    </div>
  </template>
  <script>
  import indexHeader from '@/view/indexHeader';
  import indexFooter from "@/view/indexFooter";
  
  export default {
    name: 'mx-defi',
    data() {
        return {
            token: "",
            list: []
        }
    },
    components: {
      indexHeader,
      indexFooter
    },
    created() {
        this.token = localStorage.getItem("token") || ""
    },
    mounted(){
        this.getListData()
    },
    methods:{
        getListData() {
            var t = this;
            this.$http({
                url: "/api/lh/deposit/config",
                method: "GET",
                data: {
                    lang: window.localStorage.getItem("lang") || "en"
                },
                headers: {
                    Authorization: t.token
                }
            }).then(e=>{
                t.list = e.data.message
            }
            )
        },
        jumpDetail(t) {
            console.log(11,t)
            this.$router.push({
                name: "mx-defi-detail",
                params: {
                    lockming: t
                }
            }),
            localStorage.setItem("lockmingData", JSON.stringify(t))
        }
    }
  }
  </script>
  <style lang="scss" scoped>
  #cloud-computing-root {
    background: #151926!important;
    min-width: 1280px;
    min-height: 1000px;
}
.clound-home-banner {
    width: 100%;
    height: 490px;
    background: url(../assets/images/cloud-home-banner-min.png) 0 0/cover no-repeat;
    position: relative;
    margin-top: -64px;
    background: url(../assets/images/cloud-home-banner-dark-min.png) 0 0/cover no-repeat;
    background-size: 100% 100%;
}
.clound-home-text {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    padding-top: 164px;
}
.medium-text {
    font-family: Gate_Sans Medium!important;
    font-weight: 500!important;
}
.text-left h1 {
    font-size: 52px;
    color: #04091a;
    line-height: 52px;
    margin-top: 0;
    font-weight: 500;
    color: #fff;
}
h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 0.5em;
    color: #edeff2;
    font-weight: 500;
}
.header-bottom {
    background: #1d212d!important;
    border-top: 1px solid hsla(0,0%,100%,.06);
    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
    height: 63px;
    color: #fff;
    font-size: 16px;
    position: absolute;
    bottom: 0;
    width: 100%;
}
.header-bottom-help {
    height: 100%;
    margin: 0 auto;
    width: 1200px;
    justify-content: space-between !important;
}
.header-tabs {
    height: 100%;
}
.big-pic-div, .big-pic-div span, .chat-flex, .chat-loading, .flex, .gm-details, .login-prev, ul#slides .imgli, ul#slides .imgli a {
    display: flex;
    -ms-flex-align: center;
    justify-content: center;
    align-items: center;
}
.header-tabs li.tab-item:first-child {
    margin-left: 0;
}
.header-tabs li.tab-item.active {
    color: #04091a;
    border-bottom: 4px solid #17e6a1;
}
.header-tabs li.tab-item {
    color: #fff;
    margin: 0 30px;
    height: 60px;
    line-height: 60px;
    font-family: Gate_Sans Medium;
    font-weight: 500;
    cursor: pointer;
    border-bottom: 4px solid transparent;
    color: #04091a;
}
.medium-text {
    font-family: Gate_Sans Medium!important;
    font-weight: 500!important;
}
.header-tabs-r {
    cursor: pointer;
    color: #04091a;
    color: #fff;
}
.medium-text {
    font-family: Gate_Sans Medium!important;
    font-weight: 500!important;
}
.align-center {
    display: flex;
    align-items: center;
}
.mx-defi_wrapper__zu_Rs {
    scroll-behavior: smooth;
    background-color: #151926;
    color: #fff!important;
}
.mx-defi_content__OPgmW, .mxc-content-wrapper {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
}
.mx-defi_classWrapper__ssNcL h3 {
    line-height: 30px;
    margin-bottom: 20px;
    font-size: 20px;
}
.mx-defi_classWrapper__ssNcL .mx-defi_titleIcon__oa5Qx {
    width: 100%;
    display: inline-flex;
    width: 20px;
    height: 20px;
    border-radius: 2px;
    align-items: center;
    justify-content: center;
    background-color: #16b979;
    color: #fff;
    -webkit-margin-end: 10px;
    margin-inline-end: 10px;
    font-weight: 400;
}
.fzgrYP {
    vertical-align: -0.15em;
}
.mx-defi_defiList__Vta1K {
    display: flex;
    flex-wrap: wrap;
}
.mx-defi_defiList__Vta1K .mx-defi_defiItem__T9eKy {
    width: 380px;
    height: 244px;
    padding: 16px;
    background-color: #292f40;
    position: relative;
    margin-bottom: 20px;
    -webkit-margin-end: 20px;
    margin-inline-end: 20px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    transition: all .16s ease-in-out;
}
.mx-defi_tag__DznSi {
    position: absolute;
    right: 0;
    top: 0;
    padding: 3px 10px;
    min-width: 80px;
    text-align: center;
    color: #1890ff;
    font-size: 11px;
    background: rgba(24,144,255,.07);
    border-radius: 0 4px 0 16px;
}
.mx-defi_defiList__Vta1K .mx-defi_icon__wpk_V {
    width: 100%;
    font-size: 20px;
    display: flex;
    align-items: center;
}
.mx-defi_defiList__Vta1K .mx-defi_icon__wpk_V .mx-defi_img__8t31N {
    width: 20px;
    height: 20px;
    background-repeat: no-repeat;
    background-size: contain;
    border-radius: 50%;
    -webkit-margin-end: 4px;
    margin-inline-end: 4px;
}
.mx-defi_defiList__Vta1K .mx-defi_miningInfo__z4O7k {
    flex: 1 1;
    width: 100%;
}
.mx-defi_defiList__Vta1K .mx-defi_textInfo__21iY0 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 16px auto;
}
.mx-defi_mocha6__9co7P {
    color: #16b979;
}
b, strong {
    font-weight: bolder;
}
.mx-defi_grey__xeo8A {
    color: #97a1a9;
}
.mx-defi_f12__X_bD9 {
    font-size: 12px;
    line-height: 22px;
}
.mx-defi_block__dTFE2 {
    display: block;
}
.mx-defi_tr__l7Ond {
    text-align: end;
}
.mx-defi_f20__JyTFM {
    font-size: 20px;
    line-height: 28px;
}
.mx-defi_fontWidthNormal__X8n2I {
    font-weight: 400;
}
.mx-defi_mocha6__9co7P {
    color: #16b979;
}
.ant-btn.ant-btn-block {
    width: 100%;
}
.ant-btn {
    line-height: 1.5715;
    position: relative;
    display: inline-block;
    padding: 8px 12px;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    background-image: none;
    border: 1px solid transparent;
    box-shadow: none;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    touch-action: manipulation;
    height: 40px;
    font-size: 14px;
    border-radius: 4px;
    color: #fff;
    background-color: #276dff;
}
</style>
  