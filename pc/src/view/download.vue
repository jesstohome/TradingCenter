<template>
    <div id="app_down">
        <div class="downLoad-box">
            <div class="downLoad-content-box">
                <div class="downLoad-left-box">
                    <div class="logo-box">
                        <div @click="goback">
                            <img src="@/assets/images/back.png" class="goback">
                        </div>
                        <img src="/upload/1678970072845983.png" class="iconimg" style="width: 300px;">
                    </div>
                    <div class="downLoad-left-top">
                        <h1>Security Trading, Anywhere</h1>
                        <span> Cover iOS and Android platforms, support full service functions </span>
                    </div>
                    <div class="downLoad-left-bottom">
                        <div class="store-left-box">
                            <div>
                                <div class="btns-box">
                                    <div class="QR_code_box" style="position: relative;">
                                        <div class="ewm-text">
                                            <div id="ios" class="ewm_img" title="https://app.usdtserver.com/" style="position: absolute; bottom: -150px; left: 50px; " v-show="iosFlag">
                                                <canvas width="150" height="150" style="display: none;"></canvas>
                                                <img alt="Scan me!" :src="'/api/qrcode?text='+ios_apk_download_url" style="display: block;width:150px;height:150px;">
                                            </div>
                                        </div>
                                        <div class="apple-box mb30" style="cursor: pointer;" @mouseover="iosFlag = true" @mouseout="iosFlag = false" @click="jump(ios_apk_download_url)">
                                            <div class="app-icon-box"></div>
                                            <div class="apple-text-box fColor27">
                                                <p>IOS</p>
                                                <span>Download</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="QR_code_box" style="position: relative;">
                                        <div class="ewm-text">
                                            <div id="android" class="ewm_img" title="https://app.usdtserver.com/" style="position: absolute; bottom: -150px; left: 50px; " v-show="apkFlag">
                                                <canvas width="150" height="150" style="display: none;"></canvas>
                                                <img alt="Scan me!" :src="'/api/qrcode?text='+apk_download_url" style="display: block;width:150px;height:150px;">
                                            </div>
                                        </div>
                                        <div class="apple-box mb30">
                                            <div class="and-icon-box"></div>
                                            <div class="apple-text-box" style="cursor: pointer;" @mouseover="apkFlag = true" @mouseout="apkFlag = false" @click="jump(apk_download_url)">
                                                <p>Android</p>
                                                <span>Download android APK</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="downLoad-right-box">
                    <img src="@/assets/images/downloadsBG.png" alt="">
                </div>
            </div>
        </div>
    </div>
  </template>
  <script>
  
  export default {
    name: 'download',
    data() {
        return {
            siteLogo: "",
            ios_apk_download_url: "",
            apk_download_url: "",
            iosFlag: !1,
            apkFlag: !1
        }
    },
    mounted() {
        this.getSiteLogo()
    },
    methods:{
        jump(t) {
            window.open(t)
        },
        goback() {
            this.$router.push("/")
        },
        getSiteLogo() {
            this.$http({
                url: "/api/getSiteConfig?lang=" + window.localStorage.getItem("lang"),
                method: "get",
                data: {}
            }).then(t=>{
                this.siteLogo = t.data.message.site_pc_logo,
                this.ios_apk_download_url = t.data.message.ios_apk_download_url,
                this.apk_download_url = t.data.message.apk_download_url,
                new R.a(document.getElementById("ios"),{
                    width: 150,
                    height: 150,
                    text: t.data.message.ios_apk_download_url,
                    colorDark: "#000000",
                    colorLight: "#ffffff",
                    correctLevel: R.a.CorrectLevel.H
                }),
                new R.a(document.getElementById("android"),{
                    width: 150,
                    height: 150,
                    text: t.data.message.apk_download_url,
                    colorDark: "#000000",
                    colorLight: "#ffffff",
                    correctLevel: R.a.CorrectLevel.H
                })
            }
            )
        }
    }
  }
  </script>
  <style lang="scss" scoped>
  
#app_down {
    min-width: 1200px;
    background: #151926
}

.downLoad-box {
    height: 100vh
}

.downLoad-box .downLoad-content-box {
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding: 95px 180px 0 0
}

.downLoad-box .downLoad-content-box .downLoad-left-box .logo-box {
    color: #fff
}

.downLoad-box .downLoad-content-box .downLoad-left-box .downLoad-left-top,.downLoad-box .downLoad-content-box .downLoad-left-box .logo-box {
    padding-left: 180px
}

.downLoad-box .downLoad-content-box .downLoad-left-box .logo-box img {
    display: block
}

fieldset,img {
    border: 0
}

downLoad-box .downLoad-content-box .downLoad-left-box .logo-box img {
    display: block
}

.downLoad-box .downLoad-content-box .goback {
    margin-bottom: 33px;
    width: 37px;
    height: 29px;
    cursor: pointer
}

.downLoad-box .downLoad-content-box .downLoad-left-box .logo-box span {
    font-size: 18px;
    display: inline-block;
    margin-top: 20px
}

.downLoad-box .downLoad-content-box .downLoad-left-box .downLoad-left-top h1 {
    color: #fff;
    font-size: 52px
}

.downLoad-box .downLoad-content-box .downLoad-left-box .downLoad-left-top {
    margin-top: 70px
}

h1,h2,h3,h4,h5,h6 {
    font-size: 100%;
    font-weight: 500
}

.downLoad-box .downLoad-content-box .downLoad-left-box .downLoad-left-top span {
    display: inline-block;
    margin-top: 38px;
    color: #fff;
    font-size: 16px
}

.downLoad-box .downLoad-content-box .downLoad-left-box .downLoad-left-bottom {
    display: flex;
    margin-top: 80px;
    padding-left: 150px
}

.downLoad-box .downLoad-content-box .downLoad-left-box .downLoad-left-bottom .store-left-box>div .btns-box {
    width: 500px;
    display: flex;
    flex-wrap: wrap
}

.downLoad-box .downLoad-content-box .downLoad-left-box .downLoad-left-bottom .store-left-box>div .btns-box .QR_code_box .apple-box .and-icon-box {
    width: 34px;
    height: 34px;
    margin-right: 12px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAEaklEQVRYR+2YacimYxTHf8e+7/u+hLIvRRT5IKOMGZoo5LPsyhKNsos0QgxJSZEljLEkUSjFBwzKVnbGMs3wjn0MLv3ezq17Hs+89/U8z6t8eE+9vc9z39fyf851zv/8zxX8Ty1qcZVS1gMuBE4CLgWeiog/nV9KWRNYI9daFhG/5/PVgBOBy4G7gLkR8VvNnoMAWxU4DrgB+AU4C/gQ2BnYC9hajMBXwDvAZ8DewM2AAM8HnosIx3RaNbD0wFrAIcBNCeJT4ABgQ2D13G05MAa8BewB/ABcALwREcs6EeWAgYAluJ2AG4Hjcw290c885r+AB4DZEfFlLSjHDQSslLIdcCVwArBRxXyPbQnwEHBtRHxdC64aWCllA+Ai4FxgXeAb4GdgB8AjbptHZow5bitgaR7/LRHxUw24KmClFMcZW/cDu+RGeu4V4F5g957NTIrTgIPTw3rXZycDr9ckQC0wqeLiDOJ1MisfBN7M5x5x2xZm9u6bYPSc3jU259R4rRaYVKC3jsy4MnakDDNwfUAqaZuBbzbKbf4Q93HOS8ApNbFWC8xMnA/4v81DzYb9wqb3nd+Nu5kR8UlXnNUCk6ekh02AcbYfwlbJ2JwXEfLchPYvYKUUFxCAZWap8VBKkTy3yKORm4Yx17VULYqI5Vni/MFm8HcRscK6/YAdAZwJ7Gg9BG7POLkV2DXjahhg/riPgXMyPt3DEmf1uDMijL9/rB+wF4HDssR8AZwOvAc8n8CGAdXM+Qg4CtgNuDs50AR6NSJ0yITAJEPJVJMMrwIeBZ7IYj0KsHfTSzNyXTN6fJ+IaD6PP+jnscXApjnhR+Aa4BHgMWC/UVCl6hCUfxJ044CxiNi4y2OWmi1zkFzkAo8D8wAJcxRTDhlX04GrU5W43pKI2GxQYFckh00BW1mM9R7llMemYqxP+q4sKxdHxOZdHlsENIPkMdNagp3MrJzZw2PfR4T1eSjmn0xgKhX5cSDmfw3YP8WfPeIZqVSfAfYchV2B94FpwD7ZAG+TMurtiDiwy2OyspVfUfh0SmRLh0Xc5nYUU0lYxK3HNjZWAcXjHRFhLZ7wKO0TLQ9KYnXSWCll22w6DkrVsTagvtJUtCqEX/O7HZOSuqnD6izfOWaBTUpELCyl2KAYV0p0g/+PCYH1c0cpRbAe76HpyVNb9VTx97Ltf87VI4e37jJMJvsFvWVXtaAXRL89q6R1M7GUojfsIx9uKQ0zdw5wW3rPMPCYGuUgRczyyGovVPqWpK4AKqVsDzzZAqZm8+Lk+pwrKO8qbPk0gR0bEcZStQ3ksfGAKsWkMFDNLM1+UW9dlx67BDgvu3Dfq36nR4SyutqGAWZm2gs01GHwzk0iNhFmA2e3gH2QHlNWV9uwwJ5N3e5GZpzAlOACuywbDjNXE9C0iPjPgalu7wGOThL+Nr10XwLxfsJ4c5w96AtJEcqpahvGY1LHMYA6zRbPePNzc/8lm/vdsvN5HrHXoivwVBfCgYF1LThZ7/8GZNaPNgJ+W5AAAAAASUVORK5CYII=);
    background-size: cover
}

.downLoad-box .downLoad-content-box .downLoad-left-box .downLoad-left-bottom .store-left-box>div .btns-box .QR_code_box {
    position: relative
}

.downLoad-box .downLoad-content-box .downLoad-left-box .downLoad-left-bottom .store-left-box>div .btns-box .QR_code_box .apple-box {
    display: flex;
    align-items: center;
    color: #fff;
    width: 218px;
    background: #0b0f10;
    border: 1px solid #fff;
    padding: 8px;
    margin-bottom: 18px;
    margin-left: 20px
}

.downLoad-box .downLoad-content-box .downLoad-left-box .downLoad-left-bottom .store-left-box>div .btns-box .QR_code_box .apple-text-box p {
    font-size: 16px
}

.downLoad-box .downLoad-content-box .downLoad-left-box .downLoad-left-bottom .store-left-box>div .btns-box .QR_code_box .apple-text-box span {
    font-size: 13px
}
</style>
  