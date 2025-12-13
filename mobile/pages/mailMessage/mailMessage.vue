<template>
	<view class="mailMessage">
		<u-navbar backIconColor="black" :borderBottom='false' :isFixed="false" :background="{background:'rgb(242, 246, 247)'}"></u-navbar>
		<view class="mx-36">
			<view class="title">{{i18n.message_center}}</view>
			<view style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0px;" @click="$utils.jump('/pages/kf/kf')">
				<view style="display: flex; align-items: center;">
					<view style="background-color: rgb(0, 63, 230); border-radius: 31px; width: 41px; display: flex; align-items: center; justify-content: center; padding: 7px 0px;">
						<svg data-v-12ea4eba="" width="26" height="26" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path data-v-12ea4eba="" fill-rule="evenodd" clip-rule="evenodd" d="M8.60868 36.9866C5.32131 33.3783 3.32142 28.6145 3.32142 23.3913C3.32142 12.1271 12.6179 2.99561 24.0856 2.99561C35.5534 2.99561 44.8499 12.1271 44.8499 23.3913C44.8499 31.356 40.2004 38.2515 33.4234 41.6092C29.277 43.7709 24.5467 44.9956 19.5253 44.9956C13.3726 44.9956 7.6569 43.157 2.91699 40.0087C2.91699 40.0087 6.09557 39.662 8.60786 36.9874L8.60868 36.9866ZM33.8397 33.4854C39.2117 28.1136 39.2117 19.4041 33.8397 14.0322C31.3487 11.5413 28.1401 10.2062 24.8794 10.0255V10.0247C24.781 7.57827 26.0979 5.92609 26.1043 5.91803L26.103 5.91829L26.104 5.91699C22.3564 6.64093 18.7778 8.45398 15.8759 11.3559C13.6504 13.5813 12.0658 16.2048 11.1211 18.997C11.2594 18.6308 11.4136 18.2692 11.5837 17.9134C11.3879 18.4127 11.211 18.9229 11.051 19.4449C9.47775 24.2208 10.5882 29.6872 14.3864 33.4854C19.7584 38.8574 28.4679 38.8574 33.8397 33.4854Z" fill="#ffffff"></path>
							<path data-v-12ea4eba="" fill-rule="evenodd" clip-rule="evenodd" d="M17.1299 22.3449V24.0538V25.1921C17.1299 26.3283 18.0509 27.2493 19.1872 27.2493C20.3234 27.2493 21.2443 26.3283 21.2443 25.1921V24.0521V22.3449C21.2443 21.2089 20.3234 20.2876 19.1872 20.2876C18.0509 20.2876 17.1299 21.2089 17.1299 22.3449Z" fill="#ffffff"></path>
							<path data-v-12ea4eba="" fill-rule="evenodd" clip-rule="evenodd" d="M27.3125 22.3449V24.0538V25.1921C27.3125 26.3283 28.2336 27.2493 29.3697 27.2493C30.5059 27.2493 31.427 26.3283 31.427 25.1921V24.0521V22.3449C31.427 21.2089 30.5059 20.2876 29.3697 20.2876C28.2336 20.2876 27.3125 21.2089 27.3125 22.3449Z" fill="#ffffff"></path>
						</svg>
					</view>
					<view style="margin-left: 7px; font-weight: bold;">{{i18n.kf}}</view>
				</view>
				<text class="iconfont icon-gengduo1 font-size-34"></text>
			</view>
			<view style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0px;" @click="$utils.jump('/pages/mailMessage/mailMessageList')">
				<view style="display: flex; align-items: center;">
					<view style="background-color: rgb(0, 63, 230); border-radius: 31px; width: 41px; display: flex; align-items: center; justify-content: center; padding: 7px 0px;">
						<svg data-v-12ea4eba="" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path data-v-12ea4eba="" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
							<polyline data-v-12ea4eba="" points="22,6 12,13 2,6"></polyline>
						</svg>
					</view>
					<view style="margin-left: 7px; font-weight: bold;">{{i18n.system}}</view>
				</view>
			</view>
			<view style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0px;" @click="$utils.jump('/pages/mailMessage/ggList')">
				<view style="display: flex; align-items: center;">
					<view style="background-color: rgb(0, 63, 230); border-radius: 31px; width: 41px; display: flex; align-items: center; justify-content: center; padding: 7px 0px;">
						<svg data-v-12ea4eba="" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path data-v-12ea4eba="" d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path>
						</svg>
					</view>
					<view style="margin-left: 7px; display: flex; flex-direction: column;">
						<text style="font-weight: bold;">{{i18n.center}}</text>
						<text style="font-size: 22rpx;">{{i18n.detail_botton}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		computed: {
			i18n() {
				return this.$t("mailMessage")
			}
		},
	}
</script>

<style>
	.mailMessage .title {
	    font-size: 56rpx;
	    font-weight: 700;
	    padding: 5px 0;
	}
</style>