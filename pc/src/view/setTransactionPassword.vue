<template>
    <div style="background: #F7F7FA;">
      <indexHeader></indexHeader>
      <div class="setTransactionPassword bg-main">
        <div class="goback-box color-third" @click="back">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAA+klEQVQoU4WRQUrEUAyGE7tob+DCUfQo7ryCLsR2oKG+lV5EN0N5jQy4GDo3GLzGHEDBhbhwYTcjYkjkgVOq9OFbvnxfEv4gRB4z76rqGgBWRHSxxXCM/4FfAGBHVU+qqnqICm3b7ndd94yIXyJy4Jx7HTb9NaGu68MkSZ5U9RMRJ0T09neDXmDmI1V9NLNNmqZ7eZ6/j63bC977D0Rcm9kxEW1iYQwFA4BbIrqKweG/F5qmuTSzmYjMnXPTfycEIEgiMsuy7L4oij77aEqhwMxTM7szsyURnUZTGhaYOVfVebgyAJwP4x29dJC992cAsEDEm7Isr7cNvwGw3W4Nq9QSkwAAAABJRU5ErkJggg==">
            <span>{{$t("earn.go_back")}}</span>
        </div>
        <div class="from-box">
            <h1 class="from-box__title">{{$t("other.setPayPassword")}}</h1>
            <!-- <div class="tab flex around">
                <span class="now border-primary">{{$t("register.tip_mail")}}</span>
            </div> -->
            <div class="register-box">
                <div class="flex input_sty alcenter"><div>
                    <img width="16px" height="18px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAABDUlEQVQ4T83Tr0oFQRQG8O8Lu1nEarL4DDaDPoBFTLJnFqZfBA3XpCCCaJ4wZ7HdZtdg8xVMJquIeZfdIyus6EXvumxx6sz5nT8zQ4xcHBkPxhiPSU4BpAOw0sxOnXMnVNUSwJqIPP8VUNVVAE8ikraAicjgVrq4D8DM1knOzGzinLv/rZIY4ybJS5J7ZvbYJv6sQFV3zeyK5G1VVQfe+5cOCiGsJElyQXK7rutJnuezbxV0LRRFsdQ0zRnJHTM7FJFrVd0neQ7ghuRRlmVvLfwj0GVU1Q0AAcAygFcAXkQevra2EGgPhhCSNE23yrK8895X83PpBfqu9H8B417i6L/QN6y+/cF/YB4cDbwD2EurEyH3W1AAAAAASUVORK5CYII=" alt="" style="display: flex;">
                </div>
                <input v-model="user_string" type="text" readonly="readonly" :placeholder='$t("register.login_title_item_active_1")' id="account" autocomplete="off" class="phone flex1 codeinput">
            </div>
            <div class="flex input_sty alcenter plr20 mt30">
                <img width="16px" height="18px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAB0klEQVQ4T72TPYgTURDH//N2N6QQRFKIH3hoY3Og11hIOj+K6wRL2dXZ3UAQ7LTwCxS1EKuDEJLN7ppYi52CH5WHhY0HVjaeIiIWHljYhN0Z2cOEZDlxtfB1772Z38z8Z4ZQOsPhsJHn+TUApwHsBvAZwEMRuRkEwUbZnmYfoijaa1nWSwDbAcQA3gE4CMAH8N2yrKbneQVweuYAaZo+EZFFVW0GQfBxYjUYDBaIaJWI3jLz8paAXq+3z3GcD6rKvu/fL6cax/FZIkoALDDzp8n/NIM0TU+o6lPbtg+4rrteBoxGo/1Zlr3P8/xkGIbPpoAoinaq6i5jzFFjTEdEjovItzLAGNMwxjwXkfMi8oqIvoRh+JWSJCmU3VF2qHDfYOZGAVAAl4noUQWnTRNVPQXgDjPTJkBVz80K1+l0ttXr9QdEdExVXziOc8Z13R+TAL8ETX8LiOP4IhHdAHAbwBUA15n5XmVAkiRXAVxS1QtEtALgLjPfqgwoxllEHqvqEVV9bdv2sud50878sYQiUr/fP2zb9pssy5ZardbarMD/B9DtdvfUarXheDz22u323AJtlUGxeatV5wBAk4j8SRuL+g79hfPEdI2Zl+bW+R8g+AmjQQwiIXktsgAAAABJRU5ErkJggg==" alt=""> 
                <input v-model="password" :placeholder='$t("register.password")' maxlength="16" id="pwd" autocomplete="off" type="password" class="plr20 emil"> 
                <img width="20px" height="14px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAACmUlEQVQ4T22TTUhUURTHz/8+GyVsM7YxcBlD+d69U1CLgfCDPswMIpIWUVkUFOSiKKhFoUQLobCEhCDKIgKlNoGJUGQIhjKU994ZjWjdB1RuBlqo98QdHHk+urv7P+f8DucL9J+Xz+fX19TUHHHOHSCiLBHVA2Bm/kZE00R0UUq5oLXeDmBMCNEShuGcRyHOGxkZCTKZzAUA14moLpkLgHPOdSulBq21OWYeBXAviqKeiu8qcH5+vm5xcfElETXFQItE9ALAJDMLIcSPMAxfFovF1uXl5VdEdFNK2RdPXAZOTU2la2trJ4loa8z4k5nblVIf4wGzs7MdQohhZr6mlBqw1m5xzt1Ip9OnGxoa/nogtNZjAPbFApmIWqSU7+MwY0wngKcrZT8sFAo7mPk1M28koiEp5SkPOwHgSaJfH6SUubimtT4J4IFz7kw2m31mrW1mZl/2hhU/P7QmWGu/MPPmBLBfSnmpommtzwsh+gEc8z30ujHmDhGt+pQnDIx74Dtmbk4A+6SUV72mtb4CoBdAZxRFoxU/a+0AM3cn4j77klsBvI0ZSgAORlE0obXuAXCZiA5JKd8kWjANYOeaCQPHy1M2xjwmoi4i+i2EaA/DcEZrfVsIcdY516GU8huw+owxfrUm4hozjyul9peB/jJSqdSQc65XKTVnjBkEcNQ515bNZmcSa7MtCIJRZq6P6XOlUmlXLpf7s+ZSmDkoFAqPmLlNCLE3DENtjDnk10IIwc65Jp+IiFIx2GR1dfXhTCbzqzyYiiGfz69LpVLPmTkXBMEef5vW2nNEdN9fSaL5/rvgnLullLoLYLliXwUaY7qYuaeqqmp3Y2Pj12KxmF5aWvKl+8ZvWgn4TkSf/A0HQTAchmEpmegfhA4tIjvEnI8AAAAASUVORK5CYII=" alt="" class="pointer">
            </div>
            <div class="flex input_sty alcenter plr20 mt30">
                <img width="16px" height="18px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAB2UlEQVQ4T52TP2gUQRTGvzc7V4snBBQ0apFGQUtBES0UIZVgfZt5c8dyWClBMIKggpVoY7O3e7Pe2YmYKiAGORALSwMih4V/QUFQsb0/+2SDG841f5a8bma+78ebb+YRCtXpdHaNx+PrAC4A2APgK4DHnufd9H3/R1FPkxvOub0AXgDYASASkXdENAOgAeA3gJPM/GXSUwQ8FZFDWuvjvu9/zoVhGO6rVCovAbxl5nPrAv6KPgIwzNwpthrHsa+USobD4f4gCNbgax0kSXJGRJ5prQ/WarUPRUAURQc8z3tPRGeNMcv5OYVhuFspNa2UOkZE94hodjQa/SwCtNZVEVkSkUtpmr5K0/RTEATfyDmXiXcWDSXWv5i5mgEEwAIRLZYwrUpE5DyA28xMqwARMdbaB5sBut3u1GAwmKrX62/a7fYcESWlAXEcZxk9B/CImRc2BPR6Pd3v96vNZvN73k2r1ZrRWmepLxljLhKRbAiIouiU53lPROS0tXYljuPDSqllEXlorb2SQze9gnPuKoDLAOYB3BGR+9baG5P5bJmBc+4agFtENG+MuVsMd0tAZsh+XqPR+O9HZmfrAdoAsmEpWyeIyObP+BrAkbLOCd0KMx/9Z5y3AcEfPr7/Ezzbd/IAAAAASUVORK5CYII=" alt=""> 
                <input v-model="re_password" :placeholder='$t("register.password")' maxlength="16" id="repwd" autocomplete="off" type="password" class="plr20 emil"> 
                <img width="20px" height="14px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAACmUlEQVQ4T22TTUhUURTHz/8+GyVsM7YxcBlD+d69U1CLgfCDPswMIpIWUVkUFOSiKKhFoUQLobCEhCDKIgKlNoGJUGQIhjKU994ZjWjdB1RuBlqo98QdHHk+urv7P+f8DucL9J+Xz+fX19TUHHHOHSCiLBHVA2Bm/kZE00R0UUq5oLXeDmBMCNEShuGcRyHOGxkZCTKZzAUA14moLpkLgHPOdSulBq21OWYeBXAviqKeiu8qcH5+vm5xcfElETXFQItE9ALAJDMLIcSPMAxfFovF1uXl5VdEdFNK2RdPXAZOTU2la2trJ4loa8z4k5nblVIf4wGzs7MdQohhZr6mlBqw1m5xzt1Ip9OnGxoa/nogtNZjAPbFApmIWqSU7+MwY0wngKcrZT8sFAo7mPk1M28koiEp5SkPOwHgSaJfH6SUubimtT4J4IFz7kw2m31mrW1mZl/2hhU/P7QmWGu/MPPmBLBfSnmpommtzwsh+gEc8z30ujHmDhGt+pQnDIx74Dtmbk4A+6SUV72mtb4CoBdAZxRFoxU/a+0AM3cn4j77klsBvI0ZSgAORlE0obXuAXCZiA5JKd8kWjANYOeaCQPHy1M2xjwmoi4i+i2EaA/DcEZrfVsIcdY516GU8huw+owxfrUm4hozjyul9peB/jJSqdSQc65XKTVnjBkEcNQ515bNZmcSa7MtCIJRZq6P6XOlUmlXLpf7s+ZSmDkoFAqPmLlNCLE3DENtjDnk10IIwc65Jp+IiFIx2GR1dfXhTCbzqzyYiiGfz69LpVLPmTkXBMEef5vW2nNEdN9fSaL5/rvgnLullLoLYLliXwUaY7qYuaeqqmp3Y2Pj12KxmF5aWvKl+8ZvWgn4TkSf/A0HQTAchmEpmegfhA4tIjvEnI8AAAAASUVORK5CYII=" alt="" class="pointer">
            </div>
            <div class="flex input_sty alcenter plr20 mt30" v-if="yzm_radio == 1">
                <img width="16px" height="18px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAACOUlEQVQ4T71Tv2tTURg93zP1R02hg4MuToIWFPxVoSB2EaWDQoemKji8e9s+MRpBRURwcHARjBoItTX3PoqCkujkYEXxB+1mtUOH6j9QHNx8kdiXlyMvNNKGaHHxjt/9vnPP/c45ghZnYGBgTV9f3wjJawBuTk5OPiiVSlGrXlle9H1/PclBAFcAbAHwUEROk1wgectxnKLrupXlM2KMuQhgs4jsBHAQQBXA/TAMs57nfRsbG9vU1tZ2WURiRgkA0wDmAHxVSt0Ray1JvhWRjySnyuXyy0wm87OZbsyuVqsdEZFDAPYD6FVKSR1ARLpc1/3c6o+tauPj47sTicTs/wPwfX8HyR6llB8z+icGhUJhm+M47wE8V0qdWRXAGHMcwIzWemFiYmJrFEVTJD90dHQMplKpuhf+ysBa+4TkHpInHMd5SnK+Wq32e54XNha6AsAYE1/0aK1n4oZsNruhs7PzBYBYrtdBEBxrlrVQKBxwHGdaKbU2lnGW5COt9e3GC/l8Ptne3p5ZXFy863nej2YpjTGXROSUUmpf3YkiciEMw65Wzc3DSwznAdyrO3GpMEfyjdZ6ZDUzGWNGReSwiOyKc1EPk+/73STfxYHRWt/4E4gx5rqIXCXZ29jZ7zRaa48CeEayVKlUzqfT6aABVCwWk0EQ5ACkoijqHx4eftW4WxFna+1eko9FZCOAeOATgG4A5wB8r9VqJ4eGhmZXxLmZbi6XW5dMJs8CcAFsB/CFpC2Xy6OtUvoLjso0IuJVOuUAAAAASUVORK5CYII=" alt=""> 
                <input type="text" v-model="code" :placeholder='$t("register.verification_code")' autocomplete="off" class="plr20 code">
                <button type="button" class="pointer bdl color-primary" style="font-size: 14px; background: transparent;" v-if="hasSend">{{seconds}} S</button>
                <button type="button" class="pointer bdl color-primary" style="font-size: 14px; background: transparent;" v-else @click="sendCode">{{$t("register.send_the_verification_code")}}</button>
            </div>
        </div>
        <div class="footer">
            <button class="bg-primary color-default" @click="updatePassword">{{$t("tv.confirm")}}</button>
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
    name: 'setTransactionPassword',
    components: {
      indexHeader,
      indexFooter
    },
    data() {
      return {
        active: 1,
        deviceIdListBack: [],
        newArr: [],
        timer: null,
        seconds: 120,
        password: "",
        re_password: "",
        code: "",
        hasSend: !1,
        user_string: "",
        showFlag: !1,
        userDetail: "",
		defaultNum:86,
		yzm_radio:0
      }
    },
    mounted() {
        document.addEventListener("click", t=>{
            "left-box" != t.target.className && "left-box__img" != t.target.className && "down-icon" != t.target.className && "countryCode" != t.target.className && (this.showFlag = !1)
        }
        )
    },
    created() {
        this.userInfo(),
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
                t.mobile_register = e.message.value,
                0 == t.mobile_register && (t.active = 1)
            }
            ).catch(t=>{
                console.log(t)
            }
            )
        },
        updatePassword() {
            var t = this;
            this.$http({
                url: "/api/safe/update_password",
                method: "post",
                data: {
                    password: t.password,
                    re_password: t.re_password,
                    account: t.user_string,
                    code: t.code,
                    lang: window.localStorage.getItem("lang") || "en"
                },
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            }).then(t=>{
                "ok" == t.data.type ? (layer.msg(t.data.message),
                this.$router.push({
                    path: "/accountSet"
                })) : layer.msg(t.data.message)
            }
            )
        },
        sendCode() {
            var t = this;
			if(this.active == 0){
				var apiurl = '/api/sms_mobile';
			}else{
				var apiurl = '/api/sms_mail';
			}
            this.$http({
                url: apiurl,
                method: "post",
                data: {
                    user_string: t.user_string,
                    area_code_id: "",
                    area_code: t.defaultNum,
                    type: "forget",
                    lang: window.localStorage.getItem("lang") || "en",
                    type_new: t.active
                }
            }).then(e=>{
                "ok" == e.data.type ? (t.seconds = 120,
                t.hasSend = !0,
                t.timer = setInterval((function() {
                    t.seconds = t.seconds - 1,
                    t.seconds <= 0 && (t.hasSend = !1,
                    clearInterval(t.timer))
                }
                ), 1e3)) : layer.msg(e.data.message)
            }
            )
        },
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
                if ("ok" == e.data.type) {
                    t.userDetail = e.data.message,
					t.defaultNum = t.userDetail.area_code,
                    t.userDetail.email ? (t.active = 1,
                    t.user_string = t.userDetail.email) : (t.active = 0,
                    t.user_string = t.userDetail.account_number)
                }
            }
            ).catch(t=>{}
            )
        },
        switchActive(t) {
            this.active = t,
            0 == this.active ? this.user_string = this.userDetail.phone : this.user_string = this.userDetail.email
        },
        back() {
            window.history.go(-1)
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
        }
    }
  }
  </script>
  <style lang="scss" scoped>
  
.selectCountry .slide-box {
    position: absolute;
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

.selectCountry .slide-box .filter-box {
    height: 45px;
    border-bottom: 1px solid #eaeaea;
    padding: 5px 20px
}

.selectCountry .slide-box .filter-box input {
    width: 100%;
    height: 100%;
    padding: 5px 10px;
    font-size: 14px;
    color: #000;
    border: 1px solid #eaeaea;
    border-radius: 4px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1)
}

.selectCountry .slide-box ul {
    height: 100%;
    max-height: 170px;
    width: 100%;
    overflow: auto
}

.selectCountry .slide-box ul li {
    justify-content: space-between;
    height: 40px;
    padding: 0 20px;
    color: #333;
    font-size: 14px
}

.selectCountry .slide-box ul li .left,.selectCountry .slide-box ul li {
    display: flex;
    align-items: center
}

.selectCountry .slide-box ul li .left .countryImg {
    display: block;
    width: 25px;
    height: 25px
}

fieldset,img {
    border: 0
}

.selectCountry .slide-box ul li .left .countryName {
    margin: 0 10px
}

.selectCountry .slide-box ul li:hover {
    cursor: pointer;
    background-color: #ccc;
    color: #276cff
}

.setTransactionPassword {
    width: 943px;
    min-height: 750px;
    margin: 40px auto;
    padding: 0 30px 30px
}

.bg-main {
    background-color: #fff;
    color: #000
}

.goback-box {
    display: flex;
    align-items: center;
    font-size: 14px;
    padding: 15px 0;
    width: -moz-fit-content;
    width: fit-content;
    cursor: pointer
}

.color-third {
    color: #ccc
}

.from-box {
    width: 418px;
    margin: 60px auto 0
}

h1,h2,h3,h4,h5,h6 {
    font-size: 100%;
    font-weight: 500
}

.from-box__title {
    font-size: 30px;
    text-align: center
}

.tab {
    margin-top: 20px
}

.around {
    justify-content: space-around
}

.flex {
    display: flex;
    -webkit-display: flex;
    -moz-display: flex;
    -ms-display: flex;
    -o-display: flex
}

.tab span {
    cursor: pointer;
    padding-bottom: 10px;
    border-bottom: 2px solid transparent
}

.selectCountry {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    border: 1px solid #797b96
}

.selectCountry .selectCountryInput {
    padding: 0 15px
}

.selectCountry .selectCountryInput .left-box {
    cursor: pointer
}

.selectCountry .selectCountryInput .left-box,.selectCountry .selectCountryInput {
    display: flex;
    align-items: center;
    height: 100%
}

.selectCountry .selectCountryInput .left-box__img {
    width: 26px;
    height: 24px;
    margin-right: 2px;
    outline: none;
    border-color: transparent;
    background-size: cover
}

.selectCountry .selectCountryInput .left-box .countryCode {
    margin-right: 10px
}

.selectCountry .selectCountryInput>input {
    flex: 1;
    margin-left: 20px;
    height: 100%;
    background: transparent;
    color: #000
}

.border-primary,.btn-primary {
    border-color: #276cff!important
}

.from-box .footer button {
    cursor: pointer;
    font-size: 16px;
    width: 100%;
    height: 100%;
    border-radius: 4px
}

.bg-primary {
    background-color: #276cff!important
}

.color-default {
    color: #fff
}

.register-box .input_sty {
    box-sizing: border-box;
    width: 417px;
    height: 48px;
    border-radius: 4px;
    border: 1px solid #797b96;
    padding-left: 10px
}

.mt30 {
    margin-top: 30px
}

.register-box .input_sty>input {
    background-color: transparent;
    color: #000;
    padding-left: 10px
}

.register-box .emil,.register-box .phone {
    width: 360px!important;
    border-left: none
}

.flex1 {
    flex: 1
}

.alcenter {
    align-items: center
}

.register-box .code {
    width: 300px!important;
    border-left: none
}

.register-box {
    padding-top: 20px;
    position: relative
}

.from-box .footer {
    margin-top: 50px;
    width: 100%;
    height: 48px
}

.curPer,.pointer {
    cursor: pointer
}
  </style>
  