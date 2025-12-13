<template>
    <div class="startup-project-container zt1">
        <div class="content startup-con startup-project-con su-dtl-con zt1" style="min-width: 0px !important;">
            <div class="main_content su-main_content clearfix" style="opacity: 1;">
                <div class="startup-project-title d-flex align-center jc-between">
                    <div class="startup-crumbs-box d-flex align-center jc-between">
                        <div onclick="window.location.href='#/startup'" class="startup-crumbs d-flex align-center" style="cursor: pointer;">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="crumbs-split crumbs-text">
                                <path d="M4.00001 10L8 6L4 2" stroke="#E6E9F2" stroke-width="2"></path>
                            </svg>
                            <span>{{project.title}} </span>
                        </div>
                        <div class="startup-back d-flex align-center" @click="goBack">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.99999 2L4 6L8 10" stroke="#fff" stroke-width="2"></path>
                            </svg>
                            <span>{{$t("startupDetail.go_back")}}</span>
                        </div>
                    </div>
                </div>
                <div class="startup-con-main-container">
                    <div class="top-info-con startup-project-info-con clearfix d-flex">
                        <div class="startup-project-info-con-box clearfix fd-column right-section">
                            <div class="ti-content-container d-flex jc-between">
                                <div class="ti-left startup-project-img startup-project-info-img startup-project-info-left">
                                    <div class="startup-project-status-label d-inline-flex align-center">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.99935 12.8337C10.221 12.8337 12.8327 10.222 12.8327 7.00033C12.8327 3.77866 10.221 1.16699 6.99935 1.16699C3.77769 1.16699 1.16602 3.77866 1.16602 7.00033C1.16602 10.222 3.77769 12.8337 6.99935 12.8337Z" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M7 3.5V7L9.33333 8.16667" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                        <span class="ti-status status-txt startup-project-status"> {{$t("startupDetail.in_progress")}} </span>
                                    </div>
                                    <img :src="project.logo"></div>
                                    <div class="ti-right startup-project-info-base d-flex flex-column jc-between">
                                        <div class="base-info-con">
                                            <div class="ti-content-title">
                                                <h1 class="clearfix d-flex align-center flex-wrap">
                                                    <div class="d-flex align-start jc-between flex-wrap startup-project-symbol-box">
                                                        <span class="startup-project-symbol font-weight-bold"> {{project.title}} </span>
                                                    </div>
                                                </h1>
                                            </div>
                                            <div class="phone-su-info su-progress-info startup-inProgress-item">
                                                <p class="info-fd-column m-bottom-double">
                                                    <span></span>
                                                    <span class="su-total info-fd-column-clear">
                                                        <span class="fs-16 curr-su-total font-weight-bold">{{project.total_sell}}</span>
                                                        <span class="su-total-term su-info-desc-text gray-font su-goal_amount">
                                                            /
                                                            <span class="su-goal_amount_num">{{project.amount}} </span>
                                                             {{project.currency_name}}
                                                        </span>
                                                    </span>
                                                </p>
                                                <p class="info-fd-column m-bottom-double">
                                                    <span>1 {{project.currency_name}} = {{project.price}} USDT</span>
                                                </p>
                                                <div class="p-bar-con">
                                                    <div class="flex jc-between startup-desc-text">
                                                        <div class="info-fd-column startup-progress-curr-percent">
                                                            <span class="barPercent fs-16">{{$t("startupDetail.surplus") + parseFloat((parseFloat(project.amount) - parseFloat(project.total_sell)) / parseFloat(project.amount) * 100).toFixed(2) + "%"}}</span>
                                                        </div>
                                                    </div>
                                                    <div class="p-bar">
                                                        <div class="p-bar-in p-bar-in-progress-38,928,640" :style="'width: '+parseFloat((parseFloat(project.amount) - parseFloat(project.total_sell)) / parseFloat(project.amount) * 100).toFixed(2) + '%'"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="su-tip">
                                                <div class="start-project-time-box d-flex flex-column align-start">
                                                    <span class="startup-start-time start-project-time">{{$t("startupDetail.start_time")+' ' +project.start_at}}</span>
                                                    <span class="startup-end-time start-project-time">{{$t("startupDetail.end_time")+' ' +project.end_at}}</span>
                                                </div>
                                                <div id="endTip" class="su-project-end-tips gray-font"> {{$t("startupDetail.end_tip")}}</div>
                                                <div style="color: white; display: flex; justify-content: space-between;">
                                                    <div style="cursor: pointer;" @click="jump(project.link)"> {{$t("startupDetail.official_website")}} </div>
                                                    <div style="cursor: pointer;" @click="jump(project.white_book)">{{$t("startupDetail.white_paper")}} </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="su-project-result">
                                            <div id="countBox" style="font-size: 115%;">
                                                <div class="main-example">
                                                    <p class="su-next-stage-text light-gray-font"> 
                                                        {{$t("startupDetail.su_next_stage_text_1")}} 
                                                        <b>{{$t("startupDetail.su_next_stage_text_2")}} </b> 
                                                        {{$t("startupDetail.su_next_stage_text_3")}}  
                                                    </p>
                                                    <div id="main-example" data-tosec="20645" class="prime-time-state su-time-state">
                                                        <div class="time W">
                                                            <span class="count curr top">00W</span>
                                                            <span class="count next top">00W</span>
                                                            <span class="count next bottom">00W</span>
                                                            <span class="count curr bottom">00W</span>
                                                            <span class="label">W</span>
                                                        </div>
                                                        <div class="time D">
                                                            <span class="count curr top">{{day}}D</span>
                                                            <span class="count next top">{{day}}D</span>
                                                            <span class="count next bottom">{{day}}D</span>
                                                            <span class="count curr bottom">{{day}}D</span>
                                                            <span class="label">D</span>
                                                        </div>
                                                        <div class="time H flip">
                                                            <span class="count curr top">{{hour}}H</span>
                                                            <span class="count next top">{{hour}}H</span>
                                                            <span class="count next bottom">{{hour}}H</span>
                                                            <span class="count curr bottom">{{hour}}H</span>
                                                            <span class="label">H</span>
                                                        </div>
                                                        <div class="time M flip">
                                                            <span class="count curr top">{{min}}M</span>
                                                            <span class="count next top">{{min}}M</span>
                                                            <span class="count next bottom">{{min}}M</span>
                                                            <span class="count curr bottom">{{min}}M</span>
                                                            <span class="label">M</span>
                                                        </div>
                                                        <div class="time S flip">
                                                            <span class="count curr top">{{sec}}S</span>
                                                            <span class="count next top">{{sec}}S</span>
                                                            <span class="count next bottom">{{sec}}S</span>
                                                            <span class="count curr bottom">{{sec}}S</span>
                                                            <span class="label">S</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="ti-content-footer startup-product-list d-flex align-center jc-between">
                                    <div class="su-footer-desc startup-project-info-left d-flex align-center flex-wrap jc-between">
                                        <div class="d-flex flex-column align-start flex-1 su-footer-desc-box su-footer-desc-left" style="display: flex; align-items: center;"></div>
                                    </div>
                                    <div class="participate-startup">
                                        <input type="submit" name="submit" class="su_submit sub-btn su_buy_btn" :value='$t("startupDetail.subscribe")' style="width: 400px; height: 50px;" @click="buy_dialog = true">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex-box d-flex align-start jc-between su-project-content">
                            <div class="right_mcontent su-contentdetail">
                                <div class="right-section terms clearfix su-contentdetail-item">
                                    <div class="co-intro-title">
                                        <h2 class="co-intro-symbol font-weight-bold">{{project.title}}</h2>
                                    </div>
                                    <div class="su-introduction su-introduction-content">
                                        <p> {{project.summary}} </p>
                                    </div>
                                </div>
                                <div class="co-intro right-section terms clearfix su-contentdetail-item">
                                    <div id="coin_about" class="item coin_about">
                                        <div class="clearfix"></div>
                                        <div class="cionintro">
                                            <div class="newstitle su-contentdetail-title font-weight-bold d-flex align-center">
                                                <span class="su-contentdetail-icon"></span>
                                                <h4> {{$t("startupDetail.project_introduction")}} </h4>
                                            </div>
                                            <div class="su-introduction-content markdown-body editormd-html-preview" style="color: white;" v-html="project.content">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="right-dtl-con su-dtl-condition">
                                <div class="right-section terms clearfix su-dtl-condition-item zt1">
                                    <div class="newstitle su-contentdetail-title font-weight-bold">
                                        <span class="lcion"></span>
                                        <h4> {{$t("startupDetail.project_participation_requirements")}} </h4>
                                    </div>
                                    <ol>
                                        <li>
                                            <span class="su-dtl-condition-details dark-gray-font s-check-unset">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="su-check-icon">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM6.83273 11.4947L12.4048 6.11267L11.3626 5.03378L6.88358 9.36015L4.6631 7.00089L3.5708 8.02894L6.83273 11.4947Z" fill="#B8BDCC"></path>
                                                </svg>
                                                <div>
                                                    {{$t("startupDetail.desc_1")}} Gate.io 
                                                    <span data-href="/signup" data-value="signup" class="condition-to-operate condition-to-link">{{$t("startupDetail.desc_2")}}</span>
                                                     {{$t("startupDetail.desc_3")}}<span data-href="/login" data-value="login" class="condition-to-operate condition-to-link">{{$t("startupDetail.desc_4")}}</span>
                                                </div>
                                            </span>
                                        </li>
                                        <li>
                                            <span class="su-dtl-condition-details dark-gray-font s-check-unset">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="su-check-icon">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM6.83273 11.4947L12.4048 6.11267L11.3626 5.03378L6.88358 9.36015L4.6631 7.00089L3.5708 8.02894L6.83273 11.4947Z" fill="#B8BDCC"></path>
                                                </svg>
                                                <div class="condition-details-content">
                                                    {{$t("startupDetail.content_1")}}
                                                    <span data-href="/myaccount/security" class="to-account-security condition-to-operate-content">{{$t("startupDetail.content_2")}}</span>
                                                </div>
                                            </span>
                                        </li>
                                        <li id="sign-agreement-status">
                                            <span class="su-dtl-condition-details dark-gray-font s-check-unset">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="su-check-icon">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM6.83273 11.4947L12.4048 6.11267L11.3626 5.03378L6.88358 9.36015L4.6631 7.00089L3.5708 8.02894L6.83273 11.4947Z" fill="#B8BDCC"></path>
                                                </svg>
                                                <div class="condition-details-content">
                                                    {{$t("startupDetail.agreement_tip")}} 
                                                    <span id="startup-sign-agreement" class="startup-sign-agreement condition-to-operate-content">{{$t("startupDetail.agreement")}}</span> 。
                                                </div>
                                            </span>
                                        </li>
                                        <li class="gray-font">
                                            <span class="su-dtl-condition-tips">
                                                1 {{$t("startupDetail.su_dtl_condition_tips")}} 
                                                <span class="su-dtl-condition-tips-data"> 20 USDT </span> 
                                                {{$t("startupDetail.su_dtl_condition_tips_data")}}
                                            </span>
                                        </li>
                                    </ol>
                                </div>
                                <div class="right-section su-risk-tip clearfix su-dtl-condition-item">
                                    <div class="newstitle su-contentdetail-title font-weight-bold">
                                        <h4>
                                            <span class="newstitle-red-tips">*</span>
                                            {{$t("startupDetail.risk_warning")}} 
                                        </h4>
                                    </div>
                                    <ol class="su-dtl-condition-content-text dark-gray-font risktip-content">
                                        <li> {{$t("startupDetail.ol_li_1")}} </li>
                                        <li> {{$t("startupDetail.ol_li_2")}} </li>
                                        <li> {{$t("startupDetail.ol_li_3")}} </li>
                                        <li> {{$t("startupDetail.ol_li_4")}} </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <el-dialog
                :title="$t('startupDetail.subscription_information')"
                :visible.sync="buy_dialog"
                width="400px"
                style="margin-top: 15vh;"
                :before-close="handleClose">
                <div> {{$t('startupDetail.subscription_quantity')}} </div>
                <div>
                    <el-input :placeholder="$t('startupDetail.input_num')" v-model="amount" @input="input(amount)"></el-input>
                </div>
                <div class="mt10" style="display: flex; justify-content: space-between;">
                    <div>{{$t('startupDetail.need_to_pay')}}USDT：</div>
                    <div>{{needPay}}</div>
                </div>
                <div class="mt10" style="display: flex; justify-content: space-between;">
                    <div> {{$t('startupDetail.current_balance')}} </div>
                    <div>{{ balance.change_balance }} USDT</div>
                </div>
                <div class="mt10" style="display: flex; justify-content: space-between;">
                    <div> {{$t('startupDetail.issue_price')}} </div>
                    <div>1 {{project.currency_name}} = {{project.price}} USDT</div>
                </div>
                <el-button @click="confirmIeo" type="primary" class="butbox mt30" style="width: 100%; margin-top: 10px;">{{$t('startupDetail.buy')}}</el-button>
            </el-dialog>
        </div>
    </div>
  </template>
  <script>
  
  export default {
    name: 'startupDetail',
    data() {
        return {
            project_id: 0,
            project: {},
            currentCurrencyIndex: 0,
            currencys: [],
            showSelectCurrency: !1,
            showSubscribe: !1,
            buyDialog: !1,
            balance: {},
            needPay: 0,
            amount: null,
            lang: "",
            token: "",
            timer: "",
            down_date: "",
            day: "",
            hour: "",
            min: "",
            sec: "",
            buy_dialog: !1
        }
    },
    created() {
        this.project_id = this.$route.params.project_id,
        this.token = localStorage.getItem("token") || "",
        this.lang = window.localStorage.getItem("lang") || "en"
    },
    mounted(){
        this.getProjectDetail(),
        this.getWalletDetail()
    },
    methods:{
        input(t) {
            const e = Number(t);
            this.needPay = parseFloat((e * this.project.price).toFixed(8))
        },
        goBack() {
            window.history.go(-1)
        },
        jump(t) {
            t && window.open(t)
        },
        handleClose() {
            this.buy_dialog = !1
        },
        confirmIeo() {
            var t = this;
            this.amount ? this.$http({
                url: "/api/project/order",
                method: "POST",
                data: {
                    project_id: t.project.id,
                    amount: t.amount,
                    pay_currency: 3,
                    price: 5,
                    lang: window.localStorage.getItem("lang") || "en"
                },
                headers: {
                    Authorization: t.token
                }
            }).then(e=>{
                layer.msg(e.data.message),
                setTimeout((function() {
                    t.$router.push("/startup")
                }
                ), 500)
            }
            ) : layer.msg(this.$t("startupDetail.msg_input_num"))
        },
        getAvailabTime() {
            var t = new Date
                , e = new Date(this.project.end_at)
                , a = e.getTime() - t.getTime();
            this.down_date = a;
            var s = this;
            this.timer = setInterval((function() {
                if (s.down_date = s.down_date - 1e3,
                s.down_date > 0) {
                    let t = Math.floor(s.down_date / 864e5)
                        , e = Math.floor(s.down_date / 36e5 % 24)
                        , a = Math.floor(s.down_date / 6e4 % 60)
                        , i = Math.floor(s.down_date / 1e3 % 60);
                    e = e < 10 ? "0" + e : e,
                    a = a < 10 ? "0" + a : a,
                    i = i < 10 ? "0" + i : i,
                    t > 0 && (s.day = t,
                    s.hour = e,
                    s.min = a,
                    s.sec = i),
                    t <= 0 && e > 0 && (s.day = 0,
                    s.hour = e,
                    s.min = a,
                    s.sec = i),
                    t <= 0 && e <= 0 && (s.day = 0,
                    s.hour = 0,
                    s.min = a,
                    s.sec = i)
                } else
                    clearInterval(timer)
            }
            ), 1e3)
        },
        getWalletDetail() {
            var t = this;
            this.$http({
                url: "/api/wallet/detail",
                method: "post",
                data: {
                    currency: 3,
                    type: "change",
                    lang: t.lang
                },
                headers: {
                    Authorization: t.token
                }
            }).then(e=>{
                t.balance = e.data.message
            }
            )
        },
        getProjectDetail() {
            var t = this;
            this.$http({
                url: "/api/project/detail?project_id=" + t.project_id + "&lang=" + t.lang,
                method: "get",
                data: {},
                headers: {
                    Authorization: t.token
                }
            }).then(e=>{
                t.project = e.data.message.info,
                t.getAvailabTime()
            }
            )
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


.startup-project-container {
    padding-bottom: 140px;
    font-size: 16px;
    background: #151926!important
}

.content,.main_content,div.funance-content {
    background: 0 0!important
}

.main_content {
    width: 80%;
    min-width: 918px;
    background: #fff;
    padding: 0 30px;
    float: left;
    position: relative;
    box-sizing: border-box;
    border-left: 3px solid #f1f3f5
}

.startup-list-container,.startup-list-content,body .main_content.su-main_content {
    background: #151926!important
}

body .main_content {
    border-left: 3px solid #232426!important
}

.startup-project-con .main_content {
    width: 100%;
    border: none;
    padding: 0;
    float: unset
}

.su-main_content {
    min-width: 1200px
}

.clearfix {
    zoom:1}

.clearfix:after,.clearfix:before,.dataTables_wrapper:after,.dataTables_wrapper:before {
    content: " ";
    display: table;
    clear: both
}

.clearfix:after,.clearfix:before {
    display: table;
    content: ""
}

.startup-project-title {
    height: 64px;
    box-shadow: 0 4px 16px rgba(23,56,153,.06);
    box-sizing: border-box;
    background: #fbfcff;
    border-top: 1px solid #eef1fa;
    min-width: 1440px
}

.align-center {
    align-items: center
}

.jc-between {
    justify-content: space-between
}

.startup-project-title {
    border-color: transparent
}

.startup-project-title,.subscription-record-box {
    background: #151926;
    box-shadow: 0 4px 8px rgba(0,0,0,.25)
}

.startup-con-main-container,.startup-crumbs-box {
    width: 1440px;
    margin: 0 auto
}

.startup-banner-data,.startup-con-main-container,.startup-crumbs-box,.startup-list-banner-text,.startup-list-content,.startup-list-finish-all .startup-finish-container,.startup-list-finish-all .startup-finish-title-box {
    width: 1200px
}

@media screen and (min-width: 1800px) {
    .startup-banner-data,.startup-con-main-container,.startup-crumbs-box,.startup-list-banner-text,.startup-list-content,.startup-list-finish-all .startup-finish-container,.startup-list-finish-all .startup-finish-title-box {
        width:1440px
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
        width: 1120px
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

    .startup-finish-item {
        min-width: unset
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

.startup-crumbs-box {
    height: 100%
}

.startup-back,.startup-crumbs {
    font-weight: 500;
    font-family: Gate_Sans Medium
}

.crumbs-link,.startup-back {
    cursor: pointer
}

.startup-project-info-con {
    margin-top: 63px;
    box-sizing: border-box;
    padding: 32px 24px;
    box-shadow: 0 4px 16px rgba(23,56,153,.06);
    border-radius: 8px;
    margin-bottom: 72px
}

.startup-finish-item,.startup-project-info-con {
    box-shadow: 0 4px 16px rgba(23,56,153,.06);
    background: #1f2433
}

.su-subscription-record,.ti-content-container {
    border-color: #2a2f40
}

.ti-content-container {
    padding-bottom: 32px;
    border-bottom: 1px solid #eef1fa
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

.startup-project-img .startup-project-status-label {
    position: absolute;
    top: 24px;
    left: 24px;
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

.startup-project-img.startup-project-info-img .startup-project-status-label {
    min-width: unset
}

.startup-project-con.zt1 .startup-project-status-label,.startup-project-underway {
    background: #13bf86
}

.d-inline-flex {
    display: inline-flex
}

.startup-project-info-img img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover
}

img {
    vertical-align: middle;
    border-style: none;
    border: 0;
    padding: 0
}

.startup-project-info-base {
    flex: 1;
    box-sizing: border-box;
    padding: 8px 0
}

.flex-column {
    flex-direction: column
}

h1,h2,h3,h4,h5,h6 {
    margin-top: 0;
    font-weight: 500
}

.base-info-con .ti-content-title>h1 {
    flex-direction: column;
    align-items: flex-start
}

.flex-wrap {
    flex-wrap: wrap
}

.align-start {
    align-items: flex-start
}

.startup-project-info-base .font-weight-bold.startup-project-symbol {
    margin-bottom: 12px;
    display: inline-block
}

.font-weight-bold {
    font-weight: 700;
    font-family: Gate_Sans Bold
}

.d-flex {
    display: flex
}

.freeBoxInfo,.startup-type-label {
    background: rgba(51,102,255,.08)
}

.finish-item-content .startup-type-label.title-tip-INITIAL,.title-tip-INITIAL {
    color: #11ad7a;
    background: #eef8f5
}

.freeBoxInfo {
    min-height: 26px;
    width: auto;
    background-color: rgba(35,84,230,.08);
    border-radius: 4px;
    margin: 0 12px 0 0;
    box-sizing: border-box;
    padding: 4px 8px;
    color: #36f;
    font-size: 12px;
    line-height: 150%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-family: Gate_Sans Medium
}

.finish-item-content .startup-type-label.title-tip-INITIAL,.title-tip-INITIAL {
    background: rgba(19,191,134,.08);
    color: #13bf86
}

.phone-su-info {
    margin: 24px 0 24px
}

.su-progress-info-data {
    margin-bottom: 32px
}

p {
    margin-top: 0;
    margin-bottom: 1em
}

.su-info-desc-text {
    font-size: 20px;
    line-height: 20px;
    margin-left: 12px;
    display: inline-block;
    font-weight: 500;
    font-family: Gate_Sans Medium
}

.gray-font.su-info-desc-text {
    color: #606880
}

.m-bottom-double {
    margin-bottom: 16px
}

.phone-su-info .info-fd-column-clear {
    display: flex;
    align-items: flex-end
}

.startup-project-info-base .font-weight-bold {
    font-size: 32px;
    line-height: 32px
}

.curr-su-total,.record-info-num {
    color: #36f
}

.startup-progress-curr-percent {
    font-weight: 700;
    font-family: Gate_Sans Bold;
    font-size: 20px;
    line-height: 20px;
    color: #36f
}

.su-progress-info .startup-progress-curr-percent {
    font-size: 16px;
    line-height: 16px;
    color: #b8bdcc;
    font-weight: 500;
    font-family: Gate_Sans Medium
}

.light-gray-font,.startup-inProgress-timing .item-state,.su-progress-info .startup-progress-curr-percent {
    color: #474f66
}

.p-bar {
    height: 8px;
    margin-top: 12px;
    background: #eef1fa
}

div.p-bar {
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

.ti-right .su-tip {
    background: rgba(0,0,0,.1)
}

.ti-right .base-info-con .su-tip {
    background: transparent
}

.ti-right .su-tip {
    color: #888
}

.start-project-time-box {
    color: #fff;
    font-size: 16px;
    line-height: 16px;
    margin-bottom: 12px;
    font-weight: 700;
    font-family: Gate_Sans Bold
}

.startup-end-time.start-project-time {
    margin-top: 8px
}

.gray-font.su-project-end-tips {
    color: #606880
}

.light-gray-font {
    color: #474f66
}

.su-next-stage-text,.su-project-desc,.su-project-number,.su-project-take {
    margin-bottom: 12px
}

p {
    margin: 0 0 25px
}

.prime-time-state {
    display: flex;
    margin-top: 16px;
    position: relative
}

.prime-time-state.su-time-state {
    margin-top: 0
}

.prime-time-state.su-time-state .time {
    width: 88px;
    height: 72px;
    margin-right: 12px
}

.prime-time-state .time:first-child,.prime-time-state span.label {
    display: none!important
}

.prime-time-state .time {
    border-radius: 4px;
    display: inline-block;
    text-align: center;
    position: relative;
    height: 44px;
    width: 54px;
    perspective: 479px;
    backface-visibility: hidden;
    transform: translateZ(0) translateZ(0);
    margin-right: 4px
}

.prime-time-state .count {
    background: linear-gradient(180deg,#edf1ff,#dce6fe 226.13%);
    color: #36f;
    display: block;
    font-family: Gate_Sans Bold;
    font-weight: 700;
    font-size: 20px;
    line-height: 44px;
    overflow: hidden;
    position: absolute;
    text-align: center;
    top: 0;
    width: 100%;
    transform: translateZ(0);
    transform-style: flat
}

.prime-time-state .count.curr.top {
    transform: rotateX(0deg);
    z-index: 3
}

.su-project-result .prime-time-state .count.top {
    background: linear-gradient(180deg,#f7f8ff,#e8edff)
}

.prime-time-state.su-time-state .count {
    font-size: 32px;
    line-height: 72px
}

.prime-time-state .count.top {
    border: none;
    border-radius: 4px 4px 0 0;
    height: 50%;
    transform-origin: 50% 100%
}

.startup-product-list {
    margin-top: 32px
}

.su-footer-desc.startup-project-info-left {
    height: auto;
    min-height: unset;
    flex: 1
}

.startup-project-info-left {
    margin-right: 48px;
    position: relative;
    max-height: 510px;
    max-width: 904px;
    width: calc(63% + 48px);
    border-radius: 8px;
    -o-object-fit: cover;
    object-fit: cover;
    overflow: hidden
}

.su-footer-desc-box .su-footer-desc-item {
    margin-bottom: 12px;
    font-weight: 500;
    font-family: Gate_Sans Medium
}

.gray-font.su-info-desc-text,.gray-font.su-project-end-tips,.progress-rate,.startup-help-faq-item,.startup-introduction-desc,.su-footer-desc-box .su-footer-desc-item .gray-font,.subscription-record-box {
    color: #606880
}

.participate-startup {
    max-width: 440px;
    width: 100%
}

input {
    border-color: #333;
    background-color: #141417;
    color: #fff
}

.participate-startup .sub-btn {
    background: #36f;
    height: 52px;
    border-radius: 8px;
    font-size: 24px;
    font-weight: 700;
    font-family: Gate_Sans Bold
}

.participate-startup>input {
    width: 100%
}

.right_mcontent.su-contentdetail {
    width: calc(100% - 628px);
    box-sizing: border-box;
    margin-right: 146px
}

.right_mcontent {
    position: relative
}

.su-contentdetail-item:not(.co-intro) {
    margin-bottom: 80px
}

.co-intro-title h2,.su-dtl-con .newstitle h4 {
    color: #fff
}

.co-intro-symbol {
    font-size: 48px;
    line-height: 150%;
    margin-bottom: 24px
}

.content .su-contentdetail .su-introduction-content>p,.content .su-contentdetail .su-introduction-content {
    font-weight: 400;
    font-family: Gate_Sans;
    font-size: 16px;
    line-height: 180%;
    color: #04091a;
    margin-bottom: 0
}

.content .su-contentdetail .su-introduction-content>p,.faq-more,.finish-item-content,.gateioNotyTheme.gateioSuProjectNotyTheme .noty_text,.progress-rate .p-num,.start-project-time-box,.startup-inProgress-name,.startup-list-container,.startup-project-con,.su-dtl-condition-tips-data,.su-project-account a,div.prime-introduction-desc {
    color: #fff
}

.right-section {
    border-color: hsla(0,0%,100%,.1);
    background: 0 0
}

div.co-intro {
    width: 100%
}

.item.coin_about {
    margin-bottom: 50px
}

.su-contentdetail .item.coin_about {
    margin-bottom: 0
}

.cionintro {
    border: none
}

.su-contentdetail-icon {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-right: 16px;
    background: #17e6a1
}
.su-dtl-condition-item {
    box-sizing: border-box;
    box-shadow: 0 4px 16px rgba(23,56,153,.06);
    border-radius: 8px;
    padding: 32px 24px;
    margin-bottom: 24px;
}
.su-dtl-condition .su-contentdetail-title {
    margin-bottom: 24px;
}
.su-dtl-condition-details {
    display: flex;
    align-items: flex-start;
    margin-bottom: 24px;
    font-size: 16px;
    line-height: 150%;
}
.newstitle {
    height: 40px;
    width: 100%;
    font-size: 1.35em;
    line-height: 40px;
    border-bottom: 1px solid #ddd;
}
.su-contentdetail-title {
    font-size: 28px;
    line-height: 180%;
    margin-bottom: 16px;
    border: none;
}
::marker {
    unicode-bidi: isolate;
    font-variant-numeric: tabular-nums;
    text-transform: none;
    text-indent: 0px !important;
    text-align: start !important;
    text-align-last: start !important;
}
.su-dtl-condition-content-text {
    font-size: 16px;
    line-height: 180%;
}
ol.risktip-content li {
    list-style: auto;
    list-style-position: outside;
    margin-left: 16px;
    margin-top: 24px;
}
</style>
  