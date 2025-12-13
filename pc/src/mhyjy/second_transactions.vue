<template>
  <div class="wrap">
    <div class="flex between">
      <div class="flex tab-header">
        <p class="fColor1 tc title-shadiaobietou" :class="[{'active':status == 1}]" @click="tabOrder(1)">
          {{ $t('secondTransactions.trade') }}</p>
        <p class="fColor1 tc title-shadiaobietou toubuliao" :class="[{'active':status == 3}]" @click="tabOrder(3)">
          {{ $t('secondTransactions.closed') }}</p>
      </div>
    </div>
    <p v-show="false">{{ CountDown }}</p>
    <ul class="list_head fColor2 ft14">
      <li class="flex fColor2 between">
        <span class="width2 tls">{{ $t('secondTransactions.symbol') }}</span>
        <span class="width2">{{ $t('secondTransactions.num') }}</span>
        <span class="width2">{{ $t('secondTransactions.buy_price') }}</span>
        <span class="width2" v-if="status == 1">{{ $t('secondTransactions.now_price') }}</span>
        <span class="width2" v-if="status == 3">{{ $t('secondTransactions.finsh_price') }}</span>
        <span class="width2" v-if="status == 1">{{ $t('secondTransactions.profit_loss') }}</span>
        <span class="width2 trs" v-if="status == 1">{{ $t('secondTransactions.times') }}</span>
        <span class="width2" v-if="status == 3">{{ $t('secondTransactions.rate') }}</span>
        <span class="width2 trs" v-if="status == 3">{{ $t('secondTransactions.loss') }}</span>
		<span class="width2 trs" v-if="status == 3">{{ $t('secondTransactions.details') }}</span>
      </li>
    </ul>
    <ul class="list_content list fColor1 ft12 scroll"
        style="min-height:200px;max-height: 640px; overflow: auto;overflow-x: hidden">
      <li
          v-if="orderList.length > 0 && item.remain_milli_seconds >0&& status==1 || status ==3 && orderList.length >0"
          v-for="(item,index) in orderList"
          :key="index"
          class="flex between">
        <span class="width2 tls">{{ item.symbol_name }} {{ item.seconds }}s</span>
        <span class="width2">{{ item.number || '0' | numFilters(0) }} {{ item.currency_name }}</span>
        <span class="width2">
          {{ item.open_price || '0.00' | numFilters(4) }}
          <i
              v-if="item.type == 1"
              class="iconfont icon-jiantouarrow499 red"
              style="display:inline-block;transform: rotate(180deg)"
          ></i>
          <i v-else class="iconfont icon-jiantouarrow499 green"
             ></i>
        </span>
        <span v-if="status == 1&& item.status == 1" class="width2">{{ prices || '0.00' | numFilters(4) }}</span>
        <span v-if="status == 1&&item.status == 3" class="width2">{{ item.end_price || '0.00' |numFilters(4) }}</span>
        <span v-else-if="status == 3" class="width2">{{ item.end_price || '0.00' |numFilters(4) }}</span>
        <!-- <span
            class="width2 green"
            v-if="item.status == 1&& status == 1  && (item.open_price -0) == (prices -0)"
        >0</span> -->
        <span class="width2 red"
              v-if="item.status == 1&& status == 1 && item.type == 1 && (item.open_price -0) > (prices -0)"
        >-{{ item.number || '0' | numFilters(0) }}</span>
        <span class="width2 green"
              v-if="item.status == 1&& status == 1 && item.type == 1 && (item.open_price -0) <= (prices -0)"
        >{{ (item.number * item.profit_ratio - 0) / 100 || '0.00' | numFilters(0) }}</span>
        <span
            class="width2 green"
            v-if="item.status == 1&& status == 1 && item.type == 2 && (item.open_price -0) >= (prices -0)"
        >{{ (item.number * item.profit_ratio - 0) / 100 || '0.00' | numFilters(0) }}</span>
        <span
            class="width2 red"
            v-if="item.status == 1&& status == 1 && item.type == 2 && (item.open_price -0) < (prices -0)"
        >-{{ (item.number - 0) || '0.00' | numFilters(0) }}</span>
        <span class="width2 trs" v-if="status == 1 &&item.status == 3"
              :class="item.fact_profits <0?'red':'green'">{{ item.fact_profits || '0' |numFilters(0) }}</span>
        <span
            v-if="status == 1&&item.status == 1"
            class="times width2 trs"
        >{{ countDown(item.endTime, index, item.seconds) }}s</span>
        <span
            v-if="status == 1&&item.status == 3"
            class="times width2 trs"
        >0.0s</span>
        <span class="width2" v-if="status == 3">{{ item.fee || '0.00' | numFilters(2) }}</span>
        <span class="width2 trs" v-if="status == 3"
              :class="item.fact_profits <0?'red':'green'">{{ item.fact_profits || '0' |numFilters(2) }}</span>
		<span class="width2 trs" style="display: flex;align-items: center;justify-content: flex-end;" v-if="status == 3">
			<img style="width: 20px;cursor: cell;" @click="details(index)" src="@/assets/images/details.png" alt>
		</span>
      </li>
    </ul>

    <div class="mores" v-if="orderList.length == 0">
      <img src="@/assets/images/nodata.png" alt>
      <span>{{ $t("secondTransactions.nodata") }}</span>
    </div>
	<el-dialog width="700px" :show-close="false" :visible.sync="dialogTableVisible">
		<div style="display: flex;height: 400px;">
			<div class="detail-left">
				<div style="font-size: 30px;margin-top: 20px;border-bottom: #cdcdcd dashed 1px;line-height: 60px;">{{ $t("secondTransactions.miaoji") }}</div>
				<div style="font-size: 16px;border-bottom: #cdcdcd dashed 1px;line-height: 40px;">{{ $t("secondTransactions.lixiang") }}</div>
			</div>
			<div class="detail-ritht">
				<div class="detail-top">{{ $t("secondTransactions.xiangqing") }}</div>
				<div style="width: 300px;margin: 0 auto;line-height: 30px;">
					<div style="display: flex;justify-content: space-between;margin-top: 20px;">
						<span style="font-size: 17px;    font-weight: bold;">{{detailsv.symbol_name}}</span>
						<span>{{detailsv.handled_at}}</span>
					</div>
					<div style="display: flex;justify-content: space-between;margin-top: 40px;line-height: 18px;">
						<div style="width: 45%;border-right: 2px #b7b7b7 solid;padding-right: 20px;">
							<div>
								<span v-if="detailsv.type == 1" style="color: green;">{{ $t("secondTransactions.kanzhang") }}</span>
								<span v-else style="color: red;">{{ $t("secondTransactions.kandie") }}</span>
							</div>
							<div style="display: flex;justify-content: space-between;margin-top: 10px;">
								<span>{{ $t("secondTransactions.zhouqi") }}:</span>
								<span>{{detailsv.seconds}}s</span>
							</div>
						</div>
						<div style="width: 48%;">
							<div style="display: flex;justify-content: space-between;">
								<span>{{ $t("secondTransactions.pingcang") }}:</span>
								<span>{{detailsv.end_price || '0' |numFilters(4) }}</span>
							</div>
							<div style="display: flex;justify-content: space-between;margin-top: 10px;">
								<span>{{ $t("secondTransactions.kaicang") }}:</span>
								<span>{{detailsv.open_price || '0' |numFilters(4) }}</span>
							</div>
						</div>
					</div>
				</div>
				<div class="detail-text" style="color: rgb(0, 181, 0);" v-if="detailsv.fact_profits > 0">+{{detailsv.fact_profits || '0' |numFilters(0) }}</div>
				<div class="detail-text" style="color: red;" v-else>{{detailsv.fact_profits || '0' |numFilters(0) }}</div>
				<div>
					<img src="@/assets/images/detailright.png" alt="" style="width: 200px;position: absolute;bottom: 0;right: 0;">
				</div>
			</div>
		</div>
	  </el-dialog>
  </div>
</template>
<script>
import {MessageBox} from "element-ui";

export default {
  props: {
    leverTradeId: {
      type: Number,
      required: true
    },

  },
  filters: {
    numFilters: function (value, n) {
      if (!value) return ''
      value = (value - 0).toFixed(n).toString()
      return value.slice(0) + ' '
    }
  },
  data() {
    return {
	dialogTableVisible:false,
	detailsv:{},
      orderList: [],
      mescroll: null,
      times: "2019-04-10 17:00:00",
      CountDown: "",
      progressWidths: 1,
      status: 1,
      page: 1,
      set: null,
      out: null,
      prices: localStorage.getItem("newPrice"),
      more: "",
      tradeId: "",
    };
  },
  watch: {
    // prices(a, b) {
    //   return localStorage.getItem("newPrice");
    // },
    leverTradeId: {
      immediate: true, // 这句重要
      handler(val) {
        if (val != 0) {
          this.tradeId = val;
        }
      },
      deep: true
    }
  },
  computed: {
    switchStatus: function () {
      if (this.tradeId != "" && this.tradeId != 0) {
        return this.tradeId; // 直接监听props里的status状态
      }
    }
  },
  created() {
  },
  mounted() {
    let that = this;
    setTimeout(function () {
      if (that.leverTradeId != "") {
        that.init();
      }
    }, 1500);
    that.connect();
    setInterval(function () {
      // that.prices = localStorage.getItem("newPrice");
      if (localStorage.getItem("orderStatus") == 1) {
        that.page = 1;
        that.init();
      }
    }, 10);

    eventBus.$on('updateKLine', res => {
      that.prices = res.close;
    });
      eventBus.$on('secondDealCenterOrder', msg => {
        that.init();
      })
  },
  methods: {

    init() {
      var that = this;
      clearTimeout(that.set);
      clearInterval(that.sets);
      var tradeIds = "";
      // this.more = this.$t("secondTransactions.loading");
      var data = {};
      if (that.status == 1) {
        tradeIds = that.tradeId;
        data = {
          page: that.page,
          status: that.status,
          match_id: that.tradeId,
          limit: 20
        };
      } else {
        data = {
          page: that.page,
          status: that.status,
          limit: 20

        };
      }
      this.$http({
        url: "/api/microtrade/lists",
        method: "get",
        params: data,
        headers: {Authorization: localStorage.getItem("token")}
      })
          .then(res => {
            if (res.data.type == "ok") {
              if (res.data.message.data.length > 0) {
                var arr = res.data.message.data;
                var nowTime = new Date().getTime();
                for (var i = 0; i < arr.length; i++) {
                  arr[i].endTime =
                      nowTime - 0 + (arr[i].remain_milli_seconds - 0);
                }
                that.orderList = arr;
                that.Djs_time();
                that.set = setTimeout(that.countDown, 200);
                that.more = that.$t("td.more");
              } else {
                that.more = that.$t("td.nodata");
              }
            } else {
              layer.msg(res.data.message);
            }
          })
          .catch(error => {
            console.log(error);
          });
    },
    load_more() {
      this.page++;
      this.init();
    },
	details(num){
		this.detailsv = this.orderList[num]
		this.dialogTableVisible = true
	},
    countDown(val, indexs, seconds) {
      var that = this;
      var timeValue = "";
      var process = 100 / Number(seconds);
      var seconds = "";
      var endItem = val; //获取列表传的截止时间
      var nowItem = new Date().getTime(); //获取当前时间
      var timeSpace = endItem - nowItem; //截止时间减去当前时间
      if (timeSpace > 0) {
        seconds = that.$utils.filterDecimals(timeSpace / 1000, 1);
        return seconds;
      } else if (timeSpace <= 0) {
        eventBus.$emit('secondDealCenterOrderEnd')
        return 0.0;
      }
    },
    Djs_time: function () {
      setInterval(() => {
        var presentTime = new Date().getTime();
        this.CountDown = presentTime;
      }, 200);
    },
    // 订单状态改变
    tabOrder(types) {
      var that = this;
      that.status = types;
      that.orderList = [];
      that.page = 1;
      that.init();
    },
    connect() {
      //封装推送数据
      var that = this;
      that.$socket.emit("login", localStorage.getItem("user_id"));
      that.sockets.subscribe("closed_microorder", msg => {
        if (msg.type == "closed_microorder") {
          var datas = msg.data;
          for (var i = 0; i < that.orderList.length; i++) {
            if (that.orderList[i].id == datas.id) {
              that.orderList[i] = datas;
              setTimeout(function () {
                var arr = that.orderList;
                arr.splice(i, 1);
                that.orderList = arr;
              }, 500);

              return false;
            }
          }
        }
      });
    }
  }
};
</script>
<style scoped>
.detail-left{
	background-image: url(../assets/images/detialleft.png);
	width: 50%;
	border-radius: 10px 0 0 10px;
	background-size: cover;
	text-align: center;
	color: #fff;
	padding: 0 20px;
}
.detail-ritht{
	width: 50%;
	background:#fff;
	border-radius: 0 10px 10px 0;
	color: #000;
}
.detail-top{
	background-image: url(../assets/images/detailtop.png);
	background-size: cover;
	width: 150px;
	height: 30px;
	margin: 0 auto;
	text-align: center;
	color: #fff;
	line-height: 30px;
	margin-top: -8px;
}
.detail-text{
	text-align: center;
	font-size: 30px;
	font-weight: bold;
	border-bottom: 2px solid;
	border-image: linear-gradient(268deg, rgba(255, 255, 255, 0) 0%, #dfdfdf 50%, rgba(255, 255, 255, 0) 99%) 5 5 5 5;
	width: 300px;
	margin: 0 auto;
	margin-top: 30px;
}
::v-deep .el-dialog__body{
	padding: 0;
}
::v-deep .el-dialog__header{
	padding: 0;
}
::v-deep .el-dialog{
	background: #0000;
}
.tab-header {
  padding: 5px 0;
}

.greenColor {
  color: green;
}

.tab-header p {
  margin-right: 20px;
  cursor: pointer;
}

.tab-header p:hover {
  color: #00a4d8;
  border-bottom: 1px solid #00a4d8;
}

.tab-header {
  color: #fff;
}

.tab-header .active {
  border-bottom: 1px solid #00a4d8;
}

.flex {
  display: flex;
}

.total-pro {
  margin-bottom: 20px;
  margin-left: 30px;
}

.wrap {
  width: 100%;
  padding: 10px 20px;
}

ul li {
  line-height: 33px;
}

ul li span {
  display: inline-block;
}

ul li div {
  display: inline-block;
}

ul li div span {
  border-radius: 3px;
  cursor: pointer;
  min-height: 33px;
  font-size: 14px;
  border: none;
  line-height: 33px;
  text-align: center;
}

.list_head {
  color: #becbc6;
  border-bottom: 1px solid #2f3d45;
}

.red {
  color: #cc4951;
  cursor: pointer;
}

.green {
  color: #0d8551;
}

.stop-btn {
  margin-right: 10px;
}

.mores {
  color: #999;
  font-size: 14px;
  margin-top: 10px;
  cursor: pointer;
  text-align: center;
}

.mores img {
  width: 120px;
  height: 120px;
  margin: 30px auto 0;
}

.mores span {
  display: block;
  text-align: center;
}

.width1 {
  width: 9%;
  text-align: center;
}

.width2 {
  width: 15%;
  text-align: center;
}

.width3 {
  width: 30%;
  text-align: center;
}

.loss-modal {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
}

.content {
  width: 500px;
  background-color: #fff;
  margin: 0 auto;
  border-radius: 5px;
}

.loss-modal-header {
  line-height: 40px;
  text-align: center;
  position: relative;
}

.loss-modal-header p {
  position: absolute;
  right: 10px;
  top: 0;
}

.loss-madal-content {
  margin: 15px 15px 0;
}

.loss-madal-content div {
  line-height: 40px;
  margin-bottom: 10px;
}

.loss-madal-content div p {
  display: inline-block;
  border: 1px solid #d1d3df;
  border-radius: 3px;
  height: 40px;
  position: relative;
}

.loss-madal-content p span {
  display: inline-block;
  width: 60px;
  text-align: center;
  font-size: 30px;
  position: relative;
  top: -3px;
  cursor: pointer;
}

.loss-madal-content p .adds {
  top: -1px;
}

.wrap >>> .el-dialog--center .el-dialog__body {
  padding: 25px 25px 20px;
}

.wrap >>> .el-button--primary {
  background-color: #00a4d8;
  width: 140px;
  border: none;
}

.loss-madal-content input {
  background-color: rgba(0, 0, 0, 0);
  border-left: 1px solid #d1d3df;
  border-right: 1px solid #d1d3df;
  line-height: 40px;
  position: relative;
  top: -6px;
  text-align: center;
}

.modal-text {
  width: 100%;
  text-align: center;
  line-height: 40px;
}

.modal-btn {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  font-size: 0;
}

.modal-btn button {
  width: 50%;
  line-height: 50px;
  border: none;
  float: left;
  font-size: 14px;
  color: #fff;
  background: #9db5c7;
}

.modal-btn button:last-child {
  border-left: 1px solid #2f3d45;
  background: #689cf1;
}

.total-pro button {
  border-radius: 3px;
  color: white;
  background-color: #00a4d8;
  cursor: pointer;
  min-height: 33px;
  min-width: 80px;
  font-size: 14px;
  border: none;
  padding: 0 5px;
  line-height: 33px;
  text-align: center;
}

.stopModal {
  margin: 20px 15px;
  text-align: center;
  padding-bottom: 20px;
}

.stopModal span {
  padding: 6px 15px;
  border-radius: 4px;
}

.stopall {
  border: 1px solid #00a4d8;
  color: #00a4d8;
  margin-right: 10px;
}

.alls {
  color: #fff;
  background-color: #00a4d8;
}

.stopbuy {
  border: 1px solid #0d8551;
  color: #0d8551;
  margin-right: 10px;
}

.buys {
  color: #fff;
  background-color: #0d8551;
}

.stopsell {
  border: 1px solid #cc4951;
  color: #cc4951;
}

.sells {
  color: #fff;
  background-color: #cc4951;
}

.stop-modal-btns {
  width: 100%;
  font-size: 0;
}

.stop-modal-btns button {
  width: 50%;
  float: left;
  font-size: 14px;
  line-height: 40px;
  background-color: #9db5c7;
  border: none;
  outline: none;
  color: #fff;
}

.stop-modal-btns button:last-child {
  background-color: #689cf1;
}

.mores >>> .el-pager li {
  background: rgba(0, 0, 0, 0);
}

.mores >>> .btn-prev,
.mores >>> .btn-next {
  display: none;
}

.transfer-content h3 {
  text-align: center;
  color: #00a4d8;
  font-size: 18px;
}

.tls {
  text-align: left !important;
}

.trs {
  text-align: right !important;
  padding-right: 12px;
}
</style>


