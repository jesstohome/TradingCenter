<template>
    <div>
      <indexHeader></indexHeader>
        <div style="overflow-x: hidden; background-color: rgb(21, 25, 38);">
            <div class="bonus_mainSection__gX_Zs">
                <div class="BannerSection_banner__WTETc">
                    <div class="BannerSection_container__yTCUi">
                        <div class="BannerSection_bannerSection__b9Jg4">
                            <h1 class="BannerSection_bannerTitle__aiS27">
                                {{$t("bonus.tip_1")}}&lt;<span>1,000 USDT</span>{{$t("bonus.tip_9")}} 
                            </h1>
                            <div class="BannerSection_bannerDesc__YqlJo">
                                <span class="BannerSection_bannerDescText__VDL4u">{{$t("bonus.tip_2")}}：927,899</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bonus_section__A0t90">
                    <div class="bonus_container__ILXum">
                        <div class="Broadcast_broadcastWrapper__z5ymA">
                            <el-carousel direction="vertical" :autoplay="true" indicator-position="none" height="42px" class="jsx-f3e91438ffe01f8d list">
                                <el-carousel-item class="is-animating">
                                    <div class="jsx-f3e91438ffe01f8d slide" style="line-height: 42px;">
                                        <div style="display: flex; align-items: center;">
                                            <span style="white-space: nowrap; text-overflow: ellipsis; overflow: hidden; color: white; margin-left: 15px;">{{$t("bonus.tip_3")}}</span>
                                        </div>
                                    </div>
                                </el-carousel-item>
                                <el-carousel-item class="is-animating">
                                    <div class="jsx-f3e91438ffe01f8d slide" style="line-height: 42px;">
                                        <div style="display: flex; align-items: center;">
                                            <span style="white-space: nowrap; text-overflow: ellipsis; overflow: hidden; color: white; margin-left: 15px;">{{$t("bonus.tip_4")}}</span>
                                        </div>
                                    </div>
                                </el-carousel-item>
                            </el-carousel>
                        </div>
                        <div class="bonus_container__ILXum">
                            <div class="bonus_userInfoBoard__0QD0p">
                                <div class="bonus_userInfoText__IiOWZ">{{$t("bonus.tip_5")}}</div>
                            </div>
                        </div>
                        <div class="ProgressBar_progressBar__u_kUr">
                            <div class="ProgressBar_progressInfo__M3tAC">
                                <h3>
                                    {{$t("bonus.you_have_obtained")}}
                                    <span>$0</span>
                                </h3>
                                <span>{{$t("bonus.up_to")}} $1,000 !</span>
                            </div>
                            <el-progress :percentage="0" status="success" :show-text="false"></el-progress>
                        </div>
                        <div class="UserInfoSection_userInfoSection__SjPRs">
                            <div class="UserInfoSection_userInfoFlex__Z6gI2">
                                <div class="UserInfoSection_userInfo___SSdO">
                                    <div class="UserInfoSection_userInfoIcon__jB5qy"></div>
                                    <div>
                                        <div class="UserInfoSection_userInfoTitle__Pm_ZS">{{userDetail.email}}</div>
                                        <div>
                                            <span class="UserInfoSection_userInfoWrapper__gsplm">
                                                <span class="UserInfoSection_userInfoDesc__IRGx5">UID: {{userDetail.id}} </span>
                                            </span>
                                            <span class="UserInfoSection_userInfoWrapper__gsplm UserInfoSection_kycStatus__ygS3P">
                                                <span class="UserInfoSection_userInfoDesc__IRGx5">KYC: </span>
                                                <span>{{advanced_review_status < 2 || review_status < 2 ? $t("bonus.not_certified") : $t("bonus.verified")}}</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="UserInfoSection_diver__4oL3B"></div>
                                <div class="UserInfoSection_userInfo___SSdO">
                                    <div class="UserInfoSection_userInfoIcon__jB5qy UserInfoSection_reciveBonusIcon__FyVfY"></div>
                                    <div>
                                        <div class="UserInfoSection_userInfoTitle__Pm_ZS UserInfoSection_primaryColor__hQrYK">0 USDT</div>
                                        <div class="UserInfoSection_userInfoDesc__IRGx5">{{$t("bonus.cumulative_collection")}}</div>
                                    </div>
                                </div>
                            </div>
                            <button type="button" class="UserInfoSection_smallBtn__6zqry" @click="jumpDetail">{{$t("bonus.pick_up_record")}}</button>
                        </div>
                        <div dir="ltr" class="bonus_smallBannerWrapper__Fvejk">
                            <button class="bonus_btn__HA8rm bonus_rightBtn__7lDjh" tabindex="0" role="button" aria-label="Previous slide">
                                <div class="bonus_circleBtn__8vxax">
                                    <svg focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024" data-icon="RightOutlined" class="sc-bcXHqe fzgrYP mx-icon iconfont iconqiehuan-you1" style="font-size: 30px;">
                                        <path d="M350.08 801.92a48 48 0 0 1 0-67.84L572.16 512 350.08 289.92a48 48 0 0 1 67.84-67.84l256 256a48 48 0 0 1 0 67.84l-256 256a48 48 0 0 1-67.84 0z"></path>
                                    </svg>
                                </div>
                            </button>
                            <button class="bonus_btn__HA8rm bonus_leftBtn__i0FF1" tabindex="0" role="button" aria-label="Next slide">
                                <div class="bonus_circleBtn__8vxax">
                                    <svg focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024" data-icon="LeftOutlined" class="sc-bcXHqe fzgrYP mx-icon iconfont iconqiehuan-zuo1" style="font-size: 80px;">
                                        <path d="M468.293818 512l138.216727-138.24-49.384727-49.338182L369.570909 512l187.578182 187.578182 49.384727-49.338182L468.247273 512z"></path>
                                    </svg>
                                </div>
                            </button>
                            <div class="mbanner bit-center-wrap" style="background-color: transparent;">
                                <swiper :options="swiperOption" style="height: 100%;">
                                    <!-- slides -->
                                    <swiper-slide v-for="(item,index) in pics" :key="index" style="height: 175px; margin-top:20px;">
                                        <div style="height: 100%;">
                                            <img :src="item.pic" style="height: 100%; width: 100%; border-radius: 10px;">
                                        </div>
                                    </swiper-slide>
                                    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                                </swiper>
                            </div>
                        </div>
                        <div class="bonus_container__ILXum">
                            <div class="bonus_title__w6MVw">
                                <span>
                                    <div class="bonus_taskTitle__NJOpM"></div>
                                    {{$t("bonus.novice_task")}}
                                </span>
                                <span class="bonus_titleInfo__fyJGs">
                                    <img width="72px" src="@/assets/images/gift.webp"> 
                                    {{$t("bonus.first_charge_times_reward")}} 
                                    <div class="bonus_ml8__i_3S_">47:59:51</div>
                                </span>
                            </div>
                            <ul class="bonus_contain__vlroe bonus_cardGap__ygoDG">
                                <li class="bonus_greenCard__uIk0u">
                                    <div class="bonus_card__DTeDv">
                                        <div class="bonus_cardTitle__GDKB7">
                                            <div class="bonus_titleAmount__JUpMm">5</div>
                                            <div>USDT</div>
                                        </div>
                                        <div class="bonus_cardDesc1__5rBR0">
                                            <span>{{$t("bonus.first_charge")}}</span> 
                                            300 USDT
                                        </div>
                                    </div>
                                    <div class="bonus_btnWrapper__gx3tM">
                                        <div class="bonus_z7__YuZ82">
                                            <button class="bonus_taskButton__fU0lS bonus_primaryBtn__tbZMe" @click="jumpPage('/deposit')">{{$t("bonus.to_finish")}}</button>
                                        </div>
                                    </div>
                                </li>
                                <li class="bonus_greenCard__uIk0u">
                                    <div class="bonus_card__DTeDv">
                                        <div class="bonus_cardTitle__GDKB7">
                                            <div class="bonus_titleAmount__JUpMm">10</div>
                                            <div>USDT</div>
                                        </div>
                                        <div class="bonus_cardDesc1__5rBR0">
                                            <span>{{$t("bonus.first_charge")}}</span> 
                                            500 USDT
                                        </div>
                                    </div>
                                    <div class="bonus_btnWrapper__gx3tM">
                                        <div class="bonus_z7__YuZ82">
                                            <button class="bonus_taskButton__fU0lS bonus_primaryBtn__tbZMe" @click="jumpPage('/deposit')">{{$t("bonus.to_finish")}}</button>
                                        </div>
                                    </div>
                                </li>
                                <li class="bonus_greenCard__uIk0u">
                                    <div class="bonus_card__DTeDv">
                                        <div class="bonus_cardTitle__GDKB7">
                                            <div class="bonus_titleAmount__JUpMm">20</div>
                                            <div>USDT</div>
                                        </div>
                                        <div class="bonus_cardDesc1__5rBR0">
                                            <span>{{$t("bonus.first_charge")}}</span> 
                                            2000 USDT
                                        </div>
                                    </div>
                                    <div class="bonus_btnWrapper__gx3tM">
                                        <div class="bonus_z7__YuZ82">
                                            <button class="bonus_taskButton__fU0lS bonus_primaryBtn__tbZMe" @click="jumpPage('/deposit')">{{$t("bonus.to_finish")}}</button>
                                        </div>
                                    </div>
                                </li>
                                <li class="bonus_whiteCard___duOK">
                                    <div class="bonus_greenCircle__0cp3T bonus_leftCircle__DpQCv"></div>
                                    <div class="bonus_greenCircle__0cp3T bonus_rightCircle__hJTw_"></div>
                                    <div class="bonus_mask__QpoU8">
                                        <div class="bonus_card__DTeDv">
                                            <div></div>
                                            <div class="bonus_cardTitle__GDKB7">
                                                <div class="bonus_titleAmount__JUpMm">+5</div>
                                                <div>USDT</div>
                                            </div>
                                            <div class="bonus_cardDesc1__5rBR0">{{$t("bonus.the_first_contract_transaction")}}</div>
                                            <div class="bonus_cardDesc2__Lu3wZ bonus_mb8__aSprP">≥ 1,000 USDT</div>
                                            <div class="bonus_cardDesc2__Lu3wZ"></div>
                                        </div>
                                        <div class="bonus_secondaryBtnWrapper__dnrE6">
                                            <button class="bonus_taskButton__fU0lS bonus_secondaryBtn__fTA9p" @click='jumpPage("/secondDealCenter")'>{{$t("bonus.to_finish")}}</button>
                                        </div>
                                    </div>
                                </li>
                                <li class="bonus_whiteCard___duOK">
                                    <div class="bonus_greenCircle__0cp3T bonus_leftCircle__DpQCv"></div>
                                    <div class="bonus_greenCircle__0cp3T bonus_rightCircle__hJTw_"></div>
                                    <div class="bonus_mask__QpoU8">
                                        <div class="bonus_card__DTeDv">
                                            <div></div>
                                            <div class="bonus_cardTitle__GDKB7">
                                                <div class="bonus_titleAmount__JUpMm">+80</div>
                                                <div>USDT</div>
                                            </div>
                                            <div class="bonus_cardDesc1__5rBR0" style="color: black;">
                                                <span>7</span>
                                                {{$t("bonus.contract_accumulation")}}
                                            </div>
                                            <div class="bonus_cardDesc2__Lu3wZ bonus_mb8__aSprP">≥ 500,000 USDT ({{$t("bonus.tip_6")}})</div>
                                            <div class="bonus_cardDesc2__Lu3wZ"></div>
                                            <div class="bonus_progressWrapper__0WKVs">
                                                <div class="bonus_progressInfo__m7KdA">
                                                    <span>{{$t("bonus.current")}}：</span>
                                                    <span>
                                                        <span class="bonus_currentProgress__Dv_WL">0</span>
                                                         /500,000 USDT
                                                    </span>
                                                </div>
                                                <div class="ant-progress ant-progress-line ant-progress-status-normal ant-progress-small">
                                                    <div class="ant-progress-outer">
                                                        <div class="ant-progress-inner">
                                                            <div class="ant-progress-bg" style="width: 0%; height: 6px;"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="bonus_secondaryBtnWrapper__dnrE6">
                                            <button class="bonus_taskButton__fU0lS bonus_secondaryBtn__fTA9p" @click='jumpPage("/secondDealCenter")'>{{$t("bonus.to_finish")}}</button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="bonus_container__ILXum">
                            <div class="bonus_title__w6MVw">
                                <span>
                                    <div class="bonus_taskTitle__NJOpM"></div> 
                                    {{$t("bonus.user_task")}}
                                </span>
                            </div>
                            <ul class="bonus_contain__vlroe bonus_cardGap__ygoDG">
                                <li class="bonus_whiteCard___duOK">
                                    <div class="bonus_greenCircle__0cp3T bonus_leftCircle__DpQCv"></div>
                                    <div class="bonus_greenCircle__0cp3T bonus_rightCircle__hJTw_"></div>
                                    <div class="bonus_mask__QpoU8">
                                        <div class="bonus_card__DTeDv">
                                            <div></div>
                                            <div class="bonus_cardTitle__GDKB7">
                                                <div class="bonus_titleAmount__JUpMm">+5</div>
                                                <div>USDT</div>
                                            </div>
                                            <div class="bonus_cardDesc1__5rBR0">
                                                {{$t("bonus.invite_new_users")}} 
                                                <svg focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024" data-icon="Iconcopy" class="sc-bcXHqe fzgrYP mx-icon iconfont iconcopy">
                                                    <path d="M182.857143 73.142857A36.571429 36.571429 0 0 1 219.428571 36.571429h658.285715A109.714286 109.714286 0 0 1 987.428571 146.285714v658.285715a36.571429 36.571429 0 0 1-73.142857 0V146.285714a36.571429 36.571429 0 0 0-36.571428-36.571428H219.428571a36.571429 36.571429 0 0 1-36.571428-36.571429z"></path>
                                                    <path d="M731.428571 292.571429H73.142857v658.285714h658.285714V292.571429zM73.142857 219.428571h658.285714a73.142857 73.142857 0 0 1 73.142858 73.142858v658.285714a73.142857 73.142857 0 0 1-73.142858 73.142857H73.142857a73.142857 73.142857 0 0 1-73.142857-73.142857V292.571429a73.142857 73.142857 0 0 1 73.142857-73.142858z"></path>
                                                </svg>
                                            </div>
                                            <div class="bonus_cardDesc2__Lu3wZ bonus_mb8__aSprP">{{$t("bonus.tip_7")}} ≥ 10,000 USDT，{{$t("bonus.tip_8")}} 5 USDT {{$t("bonus.tip_9")}} </div>
                                            <div class="bonus_cardDesc2__Lu3wZ">{{$t("bonus.tip_7")}}</div>
                                        </div>
                                        <div class="bonus_secondaryBtnWrapper__dnrE6">
                                            <button class="bonus_taskButton__fU0lS bonus_secondaryBtn__fTA9p" @click='jumpPage("/secondDealCenter")'>{{$t("bonus.to_finish")}}</button>
                                        </div>
                                    </div>
                                </li>
                                <li class="bonus_whiteCard___duOK">
                                    <div class="bonus_greenCircle__0cp3T bonus_leftCircle__DpQCv"></div>
                                    <div class="bonus_greenCircle__0cp3T bonus_rightCircle__hJTw_"></div>
                                    <div class="bonus_mask__QpoU8">
                                        <div class="bonus_card__DTeDv">
                                            <div></div>
                                            <div class="bonus_cardTitle__GDKB7">
                                                <div class="bonus_titleAmount__JUpMm">+1-50</div>
                                                <div>USDT</div>
                                            </div>
                                            <div class="bonus_cardDesc1__5rBR0">{{$t("bonus.transaction_amount")}}</div>
                                            <div class="bonus_cardDesc2__Lu3wZ bonus_mb8__aSprP">≥ 10,000 USDT ({{$t("bonus.random_reward")}})</div>
                                            <div class="bonus_cardDesc2__Lu3wZ"></div>
                                            <div class="bonus_progressWrapper__0WKVs">
                                                <div class="bonus_progressInfo__m7KdA">
                                                    <span>{{$t("bonus.current")}}：</span>
                                                    <span>
                                                        <span class="bonus_currentProgress__Dv_WL">0</span> 
                                                        /10,000 USDT
                                                    </span>
                                                </div>
                                                <div class="ant-progress ant-progress-line ant-progress-status-normal ant-progress-small">
                                                    <div class="ant-progress-outer">
                                                        <div class="ant-progress-inner">
                                                            <div class="ant-progress-bg" style="width: 0%; height: 6px;"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="bonus_secondaryBtnWrapper__dnrE6">
                                            <button class="bonus_taskButton__fU0lS bonus_secondaryBtn__fTA9p" @click='jumpPage("/secondDealCenter")'>{{$t("bonus.to_finish")}}</button>
                                        </div>
                                    </div>
                                </li>
                                <li class="bonus_whiteCard___duOK">
                                    <div class="bonus_greenCircle__0cp3T bonus_leftCircle__DpQCv"></div>
                                    <div class="bonus_greenCircle__0cp3T bonus_rightCircle__hJTw_"></div>
                                    <div class="bonus_mask__QpoU8">
                                        <div class="bonus_card__DTeDv">
                                            <div></div>
                                            <div class="bonus_cardTitle__GDKB7">
                                                <div class="bonus_titleAmount__JUpMm">+100</div>
                                                <div>USDT</div>
                                            </div>
                                            <div class="bonus_cardDesc1__5rBR0">{{$t("bonus.transaction_amount")}}</div>
                                            <div class="bonus_cardDesc2__Lu3wZ bonus_mb8__aSprP">≥ 2,000,000 USDT</div>
                                            <div class="bonus_cardDesc2__Lu3wZ"></div>
                                            <div class="bonus_progressWrapper__0WKVs">
                                                <div class="bonus_progressInfo__m7KdA">
                                                    <span>{{$t("bonus.current")}}：</span>
                                                    <span>
                                                        <span class="bonus_currentProgress__Dv_WL">0</span>
                                                         /2,000,000 USDT
                                                    </span>
                                                </div>
                                                <div class="ant-progress ant-progress-line ant-progress-status-normal ant-progress-small">
                                                    <div class="ant-progress-outer">
                                                        <div class="ant-progress-inner">
                                                            <div class="ant-progress-bg" style="width: 0%; height: 6px;"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="bonus_secondaryBtnWrapper__dnrE6">
                                            <button class="bonus_taskButton__fU0lS bonus_secondaryBtn__fTA9p">{{$t("bonus.to_finish")}}</button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="bonus_ruleSection___ywut">
                    <div class="bonus_container__ILXum">
                        <div class="bonus_ruleInnerSection__7af0t">
                            <h1>{{$t("bonus.contract_bonus")}}</h1>
                            <h2>1、{{$t("bonus.rules_of_use")}}</h2>
                            <ul class="bonus_ruleList__CrIt8">
                                <li>（1）{{$t("bonus.rule_1")}}</li>
                                <li>（2）{{$t("bonus.rule_2")}}</li>
                                <li>（3）{{$t("bonus.rule_3")}}</li>
                                <li>（4）{{$t("bonus.rule_4")}}</li>
                                <li>（5）{{$t("bonus.rule_5")}}</li>
                                <li style="font-weight: 500;">{{$t("bonus.notice")}}</li>
                                <li>（6）{{$t("bonus.rule_6")}}</li>
                                <li>（7）{{$t("bonus.rule_7")}}</li>
                                <li>（8）{{$t("bonus.rule_8")}}</li>
                                <li>（9）{{$t("bonus.rule_9")}}</li>
                                <li> （10）{{$t("bonus.rule_10")}} </li>
                            </ul>
                            <h2>2、{{$t("bonus.rule_2_1")}}</h2>
                            <ul class="bonus_ruleList__CrIt8">
                                <li>（1）{{$t("bonus.rule_2_2")}}</li>
                            </ul>
                        </div>
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
    name: 'bonus',
    components: {
      indexHeader,
      indexFooter
    },
    data() {
      return {
        pics: [],
        loginFlag: !1,
        userDetail: {},
        review_status: 0,
        advanced_review_status: 0,
        swiperOption: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 30,
            loop: !0,
            autoplay: !0,
            navigation: {
                nextEl: ".bonus_leftBtn__i0FF1",
                prevEl: ".bonus_rightBtn__7lDjh"
            }
        }
      }
    },
    mounted() {
        this.getLunbo()
    },
    created() {
        let t = localStorage.getItem("token");
        t && (this.loginFlag = !0),
        this.userInfo(),
        this.init()
    },
    methods: {
        jumpPage(t) {
            this.$router.push(t)
        },
        jumpDetail() {
            this.$router.push("/bonusRecord")
        },
        init() {
            let t = this;
            this.$http({
                url: "/api/real/state?lang=" + window.localStorage.getItem("lang") || !1,
                method: "get",
                data: {},
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            }).then(e=>{
                const {review_status: a, advanced_review_status: s} = e.data.message;
                t.review_status = a,
                t.advanced_review_status = s
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
                "ok" == e.data.type && (t.userDetail = e.data.message)
            }
            ).catch(t=>{}
            )
        },
        getLunbo() {
            var t = this
                , e = window.localStorage.getItem("lang");
            e || (e = "en"),
            this.$http.post("/api/news/list", {
                c_id: 40,
                lang: e
            }).then(e=>{
                if ("ok" == e.data.type) {
                    for (var a = [], s = e.data.message.list.length - 1; s >= 0; s--) {
                        var i = e.data.message.list[s];
                        a.push({
                            href: "",
                            pic: i.thumbnail
                        })
                    }
                    t.pics = a
                }
            }
            )
        }
    }
  }
  </script>
  <style lang="scss" scoped>
  
.bonus_mainSection__gX_Zs {
    background: #10181f
}

.BannerSection_banner__WTETc {
    position: relative;
    height: 364px;
    width: 100%;
    color: #fff;
    background: #121212
}

.BannerSection_banner__WTETc .BannerSection_container__yTCUi {
    width: 100%;
    max-width: 1200px;
    height: 100%;
    margin: 0 auto
}

.BannerSection_banner__WTETc .BannerSection_bannerSection__b9Jg4 {
    position: absolute;
    top: 130px;
    max-width: 1200px;
    width: 100%
}

.BannerSection_banner__WTETc .BannerSection_bannerSection__b9Jg4:before {
    content: "";
    display: block;
    position: absolute;
    top: -16px;
    right: 0;
    width: 460px;
    height: 210px;
    background-image: url(../assets/images/banner.png);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: contain
}

.BannerSection_banner__WTETc .BannerSection_bannerTitle__aiS27 {
    margin-bottom: 12px;
    font-size: 36px;
    color: #fff
}

.BannerSection_banner__WTETc .BannerSection_bannerTitle__aiS27 span {
    margin: 0 8px;
    color: #2354e6
}

.BannerSection_banner__WTETc .BannerSection_bannerDesc__YqlJo {
    display: flex;
    justify-content: center;
    padding: 4px 16px;
    border-top-left-radius: 24px;
    border-bottom-right-radius: 24px;
    width: -moz-fit-content;
    width: fit-content;
    text-align: center;
    font-size: 16px;
    color: #fff;
    background: #2354e6
}

.BannerSection_banner__WTETc .BannerSection_bannerDescText__VDL4u {
    color: #fff;
    -webkit-margin-end: 4px;
    margin-inline-end:4px}

.bonus_section__A0t90 {
    padding-top: 16px;
    padding-bottom: 40px;
    background: #151926;
    position: relative;
    transition: all .3s
}

.Broadcast_broadcastWrapper__z5ymA {
    position: relative;
    margin-bottom: 24px;
    z-index: 1
}

.list.jsx-f3e91438ffe01f8d {
    position: relative;
    overflow: hidden
}

.track.jsx-f3e91438ffe01f8d {
    position: absolute;
    left: auto;
    top: 0;
    max-width: 100%
}

.bonus_userInfoBoard__0QD0p {
    display: flex;
    justify-content: space-between;
    max-width: 1160px;
    margin: 0 auto;
    padding: 14px 20px;
    line-height: 20px;
    border-radius: 8px 8px 0 0;
    border: 1px solid #2354e6;
    border-bottom: none;
    color: #2354e6;
    background: transparent
}

.bonus_userInfoText__IiOWZ {
    color: #fff
}

.bonus_flex__V5yVs {
    display: flex;
    align-items: center
}

.ProgressBar_progressBar__u_kUr {
    position: relative;
    padding: 16px 24px 20px;
    max-width: 1200px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    width: 100%;
    background: #273680;
    z-index: 1
}

.ProgressBar_progressBar__u_kUr .ProgressBar_progressInfo__M3tAC {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px
}

.ProgressBar_progressBar__u_kUr .ProgressBar_progressInfo__M3tAC h3 {
    display: flex;
    align-items: center;
    margin-bottom: 0;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #fff
}

.ProgressBar_progressBar__u_kUr .ProgressBar_progressInfo__M3tAC h3 span {
    -webkit-margin-end: 8px;
    margin-inline-end:8px;font-size: 20px;
    line-height: 25px;
    color: #faad14
}

.ProgressBar_progressBar__u_kUr .ProgressBar_progressInfo__M3tAC>span {
    font-size: 16px;
    line-height: 25px;
    color: #fff
}

 .el-progress-bar__outer {
    background-color: #cdeddd!important;
    height: 12px!important
}

.UserInfoSection_userInfoSection__SjPRs {
    margin: 0 auto 48px;
    display: flex;
    width: 100%;
    height: 146px;
    justify-content: space-between;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    padding: 44px 48px;
    background: #292f40
}

.UserInfoSection_userInfoFlex__Z6gI2 {
    display: flex
}

.UserInfoSection_userInfo___SSdO {
    display: flex;
    font-weight: 500
}

.UserInfoSection_userInfoIcon__jB5qy {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    -webkit-margin-end: 20px;
    margin-inline-end:20px;background-color: rgba(22,185,121,.08);
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDA2IDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFGMDUxRkVGNTM5MzExRURBQkRFRUY4MDg1OUQzQTZFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFGMDUxRkYwNTM5MzExRURBQkRFRUY4MDg1OUQzQTZFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUYwNTFGRUQ1MzkzMTFFREFCREVFRjgwODU5RDNBNkUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUYwNTFGRUU1MzkzMTFFREFCREVFRjgwODU5RDNBNkUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7HjyQUAAAC5klEQVR42uzdsW7TQBzH8UvE4NELkkczwdaMGZMnaNkYwwMg0SeAPgHhCQhvwNiNsLHRR8iEGDt2oeVO/Vs1kaJIUXK++933K91QVW1Tf3wX243T0ct3D450G7MJACaACWACmAAmgAlggAlgApgAJoAJYAIYYAKYACaACWACmAAmgAEmgAlgAphO0zPh3632Y+HHmR8z+7i2z20O+H6XfnwDePgmfnwy1F21B+4wLNEDz9gA+2sPLkt0hrW2fJ5BqgcccL8fuOxyFJ3BsgyuMPAHcHWBA+x7CHWBv8CnC9xyKqQNfAGdNvA5dNrAE+h0gft/NCBRYCrgNIlEgTeF/dwiZ/AGYG3gHwPgAhyxVeSft+Y5OG43ftxG/HmfAY7bbcSNvrYdCuDILSM9L77lNGm4WXzqjX+V68GVAnC3fF6e6Ht/9eNj5ttH4krW0mbasXEXAttG5lJlmGmvj7ScXqngKgGHwuui5zb7Dl3u5wrLsiqwsxkcZt8Lg943o8OB2spg5y7jCxq7Ur35bNNbZsOLA1ob/ZvPbnI+vy0duF8RkKUs0QQwwAQwAUwAE6dJ+3pu48HGvR9/7XPb//l61Nupx/bxaOtr73d87Z0fvwE+fY0fr9zThYvY/XGPF0l+urivKJEHDpgzN/zN3o2NqUGvXeJ/L04duDLYaaI73cI9XiVbpzqjUwbu3sgs9VtVumvdqxSRx+Ae9fE2AOvh9h/3m9Qed4rAFy7fOwg7ZID3PJ/lXOMSev+Q1IBnTqOpnQEAvDV7VW7urlI5tRsnttcrNQH4/4OTRgw4id8pFWA13K4WYG1gZrA4cA3w01EnwOIHWarAFcDab25Wlw6s/s51DcDaFT+DK4C1gRtx4IYZzAxmBmdcNeROnALwndOvLhn42mXyIvIcV6kUXjYbcJeOZGcwAUwAE8AAE8AEMAFMABPABDDAbAKACWACmAAmgAlgAhhgApgAJoAJYAKYAAaYJPsnwABRDlnt9qvNSAAAAABJRU5ErkJggg==);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: contain
}

.UserInfoSection_userInfoTitle__Pm_ZS {
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 8px;
    color:#fff;
}

.UserInfoSection_userInfoWrapper__gsplm {
    -webkit-margin-end: 32px;
    margin-inline-end:32px;min-width: 100px
}

.UserInfoSection_userInfoDesc__IRGx5 {
    color: #a7b2ba
}

.UserInfoSection_smallBtn__6zqry {
    height: 28px;
    padding: 6px 12px;
    background: #f7f8f9;
    border-radius: 20px;
    outline: none;
    border: none;
    font-size: 14px;
    line-height: 16px;
    font-weight: 500;
    color: #2354e6;
    transition: all .2s;
    cursor: pointer
}

.bonus_smallBannerWrapper__Fvejk {
    position: relative;
    margin-bottom: 52px;
    -webkit-margin-start: -8.5px;
    margin-inline-start:-8.5px;-webkit-margin-end: -3px;
    margin-inline-end:-3px}

.mbanner.bit-center-wrap {
    height: 230px
}

.mbanner {
    background-color: #fff;
    overflow: hidden;
    text-align: center;
    background-repeat: no-repeat;
    background-position: 50%
}

.bit-center-wrap {
    width: 100%;
    position: relative
}

.bonus_circleBtn__8vxax {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: #f7f8f9;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #a7b2ba
}

.bonus_btn__HA8rm {
    outline: none;
    border: none;
    background: transparent;
    cursor: pointer;
    z-index: 2;
    position: absolute;
    top: 76px
}

.bonus_leftBtn__i0FF1 {
    left: -5%;
    top: 35%
}

.bonus_rightBtn__7lDjh {
    right: -5%;
    top: 35%
}

.bonus_container__ILXum {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto
}

.bonus_title__w6MVw {
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    display: flex;
    justify-content: space-between
}

.bonus_taskTitle__NJOpM {
    border-left: 8px solid #16b979;
    -webkit-margin-end: 8px;
    margin-inline-end:8px;height: 20px
}

.bonus_titleInfo__fyJGs {
    position: relative;
    font-size: 20px;
    -webkit-padding-start: 24px;
    padding-inline-start:24px;-webkit-padding-end: 16px;
    padding-inline-end:16px;line-height: 28px;
    background: rgba(22,185,121,.1);
    border-radius: 32px;
    color: #16b979
}

.bonus_title__w6MVw span {
    display: flex;
    align-items: center
}

.bonus_titleInfo__fyJGs img {
    position: absolute;
    left: -28px;
    top: -32px
}

img {
    max-inline-size: 100%;
    block-size: auto;
    height: auto;
    vertical-align: middle;
    border-style: none
}

.bonus_cardGap__ygoDG {
    row-gap: 36px
}

.bonus_contain__vlroe {
    width: 100%;
    margin: 36px auto;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    padding: 0
}

.bonus_greenCard__uIk0u {
    background: url(../assets/images/green-card.svg) no-repeat;
    width: 376px;
    height: 340px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    overflow: hidden
}

.UserInfoSection_userInfoIcon__jB5qy.UserInfoSection_reciveBonusIcon__FyVfY {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDA2IDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFGMDUxRkYzNTM5MzExRURBQkRFRUY4MDg1OUQzQTZFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFGMDUxRkY0NTM5MzExRURBQkRFRUY4MDg1OUQzQTZFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUYwNTFGRjE1MzkzMTFFREFCREVFRjgwODU5RDNBNkUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUYwNTFGRjI1MzkzMTFFREFCREVFRjgwODU5RDNBNkUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5MlgQjAAAFjklEQVR42uydO2gUURSG70oS8QVRsDBNFIPYBA1pRKKuCBaCYBAxgqAQC0GQaKWllYqCYusDBfFR+CJWNokaFMRHxMI3Jk3SKAqKgorrOe4ZnAzZzczuPO658/9wSLJOdnfmm//cc+69GwulUslA7moaLgEAQwAMATAEwBAAQwAMATAAQwAMATAEwBAAQwAMATAAQwAMATAEwFCaakjyyZfuVXlNllC0U/RT/EzjBV+dUgpYIdhOijnyM0N+Age7B9b4AL9Iy8UAHL8WCNiWCv/e5IKL8wh4HsXKKmCdcnEeq+jpIeH6XYw2SZHGKcYiHN8uoAFYkaKMq6pdnFfAuXFxnmeyorj4o4zdqKIVurhawTUmN8I42iSdukuxzUWwAFzWV4o3pjybxfpGMeACWACeOBZzmn4ssJ0SAJddfMnVk8N6sOMCYABWqSagdXMM9pYAuRoeBF53AE+2tvvapXYnr4CrLdrz47cB2D2wnlrkuFy7WGORtZ5iowm3aN+JKlqfPkU41nMxACtS1D1SSbm4SUM7phHwT4GclYub5KbhVah2AHbLxR5Y/jrdKNjpoRVwFBfzpEe9e5uXBMD63Wy1izX3wS+mcBCDrXcJsNKnHvyyeu+0ZsCeizsTAMs3zeYpwAZdbOUnILQvNvid480/XzL1L9zzc36NcLy1Y7H2qUoG8UC+j3s3hrfTw2h2sQvLhW9MMlttnNg7jQX/qV1sIroYgBUpiovHIjoeY7BFLla7OR6Aw7u4RRNYAK7dxao+9aABcCvFboql8jN/3ORkBi7mnnvEKNtA0GA52PMUaygKvsc3UZyg+EJxTY4ZSuH9PNSYemytordSvKMoBuD61UzRS3Gf4jvFM4o+jCb2Az5NcTlidplBsVyc/YviLcVhyQIAbJGeUuyq4tqww04bxQEZMz9TnKHoAuBsx1sG0ZHAc+c6ldsA2Btvm1N4LX8q/yOp/EzMqbxVbqBBX2R2Q2VdRV+XqriQwWsXJJUvlq/FOqF2U+yR5wueD3cCxyiOUxzMC+CnMaVkbpdm13Au/F+f36PYQTGaANTJrjXXBSso1rqcortiHm95E3wjxT6ZBPkSAiwft0hcGxVun4zjHyTVt0XMQEWp8NNJU6VSKbEnn+TvRfN4ezHGzPFb4E7mLp792iLfN9Tp2D75vWUxDSe/5cb49z6S/HvRaTqYx9srMQ8LIxUeH5Wxrk1ugJ4aHOs59Y84dXmMtQJfgwuupOhWGW+7E3juWSEnNK6GBJsk1KBWp9GbJw2YT+BlQv0ta0FgQqOWliRNqMEqvl874DvSe6ahZmlH/NOVlWawGOpABlArmUBtm8RbWHsz6u/bJHqlsh6Rr10Zt4dc7D2XMfhkGhciSe2Si7wm4wmVZnFpluKb6xDFjRr7bmsnOrhyfSeTAXnTD4pHdUymqGmT1knvlwdxCh6WiZeZNU6mqAPMJ7hWTt5VcQo+K/12h0l/W1HmEx28rWa/Y1A5K/G050KKuVJzjNr0BtOei+a7+qZDKbgx6xRsG2BWt1ygWh0zLMVLFin4pm0p2EbARi5QVEjD0nJ1SPHCafEIxfsEgZcCKbjbZrfaBJi1PmRlzc7pEbCjgcLNW1Bg4KukyHlfZ8VekrZun1yfojaoaffB1Yqu7aa8g7JQ4ULfMuEXKYbMxP3RPGO1k2IDxfwQ58o30qApT2OqBWqTg1m8ynOuwsVebepbgRqSqrbF/F8y5DF03NeueSm4R2sKttnBnvzTmXzBj5pk9i1dlfA7fMg4Llu2zRZ9kwRpbUpzHi4r0S07EBwMATAEwBAAAzAEwBAAQwAMATAEwBAAQwAMwBAAQwAMATAEwBAAQwAMwBAAQwAMATAEwBAAQwAMwBAAQwAMATAEwBAAQ+H1V4ABAGiEK5H5VBDOAAAAAElFTkSuQmCC)
}

.bonus_cardTitle__GDKB7 {
    position: relative;
    background: #ffe574;
    border-radius: 40px;
    min-width: 84px;
    text-align: center;
    padding: 12px 24px 8px;
    font-weight: 700;
    color: #151617
}

.bonus_titleAmount__JUpMm {
    line-height: 1;
    font-size: 26px;
    text-align: center
}

.bonus_greenCard__uIk0u .bonus_cardDesc1__5rBR0,.bonus_greenCard__uIk0u .bonus_cardDesc2__Lu3wZ {
    color: #151617
}

.bonus_cardDesc1__5rBR0 span {
    color: #16b979
}

.bonus_btnWrapper__gx3tM {
    width: 376px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: -7px;
    overflow: hidden
}

.bonus_btnWrapper__gx3tM:before {
    position: absolute;
    content: "";
    display: inline-block;
    left: -200px;
    bottom: 104px;
    width: 376px;
    height: 150px;
    background-image: url(../assets/images/flash.svg);
    transform-origin: center center;
    z-index: 1;
    animation: bonus_shiny-btn1__sEziv-4c3f56b5 2s ease-in-out infinite
}

@keyframes bonus_shiny-btn1__sEziv-4c3f56b5 {
    0% {
        transform: translate(-100%,50%)
    }

    to {
        transform: translate(100%,50%)
    }
}

.bonus_z7__YuZ82 {
    z-index: 7
}

.bonus_taskButton__fU0lS {
    position: relative;
    min-width: 172px;
    min-height: 48px;
    max-width: 300px;
    padding: 9px 16px;
    border: none;
    border-radius: 30px;
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    outline: none;
    cursor: pointer
}

.bonus_primaryBtn__tbZMe {
    padding: 12px 8px;
    font-weight: 600;
    color: #2354e6;
    background: #fff;
    transition: all .2s
}

.bonus_whiteCard___duOK {
    position: relative;
    min-height: 320px;
    margin-bottom: 36px;
    border-radius: 8px;
    width: 376px;
    background: linear-gradient(134.62deg,#f2fffa 8.23%,#fff 103.65%);
    overflow: hidden
}

.bonus_contain__vlroe li {
    -webkit-margin-end: 23px;
    margin-inline-end:23px}

.bonus_leftCircle__DpQCv {
    left: 0;
    transform: translate(-50%)
}

.bonus_greenCircle__0cp3T {
    top: 80px;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    border: 1px solid rgba(22,185,121,.08);
    position: absolute;
    background: #151926
}

.bonus_rightCircle__hJTw_ {
    right: 0;
    transform: translate(50%)
}

.bonus_mask__QpoU8 {
    border: 1px solid rgba(22,185,121,.08);
    border-radius: 8px;
    height: 100%
}

.bonus_card__DTeDv {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 32px;
    min-height: 200px
}

.bonus_cardDesc1__5rBR0 {
    font-weight: 500;
    font-size: 16px;
    margin-top: 20px;
    margin-bottom: 8px;
    width: 296px;
    text-align: center;
    word-break: break-word
}

.bonus_mb8__aSprP {
    margin-bottom: 8px
}

.bonus_cardDesc2__Lu3wZ {
    font-weight: 500;
    font-size: 12px;
    color: #78838c;
    width: 296px;
    text-align: center;
    line-height: 16px;
    word-break: break-word
}

.bonus_secondaryBtnWrapper__dnrE6 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 12px
}

.bonus_secondaryBtn__fTA9p {
    color: #fff;
    background: #2354e6;
    transition: all .2s
}

.bonus_ruleSection___ywut {
    background: #151926
}

.bonus_ruleInnerSection__7af0t {
    padding-top: 64px;
    padding-bottom: 64px;
    font-weight: 500
}

.bonus_ruleInnerSection__7af0t h1 {
    font-size: 24px;
    color: #fff;
    margin-bottom: 32px
}

.bonus_ruleInnerSection__7af0t h2 {
    font-size: 16px;
    color: #fff;
    margin-bottom: 20px
}

.bonus_ruleList__CrIt8 {
    padding: 0 0 32px;
    color: #78838c
}

.bonus_ruleList__CrIt8 li {
    font-weight: 400;
    line-height: 24px
}

.bonus_ruleInnerSection__7af0t a {
    color: #16b979
}
#app > div > div:nth-child(2) > div > div.bonus_section__A0t90 > div > div.UserInfoSection_userInfoSection__SjPRs > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > span.UserInfoSection_userInfoWrapper__gsplm.UserInfoSection_kycStatus__ygS3P > span:nth-child(2){
    color: #fff;
}
  </style>
  