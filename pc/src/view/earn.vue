<template>
    <div>
        <indexHeader></indexHeader>
        <div class="orders_wrapper__LzKC_">
            <div class="orders_header__3tuKh">
                <div class="orders_headerContent__wtzwP">
                    <div class="orders_tabs__aFmI7" style="display: flex; justify-content: space-between;">
                        <span class="orders_tab__QTIZ1 orders_active__2pqkg">{{$t("earn.financial_order")}}</span>
                        <span class="orders_tab__QTIZ1" style="padding: 0px; margin: 0px; cursor: pointer;" @click="goBack">{{$t("earn.go_back")}}</span>
                    </div>
                </div>
            </div>
            <div class="orders_details__TmnGT">
                <div class="mx-table-not-hover earn_tabsWrapper__bcQ5I">
                    <el-tabs v-model="activeName">
                        <el-tab-pane label='Staking' name="first">
                            <div role="tabpanel" id="pane-first" aria-labelledby="tab-first" class="el-tab-pane">
                                <div style="display: flex; justify-content: space-between;">
                                    <div>
                                        <button @click="getData" type="button" class="ant-btn ant-btn-primary" style="margin-inline-start: 10px; background-color: rgb(38, 110, 255); border-color: rgb(38, 110, 255); color: white;">
                                            <svg focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024" data-icon="RedoOutlined" class="sc-bcXHqe fzgrYP mx-icon iconfont iconredo earn_refreshIcon__X9Uxk">
                                                <path d="M762.578824 819.802353a375.808 375.808 0 0 0 144.685176-296.598588 376.109176 376.109176 0 0 0-375.868235-376.350118 376.410353 376.410353 0 0 0-238.110118 668.310588 7.649882 7.649882 0 0 0 10.721882-1.204706l37.044706-47.585882a7.529412 7.529412 0 0 0-1.084235-10.420706 299.971765 299.971765 0 0 1-110.290824-232.749176 299.911529 299.911529 0 0 1 88.184471-212.87153 299.911529 299.911529 0 0 1 212.931765-88.18447 299.971765 299.971765 0 0 1 212.871529 88.18447 299.791059 299.791059 0 0 1 88.244706 212.87153 299.791059 299.791059 0 0 1-115.772235 237.327059l-38.309647-48.971295a7.529412 7.529412 0 0 0-13.251765 2.770824l-37.285647 152.696471a7.529412 7.529412 0 0 0 7.228235 9.276235l157.214118 0.783059c6.264471 0 9.878588-7.228235 5.903059-12.16753l-35.117177-45.056z"></path>
                                            </svg>
                                            <span>{{$t("earn.refresh")}}</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                    <div style="padding: 0px 20px 20px;">
                        <el-table
                                :data="tableData"
                                style="width: 100%">
                            <el-table-column
                                    :label="$t('earn.amount_of_deposit')"
                                    width="171">
                                    <template slot-scope="scope">
                                        <span style="color: black;">{{ parseFloat(scope.row.amount) }}</span>
                                    </template>
                            </el-table-column>
                            <el-table-column
                                    :label="$t('earn.daily_yield')"
                                    width="171">
                                    <template slot-scope="scope">
                                        <span style="color: black;">{{ parseFloat(100 * scope.row.day_rate) }}</span>
                                    </template>
                            </el-table-column>
                            <el-table-column
                                    :label="$t('earn.lockup_time')"
                                    width="171">
                                    <template slot-scope="scope">
                                        <span style="color: black;">{{ scope.row.start_at }}</span>
                                    </template>
                            </el-table-column>
                            <el-table-column
                                    :label="$t('earn.maturity_time')"
                                    width="171">
                                    <template slot-scope="scope">
                                        <span style="color: black;">{{ scope.row.end_at }}</span>
                                    </template>
                            </el-table-column>
                            <el-table-column
                                    :label="$t('earn.liquidated_damages_for_early_redemption')"
                                    width="171">
                                    <template slot-scope="scope">
                                        <span style="color: #E14544;">{{ parseFloat(scope.row.cancel_fee.toFixed(2)) + "USDT" }}</span>
                                    </template>
                            </el-table-column>
                            <el-table-column
                                    :label="$t('earn.status')"
                                    width="171">
                                    <template slot-scope="scope">
                                        <span style="color: white;background-color:#28ba98;" v-if="scope.row.status == 1">{{ $t("earn.in_progress") }}</span>
                                        <span style="color: white;background-color:#E14544;" v-if="scope.row.status == 2">{{ $t("earn.redeemed") }}</span>
                                    </template>
                            </el-table-column>
                            <el-table-column
                                    :label="$t('earn.operation')"
                                    width="171">
                                    <template slot-scope="scope">
                                        <el-button @click="redemption(scope.row.id)" size="medium" style="color: white;background-color:#fa3534;border-color:#fa3534;" v-if="scope.row.status == 1">{{ $t("earn.redemption") }}</el-button>
                                    </template>
                            </el-table-column>
                        </el-table>
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
    name: 'earn',
    data() {
        return {
            activeName: "first",
            value1: "",
            tableData: [],
            token: ""
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
                    this.getData()
                }
                )
            }
            ).catch(()=>{}
            )
        },
        goBack() {
            this.$router.go(-1)
        },
        getData() {
            var t = this;
            this.$http({
                url: "/api/lh/deposit/order?page=1&limit=9999&status=&lang=" + window.localStorage.getItem("lang") || !1,
                method: "GET",
                data: {},
                headers: {
                    Authorization: t.token
                }
            }).then(e=>{
                t.tableData = e.data.message.order_list
            }
            )
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
.earn_tabsWrapper__bcQ5I {
    background-color: #292f40;
    padding-top: 20px;
}
.el-tab-pane {
    padding: 20px;
    border-bottom: 1px solid #fff;
}
</style>
  