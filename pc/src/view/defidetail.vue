<template>
    <div style="background-color: rgb(21, 25, 38);">
        <indexHeader></indexHeader>
        <div class="mxc-content-wrapper detail_detailContainer__IWbjT">
            <div class="ant-page-header ant-page-header-ghost">
                <div class="ant-page-header-heading">
                    <div class="ant-page-header-heading-left">
                        <div class="ant-page-header-back" @click="goBack">
                            <div role="button" tabindex="0" class="ant-page-header-back-button" style="border: 0px; background: transparent; padding: 0px; line-height: inherit; display: inline-block;">
                                <span class="anticon anticon-arrow-right">
                                    <svg focusable="false" width="1em" height="1em" fill="white" aria-hidden="true" viewBox="0 0 1024 1024" data-icon="ArrowLeftSharp" class="sc-bcXHqe fzgrYP mx-icon iconfont iconicon_back svg-icon">
                                        <path d="M853.333333 474.154667H334.08l238.506667-211.413334L512 209.408 170.666667 512l341.333333 302.549333 60.16-53.333333-238.08-211.370667H853.333333v-75.648z"></path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <span class="ant-page-header-heading-title">Staking - {{lockming.currency_name}}</span>
                    </div>
                </div>
            </div>
            <form id="pos" class="ant-form ant-form-horizontal">
                <div class="detail_detailContent__galyW">
                    <div class="detail-left_left__DqgvB">
                        <div class="detail-left_iconInfo__vEzTd">
                            <div class="detail-left_icon__eFPp4">
                                <div class="detail-left_img__SXwyr">
                                    <img :src="lockming.currency_logo" style="width: 100%; height: 100%;"></div>
                                    <div>
                                        <b>{{lockming.currency_name}}</b>
                                    </div>
                                </div>
                                <div class="detail-left_profitRate__Q_EAP">
                                    {{$t("mx_defi_detail.day_rate")}}
                                    <b>{{parseFloat(lockming.interest_rate)}}%</b>
                                </div>
                            </div>
                            <div>
                                <div class="detail-left_steps__WCEIa">
                                    <div class="detail-left_step__x21eX">
                                        <p>{{$t("mx_defi_detail.lock_start_time")}}</p>
                                        <p>{{lockming.created_at}}</p>
                                    </div>
                                    <b></b>
                                    <div class="detail-left_step__x21eX">
                                        <p>{{$t("mx_defi_detail.lock_week")}}</p>
                                        <p>{{lockming.day}} 天</p>
                                    </div>
                                    <b></b>
                                    <div class="detail-left_step__x21eX">
                                        <p>{{$t("mx_defi_detail.lock_over", {
                                            day: "0"
                                        })}}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="detail-left_inputWrapper__U8BSg">
                                <div class="ant-space ant-space-vertical detail-left_input___hOuo" style="gap: 8px;">
                                    <div class="ant-space-item">
                                        <div type="flex" class="ant-row ant-row-space-between ant-row-middle">
                                            <span>{{$t("mx_defi_detail.lock_num")}}</span>
                                            <div>
                                                <span class="detail-left_avl__iMi_6">{{$t("mx_defi_detail.available_balance")}}:{{balance.change_balance}} {{lockming.currency_name}}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="ant-space-item">
                                        <span class="ant-input-affix-wrapper detail-left_input___hOuo" style="height: 42px;">
                                            <input :placeholder='$t("mx_defi_detail.lock_num_tips")' v-model="amount" type="number" id="pos_number" aria-required="true" class="ant-input">
                                            <span class="ant-input-suffix" style="cursor: pointer;" @click="setAll">
                                                <span>{{$t("mx_defi_detail.all")}}</span>
                                            </span>
                                        </span>
                                    </div>
                                    <div class="ant-space-item">
                                        <div type="flex" class="ant-row ant-row-space-between ant-row-middle detail-left_red__06MIW">
                                            <span>{{$t("mx_defi_detail.min_lock_num") + parseFloat(lockming.save_min) + " " + lockming.currency_name}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div type="flex" class="ant-row ant-row-center ant-row-middle detail-left_expect__EI89x">
                                    <div class="ant-space ant-space-horizontal ant-space-align-center" style="gap: 8px;margin:auto">
                                        <div class="ant-space-item">1{{$t("mx_defi_detail.day_yq_rate") + estimatedIncome + " " + lockming.currency_name}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="detail_right__gCXHk">
                            <div class="detail_rules__OcqJf">
                                <h2 class="detail_secondTitle__4HMJ9">{{$t("mx_defi_detail.desc_title")}}</h2>
                                <ol>
                                    <li data-type="0"> {{$t("mx_defi_detail.desc_msg1").replace("{day}",lockming.day).replace("{min}",parseFloat(lockming.save_min)).replace("{currency_name}",lockming.currency_name)}}</li>
                                    <li data-type="1"> {{$t("mx_defi_detail.desc_msg2").replace("{day}",lockming.day)}}  </li>
                                    <li data-type="4"> {{$t("mx_defi_detail.desc_msg3")}}  </li>
                                    <li data-type="5"> {{$t("mx_defi_detail.desc_msg4")}}  </li>
                                    <li data-type="8"> {{$t("mx_defi_detail.desc_msg5")}}  </li>
                                    <li data-type="17">  {{$t("mx_defi_detail.desc_msg6")}}  </li>
                                </ol>
                            </div>
                            <div class="detail_action__4ftzD">
                                <a-checkbox v-model="rule" style="font-size: 14px;">
                                    <span>
                                        {{$t("mx_defi_detail.desc_msg7")}} 
                                        <a href="#/text?id=38" target="_blank" rel="noreferrer" class="detail_link__APjKJ">《{{ siteName + $t("mx_defi_detail.desc_msg8")}}》</a>
                                    </span>
                                </a-checkbox>
                                <button @click="submit" type="button" class="ant-btn ant-btn-primary ant-btn-lg ant-btn-block detail_btn__T_kKe">
                                    <span>{{$t("tv.confirm")}} </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        <indexFooter></indexFooter>
    </div>
  </template>
  <script>
  import indexHeader from '@/view/indexHeader';
  import indexFooter from "@/view/indexFooter";
  
  export default {
    name: 'mx-defi-detail',
    data() {
        return {
            lockming: {},
            lang: "",
            token: "",
            balance: {},
            amount: null,
            rule: false,
            siteName: ""
        }
    },
    components: {
      indexHeader,
      indexFooter
    },
    created() {
        let t = localStorage.getItem("lockmingData");
        t && (this.lockming = this.$route.params.lockming,
        this.lockming ? localStorage.setItem("lockmingData", JSON.stringify(this.$route.params.lockming)) : this.lockming = JSON.parse(t)),
        this.token = localStorage.getItem("token") || "",
        this.lang = window.localStorage.getItem("lang") || "en"
    },
    beforeDestory() {
        localStorage.removeItem("lockmingData")
    },
    computed: {
        estimatedIncome() {
            const {balance: t, lockming: e, i18n: a} = this
                , s = this.amount ? Number(this.amount) : 0;
            return s * e.day * Number(e.interest_rate) / 100
        }
    },
    mounted() {
        this.getWalletDetail(),
        this.getSiteConfig()
    },
    methods:{
        getSiteConfig() {
            var t = this;
            this.$http({
                url: "/api/getSiteConfig?lang=" + window.localStorage.getItem("lang"),
                method: "get",
                data: {}
            }).then(e=>{
                t.siteName = e.data.message.site_name
            }
            )
        },
        submit() {
            if (!this.rule)
                return void layer.msg("请先同意风险告知书");
            const {amount: t, balance: e, lockming: a, i18n: s} = this;
            if (t && /^[1-9]\d*(,\d{3})*(\.\d{1,10})?$|^0\.\d{1,20}$/.test(t))
                if (t < Number(a.save_min))
                    layer.msg("最小存币数量：" + Number(a.save_min));
                else if (t > Number(e.change_balance))
                    layer.msg("可用余额不足");
                else {
                    var i = this;
                    this.$http({
                        url: "/api/lh/deposit",
                        method: "POST",
                        data: {
                            config_id: i.lockming.id,
                            amount: i.amount,
                            lang: window.localStorage.getItem("lang") || "en"
                        },
                        headers: {
                            Authorization: i.token
                        }
                    }).then(t=>{
                        layer.msg(t.data.message),
                        setTimeout((function() {
                            i.$router.push("/mx-defi")
                        }
                        ), 1e3)
                    }
                    )
                }
            else
                layer.msg("请填写正确金额")
        },
        goBack() {
            this.$router.go(-1)
        },
        getWalletDetail() {
            var t = this;
            this.$http({
                url: "/api/wallet/detail",
                method: "post",
                data: {
                    currency: t.lockming.currency_id,
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
        setAll() {
            this.amount = this.balance.change_balance
        }
    }
  }
  </script>
  <style lang="scss" scoped>
  .mxc-content-wrapper {
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
}
.detail_detailContainer__IWbjT {
    min-height: calc(100vh - 434px);
}

.detail_detailContent__galyW {
    background-color: #292f40;
    padding: 28px 32px;
    margin-bottom: 100px;
    display: flex;
    flex-wrap: wrap;
  }
  .detail-left_left__DqgvB {
    width: 55%;
    -webkit-padding-end: 52px;
    padding-inline-end: 52px;
}
.detail-left_iconInfo__vEzTd .detail-left_icon__eFPp4, .detail-left_iconInfo__vEzTd {
    display: flex;
    align-items: center;
}
.detail-left_iconInfo__vEzTd {
    justify-content: space-between;
    color: #97a1a9;
    margin-bottom: 12px;
}
.detail-left_iconInfo__vEzTd .detail-left_icon__eFPp4, .detail-left_iconInfo__vEzTd {
    display: flex;
    align-items: center;
}
.detail-left_iconInfo__vEzTd .detail-left_icon__eFPp4 .detail-left_img__SXwyr {
    width: 42px;
    height: 42px;
    -webkit-margin-end: 6px;
    margin-inline-end: 6px;
    border-radius: 50%;
    background-size: contain;
    background-position: 50%;
    background-repeat: no-repeat;
}
.detail-left_iconInfo__vEzTd .detail-left_icon__eFPp4 b {
    color: #fff;
    font-size: 24px;
    line-height: 32px;
}
.detail-left_iconInfo__vEzTd .detail-left_profitRate__Q_EAP {
    font-size: 16px;
    display: flex;
    align-items: center;
}
.detail-left_iconInfo__vEzTd .detail-left_profitRate__Q_EAP b {
    color: #16b979;
    font-size: 30px;
    -webkit-margin-start: 8px;
    margin-inline-start: 8px;
}
.detail-left_steps__WCEIa {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    position: relative;
}
.detail-left_steps__WCEIa .detail-left_step__x21eX {
    text-align: center;
    position: relative;
    padding-top: 30px;
    width: 130px;
}
.detail-left_steps__WCEIa p {
    margin-bottom: 5px;
    color: #555b63;
}
.detail-left_steps__WCEIa .detail-left_step__x21eX:after {
    content: "";
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    box-shadow: 0 0 0 3px #1ab879, 0 0 0 6px rgba(26,184,121,.1);
    top: 7px;
    left: 50%;
    transform: translateX(-50%);
}
.detail-left_inputWrapper__U8BSg {
    margin-top: 38px;
}
.detail-left_steps__WCEIa b:after {
    content: "";
    position: absolute;
    height: 0;
    width: 170px;
    top: 8px;
    border-bottom: 1px dashed rgba(26,184,121,.44);
    transform: translateX(-50%);
}
.detail-left_inputWrapper__U8BSg .detail-left_input___hOuo {
    width: 100%;
}
.ant-space {
    display: inline-flex;
}
.ant-space-vertical {
    flex-direction: column;
}
.ant-row {
    flex-flow: row wrap;
    min-width: 0;
}
.ant-row, .ant-row:after, .ant-row:before {
    display: flex;
}
.ant-row-middle {
    align-items: center;
}
.ant-row-space-between {
    justify-content: space-between;
}
.detail-left_inputWrapper__U8BSg .detail-left_input___hOuo .detail-left_avl__iMi_6 {
    color: #555b63;
    font-size: 12px;
    -webkit-margin-start: 10px;
    margin-inline-start: 10px;
}
.ant-input-affix-wrapper {
    position: relative;
    display: inline-block;
    width: 100%;
    min-width: 0;
    padding: 8px 11px;
    color: #edeff2;
    font-size: 14px;
    line-height: 1.5715;
    background-color: transparent;
    background-image: none;
    border: 1px solid #555a5f;
    border-radius: 4px;
    transition: all .3s;
    display: inline-flex;
}
.ant-input-affix-wrapper, .ant-input {
    height: 40px;
    padding: 8px 12px;
    border-radius: 4px;
    line-height: 22px;
    font-size: 14px;
}
.ant-input {
    box-sizing: border-box;
    margin: 0;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: "tnum","tnum";
    position: relative;
    display: inline-block;
    width: 100%;
    min-width: 0;
    padding: 8px 11px;
    color: #edeff2;
    font-size: 14px;
    line-height: 1.5715;
    background-color: transparent;
    background-image: none;
    border: 1px solid #555a5f;
    border-radius: 4px;
    transition: all .3s;
}
.ant-input-affix-wrapper>input.ant-input, .ant-input>input.ant-input {
    height: 100%;
    padding: 0;
    line-height: inherit;
    font-size: 14px;
}
.ant-input-affix-wrapper>input.ant-input {
    padding: 0;
    border: none;
    outline: none;
}
.ant-input-prefix, .ant-input-suffix {
    display: flex;
    flex: none;
    align-items: center;
}
.ant-input-affix-wrapper .ant-input-suffix, .ant-input .ant-input-suffix {
    margin-left: 0;
    margin-right: 0;
    -webkit-margin-start: 12px;
    margin-inline-start: 12px;
}
.ant-input-affix-wrapper .ant-input-prefix, .ant-input-affix-wrapper .ant-input-suffix, .ant-input .ant-input-prefix, .ant-input .ant-input-suffix {
    color: #a2abb1;
}
.detail-left_inputWrapper__U8BSg .detail-left_input___hOuo .detail-left_red__06MIW {
    color: #ee2c5a;
}
.detail-left_inputWrapper__U8BSg .detail-left_expect__EI89x {
    height: 40px;
    margin-top: 25px;
    font-size: 12px;
    background-color: #276dff;
    color: #fff;
}
.detail_right__gCXHk {
    width: 45%;
    -webkit-border-start: 1px dashed #fff;
    border-inline-start: 1px dashed #fff;
    -webkit-padding-start: 52px;
    padding-inline-start: 52px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.detail_rules__OcqJf {
    padding: 12px 22px;
    color: #fff;
    line-height: 20px;
}
.detail_secondTitle__4HMJ9 {
    color: inherit;
    font-weight: 400;
    font-size: 14px;
}
.detail_rules__OcqJf ol {
    -webkit-padding-start: 16px;
    padding-inline-start: 16px;
    margin: 0;
    list-style: decimal;
}
.detail_rules__OcqJf ol li {
    line-height: 20px;
    margin-bottom: 4px;
    list-style: decimal;
}
::marker {
    unicode-bidi: isolate;
    font-variant-numeric: tabular-nums;
    text-transform: none;
    text-indent: 0px !important;
    text-align: start !important;
    text-align-last: start !important;
}
.detail_action__4ftzD .ant-checkbox-wrapper {
    color: #fff;
    font-size: 12px;
}
.ant-checkbox-wrapper {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: "tnum";
    display: inline-flex;
    align-items: baseline;
    line-height: unset;
    cursor: pointer;
}
.ant-checkbox+span {
    padding-right: 8px;
    padding-left: 8px;
}
.ant-btn-primary {
    border-color: transparent;
    background: #2354e6;
    color: #fff;
}
.detail_action__4ftzD .detail_btn__T_kKe {
    margin-top: 12px;
}
.ant-btn.ant-btn-block {
    width: 100%;
    background-color: #266eff;
    color: #fff;
    border-color: #266eff;
    height: 40px;
}
</style>
  