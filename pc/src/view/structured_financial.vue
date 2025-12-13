<template>
    <div style="background-color: rgb(21, 25, 38);">
        <indexHeader></indexHeader>
        <div class="sc-lbxAil edrbat">
            <div class="sc-efBctP ekuBvn">
                <div class="container">
                    <div class="title">{{$t("structuredFinancial.title")}}</div>
                    <div class="desc">{{$t("structuredFinancial.desc")}}</div>
                </div>
                <div class="sc-cTQhss loMyJZ" style="padding: 0px 300px;">
                    <div class="nav-content">
                        <div class="tabs">
                            <div class="sc-jOrMOR lcEsbF">{{$t("structuredFinancial.nav_content")}}</div>
                        </div>
                        <div class="more">
                            <a href="#/record" class="item record_new" data-click-event="sf_my_investment_click" data-collect-params="{}">
                                <span id="show1">
                                    <svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-hAZoDl eayMnQ iconfont-symbol">
                                        <rect x="8" y="4" width="32" height="40" rx="2" fill="none" stroke="#fff" stroke-width="4" stroke-linejoin="round"></rect>
                                        <path d="M21 14H33" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M21 24H33" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M21 34H33" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15 16C16.1046 16 17 15.1046 17 14C17 12.8954 16.1046 12 15 12C13.8954 12 13 12.8954 13 14C13 15.1046 13.8954 16 15 16Z" fill="#fff"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15 26C16.1046 26 17 25.1046 17 24C17 22.8954 16.1046 22 15 22C13.8954 22 13 22.8954 13 24C13 25.1046 13.8954 26 15 26Z" fill="#fff"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15 36C16.1046 36 17 35.1046 17 34C17 32.8954 16.1046 32 15 32C13.8954 32 13 32.8954 13 34C13 35.1046 13.8954 36 15 36Z" fill="#fff"></path>
                                    </svg>
                                </span>
                                <!-- <span id="show2">
                                    <svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-hAZoDl eayMnQ iconfont-symbol">
                                        <rect x="8" y="4" width="32" height="40" rx="2" fill="none" stroke="#276dff" stroke-width="4" stroke-linejoin="round"></rect>
                                        <path d="M21 14H33" stroke="#276dff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M21 24H33" stroke="#276dff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M21 34H33" stroke="#276dff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15 16C16.1046 16 17 15.1046 17 14C17 12.8954 16.1046 12 15 12C13.8954 12 13 12.8954 13 14C13 15.1046 13.8954 16 15 16Z" fill="#276dff"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15 26C16.1046 26 17 25.1046 17 24C17 22.8954 16.1046 22 15 22C13.8954 22 13 22.8954 13 24C13 25.1046 13.8954 26 15 26Z" fill="#276dff"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15 36C16.1046 36 17 35.1046 17 34C17 32.8954 16.1046 32 15 32C13.8954 32 13 32.8954 13 34C13 35.1046 13.8954 36 15 36Z" fill="#276dff"></path>
                                    </svg>
                                </span> -->
                                <span>{{$t("structuredFinancial.router_link_span")}}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sc-bZnhIo eZYGze">
                <div class="sc-ksZaOG ibFHYE" style="width: 100%;">
                    <div class="sc-bczRLJ iAVylF">{{$t("structuredFinancial.total_product")}} </div>
                    <div class="tableWrapper">
                        <div class="sc-ksZaOG">
                            <el-table style="width:1200px" class="dark-table table"  :data="list">
                                <el-table-column
                                    :label='$t("structuredFinancial.label_product")'
                                    align="center"
                                    >
                                    <template slot-scope="scope">
                                        <div class="sc-kgflAQ iZRUke" style="justify-content: center;">
                                            <img src="@/assets/images/USDT.png" alt="">
                                            <span style="margin-right: 8px; max-width: 67%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                                                {{ scope.row.name }}
                                            </span>
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    prop="nh"
                                    sortable
                                    :label='$t("structuredFinancial.label_reference_annualization")'
                                    align="center">
                                    <template slot-scope="scope">
                                        <div class="sc-fEOsli sc-iAvgwm iBrHKJ cUwTNn">
                                            {{ scope.row.rate }}%
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    prop="holdingDays"
                                    :label='$t("structuredFinancial.label_investment_term")'
                                    align="center">
                                </el-table-column>
                                <el-table-column
                                    prop="remaining_number"
                                    :label='$t("structuredFinancial.label_residual_share")'
                                    align="center">
                                </el-table-column>
                                <el-table-column
                                    fixed="right"
                                    :label='$t("structuredFinancial.label_subscription")'
                                    align="center">
                                    <template slot-scope="scope">
                                        <div class="sc-idiyUo hcinTc" v-if="scope.row.buyStatus" @click="submitProduct(scope.row)">
                                            <div class="in-process">
                                                {{ $t("structuredFinancial.immediate_application") }}
                                            </div>
                                        </div>
                                        <div class="sc-idiyUo hcinTc" v-else>
                                            <div class="in-process">
                                                {{ $t("structuredFinancial.have_ended") }}
                                            </div>
                                        </div>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </div>
                        <div class="sc-iTONeN gZaWEL">
                            {{$t("structuredFinancial.expansion")}} 
                            <svg aria-hidden="true" class="sc-hAZoDl eayMnQ iconfont-symbol" style="margin-left: 6px; font-size: 16px;">
                                <use xlink:href="#icon-a-16px-jiantou-xia"></use>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sc-bZnhIo">
                <div class="sc-bczRLJ iAVylF">{{$t("structuredFinancial.sc_bczrlj")}}</div>
                <div class="sc-hTtwUo bIwRIe">
                    <div class="production-item">
                        <img src="@/assets/images/high_yield.png" alt="">
                        <div class="production-item-title">{{$t("structuredFinancial.proc_item_1")}}</div>
                        <div class="production-item-desc">{{$t("structuredFinancial.proc_item_desc_1")}}</div>
                    </div>
                    <div class="production-item">
                        <img src="@/assets/images/variety.png" alt="">
                        <div class="production-item-title">{{$t("structuredFinancial.proc_item_2")}}</div>
                        <div class="production-item-desc">{{$t("structuredFinancial.proc_item_desc_2")}}</div>
                    </div>
                    <div class="production-item">
                        <img src="@/assets/images/safe.png" alt="">
                        <div class="production-item-title">{{$t("structuredFinancial.proc_item_3")}}</div>
                        <div class="production-item-desc">{{$t("structuredFinancial.proc_item_desc_3")}}</div>
                    </div>
                </div>
            </div>
            <div class="sc-dPyBCJ">
                <div class="sc-bZnhIo">
                    <div class="sc-bczRLJ iAVylF" style="margin: 0px 0px 72px;">{{$t("structuredFinancial.sc_dpybcj_title")}} </div>
                    <div class="sc-bBXxYQ fTCStx">
                        <div class="process-item">
                            <div class="imgWrapper">
                                <img src="@/assets/images/process1.svg" alt="">
                            </div>
                            <div class="process-item-title">{{$t("structuredFinancial.process_item_title_1")}}</div>
                        </div>
                        <div class="process-item">
                            <div class="imgWrapper">
                                <img src="@/assets/images/process2.svg" alt="">
                            </div>
                            <div class="process-item-title">{{$t("structuredFinancial.process_item_title_2")}}</div>
                        </div>
                        <div class="process-item">
                            <div class="imgWrapper">
                                <img src="@/assets/images/process3.svg" alt="">
                            </div>
                            <div class="process-item-title">{{$t("structuredFinancial.process_item_title_3")}}</div>
                        </div>
                        <div class="process-item">
                            <div class="imgWrapper">
                                <img src="@/assets/images/process4.svg" alt="">
                            </div>
                            <div class="process-item-title">{{$t("structuredFinancial.process_item_title_4")}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sc-bZnhIo" style="margin-top: 140px;">
                <div class="sc-bczRLJ iAVylF">{{$t("structuredFinancial.q_a")}}</div>
                <div>
                    <div class="sc-cOFTSb cyHSeq">
                        <div class="sc-BeQoi jgUOab" @click="tip1">
                            {{ $t('structuredFinancial.tip1') }}
                            <svg v-if="tip1Flag" width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-hAZoDl eayMnQ iconfont-symbol">
                                <path d="M36 18L24 30L12 18" stroke="#276dff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            <svg v-else width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-hAZoDl eayMnQ iconfont-symbol">
                                <path d="M36 18L24 30L12 18" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </div>
                        <div class="sc-kgUAyh goIAUN" v-if="tip1Flag">
                            <div>
                                {{$t("structuredFinancial.tip1flag")}}
                            </div>
                        </div>
                    </div>
                    <div class="sc-cOFTSb cyHSeq">
                        <div class="sc-BeQoi jgUOab" @click="tip2">
                            {{ $t('structuredFinancial.tip2') }}
                            <svg v-if="tip2Flag" width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-hAZoDl eayMnQ iconfont-symbol">
                                <path d="M36 18L24 30L12 18" stroke="#276dff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            <svg v-else width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-hAZoDl eayMnQ iconfont-symbol">
                                <path d="M36 18L24 30L12 18" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </div>
                        <div class="sc-kgUAyh goIAUN" v-if="tip2Flag">
                            <div>
                                {{$t("structuredFinancial.tip2flag")}}
                            </div>
                        </div>
                    </div>
                    <div class="sc-cOFTSb cyHSeq">
                        <div class="sc-BeQoi jgUOab" @click="tip3">
                            {{ $t('structuredFinancial.tip3') }}
                            <svg v-if="tip3Flag" width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-hAZoDl eayMnQ iconfont-symbol">
                                <path d="M36 18L24 30L12 18" stroke="#276dff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            <svg v-else width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-hAZoDl eayMnQ iconfont-symbol">
                                <path d="M36 18L24 30L12 18" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </div>
                        <div class="sc-kgUAyh goIAUN" v-if="tip3Flag">
                            <div>
                                {{$t("structuredFinancial.tip3flag")}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <el-dialog
            :title="$t('structuredFinancial.subscription_information')"
            :visible.sync="rengouFlag"
            width="400px"
            :before-close="handleClose">
            <div slot="footer" style="text-align: center;" class="butbox mt30">
                <el-button @click="commonSubmit">{{$t("structuredFinancial.buy_button")}}</el-button>
            </div>
        </el-dialog>
        <indexFooter></indexFooter>
    </div>
  </template>
  <script>
  import indexHeader from '@/view/indexHeader';
  import indexFooter from "@/view/indexFooter";
  
  export default {
    name: 'structured_financial',
    data() {
        return {
            tip1Flag: !1,
            tip2Flag: !1,
            tip3Flag: !1,
            list: [],
            rengouFlag: !1,
            product: {},
            close: 0,
            expectedProfits: 0,
            number: null,
            activeNames:[]
        }
    },
    components: {
      indexHeader,
      indexFooter
    },
    created() {
        this.token = localStorage.getItem("token") || ""
    },
    mounted() {
        this.getListData();
        var t = this;
        t.sockets.subscribe("daymarket", e=>{
            "daymarket" == e.type && e.currency_name == t.product.currency_name && (t.close = e.close)
        }
        )
    },
    methods:{
        commonSubmit() {
            var t = this;
            this.$http({
                url: "/api/dual/buyDual",
                method: "POST",
                data: {
                    lang: window.localStorage.getItem("lang") || "en",
                    id: t.product.id,
                    num: t.number
                },
                headers: {
                    Authorization: localStorage.getItem("token") || ""
                }
            }).then(e=>{
                layer.msg(e.data.message),
                t.getListData(),
                t.handleClose()
            }
            )
        },
        calcIncome(t) {
            const e = t.target.value
                , {close: a, product: s} = this
                , i = Date.parse(new Date)
                , n = this.timeFormat(i, "yyyy-mm-dd")
                , r = this.datedifference(s.end_time, n)
                , o = Number(s.rate) / 100
                , {exercise_price: c} = s;
            "call" == s.type ? this.expectedProfits = a <= c ? e * (1 + o / 365 * r) : e * Number(c) * (1 + o / 365 * r) : "put" == s.type && (this.expectedProfits = a <= c ? e / Number(c) * (1 + o / 365 * r) : e * (1 + o / 365 * r)),
            this.expectedProfits = a <= c ? this.expectedProfits.toFixed(4) + s.currency_name : this.expectedProfits.toFixed(4) + "USDT"
        },
        submitProduct(t) {
            this.$router.push({
                name: "structured_financial_detail",
                params: {
                    project: t
                }
            })
        },
        handleClose() {
            this.rengouFlag = !1
        },
        getListData() {
            var t = this;
            this.$http({
                url: "api/dual/index?type=call&lang=" + window.localStorage.getItem("lang") || !1,
                method: "GET",
                data: {
                    lang: window.localStorage.getItem("lang") || "en"
                },
                headers: {
                    Authorization: t.token
                }
            }).then(t=>{
                let e = t.data.message.dual_currencys || [];
                this.list = e.map(t=>{
                    t.progress = Number((Number(t.purchased_number) / Number(t.total_number) * 100).toFixed(2)),
                    t.holdingDays = this.datedifference(t.end_time, t.start_time);
                    const e = Date.parse(new Date);
                    return t.status = Number(t.status),
                    t.remainDays = this.datedifference(t.end_time, this.timeFormat(e, "yyyy-mm-dd")),
                    t.buyStatus = 1,
                    (t.remainDays <= 0 || !t.status) && (t.buyStatus = 0),
                    t
                }
                )
            }
            )
        },
        datedifference(t, e) {
            var a, s;
            return e = Date.parse(e),
            t = Date.parse(t),
            a = t - e,
            s = Math.floor(a / 864e5),
            s
        },
        timeFormat(t=null, e="yyyy-mm-dd") {
            t || (t = Number(new Date)),
            10 == t.toString().length && (t *= 1e3);
            let a, s = new Date(t), i = {
                "y+": s.getFullYear().toString(),
                "m+": (s.getMonth() + 1).toString(),
                "d+": s.getDate().toString(),
                "h+": s.getHours().toString(),
                "M+": s.getMinutes().toString(),
                "s+": s.getSeconds().toString()
            };
            for (let n in i)
                a = new RegExp("(" + n + ")").exec(e),
                a && (e = e.replace(a[1], 1 == a[1].length ? i[n] : i[n].padStart(a[1].length, "0")));
            return e
        },
        tip1() {
            this.tip1Flag = !this.tip1Flag
        },
        tip2() {
            this.tip2Flag = !this.tip2Flag
        },
        tip3() {
            this.tip3Flag = !this.tip3Flag
        },
        goBack() {
            window.history.go(-1)
        }
    }
  }
  </script>
  <style lang="scss" scoped>
.edrbat {
    background-color: #151926;
    padding-bottom: 140px;
}
.ekuBvn {
    width: 100%;
    height: 392px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    background: url("../assets/images/structured_finance_bg_dark.jpg") 0 0/cover no-repeat;
}
.ekuBvn>.container {
    width: 100%;
    padding: 0 300px;
    margin-top: 150px;
    line-height: 1;
}
.structured_financial div, .structured_financial section {
    box-sizing: border-box;
}
.ekuBvn>.container>.title {
    font-size: 52px;
    font-weight: 500;
    font-family: Gate_Sans Medium;
    color: #fff;
    line-height: 50px;
}
.ekuBvn>.container>.desc {
    margin-top: 24px;
    width: 800px;
    font-size: 16px;
    color: #989fb3;
}
.loMyJZ {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 64px;
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    font-family: Gate_Sans Medium;
    font-weight: 500;
    font-size: 16px;
    color: #fff;
    background-color: rgba(230,233,242,.06);
    border-top: 1px solid rgba(230,233,242,.12);
}
.loMyJZ .nav-content {
    width: 1440px;
    height: 100%;
    line-height: 64px;
    display: flex;
    justify-content: space-between;
}
.loMyJZ .tabs {
    display: flex;
}
.structured_financial div, .structured_financial section {
    box-sizing: border-box;
}
.lcEsbF {
    position: relative;
    margin-right: 32px;
    border-bottom: 4px solid #17e6a1;
    cursor: pointer;
    z-index: 99;
}
.loMyJZ .more {
    font-size: 16px;
    display: flex;
    align-items: center;
}
.loMyJZ .more .item {
    cursor: pointer;
    transition: color .3s ease-in-out 0s;
    display: flex;
    align-items: center;
    -moz-column-gap: 4px;
    column-gap: 4px;
}
.sc-bZnhIo {
    padding: 0 300px;
}
.ibFHYE {
    margin: 0 auto;
    width: 1440px;
}
.iAVylF {
    margin: 72px 0 0;
    font-size: 40px;
    font-family: Gate_Sans Medium;
    font-weight: 500;
    color: #fff;
}
.tableWrapper {
    font-family: Gate_Sans Medium;
    font-weight: 500;
}
.el-table--fit {
    border-right: 0;
    border-bottom: 0;
}
.el-table {
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    flex: 1;
    width: 100%;
    max-width: 100%;
    font-size: 14px;
    color: #fff;
}

.dark-table,.dark-table .el-table tr,.el-table__row{
    background: #0f1526 !important;
    color: #fff;
}
.el-table th.el-table__cell>.cell {
    display: inline-block;
    box-sizing: border-box;
    position: relative;
    vertical-align: middle;
    padding-left: 10px;
    padding-right: 10px;
    width: 100%;
}
.eZYGze .tr, .iZRUke {
    display: flex;
    align-items: center;
}
.iZRUke>img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    margin-right: 8px;
}
.iZRUke>span {
    display: inline-block;
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
}
.iBrHKJ {
    display: inline-block;
    font-size: 16px;
    color: #fff;
    line-height: 22px;
}
.cUwTNn {
    font-size: 20px;
    color: #e62323;
}
.hcinTc .down-btn, .hcinTc .in-process, .hcinTc .pending-btn {
    //color: #fff;
    border: 2px solid #2354e6;
    border-radius: 4px;
    height: 32px;
    padding: 0 16px;
    display: inline-flex;
    white-space: nowrap;
    line-height: 32px;
    text-align: center;
    cursor: pointer;
}
.gZaWEL {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #2354e6;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    margin-top: 24px;
    font-size: 16px;
    font-family: Gate_Sans Medium;
    font-weight: 500;
}
.eayMnQ {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    overflow: hidden;
}
.sc-bZnhIo {
    padding: 0 300px;
}
.iAVylF {
    margin: 72px 0 0;
    font-size: 40px;
    font-family: Gate_Sans Medium;
    font-weight: 500;
    color: #fff;
}
.bIwRIe {
    display: flex;
    justify-content: space-between;
    color: #fff;
    margin-bottom: 180px;
    -moz-column-gap: 24px;
    column-gap: 24px;
}
.bIwRIe .production-item {
    flex: 1 1 0%;
    display: flex;
    align-items: center;
    flex-direction: column;
}
.bIwRIe img {
    height: 140px;
    width: 140px;
    margin-bottom: 64px;
}
.bIwRIe .production-item-title {
    font-family: Gate_Sans Medium;
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 16px;
}
.bIwRIe .production-item-desc {
    font-size: 16px;
}
.iAVylF {
    margin: 72px 0 0;
    font-size: 40px;
    font-family: Gate_Sans Medium;
    font-weight: 500;
    color: #fff;
}
.fTCStx {
    display: flex;
    justify-content: space-between;
    color: #fff;
}
.fTCStx .process-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 342px;
}
.fTCStx .imgWrapper {
    position: relative;
    margin-bottom: 24px;
}
.fTCStx img {
    height: 72px;
    width: 72px;
}
.fTCStx .process-item-title {
    font-family: Gate_Sans Medium;
    font-weight: 500;
    font-size: 20px;
    text-align: center;
}
.fTCStx .process-item+.process-item:after {
    content: "";
    background-image: url("../assets/images/arrow_dark.svg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 178px;
    height: 11px;
    position: absolute;
    top: 30.5px;
    right: calc(100% - 89px);
}
.cyHSeq {
    cursor: pointer;
    border-bottom: 1px solid #0f1526;
}
.jgUOab {
    display: flex;
    padding: 36px 0;
    justify-content: space-between;
    align-items: center;
    font-size: 24px;
    font-family: Gate_Sans Medium;
    font-weight: 500;
    color: #fff;
}
.goIAUN {
    font-size: 16px;
    color: #989fb3;
    line-height: 1.5;
    margin-bottom: 30px;
}
.cyHSeq {
    cursor: pointer;
    border-bottom: 1px solid #0f1526;
}
</style>
  