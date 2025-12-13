<template>
	<view class="kf">
		<u-navbar backIconColor="black" :borderBottom='false' :isFixed="false" :background="{background:'rgb(242, 246, 247)'}" title-color="black" :title="i18n.title"></u-navbar>
		<view class="ke_bg"></view>
		<view class="mt-30 px-30">
			<view class="bg-black-2 border-radius-20 d-flex d-flex-between-center p-20" v-if="info.zxkf_radio == 1">
				<view class="d-flex align-items-center" @click="openkf(info.zxkf_url)">
					<image :src="zxkf" style="width: 52rpx; height: 52rpx;" :draggable="false"></image>
					<view class="text-white ml-10">{{i18n.contactUs}}</view>
				</view>
				<text class="iconfont icon-gengduo1 ml-20 text-white"></text>
			</view>
			<view class="bg-black-2 mt-30 border-radius-20 d-flex d-flex-between-center p-20" v-if="info.telegram_radio == 1">
				<view class="d-flex align-items-center" @click="open(info.telegram_url)">
					<image style="width: 52rpx; height: 52rpx;" :draggable="false" :src="telegram"></image>
					<view class="text-white ml-10">Telegram</view>
				</view>
				<text class="iconfont icon-gengduo1 ml-20 text-white"></text>
			</view>
			<view class="bg-black-2 mt-30 border-radius-20 d-flex d-flex-between-center p-20" v-if="info.whatsApp_radio == 1">
				<view class="d-flex align-items-center" @click="open(info.whatsApp_url)">
					<image style="width: 52rpx; height: 52rpx;" :draggable="false" :src="whatsApp"></image>
					<view class="text-white ml-10">WhatsApp</view>
				</view>
				<text class="iconfont icon-gengduo1 ml-20 text-white"></text>
			</view>
			<view class="bg-black-2 mt-30 border-radius-20 d-flex d-flex-between-center p-20" v-if="info.jie_radio == 1">
				<view class="d-flex align-items-center" @click="open(info.jie_url)">
					<image style="width: 52rpx; height: 52rpx;" :draggable="false" :src="jie"></image>
					<view class="text-white ml-10">{{i18n.jie}}</view>
				</view>
				<text class="iconfont icon-gengduo1 ml-20 text-white"></text>
			</view>
			<view class="bg-black-2 mt-30 border-radius-20 d-flex d-flex-between-center p-20" v-if="info.hk_radio == 1">
				<view class="d-flex align-items-center" @click="open(info.hk_url)">
					<image style="width: 52rpx; height: 52rpx;" :draggable="false" :src="hk"></image>
					<view class="text-white ml-10">{{i18n.huankuan}}</view>
				</view>
				<text class="iconfont icon-gengduo1 ml-20 text-white"></text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				zxkf:require('@/static/img/zxkf.png'),
				telegram:require('@/static/img/telegram.png'),
				whatsApp:require('@/static/img/whatsApp.png'),
				jie:require('@/static/img/jie.png'),
				hk:require('@/static/img/hk.png'),
				info:{}
			};
		},
		onLoad() {
			this.$u.api.common.getSiteConfig().then((res) => {
				if (res.type == 'ok') {
					this.info = res.message
				}
			})
		},
		methods:{
			open(url){
				window.location.href = url
			},
			openkf(url){
				let userinfo = this.$store.state.user
				if(userinfo.account_number != undefined){
					let kfdata = '&metadata={"name":"' + userinfo.account_number + '"}'
					window.location.href = url + kfdata
				}else{
					window.location.href = url
				}				
			}
		},
		computed: {
			i18n() {
				return this.$t("contact")
			}
		}
	}
</script>

<style lang="scss" scoped>
.back{
	position: fixed;
	left: 20rpx;
	top: 44rpx;
	z-index: 99999;
	color: #fff;
}
</style>
