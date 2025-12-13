<template>
	<scroll-view class="pb-50 wrapper">
		<view class="borrowing">
			<u-navbar :background="{background:'none'}" :borderBottom='false' :title="i18nh.borrowing">
			</u-navbar>
			<view class="px-30 mt-50  pb-50">
				<view class="text-white mt-30" style="font-size: 52rpx; width: 400rpx;">
					{{i18n.info}}
				</view>
				<button class="mt-30" style="background: linear-gradient(270deg, rgb(0, 141, 249) 0%, rgb(0, 216, 159) 100%); border-radius: 12rpx; width: 228rpx; margin: 0px;"  @click="goNow()">
					{{i18n.borrow_now}}
				</button>
			</view>
		</view>
		<view class="mt-30 bg-black-2 border-radius-20" style="margin: 0rpx 40rpx; border: 2rpx solid rgb(42, 42, 42); padding: 30rpx;">
			<image src="../../static/img/jd_card1.png" style="width: 80rpx;height: 80rpx;"></image>
			<view class="text-white mt-30">
				{{i18n.one}}
			</view>
			<view class=" mt-20" style="color: rgb(153, 153, 153);">
				{{i18n.one_desc}}
			</view>
		</view>
		<view class="mt-30 bg-black-2 border-radius-20" style="margin: 0rpx 40rpx; border: 2rpx solid rgb(42, 42, 42); padding: 30rpx;">
			<image src="../../static/img/jd_card2.png" style="width: 80rpx;height: 80rpx;"></image>
			<view class="text-white mt-30">
				{{i18n.two}}
			</view>
			<view class=" mt-20" style="color: rgb(153, 153, 153);">
				{{i18n.two_desc}}
			</view>
		</view>
		<view class="mt-30 bg-black-2 border-radius-20" style="margin: 0rpx 40rpx; border: 2rpx solid rgb(42, 42, 42); padding: 30rpx;">
			<image src="../../static/img/jd_card3.png" style="width: 80rpx;height: 80rpx;"></image>
			<view class="text-white mt-30">
				{{i18n.three}}
			</view>
			<view class=" mt-20" style="color: rgb(153, 153, 153);">
				{{i18n.three_desc}}
			</view>
		</view>
		<view class="mt-30 bg-black-2 border-radius-20" style="margin: 0rpx 40rpx; border: 2rpx solid rgb(42, 42, 42); padding: 30rpx;">
			<image src="../../static/img/jd_card4.png" style="width: 80rpx;height: 80rpx;"></image>
			<view class="text-white mt-30">
				{{i18n.four}}
			</view>
			<view class=" mt-20" style="color: rgb(153, 153, 153);">
				{{i18n.four_desc}}
			</view>
		</view>
		<view class="mt-30 bg-black-2" style="padding: 30rpx;">
			<view class="text-white" style="font-size: 28rpx; text-align: center;">
				{{i18n.middle_info}}
			</view>
			<view class="d-flex d-flex-between-center">
				<view style="width: 50%; text-align: center;">
					<image src="../../static/img/jd_card5.png" style="width: 80rpx;height: 80rpx;"></image>
					<view class="mt-10" style="color: rgb(153, 153, 153);">Step.1</view>
					<view class="mt-10 text-white">{{i18n.middle_one}}</view>
				</view>
				<view style="width: 50%; text-align: center;">
					<image src="../../static/img/jd_card6.png" style="width: 80rpx;height: 80rpx;"></image>
					<view class="mt-10" style="color: rgb(153, 153, 153);">Step.2</view>
					<view class="mt-10 text-white">{{i18n.middle_two}}</view>
				</view>
			</view>
			<view class="d-flex d-flex-between-center">
				<view style="width: 50%; text-align: center;">
					<image src="../../static/img/jd_card7.png" style="width: 80rpx;height: 80rpx;"></image>
					<view class="mt-10" style="color: rgb(153, 153, 153);">Step.3</view>
					<view class="mt-10 text-white">{{i18n.middle_three}}</view>
				</view>
				<view style="width: 50%; text-align: center;">
					<image src="../../static/img/jd_card8.png" style="width: 80rpx;height: 80rpx;"></image>
					<view class="mt-10" style="color: rgb(153, 153, 153);">Step.4</view>
					<view class="mt-10 text-white">{{i18n.middle_four}}</view>
				</view>
			</view>
		</view>
		<view style="padding: 30rpx;">
			<view class="text-white" style="text-align: center;">FAQ</view>
			<view class="mt-30 " style="border: 1px solid rgb(42, 42, 42); padding: 20rpx;">
				<view class="d-flex d-flex-between-center">
					<view class="text-white">
						{{i18n.faq_1}}
					</view>
					<view @click="active1 = !active1">
						<image :src="active1?close:open" style="width: 50rpx; height: 50rpx;"></image>
					</view>
				</view>
				<view style="color: rgb(188, 188, 188); font-family: fantasy;" v-if="active1">
					{{i18n.faq_1_desc}}
				</view>
			</view>
			<view class="mt-30 " style="border: 1px solid rgb(42, 42, 42); padding: 20rpx;">
				<view class="d-flex d-flex-between-center">
					<view class="text-white">
						{{i18n.faq_2}}
					</view>
					<view @click="active2 = !active2">
						<image :src="active2?close:open" style="width: 50rpx; height: 50rpx;"></image>
					</view>
				</view>
				<view style="color: rgb(188, 188, 188); font-family: fantasy;" v-if="active2">
					{{i18n.faq_2_desc}}
				</view>
			</view>
			<view class="mt-30 " style="border: 1px solid rgb(42, 42, 42); padding: 20rpx;">
				<view class="d-flex d-flex-between-center">
					<view class="text-white">
						{{i18n.faq_3}}
					</view>
					<view @click="active3 = !active3">
						<image :src="active3?close:open" style="width: 50rpx; height: 50rpx;"></image>
					</view>
				</view>
				<view style="color: rgb(188, 188, 188); font-family: fantasy;" v-if="active3">
					{{i18n.faq_3_desc}}
				</view>
			</view>
			<view class="mt-30 " style="border: 1px solid rgb(42, 42, 42); padding: 20rpx;">
				<view class="d-flex d-flex-between-center">
					<view class="text-white">
						{{i18n.faq_4}}
					</view>
					<view @click="active4 = !active4">
						<image :src="active4?close:open" style="width: 50rpx; height: 50rpx;"></image>
					</view>
				</view>
				<view style="color: rgb(188, 188, 188); font-family: fantasy;" v-if="active4">
					{{i18n.faq_4_desc}}
				</view>
			</view>
			<view class="mt-30 " style="border: 1px solid rgb(42, 42, 42); padding: 20rpx;">
				<view class="d-flex d-flex-between-center">
					<view class="text-white">
						{{i18n.faq_5}}
					</view>
					<view @click="active5 = !active5">
						<image :src="active5?close:open" style="width: 50rpx; height: 50rpx;"></image>
					</view>
				</view>
				<view style="color: rgb(188, 188, 188); font-family: fantasy;" v-if="active5">
					{{i18n.faq_5_desc}}
				</view>
			</view>
			<view class="mt-30 " style="border: 1px solid rgb(42, 42, 42); padding: 20rpx;">
				<view class="d-flex d-flex-between-center">
					<view class="text-white">
						{{i18n.faq_6}}
					</view>
					<view @click="active6 = !active6">
						<image :src="active6?close:open" style="width: 50rpx; height: 50rpx;"></image>
					</view>
				</view>
				<view style="color: rgb(188, 188, 188); font-family: fantasy;" v-if="active6">
					{{i18n.faq_6_desc}}
				</view>
			</view>
			<view class="mt-30 " style="border: 1px solid rgb(42, 42, 42); padding: 20rpx;">
				<view class="d-flex d-flex-between-center">
					<view class="text-white">
						{{i18n.faq_7}}
					</view>
					<view @click="active7 = !active7">
						<image :src="active7?close:open" style="width: 50rpx; height: 50rpx;"></image>
					</view>
				</view>
				<view style="color: rgb(188, 188, 188); font-family: fantasy;" v-if="active7">
					{{i18n.faq_7_desc}}
				</view>
			</view>
			<view class="mt-30 " style="border: 1px solid rgb(42, 42, 42); padding: 20rpx;">
				<view class="d-flex d-flex-between-center">
					<view class="text-white">
						{{i18n.faq_8}}
					</view>
					<view @click="active8 = !active8">
						<image :src="active8?close:open" style="width: 50rpx; height: 50rpx;"></image>
					</view>
				</view>
				<view style="color: rgb(188, 188, 188); font-family: fantasy;" v-if="active8">
					{{i18n.faq_8_desc}}
				</view>
			</view>
			<view class="mt-30 " style="border: 1px solid rgb(42, 42, 42); padding: 20rpx;">
				<view class="d-flex d-flex-between-center">
					<view class="text-white">
						{{i18n.faq_9}}
					</view>
					<view @click="active9 = !active9">
						<image :src="active9?close:open" style="width: 50rpx; height: 50rpx;"></image>
					</view>
				</view>
				<view style="color: rgb(188, 188, 188); font-family: fantasy;" v-if="active9">
					{{i18n.faq_9_desc}}
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				open:require("@/static/img/open.png"),
				close:require("@/static/img/close.svg"),
				active1:false,
				active2:false,
				active3:false,
				active4:false,
				active5:false,
				active6:false,
				active7:false,
				active8:false,
				active9:false,
			}
		},
		methods: {
			goNow() {
				this.$utils.jump('/pages/kf/kf','redirectTo')
			}
		},
		computed: {
			i18n() {
				return this.$t("borrowing")
			},
			i18nh() {
				return this.$t("home")
			}
		}
	}
</script>

<style lang="scss" scoped>
	page{
		background-image: url('@/static/image/icon/market-bg.png');
		background-size: contain;
		background-position:center 30vh;
		background-repeat: no-repeat;
		background-attachment: fixed;
	}
	.borrowing {
	    background: url('@/static/img/jd_bg.png') 50% no-repeat;
	    background-size: 100% 100%;
	}
	.bg-black-2 {
	    background: #152139!important;
	}
	uni-page-body {
	    background: #060203!important;
	}
	.text-white{
		color: white !important;
	}
</style>
