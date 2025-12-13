<template>
    <div style="background: #F7F7FA;">
        <indexHeader></indexHeader>
        <div class="box">
            <div class="title_tips flex alcenter curPer">
                <a href="javascript:void(0)" onclick="history.go(-1)" class="ft14">{{$t("earn.go_back")}}</a>
            </div>
            <div class="flex between mb50">
                <div class="content_TK bg-main">
                    <div class="loss-modal-header flex between alcenter">
                        <h5>{{$t("accountCenter.deposit")}}</h5>
                    </div>
                    <div class="center_TK_box">
                        <div class="select-currency-box">
                            <p>{{$t("creditCard.Select_a_currency_second")}}</p>
                            <el-select v-model="currency_name" class="_select" style="width: 100%;" @change="currencyChange">
                                <el-option v-for="(item,index) in addressList" :key="index" :value="item.name+(item.subName?'-'+item.subName:'')" :label="item.name+(item.subName?'-'+item.subName:'')">
                                    <div style="display: flex;align-items:center">
                                        <img style="float: left;width:20px;height:20px;margin-right:5px;border-radius:100%" :src="item.image">
                                        <span>{{item.name+(item.subName?'-'+item.subName:'')}}</span>
                                    </div>
                                </el-option>
                            </el-select>
                        </div>
                        <div class="flex tips"></div>
                        <div class="chain-box">
                            <p>{{$t("transferSet.chain_type")}}</p>
                            <div class="chain-list">
                                <el-button type="primary">{{currency_name}}</el-button>
                            </div>
                        </div>
                        <div id="code" class="ewm_img">
                            <img :src="'/api/qrcode?text='+ qbObject.address" style="width: 170px; height: 170px;">
                        </div>
                        <div class="chargeAddr-box">
                            <span>{{qbObject.address}}</span>
                        </div>
                        <div>
                            <img src="@/assets/images/copy.png" @click="copy" class="copys_sty" :data-clipboard-text="qbObject.address" style="display: block; margin: 0px auto;">
                        </div>
                        <div class="chargeBtn">
                            <el-button type="primary" style="width: 100%; height: 40px;" @click="deposit">{{$t("other.recharged")}}</el-button>
                        </div>
                    </div>
                </div>
                <div class="infosty bg-main">
                    <p class="titlesty">{{$t("other.recharge_record")}}</p>
                    <div class="record-box">
                        <div class="table-box">
                            <div class="content_top flex alcenter fColor2">
                                <p class="flex1 tc"> {{$t("market.currency")}} <i></i></p>
                                <p class="flex1 tc">{{$t("other.recharge_num")}}</p>
                                <p class="flex1 tc" style="padding: 12px 0px;">{{$t("leverTransactions.status")}}</p>
                                <p class="flex1 tc" style="padding: 12px 0px;">{{$t("other.creation_time")}}</p>
                            </div>
                            <ul class="content_ul" style="height: 550px; overflow: auto;">
                                <li v-for="(item,index) in recData">
                                    <div class="content_li flex alcenter between">
                                        <p class="flex1 tc">{{item.name}}</p>
                                        <p class="flex1 tc">{{item.amount || "0.00"|toFixeds}}</p>
                                        <p class="flex1 tc"><span>{{item.status == 1?$t("other.审核中"):item.status==2?$t("other.审核完成"):item.status==3?$t("other.审核失败"):''}}</span></p>
                                        <p class="flex1 tc">{{item.created_at}}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <el-dialog :title='$t("other.submit_recharge_info")' :visible.sync="depositShow"
            width="30%"
            :before-close="handleClose">
                <div style="display: flex;align-items:center">
                    <label style="width: 80px;">{{$t("other.recharge_num")}}</label>
                </div>
                <div class="mt10" style="display: flex;align-items:center">
                    <el-input :placeholder='$t("other.recharge_num")' v-model="amount"></el-input>
                </div>
                <div class="mt10" style="display: flex;align-items:center">
                    <label style="width: 80px;">{{$t("other.upload_recharge")}}</label>
                </div>
                <div class="mt10" style="display: flex;align-items:center;border:1px solid #DCDFE6;height:200px;justify-content:center;position:relative">
					<img v-if="uploadImage" :src="$utils.img_url + uploadImage" style="width: 310px;height: 200px;">
                    <svg v-else width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 32L24 16" stroke="#DCDFE6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M42 27L42 21" stroke="#DCDFE6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M6 27L6 21" stroke="#DCDFE6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M14 6H8C6.89543 6 6 6.89543 6 8V14" stroke="#DCDFE6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M34 6H40C41.1046 6 42 6.89543 42 8V14" stroke="#DCDFE6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M34 42H40C41.1046 42 42 41.1046 42 40V34" stroke="#DCDFE6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M14 42H8C6.89543 42 6 41.1046 6 40V34" stroke="#DCDFE6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M27 6H21" stroke="#DCDFE6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M32 24L16 24" stroke="#DCDFE6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M27 42H21" stroke="#DCDFE6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <input type="file" accept="image/*" name="file" style="position: absolute; cursor: pointer; opacity: 0; height: 100%; width: 100%;" @change="file1">
                </div>
                <el-button type="primary" @click="confirm" style="width: 100%; margin-top: 50px;">{{$t("other.deposit")}}</el-button>
            </el-dialog>
        </div>
        <indexFooter></indexFooter>
    </div>
  </template>
  <script>
  import indexHeader from '@/view/indexHeader';
  import indexFooter from "@/view/indexFooter";
  import axios from "axios";
  
  export default {
    name: 'deposit',
    filters: {
        toFixeds: function(t) {
            return t = Number(t),
            t.toFixed(2)
        }
    },
    data() {
      return {
            currency_name: "USDT-ERC20",
            amount: 0,
            depositShow: !1,
            addressList: [{
                name: "USDT",
                subName: "ERC20",
                type: "数字货币",
                status: 1,
                id: 3,
                address: "0xB0117950ea370C2F4d8d6Ea54fed0858e3860c60",
                image: require("@/assets/images/USDT.png")
            }, {
                name: "USDT",
                subName: "TRC20",
                type: "数字货币",
                status: 1,
                id: 3,
                address: "TEJB8qmvD1HMxwAi9BUgxX4zPDCqAiu32S",
                image: require("@/assets/images/USDT.png")
            }, {
                name: "ETH",
                type: "数字货币",
                status: 1,
                id: 2,
                address: "0xB0117950ea370C2F4d8d6Ea54fed0858e3860c60",
                image: require("@/assets/images/ETH.png")
            }, {
                name: "BTC",
                type: "数字货币",
                status: 1,
                id: 1,
                address: "3KHmG9P7swqddcxLJx3FgLPhYU4M2ckCp3",
                image: require("@/assets/images/BTC.png")
            }, {
                name: "TRX",
                type: "数字货币",
                status: 1,
                id: 32,
                address: "TEJB8qmvD1HMxwAi9BUgxX4zPDCqAiu32S",
                image: require("@/assets/images/TRX.png")
            }],
            qbObject: {},
            uploadImage: "",
            recData: []
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
        var t = this.getDom(this.currency_name);
        this.qbObject = t,
        this.getrec()
    },
    methods:{
        file1(e) {
          let that = this;
          let reader = new FileReader();
          // console.log(window.event.target.files[0]);
          let file = e.target.files[0];
        
          reader.readAsDataURL(file);
          reader.onload = function (ed) {
          };
          let formData = new FormData();
          formData.append("file", file);
          axios.post("/api/upload_new", formData, {
            headers: {"Content-Type": "multipart/form-data"}
          }).then(t=>{
                let a = t.data;
                "ok" == a.type ? that.uploadImage = a.message : layer.msg(a.message)
            }
            )
        },
        currencyChange(t) {
            var e = this.getDom(t);
            this.qbObject = e
        },
        getDom(t) {
            for (var e = 0; e < this.addressList.length; e++)
                if (this.addressList[e].subName) {
                    if (this.addressList[e].name + "-" + this.addressList[e].subName == t)
                        return this.addressList[e]
                } else if (this.addressList[e].name == t)
                    return this.addressList[e]
        },
        copy() {
            var t = new Clipboard(".copys_sty");
            t.on("success", e=>{
                t.destroy()
            }
            ),
            t.on("error", e=>{
                t.destroy()
            }
            )
        },
        deposit() {
            this.depositShow = !0
        },
        handleClose() {
            this.depositShow = !1,
            this.amount = 0
        },
        getrec() {
            this.$http({
                url: "/api/recharge/log?page=1&limit=99999999&lang=" + window.localStorage.getItem("lang") || !1,
                method: "get",
                data: {},
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            }).then(t=>{
                "ok" == t.data.type && (this.recData = t.data.message.data)
            }
            )
        },
        confirm() {
            if (this.amount <= 0)
                layer.msg(this.$t("other.withdrawal_amount_alert"));
            else {
                var t = this
                    , e = t.getDom(t.currency_name);
                this.$http({
                    url: "/api/wallet/charge_req",
                    method: "post",
                    data: {
                        currency: e.id,
                        amount: t.amount,
                        account: t.uploadImage,
                        type: 0,
                        sub_type: e.subName,
                        address: e.address,
                        lang: window.localStorage.getItem("lang") || "en"
                    },
                    headers: {
                        Authorization: localStorage.getItem("token")
                    }
                }).then(t=>{
                    "ok" == t.data.type && (layer.msg(t.data.message),
                    this.handleClose(),
                    this.getrec())
                }
                ).catch(t=>{
                    console.log(t)
                }
                )
            }
        }
    }
  }
  </script>
  <style lang="scss" scoped>
  
  

.box {
    width: 1200px;
    margin: 0 auto;
    color: #000
}

.mb50 {
    margin-bottom: 50px
}

.flex {
    display: flex;
    -webkit-display: flex;
    -moz-display: flex;
    -ms-display: flex;
    -o-display: flex
}

.box .content_TK {
    width: 380px;
    border-radius: 5px
}

.box .title_tips {
    padding: 30px 0
}

.curPer,.pointer {
    cursor: pointer
}

.box .content_TK .loss-modal-header {
    line-height: 64px;
    font-size: 16px;
    padding: 0 20px;
    border-bottom: 1px solid #797b96
}

.between {
    justify-content: space-between
}

.alcenter {
    align-items: center
}

.box .content_TK .center_TK_box {
    padding: 16px 20px 40px;
    max-height: 780px;
    overflow: hidden
}

.box .content_TK .select-currency-box p {
    font-size: 14px;
    margin-bottom: 12px
}

 ._select .el-input__inner, ._select .el-range-input, .box ._select .el-input-group__append {
    background-color: transparent;
    border-color: #797b96;
    color: #000
}

.box .content_TK .center_TK_box .tips {
    margin: 20px 0;
    padding: 10px;
    font-size: 14px;
    line-height: 20px;
    color: #f9a416
}

.ml10 {
    margin-left: 10px
}

.ft12 {
    font-size: 12px
}

.box .content_TK .center_TK_box .chain-box p {
    font-size: 14px;
    margin-bottom: 12px
}

.el-button--primary {
    color: #fff;
    background-color: #409eff!important;
    border-color: #409eff!important
}

.box .content_TK .center_TK_box .ewm_img {
    width: 190px;
    height: 190px;
    border: 1px solid #282934;
    padding: 10px;
    border-radius: 10px;
    margin: 20px auto
}

.box .content_TK .center_TK_box .chargeAddr-box {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0
}

.box .content_TK .center_TK_box .chargeAddr-box span {
    font-size: 14px;
    color: #656565;
    text-overflow: ellipsis
}

.box .content_TK .center_TK_box .chargeBtn {
    margin-top: 40px
}

.box .infosty {
    width: 800px;
    overflow-y: auto
}

.bg-main {
    background-color: #fff
}

.box .infosty .titlesty {
    height: 64px;
    line-height: 64px;
    border-bottom: 1px solid #797b96;
    padding: 0 20px
}

.box .table-box {
    padding: 20px 20px 0
}

.box .el-select-dropdown {
    background-color: #fff;
    color: #000!important;
    margin: 0;
    border: 1px solid #797b96
}

.box .el-select-dropdown__item {
    color: #fff
}

.box .el-select-dropdown__item:hover {
    color: #276dff;
    background-color: #393b4b
}

.el-button--primary:hover {
    color: #fff;
    background-color: #5289ff!important;
    border-color: #5289ff!important
}

 .el-select-dropdown__item {
    color: #000!important
}

.el-select-dropdown__item.hover, .el-select-dropdown__item.selected, .el-select-dropdown__item:hover {
    background: #bbb!important
}

.box {
    width: 1200px;
    margin: 0 auto;
    color: #000
}

.curPer,.pointer {
    cursor: pointer
}

.ptb30 {
    padding: 30px 0
}

.alcenter {
    align-items: center
}

.flex {
    display: flex;
    -webkit-display: flex;
    -moz-display: flex;
    -ms-display: flex;
    -o-display: flex
}

.mb50 {
    margin-bottom: 50px
}

.between {
    justify-content: space-between
}

.box .content_TK {
    width: 380px;
    border-radius: 5px
}

.box .content_TK .loss-modal-header {
    line-height: 64px;
    font-size: 16px;
    padding: 0 20px;
    border-bottom: 1px solid #797b96
}

.box .content_TK .content-box {
    padding: 16px 20px 40px;
    max-height: 780px;
    overflow: hidden
}

.box .content_TK .content-box .row {
    margin-top: 10px
}

.box .content_TK .content-box .row p {
    font-size: 14px;
    margin-bottom: 10px
}

 ._select .el-input__inner, ._select .el-range-input, .box ._select .el-input-group__append {
    background-color: transparent;
    color: #000;
    border-color: #797b96
}

.el-button--primary {
    color: #fff;
    background-color: #409eff!important;
    border-color: #409eff!important
}

.box .infosty {
    width: 800px;
    overflow-y: auto
}

.bg-main {
    background-color: #fff
}

.box .infosty .titlesty {
    height: 64px;
    line-height: 64px;
    border-bottom: 1px solid #797b96;
    padding: 0 20px
}

.box .table-box {
    padding: 20px 20px 0
}

.box .el-select-dropdown {
    background-color: #282836;
    color: #000;
    margin: 0;
    border: 1px solid #797b96
}

.box .el-select-dropdown__item {
    color: #000
}

.box .el-select-dropdown__item:hover {
    color: #276dff;
    background-color: #393b4b
}

.el-select-dropdown__item.hover,.el-select-dropdown__item.selected {
    color: #000!important;
    background: #eaecef!important
}
</style>
  