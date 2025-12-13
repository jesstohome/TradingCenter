<template>
    <div>
        <indexHeader></indexHeader>
        <div id="root">
            <div class="price-container d-flex">
                <div class="price-market-container">
                    <div class="price-market-title">{{$t("marketQuotaion.title")}}</div>
                    <ul class="price-market-list">
                        <li>{{$t("marketQuotaion.market_first").replace("{price}",price)}}</li>
                        <li>{{$t("marketQuotaion.market_second").replace("{share_bit}",share_bit).replace("{share_ethereum}",share_ethereum)}}</li>
                        <li>{{$t("marketQuotaion.market_third").replace("{trade}",trade)}}</li>
                    </ul>
                </div>
                <div class="top-list-wrapper">
                    <div class="top-container">
                        <div class="top-title">{{$t("marketQuotaion.top_gainers")}}</div>
                        <div class="top-list-content">
                            <div class="top-list_body">
                                <div style="width: 50%;" v-for="(item,index) in increase" :key="index">
                                    <a href="javascript:void(0);" class="top-list-item">
                                        <div class="list-item-left">
                                            <img :src="item.logo" class="price-coin-item-icon">
                                            <div class="price-coin-item-title">{{item.name}}</div>
                                        </div>
                                        <span class="price-coin-item-volume">${{item.now_price}}</span>
                                        <div class="top-comp_change-rate" :class="item.change<0?'red':'green'">{{
                                            parseFloat(item.change) >= 0 ? '+' + (item.change - 0).toFixed(2) : (item.change -
                                            0).toFixed(2)
                                            }}%</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="top-container">
                        <div class="top-title">{{$t("marketQuotaion.popular_currencies")}}</div>
                        <div class="top-list-content">
                            <div class="top-list_body">
                                <div style="width: 50%;" v-for="(item,index) in hot" :key="index">
                                    <a href="javascript:void(0);" class="top-list-item">
                                        <div class="list-item-left">
                                            <img :src="item.logo" class="price-coin-item-icon">
                                            <div class="price-coin-item-title">{{item.name}}</div>
                                        </div>
                                        <span class="price-coin-item-volume">${{item.now_price}}</span>
                                        <div class="top-comp_change-rate" :class="item.change<0?'red':'green'">{{
                                            parseFloat(item.change) >= 0 ? '+' + (item.change - 0).toFixed(2) : (item.change -
                                            0).toFixed(2)
                                            }}%</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="price-wrapper">
            <div id="price-container" class="price-container flex">
                <div id="table-root" style="width: 100%;">
                    <div class="d-flex">
                        <div class="trade-tabs-container">
                            <div class="ant-tabs ant-tabs-top">
                                <div class="ant-tabs-nav">
                                    <div class="ant-tabs-nav-wrap">
                                        <div class="ant-tabs-nav-list" style="transform: translate(0px, 0px);">
                                            <div class="ant-tabs-tab ant-tabs-tab-active" style="margin-right: 48px;">
                                                <div role="tab" aria-selected="true" tabindex="0" id="rc-tabs-0-tab-all" aria-controls="rc-tabs-0-panel-all" class="ant-tabs-tab-btn">
                                                    <a href="/zh/price" class="trade-tabs-tag">{{$t("marketQuotaion.all")}}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="ant-tabs-content-holder">
                                    <div class="home-tickers bit-center-wrap">
                                        <div class="home-table">
                                            <div class="coinbox ft12 rbom">
                                                <div class="flex classfity txtgray">
                                                    <div class="flex">
                                                        <span>{{$t("marketQuotaion.coins")}}</span>
                                                        <p class="flex column between"></p>
                                                    </div>
                                                    <div class="flex" style="justify-content: center !important;">
                                                        <span>{{$t("marketQuotaion.last_price")}}</span>
                                                        <p class="flex column between"></p>
                                                    </div>
                                                    <div class="flex" style="justify-content: center !important;">
                                                        <span>{{$t("marketQuotaion.cycle")}}</span>
                                                        <p class="flex column between"></p>
                                                    </div>
                                                    <div class="flex" style="justify-content: center !important;">
                                                        <span>{{$t("marketQuotaion.high")}}</span>
                                                    </div>
                                                    <div class="flex" style="justify-content: center !important;">
                                                        <span>{{$t("marketQuotaion.low")}}</span>
                                                    </div>
                                                    <div class="flex" style="justify-content: center !important;">
                                                        <span>{{$t("marketQuotaion.volume")}}</span>
                                                    </div>
                                                    <div class="flex" style="justify-content: center !important;">
                                                        <span style="float: right; text-align: right; display: block; width: 100%; height: 100%; overflow: hidden;">{{$t("marketQuotaion.market_trading")}}</span>
                                                    </div>
                                                </div>
                                                <div style="background-color: rgb(31, 36, 51); border-radius: 8px;">
                                                    <div class="flex coinlist alcenter curPer hove1" style="border-bottom: none; height: 51px;" v-for="(item,index) in quotation" :key="index"
                                                    @click="goTrade(item.legal_id,item.currency_id,item.legal_name,item.currency_name,item.now_price,item.change,item.volume,item.cny_price)">
                                                        <p class="flex alcenter">
                                                            <img :src="item.logo" style="width: 23px; height: 23px; margin: 10px 10px 10px 0px !important;">
                                                            <span class="ml5">{{item.currency_name}}</span>
                                                        </p>
                                                        <p style="justify-content: center !important;">
                                                            <span class="m22">${{item.now_price}}</span>
                                                        </p>
                                                        <p class="tl change m22" :class="item.change<0?'red':'green'" style="justify-content: center !important;">
                                                            <span>{{
                                                                parseFloat(item.change) >= 0 ? '+' + (item.change - 0).toFixed(2) : (item.change -
                                                                0).toFixed(2)
                                                                }}%</span>
                                                        </p>
                                                        <p class="m22" style="justify-content: center !important;">
                                                            ${{item.high || '0.00' |numFilters(4)}}
                                                        </p>
                                                        <p class="m22" style="justify-content: center !important;">
                                                            ${{item.low || '0.00' |numFilters(4)}}
                                                        </p>
                                                        <p class="m22" style="justify-content: center !important;">
                                                            ${{item.volume || '0.00' |numFilters(2)}}
                                                        </p>
                                                        <p class="flex">
                                                            <span style="display: block; width: 100%; overflow: hidden; height: 100%;">
                                                                <span class="jiaoyiBut">{{$t("marketQuotaion.trade")}}</span>
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
    name: 'marketQuotaion',
    filters: {
        numFilters: function (value, num) {
            if (!value) {
                return '0.0000'
            }
            value = (value - 0).toFixed(parseInt(num)).toString()
            return value.slice(0) + ' '
        }
    },
    data() {
      return {
        hot:[],
        increase:[],
        quotation: [],
        loginFlag: false,
        lang: 'en',
        price: 12312.22,
        share_bit: 121325.55,
        share_ethereum: 12318978.77,
        trade: 318978.77
      }
    },
    components: {
      indexHeader,
      indexFooter
    },
    created() {
        this.lang = window.localStorage.getItem("lang");
        let t = localStorage.getItem("token");
        t && (this.loginFlag = true)
    },
    mounted(){
        this.getRange()
        this.getQuotation()
        this.connect()
    },
    methods:{
        getQuotation(){
            const that = this
            this.$http.get("api/currency/quotation_new",{}).then(res => {
                if (res.data.type == "ok") {
                    that.quotation = res.data.message[0].quotation
                } else {
                    // layer.msg(res.message);
                }
            });
        },
        getRange(){
            const that = this
            this.$http.get("api/currency/rangeNew",{}).then(res => {
                if (res.data.type == "ok") {
                    that.hot = res.data.message.hot;
                    that.increase = res.data.message.increase
                } else {
                    // layer.msg(res.message);
                }
            });
        },
        //去币币交易页
        goTrade(l_id, c_id, l_name, c_name, now_price, change, volume, cny_price) {
            window.localStorage.setItem('currency_id', c_id)
            window.localStorage.setItem('legal_id', l_id)
            window.localStorage.setItem('currency_name', c_name)
            window.localStorage.setItem('legal_name', l_name)
            window.localStorage.setItem('symbol', c_name + "/" + l_name)
            this.$router.push('/leverdealCenter')
        },
        connect() {
            var that = this;
            that.$socket.emit("login", localStorage.getItem("user_id"));
            that.sockets.subscribe("daymarket", msg => {
                // console.log(msg.type);
                if (msg.type == 'daymarket') {


                    for (var i = 0; i < that.quotation.length; i++) {
                        if (that.quotation[i].legal_id == msg.legal_id && that.quotation[i].currency_id == msg.currency_id) {

                            that.quotation[i].now_price = msg.now_price;
                            that.quotation[i].change = msg.change;
                            that.quotation[i].volume = msg.volume;
                            that.quotation[i].high = msg.high;
                            that.quotation[i].low = msg.low;

                        }
                    }
                }

            });
        },
    }
  }
  </script>
  <style lang="scss" scoped>
  #root {
    background: #151926;
}
.price-container {
    background-color: #151926;
    min-width: 1280px;
    max-width: 1620px;
    flex-direction: column;
    margin: 0 auto;
    padding: 0 74px;
}
.price-market-container {
    display: flex;
    flex-direction: column;
    padding-bottom: 64px;
}
#root h1, #root h2, #root h3, #root h4, #root h5, #root h6 {
    margin-top: 0;
    margin-bottom: 0.5em;
    color: rgba(0,0,0,.85);
    font-weight: 500;
}
.price-container .price-market-title {
    color: #fff!important;
}
.price-market-title {
    font-family: Gate_Sans Medium!important;
    font-weight: 500;
    font-size: 24px!important;
    line-height: 24px!important;
    color: #fff!important;
    margin-top: 56px!important;
    margin-bottom: 24px!important;
}
.price-market-list {
    display: flex;
    margin-bottom: 0!important;
    align-items: center;
}
.price-container .price-market-list li {
    color: #989fb3;
}
.price-market-list li {
    margin-right: 32px;
    font-size: 14px;
    line-height: 14px;
    color: #989fb3;
}
.top-list-wrapper {
    display: flex;
    padding-bottom: 56px;
}
.top-list-wrapper .top-container:first-child {
    margin-right: 24px;
}
.top-list-wrapper .top-container {
    flex: 1;
}
.top-container {
    background: #1f2433;
    border-radius: 8px;
    padding-top: 28px;
}
.top-list-wrapper .top-title {
    font-family: Gate_Sans Medium;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: #fff;
    margin-left: 20px;
}
.top-list-content {
    display: flex;
    flex-wrap: wrap;
    margin-top: 8px;
}
.top-list_body {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
#root a {
    text-decoration: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    transition: color .3s;
    -webkit-text-decoration-skip: objects;
}
#root a, #root area, #root button, #root input:not([type=range]), #root label, #root select, #root summary, #root textarea {
    touch-action: manipulation;
}
.top-list-content .top-list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 12px 16px;
    margin-bottom: 8px;
}
.top-list-item .list-item-left {
    display: flex;
    align-items: center;
}
#root img {
    vertical-align: middle;
    border-style: none;
}
.top-list-item .list-item-left .price-coin-item-icon {
    width: 24px;
    height: 24px;
    background: #c2c4cc;
    margin-right: 8px;
    border-radius: 50%;
    overflow: hidden;
}
.price-coin-item-title {
    font-family: Gate_Sans Medium;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #fff;
    word-break: break-word;
    padding-right: 8px;
    min-width: 89px;
    flex: 97;
}
.price-coin-item-volume {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: Gate_Sans Medium;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    color: #fff;
    padding-right: 8px;
    max-width: 109px;
    word-wrap: break-word;
    flex: 109;
}
.top-comp_change-rate {
    font-family: Gate_Sans Medium;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    word-wrap: break-word;
}
.price-wrapper {
    width: 100%;
    background: #151926;
}
.price-container {
    background-color: #151926;
    min-width: 1280px;
    max-width: 1620px;
    flex-direction: column;
    margin: 0 auto;
    padding: 0 74px;
}
.trade-tabs-container {
    width: 100%;
    padding: 0;
}
.price-container .ant-tabs {
    overflow: visible;
}
.ant-tabs-bottom, .ant-tabs-top {
    flex-direction: column;
}
.ant-tabs {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.85);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    font-feature-settings: "tnum";
    display: flex;
    overflow: hidden;
}
.price-container .ant-tabs-top>.ant-tabs-nav {
    background-color: #151926!important;
    position: sticky;
    top: 0;
    z-index: 3;
    overflow: hidden;
    margin-bottom: 24px;
    background: #fff;
    overflow: visible;
}
.ant-tabs-bottom>.ant-tabs-nav, .ant-tabs-bottom>div>.ant-tabs-nav, .ant-tabs-top>.ant-tabs-nav, .ant-tabs-top>div>.ant-tabs-nav {
    margin: 0 0 16px;
}
.ant-tabs>.ant-tabs-nav, .ant-tabs>div>.ant-tabs-nav {
    position: relative;
    display: flex;
    flex: none;
    align-items: center;
}
.trade-tabs-container .ant-tabs>.ant-tabs-nav .ant-tabs-nav-wrap, .trade-tabs-container .ant-tabs>div>.ant-tabs-nav .ant-tabs-nav-wrap {
    overflow: visible;
}
.ant-tabs>.ant-tabs-nav .ant-tabs-nav-wrap, .ant-tabs>div>.ant-tabs-nav .ant-tabs-nav-wrap {
    position: relative;
    display: inline-block;
    display: flex;
    flex: auto;
    align-self: stretch;
    overflow: hidden;
    white-space: nowrap;
    transform: translate(0);
}
.ant-tabs>.ant-tabs-nav .ant-tabs-nav-list, .ant-tabs>div>.ant-tabs-nav .ant-tabs-nav-list {
    position: relative;
    display: flex;
    transition: transform .3s;
}
.price-container .ant-tabs-tab {
    font-family: Gate_Sans Medium;
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
    padding: 0;
    color: #303440!important;
    margin-right: 32px!important;
    height: 48px;
    padding-top: 8px;
    align-items: flex-start;
}
.ant-tabs-tab {
    position: relative;
    display: inline-flex;
    align-items: center;
    padding: 12px 0;
    font-size: 14px;
    background: transparent;
    border: 0;
    outline: none;
    cursor: pointer;
    color: #d9d9d9!important;
}
.ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #1890ff;
    text-shadow: 0 0 .25px currentColor;
    color: #fff;
    font-size: 24px;
}
.ant-tabs-tab-btn, .ant-tabs-tab-remove {
    outline: none;
    transition: all .3s;
}
.ant-tabs-content-holder {
    flex: auto;
    min-width: 0;
    min-height: 0;
}
.ant-tabs-content-holder .bit-center-wrap {
    width: 100%!important;
}
.bit-center-wrap, .el-footer-content {
    width: 1239px;
    margin: 0 auto;
}
.ant-tabs .coinbox {
    background-color: #1f2433;
    border-radius: 8px;
}
.ft12 {
    font-size: 12px;
}
.ant-tabs-content-holder .coinbox .flex {
    display: flex;
}
.ant-tabs-content-holder .coinbox .classfity {
    line-height: 40px;
    color: #9ca9b5;
    padding: 0 30px;
}
.ant-tabs-content-holder .coinbox .classfity>div {
    flex: 1;
    display: flex;
    justify-content: left;
}
.ant-tabs .coinbox {
    background-color: #1f2433;
    border-radius: 8px;
}
.alcenter {
    align-items: center;
}
.curPer {
    cursor: pointer;
}
.ant-tabs-content-holder .coinbox .coinlist>p {
    flex: 1;
}
.ant-tabs-content-holder .coinbox .coinlist p {
    line-height: 50px;
    font-size: 14px;
    font-family: Arial;
    text-align: center;
    display: flex;
    justify-content: left;
}
.m22 {
    font-size: 1rem!important;
}
.ant-tabs-content-holder .coinbox .coinlist {
    padding: 0;
    color: #fff;
    padding: 0 30px;
    border-bottom: 1px solid #eee;
}
.jiaoyiBut {
    width: 3rem;
    height: 1.4rem;
    line-height: 1.4rem;
    font-size: .75rem!important;
    background: #2354e6;
    color: #fff;
    border-radius: 5px;
    float: right;
    display: block;
}
  </style>
  