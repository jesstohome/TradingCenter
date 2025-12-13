<template>
    <div class="home" id="homeTop">
        <div>
            <div class="top_bannerBg">
                <div class="bannerBg">
                    <div class="left" style="width: 100%;">
                        <div class="bannerBg_item1">
                            {{ $t('homeContent.title') }}
                        </div>
                        <div class="bannerBg_item2">
                            {{ $t('homeContent.title2') }}
                        </div>
                        <div>
                            <div class="bannerBg_item3">
                                <div>
                                    <el-button type="primary" style="height: 50px; width: 287px; border: 0px; color: white; background-color: rgb(39, 109, 255) !important;" @click="$router.push({path:'/secondDealCenter'})">{{$t('homeContent.go_to_trade')}}</el-button>
                                    <el-button type="primary" style="height: 50px; width: 187px; border: 0px; background-color: rgb(238, 238, 238) !important; color: black; margin-left: 10px !important;" @click="$router.push({path:'/download'})">{{$t('homeContent.download_the_app')}}</el-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="margin-top: 90px;">
                        <el-carousel direction="vertical" height="160px" style="background: white; border-radius: 20px; box-shadow: rgba(31, 31, 36, 0.04) 0px 10px 50px 0px;">
                            <el-carousel-item style="display: flex;">
                                <div style="width:20%"
                                @click="goTrade(item.legal_id,item.currency_id,item.legal_name,item.currency_name,item.now_price,item.change,item.volume,item.cny_price)"
                                v-for="(item,index) in quotationList.slice(0,5)" :key="index">
                                    <div style="width: 100%; height: 100%; display: flex; justify-content: space-between; padding: 36px 32px; cursor: pointer;">
                                        <div style="display: flex; flex-flow: column;">
                                            <div style="margin-bottom: 10px;">
                                                {{ item.currency_name }}/USDT
                                                <span :class="item.change<0?'red':'green'">{{
                                                    parseFloat(item.change) >= 0 ? '+' + (item.change - 0).toFixed(2) : (item.change -
                                                    0).toFixed(2)
                                                    }}%</span>
                                            </div>
                                            <div style="color: rgb(30, 35, 41); font-size: 24px; margin-bottom: 10px;">{{ parseFloat(item.now_price).toFixed(4) }}</div>
                                            <div style="color: rgb(112, 122, 138);">{{item.volume}}</div>
                                        </div>
                                    </div>
                                </div>
                            </el-carousel-item>
                            <el-carousel-item style="display: flex;">
                                <div style="width:20%"
                                @click="goTrade(item.legal_id,item.currency_id,item.legal_name,item.currency_name,item.now_price,item.change,item.volume,item.cny_price)"
                                v-for="(item,index) in quotationList.slice(5,10)" :key="index" >
                                    <div style="width: 100%; height: 100%; display: flex; justify-content: space-between; padding: 36px 32px; cursor: pointer;">
                                        <div style="display: flex; flex-flow: column;">
                                            <div style="margin-bottom: 10px;">
                                                {{ item.currency_name }}/USDT
                                                <span :class="item.change<0?'red':'green'">{{
                                                    parseFloat(item.change) >= 0 ? '+' + (item.change - 0).toFixed(2) : (item.change -
                                                    0).toFixed(2)
                                                    }}%</span>
                                            </div>
                                            <div style="color: rgb(30, 35, 41); font-size: 24px; margin-bottom: 10px;">{{ parseFloat(item.now_price).toFixed(4) }}</div>
                                            <div style="color: rgb(112, 122, 138);">{{item.volume}}</div>
                                        </div>
                                    </div>
                                </div>
                            </el-carousel-item>
                            <el-carousel-item style="display: flex;">
                                <div style="width:20%"
                                @click="goTrade(item.legal_id,item.currency_id,item.legal_name,item.currency_name,item.now_price,item.change,item.volume,item.cny_price)"
                                v-for="(item,index) in quotationList.slice(10,15)" :key="index" >
                                    <div style="width: 100%; height: 100%; display: flex; justify-content: space-between; padding: 36px 32px; cursor: pointer;">
                                        <div style="display: flex; flex-flow: column;">
                                            <div style="margin-bottom: 10px;">
                                                {{ item.currency_name }}/USDT
                                                <span :class="item.change<0?'red':'green'">{{
                                                    parseFloat(item.change) >= 0 ? '+' + (item.change - 0).toFixed(2) : (item.change -
                                                    0).toFixed(2)
                                                    }}%</span>
                                            </div>
                                            <div style="color: rgb(30, 35, 41); font-size: 24px; margin-bottom: 10px;">{{ parseFloat(item.now_price).toFixed(4) }}</div>
                                            <div style="color: rgb(112, 122, 138);">{{item.volume}}</div>
                                        </div>
                                    </div>
                                </div>
                            </el-carousel-item>
                            <el-carousel-item style="display: flex;">
                                <div style="width:20%"
                                @click="goTrade(item.legal_id,item.currency_id,item.legal_name,item.currency_name,item.now_price,item.change,item.volume,item.cny_price)"
                                v-for="(item,index) in quotationList.slice(15,20)" :key="index">
                                    <div style="width: 100%; height: 100%; display: flex; justify-content: space-between; padding: 36px 32px; cursor: pointer;">
                                        <div style="display: flex; flex-flow: column;">
                                            <div style="margin-bottom: 10px;">
                                                {{ item.currency_name }}/USDT
                                                <span :class="item.change<0?'red':'green'">{{
                                                    parseFloat(item.change) >= 0 ? '+' + (item.change - 0).toFixed(2) : (item.change -
                                                    0).toFixed(2)
                                                    }}%</span>
                                            </div>
                                            <div style="color: rgb(30, 35, 41); font-size: 24px; margin-bottom: 10px;">{{ parseFloat(item.now_price).toFixed(4) }}</div>
                                            <div style="color: rgb(112, 122, 138);">{{item.volume}}</div>
                                        </div>
                                    </div>
                                </div>
                            </el-carousel-item>
                            <el-carousel-item style="display: flex;">
                                <div style="width:20%"
                                @click="goTrade(item.legal_id,item.currency_id,item.legal_name,item.currency_name,item.now_price,item.change,item.volume,item.cny_price)"
                                v-for="(item,index) in quotationList.slice(20,25)" :key="index" >
                                    <div style="width: 100%; height: 100%; display: flex; justify-content: space-between; padding: 36px 32px; cursor: pointer;">
                                        <div style="display: flex; flex-flow: column;">
                                            <div style="margin-bottom: 10px;">
                                                {{ item.currency_name }}/USDT
                                                <span :class="item.change<0?'red':'green'">{{
                                                    parseFloat(item.change) >= 0 ? '+' + (item.change - 0).toFixed(2) : (item.change -
                                                    0).toFixed(2)
                                                    }}%</span>
                                            </div>
                                            <div style="color: rgb(30, 35, 41); font-size: 24px; margin-bottom: 10px;">{{ parseFloat(item.now_price).toFixed(4) }}</div>
                                            <div style="color: rgb(112, 122, 138);">{{item.volume}}</div>
                                        </div>
                                    </div>
                                </div>
                            </el-carousel-item>
                            <el-carousel-item style="display: flex;">
                                <div style="width:20%"
                                @click="goTrade(item.legal_id,item.currency_id,item.legal_name,item.currency_name,item.now_price,item.change,item.volume,item.cny_price)"
                                v-for="(item,index) in quotationList.slice(25,30)" :key="index">
                                    <div style="width: 100%; height: 100%; display: flex; justify-content: space-between; padding: 36px 32px; cursor: pointer;">
                                        <div style="display: flex; flex-flow: column;">
                                            <div style="margin-bottom: 10px;">
                                                {{ item.currency_name }}/USDT
                                                <span :class="item.change<0?'red':'green'">{{
                                                    parseFloat(item.change) >= 0 ? '+' + (item.change - 0).toFixed(2) : (item.change -
                                                    0).toFixed(2)
                                                    }}%</span>
                                            </div>
                                            <div style="color: rgb(30, 35, 41); font-size: 24px; margin-bottom: 10px;">{{ parseFloat(item.now_price).toFixed(4) }}</div>
                                            <div style="color: rgb(112, 122, 138);">{{item.volume}}</div>
                                        </div>
                                    </div>
                                </div>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>
            </div>
            <div style="width: 1200px; margin: 0px auto; display: flex;">
                <div style="width: 50px;">
                    <img src="@/assets/images/home-notice.png" style="width: 18px; height: 15px;">
                </div>
                <div style="width: 700px; overflow: hidden;">
                    <swiper :options="swiperOption1" class="swiper-container-vertical" style="height: 30px;">
                        <!-- slides -->
                        <swiper-slide class="swiper-item" v-for="(item,index) in noticeList" :key="index" style="display: flex; justify-content: space-between; text-align: left; height: 30px; color: black !important;">
                          <div class="roll-list" style="color: black !important;" @click="$router.push({path:'components/noticeDetail',query:{id:item.id}})">{{item.title}}</div>
                        </swiper-slide>
                        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                    </swiper>         
                </div>
                <div style="width: 450px;">
                    <div style="padding: 0px 10px; display: flex; align-items: center; justify-content: end;">
                        <img src="@/assets/images/home-up.png" style="width: 12px; height: 13px; padding-right: 5px;">
                        <span style="padding-right: 20px;">NEW:</span>
                        <div v-for="(item,index) in quotationList.filter(it=> it.change>0).slice(0,3)" :key="index" @click="goTrade(item.legal_id,item.currency_id,item.legal_name,item.currency_name,item.now_price,item.change,item.volume,item.cny_price)">
                            <img :src="item.logo" style="width: 21px; height: 21px;">
                            <span class="ml5" style="padding-right: 20px;">{{item.currency_name}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div style="height: 30px;"></div>
            <div class="mbanner bit-center-wrap" style="background-color: transparent;">
                <swiper :options="swiperOption" class="" style="height: 100%;">
                    <!-- slides -->
                    <swiper-slide class="swiper-item" v-for="(it,ind) in picitems"  :key="ind" style="display: flex; justify-content: space-between; text-align: left;  color: black !important;">
                      <div style="height:100%;display:flex">
                        <img :src="item.pic" v-for="(item,index) in pics"  :key="index" style="height: 143px; margin-top: 20px; width: 277.5px; margin-right: 30px;border-radius:10px">
                      </div>
                    </swiper-slide>
                    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                </swiper>         
            </div>
        </div>
        <div class="home-tickers bit-center-wrap">
            <div style="display: flex; justify-content: space-between; margin-bottom: 20px; align-items: center;">
                <div style="font-size: 32px; font-weight: 700;width:200px">{{$t("homeContent.popular_plates")}}</div>
                <div style="cursor: pointer;width:100px" @click="$router.push({path:'/marketQuotaion'})">
                    <i class="el-icon-arrow-right"></i>
                </div>
            </div>
            <div style="width: 100%; display: flex;">
                <div class="hot_div" @click="goTrade(item.legal_id,item.currency_id,item.legal_name,item.currency_name,item.now_price,item.change,item.volume,item.cny_price)"
                v-for="(item,index) in quotationList" :key="index" v-if="index<=3" style="width: 25%; padding: 30px; display: flex; flex-flow: column; cursor: pointer; font-weight: 400;">
                    <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
                        <div style="display: flex; align-items: center;">
                            <img :src="item.logo" style="width: 34px; height: 34px; margin: 0px 10px;">
                            <div>{{item.currency_name}}</div>
                        </div>
                        <div class="kline_flag" style="display: none;">
                            <i class="el-icon-arrow-right"></i>
                        </div>
                    </div>
                    <div style="display: flex; align-items: center; font-size: 24px;">
                        <p class="tl change " :class="item.change<0?'red':'green'"> {{
                            parseFloat(item.change) >= 0 ? '+' + (item.change - 0).toFixed(2) : (item.change -
                            0).toFixed(2)
                            }}% </p>
                        <div style="width: 100%; max-width: 150px; height: 75px;">
                            <div style="width: 100%; display: none;">
                                <chart-box :symbol="item.currency_name" :color="item.change<0?'down':'up'" :count="100" peorid="1min" width="90px" height="50px"/>
                            </div>
                            <div style="width: 100%;">
                                <chart-box :symbol="item.currency_name" :color="item.change<0?'down':'up'" :count="100" peorid="1min" width="90px" height="50px"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="home-tickers bit-center-wrap">
            <div style="display: flex; justify-content: space-between; margin-bottom: 20px; align-items: center;">
                <div style="font-size: 32px; font-weight: 700;">{{$t("homeContent.market_conditions")}}</div>
                <div style="cursor: pointer;" @click="$router.push({path:'/marketQuotaion'})">
                    <span style="margin-right: 5px; color: rgb(112, 122, 138); font-weight: 700;">{{$t("homeContent.mainstream_coins")}}</span>
                    <i class="el-icon-arrow-right"></i>
                </div>
            </div>
            <div style="width: 100%; font-weight: 400;">
                <div style="display: flex; width: 100%; padding: 19px;">
                    <div class="w20">{{ $t('homeContent.trading_pairs') }}</div>
                    <div class="w20">{{ $t('homeContent.latest_price') }}</div>
                    <div class="w20">{{ $t('homeContent.up_and_down') }}</div>
                    <div class="w20" style="text-align: center;">{{ $t('homeContent.market') }}</div>
                    <div class="w20" style="text-align: right; padding-right: 20px;">{{ $t('homeContent.trade') }}</div>
                </div>
                <div class="hqList" style="width: 100%; padding: 19px; display: flex; cursor: pointer;" @click="goTrade(item.legal_id,item.currency_id,item.legal_name,item.currency_name,item.now_price,item.change,item.volume,item.cny_price)"
                v-for="(item,index) in quotationList" :key="index" v-if="index<=5">
                    <div class="w20" style="display: flex; align-items: center;">
                        <img :src="item.logo" style="width: 34px; height: 34px;">
                        <div class="ml5">{{ item.currency_name }} / <span style="color: rgb(125, 139, 153);">USDT</span></div>
                    </div>
                    <div class="w20" :class="item.change<0?'red':'green'" style="display: flex; align-items: center;">{{ item.now_price || '0.00' |numFilters(4) }}</div>
                    <div class="w20" style="display: flex; align-items: center;"><span  :class="item.change<0?'red':'green'">{{
                        parseFloat(item.change) >= 0 ? '+' + (item.change - 0).toFixed(2) : (item.change -
                        0).toFixed(2)
                        }}%</span></div>
                    <div class="w20">
                        <div style="width: 100%;">
                            <chart-box :symbol="item.currency_name" :color="item.change<0?'down':'up'" :count="100" peorid="1min" width="232px" height="50px"/>
                        </div>
                    </div>
                    <div class="w20" style="display: flex; align-items: center; justify-content: flex-end;"><el-button>{{ $t('homeContent.trade_button') }}</el-button></div>
                </div>
            </div>
            <div class="Seemore">
                <router-link to="/marketQuotaion">{{ $t('homeContent.more') }}<i class="el-icon-arrow-right"></i></router-link>
            </div>
        </div>
        <div class="home-tickers bit-center-wrap" style="display: flex; flex-flow: column;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 40px; align-items: center;">
                <div style="font-size: 32px; font-weight: 700;">{{ $t('homeContent.beginner_bootstrapping') }}</div>
            </div>
            <div class="newPersonGuidance-tab f-ac f-fs">
                <div class="newPersonGuidance-tab--item f-ac f-fs" :class="tabIndex==0?'sed':''" @click="tabIndex=0">
                    <span class="number">1</span>
                    <label class="tips_r">{{ $t('homeContent.beginner_bootstrapping_sign_up_now') }}</label>
                </div>
                <div class="newPersonGuidance-tab--item f-ac f-fs" :class="tabIndex==1?'sed':''" @click="tabIndex=1">
                    <span class="number">2</span>
                    <label class="tips_r">{{ $t('homeContent.beginner_bootstrapping_deposit') }}</label>
                </div>
                <div class="newPersonGuidance-tab--item f-ac f-fs" :class="tabIndex==2?'sed':''" @click="tabIndex=2">
                    <span class="number">3</span>
                    <label class="tips_r">{{ $t('homeContent.beginner_bootstrapping_trade') }}</label>
                </div>
            </div>
            <div class="newPersonGuidance-left f-sb f-ac" v-if="tabIndex == 0">
                <div class="f-dc">
                    <div class="newPersonGuidance-inputMain f-ac f-fs">
                        <el-input type="text" :placeholder="$t('homeContent.beginner_bootstrapping_input')" v-model="username"></el-input>
                    </div>
                    <el-button type="primary" @click="toRegister" style="line-height: 22px; border: 0px; color: white; padding: 9px 288px; margin-bottom: 30px;">{{ $t('homeContent.beginner_bootstrapping_sign_up_now_button') }}</el-button>
                    <!-- <div class="newPersonGuidance-tips f-ac f-fs">
                        <img src="@/assets/images/home-tab.png" width="26" height="26"> 
                        {{$t("homeContent.beginner_bootstrapping_prompt").replace("{siteName}",siteConfig.site_name)}}
                    </div> -->
                </div>
                <div class="newPersonGuidance-right img-novice2">
                    <img src="@/assets/images/novice2.png" width="360" height="360">
                </div>
            </div>
            <div class="newPersonGuidance-goldInput f-ac f-sb" v-if="tabIndex==1">
                <div class="goldInput-left f-dc">
                    <div class="goldInput-title f-ac f-fs">{{ $t('homeContent.beginner_bootstrapping_buy_coins_quickly') }}</div>
                    <div class="repidBuy-main f f-dc">
                        <div class="repidLeft bx-shadow">
                            <div class="setCoinImg">
                                <img src="" width="24" alt="">
                            </div>
                            <div class="setCoinTypeSelect">
                                <el-select
                                    v-model="value2"
                                    style="width: 100%; height: 40px !important;">
                                    <el-option
                                    v-for="item in currency"
                                    :key="item"
                                    :label="item"
                                    :value="item">
                                    </el-option>
                                </el-select>
                                
                            </div>
                        </div>
                    </div>
                    <div class="f-ac" style="margin-bottom: 22px;">
                        <span class="f-ac">
                            <span aria-describedby="el-tooltip-6318" tabindex="0" class="el-tooltip goldInput-tips--img item"></span>
                        </span>
                        <span style="font-size: 14px; font-weight: 400; color: rgb(45, 46, 49);">{{$t("homeContent.beginner_bootstrapping_reference_price")}}</span>
                        <span>
                            <span style="color: rgb(30, 35, 41); font-weight: 700;">1 USDT</span> ≈ {{ fiat.rate }}{{ fiat.currency_code }} 
                        </span>
                    </div>
                    <div style="margin-bottom: 20px;">
                        <el-input placeholder="" v-model="input3">
                            <el-select v-model="select" slot="append" style="width: 120px; height: 40px !important;" @change="selectFiat">
                                <el-option
                                v-for="item in fiats"
                                :key="item.currency_code"
                                :label="item.currency_code"
                                :value="item.currency_code">
                                </el-option>
                            </el-select>
                        </el-input>
                    </div>
                    <el-button type="primary" @click="$router.push({path:'/fastTransaction'})" style="line-height: 22px; border: 0px; color: white; width: 100%;"> {{$t("homeContent.beginner_bootstrapping_buy_now_button")}} </el-button>
                </div>
                <div class="goldInput-right f-dc">
                    <div class="goldInput-rightTop f-sb f-ac rightItem-bg">
                        <div class="goldInput-right--info f-ac f-fs">
                            <img src="@/assets/images/goldInput.png" width="80" class="goldInput-right--img">
                            <div class="goldInput-right--tips f-ac f-dc">
                                <div class="inpu-bs">
                                    <label>{{$t("homeContent.beginner_bootstrapping_2nd_title")}}</label>
                                </div>
                                <div class="inpu-bs">
                                    <span>{{$t("homeContent.beginner_bootstrapping_2nd_title_desc")}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="goldInput-rightTop f-sb f-ac rightItem-bg">
                        <div class="goldInput-right--info f-ac f-fs">
                            <img src="@/assets/images/goldInput2.png" width="80" class="goldInput-right--img">
                            <div class="goldInput-right--tips f-ac f-dc">
                                <div class="inpu-bs">
                                    <label>{{$t("homeContent.beginner_bootstrapping_2nd_title_2nd")}}</label>
                                </div>
                                <div class="inpu-bs">
                                    <span>{{$t("homeContent.beginner_bootstrapping_2nd_title_2nd_desc")}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>         
            </div>
            <div class="newPersonGuidance-tran f-ac f-sb" v-if="tabIndex==2">
                <a href="javascript:void(0)">
                    <div class="newPersonGuidance-tran--item f-ac f-dc">
                        <img src="@/assets/images/home-nav1.png" width="98">
                        <label>{{ $t('homeContent.greenhorn_trade_module_first') }}</label>
                        <span>{{ $t('homeContent.greenhorn_trade_module_first_span') }}</span>
                        <div class="newPersonGuidance-tran--hover"></div>
                    </div>
                </a>
                <a href="javascript:void(0)">
                    <div class="newPersonGuidance-tran--item f-ac f-dc">
                        <img src="@/assets/images/home-nav2.png" width="98">
                        <label>{{ $t('homeContent.greenhorn_trade_module_second') }}</label>
                        <span>{{ $t('homeContent.greenhorn_trade_module_second_span') }}</span>
                        <div class="newPersonGuidance-tran--hover"></div>
                    </div>
                </a>
                <a href="javascript:void(0)">
                    <div class="newPersonGuidance-tran--item f-ac f-dc">
                        <img src="@/assets/images/home-nav3.png" width="98">
                        <label>{{ $t('homeContent.greenhorn_trade_module_third') }}</label>
                        <span>{{ $t('homeContent.greenhorn_trade_module_third_span') }}</span>
                        <div class="newPersonGuidance-tran--hover"></div>
                    </div>
                </a>
                <a href="javascript:void(0)">
                    <div class="newPersonGuidance-tran--item f-ac f-dc">
                        <img src="@/assets/images/home-nav4.png" width="98">
                        <label>{{ $t('homeContent.greenhorn_trade_module_fourth') }}</label>
                        <span>{{ $t('homeContent.greenhorn_trade_module_fourth_span') }}</span>
                        <div class="newPersonGuidance-tran--hover"></div>
                    </div>
                </a>
            </div>
            <div class="brand-wrap">
                <div class="brand-wrap-main">
                    <div class="title-wrap">
                        <p class="fir">{{ $t('homeContent.brand_title') }}</p>
                    </div>
                </div>
                <div data-wow-duration="1s" data-wow-delay="0.1s" class="wow slideInUp" style="visibility: visible; animation-duration: 1s; animation-delay: 0.1s; animation-name: slideInUp;">
                    <ul class="brand-list sp f-sb f-ac">
                        <li class="each-brand bx-shadow f-ac f-dc">
                            <div class="brand-pic">
                                <img src="@/assets/images/img-1.png" width="240" height="169">
                            </div>
                            <p class="sp">{{ $t('homeContent.brand_module_first') }}</p>
                            <p class="tips_new">{{ $t('homeContent.brand_module_first_tips') }}</p>
                        </li>
                        <li class="each-brand bx-shadow f-ac f-dc">
                            <div class="brand-pic">
                                <img src="@/assets/images/img-2.png" width="240" height="169">
                            </div>
                            <p class="sp">{{ $t('homeContent.brand_module_second') }}</p>
                            <p class="tips_new">{{ $t('homeContent.brand_module_second_tips') }}</p>
                        </li>
                        <li class="each-brand bx-shadow f-ac f-dc">
                            <div class="brand-pic">
                                <img src="@/assets/images/img-3.png" width="240" height="169">
                            </div>
                            <p class="sp">{{ $t('homeContent.brand_module_third') }}</p>
                            <p class="tips_new">{{ $t('homeContent.brand_module_third_tips') }}</p>
                        </li>
                    </ul>
                    <ul class="brand-list f-sb f-ac">
                        <li class="each-brand bx-shadow f-ac f-dc">
                            <div class="brand-pic">
                                <img src="@/assets/images/img-4.png" width="240" height="169">
                            </div>
                            <p class="sp">{{ $t('homeContent.brand_module_fourth') }}</p>
                            <p class="tips_new">{{ $t('homeContent.brand_module_fourth_tips') }}</p>
                        </li>
                        <li class="each-brand bx-shadow f-ac f-dc">
                            <div class="brand-pic">
                                <img src="@/assets/images/img-5.png" width="240" height="169">
                            </div>
                            <p class="sp">{{ $t('homeContent.brand_module_fifth') }}</p>
                            <p class="tips_new">{{ $t('homeContent.brand_module_fifth_tips') }}</p>
                        </li>
                        <li class="each-brand bx-shadow f-ac f-dc">
                            <div class="brand-pic">
                                <img src="@/assets/images/img-6.png" width="240" height="169">
                            </div>
                            <p class="sp">{{ $t('homeContent.brand_module_sixth') }}</p>
                            <p class="tips_new">{{ $t('homeContent.brand_module_sixth_tips') }}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="platform-wrap">
            <div data-wow-duration="1s" data-wow-delay="0.1s" class="platform-downLoad f-sb f-ais wow slideInUp" style="visibility: visible; animation-duration: 1s; animation-delay: 0.1s; animation-name: slideInUp;width: 1239px;
            margin: 0 auto;">
                <div class="title-wrap f-dc">
                    <p class="bim">{{ $t('homeContent.platform_wrap') }}</p>
                    <p class="wrapTips">{{ $t('homeContent.platform_wrap_tips') }}</p>
                    <div class="downLoadMain f-ac">
                        <div class="downLoadMain-left f-ac f-dc">
                            <el-popover
                                placement="right"
                                width="230"
                                style=""
                                trigger="hover"
                                class="downLoadMain-item f-ac f-fs icon_down">
                                <div style="width:200px;height:200px;margin:0 auto; ">
                                    <img
                                            style="width:100%;height:100%; max-width: 200px; object-fit: cover;"
                                            :src="'/api/qrcode?text='+siteConfig.apk_download_url"
                                            alt
                                    />
                                </div>
                                <div slot="reference" style="background-color: #4f4f56;display:flex;width:238px;height:70px">
                                    <div  class="android_icon" style="margin: auto;"></div>
                                    <label  class="downLoadMain-item--title" style="margin: auto;">{{ $t('homeContent.platform_wrap_android') }}</label>
                                </div>
                            </el-popover>
                            <el-popover
                                placement="right"
                                width="230"
                                trigger="hover"
                                class="downLoadMain-item f-ac f-fs icon_down">
                                <div style="width:200px;height:200px;margin:0 auto; ">
                                    <img
                                            style="width:100%;height:100%; max-width: 200px; object-fit: cover;"
                                            :src="'/api/qrcode?text='+siteConfig.ios_apk_download_url"
                                            alt
                                    />
                                </div>
                                <div slot="reference" style="background-color: #4f4f56;display:flex;width:238px;height:70px">
                                    <div  class="ios_icon" style="margin: auto;"></div>
                                    <label  class="downLoadMain-item--title" style="margin: auto;">{{ $t('homeContent.platform_wrap_iphone') }}</label>
                                </div>
                            </el-popover>
                        </div>
                    </div>
                </div>
                <div class="platform-img-wrap"></div>
            </div>
        </div>
        <div class="tipsMain f-ac f-c">
            <div class="tipsMain-content f-ac f-dc">
                <p class="tipsMain-content--title f-ac f-c"> {{ $t('homeContent.tipsmain_title') }}</p>
                <p class="tipsMain-content--tips f-ac f-c"> {{ $t('homeContent.tipsmain_tips').replace("{siteName}",siteConfig.site_name) }}</p>
                <div class="tipsMain-content--btnMain f-ac f-c">
                    <router-link to="/components/register">
                        <div class="tipsMain-content--btnItem f-ac f-c sed el-button--primary"> {{ $t('homeContent.tipsmain_first_btn') }} </div>
                    </router-link>
                    <router-link to="/secondDealCenter">
                        <div class="tipsMain-content--btnItem f-ac f-c"> {{ $t('homeContent.tipsmain_second_btn') }} </div>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="page-helpers-wrap zh">
            <div class="helper-wrapper-page">
                <div class="wrapper-main"></div>
                <div class="kf-helper" @click="tokf">
                    <a href="javascript:void(0)" class="el-tooltip  item" aria-describedby="el-tooltip-4383" tabindex="0" @mouseover="helper = 1" @mouseout="helper=0">
                        <i class="helper-kf">
                            <img src="@/assets/images/helper-kf1.svg" width="32" class="helper-kf1" :style="helper == 1?'display:none':'display:block'">
                            <img src="@/assets/images/helper-kf2.svg" width="32" class="helper-kf2" :style="helper != 1?'display:none':'display:block'">
                        </i>
                    </a>
                </div>
                <div class="download-helper" @click="feed = 1">
                    <a href="javascript:void(0)" class="el-tooltip  item" aria-describedby="el-tooltip-9548" tabindex="0" @mouseover="helper = 2" @mouseout="helper=0">
                        <i class="helper-lb">
                            <img src="@/assets/images/helper-lb1.svg" width="32" class="helper-lb1" :style="helper == 2?'display:none':'display:block'">
                            <img src="@/assets/images/helper-lb2.svg" width="32" class="helper-lb2" :style="helper != 2?'display:none':'display:block'">
                        </i>
                    </a>
                </div>
                <div class="notice-helper">
                    <a href="#homeTop" class="el-tooltip  item" aria-describedby="el-tooltip-324" tabindex="0" @mouseover="helper = 3" @mouseout="helper=0">
                        <i class="helper-yl">
                            <img src="@/assets/images/helper-yl1.svg" width="32" class="helper-yl1" :style="helper == 3?'display:none':'display:block'">
                            <img src="@/assets/images/helper-yl2.svg" width="32" class="helper-yl2" :style="helper != 3?'display:none':'display:block'">
                        </i>
                    </a>
                </div>
            </div>
        </div>
        <div>
            <div class="sc-eCYdqJ kjxNAO dark-background" v-if="feed>0">
                <div class="sc-jSMfEi hHbQwT">
                    <div class="sc-ksZaOG cUmOnq dark-title">{{ $t('homeContent.experience_title') }}</div>
                    <svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-gKXOVf cijEVb" @click="feed = 0">
                        <path d="M8 8L40 40" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M8 40L40 8" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </div>
                <div class="sc-iBkjds iJMXQd dark-background">
                    <div class="sc-bczRLJ hGURjE" @click="feed = 2" v-if="feed == 1">
                        <div class="sc-gsnTZi bWitGA">
                            <img src="@/assets/images/dislike_very_much_grey.png" class="sc-dkzDqf hPZYlO score-icon fcbmy">
                            <div class="sc-hKMtZM jKwalp dark-score-description">{{ $t('homeContent.experience_very_dissatisfied') }}</div>
                        </div>
                        <div class="sc-gsnTZi bWitGA">
                            <img src="@/assets/images/dislike_grey.png" class="sc-dkzDqf hPZYlO score-icon bmy">
                            <div class="sc-hKMtZM jKwalp dark-score-description">{{ $t('homeContent.experience_dissatisfied') }}</div>
                        </div>
                        <div class="sc-gsnTZi bWitGA">
                            <img src="@/assets/images/general_grey.png" class="sc-dkzDqf hPZYlO score-icon myj">
                            <div class="sc-hKMtZM jKwalp dark-score-description">{{ $t('homeContent.experience_no_comment') }}</div>
                        </div>
                        <div class="sc-gsnTZi bWitGA">
                            <img src="@/assets/images/like_grey.png" class="sc-dkzDqf hPZYlO score-icon my">
                            <div class="sc-hKMtZM jKwalp dark-score-description">{{ $t('homeContent.experience_satisfied') }}</div>
                        </div>
                        <div class="sc-gsnTZi bWitGA">
                            <img src="@/assets/images/like_very_much_grey.png" class="sc-dkzDqf hPZYlO score-icon fcmy">
                            <div class="sc-hKMtZM jKwalp dark-score-description">{{ $t('homeContent.experience_very_satisfied') }}</div>
                        </div>
                    </div>
                    <div class="sc-eCYdqJ kjxNAO dark-background" v-if="feed == 2">
                        <div class="sc-jSMfEi hHbQwT">
                            <div class="sc-ksZaOG cUmOnq dark-title">{{ $t('homeContent.experience_open_more_detail_flag') }}</div>
                            <svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-gKXOVf cijEVb" @click="feed = 0">
                                <path d="M8 8L40 40" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M8 40L40 8" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </div>
                        <div class="sc-iBkjds iJMXQd dark-background">
                            <div class="sc-papXJ edOaxJ dark-input-background">
                                <textarea :placeholder="$t('homeContent.experience_open_more_detail_input')" maxlength="500" class="sc-kDDrLX bHBUTd"></textarea>
                            </div>
                            <div class="sc-ftvSup pqfU" @click="feed = 3">{{ $t('homeContent.btn_submit') }}</div>
                        </div>
                    </div>
                    <div class="sc-eCYdqJ kjxNAO dark-background" v-if="feed == 3">
                        <div class="sc-jSMfEi hHbQwT">
                            <div class="sc-ksZaOG cUmOnq dark-title"></div>
                            <svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-gKXOVf cijEVb" @click="feed = 0">
                                <path d="M8 8L40 40" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M8 40L40 8" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </div>
                        <div class="sc-iBkjds iJMXQd dark-background">
                            <div class="sc-iqcoie RTBAf">
                                <img :src="siteConfig.down_logo" class="sc-crXcEl bQXHXb">
                                <div class="sc-evZas dRvQDN dark-title">{{ $t('homeContent.feedback_title') }}</div>
                                <div class="sc-breuTD htToRM dark-title">{{ $t('homeContent.feedback_tips') }}</div>
                                <div class="sc-ftvSup pqfU" @click="feed = 0">{{ $t('homeContent.feedback_btn') }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		<div v-if="kfview == 1" style="position: fixed;z-index: 9999;bottom: 2%;right: 2%;width: 540px;height: 680px;padding-right: 30px;padding-top: 40px;">
			<div @click="kfview = 0" style="position: absolute;right: 0;top: 0;font-size: 40px;font-weight: 100;color: #a7a7a7;cursor: pointer;">x</div>
			<iframe style="width: 100%;height: 100%;border-radius: 10px;" frameborder="0" :src="kfurl"></iframe>
		</div>
    </div>
</template>
<style lang="scss" scoped>
    .seamless-warp2 {
        overflow: hidden;
        height: 120px;
        width: 100%;

        > ul {

            li {
                float: left;
                margin-right: 10px;
            }

        }
    }

    .homecontent-currency-wrap {
        transition: all 0.2s ease-in;

        padding: 10px;
        border: 1px solid #f5f5f5;
        border-radius: 3px;

        width: 240px;
        background-repeat: no-repeat;
        background-position: bottom;
        background-size: contain;
    }

    .homecontent-currency-wrap:hover {
        border: 1px solid rgba(0, 164, 216, 0.4);
        box-shadow: 0px 0px 10px rgba(0, 164, 216, 0.3);
    }

    .info-list {
        margin: 60px auto;

        li {
            width: 25%;
            font-size: 14px;
            padding: 0 15px;
            box-sizing: border-box;

            .title {
                font-size: 18px;
                color: #181d25;
                line-height: 40px;
            }

            img {
                height: 125px;
            }
        }
    }
</style>

<script>
    import "@/assets/style/iconfont2.css";
    import "@/assets/style/iconfont.css";
    import "@/assets/style/index.css";
    import "@/assets/style/animate.min.css";
    import "swiper/css/swiper.css";
    import ChartBox from "@/view/chartBox"

    import {Swiper, SwiperSlide, directive} from 'vue-awesome-swiper'
    import vueSeamlessScroll from 'vue-seamless-scroll'

    import indexHeader from "@/view/indexHeader";
    export default {
        name: "homeContent",
        components: {
            indexHeader,
            Swiper,
            SwiperSlide,
            vueSeamlessScroll,
            ChartBox
        },
        filters: {
            numFilters: function (value, num) {
                if (!value) {
                    return '0.0000'
                }
                value = (value - 0).toFixed(parseInt(num)).toString()
                return value.slice(0) + ' '
            }
        },
        data() {
            return {
				kfview:0,
				kfurl:'',
                helper: 0,
                fiats: [],
                fiat:{},
                value2:'USDT',
                input3: '',
                select: 'USD',
                currency:["USDT"],
                picitems:[1,2,3],
                feed: 0,
                tabIndex: 0,
                siteConfig: {},
                swiperOption: {
                    loop: true,
                    speed: 1000,
                    autoplay: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    }
                },
                swiperOption1:{
                    direction: "vertical",
                    loop: true,
                    speed: 1000,
                    autoplay: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    }
                },
                showDownload: false,
                quotation: [],
                nowCoin: "",
                pics: [{url: 1}, {url: 2}],
                curSwiper: 0,
                curCoinTab: 0,
                coinTabList: [{title: "USDT行情"}, {title: "BTC行情"}],
                coinKlineList: [],
                coinKline: {},
                swiperList: [],
                bannerHeight: 540,
                bannerWidth: '',
                screenWidth: window.innerWidth,
                coinList: [],
                coin_list: [],
                noticeList: [],
                swiperImgs: [],
                footFrist: [],
                footSecond: [],
                domain: '',
                randVol: 0,
                quotationList: [],
                username: '',
                lang: 'en',
                kefu: '',
                path: "wss://www.s-coin.vip:5860/",
                wsocket: ""
            };
        },
        created() {
            // this.init(this.initKline);
            this.getQuotation();
            this.lang = window.localStorage.getItem('lang');
            let that = this;
            this.$http({
                url: '/api/getSiteConfig'
            }).then(res => {
                // console.log(res);
                that.siteConfig = res.data.message;
            })
            this.$http({
                url: '/api/cfg/kefu'
            }).then(res => {
                // console.log(res);
                that.kefu = res.data.message;
            })
            var s = JSON.parse(localStorage.getItem("fiat"))
            this.$http({
                url: "api/US"
            }).then(e=>{
                const a = ["USD", "CNY", "GBP", "HKD", "JPY", "EUR", "AED", "THB", "PHP", "SGD", "VND", "IDR", "NGN", "BRL", "INR", "MXN", "PHP"]
                    , i = e.data.message.rates;
                let n = [];
                a.forEach(t=>{
                    const e = i.find(e=>e.currency_code == t);
                    e && n.push(e)
                })
                window.localStorage.setItem("saveFiatsTime", (new Date).valueOf())
                let t = n.find(t=>t.currency_code == (s?s.currency_code:"USD"));
                t && (s = t),
                window.localStorage.setItem("fiat", JSON.stringify(s))
                that.fiat = s
                that.select = s.currency_code
                that.fiats = n
                window.localStorage.setItem("fiats", JSON.stringify(n))
            }).catch(t=>{
                console.log(t)
            })
        },
        mounted() {

            this.connect();
            this.getNews();
            this.getLunbo();
            this.initQuotation();
            this.domain = this.$utils.domain;

            let that = this;
            setInterval(res => {
                that.quotationList.push()
                // that.$refs.seamlessScroll.reset()
            }, 5000);
        },
        computed: {
            optionLeft() {
                return {
                    direction: 2,
                }
            }
        },
        methods: {
            tokf(){				
				let userinfo = window.localStorage.getItem("accountNum");
				if(userinfo){
					let kfdata = '&metadata={"name":"' + userinfo + '"}'
					//window.open(this.kefu + kfdata)
					this.kfurl = this.kefu + kfdata
				}else{
					//window.open(this.kefu)
					this.kfurl = this.kefu
				}
				this.kfview = 1
            },
            selectFiat(){
                const val = this.select
                this.fiat = this.fiats.find(e=>e.currency_code == val)
                window.localStorage.setItem("fiat", JSON.stringify(this.fiat))
            },
            toRegister() {
                this.$router.push({
                    name: "register",
                    query: {email: this.username}
                });
            },
            initQuotation() {
                var that = this;
                this.$http({
                    url: "/api/" + "currency/quotation_new",
                    method: "get",
                    data: {}
                    // headers: { Authorization: localStorage.getItem("token") }
                }).then(res => {
                    if (res.data.type == "ok") {

                        var arr = [];
                        var arr2 = [];

                        let vol = 0;
                        for (var i = 0; i < res.data.message.length; i++) {
                            for (var j = 0; j < res.data.message[i].quotation.length; j++) {
                                if(res.data.message[i].quotation[j].is_display==1){
                                    arr.push(res.data.message[i].quotation[j]);
                                    vol += parseInt(res.data.message[i].quotation[j].volume);
                                }
                            }
                        }
                        that.quotationList = arr;
                        that.randVol = ' ' + parseInt(vol) + ' ';
                        // that.marketSocket();
                    }

                })
                    .catch(error => {
                    });
            },
            connect() {
                var that = this;
                // this.wsocket = new WebSocket(this.path);
                // this.wsocket.onopen = () => {
                //     console.log('连接成功');
                //     // this.wsocket.send("login", localStorage.getItem("user_id"))
                // }

                // this.wsocket.onerror = (res) => {
                //     console.log(res);
                //     console.log('连接失败');
                // }

                // 监听socket消息
                // this.wsocket.onmessage = (msg1) => {
                //     // console.log(msg);
                //     let msg = JSON.parse(msg1.data);
                //     // console.log(msg);
                //     if (msg.type == 'daymarket') {
                //
                //         var cname = msg.symbol;
                //         var change = msg.change;
                //         var now_price = msg.now_price;
                //         var volume = msg.volume;
                //
                //         if (change < 0) {
                //             $("li[data-name='" + cname + "']")
                //                 .find("button")
                //                 .addClass('downcolor');
                //         } else {
                //             $("li[data-name='" + cname + "']")
                //                 .find("button")
                //                 .removeClass('downcolor')
                //         }
                //
                //     }
                //     if (msg.type == 'daymarket') {
                //
                //
                //         for (var i = 0; i < that.quotationList.length; i++) {
                //             if (that.quotationList[i].legal_id == msg.legal_id && that.quotationList[i].currency_id == msg.currency_id) {
                //
                //                 that.quotationList[i].now_price = msg.now_price;
                //                 that.quotationList[i].change = msg.change;
                //                 that.quotationList[i].volume = msg.volume;
                //                 that.quotationList[i].high = msg.high;
                //                 that.quotationList[i].low = msg.low;
                //
                //             }
                //         }
                //     }
                // }
                that.$socket.emit("login", localStorage.getItem("user_id"));
                that.sockets.subscribe("daymarket", msg => {
                    // console.log(msg.type);
                    if (msg.type == 'daymarket') {

                        var cname = msg.symbol;
                        var change = msg.change;
                        var now_price = msg.now_price;
                        var volume = msg.volume;

                        if (change < 0) {
                            $("li[data-name='" + cname + "']")
                                .find("button")
                                .addClass('downcolor');
                        } else {
                            $("li[data-name='" + cname + "']")
                                .find("button")
                                .removeClass('downcolor')
                        }

                    }
                    if (msg.type == 'daymarket') {


                        for (var i = 0; i < that.quotationList.length; i++) {
                            if (that.quotationList[i].legal_id == msg.legal_id && that.quotationList[i].currency_id == msg.currency_id) {

                                that.quotationList[i].now_price = msg.now_price;
                                that.quotationList[i].change = msg.change;
                                that.quotationList[i].volume = msg.volume;
                                that.quotationList[i].high = msg.high;
                                that.quotationList[i].low = msg.low;

                            }
                        }
                    }

                });
            },
            setPercent(a, b) {
                if (a - b == 0) {
                    return "0%";
                } else if (a == 0) {
                    return "-100%";
                } else if (b == 0) {
                    return "+100%";
                } else {
                    var p = ((a - b) / b / 100).toFixed(2);
                    if (p > 0) {
                        p = "+" + p + "%";
                    } else {
                        p = p + "%";
                    }
                    return p;
                }
            },
            getQuotation() {
                this.$http({
                    url: "/api/currency/quotation_new",
                    method: "get"
                }).then(res => {
                    if (res.data.type == "ok" && res.data.message.length != 0) {
                        // this.nowCoin = this.quotation[0].name;
                        var data = res.data.message;

                        this.quotation = data.find((item) => item.name == 'USDT').quotation;
                    }
                });
            },
            //去币币交易页
            goTrade(l_id, c_id, l_name, c_name, now_price, change, volume, cny_price) {
                window.localStorage.setItem('currency_id', c_id)
                window.localStorage.setItem('legal_id', l_id)
                window.localStorage.setItem('currency_name', c_name)
                window.localStorage.setItem('legal_name', l_name)
                window.localStorage.setItem('symbol', c_name + "/" + l_name)
                this.$router.push('/leverdealCenter')
            },
            getCurrent(index) {
                this.curCoinTab = index;
            },
            mouseEnter(index) {
                this.curSwiper = index;
            },
            init(callback) {
                this.$http.post("/api/" + "quotation").then(res => {
                    if (res.data.type == "ok") {
                        this.coinList = res.data.message.coin_list;
                        this.swiperList = res.data.message.coin_list;
                        callback && callback();
                    } else {
                        // layer.msg(res.message);
                    }
                });
            },

            timestampToTime(timestamp) {
                var date = new Date(timestamp);
                let Y = date.getFullYear() + "/";
                let M =
                    (date.getMonth() + 1 < 10
                        ? "0" + (date.getMonth() + 1)
                        : date.getMonth() + 1) + "/";
                let D = date.getDate() + " ";
                return Y + M + D;
            },
            // 公告
            getNews() {
                var that = this;
                this.$http.post("/api/news/list", {
                    "c_id": 4,
                    'lang': window.localStorage.getItem('lang')
                }).then(res => {
                    if (res.data.type == "ok") {
                        var list = res.data.message.list;
                        that.noticeList = list;
                    } else {
                        // layer.msg(res.message);
                    }
                });
            },
            // 轮播
            getLunbo() {
                var that = this;
                this.$http.post("/api/news/list", {
                    "c_id": 40,
                    'lang': window.localStorage.getItem('lang')
                }).then(res => {
                    if (res.data.type == "ok") {
                        var pics = [];
                        for (var i = res.data.message.list.length - 1; i >= 0; i--) {
                            var item = res.data.message.list[i];
                            pics.push({href: '', pic: item.cover})
                        }

                        that.pics = pics;
                    } else {

                    }
                });
            },
            // 公告详情
            goDetail(id) {
                var id = id;
                this.$router.push({
                    name: "noticeDetail",
                    query: {id: id}
                });
            },
            aboutUs() {
                var that = this;
                this.$http.post("/api/news/list", {"c_id": 9}).then(res => {
                    if (res.data.type == "ok") {
                        var list = res.data.message.list;
                        if (list.length > 2) {
                            that.footFrist = list;
                        } else {
                            that.footFrist = list;
                        }
                    } else {
                        // layer.msg(res.message);
                    }
                });
            },
            help() {
                var that = this;
                this.$http.post("/api/news/list", {"c_id": 10}).then(res => {
                    if (res.data.type == "ok") {
                        var list = res.data.message.list;
                        if (list.length > 2) {
                            that.footSecond = list;
                        } else {
                            that.footSecond = list;
                        }
                    } else {
                        // layer.msg(res.message);
                    }
                });
            }
        }
    };
</script>

<style lang='scss'>
    $baseYellowColor: #00a4d8;

    .ft12 {
        font-size: 12px;
    }


    .flex {
        display: flex;
        -webkit-display: flex;
        -moz-display: flex;
        -ms-display: flex;
        -o-display: flex;
    }


    .alcenter {
        -ms-flex-align: center;
        align-items: center;
    }


    .curPer, .pointer {
        cursor: pointer;
    }

    .alcenter {
        -ms-flex-align: center;
        align-items: center;
    }


    .gray {
        color: #d3dfe6;
    }

    .ft14 {
        font-size: 14px;
    }

    .iconfont {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .ml5 {
        margin-left: 5px;
    }


    .between {
        -ms-flex-pack: justify;
        justify-content: space-between;
    }

    .column {
        -ms-flex-direction: column;
        flex-direction: column;
    }


    .banner_wrap {
        background: #11102c;
        background-size: 100% 100%;
        width: 100%;
        height: 400px;
        /*padding: 3% 10%;*/
    }

    .swiper-container {
        // height: 310px;
        width: 100%;
    }

    .swiper-slide > img {
        width: 100%;
        height: 400px;
    }

    .swiper-container a {
        display: block;
        // height: 310px;
    }

    .swiper-container img {
        display: block;
        // margin-top: -50px;
        // height: 310px;
    }

    div.swiper-container .swiper-pagination > span {
        background: #fff;
        border-radius: 0;
        width: 56px;
        height: 3px;
    }

    .swiper-pagination-bullet {
        width: 56px !important;
        background-color: #00a4d8 !important;
    }

    .pur-back[data-v-bab33c70] {
        width: 100%;
        height: 64px;
        text-align: center;
        background-color: #000923;
    }

    .pur-back .pur-center[data-v-bab33c70] {
        text-align: center;
        height: 64px;
        padding: 14px 0;
        position: relative;
    }

    .pur-back .pur-center .pur-content[data-v-bab33c70] {
        text-align: center;
    }

    .pur-back .pur-center .pur-text[data-v-bab33c70] {
        height: 39px;
        text-align: right;
        padding-right: 27px;
        display: inline-block;
        vertical-align: top;
        min-width: 210px;
    }

    .pur-back .pur-center .pur-text .pur-title[data-v-bab33c70] {
        color: #fff;
        font-size: 18px;
        line-height: 1;
    }

    .pur-back .pur-center .pur-text .pur-reference[data-v-bab33c70] {
        color: #869ec9;
        font-size: 12px;
        line-height: 14px;
    }

    .pur-back .pur-center .pur-text .pur-reference .reference[data-v-bab33c70] {
        vertical-align: top;
    }


    .pur-back .pur-center .pur-text .pur-reference .reference-icon[data-v-bab33c70] {
        vertical-align: top;
        position: relative;
        margin: 1px 0 0 2px;
        cursor: pointer;
        width: 12px;
        height: 12px;
        display: inline-block;
        background-size: 12px 12px;
        /*background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJod…AxIDAgMS43MTV6IiBmaWxsPSIjODY5RUM5IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=) no-repeat 50%;*/
    }

    .pur-back .pur-center .pur-text .pur-reference .reference-icon .arrow_box[data-v-bab33c70] {
        z-index: 5;
        width: 172px;
        height: 36px;
        padding: 10px 12px;
        display: none;
        background: #fff;
        text-align: center;
        font-size: 12px;
        line-height: 16px;
        color: #596a7a;
        border-radius: 2px;
        -webkit-box-shadow: 0 2px 6px 0 rgba(0, 0, 0, .12);
        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, .12);
        position: absolute;
        top: -44px;
        left: -28px;
    }

    .pur-back .pur-center .pur-text .pur-reference[data-v-bab33c70] {
        color: #869ec9;
        font-size: 12px;
        line-height: 14px;
    }

    .pur-back .pur-center .pur-input[data-v-bab33c70] {
        height: 36px;
        position: relative;
        display: inline-block;
    }

    .pur-back .pur-center .pur-input > a {
        cursor: pointer;
    }

    .pur-back .pur-center .pur-input .select-box[data-v-bab33c70] {
        position: relative;
        z-index: 5;
        width: 160px;
        background: #fff;
        border-radius: 2px;
        -webkit-box-shadow: 0 2px 6px 0 rgba(0, 0, 0, .12);
        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, .12);
        display: inline-block;
        float: left;
        margin-right: 2px;
    }

    .pur-back .pur-center .pur-input .select-box span.BTC[data-v-bab33c70] {
        background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHhtbG5zPSJod…guNDU0eiIgZmlsbD0iI0ZBQUQxNCIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9nPjwvc3ZnPg==) no-repeat 10px;
    }

    .pur-back .pur-center .pur-input .select-box .select-btn .btn-icon[data-v-bab33c70] {
        width: 20px;
        height: 20px;
        margin: 11px 10px 0 0;
        float: right;
        background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNiIgeG1sbnM9Imh0d…QiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik02IDhsNCA0IDQtNCIvPjwvZz48L3N2Zz4=) no-repeat 5px 4px;
    }

    .pur-back .pur-center .pur-input .select-box .select-btn[data-v-bab33c70] {
        display: inline-block;
        width: 100%;
        height: 36px;
        border: none;
        cursor: pointer;
        text-align: left;
    }

    .pur-back .pur-center .pur-input .shortcut[data-v-bab33c70] {
        /*float: left;*/
        display: inline-block;
        text-align: center;
        margin-left: 2px;
        width: 122px;
        height: 36px;
        border-radius: 2px;
        color: #fff;
        font-size: 14px;
        line-height: 36px;
        -webkit-box-shadow: 0 2px 6px 0 rgba(0, 0, 0, .12);
        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, .12);
        background: #05c19e;
    }

    .pur-back .pur-center .pur-input .shortcut:hover {
        background-color: #0da88b;
    }

    .coin-tab {
        max-width: 70%;
        margin: 0 auto;
        padding: 10px 0;
        margin-bottom: 10px;
        // background: #110a5d;
        // color: #c7cce6;
        display: flex;

        > ul {
            max-width: 90%;
            display: flex;

            li {
                padding: 0 15px;
                color: #9a9eba;
                border-bottom: 1px solid #fff;
                border-right: 1px solid #ccc;
            }

            .activeCoin {
                color: #130928;
                font-weight: 900;
                z-index: 1;
            }
        }
    }

    .coins-list {
        margin: 10px auto;
        max-width: 70%;
        line-height: 51px;
        text-align: center;
        margin-top: 0;

        .list-title {
            display: flex;
            padding: 0 30px;
            background: #e8ebf6;

            > span {
                flex: 1;
                font-family: Roboto Condensed, sans-serif;
                font-size: 14px;
                font-weight: 700;
                /*line-height: 1.57;*/

                text-align: center;
                // color: #c7cce6;
                /*font-size: 14px;*/
                color: #9a9e9a;
                /*font-weight: 700;*/
            }

            > span:first-child {
                text-align: left;
            }

            > span:last-child {
                text-align: right;
            }
        }

        .list-con {
            // max-height: 400px;
            overflow-y: scroll;
            // border: 1px solid #563bd1;
            border-top: none;

            li {

                font-family: Roboto Condensed, sans-serif;
                font-size: 12px;
                font-weight: 400;
                font-style: normal;
                font-stretch: condensed;
                color: #130928;
                text-align: right;
                border-bottom: 1px solid #eee;
                cursor: pointer;
                display: flex;
                // border-top: 1px solid #ddd;
                padding: 0px 30px;
                line-height: 40px;
                // color: #c7cce6;
                &:hover {
                    background: #f1f6ff;
                }

                .high_blue {
                    color: #563BD1;
                }

                .low_blue {
                    color: #8D75F7;
                }

                img {
                    vertical-align: bottom;
                }

                > div {
                    flex: 1;
                    text-align: center;
                }

                > div:first-child {
                    text-align: left;
                }

                > div:last-child {
                    text-align: right;
                }
            }

            li:last-child {
            }
        }
    }

    .carousel .swiper-slide:hover {
        background-color: #327add;
    }

    .nav_left,
    .con_left {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .withdraw {
        margin: 0 4px;
    }

    .carousel .last a:hover {
        cursor: pointer;
    }

    .sliders {
        width: 100%;
    }

    .sliders img {
        width: 100%;
    }

    .notice_box {
        z-index: 4;
        width: 100%;
        height: 52px;
        box-sizing: border-box;
        border-top: 1px solid rgba(29, 50, 66, .7);
        margin-top: -1px;
        background-color: #f6f9fc;
        position: relative;
    }

    .notice_box .notice_list {
        width: 100%;
        font-size: 12px;
        line-height: 52px;
        overflow: hidden;
        word-break: keep-all;
        text-align: center;
    }

    .notice_box .notice_list .list {
        display: inline-block;
        box-sizing: border-box;
        position: relative;
        padding: 0 2em 0 1.5em;
        text-align: center;
    }

    .notice_box .notice_list .list :hover {
        color: #00a4d8;
    }

    .notice_box .notice_list .list:not(:first-child)::before {
        content: "/";
        position: absolute;
        left: -.5em;
        color: #1c242c;
    }

    .notice_ul {
        margin-bottom: 5px;
        background-color: rgb(246, 249, 252);
        font-size: 12px;
        line-height: 52px;
        text-align: center;
    }

    .notice_li {
        float: left;
        position: relative;
        /*（不换行） white-space: nowrap;*/
        display: block;
        float: left;
        overflow: hidden;
        word-break: keep-all;
        text-align: center;
    }

    .notice_li a {
        height: 36px;
        font-size: 12px;
        padding: 0 25px;
        letter-spacing: 1px;
    }

    .notice_li::after {
        content: "/";
        float: right;
    }

    .notice_li:last-child:after {
        content: "";
        color: #6b80ae;
    }

    .notice_a:hover {
        color: #194B64;
        cursor: pointer;
    }

    .coins li {
        position: relative;
    }

    .arrow {
        border-width: 16px;
        border-right: 8px solid transparent;
        border-left: 8px solid transparent;
        border-top: none;
        border-bottom: 8px dashed;
        position: absolute;
        bottom: 0;
        left: 50%;
        margin-left: -4px;
    }

    .coins li:hover {
        cursor: pointer;
        // background: #303e4c;
    }

    .content01 {
        padding: 40px 0;
        background: #fff;

        .imgs01 {
            width: 300px;
        }

        .imgs02 {
            width: 400px;
        }

        .imgs03 {
            width: 450px;
        }

        .imgs04 {
            width: 450px;
        }

        .imgs05 {
            width: 450px;
        }
    }

    .bg01 {
        background: url("../assets/images/content_bg01.png") center no-repeat;
        width: 100%;
        // height: 300px;
        background-size: cover;
        padding: 50px 0;
    }

    .bg02 {
        background: url("../assets/images/content_bg02.png") center no-repeat;
        width: 100%;
        background-size: cover;
        padding: 50px 0;
    }

    .login_btn {
        padding: 15px 80px;
        border: 1px solid rgba(0, 0, 0, 1);
        border-radius: 5px;
        cursor: pointer;
    }

    .register_btn {
        padding: 15px 80px;
        border-radius: 5px;
        cursor: pointer;
    }

    .go_transfer {
        padding: 50px 0;
    }

    .foot {
        padding: 50px 0;
    }

    .market_list {
        width: 100%;
        box-sizing: border-box;
        border-top: 1px solid hsla(0, 0%, 100%, .15);
        background-color: #181d25;
        color: #9eb5ca;
        height: 120px;

        li {
            padding: 0 10px;
            height: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            box-sizing: border-box;
            margin: 0px 0;
            padding: 15px 0;

            > div {

                border-right: 1px solid #242424;

                .flex {
                    p {
                        display: block;
                        line-height: 30px;
                        height: 30px;
                        //padding: 0 15px;
                        border-radius: 5px;
                        font-size: 14px;
                    }

                    p.greens {
                        //background: #0d2f32;
                    }

                    p.red {
                        //background: #3b2128;
                    }
                }

                .symbol {
                    display: block;
                    line-height: 25px;
                    height: 25px;
                    font-size: 14px;
                }

                .now_price {
                    display: block;
                    line-height: 45px;
                    height: 45px;
                    font-size: 20px;
                    margin: 0;
                }

                > p {
                    font-size: 14px;

                    span:first-child {
                        color: #477a90;
                    }
                }
            }
        }

        li:hover {
            background-color: #131313;

        }

        li:last-child {
            border-width: 0;
        }
    }


    .blue {
        color: #a8adcc;
    }

    .nowPrice {
        font-size: 20px;
        line-height: 20px;
        color: #d2d6ec;
        margin-top: 8px;

        .cny_price {
            font-size: 12px;
            line-height: 12px;
        }
    }

    .symbol {
        margin: 0;
        padding: 0;
        color: #b0b8db;
        font-size: 14px;
        line-height: 14px;
        height: 14px;
    }

    .rateup {
        font-size: 16px;
        top: 0;
        right: 0;
        font-weight: 500;
        margin: 0;
        padding-right: 15px;
        box-sizing: content-box;
    }

    .volume {
        font-size: 12px;
        line-height: 12px;
        color: #61698a;
        margin-top: 16px;

    }

    .greens {
        color: #27b054;
    }

    .feature_wrap {
        background-color: #fff;
        padding: 60px 0;
        min-width: 550px;
        text-align: center;
        color: #54748f;
        line-height: 2em;
    }

    .feature_wrap h2 {
        font-size: 28px;
        margin-bottom: 10px;
        color: #192544;
    }

    .feature_wrap .feature_list {
        padding-top: 80px;
        width: 70%;
        margin: 0 auto;
    }

    .feature_wrap .feature_list li {
        float: left;
        width: 33%;
        background: transparent none no-repeat top;
    }

    .feature_list {
        li {
            div:first-child {
                height: 61px;
            }
        }
    }

    .feature_wrap h3 {
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 10px;
        color: #192544;
    }

    .client_wrap {
        width: 100%;
        height: 710px;
        color: #9eb5ca;
        text-align: center;
        line-height: 2em;
        background-color: #fff;

        .wrap_in {
            height: 610px;
            //background-image: url('../assets/images/downbg.png');
            background-position: top center;
            background-repeat: no-repeat;
            background-color: #0b0f10;

            /deep/ .el-button {
                width: 120px;
                text-align: center;
            }

            .inner-wrap {
                max-width: 1920px;
                min-width: 1280px;
                width: 1200px;
                margin: 0 auto;
            }

            h2 {
                margin-bottom: 24px;
                color: #fff;
                font-weight: 400;
                text-align: right;
                padding-right: 50px;
                font-size: 36px;
            }

            .nextp {
                color: #9eb5ca;
                text-align: right;
                font-size: 18px;
                padding-right: 50px;
            }

            ul {
                width: 810px;
                margin: 0 auto;
                text-align: left;
                justify-content: space-around;

                li {
                    margin: 0 15px;
                    color: #9eb5ca;
                    padding: 40px 0;
                    line-height: 48px;
                    position: relative;
                    cursor: pointer;

                    p {
                        height: 48px;
                        width: 48px;
                        margin: 0 10px 0 0;
                        vertical-align: top;
                        border-radius: 50%;
                        background: rgba(53, 124, 225, .1) none no-repeat 50%;
                        background-image: url('../assets/images/ios.svg');
                    }

                    .p1 {
                        background-image: url('../assets/images/anzhuo.svg');
                    }

                    .p2 {
                    }

                    .codebox {
                        position: absolute;
                        left: 26%;
                        top: 0px;
                        -webkit-transform: translate(-50%);
                        -ms-transform: translate(-50%);
                        transform: translate(-50%);
                        -webkit-box-sizing: border-box;
                        box-sizing: border-box;
                        width: 120px;
                        // height: 130px;
                        border: 1px solid #357ce1;
                        border-radius: 2px;
                        background: #fff none no-repeat 12px 12px/96px 96px;
                        text-align: center;
                        color: #357ce1;
                        font-size: 12px;
                        line-height: 18px;
                        z-index: 6;
                        display: none;

                        img {
                            width: 100px;
                            // height: 100px;
                            margin: 0 auto;
                            display: block;
                            margin-top: 10px;
                        }
                    }
                }

                li:hover .codebox {
                    display: block;
                }
            }

            .mon_mind {
                width: 800px;
                position: relative;
                margin: 0 auto;

                > div {
                    width: 100%;

                    .pcimg {
                        width: 518px;
                        margin: 0 auto;
                    }
                }

                > div {
                    display: flex;
                    flex-direction: row;

                    .el-button {
                        border-radius: 25px;
                        padding: 12px 40px;
                    }

                    > div {
                        width: 400px;
                        display: flex;
                        align-items: center;
                        margin-bottom: 30px;

                        div:last-child {
                            display: flex;
                            flex-direction: column;
                            justify-content: start;
                            text-align: left;
                            padding-left: 20px;
                            box-sizing: border-box;

                            > p {
                                font-size: 14px;
                            }

                            > p:first-child {
                                color: #ffffff;
                                font-size: 16px;
                                font-weight: bold;
                            }
                        }
                    }
                }

                .mobimg {
                    width: 122px;
                    position: absolute;
                    right: -60px;
                    bottom: -20px;
                    width: 122px;
                    height: 253px;
                    background: #0a151e none no-repeat 50%/cover;
                    -webkit-box-shadow: -9px 12px 62px 0 rgba(36, 52, 69, .3);
                    box-shadow: -9px 12px 62px 0 rgba(36, 52, 69, .3);
                    border-radius: 16.47px;
                }
            }
        }
    }

    .register_wrap {
        height: 240px;
        width: 100%;
        border-top: 0px solid #cad7e0;
        background: #fff;

        h2 {
            color: #232a4a;
            font-size: 22px;
            line-height: 24px;
        }

        .rebox {
            margin: 32px auto 0 auto;
        }

        .input-register {
            width: 400px;
            height: 40px;
            font-size: 12px;
            color: #000;
            border: 1px solid #bdced9;
            border-radius: 2px;
            padding-left: 16px;
        }

        button {
            margin-left: 8px;
            display: inline-block;
            height: 40px;
            padding: 0 44px;
            font-size: 16px;
            min-width: 120px;
            -webkit-appearance: none;
            background-color: #00a4d8;
            color: #fff;
            border: none;
            outline: none;
            border-radius: 2px;
            cursor: pointer;
        }

        button:hover {
            opacity: .8;
        }
    }

    .block {
        display: block;
    }

</style>

<style lang="scss">
    $baseYellowColor: #00a4d8;
    .quotation_box {

        background: #fff;
        padding: 15px 50px;

        margin: 0 auto;

        .coinbox {
            min-height: 700px;
            width: 100%;
            margin: 0 auto;
            //box-shadow: 0 0px 5px #e7e6e6;
            border: 1px solid #f5f5f5;
            padding: 0 10px;

            font-size: 16px;

            .flex {
                display: flex;
            }

            .classfity {
                line-height: 40px;
                color: #9ca9b5;

                > div {
                    flex: 1;
                    display: flex;
                    justify-content: center;
                }

            }

            .coinlist {
                color: #181d25;
                border-bottom: 1px solid #eee;

                > p {
                    flex: 1;
                }

                .icon-star {
                    color: $baseYellowColor;
                }

                p {
                    line-height: 80px;
                    font-size: 18px;
                    font-family: 'Arial';
                    text-align: center;
                    display: flex;
                    justify-content: center;
                    color: #333;
                }

            }

            .coinlist:last-child {
                border-bottom-width: 0;
            }

            .hove:hover {
                background-color: #f2f6fa;
                animation: aaa 0.1s ease-in 0s 2.8 alternate;
                animation-fill-mode: forwards;
            }

            @keyframes aaa {
                from {
                    -webkit-transform: scale(1);
                    transform: scale(1);
                }
                to {
                    -webkit-transform: scale(1.03);
                    transform: scale(1.03);
                }
            }
        }

        .change span {
            width: 90px;
            display: block;

            padding: 3px 10px;

            border-radius: 5px;
            line-height: 25px;
            text-align: center;
        }

        .change.red span {
            background: rgba(239, 86, 86, .1);
        }

        .change.green span {
            background: rgba(13, 168, 139, .1);
        }

        .main_btn {
            width: 100%;
            margin: 0 auto;
            line-height: 80px;

            button {
                color: #fff;
                background-color: $baseYellowColor;
                padding: 5px 15px;
                border-radius: 5px;
                line-height: 25px;
            }
        }
    }
    .top_bannerBg {
        width: 100%;
        background: url("../assets/images/index-bg.png") #fff no-repeat;
        background-size: cover;
        background-position: 50%;
        min-height: 600px;
    }
    .bannerBg_item1 {
        font-size: 50px;
        font-weight: 600;
        color: #1e2329;
        line-height: 70px;
    }
    .bannerBg_item2 {
        line-height: 45px;
        font-size: 22px;
        margin-bottom: 30px;
    }
    .bannerBg {
        padding-top: 100px;
        height: 576px;
        width: 1200px;
        margin: 0 auto;
        background-size: cover;
    }
    .home .mbanner.bit-center-wrap {
        height: 230px;
    }
    .Seemore {
        margin: 20px auto;
        text-align: center;
        color: #276cff;
        font-weight: 700;
        font-size: 15px;
    }
    .brand-wrap-tab--item.sed .number, .brand-wrap-tab--item.sed .tips_r, .newPersonGuidance-tab--item.sed .number, .newPersonGuidance-tab--item.sed .tips_r {
        color: #fff;
    }
    .brand-wrap-tab--item .tips_r, .newPersonGuidance-tab--item .tips_r {
        font-size: 14px;
        font-weight: 400;
        color: #2d2e31;
        line-height: 20px;
    }
    .brand-wrap-tab--item.sed, .newPersonGuidance-tab--item.sed {
        background-color: #707a8a;
    }
    .brand-wrap-tab, .newPersonGuidance-tab {
        width: 100%;
        flex: 1;
        margin-bottom: 40px;
    }
    .f-fs {
        justify-content: flex-start;
        display: flex;
    }
    .f-ac {
        align-items: center;
        display: flex;
    }
    
.brand-wrap-tab,.newPersonGuidance-tab {
    width: 100%;
    flex: 1;
    margin-bottom: 40px
}

.brand-wrap-tab--item,.newPersonGuidance-tab--item {
    position: relative;
    padding: 6px 37px;
    background-color: #f7f7fa;
    cursor: pointer
}

.brand-wrap-tab--item:after,.newPersonGuidance-tab--item:after {
    position: absolute;
    right: -25px;
    content: "";
    width: 0;
    height: 0;
    border-top: 25px solid transparent;
    border-bottom: 25px solid transparent;
    border-left: 25px solid #f7f7fa
}

.brand-wrap-tab--item:nth-child(2),.newPersonGuidance-tab--item:nth-child(2) {
    left: 31px
}

.brand-wrap-tab--item:nth-child(2):before,.newPersonGuidance-tab--item:nth-child(2):before {
    position: absolute;
    left: -26px;
    content: "";
    width: 0;
    height: 0;
    border-top: 26px solid #f7f7fa;
    border-bottom: 25px solid #f7f7fa;
    border-left: 26px solid transparent
}

.brand-wrap-tab--item:last-child,.newPersonGuidance-tab--item:last-child {
    left: 61px
}

.brand-wrap-tab--item:last-child:before,.newPersonGuidance-tab--item:last-child:before {
    position: absolute;
    left: -26px;
    content: "";
    width: 0;
    height: 0;
    border-top: 26px solid #f7f7fa;
    border-bottom: 25px solid #f7f7fa;
    border-left: 26px solid transparent
}

.brand-wrap-tab--item .number,.newPersonGuidance-tab--item .number {
    font-size: 32px;
    font-weight: 500;
    color: #1e2329;
    line-height: 39px;
    margin-right: 10px
}

.brand-wrap-tab--item .tips_r,.newPersonGuidance-tab--item .tips_r {
    font-size: 14px;
    font-weight: 400;
    color: #2d2e31;
    line-height: 20px
}

.brand-wrap-tab--item.sed,.newPersonGuidance-tab--item.sed {
    background-color: #707a8a
}

.brand-wrap-tab--item.sed:after,.newPersonGuidance-tab--item.sed:after {
    border-left: 25px solid #707a8a
}

.brand-wrap-tab--item.sed:before,.newPersonGuidance-tab--item.sed:before {
    border-top: 26px solid #707a8a;
    border-bottom: 25px solid #707a8a
}

.brand-wrap-tab--item.sed .number,.brand-wrap-tab--item.sed .tips_r,.newPersonGuidance-tab--item.sed .number,.newPersonGuidance-tab--item.sed .tips_r {
    color: #fff
}
.brand-wrap-input .el-input__inner,.newPersonGuidance-input .el-input__inner {
    min-width: 640px;
    min-height: 20px;
    border-radius: 4px;
    padding: 10px;
    border: 1px solid #eaecef;
    cursor: pointer
}

.brand-wrap-input .el-input__inner:hover,.newPersonGuidance-input .el-input__inner:hover {
    border-color: #f34718
}


.brand-wrap-btn,.newPersonGuidance-btn {
    padding: 9px 288px;
    background: #f34718;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 400;
    color: #fff;
    line-height: 22px;
    margin-bottom: 30px
}

.brand-wrap-tips,.newPersonGuidance-tips {
    width: 100%;
    flex: 1;
    font-size: 14px;
    font-weight: 400;
    color: #f34718
}

.brand-wrap-tips img,.newPersonGuidance-tips img {
    margin-right: 9px
}

.brand-wrap .brand-list.sp,.newPersonGuidance .brand-list.sp {
    margin: 30px 0 40px
}

.brand-wrap .each-brand,.newPersonGuidance .each-brand {
    vertical-align: top;
    width: 374px;
    padding: 19px 0 43px;
    background-color: #fff;
    border-radius: 16px;
    border: 1px solid #eeeff3
}

.brand-wrap .each-brand .brand-pic,.newPersonGuidance .each-brand .brand-pic {
    margin-bottom: 20px
}

.brand-wrap .each-brand:first-child,.newPersonGuidance .each-brand:first-child {
    margin-left: 0
}

.brand-wrap .each-brand:hover,.newPersonGuidance .each-brand:hover {
    background: #f7f7fa;
    border-color: transparent
}

.brand-wrap .each-brand p,.newPersonGuidance .each-brand p {
    font-size: 18px;
    color: #919191
}

.brand-wrap .each-brand p.sp,.newPersonGuidance .each-brand p.sp {
    margin-bottom: 18px;
    font-size: 22px;
    font-weight: 700;
    color: #1e2329;
    padding: 0 20px;
    text-align: center
}

.brand-wrap .each-brand p.tips_new,.newPersonGuidance .each-brand p.tips_new {
    font-size: 14px;
    font-weight: 400;
    color: #1e2329;
    padding: 0 20px;
    text-align: center
}

.brand-wrap .link-btn-wrap,.newPersonGuidance .link-btn-wrap {
    margin-top: 48px
}

.brand-wrap .title-wrap p.fir,.platform-wrap .title-wrap p.fir {
    font-size: 32px;
    font-weight: 700;
    color: #1e2329;
    line-height: 45px
}
.f-sb {
    justify-content: space-between;
    display: flex;
}
.img-novice2 {
    margin-top: -220px;
}
.brand-wrap-inputMain, .newPersonGuidance-inputMain {
    margin-bottom: 30px;
}
.brand-wrap-goldInput, .newPersonGuidance-goldInput {
    width: 100%;
}
.brand-wrap-goldInput .goldInput-left, .newPersonGuidance-goldInput .goldInput-left {
    width: 590px;
    padding: 20px 30px 30px 20px;
    background: #f7f7fa;
    box-shadow: 0 10px 50px 0 rgba(31,31,36,.04);
    border-radius: 8px;
    margin-right: 20px;
}
.goldInput-title {
    font-size: 18px;
    font-weight: 700;
    color: #1e2329;
    line-height: 25px;
    margin-bottom: 20px;
}
.repidBuy-main .repidLeft {
    background: #fff;
    border-radius: 4px;
    padding: 0 0 0 10px;
    height: 40px;
    display: flex;
    align-items: center;
    margin-bottom: 13px;
    border: 1px solid #eaecef;
    overflow: hidden;
}
.repidBuy-main .repidLeft .setCoinTypeSelect {
    width: 100%;
    flex: 1;
}
.newPersonGuidance-goldInput .goldInput-right {
    width: 100%;
    flex: 1;
}
.goldInput-right .rightItem-bg {
    padding: 26px 25px 26px 10px;
    background: #f7f7fa;
    box-shadow: 0 10px 50px 0 rgba(31,31,36,.04);
    border-radius: 8px;
}
.goldInput-rightTop {
    width: 100%;
    margin-bottom: 25px;
}
.brand-wrap-tran, .newPersonGuidance-tran {
    width: 100%;
    flex: 1;
}
.brand-wrap-tran a, .newPersonGuidance-tran a {
    text-decoration: none;
    width: 23.75%;
    display: flex;
}
.brand-wrap-tran--item, .newPersonGuidance-tran--item {
    width: 100%;
    flex: 1;
    padding: 26px 0 73px;
    background: #fff;
    border-radius: 8px;
    border: 1px solid #eeeff3;
    text-align: center;
    cursor: pointer;
    position: relative;
    transition: all .35s ease-out;
}
.brand-wrap-tran--item label, .newPersonGuidance-tran--item label {
    font-size: 22px;
    font-weight: 700;
    color: #1e2329;
    line-height: 30px;
    margin: 26px 0 20px;
}
.brand-wrap-tran--item span, .newPersonGuidance-tran--item span {
    font-size: 12px;
    font-weight: 400;
    color: #1e2329;
    line-height: 17px;
    padding: 0 10px;
}
.brand-wrap-tran--hover, .newPersonGuidance-tran--hover {
    position: absolute;
    width: 27px;
    height: 27px;
    background-image: url("../assets/images/webUpdate.svg");
    background-position: 192px 0;
    bottom: 0;
    z-index: 10;
    opacity: 0;
    transition: all .35s ease-out;
}
.f-dc {
    flex-direction: column;
    display: flex;
}
.brand-wrap .brand-wrap-main, .newPersonGuidance .brand-wrap-main {
    width: 1200px;
    margin: 0 auto;
    padding: 64px 0;
}
.platform-wrap {
    height: 700px;
    padding-top: 105px;
    background: url("../assets/images/home-down-bg.png");
    background-size: 100% 100%;
    background-position: 50%;
}
.platform-img-wrap {
    width: 663px;
    height: 595px;
    background: url("../assets/images/download_img.png") no-repeat;
    background-size: 100% 100%;
    background-position: 50%;
}
.platform-wrap .title-wrap p.bim {
    font-size: 32px;
    font-weight: 700;
    padding-left: 20px;
    color: #fff;
    line-height: 32px;
    margin-bottom: 30px;
}
.platform-wrap .title-wrap {
    font-size: 40px;
    font-weight: 700;
}
.brand-wrap .title-wrap p.wrapTips, .platform-wrap .title-wrap p.wrapTips {
    font-size: 14px;
    font-weight: 400;
    padding-left: 20px;
    color: #fff;
}
.platform-wrap .platform-downLoad .downLoadMain, .platform-wrap .platform-main .downLoadMain {
    margin-top: 120px;
}
.platform-wrap .platform-downLoad .downLoadMain-left, .platform-wrap .platform-main .downLoadMain-left {
    margin-right: 20px;
}
.platform-wrap .platform-downLoad .downLoadMain-left>div, .platform-wrap .platform-main .downLoadMain-left>div {
    margin-bottom: 20px;
}
.android_icon, .ios_icon {
    width: 50px;
    height: 50px;
    background-image: url("../assets/images/webUpdate.svg");
}
.android_icon {
    background-position: -50px 0;
}
.platform-wrap .platform-downLoad .downLoadMain .downLoadMain-item, .platform-wrap .platform-main .downLoadMain .downLoadMain-item {
    padding: 10px 20px;
    font-size: 18px;
    font-weight: 500;
    color: #fff;
    line-height: 22px;
    min-width: 238px;
    margin-bottom: 20px;
}
.ios_icon {
    background-position: 0 0;
}
.tipsMain {
    width: 100%;
    flex: 1;
    padding: 80px 0;
    background: #f7f7fa;
}
.tipsMain-content {
    width: 1200px;
    margin: 0 auto;
}
.tipsMain-content--title {
    font-size: 32px;
    font-weight: 700;
    color: #1e2329;
    line-height: 45px;
    margin-bottom: 20px;
}
.tipsMain-content--tips {
    font-size: 16px;
    font-weight: 400;
    color: #1e2329;
    line-height: 22px;
    margin-bottom: 40px;
}
.tipsMain-content a:first-child {
    margin-right: 40px;
}
.tipsMain-content a {
    text-decoration: none;
}
.tipsMain-content--btnItem:last-child {
    margin-right: 0;
}
.tipsMain-content--btnItem.sed {
    color: #fff;
    background: #f34718;
}
.tipsMain-content--btnItem {
    padding: 9px 93px;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    border-radius: 4px;
    overflow: hidden;
    color: #1e2329;
    background: #eaecef;
    cursor: pointer;
}
.page-helpers-wrap {
    width: 52px;
    position: fixed;
    right: 0;
    top: calc(50vh - 100px);
    text-align: center;
    z-index: 999;
    border-radius: 16px 0 0 16px;
}
.page-helpers-wrap .helper-wrapper-page {
    position: relative;
}
.page-helpers-wrap .helper-wrapper-page .wrapper-main {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #276dff;
    opacity: .1;
    border-radius: 16px 0 0 16px;
    z-index: -1;
}
.page-helpers-wrap .helper-wrapper-page>div {
    padding: 16px 10px;
    cursor: pointer;
    color: #919191;
}
.page-helpers-wrap .helper-wrapper-page>div a {
    color: #919191;
    display: inline-block;
    height: 100%;
    width: 100%;
}
#rank-container .ant-tabs-tab, .dark-background {
    background-color: #fff!important;
}
.kjxNAO {
    width: 500px;
    background: #fff;
    border-radius: 12px;
    position: fixed;
    right: 8px;
    left: unset;
    bottom: 8px;
    z-index: 999999999;
}
.hHbQwT {
    background: linear-gradient(90deg,#39f,#2354e6);
    position: relative;
    display: flex;
    align-items: center;
    padding: 24px 80px 24px 40px;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    min-height: 36px;
}
.cUmOnq {
    min-height: 26px;
    color: #fff;
    font-size: 24px;
    line-height: 37px;
    display: flex;
    align-items: flex-end;
    word-break: break-word;
    font-weight: 700;
}
.cijEVb {
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: absolute;
    top: 18px;
    right: 18px;
}
#rank-container .ant-tabs-tab, .dark-background {
    background-color: #fff!important;
}
.hGURjE {
    display: flex;
    justify-content: center;
}
.bWitGA {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 3px;
    width: 20%;
}
.hPZYlO {
    width: 72px;
    height: 72px;
    cursor: pointer;
}
.jKwalp {
    color: #04091a;
    font-size: 14px;
    display: flex;
    align-items: center;
    text-align: center;
    flex: 1 1 0%;
    font-weight: 700;
}
.kjxNAO {
    width: 500px;
    background: #fff;
    border-radius: 12px;
    position: fixed;
    right: 8px;
    left: unset;
    bottom: 8px;
    z-index: 999999999;
}
.edOaxJ {
    position: relative;
    display: flex;
    flex-direction: column;
    border: 1px solid transparent;
    border-radius: 8px;
    padding: 12px 0 0;
    background: #f5f6fa!important;
}
.bHBUTd {
    height: 142px;
    padding: 0 12px;
    resize: none;
    font-size: 16px;
    width: 100%;
    box-sizing: border-box;
    font-weight: 700;
    line-height: 150%;
    outline: none;
    border: none;
    background: transparent!important;
    color: #000!important;
}
.gDldUK {
    font-size: 12px;
    display: flex;
    justify-content: flex-end;
    padding: 12px;
    color: #c2c4cc;
}
.pqfU {
    background: #2354e6;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    margin-top: 24px;
    border-radius: 8px;
    cursor: pointer;
    width: 100%;
}
.RTBAf {
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
}
.bQXHXb {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    position: absolute;
    top: -84px;
}
.dRvQDN {
    font-size: 24px;
    font-weight: 900;
    color: #04091a;
    margin-top: 58px;
    text-align: center;
}
.htToRM {
    font-size: 16px;
    font-weight: 400;
    color: #04091a;
    margin-top: 8px;
    margin-bottom: 26px;
    text-align: center;
}
</style>
