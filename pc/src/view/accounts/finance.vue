<template>
  <div class="_page-main__content1">
      <div class="_page-title _flex-shrink" style="padding-bottom: 0px; display: flex; justify-content: space-between; background-color: white; padding-left: 40px; padding-right: 40px;">
          <div> {{$t("indexHeader.my_Assets")}} </div>
          <div class="wallet-operation flex-items-center">
              <a href="#/deposit" data-id="deposit" data-click-event="wallet_function_click" class="ope-btn trade-btn"> {{$t("dealTv.top_up")}} </a>
              <a href="#/withdrawDeposit" data-id="withdraw" data-click-event="wallet_function_click" class="ope-btn"> {{$t("change.withdraw")}} </a>
              <a href="#/accountNewPage" data-click-event="wallet_function_click" class="ope-btn"> {{$t("indexHeader.exchange")}} </a>
          </div>
      </div>
      <div class="overview-main">
          <div class="funds-valuation d-flex flex-space-between">
              <div class="valuation-total">
                  <div class="valuation-text"> {{$t("change.total_asset_valuation")}} </div>
                  <div class="valuation-detail">
                      <div id="valuation-total-funds">
                          <span title="0.00" data-value="0.00" class="hidden-funds-num" style="white-space: nowrap; font-size: 43px; color: black;">{{mytotal | toFixeds}}</span>
                      </div>
                      <span class="valuation-unit">USDT</span>
                  </div>
                  <div class="valuation-exchange">
                      <span class="hidden-funds-num">≈{{zh}} {{currency_storage.currency_code}}</span>
                  </div>
                  <span class="valuation-analysis-funds-tips"></span>
              </div>
              <div class="valuation-profit">
                  <div class="valuation-text"> {{$t("change.today_earnings")}} </div>
                  <div class="valuation-detail">
                      <div class="red valuation-detail-value">
                          <span data-value="0.00" class="hidden-funds-num rate-funds-num">0.00</span>
                          <span class="valuation-unit red">USDT</span>
                          <svg width="12" height="12" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg" class="valuation-icon">
                              <path d="M5.86603 0.500001C5.48113 -0.166666 4.51887 -0.166666 4.13397 0.500001L0.669874 6.5C0.284974 7.16667 0.7661 8 1.5359 8L8.4641 8C9.2339 8 9.71503 7.16667 9.33013 6.5L5.86603 0.500001Z" fill="#CC3D3D"></path>
                          </svg>
                      </div>
                  </div>
                  <div class="valuation-exchange">
                      <span data-value="≈0.00000BTC" class="hidden-funds-num">≈0.00000 {{currency_storage.currency_code}}</span>
                  </div>
              </div>
          </div>
      </div>
      <div class="_page-tab _flex-shrink" style="padding: 0px 40px; background: white;">
        <a href="#/change" aria-current="page" class="_page-tab-li"> {{$t("trade.change")}} </a>
        <a href="#/finance" class="_page-tab-li router-link-exact-active router-link-active" >{{$t("change.contract_assets")}}</a>
        <a href="#/fiat" class="_page-tab-li" >{{$t("change.fiat_assets")}}</a>
        <a href="#/letransactions" class="_page-tab-li" >{{$t("change.option_asset")}}</a>
      </div>
      <div class="_page-main__content__main" style="overflow: auto; padding: 0px 40px; background: white;">
          <dl class="_flex-sb alcenter _flex-shrink">
              <dt class="ft20 padding-top20 padding-bottom20">
                  <span class="color-secondary"> {{$t("change.fund_account_conversion")}}： </span>
                   $ {{ totle | toFixeds }}
              </dt>
              <dd class="_flex alcenter" style="margin-right: 400px;">
                  <el-input v-model="currency_name" class="_inputsearch _select mlr20" size="small" @change="currencyName">
                    <i
                      class="el-input__icon el-icon-search"
                      slot="prefix"
                      @click="currencyName">
                    </i>
                  </el-input>
                  <el-checkbox v-model="value" @change="checkboxChange">隐藏0资产</el-checkbox>
              </dd>
          </dl>
          <div class="_page-main__content__table">
              <div class="content_top flex alcenter fColor2">
                  <p class="tc" style="width: 200px;"> {{$t("market.currency")}} <i></i></p>
                  <p class="flex1 tc">{{$t("accountCenter.available")}}</p>
                  <p class="flex1 tc">{{$t("accountCenter.freeze")}}</p>
                  <p class="flex1 tc">{{$t("secondTv.conversion")}}(USDT)</p>
                  <p class="tc" style="width: 200px;">{{$t("leverTransactions.do")}}</p>
              </div>
              <ul class="content_ul" style="overflow: auto;">
                  <li v-for="(item,index) in asset_list" :key="index" v-if="item.is_lever == 1">
                      <div class="content_li flex alcenter between">
                          <p class="tc" style="display: flex; align-items: center; justify-content: center; width: 200px;">
                              <span style="width: 60px; justify-content: left; display: flex;">
                                  <img :src="require('@/assets/images/'+(item.currency_name)+'.png')" class="el-image__inner" style="width: 24px !important; height: 24px !important;">
                                  <span style="margin-left: 3px;">{{item.currency_name}}</span>
                              </span>
                          </p>
                          <p class="flex1 tc">{{item.lever_balance|| "0.00"|toFixeds}}</p>
                          <p class="flex1 tc">{{item.lock_lever_balance|| "0.00"|toFixeds}}</p>
                          <p class="flex1 tc">{{item.usdt_price * item.lever_balance || "0.00"|toFixedTwo}}</p>
                          <p class="tc operation" style="width: 200px;">
                              <el-button  
                                  class="btn_new" 
                                  type="primary"
                                  style="background-color: transparent !important;color:#000"
                                  size="mini" @click="transfer(index,item)">
                                  {{$t("trade.transfer")}}
                              </el-button>
                              <el-button  
                                  class="btn_new" 
                                  type="primary"
                                  style="background-color: transparent !important;color:#000"
                                  size="mini" @click="rec(index,item.currency)">
                                  {{$t("change.record")}}
                              </el-button>
                          </p>
                      </div>
                  </li>
              </ul>
          </div>
      </div>
      <el-dialog
          :title="$t('change.record')"
          :visible.sync="recFlag"
          width="40%">
          <el-table :data="recData" height="650">
              <el-table-column
              prop="value"
              :label='$t("accountaEntrust.number")'
              align="center">
                  <template slot-scope="scope">
                      {{ scope.row.value || "0.00"|toFixeds }}
                  </template>
              </el-table-column>
              <el-table-column
              prop="info"
              :label='$t("change.record")'
              align="center">
                  <template slot-scope="scope">
                      {{ fanyi(scope.row.info) }}
                  </template>
              </el-table-column>
              <el-table-column
              prop="created_time"
              :label='$t("deal.time")'
              align="center">
              </el-table-column>
          </el-table>
          <p class="more" style="color: #5289ff;" @click="moreData">{{more}}</p>
      </el-dialog>
      <el-dialog
          :title='$t("trade.transfer")'
          :visible.sync="transferData.modalShow"
          width="30%"
          :before-close="handleClose">
          <div class="transfer-box">
              <div class="mt24">
                  <div class="flex tl">
                      <span class="flex1">{{$t("accountNewPage.from")}}</span>
                      <span class="flex1 ml15">{{$t("accountNewPage.reach")}}</span>
                  </div>
                  <div class="flex alcenter mt15">
                      <div class="flex1 is-disabled">
                          <el-input disabled style="background-color:transparent!important;border-color:#E5E7ED!important" :value='$t("change.contract_assets")'></el-input>
                      </div>
                      <img width="21px" height="21px" src="@/assets/images/trans.png" class="mlr15">
                      <div class="flex1 _from-white">
                          <el-select v-model="submitForm.to_field" :placeholder='$t("change.please_select_an_account")'>
                              <el-option value="change" :label='$t("trade.change")'></el-option>
                              <el-option value="legal" :label='$t("change.fiat_assets")'></el-option>
                              <el-option value="micro" :label='$t("change.option_asset")'></el-option>
                          </el-select>
                      </div>
                  </div>
              </div>
              <div class="mt30">
                  <div class="mb12 tl">
                      {{ $t("change.transfer_amount") }}
                  </div>
                  <el-input class="_from-white el-input" :placeholder='$t("change.transfer_amount_input")' v-model="submitForm.number" style="color:#606266!important;background-color:transparent!important;border-color:#E5E7ED!important"></el-input>
                  <div class="mt10 flex between">
                      <div>
                          <span class="ft12 cor7b">
                              {{ submitForm.currency_code + " " + $t("accountNewPage.available_balance") + ":"}}
                          </span>
                          <span class="redsty ft12">{{submitForm.blanace|toFixeds}}</span>
                      </div>
                      <div class="ft14 color-primary curPer" @click="submitForm.number = submitForm.blanace">{{$t("complete.all")}}</div>
                  </div>
              </div>
              <div class="transferFooter mt30">
                  <el-button type="primary" size="medium" style="width: 312px;" @click="confirmTransfer">{{$t("tv.transfer")}}</el-button>
              </div>
          </div>
      </el-dialog>
  </div>
</template>
<script>
  import indexHeader from "@/view/indexHeader";
  import left from "@/view/left";
  import "@/lib/clipboard.min.js";
  import "@/lib/jquery.qrcode.min.js";
  import axios from "axios";

  export default {
      name: "finance",
      filters: {
          toFixeds: function(t) {
              return t = Number(t),
              t.toFixed(8)
          },
          toFixedTwo: function(t) {
              return t = Number(t),
              t.toFixed(2)
          }
      },
      data() {
          return {
              current: 0,
              inDialog: !1,
              outDialog: !1,
              legal_list: [],
              amount: "",
              totle: 0,
              type: 3,
              coins: [{
                  coin: "ETC"
              }, {
                  coin: "USDT"
              }],
              totle: "",
              mytotal: 0,
              zh: 0,
              accountType: "",
              recData: [],
              token: "",
              flags: !1,
              flag: !1,
              isHide: !0,
              active: "a",
              active01: "a",
              activeBank: "a",
              tibi_msg: "",
              active02: "a",
              addr: "",
              url: "",
              excharge_currency: "",
              excharge_address: "",
              number: "",
              rate: "",
              coinname: "",
              recFlag: !1,
              balance: "",
              ratenum: "",
              reachnum: "",
              min_number: "",
              permissions: ["account_number:experience"],
              min_number_txt: "",
              asset_list: [],
              tip_list: [this.$t("account.a1") + "USDT" + this.$t("account.a2"), "USDT" + this.$t("account.a3")],
              tip_list01: [this.$t("account.a1") + "USDT" + this.$t("account.a2"), "USDT" + this.$t("account.a3")],
              page: 1,
              more: this.$t("more"),
              balanceList: [this.$t("account.laccount"), this.$t("usercenter.lever")],
              transferData: {
                  modalShow: !1,
                  transferName: "",
                  transferBalance: "",
                  start: "",
                  end: ""
              },
              status: "",
              submitForm: {
                  number: "",
                  from_field: "lever",
                  to_field: "",
                  currency_id: "",
                  blanace: 0,
                  currency_code: "",
                  lang: window.localStorage.getItem("lang")
              },
              form: {
                  from: "",
                  num: "",
                  pic: [],
                  hash: ""
              },
              uploadUrl: "",
              uploadHeaders: {},
              qrcodeimg: "",
              excharge_address_btc: "",
              excharge_address_eth: "",
              excharge_address_usdt: "",
              qrcodeimg_btc: "",
              qrcodeimg_eth: "",
              qrcodeimg_usdt: "",
              systembi: "",
              systemlist: [],
              isshowsystembi: !1,
              huilv: 0,
              userchongbi_type: "",
              autoin_tips: "",
              address: [],
              currency: "",
              currency_id: 1,
              showAutoC: !1,
              transferFlag: !1,
              showSC: !1,
              selindex: 0,
              address2: "",
              bank_name: "",
              bank_branch: "",
              bank_account: "",
              currency_name: "",
              value: "",
              currency_storage: ""
          };
      },
      components: {
          indexHeader,
          left
      },
      watch: {
          value(t, e) {
              this.checkboxChange()
          }
      },
      updated() {
          this.getmyall()
      },
      methods: {
          getmyall() {
              this.intervalId = setInterval(()=>{
                  let t = localStorage.getItem("mytotal") ? localStorage.getItem("mytotal") : 0;
                  this.mytotal = t,
                  this.currency_storage = JSON.parse(localStorage.getItem("fiat")) || {
                      currency_code: "USD",
                      rate: 1,
                      saveTime: 0
                  },
                  this.zh = parseFloat(t * this.currency_storage.rate).toFixed(2)
              }
              , 1e4)
          },
          tihaun: function(t) {
              let e = {
                  1: "BTC",
                  2: "ETH",
                  3: "USDT",
                  99: "BANK"
              }
                  , a = this.currency_id;
              return t.replace("<币种名称>", e[a])
          },
          jiesuo: function(t, e) {
              const a = this.$loading();
              this.$http({
                  method: "post",
                  url: "/api/user/unlock",
                  data: {
                      id: t.id
                  },
                  headers: {
                      Authorization: localStorage.getItem("token")
                  }
              }).then(t=>{
                  a.close(),
                  "ok" == t.data.type ? (this.systemlist[e].status = 3,
                  this.$toast.success(this.$t("diy.解锁成功"))) : this.$toast.error(this.$t("diy.解锁失败"))
              }
              )
          },
          goRecord() {
              this.$router.push({
                  name: "coinRecord"
              })
          },
          init() {
              var t = this;
              t.uploadHeaders = {
                  Authorization: localStorage.getItem("token")
              },
              t.uploadUrl = t.$utils.back_api + "api/upload";
              var e = new Clipboard(".copy");
              e.on("success", (function(e) {
                  layer.alert(t.$t("lay.copys"))
              }
              )),
              e.on("error", (function(e) {
                  alert(t.$t("lay.fcopy"))
              }
              ))
          },
          selint: function(t, e) {
              this.currency_id = e,
              this.selindex = t
          },
          excharge2: function(t, e) {
              "2" == this.userchongbi_type ? (this.currency_id = e,
              this.showAutoC = !0) : this.address.length > 0 ? (this.currency_id = this.address[0].currency_id,
              this.selindex = 0,
              this.showSC = !0) : layer.alert(this.$t("notopen"))
          },
          excharge(t, e) {
              1 == this.status ? (this.currency = e,
              this.flag ? (this.flag = !1,
              this.active = "a",
              this.active01 = "a",
              this.active02 = "a",
              this.activeBank = "a") : (this.flag = !0,
              this.active = t,
              this.active01 = "a",
              this.active02 = "a",
              this.activeBank = "a"),
              "a" != this.active && this.sendData(e)) : layer.alert(this.$t("notopen"))
          },
          getMyaddress: function() {
              var t = this;
              this.$http({
                  url: "/api/wallet/get_in_address",
                  method: "post",
                  data: {
                      currency: 1,
                      lang: localStorage.getItem("lang")
                  },
                  headers: {
                      Authorization: t.token
                  }
              }).then(e=>{
                  if ("ok" == e.data.type) {
                      let a = e.data.message.userchongbi_type;
                      t.userchongbi_type = a,
                      t.address = e.data.message.address,
                      2 == a && (t.autoin_tips = e.data.message.tips)
                  }
              }
              ).catch(t=>{
                  console.log(t)
              }
              )
          },
          sendData(t) {},
          getqrcodeimg(t) {
              const e = this.$loading({
                  lock: !0,
                  text: "Loading",
                  spinner: "el-icon-loading",
                  background: "rgba(0, 0, 0, 0.7)"
              });
              this.$http({
                  url: "/api/qrcode?text=" + t,
                  method: "get",
                  data: ""
              }).then(t=>{
                  this.qrcodeimg = "/api/qrcode?text=" + this.eexcharge_address,
                  e.close()
              }
              ).catch(t=>{
                  e.close()
              }
              )
          },
          shiji: function(t, e, a) {
              return ((a - e) * t).toFixed(8)
          },
          withdraw(t, e) {
              1 == this.status ? (this.currency = e,
              this.flag ? (this.flag = !1,
              this.active = "a",
              this.active01 = "a",
              this.active02 = "a",
              this.activeBank = "a") : (this.flag = !0,
              this.active01 = t,
              this.active = "a",
              this.active02 = "a",
              this.activeBank = "a"),
              this.getNum(e)) : layer.alert(this.$t("notopen"))
          },
          withdrawBank(t, e) {
              1 == this.status ? (this.currency = e,
              this.flag ? (this.flag = !1,
              this.active = "a",
              this.active01 = "a",
              this.active02 = "a",
              this.activeBank = "a") : (this.flag = !0,
              this.active01 = "a",
              this.activeBank = t,
              this.active = "a",
              this.active02 = "a"),
              this.getNum(e)) : layer.alert(this.$t("notopen"))
          },
          rec(t, e) {
              this.recFlag = !0,
              this.currency = e,
              this.recData = [],
              this.flag ? (this.flag = !1,
              this.active = "a",
              this.active01 = "a",
              this.active02 = "a",
              this.activeBank = "a") : (this.flag = !0,
              this.active02 = t,
              this.active = "a",
              this.active01 = "a",
              this.activeBank = "a",
              this.$http({
                  url: "/api/wallet/legal_log",
                  method: "post",
                  data: {
                      type: 3,
                      currency: e,
                      page: 1
                  },
                  headers: {
                      Authorization: this.token
                  }
              }).then(t=>{
                  "ok" == t.data.type && (this.recData = t.data.message.list)
              }
              ))
          },
          daojishi2: function(t, e) {
              let a = Date.parse(t) / 1e3
                  , s = Date.parse(e) / 1e3;
              return Math.ceil((s - a) / 86400)
          },
          getNum(t) {
              var e = this;
              this.$http({
                  method: "POST",
                  url: "/api/wallet/get_info",
                  data: {
                      currency: t
                  },
                  headers: {
                      Authorization: localStorage.getItem("token")
                  }
              }).then(t=>{
                  t = t.data,
                  e.coinname = t.message.name,
                  e.balance = t.message.lever_balance,
                  e.min_number = e.$t("account.minnum") + parseFloat(t.message.min_number).toFixed(2),
                  e.min_number_txt = parseFloat(t.message.min_number).toFixed(8),
                  e.minnumber = t.message.min_number,
                  e.max_number = t.message.max_number,
                  e.day_limit = t.message.day_limit,
                  e.ratenum = t.message.rate,
                  e.reachnum = 0,
                  e.rate = t.message.rate
              })
          },
          mention() {
              var t = this
                  , e = this.currency;
              let a = "BTC";
              switch (e) {
              case 1:
                  a = "BTC";
                  break;
              case 2:
                  a = "ETH";
                  break;
              case 3:
                  a = "USDT";
                  break
              }
              var s = this.address2
                  , i = this.number
                  , n = (this.rate,
              this.minnumber);
              if (!s)
                  return void layer.msg(t.$t("lay.caddress"), {
                      icon: 5
                  });
              if (!i)
                  return void layer.msg(t.$t("lay.cnumber"), {
                      icon: 5
                  });
              if (i - 0 < n)
                  return layer.msg(t.$t("lay.minnum"), {
                      icon: 5
                  });
              let r = {
                  currency: this.currency,
                  number: this.number,
                  address: s,
                  rate: this.rate,
                  type: 0,
                  charge: a
              };
              const o = this.$loading();
              this.$http({
                  method: "POST",
                  url: "/api/wallet/out",
                  data: r,
                  dataType: "json",
                  contentType: "application/json",
                  headers: {
                      Authorization: localStorage.getItem("token"),
                      lang: localStorage.getItem("lang")
                  }
              }).then(t=>{
                  t = t.data,
                  "ok" == t.type ? (layer.msg(t.message, {
                      icon: 1
                  }),
                  setTimeout(()=>{
                      window.location.reload()
                  }
                  , 1500)) : layer.msg(t.message, {
                      icon: 5
                  }),
                  o.close()
              })
          },
          mentionBank() {
              var t = this
                  , e = "BANK";
              let a = "BANK";
              switch (e) {
              case 1:
                  a = "BTC";
                  break;
              case 2:
                  a = "ETH";
                  break;
              case 3:
                  a = "USDT";
                  break;
              case 99:
                  a = "BANK";
                  break
              }
              var s = this.bank_branch
                  , i = this.bank_name
                  , n = this.bank_account
                  , r = this.number
                  , o = (this.rate,
              this.minnumber);
              if (!s || !i || !n)
                  return void layer.msg(t.$t("apitip.参数错误"), {
                      icon: 5
                  });
              if (!r)
                  return void layer.msg(t.$t("lay.cnumber"), {
                      icon: 5
                  });
              if (r - 0 < o)
                  return layer.msg(t.$t("lay.minnum"), {
                      icon: 5
                  });
              let c = {
                  currency: this.currency,
                  number: this.number,
                  rate: this.rate,
                  type: 0,
                  bank_branch: this.bank_branch,
                  bank_name: this.bank_name,
                  bank_account: this.bank_account,
                  charge: a
              };
              const l = this.$loading();
              this.$http({
                  method: "POST",
                  url: "/api/wallet/out",
                  data: c,
                  dataType: "json",
                  contentType: "application/json",
                  headers: {
                      Authorization: localStorage.getItem("token"),
                      lang: localStorage.getItem("lang")
                  }
              }).then(t=>{
                  t = t.data,
                  "ok" == t.type ? (layer.msg(t.message, {
                      icon: 1
                  }),
                  setTimeout(()=>{
                      window.location.reload()
                  }
                  , 1500)) : layer.msg(t.message, {
                      icon: 5
                  }),
                  l.close()
              })
          },
          exchange() {},
          copy() {
              var t = this;
              switch (t.currency) {
              case 1:
                  t.excharge_address = t.excharge_address_btc;
                  break;
              case 2:
                  t.excharge_address = t.excharge_address_eth;
                  break;
              case 3:
                  t.excharge_address = t.excharge_address_usdt;
                  break
              }
              var e = new Clipboard(".copy",{
                  text: function() {
                      return t.excharge_address
                  }
              });
              e.on("success", (function(e) {
                  t.flags = !0,
                  layer.msg(t.$t("lay.copys"))
              }
              )),
              e.on("error", (function(e) {
                  t.flags = !1,
                  layer.msg(t.$t("lay.fcopy"))
              }
              ))
          },
          record() {
              this.$router.push({
                  name: "finanrec"
              })
          },
          withdraw_address() {
              this.$router.push({
                  name: "withdraw_address"
              })
          },
          jumpDeposit() {
              this.$router.push({
                  name: "deposit"
              })
          },
          jumpWithdraw() {
              this.$router.push({
                  name: "withdrawDeposit"
              })
          },
          show_ewm() {
              this.isHide ? this.isHide = !1 : this.isHide = !0
          },
          gethl: function() {
              this.$http({
                  url: "/api/bi/price",
                  data: {},
                  method: "post",
                  headers: {
                      Authorization: localStorage.getItem("token")
                  }
              }).then(t=>{
                  let e = t.data.message;
                  this.huilv = e.price
              }
              )
          },
          intvalHl: function() {
              clearInterval(this.intervalId8888)
          },
          getsystembilist() {
              var t = this;
              this.$http({
                  url: "/api/user/uplists",
                  method: "post",
                  data: {
                      limit: 500,
                      page: 1
                  },
                  headers: {
                      Authorization: t.token
                  }
              }).then(t=>{
                  this.systemlist = t.data.message.data
              }
              ).catch(t=>{
                  console.log(t)
              }
              )
          },
          currencyName() {
              var t = 0;
              this.value && (t = 1e-7);
              var e = this;
              this.$http({
                  url: "/api/wallet/list",
                  method: "post",
                  data: {
                      currency_name: e.currency_name?e.currency_name:null,
                      zero_flag: t,
                      lang: ""
                  },
                  headers: {
                      Authorization: e.token
                  }
              }).then(t=>{
                  e.loadData(t)
              }
              ).catch(t=>{
                  console.log(t)
              })
          },
          checkboxChange() {
              var t = 0;
              this.value && (t = 1e-7);
              var e = this;
              this.$http({
                  url: "/api/wallet/list",
                  method: "post",
                  data: {
                      currency_name: e.currency_name,
                      zero_flag: t,
                      lang: ""
                  },
                  headers: {
                      Authorization: e.token
                  }
              }).then(t=>{
                  e.loadData(t)
              }).catch(t=>{
                  console.log(t)
              })
          },
          getdata() {
              var t = this;
              this.$http({
                  url: "/api/wallet/list",
                  method: "post",
                  data: {},
                  headers: {
                      Authorization: t.token
                  }
              }).then(e=>{
                  t.loadData(e)
              }
              ).catch(t=>{
                  console.log(t)
              }
              )
          },
          loadData(e){
              var t = this;
              let a = e.data.message.change_wallet.usdt_totle + e.data.message.legal_wallet.usdt_totle + e.data.message.lever_wallet.usdt_totle + e.data.message.micro_wallet.usdt_totle;
              localStorage.setItem("mytotal", a);
              var s = e.data.message.lever_wallet;
              t.totle = s.usdt_totle;
              t.asset_list = s.balance
          },
          moreData() {
              let t = this;
              t.page = t.page + 1,
              this.$http({
                  url: "/api/wallet/legal_log",
                  method: "post",
                  data: {
                      type: "3",
                      currency: t.currency,
                      page: t.page
                  },
                  headers: {
                      Authorization: this.token
                  }
              }).then(e=>{
                  if ("ok" == e.data.type) {
                      var a = t.asset_list;
                      for (let s in a)
                          t.currency == a[s].currency && (t.active02 = s,
                          e.data.message.list.length > 0 ? t.recData = t.recData.concat(e.data.message.list) : t.more = t.$t("nomore"))
                  }
              }
              )
          },
          confirmTransfer() {
              if (!this.submitForm.to_field)
                  return layer.msg(this.$t("change.please_select_an_account")),
                  !1;
              if (!this.submitForm.number)
                  return layer.msg(this.$t("change.transfer_amount_input")),
                  !1;
              let t = this;
              const e = this.$loading();
              this.$http({
                  url: "/api/wallet/change",
                  method: "post",
                  data: t.submitForm,
                  headers: {
                      Authorization: this.token
                  }
              }).then(a=>{
                  "ok" == a.data.type ? (layer.msg(a.data.message),
                  t.submitForm.number = "",
                  this.transferData.modalShow = !1,
                  this.$router.go(0)) : layer.msg(a.data.message),
                  e.close()
              }
              )
          },
          handleClose() {
              let t = this;
              t.transferData.modalShow = !1
          },
          transfer(t, e) {
              let a = this;
              a.transferData.modalShow = !0,
              a.submitForm.currency_id = e.currency,
              a.submitForm.currency_code = e.currency_name,
              a.submitForm.blanace = e.lever_balance
          },
          uploadFile(t) {
              let e = this
                  , a = new FormData;
              a.append("file", t.file),
              this.$http.post("/api/upload", a, {
                  headers: {
                      "Content-Type": "multipart/form-data"
                  }
              }).then(t=>{
                  let a = t.data;
                  "ok" == a.type ? e.form.pic = [{
                      name: "已上传",
                      url: a.message
                  }] : layer.msg(a.message)
              }
              )
          },
          submitChargeInfo() {
              let t = {}
                  , e = this.currency_id;
              t.currency = e,
              t.acc = this.form.from,
              t.hash = this.form.hash,
              t.amount = this.form.num,
              t.lang = window.localStorage.getItem("lang"),
              this.form.pic.length > 0 ? t.pic = this.form.pic[0].url : t.pic = "";
              let a = this;
              const s = this.$loading();
              this.$http({
                  url: "/api/wallet/charge_req",
                  method: "post",
                  data: t,
                  headers: {
                      Authorization: this.token
                  }
              }).then(t=>{
                  "ok" == t.data.type ? (layer.msg(t.data.message),
                  a.form.num = "",
                  a.form.from = "",
                  a.form.hash = "",
                  a.form.pic = [],
                  this.showSC = !1) : layer.msg(t.data.message),
                  s.close()
              }
              )
          },
          yingku: function(t, e) {
              let a = this.huilv;
              return (t * (a - e)).toFixed(8)
          },
          close() {
              this.inDialog = !1,
              this.outDialog = !1,
              this.amount = ""
          },
          turn() {
              this.$http({
                  url: "/api/wallet/change",
                  method: "post",
                  data: {
                      type: this.type,
                      number: this.amount,
                      currency_id: this.nowCoin.currency
                  },
                  headers: {
                      Authorization: this.token
                  }
              }).then(t=>{
                  layer.msg(t.data.message),
                  "ok" == t.data.type && this.close()
              }
              )
          }
      },
      created() {
          this.token = localStorage.getItem("token") || "",
          this.getMyaddress(),
          this.intvalHl(),
          this.account_number = this.$route.query.account_number || "experience"
      },
      mounted() {
          var t = this;
          t.getdata(),
          t.init(),
          t.getmyall()
      },
      computed: {
          nowCoin: function() {
              var t = this.legal_list;
              return t.length ? t[this.current] : {}
          }
      }
  };
</script>
<style lang="scss">
 
._page-main__content1 {
  width: calc(100% - 260px);
  height: 100%;
  color: #000;
  background-color: #f7f7fa
}

._page-main__content1,._page-main__page {
  box-sizing: border-box;
  display: flex;
  flex-direction: column
}

._page-title {
  padding: 20px 0 25px;
  font-size: 18px
}

._page-tab {
  font-size: 18px;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #797b96
}

._page-tab-li._page-tab-li-active,._page-tab-li.router-link-exact-active {
  color: #000
}

._page-tab-li:not(:last-child) {
  margin-right: 39px
}

._page-tab-li {
  color: #999;
  margin-top: 20px;
  padding-bottom: 17px;
  position: relative;
  font-size: 14px;
  cursor: pointer
}

._page-tab-li:before {
  content: "";
  left: 0;
  bottom: -1px;
  width: 100%;
  height: 3px
}

._page-tab-li.router-link-exact-active:before {
  position: absolute;
  background: #276dff
}

._flex-shrink {
  flex-shrink: 0
}

._flex-sb {
  justify-content: space-between
}

._flex-sb,._flex {
  display: flex
}

.alcenter {
  align-items: center
}

.ft20 {
  font-size: 20px
}

.padding-bottom20 {
  padding-bottom: 20px
}

.padding-top20 {
  padding-top: 20px
}

.color-secondary {
  color: #999
}

.mlr20 {
  margin: 0 20px
}

.el-input--small {
  font-size: 13px
}

.el-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 100%
}

._inputsearch>.el-input__inner {
  border-radius: 16px
}

.el-input__inner {
  border: 1px solid #797b96
}

._checkbox .el-checkbox__inner, ._checkbox .el-checkbox__inner {
  background-color: transparent;
  border-color: #999
}

._page-main__content__table {
  overflow: auto
}

._page-main__content__main,._page-main__content__table {
  width: 100%;
  flex-grow: 1
}

._table.el-table {
  color: #fff;
  background-color: transparent
}

._table.el-table .el-table__header-wrapper tr th.el-table__cell, ._table.el-table .el-table__header-wrapper tr {
  background: transparent
}

._table.el-table th.el-table__cell.is-leaf, ._table.el-table td.el-table__cell {
  border-bottom: 6px solid #1a1b26
}

._table.el-table .el-table--group,._table.el-table td.el-table__cell,._table.el-table th.el-table__cell.is-leaf, ._table.el-table .el-table--border {
  border: none
}

._table.el-table tr, ._table.el-table th.el-table__cell {
  background-color: #1a1b26
}

.el-table .el-table__cell.is-center {
  text-align: center
}

.el-table__fixed:before, .el-table__fixed-right:before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background-color: #1a1b26;
  z-index: 4
}

._table.el-table:before {
  background-color: transparent!important
}


.flex-items-center {
  display: flex;
  align-items: center
}

.wallet-operation .trade-btn {
  background: #36f!important;
  border-radius: 4px;
  color: #fff;
  border: none
}

.wallet-operation .ope-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 5.1rem;
  padding: 0 .8rem;
  box-sizing: border-box;
  height: 2rem;
  line-height: 2rem;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  margin-left: .8rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  background: #f7f7fa;
  font-family: Gate_Sans Medium;
  font-weight: 500;
  white-space: nowrap;
  font-size: .8rem;
  line-height: .8rem
}

.overview-main {
  background: #fff;
  padding: 1.6rem 0;
  padding-left: 2.4rem;
  position: relative
}

.d-flex {
  display: flex
}

.flex-space-between {
  display: flex;
  justify-content: space-between
}

.content-flex-start>div.valuation-total,funds-valuation>div.valuation-total {
  margin-top: 32px;
  flex: 1
}

.content-flex-start>div.valuation-total,.funds-valuation>div.valuation-total {
  margin-top: 0!important;
  flex: 1
}

.valuation-text {
  font-weight: 400;
  color: #4d5366;
  font-size: 14px;
  line-height: 12px
}

.wallet-content .valuation-detail,div .curr-coin-info li em {
  color: #aaa
}

.valuation-detail {
  display: flex;
  align-items: baseline;
  max-width: 100%
}

#valuation-total-funds {
  max-width: calc(100% - 45px)
}

.valuation-unit {
  font-size: 16px;
  margin: 9px 0 6px;
  margin-left: 8px;
  font-family: Gate_Sans Medium;
  font-weight: 500;
  color: #aaa
}

.valuation-exchange {
  display: flex;
  font-size: .8rem;
  line-height: 12px;
  color: #000;
  font-family: Gate_Sans Medium;
  font-weight: 500
}

.valuation-analysis-funds-tips {
  display: inline-flex;
  align-items: center
}

.valuation-analyse-btn {
  display: inline-flex;
  background: #1f2433;
  border-radius: 4px;
  padding: 8px 16px;
  color: #fff;
  justify-content: center;
  align-items: center
}

.no-funds-tips,.valuation-analyse-btn {
  font-size: 14px;
  line-height: 14px;
  font-family: Gate_Sans Medium;
  font-weight: 500;
  margin-top: 1.2rem
}

.no-funds-tips {
  padding-left: 14px;
  letter-spacing: .4px;
  color: var(--colorFont1)
}

.no-funds-tips>a {
  color: #36f
}

.content-flex-start>div.valuation-profit,.funds-valuation>div.valuation-profit {
  margin-top: 32px;
  flex: 1;
  margin: 0!important
}

.funds-valuation>div {
  min-width: 15%
}

.myaccount-content-box .red {
  color: #f23d3d
}

.rise-red-body .valuation-detail .red .rate-funds-num,.rise-red-body .valuation-detail .red .valuation-unit {
  color: var(--brandRed)
}

body.classic-dark .valuation-detail .hidden-funds-num {
  color: #000
}

.valuation-detail .hidden-funds-num {
  color: #f23d3d;
  font-family: Gate_Sans Medium;
  font-weight: 500;
  margin: 11px 0 8px 0;
  font-size: 2.4rem;
  line-height: 3.25rem;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap
}

.valuation-analyse-btn,.valuation-share-btn {
  display: inline-flex;
  background: #1f2433;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  line-height: 14px;
  color: #fff;
  font-family: Gate_Sans Medium;
  font-weight: 500;
  margin-top: 1.2rem;
  justify-content: center;
  align-items: center
}

._page-main__content1 {
  width: calc(100% - 260px);
  height: 100%;
  color: #000;
  background-color: #f7f7fa
}

._page-main__content1,._page-main__page {
  box-sizing: border-box;
  display: flex;
  flex-direction: column
}

._page-title {
  padding: 20px 0 25px;
  font-size: 18px
}

._page-tab {
  font-size: 18px;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #797b96
}

._page-tab-li._page-tab-li-active,._page-tab-li.router-link-exact-active {
  color: #000
}

._page-tab-li:not(:last-child) {
  margin-right: 39px
}

._page-tab-li {
  color: #999;
  margin-top: 20px;
  padding-bottom: 17px;
  position: relative;
  font-size: 14px;
  cursor: pointer
}

._page-tab-li:before {
  content: "";
  left: 0;
  bottom: -1px;
  width: 100%;
  height: 3px
}

._page-tab-li.router-link-exact-active:before {
  position: absolute;
  background: #276dff
}

._flex-shrink {
  flex-shrink: 0
}

._flex-sb {
  justify-content: space-between
}

._flex-sb,._flex {
  display: flex
}

.alcenter {
  align-items: center
}

.ft20 {
  font-size: 20px
}

.padding-bottom20 {
  padding-bottom: 20px
}

.padding-top20 {
  padding-top: 20px
}

.color-secondary {
  color: #999
}

.mlr20 {
  margin: 0 20px
}

.el-input--small {
  font-size: 13px
}

.el-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 100%
}

._inputsearch>.el-input__inner {
  border-radius: 16px
}

.el-input__inner {
  border: 1px solid #797b96
}

._checkbox .el-checkbox__inner, ._checkbox .el-checkbox__inner {
  background-color: transparent;
  border-color: #999
}

._page-main__content__table {
  overflow: auto
}

._page-main__content__main,._page-main__content__table {
  width: 100%;
  flex-grow: 1
}

._table.el-table {
  color: #fff;
  background-color: transparent
}

._table.el-table .el-table__header-wrapper tr th.el-table__cell, ._table.el-table .el-table__header-wrapper tr {
  background: transparent
}

._table.el-table th.el-table__cell.is-leaf, ._table.el-table td.el-table__cell {
  border-bottom: 6px solid #1a1b26
}

._table.el-table .el-table--group,._table.el-table td.el-table__cell,._table.el-table th.el-table__cell.is-leaf, ._table.el-table .el-table--border {
  border: none
}

._table.el-table tr, ._table.el-table th.el-table__cell {
  background-color: #1a1b26
}

.el-table .el-table__cell.is-center {
  text-align: center
}

.el-table__fixed:before, .el-table__fixed-right:before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background-color: #1a1b26;
  z-index: 4
}

._table.el-table:before {
  background-color: transparent!important
}


.nodata {
  text-align: center;
  line-height: 80px
}

.lsbox {
  min-height: 540px
}

.newtable {
  width: 100%;
  border-collapse: collapse
}

.newtable td,.newtable th,.newtable tr {
  border-collapse: collapse
}

.newtable tr {
  border-bottom: 1px solid #333
}

.newtable td,.newtable th {
  padding: 12px 10px
}

.btn {
  cursor: default;
  color: #fff;
  border-radius: 3px;
  background: #666;
  text-align: center;
  line-height: 28px;
  height: 28px
}

.btn.btn-ok {
  background: #4caf50
}

.btn.btn-err {
  background: #f44336;
  cursor: pointer
}

.el-form-item__label {
  color: #637085!important
}

.el-input__inner {
  border-color: #4d5373!important;
  background-color: #f7f7fa!important;
  color: #cecfd0!important
}

.header {
  padding: 15px 30px;
  overflow: hidden
}

.min_lab {
  margin: 0 10px
}

.min_lab input {
  margin-right: 3px
}

.inp_lab {
  border: 1px solid #6b80ae;
  border-radius: 2px;
  padding: 3px 5px
}

.inp_lab input {
  background: none;
  border: none;
  width: 120px;
  color: #fff
}

.right_text {
  color: #5697f4
}

.right_text span {
  cursor: pointer
}

.record {
  margin-right: 10px
}

.content_top {
  padding: 10px 0
}

.content_li {
  background-color: #f7f7fa;
  padding: 15px 0;
  border-bottom: 6px solid #fff
}

.ewm,.operation {
  color: #276dff
}

.copy:hover,.ewm:hover {
  cursor: pointer
}

.operation span {
  cursor: pointer;
  margin: 0 5px
}

.hide_div {
  border: 1px solid #1e2c42;
  padding: 20px
}

.excharge_record {
  color: #5697f4
}

input {
  background: none;
  border: none
}

.address_inp {
  width: 100%;
  border: 1px solid #6b80ae;
  border-radius: 3px;
  padding: 15px 15px
}

.num_lab {
  display: flex;
  width: 100%;
  border: 1px solid #6b80ae;
  border-radius: 3px;
  padding: 15px
}

.num_lab input {
  width: 100%
}

.get_lab,.range_lab {
  border: 1px solid #6b80ae;
  border-radius: 3px;
  padding: 15px
}

.get_lab {
  background: #1e2c42
}

.right_inp_wrap {
  margin-left: 20px
}

.right_inp_wrap2 {
  margin-left: 0
}

.advance,.use_num {
  color: #5697f4
}

.use_num {
  margin-right: 5px
}

.advance {
  margin-left: 5px
}

.withdraw_btn {
  background-color: #7a98f7;
  color: #fff;
  padding: 15px 70px;
  border: none;
  border-radius: 5px
}

.withdraw_btn:hover {
  cursor: pointer
}
.el-input-group__append, .el-input-group__prepend  {
  border-top-left-radius: 16px !important;
  border-bottom-left-radius: 16px !important;
}
.more {
  width: 100%;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
}
</style>
