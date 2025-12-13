<template>
    <div class="home">
		<indexHeader></indexHeader>
        <div class="main">
            <tvBase :leverTradeId="leverTradeId" v-if="leverTradeId"></tvBase>
            <div class="flex" style="height: auto;">
                <div class="tv-box">
                    <div style="display: flex; flex-direction: column; margin-top: 0px;">
                        <div class="flex">
                            <div class="tran-box" style="min-height: 160px;">
                                <transactions :leverTradeId="leverTradeId" v-if="leverTradeId"></transactions>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="exchange-box">
                    <div class="exchange-box" style="padding: 20px;">
                        <div class="balance">
                            <div class="flex" style="align-items: center;">
                            <i class="iconfont tc ft18">
                            <svg width="28" height="28" viewbox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5 7C4.44772 7 4 7.44772 4 8V20C4 20.5523 4.44772 21 5 21H15.9348C15.8063 20.5219 15.7378 20.0193 15.7378 19.5007C15.7378 16.3182 18.3177 13.7383 21.5002 13.7383C22.3959 13.7383 23.2438 13.9426 24 14.3073V8C24 7.44772 23.5523 7 23 7H5Z" fill="#2354E6"></path>
                                <rect x="6" y="10" width="11" height="2" rx="0.5" fill="white"></rect>
                                <rect x="6" y="14" width="6" height="2" rx="0.5" fill="white"></rect>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.5 24C23.9853 24 26 21.9853 26 19.5C26 17.0147 23.9853 15 21.5 15C19.0147 15 17 17.0147 17 19.5C17 21.9853 19.0147 24 21.5 24ZM23.2716 19.1466L21.8536 17.7286C21.6583 17.5333 21.3417 17.5333 21.1464 17.7286L19.7284 19.1466C19.5332 19.3418 19.5332 19.6584 19.7284 19.8537L21.1464 21.2717C21.3417 21.467 21.6583 21.467 21.8536 21.2717L23.2716 19.8537C23.4668 19.6584 23.4668 19.3418 23.2716 19.1466Z" fill="#04D590"></path>
                            </svg></i>
                            <p class="tc ft16" style="color: white; margin-left: 5px;">{{$t("secondContract.miscroAccount")}}</p>
                            <div style="flex: 1 1 0%;"></div>
                            <span class="fColor1 transbtn curPer" @click="$router.push({
                                name: 'letransactions'
                            })">{{$t("secondContract.transfer")}}</span>
                            </div>
                            </div>
                            <div class="lever-total mt20 fColor1" style="font-size: 14px;">
                            <p class="flex between mt10">
                                <span>{{$t("secondContract.balance")}}</span>
                                <ul class="fColor1">
                                <li v-if="1 == item.is_micro && 3 == item.currency" v-for="item in walletList">{{ item.micro_balance + ' ' + item.currency_name }} </li>
                                </ul>
                            </p>
                            <p></p>
                            <p class="flex between mt10"><span>{{$t("secondContract.rate")}}</span><span>{{profitRatio || "0.00"}}%</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		<indexFooter></indexFooter>
    </div>
  </template>
  
  <script>
  import indexHeader from "@/view/indexHeader";
  import indexFooter from '@/view/indexFooter';
  import notice from "@/view/lever/lever_noticeList";
  import deal from "@/view/deal";
  import market from "@/view/lever/lever_market";
  import chart from "@/view/chart";
  import entrust from "@/view/lever/lever_entrust";
  import hisentrust from "@/view/lever/lever_hisentrust";
  import detail from "@/view/detail";
  import currency from "@/view/currency";
  import complete from "@/view/complete";
  import leverTransaction from "@/view/lever/lever_transaction";
  import leverTransactions from "@/view/lever_transactions";
  
  // import kline from "@/view/lever/lever_kline";
  import tvBase from '@/view/tvBase';
  import transactions from "@/mhyjy/second_transactions";
  
  export default {
    name: "dealCenter",
    components: {
      indexHeader,
	  indexFooter,
      load: 1,
      notice,
      deal,
      tvBase,
      market,
      chart,
      entrust,
      hisentrust,
      detail,
      currency,
      complete,
      leverTransaction,
      leverTransactions,
      transactions,
      // kline
    },
    data() {
      return {
        isRouterAlive: true,
        currencyName: "",
        leverTradeId: 0,
        leverData: {
          legalId: 0,
          currencyId: 0
        },
        profitRatio: '',
        walletList:[],
        token: "",
		newtoken:"",
      };
    },
    created() {
      this.address = localStorage.getItem("address") || "";
      this.leverData.legalId = localStorage.getItem('legal_id');
      this.leverData.currencyId = localStorage.getItem('currency_id');
    },
    methods: {
        order(){
            this.loadWallet()
            this.getDeal()
        },
        loadWallet(){
            var t = this;
            this.$http({
                url: "/api/wallet/list",
                method: "post",
                data: {}
            }).then(e=>{
                "ok" == e.data.type && (t.walletList = e.data.message.micro_wallet.balance)
            }
            ).catch(t=>{
                console.log(t)
            }
            )
        },
      init() {
            var t = this;
            this.loadWallet()
            this.$http({
                url: "/api/currency/quotation_new",
                method: "get",
                data: {}
            }).then(e=>{
                if ("ok" == e.data.type) {
                    for (var a = [], s = 0; s < e.data.message.length; s++)
                        for (var i = 0; i < e.data.message[s].quotation.length; i++)
                            1 == e.data.message[s].quotation[i].is_display && (a.push(e.data.message[s].quotation[i]),
                            t.leverData.legalId == e.data.message[s].quotation[i].legal_id && t.leverData.currencyId == e.data.message[s].quotation[i].currency_id && (t.symbol = e.data.message[s].quotation[i].currency_name + "/" + e.data.message[s].quotation[i].legal_name,
                            t.leverTradeId = e.data.message[s].quotation[i].id,
                            t.currencyName = e.data.message[s].quotation[i].currency_name));
                    t.quotationList = a,
                    "" == t.symbol && (t.symbol = a[0].currency_name + "/" + a[0].legal_name,
                    t.leverData.legalId = a[0].legal_id,
                    t.leverData.currencyId = a[0].currency_id,
                    t.leverTradeId = a[0].id,
                    t.currencyName = a[0].currency_name)
                }
            }
            ).catch(t=>{}
            )
      },
      getDeal() {
            var t = this;
            this.$http({
                url: "/api/microtrade/payable_currencies",
                method: "get",
                data: {}
            }).then(e=>{
                if ("ok" == e.data.type && (t.datas = e.data.message,
                e.data.message.length > 0)) {
                    for (var a = 0; a < e.data.message.length; a++)
                        "AITB" == e.data.message[a].name && (t.bmbBalance = e.data.message[a].user_wallet.insurance_balance,
                        t.insurancType = e.data.message[a].insurance_types,
                        e.data.message[a].user_insurance && (t.userInsurancId = e.data.message[a].user_insurance.insurance_type_id));
                    t.currency_id = e.data.message[0].id,
                    t.numList = e.data.message[0].micro_numbers,
                    e.data.message[0].user_wallet && (t.balance = e.data.message[0].user_wallet.micro_with_insurance),
                    t.serviceCharge = e.data.message[0].micro_trade_fee,
                    void 0 !== t.numList[0] && (t.inputValue = t.$utils.filterDecimals(t.numList[0].number, 0)),
                    t.tradeName = e.data.message[0].name
                }
                console.log("datas", t.datas);
                let s = t.datas.find(t=>3 == t.id);
                setTimeout(t.currencyTab(s), 50)
            }
            ),
            this.$http({
                url: "/api/microtrade/seconds",
                method: "get",
                data: {}
            }).then(e=>{
                "ok" == e.data.type && (t.timeList = e.data.message,
                t.profitRatio = e.data.message[0].profit_ratio,
                t.value4 = e.data.message[0].seconds)
            }
            )
        },
    },
    mounted() {
      this.init()
        this.getDeal();
        var t = this;
        eventBus.$on("profitRatio", (function(e) {
            t.profitRatio = e
        }
        ))
        eventBus.$on('secondDealCenterOrder', msg => {
          t.order()
      })
        eventBus.$on('secondDealCenterOrderEnd', msg => {
          t.order()
      })
    }
  };
  </script>
  
  <style scoped lang="scss">
  .home {
    margin-bottom: 0px;
  background-color: #181d25;
    .main {
      > div {
        justify-content: space-between;
  
        > div {
        }
  
        margin-top: 0px;
  
        .tv-box {
          width: calc(100% - 406px);
          height: auto;
          background:#181d25;
        }
  
        .exchange-box {
          width: 403px;
          height: 735px;
          background: #181d25;
        }
  
        .tran-box {
          width: calc(100%);
          height: 650px;
          background: #181d25;
        }
  
        .trade-box {
          width: 485px;
          height: 650px;
        }
      }
  
    }
  }
  
.css-10mdwd2 {
    bottom: 0;
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    display: flex;
    background-color: #161a1e;
    position: absolute;
    left: 1%;
    bottom: 10px;
    width: 98%;
    z-index: 100
}

.css-10mdwd2 .sell-btn-container {
    min-width: 210px;
    width: 55%;
    width: 56%;
    min-width: 175px
}

.css-ixoz46 {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    display: flex
}

.css-10mdwd2 .sell-btn-container .sell-btn {
    height: 80px;
    background: rgba(2,192,118,.1);
    width: 100%;
    height: 60px;
    cursor: pointer;
    position: relative;
    background: rgba(2,192,118,.8)
}

.css-ixoz46 .sell-btn {
    background: rgba(14,203,129,.8)!important;
    background: rgba(14,203,129,.1)!important
}

.css-10mdwd2 .sell-btn-container .text {
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 20px;
    font-weight: 500;
    color: #fff
}

.css-10mdwd2 .sell-btn-container .sell-border {
    height: 4px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: #02c076
}

.css-ixoz46 .sell-border {
    background: #0ecb81!important
}

.tabs {
    background-color: #2f3d45;
    line-height: 32px;
    border-bottom: 1px solid #2f3d45
}

.css-ixoz46:hover .sell-triangle {
    border-color: rgba(50,217,147,.6) transparent transparent transparent!important
}

.css-ixoz46:hover .sell-btn {
    background-color: rgba(50,217,147,.6)!important
}

.css-10mdwd2 .sell-btn-container .sell-triangle {
    border-width: 80px 80px 0 0;
    border-color: rgba(2,192,118,.1) transparent transparent transparent;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 60px 60px 0 0;
    border-color: rgba(2,192,118,.8) transparent transparent transparent
}

.css-ixoz46 .sell-triangle {
    border-color: rgba(14,203,129,.8) transparent transparent transparent!important;
    border-color: rgba(14,203,129,.1) transparent transparent transparent!important
}

.css-10mdwd2 .buy-btn-container {
    min-width: 210px;
    width: 55%;
    width: 56%;
    min-width: 175px;
    position: absolute;
    right: 0
}

.css-1a463wo {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    display: flex
}

.css-10mdwd2 .buy-btn-container .buy-triangle {
    border-width: 0 0 80px 80px;
    border-color: transparent transparent rgba(248,73,96,.1) transparent;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 60px 60px;
    border-color: transparent transparent rgba(248,73,96,.8) transparent
}

.css-1a463wo .buy-triangle {
    border-color: transparent transparent rgba(246,70,93,.8) transparent!important;
    border-color: transparent transparent rgba(246,70,93,.1) transparent!important
}

.css-10mdwd2 .buy-btn-container .buy-btn {
    height: 80px;
    background: rgba(248,73,96,.1);
    width: 100%;
    height: 60px;
    cursor: pointer;
    position: relative;
    background: rgba(248,73,96,.8)
}

.css-1a463wo .buy-btn {
    background: rgba(246,70,93,.8)!important;
    background: rgba(246,70,93,.1)!important
}

.css-10mdwd2 .buy-btn-container .text {
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 20px;
    font-weight: 500;
    color: #fff
}

.css-10mdwd2 .buy-btn-container .buy-border {
    height: 4px;
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background: #f84960
}

.css-1a463wo .buy-border {
    background: #f6465d!important
}

.css-1a463wo:hover .buy-btn {
    background: rgba(246,70,93,.8)!important
}

.css-1a463wo:hover .buy-triangle {
    border-color: transparent transparent rgba(246,70,93,.8) transparent!important
}

.css-1avd4zd {
    background-image: url(../assets/images/pner.png);
    background-repeat: no-repeat;
    background-size: contain
}

.transbtn:hover {
    color: #276dff;
    border-bottom: 1px solid #276dff
}

.tabs span {
    display: block;
    width: 50%;
    text-align: center;
    color: #babbbb;
    font-size: 12px
}

.tabs .active {
    background-color: #1e2b34
}

.contents {
    padding: 7px 0;
    padding-bottom: 15px
}

.contents .iconfont,.iconfont {
    margin-right: 10px;
    color: #276dff
}

.mt5 {
    margin-top: 10px
}

.trade .el-select .el-input.is-focus .el-input__inner {
    border-color: #304049
}

.lefts {
    width: 80px;
    line-height: 30px;
    color: #000
}

.curency-list .mb10 {
    flex: 1
}

.curency-list .mb10:last-child {
    margin-right: 0
}

.curency-list span {
    background-color: #fff
}

.contents .el-select {
    background-color: #1e2b34
}

.contents .el-input__inner {
    background-color: #1e2b34;
    border: 1px solid #304049;
    height: 30px;
    line-height: 30px;
    font-size: 12px
}

.contents .el-input__icon {
    line-height: 30px
}

.contents .popper__arrow {
    left: 50%!important
}

.rights {
    width: calc(100% - 80px);
    line-height: 30px;
    height: 30px;
    border: 1px solid #304049;
    position: relative;
    background-color: #1e2b34
}

.rights .iconfont {
    position: absolute;
    right: 10px;
    top: 0;
    cursor: pointer;
    background-color: transparent
}

.rights input {
    background-color: transparent;
    padding: 0 15px;
    color: #fff
}

.shareNumber {
    margin-top: 10px;
    width: 100%
}

input {
    padding: 0 15px;
    color: #fff
}

.share-rights {
    position: relative
}

.share-rights input {
    line-height: 40px;
    height: 40px;
    width: 100%;
    background-color: transparent;
    border: 1px solid #304049;
    padding: 0 15px;
    color: #c7cce6;
    font-size: 12px
}

.share-rights p {
    line-height: 30px;
    border: 1px solid #304049;
    width: calc(24.73% - 8px);
    text-align: center;
    border-radius: 4px;
    margin-right: 12px;
    font-size: 12px;
    color: #fff;
    cursor: pointer;
    margin-bottom: 10px
}

.mults {
    border: none
}

.mult-contents p {
    line-height: 30px;
    border: 1px solid #304049;
    width: calc(24.73% - 8px);
    text-align: center;
    border-radius: 4px;
    margin-right: 12px;
    margin-bottom: 10px;
    color: #fff;
    cursor: pointer;
    font-size: 12px;
    background-color: transparent
}

.sell_btn {
    margin: 0!important;
    border-radius: 10px!important
}

.sell_btn:first-child {
    width: 160px;
    margin-right: 5px!important
}

.sell_btn:last-child {
    width: 185px;
    margin-left: 5px!important
}

.greenColor {
    border-color: #00c087
}

.redColor {
    border-color: #e3046f
}

.transfer-contents h3 {
    text-align: center;
    color: #276cff;
    font-size: 18px
}

.transfer-list p {
    line-height: 30px;
    color: #606266;
    line-height: 40px
}

.trade .el-button--primary {
    background-color: #276cff;
    width: 140px;
    border: none
}

.trade .el-dialog--center .el-dialog__body {
    padding: 25px 25px 10px
}

.active {
    background: url(../assets/images/selects.png) no-repeat 100% 100%;
    border: 1px solid #5e94ea
}

.trade {
    margin-top: 10px;
    padding: 0 20px
}

.trade-currency {
    color: #fff;
    padding: 10px 0;
    padding-bottom: 0
}

.trade-currency li {
    text-align: center;
    margin-top: 10px;
    font-size: 14px
}

.trade-bg {
    color: #fff;
    line-height: 40px;
    padding: 0;
    font-size: 14px;
    margin-bottom: 10px
}

.trade-bg img {
    margin-top: 15px;
    margin-right: 5px;
    width: 20px;
    height: 20px
}

.balck .trade-bg,.balck .trade-currency {
    background-color: #1e2b34
}

.balck .curency-list span,.balck .mult-contents p,.balck .share-rights input,.balck .share-rights p {
    background-color: #181b2a;
    color: #fff
}

.balance {
    width: 100%
}

.balance ul {
    margin-top: 20px
}

.insuranc {
    width: 50%
}

.insuranc-list span {
    display: inline-block;
    padding: 5px;
    border: 1px solid #999;
    border-radius: 4px;
    color: #999
}

.insuranc-list span:first-child {
    margin-right: 15px
}

.insuranc-list .active {
    color: #276cff;
    border: 1px solid #276cff;
    background: transparent
}

.loss-madal-contents span {
    display: block;
    text-align: center;
    margin-top: 5px
}

.flex {
    display: flex;
    -webkit-display: flex;
    -moz-display: flex;
    -ms-display: flex;
    -o-display: flex
}

.sell_btn {
    line-height: 40px;
    text-align: center;
    height: 40px;
    color: #fff;
    margin: 10px 15px;
    cursor: pointer;
    width: calc(100% - 20px);
    border-radius: 40px
}

.greenBg {
    background-color: #35b65a!important;
    border-color: #35b65a!important
}

.redBg {
    background-color: #ff494a!important;
    border-color: #ff494a!important
}

.whiteBg .curency-list span,.whiteBg .mult-content p,.whiteBg .share-rights p {
    color: #fff;
    border: 1px solid #e9e9e9
}

.whiteBg .curency-list span {
    color: #fff
}

.curency-list span {
    display: inline-block;
    width: 100px;
    line-height: 30px;
    height: 30px;
    border: 1px solid #304049;
    border-radius: 4px;
    margin-right: 12px;
    background: transparent;
    font-size: 12px;
    text-align: center;
    cursor: pointer;
    color: #fff
}

.mb10 {
    margin-bottom: 10px
}

.active {
    background-size: 35px 30px;
    background-color: #266eff!important
}

  </style>
  