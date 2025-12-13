<template>
  <div class="css-1avd4zd" style="position: relative;height:100%;margin:0px" :class="skins=='nights'?'trade balck':'trade'">
    <div class="contents" style="padding-top: 0;">
      <!-- <div class="">
        <div style="color: rgb(255, 255, 255); font-size: 20px; line-height: 30px; text-align: center; padding-top: 14px; margin-bottom: 8px;">{{$t("other.predict")}}</div>
        <div style="color: rgb(174, 180, 188); font-size: 14px; line-height: 22px; text-align: center; margin-bottom: 22px;">{{$t("other.win")}}USDT！</div>
      </div> -->
      <div style="width: 200px; height: 50px; padding: 0px !important; margin: 0px auto;">
        <secondright></secondright>
      </div>
      <div class="mult" style="margin-top: 5px;">
        <div class="flex trade-bg">
          <i class="iconfont mr10 icon-shijian"></i>
          <p class="fColor1">{{ $t("other.openTime") }}(S)</p>
        </div>
        <div class="flex flex-wrap mult-contents">
          <p v-for="(item,index) in timeList" :key="index" :class="value4==item.seconds?'active':''" style="background-color: #2b2f36;" @click="selectTime(item.seconds, item.profit_ratio)">
            {{item.seconds}}
          </p>
        </div>
      </div>
      <div class="share mt10">
        <div class="flex trade-bg">
          <i class="iconfont icon-shuliang"></i>
          <p class="fColor1">{{ $t("other.openNum") }}(USDT)</p>
        </div>
        <div class="share-rights">
          <div class="flex flex-wrap">
            <p v-for="(item,index) in numList"
               :key="index"
               :class="[{'active':inputValue == $utils.filterDecimals(item.number,0)}]"
               @click="selectNum(item.number)"
            >{{ $utils.filterDecimals(item.number) }}</p>
          </div>
          <input type="text" :placeholder="$t('other.openNum_desc')" v-model="inputValue">
        </div>
      </div>
    </div>
    <div class="css-10mdwd2">
      <div class="sell-btn-container css-ixoz46" @click="transferSumbit(1)">
        <div class="sell-btn">
          <span class="text">{{ $t('other.miscro_up') }}</span>
          <div class="sell-border"></div>
        </div>
        <div class="sell-triangle"></div>
      </div>
      <div class="buy-btn-container css-1a463wo" @click="transferSumbit(2)">
        <div class="buy-triangle"></div>
        <div class="buy-btn">
          <span class="text">{{ $t('other.miscro_down') }}</span>
          <div class="buy-border"></div>
        </div>
      </div>
    </div>

    <!-- 买涨、买跌弹窗 -->
    <el-dialog title :visible.sync="modalShow" width="480px" top="200px" center>
      <div class="transfer-contents">
        <!-- <h3>{{buyType==1?$t('miscro.up'):$t('miscro.down')}} {{tradeName}}</h3> -->
        <h3>{{ buyType == 1 ? $t('other.miscro_up') : $t('other.miscro_down') }} {{ currencyName }}</h3>
        <div class="transfer-list mt10">
          <div class="loss-madal-contents flex between">
            <div>
              <span>{{ $t('other.openNum') }}</span>
              <span>{{ inputValue || '0' | numFilters(0) }} {{ tradeName }}</span>
            </div>
            <div>
              <span>{{ $t('other.openTime') }}</span>
              <span>{{ value4 || '0' | numFilters(0) }}S</span>
            </div>
            <div>
              <span>{{ $t('secondContract.rate') }}</span>
              <span>{{ profitRatio || '0' | numFilters(0) }}%</span>
            </div>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="comfirm()">{{ $t('tv.confirm') }}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>

import secondright from '@/mhyjy/secondright';
export default {
  name: "secondtrade",
  components:{
    secondright
  },
  filters: {
    numFilters: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.slice(0) + ' '
    }
  },
  props: {
    leverTradeId: {
      type: Number,
      required: true
    },
    currencyName: {
      type: String,
      required: true
    },
    filters: {
      numFilters: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.slice(0) + ' '
      }
    }
  },
  data() {
    return {
      buyInfo: {
          buy_selected: "",
          buyNum: 0,
          url: "lever/submit"
      },
      sellInfo: {
          sell_selected: "",
          sellNum: 0,
          url: "lever/submit"
      },
      selectedStatus: 1,
      multNum: "",
      shareNum: "",
      buyType: 1,
      controlInput: "",
      obj: "",
      spread: localStorage.getItem("spread") || 0,
      token: localStorage.getItem("token"),
      dialogVisible: false,
      marketTotal: "",
      bonds: "",
      serviceCharge: "",
      value4: "",
      numList: [],
      timeList: [],
      currency_id: "3",
      balance: "",
      inputValue: "",
      datas: {},
      profitRatio: "",
      seconds: "",
      tradeName: "",
      modalShow: false,
      walletList: [],
      skins: localStorage.getItem("skin") || "days",
      bmbBalance: "",
      insurancType: [],
      userInsurancId: "",
	  newtoken:"",
    };
  },
  created() {

  },
  watch: {
      leverTradeId: {
          immediate: !0,
          handler(t) {
              this.obj = t
          },
          deep: !0
      }
  },
  mounted() {
    var that = this;
    that.getDeal();
    that.init();
  },
  computed: {
    switchStatus: function () {
      return this.obj; // 直接监听props里的status状态
    }
  },
  methods: {
    changeValue(t) {
        let e = this
          , a = /^[1-9]*[0-9][0-9]*$/;
        if (e.totalPriceBuy = 0,
        e.trandeFreeBuy = 0,
        e.bonsBuy = 0,
        e.totalPrice = 0,
        e.trandeFree = 0,
        e.bons = 0,
        "sell" == t) {
            if (e.types = "-1",
            "" == e.sellShare)
                return;
            if (!a.test(e.sellShare))
                return void layer.msg(e.$t("lever.zheng"));
            if (e.sellShare < e.minShare)
                return void layer.msg(e.$t("lay.lessnum") + e.minShare);
            if (e.maxShare > 0 && e.sellShare > e.maxShare)
                return void layer.msg(e.$t("lay.morenum") + e.maxShare)
        } else {
            if (e.type = "-1",
            "" == e.buySahre)
                return;
            if (!a.test(e.buySahre))
                return void layer.msg(e.$t("lever.zheng"));
            if (e.buySahre < e.minShare)
                return void layer.msg(e.$t("lay.lessnum") + e.minShare);
            if (e.maxShare > 0 && e.buySahre > e.maxShare)
                return void layer.msg(e.$t("lay.morenum") + e.maxShare)
        }
        if (0 != e.selectedStatus)
            if ("sell" == t && "" != e.sellInfo.sell_selected) {
                e.types = "";
                var s = parseFloat(localStorage.getItem("lastPrice")).toFixed(4)
                  , i = parseFloat(e.sellInfo.sell_selected).toFixed(4)
                  , n = parseFloat(e.sellShare).toFixed(4);
                e.pricesType(s, t, n, i)
            } else if ("buy" == t && "" != e.buyInfo.buy_selected) {
                e.type = "";
                s = parseFloat(localStorage.getItem("lastPrice")).toFixed(4),
                i = parseFloat(e.buyInfo.buy_selected).toFixed(4),
                n = parseFloat(e.buySahre).toFixed(4);
                e.pricesType(s, t, n, i)
            } else
                e.totalPriceBuy = 0,
                e.trandeFreeBuy = 0,
                e.bonsBuy = 0,
                e.totalPrice = 0,
                e.trandeFree = 0,
                e.bons = 0;
        else if ("sell" == t && "" != e.sellInfo.sell_selected) {
            if (e.types = "",
            "" != e.sellInputValue) {
                s = parseFloat(e.sellInputValue).toFixed(4),
                i = parseFloat(e.sellInfo.sell_selected).toFixed(4),
                n = parseFloat(e.sellShare).toFixed(4);
                e.pricesType(s, t, n, i)
            }
        } else if ("buy" == t && "" != e.buyInfo.buy_selected) {
            if (e.type = "",
            "" != e.inputPrice) {
                s = parseFloat(e.inputPrice).toFixed(4),
                i = parseFloat(e.buyInfo.buy_selected).toFixed(4),
                n = parseFloat(e.buySahre).toFixed(4);
                e.pricesType(s, t, n, i)
            }
        } else
            e.totalPriceBuy = 0,
            e.trandeFreeBuy = 0,
            e.bonsBuy = 0,
            e.totalPrice = 0,
            e.trandeFree = 0,
            e.bons = 0
    },
    init() {
      var that = this;
      this.$http({
        url: "/api/wallet/list",
        method: "post",
        data: {}
      })
          .then(res => {
            if (res.data.type == "ok") {
              that.walletList = res.data.message.micro_wallet.balance;
            } else {
              return;
            }
          })
          .catch(error => {
            console.log(error);
          });
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
    // 选择是出售还是购买
    selectBuy() {
      var that = this;
      that.buyType = that.buyType == 1 ? "2" : "1";
      that.multNum = "";
      that.shareNum = "";
      that.marketTotal = 0.0;
      that.bonds = 0.0;
      that.serviceCharge = 0.0;
    },
    // 选择交易模式
    currencyTab(options) {
      // that.currency_id = options.id;

      var that = this;
      console.log(options);
      that.currency_id = options.id;
      that.numList = options.micro_numbers;
      if (options.user_wallet) {
        that.balance = options.user_wallet.micro_with_insurance;
      }
      that.tradeName = options.name;
      that.serviceCharge = options.micro_trade_fee;
      that.inputValue = that.$utils.filterDecimals(that.numList[0].number, 0);
    },

    // 选择开仓 数量
    selectNum(num) {
      var that = this;
      that.inputValue = that.$utils.filterDecimals(num, 0);
    },

    // 选择开仓时间
    selectTime(num, rate) {
      var that = this;
      that.value4 = num;
      that.profitRatio = rate;                    
      eventBus.$emit("profitRatio", rate)
    },

    // 下单
    transferSumbit(types) {
      var that = this;
      that.buyType = types;
      if (!that.inputValue) {
        layer.msg(that.$t("miscro.openNum"));
        return false;
      }
      that.modalShow = true;
    },
    // 下单
    comfirm() {
      var t = this;
      let e = this.$loading();
      this.$http({
          url: "/api/microtrade/submit",
          method: "post",
          data: {
              match_id: t.obj,
              currency_id: t.currency_id,
              type: t.buyType,
              seconds: t.value4,
              number: t.inputValue,
              lang: window.localStorage.getItem("lang")
          }
      }).then(a=>{
          t.modalShow = !1,
          "ok" == a.data.type ? (t.$http({
              url: "/api/microtrade/payable_currencies",
              method: "get",
              data: {}
          }).then(e=>{
              if ("ok" == e.data.type && e.data.message.length > 0)
                  for (var a = 0; a < e.data.message.length; a++)
                      e.data.message[a].id == t.currency_id && (t.balance = e.data.message[a].user_wallet.micro_with_insurance)
          }
          ),
          localStorage.setItem("orderStatus", 1),
          setTimeout((function() {
              localStorage.setItem("orderStatus", "")
          }
          ), 30)) : layer.msg(a.data.message),
          e.close()
          eventBus.$emit('secondDealCenterOrder');
      }
      )
  }
  },
  computed: {}
};
</script>

<style lang="scss" scoped>

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


