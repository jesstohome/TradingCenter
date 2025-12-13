<template>
    <div class="_page-main__content1" style="height: 100%;">
        <div class="_page-title _flex-shrink" style="height: 100%;">
            <div class="_page-title _flex-shrink" style="padding-bottom: 0px;">
                {{ $t("uorder.order_center") }}
            </div>
            <div class="_page-tab _flex-shrink">
                <a href="javascript:void(0)" class="_page-tab-li" @click="active=0,list_content=[]" :class="active == 0?'router-link-exact-active router-link-active':''">{{$t("uorder.spot_transaction_order")}}</a>
                <a href="javascript:void(0)" class="_page-tab-li" @click="active=1,list_content=[]" :class="active == 1?'router-link-exact-active router-link-active':''">{{$t("uorder.u_standard_contract_order")}}</a>
                <a href="javascript:void(0)" class="_page-tab-li" @click="active=2,list_content=[]" :class="active == 2?'router-link-exact-active router-link-active':''">{{$t("uorder.option_order")}}</a>
                <a href="javascript:void(0)" class="_page-tab-li" @click="active=5,list_content=[]" :class="active == 5?'router-link-exact-active router-link-active':''">Staking</a>
                <a href="javascript:void(0)" class="_page-tab-li" @click="active=3,list_content=[]" :class="active == 3?'router-link-exact-active router-link-active':''">{{$t("uorder.currency_wealth_management_order")}}</a>
                <a href="javascript:void(0)" class="_page-tab-li" @click="active=4,list_content=[]" :class="active == 4?'router-link-exact-active router-link-active':''">{{$t("uorder.sgd_subscription")}}</a>
            </div>
            <div class="_page-main__content__main" style="height: 100%;">
                <ul class="_flex-shrink _page-tabblock padding-top10 padding-bottom10" v-if="0 == active">
                    <li class="_page-tabblock-li " :class="deal_index == 0?'tabblock-active':''" @click="dealList(0)"> {{$t("leverTransactions.nowentrust")}} </li>
                    <li class="_page-tabblock-li" :class="deal_index == 1?'tabblock-active':''" @click="dealList(1)"> {{$t("dealTv.hdeal")}} </li>
                </ul>
                <ul class="_flex-shrink _page-tabblock padding-top10 padding-bottom10" v-if="1 == active">
                    <li class="_page-tabblock-li " :class="lever_index == 0?'tabblock-active':''" @click="leverList(0)"> {{$t("leverTransactions.nowentrust")}} </li>
                    <li class="_page-tabblock-li" :class="lever_index == 1?'tabblock-active':''" @click="leverList(1)"> {{$t("leverTransactions.lvchi")}} </li>
                    <li class="_page-tabblock-li" :class="lever_index == 3?'tabblock-active':''" @click="leverList(3)"> {{$t("secondTransactions.closed")}} </li>
                    <li class="_page-tabblock-li" :class="lever_index == 4?'tabblock-active':''" @click="leverList(4)"> {{$t("leverTransactions.revoked")}} </li>
                </ul>
                <ul class="_flex-shrink _page-tabblock padding-top10 padding-bottom10" v-if="2 == active">
                    <li class="_page-tabblock-li" :class="second_index == 1?'tabblock-active':''" @click="secondList(1)"> {{$t("uorder.in_transaction")}} </li>
                    <li class="_page-tabblock-li" :class="second_index == 3?'tabblock-active':''" @click="secondList(3)"> {{$t("secondTransactions.closed")}} </li>
                </ul>
                <div class="_page-main__content__table" style="height: 100%;">
                    <el-table 
                        class="_table"
                        style="width: 100%;height:100%"
                        :height="tableHeight"
                        :data="list_content" v-if="active==0">
                        <el-table-column prop="type" :label='$t("tv.type")'>
                            <template slot-scope="{row}">
                                <span class="fl w20" :class="row.type == 1 ?'green':'red'">
                                    {{ row.type == 1 ? $t("leverExchange.buyin"):$t("leverExchange.sellout")}}
                                </span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="target_price" :label='$t("leverTrade.price")'>
                        </el-table-column>
                        <el-table-column prop="trade_amount" :label='$t("entrust.ul_li_3")'>
                        </el-table-column>
                        <el-table-column prop="created_at" :label='$t("entrust.ul_li_4")'>
                        </el-table-column>
                        <el-table-column prop="status" :label='$t("entrust.ul_li_5")'>
                            <template slot-scope="{row}">
                                <span class="fl w20">
                                    {{ row.status == 1 ? $t("earn.in_progress"):$t("uorder.completed")}}
                                </span>
                            </template>
                        </el-table-column>
                    </el-table>
                    <el-table 
                        class="_table"
                        style="width: 100%;height:100%"
                        :height="tableHeight"
                        :data="list_content" v-if="active==1">
                        <el-table-column prop="type" :label='$t("record.tr_th_2")' min-width="250px">
                            <template slot-scope="{row}">
                                <span class="li-type" :class="row.type == 1 ?'green':'red'" style="text-align:left;line-height:25px">
                                    <i class="iconfont" :class="row.type == 1 ?'icon-down-jiantou-up':'icon-arrow-down'"></i>
                                    {{ row.symbol + ' * ' + row.share + ' * ' + row.multiple + 'x'}}
                                </span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="price" :label='$t("leverTransactions.open_price")'>
                            <template slot-scope="{row}">
                                <span>
                                    {{ row.price || "0.00"|tofixedFour}}
                                </span>
                            </template>
                        </el-table-column>
                        <el-table-column :label='$t("leverTransactions.now_price")'>
                            <template slot-scope="{row}">
                                <span class="li-nowprice" :class="row.type == 1? row.update_price > row.price ? 'green' : 'red' : row.update_price <= row.price ? 'green': 'red'">
                                    {{ row.update_price || "0.00"|tofixedFour}}
                                </span>
                            </template>
                        </el-table-column>
                        <el-table-column :label='$t("leverTransactions.bail")'>
                            <template slot-scope="{row}">
                                <span>
                                    {{ row.caution_money || "0.00"|tofixedFour}}
                                </span>
                            </template>
                        </el-table-column>
                        <el-table-column :label='$t("tv.take_profit_price")'>
                            <template slot-scope="{row}">
                                <span>
                                    {{ row.target_profit_price || "0.00"|tofixedFour}}
                                </span>
                            </template>
                        </el-table-column>
                        <el-table-column :label='$t("tv.stop_loss_price")'>
                            <template slot-scope="{row}">
                                <span>
                                    {{ row.stop_loss_price || "0.00"|tofixedFour}}
                                </span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="transaction_time" :label='$t("uorder.opening_time")'>
                        </el-table-column>
                        <el-table-column :label='$t("accountNewPage.premium")'>
                            <template slot-scope="{row}">
                                <span>
                                    {{ row.trade_fee || "0.00"|tofixedFour}}
                                </span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="status" :label='$t("leverTransactions.loss")'>
                            <template slot-scope="{row}">
                                <span class="li-loss red width1" :class="row.profits > 0?'green':''">
                                    {{ row.profits || "0.00"|tofixedFour}}
                                </span>
                            </template>
                        </el-table-column>
                    </el-table>
                    <el-table 
                        class="_table"
                        style="width: 100%;height:100%"
                        :height="tableHeight"
                        :data="list_content" v-if="active==2 && second_index == 1">
                        <el-table-column :label='$t("homeContent.trading_pairs")'>
                            <template slot-scope="{row}">
                                {{ ' ' + row.symbol_name + ' ' + row.seconds + 's '}}
                            </template>
                        </el-table-column>
                        <el-table-column :label='$t("secondTransactions.num")'>
                            <template slot-scope="{row}">
                                {{ ' ' + numFilters(row.number || "0",0) + " " + row.currency_name + " "}}
                            </template>
                        </el-table-column>
                        <el-table-column :label='$t("secondTransactions.buy_price")'>
                            <template slot-scope="{row}">
                                {{ ' ' + numFilters(row.open_price || "0.00",4) + ' '}}
                                <i class="iconfont icon-jiantouarrow499" :class="row.type == 2?'red':'green'" :style="row.type == 2?'':'display:inline-block;transform:rotate(180deg)'"></i>
                            </template>
                        </el-table-column>
                        <el-table-column prop="seconds" :label='$t("uorder.order_duration")'>
                            <template slot-scope="{row}">
                                {{ ' ' + row.seconds + " S "}}
                            </template>
                        </el-table-column>
                    </el-table>
                    <el-table 
                        class="_table"
                        style="width: 100%;height:100%"
                        :height="tableHeight"
                        :data="list_content" v-if="active==2 && second_index == 3">
                        <el-table-column :label='$t("homeContent.trading_pairs")'>
                            <template slot-scope="{row}">
                                {{ ' ' + row.symbol_name + ' ' + row.seconds + 's '}}
                            </template>
                        </el-table-column>
                        <el-table-column :label='$t("secondTransactions.num")'>
                            <template slot-scope="{row}">
                                {{ ' ' + numFilters(row.number || "0",0) + " " + row.currency_name + " "}}
                            </template>
                        </el-table-column>
                        <el-table-column :label='$t("secondTransactions.buy_price")'>
                            <template slot-scope="{row}">
                                {{ ' ' + numFilters(row.open_price || "0.00",4) + ' '}}
                                <i class="iconfont icon-jiantouarrow499" :class="row.type == 2?'red':'green'" :style="row.type == 2?'':'display:inline-block;transform:rotate(180deg)'"></i>
                            </template>
                        </el-table-column>
                        <el-table-column :label='$t("secondTransactions.finsh_price")'>
                            <template slot-scope="{row}">
                                {{ ' ' + numFilters(row.end_price || "0.00",4) + " " }}
                            </template>
                        </el-table-column>
                        <el-table-column :label='$t("secondTransactions.rate")'>
                            <template slot-scope="{row}">
                                {{ ' ' + numFilters(row.fee || "0.00",2) + " " }}
                            </template>
                        </el-table-column>
                        <el-table-column :label='$t("secondTransactions.loss")'>
                            <template slot-scope="{row}">
                                <span class="width2 trs" :class='row.fact_profits < 0 ? "red" : "green"'>
                                    {{  numFilters(row.fact_profits || "0",2) }}
                                </span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="seconds" :label='$t("uorder.order_duration")'>
                            <template slot-scope="{row}">
                                {{ ' ' + row.seconds + " S "}}
                            </template>
                        </el-table-column>
                    </el-table>
                    <el-table 
                        class="_table"
                        style="width: 100%;height:100%"
                        :height="tableHeight"
                        :data="list_content" v-if="active==5">
                        <el-table-column :label='$t("earn.amount_of_deposit")'>
                            <template slot-scope="{row}">
                                <span style="color: black;">
                                    {{ parseFloat(row.amount) }}
                                </span>
                            </template>
                        </el-table-column>
                        <el-table-column :label='$t("earn.daily_yield")'>
                            <template slot-scope="{row}">
                                <span style="color: black;">
                                    {{ parseFloat(100 * row.day_rate) + ' %' }}
                                </span>
                            </template>
                        </el-table-column>
                        <el-table-column :label='$t("earn.lockup_time")'>
                            <template slot-scope="{row}">
                                <span style="color: black;">
                                    {{ row.start_at }}
                                </span>
                            </template>
                        </el-table-column>
                        <el-table-column :label='$t("earn.maturity_time")'>
                            <template slot-scope="{row}">
                                <span style="color: black;">
                                    {{ row.end_at }}
                                </span>
                            </template>
                        </el-table-column>
                        <el-table-column :label='$t("earn.liquidated_damages_for_early_redemption")'>
                            <template slot-scope="{row}">
                                <span style="color: #E14544;">
                                    {{ row.cancel_fee.toFixed(2) + 'USDT' }}
                                </span>
                            </template>
                        </el-table-column>
                        <el-table-column :label='$t("earn.status")'>
                            <template slot-scope="{row}">
                                <span :style='row.status == 1 ? "color:white;background-color:#28ba98" : "color:white;background-color:#E14544"'>
                                    {{  row.status == 1 ? $t("startupDetail.in_progress"):$t("earn.redeemed") }}
                                </span>
                            </template>
                        </el-table-column>
                        <el-table-column :label='$t("earn.operation")'>
                            <template slot-scope="{row}">
                                <el-button size="medium" style="border-color:#fa3534;background-color:#fa3534;color:white;" @click="redemption(row.id)">
                                    {{ $t("earn.redemption") }}
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <el-table 
                        class="_table"
                        style="width: 100%;height:100%"
                        :height="tableHeight"
                        :data="list_content" v-if="active==3">
                        <el-table-column prop="name" :label='$t("structuredFinancial.label_product")'>
                        </el-table-column>
                        <el-table-column prop="currency_name" :label='$t("record.tr_th_2")'>
                        </el-table-column>
                        <el-table-column prop="exercise_price" :label='$t("record.tr_th_3")'>
                        </el-table-column>
                        <el-table-column prop="expectedProfits" :label='$t("record.tr_th_4")'>
                        </el-table-column>
                        <el-table-column prop="end_time" :label='$t("record.tr_th_5")'>
                        </el-table-column>
                        <el-table-column prop="status" :label='$t("record.tr_th_6")'>
                            <template slot-scope="{row}">
                                <span class="fl w20">
                                    {{ row.status == 0 ? $t("record.td_span_1"): row.status == 1 ? $t("record.td_span_2"):row.status ==3?$t("record.td_span_3"):row.status ==4?$t("record.td_span_4"):''}}
                                </span>
                            </template>
                        </el-table-column>
                    </el-table>
                    <el-table 
                        class="_table"
                        style="width: 100%;height:100%"
                        :height="tableHeight"
                        :data="list_content" v-if="active==4">
                        <el-table-column prop="created_at" :label='$t("uorder.subscription_time")'>
                        </el-table-column>
                        <el-table-column prop="name" :label='$t("accountCenter.currency")'>
                        </el-table-column>
                        <el-table-column prop="coin_amount" :label='$t("uorder.number_of_applications")'>
                        </el-table-column>
                        <el-table-column prop="give_amount" :label='$t("uorder.pass_quantity")'>
                        </el-table-column>
                        <el-table-column prop="sell_begin" :label='$t("uorder.time_to_market")'>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import "@/lib/clipboard.min.js";
    import "@/lib/jquery.qrcode.min.js";
    import axios from "axios";

    export default {
        name: "UOrder",
        data() {
            return {
                list_content: [],
                load_type: 0,
                page: 1,
                tableHeight: "",
                deal_index: 0,
                second_index: 0,
                lever_index: 0,
                active: 0,
                token: "",
                prices: localStorage.getItem("newPrice")
            };
        },
        watch: {
            value(t, e) {
                this.checkboxChange()
            },
            active(t, e) {
                this.list_content = []
                switch (t) {
                    case 0:
                        this.dealList(0);
                        break;
                    case 1:
                        this.leverList(0),
                        this.loads();
                        break;
                    case 2:
                        this.secondList(1),
                        this.connect();
                        break;
                    case 3:
                        this.structureList();
                        break;
                    case 4:
                        this.startUPList();
                        break;
                    case 5:
                        this.getMXList();
                        break;
                    default:
                        break
                }
            }
        },
        updated() {
            this.getmyall()
        },
        methods: {
			tofixed(t) {
			    return t = Number(t),
			    t.toFixed(2)
			},
			tofixedFour(t) {
			    return t = Number(t),
			    t.toFixed(4)
			},
			numFilters(t, e) {
			    return t ? (t = (t - 0).toFixed(e).toString(),
			    t.slice(0) + " ") : ""
			},
            calcIncome(t) {
                const e = Number(t.order_rate) / 100
                    , a = Number(t.exercise_price)
                    , {number: s, price: i, day: n} = t;
                let r = "";
                return "call" == t.type ? r = i <= a ? s * (1 + e / 365 * n) : s * a * (1 + e / 365 * n) : "put" == t.type && (r = i <= a ? s / a * (1 + e / 365 * n) : s * (1 + e / 365 * n)),
                r = Number(r).toFixed(4),
                i <= a ? r + t.currency_name : r + "USDT"
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
            structureList() {
                var t = this;
                this.$http({
                    url: "/api/dual/dual_list",
                    method: "POST",
                    data: {
                        lang: window.localStorage.getItem("lang") || "en",
                        page: 1,
                        limit: 9999
                    },
                    headers: {
                        Authorization: localStorage.getItem("token") || ""
                    }
                }).then(e=>{
                    t.list_content = e.data.message.list,
                    t.list_content.forEach(t=>{
                        t.create_time = this.timeFormat(t.create, "yyyy-mm-dd hh:MM:ss"),
                        t.holdingDays = this.datedifference(t.create_time, t.end_time),
                        t.expectedProfits = this.calcIncome(t)
                    }
                    )
                }
                )
            },
            redemption(t) {
                var e = this;
                this.$confirm(this.$t("earn.confirm_definite_redemption"), this.$t("earn.confirm_title"), {
                    confirmButtonText: this.$t("earn.confirm_confirm_button"),
                    cancelButtonText: this.$t("earn.confirm_cancel_button"),
                    type: "warning"
                }).then(()=>{
                    this.$http({
                        url: "/api/lh/deposit/order/cancel",
                        method: "POST",
                        data: {
                            lang: window.localStorage.getItem("lang") || "en",
                            id: t
                        },
                        headers: {
                            Authorization: e.token
                        }
                    }).then(t=>{
                        layer.msg(t.data.message),
                        e.getMXList()
                    }
                    )
                }
                ).catch(()=>{}
                )
            },
            startUPList() {
                var t = this;
                this.$http({
                    url: "api/user/project/order?page=1&limit=9999&status=&lang=" + window.localStorage.getItem("lang") || !1,
                    method: "GET",
                    data: {},
                    headers: {
                        Authorization: t.token
                    }
                }).then(e=>{
                    t.list_content = e.data.message.data
                }
                )
            },
            getMXList() {
                var t = this;
                this.$http({
                    url: "/api/lh/deposit/order?page=1&limit=9999&status=&lang=" + window.localStorage.getItem("lang") || !1,
                    method: "GET",
                    data: {},
                    headers: {
                        Authorization: t.token
                    }
                }).then(e=>{
                    t.list_content = e.data.message.order_list
                }
                )
            },
            connect() {
                var t = this;
                t.$socket.emit("login", localStorage.getItem("user_id")),
                t.sockets.subscribe("closed_microorder", e=>{
                    if ("closed_microorder" == e.type)
                        for (var a = e.data, s = 0; s < t.list_content.length; s++)
                            if (t.list_content[s].id == a.id)
                                return t.list_content[s] = a,
                                setTimeout((function() {
                                    var e = t.list_content;
                                    e.splice(s, 1),
                                    t.list_content = e
                                }
                                ), 500),
                                !1
                }
                )
            },
            loads() {
                let t = this;
                t.$socket.emit("login", localStorage.getItem("user_id")),
                t.sockets.subscribe("lever_trade", e=>{
                    if ("lever_trade" == e.type && 1 == t.lever_index) {
                        var a = JSON.parse(e.trades_all);
                        let s = [];
                        for (let t in a)
                            s.push(a[t]);
                        t.list_content = s
                    }
                    if ("lever_trade" == e.type && 0 == t.lever_index) {
                        a = JSON.parse(e.trades_entrust);
                        let s = [];
                        for (let t in a)
                            s.push(a[t]);
                        t.list_content = s
                    }
                }
                )
            },
            leverList(t) {
                this.list_content = [],
                this.lever_index = t,
                this.getLeverList(t)
            },
            secondList(t) {
                this.list_content = [],
                this.second_index = t,
                this.getSecondList(t)
            },
            dealList(t) {
                this.list_content = [],
                this.deal_index = t,
                0 == t ? this.getDealList() : this.getHisDealList()
            },
            getSecondList(t) {
                var e = this;
                this.$http({
                    url: "/api/microtrade/lists?page=" + e.page + "&status=" + t + "&limit=99999&lang=" + window.localStorage.getItem("lang") || !1,
                    method: "GET",
                    data: {},
                    headers: {
                        Authorization: e.token
                    }
                }).then(t=>{
                    var a = t.data.message.data;
                    e.list_content = a
					//console.log(this.active)
                }
                ).catch(t=>{
                    console.log(t)
                }
                )
            },
            getLeverList(t) {
                var e = this;
                this.$http({
                    url: "/api/lever/my_trade",
                    method: "post",
                    data: {
                        status: t,
                        page: e.page
                    },
                    headers: {
                        Authorization: e.token
                    }
                }).then(t=>{
                    if ("ok" == t.data.type) {
                        var a = t.data.message.message.data;
                        e.list_content = a
                    }
                }
                ).catch(t=>{
                    console.log(t)
                }
                )
            },
            getHisDealList() {
                var t = this;
                this.$http({
                    url: "/api/coin/list?page=" + t.page + "&status=2&limit=99999&lang=" + window.localStorage.getItem("lang") || !1,
                    method: "get",
                    data: {},
                    headers: {
                        Authorization: t.token
                    }
                }).then(e=>{
                    if ("ok" == e.data.type) {
                        var a = e.data.message;
                        t.list_content = a
                    }
                }
                ).catch(t=>{
                    console.log(t)
                }
                )
            },
            getDealList() {
                var t = this;
                this.$http({
                    url: "/api/coin/list?page=" + t.page + "&status=1&limit=99999&lang=" + window.localStorage.getItem("lang") || !1,
                    method: "get",
                    data: {},
                    headers: {
                        Authorization: t.token
                    }
                }).then(e=>{
                    if ("ok" == e.data.type) {
                        var a = e.data.message;
                        t.list_content = a
                    }
                }
                ).catch(t=>{
                    console.log(t)
                }
                )
            },
            getTableHeight() {
                let t = 280
                    , e = window.innerHeight - t;
                this.tableHeight = e <= 300 ? 300 : window.innerHeight - t
            }
        },
        created() {
            this.getTableHeight(),
            this.token = localStorage.getItem("token") || "";
            var t = this.$route.params.active;
            t && (this.active = t)
        },
        mounted() {
            this.getDealList(),
            eventBus.$on("updateKLine", t=>{
                console.log(t)
            }
            )
        },
        filters: {
            // tofixed: function(t) {
            //     return t = Number(t),
            //     t.toFixed(2)
            // },
            // tofixedFour: function(t) {
            //     return t = Number(t),
            //     t.toFixed(4)
            // },
            
        },
        computed: {
            active(t, e) {
                this.list_content = []
                switch (t) {
                    case 0:
                        this.dealList(0);
                        break;
                    case 1:
                        this.leverList(0),
                        this.loads();
                        break;
                    case 2:
                        this.secondList(1),
                        this.connect();
                        break;
                    case 3:
                        this.structureList();
                        break;
                    case 4:
                        this.startUPList();
                        break;
                    case 5:
                        this.getMXList();
                        break;
                    default:
                        break
                }
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
._page-tabblock-li.router-link-active, ._page-tabblock-li.tabblock-active {
    background-color: #276cff;
    color: #fff;
}
._page-tabblock-li {
    box-sizing: border-box;
    min-width: 117px;
    padding: 10px 35px;
    font-size: 16px;
    color: #000;
    background-color: #fff;
    cursor: pointer;
}
.padding-top10 {
    padding-top: 10px;
}
.padding-bottom10 {
    padding-bottom: 10px;
}
._flex-shrink {
    flex-shrink: 0;
}
._page-tabblock {
    display: flex;
}
._table.el-table {
    color: #fff;
    background-color: transparent;
}
._page-main__content1 {
    padding: 0 40px;
    width: calc(100% - 260px);
    height: 100%;
    background-color: #f7f7fa;
    color: #000;
}
</style>
