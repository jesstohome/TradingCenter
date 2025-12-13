<template>
    <div>
        <indexHeader></indexHeader>
        <div class="user-page-wrap">
            <div class="user-main-wrap ovf-hidden newAccount">
                <div class="content-wrap float-left noLeft">
                    <div class="security-container">
                        <div class="banner">
                            <div class="banner-content">
                                <p>{{$t("transferSet.payment_settings")}}</p>
                            </div>
                        </div>
                        <div class="security-content">
                            <div class="device-info base" style="min-height: 463px;">
                                <div class="device-info base-container">
                                    <div class="title">
                                        <p> {{$t("accountSet.withdrawal_address")}} </p>
                                        <div style="display: flex; justify-content: space-between; padding-right: 40px;">
                                            <p style="color: rgb(187, 187, 187); font-size: 14px; font-weight: 100;"> {{$t("transferSet.add_address")}} </p>
                                            <div style="text-align: right; cursor: pointer;" @click="addTwoDialog">+{{$t("transferSet.add")}}</div>
                                        </div>
                                    </div>
                                    <div class="base-content" style="padding-bottom: 80px;">
                                        <div style="margin-top: 20px;" v-for="(item,index) in addressList" :key="index">
                                            <div class="_flex-cen" style="justify-content:space-between;display:flex;">
                                                <div>
                                                    <img class="el-image__inner" style="width:28px !important;height:28px !important" :src="item.logo">
                                                    <span class="list-name _text-overflow ml5">
                                                        {{item.name}}
                                                        <span v-if="item.type">-{{item.type}}</span>
                                                    </span>
                                                </div>
                                                <div>
                                                    <span>{{item.address}}</span>
                                                </div>
                                                <div style="cursor: pointer;" @click="editTwoDialog(item)">{{$t("transferSet.edit")}}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="device-info base" style="min-height: 463px;">
                                <div class="device-info base-container">
                                    <div class="title">
                                        <p>{{$t("transferSet.bank_card_binding")}}</p>
                                        <div style="display: flex; justify-content: space-between; padding-right: 40px;">
                                            <p style="color: rgb(187, 187, 187); font-size: 14px; font-weight: 100;">{{$t("transferSet.bank_card_binding_tip")}}</p>
                                            <div style="text-align: right; cursor: pointer;" v-if="null == bankInfo.real_name || '' == bankInfo.real_name" @click="addOneDialog">+{{$t("transferSet.add")}}</div>
                                            <div style="text-align: right; cursor: pointer;" v-else @click="editOneDialog">+{{$t("transferSet.update")}}</div>
                                        </div>
                                    </div>
                                    <div class="base-content" style="padding-bottom: 80px;">
                                        <div style="margin-top: 20px;">
                                            <div class="_flex-cen" style="justify-content: space-between; display: flex;">
                                                <div style="display: flex; align-items: center;">
                                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABqElEQVQ4T62VvU/CUBTFz31Aa4yDRo2jzkSkJo4uLhA3Jwc/Jow6u4hOTIKDf4CJmBjRwUUnSXVwMHEyAQdJ3JwlRgcHKbTXvGobKMhHoOPrfb/ec895r4QGT/AuMeCrqEtk0YIAzzAwKssIKFqgRxZ8ZfpL54W5xJd3O3kXpvW9GIP2GRhu9DFnjYB3Am/norvp6joXGLxIKMpgX5qZV5qB6joiyhif37HCYsL4U/Fbot2kTjuFud0SZfKR+KoLlDIt0FEnnXlrBXhNyidpgGKor87MfMSblkkv7cA5gDEyccxAv5ypoZQmKHSbXBcWDh3AU3SnzqhmcE1P5hkIyxpLYIOm9NQ1geer3DupARDJaFT+h/IyM0bkewZlSdOTb07O2pHZIkpFCutJrsmRUhrqBMyGeg9g0lXoBXYzQzs2XsndAOXRrDOlFVDTU2e2PMKHwuUDA/5Lx2XblLrYROICRDVzrZ5pOJuatR0VVrmiGM+BsvoARsiNjTfYENYWVUSuLWMCPM6mfcL8brDlxp4ePaeTnl4OEtrz68vptGcXbLUJ3fwCfgBTWdmDZzGpQAAAAABJRU5ErkJggg==" alt="" class="list-img"> 
                                                    {{ bankInfo_show.iban }} 
                                                </div>
                                                <span class="list-name _text-overflow">{{bankInfo_show.real_name}}</span>
                                                <span>{{bankInfo_show.bank_address}}</span>
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
                :title='twoTitle'
                :visible.sync="showTwoFlag"
                width="600px"
                :before-close="handleClose">
                <el-form class="ruleform pl10 pr10 el-form--label-top">
                    <el-form-item required :label='$t("leverMarket.currency")'>
                        <el-select v-model="addressInfo.name" :placeholder='$t("transferSet.please_select_currency")' style="width: 100%;">
                            <el-option label="USDT" value="USDT"></el-option>
                            <el-option label="BTC" value="BTC"></el-option>
                            <el-option label="ETH" value="ETH"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item required :label='$t("transferSet.chain_type")' v-if='"USDT" == addressInfo.name'>
                        <el-radio-group v-model="addressInfo.type">
                            <el-radio label="TRC20">TRC20</el-radio>
                            <el-radio label="ERC20" style="margin-left:10px">ERC20</el-radio>
                            <el-radio label="BEP20" style="margin-left:10px">BEP20</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item required :label='$t("transferSet.chain_type")' v-if='"ETH" == addressInfo.name'>
                        <el-radio-group v-model="addressInfo.type">
                            <el-radio label="ERC20">ERC20</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item required :label='$t("transferSet.chain_type")' v-if='"BTC" == addressInfo.name'>
                        <el-radio-group v-model="addressInfo.type">
                            <el-radio label="Bitcoin">Bitcoin</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item required :label='$t("accountSet.withdrawal_address")'>
                        <el-input class="_from-white" v-model="addressInfo.address" :placeholder='$t("transferSet.input_withdrawal_address")'>
                        </el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button class="butbox" type="primary" @click="addressSave">{{$t("earn.confirm_confirm_button")}}</el-button>
                </div>
            </el-dialog>
            <el-dialog
                :title='oneTitle'
                :visible.sync="showOneFlag"
                width="600px"
                :before-close="handleClose">
                <el-form class="ruleform pl10 pr10 el-form--label-top">
                    <el-form-item required :label='$t("transferSet.account_name")'>
                        <el-input class="_from-white" v-model="bankInfo.real_name" :placeholder='$t("transferSet.please_enter_account_name")'>
                        </el-input>
                    </el-form-item>
                    <el-form-item required :label='$t("transferSet.bank_name")'>
                        <el-input class="_from-white" v-model="bankInfo.bank_name" :placeholder='$t("transferSet.please_enter_the_bank_name")'>
                        </el-input>
                    </el-form-item>
                    <el-form-item required :label='$t("transferSet.beneficiary_country")'>
                        <el-input class="_from-white" v-model="bankInfo.bank_dizhi" :placeholder='$t("transferSet.input_beneficiary_country")'>
                        </el-input>
                    </el-form-item>
                    <el-form-item required label='IBAN'>
                        <el-input class="_from-white" v-model="bankInfo.iban" :placeholder='$t("transferSet.input_iban")'>
                        </el-input>
                    </el-form-item>
                    <el-form-item required :label='$t("transferSet.bank_code")+"（BIC/SWIFT)"'>
                        <el-input class="_from-white" v-model="bankInfo.bank_code" :placeholder='$t("transferSet.input_bank_code")'>
                        </el-input>
                    </el-form-item>
                    <el-form-item required :label='$t("transferSet.bank_address")'>
                        <el-input class="_from-white" v-model="bankInfo.bank_address" :placeholder='$t("transferSet.bank_address")'>
                        </el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button class="butbox" type="primary" @click="submitBank">{{$t("earn.confirm_confirm_button")}}</el-button>
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
    name: 'transferSet',
    data() {
      return {
        active: 2,
        bankCode: "",
        oneTitle: "",
        twoTitle: "",
        threeTitle: "",
        radio1: "TRC20",
        curreny: "",
        outWay: "",
        showOneFlag: !1,
        showTwoFlag: !1,
        showThreeFlag: !1,
        fiat: "",
        defaultCurrency: !1,
        bankInfo_show: {
            real_name: "",
            bank_name: "",
            bank_dizhi: "",
            iban: "",
            bank_code: "",
            bank_address: ""
        },
        bankInfo: {
            real_name: "",
            bank_name: "",
            bank_dizhi: "",
            iban: "",
            bank_code: "",
            bank_address: ""
        },
        addressList: [],
        addressInfo: {
            currency: "",
            name: "",
            address: "",
            qrcode: "",
            type: "TRC20"
        }
      }
    },
    components: {
      indexHeader,
      indexFooter
    },
    created() {
        this.fiat = JSON.parse(localStorage.getItem("fiat")) || {
            currency_code: "USD",
            rate: 1,
            saveTime: 0
        },
        this.getAddressList(),
        this.getBankInfo()
    },
    mounted(){
    },
    methods:{
        addressSave() {
            if (this.addressInfo.name.length <= 0)
                return layer.msg(this.$t("transferSet.msg_1")),
                !1;
            if (this.addressInfo.type.length <= 0)
                return layer.msg(this.$t("transferSet.msg_2")),
                !1;
            if (this.addressInfo.address.length <= 0)
                return layer.msg(this.$t("transferSet.msg_3")),
                !1;
            var t = this;
            "USDT" == t.addressInfo.name && (t.addressInfo.currency = 3),
            "BTC" == t.addressInfo.name && (t.addressInfo.currency = 1),
            "ETH" == t.addressInfo.name && (t.addressInfo.currency = 2),
            t.addressInfo.lang = window.localStorage.getItem("lang") || "en",
            this.$http({
                url: "/api/user/wallet/save",
                method: "post",
                data: t.addressInfo,
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            }).then(e=>{
                layer.msg(e.data.message),
                t.handleClose(),
                t.addressInfo = {
                    currency: "",
                    name: "",
                    address: "",
                    qrcode: "",
                    type: "TRC20"
                },
                t.getAddressList()
            }
            ).catch(t=>{
                console.log(t)
            }
            )
        },
        getAddressList() {
            var t = this;
            this.$http({
                url: "/api/user/wallet/list?page=1&limit=99999&lang=" + window.localStorage.getItem("lang") || !1,
                method: "get",
                data: {},
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            }).then(e=>{
                t.addressList = e.data.message.data
            }
            ).catch(t=>{
                console.log(t)
            }
            )
        },
        submitBank() {
            if (this.bankInfo.real_name.length <= 0)
                return layer.msg(this.$t("transferSet.msg_4")),
                !1;
            if (this.bankInfo.bank_name.length <= 0)
                return layer.msg(this.$t("transferSet.msg_5")),
                !1;
            if (this.bankInfo.bank_dizhi.length <= 0)
                return layer.msg(this.$t("transferSet.msg_6")),
                !1;
            if (this.bankInfo.iban.length <= 0)
                return layer.msg(this.$t("transferSet.msg_7")),
                !1;
            if (this.bankInfo.bank_code.length <= 0)
                return layer.msg(this.$t("transferSet.msg_8")),
                !1;
            if (this.bankInfo.bank_address.length <= 0)
                return layer.msg(this.$t("transferSet.msg_9")),
                !1;
            var t = this;
            t.bankInfo.lang = window.localStorage.getItem("lang") || "en",
            this.$http({
                url: "/api/user/cash_save",
                method: "post",
                data: t.bankInfo,
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            }).then(e=>{
                layer.msg(e.data.message),
                t.handleClose(),
                t.getBankInfo()
            }
            ).catch(t=>{
                console.log(t)
            }
            )
        },
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
                t.bankInfo = e.data.message,
                t.bankInfo_show = e.data.message
            }
            ).catch(t=>{
                console.log(t)
            }
            )
        },
        saveFiat(t) {
            let e = this.getLocalStorage("fiats");
            this.fiat = e[t],
            window.localStorage.setItem("fiat", JSON.stringify(e[t])),
            this.defaultCurrency = !1
        },
        getLocalStorage(t) {
            return JSON.parse(localStorage.getItem(t))
        },
        addOneDialog() {
            this.oneTitle = this.$t("transferSet.msg_10"),
            this.showOneFlag = !0
        },
        editOneDialog() {
            this.oneTitle = this.$t("transferSet.msg_11"),
            this.showOneFlag = !0
        },
        editTwoDialog(t) {
            this.twoTitle = this.$t("transferSet.msg_12"),
            this.showTwoFlag = !0,
            this.addressInfo = this.addressList[t]
        },
        editThreeDialog() {
            this.threeTitle = this.$t("transferSet.msg_13"),
            this.showThreeFlag = !0
        },
        oneDel() {
            this.$confirm(this.$t("transferSet.msg_14"), this.$t("earn.confirm_title"), {
                confirmButtonText: this.$t("earn.confirm_confirm_button"),
                cancelButtonText: this.$t("earn.confirm_cancel_button"),
                type: "warning"
            }).then(()=>{}
            ).catch(()=>{}
            )
        },
        addTwoDialog() {
            this.oneTitle = this.$t("earn.msg_15"),
            this.showTwoFlag = !0
        },
        addThreeDialog() {
            this.threeTitle = this.$t("earn.msg_10"),
            this.showThreeFlag = !0
        },
        handleClose() {
            this.showOneFlag = !1,
            this.showTwoFlag = !1,
            this.showThreeFlag = !1,
            this.defaultCurrency = !1
        },
        toGo(t) {
            this.active = t,
            1 == t ? this.getBankInfo() : this.getAddressList()
        }
    }
  }
  </script>
  <style lang="scss" scoped>
  
.el-select-dropdown__item.hover,.el-select-dropdown__item.selected,.el-select-dropdown__item:hover {
    background: #f3f3f4!important
}

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
  