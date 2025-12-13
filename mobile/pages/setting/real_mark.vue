<template>
	<view class="text-white">
		<u-navbar backIconColor="black" :borderBottom='false' :isFixed="false" :background="{background:'rgb(242, 246, 247)'}" title-color="black"></u-navbar>
		<view class="p-30">
			<text class="d-block font-weight-bold font-size-32">{{i18n.authentication_text_2}}</text>
			<view class="p-30">
				<text class="d-block font-size-28 opacity-60">{{i18n.authentication_text_9}}</text>
				
			</view>
			<view class="d-block font-size-32 mb-20">{{i18n.authentication_text_3}}</view>
			<view class="mt-26 bg-white" style="padding: 40rpx 0px; border-radius: 20rpx;">
				<text class="d-block font-size-28 opacity-60 pl-48">{{i18n.authentication_text_4}}</text>
				<text class="d-block font-size-28 opacity-60 pl-48">{{i18n.authentication_text_5}}</text>
				<view class="m-30">
					<!-- 未认证 -->
					<button class="warning-button" v-if="review_status == 0" @click="$utils.jump('/pages/setting/real?type=1')">{{i18n.goAudit}}</button>
					<!-- 待审核 -->
					<button class="primary-button" v-else-if="review_status == 1">{{i18n.auditing}}</button>
					<!-- 审核成功 -->
					<button class="success-button" v-else-if="review_status == 2">{{i18n.hasaudit}}</button>
				</view>
			</view>
			<view class="d-block font-size-32 mb-20">{{i18n.authentication_text_6}}</view>
			<view class="mt-26 bg-white" style="padding: 40rpx 0px; border-radius: 20rpx;">
				<text class="d-block font-size-28 opacity-60 pl-48">{{i18n.authentication_text_7}}</text>
				<text class="d-block font-size-28 opacity-60 pl-48">{{i18n.authentication_text_8}}</text>
				<view class="m-30">
					<!-- 未认证 -->
					<button class="secondary-button" v-if="review_status < 2">{{i18n.goAudit}}</button>
					<button class="warning-button" v-else-if="advanced_review_status == 0 " @click="$utils.jump('/pages/setting/real?type=2')">{{i18n.goAudit}}</button>
					<!-- 待审核 -->
					<button class="primary-button" v-else-if="advanced_review_status == 1">{{i18n.auditing}}</button>
					<!-- 审核成功 -->
					<button class="success-button" v-else-if="advanced_review_status == 2">{{i18n.hasaudit}}</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				review_status:0,//基础认证，
				advanced_review_status:0,//高级认证
			};
		},
		onShow() {
			//检查认证状态
			this.getUserRealState()
		},
		methods:{
			getUserRealState(){
				this.$u.api.setting.getUserRealState().then(res=>{
					//review_status:初级认证，advanced_review_status：高级认证
					const {review_status,advanced_review_status} = res.message
					this.review_status = review_status
					this.advanced_review_status = advanced_review_status
				})
			},	
		},
		computed:{
			i18n(){
				return this.$t("setting")
			}
		}
	}
</script>

<style lang="scss">

</style>
