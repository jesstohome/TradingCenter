<template>
    <div style="background-color: rgb(24, 27, 42);">
		<indexHeader></indexHeader>
        <div>
            <div class="exchange_wrapper__u_qZX exchange_layoutMX__0zSjA">
                <div class="exchange_orderbookWrapper__ZdKtu exchange_top__Dxb6t">
                    <tv-top></tv-top>
                </div>
                <div class="exchange_headlineWrapper__X4csW" style="background-color: rgb(23, 28, 36);">
                    <div class="info-wrap">
                        <div>{{ rightName }}/{{ leftName }}</div>
                        <div>
                          <span :class="change<0?'red':'green'">{{ lastPrice }}</span>
                          <span>≈ $ {{ (lastPrice)|toFixedN(2) }}</span>
                        </div>
                        <div>
                          <span>{{$t("dealTv.change")}}</span>
                          <span :class="change<0?'red':'green'">{{ change }}%</span>
                        </div>
                        <div>
                          <span>{{ $t('dealTv.high') }}</span>
                          <span>{{ highPrice }}</span>
                        </div>
                        <div>
                          <span>{{ $t('dealTv.min') }}</span>
                          <span>{{ lowPrice }}</span>
                        </div>
                        <div>
                          <span>24H {{ $t('dealTv.volume') }}</span>
                          <span>{{ volumn }}</span>
                        </div>
                        <div style="flex: 1 1 0%;"></div>
                    </div>
                </div>
                <div class="exchange_chartWrapper__ugo4R" id="tv_chart_container">
                </div>
                <div class="exchange_marketsWrapper__GPZgM" style="background-color: rgb(24, 29, 37);">
                    <exchange></exchange>
                </div>
                <div class="exchange_dealsWrapper__L28jj">
                    <complete></complete>
                </div>
                <div class="exchange_actionWrapper__7IkvE">
                    <trade></trade>
                </div>
                <div class="exchange_ordersWrapper__18eDb" style="overflow: auto; background-color: rgb(24, 29, 37);">
                    <div class="entrusts" style="height: 100% !important;">
                        <div class="tab-entrust">
                            <span class="fColor1"  :class="{active:whichEntrust == 'entrust'}"
                                @click="whichEntrust = 'entrust'">{{ $t('dealTv.cdel') }}</span>
                            <span  class="fColor1" :class="{active:whichEntrust == 'hisentrust'}"
                                    @click="whichEntrust = 'hisentrust'">{{ $t('dealTv.hdeal') }}</span>
                        </div>
                        <div class="scroll flex column" style="height: 100% !important;">
                            <div class="entrust-box" v-if="whichEntrust == 'entrust'">
                                <entrust></entrust>
                            </div>
                            <div class="histentrust-box" v-if="whichEntrust == 'hisentrust'">
                                <hisentrust></hisentrust>
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
	  import indexFooter from '@/view/indexFooter';
  import exchange from "@/view/lever/lever_exchange";
  import trade from "@/view/tradev2";
  import entrust from "@/view/entrust";
  import hisentrust from "@/view/hisentrust";
  import complete from "@/view/complete";
import TvTop from '@/view/tvTop.vue'
  let widget;
  export default {
    name: "dealCenter",
    components: {
		indexHeader,
		indexFooter,
      load: 1,
      exchange,
      trade,
      entrust,
      hisentrust,
      // detail,
      complete,
      TvTop,
      // kline,
    },
    data() {
      return {
        isRouterAlive: true,
        whichEntrust: 'entrust',
        widget: null,
        symbolInfo: null,
        feed: null,
        wsEx: null,
        ws: null,
        lists: [],
        newData: '',
        symbol: '',
        priceScale: 10000,
        histime: '',
        leftName: "",
        rightName: "",
        lastPrice: "0.0000",
        change: '0.00',
        highPrice: '0.0000',
        lowPrice: '0.0000',
        volumn: '0.00',
        rateNum: 1,
        loadingK: false
      };
    },
    created() {
        this.symbol = window.localStorage.getItem('symbol');

        this.leftName = window.localStorage.getItem("legal_name") || "";
        this.rightName = window.localStorage.getItem("currency_name") || "";
        this.currencyId = window.localStorage.getItem("legal_id");
        this.legalId = window.localStorage.getItem("currency_id");
        // this.init(this.legalId, this.currencyId);
        this.downUp = window.localStorage.getItem("downUp");

        this.createWidget();
    },
    sockets: {},
    computed: {
        listenState() { //监听交易对
            return this.symbol;
        }
    },
    watch: {
        listenState: function (a, b) {  //监听交易对
            if (a != b && b != '') {
                this.widget.setSymbol(a, localStorage.getItem('tim'), function onReadyCallback() {
                }) //切换币种
                // this.$store.state.symbol=b
            }
        }
    },
    methods: {
        connect(real) { //封装推送数据
            let that = this;
            let arr = {'1':'1min','5':'5min','15':'15min','30':'30min','60':'60min','1D':'1day','1W':'1week','1M':'1mon'};
            that.$socket.emit("login", localStorage.getItem('user_id'));
            that.sockets.subscribe("kline", msg => {
                let obj = {}
                if (that.symbol == msg.symbol) {
                    obj.open = Number(msg.open)
                    obj.low = Number(msg.low)
                    obj.high = Number(msg.high)
                    obj.close = Number(msg.close)
                    obj.volume = Number(msg.volume)
                    obj.time = Number(msg.time)
                    // if (that.loadingK === false && obj.low>0.000001 && msg.period == arr[localStorage.getItem('tim')]) {
                    //     real(obj)
                    // }
                    obj.change = msg.change;
                    obj.period = msg.period;
                    if(msg.period == '1min'||msg.period == '1day'){
                        eventBus.$emit('updateKLine', obj);
                    }
                }
            });
            that.sockets.subscribe('daymarket', msg => {
                if (that.symbol == msg.symbol) {
                    that.lastPrice = msg.close
                    that.volumn = msg.volume
                    that.highPrice = Number(msg.high)
                    that.lowPrice = Number(msg.low)
                    that.change = msg.change
                }
            })
        },
        createWidget() {
            let _this = this;
            this.$nextTick(function () {
                widget = _this.widget = new TradingView.widget({
                    symbol: _this.symbol,
                    interval: 1,
                    debug: false,
                    fullscreen: false,
                    autosize: true,
                    container_id: "tv_chart_container",
                    // datafeed: new Datafeeds.UDFCompatibleDatafeed("http://demo_feed.tradingview.com"),
                    datafeed: _this.createFeed(),
                    library_path: "./static/tradeview/charting_library/",
                    custom_css_url: 'bundles/new.css',
                    locale: localStorage.lang || 'zh',
                    width: "100%",
                    height: 516,
                    drawings_access: {type: 'black', tools: [{name: "Regression Trend"}]},
                    disabled_features: [  //  禁用的功能
                        'header_saveload', 'compare_symbol',
                        'header_chart_type', 'header_compare', 'header_interval_dialog_button',
                        'header_resolutions', 'header_screenshot', 'header_symbol_search', 'header_undo_redo',
                        'legend_context_menu', 'show_hide_button_in_legend', 'show_interval_dialog_on_key_press',
                        'snapshot_trading_drawings', 'symbol_info', 'timeframes_toolbar', 'use_localstorage_for_settings',
                        'volume_force_overlay'
                    ],
                    enabled_features: [ //  启用的功能（备注：disable_resolution_rebuild 功能用于控制当时间范围为1个月时，日期刻度是否都是每个月1号
                        'dont_show_boolean_study_arguments', 'hide_last_na_study_output', 'move_logo_to_main_pane',
                        'same_data_requery', 'side_toolbar_in_fullscreen_mode', 'disable_resolution_rebuild'
                    ],
                    charts_storage_url: 'http://saveload.tradingview.com',
                    charts_storage_api_version: "1.1",
                    toolbar_bg: "transparent",
                    timezone: "Asia/Shanghai",
                    studies_overrides: {
                        'volume.precision': '1000'
                    },
                    overrides: _this.overrides(),
                    loading_screen: {backgroundColor: 'transparent', foregroundColor: 'transparent'}
                });
                widget.MAStudies = [];
                widget.selectedIntervalButton = null;
                // widget.setLanguage('en')
                widget.onChartReady(function () { //图表方法
                    // document.getElementById('trade-view').childNodes[0].setAttribute('style', 'display:block;width:100%;height:100%;');
                    //let that =this
                    widget.chart().createStudy('Moving Average', false, true, [5, 'close', 0], null, {'Plot.color': '#e843da'});
                    widget.chart().createStudy("MA Cross", false, false, [10, 30]);
                    let buttonArr = [
                        {
                        value: "1min",
                        period: "1",
                        text: _this.$t('tv.realtime'),
                        chartType: 3
                        },
                        {
                        value: "1",
                        period: "1m",
                        text: "1" + _this.$t('m'),
                        chartType: 1
                        },
                        {
                        value: "5",
                        period: "5m",
                        text: "5" + _this.$t('m'),
                        chartType: 1
                        },
                        {
                        value: "15",
                        period: "15m",
                        text: "15" + _this.$t('m'),
                        chartType: 1
                        },
                        {
                        value: "30",
                        period: "30m",
                        text: "30" + _this.$t('m'),
                        chartType: 1
                        },
                        {
                        value: "60",
                        period: "60分钟",
                        text: "1" + _this.$t('hour'),
                        chartType: 1
                        },
                        {
                        value: "1D",
                        period: "1D",
                        text: "1" + _this.$t('day'),
                        chartType: 1
                        },
                        {
                        value: "1W",
                        period: "1W",
                        text: "1" + _this.$t('week'),
                        chartType: 1
                        }, {
                        value: "1M",
                        period: "1M",
                        text: "1" + _this.$t('mon'),
                        chartType: 1
                        }
                    ];
                    let btn = {};
                    let nowTime = '';
                    buttonArr.forEach((v, i) => {
                        // console.log(v)
                        let button = widget.createButton()
                        button.attr('title', v.text)
                            .addClass("my2")
                            .text(v.text)
                        if (v.text == '1' + _this.$t('m')) {
                            button.css({"background-color": "#00a4d8", 'color': '#fff'});
                            button.addClass('mydate');
                            localStorage.setItem('tim', '1')  //默认为1分钟
                        }
                        // console.log($(this),'999999')
                        btn = button.on("click", function (e) {
                            $(this).parents(".left").children().find(".my2").removeAttr("style"); //去掉1分钟的
                            handleClick(e, v.value);
                            widget.chart().setChartType(v.chartType); //改变K线类型
                        });
                    });
                    let handleClick = (e, value) => {
                        _this.setSymbol = function (symbol, value) {
                            gh.chart().setSymbol(symbol, value);
                        };
                        localStorage.setItem('tim', value)
                        widget.chart().setResolution(value, function onReadyCallback() {
                            _this.loadingK = false;
                        });  //改变分辨率
                        $(e.target)
                            .addClass("mydate")
                            .closest("div.space-single")
                            .siblings("div.space-single")
                            .find("div.button")
                            .removeClass("mydate")
                    };
                });
                _this.widget = widget;
            })
        },
        createFeed() {
            let this_vue = this;
            let Datafeed = {};
            let instance = this


            Datafeed.DataPulseUpdater = function (datafeed, updateFrequency) {
                this._datafeed = datafeed;
                this._subscribers = {};

                this._requestsPending = 0;
                var that = this;

                var update = function () {
                    if (that._requestsPending > 0) {
                        return;
                    }

                    for (var listenerGUID in that._subscribers) {
                        var subscriptionRecord = that._subscribers[listenerGUID];
                        var resolution = subscriptionRecord.resolution;

                        var datesRangeRight = parseInt((new Date().valueOf()) / 1000);


                        //	BEWARE: please note we really need 2 bars, not the only last one
                        //	see the explanation below. `10` is the `large enough` value to work around holidays
                        var datesRangeLeft = datesRangeRight - that.periodLengthSeconds(resolution, 10);

                        that._requestsPending++;

                        (function (_subscriptionRecord) { // eslint-disable-line
                        that._datafeed.getBars(_subscriptionRecord.symbolInfo, resolution, datesRangeLeft, datesRangeRight, function (bars) {
                                that._requestsPending--;

                                //	means the subscription was cancelled while waiting for data
                                if (!that._subscribers.hasOwnProperty(listenerGUID)) {
                                return;
                                }

                                if (bars.length === 0) {
                                return;
                                }

                                var lastBar = bars[bars.length - 1];
                                if (!isNaN(_subscriptionRecord.lastBarTime) && lastBar.time < _subscriptionRecord.lastBarTime) {
                                return;
                                }

                                var subscribers = _subscriptionRecord.listeners;

                                //	BEWARE: this one isn't working when first update comes and this update makes a new bar. In this case
                                //	_subscriptionRecord.lastBarTime = NaN
                                var isNewBar = !isNaN(_subscriptionRecord.lastBarTime) && lastBar.time > _subscriptionRecord.lastBarTime;

                                //	Pulse updating may miss some trades data (ie, if pulse period = 10 secods and new bar is started 5 seconds later after the last update, the
                                //	old bar's last 5 seconds trades will be lost). Thus, at fist we should broadcast old bar updates when it's ready.
                                if (isNewBar) {
                                if (bars.length < 2) {
                                    throw new Error('Not enough bars in history for proper pulse update. Need at least 2.');
                                }

                                var previousBar = bars[bars.length - 2];
                                for (var i = 0; i < subscribers.length; ++i) {
                                    subscribers[i](previousBar);
                                }
                                }

                                _subscriptionRecord.lastBarTime = lastBar.time;

                                for (var i = 0; i < subscribers.length; ++i) {
                                subscribers[i](lastBar);
                                }
                            },

                            //	on error
                            function () {
                                that._requestsPending--;
                            });
                        })(subscriptionRecord);
                    }
                }

                if (typeof updateFrequency != 'undefined' && updateFrequency > 0) {
                    setInterval(update, updateFrequency);
                }
            };

            Datafeed.DataPulseUpdater.prototype.periodLengthSeconds = function (resolution, requiredPeriodsCount) {
                var daysCount = 0;

                if (resolution === 'D') {
                    daysCount = requiredPeriodsCount;
                } else if (resolution === 'M') {
                    daysCount = 31 * requiredPeriodsCount;
                } else if (resolution === 'W') {
                    daysCount = 7 * requiredPeriodsCount;
                } else {
                    daysCount = requiredPeriodsCount * resolution / (24 * 60);
                }

                return daysCount * 24 * 60 * 60;
            };

            Datafeed.DataPulseUpdater.prototype.subscribeDataListener = function (symbolInfo, resolution, newDataCallback, listenerGUID) {
                this._datafeed._logMessage('Subscribing ' + listenerGUID);

                if (!this._subscribers.hasOwnProperty(listenerGUID)) {
                    this._subscribers[listenerGUID] = {
                        symbolInfo: symbolInfo,
                        resolution: resolution,
                        lastBarTime: NaN,
                        listeners: []
                    };
                }

                this._subscribers[listenerGUID].listeners.push(newDataCallback);
            };

            Datafeed.DataPulseUpdater.prototype.unsubscribeDataListener = function (listenerGUID) {
                this._datafeed._logMessage('Unsubscribing ' + listenerGUID);
                delete this._subscribers[listenerGUID];
            };

            Datafeed.Container = function (updateFrequency) {
                this._configuration = {
                    supports_search: false,
                    supports_group_request: false,
                    supported_resolutions: ['1', '3', '5', '15', '30', '60', '120', '240', '360', '720', '1D', '3D', '1W', '1M'],
                    supports_marks: true,
                    supports_timescale_marks: true,
                    exchanges: ['gh']
                };

                this._barsPulseUpdater = new Datafeed.DataPulseUpdater(this, updateFrequency || 10 * 1000);
                // this._quotesPulseUpdater = new Datafeed.QuotesPulseUpdater(this);

                this._enableLogging = true;
                this._callbacks = {};

                this._initializationFinished = true;
                this._fireEvent('initialized');
                this._fireEvent('configuration_ready');
            };

            Datafeed.Container.prototype._fireEvent = function (event, argument) {
                if (this._callbacks.hasOwnProperty(event)) {
                    var callbacksChain = this._callbacks[event];
                    for (var i = 0; i < callbacksChain.length; ++i) {
                        callbacksChain[i](argument);
                    }

                    this._callbacks[event] = [];
                }
            };

            Datafeed.Container.prototype._logMessage = function (message) {
                if (this._enableLogging) {
                    var now = new Date();
                    // console.log("CHART LOGS: "+now.toLocaleTimeString() + '.' + now.getMilliseconds() + '> ' + message);
                }
            };

            Datafeed.Container.prototype.on = function (event, callback) {
                if (!this._callbacks.hasOwnProperty(event)) {
                    this._callbacks[event] = [];
                }

                this._callbacks[event].push(callback);
                return this;
            };

            Datafeed.Container.prototype.onReady = function (callback) {
                let that = this;
                if (this._configuration) {
                    setTimeout(function () {
                        callback(that._configuration);
                    }, 0);
                } else {
                    this.on('configuration_ready', function () {
                        callback(that._configuration);
                    });
                }
            };

            Datafeed.Container.prototype.resolveSymbol = function (symbolName, onSymbolResolvedCallback, onResolveErrorCallback) {
                this._logMessage("GOWNO :: resolve symbol " + symbolName);
                Promise.resolve().then(() => {
                // console.log(this_vue.priceScale,'12345s313123122adaslast')


                // this._logMessage("GOWNO :: onResultReady inject "+'AAPL');
                // console.log(this_vue.priceScale,'123stf')
                onSymbolResolvedCallback({
                    "name": this_vue.symbol,
                    "timezone": "Asia/Shanghai",
                    "pricescale": this_vue.priceScale,
                    "minmov": 1, //minmov(最小波动), pricescale(价格精度), minmove2, fractional(分数)
                    "minmov2": 0,//这是一个神奇的数字来格式化复杂情况下的价格。
                    "ticker": this_vue.symbol,
                    "description": "",
                    "type": "bitcoin",
                    "volume_precision": 8,
                    // "exchange-traded": "sdt",
                    // "exchange-listed": "sdt",
                    //现在，这两个字段都为某个交易所的略称。将被显示在图表的图例中，以表示此商品。目前此字段不用于其他目的。
                    "has_intraday": true,
                    "has_weekly_and_monthly": true,
                    "has_no_volume": false, //布尔表示商品是否拥有成交量数据。
                    'session': '24x7',
                    'supported_resolutions': ['1', '3', '5', '15', '30', '60', '120', '240', '360', '720', '1D', '3D', '1W', '1M']

                });
                })
            };


            //初始化数据
            Datafeed.Container.prototype.getBars = function (symbolInfo, resolution, rangeStartDate, rangeEndDate, onHistoryCallback, onErrorCallback) {
                

                instance.loadingK = true;

                if (resolution.indexOf('D') == -1 && resolution.indexOf('W') == -1 && resolution.indexOf('M') == -1) {
                    resolution = resolution + 'min'
                } else if (resolution.indexOf('W') != -1 || resolution.indexOf('M') != -1) {
                    resolution = resolution
                }
                let url = '/api/currency/new_timeshar?from=' + rangeStartDate + '&to=' + rangeEndDate + '&symbol=' + symbolInfo.name + '&period=' + resolution;
                instance.$http.get(url).then(function (resj) {
                    // setTimeout(() => {
                    //     instance.loadingK = false;
                    // }, 2000)
                    let res = resj.data;

                    if (res.code == 1 && res.data && res.data.length > 0) {
                        res.data.forEach((item, i) => {
                            item.open = Number(item.open)
                            item.close = Number(item.close)
                            item.high = Number(item.high)
                            item.low = Number(item.low)
                        })
                        onHistoryCallback(res.data, {noData: false})
                        onHistoryCallback([], {noData: true})
                    }
                    if (!res.data || res.code == -1) {
                        onHistoryCallback([], {noData: true})
                    }
                    if (res.data && res.data.length == 0) {
                        onHistoryCallback([], {noData: true})
                    }
                })

            };
            //实时数据
            Datafeed.Container.prototype.subscribeBars = function (symbolInfo, resolution, onRealtimeCallback, listenerGUID, onResetCacheNeededCallback) {
                this_vue.connect(onRealtimeCallback)

                this._barsPulseUpdater.subscribeDataListener(symbolInfo, resolution, onRealtimeCallback, listenerGUID, onResetCacheNeededCallback);
            };

            Datafeed.Container.prototype.unsubscribeBars = function (listenerGUID) {

                this._barsPulseUpdater.unsubscribeDataListener(listenerGUID);

            };

            return new Datafeed.Container;
        },
        updateData(data) {
            if (data) {
                this.$emit('real-time', data);
            }
        },
        updateWidget(item) {
            this.symbolInfo = {
                name: item,
                ticker: item,
                description: "",
                session: "24x7",
                supported_resolutions: ['1', '5', '15', '30', '60', '240', '1D', '3D', '1W', '1M'],
                has_intraday: true,
                has_daily: true,
                has_weekly_and_monthly: true,
                timezone: "UTC",
            }

            this.removeWidget();
            this.createWidget();
        },
        removeWidget() {
            if (this.widget) {
                try {
                    this.widget.remove();
                    this.widget = null;
                } catch (e) {
                    console.log(5,e);
                }
            }
        },
        overrides() {
            let style = {
                up: "#35b65a",
                down: "#ff494a",
                bg: "#181d25",
                grid: "#1E2740",
                cross: "#c7cce6",
                border: "#181d25",
                text: "#c7cce6",
                areatop: "rgba(122, 152, 247, .1)",
                areadown: "rgba(122, 152, 247, .02)"
            };
            return {
                'volumePaneSize': "medium", //large, medium, small, tiny
                'paneProperties.topMargin': '20',
                "scalesProperties.lineColor": style.text,
                "scalesProperties.textColor": style.text,
                "paneProperties.background": style.bg,//改变背景色的重要代码
                "paneProperties.vertGridProperties.color": style.grid,
                "paneProperties.horzGridProperties.color": style.grid,
                "paneProperties.crossHairProperties.color": style.cross,
                "paneProperties.legendProperties.showLegend": true,
                "paneProperties.legendProperties.showStudyArguments": true,
                "paneProperties.legendProperties.showStudyTitles": true,
                "paneProperties.legendProperties.showStudyValues": true,
                "paneProperties.legendProperties.showSeriesTitle": true,
                "paneProperties.legendProperties.showSeriesOHLC": true,
                "mainSeriesProperties.candleStyle.upColor": style.up,
                "mainSeriesProperties.candleStyle.downColor": style.down,
                "mainSeriesProperties.candleStyle.drawWick": true,
                "mainSeriesProperties.candleStyle.drawBorder": true,
                "mainSeriesProperties.candleStyle.borderColor": style.border,
                "mainSeriesProperties.candleStyle.borderUpColor": style.up,
                "mainSeriesProperties.candleStyle.borderDownColor": style.down,
                "mainSeriesProperties.candleStyle.wickUpColor": style.up,
                "mainSeriesProperties.candleStyle.wickDownColor": style.down,
                "mainSeriesProperties.candleStyle.barColorsOnPrevClose": false,
                "mainSeriesProperties.hollowCandleStyle.upColor": style.up,
                "mainSeriesProperties.hollowCandleStyle.downColor": style.down,

                "mainSeriesProperties.hollowCandleStyle.drawWick": true,
                "mainSeriesProperties.hollowCandleStyle.drawBorder": true,
                "mainSeriesProperties.hollowCandleStyle.borderColor": style.border,
                "mainSeriesProperties.hollowCandleStyle.borderUpColor": style.up,
                "mainSeriesProperties.hollowCandleStyle.borderDownColor": style.down,
                "mainSeriesProperties.hollowCandleStyle.wickColor": style.line,
                "mainSeriesProperties.haStyle.upColor": style.up,
                "mainSeriesProperties.haStyle.downColor": style.down,
                "mainSeriesProperties.haStyle.drawWick": true,
                "mainSeriesProperties.haStyle.drawBorder": true,
                "mainSeriesProperties.haStyle.borderColor": style.border,
                "mainSeriesProperties.haStyle.borderUpColor": style.up,
                "mainSeriesProperties.haStyle.borderDownColor": style.down,
                "mainSeriesProperties.haStyle.wickColor": style.border,
                "mainSeriesProperties.haStyle.barColorsOnPrevClose": false,
                "mainSeriesProperties.barStyle.upColor": style.up,
                "mainSeriesProperties.barStyle.downColor": style.down,
                "mainSeriesProperties.barStyle.barColorsOnPrevClose": false,
                "mainSeriesProperties.barStyle.dontDrawOpen": false,
                "mainSeriesProperties.lineStyle.color": style.border,
                "mainSeriesProperties.lineStyle.linewidth": 1,
                "mainSeriesProperties.lineStyle.priceSource": "close",
                "mainSeriesProperties.areaStyle.color1": style.areatop,
                "mainSeriesProperties.areaStyle.color2": style.areadown,
                "mainSeriesProperties.areaStyle.linecolor": style.border,
                "mainSeriesProperties.areaStyle.linewidth": 1,
                "mainSeriesProperties.areaStyle.priceSource": "close"
            }
            // this.sty2()
        },


        chose() {
            // console.log(this.widget,'000')
            this.widget.setLanguage('en') //设置语言

            // this.$store.commit('symbol','sdt')
            // this.$store.state.symbol='sdt6456' //切换交易对
        }
    },
    mounted() {
        instance = this;

        eventBus.$on("toNew", function (msg) {
            let thattoken = instance.rightName + '/' + instance.leftName;
            if (msg.istoken == thattoken) {
                instance.lastPrice = (msg.newprice - 0).toFixed(4);
                instance.downUp = (msg.newup - 0).toFixed(2);
                // that.coin.total = msg.hour24;
            }
        });

        eventBus.$on('receiveRate', function (msg) {
        // console.log('laaaaaaaaa',msg);
            instance.rateNum = msg;

        });

        eventBus.$on('updateKLine', res => {
            if (res.period === '1min') {
                instance.lastPrice = (res.close - 0).toFixed(4);
            }else{

                instance.highPrice = (res.high - 0).toFixed(4);
                instance.lowPrice = (res.low - 0).toFixed(4);
                instance.volumn = (res.volume - 0).toFixed(4);
            }
            if (res.change) {
                instance.change = res.change;
            }
        })
    },
    destroyed() {
        this.removeWidget();
    },
  };
  </script>
  
  <style scoped lang="scss">
  

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
  