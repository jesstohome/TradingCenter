<template>
    <div class="nav_bar" id="mainNav" style="height: 66px; padding: 0px 40px; display: flex; align-items: center;" :style="article == 'white'?'color:#1e2329 !important;background:#fff':'color:#fff !important;background:#000'">
        <div class="second-nav new-nav" style="left: 130px;" :style="menuover==1?'display:block':''" @mouseover="over(1)" @mouseout="out()">
            <div class="nav-box flex">
                <div id="spotArea" class="nav-area-box" :style="article == 'white'?'background: #fff;color: #1e2329;border: 1px solid #eee;':'background: #1f2433;color: #fff;border: 1px solid #1f2433;'">
                    <ul class="second-ul flex">
                        <li class="base" :class="article">
                            <router-link to="/fastTransaction">
                                <img src="@/assets/images/fiat.png" class="icon1 spot-trade-icon">
                                <span class="second-li-content">
                                    <span class="second-li-title flex-vertical-center" :style="article == 'white'?'color: #1e2329':'color:#fff'">
                                        {{ $t('indexHeader.fiat_currency_transactions') }}
                                        <!-- <div class="zerofee-flag"></div> -->
                                    </span>
                                    <p class="second-li-desc" :style="article == 'white'?'color: #1e2329':'color:#989fb3'">{{ $t('indexHeader.fiat_currency_transactions_desc') }}</p>
                                </span>
                            </router-link>
                            <img src="@/assets/images/hot.svg" class="mid" width="15" height="15">
                        </li>
                        <li class="base" :class="article">
                            <router-link to="/creditCard">
                                <img src="@/assets/images/third.png" class="icon1 spot-trade-icon">
                                <span class="second-li-content">
                                    <span class="second-li-title flex-vertical-center" :style="article == 'white'?'color: #1e2329':'color:#fff'">
                                        {{ $t('indexHeader.third_party_transactions') }}
                                        <!-- <div class="zerofee-flag"></div> -->
                                    </span>
                                    <p class="second-li-desc" :style="article == 'white'?'color: #1e2329':'color:#989fb3'">{{ $t('indexHeader.third_party_transactions_desc') }}</p>
                                </span>
                            </router-link>
                            <img src="@/assets/images/hot.svg" class="mid" width="15" height="15">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="second-nav new-nav"  style="left: 250px;" :style="menuover==2?'display:block':''" @mouseover="over(2)" @mouseout="out()">
            <div class="nav-box flex">
                <div id="spotArea" class="nav-area-box" :style="article == 'white'?'background: #fff;color: #1e2329;border: 1px solid #eee;':'background: #1f2433;color: #fff;border: 1px solid #1f2433;'">
                    <ul class="second-ul flex">
                        <li class="base" :class="article">
                            <router-link to="/dealCenter">
                                <img src="@/assets/images/xianhuo.svg" class="icon1 spot-trade-icon">
                                <span class="second-li-content">
                                    <span class="second-li-title flex-vertical-center" :style="article == 'white'?'color: #1e2329':'color:#fff'">
                                        {{ $t('indexHeader.spot_trading') }}
                                        <div class="zerofee-flag"></div>
                                    </span>
                                    <p class="second-li-desc" :style="article == 'white'?'color: #1e2329':'color:#989fb3'">{{ $t('indexHeader.desc') }}</p>
                                </span>
                            </router-link>
                            <img src="@/assets/images/hot.svg" class="mid" width="15" height="15">
                        </li>
                        <li class="base" :class="article">
                            <router-link to="/accountNewPage">
                                <img src="@/assets/images/shandui.png" class="icon1 spot-trade-icon">
                                <span class="second-li-content">
                                    <span class="second-li-title flex-vertical-center" :style="article == 'white'?'color: #1e2329':'color:#fff'">
                                        {{ $t('indexHeader.exchange') }}
                                        <div class="zerofee-flag"></div>
                                    </span>
                                    <p class="second-li-desc" :style="article == 'white'?'color: #1e2329':'color:#989fb3'">{{ $t('indexHeader.exchange_desc') }}</p>
                                </span>
                            </router-link>
                            <img src="@/assets/images/hot.svg" class="mid" width="15" height="15">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="second-nav new-nav"  style="left: 350px;" :style="menuover==3?'display:block':''" @mouseover="over(3)" @mouseout="out()">
            <div class="nav-box flex">
                <div id="spotArea" class="nav-area-box" :style="article == 'white'?'background: #fff;color: #1e2329;border: 1px solid #eee;':'background: #1f2433;color: #fff;border: 1px solid #1f2433;'">
                    <ul class="second-ul flex">
                        <li class="base" :class="article">
                            <router-link to="/leverdealCenter">
                                <img src="@/assets/images/xianhuo.svg" class="icon1 spot-trade-icon">
                                <span class="second-li-content">
                                    <span class="second-li-title flex-vertical-center" :style="article == 'white'?'color: #1e2329':'color:#fff'">
                                        {{ $t('indexHeader.u_standard_contracts') }}
                                        <div class="zerofee-flag"></div>
                                    </span>
                                    <p class="second-li-desc" :style="article == 'white'?'color: #1e2329':'color:#989fb3'">{{ $t('indexHeader.u_standard_contracts_desc') }}</p>
                                </span>
                            </router-link>
                            <img src="@/assets/images/hot.svg" class="mid" width="15" height="15">
                        </li>
                        <li class="base" :class="article">
                            <router-link to="/secondDealCenter">
                                <img src="@/assets/images/shandui.png" class="icon1 spot-trade-icon">
                                <span class="second-li-content">
                                    <span class="second-li-title flex-vertical-center" :style="article == 'white'?'color: #1e2329':'color:#fff'">
                                        {{ $t('indexHeader.option') }}
                                        <div class="zerofee-flag"></div>
                                    </span>
                                    <p class="second-li-desc" :style="article == 'white'?'color: #1e2329':'color:#989fb3'">{{ $t('indexHeader.option_desc') }}</p>
                                </span>
                            </router-link>
                            <img src="@/assets/images/hot.svg" class="mid" width="15" height="15">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="second-nav new-nav"  style="left: 430px;" :style="menuover==4?'display:block':''" @mouseover="over(4)" @mouseout="out()">
            <div class="nav-box flex">
                <div id="spotArea" class="nav-area-box" :style="article == 'white'?'background: #fff;color: #1e2329;border: 1px solid #eee;':'background: #1f2433;color: #fff;border: 1px solid #1f2433;'">
                    <ul class="second-ul flex">
                        <li class="base" :class="article">
                            <router-link to="/mx-defi">
                                <img src="@/assets/images/staking.png" class="icon1 spot-trade-icon">
                                <span class="second-li-content">
                                    <span class="second-li-title flex-vertical-center" :style="article == 'white'?'color: #1e2329':'color:#fff'">
                                        {{ $t('indexHeader.staking_mining') }}
                                        <!-- <div class="zerofee-flag"></div> -->
                                    </span>
                                    <p class="second-li-desc" :style="article == 'white'?'color: #1e2329':'color:#989fb3'">{{ $t('indexHeader.staking_mining_desc') }}</p>
                                </span>
                            </router-link>
                            <img src="@/assets/images/hot.svg" class="mid" width="15" height="15">
                        </li>
                        <li class="base" :class="article">
                            <router-link to="/structured_financial">
                                <img src="@/assets/images/financial.png" class="icon1 spot-trade-icon">
                                <span class="second-li-content">
                                    <span class="second-li-title flex-vertical-center" :style="article == 'white'?'color: #1e2329':'color:#fff'">
                                        {{ $t('indexHeader.currency_banking') }}
                                        <!-- <div class="zerofee-flag"></div> -->
                                    </span>
                                    <p class="second-li-desc" :style="article == 'white'?'color: #1e2329':'color:#989fb3'">{{ $t('indexHeader.currency_banking_desc') }}</p>
                                </span>
                            </router-link>
                            <img src="@/assets/images/hot.svg" class="mid" width="15" height="15">
                        </li>
                        <li class="base" :class="article">
                            <router-link to="/startup">
                                <img src="@/assets/images/startup.png" class="icon1 spot-trade-icon">
                                <span class="second-li-content">
                                    <span class="second-li-title flex-vertical-center" :style="article == 'white'?'color: #1e2329':'color:#fff'">
                                        {{ $t('indexHeader.sgd_subscription') }}
                                        <!-- <div class="zerofee-flag"></div> -->
                                    </span>
                                    <p class="second-li-desc" :style="article == 'white'?'color: #1e2329':'color:#989fb3'">{{ $t('indexHeader.sgd_subscription_desc') }}</p>
                                </span>
                            </router-link>
                            <img src="@/assets/images/hot.svg" class="mid" width="15" height="15">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="content" style="height: 48px; width: 100%; position: relative; font-weight: bold;">
            <div class="fl" v-if="siteConfig">
                <router-link class="nav-list-a" to="/">
                    <img :src="head_logo" class="navbar-logo"
                         style="width: 146px;">
                </router-link>
            </div>
            <ul class="navbar-item fl mouseDefault ml10">
                <li class="base">
                    <router-link to="/marketQuotaion"  :style="article == 'white'?'color:#1e2329':'color:#fff'">{{ $t('indexHeader.market') }}</router-link>
                </li>
                <li class="base">
                    <a href="javascript:void(0)"
                    @mouseover="over(1)"
                    @mouseout="out()" style="align-items: center;"  :style="article == 'white'?'color:#1e2329':'color:#fff'">
                        {{ $t('indexHeader.buy_coins') }}
                        <img src="@/assets/images/arrowup.svg" width="16" height="16" v-if="menuover == 1">
                        <img src="@/assets/images/arrowdown.svg" width="16" height="16" v-else>
                    </a>
                </li>
                <li class="base">
                    <a href="javascript:void(0)"
                    @mouseover="over(2)"
                    @mouseout="out()" style="align-items: center;"  :style="article == 'white'?'color:#1e2329':'color:#fff'">
                        {{ $t('indexHeader.trade') }}
                        <img src="@/assets/images/arrowup.svg" width="16" height="16" v-if="menuover == 2">
                        <img src="@/assets/images/arrowdown.svg" width="16" height="16" v-else>
                    </a>
                </li>
                <li class="base">
                    <a href="javascript:void(0)"
                    @mouseover="over(3)"
                    @mouseout="out()" style="align-items: center;"  :style="article == 'white'?'color:#1e2329':'color:#fff'">
                        {{ $t('indexHeader.contract') }}
                        <img src="@/assets/images/arrowup.svg" width="16" height="16" v-if="menuover == 3">
                        <img src="@/assets/images/arrowdown.svg" width="16" height="16" v-else>
                    </a>
                </li>
                <li class="base">
                    <a href="javascript:void(0)"
                    @mouseover="over(4)"
                    @mouseout="out()" style="align-items: center;"  :style="article == 'white'?'color:#1e2329':'color:#fff'">
                        {{ $t('indexHeader.finance') }}
                        <img src="@/assets/images/arrowup.svg" :style="article == 'white'?'color:#1e2329':'color:#fff'"  width="16" height="16" v-if="menuover == 4">
                        <img src="@/assets/images/arrowdown.svg" width="16" height="16" v-else>
                    </a>
                </li>
                <li class="base">
                    <router-link to="/bonus" style="align-items: center;"  :style="article == 'white'?'color:#1e2329':'color:#fff'"><img src="@/assets/images/ljl.gif"
                        style="width: 22px; height: 22px;">{{ $t('indexHeader.receive') }}</router-link>
                </li>
            </ul>


            <div class="fr" v-if="false" style="height: 100%; align-items: center; display: flex;">
                <i :class="night_mode?'el-icon-sunny':'el-icon-moon'"></i>
                <el-switch
                        style="display: block"
                        v-model="night_mode"
                        :active-value="1"
                        :inactive-value="0"
                        @change="changeMode"
                        active-color="#024093"
                        inactive-color="#dcdfe6">
                </el-switch>
            </div>
            <div class="fr" style="margin-right: -5px;">
                <div class="account-box f2 positionR curPer flex">
                    <div class="msg_wrap">
                        <div class="account_login flex alcenter fl" style="margin-right: 0;"
                             @mouseover="over_lang"
                             @mouseout="out_lang">
                            <p class="flex alcenter chooselang-wrap">

                                <i class="iconfont ml10 mr5 icon-duoguoyuyan"></i>
                                <span class="mr5">{{ lang_text }}</span>
                                <i class="iconfont icon-zhankai"
                                   :class="{'open':showLangMore,'close':!showLangMore}"></i>
                            </p>
                        </div>
                        <div style="display: flex; align-items: center; position: relative;">
                            <router-link to="/message">
                                <img src="@/assets/images/msg.svg" width="16" height="16">
                            </router-link>
                        </div>
                    </div>
                    <div class="lang-choose mine ft14 fColor4" :class="article" @mouseover="over_lang" @mouseout="out_lang" :style="article == 'white'?'background: #fff;color: #1e2329;border: 1px solid #eee;':'background: #1f2433;color: #fff;border: 1px solid #1f2433;'">
                        <p class="flex alcenter curPer" style="flex-direction: row;" v-for="(item,index) in langArr"
                           :key="index"
                           @click="set_lang(item.src,item.text,item.lang)">

                            <svg style="width: 20px; height: 20px; border-radius:50%; margin-right: 10px;">
                                <use style="font-size: 12px;" v-if="item.lang=='zh'" xlink:href="#icon-zhongwen1"></use>
                                <use v-if="item.lang=='jp'" xlink:href="#icon--riyu"></use>
                                <use v-if="item.lang=='spa'" xlink:href="#icon-xibanya"></use>
                                <use v-if="item.lang=='hk'" xlink:href="#icon-hong_kong__easyiconnet"></use>
                                <use v-if="item.lang=='kr'" xlink:href="#icon-hanyu1"></use>
                                <use v-if="item.lang=='en'" xlink:href="#icon-yingyu1"></use>
								<use v-if="item.lang=='vi'" xlink:href="#icon-yuenan"></use>
                            </svg>

                        <span class="flex1">
                            {{ item.text }}</span>
                        </p>
                    </div>
                </div>
            </div>

            <!-- <div class="fr flex ml10" v-if="showDownload" style="justify-content: center">
                <el-popover
                        placement="top-start"
                        :title="$t('scan')"
                        width="200"
                        trigger="hover"
                        content="">
                    <img
                            style="width:100%;height:100%; max-width: 200px; object-fit: cover;"
                            :src="`/api/qrcode?text=`+siteConfig.down"
                            alt
                    />
                    <i class="iconfont icon-xiazaiapp curPer fColor1" slot="reference"></i>
                </el-popover>
            </div> -->

            <!-- <div v-if="showCustomer" class="fr flex ml10 curPer fColor1 custom-service">
                <i class="iconfont icon-weibiaoti- curPer "></i>
                <span class="ml5 ft14 mr5" @click="showDown">{{ $t('indexHeader.complaint_suggestion') }}</span>
            </div> -->
            
            <div class="fr flex" style="height: 100%;">
                <div class="account-box fl positionR curPer flex">
                    <div class="msg_wrap" style="height: 100%;"
                    v-if="account_number.length>0">
                        <div  align="center" class="flex alcenter chooselang-wrap iconS" style="height: 100%; margin: 0px; padding: 0px 10px;" @mouseover="order_over"
                        @mouseout="order_out">
                            <svg  width="18" height="18" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style="" v-if="!show2">
                                <path  fill-rule="evenodd" clip-rule="evenodd" d="M17.982 11.9689L31.7846 4L36.397 11.9889L17.982 11.9689Z" :stroke="article == 'black'?'white':'black'" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path  d="M4 14C4 12.8954 4.89543 12 6 12H42C43.1046 12 44 12.8954 44 14V42C44 43.1046 43.1046 44 42 44H6C4.89543 44 4 43.1046 4 42V14Z" fill="none" :stroke="article == 'black'?'white':'black'" stroke-width="4" stroke-linejoin="round"></path>
                                <path  d="M35.25 33H44V23H35.25C32.3505 23 30 25.2386 30 28C30 30.7614 32.3505 33 35.25 33Z" fill="none" :stroke="article == 'black'?'white':'black'" stroke-width="4" stroke-linejoin="round"></path>
                                <path  d="M44 16.5V40.5" stroke="black" stroke-width="4" stroke-linecap="round"></path>
                            </svg>
                            <svg  width="18" height="18" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style="" v-if="show2">
                                <path  fill-rule="evenodd" clip-rule="evenodd" d="M17.982 11.9689L31.7846 4L36.397 11.9889L17.982 11.9689Z" stroke="#276dff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path  d="M4 14C4 12.8954 4.89543 12 6 12H42C43.1046 12 44 12.8954 44 14V42C44 43.1046 43.1046 44 42 44H6C4.89543 44 4 43.1046 4 42V14Z" fill="none" stroke="#276dff" stroke-width="4" stroke-linejoin="round"></path>
                                <path  d="M35.25 33H44V23H35.25C32.3505 23 30 25.2386 30 28C30 30.7614 32.3505 33 35.25 33Z" fill="none" stroke="#276dff" stroke-width="4" stroke-linejoin="round"></path><path  d="M44 16.5V40.5" stroke="#276dff" stroke-width="4" stroke-linecap="round"></path>
                            </svg>
                        </div>
                        <div class="flex alcenter chooselang-wrap iconS" style="height: 100%; margin: 0px; padding: 0px 10px;" @mouseover="mine_over"
                        @mouseout="mine_out">
                            <svg width="18" height="18" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"  v-if="!show3">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" :stroke="article == 'black'?'white':'black'" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M24 23C26.7614 23 29 20.7614 29 18C29 15.2386 26.7614 13 24 13C21.2386 13 19 15.2386 19 18C19 20.7614 21.2386 23 24 23Z" fill="none" :stroke="article == 'black'?'white':'black'" stroke-width="4" stroke-linejoin="round"></path>
                                <path d="M10.022 38.332C10.3657 33.1206 14.7016 29 20 29H28C33.2914 29 37.6229 33.1097 37.9767 38.3113" :stroke="article == 'black'?'white':'black'" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            <svg width="18" height="18" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"  v-if="show3">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" stroke="#276dff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M24 23C26.7614 23 29 20.7614 29 18C29 15.2386 26.7614 13 24 13C21.2386 13 19 15.2386 19 18C19 20.7614 21.2386 23 24 23Z" fill="none" stroke="#276dff" stroke-width="4" stroke-linejoin="round"></path>
                                <path d="M10.022 38.332C10.3657 33.1206 14.7016 29 20 29H28C33.2914 29 37.6229 33.1097 37.9767 38.3113" stroke="#276dff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </div>
                    </div>
                    <div  class="account-choose mine ft14" :class="article" v-show="show2"  :style="article == 'white'?'background: #fff;color: #1e2329;border: 1px solid #eee;':'background: #1f2433;color: #fff;border: 1px solid #1f2433;'" @mouseover="order_over"
                    @mouseout="order_out">
                        <p  class="curPer" @mouseover="hover=1" @mouseout="hover=0" @click="$router.push({path:'/change'})">
                            <img  src="@/assets/images/head-order2.png" style="height: 15px;width:15px;" :style="hover==1?'display:block':'display:none'">
                            <img  src="@/assets/images/head-order1.png" style="height: 15px;width:15px" :style="hover!=1?'display:block':'display:none'">
                            <span >{{$t("indexHeader.my_Assets")}}</span>
                        </p>
                        <p  class="curPer" @mouseover="hover=2" @mouseout="hover=0" @click="$router.push({path:'/UOrder'})">
                            <img  src="@/assets/images/head-order4.png" style="height: 15px;width:15px" :style="hover==2?'display:block':'display:none'">
                            <img  src="@/assets/images/head-order3.png" style="height: 15px;width:15px" :style="hover!=2?'display:block':'display:none'">
                            <span >{{$t("uorder.order_center")}}</span>
                        </p>
                    </div>
                    <div  class="account-choose mine ft14"  :class="article" :style="article == 'white'?'background: #fff;color: #1e2329;border: 1px solid #eee;':'background: #1f2433;color: #fff;border: 1px solid #1f2433;'" v-show="show3" @mouseover="mine_over"
                    @mouseout="mine_out">
                        <p  class="curPer" @mouseover="hover=3" @mouseout="hover=0" @click="$router.push({path:'/accountSet'})">
                            <img  src="@/assets/images/head-order2.svg" :style="hover==3?'display:block':'display:none'">
                            <img  :src="require(article == 'white'?'@/assets/images/head-order1.svg':'@/assets/images/head-order22.svg')" :style="hover!=3?'display:block':'display:none'">
                            <span >{{$t("accountSet.personal_center")}}</span>
                        </p>
                        <p  class="curPer" @mouseover="hover=4" @mouseout="hover=0" @click="$router.push({path:'/transferLog'})">
                            <img  src="@/assets/images/head-order4.svg" :style="hover==4?'display:block':'display:none'">
                            <img  :src="require(article == 'white'?'@/assets/images/head-order3.svg':'@/assets/images/head-order42.svg')" :style="hover!=4?'display:block':'display:none'">
                            <span >{{$t("accountSet.authentication")}}</span>
                        </p>
                        <p  class="curPer" @mouseover="hover=5" @mouseout="hover=0" @click="$router.push({path:'/transferSet'})">
                            <img  src="@/assets/images/head-order6.svg" :style="hover==5?'display:block':'display:none'">
                            <img  :src="require(article == 'white'?'@/assets/images/head-order5.svg':'@/assets/images/head-order62.svg')" :style="hover!=5?'display:block':'display:none'">
                            <span >{{$t("accountSet.wallet_settings")}}</span>
                        </p>
                        <!-- <p  class="curPer" @mouseover="hover=6" @mouseout="hover=0" @click="$router.push({path:'/invitation'})">
                            <img  src="@/assets/images/head-order8.svg" :style="hover==6?'display:block':'display:none'">
                            <img  :src="require(article == 'white'?'@/assets/images/head-order7.svg':'@/assets/images/head-order82.svg')" :style="hover!=6?'display:block':'display:none'">
                            <span >{{$t("other.invitation_rebate")}}</span>
                        </p> -->
                        <p  class="curPer" @click="loginOut" @mouseover="hover=7" @mouseout="hover=0">
                            <img  src="@/assets/images/head-order10.svg" :style="hover==7?'display:block':'display:none'">
                            <img  :src="require(article == 'white'?'@/assets/images/head-order9.svg':'@/assets/images/head-order102.svg')" :style="hover!=7?'display:block':'display:none'">
                            <span >{{$t("indexHeader.log_out")}}</span>
                        </p>
                    </div>
                    <!-- <div class="order-choose ft14 fColor1" v-if="show2" @mouseover="order_over"
                            @mouseout="order_out">
                        <p class="curPer" v-for="(item,index) in orderList" :key="index"
                            @click="goto(null,item.page)">
                            <img :src="item.src1" alt="">
                            <img :src="item.src2" alt="">
                            <span>{{ item.title }}</span>
                        </p>
                    </div> -->
                    <!-- <div class="account-choose mine ft14 fColor1" v-show="show3" @mouseover="mine_over"
                            @mouseout="mine_out">
                        <p class="curPer" v-for="(item,index) in accountList" :key="index"
                            @click="goto(null,item.page)">
                            <i class="iconfont mr5 " :class="item.icon"></i>
                            <span>{{ item.title }}</span>
                        </p>
                        <p class="curPer" @click="loginOut">
                            <i class="iconfont mr5 icon-tuichudenglu"></i>
                            <span>{{ $t('indexHeader.log_out') }}</span>
                        </p>
                    </div> -->
                </div>
                <div class="fl login iconS" v-if="account_number.length<=0" style="padding-right: 10px;">
                    <router-link :to="{ name: 'login'}">
                        <span style="border: 1px solid rgb(238, 238, 238);font-size: 14px; padding: 4px 25px; border-radius: 5px; transition: all 0.2s ease 0s;" :style="article == 'white'?'color:#1e2329':'color:#fff'">{{ $t('indexHeader.log_in') }}</span>
                    </router-link>
                    <router-link :to="{ name: 'register'}">
                        <span class="ml20" style="border: 1px solid rgb(39, 109, 255); color: white; background-color: rgb(39, 109, 255); font-size: 14px; padding: 4px 25px; border-radius: 5px; transition: all 0.2s ease 0s;">{{ $t('indexHeader.sign_up') }}</span>
                    </router-link>
                </div>
                <div  class="flex alcenter chooselang-wrap iconS" style="height: 100%; margin: 0px; padding: 0px 10px;" @click="$router.push('/download')">
                    <svg  width="18" height="18" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style="">
                        <path  fill-rule="evenodd" clip-rule="evenodd" d="M23.9999 29.0001L12 17.0001L19.9999 17.0001L19.9999 6.00011L27.9999 6.00011L27.9999 17.0001L35.9999 17.0001L23.9999 29.0001Z" fill="none" :stroke="article == 'black'?'white':'black'" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path  d="M42 37L6 37" :stroke="article == 'black'?'white':'black'" stroke-width="4" stroke-linecap="round"></path>
                        <path  d="M34 44H14" :stroke="article == 'black'?'white':'black'" stroke-width="4" stroke-linecap="round"></path>
                    </svg>
                    <svg  width="18" height="18" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: none;">
                        <path  fill-rule="evenodd" clip-rule="evenodd" d="M23.9999 29.0001L12 17.0001L19.9999 17.0001L19.9999 6.00011L27.9999 6.00011L27.9999 17.0001L35.9999 17.0001L23.9999 29.0001Z" fill="none" stroke="#276dff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path  d="M42 37L6 37" stroke="#276dff" stroke-width="4" stroke-linecap="round"></path>
                        <path  d="M34 44H14" stroke="#276dff" stroke-width="4" stroke-linecap="round"></path>
                    </svg>
                </div>
            </div>
        </div>
    </div>

</template>
<script>


    export default {
        name: "indexHeader",
        data() {
            return {
				head_logo:'',
                article: 'black',
                hover:0,
                menuover: 0,
                showIEO: showIEO,
                currency:plat_form_currency,
                showDownload: true,
                showCustomer: showCustomer,
                domain: '',
                appshow: false,
                address: "",
                night_mode: 0,
                account_number: "",
                assets: this.$t('indexHeader.assets'),
                orders: this.$t('indexHeader.orders'),
                isShow: false,
                show1: false,
                show2: false,
                show3: false,
                current: 0,
                extension_code: "",
                tabList: [],
                showUserMore: false,
                showLangMore: false,
                custorm_url: '',
                siteConfig:{},
                accountList: [
                    {
                        src1: require("@/assets/images/z0.png"),
                        src2: require("@/assets/images/z1.png"),
                        icon: 'icon-shezhi',
                        title: this.$t('security.accountset'),
                        page: "accountSet"
                    },
                    {
                        src1: require("@/assets/images/icon_news.png"),
                        src2: require("@/assets/images/icon_news_s.png"),
                        icon: 'icon-jiaoyijilu1',
                        title: this.$t('indexHeader.tradelog'), //"交易日志",
                        page: "transferLog"
                    },
                    {
                        src1: require("@/assets/images/icon_mine.png"),
                        src2: require("@/assets/images/icon_mine_s.png"),
                        icon: 'icon-icon',
                        title: this.$t('security.idcard'),
                        page: 'authentication',
                    },
                ],
                assetstList: [],
                orderList: [],
                langArr: [
                    {
                        src: require('@/assets/images/en.png'),
                        text: this.$t('lang.en'),
                        lang: 'en'
                    },
                    {
                        src: require('@/assets/images/zh.png'),
                        text: this.$t('lang.zh'),
                        lang: 'zh'
                    },
                    {
                        src: require('@/assets/images/zh.png'),
                        text: this.$t('lang.hk'),
                        lang: 'hk'
                    },
                    {
                        src: require('@/assets/images/han.png'),
                        text: this.$t('lang.kr'),
                        lang: 'kr'
                    },
                    {
                        src: require('@/assets/images/jp.png'),
                        text: this.$t('lang.jp'),
                        lang: 'jp'
                    },
                    {
                        src: require('@/assets/images/spa.png'),
                        text: this.$t('lang.spa'),
                        lang: 'spa'
                    },
					{
					    src: require('@/assets/images/vi.png'),
					    text: this.$t('lang.vi'),
					    lang: 'vi'
					},
                    // {
                    //     src: require('@/assets/images/jp.png'),
                    //     text: this.$t('lang.de'),
                    //     lang: 'de'
                    // },
                    // {
                    //     src: require('@/assets/images/jp.png'),
                    //     text: this.$t('lang.fra'),
                    //     lang: 'fra'
                    // },
                    // {
                    //     src: require('@/assets/images/jp.png'),
                    //     text: this.$t('lang.it'),
                    //     lang: 'it'
                    // }
                ],
                lang_img: require('@/assets/images/en.png'),
                lang_text: this.$t('lang.en')
            };
        },
        filters: {
            hideFour: function (value) {
                value = value.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
                return value;
            }
        },
        created() {
			this.head_logo = localStorage.getItem('head_logo')
            let night_mode = localStorage.getItem('night_mode');
            if (night_mode == null) {
                localStorage.setItem('night_mode', 0);
            }
            night_mode = night_mode == null ? 0 : night_mode;
            this.night_mode = parseInt(night_mode);
            console.log(typeof night_mode, typeof this.night_mode);
            this.address = localStorage.getItem("token") || "";
            var lang = localStorage.getItem('locale');
            this.$cookies.set('lang', lang)   //return this

            this.lang_text = this.$t('lang.'+lang);


        },
        mounted() {
            this.article = 'black'
            if(this.$route.path == '/' 
            || this.$route.path == '/components/login'
            || this.$route.path == '/components/register'
            || this.$route.path == '/message'
            || this.$route.path == '/deposit'
            || this.$route.path == '/letransactions'
            || this.$route.path == '/modifyPassword'
            || this.$route.path == '/change'
            || this.$route.path == '/finance'
            || this.$route.path == '/fiat'
            || this.$route.path == '/withdrawDeposit'
            || this.$route.path == '/UOrder'
            ){
                this.article = 'white'
            }
            let that = this;
            this.$http({
                url: '/api/getSiteConfig'
            }).then(res => {
                that.siteConfig = res.data.message;
				if(!that.head_logo){
					that.head_logo = res.data.message.site_pc_logo
				}
            })
            this.account_number = localStorage.getItem('accountNum') || '';
            this.extension_code = localStorage.getItem('extension_code') || '';
            this.is_seller = window.localStorage.getItem("is_seller") || "";
            this.domain = this.$utils.domain;
            if (this.is_seller == 1) {
                this.isShow = false;
            }
            this.menuover = 0
            eventBus.$on("seller", msg => {
                if (msg) {
                    this.is_seller = window.localStorage.getItem("is_seller") || "";
                    if (this.is_seller == 1) {
                        this.isShow = true;
                    }
                }
            });
            this.bus.$on("nav_name", name => {
                this.current = this.tabList.findIndex(
                    val =>
                        val.page === name || (val.children && val.children.includes(name))
                );
                // console.log(this.current);
            });
			if(!localStorage.getItem('locale')){
				this.set_lang(this.langArr[0].src, this.langArr[0].text, this.langArr[0].lang)
				var lang = this.$cookies.get('lang');		
						
				this.lang_text = this.$t('lang.'+lang);
			}
            // this.$http({
            //     url: '/api/custorm'
            // }).then(res => {
            //     // console.log(res);
            //     that.custorm_url = res.data.replace('{id}', localStorage.getItem('user_id', 1)).replace('{name}', localStorage.getItem('accountNum', 'anymouse'));
            // })
        },
        methods: {
            over(item){
                this.menuover = item

            },
            out(){
                this.menuover = 0
            },
            showDown() {
                if (this.custorm_url.length <= 0) {
                    this.$message.info('Please set customer address first');
                } else {
                    window.open(this.custorm_url);
                }
            },
            changeMode(e) {
                console.log(e);
                localStorage.setItem('night_mode', e);
                location.reload();
            },
            set_lang(img, text, lang) {
                this.lang_img = img;
                this.lang_text = text;
                $('.lang-choose').css('display', 'none');
                var l = window.localStorage.getItem("locale") || "zh";
                if (l == lang) {
                    return;
                } else {
                    window.localStorage.setItem("locale", lang);
                    this.$i18n.locale = lang;
                    var templang = lang;
                    if (lang == 'kr') {
                        var templang = 'kr';
                    } else if (lang == 'jp') {
                        var templang = 'jp';
                    } else if (lang == 'hk') {
                        var templang = 'hk';
                    }
                    window.localStorage.setItem('lang', templang);
                    window.location.reload();
                }
            },
            over_lang() {
                this.showLangMore = true;
                $('.lang-choose').css('display', 'block')
            },
            out_lang() {
                this.showLangMore = false;
                $('.lang-choose').css('display', 'none')
            },
            candy() {
                layer.msg(this.$t('lay.notopen'))
            },
            noopen() {
                layer.msg(this.$t('lay.notopen'))
            },
            getNotice() {
                this.$http({
                    url: '/api/news/list',
                    method: 'get',
                    data: {language: this.$i18n.locale == 'zh' ? 1 : 2, c_id: 21}
                }).then(res => {
                    this.noticeList = res.data.message.list;
                })
            },
            setLang(lang) {
                var l = window.localStorage.getItem("locale") || "zh";
                if (l == lang) {
                    return;
                } else {
                    window.localStorage.setItem('locale', lang);
                    this.$i18n.locale = lang;
                    this.$cookies.set('lang', lang);
                    var templang = lang;
                    if (lang == 'han') {
                        var templang = 'kr';
                    } else if (lang == 'jp') {
                        var templang = 'jp';
                    } else if (lang == 'hk') {
                        var templang = 'hk';
                    }
                    window.localStorage.setItem('lang', templang);
                    window.location.reload();
                }
            },
            showapp() {
                this.appshow = !this.appshow
            },
            goto(index, name) {
                this.current = index;
                // console.log(index, name);

                this.bus.$emit('nav_name', name);
                if (name == 'userSetting') {
                    this.$router.push('/userSetting')
                } else {
                    this.$router.push({name: name});
                }
            },
            gotoAccount(index, name) {
                // this.current = index;
                // console.log(index, name);
                this.bus.$emit('nav_name', name);
                this.$router.push({name: name});
            },
            loginOut() {
                // console.log("out");
                localStorage.removeItem("token");
                localStorage.removeItem("accountNum");
                //localStorage.clear();
                this.$router.push({name: 'login'});
            },
            assets_over() {
                this.show1 = true;
            },
            assets_out() {
                this.show1 = false;
            },
            order_over() {
                this.show2 = true;
                this.showUserMore = true;
            },
            order_out() {
                this.show2 = false;
                this.showUserMore = false;
            },
            mine_over() {
                this.show3 = true;
                this.showUserMore = true;
            },
            mine_out() {
                this.show3 = false;
                this.showUserMore = false;
            }
        }
    };
</script>
<style scoped lang='scss'>

    $baseYellowColor: #00a4d8;
    .fr {
        .icon-xiazaiapp {
            font-size: 18px;
            margin-top: 0px;
        }

        .icon-xiazaiapp:hover {
            color: $baseYellowColor;
        }
    }

    .custom-service:hover {
        color: $baseYellowColor;
    }

    .mr5 {
        margin-right: 5px;
    }

    .mr10 {
        margin-right: 10px;
    }

    .nav-list-a {
        display: flex;
        height: 48px;
        flex-direction: row;
        align-items: center;
    }

    .fr {
        .el-icon-sunny {
            color: #f39049;
            margin: 0 12px;
        }

        .el-icon-moon {
            color: #d5b433;
            margin: 0 12px;
        }
    }

    .day .nav_bar {
        background: #fff;
    }
    .icon-zhankai {
        transition: all 0.2s;
        font-size: 14px;
    }

    .icon-zhankai.open {
        transform: scale(.9) rotate(450deg) !important;
    }

    .icon-zhankai.close {
        transform: scale(.9) rotate(180deg) !important;
    }

    .chooselang-wrap:hover, .account_login:hover {
        color: $baseYellowColor;
    }

    .nav_bar {
        line-height: 48px;
        height: 49px;
        width: 100%;
        min-width: 1200px;
        padding: 0 20px;
        color: #1e2329;
        background-color: #fff;
        border-bottom-color: transparent;
        position: sticky;
        top: 0;
        z-index: 9999;

        .base {
            a {
                display: flex;
                box-sizing: border-box;
            }

        }

        .login {
            font-size: 14px;

            a:hover {
                color: $baseYellowColor;
            }
        }

        .content {
            width: 1200px;
            margin: 0 auto;
        }

        .msg_wrap {
            display: flex;
            align-items: center;

            > div {
                margin: 0 10px;
            }
        }

        .icon_img {
            width: 15px;
        }

        .assets_icon_img,
        .order_icon_img {
            width: 20px;
            height: 20px;
        }

        .sp {
            line-height: normal;
            margin: 0 4px;
        }

        .navbar-logo {
            vertical-align: middle;
        }

        .account_login,
        .assets_item,
        .order_item {
            // width: 100px;
            font-size: 14px;
        }

        .assets_item,
        .order_item {
            height: 48px;
            display: flex;
            align-items: center;
        }

        .lang-choose {
            display: none;
            cursor: default;
            position: absolute;
            top: 48px;
            right: -44px;
            z-index: 999;
            width: 188px;
            line-height: 40px;
            z-index: 5000;
            border-radius: 3px;
            box-shadow: 0 0 2px 4px rgba(0, 0, 0, 0.2);

            p {
                padding-left: 20px;

                img {
                    width: 14px;
                    vertical-align: middle;
                    margin-right: 8px;
                    display: inline-block;
                }

                img:nth-child(2) {
                    display: none;
                }
            }

            p:hover img:nth-child(2) {
                display: inline-block;
            }
        }

        .account-choose {
            cursor: default;
            position: absolute;
            top: 48px;
            right: -44px;
            z-index: 999;
            width: 188px;
            line-height: 40px;
            z-index: 5000;
            border-radius: 3px;
            box-shadow: 0 0 2px 4px rgba(0, 0, 0, 0.2);

            p {
                padding-left: 20px;

                img {
                    width: 14px;
                    vertical-align: middle;
                    display: inline-block;
                    margin: auto 8px;
                }

                img:nth-child(2) {
                    display: none;
                }
            }

            p:hover {
                color: #00a4d8;
                background-color: rgba(242, 246, 250, .7) !important
            }

            p:hover img:nth-child(2) {
                display: inline-block;
            }

            p:hover img:nth-child(1) {
                display: none;
            }
        }

        .asset-choose {
            // display: none;
            cursor: default;
            position: absolute;
            top: 48px;
            right: 156px;
            width: 188px;
            line-height: 40px;
            background-color: #262a42;
            z-index: 5000;
            border-radius: 3px;
            box-shadow: 0 0 2px 4px rgba(0, 0, 0, 0.2);

            p {
                padding-left: 20px;

                img {
                    width: 14px;
                    vertical-align: middle;
                    margin-right: 8px;
                    display: inline-block;
                }

                img:nth-child(2) {
                    display: none;
                }
            }

            p:hover {
                color: #5697f4;
                background-color: #181b2a;
            }

            p:hover img:nth-child(2) {
                display: inline-block;
            }

            p:hover img:nth-child(1) {
                display: none;
            }
        }

        .order-choose {
            // display: none;
            cursor: default;
            position: absolute;
            top: 48px;
            right: 56px;
            width: 188px;
            line-height: 40px;
            background-color: #262a42;
            z-index: 5000;
            border-radius: 3px;
            box-shadow: 0 0 2px 4px rgba(0, 0, 0, 0.2);

            p {
                padding-left: 20px;

                img {
                    width: 14px;
                    vertical-align: middle;
                    margin-right: 8px;
                    display: inline-block;
                }

                img:nth-child(2) {
                    display: none;
                }
            }

            p:hover {
                color: #5697f4;
                background-color: #181b2a;
            }

            p:hover img:nth-child(2) {
                display: inline-block;
            }

            p:hover img:nth-child(1) {
                display: none;
            }
        }
        
        .navbar-item {
            color: #cdd6e4;

            li {
                float: left;
                height: 48px;
                line-height: 48px;
                padding: 0 11px;
                display: block;
                text-align: center;
                font-size: 14px;
                cursor: pointer;
                color: #1e2329;

                &.active {
                    color: #00a4d8;
                    border: none;
                }
            }
        }

        .login {
            color: #cdd6e4;

            span {
                cursor: pointer;
            }

            .ml20 {
                margin-left: 20px;
            }
        }
    }

    .downapp {
        position: relative;

        .appcode {
            position: absolute;
            top: 50px;
            z-index: 10;
            left: -80px;
            width: 260px;
            background-color: #fff;
            height: 140px;
            border-radius: 4px;

            span {
                position: absolute;
                top: -20px;
                left: 130px;
                display: inline-block;
                width: 0;
                height: 0;
                border-width: 10px;
                border-style: solid;
                border-color: transparent transparent #fff transparent;
            }

            .app-left {
                width: 130px;
                float: left;
                text-align: center;
                position: relative;

                .code {
                    position: relative;
                    top: 5px;
                    left: 10px;

                    img {
                        width: 100px;
                        height: 100px;
                    }

                    p:last-child {
                        position: absolute;
                        bottom: 0;
                    }
                }
            }

            .app-right {
                float: right;
                width: 110px;
                text-align: center;
                margin-right: 10px;
                padding-right: 10px;
                margin-top: 5px;

                p {
                    top: -10px;

                    img {
                        width: 20px;
                        position: relative;
                        top: 4px;
                        margin-top: 0;
                    }
                }

                img {
                    width: 40px;
                    margin-top: 30px;
                }

                b {
                    display: block;
                    width: 100px;
                    height: 100px;
                    border: 1px solid #f7f6f6;
                    text-align: center;
                    top: 0;
                    border-radius: 4px;
                }
            }

            .texts {
                position: relative;
                top: -30px;
                color: #333;
            }

        }
    }

    .register_btn {
        border: 1px solid #00a4d8;
        padding: 0 16px;
        line-height: 28px;
        border-radius: 2px;
        font-size: 14px;
    }

    .register_btn:hover {
        background-color: #00a4d8;
        color: #fff;
    }
    .nav_bar .login {
        color: #cdd6e4;
    }
    .nav_bar .login {
        font-size: 14px;
    }
    .iconS {
        cursor: pointer;
        position: relative;
    }
    .fl {
        float: left;
    }
    .flex {
        display: flex;
    }
    .nav_bar .navbar-item {
        color: #cdd6e4;
    }
    .fColor1 {
        color: #c7cce6;
    }
    .fr {
        float: right;
    }
    .second-nav {
        position: absolute;
        top: 50px;
        color: #333;
        display: none;
        border-radius: 8px;
        box-sizing: border-box;
        margin-bottom: 0;
        z-index: 9999;
    }
    #spotArea {
        width: 310px;
    }
    .second-ul {
        flex-direction: column;
        padding: 0px;
    }
    #spotArea li {
        position: relative;
    }
    #mainNav .second-ul>li>span, #mainNav .second-ul a, body#mainNav .second-ul .second-li {
        color: var(--colorFont1);
        padding: 10px;
        display: flex;
        align-items: center;
        width: 100%;
        text-align: left;
        min-height: 64px;
    }
    #mainNav a {
        font-size: 14px;
    }
    .second-nav li a, .second-nav li em {
        width: 100%;
        min-height: 24px;
        padding: 10px 0;
        display: block;
        color: #d8e6e7;
        font-style: normal;
        text-align: center;
        box-sizing: border-box;
    }
    #c2cArea .second-ul .second-li-content, #derivativeArea .second-ul .second-li-content, #spotArea .second-ul .second-li-content {
        margin-top: 2px;
        display: inline-block;
    }
    #spotArea .second-ul .second-li-content .second-li-divide, #spotArea .second-ul .second-li-content {
        width: 100%;
    }
    .second-ul .second-li, .second-ul a span {
        font-size: 14px;
        font-family: Gate_Sans;
        font-weight: 400;
    }
    .second-li-content {
        position: relative;
        z-index: 1;
        width: 100%;
    }
    .second-ul .second-li .second-li-desc, .second-ul a p {
        font-size: 12px;
        line-height: 18px;
        color: #8d93a6;
        font-weight: 400;
        margin-bottom: 0;
    }
    .icon1 {
        width: 30px;
        height: 30px;
    }
    .base{
        display: flex;
    }
    
    .zerofee-flag {
        background-image: url("../assets/images/zero.png");
        background-size: 100%;
        width: 44px;
        height: 24px;
        margin-left: 4px;
        display: inline-block;
    }
    .mid {
        margin: auto;
    }
    .mine{
        background-color: #fff;
    }
    .mine .curPer{
        display: flex;
    }
    .mine .curPer:hover{
        background-color: #eee;
        color: #276dff;
    }
</style>

