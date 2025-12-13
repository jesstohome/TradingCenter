<template>
    <div style="background: #F7F7FA;">
        <indexHeader></indexHeader>
        <div class="box">
            <div class="title_tips flex alcenter curPer">
                <a href="javascript:void(0)" onclick="history.go(-1)" class="ft14">{{$t("earn.go_back")}}</a>
            </div>
            <div class="flex between mb50">
                <div class="content_TK bg-main">
                    <div class="loss-modal-header flex between alcenter" style="display: flex; justify-content: space-between;">
                        <h5 style="width: 50%; cursor: pointer; display: flex; justify-content: center; flex-flow: column; align-items: center;" @click="type = 0">
                            {{$t("accountSet.withdrawal_address")}}
                            <span style="border-bottom: 2px solid red; display: block; width: 30%;" v-if="type==0"></span>
                        </h5>
                        <h5 style="width: 50%; cursor: pointer; display: flex; justify-content: center; flex-flow: column; align-items: center;" @click="type = 1">
                            {{$t("accountSet.bank_account")}}
                            <span style="border-bottom: 2px solid red; display: block; width: 30%;" v-if="type==1"></span>
                        </h5>
                    </div>
                    <div class="content-box">
                        <div class="row">
                            <p>{{$t("creditCard.Select_a_currency_second")}}</p>
                            <el-select :placeholder='$t("transferSet.please_select_currency")' v-model="coin" class="_select icon_select" style="width: 100%;">
                                <el-option v-for="(item,index) in coins" :key="index" :value="item.text" :label="item.currency_name">
                                    <span style="display: table-cell;vertical-align:middle">
                                        <img style="width:24px;height:100%;vertical-align:middle" :src="item.image">
                                        <span class="ml10" style="vertical-align:middle">{{item.text}}</span>
                                    </span>
                                </el-option>
                            </el-select>
                        </div>
                        <div class="row" v-if="type==0">
                            <p>{{$t("accountSet.withdrawal_address")}}</p>
                            <el-select v-if="address" :placeholder='$t("transferSet.input_withdrawal_address")' v-model="address" class="_select" style="width: 100%;">
                                <el-option v-for="(item,index) in walletAddress" :key="index" :value="item.id" :label="item.address">
                                    <span class="d-block">
                                        {{ item.name }}
                                        <span v-if="item.type">-{{item.type}}:</span>
                                    </span>
                                    <span class="d-block" style="color:#296acf;word-break:break-all">
                                        {{ item.address }}
                                    </span>
                                </el-option>
                            </el-select>
                            <div v-else class="_select _whiteform el-input el-input-group el-input-group--append">
                                <input type="text" autocomplete="off" readonly="readonly" @click="jumpAddWithdraw" :value='$t("transferSet.msg_15")' class="el-input__inner" style="text-align: center; cursor: pointer; color: deepskyblue;">
                            </div>
                        </div>
                        <div class="row" v-if="type==1">
                            <p>{{$t("accountSet.bank_account")}}</p>
                            <el-input v-if="bankInfo && bankInfo.iban" :value="bankInfo.iban" class="_select">
                            </el-input>
                            <div v-else class="_select _whiteform el-input el-input-group el-input-group--append">
                                <input type="text" autocomplete="off" readonly="readonly" @click="jumpAddWithdraw" :value='$t("transferSet.bank_account_tip")' class="el-input__inner" style="text-align: center; cursor: pointer; color: deepskyblue;">
                            </div>
                        </div>
                        <div class="row">
                            <p class="flex between">
                                <span>{{$t("accountaEntrust.number")}}</span>
                                <span>{{$t("accountCenter.available")+ "：" + change_balance +' '+selectCoin.text}}</span>
                            </p>
                            <el-input v-model="number" :placeholder='$t("other.minimum_withdrawal_amount")+min_number' class="_select _whiteform el-input-group el-input-group--append" style="border-top-left-radius:0 !important;border-bottom-left-radius:0 !important;">
                                <template slot="append">
                                    <span>{{selectCoin.text}}</span>
                                </template>
                            </el-input>
                        </div>
                        <div class="row">
                            <p class="flex between">
                                {{ $t("accountNewPage.premium") }}
                            </p>
                            <el-input :value="rate + ' ' + selectCoin.text " readonly :placeholder='$t("accountNewPage.premium")' class="_select">
                            </el-input>
                        </div>
                        <div class="row">
                            <p class="flex between">
                                {{ $t("other.arrival_amount") }}
                            </p>
                            <el-input :value="canGetNumber" readonly :placeholder='$t("other.arrival_amount")' class="_select">
                            </el-input>
                        </div>
                        <div class="row" v-if="1 == getLocalStorage('zk_radio')">
                            <p class="flex between">
                                {{ $t("other.payPassword") }}
                            </p>
                            <el-input v-model="pay_password" :placeholder='$t("other.payPassword")' class="_select _whiteform">
                            </el-input>
                        </div>
                        <div class="row" style="margin-top:40px">
                            <el-button type="primary" style="width: 100%; height: 40px;" @click="submit">{{$t("other.withdraw_coins")}}</el-button>
                        </div>
                    </div>
                </div>
                <div class="infosty bg-main">
                    <p class="titlesty">{{$t("accountSet.withdrawal_address")}}</p>
                    <div class="record-box">
                        <div class="table-box">
                            <div class="content_top flex alcenter fColor2">
                                <p class="flex1 tc" style="padding: 12px 0"> {{$t("market.currency")}} <i></i></p>
                                <p class="flex1 tc" style="padding: 12px 0">{{$t("other.withdrawal_amount")}}</p>
                                <p class="flex1 tc" style="padding: 12px 0px;">{{$t("leverTransactions.status")}}</p>
                                <p class="flex1 tc" style="padding: 12px 0px;">{{$t("other.creation_time")}}</p>
                            </div>
                            <div style="height: 550px; overflow: auto;">
                                <template v-for="(item,index) in withdrawList">
                                    <div class="content_top flex alcenter fColor2">
                                        <p class="flex1 tc" style="padding: 12px 0">{{item.name}}</p>
                                        <p class="flex1 tc" style="padding: 12px 0">{{item.number}}</p>
                                        <p class="flex1 tc" style="padding: 12px 0">{{$t("other." + item.status_text)}}</p>
                                        <p class="flex1 tc" style="padding: 12px 0">{{item.create_time}}</p>
                                    </div>
                                </template>
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
    name: 'withdrawDeposit',
    filters: {
        toFixeds: function(t) {
            return t = Number(t),
            t.toFixed(2)
        }
    },
    data() {
      return {
        coins: [{
            id: 3,
            text: "USDT",
            image: require("@/assets/images/USDT.png")
        }, {
            id: 1,
            text: "BTC",
            image: require("@/assets/images/BTC.png")
        }, {
            id: 2,
            text: "ETH",
            image: require("@/assets/images/ETH.png")
        }],
        coin: "",
        address: "",
        selectCoin: {},
        pay_password: "",
        showSelect: !1,
        min_number: 0,
        change_balance: 0,
        rate: 0,
        number: null,
        showSelectAddress: !1,
        originWalletAddress: [],
        walletAddress: [],
        selectAddress: {},
        type: 0,
        card: {},
        card_international: {},
        transShow: !1,
        withdrawList: [],
        bankInfo: ""
      }
    },
    components: {
      indexHeader,
      indexFooter
    },
    computed: {
        canGetNumber() {
            const t = this.number - this.rate;
            return t > 0 ? t : 0
        }
    },
    created() {
        this.selectCoin = this.coins[0],
        this.coin = this.coins[0].text,
        this.getWalletInfo(),
        this.getBankInfo()
    },
    mounted(){
        this.getWithdrawList(),
        this.getWalletAddressList()
    },
    watch: {
        coin: {
            handler(t, e) {
                this.coin && t && e && (this.selectCoin = this.coins.filter(t=>t.text == this.coin)[0],
                this.getWalletInfo(),
                this.walletAddress = this.originWalletAddress.filter(t=>t.name == this.coin),
                this.selectAddress = this.walletAddress.length ? this.walletAddress[0] : {},
                this.address = this.walletAddress[0].id)
            },
            immediate: !0,
            deep: !0
        },
        address: {
            handler(t, e) {
                if (this.address && t && e) {
                    let t = this.walletAddress.filter(t=>t.id == this.address);
                    this.selectAddress = t[0],
                    this.address = this.selectAddress.id
                }
            },
            immediate: !0,
            deep: !0
        }
    },
    methods:{
        getBankInfo() {
            var t = this;
            this.$http({
                url: "/api/user/cash_info",
                method: "post",
                data: {},
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            }).then(e=>{
                t.bankInfo = e.data.message
            }
            ).catch(t=>{
                console.log(t)
            }
            )
        },
        getLocalStorage(t) {
            return window.localStorage.getItem("tk_radio")
        },
        jumpAddWithdraw() {
            this.$router.push("/transferSet")
        },
        submit() {
            const {i18n: t, selectAddress: e, number: a, rate: s, selectCoin: i, type: n, card: r, card_international: o, pay_password: c} = this;
            if (e && !e.address && 0 == n)
                return void layer.msg(this.$t("other.withdrawal_address_tip_info"));
            e && e.address;
            if (a) {
                var l = this;
                this.$http({
                    url: "/api/wallet/out",
                    method: "post",
                    data: {
                        address: e.address,
                        currency: i.id,
                        number: a,
                        rate: s,
                        type: l.type,
                        lang: window.localStorage.getItem("lang") || "en",
                        pay_password: c
                    },
                    headers: {
                        Authorization: localStorage.getItem("token")
                    }
                }).then(t=>{
                    layer.msg(t.data.message),
                    l.number = "",
                    l.getWalletInfo(),
                    l.getWithdrawList()
                }
                ).catch(t=>{
                    console.log(t)
                }
                )
            } else
                layer.msg(this.$t("other.withdrawal_amount_alert"))
        },
        getWalletAddressList() {
            var t = this;
            this.$http({
                url: "/api/user/wallet/list?page=1&limit=99999&lang=" + window.localStorage.getItem("lang") || !1,
                method: "get",
                data: {},
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            }).then(e=>{
                t.originWalletAddress = e.data.message.data,
                t.walletAddress = t.originWalletAddress.filter(e=>e.currency == t.selectCoin.id),
                t.selectAddress = t.walletAddress[0],
                t.address = t.walletAddress[0].id
            }
            ).catch(t=>{
                console.log(t)
            }
            )
        },
        getWithdrawList() {
            var t = this;
            this.$http({
                url: "/api/user/withdraw/list?page=1&limit=99999&lang=" + window.localStorage.getItem("lang") || !1,
                method: "get",
                data: {},
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            }).then(e=>{
                t.withdrawList = e.data.message.data
            }
            ).catch(t=>{
                console.log(t)
            }
            )
        },
        getWalletInfo() {
            var t = this;
            this.$http({
                url: "/api/wallet/get_info",
                method: "post",
                data: {
                    currency: t.selectCoin.id,
                    lang: window.localStorage.getItem("lang") || "en"
                },
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            }).then(e=>{
                const a = e.data.message;
                t.change_balance = Number(a.change_balance),
                t.min_number = Number(a.min_number),
                t.rate = Number(a.rate)
            }
            ).catch(t=>{
                console.log(t)
            }
            )
        }
    }
  }
  </script>
  <style lang="scss" scoped>
  
  

.box {
    width: 1200px;
    margin: 0 auto;
    color: #000
}

.mb50 {
    margin-bottom: 50px
}

.flex {
    display: flex;
    -webkit-display: flex;
    -moz-display: flex;
    -ms-display: flex;
    -o-display: flex
}

.box .content_TK {
    width: 380px;
    border-radius: 5px
}

.box .title_tips {
    padding: 30px 0
}

.curPer,.pointer {
    cursor: pointer
}

.box .content_TK .loss-modal-header {
    line-height: 64px;
    font-size: 16px;
    padding: 0 20px;
    border-bottom: 1px solid #797b96
}

.between {
    justify-content: space-between
}

.alcenter {
    align-items: center
}

.box .content_TK .center_TK_box {
    padding: 16px 20px 40px;
    max-height: 780px;
    overflow: hidden
}

.box .content_TK .select-currency-box p {
    font-size: 14px;
    margin-bottom: 12px
}

 ._select .el-input__inner, ._select .el-range-input, .box ._select .el-input-group__append {
    background-color: transparent;
    border-color: #797b96;
    color: #000
}

.box .content_TK .center_TK_box .tips {
    margin: 20px 0;
    padding: 10px;
    font-size: 14px;
    line-height: 20px;
    color: #f9a416
}

.ml10 {
    margin-left: 10px
}

.ft12 {
    font-size: 12px
}

.box .content_TK .center_TK_box .chain-box p {
    font-size: 14px;
    margin-bottom: 12px
}

.el-button--primary {
    color: #fff;
    background-color: #409eff!important;
    border-color: #409eff!important
}

.box .content_TK .center_TK_box .ewm_img {
    width: 190px;
    height: 190px;
    border: 1px solid #282934;
    padding: 10px;
    border-radius: 10px;
    margin: 20px auto
}

.box .content_TK .center_TK_box .chargeAddr-box {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0
}

.box .content_TK .center_TK_box .chargeAddr-box span {
    font-size: 14px;
    color: #656565;
    text-overflow: ellipsis
}

.box .content_TK .center_TK_box .chargeBtn {
    margin-top: 40px
}

.box .infosty {
    width: 800px;
    overflow-y: auto
}

.bg-main {
    background-color: #fff
}

.box .infosty .titlesty {
    height: 64px;
    line-height: 64px;
    border-bottom: 1px solid #797b96;
    padding: 0 20px
}

.box .table-box {
    padding: 20px 20px 0
}

.box .el-select-dropdown {
    background-color: #fff;
    color: #000!important;
    margin: 0;
    border: 1px solid #797b96
}

.box .el-select-dropdown__item {
    color: #fff
}

.box .el-select-dropdown__item:hover {
    color: #276dff;
    background-color: #393b4b
}

.el-button--primary:hover {
    color: #fff;
    background-color: #5289ff!important;
    border-color: #5289ff!important
}

 .el-select-dropdown__item {
    color: #000!important
}

.el-select-dropdown__item.hover, .el-select-dropdown__item.selected, .el-select-dropdown__item:hover {
    background: #bbb!important
}

.box {
    width: 1200px;
    margin: 0 auto;
    color: #000
}

.curPer,.pointer {
    cursor: pointer
}

.ptb30 {
    padding: 30px 0
}

.alcenter {
    align-items: center
}

.flex {
    display: flex;
    -webkit-display: flex;
    -moz-display: flex;
    -ms-display: flex;
    -o-display: flex
}

.mb50 {
    margin-bottom: 50px
}

.between {
    justify-content: space-between
}

.box .content_TK {
    width: 380px;
    border-radius: 5px
}

.box .content_TK .loss-modal-header {
    line-height: 64px;
    font-size: 16px;
    padding: 0 20px;
    border-bottom: 1px solid #797b96
}

.box .content_TK .content-box {
    padding: 16px 20px 40px;
    max-height: 780px;
    overflow: hidden
}

.box .content_TK .content-box .row {
    margin-top: 10px
}

.box .content_TK .content-box .row p {
    font-size: 14px;
    margin-bottom: 10px
}

 ._select .el-input__inner, ._select .el-range-input, .box ._select .el-input-group__append {
    background-color: transparent;
    color: #000;
    border-color: #797b96
}

.el-button--primary {
    color: #fff;
    background-color: #409eff!important;
    border-color: #409eff!important
}

.box .infosty {
    width: 800px;
    overflow-y: auto
}

.bg-main {
    background-color: #fff
}

.box .infosty .titlesty {
    height: 64px;
    line-height: 64px;
    border-bottom: 1px solid #797b96;
    padding: 0 20px
}

.box .table-box {
    padding: 20px 20px 0
}

.box .el-select-dropdown {
    background-color: #282836;
    color: #000;
    margin: 0;
    border: 1px solid #797b96
}

.box .el-select-dropdown__item {
    color: #000
}

.box .el-select-dropdown__item:hover {
    color: #276dff;
    background-color: #393b4b
}

.el-select-dropdown__item.hover,.el-select-dropdown__item.selected {
    color: #000!important;
    background: #eaecef!important
}
</style>
  