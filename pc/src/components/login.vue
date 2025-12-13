<template>
  <div class="login-page">
    <indexHeader></indexHeader>
    <div class="f f-fs login-content">
      <div class="login-main">
        <div class="login-title">{{$t("login.welcome")+siteName}}</div>
        <div class="tab-main">
          <!-- <div class="login-tabMain f-ac f-sb">
            <div class="login-tabItem f-ac f-c" :class="active == 0 ? 'sed' :''" @click="active=0"> {{$t("login.login_tabItem_0")}} </div>
            <div class="login-tabItem f-ac f-c" v-if="mobile_register==1" :class="active == 1 ? 'sed' :''" @click="active=1"> {{$t("login.login_tabItem_1")}} </div>
          </div> -->
        </div>
        <div class="input-wrap">
          <div class="login-titleItem f-ac f-fs">
            <span v-if="active == 0">{{$t("login.active_0")}}/{{$t("login.active_1")}}</span>
            <!-- <span v-if="active == 1">{{$t("login.active_1")}}</span> -->
          </div>
          <form class="el-form">
            <div class="ui5-eveyInputBox">
              <div class="f-ac f-sb userMain">
                <!-- <div class="each-input sel-country" v-if="active == 1" @click="showFlag = true">
                  <div class="f-ac code-main">
                    <img :src="defaultImage" width="24">
                    {{ defaultNum }}
                    <span class="icon-sap f-ac f-c"></span>
                  </div>
                </div> -->
                <div class="each-input usernameDiv">
                  <div class="el-form-item is-required">
                    <div class="el-form-item__content">
                      <el-input class="userNameInput userNameInput_m" v-model="account_number" :placeholder='$t("login.mail_placeholder") + "/" + $t("login.phone_placeholder")' name="username"></el-input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="ui5-eveyInputBox">
              <div class="login-titleItem f-ac f-fs">{{$t("login.password")}}</div>
              <div class="each-input">
                <div class="el-form-item is-required">
                  <div class="el-form-item__content">
                    <el-input class="passwordInput" type="password" name="password" v-model="password" maxlength="20" :placeholder='$t("login.password_placeholder")'></el-input>
                  </div>
                </div>
              </div>
            </div>
            <div class="more">
              <span class="lk">
                <a href="#/forgetPwd" class=""> {{$t("login.forget")}} ？ </a>
              </span>
            </div>
            <div class="btns">
              <button type="button" class="el-button bk-btn el-button--default" @click="login">
                <span>{{$t("login.login_btn")}}</span>
              </button>
            </div>
            <div class="more">
              <span class="lk2">
                <span class="lkHui">{{$t("login.no_account_number")}}？ </span>
                <a href="#/components/register" class="">{{$t("login.no_account_number")}}</a>
              </span>
            </div>
          </form>
        </div>
      </div>
      <div class="register-bg">
        <div class="code-content">
          <div class="scan-content">
            <div class="img-content">
              <div class="info">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import indexHeader from '@/view/indexHeader'
import indexFooter from '@/view/indexFooter'

export default {
  name: "login",
  components: {indexHeader, indexFooter},
  data() {
    return {
      account_number: "",
      password: "",
      siteName: "",
      active: 0,
      showFlag: !1,
      deviceIdListBack: [],
      defaultImage: "",
      defaultNum: "",
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
      mobile_register: ""
    }
  },
  created() {
    this.defaultImage = this.deviceIdList[0].countryImage,
    this.defaultNum = this.deviceIdList[0].countryNumber,
    this.area_code = this.deviceIdList[0].countryNumber,
    this.account_number = this.$route.query.account_number || ""
  },
  mounted() {
    this.getSiteLogo(),
    this.getConfigByKey()
  },
  methods: {
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
    getSiteLogo() {
        this.$http({
            url: "/api/getSiteConfig?lang=" + window.localStorage.getItem("lang"),
            method: "get",
            data: {}
        }).then(t=>{
            this.siteName = t.data.message.site_name
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
        }
        ).catch(t=>{
            console.log(t)
        }
        )
    },
    userInfo() {
        this.$http({
            url: "/api/user/info?lang=" + window.localStorage.getItem("lang"),
            method: "get",
            data: {},
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then(t=>{
            "ok" == t.data.type && (localStorage.setItem("user_id", t.data.message.id),
            localStorage.setItem("email", t.data.message.email),
            localStorage.setItem("extension_code", t.data.message.extension_code),
            localStorage.setItem("is_seller", t.data.message.is_seller),
            eventBus.$emit("seller", t.data.message.is_seller))
        }
        ).catch(t=>{}
        )
    },
    login() {
        let t = this.$utils.trim(this.account_number)
          , e = this.$utils.trim(this.password);
        if ("" != this.account_number.length)
            if (this.password.length < 6)
                layer.tips(this.$t("lay.pwdliu"), "#pwd");
            else {
                var a = layer.load();
                this.$http({
                    url: "/api/user/login",
                    method: "post",
                    data: {
                        user_string: t,
                        password: e,
                        type: 1,
                        lang: window.localStorage.getItem("lang")
                    }
                }).then(e=>{
                    layer.close(a),
                    e = e.data,
                    "ok" === e.type ? (localStorage.setItem("token", e.message),
                    localStorage.setItem("accountNum", t),
                    this.$store.commit("setAccountNum"),
                    this.userInfo(),
                    this.$router.push("/")) : layer.msg(e.message)
                }
                ).catch(t=>{
                    console.log(t)
                }
                )
            }
        else
            layer.tips(this.$t("lay.paccount"), "#account")
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

.login-page {
  background-color: #fff;
  height: 100%;
  min-width: 1280px;
  min-height: 800px;
  overflow: auto
}

.login-page .login-content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -32px
}

.login-page .login-main {
  margin-right: 140px
}

.login-page .register-bg {
  width: 300px
}

.login-page .register-bg .code-content {
  height: 300px;
  background: url(../assets/images/login_img.png) no-repeat;
  background-position: 50%;
  background-size: 100% auto
}

.login-page .register-bg .tip-content {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center
}

.login-page .register-bg .tip-content .iconfont {
  font-size: 16px;
  color: #f34718
}

.login-page .register-bg .tip-content .tip {
  line-height: 20px;
  color: #1e2329;
  font-weight: 500;
  padding-left: 8px
}

.login-page .login-main,.login-page .security-setting {
  width: 340px;
  z-index: 1000;
  margin-right: 140px;
  background-color: #fff
}

.login-page .login-main .login-title,.login-page .security-setting .login-title {
  text-align: left;
  margin-bottom: 35px;
  font-size: 26px;
  font-weight: 600;
  color: #333;
  line-height: 37px
}

.login-page .login-main .login-title.noMore,.login-page .security-setting .login-title.noMore {
  margin-bottom: 13px
}

.login-page .login-main .el-form,.login-page .security-setting .el-form {
  position: relative
}

.login-page .login-main .el-form .sel-country,.login-page .security-setting .el-form .sel-country {
  width: 85px
}

.login-page .login-main .el-form .sel-country .code-main,.login-page .security-setting .el-form .sel-country .code-main {
  height: 40px;
  padding: 0 15px;
  border: 1px solid #eee;
  border-radius: 4px;
  font-size: 14px;
  color: #2d2e31;
  font-weight: 500;
  cursor: pointer
}

.login-page .login-main .el-form .sel-country .code-main .icon-sap,.login-page .security-setting .el-form .sel-country .code-main .icon-sap {
  width: 25px;
  height: 19px
}

.login-page .login-main .el-form .sel-country .code-main .icon-sap .icon-down_normal,.login-page .security-setting .el-form .sel-country .code-main .icon-sap .icon-down_normal {
  margin-left: 5px;
  color: #707a8a;
  font-size: 10px;
  transform: rotate(0deg) scale(.6);
  transition: all .3s;
  cursor: pointer;
  top: 1px
}

.login-page .login-main .el-form .sel-country .code-main .icon-sap .icon-down_normal.is-reverse,.login-page .security-setting .el-form .sel-country .code-main .icon-sap .icon-down_normal.is-reverse {
  transform: rotate(180deg) scale(.6)
}

.login-page .login-main .el-form .sel-country .code-main .el-icon-arrow-up,.login-page .security-setting .el-form .sel-country .code-main .el-icon-arrow-up {
  margin-left: 3px;
  color: #c0c4cc;
  font-size: 14px;
  transition: transform .3s;
  transform: rotate(180deg);
  cursor: pointer
}

.login-page .login-main .el-form .sel-country .code-main .el-icon-arrow-up.is-reverse,.login-page .security-setting .el-form .sel-country .code-main .el-icon-arrow-up.is-reverse {
  transform: rotate(0)
}

.login-page .login-main .el-form .sel-country .el-select,.login-page .security-setting .el-form .sel-country .el-select {
  position: absolute;
  left: 0;
  z-index: 999;
  top: -1px
}

.login-page .login-main .el-form .sel-country .el-select input,.login-page .security-setting .el-form .sel-country .el-select input {
  width: 86px;
  max-width: 86px;
  height: 41px;
  border: 1px solid #eee
}

.login-page .login-main .el-form .sel-country .el-select .countrylist,.login-page .security-setting .el-form .sel-country .el-select .countrylist {
  top: 36px!important;
  border-radius: 4px;
  border-color: transparent;
  box-shadow: 0 1px 10px 0 rgba(0,0,0,.05)
}

.login-page .login-main .el-form .sel-country .el-select .countrylist .popper__arrow,.login-page .security-setting .el-form .sel-country .el-select .countrylist .popper__arrow {
  display: none;
  left: 40px!important
}

.login-page .login-main .el-form .sel-country .el-select .countrylist .el-select-dropdown__item,.login-page .security-setting .el-form .sel-country .el-select .countrylist .el-select-dropdown__item {
  width: 324px;
  text-align: left
}

.login-page .login-main .el-form .sel-country .el-select .countrylist .el-select-dropdown__item.hover,.login-page .security-setting .el-form .sel-country .el-select .countrylist .el-select-dropdown__item.hover {
  background-color: rgba(243,71,24,.1)
}

.login-page .login-main .el-form .sel-country .el-select .countrylist.el-select-dropdown li:active,.login-page .login-main .el-form .sel-country .el-select .countrylist.el-select-dropdown li:focus,.login-page .login-main .el-form .sel-country .el-select .countrylist.el-select-dropdown li:hover,.login-page .security-setting .el-form .sel-country .el-select .countrylist.el-select-dropdown li:active,.login-page .security-setting .el-form .sel-country .el-select .countrylist.el-select-dropdown li:focus,.login-page .security-setting .el-form .sel-country .el-select .countrylist.el-select-dropdown li:hover {
  background-color: rgba(243,71,24,.1);
  color: #f34718
}

.login-page .login-main .msgcode-wrap input,.login-page .security-setting .msgcode-wrap input {
  width: 247px
}

.login-page .login-main .el-form-item,.login-page .security-setting .el-form-item {
  margin: 0 auto
}

.login-page .login-main .el-form-item.is-error .el-input__inner,.login-page .security-setting .el-form-item.is-error .el-input__inner {
  border-color: #f34718
}

.login-page .login-main .el-form-item .el-form-item__error,.login-page .security-setting .el-form-item .el-form-item__error {
  color: #f34718
}

.login-page .login-main .el-form-item .el-input,.login-page .security-setting .el-form-item .el-input {
  position: relative;
  width: 340px
}

.login-page .login-main .el-form-item .el-input.inputType .el-input-group__append,.login-page .security-setting .el-form-item .el-input.inputType .el-input-group__append {
  right: 0
}

.login-page .login-main .el-form-item .el-input.inputType .el-input-group__append .el-input__suffix-inner .el-icon-circle-close.el-input__clear,.login-page .security-setting .el-form-item .el-input.inputType .el-input-group__append .el-input__suffix-inner .el-icon-circle-close.el-input__clear {
  font-size: 12px;
  color: #707a8a;
  font-family: iconfont!important;
  position: relative;
  right: 0;
  top: 0;
  z-index: 10
}

.login-page .login-main .el-form-item .el-input.inputType .el-input-group__append .el-input__suffix-inner .el-icon-circle-close:before,.login-page .security-setting .el-form-item .el-input.inputType .el-input-group__append .el-input__suffix-inner .el-icon-circle-close:before {
  content: "\E684"
}

.login-page .login-main .el-form-item .el-input-group__append,.login-page .security-setting .el-form-item .el-input-group__append {
  position: absolute;
  right: 30px;
  top: 7px
}

.login-page .login-main .el-form-item .el-input-group__append input,.login-page .security-setting .el-form-item .el-input-group__append input {
  width: 70px;
  padding: 0 0 0 5px
}

.login-page .login-main .el-form-item .el-input-group__append .countrylist,.login-page .security-setting .el-form-item .el-input-group__append .countrylist {
  top: 43px!important;
  left: -329px!important;
  border-radius: 0
}

.login-page .login-main .el-form-item .el-input-group__append .countrylist .popper__arrow,.login-page .security-setting .el-form-item .el-input-group__append .countrylist .popper__arrow {
  left: 375px!important
}

.login-page .login-main .el-form-item .el-input-group__append .countrylist .el-select-dropdown__item,.login-page .security-setting .el-form-item .el-input-group__append .countrylist .el-select-dropdown__item {
  width: 400px;
  text-align: left
}

.login-page .login-main .el-input-group__append,.login-page .security-setting .el-input-group__append {
  cursor: pointer;
  border: none;
  background: none;
  position: absolute;
  padding: 1px;
  right: -10px;
  top: 8px;
  height: 40px;
  text-align: right
}

.login-page .login-main .el-input-group__append .zy-svg,.login-page .security-setting .el-input-group__append .zy-svg {
  width: 16px;
  height: 16px;
  color: #707a8a
}

.login-page .login-main .el-input-group__append span,.login-page .security-setting .el-input-group__append span {
  display: block;
  width: 32px;
  height: 32px
}

.login-page .login-main .el-input-group__append .iconfont,.login-page .security-setting .el-input-group__append .iconfont {
  font-size: 16px;
  color: #707a8a
}

.login-page .login-main .el-input-group__append .iconfont.icon-down_normal,.login-page .security-setting .el-input-group__append .iconfont.icon-down_normal {
  font-size: 10px;
  transform: rotate(0deg) scale(.6);
  transition: all .3s;
  cursor: pointer;
  display: inline-block;
  color: #707a8a
}

.login-page .login-main .el-input-group__append .iconfont.icon-down_normal.is-reverse,.login-page .security-setting .el-input-group__append .iconfont.icon-down_normal.is-reverse {
  display: inline-block;
  transform: rotate(180deg) scale(.6)
}

.login-page .login-main .el-input-group__append .iconfont.yj-icon,.login-page .security-setting .el-input-group__append .iconfont.yj-icon {
  font-size: 25px;
  top: -2px;
  position: relative
}

.login-page .login-main .el-input-group__append .iconfont.pasdIcon,.login-page .security-setting .el-input-group__append .iconfont.pasdIcon {
  top: -5px;
  position: relative
}

.login-page .login-main input,.login-page .security-setting input {
  border: 1px solid #b7bdc6
}

.login-page .login-main .more,.login-page .security-setting .more {
  margin: 30px auto;
  text-align: center;
  display: flex
}

.login-page .login-main .more .lk,.login-page .security-setting .more .lk {
  font-size: 14px;
  font-weight: 500;
  color: #f34718;
  line-height: 20px;
  cursor: pointer;
  text-align: left
}

.login-page .login-main .more .lkHui,.login-page .security-setting .more .lkHui {
  color: #333;
  font-size: 14px;
  text-align: right;
  cursor: default
}

.login-page .login-main .more .lk2,.login-page .security-setting .more .lk2 {
  color: #f34718;
  width: 246px;
  cursor: pointer;
  text-align: right;
  font-size: 14px;
  display: inline-block
}

.login-page .login-main .security-input,.login-page .security-setting .security-input {
  margin-bottom: 30px;
  width: 100%
}

.login-page .login-main .security-input .code-tips,.login-page .security-setting .security-input .code-tips {
  font-size: 14px;
  font-weight: 600;
  color: #2d2e31;
  margin-bottom: 10px;
  width: 100%
}

.login-page .a-pic-wrap {
  border: 1px solid #fff;
  margin: 29px auto;
  overflow: hidden;
  position: relative
}

.login-page .a-pic-wrap,.login-page .a-pic {
  width: 100px;
  height: 100px
}

.login-page .btns {
  height: 40px;
  text-align: center;
  background: #276dff;
  border-radius: 4px;
  overflow: hidden
}

.login-page .btns button,.login-page .login-main .btns button {
  width: 100%;
  padding: 9px 0;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  line-height: 22px;
  background: transparent;
  border: 0
}

.login-page .each-input .userNameInput {
  border: none;
  float: left;
  margin-left: 0
}

.login-page .each-input .userNameInput.userNameInput_w {
  width: 244px
}

.login-page .each-input .userNameInput.userNameInput_w .el-input__suffix-inner .el-icon-circle-close.el-input__clear {
  right: 0
}

.login-page .each-input .userNameInput.userNameInput_w.show-append .el-input__suffix-inner .el-icon-circle-close.el-input__clear {
  right: 16px
}

.login-page .each-input .userNameInput.userNameInput_m .el-input__suffix-inner .el-icon-circle-close.el-input__clear {
  right: 0
}

.login-page .each-input .userNameInput.userNameInput_m.show-append .el-input__suffix-inner .el-icon-circle-close.el-input__clear {
  right: 16px
}

.login-page .each-input .get-msg-btn {
  width: 135px;
  height: 50px;
  line-height: 50px
}

.login-page .each-input .msg-wrap .el-button {
  height: 50px
}

.login-page .each-input .pasdIcon {
  padding-right: 5px
}

.login-page .code-div .el-input__inner,.login-page .code-div .el-input__inner:focus {
  width: 246px;
  margin-right: 10px
}

.login-page .code-div .pic-code-wrap {
  float: right;
  width: 135px;
  height: 50px
}

.login-page .code-div .pic-code-wrap img {
  display: block;
  cursor: pointer;
  width: 100%;
  height: 100%
}

.login-page .btns button:hover {
  color: #fff!important
}

.login-page .btns .eachbtn {
  display: inline-block;
  margin-right: 15px
}

.login-page .getpsw-wrap {
  text-align: left;
  float: left
}

.login-page .gotoreg-wrap a {
  float: right;
  color: #67c23a
}

.login-page .gv-wrap .el-dialog {
  width: 550px
}

.login-page .usernameDiv {
  position: relative;
  margin-left: 0;
  border-radius: 4px;
  flex: 1
}

.login-page .usernameDiv .userNameInput .el-input__inner {
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 0 10px;
  font-family: DIN-Medium
}

.login-page .usernameDiv .userNameInput .el-input__inner:focus {
  border-color: #f34718
}

.login-page .usernameDiv .userNameInput:hover .el-input__inner {
  border: 1px solid #f34718
}

.login-page .usernameDiv .userNameInput .el-input-group__append {
  position: absolute;
  right: 26px;
  top: 10px;
  z-index: 0;
  padding-left: 5px
}

.login-page .usernameDiv .userNameInput .el-input__suffix {
  transition: none
}

.login-page .usernameDiv .userNameInput .el-input__suffix-inner .el-icon-circle-close.el-input__clear {
  font-size: 12px;
  color: #707a8a;
  font-family: iconfont!important;
  position: relative;
  right: 0;
  top: 0;
  z-index: 10
}

.login-page .usernameDiv .userNameInput .el-input__suffix-inner .el-icon-circle-close:before {
  content: "\E684"
}

.login-page .usernameDiv .xian {
  position: absolute;
  top: 39px;
  width: 100%;
  height: 1px;
  background: #f5f5f5;
  z-index: 99999
}

.login-page .ui5-eveyInputBox {
  position: relative
}

.login-page .ui5-eveyInputBox .userMain {
  margin-bottom: 30px
}

.login-page .ui5-eveyInputBox .passwordInput .el-input-group__append {
  padding-left: 5px;
  top: 10px
}

.login-page .ui5-eveyInputBox .passwordInput .el-input__inner {
  border-radius: 4px;
  border: 1px solid #eee;
  overflow: hidden;
  padding: 0 10px
}

.login-page .ui5-eveyInputBox .passwordInput:hover .el-input__inner {
  border: 1px solid #f34718
}

.login-page .ui5-eveyInputBox .passwordInput .el-input__suffix {
  transition: none
}

.login-page .ui5-eveyInputBox .passwordInput .el-input__suffix-inner .el-icon-circle-close.el-input__clear {
  font-size: 12px;
  color: #707a8a;
  font-family: iconfont!important;
  position: relative;
  right: 20px;
  top: 0;
  z-index: 10
}

.login-page .ui5-eveyInputBox .passwordInput .el-input__suffix-inner .el-icon-circle-close:before {
  content: "\E684"
}

.login-page .ui5-eveyInputBox .bottomXian {
  width: 100%;
  position: absolute;
  height: 1px;
  background: #f5f5f5;
  left: 0;
  top: 40px;
  z-index: 99
}

.login-page .ui5-eveyInputBox .focusXian {
  width: 100%;
  position: absolute;
  height: 1px;
  background: #f34718;
  left: 0;
  top: 40px;
  z-index: 99
}

.login-page .ui5-eveyInputBox .focusXian:hover {
  background: #f44f22
}

.login-page .ui5-eveyInputBox .countrylist .el-select-dropdown__empty {
  word-break: keep-all;
  white-space: nowrap;
  padding: 12px 18px
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

.usernameDiv .userNameInput .el-input__inner:focus {
  border-color: #f34718
}

.usernameDiv .userNameInput:hover .el-input__inner {
  border: 1px solid #f34718
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
.f-c {
  justify-content: center;
}
</style>

