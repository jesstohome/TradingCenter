<template>
    <div>
        <indexHeader></indexHeader>
        <el-carousel direction="horizontal" height="150px">
            <el-carousel-item class="is-animating">
                <div >
                    <div  tyle="width:100%;display:inline-block" class="OtcHeader_banner__bV_tP OtcHeader_cardPayBanner__762vQ">
                        <div  class="OtcHeader_bannerContent__3znVW">
                            <div  class="OtcHeader_content__saR9A">
                                <div  class="OtcHeader_contentOne__axrcT">{{$t("fastTransaction.buy_cryptocurrency")}}</div>
                                <div  class="OtcHeader_contentTwo__Gvtw6">{{$t("fastTransaction.brief_introduction")}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </el-carousel-item>
            <el-carousel-item class="is-animating">
                <div >
                    <div  class="OtcHeader_banner__bV_tP OtcHeader_expressBanner__cVbL4" style="width: 100%; display: inline-block;">
                        <div  class="OtcHeader_bannerContent__3znVW">
                            <div  class="OtcHeader_content__saR9A">
                                <div  class="OtcHeader_contentOne__axrcT"></div>
                                <div  class="OtcHeader_contentTwo__Gvtw6">{{$t("fastTransaction.swiper_second_tips")}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </el-carousel-item>
        </el-carousel>
        <div id="otc_header" class="OtcHeader_components_otc_header__mPTvH">
            <div class="OtcHeader_headerContent__lQlTq">
                <div class="OtcHeader_headerLeftBusiness__RlQc_">
                    <div class="OtcHeader_headerItem__6lukx OtcHeader_avtive__Fw5Z3">
                        <a href="javascript:void(0)" class="WindowLink_components_windowlink__f7G0B">第三方</a>
                    </div>
                </div>
                <div class="OtcHeader_headerRightConfigure__iZcSP">
                    <div class="OtcHeader_headerItem__6lukx">
                        <span class="OtcHeader_configureBtn__poqJH"></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="creditCard_creditCardContent__9OHTZ">
            <div class="server_serverContent__HTLC1">
                <div class="server_serverListContent__mtKFi">
                    <div class="server_credContent___xAbc">
                        <span class="server_numberColor__jJcWP white">1</span>
                        <span class="server_paymentTitle__vPtL0 white">{{$t("creditCard.select_a_payment_method")}}</span>
                    </div>
                    <div class="server_credLine__Sqzxu"></div>
                    <div class="server_serverList__3Rs6g">
                        <div class="server_listContent__e9_7e" :class="0 == index?'server_activeBorder__au9jH':''" @click="index = 0">
                            <div class="server_checked__ep7mV">
                                <i class="iconfont otc_icon_checked_big server_checkedIcon__RhYuL"></i>
                            </div>
                            <div class="server_serverBgContent__rgrWi">
                                <div class="server_serverName__Iz0b_">
                                    <span>
                                        <img src="@/assets/images/removebg-preview.png">
                                    </span>
                                    <span class="server_serverTitle__Sdq0p white">banxa</span>
                                </div>
                                <div class="server_serverPayment__iRW4W">
                                    <div>
                                        <img src="@/assets/images/visa.svg">
                                    </div>
                                    <div>
                                        <img src="@/assets/images/mast.svg">
                                    </div>
                                    <div>
                                        <img src="@/assets/images/apple.svg">
                                    </div>
                                    <div class="server_bankcardIcon___sCiN">
                                        <img src="@/assets/images/discover.svg">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="server_listContent__e9_7e" :class="1 == index?'server_activeBorder__au9jH':''" @click="index = 1">
                            <div class="server_serverBgContent__rgrWi">
                                <div class="server_serverName__Iz0b_">
                                    <span>
                                        <img src="@/assets/images/moonpay.png">
                                    </span>
                                    <span class="server_serverTitle__Sdq0p white">moonpay</span>
                                </div>
                                <div class="server_serverPayment__iRW4W">
                                    <div>
                                        <img src="@/assets/images/visa.svg">
                                    </div>
                                    <div>
                                        <img src="@/assets/images/mast.svg">
                                    </div>
                                    <div>
                                        <img src="@/assets/images/apple.svg">
                                    </div>
                                    <div>
                                        <img src="@/assets/images/google.svg">
                                    </div>
                                    <div>
                                        <img src="@/assets/images/samsung.svg">
                                    </div>
                                    <div>
                                        <img src="@/assets/images/bank.svg">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="server_listContent__e9_7e" :class="2 == index?'server_activeBorder__au9jH':''" @click="index = 2">
                            <div class="server_serverBgContent__rgrWi">
                                <div class="server_serverName__Iz0b_">
                                    <span>
                                        <img src="@/assets/images/mercuryo.png">
                                    </span>
                                    <span class="server_serverTitle__Sdq0p white">mercuryo</span>
                                </div>
                                <div class="server_serverPayment__iRW4W">
                                    <div>
                                        <img src="@/assets/images/visa.svg">
                                    </div>
                                    <div>
                                        <img src="@/assets/images/mast.svg">
                                    </div>
                                    <div>
                                        <img src="@/assets/images/apple.svg">
                                    </div>
                                    <div>
                                        <img src="@/assets/images/bank.svg">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="server_introduce__Smu_B">
                    <div class="server_introduceContent__4YmQU">
                        <div class="server_credContent___xAbc">
                            <span class="server_numberColor__jJcWP white">2</span>
                            <span class="server_paymentTitle__vPtL0 white">{{$t("creditCard.payment_details")}}</span>
                        </div>
                        <div class="server_credLine__Sqzxu"></div>
                        <div class="scrollbar server_serverInfoScllo__rDtQU">
                            <div class="server_disclaimer__jWqet">
                                <div class="server_disclaimerTitle__bPRpl white">{{$t("creditCard.disclaimer")}}</div>
                                <div class="server_discInfo__zT7jx">{{$t("creditCard.disclaimer_details")}}</div>
                                <div></div>
                            </div>
                        </div>
                        <div class="server_checkoutContent__C_yX8">
                            <label class="ant-checkbox-wrapper white">
                                <a-checkbox v-model="check" style="font-size: 14px;">{{$t("creditCard.read")}}</a-checkbox>
                            </label>
                        </div>
                    </div>
                    <div class="server_primaryContent__yofQA">
                        <a-button type="primary" style="color: black;" @click="jump">{{$t("creditCard.continued")}}</a-button>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
        <indexFooter></indexFooter>
		<div v-if="kfview == 1" style="position: fixed;z-index: 9999;bottom: 2%;right: 2%;width: 540px;height: 680px;padding-right: 30px;padding-top: 40px;">
			<div @click="kfview = 0" style="position: absolute;right: 0;top: 0;font-size: 40px;font-weight: 100;color: #a7a7a7;cursor: pointer;">x</div>
			<iframe style="width: 100%;height: 100%;border-radius: 10px;" frameborder="0" :src="kfurl"></iframe>
		</div>
    </div>
  </template>
  <script>
  import indexHeader from '@/view/indexHeader';
  import indexFooter from "@/view/indexFooter";
  
  export default {
    name: 'creditCard',
    data() {
      return {
	  kfview:0,
	  kfurl:'',
        bFlag: !1,
        myFlag: !1,
        showFlag: !1,
        isBuyer: !0,
        check: !1,
        index: 0,
		kefuurl:''
      }
    },
    components: {
      indexHeader,
      indexFooter
    },
    created() {
    },
    mounted(){
		this.$http({
		    url: '/api/getSiteConfig'
		}).then(res => {
		    this.kefuurl = res.data.message.zxkf_url;
		})
    },
    methods:{
        chooseB() {
            this.bFlag = !this.bFlag
        },
        chooseMy() {
            this.myFlag = !this.myFlag
        },
        showDialog() {
            this.showFlag = !0
        },
        handleClose() {
            this.showFlag = !1
        },
        switchTab(t) {
            this.isBuyer = t
        },
        jump() {
            if (!this.check)
                return layer.msg(this.$t("register.msg4")),
                !1;
            var t = "https://banxa.com/";
            //0 == this.index ? t = "https://banxa.com/" : 1 == this.index ? t = "https://www.moonpay.com/buy" : 2 == this.index && (t = "https://mercuryo.io/"),
            //window.open(this.kefuurl)
			let userinfo = window.localStorage.getItem("accountNum");
			if(userinfo){
				let kfdata = '&metadata={"name":"' + userinfo + '"}'
				this.kfurl = this.kefuurl + kfdata
			}else{
				this.kfurl = this.kefuurl
			}
			this.kfview = 1
        }
    }
  }
  </script>
  <style lang="scss" scoped>
  
  .OtcHeader_banner__bV_tP.OtcHeader_cardPayBanner__762vQ {
    background: url("../assets/images/cardPayBanner.svg") no-repeat;
    background-size: cover;
}
.OtcHeader_banner__bV_tP {
    height: 150px;
    overflow: hidden;
}
.OtcHeader_banner__bV_tP .OtcHeader_bannerContent__3znVW {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
}
.OtcHeader_banner__bV_tP .OtcHeader_bannerContent__3znVW .OtcHeader_content__saR9A {
    color: #feffff;
    width: 700px;
}
.OtcHeader_banner__bV_tP .OtcHeader_bannerContent__3znVW .OtcHeader_content__saR9A .OtcHeader_contentOne__axrcT {
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
}
.OtcHeader_banner__bV_tP .OtcHeader_bannerContent__3znVW .OtcHeader_content__saR9A .OtcHeader_contentTwo__Gvtw6 {
    margin-top: 10px;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
}
.OtcHeader_banner__bV_tP.OtcHeader_expressBanner__cVbL4 {
    background: url("../assets/images/banner_new.svg") no-repeat;
    background-size: cover;
}

.OtcHeader_components_otc_header__mPTvH {
    width: 100%;
    border-bottom: 1px solid #292f40;
    position: relative;
    background: #292f40;
    z-index: 100;
}
.OtcHeader_headerContent__lQlTq .OtcHeader_headerLeftBusiness__RlQc_, .OtcHeader_headerContent__lQlTq {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.OtcHeader_headerContent__lQlTq {
    max-width: 1200px;
    margin: 0 auto;
    height: 58px;
    line-height: 58px;
    color: #a3a8ab;
    padding-bottom: 1px;
    justify-content: space-between;
    font-size: 16px;
}
.OtcHeader_headerContent__lQlTq .OtcHeader_headerLeftBusiness__RlQc_ div {
    cursor: pointer;
    margin-right: 36px;
}
.OtcHeader_headerItem__6lukx {
    font-size: 16px;
    font-weight: 500;
    color: #a3a8ab;
    height: 58px;
}
.OtcHeader_avtive__Fw5Z3 {
    color: #000;
    position: relative;
}
.WindowLink_components_windowlink__f7G0B {
    display: inline-block;
    white-space: nowrap;
}
.OtcHeader_headerContent__lQlTq .OtcHeader_headerRightConfigure__iZcSP>div {
    cursor: pointer;
    margin-right: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.OtcHeader_avtive__Fw5Z3:after {
    content: "";
    display: inline-block;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
    height: 2px;
    background-color: #1ab879;
}
.OtcHeader_headerItem__6lukx {
    font-size: 16px;
    font-weight: 500;
    color: #a3a8ab;
    height: 58px;
}
.creditCard_creditCardContent__9OHTZ {
    position: relative;
    z-index: 10;
    padding-top: 32px;
    padding-bottom: 84px;
}
.server_serverContent__HTLC1 {
    max-width: 1200px;
    margin: 32px auto auto;
    display: flex;
} 
.server_serverContent__HTLC1 .server_serverListContent__mtKFi {
    background: #292f40;
    height: 546px;
    width: 626px;
    border-radius: 12px;
    padding-top: 25px;
    padding-left: 24px;
    padding-right: 24px;
    box-shadow: 0 2px 12px rgba(33,35,37,.08);
}
.server_serverContent__HTLC1 .server_serverListContent__mtKFi .server_credContent___xAbc {
    display: flex;
    align-items: center;
}
.server_serverContent__HTLC1 .server_serverListContent__mtKFi .server_numberColor__jJcWP {
    width: 24px;
    height: 24px;
    display: inline-block;
    border-radius: 50%;
    text-align: center;
    color: #fff;
    background: #16b979;
    margin-right: 6px;
    line-height: 24px;
}
.server_serverContent__HTLC1 .server_serverListContent__mtKFi .server_paymentTitle__vPtL0 {
    font-weight: 800;
    font-size: 18px;
}
.server_serverContent__HTLC1 .server_serverListContent__mtKFi .server_credLine__Sqzxu {
    width: 100%;
    height: 1px;
    margin: 24px auto;
    background: #eef1f2;
}
.server_serverContent__HTLC1 .server_serverListContent__mtKFi .server_serverList__3Rs6g {
    width: 100%;
}
.server_serverContent__HTLC1 .server_serverListContent__mtKFi .server_serverList__3Rs6g .server_listContent__e9_7e {
    height: 76px;
    border: 1px solid #eef1f2;
    box-sizing: border-box;
    border-radius: 10px;
    padding-left: 16px;
    padding-right: 16px;
    align-items: center;
    margin-bottom: 18px;
    position: relative;
}
.server_activeBorder__au9jH {
    border: 1px solid #16b979!important;
}
.server_checked__ep7mV {
    position: absolute;
    right: -1px;
    bottom: -10px;
}
.server_checked__ep7mV .server_checkedIcon__RhYuL {
    color: #16b979;
    font-size: 30px;
}
.iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.server_serverContent__HTLC1 .server_serverListContent__mtKFi .server_serverBgContent__rgrWi {
    display: flex;
    align-items: center;
    height: 100%;
}
.server_serverContent__HTLC1 .server_serverListContent__mtKFi .server_serverList__3Rs6g .server_serverName__Iz0b_ img {
    width: 26px;
    height: 26px;
    border-radius: 50%;
}
.server_serverContent__HTLC1 .server_serverListContent__mtKFi .server_serverList__3Rs6g .server_serverTitle__Sdq0p {
    margin-left: 5px;
    font-weight: 500;
    font-size: 18px;
}
.server_serverContent__HTLC1 .server_serverListContent__mtKFi .server_serverList__3Rs6g .server_serverPayment__iRW4W {
    display: flex;
    height: 20px;
}
.server_serverContent__HTLC1 .server_serverListContent__mtKFi .server_serverList__3Rs6g .server_serverPayment__iRW4W div {
    width: 40px;
    height: 24px;
    text-align: center;
    border-radius: 4px;
    display: flex;
    align-items: center;
    margin-right: 8px;
    background: #2a2a2a;
}
.server_serverContent__HTLC1 .server_introduce__Smu_B {
    background: #292f40;
    width: 542px;
    height: 546px;
    box-shadow: 0 2px 12px rgba(33,35,37,.08);
    border-radius: 12px;
    margin-left: 32px;
    padding-top: 25px;
    padding-left: 24px;
    z-index: 999;
}
.server_introduceContent__4YmQU {
    overflow: hidden;
}
.server_serverContent__HTLC1 .server_introduce__Smu_B .server_credContent___xAbc {
    display: flex;
    align-items: center;
}
.server_serverInfoScllo__rDtQU {
    max-height: 318px;
    overflow: auto;
    padding-right: 24px;
}
.server_disclaimerTitle__bPRpl, .server_serverContent__HTLC1 .server_introduce__Smu_B .server_disclaimer__jWqet .server_disclaimerTitle__bPRpl {
    font-weight: 800;
    font-size: 16px;
}
.server_serverContent__HTLC1 .server_introduce__Smu_B .server_disclaimer__jWqet .server_discInfo__zT7jx {
    margin-top: 10px;
    font-size: 14px;
    color: #5a5e62;
}
.server_primaryContent__yofQA, .server_serverContent__HTLC1 .server_introduce__Smu_B .server_checkoutContent__C_yX8 {
    margin-top: 12px;
}
.server_primaryContent__yofQA button {
    border-radius: 8px;
    width: 494px;
    height: 56px;
    border: none;
    background: #edeff1;
}
.server_serverContent__HTLC1 .server_introduce__Smu_B .server_numberColor__jJcWP {
    width: 24px;
    height: 24px;
    display: inline-block;
    border-radius: 50%;
    text-align: center;
    color: #fff;
    background: #16b979;
    margin-right: 6px;
    line-height: 24px;
}
.server_serverContent__HTLC1 .server_introduce__Smu_B .server_paymentTitle__vPtL0 {
    font-weight: 800;
    font-size: 18px;
}
.server_serverContent__HTLC1 .server_serverListContent__mtKFi .server_serverList__3Rs6g .server_listContent__e9_7e {
    height: 76px;
    border: 1px solid #eef1f2;
    box-sizing: border-box;
    border-radius: 10px;
    padding-left: 16px;
    padding-right: 16px;
    align-items: center;
    margin-bottom: 18px;
    position: relative;
}
.server_serverContent__HTLC1 .server_introduce__Smu_B .server_credLine__Sqzxu {
    width: 494px;
    height: 1px;
    background: #eef1f2;
    margin: 24px auto 24px 0;
}
.server_serverContent__HTLC1 .server_serverListContent__mtKFi .server_serverBgContent__rgrWi {
    display: flex;
    align-items: center;
    height: 100%;
}
.server_serverContent__HTLC1 .server_serverListContent__mtKFi .server_serverList__3Rs6g .server_serverName__Iz0b_ {
    flex: 1;
    display: flex;
    align-items: center;
}
.server_serverContent__HTLC1 .server_serverListContent__mtKFi .server_serverList__3Rs6g .server_serverName__Iz0b_ img {
    width: 26px;
    height: 26px;
    border-radius: 50%;
}
</style>
  