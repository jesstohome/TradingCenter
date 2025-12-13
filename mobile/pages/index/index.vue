<template>
	<view>
		<scroll-view>
			<view  style="overflow-y:auto;height: 1500rpx;">
				
				<view class="d-flex py-24" style="height: 50px; z-index: 99; width: 100%; display: flex; top: 0px; padding-left: 19px; padding-right: 19px; right: 0px; position: fixed; background: rgb(242, 246, 247);">
					<!-- 我的 -->
					<image :src="headimage" class="mr-20" style="width: 31px; height: 31px;" :draggable="false" @click="showMinePop = true"></image>
					<view style="display: flex; justify-content: right; flex: 1 1 0%;">
						<view class="search d-flex align-items-center" style="background-color: white; border-radius: 20px; width: 70%; padding: 2px 10px; align-items: center; border: 0px;">
							<u-icon name="search" size="38" style="margin-right: 5px; color: rgb(150, 154, 155);"></u-icon>
							<input type="text" style="width: 85%; color: white !important;" :placeholder="$t('common.search')"  @click="showSelectCoin=true">
						</view>
						<!-- <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#969a9b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 10px;" @click="$utils.jump('/pages/kf/kf')">
							<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
							<path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
						</svg> -->
						<div style="position: relative;">
							<svg width="25" height="25" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 10px;" @click="$utils.jump('/pages/mailMessage/mailMessage')">
								<path d="M24 4C16.268 4 10 10.268 10 18V38H38V18C38 10.268 31.732 4 24 4Z" fill="none"></path>
								<path d="M10 38V18C10 10.268 16.268 4 24 4C31.732 4 38 10.268 38 18V38M4 38H44" stroke="#969a9b" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
								<path d="M24 44C26.7614 44 29 41.7614 29 39V38H19V39C19 41.7614 21.2386 44 24 44Z" fill="none" stroke="#969a9b" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
							</svg>
						</div>
						<svg width="25" height="25" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 10px;" @click="showLanguage=true">
							<path d="M24 44.0002C35.0457 44.0002 44 35.0459 44 24.0002C44 12.9545 35.0457 4.00024 24 4.00024C12.9543 4.00024 4 12.9545 4 24.0002C4 35.0459 12.9543 44.0002 24 44.0002Z" stroke="#969a9b" stroke-width="3"></path>
							<path d="M6 30.9856C8.63192 32.041 10.5266 32.041 11.6839 30.9856C13.4199 29.4025 11.9219 24.5978 14.3532 23.2727C16.7844 21.9476 20.4886 27.8214 23.9508 25.8887C27.4129 23.9559 23.6246 18.8023 26.0272 16.713C28.4298 14.6237 31.554 16.98 32.1001 13.4865C32.6462 9.99304 29.5521 11.5082 28.9584 8.20693C28.5625 6.00611 28.5625 4.84884 28.9584 4.73511" stroke="#969a9b" stroke-width="3" stroke-linecap="round"></path>
							<path d="M29.0209 43.3505C27.1468 41.4325 26.4721 39.6497 26.9969 38.0019C27.7841 35.5303 29.0826 35.6764 29.6488 34.1482C30.2149 32.6199 28.6156 30.4433 32.1643 28.5826C34.5301 27.3421 37.783 28.7794 41.9228 32.8944" stroke="#969a9b" stroke-width="3" stroke-linecap="round"></path>
						</svg>
					</view>
				</view>
				<view class="home">
					
					<view style="border-top-left-radius: 10px; border-top-right-radius: 10px;">
						
						<view class="pb-10 pt-45  px-36 " style="margin-top: 44rpx;">
							<view class="" style="display: flex;justify-content: space-between;margin: 18rpx 0;">
								<image :src="$store.state.logo" class="d-block" mode="aspectFit" style="width:200rpx;height:64rpx;"></image>
								<image :src="kefuimage" @click="$utils.jump('/pages/kf/kf')" style="width: 60rpx;height: 60rpx;"></image>
							</view>
							
							<swiper :indicator-dots="false" :autoplay="true" :interval="4000" style="height: 280rpx;">
								<swiper-item v-for="item in swiper" >
									<image :src="item.image" class="border-radius-20" style="width: 100%;height: 280rpx;" mode="aspectFill"></image>
								</swiper-item>
							</swiper>
						</view>
						<view class="mt-12 border-radius-20  px-36 ">
							<u-notice-bar mode="vertical" :list="news" bg-color="transparent" color="black" border-radius="20" :duration="3000" @click="$utils.jump('/pages/mailMessage/mailMessage')">
							</u-notice-bar>
						</view>
					</view>
					<view>
						<swiper style="height: 312rpx;" class="bg-black-new  px-36 text-white box-shadow border-radius-20 mt-20" :autoplay="false" :indicator-dots="true" :indicator-active-color="$downColor">
							<swiper-item v-for="(el,index) in homeNav">
								<view class="py-10  border-radius-20" style="height: 312rpx;background-color: white;">
									<view class="d-flex flex-wrap">
										<view v-for="item in homeNav[index]" @click="homeNavJump(item.url,item.open_type)"
											class="w-25 text-center py-22" :key="item.icon">
											<image :src="`../../static/image/icon/${item.icon}.png`" class="d-block mx-auto" style="width: 46rpx;height: 46rpx;" mode="">
											</image>
											<text class="d-block font-size-22 mt-16">{{item.name}}</text>
										</view>
									</view>
								</view>
							</swiper-item>
							<data-loading v-if="!homeNav.length"></data-loading>
						</swiper>
					</view>
					<view class="mt-22 px-36" style="background-color: white; border-top-left-radius: 20rpx; border-top-right-radius: 20rpx;">
						<!-- 快捷买币 -->
						<view style="position: relative;" @click="$utils.jump('/pages/fund/select?url=receive')">
							<image class="mt-22" style="width: 100%; height: 160rpx;" src="../../static/img/home-recharge.png">
							</image>
							<view class="d-flex align-items-center" style="position: absolute; top: 20rpx; left: 10rpx;">
								<image src="../../static/img/consumeOne.svg" style="width: 156rpx; height: 156rpx;"></image>
								<view class="ml-30" style="color: rgb(34, 34, 34);">
									<text class="d-block font-size-32" style="font-weight: bold;">{{i18n.quicklyBuyCoins}}</text>
									<text class="d-block font-size-22 mt-10 opacity-50">{{$t("common.quickly") + ' ' + $t("common.buy")}} USDT</text>
								</view>
							</view>
						</view>
						<swiper style="height: 220rpx;" :acceleration="true" :display-multiple-items="3" :indicator-dots="false"
							:autoplay="false" :circular="false">
							<swiper-item v-for="(item,index) in quotation.filter(it=>active==1?it.market_from==1:it.market_from!=1).slice(0,10)">
								<navigator class="high-quality-project-item text-left overflow-hidden w-100 pt-40" style="box-sizing: border-box;" open-type="reLaunch"
							:url="`/pages/transaction/index?from=index&currency_name=${item.currency_name}&legal_name=${item.legal_name}&currency_id=${item.currency_id}`">
									<view class="text-center">
										<text class="font-size-32 d-block ">{{item.currency_name + '/' + item.legal_name}}</text>
										<text class="d-block font-size-28 mt-6" :style="{color:$utils.getColor(item.change)}">{{item.change + '%'}}</text>
										<text class="d-block font-size-44 font-weight-bold mt-6 " :style="{color:$utils.getColor(item.change)}" style="overflow: hidden;text-overflow: ellipsis;">{{item.now_price}}</text>
									</view>
								</navigator>
							</swiper-item>
						</swiper>
					</view>
					<view class="market">
						<view class="box-shadow text-white bg-black-new  px-36" style="background-color: white;">
							<view class="py-10" style="border-bottom: 1px solid rgba(0, 0, 0, 0.05); border-top: 1px solid rgba(0, 0, 0, 0.05);">
								<text class="py-10" :style="active==2?'border-bottom: 1px solid rgb(39, 109, 255);':''" @click="active=2">HOT</text>
								<text class="py-10 ml-60" :style="active==1?'border-bottom: 1px solid rgb(39, 109, 255);':''" @click="active=1">{{$t('common.green_energy')}}</text>
							</view>
							<view class="title d-grid justify-content-between font-size-22 mt-22" style="grid-template-columns: 1.2fr 1.2fr 0.8fr;">
								<view class="d-flex align-items-center a6abaf">
									<text>{{i18n.tradingPair}}</text>
								</view>
								<view class="d-flex align-items-center justify-content-center a6abaf">
									<text>{{i18n.lastPrice}}</text>
								</view>
								<view class="d-flex align-items-center justify-content-end a6abaf">
									<text>{{i18n.todayChange}}</text>
								</view>
							</view>
							
							<navigator class="market-item" v-for="item in quotation.filter(it=>it.market_from==active).slice(0,5)" open-type="reLaunch"
								:url="`/pages/transaction/index?from=index&currency_name=${item.currency_name}&legal_name=${item.legal_name}&currency_id=${item.currency_id}`">
								<view class="left">
									<view class="d-block d-flex align-items-center">
										<image :src="'/static/image/svg/'+item.currency_name+'.svg'" style="width: 40rpx; height: 40rpx;"></image>
										<text class="font-size-28 font-weight-bold d-block" style="margin-left: 10rpx;">
											{{item.currency_name}}
										</text>
										<text class="font-size-22  d-block">
											/{{item.legal_name}}
										</text>
									</view>
									<text class="d-block font-size-22 a6abaf">24H: {{item.volume}}</text>
								</view>
								<view class="center">
									<text class="d-block font-size-28 font-weight-bold"
										:style="{color:$utils.getColor(item.change)}">{{item.now_price}}</text>
									<text class="d-block font-size-22" v-if="$store.state.fiat.currency_code != 'USD'">
										{{(item.now_price * $store.state.fiat.rate).toFixed(2)}} {{$store.state.fiat.currency_code}}
									</text>
									
								</view>
								<view class="right" :style="{backgroundColor:$utils.getColor(item.change)}">
									{{item.change + '%'}}
								</view>
							</navigator>
							<view class="d-flex align-items-center" style="justify-content: center; align-items: center; padding: 20rpx 0px;" @click="$utils.jump('/pages/market/market','switchTab')">
								<text class="font-size-22 a6abaf" style="vertical-align: middle;">
									{{$t("common.more")}}
								</text>
								<text class="iconfont icon-gengduo1 ml-10 font-size-22 a6abaf" style="margin-top: 10rpx;">
								</text>
							</view>
						</view>
					</view>
					
					<!-- #ifdef H5 -->
					<view class="index-download box-shadow" v-if="showDownload && !hasClickDown">
						<image :src="$store.state.down_logo" style="width: 80rpx;height: 80rpx;border-radius: 20rpx;"></image>
						<view class="flex-1 ml-20">
							<text class="d-block font-weight-bold font-size-32">{{$store.state.site_name}} APP</text>
							<text class="d-block mt-10">{{i18n.app_text}}</text>
						</view>
						<button @click="$utils.jump('/pages/download/download')" class="warning-button py-0 px-30 font-size-26 text-white ml-20" style="background: rgb(255, 255, 255) !important;">{{i18n.download}}</button>
						<u-icon name="close" class="close ml-20" @click="showDownloadf()"></u-icon>
					</view>
					<!-- #endif -->
					<view class="mt-22" style="color: black !important;">
						<view class="d-flex justify-content-between align-items-center  px-36">
							<view class="d-flex">
								<view class="home-title-item text-primary" style="color: black;">
									<text>{{i18n.lockming}}</text>
								</view>
							</view>
							<view class="d-flex align-items-center" @click="$utils.jump('/pages/lockming/welcome')">
								<text class="font-size-22 a6abaf">{{$t("common.more")}}</text>
								<text class="iconfont icon-gengduo1 ml-10 a6abaf" style="position: relative;top: .5px;"></text>
							</view>
						</view>
						<view class="mt-20  high-quality-project" >
							<view>
								<view style="position: relative;" v-for="(item,index) in lockming.slice(0,2)">
									<view class="high-quality-project-item" @click="jump2Lockming(item)">
										<text class="hige-quality-project-sskc">{{item.day + i18n.day}}</text>
										<view style="display: flex; justify-content: space-between; padding: 20rpx; align-items: center; height: 100%;">
											<view>
												<view style="display: flex; flex-flow: column;">
													<view class="mx-auto border-radius-50per d-flex align-items-center justify-content-center" style="width: 72rpx; height: 72rpx;" :style="{backgroundColor:$utils.getCurrencyColor(item.currency_name)}">
														<text class="iconfont font-size-48 text-white" :class="`icon-${item.currency_name}`" ></text>
													</view>
													<text class="d-block font-size-28 mt-2" style="color: black;">{{item.intro}}</text>
												</view>
											</view>
											<view style="display: flex; flex-flow: column;">
												<text class="d-block font-size-40 text-error font-weight-bold" style="height:72rpx">{{Number(item.interest_rate)+'%'}}</text>
												<text class="d-block font-size-28 mt-2" style="color: black;">{{i18n.dailyReturnRate}}</text>
											</view>
											<view style="display: flex; flex-flow: column;">
												<text class="d-block font-size-28" style="height:72rpx;color: black;">{{Number(item.save_min) + item.currency_name + i18n.minimum}}</text>
												<text class="d-block font-size-28 mt-2" style="color: black;">{{$t('transaction.jine')}}</text>
											</view>
										</view>
									</view>
								</view>
							</view>
						</view>
						<view class="d-flex px-36  justify-content-between align-items-center mt-22">
							<view class="d-flex">
								<view class="home-title-item active text-primary" style="color: black;">
									{{i18n.copytrade}}
								</view>
							</view>
							<view class="d-flex align-items-center" @click="$utils.jump('/pages/follow/index')">
								<text class="font-size-22 a6abaf">{{$t("common.more")}}</text>
								<text class="iconfont icon-gengduo1 ml-10 a6abaf" style="position: relative;top: .5px;"></text>
							</view>
						</view>
						<view class="new_footer  pb-90-new" @click="$utils.jump('/pages/follow/index')">
							<view class="new_footer_1" style="position: relative;">
								<view style="color: rgb(34, 34, 34); font-size: 30rpx;">
									{{i18n.bottom_title}}
								</view>
								<view style="color: rgb(112, 129, 159); margin-top: 10rpx; width: 75%; font-size: 24rpx;">
									{{i18n.bottom_title_desc}}
								</view>
								<view style="position: absolute; bottom: 40rpx;">
									<button style="background-color: rgb(42, 84, 255); color: white; font-size: 24rpx;">{{i18n.bottom_button}}</button>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
		<view class="tab-bar">
			<view :class="'tab-bar-item' + (navActive==index?' router-link-active':'') " v-for="(item,index) in nav" @click="toNav(index)">
				<view :class="'tab_img' + (navActive==index?' tab_img_select':'') ">
					<image :src="'/static/image/nav/nav-'+(index+1)+(navActive==index?'-active':'')+'.svg'"></image>
				</view>
				<view class="tab_text" :style="navActive==index?'color: rgb(39, 109, 255)':''">
					{{item}}
				</view>
			</view>
		</view>

		<!-- 导航 -->
		<!-- <view class="mt-24 position-relative" style="z-index: 1;">
			<view class="d-flex align-items-center text-white" style="opacity: .3;">
				<text class="mr-16">{{i18n.totalAssetsEquivaleng}}</text>
				<text class="mr-26">({{$store.state.fiat.currency_code}})</text>
				<text class="iconfont icon-yanjing_xianshi" style="position: relative;top: 4rpx;"></text>
			</view>
			<view class="d-flex justify-content-between text-white align-items-center mt-6">
				<text class="font-size-56">{{(convert * $store.state.fiat.rate).toFixed(2)}}</text>
				<text class="iconfont icon-gengduo1"></text>
			</view>
			
			
		</view> -->

		<!-- 所有行情列表 -->
		<u-popup v-model="showSelectCoin" mode="right" length="100%" contentBackgroundColor="#fff"
			:mask-custom-style="{background: '#fff'}" :border-radius="0">
			<view class="status_bar"></view>
			<view class="px-30 market">
				<view class="search d-flex align-items-center py-20">
					<u-search :placeholder="$t('common.search')"  v-model="keyword" :show-action="false" input-align="center" @change="filterQuotation">
					</u-search>
					<view style="display: flex; align-items: center; cursor: pointer;" @click="showSelectCoin = false">
						<svg data-v-36f3b974="" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#bcbfc5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<line data-v-36f3b974="" x1="18" y1="6" x2="6" y2="18"></line>
							<line data-v-36f3b974="" x1="6" y1="6" x2="18" y2="18"></line>
						</svg>
					</view>
				</view>
				<u-subsection :list="type" style="height: 60rpx; padding: 6rpx; border-radius: 30rpx; width: 100%;"  @change="(index)=>activePop=index" inactive-color="rgb(221, 224, 229)" :current="activePop"></u-subsection>
				<view class="d-grid py-20" style="grid-template-columns:1.1fr 1fr 1fr;">
					<view class="d-flex align-items-center font-size-22 opacity-50" v-for="(item,index) in quotationNav"
						:class="item.align">
						<text>{{item.name}}</text>
					</view>
				</view>
				<scroll-view scroll-y="true">
					<view class="market-item" v-for="item in quotationSearch.filter(it=>activePop==1?it.market_from==1:it.market_from!=1)"
						@click="jump(item.currency_name,item.legal_name,item.currency_id)">
						<view class="left">
							<text class="d-block">
								<text class="font-size-28 font-weight-bold">{{item.currency_name}}</text>
								<text class="font-size-22 opacity-50">/{{item.legal_name}}</text>
							</text>
							<text class="d-block font-size-22 opacity-50">24H: {{Number(item.volume) | setPrecision(item.precision_length)}}</text>
						</view>
						<view class="text-center">
							<text class="d-block font-size-30 font-weight-bold">{{item.now_price | setPrecision(item.precision_length)}}</text>
						</view>
						<view class="">
							<view class="right" :style="{backgroundColor:$utils.getColor(item.change)}">
								{{item.change + '%'}}
							</view>
						</view>
					</view>
				</scroll-view>

			</view>
		</u-popup>
		<u-popup v-model="showMinePop" mode="left" width="100%" :title="$t('setting.selectLang')" :closeable="false" :borderRadius='0'>
			sss
			<view class="status_bar"></view>
			<view class="market" style="background: rgb(242, 246, 247); position: fixed; inset: 0px;">
				<view class="" style="justify-content: space-between;">
					<u-navbar backIconColor="black" :borderBottom='false' :isFixed="false" :background="{background:'rgb(242, 246, 247)'}" title-color="black" :customBack="setBack" :title="i18n.editCopy">
						<view slot="right">
							<!-- <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 26px;"><path d="M28.0527 4.41085C22.5828 5.83695 18.5455 10.8106 18.5455 16.7273C18.5455 23.7564 24.2436 29.4545 31.2727 29.4545C37.1894 29.4545 42.1631 25.4172 43.5891 19.9473C43.8585 21.256 44 22.6115 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C25.3885 4 26.744 4.14149 28.0527 4.41085Z" fill="#1e2329" stroke="#1e2329" stroke-width="3" stroke-linejoin="round"></path></svg>
							 -->
							<!-- #ifdef H5 -->
							<svg @click="$utils.jump('/pages/download/download')" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1e2329" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.2 15c.7-1.2 1-2.5.7-3.9-.6-2-2.4-3.5-4.4-3.5h-1.2c-.7-3-3.2-5.2-6.2-5.6-3-.3-5.9 1.3-7.3 4-1.2 2.5-1 6.5.5 8.8M12 19.8V12M16 17l-4 4-4-4"></path></svg>
							<!-- #endif -->
						</view>
					</u-navbar>
				</view>
				<scroll-view>
					<view class="header-new">
						<view class="text-white d-flex align-items-center justify-content-between mt-30">
							<view class="d-flex  align-items-center">
								<navigator url="/pages/setting/userInfo">
									<image class="border-radius-50per border" style="width: 124rpx; height: 124rpx;" :src="$store.state.user.head_portrait || retImageUrl"></image>
								</navigator>
								<view class="ml-22">
									<text class="d-block font-size-25 mt-4">HI,{{$store.state.user.email}}</text>
									<text class="d-block font-size-22 opacity-50 mt-4">
										<span style="vertical-align: middle;">ID:{{$store.state.user.id}}</span>
										<svg @click="copyText($store.state.user.id)"
	 width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 3px; vertical-align: middle;">
											 <path d="M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163" stroke="#222222" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
											 <path d="M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z" fill="none" stroke="#222222" stroke-width="3" stroke-linejoin="round"></path>
										 </svg>
									</text>
								</view>
							</view>
							<navigator url="/pages/setting/userInfo">
								<text class="iconfont icon-gengduo1 font-size-40"></text>
							</navigator>
						</view>
						<view class="header-new-bottom">
							<view style="display: flex; align-items: center;">
								<image src="/static/img/zs.png" style="height: 50rpx; width: 50rpx;"></image>
								<text style="margin-left: 10rpx;">VIP</text>
								<text style="margin-left: 10rpx;">{{$store.state.user.level}}</text>
							</view>
							<view @click="$utils.jump('/pages/setting/operational_compliance')">
								{{$t('setting.levelDesc')}}
								<text class="iconfont icon-gengduo1 font-size-20" style="margin-left: 6rpx;"></text>
							</view>
						</view>
					</view>
					<view class="pb-60 px-30 pt-30" style="background-color: rgb(255, 255, 255); border-top-left-radius: 20rpx; border-top-right-radius: 20rpx; padding-bottom: 200rpx !important;">
						<view class="service">
							<view style="font-weight: bold;">{{$t('setting.service')}}</view>
							<view class="d-flex mt-30 d-flex-between-center">
								<view class="d-flex" style="flex-flow: column; align-items: center; width: 150rpx;" @click="$utils.jump('/pages/setting/share')" v-if="$store.state.user.agent_id > 0">
									<image src="/static/img/index-pop-1.png" style="height: 60rpx;width: 60rpx;"></image>
									<view class="mt-20">{{$t('setting.share')}}</view>
								</view>
								<view class="d-flex" style="flex-flow: column; align-items: center; width: 150rpx;" @click="$utils.jump('/pages/setting/real_mark')">
									<image src="/static/img/index-pop-2.png" style="height: 60rpx;width: 60rpx;"></image>
									<view class="mt-20">KYC</view>
								</view>
								<view class="d-flex" style="flex-flow: column; align-items: center; width: 150rpx;" @click="$utils.jump('/pages/setting/wallet')">
									<image src="/static/img/index-pop-3.png" style="height: 60rpx;width: 60rpx;"></image>
									<view class="mt-20">{{$t('setting.wallet')}}</view>
								</view>
								<view class="d-flex" style="flex-flow: column; align-items: center; width: 150rpx;" @click="$utils.jump('/pages/setting/bank')">
									<image src="/static/img/index-pop-4.png" style="height: 60rpx;width: 60rpx;"></image>
									<view class="mt-20">{{$t('setting.banks')}}</view>
								</view>
							</view>
						</view>
						<view class="service mt-30">
							<view style="font-weight: bold;">{{$t('setting.general')}}</view>
							<view class="mt-50 d-flex d-flex-between-center" @click="$utils.jump('/pages/setting/security')">
								<view class="d-flex" style="align-items: center;">
									<image src="/static/img/index-pop-5.png" style="width: 40rpx; height: 40rpx;"></image>
									<text class="margin-left: 6rpx;">{{$t('setting.securitySettings')}}</text>
								</view>
								<text class="iconfont icon-gengduo1 font-size-20" style="margin-left: 6rpx;"></text>
							</view>
							<view class="mt-50 d-flex d-flex-between-center" @click="showLanguage=true">
								<view class="d-flex" style="align-items: center;">
									<image src="/static/img/yy.png" style="width: 40rpx; height: 40rpx;"></image>
									<text class="margin-left: 6rpx;">{{$t('setting.language')}}</text>
								</view>
								<text class="iconfont icon-gengduo1 font-size-20" style="margin-left: 6rpx;"></text>
							</view>
							<view class="mt-50 d-flex d-flex-between-center" @click="showFiatPop = true">
								<view class="d-flex" style="align-items: center;">
									<image src="/static/img/index-pop-7.png" style="width: 40rpx; height: 40rpx;"></image>
									<text class="margin-left: 6rpx;">{{$t('setting.defaultFiatCurrency')}}</text>
								</view>
								<view class="d-flex" style="align-items: center;">
									<text>1USD ≈{{$store.state.fiat.rate}}{{$store.state.fiat.currency_code}}</text>
									<text class="iconfont icon-gengduo1 font-size-20" style="margin-left: 6rpx;"></text>
								</view>
							</view>
							<view class="mt-50 d-flex d-flex-between-center" @click="$utils.jump('/pages/common/aboutus')">
								<view class="d-flex" style="align-items: center;">
									<image src="/static/img/index-pop-8.png" style="width: 40rpx; height: 40rpx;"></image>
									<text class="margin-left: 6rpx;">{{$t('setting.aboutUs')}}</text>
								</view>
								<text class="iconfont icon-gengduo1 font-size-20" style="margin-left: 6rpx;"></text>
							</view>
						</view>
						<view class="service mt-30 d-flex" style="justify-content: space-between;">
							<view>
								<view style="font-weight: 800; font-size: 30rpx;">{{$t('setting.fkhd')}}</view>
								<view style="font-size: 24rpx;">{{$t('setting.flhd_desc')}}</view>
							</view>
							<image src="/static/img/yaoqing.png" style="width: 140rpx; height: 140rpx;"></image>
						</view>
					</view>
				</scroll-view>
			</view>
		</u-popup>
		
		<!-- 弹出语言选择 -->
		<u-popup v-model="showLanguage" mode="right" width="100%" :title="$t('setting.selectLang')" :closeable="true" :borderRadius='0'>
			<view class="popup-list">
				<view class="popup-list-item" v-for="item in langs" :key="item.value" :class="{active : item.selected}"
					@click="setLang(item)">
					<text>{{item.name}}</text>
				</view>
			</view>
		</u-popup>
		<u-popup v-model="showFiatPop" mode="bottom" width="100%" :title="$t('setting.selectCoinType')" :closeable="true" :borderRadius='0'>
			<view class="popup-list">
				<view class="popup-list-item" v-for="item in fiats" :key="item.currency_code" :class="$store.state.fiat.currency_code == item.currency_code ?'active':''" @click="$store.commit('saveFiat',item)">
					<text>{{item.currency_code}}</text>
				</view>
			</view>
		</u-popup>

		<!-- 弹窗广告 -->
		<view class="notice-popup">
			<u-popup v-model="showPopAd" width="80%" ref="noticePopup" :mask-close-able="false">
				<view class="notice position-relative">
					<view class="d-flex justify-content-center align-items-center heading">
						<text class="font-size-34 text-white ml-20">{{popupAd.title}}</text>
					</view>
					<view class="p-30">
						<scroll-view class="mt-20 mb-50" :scroll-y="true" style="max-height:350px;">
							<view v-html="popupAd.content"></view>
						</scroll-view>
					</view>
				</view>
				<view class="notice-close">
					<image @click="closeNotice(popupAd.id)" src="../../static/image/icon/close.png" mode="aspectFit" style="width:40px;height:40px"></image>
				</view>
			</u-popup>
		</view>
		
		<u-popup v-model="showUpdate" border-radius="30" length="500" :mask-close-able="false">
			<view class="update overflow-hidden position-relative">
				<view class="d-flex justify-content-center align-items-center update-bg">
					<image src="../../static/image/icon/update.png" style="width: 74rpx;height: 70rpx;"></image>
					<text class="font-size-34 text-white ml-20">发现新版本</text>
				</view>
				<view class="mx-40 my-30 font-size-22">
					<text class="d-block py-3">1.修复了一些BUG；</text>
					<text class="d-block py-3">2.优化了一部分页面；</text>
				</view>
				<view class="buttons">
					<u-line-progress active-color="#ef324c" class="mb-20" :percent="downProgress" v-if="downProgress"></u-line-progress>
					<view class="d-flex justify-content-between" v-else>
						<button class="btn btn1" @click="showUpdate = false">下次提示</button>
						<button class="btn btn2" @click="downFile">立即更新</button>
					</view>
					<view v-if="downProgress == 100">
						<button class="btn btn2" style="width: 100%;" @click="downInstall">立即安装</button>
					</view>
				</view>
				
			</view>
		</u-popup>
		

	</view>
</template>

<script>
	import {
		langs,
		currencys
	} from "./../setting/data.js"
	import {
		gupiao,
		coinCurrencyMarket
	} from './data.js'
	export default {
		data() {
			return {
				type:['HOT',this.$t('common.green_energy')],
				fiats: uni.getStorageSync('fiats'),
				lang: '',
				showSelectCoin:false,
				headimage: require('static/image/svg/headimage.svg'),
				kefuimage: require('static/img/zxkf.png'),
				showMinePop: false,
				showFiatPop: false,
				keyword: '',
				kefu:require("static/image/svg/kefu.svg"),
				swiper: [],
				active:2,
				navActive:0,
				activePop:0,
				activeHighQualityProject: 0,
				gupiao,
				activeGupiaoDot: 0,
				coinCurrencyMarket,
				quotationNav: [{
						name: this.$t("home.tradingPair"),
						sort: 'none',
						align: 'text-left'
					},
					{
						name: this.$t("home.lastPrice"),
						sort: 'none',
						align: 'justify-content-center',
					},
					{
						name: this.$t("home.todayChange"),
						sort: 'none',
						align: 'justify-content-end'
					}
				],
				quotation: [],
				quotationSearch: [],
				quotationOriginal: [],
				langs: null,
				showLanguage: false,
				originalNew: [],
				news: [],
				getQuotationInterval: null,
				popupAd: {},
				showPopAd: false,
				convert: 0, //总资产折合,
				lockming: [], //锁仓挖矿的项目,
				showUpdate:false,
				downProgress:0,
				tempFilePath:null,
				downType:'wgt',
				homeNav:[],
				showDownload:true,
				hasClickDown:false,//是否已经点击过下载
			};
		},
		
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.$store.state.site_name
			})
			
			// #ifdef APP-PLUS
				//检查更新
				this.checkUpdate()
			// #endif
			
			
			// 获取首页公告
			this.getNews()

			// 获取首页公告
			this.getBanner()

			//获取弹窗广告
			this.getPopupAd()

			//获取首页行情
			this.getQuotation()
			
			//获取首页菜单
			this.getMenu()
			
			//设置默认语言
			this.setDefaultLang()
			
			//获取锁仓挖矿的项目
			this.getLockming()
			
			//刷新个人用户
			this.$store.state.token && this.getUserInfo()
			
		},
		onShow() {
			this.hasClickDown = uni.getStorageSync('hasClickDown') || false
			uni.showTabBar()
			this.$utils.setTabbar(this)

			//获取总资产
			this.getWalletList()

			this.lang = this.$store.state.lang || 'en'
		},
		methods: {
			// 跳转
			jump(currency_name, legal_name,currency_id) {
				if (currency_name == this.currency_name && legal_name == this.legal_name && currency_id == this.currency_id) this.showSelectCoin = false
				const url = `/pages/transaction/index?currency_name=${currency_name}&legal_name=${legal_name}&currency_id=${currency_id}`
				uni.reLaunch({
					url
				})
			},
			showDownloadf(){
				uni.setStorageSync('hasClickDown',true)
				this.hasClickDown = true
			},
			filterQuotation() {
				let val = this.keyword
				var quotation = []
				if (!val) {
					quotation = this.quotationOriginal
				} else {
					quotation = this.quotationOriginal.filter(el => {
						val = val.toLowerCase()
						let currency_name = el.currency_name.toLowerCase()
						let legal_name = el.legal_name.toLowerCase()
						if (currency_name.indexOf(val) > -1 || legal_name.indexOf(val) > -1) {
							return el
						}
					})
				}
				this.quotationSearch = JSON.parse(JSON.stringify(quotation))
			},
			copyText(text){
				// #ifdef H5
				this.$copyText(text+'').then(
					res => {
						uni.showToast({
							title: 'ok'
						})
					},
					err => {
						uni.showToast({
							title: err
						})
					}
				)
				// #endif
				// #ifndef H5
				uni.setClipboardData({
					data: text,
					success: () => {
						uni.showToast({
							title: 'ok'
						})
					}
				})
				// #endif
			},
			setBack(){
				this.showMinePop = false
			},
			toNav(index){
				console.log(0,index)
				if(index==0){
					this.$utils.jump("/",'switchTab')
				}else if(index==1){
					this.$utils.jump("/pages/market/market",'switchTab')
				}else if(index==2){
					this.$utils.jump("/pages/transaction/index",'switchTab')
				}else if(index==3){
					this.$utils.jump("/pages/financial/index",'switchTab')
				}else if(index==4){
					this.$utils.jump("/pages/fund/assets",'switchTab')
				}
			},
			//检查更新
			checkUpdate(){
				this.$u.api.common.getSetting('version').then(res=>{
					const version = res.message.value.split(',')
					// version[0]:更新方式,wgt还是apk,version[1]:最新的版本号
					this.checkHotUpdate(version[0],version[1])
				})
			},
			//获取个人信息
			getUserInfo(){
				this.$u.api.setting.getUserInfo().then(res=>{
					this.$store.commit('refreshUser',res.message)
				})
			},
			//获取首页菜单
			getMenu(){
				const {i18n} = this
				this.$u.api.index.getMenu().then(res=>{
					let list = res.message
					list.forEach(item => {
						item.name = i18n[item.title]
					})
					let newList = [],index = 0
					for(let i = 0; i < list.length ; i++){
						// console.log(0 * index , 8 * index + 8);
						newList[index] = list.slice( 8 * index, 8 * index + 8)
						index = index + 1
						i = (i + 1) * 8 -1
					}
					//将list已8个为一组分组
					
					this.homeNav = newList
					
				})
			},
			//检测更新
			checkHotUpdate(type,version) {
				plus.runtime.getProperty(plus.runtime.appid, async (widgetInfo) => {
					const appVersion = widgetInfo.versionCode
					//如果线上的版本号高于此app的版本号，则提示下载更新
					if(version > appVersion){
						this.showUpdate = true
						this.downType = type
					}
				})
			},
			downFile(){
				this.$u.throttle(()=>{
					const _this = this
					const downUrl = `https://exchange.jinyun.io/ff/app.${this.downType}`
					const downloadTask  = uni.downloadFile({
						url: downUrl,
						success: (downloadResult) => {
							if (downloadResult.statusCode === 200) {
								this.tempFilePath = downloadResult.tempFilePath
							}
						}
					});
					
					downloadTask.onProgressUpdate((res) => {
						this.downProgress = res.progress
					});
				},1200)
			},
			downInstall(){
				const tempFilePath = this.tempFilePath
				plus.runtime.install(tempFilePath, {
					force: true
				}, function() {
					console.log('install success...');
					plus.runtime.restart();
				}, function(e) {
					console.log(e);
					console.error('install fail...');
				});
			},

			getLockming() {
				this.$u.api.lockming.getLockming().then(res => {
					this.lockming = res.message
				})
			},
			//获取总资产
			getWalletList() {
				const token = this.$store.state.token
				if(!token) return
				this.$u.api.wallet.getWalletList().then(res => {
					const convert = Number(res.message.change_wallet.usdt_totle) + Number(res.message.lever_wallet
						.usdt_totle) + Number(res.message.legal_wallet.usdt_totle) + Number(res.message
						.micro_wallet.usdt_totle)
					this.convert = convert.toFixed(4)
				})
			},
			// 获取弹窗广告
			getPopupAd() {
				this.$u.api.index.getPopupAd().then(res => {
					if (res.message) {
						let hasCloseNotice = uni.getStorageSync('hasCloseNotice_' + res.message.id) || false;
						if (!hasCloseNotice) {
							this.popupAd = res.message
							this.showPopAd = true
						}
					}
				})
			},
			// 获取首页公告
			getNews() {
				this.$u.api.index.getNews().then(res => {
					this.originalNew = res.message.list
					this.news = res.message.list.map(el => el.title)
					
				})
			},
			// 获取首页轮播图
			getBanner() {
				this.$u.api.index.getBanner().then(res => {
					this.swiper = res.message.list.map(el => {
						el.image = this.$store.state.baseDomain +  el.cover
						return el
					})
				})
			},
			// 获取行情
			getQuotation() {
				const from = Date.parse(new Date()) / 1000 - 1 * 60 * 60
				const to = Date.parse(new Date()) / 1000
				this.$u.api.index.getQuotation().then(async res => {
					this.quotationOriginal = res.message[0].quotation
					//对quotation进行排序检测
					let quotation = this.quotationOriginal.sort((a, b) => Number(a.sort) - Number(b.sort))
					// for(let i = 0; i < quotation.length; i++){
					// 	let item = quotation[i]
						// const ret = await this.$u.api.market.getHistoryData(from, to, item.currency_name + '/' + item.legal_name, '1min')
						// item.chartData = {
						// 	series:[{
						// 		name:'area',
						// 		data: ret.data.map(item => item.close)
						// 	}],
						// 	categories:ret.data.map(item => item.time)
						// }
					// }
					this.quotation = JSON.parse(JSON.stringify(quotation))
					this.quotationSearch = JSON.parse(JSON.stringify(quotation))
					//this.sort('quotation')
					this.startSocket()
				})
			},
			//接收socket数据
			startSocket() {
				const _this = this
				let quotation = this.quotation
				this.$store.state.socket.on('daymarket', res => {
					const has = quotation.findIndex(item => item.currency_id == res.currency_id)
					if (has > -1) {
						res.volume = Number(res.volume).toFixed(5)
						const item = {
							...quotation[has],
							...res
						}
						quotation.splice(has, 1, item)
					}
					this.quotation = quotation

				});
			},
			//设置默认语言
			setDefaultLang() {
				let langsData = langs.map(el => {
					el.selected = false
					return el
				})
				const lang = uni.getStorageSync('lang') || 'en'
				const has = langsData.findIndex(item => item.value == lang)
				langsData[has].selected = true
				this.langs = langsData
				this.getMenu()
				this.getNews()
				this.getBanner()
			},
			setLang(item) {
				let langs = this.langs.map(el => {
					el.selected = false
					if (el.value == item.value) el.selected = true
					return el
				})
				this.langs = langs
				this._i18n.locale = item.value
				this.lang = item.value
				uni.setStorageSync('lang', item.value)
				this.$store.commit('setLang',item.value)
				this.$utils.setTabbar(this)
				
				// 獲取通知
				this.getPopupAd();
				setTimeout(() => {
					this.showLanguage = false
				}, 200)
			},
			gupiaoSwiperChange(e) {
				this.activeGupiaoDot = e.detail.current;
			},
			changeNavSort(opt, index, listName) {
				let data = JSON.parse(JSON.stringify(this[opt]))
				//先将其所有的都置为none
				data.forEach((el, ii) => {
					if (ii != index) el.sort = 'none'
				})
				if (data[index].sort == 'none') {
					data[index].sort = 'up'
				} else if (data[index].sort == 'up') {
					data[index].sort = 'down'
				} else if (data[index].sort == 'down') {
					data[index].sort = 'none'
				}
				this[opt] = data
				this.sort(listName)

			},
			sort(listName) {
				const navName = `${listName}Nav`
				const nav = this[navName]

				const originalName = `${listName}Original`
				const original = this[originalName]

				let sort, index = -1
				//查询nav中是否有排序
				nav.forEach((item, ind) => {
					if (item.sort != 'none') {
						sort = item.sort
						index = ind
					}
				})

				let sortMethod = null
				if (index == -1) {
					this[listName] = original
				} else if (index == 0) {
					//对交易对做排序
					if (sort == 'up') {
						sortMethod = (a, b) => (a.currency_name + '').localeCompare(b.currency_name + '')
					} else {
						sortMethod = (a, b) => (b.currency_name + '').localeCompare(a.currency_name + '')
					}
					this[listName] = this[listName].sort(sortMethod)
				} else if (index == 1) {
					if (sort == 'up') {
						sortMethod = (a, b) => Number(a.now_price) - Number(b.now_price)
					} else {
						sortMethod = (a, b) => Number(b.now_price) - Number(a.now_price)
					}
					this[listName] = this[listName].sort(sortMethod)
				} else if (index == 2) {

					if (sort == 'up') {
						sortMethod = (a, b) => Number(a.change) - Number(b.change)
					} else {
						sortMethod = (a, b) => Number(b.change) - Number(a.change)
					}
					this[listName] = this[listName].sort(sortMethod)
				}

			},
			//根据数字政府判断颜色
			num2Color(num) {
				num = num + ''
				if (num.includes("%")) {
					num = num.slice(0, num.length - 1)
				}
				num = +num
				if (num >= 0) {
					return '#15be97'
				} else {
					return '#ff415b'
				}
			},
			//点击公告
			clickNoticeBar(index) {
				const item = this.originalNew[index]
				uni.navigateTo({
					url: '/pages/common/article?id=' + item.id
				})
			},
			//跳转至锁仓挖矿详情
			jump2Lockming(item) {
				uni.setStorageSync('lockming', item)
				uni.navigateTo({
					url: '/pages/lockming/welcome'
				})
			},
			//点击首页菜单的跳转
			homeNavJump(url,openType){
				if(url){
					this.$utils.jump(url,openType)
				}else{
					this.$utils.showToast(this.$t("common.functionLoading"))
				}
			},
			jumpDown(){
				uni.setStorageSync('hasClickDown',true)
				this.$u.api.common.getSetting('apk_download_url').then((res) => {
					if (res.type == 'ok') {
						window.open(res.message.value)
					}
				});
			},
			closeNotice(id) {
				uni.setStorageSync('hasCloseNotice_' + id, true);
				this.$refs.noticePopup.close();
			}
		},
		computed: {
			i18n() {
				return this.$t("home")
			},
			nav() {
				return this.$t("nav")
			},
			gupiaoNums() {
				return gupiao.length - 2
			}
		},
		watch:{
			//当语言发生变化时
			'$store.state.lang'(val){
				const {i18n} = this
				
				this.$utils.setTabbar(this)
				this.setDefaultLang()
				
				this.homeNav.forEach(item=>{
					item.name = i18n[item.title]
				})
			}
		},
		filters: {
			sort2Icon(sort) {
				switch (sort) {
					case 'none':
						return require('static/image/icon/sort.png');
						break;
					case 'up':
						return require('static/image/icon/sort-up.png');
						break;
					case 'down':
						return require('static/image/icon/sort-down.png');
						break;
				}
			},
		},
		onHide() {
			this.$store.state.socket.removeListener('daymarket')
		},
		onUnload() {
			this.$store.state.socket.removeListener('daymarket')
		}
	}
</script>
<style lang="scss" scoped>
	// .home {
	// 	background-image: url('./../../static/image/icon/home-bg.png');
	// 	background-repeat: no-repeat;
	// 	background-size: 100% 375rpx;
	// 	padding-bottom: 50rpx;
	// 	width: 100vw;
	// 	overflow: hidden;
	// 	padding-top: var(--status-bar-height);
	// }
	
	.home {
		overflow: hidden;
		padding-top: 0;
		position: relative;
		background-repeat: no-repeat;
		background-size: 100% 223px;
		background-position: 0 0;
		padding-bottom: 39px;
	}

	.home-nav {
		border-radius: 20rpx;
		box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
		overflow: hidden;
	}

	.home-title-item {
		font-size: 16px;
		margin-right: 40rpx;

		&::after {
			display: block;
			content: '';
			width: 50%;
			height: 6rpx;
			border-radius: 10rpx;
			margin: 0 auto;
			margin-top: 8rpx;
			overflow: hidden;
			transition: all .3s ease 0s;
		}
	}

	.linear-gradient-green {
		background-image: linear-gradient(to right, #00d789, #00e1cc);
	}


	.high-quality-project {
		.high-quality-project-item {
			background-color: #fff;
			color: #fff;
			border-radius: 20rpx;
			text-align: center;
			height: auto;
			margin-top: 2%;

			.hige-quality-project-sskc {
				background-image: linear-gradient(90deg,#00d789,#00e1cc);
				font-size: 24rpx;
				color: #fff;
				height: 40rpx;
				line-height: 40rpx;
				padding: 0 18rpx;
				border-radius: 10rpx 0 10rpx 0;
				display: block;
				position: absolute;
				left: 0;
				top: 0;
			}
		}
	}

	.swiper-container {
		overflow: visible;
	}

	.swiper-wrapper {
		/* 通过改变animation-timing-function 制作弹性切换效果 */
		transition: .2s cubic-bezier(0.68, -0.2, 0.27, 1.34) .05s;
	}

	// 股票
	.gupiao-item {
		background-color: #95e2d0;
		border-radius: 8rpx;
		overflow: hidden;
		width: 214rpx;
		padding: 24rpx 0 20rpx;
		text-align: center;

		.code {
			font-size: 10px;
			color: white;
			border-radius: 4rpx;
			background-color: #80AEFB;
			margin-right: 7rpx;
			padding: 0 4rpx;
		}

		&.up {
			background-color: #95e2d0;

			.color {
				color: $uni-color-success;
			}
		}

		&.down {
			background-color: #fbe7eb;

			.color {
				color: $uni-color-error;
			}
		}
	}

	.gupiao-swiper-dots {
		margin-top: 5px;
		display: flex;
		justify-content: center;

		.gupiao-swiper-dot {
			width: 36rpx;
			height: 10rpx;
			background-color: #fa4654;
			opacity: .5;
			border-radius: 5px;
			margin-right: 4rpx;

			&.active {
				opacity: 1;
			}
		}
	}

	.market {
		.market-item {
			overflow: hidden;
			padding: 32rpx 0;
			align-items: center;
			display: grid;
			grid-template-columns: 1.2fr 1.2fr .8fr;

			.left {
				overflow: hidden;
			}

			.center {
				flex: 1;
				text-align: center;
			}

			.right {
				width: 100%;
				height: 50rpx;
				line-height: 50rpx;
				text-align: center;
				border-radius: 10rpx;
				background-color: #15be97;
				color: #fff;
			}
		}
	}

	.jshd {
		.jshd-btn {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 56rpx;
			background-image: linear-gradient(to right, rgba(237, 241, 250, 0), rgba(237, 241, 250, 1));
			border-radius: 27.5rpx;
			padding-right: 24rpx;
			margin-right: 30rpx;

			.num {
				background-image: url('./../../static/image/icon/home-icon-4.png');
				background-size: cover;
				width: 38rpx;
				height: 38rpx;
				border-radius: 50%;
				color: #fff;
				text-align: center;
				line-height: 38rpx;
				font-size: 28rpx;
			}

			.text {
				font-size: 28rpx;
				margin-left: 16rpx;
			}
		}

		.jshd-table {

			image,
			img {
				width: 50rpx;
				height: 50rpx;
			}

			.jshd-table-td {
				padding: 14rpx 0;
			}

		}
	}

	.w-26 {
		width: 26%;
	}

	.w-18_5 {
		width: 18.5%;
	}

	// 弹出层列表
	.popup-list {
		.popup-list-item {
			height: 96rpx;
			line-height: 96rpx;
			padding: 0 30rpx;
			font-size: 32rpx;
			position: relative;
			display: flex;
			align-items: center;

			&:before {
				content: "";
				position: absolute;
				left: 30rpx;
				right: 30rpx;
				bottom: 0;
				height: 2rpx;
				background-color: #efefef;
			}

			&.active {
				background-color: #f2f6ff;

				&:after {
					content: "";
					width: 36rpx;
					height: 20rpx;
					background-image: url('/static/image/icon/setting-icon-20.png');
					background-size: cover;
					position: absolute;
					right: 80rpx;
					top: 50%;
					margin-top: -10rpx;
				}
			}
		}
	}
	.notice {
		background: #4D4D4D;
		color: #fff;
		border-radius: 20px;
		.heading {
			background: url('../../static/image/icon/bg-notice-heading.png') center no-repeat;
			background-size: 155px 60px;
			height: 60px;
			line-height: 60px;
		}
	}
	.notice-close {
		position:absolute;
		left: 50%;
		transform:translateX(-50%);
		bottom: -80px;
		text-align: center;
	}
	.uni-scroll-view {
		overflow: inherit!important;
	}
	
	.update{
		padding-bottom: 200rpx;
		.update-bg{
			height: 96rpx;
			background-image: url('./../../static/image/icon/update-bg.png');
			background-repeat: no-repeat;
			background-size: cover;
		}
		.buttons{
			position: absolute;
			left: 40rpx;
			right: 40rpx;
			bottom: 46rpx;
			.btn{
				width: 47%;
				height: 60rpx;
				line-height: 60rpx;
				font-size: 26rpx;
				border: 2rpx solid #ef324c;
				margin: 0;
				&.btn2{
					background-color: #ef324c;
					color: #fff;
				}
			}
		}
		
	}
	
	.index-download{
		background-color: #dcebff;
		position: fixed;
		left: 0;
		right: 0;
		bottom:180rpx;
		padding: 30rpx;
		z-index: 10;
		color: #152138;
		display: flex;
		align-items: center;
		
	}
	
	.kefu{
		/* #ifdef APP-PLUS */
		bottom: 60rpx;
		/* #endif */
		/* #ifdef H5 */
		bottom: 260rpx;
		/* #endif */
	}
	.a6abaf {
	    color: #a6abaf!important;
	}
	.pb-90-new {
	    margin-bottom: 186rpx;
	}
	.new_footer_1 {
	    height: 100%;
	    background-image: url("@/static/img/headimage.png");
	    background-size: 40% 70%;
	    background-repeat: no-repeat;
	    background-position: 100% 100%;
	}
	.new_footer {
	    margin-top: 2%;
	    padding: 60rpx;
	    border-radius: 20rpx;
	    background-color: #dcebff;
	    height: 400rpx;
	}
	.header-new {
	    padding-left: 30rpx!important;
	    padding-right: 30rpx!important;
	    padding-bottom: 130rpx!important;
	    position: relative;
	}
	.header-new-bottom {
	    height: 80rpx;
	    position: absolute;
	    bottom: 0;
	    left: 0;
	    right: 0;
	    margin: 30rpx 30rpx 0 30rpx;
	    background: url("@/static/img/head_new_bottom.png");
	    background-size: 100% 100%;
	    border-top-left-radius: 20rpx;
	    border-top-right-radius: 20rpx;
	    display: flex;
	    justify-content: space-between;
	    align-items: center;
	    color: #fff;
	    padding: 0 40rpx;
	}
	.service {
	    background: #fff;
	    border: 1px solid rgba(0,0,0,.05);
	    color: #222;
	    padding: 30rpx;
	    border-radius: 20rpx;
	}
</style>
