<template>
  <div id="#accountSet">
    <indexHeader></indexHeader>
    <div class="page-helpers-wrap zh">
      <div class="helper-wrapper-page">
        <div class="wrapper-main"></div>
        <div class="kf-helper" @click="opkf">
          <a href="javascript:void(0)" class="el-tooltip  item" aria-describedby="el-tooltip-4383" tabindex="0" @mouseover="helper = 1" @mouseout="helper=0">
            <i class="helper-kf">
              <img src="@/assets/images/helper-kf1.svg" width="32" class="helper-kf1" :style="helper == 1?'display:none':'display:block'">
              <img src="@/assets/images/helper-kf2.svg" width="32" class="helper-kf2" :style="helper != 1?'display:none':'display:block'">
            </i>
          </a>
        </div>
        <div class="download-helper" @click="feed = 1">
          <a href="javascript:void(0)" class="el-tooltip  item" aria-describedby="el-tooltip-9548" tabindex="0" @mouseover="helper = 2" @mouseout="helper=0">
            <i class="helper-lb">
              <img src="@/assets/images/helper-lb1.svg" width="32" class="helper-lb1" :style="helper == 2?'display:none':'display:block'">
              <img src="@/assets/images/helper-lb2.svg" width="32" class="helper-lb2" :style="helper != 2?'display:none':'display:block'">
            </i>
          </a>
        </div>
        <div class="notice-helper">
          <a href="#accountSet" class="el-tooltip  item" aria-describedby="el-tooltip-324" tabindex="0" @mouseover="helper = 3" @mouseout="helper=0">
            <i class="helper-yl">
              <img src="@/assets/images/helper-yl1.svg" width="32" class="helper-yl1" :style="helper == 3?'display:none':'display:block'">
              <img src="@/assets/images/helper-yl2.svg" width="32" class="helper-yl2" :style="helper != 3?'display:none':'display:block'">
            </i>
          </a>
        </div>
      </div>
    </div>
    <div>
      <div class="sc-eCYdqJ kjxNAO dark-background" v-if="feed>0">
        <div class="sc-jSMfEi hHbQwT">
          <div class="sc-ksZaOG cUmOnq dark-title">{{ $t('homeContent.experience_title') }}</div>
          <svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-gKXOVf cijEVb" @click="feed = 0">
            <path d="M8 8L40 40" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M8 40L40 8" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </div>
        <div class="sc-iBkjds iJMXQd dark-background">
          <div class="sc-bczRLJ hGURjE" @click="feed = 2" v-if="feed == 1">
              <div class="sc-gsnTZi bWitGA">
                  <img src="@/assets/images/dislike_very_much_grey.png" class="sc-dkzDqf hPZYlO score-icon fcbmy">
                  <div class="sc-hKMtZM jKwalp dark-score-description">{{ $t('homeContent.experience_very_dissatisfied') }}</div>
              </div>
              <div class="sc-gsnTZi bWitGA">
                  <img src="@/assets/images/dislike_grey.png" class="sc-dkzDqf hPZYlO score-icon bmy">
                  <div class="sc-hKMtZM jKwalp dark-score-description">{{ $t('homeContent.experience_dissatisfied') }}</div>
              </div>
              <div class="sc-gsnTZi bWitGA">
                  <img src="@/assets/images/general_grey.png" class="sc-dkzDqf hPZYlO score-icon myj">
                  <div class="sc-hKMtZM jKwalp dark-score-description">{{ $t('homeContent.experience_no_comment') }}</div>
              </div>
              <div class="sc-gsnTZi bWitGA">
                  <img src="@/assets/images/like_grey.png" class="sc-dkzDqf hPZYlO score-icon my">
                  <div class="sc-hKMtZM jKwalp dark-score-description">{{ $t('homeContent.experience_satisfied') }}</div>
              </div>
              <div class="sc-gsnTZi bWitGA">
                  <img src="@/assets/images/like_very_much_grey.png" class="sc-dkzDqf hPZYlO score-icon fcmy">
                  <div class="sc-hKMtZM jKwalp dark-score-description">{{ $t('homeContent.experience_very_satisfied') }}</div>
              </div>
          </div>
          <div class="sc-eCYdqJ kjxNAO dark-background" v-if="feed == 2">
              <div class="sc-jSMfEi hHbQwT">
                  <div class="sc-ksZaOG cUmOnq dark-title">{{ $t('homeContent.experience_open_more_detail_flag') }}</div>
                  <svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-gKXOVf cijEVb" @click="feed = 0">
                      <path d="M8 8L40 40" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M8 40L40 8" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
              </div>
              <div class="sc-iBkjds iJMXQd dark-background">
                  <div class="sc-papXJ edOaxJ dark-input-background">
                      <textarea :placeholder="$t('homeContent.experience_open_more_detail_input')" maxlength="500" class="sc-kDDrLX bHBUTd"></textarea>
                  </div>
                  <div class="sc-ftvSup pqfU" @click="feed = 3">{{ $t('homeContent.btn_submit') }}</div>
              </div>
          </div>
          <div class="sc-eCYdqJ kjxNAO dark-background" v-if="feed == 3">
              <div class="sc-jSMfEi hHbQwT">
                  <div class="sc-ksZaOG cUmOnq dark-title"></div>
                  <svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-gKXOVf cijEVb" @click="feed = 0">
                      <path d="M8 8L40 40" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M8 40L40 8" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
              </div>
              <div class="sc-iBkjds iJMXQd dark-background">
                  <div class="sc-iqcoie RTBAf">
                      <img :src="siteConfig.down_logo" class="sc-crXcEl bQXHXb">
                      <div class="sc-evZas dRvQDN dark-title">{{ $t('homeContent.feedback_title') }}</div>
                      <div class="sc-breuTD htToRM dark-title">{{ $t('homeContent.feedback_tips') }}</div>
                      <div class="sc-ftvSup pqfU" @click="feed = 0">{{ $t('homeContent.feedback_btn') }}</div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="user-page-wrap">
      <div class="user-main-wrap ovf-hidden newAccount">
        <div class="content-wrap float-left noLeft">
          <div class="security-container">
            <div class="banner">
              <div class="banner-content">
                <p>{{$t("accountSet.personal_center")}}</p>
              </div>
            </div>
            <div class="security-content">
              <div class="security-info base">
                <div class="security-info">
                  <div class="top">
                    <div class="top-info">
                      <span class="name dinBold">HI,{{userDetail.account_number}}</span>
                      <span class="bk-copy-btn">
                        <span data-clipboard-text="V0LLRX3W" id="copy-btn-167752580729322">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#bbbbbb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                          </svg>
                        </span>
                      </span>
                      <span class="uid dinMedium">UID</span>
                      <span class="uid dinMedium">{{userDetail.id}}</span>
                    </div>
                    <p class="login-info">
                      <span class="time">{{$t("accountSet.registration_time")}}：{{userDetail.create_date}}</span>
                      <span class="time">IP：{{userDetail.last_login_ip}}</span>
                    </p>
                  </div>
                  <div class="level-content">
                    <div class="left">
                      <div class="level-title">
                        <p class="name">{{$t("accountSet.security_level")}}</p>
                        <p>
                          <span :style="(review_status < 2 && advanced_review_status < 2?'color:rgb(209, 26, 26)':review_status >= 2 && advanced_review_status < 2?'color:#276dff':advanced_review_status >= 2?'color:#1bb306':'')">{{(review_status < 2 && advanced_review_status < 2?$t("accountSet.low"):review_status >= 2 && advanced_review_status < 2?$t("accountSet.middle"):advanced_review_status >= 2?$t("accountSet.high"):'')}}</span>
                          <i class="level1" v-if="review_status < 2 && advanced_review_status < 2"></i>
                          <i class="level2" v-if="review_status >= 2 && advanced_review_status < 2"></i>
                          <i class="level2" v-if="review_status >= 2 && advanced_review_status < 2"></i>
                          <i class="level3" v-if="advanced_review_status >= 2"></i>
                          <i class="level3" v-if="advanced_review_status >= 2"></i>
                          <i class="level3" v-if="advanced_review_status >= 2"></i>
                        </p>
                      </div>
                      <div class="level-tip">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="16" x2="12" y2="12"></line>
                          <line x1="12" y1="8" x2="12.01" y2="8"></line>
                        </svg>
                        <span class="tip">{{$t("accountSet.tip")}}</span>
                      </div>
                      <div class="level-setting">
                        <ul>
                          <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1bb306" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                              <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                            <span> {{$t("accountSet.phone_or_mail")}} </span>
                          </li>
                          <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1bb306" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                              <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                            <span> {{$t("accountSet.basic_authentication")}} </span>
                          </li>
                          <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1bb306" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                              <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                            <span> {{$t("accountSet.advanced_authentication")}} </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="right">
                      <img src="@/assets/images/account-set2.svg" alt="">
                    </div>
                  </div>
                </div>
              </div>
              <div class="user-identify base">
                <div class="user-identify base-container">
                  <div class="title">
                    <p> {{$t("accountSet.authentication")}} </p>
                  </div>
                  <div class="base-content identify-content">
                    <div class="base-identify base-content-each">
                      <div class="img-box">
                        <img src="@/assets/images/account-set3.png" width="52" alt="">
                      </div>
                      <div class="info-box">
                        <p> {{$t("accountSet.basic_authentication")}} </p>
                        <p> {{$t("accountSet.basic_authentication_desc")}} </p>
                      </div>
                      <div class="op-box">
                        <el-button class="account-btn" type="primary" @click='goToPage("/transferLog")' v-if="review_status==0">{{$t("accountSet.go_to_authentication")}}</el-button>
                        <el-button class="account-btn" type="primary" v-if="review_status==1">{{$t("accountSet.under_review")}}</el-button>
                        <el-button class="account-btn" style="color:#1bb306" type="primary" v-if="review_status==2">{{$t("accountSet.audited")}}</el-button>
                      </div>
                    </div>
                    <div class="base-identify base-content-each">
                      <div class="img-box">
                        <img src="@/assets/images/account-set4.png" width="52" alt="">
                      </div>
                      <div class="info-box">
                        <p> {{$t("accountSet.advanced_authentication")}} </p>
                        <p>{{$t("accountSet.advanced_authentication_desc")}}</p>
                      </div>
                      <div class="op-box">
                        <el-button class="bk-btn" type="primary" disabled v-if="review_status<2">{{$t("accountSet.go_to_authentication")}}</el-button>
                        <el-button class="account-btn" type="primary" @click='goToPage("/transferLog")' v-if="advanced_review_status == 0 && review_status>=2">{{$t("accountSet.go_to_authentication")}}</el-button>
                        <el-button class="account-btn" type="primary" v-if="advanced_review_status == 1 && review_status>=2">{{$t("accountSet.under_review")}}</el-button>
                        <el-button class="account-btn" style="color:#1bb306" type="primary" v-if="advanced_review_status >= 2 && review_status>=2">{{$t("accountSet.audited")}}</el-button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="device-info base">
                <div class="device-info base-container">
                  <div class="title">
                    <p> {{$t("accountSet.two_factor_authentication")}} </p>
                  </div>
                  <div class="base-content">
                    <div class="base-content-each">
                      <div class="img-box">
                        <img src="@/assets/images/account-set9.png" width="52" alt="">
                      </div>
                      <div class="info-box">
                        <p v-if="userDetail.email">{{$t("accountSet.mail_authentication")}}</p>
						<p v-else>{{$t("accountSet.mobile_authentication")}}</p>
                        <p>
                          <span v-if="userDetail.email">{{$t("accountSet.mail_authentication_desc")}}</span>
						  <span v-else>{{$t("accountSet.mobile_authentication_desc")}}</span>
                          <span class="anti">{{$t("accountSet.mail_authentication_desc_end")}}</span>
                          ）
                        </p>
                      </div>
                      <div class="op-box">
                        <span class="type dinMedium" v-if="userDetail.email">{{userDetail.email}}</span>
						<span class="type dinMedium" v-else>{{userDetail.phone}}</span>
                        <!-- <el-button class="account-btn" v-else @click='goToPage("/bindEmail")'>{{$t("accountSet.unbound")}}</el-button> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="password-info base">
                <div class="password-info base-container">
                  <div class="title">
                    <p>{{$t("accountSet.account_password")}}</p>
                  </div>
                  <div class="base-content">
                    <div class="base-content-each">
                      <div class="img-box">
                        <img src="@/assets/images/account-set5.png" width="52" alt="">
                      </div>
                      <div class="info-box">
                        <p>{{$t("accountSet.login_password")}}</p>
                        <p>{{$t("accountSet.login_password_desc")}}</p>
                      </div>
                      <div class="op-box">
                        <el-button class="account-btn" @click='goToPage("/modifyPassword")'>{{$t("accountSet.revise")}}</el-button>
                        <el-button class="account-btn" @click='goToPage("/forgetPwd")'>{{$t("accountSet.get_back")}}</el-button>
                      </div>
                    </div>
                    <div class="base-content-each">
                      <div class="img-box">
                        <img src="@/assets/images/account-set5.png" width="52" alt="">
                      </div>
                      <div class="info-box">
                        <p> {{$t("accountSet.fund_password")}} </p>
                        <p>{{$t("accountSet.fund_password_desc")}}</p>
                      </div>
                      <div class="op-box">
                        <el-button class="account-btn" @click='goToPage("/setTransactionPassword")'>{{$t("accountSet.not_set")}}</el-button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="account-protection base">
                <div class="account-protection base-container">
                  <div class="title">
                    <p> {{$t("accountSet.wallet_settings")}} </p>
                  </div>
                  <div class="base-content">
                    <div class="base-content-each">
                      <div class="img-box">
                        <img src="@/assets/images/account-set6.png" width="52" alt="">
                      </div>
                      <div class="info-box">
                        <p> {{$t("accountSet.fiat_currency_settings")}} </p>
                        <p> {{$t("accountSet.check_the_exchange_rate")}} </p>
                      </div>
                      <div class="op-box">
                        <div style="display: flex; align-items: center;">
                          <img :src='require("@/assets/images/"+fiat.currency_code+".svg")' style="width: 24px; height: 24px;">
                          <div class="personal-block__text" style="margin-right: 10px;">1USDT {{ "USD" == fiat.currency_code ? "=" : "≈" }} {{fiat.rate + fiat.currency_code}}</div>
                        </div>
                        <el-button class="account-btn" @click='defaultCurrency = true'>{{$t("accountSet.choose")}}</el-button>
                      </div>
                    </div>
                    <div class="base-content-each">
                      <div class="img-box">
                        <img src="@/assets/images/account-set7.png" width="52" alt="">
                      </div>
                      <div class="info-box">
                        <p> {{$t("accountSet.withdrawal_address")}} </p>
                        <p>{{$t("accountSet.withdrawal_address_tip")}}</p>
                      </div>
                      <div class="op-box">
                        <el-button class="account-btn" @click='goToPage("/transferSet")'>{{$t("accountSet.set")}}</el-button>
                      </div>
                    </div>
                    <div class="base-content-each">
                      <div class="img-box">
                        <img src="@/assets/images/account-set8.png" width="52" alt="">
                      </div>
                      <div class="info-box">
                        <p> {{$t("accountSet.bank_account")}} </p>
                        <p> {{$t("accountSet.bank_account_tip")}} </p>
                      </div>
                      <div class="op-box">
                        <el-button class="account-btn" @click='goToPage("/transferSet")'>{{$t("accountSet.set")}}</el-button>
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
    <el-dialog
        :title='$t("accountSet.fiat_currency_settings")'
        :visible.sync="defaultCurrency"
        width="30%"
        :before-close="handleClose"
        :lock-scroll="false"
        :append-to-body="true">
        <div class="imgContent" style="display: flex; flex-wrap: wrap; justify-content: space-between;">
          <div class="mt20" 
          @click="saveFiat(index)" 
          :class="item.currency_code == fiat.currency_code?'currencyActive':''" 
          v-for="(item,index) in getLocalStorage('fiats')" 
          :key="index" 
          style="display: flex; width: 100px; padding: 5px; align-items: center; justify-content: center; cursor: pointer;">
            <img :src='require("@/assets/images/"+item.currency_code+".svg")' style="width: 24px; height: 24px;">
            <div class="pl-18 pr-14 font-size-32 ml3">{{item.currency_code}}</div>
            <div class="ml10" style="color: blue;" v-if="item.currency_code == fiat.currency_code">✓</div>
          </div>
        </div>
    </el-dialog>
    <indexFooter></indexFooter>
	<div v-if="kfview == 1" style="position: fixed;z-index: 9999;bottom:2%;right: 2%;width: 540px;height: 680px;padding-right: 30px;padding-top: 40px;">
		<div @click="kfview = 0" style="position: absolute;right: 0;top: 0;font-size: 40px;font-weight: 100;color: #a7a7a7;cursor: pointer;">x</div>
		<iframe style="width: 100%;height: 100%;border-radius: 10px;" frameborder="0" :src="kfurl"></iframe>
	</div>
  </div>
</template>
<script>
import "@/lib/clipboard.min.js"
  import indexHeader from '@/view/indexHeader';
  import indexFooter from "@/view/indexFooter";

export default {
  name: 'accountSet',
  components: {
    indexHeader,
    indexFooter
  },
  data() {
    return {
		kfview:0,
		kfurl:'',
      feed: 0,
      helper: 0,
      routerList: ["setCash", "setCash", "setCash", "setCash", "setCash", "setCash"],
      account: this.$t("security.notbaind"),
      email: this.$t("security.notbaind"),
      extension_code: "",
      lever: this.$t("security.low"),
      widthBar: "width: 25%",
      userDetail: {},
      bar: 25,
      review_status: 0,
      advanced_review_status: 0,
      authen: 0,
      psrc: require("@/assets/images/close.png"),
      esrc: require("@/assets/images/close.png"),
      defaultCurrency: !1,
      fiat: "",
      openMoreFlag: !1,
      openMoreDetailFlag: !1,
      kefu_like: "",
      confirmMoreFlag: !1,
      textareaData: "",
      siteName: "",
      downLogo: "",
      mobile_register: "",
    }
  },
  watch: {
      textareaData() {
          this.textareaData.length > 500 && (alert(this.$t("accountSet.err_tip")),
          this.textareaData = String(this.textareaData).slice(0, 100))
      }
  },
  created() {
    var t = JSON.parse(localStorage.getItem("fiat")) || {
        currency_code: "USD",
        rate: 1,
        saveTime: 0
    };
    this.fiat = t,
    t.data && (this.fiat = t.data),
    this.userInfo(),
    this.init(),
    this.getkefu(),
    this.getSiteLogo(),
    this.getConfigByKey()
  },
  methods: {
    getConfigByKey() {
        var t = this;
        this.$http({
            url: "/api/getSetting?keyword=mobile_register",
            method: "get",
            data: {},
            headers: {
                Authorization: localStorage.getItem("token") || ""
            }
        }).then(e=>{
            e = e.data,
            t.mobile_register = e.message.value
        }
        ).catch(t=>{
            console.log(t)
        }
        )
    },
    getCurrencyStr(t) {
        switch (t) {
        case "USD":
            return "$";
        case "CNY":
            return "¥";
        case "GBP":
            return "£";
        case "HKD":
            return "$";
        case "JPY":
            return "¥";
        case "EUR":
            return "€";
        case "AED":
            return "د. إ";
        case "THB":
            return "฿";
        case "PHP":
            return "₱";
        case "SGD":
            return "$";
        case "VND":
            return "₫";
        default:
            return "$"
        }
    },
    saveFiat(t) {
        let e = this.getLocalStorage("fiats");
        e.data && (this.fiat = e.data[t]),
        this.fiat = e[t],
        window.localStorage.setItem("fiat", JSON.stringify(e[t])),
        this.defaultCurrency = !1
    },
    handleClose() {
        this.defaultCurrency = !1
    },
    getLocalStorage(t) {
        return JSON.parse(localStorage.getItem(t))
    },
    init() {
        let t = this;
        this.$http({
            url: "/api/real/state?lang=" + window.localStorage.getItem("lang") || !1,
            method: "get",
            data: {},
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then(e=>{
            const {review_status: a, advanced_review_status: s} = e.data.message;
            t.review_status = a,
            t.advanced_review_status = s
        }
        )
    },
    goToPage(t) {
        this.$router.push({
            path: t
        }),
        this.$router.go(0)
    },
    goTo(t) {
        layer.msg(this.$t("lay.notopen"))
    },
    goNone() {
        layer.msg(this.$t("lay.notopen"))
    },
    goPwd() {
        this.$router.push("/forgetPwd")
    },
    userInfo() {
        var t = this;
        this.$http({
            url: "/api/user/info",
            method: "get",
            data: {},
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then(e=>{
            "ok" == e.data.type && (t.userDetail = e.data.message,
            null != e.data.message.phone && (this.account = e.data.message.phone,
            this.psrc = require("@/assets/images/yes.png"),
            this.bar = this.bar + 25),
            null != e.data.message.email && (this.email = e.data.message.email,
            this.esrc = require("@/assets/images/yes.png"),
            this.bar = this.bar + 25),
            this.extension_code = e.data.message.extension_code,
            this.authen = e.data.message.review_status,
            2 == this.authen && (this.bar = this.bar + 25),
            50 == this.bar ? this.lever = this.$t("lay.intermediate") : 75 == this.bar ? this.lever = this.$t("lay.high") : 100 == this.bar && (this.lever = this.$t("lay.strong")),
            this.widthBar = "width:" + this.bar + "%")
        }
        ).catch(t=>{}
        )
    },
    copy() {
        var t = this
          , e = new Clipboard("#copy_url",{
            text: function() {
                return layer.msg(this.$t("lay.copys")),
                t.$utils.host + "/#/components/register?extension_code=" + t.user_info.extension_code
            }
        });
        e.on("success", (function(e) {
            t.flags = !0,
            layer.msg(this.$t("lay.copys"))
        }
        )),
        e.on("error", (function(e) {
            t.flags = !1,
            layer.msg(this.$t("lay.recopy"))
        }
        ))
    },
    opkf() {
		let userinfo = window.localStorage.getItem("accountNum");
		if(userinfo){
			let kfdata = '&metadata={"name":"' + userinfo + '"}'
			this.kfurl = this.kefu_like + kfdata
			//window.open(this.kefu_like + kfdata)
		}else{
			this.kfurl = this.kefu_like
			//window.open(this.kefu_like)
		}
        this.kfview = 1
    },
    openMore() {
        this.openMoreFlag = !0
    },
    closeMore() {
        this.openMoreFlag = !1
    },
    openMoreDetail() {
        this.openMoreDetailFlag = !0,
        this.openMoreFlag = !1
    },
    closeMoreDetail() {
        this.openMoreDetailFlag = !1
    },
    confirmMore() {
        this.openMoreDetailFlag = !1,
        this.confirmMoreFlag = !0
    },
    closeconfirmMore() {
        this.confirmMoreFlag = !1,
        this.textareaData = ""
    },
    toTop() {
        document.documentElement.scrollTop = 0
    },
    getSiteLogo() {
        this.$http({
            url: "/api/getSiteConfig",
            method: "get",
            data: {}
        }).then(t=>{
            this.siteName = t.data.message.site_name,
            this.downLogo = t.data.message.down_logo
        }
        )
    },
    getkefu() {
        this.$http({
            url: "/api/cfg/kefu",
            method: "get",
            data: {}
        }).then(t=>{
            this.kefu_like = t.data.message
        }
        )
    }
  }
}
</script>
<style lang="scss" scoped>

.ovf-ellipsis,.ovf-hidden {
  overflow: hidden
}

.user-main-wrap {
  width: 1200px;
  margin: 40px auto;
  text-align: left;
  color: #333
}

.user-main-wrap.newAccount {
  width: 100%;
  margin: 0;
  background: #f7f7fa
}

.user-main-wrap .content-wrap {
  margin-left: 6px;
  width: 994px;
  background-color: #fff
}

.float-left {
  float: left
}

.user-main-wrap .content-wrap.noLeft {
  width: 100%;
  margin-left: 0;
  margin-bottom: 40px;
  background: transparent
}

.security-container {
  width: 100%
}

.banner {
  height: 480px;
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  position: relative
}

.security-container .banner {
  height: 246px;
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIyNDYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCB4MT0iNi42NzQlIiB5MT0iMzguMjY4JSIgeDI9IjU2Ljk4MyUiIHkyPSI2LjY2NyUiIGlkPSJjIj48c3RvcCBzdG9wLWNvbG9yPSIjREUxRTREIiBzdG9wLW9wYWNpdHk9Ii40IiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0RFMUU0RCIgc3RvcC1vcGFjaXR5PSIwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMS43MDIlIiB5MT0iNDEuMjA5JSIgeDI9IjU3Ljc4NCUiIHkyPSIxNy41MyUiIGlkPSJkIj48c3RvcCBzdG9wLWNvbG9yPSIjREUxRTREIiBzdG9wLW9wYWNpdHk9Ii40IiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0RFMUU0RCIgc3RvcC1vcGFjaXR5PSIwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMS43MDIlIiB5MT0iNDQuNzk3JSIgeDI9IjU3Ljc4NCUiIHkyPSIzMC43ODQlIiBpZD0iZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzNCMkFBMSIgc3RvcC1vcGFjaXR5PSIuNDM0IiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzRBMkJDMCIgc3RvcC1vcGFjaXR5PSIwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIGlkPSJhIiBkPSJNMCAwaDE5MjB2MjQ2SDB6Ii8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2EiLz48L21hc2s+PHVzZSBmaWxsPSIjMjIyMzI2IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHhsaW5rOmhyZWY9IiNhIi8+PGcgbWFzaz0idXJsKCNiKSI+PHBhdGggZmlsbD0idXJsKCNjKSIgZD0iTTEzMzIuOTc0IDBIMTc1NXY4ODloLTQyMi4wMjZMOTEzIDQyMi4yMTZ6IiB0cmFuc2Zvcm09InJvdGF0ZSgtMTgwIDg0NC41IDMxNi41KSIvPjxwYXRoIGZpbGw9InVybCgjZCkiIG9wYWNpdHk9Ii4zIiBkPSJNMTE1Mi4wMTIgMEgxNzU4djg4OWgtNjA1Ljk4OEw3MzEgNDIyLjIxNnoiIHRyYW5zZm9ybT0icm90YXRlKC0xODAgODQ0LjUgMzE2LjUpIi8+PHBhdGggZmlsbD0idXJsKCNlKSIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMzU0IDYzMykiIGQ9Ik02OTEuODAyIDBIMTMzNXY4ODlIODkwLjE1NkwwIDB6Ii8+PC9nPjwvZz48L3N2Zz4=) no-repeat 50%;
  background-size: cover
}

.security-container .banner .banner-content {
  width: 1200px;
  margin: 0 auto;
  padding-top: 35px
}

.security-container .banner .banner-content p {
  line-height: 56px;
  font-size: 40px;
  font-weight: 600;
  color: #fff
}

.security-container .security-content {
  width: 1200px;
  position: relative;
  margin: -114px auto 0
}

.security-info {
  padding: 42px 40px 30px;
  color: #2d2e31
}

.security-info .top {
  padding-bottom: 38px;
  border-bottom: 1px solid #eeeff3
}

.security-info .top .top-info {
  margin-bottom: 27px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #333
}

.security-info .top .top-info .name {
  font-size: 32px;
  font-weight: 700;
  line-height: 45px;
  padding-right: 21px
}

.dinBold {
  font-family: DIN-Bold,DIN
}

.security-info .top .top-info .bk-copy-btn {
  padding-right: 5px
}

.bk-copy-btn {
  cursor: pointer
}

.security-info .top .top-info .uid:last-child {
  padding-left: 5px
}

.security-info .top .top-info .uid {
  font-weight: 500
}

.dinMedium {
  font-family: DIN-Medium,DIN
}

.security-info .top .login-info .time {
  color: #adb0b9;
  line-height: 20px;
  padding-right: 10px
}

.security-info .top .login-info .el-button--text {
  color: #d11a1a;
  line-height: 20px;
  font-weight: 500
}

.security-info .level-content {
  padding-top: 26px;
  overflow: hidden
}

.security-info .level-content .left {
  float: left;
  width: calc(100% - 128px)
}

.security-info .level-content .left .level-title {
  display: flex;
  align-items: center;
  cursor: pointer
}

.security-info .level-content .left .level-title .name {
  font-size: 24px;
  line-height: 33px;
  font-weight: 600;
  color: #333
}

.security-info .level-content .left .level-title p {
  display: flex;
  align-items: center
}

.security-info .level-content .left .level-title p:last-child {
  padding-left: 4px
}

.security-info .level-content .left .level-title p span {
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  padding-right: 5px;
  display: block
}

.security-info .level-content .left .level-title p i {
  display: block;
  margin-left: 5px;
  width: 30px;
  height: 3px;
  background-color: #f7f7fa
}

.security-info .level-content .left .level-title p i.level1 {
  background-color: #d11a1a
}

.security-info .level-content .left .level-title p i.level2 {
  background-color: #276dff
}

.security-info .level-content .left .level-title p i.level3 {
  background-color: #1bb306
}

.security-info .level-content .left .level-tip {
  margin-top: 21px;
  display: flex;
  align-items: center;
  height: 20px;
  font-size: 14px
}

.security-info .level-content .left .level-tip .tip {
  padding-right: 16px;
  font-weight: 500;
  line-height: 16px
}

.security-container .el-button--text {
  padding: 0
}

.security-info .level-content .left .level-tip .el-button--text {
  color: #d11a1a
}

.el-button {
  font-weight: 400
}

.el-button,button {
  cursor: pointer
}

.security-info .level-content .left .level-setting {
  margin-top: 20px
}

ol,ul {
  margin: 0;
  padding: 0;
  list-style: none
}

li,ul {
  padding: 0;
  margin: 0
}

ul {
  list-style: none
}

.security-info .level-content .left .level-setting ul {
  overflow: hidden
}

.security-info .level-content .left .level-setting ul li {
  padding-left: 1px;
  padding-right: 42px;
  float: left;
  display: flex;
  align-items: center
}

.security-info .level-content .left .level-setting ul li span {
  font-weight: 500;
  font-size: 14px
}

.security-info .level-content .right {
  float: right;
  width: 128px
}

.security-container .security-content .base {
  margin-bottom: 10px;
  border-radius: 8px;
  background: #fff
}

.security-container .security-content .base .base-container .title {
  padding: 14px 0;
  border-bottom: 1px solid #f7f7fa
}

.security-container .security-content .base .base-container .title p {
  padding-left: 40px;
  font-size: 24px;
  line-height: 33px;
  font-weight: 600;
  color: #2d2e31
}

.security-container .security-content .base .base-container .base-content {
  padding: 0 40px
}

.security-container .security-content .base .base-container .base-content .base-content-each {
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid #f7f7fa;
  padding: 23px 0 25px
}

.security-container .security-content .base .base-container .base-content .base-content-each .img-box {
  width: 52px;
  margin-right: 20px
}

.security-container .security-content .base .base-container .base-content .base-content-each .info-box {
  flex: 1
}

.security-container .security-content .base .base-container .base-content .base-content-each .info-box p {
  font-size: 12px;
  color: #adb0b9;
  font-weight: 500;
  line-height: 17px
}

.security-container .security-content .base .base-container .base-content .base-content-each .info-box p:first-child {
  color: #2d2e31;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 11px
}

.security-container .security-content .base .base-container .base-content .base-content-each .op-box {
  margin-left: 20px;
  height: 100%;
  justify-self: flex-end;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: flex-end
}

.page-helpers-wrap {
  position: fixed;
  right: 0;
  top: calc(50vh - 100px);
  text-align: center;
  z-index: 999;
  border-radius: 16px 0 0 16px
}

.page-helpers-wrap .helper-wrapper-page {
  position: relative
}

.page-helpers-wrap .helper-wrapper-page .wrapper-main {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #276dff;
  opacity: .1;
  border-radius: 16px 0 0 16px;
  z-index: -1
}

.page-helpers-wrap .helper-wrapper-page a {
  color: #333
}

.page-helpers-wrap .helper-wrapper-page>div {
  padding: 16px 10px;
  cursor: pointer;
  color: #919191
}

.page-helpers-wrap .helper-wrapper-page>div a {
  color: #919191;
  display: inline-block;
  height: 100%;
  width: 100%
}

.page-helpers-wrap .helper-wrapper-page>div:hover a,.page-helpers-wrap .helper-wrapper-page>div:hover {
  color: #333
}

.helper-kf2,.page-helpers-wrap .helper-wrapper-page>div:hover i.helper-kf .helper-kf1 {
  display: none
}

.page-helpers-wrap .helper-wrapper-page>div:hover i.helper-kf .helper-kf2 {
  display: block;
  background: #276cff;
  border-radius: 20px
}

.helper-lb2,.page-helpers-wrap .helper-wrapper-page>div:hover i.helper-lb .helper-lb1 {
  display: none
}

.page-helpers-wrap .helper-wrapper-page>div:hover i.helper-lb .helper-lb2 {
  display: block;
  background: #276cff;
  border-radius: 20px
}

.helper-yl2,.page-helpers-wrap .helper-wrapper-page>div:hover i.helper-yl .helper-yl1 {
  display: none
}

.page-helpers-wrap .helper-wrapper-page>div:hover i.helper-yl .helper-yl2 {
  display: block;
  background: #276cff;
  border-radius: 20px
}

.el-button--primary {
  background: #e3eafb!important;
  color: #276cff
}

.dark-background {
  background-color: #fff!important
}

.kjxNAO {
  width: 500px;
  background: #fff;
  border-radius: 12px;
  position: fixed;
  right: 8px;
  left: unset;
  bottom: 8px;
  z-index: 999999999
}

.hHbQwT {
  background: linear-gradient(90deg,#39f,#2354e6);
  position: relative;
  display: flex;
  align-items: center;
  padding: 24px 80px 24px 40px;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  min-height: 36px
}

.cUmOnq {
  min-height: 26px;
  color: #fff;
  font-size: 24px;
  line-height: 37px;
  display: flex;
  align-items: flex-end;
  word-break: break-word;
  font-weight: 700
}

.iJMXQd {
  padding: 24px 40px;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px
}

.hGURjE {
  display: flex;
  justify-content: center
}

.bWitGA {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 3px;
  width: 20%
}

.hPZYlO {
  width: 72px;
  height: 72px;
  cursor: pointer
}

.jKwalp {
  color: #04091a;
  font-size: 14px;
  display: flex;
  align-items: center;
  text-align: center;
  flex: 1 1 0%;
  font-weight: 700
}

.cijEVb {
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  top: 18px;
  right: 18px
}


.edOaxJ {
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid transparent;
  border-radius: 8px;
  padding: 12px 0 0;
  background: #f5f6fa!important
}

.bHBUTd {
  height: 142px;
  padding: 0 12px;
  resize: none;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  font-weight: 700;
  line-height: 150%;
  outline: none;
  border: none;
  background: transparent!important;
  color: #000!important
}

.gDldUK {
  font-size: 12px;
  display: flex;
  justify-content: flex-end;
  padding: 12px;
  color: #c2c4cc
}

.pqfU {
  background: #2354e6;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  margin-top: 24px;
  border-radius: 8px;
  cursor: pointer;
  width: 100%
}

.bQXHXb {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  position: absolute;
  top: -84px
}

.RTBAf {
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center
}

.dRvQDN {
  font-size: 24px;
  font-weight: 900;
  color: #04091a;
  margin-top: 58px;
  text-align: center
}

.htToRM {
  font-size: 16px;
  font-weight: 400;
  color: #04091a;
  margin-top: 8px;
  margin-bottom: 26px;
  text-align: center
}
</style>


// WEBPACK FOOTER //
// src/view/accountSet.vue
