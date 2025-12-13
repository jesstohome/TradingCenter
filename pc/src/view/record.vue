<template>
    <div>
        <indexHeader></indexHeader>
        <div class="orders_wrapper__LzKC_">
            <div class="orders_header__3tuKh">
                <div class="orders_headerContent__wtzwP">
                    <div class="orders_tabs__aFmI7" style="display: flex; justify-content: space-between;">
                        <span class="orders_tab__QTIZ1 orders_active__2pqkg">{{$t("record.title")}}</span>
                        <span class="orders_tab__QTIZ1" style="padding: 0px; margin: 0px; cursor: pointer;" @click="goBack">{{$t("record.go_back")}}</span>
                    </div>
                </div>
            </div>
            <div class="sc-GVOUr gqtQR">
                <div class="sc-ksZaOG ibFHYE">
                    <div class="sc-bczRLJ kejfSv" style="margin: 88px 0px 32px;">
                        {{$t("record.order_list")}}
                    </div>
                </div>
                <div class="asset-detail-table tableWrapper">
                    <el-table
                            :data="list"
                            style="width: 100%">
                        <el-table-column
                                :label="$t('record.tr_th_1')"
                                >
                        </el-table-column>
                        <el-table-column
                                :label="$t('record.tr_th_2')"
                                >
                        </el-table-column>
                        <el-table-column
                                :label="$t('record.tr_th_3')"
                                >
                        </el-table-column>
                        <el-table-column
                                :label="$t('record.tr_th_4')"
                                >
                        </el-table-column>
                        <el-table-column
                                :label="$t('record.tr_th_5')"
                                >
                        </el-table-column>
                        <el-table-column
                                :label="$t('record.tr_th_6')"
                                >
                        </el-table-column>
                    </el-table>
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
    name: 'record',
    data() {
        return {
            list: []
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
        this.getData()
    },
    methods:{
        goBack() {
            window.history.go(-1)
        },
        getData() {
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
                t.list = e.data.message.list,
                t.list.forEach(t=>{
                    t.create_time = this.timeFormat(t.create, "yyyy-mm-dd hh:MM:ss"),
                    t.holdingDays = this.datedifference(t.create_time, t.end_time),
                    t.expectedProfits = this.calcIncome(t)
                }
                ),
                this.invest = [...this.invest, ...list]
            }
            )
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
        }
    }
  }
  </script>
  <style lang="scss" scoped>
  .orders_wrapper__LzKC_ {
    min-height: calc(100vh - 434px);
    padding-bottom: 100px;
}
.orders_header__3tuKh {
    background-color: #292f40;
    box-shadow: 0 2px 8px rgba(111,114,175,.15);
    margin-bottom: 32px;
}
.orders_headerContent__wtzwP {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
}
.orders_tab__QTIZ1.orders_active__2pqkg {
    border-color: #266eff;
}
.orders_tab__QTIZ1 {
    display: inline-block;
    line-height: 54px;
    color: #fff;
    -webkit-margin-end: 36px;
    margin-inline-end: 36px;
    cursor: pointer;
    font-size: 16px;
    border-bottom: 2px solid transparent;
}
.orders_details__TmnGT {
    margin: 32px auto 0;
    max-width: 1400px;
    width: 100%;
    box-shadow: 0 31px 30px 0 rgba(111,114,175,.08);
    border-radius: 4px;
    overflow: hidden;
}
.record_tabsWrapper__bcQ5I {
    background-color: #292f40;
    padding-top: 20px;
}
.el-tab-pane {
    padding: 20px;
    border-bottom: 1px solid #fff;
}
.ibFHYE {
    margin: 0 auto;
    width: 1440px;
}
.kejfSv {
    margin: 72px 0 48px;
    font-size: 28px;
    font-family: Gate_Sans Medium;
    font-weight: 500;
    color: #fff;
}
.tableWrapper {
    font-family: Gate_Sans Medium;
    font-weight: 500;
}
</style>
  