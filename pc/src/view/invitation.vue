<template>
    <div>
        <indexHeader></indexHeader>
        <div class="invitation bg-color-menuBg">
            <div class="header-box">
                <div class="header-container">
                    <div class="title-box">
                        <h1>{{$t("invitation.invite_friends")}}</h1>
                        <p>{{$t("invitation.invite_friends_desc")}}</p>
                    </div>
                    <div class="describe-box">
                        <div class="top-box">
                            <h1>{{$t("invitation.top_box")}}</h1>
                            <p>{{$t("invitation.top_box_tip")}}</p>
                        </div>
                        <div class="step-box">
                            <ul>
                                <li>
                                    <div class="bindUp">
                                        <img src="@/assets/images/invitation1.png">
                                        <p>{{$t("invitation.send_invitation")}}</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="bindUp">
                                        <img src="@/assets/images/invitation2.png">
                                        <p>{{$t("invitation.register_and_trade")}}</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="bindUp">
                                        <img src="@/assets/images/invitation3.png">
                                        <p>{{$t("invitation.share_transaction_rebate")}}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-box">
                <div class="one-box">
                    <div class="left-box">
                        <p class="title">{{$t("invitation.my_invite_stats")}}</p>
                        <div class="statistics">
                            <div class="yao">
                                <img src="@/assets/images/invitation4.png">
                                <b>0</b> 
                                <span>{{$t("invitation.total_invites")}}</span>
                            </div>
                            <div class="yong">
                                <img src="@/assets/images/invitation5.png">
                                <b>0</b> 
                                <span>{{$t("invitation.total_invites")}}(USDT)</span>
                            </div>
                        </div>
                    </div>
                    <div class="right-box">
                        <div class="invitationCode">
                            <span class="left">{{$t("invitation.invitation_code")}}</span>
                            <div class="right">
                                <span>{{user_info.extension_code}}</span> 
                                <img src="@/assets/images/invitation6.png">
                            </div>
                        </div>
                        <div class="invitationLink">
                            <span class="left">{{$t("invitation.invite_link")}}</span>
                            <div class="right">
                                <span>{{$utils.host + "/#/components/register?extension_code=" + user_info.extension_code}}</span>
                                <img id="copy_url" src="@/assets/images/invitation6.png" @click="copy">
                            </div>
                        </div>
                        <div class="coefficient">
                            <div>
                                <p>{{$t("invitation.my_rebate_factor")}}</p> 
                                <span>100 %</span>
                            </div>
                            <div>
                                <p>{{$t("invitation.friends_cashback_factor")}}</p> 
                                <span>0 %</span>
                            </div>
                        </div>
                        <div class="btns-box">
                            <button> {{$t("invitation.face_to_face_invitation")}} </button>
                            <button> {{$t("invitation.poster_invitation")}} </button>
                        </div>
                    </div>
                </div>
                <div class="four-box">
                    <div class="head-box">
                        <b>{{$t("invitation.rules")}}</b>
                    </div>
                    <div class="table-box">
                        <el-table class="dark-table" style="width: 100%;" :data="ruleData">
                            <el-table-column prop="level" :label='$t("invitation.rebate_level")' align="center"></el-table-column>
                            <el-table-column prop="inMoney" :label='$t("accountCenter.deposit")' align="center"></el-table-column>
                            <el-table-column prop="outmoney" :label='$t("indexHeader.buy_coins")' align="center"></el-table-column>
                            <el-table-column prop="qq" :label='$t("indexHeader.option")' align="center"></el-table-column>
                            <el-table-column prop="kc" :label='$t("invitation.mining_pool")' align="center"></el-table-column>
                            <el-table-column prop="hy" :label='$t("indexHeader.contract")' align="center"></el-table-column>
                            <el-table-column prop="dq" :label='$t("invitation.regular")' align="center"></el-table-column>
                        </el-table>
                    </div>
                    <div class="describe-box">
                        <dl>
                            <dt>{{$t("invitation.award")}}</dt>
                            <dd> {{ $t("invitation.award_desc") }} </dd>
                            <dd> {{ $t("invitation.award_desc_2") }} </dd>
                        </dl>
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
    name: 'invitation',
    data() {
      return {
        planList: [],
        myInvitation: [],
        returnMoney: [],
        ruleData: [{
            level: "1级",
            inMoney: "0%",
            outmoney: "0%",
            qq: "0%",
            kc: "0%",
            hy: "0%",
            dq: "0%"
        }, {
            level: "2级",
            inMoney: "0%",
            outmoney: "0%",
            qq: "0%",
            kc: "0%",
            hy: "0%",
            dq: "0%"
        }, {
            level: "3级",
            inMoney: "0%",
            outmoney: "0%",
            qq: "0%",
            kc: "0%",
            hy: "0%",
            dq: "0%"
        }],
        tunIndex: 0,
        user_info: {}
      }
    },
    components: {
      indexHeader,
      indexFooter
    },
    created() {
    },
    mounted(){
        this.userInfo()
    },
    methods:{
        userInfo() {
            var t = this;
            this.$http({
                url: "/api/user/info",
                method: "get",
                data: {},
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            }).then(e=>{
                "ok" == e.data.type && (t.user_info = e.data.message)
            }
            ).catch(t=>{}
            )
        },
        copy() {
            var t = this
                , e = new Clipboard("#copy_url",{
                text: function() {
                    return layer.msg(t.$t("change.copy")),
                    t.$utils.host + "/#/components/register?extension_code=" + t.user_info.extension_code
                }
            });
            e.on("success", (function(e) {
                layer.msg(t.$t("change.copy"))
            }
            )),
            e.on("error", (function(e) {
                layer.msg(t.$t("change.copy"))
            }
            ))
        },
        turnTab(t) {
            this.tunIndex = t
        }
    }
  }
  </script>
  <style lang="scss" scoped>
  


  .invitation {
    color: #fff
}

.bg-color-menuBg {
    background-color: #1a1b26
}

.invitation .header-box {
    width: 100%;
    background-image: url("../assets/images/invitation-bg.png");
    background-repeat: no-repeat
}

.invitation .header-box .header-container {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden
}

.invitation .header-box .header-container .title-box {
    margin-top: 50px
}

h1,h2,h3,h4,h5,h6 {
    font-size: 100%;
    font-weight: 500
}

.invitation .header-box .header-container .title-box h1 {
    font-size: 36px
}

.invitation .header-box .header-container .title-box p {
    margin-top: 18px;
    font-size: 18px
}

.invitation .header-box .header-container .describe-box {
    margin-top: 55px;
    width: 100%;
    background-color: #282934;
    padding: 30px 0;
    border-radius: 10px
}

.invitation .header-box .header-container .describe-box .top-box {
    text-align: center
}

.invitation .header-box .header-container .describe-box .top-box h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 700;
    color: #fff
}

.invitation .header-box .header-container .describe-box .top-box h1:after,.invitation .header-box .header-container .describe-box .top-box h1:before {
    content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAu1JREFUSEvtlD9sW1UUh7/fvc9uXp2YKoFaSiElxU1SRwihwoBYKmYGlkwIBpCaiBAxwcDkSiDRqlIQDVEUUQYWJBgzsIOExIQ6UNLiqAkKBStRhdrYFMfvHfRct7XJP7dDpt75O++773fPOWKfjvbJwyPRQyfdeXRFc4NrPFUNWS+fV2V3oyk/zgnvGYg8P5Yu6GaHIlN+kuc9fGxiIYj56vKsNraXmU5MMBoHzAB9xHwSeRY6EJmOv8OIHOcELwNrZnxWTfPl6rT+aZeZhk4zrBQfIV4yo0diBcf7e4hMx8bJBwEfSrxgRpdEH8ZPt1O8tfKp/rwvMuWnOOaMD2ScRKTN6JUoRcbkLiLTyARHY88U8BxwQOKQGcsupriY4xJF1e+KBiftaEqMA89ihBKPYaxInFksc3lH0dCEHcHzpkQBCM04BKyacfa3Wf3aGtnwu9aPeJ2YkeRCpgb7BzB9dUaLCbutaPA9ywUxrylmCNElyJpRjoy5pVmVWiXPTNjhwPOqieNJtC5hRTmucbE0r6W77BbRyKT1mXglhkHFhHiyxKy7iK8X57TcKhl923prBzjlxIBBiMjKuFGDb659rpVWtk2Un7Ksi3kReNJEiNGDuKU6C1fnlERx7ySsjzgZQb9LWNEjuAl8d2VG1//f+vdEuTcs05Nl2IlcIlHcaM1q7TbfX/tC5dbC/tN2MBMwZHDYizBqsub5oXRBa9vNV0NUGLN0lONIMmDNP+nGqKXS/PzLtG60FiZs3Ed/3dPbaHdPt4/YrPzLpdWL7Wx7dGPmBx4nm3Fk68ZB58hEIgKWktXRdruiuaf/Jok3m9okjBwZGbHrZunKOd3abS2JMfOFJwhrnjDYbEhcJeKv6/OqbilssvU6XT5FxiK0EVLeuiG2Ku+80SkLCgW6NozU7+tU+Fa1HW/XZKtVguU0Fea12clKv991Y+YZxSgq3rPwQdjmxzpYqntqOwIeiTqKaceBfejqByjctzf6DzqmDbQxml+2AAAAAElFTkSuQmCC);
    display: inline-block;
    width: 26px;
    height: 26px;
    padding: 0 20px;
    box-sizing: content-box
}

.invitation .header-box .header-container .describe-box .top-box p {
    margin-top: 14px;
    font-size: 12px;
    color: #ccc
}

.invitation .header-box .header-container .describe-box .step-box {
    padding: 0 130px;
    margin-top: 40px
}

.invitation .header-box .header-container .describe-box .step-box ul {
    display: flex;
    align-items: center;
    justify-content: space-between
}

ol,ul {
    list-style: none
}

.invitation .header-box .header-container .describe-box .step-box ul li {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1
}

.invitation .header-box .header-container .describe-box .step-box ul li .bindUp {
    display: flex;
    flex-direction: column;
    align-items: center
}

.invitation .header-box .header-container .describe-box .step-box ul li .bindUp p {
    display: inline-block;
    margin-top: 16px;
    font-size: 14px
}

.invitation .header-box .header-container .describe-box .step-box ul li:nth-child(2):before {
    left: -10%
}

.invitation .header-box .header-container .describe-box .step-box ul li:nth-child(2):after,.invitation .header-box .header-container .describe-box .step-box ul li:nth-child(2):before {
    position: absolute;
    content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAUCAYAAADC1B7dAAAAAXNSR0IArs4c6QAAAXdJREFUWEfdl79Kw1AUxr9zI+omDiIFBzs5CNKKQtXpSut/FB18Ft/A1/ARnKLBSRxcbIOjHdJaJFAncWitJj1ytUGtto2QlCZ3y+Fyzvlxbr77XcKAL73AE4JwRwzr5RXbexmqdmuZBpwHZyZPC6Ck+mSgKBhybZ7sTn1HCsgPVOSAWpOxGi7k7gJV2icVVSDFYQkXMtcGFWUg9VNV3lzInUWyvEnReZ43vI/nBi4Pl6lu3HKSHcyoeFNDdStF5sUNj7mEpX6LCAtMCuCkY11GRRuCzM59QpFhMnubm0ByM01lo8BHIBy34qfradrX85zRBK77DeSznq0RZDZFxbgAKW676WA1TkAKqhQrIAbu4wQUqyP3JQrKK3lKMvqEBynJURLtaBhX8XoNtYMVetR1HqEEEj5VJ7htLqaEhivfsh1c5XAyfTenvyr8dbGG00ZwWbsAWWIYMjf7089F1frEx5z2ehNFakK9YD68XHCnPZxM/32CvwPMRPQwbo71tQAAAABJRU5ErkJggg==);
    display: inline-block;
    width: 52px;
    height: 20px;
    top: 20px
}

.invitation .header-box .header-container .describe-box .step-box ul li:nth-child(2):after {
    right: -10%
}

.invitation .container-box {
    width: 1200px;
    margin: 0 auto;
    padding-bottom: 50px
}

.invitation .container-box .one-box {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    width: 100%
}

.invitation .container-box .one-box .left-box {
    width: 700px
}

.invitation .container-box .one-box .left-box .title {
    font-size: 18px;
    font-weight: 700
}

.invitation .container-box .one-box .left-box .statistics {
    margin-top: 54px;
    display: flex;
    align-items: center
}

.invitation .container-box .one-box .left-box .statistics .yao {
    margin-right: 150px
}

.invitation .container-box .one-box .left-box .statistics .yao,.invitation .container-box .one-box .left-box .statistics .yong {
    display: flex;
    flex-direction: column
}

.invitation .container-box .one-box .left-box .statistics .yao img,.invitation .container-box .one-box .left-box .statistics .yong img {
    display: block;
    width: 30px;
    height: 30px
}

.invitation .container-box .one-box .left-box .statistics .yao b,.invitation .container-box .one-box .left-box .statistics .yong b {
    font-size: 32px;
    margin: 20px 0
}

.invitation .container-box .one-box .left-box .statistics .yao span,.invitation .container-box .one-box .left-box .statistics .yong span {
    font-size: 12px;
    color: #ccc
}

.invitation .container-box .one-box .right-box {
    width: 480px
}

.invitation .container-box .one-box .left-box,.invitation .container-box .one-box .right-box {
    padding: 20px 30px;
    background-color: #282934;
    border-radius: 10px
}

.invitation .container-box .one-box .right-box .invitationCode,.invitation .container-box .one-box .right-box .invitationLink {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #f3f3f3;
    padding: 10px 0
}

.invitation .container-box .one-box .right-box .invitationLink {
    border-bottom: none
}

.invitation .container-box .one-box .right-box .invitationCode .left,.invitation .container-box .one-box .right-box .invitationLink .left {
    font-size: 14px;
    font-weight: 400;
    color: #ccc
}

.invitation .container-box .one-box .right-box .invitationCode .right,.invitation .container-box .one-box .right-box .invitationLink .right {
    display: flex;
    align-items: center
}

.invitation .container-box .one-box .right-box .invitationCode .right span,.invitation .container-box .one-box .right-box .invitationLink .right span {
    font-size: 14px;
    font-weight: 400;
    margin-right: 10px;
    text-align: right;
    width: 240px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.invitation .container-box .one-box .right-box .invitationCode .right img,.invitation .container-box .one-box .right-box .invitationLink .right img {
    display: inline-block;
    width: 14px;
    height: 14px;
    cursor: pointer
}

fieldset,img {
    border: 0
}

.invitation .container-box .one-box .right-box .coefficient {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    padding: 15px 40px;
    border-radius: 10px
}

.invitation .container-box .one-box .right-box .coefficient div p {
    font-size: 14px;
    color: #ccc
}

.invitation .container-box .one-box .right-box .coefficient div span {
    display: inline-block;
    margin-top: 10px;
    font-size: 18px;
    font-weight: 700
}

.invitation .container-box .one-box .right-box .btns-box {
    display: flex;
    justify-content: space-between;
    margin-top: 20px
}

.invitation .container-box .one-box .right-box .btns-box button:first-child {
    color: #276cff;
    border: 1px solid #276cff;
    background: transparent
}

.invitation .container-box .one-box .right-box .btns-box button:nth-child(2) {
    background: #276cff;
    border: 1px solid #276cff
}

.invitation .container-box .one-box .right-box .btns-box button {
    color: #fff;
    width: 48%;
    height: 50px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer
}

.invitation .container-box .two-box {
    margin-top: 20px;
    padding: 30px;
    width: 100%;
    background-color: #282934;
    border-radius: 10px
}

.invitation .container-box .two-box .head-box {
    display: flex;
    align-items: center;
    justify-content: space-between
}

.invitation .container-box .two-box .head-box span:first-child {
    font-size: 18px;
    font-weight: 700
}

.invitation .container-box .two-box .head-box span:nth-child(2) {
    font-size: 14px;
    font-weight: 700;
    color: #276cff;
    cursor: pointer
}

.invitation .container-box .two-box .table-box {
    margin-top: 20px
}

.invitation .container-box .three-box {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    width: 100%
}

.invitation .container-box .three-box .left-box {
    width: 700px
}

.invitation .container-box .three-box .left-box,.invitation .container-box .three-box .right-box {
    padding: 20px 30px;
    background-color: #282934;
    border-radius: 10px
}

.invitation .container-box .three-box .left-box .title-box {
    font-size: 18px;
    font-weight: 700;
    color: #ccc;
    display: flex;
    align-items: center
}

.invitation .container-box .three-box .left-box .title-box b.activeSty {
    color: #fff;
    border-color: #276cff
}

.invitation .container-box .three-box .left-box .title-box b {
    font-size: 18px;
    font-weight: 700;
    margin-right: 50px;
    cursor: pointer;
    border-bottom: 2px solid transparent
}

.invitation .container-box .three-box .left-box .table-box {
    margin-top: 20px
}

.invitation .container-box .three-box .right-box {
    width: 480px
}

.invitation .container-box .four-box {
    margin-top: 20px;
    padding: 30px;
    width: 100%;
    background-color: #282934;
    border-radius: 10px
}

.invitation .container-box .four-box .head-box {
    font-size: 18px
}

.invitation .container-box .four-box .table-box {
    margin-top: 20px
}

.invitation .container-box .four-box .describe-box {
    margin-top: 20px;
    font-size: 14px;
    color: #ccc
}

.invitation .container-box .four-box .describe-box dl {
    font-size: 14px;
    color: #ccc
}

.invitation .container-box .four-box .describe-box dl dd {
    margin: 8px 0
}

.dark-table,.dark-table tr, .dark-table th.el-table__cell, .dark-table thead.has-gutter tr {
    background-color: transparent
}

.dark-table:before {
    height: 0
}

 .el-table th.el-table__cell.is-leaf {
    border: 0
}

.invitation .container-box .three-box .right-box .table-box {
    margin-top: 20px
}

 .dark-table td.el-table__cell {
    background-color: #2f303d;
    color: #fff;
    border-bottom: 6px solid transparent
}

 .dark-table td.el-table__cell:hover {
    background-color: #2a3756
}

</style>
  