<template>
  <div class="trade trade_new" style="margin-left: 6px; width: 362px; background: rgb(23, 28, 36); border: 0px !important;color:white;">
    <el-tabs v-model="activeName" type="border-card">
      <el-tab-pane :label='$t("tv.market_transaction")' name="first"></el-tab-pane>
      <el-tab-pane :label='$t("tv.limit_trading")' name="second"></el-tab-pane>
    </el-tabs>
    <div class="content padding20 scrolls">
      <div style="display: flex; justify-content: space-between;">
       <div>
        <span class="fl text-color-normalColor">{{$t("tv.available")}}</span>   
        <span>{{user_legal + ' ' + legal_name}}</span>
       </div>
       <div>
        <span style="display: inline-block;"><a href="#/finance">
          <div class="actions_headerRight__WdpFG">
           <div class="actions_marginLink__MMXMy actions_margin___YAA_">
            {{$t("tv.transfer")}}
           </div>
          </div></a></span>
       </div>
      </div>
      <div>
      <div class="input-item mt10"  v-if="activeName == 'second'">
        <label>{{$t("tv.price")}}</label>
        <input type="number" class="bg-p23c bd input_color flex1" :placeholder='$t("tv.price_input")' v-model="inputPrice" />
      </div>
      <div class="input-item mt10"  v-if="activeName == 'second'">
        <label style="width:40%">{{$t("tv.take_profit_price")}}</label>
        <el-input-number v-model="target_profit_price" class="bg-p23c bd input_color flex1 new_input_num" controls-position="right" :min="0.1" :step="0.1" :precision="4"></el-input-number>
      </div>
      <div class="input-item mt10"  v-if="activeName == 'second'">
        <label style="width:40%">{{$t("tv.stop_loss_price")}}</label>
        <el-input-number v-model="stop_loss_price" class="bg-p23c bd input_color flex1 new_input_num" controls-position="right" :min="0.1" :step="0.1" :precision="4"></el-input-number>
      </div>
       <div class="input-item mt10" v-if="activeName == 'first'">
        <input type="text" class="" :value='$t("tv.best_price")' disabled="disabled" style="text-align: left; text-indent: 0px; color: rgb(139, 142, 148);" />
       </div>
       <div class="inputtimes mt10">
        <label>{{$t("tv.inputtimes")}}</label>
        <el-select class="t_select" style="width: 240px;" :placeholder='$t("tv.el_select_placeholder")' v-model="value" @change="selectMuit">
          <el-option v-for="item in options" :key="item.value" :label="item.value + ' X'" :value="item.value"></el-option>
        </el-select>
       </div>
       <div class="shareNum" v-if="shareNum">
        {{ " 1" + $t("tv.hand") + $t("tv.equal") + shareNum + legal_name + ' '}}
       </div>
       <div class="mt10 input-item">
        <label style="color: rgb(139, 142, 148);">{{$t("tv.num")}}</label>
        <div class="flex share-total flex1">
         <input v-model="sahre" @input="changeValue" type="number" :placeholder='$t("tv.input_buy_num")' class="share-input bg-part input_color" />
        </div>
       </div>
       <div class="mt10 ml15 mr15">
        <el-slider v-model="value1" :marks="marks" @change="changSahre">

        </el-slider>
       </div>
       <div class="lever-total fColorcf">
        <p class="mt15"><span>{{$t("tv.contract_market_capitalization")}}</span><br /><span class="market-value">{{ "≈ " + (totalPrice||"0.0000") + ' ' + legal_name }}</span></p>
        <p class="mt10"><span>{{$t("tv.deposit")}}</span> <br /><span class="bond">{{ "≈ " + (bons||"0.0000") + ' ' + legal_name }}</span></p>
        <p class="mt10"><span>{{$t("tv.transaction_service_fees")}}</span><br /><span class="transaction-fee">{{ "≈ " + (trandeFree||"0.0000") + ' ' + legal_name }}</span></p>
       </div>
       <div class="spottrading">
        <div class="spottrading-btn curPer mt40 tc greenBack white" @click="buyCoin">
         {{$t("tv.buy_go_long")}}
        </div>
        <div class="spottrading-btn curPer mt40 tc redBack white" @click="sellCoin">
         {{$t("tv.sell_short")}}
        </div>
       </div>
      </div>
     </div>
    <!-- 买入卖出弹窗 -->
    <div class="comfirm-modal flex" v-show="comfirmShow">
      <div class="comfirm-modal-content">
        <div class="loss-modal-header">
          <h3>{{ $t('tv.sureOd') }}</h3>
          <p @click="closeMosal()" class="curPer"><i class="el-icon-close"></i></p>
        </div>
        <ul>
          <li class="flex">
            <p>{{ currency_name }}/{{ legal_name }}</p>
          </li>
          <li class="flex">
            <p>{{ $t('tv.type') }}：</p>
            <p>{{ buyType == '1' ? $t('tv.buy_go_long') : $t('tv.sell_short') }}</p>
          </li>
          <li class="flex">
            <p>{{ $t('tv.hands') }}：</p>
            <p>{{ sahre }}</p>
          </li>
          <li class="flex">
            <p>{{ $t('tv.timed') }}：</p>
            <p>{{ value }}</p>
          </li>
          <li class="flex">
            <p>{{ $t("tv.bail") }}：</p>
            <p>{{ bons }}{{ legal_name }}</p>
          </li>
          <li class="flex">
            <p>{{ $t("tv.charge") }}：</p>
            <p>{{ trandeFree }}{{ legal_name }}</p>
          </li>
        </ul>
        <div class="modal-btn" style="">
          <el-button-group style="width: 100%; height: 40px;">
            <el-button style="padding: 0;" @click="closeMosal()" size="medium" type="info">{{
              $t('tv.canceil') }}
            </el-button>
            <el-button style="padding: 0;" @click="comfirm()" size="medium" type="primary">{{
              $t('tv.confirm') }}
            </el-button>
          </el-button-group>
          <!--          <el-button type="button" @click="closeMosal()">{{ $t('td.canceil') }}</el-button>-->
          <!--          <el-button type="button" @click="comfirm()">{{ $t('td.confirm') }}</el-button>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "trade",
    data() {
      return {
        marks: {
            0: "0%",
            25: "25%",
            50: "50%",
            75: "75%",
            100: "100%"
        },
        comfirmShow: !1,
        stop_loss_price: 0,
        target_profit_price: 0,
        currency_name: "",
        currency_id: "",
        legal_name: "",
        legal_id: "",
        buyType: "",
        sahre: "",
        bons: "",
        inputPrice: 0,
        trandeFree: "",
        user_legal: "",
        totalPrice: 0,
        selectedStatus: 1,
        newPrice: 0,
        shareNum: "",
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
        options: [],
        value: "",
        value1: 0,
        widget: null,
        symbolInfo: null,
        activeName: "first",
        feed: null,
        wsEx: null,
        ws: null,
        lists: [],
        newData: "",
        symbol: "",
        priceScale: 1e5,
        histime: "",
        leftName: "",
        rightName: "",
        lastPrice: "0.0000",
        lastPrice2: "0.0000",
        change: "0.00",
        highPrice: "0.0000",
        lowPrice: "0.0000",
        volumn: "0.00",
        rateNum: 1,
        loadingK: !1,
        showMarketlist: !1,
        hd: !1
      };
    },
    created() {
      this.symbol = window.localStorage.getItem("symbol"),
      this.leftName = window.localStorage.getItem("legal_name") || "",
      this.rightName = window.localStorage.getItem("currency_name") || "",
      this.currencyId = window.localStorage.getItem("legal_id"),
      this.legalId = window.localStorage.getItem("currency_id"),
      this.downUp = window.localStorage.getItem("downUp")
    },
    filters: {
      toFixedN(t, e) {
          return (t - 0).toFixed(e)
      }
    },
    updated() {
        this.lastPrice2 = localStorage.getItem("BEF_NOW")
    },
    computed: {
        listenState() {
            return this.symbol
        }
    },
    watch: {
        listenState: function(t, e) {
            t != e && "" != e && this.widget.setSymbol(t, localStorage.getItem("tim"), (function() {}
            ))
        }
    },
    mounted() {
      let that = this;
      that.address = localStorage.getItem("token") || "";
      that.legal_id = localStorage.getItem("legal_id");
      that.currency_id = localStorage.getItem("currency_id");
      that.legal_name = localStorage.getItem("legal_name");
      that.currency_name = localStorage.getItem("currency_name");
      that.buy_sell(that.legal_id, that.currency_id);
      // that.minFont = that.useMinFont();
      eventBus.$on("tocel", function (datas) {
        if (datas) {
          that.buy_sell(that.legal_id, that.currency_id);
        }
      });


      eventBus.$on('updateKLine', res => {
        // console.log(res);
        if (res.period === '1min') {

          if (that.newPrice === 0) {
            that.newPrice = (res.close - 0).toFixed(4);
            that.inputPrice = that.newPrice;
            that.sellInputValue = that.newPrice;
          } else {
            that.newPrice = (res.close - 0).toFixed(4);
          }
        }
      });

      // this.$http({
      //   url: "/api/" + "currency/quotation_new",
      //   method: "get",
      //   data: {},
      //   headers: {Authorization: localStorage.getItem("token")}
      // }).then(res => {
      //   that.spreadInfo = res.data.message[0].quotation;
      //   let list = that.spreadInfo;
      //   for (let i in list) {
      //     if (that.currency_id == list[i].currency_id) {
      //       this.currencyQInfo = list[i];
      //     }
      //   }
      // });
    },
    methods: {
      
      changSahre(t) {
          if (0 != this.selectedStatus) {
              var e = this.user_legal
                , a = parseFloat(localStorage.getItem("lastPrice")).toFixed(4);
              this.sahre = (e * (t / 100) / a).toFixed(4),
              this.changeValue()
          } else
              this.hd = !1
      },
      changeValue() {
          let t = this;
          if (t.totalPriceBuy = 0,
          t.trandeFreeBuy = 0,
          t.bonsBuy = 0,
          t.totalPrice = 0,
          t.trandeFree = 0,
          t.bons = 0,
          t.type = "-1",
          "" != t.sahre)
              if (t.sahre < t.minShare)
                  layer.msg(this.$t("tv.lessnum") + (100 * t.minShare).toFixed(0) + "%");
              else if (t.maxShare > 0 && t.sahre > t.maxShare)
                  layer.msg(this.$t("tv.morenum") + t.maxShare);
              else if (0 != t.selectedStatus) {
                  t.types = "";
                  var e = parseFloat(localStorage.getItem("lastPrice")).toFixed(4)
                    , a = parseFloat(t.value).toFixed(4)
                    , s = parseFloat(t.sahre).toFixed(4);
                  t.pricesType(e, s, a)
              } else
                  t.totalPriceBuy = 0,
                  t.trandeFreeBuy = 0,
                  t.bonsBuy = 0,
                  t.totalPrice = 0,
                  t.trandeFree = 0,
                  t.bons = 0
      },
      pricesType(t, e, a) {
          let s = this;
          var i = layer.load(1);
          this.$http({
              url: "/api/currency/quotation_new",
              method: "get",
              data: {},
              headers: {
                  Authorization: localStorage.getItem("token")
              }
          }).then(i=>{
              if ("ok" == i.data.type) {
                  var n = i.data.message[0].quotation;
                  for (let i in n)
                      if (s.currency_id == n[i].currency_id) {
                          var r = parseFloat(n[i].spread).toFixed(4)
                            , o = parseFloat(n[i].lever_trade_fee).toFixed(4)
                            , c = parseFloat(parseFloat(1 * t) * r / 100).toFixed(4)
                            , l = 0;
                          l = parseFloat(parseFloat(1 * t) + (c - 0)).toFixed(4),
                          a = parseFloat(a).toFixed(4),
                          e = parseFloat(e).toFixed(4);
                          var d = parseFloat(n[i].lever_share_num).toFixed(4);
                          s.shareNum = (d * n[i].now_price).toFixed(4);
                          var u = parseFloat(l * e * d).toFixed(4)
                            , p = parseFloat((u - 0) / (a - 0)).toFixed(4)
                            , m = parseFloat(u * o / 100).toFixed(4);
                          s.totalPrice = (t * e * d).toFixed(4),
                          s.trandeFree = m,
                          s.bons = p
                      }
              }
          }
          ).catch(t=>{
              console.log(t)
          }
          ),
          setTimeout((function() {
              layer.close(i)
          }
          ), 1500)
      },
      buy_sell(t, e) {
          let a = this;
          this.$http({
              url: "/api/lever/deal",
              method: "post",
              data: {
                  legal_id: t,
                  currency_id: e,
                  lang: window.localStorage.getItem("lang")
              },
              headers: {
                  Authorization: localStorage.getItem("token")
              }
          }).then(t=>{
              "ok" == t.data.type && (a.multiple = t.data.message.multiple.muit,
              a.options = t.data.message.multiple.muit,
              a.value = t.data.message.multiple.muit[0].value,
              a.user_currency = t.data.message.all_levers,
              a.user_legal = t.data.message.user_lever,
              a.lastPrice = t.data.message.last_price,
              a.shareList = t.data.message.multiple.share,
              a.minShare = t.data.message.lever_share_limit.min,
              a.maxShare = t.data.message.lever_share_limit.max,
              a.buyInfo.buyPrice = 0,
              a.buyInfo.buyNum = 0,
              a.sahre = a.shareList[0].value,
              this.changeValue())
          }
          ).catch(t=>{}
          )
      },
      selectMuit() {
          let t = this;
          if (0 != t.selectedStatus && 0 != t.sahre) {
              var e = parseFloat(localStorage.getItem("lastPrice")).toFixed(4)
                , a = parseFloat(t.value).toFixed(4)
                , s = parseFloat(t.sahre).toFixed(4);
              t.pricesType(e, s, a)
          } else if ("sell" == type && "" != t.sellShare) {
              if ("" != t.sellInputValue) {
                  e = parseFloat(t.sellInputValue).toFixed(4),
                  a = parseFloat(t.sellInfo.sell_selected).toFixed(4),
                  s = parseFloat(t.sellShare).toFixed(4);
                  t.pricesType(e, type, s, a)
              }
          } else if ("buy" == type && "" != t.sellShare) {
              if ("" != t.inputPrice) {
                  e = parseFloat(t.inputPrice).toFixed(4),
                  a = parseFloat(t.buyInfo.buy_selected).toFixed(4),
                  s = parseFloat(t.buySahre).toFixed(4);
                  t.pricesType(e, type, s, a)
              }
          } else
              t.totalPriceBuy = 0,
              t.trandeFreeBuy = 0,
              t.bonsBuy = 0
      },
      comfirm() {
          let t, e = this;
          var a = null
            , s = null;
          "second" == e.activeName && (s = e.stop_loss_price,
          a = e.target_profit_price),
          2 == e.buyType ? "" != e.legal_id && "" != e.currency_id ? t = {
              legal_id: e.legal_id,
              currency_id: e.currency_id,
              multiple: e.sellInfo.sell_selected,
              share: e.sellShare,
              type: 2,
              status: e.selectedStatus,
              target_price: e.sellInputValue,
              lang: window.localStorage.getItem("lang") || "en",
              stop_loss_price: s,
              target_profit_price: a
          } : layer.msg(e.$t("tv.traedoff")) : "" != e.legal_id && "" != e.currency_id ? t = {
              legal_id: e.legal_id,
              currency_id: e.currency_id,
              multiple: e.buyInfo.buy_selected,
              share: e.sahre,
              type: 1,
              status: e.selectedStatus,
              target_price: e.inputPrice,
              lang: window.localStorage.getItem("lang") || "en",
              stop_loss_price: s,
              target_profit_price: a
          } : layer.msg(e.$t("tv.traedoff"));
          var i = layer.load(1);
          this.$http({
              url: "/api/" + e.sellInfo.url,
              method: "post",
              data: t,
              headers: {
                  Authorization: localStorage.getItem("token")
              }
          }).then(t=>{
              layer.close(i),
              "ok" == t.data.type ? (2 == e.buyType ? (e.sellInfo.sellPrice = 0,
              e.sellInfo.sellNum = 0) : (e.buyInfo.buyPrice = 0,
              e.buyInfo.buyNum = 0),
              eventBus.$emit("buyTrade", "tradebuy"),
              eventBus.$emit("tocel", "updata"),
              eventBus.$emit("to_leverExchange", "leverExchange"),
              layer.msg(t.data.message),
              e.comfirmShow = !1,
              setTimeout((function() {}
              ), 500)) : (layer.msg(t.data.message),
              e.comfirmShow = !1)
          }
          ).catch(t=>{
              console.log(t),
              e.comfirmShow = !1
          }
          )
      },
      closeMosal() {
          let t = this;
          t.comfirmShow = !1
      },
      buyCoin() {
          var t = this;
          t.buySahre = t.sahre,
          t.buyInfo.buy_selected = this.value,
          "" != t.buyInfo.buy_selected ? 0 != t.selectedStatus || "" != t.inputPrice ? t.buySahre < t.minShare ? layer.msg(t.$t("tv.lessnum") + t.minShare) : t.buySahre > t.maxShare ? layer.msg(t.$t("tv.morenum") + t.maxShare) : (t.comfirmShow = !0,
          t.buyType = 1) : layer.msg(t.$t("tv.pprice")) : layer.msg(t.$t("tv.ptimes"))
      },
      sellCoin() {
          var t = this;
          t.sellShare = t.sahre,
          t.sellInfo.sell_selected = this.value,
          "" != this.sellInfo.sell_selected ? 0 != t.selectedStatus || "" != t.sellInputValue ? t.sellShare < t.minShare ? layer.msg(t.$t("tv.lessnum") + t.minShare) : t.sellShare > t.maxShare ? layer.msg(this.$t("tv.morenum") + t.maxShare) : (t.comfirmShow = !0,
          t.buyType = 2) : layer.msg(t.$t("tv.pprice")) : layer.msg(t.$t("tv.ptimes"))
      },
      handleClick(t, e) {
          this.activeName = t.name
      },
      showMarketList() {
          this.showMarketlist = !0
      },
      closeMarketList() {
          this.showMarketlist = !1
      },
      updateData(t) {
          t && this.$emit("real-time", t)
      },
    },
    computed: {
      buyTotal() {
        return this.buyInfo.buy_selected * this.buyInfo.buyNum || 0;
      },
      sellTotal() {
        return this.sellInfo.sell_selected * this.sellInfo.sellNum || 0;
      }
    }
  };
</script>

<style lang="scss" scoped>

.trade .el-tabs__header {
  margin: 0!important;
  border: 0!important;
  background-color: #11151c!important
}

.trade .el-tabs--border-card,.trade .el-tabs--border-card>.el-tabs__header .el-tabs__item,.trade .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
  border: 0!important
}

.trade .content {
  height: calc(100% - 50px);
  overflow: auto
}

.trade .inputtimes {
  display: flex;
  position: relative;
  line-height: 40px;
  background-color: #222934;
  padding: 0 10px
}

.trade .inputtimes>label {
  width: 20%;
  font-size: 14px;
  color: #8b8e94
}

.padding20 {
  padding: 20px
}

.trade .el-tabs__header .el-tabs__nav {
  width: 100%!important;
  height: 50px!important;
  display: flex!important;
  align-items: center!important
}

.trade .el-tabs__header .el-tabs__active-bar {
  top: 0!important
}

.trade .el-tabs__header .el-tabs__item.is-active {
  color: #fff!important;
  background-color: #171c24!important
}

.el-tabs--bottom .el-tabs__item.is-top:nth-child(2),.el-tabs--top .el-tabs__item.is-bottom:nth-child(2),.el-tabs--top .el-tabs__item.is-top:nth-child(2),.trade .el-tabs--bottom .el-tabs__item.is-bottom:nth-child(2) {
  padding-left: 0!important
}

.trade .el-tabs__header .el-tabs__item {
  flex: 1!important;
  padding: 0!important;
  height: 50px!important;
  line-height: 50px!important;
  text-align: center!important;
  color: #8b8e94!important
}

.trade .el-tabs--border-card>.el-tabs__content {
  padding: 0
}

.trade .inputtimes .el-input {
  background-color: #222934;
  display: flex;
  align-items: center
}

.trade .inputtimes .el-input .el-input__inner {
  text-align: right;
  color: #fff;
  border: none;
  background-color: transparent!important
}

.darkSelect {
  background-color: #20262f!important;
  border-color: transparent!important
}

.el-select-dropdown__item.hover,.el-select-dropdown__item.selected,.el-select-dropdown__item:hover {
  background: #303742!important
}

.input-item,.inputtimes {
  display: flex;
  position: relative;
  line-height: 40px;
  background-color: #222934;
  padding: 0 10px
}

.input-item .share-input {
  border: 1px solid #222934;
  background: #222934;
  border-radius: 2px;
  font-size: 14px;
  color: #fff;
  line-height: 26px;
  width: 100%;
  padding: 5px 10px;
  height: auto;
  float: none;
  text-indent: 0;
  text-align: right
}

._flex-wrap {
  display: flex;
  flex-wrap: wrap
}

._flex-sb {
  justify-content: space-between
}

._flex,._flex-sb {
  display: flex
}

.spottrading {
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-gap: 10px;
  text-align: center
}

.greenBack {
  background-color: #0ecb81
}

.spottrading-btn {
  height: 40px;
  border-radius: 3px;
  line-height: 40px
}

.curPer,.pointer {
  cursor: pointer
}

.redBack {
  background-color: #f7455b
}

.input-item input {
  width: 100%;
  border: 1px solid #222934;
  height: 38px;
  text-indent: 15px;
  font-size: 14px;
  color: #fff;
  background-color: #222934;
  line-height: 38px;
  text-align: right
}

#showMaketList::-webkit-scrollbar {
  width: 5px;
  height: 13px;
  border-radius: 5px
}

#showMaketList::-webkit-scrollbar-thumb {
  background-color: rgba(231,222,222,.5);
  background-clip: padding-box;
  border-radius: 5px;
  min-height: 28px
}

.input-item>label,.inputtimes>label {
  width: 20%;
  font-size: 14px;
  color: #8b8e94
}

#showMaketList::-webkit-scrollbar-thumb:hover {
  background-color: rgba(231,222,222,.5);
  border-radius: 5px
}

.info-wrap {
  line-height: 50px;
  padding-left: 20px;
  display: flex;
  font-size: 12px;
  color: #c7cce6
}

.info-wrap div:first-child {
  font-size: 16px;
  color: #276dff
}

.info-wrap div {
  padding: 0 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center
}

.info-wrap div span {
  line-height: 20px
}

.comfirm-modal {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.7);
  justify-content: center;
  align-items: center;
  color: #c7cce6
}

.comfirm-modal-content {
  width: 500px;
  background-color: #262a42;
  margin: 0 auto;
  border-radius: 5px
}

.loss-modal-header {
  line-height: 40px;
  text-align: center;
  position: relative
}

.loss-modal-header p {
  position: absolute;
  right: 10px;
  top: 0
}

.comfirm-modal-content li {
  line-height: 40px;
  margin: 0 20px
}

.modal-btn {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  font-size: 0;
  padding-top: 30px
}

.modal-btn button {
  width: 50%;
  line-height: 50px;
  border: none;
  float: left;
  font-size: 14px;
  color: #fff;
  background: #9db5c7
}

.modal-btn button:last-child {
  border-left: 1px solid #2e333c;
  background: #689cf1
}
.fColorcf {
  color: #cfcfcf;
}
</style>
