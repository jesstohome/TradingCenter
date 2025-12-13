<template>
    <div>
        <indexHeader></indexHeader>
        <div class="startup-list-container">
            <div class="startup-list-banner">
                <div class="d-flex flex-column jc-between startup-list-banner-text">
                    <div>
                        <div class="banner-title1">{{$t("startup.banner_title_1")}}</div>
                        <div class="banner-title-desc dark-gray-font">{{$t("startup.banner_title_desc_1")}}</div>
                    </div>
                    <div class="startup-header-data">
                        <div class="header-data-title"> {{$t("startup.banner_title_2")}} </div>
                        <div class="header-data-content d-flex jc-between">
                            <div class="header-data-item d-flex flex-column">
                                <span class="header-data-number"> 8833.8% </span>
                                <span class="header-data-name"> PixeVerse(PIXEL) </span>
                            </div>
                            <div class="header-data-item d-flex flex-column">
                                <span class="header-data-number"> 8600.0% </span>
                                <span class="header-data-name"> Defi Land(DEFILAND) </span>
                            </div>
                            <div class="header-data-item d-flex flex-column">
                                <span class="header-data-number"> 8250.0% </span>
                                <span class="header-data-name"> ArtWallet(1ART) </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="startup-banner-data d-flex jc-between">
                <div class="banner-data-item d-flex flex-column jc-between align-center">
                    <span class="banner-data-item-num">591</span>
                    <span class="banner-data-item-name gray-font"> {{$t("startup.banner_data_item_1")}} </span>
                </div>
                <div class="banner-data-item d-flex flex-column jc-between align-center">
                    <span class="banner-data-item-num">$83,305,485</span>
                    <span class="banner-data-item-name gray-font"> {{$t("startup.banner_data_item_2")}} </span>
                </div>
                <div class="banner-data-item d-flex flex-column jc-between align-center">
                    <span class="banner-data-item-num">9,144,480</span>
                    <span class="banner-data-item-name gray-font"> {{$t("startup.banner_data_item_3")}} </span>
                </div>
            </div>
            <div class="startup-list-content">
                <div class="startup-list-inProgress">
                    <div class="startup-inProgress-title startup-list-common-title d-flex justify-between">
                        <div> 
                            {{$t("startup.be_in_progress")}} 
                            <input readonly="readonly" :value="list.length" class="total-su-underway" style="color: white;">
                        </div>
                        <router-link :to="{ name: 'UOrder',params: {active: 4}}" class="jump_uorder" style="font-size: 18px;"> {{$t("startup.my_subscription")}} </router-link>
                    </div>
                    <router-link :to="{ name: 'startupDetail',params: {project_id: item.id}}" class="startup-inProgress-item gray-font d-flex startup-project-item" v-for="(item,index) in list" :key="index">
                        <div class="startup-project-img startup-inProgress-img">
                            <img :src="item.logo" class="item-img">
                        </div>
                        <div class="startup-inProgress-introduction d-flex justify-between">
                            <div class="startup-inProgress-introduction-box d-flex flex-column jc-between">
                                <div class="startup-inProgress-introduction-base">
                                    <div class="startup-introduction-title startup-item-title d-flex flex-wrap">
                                        <span class="startup-inProgress-name startup-project-introduction-name">{{item.title}}</span>
                                    </div>
                                    <div class="startup-introduction-desc not-prime-introduction-desc"> {{item.summary}} </div>
                                </div>
                                <div class="startup-inProgress-introduction-advanced d-flex jc-between align-end">
                                    <div class="startup-inProgress-progress">
                                        <div class="p-bar-con d-flex align-center jc-between">
                                            <ul class="su-dtl">
                                                <li>
                                                    <span class="progress-rate">
                                                        <span class="p-num">{{item.total_sell}}</span>
                                                        /{{item.amout}} {{item.currency_name}} 
                                                    </span>
                                                </li>
                                            </ul>
                                            <div class="p-num startup-progress-curr-percent">
                                                <span class="barPercent">{{$t("startup.surplus")}}{{parseFloat(item.percentage)}}%</span>
                                            </div>
                                        </div>
                                        <div class="p-bar">
                                            <div class="p-bar-in" :style="'width:'+ parseFloat(item.percentage)+'%'"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="startup-inProgress-more d-flex flex-column align-center jc-end">
                                <div class="startup-project-status-label startup-project-underway startup-project-underway-label d-inline-flex align-center">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.99935 12.8337C10.221 12.8337 12.8327 10.222 12.8327 7.00033C12.8327 3.77866 10.221 1.16699 6.99935 1.16699C3.77769 1.16699 1.16602 3.77866 1.16602 7.00033C1.16602 10.222 3.77769 12.8337 6.99935 12.8337Z" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M7 3.5V7L9.33333 8.16667" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg> 
                                    {{$t("startup.svg_be_in_progress")}} 
                                </div>
                                <div class="startup-inProgress-btn startup-details-btn"> {{$t("startup.subscribe")}} </div>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="startup-list-finish">
                    <div class="startup-list-finish-title-container">
                        <div class="startup-finish-title-box d-flex align-center jc-between">
                            <div class="startup-finish-title startup-list-common-title"> {{$t("startup.have_come_to_an_end")}} </div>
                            <span class="close-startup-finish-lists">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.33203 3.33301L7.9987 7.99967M7.9987 7.99967L12.6654 3.33301M7.9987 7.99967L3.33203 12.6663M7.9987 7.99967L12.6654 12.6663" stroke="#04091A" stroke-width="2" stroke-linecap="square"></path>
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div class="startup-finish-container d-flex flex-wrap">
                        <div class="startup-finish-item d-flex flex-column" v-for="(item,index) in overList" :key="index">
                            <div class="finish-item-img d-flex align-center jc-center">
                                <img :src="item.logo" class="item-img">
                            </div>
                            <div class="finish-item-content">
                                <div class="finish-item-title">{{item.title}}</div>
                                <div class="startup-introduction-base">
                                    <div class="d-flex align-center jc-between">
                                        <span class="introduction-base-name light-gray-font">{{$t("startup.purchased")}}</span>
                                        <span class="introduction-base-num">{{parseFloat(item.total_sell) + " " + item.currency_name}}</span>
                                    </div>
                                    <div class="d-flex align-center jc-between">
                                        <span class="introduction-base-name light-gray-font">{{$t("startup.have_reached")}}</span>
                                        <span class="introduction-base-num">{{$t("startup.surplus2")+parseFloat(item.percentage) + "%"}}</span>  
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
    name: 'startup',
    data() {
        return {
            list: [],
            overList: []
        }
    },
    components: {
      indexHeader,
      indexFooter
    },
    mounted(){
        this.getList(0)
    },
    methods:{
        getList(t) {
            var e = this;
            this.$http({
                url: "/api/project?page=1&limit=9999&lang=" + window.localStorage.getItem("lang") || !1,
                method: "GET",
                data: {},
                headers: {
                    Authorization: localStorage.getItem("token") || ""
                }
            }).then(t=>{
                const list = t.data.message.list
                e.list = JSON.parse(JSON.stringify(list.filter(it=>2 == it.time_status)))
                e.overList = JSON.parse(JSON.stringify(list.filter(it=>3 == it.time_status)))
            })
        }
    }
  }
  </script>
  <style lang="scss" scoped>
  

.startup-list-container {
    min-width: 1440px;
    color: #04091a;
    font-size: 16px;
    font-weight: 400;
    font-family: Gate_Sans;
    background: #151926!important;
    color: #fff
}

.startup-list-banner {
    min-height: 492px;
    height: 492px;
    background-image: url("../assets/images/startup_list_banner_dark.png");
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: -64px;
    box-sizing: border-box;
    padding: 64px 0;
    width: 100%
}

@media screen and (min-width: 1800px) {
    .startup-banner-data,.startup-con-main-container,.startup-crumbs-box,.startup-list-banner-text,.startup-list-content,.startup-list-finish-all .startup-finish-container,.startup-list-finish-all .startup-finish-title-box {
        width:1200px
    }
}

@media screen and (min-width: 1540px) {
    .startup-banner-data,.startup-con-main-container,.startup-crumbs-box,.startup-list-banner-text,.startup-list-content,.startup-list-finish-all .startup-finish-container,.startup-list-finish-all .startup-finish-title-box {
        padding-left:0;
        padding-right: 0
    }
}

@media screen and (max-width: 1440px) {
    body {
        overflow-x:scroll
    }

    .startup-banner-data,.startup-con-main-container,.startup-crumbs-box,.startup-list-banner-text,.startup-list-content,.startup-list-finish-all .startup-finish-container,.startup-list-finish-all .startup-finish-title-box {
        width: 1200px
    }

    .startup-inProgress-introduction {
        max-width: calc(100% - 160px)
    }

    .startup-prime-img {
        min-width: 370px;
        width: 370px;
        height: 208px
    }

    .startup-inProgress-img {
        width: 246px;
        min-width: 246px;
        height: 140px
    }

    .prime-details-btn,.startup-inProgress-btn {
        min-width: 260px;
        width: 260px
    }

    .startup-inProgress-progress {
        width: 90%;
        margin-right: unset
    }

    .startup-inProgress-introduction-base {
        width: 90%
    }

    .finish-item-img {
        width: 100%;
        height: 168px
    }

    .startup-project-info-left {
        width: calc(100% - 424px);
        min-width: 648px;
        min-height: 365px;
        margin-right: 24px;
        height: 21vw
    }

    .startup-project-info-img img {
        width: 100%
    }

    .right_mcontent.su-contentdetail {
        width: calc(100% - 530px);
        margin-right: 48px
    }

    .startup-list-banner-text>div:not(.startup-header-data) {
        width: calc(100% - 617px)
    }

    .cn-body .startup-header-data {
        width: 536px
    }

    .cn-body .banner-title {
        font-size: 48px;
        line-height: 100%;
        white-space: normal
    }
}

@media screen and (max-width: 1280px) {
    .startup-list-finish.startup-list-finish-all {
        overflow-x:auto
    }

    .footer-container {
        width: 100%
    }
}

.startup-banner-data,.startup-list-banner-text {
    width: 75%;
    margin: 0 auto;
    height: 100%
}

.flex-column {
    flex-direction: column
}

.d-flex {
    display: flex
}

.jc-between {
    justify-content: space-between
}

.startup-list-banner-text {
    display: flex;
    flex-direction: unset;
    align-items: center;
    justify-content: space-between
}

.startup-list-banner-text>div:not(.startup-header-data) {
    width: calc(100% - 673px)
}

.banner-title1 {
    font-weight: 700;
    font-family: Gate_Sans Bold;
    font-size: 44px;
    line-height: 130%;
    margin-bottom: 24px
}

.cn-body .banner-title1 {
    font-size: 52px;
    line-height: 52px;
    white-space: nowrap
}

.banner-title-desc {
    font-size: 20px;
    line-height: 20px
}

.dark-gray-font {
    color: #989fb3
}

.cn-body .banner-title-desc {
    font-size: 24px;
    line-height: 24px
}

.startup-header-data {
    width: 569px;
    box-sizing: border-box;
    background: linear-gradient(308.17deg,hsla(0,0%,100%,.03) -3.78%,rgba(68,163,250,.1) 94.85%),hsla(0,0%,100%,.9);
    box-shadow: 0 4px 40px rgba(23,56,153,.12);
    border-radius: 8px;
    padding: 24px
}

.header-data-title {
    margin-bottom: 24px;
    font-weight: 700;
    font-family: Gate_Sans Bold;
    font-size: 16px;
    line-height: 16px
}

.header-data-number {
    color: #11ad7a;
    margin-bottom: 10px;
    font-size: 36px;
    line-height: 36px;
    font-weight: 700;
    font-family: Gate_Sans Bold
}

.header-data-name {
    font-size: 14px;
    line-height: 14px;
    color: #606880
}

.startup-banner-data {
    height: 128px;
    display: flex;
    margin-top: -64px;
    align-items: center;
    justify-content: space-around;
    background: linear-gradient(310.85deg,hsla(0,0%,100%,.03) .26%,rgba(68,163,250,.1) 95.41%),hsla(0,0%,100%,.9);
    box-shadow: 0 4px 40px rgba(23,56,153,.12);
    border-radius: 8px
}

.startup-banner-data,.startup-header-data {
    background: linear-gradient(308.17deg,hsla(0,0%,100%,.03) -3.78%,rgba(68,163,250,.1) 94.85%),rgba(28,28,28,.9);
    box-shadow: 0 4px 40px rgba(23,56,153,.12)
}

.banner-data-item-num {
    font-weight: 700;
    font-family: Gate_Sans Bold;
    font-size: 32px;
    line-height: 32px;
    margin-bottom: 16px
}

.banner-data-item-name {
    line-height: 14px
}

.align-center {
    align-items: center
}

.startup-list-content {
    padding: 72px 0 140px;
    width: 75%;
    margin: 0 auto;
    background: #151926!important;
    width: 1200px
}

.startup-list-finish,.startup-list-inProgress {
    margin-bottom: 140px
}

.startup-list-common-title {
    font-weight: 700;
    font-family: Gate_Sans Bold;
    font-size: 40px;
    line-height: 40px;
    margin-bottom: 48px
}

.ti-right .base-info-con .su-tip,input.total-su-underway {
    background: transparent
}

.total-su-underway {
    display: inline-block;
    border: none;
    margin-left: 8px;
    font-size: 24px;
    font-weight: 700;
    font-family: Gate_Sans Bold
}

.right-section.su-dtl-condition-item,.startup-help-share-item,.startup-list-content .startup-inProgress-item,.startup-project-info-con-box {
    background: #1f2433
}

.banner-title-desc,.gray-font {
    color: #989fb3
}

.startup-project-item {
    width: 100%;
    box-sizing: border-box;
    border-radius: 16px;
    margin-bottom: 24px
}

.startup-list-content .startup-inProgress-item {
    padding: 24px;
    box-shadow: 0 4px 16px rgba(23,56,153,.06);
    border-radius: 8px;
    justify-content: space-between;
    min-height: 200px
}

.startup-inProgress-img {
    width: 328px;
    min-width: 328px;
    height: 184px
}

.startup-project-img {
    position: relative;
    border-radius: 8px;
    margin-right: 24px;
    -o-object-fit: cover;
    object-fit: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden
}

.startup-project-img .item-img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover
}

img {
    vertical-align: middle;
    border-style: none
}

.startup-inProgress-introduction {
    max-width: calc(100% - 360px)
}

.startup-inProgress-introduction-box,.startup-inProgress-introduction {
    width: 100%
}

.justify-between {
    justify-content: space-between
}

.startup-introduction-title {
    position: relative
}

.startup-inProgress-name {
    color: #fff
}

.startup-project-introduction-name {
    font-weight: 700;
    font-family: Gate_Sans Bold;
    font-size: 24px;
    line-height: 24px;
    margin-right: 24px;
    margin-bottom: 12px;
    display: inline-block
}

.finish-item-content .startup-type-label.title-tip-INITIAL,.title-tip-INITIAL {
    color: #11ad7a;
    background: #eef8f5
}

.startup-project-introduction-name.startup-inProgress-name {
    margin-bottom: 4px
}

.startup-type-label {
    background: #36f
}

.freeBoxInfo,.startup-type-label {
    background: rgba(51,102,255,.08);
    color: #36f
}

.finish-item-content .startup-type-label.title-tip-INITIAL,.title-tip-INITIAL {
    background: rgba(19,191,134,.08);
    color: #13bf86
}

.startup-introduction-desc {
    margin-top: 12px;
    line-height: 150%;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: #606880
}

.startup-inProgress-progress {
    box-sizing: border-box;
    width: 90%
}

.progress-rate {
    font-size: 20px;
    line-height: 20px;
    font-weight: 500;
    font-family: Gate_Sans Medium;
    color: #606880
}

.progress-rate .p-num {
    color: #fff
}

.startup-progress-curr-percent {
    font-weight: 700;
    font-family: Gate_Sans Bold;
    font-size: 20px;
    line-height: 20px;
    color: #36f
}

.p-bar {
    height: 8px;
    margin-top: 12px;
    background: #eef1fa
}

.startup-inProgress-progress .p-bar,.startup-list-finish.startup-list-finish-all {
    background: #292f40
}

.startup-inProgress-item:not(.startup-project-preheat) .p-bar-in:not(.p-bar-in-progress-0) {
    background: linear-gradient(90deg,#39f,#2354e6);
    box-shadow: 2px 0 2px rgba(7,255,210,.44)
}

.p-bar-in {
    height: 100%;
    max-width: 100%;
    overflow: hidden;
    position: relative
}

.startup-inProgress-item:not(.startup-project-preheat) .p-bar-in:not(.p-bar-in-progress-0):after {
    content: "";
    position: absolute;
    height: 8px;
    right: 0;
    top: 0;
    width: 27px;
    background: linear-gradient(90deg,rgba(36,86,231,0),#34b6ff);
    box-shadow: 2px 0 2px rgba(7,255,210,.44)
}

.startup-inProgress-more {
    position: relative
}

.startup-project-con.zt1 .startup-project-status-label,.startup-project-underway {
    background: #13bf86
}

.startup-project-underway-label {
    position: absolute;
    top: 0;
    right: 0;
    min-width: 83px;
    height: 30px;
    box-sizing: border-box;
    padding: 8px;
    font-weight: 700;
    font-family: Gate_Sans Bold;
    font-size: 12px;
    line-height: 12px;
    color: #fff;
    border-radius: 4px
}

.startup-project-status-label>svg {
    width: 14px;
    height: 14px;
    min-width: 14px;
    margin-right: 8px
}

.d-inline-flex {
    display: inline-flex
}

.light-gray-font,.startup-inProgress-timing .item-state,.su-progress-info .startup-progress-curr-percent {
    color: #474f66
}

.startup-inProgress-timing .item-state {
    text-align: right;
    font-size: 20px;
    font-weight: 500;
    font-family: Gate_Sans Medium
}

.startup-inProgress-timing .item-state .timer-box {
    color: #36f;
    font-weight: 700;
    font-family: Gate_Sans Bold;
    font-size: 20px;
    line-height: 20px;
    margin-left: 4px
}

.timer-box {
    margin-top: 22px
}

.jc-end {
    justify-content: flex-end
}

.startup-details-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    border-radius: 8px;
    padding: 16px;
    box-sizing: border-box;
    font-weight: 700;
    font-family: Gate_Sans Bold;
    font-size: 20px;
    line-height: 20px
}

.startup-inProgress-btn {
    height: 52px;
    width: 296px;
    margin-top: 22px;
    background: #36f;
    border-radius: 8px;
    color: #fff
}

.startup-project-con.zt2 .startup-project-status-label,.startup-project-status-label.startup-project-preheat {
    background: #ff8c19
}

.startup-finish-item {
    width: calc(25% - 24px);
    min-height: 372px;
    box-shadow: 0 4px 16px rgba(23,56,153,.06);
    border-radius: 8px;
    margin-bottom: 24px;
    margin-right: 24px;
    overflow: hidden
}

.startup-finish-item,.startup-project-info-con {
    box-shadow: 0 4px 16px rgba(23,56,153,.06);
    background: #1f2433
}

.finish-item-img {
    width: 100%;
    height: 192px;
    border-radius: 8px;
    overflow: hidden;
    -o-object-fit: cover;
    object-fit: cover
}

.finish-item-img .item-img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover
}

.finish-item-content {
    box-sizing: border-box;
    width: 100%;
    padding: 24px;
    font-weight: 500;
    font-family: Gate_Sans Medium;
    color: #fff
}

.finish-item-content .startup-type-label,.startup-type-label-not-prime.startup-label-free {
    background: rgba(51,102,255,.08);
    color: #36f
}

.startup-type-label {
    background: var(--brandColor);
    color: #fff;
    border-radius: 4px;
    padding: 5px 12px;
    text-align: center;
    font-size: 12px;
    line-height: 150%;
    margin-right: 8px;
    font-weight: 500;
    font-family: Gate_Sans Medium
}

.startup-type-label-not-prime {
    margin-right: 12px;
    padding: 0 8px;
    height: 26px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: rgba(35,84,230,.08);
    color: #2354e6
}

.finish-item-title {
    margin: 24px 0;
    font-weight: 500;
    font-family: Gate_Sans Medium
}

.startup-introduction-base>div {
    margin-bottom: 12px;
    font-size: 14px;
    line-height: 14px
}

.light-gray-font {
    color: #474f66
}

.close-startup-finish-lists {
    display: none;
    width: 16px;
    min-width: 16px;
    height: 16px
}

.flex-wrap {
    flex-wrap: wrap
}

.startup-finish-more {
    margin-top: 24px
}

.jc-center {
    justify-content: center
}

.startup-finish-more .startup-finish-show-more {
    font-weight: 700;
    font-family: Gate_Sans Bold;
    font-size: 20px;
    line-height: 20px;
    color: #36f;
    cursor: pointer
}

.startup-list-finish.startup-list-finish-all {
    background: #292f40
}

.startup-banner-data {
    width: 1200px
}

.jump_uorder:hover {
    color: #36f
}


</style>
  