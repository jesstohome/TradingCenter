<template>
    <div class="exchange_actionWrapper__7IkvE" style="height: 50%;color:#fff">
        <div class="actions_header__9Xz3a" style="background-color: rgb(17, 21, 28);">
            <div class="actions_headerLeftTab__cUKTv">
                <div class="actions_headerLeft__eYE8t actions_headerTabActive__Awd5Z mxc-short-tab" style="color: white;"> {{$t("dealTv.spot_transaction")}} </div>
            </div>
            <a href="#/change" class="">
                <div class="actions_headerRight__WdpFG">
                    <div class="actions_marginLink__MMXMy actions_margin___YAA_"> {{$t("dealTv.transfer")}} </div>
                </div>
            </a>
        </div>
        <div class="actions_middleWrapper__cjxMT">
            <div class="actions_directions___vmCD actions_hide__o3xeT">
                <div class="actions_dir__hv08f actions_dirBuy__8ayRz actions_active__JoMne">
                    <div class="actions_dirInner__goRc8">{{$t("dealTv.buy")}}BTC</div>
                </div>
                <div class="actions_dir__hv08f actions_dirSell__C4rWi">
                    <div class="actions_dirInner__goRc8">{{$t("dealTv.sell")}}BTC</div>
                </div>
            </div>
            <div class="actions_orderTypeMode__QDSff">
                <div class="horizon-scroll actions_modes__l3w3h actions_line__b_I6K">
                    <div class="actions_mode__nRnKJ actions_textNowarp__3QcjB" :class="{
                        actions_modeActive__VpeUM: 1 == buyMode
                    }" @click="changeType(1)">{{$t("dealTv.market_price")}} </div>
                    <div class="actions_textNowarp__3QcjB actions_mode__nRnKJ" style="height: 100%;" :class="{
                        actions_modeActive__VpeUM: 2 == buyMode
                    }" @click="changeType(2)">{{$t("dealTv.price_limit")}} </div>
                </div>
            </div>
            <div class="actions_buySellWrapper__HD1OD">
                <div class="actions_buyWrapper__y_ZSB actions_doWrapper__POGvp" style="margin-right: 10px;">
                    <div class="actions_balance__kTHO0">
                        <div>
                            <span class="actions_primaryText__ufKT0" style="margin-inline-end: 8px;"> {{$t("dealTv.available")}} </span>
                            <span>{{Number(balance.change_balance).toFixed(4)}}({{balance.currency_name}})</span>
                            <span style="margin-left: 15px;" @click="shuaxin">
                                <svg width="1em" height="1em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M42 8V24" stroke="#d4d4d4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M6 24L6 40" stroke="#d4d4d4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519" stroke="#d4d4d4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </span>
                        </div>
                        <div style="display: flex;">
                            <a href="#/change" class="actions_deposit__Ydutk actions_buy__IssfZ">
                                <svg focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024" data-icon="Iconimport" class="sc-bcXHqe fzgrYP mx-icon iconfont iconimport">
                                    <path d="M888.32 757.418667h-53.816889a7.793778 7.793778 0 0 0-7.68 7.68v61.781333H197.063111V197.12h629.816889V258.844444c0 4.209778 3.527111 7.68 7.736889 7.68h53.76c4.209778 0 7.736889-3.413333 7.736889-7.68V158.72c0-17.066667-13.710222-30.72-30.72-30.72H158.72c-17.066667 0-30.72 13.653333-30.72 30.72v706.56c0 17.066667 13.653333 30.72 30.72 30.72h706.56c17.066667 0 30.72-13.653333 30.72-30.72V765.155556a7.68 7.68 0 0 0-7.68-7.68z m13.653333-281.429334h-314.026666V399.985778a8.021333 8.021333 0 0 0-12.970667-6.257778L433.095111 505.685333a7.964444 7.964444 0 0 0 0 12.629334l141.880889 111.957333a7.964444 7.964444 0 0 0 13.027556-6.257778V548.010667h314.026666c4.380444 0 7.964444-3.584 7.964445-7.964445v-56.035555a8.021333 8.021333 0 0 0-7.964445-7.964445z"></path>
                                </svg>
                                <span> {{$t("dealTv.top_up")}} </span>
                            </a>
                        </div>
                    </div>
                    <div class="actions_inputWrapper__OKcnB actions_line__b_I6K">
                        <div class="plus-minus_wrapper__ht_aW">
                            <span class="ant-input-affix-wrapper input-plus-minus ant-input-affix-wrapper-sm">
                                <span class="ant-input-prefix"> {{$t("dealTv.purchase_price")}} </span>
                                <input v-model="bestPrice" v-if="buyMode==1" type="text" class="ant-input ant-input-sm" :disabled="true" @change="buyTotal">
                                <input v-model="buyInfo.buyPrice" v-else type="number" class="ant-input ant-input-sm">
                                <span class="ant-input-suffix">
                                    <span>USDT</span>
                                    <div class="plus-minus_plusMinus__pd3FU">
                                        <button class="plus-minus_action__ve0Mh plus-minus_plus__BW3Pv" @click="buyAddMoney">
                                            <svg focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 2048 1024" data-icon="CaretUpOutlined" class="sc-bcXHqe fzgrYP mx-icon iconfont iconRectangle50">
                                                <path d="M1144.832 120.832a170.666667 170.666667 0 0 0-241.664 0L291.498667 732.501333A170.666667 170.666667 0 0 0 411.989333 1024h1224.021334a170.666667 170.666667 0 0 0 120.490666-291.498667L1144.832 120.832z"></path>
                                            </svg>
                                        </button>
                                        <button class="plus-minus_action__ve0Mh" @click="buySubMoney">
                                            <svg focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024" data-icon="CaretDownOutlined" class="sc-bcXHqe fzgrYP mx-icon iconfont iconRectangle51">
                                                <path d="M929.1776 203.1616a61.44 61.44 0 0 1 46.8992 100.9664L559.104 799.0272a61.44 61.44 0 0 1-94.0032 0L47.9232 304.128a61.44 61.44 0 0 1 46.8992-100.9664h834.3552z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div class="actions_inputWrapper__OKcnB actions_line__b_I6K">
                        <div class="plus-minus_wrapper__ht_aW">
                            <span class="ant-input-affix-wrapper input-plus-minus ant-input-affix-wrapper-sm">
                                <span class="ant-input-prefix"> {{$t("dealTv.purchase_volume")}} </span>
                                <input v-model="buyInfo.buyNum" type="text" placeholder="" value="" class="ant-input ant-input-sm" @change="buyTotal">
                                <span class="ant-input-suffix">
                                    <span>{{rightName}}</span>
                                    <div class="plus-minus_plusMinus__pd3FU">
                                        <button class="plus-minus_action__ve0Mh plus-minus_plus__BW3Pv" @click="buyAddNum"><svg focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 2048 1024" data-icon="CaretUpOutlined" class="sc-bcXHqe fzgrYP mx-icon iconfont iconRectangle50"><path d="M1144.832 120.832a170.666667 170.666667 0 0 0-241.664 0L291.498667 732.501333A170.666667 170.666667 0 0 0 411.989333 1024h1224.021334a170.666667 170.666667 0 0 0 120.490666-291.498667L1144.832 120.832z"></path></svg>
                                        </button>
                                        <button class="plus-minus_action__ve0Mh" @click="buySubNum"><svg focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024" data-icon="CaretDownOutlined" class="sc-bcXHqe fzgrYP mx-icon iconfont iconRectangle51"><path d="M929.1776 203.1616a61.44 61.44 0 0 1 46.8992 100.9664L559.104 799.0272a61.44 61.44 0 0 1-94.0032 0L47.9232 304.128a61.44 61.44 0 0 1 46.8992-100.9664h834.3552z"></path></svg>
                                        </button>
                                    </div>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div class="actions_slide__pKkpF actions_line__b_I6K">
                        <el-slider v-model="sliderIn" :disabled='buyInfo.buyPrice == 0' :max='100' :step="25"
                                   show-stops :marks="marks" @change="sliderChange('buy')"></el-slider>
                    </div>
                    <div class="actions_inputWrapper__OKcnB actions_line__b_I6K">
                        <div class="plus-minus_wrapper__ht_aW">
                            <span class="ant-input-affix-wrapper input-plus-minus ant-input-affix-wrapper-sm">
                                <span class="ant-input-prefix"> {{$t("dealTv.turnover")}} </span>
                                <input type="text" :value="buyTotal|toFxied4" class="ant-input ant-input-sm">
                                <span class="ant-input-suffix">
                                    <span>USDT</span>
                                    <div class="plus-minus_plusMinus__pd3FU">
                                        <button class="plus-minus_action__ve0Mh plus-minus_plus__BW3Pv"><svg focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 2048 1024" data-icon="CaretUpOutlined" class="sc-bcXHqe fzgrYP mx-icon iconfont iconRectangle50"><path d="M1144.832 120.832a170.666667 170.666667 0 0 0-241.664 0L291.498667 732.501333A170.666667 170.666667 0 0 0 411.989333 1024h1224.021334a170.666667 170.666667 0 0 0 120.490666-291.498667L1144.832 120.832z"></path></svg>
                                        </button>
                                        <button class="plus-minus_action__ve0Mh"><svg focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024" data-icon="CaretDownOutlined" class="sc-bcXHqe fzgrYP mx-icon iconfont iconRectangle51"><path d="M929.1776 203.1616a61.44 61.44 0 0 1 46.8992 100.9664L559.104 799.0272a61.44 61.44 0 0 1-94.0032 0L47.9232 304.128a61.44 61.44 0 0 1 46.8992-100.9664h834.3552z"></path></svg>
                                        </button>
                                    </div>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div>
                        <button class="actions_doBtn__JyGhz actions_authLink__j6mG4" @click="buyCoin">
                            <div class="auth-links_wrapper__3Qekh">
                                <div class="auth-links_content__DPJ7f">
                                    <span class="auth-links_authBtn__QqEo4"> {{$t("dealTv.buy")}} </span>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
                <div class="actions_sellWrapper__J5fJU actions_doWrapper__POGvp">
                    <div class="actions_balance__kTHO0">
                        <div>
                            <span class="actions_primaryText__ufKT0" style="margin-inline-end: 8px;"> {{$t("dealTv.available")}} </span>
                            <span>
                                <span>{{user_currency}}</span>
                                <span>{{rightName}}</span>
                            </span>
                            <span style="margin-left: 15px;" @click="shuaxin">
                                <svg width="1em" height="1em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M42 8V24" stroke="#d4d4d4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M6 24L6 40" stroke="#d4d4d4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519" stroke="#d4d4d4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </span>
                        </div>
                        <a href="#/change" class="actions_deposit__Ydutk actions_sell__NH3eq" v-if='"BTC" == rightName || "ETH" == rightName'>
                            <svg focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024" data-icon="Iconimport" class="sc-bcXHqe fzgrYP mx-icon iconfont iconimport">
                                <path d="M888.32 757.418667h-53.816889a7.793778 7.793778 0 0 0-7.68 7.68v61.781333H197.063111V197.12h629.816889V258.844444c0 4.209778 3.527111 7.68 7.736889 7.68h53.76c4.209778 0 7.736889-3.413333 7.736889-7.68V158.72c0-17.066667-13.710222-30.72-30.72-30.72H158.72c-17.066667 0-30.72 13.653333-30.72 30.72v706.56c0 17.066667 13.653333 30.72 30.72 30.72h706.56c17.066667 0 30.72-13.653333 30.72-30.72V765.155556a7.68 7.68 0 0 0-7.68-7.68z m13.653333-281.429334h-314.026666V399.985778a8.021333 8.021333 0 0 0-12.970667-6.257778L433.095111 505.685333a7.964444 7.964444 0 0 0 0 12.629334l141.880889 111.957333a7.964444 7.964444 0 0 0 13.027556-6.257778V548.010667h314.026666c4.380444 0 7.964444-3.584 7.964445-7.964445v-56.035555a8.021333 8.021333 0 0 0-7.964445-7.964445z"></path>
                            </svg>
                            <span> {{$t("dealTv.top_up")}} </span>
                        </a>
                    </div>
                    <div class="actions_inputWrapper__OKcnB actions_line__b_I6K">
                        <div class="plus-minus_wrapper__ht_aW">
                            <span class="ant-input-affix-wrapper input-plus-minus ant-input-affix-wrapper-sm"><span class="ant-input-prefix"> {{$t("dealTv.selling_price")}} </span>
                            <input v-model="bestPrice" v-if="buyMode==1" type="text" class="ant-input ant-input-sm" :disabled="true">
                            <input v-model="sellInfo.sellPrice" v-else type="number" class="ant-input ant-input-sm">
                            <span class="ant-input-suffix">
                                <span>USDT</span>
                                <div class="plus-minus_plusMinus__pd3FU">
                                    <button class="plus-minus_action__ve0Mh plus-minus_plus__BW3Pv" @click="sellAddMoney"><svg focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 2048 1024" data-icon="CaretUpOutlined" class="sc-bcXHqe fzgrYP mx-icon iconfont iconRectangle50"><path d="M1144.832 120.832a170.666667 170.666667 0 0 0-241.664 0L291.498667 732.501333A170.666667 170.666667 0 0 0 411.989333 1024h1224.021334a170.666667 170.666667 0 0 0 120.490666-291.498667L1144.832 120.832z"></path></svg>
                                    </button>
                                    <button class="plus-minus_action__ve0Mh" @click="sellSubMoney"><svg focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024" data-icon="CaretDownOutlined" class="sc-bcXHqe fzgrYP mx-icon iconfont iconRectangle51"><path d="M929.1776 203.1616a61.44 61.44 0 0 1 46.8992 100.9664L559.104 799.0272a61.44 61.44 0 0 1-94.0032 0L47.9232 304.128a61.44 61.44 0 0 1 46.8992-100.9664h834.3552z"></path></svg>
                                    </button>
                                </div>
                            </span>
                        </span>
                    </div>
                </div>
                <div class="actions_inputWrapper__OKcnB actions_line__b_I6K">
                    <div class="plus-minus_wrapper__ht_aW">
                        <span class="ant-input-affix-wrapper input-plus-minus ant-input-affix-wrapper-sm">
                            <span class="ant-input-prefix"> {{$t("dealTv.quantity_sold")}} </span>
                            <input v-model="sellInfo.sellNum" type="text" placeholder="" value="" class="ant-input ant-input-sm">
                            <span class="ant-input-suffix">
                                <span>{{rightName}}</span>
                                <div class="plus-minus_plusMinus__pd3FU">
                                    <button class="plus-minus_action__ve0Mh plus-minus_plus__BW3Pv" @click="sellAddNum"><svg focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 2048 1024" data-icon="CaretUpOutlined" class="sc-bcXHqe fzgrYP mx-icon iconfont iconRectangle50"><path d="M1144.832 120.832a170.666667 170.666667 0 0 0-241.664 0L291.498667 732.501333A170.666667 170.666667 0 0 0 411.989333 1024h1224.021334a170.666667 170.666667 0 0 0 120.490666-291.498667L1144.832 120.832z"></path></svg>
                                    </button>
                                    <button class="plus-minus_action__ve0Mh" @click="sellSubNum"><svg focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024" data-icon="CaretDownOutlined" class="sc-bcXHqe fzgrYP mx-icon iconfont iconRectangle51"><path d="M929.1776 203.1616a61.44 61.44 0 0 1 46.8992 100.9664L559.104 799.0272a61.44 61.44 0 0 1-94.0032 0L47.9232 304.128a61.44 61.44 0 0 1 46.8992-100.9664h834.3552z"></path></svg>
                                    </button>
                                </div>
                            </span>
                        </span>
                    </div>
                </div>
                <div class="actions_slide__pKkpF actions_line__b_I6K">
                    <el-slider v-model="sliderOut" :disabled='sellInfo.sellPrice == 0' :max='100'
                        :step="25" show-stops :marks="marks" @change="sliderChange('sell')"></el-slider>
                </div>
                <div class="actions_inputWrapper__OKcnB actions_line__b_I6K">
                    <div class="plus-minus_wrapper__ht_aW">
                        <span class="ant-input-affix-wrapper input-plus-minus ant-input-affix-wrapper-sm">
                            <span class="ant-input-prefix"> {{$t("dealTv.turnover")}} </span>
                            <input type="text" :value="sellTotal|toFxied4" class="ant-input ant-input-sm">
                            <span class="ant-input-suffix">
                                <span>USDT</span>
                                <div class="plus-minus_plusMinus__pd3FU">
                                    <button class="plus-minus_action__ve0Mh plus-minus_plus__BW3Pv"><svg focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 2048 1024" data-icon="CaretUpOutlined" class="sc-bcXHqe fzgrYP mx-icon iconfont iconRectangle50"><path d="M1144.832 120.832a170.666667 170.666667 0 0 0-241.664 0L291.498667 732.501333A170.666667 170.666667 0 0 0 411.989333 1024h1224.021334a170.666667 170.666667 0 0 0 120.490666-291.498667L1144.832 120.832z"></path></svg>
                                    </button>
                                    <button class="plus-minus_action__ve0Mh"><svg focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024" data-icon="CaretDownOutlined" class="sc-bcXHqe fzgrYP mx-icon iconfont iconRectangle51"><path d="M929.1776 203.1616a61.44 61.44 0 0 1 46.8992 100.9664L559.104 799.0272a61.44 61.44 0 0 1-94.0032 0L47.9232 304.128a61.44 61.44 0 0 1 46.8992-100.9664h834.3552z"></path></svg>
                                    </button>
                                </div>
                            </span>
                        </span>
                    </div>
                </div>
                <div>
                    <button class="actions_doBtn__JyGhz actions_authLink__j6mG4" @click="sellCoin">
                        <div class="auth-links_wrapper__3Qekh">
                            <div class="auth-links_content__DPJ7f">
                                <span class="auth-links_authBtn__QqEo4"> {{$t("dealTv.sell")}} </span>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
  name: "trade",

  filters: {
    toFxied4: function (value) {
      value = Number(value);
      return value.toFixed(4);
    },
    numFilter(ev) {
      ev = Number(ev);
      return ev.toFixed(4);
    }
  },
  data() {
    return {
        bestPrice: this.$t('leverTrade.bestprice'),
        currency_name: "",
        currency_id: "",
        legal_name: "",
        user_currency: "",
        user_legal: "",
        show: true,
        cny_price: 0,
        showNone: false,
        allBalance: 0,
        buyInfo: {buyPrice: 0, buyNum: 0, url: "coin/trade"},
        sellInfo: {sellPrice: 0, sellNum: 0, url: "coin/trade"},
        sliderIn: 0,
        sliderOut: 0,
        sliderss: true,
        buyMode: 1,
        buyPrice: 0,
        optype: 'buy',
        rightName: "",
        marks: {
            0: '0%',
            25: '25%',
            50: '50%',
            75: '75%',
            100: '100%'
        },
        balance: {
            change_balance: 0
        }
    }
  },
  created() {
    this.address = localStorage.getItem("token") || "";
    // this.init();
  },
  mounted() {
    let that = this;
    that.address = localStorage.getItem("token") || "";
    this.legal_id = localStorage.getItem("currency_id");
    this.currencyId = window.localStorage.getItem("legal_id"),
    this.currency_id = localStorage.getItem("legal_id");
    this.legal_name = localStorage.getItem("currency_name");
    this.currency_name = localStorage.getItem("legal_name");
    this.rightName = window.localStorage.getItem("currency_name") || "";
    that.buy_sell(that.legal_id, that.currency_id);
    this.getWalletDetail()
    eventBus.$on("updateKLine", t=>{
        "1min" === t.period && (22 == this.legalId ? that.lastPrice = (t.close - 0).toFixed(6) : that.lastPrice = (t.close - 0).toFixed(4),
                    that.highPrice = (t.high - 0).toFixed(4),
                    that.lowPrice = (t.low - 0).toFixed(4),
                    that.volumn = (t.volume - 0).toFixed(4),
                    0 == that.buyPrice ? (that.buyPrice = (t.close - 0).toFixed(4),
                    that.buyInfo.buyPrice = that.buyPrice,
                    that.sellInfo.sellPrice = that.buyPrice) : that.buyPrice = (t.close - 0).toFixed(4)),
                    t.change && (that.change = t.change)
                }
    )
  },
  methods: {
    shuaxin() {
        this.$router.go(0)
    },
    buyAddMoney() {
        2 == this.buyMode && (this.buyInfo.buyPrice = (parseFloat(this.buyInfo.buyPrice) + parseFloat(.1)).toFixed(4))
    },
    buySubMoney() {
        if (2 == this.buyMode) {
            if ((parseFloat(this.buyInfo.buyPrice) - parseFloat(.1)).toFixed(4) <= 0)
                return;
            this.buyInfo.buyPrice = (parseFloat(this.buyInfo.buyPrice) - parseFloat(.1)).toFixed(4)
        }
    },
    sellAddMoney() {
        2 == this.buyMode && (this.sellInfo.sellPrice = (parseFloat(this.sellInfo.sellPrice) + parseFloat(.1)).toFixed(4))
    },
    sellSubMoney() {
        (parseFloat(this.sellInfo.sellPrice) - parseFloat(.1)).toFixed(4) <= 0 || 2 == this.buyMode && (this.sellInfo.sellPrice = (parseFloat(this.sellInfo.sellPrice) - parseFloat(.1)).toFixed(4))
    },
    buyAddNum() {
        this.buyInfo.buyNum = (parseFloat(this.buyInfo.buyNum) + parseFloat(.1)).toFixed(4)
    },
    buySubNum() {
        (parseFloat(this.buyInfo.buyNum) - parseFloat(.1)).toFixed(4) <= 0 || (this.buyInfo.buyNum = (parseFloat(this.buyInfo.buyNum) - parseFloat(.1)).toFixed(4))
    },
    sellAddNum() {
        this.sellInfo.sellNum = (parseFloat(this.sellInfo.sellNum) + parseFloat(.1)).toFixed(4)
    },
    sellSubNum() {
        (parseFloat(this.sellInfo.sellNum) - parseFloat(.1)).toFixed(4) <= 0 || (this.sellInfo.sellNum = (parseFloat(this.sellInfo.sellNum) - parseFloat(.1)).toFixed(4))
    },
    changeType(t) {
        this.buyMode = t,
        this.buyInfo.buyPrice = this.buyPrice,
        this.sellInfo.sellPrice = this.buyPrice
    },
    sliderChange(t) {
        "buy" == t ? 0 != this.balance.change_balance && (this.buyInfo.buyNum = (this.balance.change_balance * this.sliderIn / this.buyInfo.buyPrice / 100).toFixed(4)) : 0 != this.user_currency && (this.sellInfo.sellNum = (this.user_currency * this.sliderOut / 100).toFixed(4))
    },
    getWalletDetail() {
        var t = this;
        this.$http({
            url: "/api/wallet/detail",
            method: "post",
            data: {
                currency: t.currency_id,
                type: "change",
                lang: window.localStorage.getItem("lang") || "en"
            },
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then(e=>{
            t.balance = e.data.message
        }
        ).catch(t=>{
            console.log(t)
        }
        )
    },
    sellCoin() {
        let t = localStorage.getItem("index2");
        if ("13" == t)
            return;
        let e = this;
        !this.sellInfo.sellPrice || this.sellInfo.sellPrice <= 0 ? layer.msg(this.$t("lay.outprice")) : !this.sellInfo.sellNum || this.sellInfo.sellNum <= 0 ? layer.msg(this.$t("lay.outnumber")) : layer.confirm(this.$t("tv.sureOd"), {
            skin: "demo-class",
            title: !1,
            btn: [this.$t("tv.confirm"), this.$t("tv.canceil")]
        }, (function() {
            layer.load();
            e.$http({
                url: "/api/" + e.sellInfo.url,
                method: "post",
                data: {
                    legal_id: e.currencyId,
                    currency_id: e.legal_id,
                    target_price: e.sellInfo.sellPrice,
                    amount: e.sellInfo.sellNum,
                    type: 2,
                    lang: window.localStorage.getItem("lang") || "en"
                },
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            }).then(t=>{
                console.log(t),
                layer.closeAll(),
                "ok" == t.data.type ? (e.sellInfo.sellPrice = 0,
                e.sellInfo.sellNum = 0,
                eventBus.$emit("buyTrade", "tradebuy"),
                eventBus.$emit("tocel", "updata"),
                e.buy_sell(e.legal_id, e.currency_id),
                layer.msg(t.data.message)) : layer.msg(t.data.message)
            }
            ).catch(t=>{
                console.log(t)
            }
            )
        }
        ))
    },
    buyCoin() {
        let t = this;
        !this.buyInfo.buyPrice || this.buyInfo.buyPrice <= 0 ? layer.msg(this.$t("tv.pprice")) : !this.buyInfo.buyNum || this.buyInfo.buyNum <= 0 || layer.confirm(this.$t("tv.sureOd"), {
            skin: "demo-class",
            title: !1,
            btn: [this.$t("tv.confirm"), this.$t("tv.canceil")]
        }, (function() {
            layer.load();
            t.$http({
                url: "/api/" + t.buyInfo.url,
                method: "post",
                data: {
                    legal_id: t.currencyId,
                    currency_id: t.legal_id,
                    target_price: t.buyInfo.buyPrice,
                    amount: t.buyInfo.buyNum,
                    type: 1,
                    lang: window.localStorage.getItem("lang") || "en"
                },
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            }).then(e=>{
                console.log(e, 222),
                layer.closeAll(),
                "ok" == e.data.type ? (t.buyInfo.buyNum = 1,
                t.buy_sell(t.legal_id, t.currency_id),
                eventBus.$emit("buyTrade", "tradebuy"),
                eventBus.$emit("tocel", "updata")) : layer.msg(e.data.message)
            }
            ).catch(t=>{
                console.log(t)
            }
            )
        }
        ))
    },
    buy_sell(t, e, a) {
        this.$http({
            url: "/api/transaction/deal",
            method: "post",
            data: {
                legal_id: e,
                currency_id: t,
                lang: window.localStorage.getItem("lang")
            },
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then(t=>{
            "ok" == t.data.type ? (this.user_currency = t.data.message.user_currency,
            this.user_legal = t.data.message.user_legal,
            this.cny_price = t.data.message.cny_price,
            a || (this.buyInfo.buyPrice = 0,
            this.buyInfo.buyNum = 0)) : layer.msg(t.data.message)
        }
        ).catch(t=>{}
        )
    },
  }
  ,
  computed: {
    buyTotal() {
        console.log(111,this.buyInfo)
      return this.buyInfo.buyPrice * this.buyInfo.buyNum || 0;
    }
    ,
    sellTotal() {
      return this.sellInfo.sellPrice * this.sellInfo.sellNum || 0;
    }
  }
};
</script>
<style lang="scss" scoped>

.layui-layer {
    background-color: #13151a!important
}

.exchange_layoutMX__0zSjA {
    display: grid;
    grid-column-gap: 8px;
    grid-row-gap: 8px;
    justify-items: stretch;
    align-items: stretch;
    padding: 8px;
    max-width: 1440px;
    min-width: 760px;
    width: 90%;
    margin: 0 auto;
    grid-template-columns: minmax(280px,1fr) minmax(auto,2.5fr) minmax(310px,1fr);
    grid-template-rows: 44px 410px 350px 330px
}

.exchange_wrapper__u_qZX {
    background-color: #222934
}

.exchange_layoutMX__0zSjA .exchange_orderbookWrapper__ZdKtu {
    grid-column: 1/2;
    grid-row: 1/4
}

.exchange_chartContent__Ijukg,.exchange_dealsWrapper__L28jj,.exchange_orderbookWrapper__ZdKtu {
    background-color: var(--bg-4)
}

.exchange_top__Dxb6t {
    z-index: 1
}

.spinner-title {
    border-bottom: 1px solid #303b4b;
    width: 100%
}

.new_price,.spinner-title {
    background-color: #192330;
    color: #fff!important
}

.info-wrap div:first-child,.title-head {
    color: #fff!important
}

.title-head {
    background-color: #192330
}

.exchange_layoutMX__0zSjA .exchange_headlineWrapper__X4csW {
    grid-column: 2/3;
    grid-row: 1/2
}

.exchange_layoutMX__0zSjA .exchange_chartWrapper__ugo4R {
    grid-column: 2/3;
    grid-row: 2/3
}

.exchange_chartWrapper__ugo4R {
    background-color: #171c24;
    display: flex;
    flex-flow: column nowrap;
    overflow: hidden
}

.exchange_layoutMX__0zSjA .exchange_marketsWrapper__GPZgM {
    grid-column: 3/4;
    grid-row: 1/3
}

.exchange_headlineWrapper__X4csW,.exchange_marketsWrapper__GPZgM,.exchange_toolWrapper__EJk0h {
    background-color: #151617
}

.exchange_layoutMX__0zSjA .exchange_dealsWrapper__L28jj {
    grid-column: 3/4;
    grid-row: 3/4
}

.exchange_chartContent__Ijukg,.exchange_dealsWrapper__L28jj,.exchange_orderbookWrapper__ZdKtu {
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    background-color: #151617
}

.exchange_layoutMX__0zSjA .exchange_ordersWrapper__18eDb {
    grid-column: 1/4;
    grid-row: 4/5
}

.exchange_actionWrapper__7IkvE,.exchange_ordersWrapper__18eDb {
    background-color: #151617
}

.entrusts {
    background: #181d25;
    padding: 15px 20px;
    height: 100%;
    display: flex;
    flex-direction: column
}

.entrusts .tab-entrust {
    color: #f1f1f1
}

.entrusts .tab-entrust span {
    margin-right: 15px;
    cursor: pointer
}

.entrusts .tab-entrust span:hover {
    color: #276dff;
    border-bottom: 1px solid #276dff
}

.entrusts .entrust-box,.entrusts .histentrust-box {
    flex: 1
}

.entrust .content {
    height: 100%!important;
    min-height: auto!important
}

.entrust .no_data {
    padding: 0!important
}

.exchange_layoutMX__0zSjA .exchange_actionWrapper__7IkvE {
    grid-column: 2/3;
    grid-row: 3/4
}

.exchange_actionWrapper__7IkvE,.exchange_ordersWrapper__18eDb {
    background-color: #1a1b1c;
    display: flex;
    flex-flow: column nowrap
}

.actions_header__9Xz3a,actions_headerLeftTab__cUKTv {
    display: flex;
    align-items: center
}

.actions_header__9Xz3a {
    justify-content: space-between;
    background-color: #192330;
    flex-shrink: 0
}

.actions_header__9Xz3a,.actions_headerLeftTab__cUKTv {
    display: flex;
    align-items: center
}

.actions_headerTabActive__Awd5Z {
    background-color: #181d25;
    color: #276dff;
    font-weight: 500
}

.actions_gridBtn__jPSvs,.actions_headerTabActive__Awd5Z,.actions_headerTabBtn__AZsWL {
    padding: 0 12px;
    min-width: 50px;
    text-align: center
}

.actions_gridBtn__jPSvs,.actions_headerLeft__eYE8t {
    line-height: 38px
}

.mxc-short-tab {
    position: relative
}

.actions_middleWrapper__cjxMT {
    background-color: #181d25;
    padding: 0 20px
}

.actions_directions___vmCD {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    border-radius: 2px
}

.actions_hide__o3xeT {
    display: none!important
}

.actions_orderTypeMode__QDSff .actions_modes__l3w3h {
    align-items: center
}

.actions_orderTypeMode__QDSff .actions_line__b_I6K {
    margin-bottom: 10px;
    margin-top: 5px
}

.actions_modes__l3w3h {
    display: flex;
    position: relative;
    margin-bottom: 10px;
    overflow-x: auto;
    scroll-behavior: smooth
}

.actions_orderTypeMode__QDSff .actions_mode__nRnKJ.actions_modeActive__VpeUM,.actions_orderTypeMode__QDSff .actions_mode__nRnKJ:hover {
    color: #276dff
}

.actions_mode__nRnKJ {
    color: #959da4
}

.actions_orderTypeMode__QDSff .actions_mode__nRnKJ {
    border: 0;
    padding: 0
}

.actions_mode__nRnKJ {
    line-height: 24px;
    color: var(--primary-text);
    -webkit-margin-end: 20px;
    margin-inline-end:20px;position: relative;
    z-index: 1;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    padding-bottom: 5px
}

.actions_textNowarp__3QcjB {
    white-space: nowrap
}

.actions_buySellWrapper__HD1OD {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    position: relative
}

.actions_buySellWrapper__HD1OD .actions_buyWrapper__y_ZSB {
    -webkit-padding-end: 20px;
    padding-inline-end:20px;-webkit-border-end: 1px dashed #1e1f20;
    border-inline-end:1px dashed #1e1f20}

.actions_buySellWrapper__HD1OD .actions_doWrapper__POGvp {
    flex-grow: 1;
    width: 50%
}

.actions_headerRight__WdpFG {
    display: flex;
    align-items: center;
    -webkit-padding-end: 10px;
    padding-inline-end:10px}

.actions_marginLink__MMXMy.actions_margin___YAA_ {
    color: #faad14
}

.actions_marginLink__MMXMy {
    padding: 0 4px;
    -webkit-margin-start: 5px;
    margin-inline-start:5px;font-size: 12px;
    height: 24px;
    font-weight: 400;
    cursor: pointer;
    display: flex;
    align-items: center;
    position: relative
}

.actions_marginLink__MMXMy.actions_margin___YAA_:before {
    background-color: #faad14
}

.actions_marginLink__MMXMy:before {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: .1;
    border-radius: 2px;
    left: 0
}

.actions_buySellWrapper__HD1OD .actions_balance__kTHO0 {
    margin-bottom: 5px;
    min-height: 28px
}

.actions_balance__kTHO0,.actions_volume__rkvV2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px
}

.actions_deposit__Ydutk {
    display: flex;
    align-items: center;
    cursor: pointer
}

.actions_buy__IssfZ {
    color: #31c48a
}

a {
    color: inherit;
    text-decoration: none
}

.actions_inputWrapper__OKcnB {
    position: relative
}

.ant-input-affix-wrapper-sm {
    padding: 1px 7px
}

.ant-input-affix-wrapper {
    position: relative;
    display: inline-block;
    width: 100%;
    min-width: 0;
    padding: 8px 11px;
    color: #edeff2;
    font-size: 14px;
    line-height: 1.5715;
    background-color: transparent;
    background-image: none;
    border: 1px solid #555a5f;
    border-radius: 4px;
    transition: all .3s;
    display: inline-flex
}

.ant-input-affix-wrapper .ant-input-prefix,.ant-input-affix-wrapper .ant-input-show-count-has-suffix,.ant-input .ant-input-prefix,.ant-input .ant-input-show-count-has-suffix {
    margin-left: 0;
    margin-right: 0;
    -webkit-margin-end: 12px;
    margin-inline-end:12px}

.ant-input-prefix {
    margin-right: 4px
}

.ant-input-affix-wrapper.ant-input-affix-wrapper-sm .ant-input-clear-icon,.ant-input-affix-wrapper.ant-input-affix-wrapper-sm .ant-input,.ant-input-affix-wrapper.ant-input-sm .ant-input-clear-icon,.ant-input-affix-wrapper.ant-input-sm .ant-input,.ant-input-affix-wrapper.mx-size-sm .ant-input-clear-icon,.ant-input-affix-wrapper.mx-size-sm .ant-input,.ant-input.ant-input-affix-wrapper-sm .ant-input-clear-icon,.ant-input.ant-input-affix-wrapper-sm .ant-input,.ant-input.ant-input-sm .ant-input-clear-icon,.ant-input.ant-input-sm .ant-input,.ant-input.mx-size-sm .ant-input-clear-icon,.ant-input.mx-size-sm .ant-input {
    font-size: 14px
}

.ant-input-affix-wrapper>input.ant-input,.ant-input>input.ant-input {
    height: 100%;
    padding: 0;
    line-height: inherit;
    font-size: 14px
}

.ant-input-affix-wrapper>input.ant-input {
    padding: 0;
    border: none;
    outline: none
}

.ant-input-affix-wrapper.ant-input-affix-wrapper-sm,.ant-input-affix-wrapper.ant-input-sm,.ant-input-affix-wrapper.mx-size-sm,.ant-input.ant-input-affix-wrapper-sm,.ant-input.ant-input-sm,.ant-input.mx-size-sm {
    height: 32px;
    padding: 4px 12px;
    border-radius: 4px;
    line-height: 22px;
    font-size: 14px
}

.ant-input-affix-wrapper .ant-input-clear-icon,.ant-input-affix-wrapper .ant-input,.ant-input .ant-input-clear-icon,.ant-input .ant-input {
    font-size: 14px
}

input[type=number],input[type=password],input[type=text],textarea {
    -webkit-appearance: none
}

.ant-input-affix-wrapper,.ant-input {
    height: 40px;
    padding: 8px 12px;
    border-radius: 4px;
    line-height: 22px;
    font-size: 14px
}

.ant-input-sm {
    padding: 1px 7px
}

.ant-input {
    box-sizing: border-box;
    margin: 0;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: "tnum","tnum";
    position: relative;
    display: inline-block;
    width: 100%;
    min-width: 0;
    padding: 8px 11px;
    color: #edeff2;
    font-size: 14px;
    line-height: 1.5715;
    background-color: transparent;
    background-image: none;
    border: 1px solid #555a5f;
    border-radius: 4px;
    transition: all .3s
}

.plus-minus_wrapper__ht_aW .input-plus-minus.ant-input-affix-wrapper .ant-input-suffix {
    position: absolute;
    top: 1px;
    bottom: 1px;
    right: 1px
}

.ant-input-affix-wrapper .ant-input-suffix,.ant-input .ant-input-suffix {
    margin-left: 0;
    margin-right: 0;
    -webkit-margin-start: 12px;
    margin-inline-start:12px}

.ant-input-affix-wrapper .ant-input-prefix,.ant-input-affix-wrapper .ant-input-suffix,.ant-input .ant-input-prefix,.ant-input .ant-input-suffix {
    color: #a2abb1
}

.ant-input-suffix {
    margin-left: 4px
}

.ant-input-prefix,.ant-input-suffix {
    display: flex;
    flex: none;
    align-items: center
}

.plus-minus_plusMinus__pd3FU {
    -webkit-margin-start: 6px;
    margin-inline-start:6px;-webkit-border-start: 1px solid #282a2c;
    border-inline-start:1px solid #282a2c}

.detail::-webkit-scrollbar-track-piece {
    background-color: transparent;
    border-left: 1px solid transparent
}

.plus-minus_plusMinus__pd3FU .plus-minus_plus__BW3Pv {
    border-bottom-width: 1px!important;
    border-bottom: 1px solid #282a2c
}

.plus-minus_plusMinus__pd3FU .plus-minus_plus__BW3Pv svg {
    font-size: 12px
}

.plus-minus_plusMinus__pd3FU .plus-minus_action__ve0Mh svg {
    font-size: 10px;
    transform: scale(.7);
    color: #73797f
}

.fzgrYP {
    vertical-align: -.15em
}

.plus-minus_plusMinus__pd3FU .plus-minus_action__ve0Mh:not([disabled]) {
    cursor: pointer
}

.plus-minus_plusMinus__pd3FU .plus-minus_action__ve0Mh {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent;
    outline: transparent;
    border-width: 0;
    height: 15px;
    width: 24px;
    display: flex;
    justify-content: center;
    align-items: center
}

[type=reset],[type=submit],button,html [type=button] {
    -webkit-appearance: button
}

button,select {
    text-transform: none
}

button,input {
    overflow: visible
}

button,input,optgroup,select,textarea {
    margin: 0;
    color: inherit;
    font-size: inherit;
    font-family: inherit;
    line-height: inherit
}

[role=button],a,area,button,input:not([type=range]),label,select,summary,textarea {
    touch-action: manipulation
}

.actions_buySellWrapper__HD1OD .actions_slide__pKkpF,.actions_buySellWrapper__HD1OD .actions_volume__rkvV2 {
    margin-bottom: 10px
}

.actions_buySellWrapper__HD1OD .actions_line__b_I6K {
    margin-bottom: 15px
}

.ant-slider-disabled {
    cursor: not-allowed
}

.ant-slider-with-marks {
    margin-bottom: 4px
}

.ant-slider {
    box-sizing: border-box;
    color: #edeff2;
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    font-feature-settings: "tnum","tnum";
    position: relative;
    height: 12px;
    margin: 10px 6px;
    padding: 4px 0;
    cursor: pointer;
    touch-action: none
}

.ant-slider-rail {
    width: 100%;
    background-color: #383a3b
}

.ant-slider.slider-buy:not([disabled]) .ant-slider-track {
    background-color: #31c48a
}

.ant-slider-disabled .ant-slider-rail,.ant-slider-disabled .ant-slider-track {
    background-color: #383a3b!important
}

.ant-slider-track {
    background-color: #31c48a
}

.ant-slider-rail,.ant-slider-track {
    position: absolute;
    height: 2px;
    border-radius: 4px;
    transition: background-color .3s
}

.ant-slider-step {
    position: absolute;
    width: 100%;
    height: 2px;
    background: transparent;
    pointer-events: none
}

.ant-slider.slider-buy:not([disabled]).ant-slider-with-marks .ant-slider-dot-active {
    background-color: #31c48a
}

.ant-slider-disabled .ant-slider-dot,.ant-slider-disabled .ant-slider-mark-text {
    cursor: not-allowed!important
}

.ant-slider-disabled .ant-slider-dot,.ant-slider-disabled .ant-slider-handle {
    background-color: #383a3b;
    border-color: #383a3b!important;
    box-shadow: none;
    cursor: not-allowed
}

.ant-slider-dot-active {
    background-color: #31c48a
}

.ant-slider-dot {
    position: absolute;
    top: -3px;
    width: 4px;
    height: 8px;
    background-color: #383a3b;
    cursor: pointer
}

.actions_buyWrapper__y_ZSB .actions_doBtn__JyGhz {
    background-color: #31c48a
}

.actions_sellWrapper__J5fJU .actions_doBtn__JyGhz {
    background-color: #e9485a
}

.actions_authLink__j6mG4 {
    cursor: text
}

.actions_doBtn__JyGhz {
    height: 36px;
    width: 100%;
    border: none;
    color: #fff;
    border-radius: 2px;
    cursor: pointer;
    transition: all .16s ease-in
}

.actions_sell__NH3eq {
    color: #e9485a
}

#tv-top::-webkit-scrollbar {
    width: 5px;
    height: 13px;
    border-radius: 5px
}

#tv-top::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    min-height: 28px
}

#tv-top::-webkit-scrollbar-thumb,#tv-top::-webkit-scrollbar-thumb:hover {
    background-color: rgba(231,222,222,.5);
    border-radius: 5px
}

.exchange_ordersWrapper__18eDb::-webkit-scrollbar {
    width: 5px;
    height: 13px;
    border-radius: 5px
}

.exchange_ordersWrapper__18eDb::-webkit-scrollbar-thumb {
    background: #2e333c;
    background-clip: padding-box;
    border-radius: 5px;
    min-height: 28px
}

.exchange_ordersWrapper__18eDb::-webkit-scrollbar-thumb:hover {
    background: #2e333c;
    border-radius: 5px
}

.detail::-webkit-scrollbar {
    width: 5px;
    height: 13px;
    border-radius: 5px
}

.detail::-webkit-scrollbar-thumb {
    background: #2e333c;
    background-clip: padding-box;
    border-radius: 5px;
    min-height: 28px
}

.detail::-webkit-scrollbar-thumb:hover {
    background: #2e333c;
    border-radius: 5px
}

.exchange::-webkit-scrollbar-track-piece {
    background-color: transparent;
    border-left: 1px solid transparent
}

.exchange::-webkit-scrollbar {
    width: 5px;
    height: 13px;
    border-radius: 5px
}

.exchange::-webkit-scrollbar-thumb {
    background: #2e333c;
    background-clip: padding-box;
    border-radius: 5px;
    min-height: 28px
}

.exchange::-webkit-scrollbar-thumb:hover {
    background: #2e333c;
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

 .layui-layer-dialog .layui-layer-content {
    color: #000!important;
    text-align: center!important
}

 .layui-layer-btn {
    text-align: center!important
}

.demo-class {
    background: red
}
</style>