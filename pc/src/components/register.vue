<template>
  <div class="height: 100%; background: white;">
    <indexHeader></indexHeader>
    <div class="verificationCode" style="" v-if="nextFlage">
      <div class="f f-ac f-c vericode-content" style="background: white;">
        <div class="verificationCode-content" style="">
          <div class="ver-title f-ac f-fs">
            <span v-if="active == 0">{{$t("register.e_mail_verification")}}</span>
			<span v-else>{{$t("register.phone_verification")}}</span>
          </div>
          <div class="ver--tips f-ac f-fs">
            <span class="f f-ac f-fs">
              {{$t("register.tip_before")}} 
              <span v-if="active == 0" style="width: auto; display: contents;">{{$t("register.tip_mail")}}</span>
			  <span v-else style="width: auto; display: contents;">{{$t("register.tip_phone")}}</span>
              {{$t("register.tip_after")}}
            </span>
          </div>
          <div class="ver-code f-ac f-fs">
            <span v-if="active == 0">{{$t("register.ver_code_mail")}}</span>
			 <span v-else>{{$t("register.ver_code_phone")}}</span>
            {{$t("register.verification_code")}} 
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
        <div class="verificationCode-bg">
          <img src="@/assets/images/login_img.png" class="">
        </div>
      </div>
    </div>
    <div class="register-page" v-else>
      <div class="f f-c f-ac register-content" style="background: white;">
        <div class="register-main">
          <div class="register-title"> {{$t("register.create_account")}} </div>
          <div class="register-title--tips f-ac f-fs">{{$t("register.create_tips")}}</div>
          <div class="tab-main">
            <div class="login-tabMain f-ac f-sb">
              <div class="login-tabItem f-ac f-c" :class="active == 0 ? 'sed' :''" @click="active=0"> {{$t("login.login_tabItem_0")}} </div>
              <div class="login-tabItem f-ac f-c" v-if="mobile_register==1" :class="active == 1 ? 'sed' :''" @click="active=1"> {{$t("login.login_tabItem_1")}} </div>
            </div>
          </div>
          <div class="input-wrap">
            <div class="login-titleItem f-ac f-fs">
              <span v-if="active == 0">{{$t("login.active_0")}}</span>
              <span v-if="active == 1">{{$t("login.active_1")}}</span>
            </div>
            <form class="el-form">
              <div class="fistInput">
                <div class="ui5-eveyInputBox">
                  <div class="f-ac f-sb userMain">
					  <div class="each-input sel-country" v-if="active == 1">
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
                    <div class="each-input usernameDiv">
                      <div class="el-form-item">
                        <div class="el-form-item__content">
                          <div class="userNameInput el-input el-input-group el-input-group--append el-input--suffix">
                            <el-input v-if="active == 0" class="userNameInput userNameInput_m" v-model="user_string" :placeholder='$t("login.mail_placeholder")' name="username"></el-input>
                            <el-input v-if="active == 1" class="userNameInput userNameInput_m" v-model="user_string" :placeholder='$t("login.phone_placeholder")' name="username"></el-input>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ui5-eveyInputBox">
                <div class="login-titleItem f-ac f-fs">{{$t("register.password")}}</div>
                <div class="each-input">
                  <div class="el-form-item">
                    <div class="el-form-item__content">
                      <div class="pwdInputDiv el-input el-input-group el-input-group--append el-input--suffix">
                        <input v-model="password" type="password" autocomplete="off" :placeholder='$t("register.password_placeholder")' maxlength="20" class="el-input__inner">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ui5-eveyInputBox">
                <div class="login-titleItem f-ac f-fs jtm-input zd-input" @click="yqmFlag = !yqmFlag">
                  <span>{{$t("register.invitation_code")}}</span>
                  <i class="iconfont icon-down_normal yaoqingCode xzIcon">
                    <svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M36 19L24 31L12 19H36Z" fill="black" stroke="black" stroke-width="3" stroke-linejoin="round"></path>
                    </svg>
                  </i>
                  <span class="codeVal f"></span>
                </div>
                <div class="each-input code-sm" >
                  <div class="el-form-item">
                    <div class="el-form-item__content">
                      <div class="el-input el-input-group el-input-group--append">
                        <input v-model="extension_code" type="text" autocomplete="off" :placeholder='$t("register.invitation_code_placeholder")' class="el-input__inner">
                        <!-- <div class="el-input-group__append" @click="zt">
                          <span class="paste">{{$t("register.paste")}}</span>
                        </div> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="agreement-wrap f-a f-fs">
                <el-checkbox v-model="agree"><span class="agr-ib" style="margin-left: 5px;">
                  <span style="color: rgb(51, 51, 51);">{{$t("register.agree")}}</span>
                  <span class="user-agree">
                    <a href="#/text?id=41">{{"《" + siteName + $t("register.agreement") + "》"}}</a>
                  </span>
                </span></el-checkbox>
                </div>
                <div class="btns">
                  <button type="button" class="el-button el-button--default bk-btn huiBtn" @click="preConfirm">
                    <span>{{$t("register.register")}}</span>
                  </button>
                </div>
                <div class="goto-login">
                  <span>{{$t("register.already_have_an_account")}}？</span> 
                  <span class="rt-btn">
                    <a href="#/components/login" class="">{{$t("register.login_now")}}</a>
                  </span>
                </div>
              </form>
            </div>
          </div>
          <div class="register-bg">
            <img src="@/assets/images/login_img.png" class="bgLogin">
          </div>
        </div>
      </div>
  </div>

</template>

<script>
import indexHeader from '@/view/indexHeader'
import indexFooter from '@/view/indexFooter'

export default {
  name: "register",
  components: {indexHeader, indexFooter},
  data() {
    return {
      active: 0,
      siteName: "",
      apk_download_url: "",
      mobile: !1,
      yqmFlag: !1,
      code1: "",
      code2: "",
      code3: "",
      code4: "",
      code5: "",
      code6: "",
      nextFlage: !1,
      user_string: "",
      code: "",
      password: "",
      extension_code: "",
      lang: "",
      agree: !1,
      area_code: "+1",
      seconds: 60,
      timer: null,
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
      mobile_register: "",
      yzm_radio: 0
    }
  },
  created() {
    this.getConfigByKey(),
    this.defaultImage = this.deviceIdList[0].countryImage,
    this.defaultNum = this.deviceIdList[0].countryNumber,
    this.area_code = this.deviceIdList[0].countryNumber,
    this.$equipment() && (this.mobile = !0);
    var t = this.$route.params.extension_code;
    t && (this.extension_code = t,
    this.yqmFlag = !0);
    let e = this.$route.params.email;
    if (e = decodeURIComponent(e),
    e) {
        var a = /^([a-zA-Z0-9]+[_|\_|-|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|-|\-|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        a.test(e) && (this.user_string = e)
    }
    this.lang = window.localStorage.getItem("lang") || "en";
    var s = this;
    window.addEventListener("resize", ()=>{
        s.$equipment() ? s.mobile = !0 : s.mobile = !1
    }
    )
    //this.getSiteLogo()
  },
  mounted() {
    this.getSiteLogo(),
    this.getConfigByKey()
  },
  methods: {
    keyboard(t, e) {
        let a = document.getElementsByClassName("inputValue")
          , s = a[e]
          , i = a[e + 1]
          , n = a[e - 1];
        8 != t.keyCode ? e < 5 ? i.focus() : s.blur() : 0 != e && n.focus()
    },
    expurgate(t) {
        this.key = ""
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
        }
        ).catch(t=>{
            console.log(t)
        }
        )
    },
    zt() {
        var t = new Clipboard(".copys_sty");
        t.on("success", e=>{
            console.log("复制成功"),
            t.destroy()
        }
        ),
        t.on("error", e=>{
            console.log("该浏览器不支持自动复制"),
            t.destroy()
        }
        )
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
        this.code1 && this.code2 && this.code3 && this.code4 && this.code5 && this.code6 && this.confirmRegister()
    },
    confirmRegister() {
        var t = this;
        this.$http({
            url: "/api/user/register",
            method: "POST",
            data: {
                user_string: t.user_string,
                code: t.code1 + t.code2 + t.code3 + t.code4 + t.code5 + t.code6,
                password: t.password,
                re_password: "",
                extension_code: t.extension_code,
                type: "email",
                lang: t.lang,
				area_code: t.area_code
            }
        }).then(e=>{
            "ok" == e.data.type ? (layer.msg(e.data.message),
            t.mobile ? t.$router.push("/appDown") : t.$router.push({
                name: "login"
            })) : layer.msg(e.data.message)
        }
        )
    },
    getSiteLogo() {
        this.$http({
            url: "/api/getSiteConfig",
            method: "get",
            data: {}
        }).then(t=>{
            this.siteName = t.data.message.site_name,
            this.apk_download_url = t.data.message.apk_download_url,
            this.yzm_radio = t.data.message.yzm_radio
			//console.log(123)
        }
        )
    },
    jumpFk(t) {
        this.$refs[t].focus()
    },
    yqm() {
        this.yqmFlag = !this.yqmFlag
    },
    preConfirm() {
		if(this.yzm_radio == 0){
			if(this.agree != 1){				
				return layer.msg(this.$t("register.msg4")),
				false;
			}
			this.confirmRegister()
		}else{
			if (0 == this.active) {
			    var t = /^([a-zA-Z0-9]+[_|\_|-|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|-|\-|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
			    if (!t.test(this.user_string))
			        return layer.msg(this.$t("register.msg1")),
			        !1
			} else if (!this.user_string || this.user_string.length < 5)
			    return layer.msg(this.$t("register.msg2")),
			    !1;
			return !this.password || this.password.length < 6 ? (layer.msg(this.$t("register.msg3")),
			!1) : this.agree ? void this.getCode(this.active) : (layer.msg(this.$t("register.msg4")),
			!1)
		}        
    },
    getCode(t) {
		if(1 == this.active){
			var apiurl = '/api/sms_mobile';
		}else{
			var apiurl = '/api/sms_mail';
		}
        var e = this;
        this.$http({
            url: apiurl,
            method: "POST",
            data: {
                user_string: e.user_string,
                scene: "register",
                area_code_id: "",
                area_code: e.area_code,
                lang: e.lang,
                email_code: "",
                type_new: t
            }
        }).then(t=>{
            "ok" == t.data.type ? (1 == e.yzm_radio && (setTimeout((function() {
                e.code1 = t.data.message.substring(0, 1),
                e.inputChange()
            }
            ), 1e3),
            setTimeout((function() {
                e.code2 = t.data.message.substring(1, 2),
                e.inputChange()
            }
            ), 1e3),
            setTimeout((function() {
                e.code3 = t.data.message.substring(2, 3),
                e.inputChange()
            }
            ), 1e3),
            setTimeout((function() {
                e.code4 = t.data.message.substring(3, 4),
                e.inputChange()
            }
            ), 1e3),
            setTimeout((function() {
                e.code5 = t.data.message.substring(4, 5),
                e.inputChange()
            }
            ), 1e3),
            setTimeout((function() {
                e.code6 = t.data.message.substring(5, 6),
                e.inputChange()
            }
            ), 3e3)),
            e.seconds = 60,
            e.timer = setInterval((function() {
                e.seconds = e.seconds - 1,
                e.nextFlage = !0,
                e.seconds <= 0 && clearInterval(e.timer)
            }
            ), 1e3)) : layer.msg(t.data.message)
        }
        )
    }
  },
  beforeRouteEnter(to, from, next) {
    // if(from.name == 'dealCenter'){
    // window.location.reload()
    // }
    next()
  }

}
</script>

<style lang="scss">
.devicelist{
	z-index: 9999999;
	position: relative;
	background-color: #f7f7fa;
	height: 300px;
	overflow-x: hidden;
	width: 105px;
}
.register-page {
  display: flex;
  justify-content: flex-start;
  background-color: #fff;
  min-height: 800px;
  height: 100%;
  min-width: 1280px
}

.register-page .register-content {
  width: 100%;
  height: 100%;
  margin-top: 32px
}

.register-page .register-main {
  margin-right: 140px
}

.register-page .register-bg {
  width: 400px;
  height: 400px
}

.register-page .register-bg img {
  width: 100%
}

.register-page .el-form-item {
  margin: 0 auto
}

.register-page .el-form-item.hide-error .el-form-item__error {
  display: none
}

.register-page .el-form-item .el-form-item__error {
  color: #dd2121;
  font-size: 12px;
  line-height: 16px;
  padding-top: 4px;
  text-align: left
}

.register-page .register-main {
  width: 340px;
  height: 620px;
  position: relative;
  z-index: 10;
  background-color: #fff
}

.register-page .register-main .register-inviter {
  height: 20px;
  color: #aaa;
  font-size: 12px;
  margin-bottom: 10px
}

.register-page .register-main .iconfont {
  font-size: 16px;
  position: relative;
  color: #707a8a;
  top: 3px
}

.register-page .register-main .iconfont.yj-icon {
  font-size: 25px;
  right: 29px;
  top: 5px
}

.register-page .register-main .iconfont.pwd-s {
  right: 32px
}

.register-page .register-main .register-title {
  font-size: 26px;
  font-weight: 600;
  text-align: left;
  color: #333;
  margin-bottom: 13px
}

.register-page .register-main .register-title--tips {
  text-align: left;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 20px
}

.register-page .register-main .fromTo {
  font-size: 14px;
  color: #b3bac9;
  text-align: left;
  margin-bottom: 15px
}

.register-page .register-main .regsiter-tab {
  width: 60%
}

.register-page .register-main .regsiter-tab .el-tabs__active-bar.is-active,.register-page .register-main .regsiter-tab .el-tabs__active-bar,.register-page .register-main .regsiter-tab .el-tabs__nav-scroll,.register-page .register-main .regsiter-tab .el-tabs__nav {
  background-color: #fff!important
}

.register-page .register-main .regsiter-tab .el-tabs__item {
  font-size: 14px!important;
  color: #b3bac9!important
}

.register-page .register-main .regsiter-tab .el-tabs__item.is-active {
  color: #333!important;
  font-size: 18px!important
}

.register-page .register-main .get-msg-btn {
  color: #f34718
}

.register-page .register-main .el-tabs {
  background: #fff!important
}

.register-page .register-main .el-tabs .el-tabs__nav {
  width: 100%;
  background: #fff!important
}

.register-page .register-main .el-tabs .el-tabs__item {
  width: 50%;
  padding: 0;
  text-align: left;
  color: #333
}

.register-page .register-main .el-tabs .el-tabs__item.is-active {
  color: #f34718
}

.register-page .register-main .ui5-bk-input {
  margin: -15px 0 32px;
  min-height: 60px;
  line-height: 60px
}

.register-page .register-main .el-input__inner input {
  width: 400px
}

.register-page .register-main .pwdInputDiv {
  text-align: left
}

.register-page .register-main .pwdInputDiv:hover .el-input__inner {
  border-color: #276dff
}

.register-page .register-main .pwdInputDiv .el-input__suffix {
  top: 48px;
  left: 41px;
  z-index: 1000
}

.register-page .register-main .pwdInputDiv .el-input__suffix .suffix-main {
  align-items: flex-start
}

.register-page .register-main .pwdInputDiv .el-input__suffix .suffix-main .suffix-item {
  display: inline-block;
  min-width: 120px;
  margin-bottom: 10px;
  line-height: 22px
}

.register-page .register-main .pwdInputDiv .el-input__suffix .suffix-main .suffix-item:last-child {
  margin-bottom: 0
}

.register-page .register-main .pwdInputDiv .el-input__suffix .suffix-main .suffix-item .suffix-icon {
  font-size: 14px;
  margin-right: 7px;
  width: 16.8px;
  height: 13.6px;
  position: relative;
  top: 2px
}

.register-page .register-main .pwdInputDiv .el-input__suffix .suffix-main .suffix-item .suffix-icon.cw {
  color: #dd2121
}

.register-page .register-main .pwdInputDiv .el-input__suffix .suffix-main .suffix-item .suffix-icon.zq {
  color: #36b97e
}

.register-page .register-main .pwdInputDiv .el-popover {
  box-shadow: 0 2px 5px 0 rgba(0,0,0,.1);
  border-radius: 4px;
  min-width: 170px
}

.register-page .register-main .pwdInputDiv .el-popover--plain {
  padding: 12px
}

.register-page .register-main .pwdInputDiv .el-input__suffix {
  transition: none
}

.register-page .register-main .pwdInputDiv .el-input__suffix-inner .el-icon-circle-close.el-input__clear {
  font-size: 12px;
  color: #707a8a;
  font-family: iconfont!important;
  position: relative;
  right: -152px;
  top: -52px;
  cursor: pointer
}

.register-page .register-main .pwdInputDiv .el-input__suffix-inner .el-icon-circle-close:before {
  content: "\E684"
}

.register-page .register-main .el-input-group__prepend {
  border: none;
  background: none;
  position: absolute;
  padding: 4px 15px;
  left: 0;
  top: 0;
  width: 60px;
  height: 40px
}

.register-page .register-main .el-input-group__prepend .iconfont {
  color: #333
}

.register-page .register-main .el-input-group__prepend span {
  display: block;
  width: 32px;
  height: 32px
}

.register-page .register-main .code-div .el-input__inner {
  margin-right: 10px
}

.register-page .register-main .code-div .pic-code-wrap {
  float: right;
  width: 135px;
  height: 50px
}

.register-page .register-main .code-div .pic-code-wrap img {
  display: block;
  cursor: pointer;
  width: 100%;
  height: 100%
}

.register-page .register-main .code-div .msg-count-wrap {
  margin-left: 0!important
}

.register-page .register-main .each-input .el-input {
  line-height: 46px
}

.register-page .register-main .each-input .el-input .el-input__inner {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  padding-left: 10px
}

.register-page .register-main .each-input .el-input__inner {
  border-color: #eee
}

.register-page .register-main .each-input .el-input__inner:focus {
  border-color: #276dff
}

.register-page .register-main .each-input .el-input-group__append {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  position: absolute;
  right: 5px;
  top: -6px;
  background-color: transparent;
  border-color: transparent
}

.register-page .register-main .each-input .el-input-group__append .paste {
  width: auto;
  height: auto;
  font-size: 14px;
  font-weight: 400;
  color: #f34718;
  right: 8px;
  position: absolute;
  top: 3px
}

.register-page .register-main .each-input .el-input-group__append .zy-svg {
  width: 16px;
  height: 16px;
  font-size: 16px;
  position: relative;
  top: 2px;
  right: 21px;
  cursor: pointer;
  color: #707a8a
}

.register-page .register-main .each-input .msg-wrap .get-msg-btn {
  width: 135px;
  height: 40px;
  line-height: 40px;
  color: #f34718;
  cursor: pointer
}

.register-page .register-main .each-input .msg-wrap button {
  height: 40px
}

.register-page .register-main .each-input .el-input-group__append input {
  width: 70px;
  padding: 0 0 0 5px
}

.register-page .register-main .each-input .el-input-group__append .countrylist {
  top: 43px!important;
  left: -330px!important;
  border-radius: 0
}

.register-page .register-main .each-input .el-input-group__append .countrylist .popper__arrow {
  left: 345px!important
}

.register-page .register-main .each-input .el-input-group__append .countrylist .el-select-dropdown__item {
  width: 400px;
  text-align: left
}

.register-page .register-main .fistInput {
  position: relative
}

.register-page .register-main .fistInput .icon-deletet1 {
  cursor: pointer
}

.register-page .register-main .fistInput .sel-country {
  width: 85px;
  height: 40px
}

.register-page .register-main .fistInput .sel-country .code-main {
  height: 40px;
  padding: 0 15px;
  border: 1px solid #eee;
  border-radius: 4px;
  font-size: 14px;
  color: #2d2e31;
  font-weight: 500;
  cursor: pointer
}

.register-page .register-main .fistInput .sel-country .code-main .icon-sap {
  width: 25px;
  height: 19px
}

.register-page .register-main .fistInput .sel-country .code-main .icon-down_normal {
  margin-left: 5px;
  color: #707a8a;
  font-size: 10px;
  transform: rotate(0deg) scale(.6);
  transition: all .3s;
  cursor: pointer;
  top: 1px
}

.register-page .register-main .fistInput .sel-country .code-main .icon-down_normal.is-reverse {
  transform: rotate(180deg) scale(.6)
}

.register-page .register-main .fistInput .sel-country .el-select {
  position: absolute;
  left: 0;
  z-index: 100;
  top: -1px
}

.register-page .register-main .fistInput .sel-country .el-select .el-input .el-input__inner {
  width: 86px;
  max-width: 86px;
  height: 41px;
  border: 1px solid #eee;
  font-size: 14px;
  color: #2d2e31;
  font-weight: 500
}

.register-page .register-main .fistInput .usernameDiv {
  position: relative
}

.register-page .register-main .fistInput .usernameDiv .xian {
  position: absolute;
  top: 46px;
  width: 100%;
  height: 1px;
  background: #f5f5f5;
  z-index: 99999
}

.register-page .register-main .fistInput .usernameDiv .userNameInput .el-input__inner:focus,.register-page .register-main .fistInput .usernameDiv .userNameInput:hover .el-input__inner {
  border-color: #276dff
}

.register-page .register-main .fistInput .usernameDiv .userNameInput.userNameInput_w {
  width: 244px
}

.register-page .register-main .fistInput .usernameDiv .userNameInput .el-input-group__append {
  position: absolute;
  right: 5px;
  top: -6px;
  background-color: transparent
}

.register-page .register-main .fistInput .usernameDiv .userNameInput input {
  border-radius: 4px;
  border: 1px solid #eee;
  padding: 0 10px;
  font-family: DIN-Medium
}

.register-page .register-main .fistInput .usernameDiv .userNameInput .icon-deletet1 {
  font-size: 15px;
  color: #919191
}

.register-page .register-main .fistInput .usernameDiv .userNameInput .el-input {
  border: none
}

.register-page .register-main .fistInput .usernameDiv .userNameInput .el-input__suffix {
  transition: none
}

.register-page .register-main .fistInput .usernameDiv .userNameInput .el-input__suffix-inner .el-icon-circle-close.el-input__clear {
  font-size: 12px;
  color: #707a8a;
  font-family: iconfont!important;
  position: relative;
  right: -40px;
  top: -4px
}

.register-page .register-main .fistInput .usernameDiv .userNameInput .el-input__suffix-inner .el-icon-circle-close:before {
  content: "\E684"
}

.register-page .register-main .agreement-wrap {
  margin-bottom: 33px;
  text-align: left;
  font-size: 14px;
  font-weight: 500;
  color: #333
}

.register-page .register-main .agreement-wrap .agr-ib {
  display: inline-block
}

.register-page .register-main .agreement-wrap .agr-ib .el-checkbox__inner {
  border-radius: 2px;
  border: 1px solid #adb0b9;
  position: relative;
  top: -.5px
}

.register-page .register-main .agreement-wrap .agr-ib .el-checkbox.is-checked .el-checkbox__inner {
  border: 1px solid transparent
}

.register-page .register-main .agreement-wrap .el-checkbox {
  font-size: 14px;
  color: #f34718
}

.register-page .register-main .agreement-wrap .el-checkbox__label {
  font-size: 14px
}

.register-page .register-main .agreement-wrap a {
  font-size: 14px;
  color: #f34718;
  text-decoration: none
}

.register-page .register-main .btns {
  margin: 40px auto;
  height: 40px;
  text-align: center;
  background: #276dff;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer
}

.register-page .register-main .btns .el-button:hover {
  color: #fff!important
}

.register-page .register-main .btns .el-button {
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background: transparent;
  border: 0
}

.register-page .register-main .goto-login {
  font-size: 14px;
  font-weight: 500;
  color: #333;
  text-align: center
}

.register-page .register-main .goto-login .rt-btn {
  cursor: pointer;
  color: #f34718
}

.register-page .register-main .goto-login a {
  color: #f34718;
  text-decoration: none
}

.register-page .ui5-eveyInputBox {
  position: relative
}

.register-page .ui5-eveyInputBox .each-input.code-sm,.register-page .ui5-eveyInputBox .each-input.pwd-mks,.register-page .ui5-eveyInputBox .userMain {
  margin-bottom: 30px
}

.register-page .ui5-eveyInputBox .el-select .el-input .el-select__caret {
  line-height: 40px;
  height: 40px
}

.register-page .ui5-eveyInputBox .countrylist {
  top: 42px!important;
  border-radius: 4px;
  top: 10px;
  border-color: transparent;
  box-shadow: 0 1px 10px 0 rgba(0,0,0,.05)
}

.register-page .ui5-eveyInputBox .countrylist .popper__arrow {
  display: none;
  left: 40px!important
}

.register-page .ui5-eveyInputBox .countrylist .el-select-dropdown__item {
  width: 324px;
  text-align: left
}

.register-page .ui5-eveyInputBox .countrylist .el-select-dropdown__item.hover {
  background-color: rgba(243,71,24,.1)
}

.register-page .ui5-eveyInputBox .countrylist.el-select-dropdown li:active,.register-page .ui5-eveyInputBox .countrylist.el-select-dropdown li:focus,.register-page .ui5-eveyInputBox .countrylist.el-select-dropdown li:hover {
  background-color: rgba(243,71,24,.1);
  color: #f34718
}

.tab-main .login-tabMain {
  width: 100%;
  background: #f3f3f4;
  border-radius: 4px;
  padding: 2px;
  margin-bottom: 29px
}

.tab-main .login-tabItem {
  width: 50%;
  flex: 1;
  font-size: 16px;
  font-weight: 500;
  color: #919191;
  padding: 5px 0;
  cursor: pointer
}

.tab-main .login-tabItem.sed {
  color: #333;
  background-color: #fff;
  border-radius: 4px
}

.usernameDiv {
  position: relative;
  margin-left: 0;
  border-radius: 4px;
  flex: 1
}

.usernameDiv .userNameInput .el-input__inner {
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 0 10px
}

.usernameDiv .userNameInput .el-input__inner:focus,.usernameDiv .userNameInput:hover .el-input__inner {
  border-color: #276dff
}

.usernameDiv .userNameInput .el-input-group__append {
  position: absolute;
  right: 0;
  top: 7px
}

.usernameDiv .xian {
  position: absolute;
  top: 39px;
  width: 100%;
  height: 1px;
  background: #f5f5f5;
  z-index: 99999
}

.login-titleItem {
  width: 100%;
  position: relative;
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
  cursor: pointer
}

.login-titleItem.noMore {
  margin-bottom: 30px
}

.login-titleItem .userNameLocalStorage {
  position: absolute;
  transition: all .3s;
  width: 100%;
  padding: 0;
  top: 75px;
  z-index: 100;
  left: 0;
  height: 0;
  background: #fff;
  box-shadow: 0 1px 10px 0 rgba(0,0,0,.05);
  border-radius: 4px;
  overflow-y: auto
}

.login-titleItem .userNameLocalStorage.show {
  height: 150px;
  padding: 15px 0
}

.login-titleItem .userNameLocalStorage::-webkit-scrollbar {
  width: 6px;
  height: 20px;
  background: transparent;
  overflow: visible
}

.login-titleItem .userNameLocalStorage::-webkit-scrollbar-thumb {
  background: #dfe0ea;
  overflow: visible;
  border-radius: 100px
}

.login-titleItem .userNameLocalStorage-item {
  width: 100%;
  padding: 0 10px;
  margin-bottom: 30px;
  cursor: pointer
}

.login-titleItem .userNameLocalStorage-item:last-child {
  margin-bottom: 0
}

.login-titleItem .userNameLocalStorage-item:hover .user,.login-titleItem .userNameLocalStorage-item:hover i {
  color: #f34718
}

.login-titleItem .userNameLocalStorage-item .user {
  font-size: 14px;
  font-weight: 500;
  color: #2d2e31;
  font-family: DIN-Medium
}

.login-titleItem .userNameLocalStorage-item i {
  font-size: 16px;
  color: #707a8a
}

.login-titleItem.jtm-input {
  margin-top: 30px;
  margin-bottom: 10px
}

.login-titleItem.jtm-input.zd-input {
  margin-bottom: 30px
}

.verificationCode {
  display: flex;
  justify-content: flex-start;
  background-color: #fff;
  min-height: 800px;
  height: 100%;
  min-width: 1280px
}

.verificationCode .vericode-content {
  height: 100%;
  width: 100%
}

.verificationCode-bg {
  width: 400px;
  height: 400px
}

.verificationCode-bg img {
  width: 100%
}

.verificationCode-content {
  margin-right: 140px
}

.verificationCode-content .ver-title {
  font-size: 26px;
  font-weight: 600;
  text-align: left;
  color: #333;
  margin-bottom: 13px
}

.verificationCode-content .ver--tips {
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 30px
}

.verificationCode-content .ver--tips span {
  width: 100%;
  text-align: left
}

.verificationCode-content .ver-code {
  font-size: 14px;
  font-weight: 600;
  color: #2d2e31;
  margin-bottom: 10px
}

.verificationCode-content .input-content {
  width: 100%;
  margin-bottom: 30px
}

.verificationCode-content .input-content .code-text {
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

.verificationCode-content .input-content .code-text:focus,.verificationCode-content .input-content .code-text:focus-visible,.verificationCode-content .input-content .code-text:hover {
  outline: none;
  border: 1px solid #f34718
}

.verificationCode-content .input-content .code-text:last-child {
  margin-right: 0
}

.verificationCode-content .codeTips {
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer
}

.verificationCode-content .codeTips.valCode {
  color: #f34718
}

.verificationCode-content .codeTips.getCode {
  color: #919191
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

</style>

