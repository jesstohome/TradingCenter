<template>
    <div>
        <div class="bonus_bonusRecordBg__eatMj" style="height: 100%;color:#fff">
            <div class="bonus_container__ILXum">
                <div class="bonus_recordTitle__0WArP" @click="goBack">
                    <span class="bonus_flex__V5yVs">
                        <svg focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024" data-icon="ArrowLeftSharp" class="sc-bcXHqe fzgrYP mx-icon iconfont iconic_back1 bonus_leftArrowIcon__k8XrR">
                            <path d="M853.333333 474.154667H334.08l238.506667-211.413334L512 209.408 170.666667 512l341.333333 302.549333 60.16-53.333333-238.08-211.370667H853.333333v-75.648z"></path>
                        </svg>
                        合约赠金活动 
                    </span>
                </div>
                <div class="bonus_listSection__1qhT1">
                    <div class="bonus_listSectionTitle__SjaPk">
                        <div>领取记录</div>
                        <div>
                            累计领取总赠金:
                            <span class="bonus_ml8__i_3S_">0 USDT</span>
                        </div>
                    </div>
                    <div id="scrollableDiv" class="bonus_scrollSitting__fyjgI">
                        <div class="infinite-scroll-component__outerdiv">
                            <div class="el-table el-table--fit el-table--enable-row-hover" style="width: 100%; height: 500px;">
                                <div class="hidden-columns">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div class="el-table__header-wrapper">
                                    <table cellspacing="0" cellpadding="0" border="0" class="el-table__header" style="width: 100%;">
                                        <colgroup>
                                            <col name="el-table_1_column_1" width="33%">
                                            <col name="el-table_1_column_2" width="33%">
                                            <col name="el-table_1_column_3" width="33%">
                                        </colgroup>
                                        <thead class="">
                                            <tr class="">
                                                <th colspan="1" rowspan="1" class="el-table_1_column_1     is-leaf el-table__cell">
                                                    <div class="cell">领取时间</div>
                                                </th>
                                                <th colspan="1" rowspan="1" class="el-table_1_column_2     is-leaf el-table__cell">
                                                    <div class="cell">领取数量</div>
                                                </th>
                                                <th colspan="1" rowspan="1" class="el-table_1_column_3     is-leaf el-table__cell">
                                                    <div class="cell">领取任务</div>
                                                </th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                                <div class="el-table__body-wrapper is-scrolling-none" style="height: 453px;">
                                    <table cellspacing="0" cellpadding="0" border="0" class="el-table__body" style="width: 100%;">
                                        <colgroup>
                                            <col name="el-table_1_column_1" width="33%">
                                            <col name="el-table_1_column_2" width="33%">
                                            <col name="el-table_1_column_3" width="33%">
                                        </colgroup>
                                        <tbody>
                                            
                                        </tbody>
                                    </table>
                                    <div class="el-table__empty-block" style="height: 100%; width: 100%;">
                                        <span class="el-table__empty-text">
                                            <img data-v-645debbe="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4BAMAAADLSivhAAAAKlBMVEUAAABjcIVjcIVjcIVjcIVjcIVjcIVjcIVjcIVjcIVjcIVjcIVjcIVjcIWC/CsrAAAADXRSTlMAQdlwuZEPXC3tgKUdAjvnGAAAAvZJREFUWMPtls9r02AYx9tuS7Kth+6yiVAoExw7BAYDkTmhm91thYkbngKZgjj0ENhBL4OI3mSgiFDRwsCbsovzJBQGOwkWXNq6tvH7v/i2Tfq+Wd+++aEgYj5Q3vL0+fDkeZ8meRMxMTExMUXzN2Qs/B357iJuXI0qayBElfcA1P9IzyebhUFu64HkCXA5E8kG7Z+LaBwX3cuSgbWtQYpoJvxJocQLJ2EHkKswuPHDVm9VPr01h8r74O9rFs5URXuXhTCuwK6AW1r5WCioKHhZM1h5DKaCDY4rVcCjlWHkVJ3cvjmOfAd8Thl5dJis4TVnwpuATuUJGDLvsiXUh9w1C1ROw1JxzPsf/OTKo8hTmaykDQdlqj/WEbzgyiPIMbJ07cg10kW0mSR/meUrgA02SSm4rPjKWuOJ2mSTRtHHVy7nE9U2mzQJl5avTKYwbrNJ0tIHh+XQlVn8e7Znys2o8g6Ag6hyuoJa2DlTpAveJGV1lmFOKFPonFnCyZNgscLJ0u4iw3Io+Tz/hZycf9NhPZKcQpeGWBbPuRat50ddMv/YbndI776f9pUf82VZBbDiI0s2V1ZUdFgXyw/tezw5C7TmyccUyTIAjpwE5vTESRnvRHJ6y7rFkXd6L68HsIL1LLFJh85RrwJDuNuXnFWjSfQNP45coDlXmCTZOSbSL2L5MwpmP2nMLSihFkRWgQx99PZf18VG6MtOYcGN2oFkzSMfhKt83/MwyLtv33bou2oEP5xjEk5Dy2l3kyfx3SPv+cukVZjOYW3DG7cCyPso9Y6D0Nn4c9QCyBPAFfIX0VCncUpJJBM04MtSEcBNc1BuCGU2t64PyGdCmfAMBPtbGbjsxF9OuZhimfB0dfbomNzYsHQa90Emk2W4Dqf0WBBZ8XZUhVN6h0zcHxXLnoN/r/S2igw/X1LRLUBWAZY+pM8uhgwhxpA+u5gKhAyZ0PYUYbqzDjIDwkr39whkAeTCa3TD8+E1WtqILCfVV4mYmJiYmPP8AsjbrIrdW8rUAAAAAElFTkSuQmCC" alt="">
                                            <p style="margin-top: -50px;">无数据</p>
                                        </span>
                                    </div>
                                </div>
                                <div class="el-table__column-resize-proxy" style="display: none;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'bonusRecord',
    data() {
      return {
        tableData: []
      }
    },
    mounted() {
        
    },
    created() {
        
    },
    methods: {
        goBack() {
            this.$router.push("/bonus")
        }
    }
  }
</script>
<style lang="scss" scoped>

.bonus_bonusRecordBg__eatMj {
    background: #151926;
    padding-bottom: 48px
}

.bonus_container__ILXum {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto
}

.bonus_recordTitle__0WArP {
    display: flex;
    font-size: 24px;
    font-weight: 500;
    padding-top: 32px;
    padding-bottom: 28px;
    cursor: pointer
}

.bonus_flex__V5yVs {
    display: flex;
    align-items: center
}

.fzgrYP {
    vertical-align: -.15em
}

.bonus_leftArrowIcon__k8XrR {
    display: flex;
    align-items: center;
    -webkit-margin-end: 8px;
    margin-inline-end:8px;font-size: 28px
}

.bonus_listSection__1qhT1 {
    background: #292f40;
    padding: 28px 32px
}

.bonus_listSectionTitle__SjaPk {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #edf0f3;
    padding-bottom: 28px;
    font-size: 16px
}

.bonus_listSectionTitle__SjaPk span {
    font-size: 18px;
    color: #2354e6
}

.bonus_ml8__i_3S_ {
    -webkit-margin-start: 8px;
    margin-inline-start:8px}

 .earn_tabsWrapper__bcQ5I .el-tabs__nav-scroll {
    padding: 0 24px;
    margin: 0;
    font-size: 18px;
    font-weight: 600
}

 .el-tabs--top .el-tabs__item.is-top:last-child {
    font-size: 18px;
    color: #fff;
    font-weight: 600
}

 .el-tabs__active-bar {
    width: 90px!important
}

 .el-tab-pane {
    padding: 20px;
    border: 0
}

 .el-table th.el-table__cell>.cell {
    padding: 0
}

 .el-table th.el-table__cell, .el-table tr {
    background-color: #292f40!important
}

 .el-table th.el-table__cell.is-leaf {
    border: 0
}

 .el-table:before {
    height: 0
}

 .el-table__empty-block {
    background-color: #292f40
}
</style>