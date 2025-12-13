<template>
    <div class="upStar" v-loading="loading" style="height: auto; background-color: #181d25;">
        <indexHeader></indexHeader>
        <div class="flex alcenter" style="
    width: 100%; height: 320px;
    background:#00a4d8; color:#fff;
    background-size:cover;
    background-image:url('../static/imgs/iepnbg.jpg');">
            <div style="width: 1200px; margin: 0 auto;">
                <h1 style="line-height: 100px;font-size: 24px;">
                    {{ $t('iepn.htitle') }}
                </h1>
                <h5 style="line-height: 60px;font-size: 18px;">{{ $t('iepn.subtitle') }}</h5>
            </div>
        </div>


        <div class="SellInfo-wrap"
             style="width: 1200px; margin-top: -15px; background: #fff; margin: -15px auto 0; border-radius:10px;">
            <div class="ModuleTitle-wrap flex alcenter">
                <div class="flex1">{{$t('iepn.ieorecord')}}</div>
                <div style="padding-right: 30px;">
                    <!--          <el-link href="/#/dealCenter" type="warning">去交易</el-link>-->

                    <button type="button" class="el-button more-btn el-button--default"><!---->
                        <span><i class="el-icon-s-help ft20"></i></span>
                    </button>

                </div>
            </div>
            <div class="title">{{currency}}</div>
            <div class="plan-amount">{{ $t('iepn.plannum') }}:{{ iepn.total }}</div>
            <div id="echarts" style="width: 600px; margin:0 auto; height: 400px;">
                <v-chart :options="polar" width="482" height="322"/>
            </div>
            <div style="padding:20px;">
                <el-tabs class="mt20" v-model="defaultPanel" align-center>
                    <el-tab-pane :label="$t('iepn.ieobuy')" name="first" style="height: 300px;">

                        <el-form class="input-white" ref="form" :model="form" label-width="80px">
                            <el-form-item :label="$t('iepn.nowprice')">
                                            <span class="ft18" :class="change>0?'green':'red'">{{price}}<i
                                                    class="fColor2 ft14 ml10"
                                                    style="font-style: normal;">USDT</i></span>
                            </el-form-item>
                            <el-form-item label="Market price">
                                            <span class="ft18" :class="change>0?'green':'red'">{{dprice}}<i
                                                    class="fColor2 ft14 ml10"
                                                    style="font-style: normal;">USDT</i></span>
                            </el-form-item>
                            <el-form-item :label="$t('iepn.ieoamount')">
                                <el-input :placeholder="$t('iepn.ieomaxamount')+asset_list.change_balance"
                                          v-model="form.name">
                                    <i slot="suffix" @click="form.name=parseInt(asset_list.change_balance)"
                                       style="cursor:pointer; font-style: normal;">{{$t('lever.all')}}</i>
                                </el-input>
                            </el-form-item>
                            <el-form-item :label="$t('iepn.ieoscount')">
                            <span class="ft16">
                              ≈ {{form.name/price|toFixeds(4)}}<i class="fColor2 ft14 ml5"
                                                                  style="font-style: normal;">{{currency}}</i></span>>={{iepn.min}}

                            </el-form-item>

                            <el-form-item>
                                <el-button type="primary" @click="onSubmit">{{$t('iepn.ieobuynow')}}</el-button>

                            </el-form-item>
                        </el-form>

                    </el-tab-pane>
                    <el-tab-pane :label="$t('iepn.ieorecord')" name="second" style="height:300px; overflow: auto;">

                        <el-table
                                :data="records"
                                style="width: 100%">
                            <el-table-column
                                    prop="created_at"
                                    :label="$t('sgr.time')"
                                    width="180">
                            </el-table-column>
                            <el-table-column
                                    prop="account_number"
                                    :label="$t('sgr.user')">
                            </el-table-column>
                            <el-table-column
                                    prop="scount"
                                    :label="$t('iepn.ieoscount')"
                                    width="180">
                            </el-table-column>
                            <el-table-column
                                    prop="amount"
                                    :label="$t('iepn.ieoamount')"
                                    width="180">
                            </el-table-column>


                        </el-table>

                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>

        <div v-if="false" class="SellInfo-wrap"
             style="width: 1200px;  background: #fff; margin: -15px auto 0; border-radius:10px;">
            <div class="ModuleTitle-wrap flex alcenter">
                <div class="flex1">{{$t('iepn.ieorecord')}}</div>
                <div style="padding-right: 30px;">
                    <!--          <el-link href="/#/dealCenter" type="warning">去交易</el-link>-->

                    <button type="button" class="el-button more-btn el-button--default"><!---->
                        <span><i class="el-icon-star-off ft20"></i></span>
                    </button>


                </div>
            </div>
            <div style="padding:0 5%;">
                <el-steps :active="2">
                    <el-step :title="$t('iepn.pstart')" icon="el-icon-s-flag"></el-step>
                    <el-step :title="$t('iepn.pdoing')" icon="el-icon-s-promotion"></el-step>
                    <el-step :title="$t('iepn.pending')" icon="el-icon-success"></el-step>
                </el-steps>

                <!--        <el-input style="background: #f5f5f5;" v-model="buyNumber" placeholder="请输入内容"></el-input>-->
                <el-tabs class="mt20" v-model="defaultPanel" align-center>
                    <el-tab-pane :label="$t('iepn.ieobuy')" name="first" style="height: 300px;">

                        <el-form class="input-white" ref="form" :model="form" label-width="80px">
                            <el-form-item :label="$t('iepn.nowprice')">
                                <span class="ft18" :class="change>0?'green':'red'">{{price}}<i class="fColor2 ft14 ml10"
                                                                                               style="font-style: normal;">USDT</i></span>
                            </el-form-item>
                            <el-form-item :label="$t('iepn.ieoamount')">
                                <el-input :placeholder="$t('iepn.ieomaxamount')+asset_list.change_balance"
                                          v-model="form.name">
                                    <i slot="suffix" @click="form.name=parseInt(asset_list.change_balance)"
                                       style="cursor:pointer; font-style: normal;">{{$t('lever.all')}}</i>
                                </el-input>
                            </el-form-item>
                            <el-form-item :label="$t('iepn.ieoscount')">
                <span class="ft16">
                  ≈ {{form.name/price|toFixeds(4)}}<i class="fColor2 ft14 ml5"
                                                      style="font-style: normal;">{{currency}}</i></span>

                            </el-form-item>

                            <el-form-item>
                                <el-button type="primary" @click="onSubmit">{{$t('iepn.ieobuynow')}}</el-button>

                            </el-form-item>
                        </el-form>

                    </el-tab-pane>
                    <el-tab-pane :label="$t('iepn.ieorecord')" name="second" style="height:300px; overflow: auto;">

                        <el-table
                                :data="records"
                                style="width: 100%">
                            <el-table-column
                                    prop="created_at"
                                    :label="$t('sgr.time')"
                                    width="180">
                            </el-table-column>
                            <el-table-column
                                    prop="account_number"
                                    :label="$t('sgr.user')">
                            </el-table-column>
                            <el-table-column
                                    prop="scount"
                                    :label="$t('iepn.ieoscount')"
                                    width="180">
                            </el-table-column>
                            <el-table-column
                                    prop="amount"
                                    :label="$t('iepn.ieoamount')"
                                    width="180">
                            </el-table-column>


                        </el-table>

                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>


        <div class="HotRecommend-wrap hot-wrap">
            <div class="ModuleTitle-wrap">{{ $t('iepn.hotcommond') }}</div>
            <div class="body">
                <div class="img-wrap"><img
                        :src="lang==='zh'?'https://www.s-coin.vip/upload/1630853119431386.jpeg':'https://www.s-coin.vip/upload/1630853119431386.jpeg'"
                        alt=""
                        class="banner-img"></div>


                <div class="body-right">

                    <!--                    <div class="title"><span class="title-text">{{ $t('iepn.ctitle') }}</span></div>-->
                    <p class="content-text" style="margin-top:0; padding-top: 0;">{{
                        iepn.dsp
                        }}<br><br>{{ $t('iepn.starttime') }}:{{ iepn.start }}
                        <br>
                        <!--            {{ $t('iepn.plannum') }}：{{ iepn.total }} <br>-->
                        {{ $t('iepn.endtime') }}:{{ iepn.end }}</p>
                    <a href="https://iepninf.com/" target="_blank">
                        <button v-if="false" type="button" class="el-button more-btn el-button--default"><!---->
                            <!----><span>{{ $t('iepn.seemore') }}</span>
                        </button>
                    </a>
                    <a href="https://www.s-coin.vip/white.pdf" class="ml10" target="_blank">
                        <button v-if="false" type="button" class="el-button more-btn el-button--default"><!---->
                            <!----><span>{{ $t('iepn.baipishu') }}</span>
                        </button>
                    </a>
                </div>
            </div>
        </div>
        <indexFooter></indexFooter>
    </div>
</template>
<script>
    import indexHeader from "@/view/indexHeader";
    import indexFooter from "@/view/miniFooter";
    import ECharts from 'vue-echarts' // 在 webpack 环境下指向 components/ECharts.vue
    import echarts from 'echarts'

    export default {
        name: "upStar",
        filters: {
            toFixeds: function (value, n) {
                value = Number(value);
                return value.toFixed(n);
            }
        },
        components: {
            indexHeader, indexFooter,
            'v-chart': ECharts
        },
        data() {
            return {
                loading: false,
                asset_list: {},
                dycimalPrice: true,
                dprice: 0,
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                records: [],
                currency: plat_form_currency,
                currency_id: 0,
                price: 0,
                change: 0,
                defaultPanel: 'first',
                buyNumber: '',
                more: "{{$t('more')}}...",
                newList: [],
                iepn: {},
                polar: {
                    color: [
                        '#007aff',
                        '#57bc7d',
                    ],
                    tooltip: {
                        trigger: 'item'
                    },
                    legend: {
                        top: '5%',
                        left: 'center'
                    },
                    series: [
                        {
                            name: '',
                            type: 'pie',
                            radius: ['40%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                label: {
                                    show: true,
                                    fontSize: '40',
                                    fontWeight: 'bold'
                                }
                            },
                            labelLine: {
                                show: false
                            },
                            data: [
                                {value: 40000000, name: this.$t('iepn.pushednum')},
                                {value: 1802560, name: this.$t('iepn.remindnum')}
                            ]
                        }
                    ]
                },
                lang: localStorage.getItem('lang')
            };
        },
        created() {
            let that = this;
            that.$socket.emit("login", localStorage.getItem('user_id'));
            this.getdata();
            that.sockets.subscribe("kline", msg => {
                let obj = {}
                if (msg.symbol == that.currency + '/USDT') {
                    that.currency_id = msg.currency_id;
                    if (msg.period == '1min') {

                        that.price = that.dycimalPrice ? msg.close : that.iepn.price;
                        that.dprice = msg.close;
                    }
                    if (msg.period == '1day') {
                        that.change = msg.change;
                    }
                }
            });
        },
        methods: {
            getdata() {
                var that = this;
                this.$http({
                    url: "/api/wallet/list",
                    method: "post",
                    data: {},
                    headers: {Authorization: window.localStorage.getItem('token')}
                }).then(res => {
                    if (res.data.type == "ok") {
                        // alert(res.data.message);
                        res.data.message.change_wallet.balance.forEach(x => {
                            if (x.currency_name == "USDT") {
                                that.asset_list = x;
                            }
                        })
                    } else {
                        return;
                    }
                })
                    .catch(error => {
                        console.log(error);
                    });
            },
            getRecord() {
                // https://www.s-coin.vip/api/
                let that = this;
                this.$http({
                    url: "/api/ieo/record",
                    method: "get",
                    headers: {Authorization: window.localStorage.getItem('token')}
                }).then(res => {
                    that.records = res.data;
                }).catch(res => {

                });
            },
            goTrade() {

                this.$message.warning(this.lang === 'zh' ? '平台币功能演示站不可用' : 'Not support in demo site yet');

                // window.localStorage.setItem('currency_name', 'IEPN');
                // window.localStorage.setItem('currency_id', '18');
                // window.localStorage.setItem('symbol', 'IEPN/USDT');
                // window.localStorage.setItem('current', 'IEPN/USDT');
                // window.localStorage.setItem('index2', 12);
                // this.$router.push('/dealCenter');
            },
            getNotice() {
                this.$http({
                    url: '/api/' + 'news/list',
                    method: 'post',
                    data: {c_id: '3'},
                }).then(res => {
                    this.newList = res.data.message.list

                })
            },
            goBefore() {
                this.$router.back(-1);
            },
            getMore() {
            },
            goDetail(id) {
                var id = id;
                this.$router.push({
                    name: "noticeDetail",
                    query: {id: id}
                });
            },
            onSubmit() {
                let that = this;
                this.$confirm(this.$t('lay.confirm'), this.$t('auth2.reminder'), {
                    confirmButtonText: this.$t('lay.sure'),
                    cancelButtonText: this.$t('lay.ceil'),
                    type: 'warning'
                }).then(() => {

                    if ((that.amount / that.price) < that.iepn.min) {
                        that.$toast.info(`The purchase quantity shall not be less than ${that.iepn.min} ${that.currency}`);
                        return false;
                    }

                    that.loading = true;
                    this.$http({
                        url: "/api/wallet/ieo",
                        method: "post",
                        data: {currency: that.currency_id, amount: that.form.name},
                        headers: {Authorization: window.localStorage.getItem('token')}
                    }).then(res => {
                        that.loading = false;
                        if (res.data.type == "ok") {
                            // alert(res.data.message);
                            that.$message.success(res.data.message);
                            that.form.name = '';
                            that.getdata();
                            that.getRecord();
                        } else {
                            that.$message.warning(res.data.message);
                            // return;
                        }
                    }).catch(error => {
                        that.loading = false;
                        console.log(error);
                    });
                }).catch(() => {

                    // this.$message({
                    //     type: 'info',
                    //     message: '已取消删除'
                    // });
                });
            }
        },
        mounted() {
            this.iepn = {
                start: ieoStart,
                end: ieoEnd,
                price: ieoStartPrice
            };

            this.getRecord();
            // return;
            var that = this;
            this.$http({
                url: '/api/iepn',
                method: 'get'
            }).then(res => {
                that.iepn = res.data.message;
                that.dycimalPrice = !that.iepn.fixed;
                that.price = that.dycimalPrice == false ? that.iepn.price : 0;
                that.currency = that.iepn.currency;
                that.polar.series[0].data[0].value = that.iepn.yfx;
                that.polar.series[0].data[1].value = that.iepn.sy;

            })
        }
    };
</script>
<style lang="scss" scoped>
    .ModuleTitle-wrap {
        padding-top: 30px;
        padding-bottom: 30px;
        padding-left: 47px;
        position: relative;
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #12161c;
    }

    .input-white {
        /deep/ .el-input__inner {
            background: inherit !important;
            color: #888a85 !important;
            border: 1px solid #DCDFE6 !important;
        }

        /deep/ .el-input__inner:focus {

            border-color: #409EFF !important;
            outline: 0;

        }
    }

    .ModuleTitle-wrap:after {
        position: absolute;
        content: "";
        width: 4px;
        height: 23px;
        background: #00a4d8;
        border-radius: 2px;
        left: 26px;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
    }

    .SellInfo-wrap {
        .title {
            text-align: center;
            font-size: 16px;
            font-family: PingFang SC;
            font-weight: 400;
            color: #161515;
        }

        .plan-amount {
            text-align: center;
            padding-top: 30px;
            font-size: 14px;
            font-family: PingFang SC;
            font-weight: 400;
            color: #57bc7d;
        }

    }

    .hot-wrap {
        width: 1200px;
        margin: 0 auto;
        margin-top: 17px;
    }

    .more-btn {
        border: 0;
        padding: 12px 44px;
        //background: #efb82d;
        border-radius: 4px;
        font-size: 12px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #141414;
        font-weight: bold;
    }

    .HotRecommend-wrap {
        background: #fff;
        border-radius: 8px;
        padding-bottom: 38px;

        .body {
            display: flex;
            flex-direction: row;
            width: 100%;

            .img-wrap {
                flex: 1;
                padding-left: 26px;
            }

            .banner-img {
                width: 100%;
            }

            .body-right {
                width: 500px;
                padding-left: 65px;
                padding-right: 85px;
                text-align: center;
                box-sizing: content-box;

                .title-text {
                    font-size: 14px;
                    font-family: Adobe Heiti Std;
                    font-weight: 400;
                    color: #12161c;
                    position: relative;
                    z-index: 0;
                }

                .content-text {
                    padding-top: 35px;
                    padding-bottom: 50px;
                    font-size: 12px;
                    font-family: SimHei;
                    font-weight: 400;
                    color: #12161c;
                    line-height: 24px;
                    text-align: left;
                }

                .more-btn {
                    border: 0;
                    padding: 12px 44px;
                    //background: #efb82d;
                    border-radius: 4px;
                    font-size: 12px;
                    font-family: PingFang SC;
                    font-weight: 500;
                    color: #141414;
                    font-weight: bold;
                }
            }
        }

    }

</style>
