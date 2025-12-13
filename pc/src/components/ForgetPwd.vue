<template>
<div class="reset-password-container">
    <indexHeader></indexHeader>
    <div class="reset-password-content">
      <header>
        <button type="button" class="el-button el-button--text" @click="$router.back(-1)">
          <span>
            <i class="iconfont icon-a-lujing24"></i> 
            <span>{{$t("earn.go_back")}}</span>
          </span>
        </button>
      </header>
      <div class="base-content">
        <div class="title">
          <p>{{$t("forgetPwd.retrieve")}}</p>
        </div>
        <div class="step">
          <div class="step-each">
            <p>
              <span :class="mainIndex==1?'active':''">1</span>
            </p>
            <p>{{$t("forgetPwd.input_account")}}</p>
          </div>
          <div class="step-each" v-if="yzm_radio == 1">
            <p>
              <span :class="mainIndex==2?'active':''">2</span>
            </p>
            <p>{{$t("forgetPwd.security_verification")}}</p>
          </div>
          <div class="step-each" v-if="yzm_radio == 1">
            <p>
              <span :class="mainIndex==3?'active':''">3</span>
            </p>
            <p>{{$t("forgetPwd.set_a_password")}}</p>
          </div>
		  
		  <div class="step-each" v-else>
		    <p>
		      <span :class="mainIndex==3?'active':''">2</span>
		    </p>
		    <p>{{$t("forgetPwd.set_a_password")}}</p>
		  </div>
		  
        </div>
        <div class="step-content" v-if="mainIndex==3">
          <form class="el-form user-form">
            <div class="el-form-item is-no-asterisk">
              <label for="inputUsername" class="el-form-item__label">{{$t("login.password")}}</label>
              <div class="el-form-item__content">
                <el-input v-model="password" :placeholder='$t("login.password")'></el-input>
              </div>
            </div>
            <div class="el-form-item op-item is-no-asterisk">
              <div class="el-form-item__content">
                <button type="button" class="el-button bk-new-btn el-button--primary" @click="confirmPassword">
                  <span>{{$t("tv.confirm")}}</span>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="step-content" style="width: 500px;padding 35px 0px" v-if="mainIndex==2">
          <div class="ver--tips f-ac f-fs f-c">
            <span class="f f-ac f-fs">
              {{ $t("register.tip_before") }}
              <span style="display: contents;">{{active==1?$t("register.tip_mail"):active==0?$t("register.tip_phone"):''}}</span>
              {{ $t("register.tip_after") }}
            </span>
          </div>
          <div class="f f-dc f-ac verCode">
            <div class="input-content f f-fs f-ac">
              <input v-model="code1" ref="code1" @input='jumpFk("code2")' max="9" min="0" maxlength="1" type="number" class="code-text f-ac f-c">
              <input v-model="code2" ref="code2" @input='jumpFk("code3")' max="9" min="0" maxlength="1" type="number" class="code-text f-ac f-c">
              <input v-model="code3" ref="code3" @input='jumpFk("code4")' max="9" min="0" maxlength="1" type="number" class="code-text f-ac f-c">
              <input v-model="code4" ref="code4" @input='jumpFk("code5")' max="9" min="0" maxlength="1" type="number" class="code-text f-ac f-c">
              <input v-model="code5" ref="code5" @input='jumpFk("code6")' max="9" min="0" maxlength="1" type="number" class="code-text f-ac f-c">
              <input v-model="code6" ref="code6" @input='inputChange' max="9" min="0" maxlength="1" type="number" class="code-text f-ac f-c">
            </div>
            <div class="getCode f-ac f-fs codeTips" v-if="seconds && seconds > 0">{{ seconds }} S</div>
            <div class="valCode f-ac f-fs codeTips" @click="preConfirm" v-else>{{$t("register.send_the_verification_code")}}</div>
          </div>
        </div>
        <div class="step-content" v-if="mainIndex==1">
          <div class="tabs" style="display: flex;">
            <button type="button" :class="active == 1 ? 'tabback' :''" :style="mobile_register==1?'':'width: 100%'" @click="active=1">{{$t("register.tip_mail")}}</button>
            <button type="button" v-if="mobile_register==1" :class="active == 0 ? 'tabback' :''" @click="active=0">{{$t("register.tip_phone")}}</button>
          </div>
          <form class="el-form user-form">
			  
            <div class="el-form-item is-no-asterisk" v-if="1 == active">
              <label for="inputUsername" class="el-form-item__label">{{$t("register.tip_mail")}}</label>
              <div class="el-form-item__content">
                <el-input v-model="user_string" :placeholder='$t("register.tip_mail")'></el-input>
              </div>
            </div>
            <div class="el-form-item is-no-asterisk" v-if="0 == active">
              <label for="inputUsername" class="el-form-item__label">{{$t("register.tip_phone")}}</label>
			  
              <div class="el-form-item__content" style="display: flex;">
				  <div class="each-input sel-country" v-if="active == 0" style="width: 25%;">
					  <div class="f-ac code-main" @click="showFlag = !showFlag">
						<img :src="defaultImage" width="24">
						{{ defaultNum }}
						<span class="icon-sap f-ac f-c"></span>
					  </div>
					  <div class="devicelist" v-if="showFlag">
						  <div class="f-ac code-main" v-for="conlist in deviceIdList" @click="choose(conlist)">
							<img :src="conlist.countryImage" width="24">
							{{ conlist.countryNumber }}
							<span class="icon-sap f-ac f-c"></span>
						  </div>
					  </div>
				  </div>
                <el-input v-model="user_string" :placeholder='$t("register.tip_phone")'></el-input>
              </div>
            </div>
            <div class="el-form-item op-item is-no-asterisk">
              <div class="el-form-item__content">
                <button type="button" class="el-button bk-new-btn el-button--primary" @click="preConfirm">
                  <span>{{$t("tv.confirm")}}</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <indexFooter></indexFooter>
</div>

</template>

<script>
import indexHeader from "@/view/indexHeader";
import indexFooter from "@/view/indexFooter";
export default {
  name:"forgetPwd",
  components: { indexHeader, indexFooter },
  data() {
    return {
      user_string: "",
      active: 1,
      showFlag: !1,
      deviceIdListBack: [],
      deviceIdList: [{
          countryName: "Malaysia",
          countryNumber: "+60",
          countryImage: require("@/assets/images/Malaysia.png")
      }, {
          countryName: "Spain",
          countryNumber: "+34",
          countryImage: require("@/assets/images/Spain.png")
      }, {
          countryName: "Canada",
          countryNumber: "+1",
          countryImage: require("@/assets/images/Canada.png")
      }, {
          countryName: "United States of America",
          countryNumber: "+1",
          countryImage: require("@/assets/images/United States of America.png")
      }, {
          countryName: "Chile",
          countryNumber: "+56",
          countryImage: require("@/assets/images/Chile.png")
      }, {
          countryName: "Colombia",
          countryNumber: "+57",
          countryImage: require("@/assets/images/Colombia.png")
      }, {
          countryName: "Cuba",
          countryNumber: "+53",
          countryImage: require("@/assets/images/Cuba.png")
      }, {
          countryName: "Denmark",
          countryNumber: "+45",
          countryImage: require("@/assets/images/Denmark.png")
      }, {
          countryName: "Egypt",
          countryNumber: "+20",
          countryImage: require("@/assets/images/Egypt.png")
      }, {
          countryName: "Finland",
          countryNumber: "+358",
          countryImage: require("@/assets/images/Finland.png")
      }, {
          countryName: "France",
          countryNumber: "+33",
          countryImage: require("@/assets/images/France.png")
      }, {
          countryName: "French Guiana",
          countryNumber: "+594",
          countryImage: require("@/assets/images/French Guiana.png")
      }, {
          countryName: "Germany",
          countryNumber: "+49",
          countryImage: require("@/assets/images/Germany.png")
      }, {
          countryName: "Ghana",
          countryNumber: "+233",
          countryImage: require("@/assets/images/Ghana.png")
      }, {
          countryName: "Grenada",
          countryNumber: "+1473",
          countryImage: require("@/assets/images/Grenada.png")
      }, {
          countryName: "Greece",
          countryNumber: "+30",
          countryImage: require("@/assets/images/Greece.png")
      }, {
          countryName: "Guam",
          countryNumber: "+1671",
          countryImage: require("@/assets/images/Guam.png")
      }, {
          countryName: "Honduras",
          countryNumber: "+504",
          countryImage: require("@/assets/images/Honduras.png")
      }, {
          countryName: "Hongkong",
          countryNumber: "+852",
          countryImage: require("@/assets/images/Hongkong.png")
      }, {
          countryName: "India",
          countryNumber: "+91",
          countryImage: require("@/assets/images/India.png")
      }, {
          countryName: "Iraq",
          countryNumber: "+964",
          countryImage: require("@/assets/images/Iraq.png")
      }, {
          countryName: "Iran",
          countryNumber: "+98",
          countryImage: require("@/assets/images/Iran.png")
      }, {
          countryName: "Ireland",
          countryNumber: "+353",
          countryImage: require("@/assets/images/Ireland.png")
      }, {
          countryName: "Israel",
          countryNumber: "+972",
          countryImage: require("@/assets/images/Israel.png")
      }, {
          countryName: "Italy",
          countryNumber: "+39",
          countryImage: require("@/assets/images/Italy.png")
      }, {
          countryName: "Jamaica",
          countryNumber: "+1876",
          countryImage: require("@/assets/images/Jamaica.png")
      }, {
          countryName: "Japan",
          countryNumber: "+81",
          countryImage: require("@/assets/images/Japan.png")
      }, {
          countryName: "Kampuchea(Cambodia)",
          countryNumber: "+855",
          countryImage: require("@/assets/images/Kampuchea(Cambodia).png")
      }, {
          countryName: "Kazakstan",
          countryNumber: "+7",
          countryImage: require("@/assets/images/Kazakstan.png")
      }, {
          countryName: "Russia",
          countryNumber: "+7",
          countryImage: require("@/assets/images/Russia.png")
      }, {
          countryName: "Korea",
          countryNumber: "+82",
          countryImage: require("@/assets/images/Korea.png")
      }, {
          countryName: "Macao",
          countryNumber: "+853",
          countryImage: require("@/assets/images/Macao.png")
      }, {
          countryName: "Netherlands",
          countryNumber: "+31",
          countryImage: require("@/assets/images/Netherlands.png")
      }, {
          countryName: "New Zealand",
          countryNumber: "+64",
          countryImage: require("@/assets/images/New Zealand.png")
      }, {
          countryName: "Norway",
          countryNumber: "+47",
          countryImage: require("@/assets/images/Norway.png")
      }, {
          countryName: "Pakistan",
          countryNumber: "+92",
          countryImage: require("@/assets/images/Pakistan.png")
      }, {
          countryName: "Poland",
          countryNumber: "+48",
          countryImage: require("@/assets/images/Poland.png")
      }, {
          countryName: "Portugal",
          countryNumber: "+351",
          countryImage: require("@/assets/images/Portugal.png")
      }, {
          countryName: "Philippines",
          countryNumber: "+51",
          countryImage: require("@/assets/images/Philippines.png")
      }, {
          countryName: "Peru",
          countryNumber: "+51",
          countryImage: require("@/assets/images/Peru.png")
      }, {
          countryName: "Sweden",
          countryNumber: "+46",
          countryImage: require("@/assets/images/Sweden.png")
      }, {
          countryName: "Mexico",
          countryNumber: "+52",
          countryImage: require("@/assets/images/Mexico.png")
      }, {
          countryName: "Maldives",
          countryNumber: "+960",
          countryImage: require("@/assets/images/Maldives.png")
      }, {
          countryName: "Paraguay",
          countryNumber: "+595",
          countryImage: require("@/assets/images/Paraguay.png")
      }, {
          countryName: "Saudi Arabia",
          countryNumber: "+966",
          countryImage: require("@/assets/images/Saudi Arabia.png")
      }, {
          countryName: "Suriname",
          countryNumber: "+597",
          countryImage: require("@/assets/images/Suriname.png")
      }, {
          countryName: "Thailand",
          countryNumber: "+66",
          countryImage: require("@/assets/images/Thailand.png")
      }, {
          countryName: "United Arab Emirates",
          countryNumber: "+971",
          countryImage: require("@/assets/images/United Arab Emirates.png")
      }, {
          countryName: "United Kingdom",
          countryNumber: "+44",
          countryImage: require("@/assets/images/United Kingdom.png")
      }, {
          countryName: "Taiwan",
          countryNumber: "+886",
          countryImage: require("@/assets/images/Taiwan.png")
      }, {
          countryName: "Switzerland",
          countryNumber: "+41",
          countryImage: require("@/assets/images/Switzerland.png")
      }],
      defaultImage: "",
      defaultNum: "",
      mainIndex: 1,
      seconds: 60,
      timer: null,
      code1: "",
      code2: "",
      code3: "",
      code4: "",
      code5: "",
      code6: "",
      password: "",
      mobile_register: "",
	  yzm_radio: 0
    };
  },
  created() {
    this.defaultImage = this.deviceIdList[0].countryImage,
    this.defaultNum = this.deviceIdList[0].countryNumber,
    this.area_code = this.deviceIdList[0].countryNumber,
    this.getConfigByKey()
	this.getSiteLogo()
  },
  methods: {
	getSiteLogo() {
	    this.$http({
	        url: "/api/getSiteConfig",
	        method: "get",
	        data: {}
	    }).then(t=>{
	        this.yzm_radio = t.data.message.yzm_radio
	    }
	    )
	},
    getConfigByKey() {
      var t = this;
      this.$http({
          url: "/api/getSetting?keyword=mobile_register",
          method: "get",
          data: {},
          headers: {
              Authorization: localStorage.getItem("token") || ""
          }
      }).then(e=>{
          e = e.data,
          t.mobile_register = e.message.value
		  t.mobile_register = e.message.value
      }
      ).catch(t=>{
          console.log(t)
      }
      )
  },
  preConfirm() {
      if (1 == this.active) {
          var t = /^([a-zA-Z0-9]+[_|\_|-|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|-|\-|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
          if (!t.test(this.user_string))
              return layer.msg(this.$t("register.msg1")),
              !1
      } else if (!this.user_string || this.user_string.length < 5)
          return layer.msg(this.$t("register.msg2")),
          !1;
      this.sendCode()
  },
  choose(t) {
      this.defaultImage = t.countryImage,
      this.defaultNum = t.countryNumber,
      this.area_code = t.countryNumber,
      this.showFlag = !1
  },
  filterList(t) {
      this.deviceIdListBack.length <= 0 && (this.deviceIdListBack = this.deviceIdList);
      var e = t.target.value.trim();
      e.length > 0 ? (this.newArr = this.deviceIdListBack.filter(t=>{
          var a = t.countryNumber.toUpperCase().indexOf(e.toUpperCase())
            , s = t.countryName.toUpperCase().indexOf(e.toUpperCase());
          if (a >= 0 || s >= 0)
              return t
      }
      ),
      this.deviceIdList = this.newArr) : this.deviceIdList = this.deviceIdListBack
  },
  jumpFk(t) {
      this.$refs[t].focus()
  },
  inputChange() {
      this.code1 && this.code2 && this.code3 && this.code4 && this.code5 && this.code6 && this.checkCode()
  },
  sendCode() {
	  if(this.yzm_radio == 0){
		  this.mainIndex = 3
		  return false
	  }
	  if(this.active == 0){
	  	var apiurl = '/api/sms_mobile';
	  }else{
	  	var apiurl = '/api/sms_mail';
	  }
      var t = this;
      this.$http({
          url: apiurl,
          method: "post",
          data: {
              user_string: t.user_string,
              area_code_id: "",
              area_code: t.area_code,
              type: "forget",
              lang: window.localStorage.getItem("lang") || "en",
              type_new: t.active
          }
      }).then(e=>{
          "ok" == e.data.type ? (t.seconds = 60,
          t.mainIndex = 2,
          t.timer = setInterval((function() {
              t.seconds = t.seconds - 1,
              t.seconds <= 0 && clearInterval(t.timer)
          }
          ), 1e3)) : layer.msg(e.data.message)
      }
      )
  },
  checkCode() {
      var t = this;
      this.$http({
          url: "/api/user/checkCode",
          method: "post",
          data: {
              code: t.code1 + t.code2 + t.code3 + t.code4 + t.code5 + t.code6,
              lang: window.localStorage.getItem("lang") || "en"
          }
      }).then(e=>{
          "ok" == e.data.type ? (layer.msg(e.data.message),
          t.mainIndex = 3) : layer.msg(e.data.message)
      }
      )
  },
  confirmPassword() {
      var t = this;
      this.$http({
          url: "/api/user/forget",
          method: "post",
          data: {
              account: t.user_string,
              code: t.code1 + t.code2 + t.code3 + t.code4 + t.code5 + t.code6,
              password: t.password,
              repassword: t.password,
              lang: window.localStorage.getItem("lang") || "en"
          }
      }).then(t=>{
          "ok" == t.data.type ? (layer.msg(t.data.message),
          this.$router.push("/components/login")) : layer.msg(t.data.message)
      }
      )
    }
  }
};
</script>

<style scoped>
.devicelist{
	z-index: 9999999;
	position: relative;
	background-color: #f7f7fa;
	height: 300px;
	overflow-x: hidden;
	width: 105px;
}
.reset-password-container {
  background-color: #fff;
  padding-bottom: 120px;
  color: #2d2e31;
  margin-bottom: 40px
}

.reset-password-container .bk-new-btn {
  font-weight: 600
}

.reset-password-container .reset-password-content {
  width: 1200px;
  margin: 0 auto
}

.reset-password-container .reset-password-content header {
  padding-top: 63px;
  text-align: left
}

.reset-password-container .reset-password-content header .el-button--text {
  padding: 0;
  color: #adb0b9;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  border: none
}

.reset-password-container .reset-password-content header .el-button--text i,.reset-password-container .reset-password-content header .el-button--text span {
  float: left
}

.reset-password-container .reset-password-content header .el-button--text span {
  padding-left: 10px
}

.reset-password-container .reset-password-content .base-content {
  width: 457px;
  margin: 0 auto
}

.reset-password-container .reset-password-content .base-content.payPass {
  width: 437px
}

.reset-password-container .reset-password-content .base-content.payPass .step .step-each:first-of-type p:first-child {
  width: 70px;
  padding-left: 28px
}

.reset-password-container .reset-password-content .base-content.payPass .step-content {
  margin-left: 26px
}

.reset-password-container .reset-password-content .base-content .title {
  font-size: 32px;
  font-weight: 600;
  line-height: 45px;
  color: #333;
  text-align: center;
  margin: 0 11px 0 46px
}

.reset-password-container .reset-password-content .base-content .step {
  margin-top: 43px;
  display: flex;
  justify-content: space-between;
  position: relative
}

.reset-password-container .reset-password-content .base-content .step:before {
  content: "";
  width: calc(100% - 112px);
  height: 0;
  border-bottom: 1px solid #eeeff3;
  left: 56px;
  top: 13px;
  z-index: 1;
  position: absolute
}

.reset-password-container .reset-password-content .base-content .step .step-each {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  flex-direction: column
}

.reset-password-container .reset-password-content .base-content .step .step-each p {
  text-align: center
}

.reset-password-container .reset-password-content .base-content .step .step-each:first-of-type {
  width: 150px;
  word-break: break-word
}

.reset-password-container .reset-password-content .base-content .step .step-each:nth-of-type(2) {
  width: 150px;
  margin-left: -37px
}

.reset-password-container .reset-password-content .base-content .step .step-each:last-of-type {
  text-align: right
}

.reset-password-container .reset-password-content .base-content .step .step-each:last-of-type p:first-child {
  text-align: center;
  display: inline-block
}

.reset-password-container .reset-password-content .base-content .step .step-each:last-of-type p:last-child {
  text-align: right
}

.reset-password-container .reset-password-content .base-content .step .step-each p:first-child {
  padding: 0 15px;
  width: 56px;
  background-color: #fff
}

.reset-password-container .reset-password-content .base-content .step .step-each p span {
  color: #333;
  display: inline-block;
  width: 26px;
  height: 26px;
  border-radius: 13px;
  background-color: #ededed;
  font-weight: 600;
  line-height: 26px;
  text-align: center
}

.reset-password-container .reset-password-content .base-content .step .step-each p span.active {
  color: #fff;
  background-color: #f34718
}

.reset-password-container .reset-password-content .base-content .step .step-each p:last-child {
  margin-top: 9px;
  font-weight: 600;
  line-height: 20px
}

.reset-password-container .reset-password-content .base-content .step-content {
  margin: 50px 11px 0 46px;
  width: 400px;
  border-radius: 4px;
  border: 1px solid #e9eef1;
  padding: 35px 30px
}

.reset-password-container .reset-password-content .base-content .step-content .tabs {
  padding: 1px;
  background: #f3f3f4;
  border-radius: 4px;
  margin-bottom: 29px
}

.reset-password-container .reset-password-content .base-content .step-content .tabs button {
  border: none;
  height: 100%;
  width: 100%;
  color: #919191;
  font-size: 16px;
  font-weight: 500;
  line-height: 32px;
  border-radius: 4px
}

.reset-password-container .reset-password-content .base-content .step-content .tabs button.active {
  color: #333;
  background-color: #fff
}

.reset-password-container .reset-password-content .base-content .step-content .el-form.user-form {
  margin-top: 0
}

.reset-password-container .reset-password-content .base-content .step-content .el-form.user-form .other-check {
  position: relative;
  margin-top: 58px
}

.reset-password-container .reset-password-content .base-content .step-content .el-form.user-form .other-check .edit-safe {
  position: relative;
  bottom: 19px;
  left: 0
}

.reset-password-container .reset-password-content .base-content .step-content .el-form.user-form .other-check .edit-safe span {
  font-weight: 500;
  line-height: 20px
}

.reset-password-container .reset-password-content .base-content .step-content .el-form.user-form .other-check .edit-safe span:last-child {
  padding-left: 5px;
  color: #f34718
}

.reset-password-container .reset-password-content .base-content .step-content .el-form.user-form .el-form-item .info {
  display: flex;
  justify-content: space-between;
  align-items: center
}

.reset-password-container .reset-password-content .base-content .step-content .el-form.user-form .el-form-item .info span {
  display: flex;
  align-items: center;
  justify-content: flex-end
}

.reset-password-container .reset-password-content .base-content .step-content .el-form.user-form .el-form-item .info span i {
  display: block;
  width: 30px;
  height: 2px;
  background: #ededed;
  margin-left: 2px
}

.reset-password-container .reset-password-content .base-content .step-content .el-form.user-form .el-form-item .info span i.level1 {
  background: #d11a1a
}

.reset-password-container .reset-password-content .base-content .step-content .el-form.user-form .el-form-item .info span i.level2 {
  background-color: #e97213
}

.reset-password-container .reset-password-content .base-content .step-content .el-form.user-form .el-form-item .info span i.level3 {
  background-color: #4cae69
}

.reset-password-container .reset-password-content .base-content .step-content .el-form.user-form .el-form-item .suffix-icon {
  font-size: 14px;
  margin-right: 7px;
  width: 16.8px;
  height: 13.6px;
  position: relative;
  top: 2px
}

.reset-password-container .reset-password-content .base-content .step-content .el-form.user-form .el-form-item .suffix-icon.cw {
  color: #dd2121
}

.reset-password-container .reset-password-content .base-content .step-content .el-form.user-form .el-form-item .suffix-icon.zq {
  color: #36b97e
}

.reset-password-container .reset-password-content .base-content .step-content .el-form.user-form .el-form-item.op-item {
  margin-bottom: 0
}

.reset-password-container .reset-password-content .base-content .step-content .el-form.user-form .el-form-item .el-input--prefix .el-input__inner {
  padding-left: 15px
}

.reset-password-container .reset-password-content .base-content .step-content .el-form.user-form .el-form-item .el-input__prefix {
  left: 0
}

.reset-password-container .reset-password-content .base-content .step-content .el-form.user-form .el-form-item .el-input__prefix .el-popover.error-popover {
  margin-top: 48px;
  border-radius: 4px;
  min-width: 170px
}

.reset-password-container .reset-password-content .base-content .step-content .el-form.user-form .el-form-item .el-input__prefix .el-popover.error-popover .suffix-main {
  align-items: flex-start;
  width: 100%
}

.reset-password-container .reset-password-content .base-content .step-content .el-form.user-form .el-form-item .el-input__prefix .el-popover.error-popover .suffix-main span {
  white-space: nowrap
}

.reset-password-container .reset-password-content .base-content .step-content .el-form.user-form .el-form-item.hide-error .el-form-item__error {
  display: none
}

.el-form.user-form {
  margin-top: 31px
}

.el-form.user-form .sub-title {
  font-size: 18px;
  font-weight: 600;
  line-height: 25px;
  margin-bottom: 31px
}

.el-form.user-form .el-form-item {
  margin-bottom: 29px
}

.el-form.user-form .el-form-item.op-item {
  margin-bottom: 0
}

.el-form.user-form .el-form-item.password {
  position: relative
}

.el-form.user-form .el-form-item.password .forget {
  color: #f34718;
  position: absolute;
  right: 0;
  top: 0;
  line-height: 20px;
  font-weight: 500;
  cursor: pointer
}

.el-form.user-form .el-form-item.password .el-input .el-input__suffix {
  padding: 0 10px;
  height: 40px
}

.el-form.user-form .el-form-item.password .el-input .el-input__suffix .el-input__suffix-inner {
  height: 40px;
  display: block
}

.el-form.user-form .el-form-item.password .el-input .el-input__suffix button {
  background: none;
  border: none;
  height: 100%
}

.el-form.user-form .el-form-item.password .el-input .el-input__suffix button .iconfont {
  font-size: 27px;
  color: #919191
}

.el-form.user-form .el-form-item.phone .el-form-item__content {
  display: flex
}

.el-form.user-form .el-form-item.phone .el-select {
  min-width: 61px;
  max-width: 80px;
  margin-right: 10px
}

.el-form.user-form .el-form-item.phone .el-select .el-icon-arrow-up {
  color: #919191
}

.el-form.user-form .el-form-item.phone .el-select .el-icon-arrow-up:before {
  content: "\E78F"
}

.el-form.user-form .el-form-item.phone .el-input {
  flex: 1;
  width: auto
}

.el-form.user-form .el-form-item.secret-item .question-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 11px
}

.el-form.user-form .el-form-item.secret-item .question-title .question-index {
  font-weight: 600;
  line-height: 20px;
  align-self: flex-start
}

.el-form.user-form .el-form-item.secret-item .question-title .question-content {
  flex: 1;
  text-align: left;
  font-weight: 600;
  line-height: 20px
}

.el-form.user-form .el-form-item.secret-item .question-title .el-select {
  flex: 1;
  height: 20px
}

.el-form.user-form .el-form-item.secret-item .question-title .el-select .select-pop {
  min-width: 136px;
  height: 120px;
  background: #fff;
  box-shadow: 0 9px 28px 8px rgba(0,0,0,.05),0 6px 16px 0 rgba(0,0,0,.08),0 3px 6px -4px rgba(0,0,0,.12);
  border-radius: 4px
}

.el-form.user-form .el-form-item.secret-item .question-title .el-select .select-pop .el-scrollbar {
  padding: 0;
  height: 120px
}

.el-form.user-form .el-form-item.secret-item .question-title .el-select .select-pop .el-select-dropdown__wrap {
  max-height: 120px;
  padding: 0;
  overflow-x: hidden;
  margin-bottom: 0!important
}

.el-form.user-form .el-form-item.secret-item .question-title .el-select .select-pop .el-select-dropdown__wrap .el-select-dropdown__item {
  height: 40px;
  line-height: 40px;
  font-weight: 600;
  color: rgba(0,0,0,.65)
}

.el-form.user-form .el-form-item.secret-item .question-title .el-select .select-pop .el-select-dropdown__wrap .el-select-dropdown__item.selected {
  background: rgba(243,71,24,.1);
  color: #f34718
}

.el-form.user-form .el-form-item.secret-item .question-title .el-select .select-pop .el-select-dropdown__wrap .el-select-dropdown__list {
  padding: 0
}

.el-form.user-form .el-form-item.secret-item .question-title .el-select .select-pop .popper__arrow {
  display: none
}

.el-form.user-form .el-form-item.secret-item .question-title .el-select .el-input {
  height: 20px;
  line-height: 20px
}

.el-form.user-form .el-form-item.secret-item .question-title .el-select .el-input .el-input__suffix {
  right: -7px
}

.el-form.user-form .el-form-item.secret-item .question-title .el-select .el-input .el-input__suffix .el-select__caret {
  color: #919191;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  transform-origin: center center;
  transform: rotate(180deg)
}

.el-form.user-form .el-form-item.secret-item .question-title .el-select .el-input .el-input__suffix .el-select__caret.is-reverse {
  transform: rotate(0)
}

.el-form.user-form .el-form-item.secret-item .question-title .el-select .el-input .el-input__suffix .el-select__caret:before {
  content: "\E78F"
}

.el-form.user-form .el-form-item.secret-item .question-title .el-select .el-input__inner {
  padding: 0;
  font-weight: 600;
  border: none;
  height: 20px;
  line-height: 20px
}

.el-form.user-form .el-form-item .el-form-item__label {
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 11px
}

.el-form.user-form .el-form-item .el-form-item__content {
  line-height: 40px;
  width: 100%
}

.el-form.user-form .el-form-item .el-form-item__content .info {
  color: #adb0b9;
  font-size: 12px;
  line-height: 17px;
  margin-top: 4px;
  text-align: left
}

.el-form.user-form .el-form-item .el-form-item__error {
  color: #dd2121
}

.el-form.user-form .el-form-item .el-input .el-input__clear {
  line-height: 40px;
  font-size: 14px;
  float: left;
  margin-right: 4px
}

.el-form.user-form .el-form-item .el-input .el-input__clear:before {
  font-size: 15px;
  font-family: iconfont;
  color: #919191;
  content: "\E613"
}

.el-form.user-form .el-form-item .el-input,.el-form.user-form .el-form-item .el-select {
  height: 40px;
  line-height: 40px;
  border-radius: 4px
}

.el-form.user-form .el-form-item .el-input .el-input__suffix,.el-form.user-form .el-form-item .el-select .el-input__suffix {
  display: flex
}

.el-form.user-form .el-form-item .el-input .el-input__suffix .el-input__suffix-inner,.el-form.user-form .el-form-item .el-select .el-input__suffix .el-input__suffix-inner {
  flex: 1;
  justify-self: flex-end
}

.el-form.user-form .el-form-item .el-input .el-input__suffix .el-icon-circle-close,.el-form.user-form .el-form-item .el-select .el-input__suffix .el-icon-circle-close {
  justify-self: flex-start
}

.el-form.user-form .el-form-item .el-input .el-input__inner,.el-form.user-form .el-form-item .el-select .el-input__inner {
  border: 1px solid #eee;
  border-radius: 4px
}

.el-form.user-form .el-form-item .el-input .el-input__inner:focus,.el-form.user-form .el-form-item .el-select .el-input__inner:focus {
  border-color: #f34718
}

.el-form.user-form .el-form-item .el-input .el-input__inner::-webkit-input-placeholder,.el-form.user-form .el-form-item .el-select .el-input__inner::-webkit-input-placeholder {
  color: #bbb
}

.el-form.user-form .el-form-item .el-input .el-input__inner:-moz-placeholder,.el-form.user-form .el-form-item .el-input .el-input__inner::-moz-placeholder,.el-form.user-form .el-form-item .el-select .el-input__inner:-moz-placeholder,.el-form.user-form .el-form-item .el-select .el-input__inner::-moz-placeholder {
  color: #bbb
}

.el-form.user-form .el-form-item .el-input .el-input__inner:-ms-input-placeholder,.el-form.user-form .el-form-item .el-select .el-input__inner:-ms-input-placeholder {
  color: #bbb
}

.el-form.user-form .el-form-item .el-input input,.el-form.user-form .el-form-item .el-select input {
  height: 40px;
  line-height: 40px
}

.el-form.user-form .el-form-item .el-input .msg-wrap .el-button--text,.el-form.user-form .el-form-item .el-select .msg-wrap .el-button--text {
  background-color: transparent;
  line-height: 40px;
  height: 40px;
  text-align: right;
  padding: 0 8px 0 0;
  font-size: 14px;
  border: none;
  width: auto
}

.el-form.user-form .el-form-item .bk-new-btn {
  width: 100%
}

.country-content .slot-content {
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 0 12px;
  height: 40px;
  line-height: 40px;
  margin-right: 10px;
  cursor: pointer
}

.country-content .slot-content .el-icon-caret-bottom {
  color: #919191;
  font-size: 14px;
  transition: transform .3s
}

.country-content .slot-content .el-icon-caret-bottom.show {
  transform: rotate(180deg)
}

.country-content .slot-content span {
  padding-left: 2px;
  font-weight: 500
}

.slide-box {
  position: absolute;
  top: 26px;
  left: 0;
  right: 0;
  margin-top: 5px;
  overflow: hidden;
  background: #fff;
  border-radius: 5px;
  border: 1px solid #e4e7ed;
  box-shadow: 0 0 5px 0 #ddd;
  transition: all .3s ease-in;
  z-index: 9
}

.slide-box .filter-box {
  height: 45px;
  border-bottom: 1px solid #eaeaea;
  padding: 5px 20px
}

.slide-box .filter-box input {
  width: 100%;
  height: 100%;
  padding: 5px 10px;
  font-size: 14px;
  color: #000;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  transition: border-color .2s cubic-bezier(.645,.045,.355,1)
}

.slide-box ul {
  height: 100%;
  max-height: 170px;
  width: 100%;
  overflow: auto
}

.slide-box ul li {
  justify-content: space-between;
  height: 40px;
  padding: 0 20px;
  color: #333;
  font-size: 14px
}

.slide-box ul li .left,.slide-box ul li {
  display: flex;
  align-items: center
}

.slide-box ul li .left .countryImg {
  display: block;
  width: 25px;
  height: 25px
}

.slide-box ul li:hover {
  cursor: pointer;
  background-color: #ccc;
  color: #276cff
}

.input-content {
  width: 100%;
  margin-bottom: 30px;
  margin-top: 30px;
  justify-content: center
}

.input-content .code-text {
  width: 48px;
  height: 48px;
  border-radius: 4px;
  border: 1px solid #eee;
  margin-right: 10px;
  text-align: center;
  font-size: 17px;
  font-weight: 500;
  color: #2d2e31
}

.input-content .code-text:focus {
  outline: none;
  border: 1px solid #f34718
}

.input-content .code-text:last-child {
  margin-right: 0
}
.tabback{
	background-color: #fff;
}
</style>