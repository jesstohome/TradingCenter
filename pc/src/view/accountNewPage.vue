<template>
    <div>
        <indexHeader></indexHeader>
        <div class="accont_body">
            <div class="ft26 bold mb50">{{$t("accountNewPage.coin_trading")}}</div>
            <el-tabs v-model="activeName">
                <el-tab-pane :label='$t("accountNewPage.all_account_balances")' name="first">
                    <el-table style="width:1200px" class="dark-table table"  :data="asset_list">
                        <el-table-column
                            prop="currency_name"
                            :label='$t("accountNewPage.label_currency")'
                            style='background: "rgb(26, 27, 38)";
                            color: "rgb(153, 153, 153)";'
                            align="center"
                            >
                            <template slot-scope="scope">
                                <div class="curreny_name_img">
                                    <div style="text-align: right;">
                                        <img :src="require('@/assets/images/'+(scope.row.currency_name)+'.png')" style="width: 28px !important; height: 28px !important;">
                                    </div>
                                    <div style="text-align: left; font-size: 16px !important;">
                                        {{ scope.row.currency_name }}
                                    </div>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="change_balance"
                            :label='$t("accountNewPage.label_available")'
                            style='background: "rgb(26, 27, 38)";
                            color: "rgb(153, 153, 153)";'
                            align="center">
                            <template slot-scope="scope">
                                {{ scope.row.change_balance|| '0.00' | toFixeds }}
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="lock_change_balance"
                            :label='$t("accountNewPage.label_freeze")'
                            style='background: "rgb(26, 27, 38)";
                            color: "rgb(153, 153, 153)";'
                            align="center">
                            <template slot-scope="scope">
                                {{ scope.row.lock_change_balance|| '0.00' | toFixeds }}
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="usdt_price"
                            :label='$t("accountNewPage.label_convert_into")'
                            style='background: "rgb(26, 27, 38)";
                            color: "rgb(153, 153, 153)";'
                            align="center">
                            <template slot-scope="scope">
                                {{ scope.row.usdt_price*scope.row.change_balance|| '0.00' | toFixedTwo }}
                            </template>
                        </el-table-column>
                        <el-table-column
                            fixed="right"
                            :label='$t("accountNewPage.label_operate")'
                            width="100"
                            style='background: "rgb(26, 27, 38)";
                            color: "rgb(153, 153, 153)";'
                            align="center">
                            <template slot-scope="scope">
                                <el-button 
                                type="primary"
                                size="small"
                                style='background: "#276cff !important";color:#fff'
                                @click="handleClick(scope.row, scope.$index)">{{$t("accountNewPage.exchange")}}</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
            </el-tabs>
            <el-dialog
                :title="$t('accountNewPage.exchange')"
                :visible.sync="dialogVisible"
                width="30%"
                style="margin-top: 15vh;"
                :before-close="handleClose">
                <div class="dh-content">
                    <div class="dh-top">
                        <div class="dh-top-xs2">{{$t("accountNewPage.from")}}</div>
                        <div class="dh-top-xs2" style="padding-left: 5%;">{{$t("accountNewPage.reach")}}</div>
                    </div>
                    <div class="dh-c">
                        <div class="dh-top-xs3" style="width: 45%; text-align: left;">
                            <input disabled="disabled" :value="fromCurrency.currency_name" class="dh-input" style="background: rgb(245, 247, 250) !important; border-color: rgb(228, 231, 237) !important; color: rgb(192, 196, 204);">
                        </div>
                        <div class="dh-top-xs3" style="width: 10%; text-align: center;">
                            <img src="@/assets/images/zhuanhuan.png" class="zhuanhuans">
                        </div>
                        <div class="dh-top-xs3" style="width: 45%; text-align: left;">
                            <el-select class="select" v-model="toCurrencyName" @change="handleChange">
                                <el-option :value="item.currency_name" :key="index" :label="item.currency_name" v-for="(item,index) in to_list"></el-option>
                            </el-select>
                        </div>
                    </div>
                    <div class="dh-top">
                        <div class="dh-top-xs2">{{fromCurrency.currency_name+$t("accountNewPage.available_balance")}}</div>
                        <div class="dh-top-xs2" style="padding-left: 5%;">{{toCurrency.currency_name+$t("accountNewPage.available_balance")}}</div>
                    </div>
                    <div class="dh-c">
                        <div class="dh-top-xs3" style="width: 45%; text-align: left;">
                            <input disabled="disabled" v-model="balance" class="dh-input" style="background: rgb(245, 247, 250) !important; border-color: rgb(228, 231, 237) !important; color: rgb(192, 196, 204);">
                        </div>
                        <div class="dh-top-xs3" style="width: 45%; text-align: left; margin-left: 10%;">
                            <input disabled="disabled" v-model="to_balance" class="dh-input" style="background: rgb(245, 247, 250) !important; border-color: rgb(228, 231, 237) !important; color: rgb(192, 196, 204);">
                        </div>
                    </div>
                    <div class="dh-top">
                        <div class="dh-top-xs2">{{$t("accountNewPage.the_number_of_transfer_outs")}}</div>
                    </div>
                    <div class="dh-b-c">
                        <div class="dh-top-xs1" style="width: 100%; text-align: left; position: relative;">
                            <input class="dh-input" v-model="number" @input="fromNumberChange">
                            <span style="position: absolute; right: 0px; background-color: rgb(238, 238, 238); padding: 10px;">{{fromCurrency.currency_name}}</span>
                        </div>
                    </div>
                    <div class="dh-top">
                        <div class="dh-top-xs2">{{$t("accountNewPage.you_will_get")}}</div>
                    </div>
                    <div class="dh-b-c">
                        <div class="dh-top-xs1" style="width: 100%; text-align: left; position: relative;">
                            <input disabled="disabled" v-model="to" class="dh-input">
                            <span style="position: absolute; right: 0px; background-color: rgb(238, 238, 238); padding: 10px;">{{toCurrency.currency_name}}</span>
                        </div>
                    </div>
                    <div class="dh-top">
                        <div class="dh-top-xs2">{{$t("accountNewPage.premium")}}</div>
                        <div class="dh-top-xs2">{{handlingFee+' ' + fromCurrency.currency_name}}</div>
                    </div>
                    <div class="dh-top">
                        <div class="dh-top-xs2">{{$t("accountNewPage.exchange_rates")}}</div>
                        <div class="dh-top-xs2">{{fee.rate}}</div>
                    </div>
                </div>
                <div slot="footer" style="text-align: center;" class="dialog-footer">
                    <el-button @click="dialogVisibleYes" style="margin: 0px auto; background-color: rgb(39, 108, 255); border-color: rgb(39, 108, 255); color: rgb(255, 255, 255);">{{$t("tv.confirm")}}</el-button>
                </div>
            </el-dialog>
        </div>
        <indexFooter></indexFooter>
    </div>
  </template>
  <script>
  import indexHeader from '@/view/indexHeader';
  import indexFooter from "@/view/indexFooter";
  
  export default {
    name: 'accountNewPage',
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
        type: "",
        asset_list: [],
        to_list: [],
        token: "",
        activeName:"first",
        title: this.$t("accountNewPage.exchange"),
        dialogVisible: !1,
        fromCurrency: {
            id: 0
        },
        toCurrency: {
            id: 0
        },
        balance: 0,
        to_balance: 0,
        number: 0,
        fee: 0,
        to: 0,
        handlingFee: 0,
        toCurrencyName:''
      }
    },
    components: {
      indexHeader,
      indexFooter
    },
    created() {
        this.token = localStorage.getItem("token") || ""
    },
    mounted(){
        this.getdata()
    },
    methods:{
        handleChange(e){
            this.toCurrency = this.to_list.find(it => it.currency_name == this.toCurrencyName)
            this.changeList()
        },
        fromNumberChange(t) {
            console.log(1,t)
            const {balance: e, fee: a} = this
                , s = Number(t.target.value);
            if (s > Number(e.change_balance))
                return this.from = Number(e.change_balance),
                layer.msg(this.$t("accountNewPage.insufficient_balance")),
                !1;
            this.to = Number((s * a.rate).toFixed(10)),
            this.handlingFee = Number((s * a.fee).toFixed(10)),
            this.getFee()
        },
        changeList() {
            this.toCurrency.id != this.fromCurrency.id ? this.getFee() : layer.msg(this.$t("accountNewPage.cannot_be_the_same"))
        },
        dialogVisibleYes() {
            this.dialogVisible = !1,
            this.transfer()
        },
        handleClose() {
            this.dialogVisible = !1
        },
        handleClick(t, e) {
            var a = this;
            this.fromCurrency = t,
            this.toCurrency = this.to_list[e + 1],
            this.toCurrencyName = this.toCurrency.currency_name,
            this.balance = this.asset_list.find(t=>t.id == a.fromCurrency.id).change_balance,
            this.to_balance = this.asset_list.find(t=>t.id == a.toCurrency.id).change_balance,
            this.dialogVisible = !0,
            a.getFee()
        },
        transfer() {
            var t = this;
            this.$http({
                url: "/api/user/Transfer",
                method: "post",
                data: {
                    number: t.number,
                    from_currency_id: t.fromCurrency.currency,
                    to_currency_id: t.toCurrency.currency,
                    lang: window.localStorage.getItem("lang") || "en"
                },
                headers: {
                    Authorization: t.token
                }
            }).then(e=>{
                layer.msg(e.data.message),
                t.getdata()
            }
            ).catch(t=>{
                console.log(t)
            }
            )
        },
        getFee() {
            var t = this;
            this.$http({
                url: "/api/user/getTransferFee",
                method: "post",
                data: {
                    from_currency_id: t.fromCurrency.currency,
                    to_currency_id: t.toCurrency.currency,
                    lang: window.localStorage.getItem("lang") || "en"
                },
                headers: {
                    Authorization: t.token
                }
            }).then(e=>{
                let a = e.data.message;
                a.rate = parseFloat((Number(a.form_price) / Number(a.to_price)).toFixed(10)),
                t.fee = a,
                t.to = Number((t.number * a.rate).toFixed(10)),
                t.handlingFee = Number((t.number * a.fee).toFixed(10))
            }
            ).catch(t=>{
                console.log(t)
            }
            )
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
                if ("ok" == e.data.type) {
                    let a = e.data.message.change_wallet.usdt_totle + e.data.message.legal_wallet.usdt_totle + e.data.message.lever_wallet.usdt_totle + e.data.message.micro_wallet.usdt_totle;
                    localStorage.setItem("mytotal", a),
                    t.asset_list = [...e.data.message.change_wallet.balance],
                    t.to_list = [...e.data.message.change_wallet.balance]
                }
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
  .dh-content {
    width: 100%;
    height: auto;
    overflow: hidden;
    padding: 10px 0;
    margin: 0 auto;
}
  .zhuanhuans {
    width: 20px;
    height: 20px;
    margin: 0 auto;
    margin-top: 10px;
}
.dh-content .dh-top-xs3 {
    height: 100%;
    overflow: hidden;
    float: left;
}
.dh-content .dh-top {
    width: 100%;
    height: 30px;
    line-height: 30px;
    overflow: hidden;
}
.dh-content .dh-top-xs2 {
    width: 50%;
    height: 100%;
    line-height: 30px;
    overflow: hidden;
    float: left;
}

.dh-content .dh-c {
    width: 100%;
    height: auto;
    overflow: hidden;
}
.dh-content .dh-top-xs3 {
    height: 100%;
    overflow: hidden;
    float: left;
}
.dh-input{
    width: 100%;
    height: 40px;
    line-height: 40px;
    overflow: hidden;
    background: #fff!important;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    text-align: left;
    cursor: pointer;
}
.select {
    width: 100%;
    height: 40px;
    line-height: 40px;
    overflow: hidden;
    background: #fff!important;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: left;
    cursor: pointer;
}
input {
    border: 0;
    outline: 0;
    border-radius: 2px;
}
.dark-table td.el-table__cell {
    background-color: #2f303d;
    color: #fff;
    border-bottom: 6px solid #1a1b26;
}
.el-table--enable-row-transition .el-table__body td.el-table__cell {
    transition: background-color .25s ease;
}
 .table td {
    text-align: center!important;
}
.el-table .el-table__cell {
    padding: 12px 0;
    min-width: 0;
    box-sizing: border-box;
    text-overflow: ellipsis;
    vertical-align: middle;
    position: relative;
    text-align: left;
}
.curreny_name_img {
    width: 100%;
    display: flex;
    align-items: center;
}
.curreny_name_img>div {
    width: 50%;
}
.icon {
    width: 26px;
    height: 26px;
    background-size: 100% 100%;
    margin-right: 10px;
    margin-top: 3px;
    border-radius: 50%;
    position: relative!important;
    line-height: 48px;
    border-right: 1px solid #52688c;
    top: 0;
}
.accont_body {
    width: 1200px;
    margin: 0 auto;
    padding-top: 45px;
    color: #fff;
}
.tabs {
    width: 100%;
    margin: 0 auto 30px;
}
.el-tabs__item.is-active {
    color: #409eff !important;
}
.el-table thead {
    color: #fff;
    font-weight: 500;
}
.el-table tr {
    background-color: #1d2432 !important;
}
</style>
  