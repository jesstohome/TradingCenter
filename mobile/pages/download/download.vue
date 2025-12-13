<template>
	<view class="downLoad">
		<u-navbar backIconColor="black" :borderBottom='false' :isFixed="false" :background="{background:'rgb(242, 246, 247)'}" title-color="black" :title="i18n.download"></u-navbar>
		<scroll-view :style="{height:navHeight+'px'}" scroll-y>
			<view class="bg-top android">
				<view class="logo">
					<view class="image">
						<image style="width: 20px;height: 20px;" :src="down_logo"></image>
						<view class="ml10" style="width: 100%;">{{site_name}}</view>
					</view>
					<h4 class="logo_h3 f-fs f-ac">{{i18n.one_title}}</h4>
					<h5 class="logo_h5 f-fs f-ac">{{i18n.one_desc}}</h5>
				</view>
			</view>
			<view class="tips-two f-ac f-dc">
				<h3 class="two_title f-ac f-c">{{i18n.two_one_title}}</h3>
				<h6 class="two_tips f-ac f-c">{{i18n.two_one_desc}}</h6>
				<image class="img_s" :src="`/static/img/img_1.png`"></image>
			</view>
			<view class="tips-two f-ac f-dc h_bg">
				<h3 class="two_title f-ac f-c">{{i18n.two_two_title}}</h3>
				<h6 class="two_tips f-ac f-c">{{i18n.two_two_desc}}</h6>
				<image class="img_s" :src="`/static/img/img_2.png`"></image>
			</view>
			<view class="tips-two f-ac f-dc last">
				<h3 class="two_title f-ac f-c">{{i18n.two_three_title}}</h3>
				<h6 class="two_tips f-ac f-c">{{i18n.two_three_desc}}</h6>
				<image class="img_s" :src="`/static/img/img_3.png`"></image>
			</view>
		</scroll-view>
		<view class="footer">
			<view id="zhandroidfooter" class="footer-btn" style="display: flex; justify-content: space-between;">
				<view style="background-color: rgb(39, 109, 255); width: 45%; height: 40px; display: flex; align-items: center; justify-content: center; border-radius: 10px;" @click="open(apk_download_url)">
					<svg data-v-4aecc390="" width="23" height="23" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path data-v-4aecc390="" d="M43.9011 36H4.09863C5.10208 25.8934 13.6292 18 23.9999 18C34.3706 18 42.8977 25.8934 43.9011 36Z" fill="#7ed321" stroke="#7ed321" stroke-width="4" stroke-linejoin="round"></path>
						<path data-v-4aecc390="" d="M14 20L10 13" stroke="#7ed321" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
						<path data-v-4aecc390="" d="M33 20L37 13" stroke="#7ed321" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
						<circle data-v-4aecc390="" cx="15" cy="29" r="2" fill="#FFF"></circle><circle data-v-4aecc390="" cx="33" cy="29" r="2" fill="#FFF"></circle>
					</svg>
					<view style="font-size: 15px !important; color: white;">{{i18n.download_text}}</view>
				</view>
				<view style="border: 1px solid rgb(39, 109, 255); width: 45%; height: 40px; display: flex; align-items: center; justify-content: center; border-radius: 10px; color: black;" @click="open(ios_apk_download_url)">
					<svg data-v-4aecc390="" width="23" height="23" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path data-v-4aecc390="" d="M23.9111 11.3176C23.9931 9.08606 24.6201 7.12594 25.7772 5.4874C26.9402 3.84056 28.8628 2.6707 31.4945 2.00781C31.512 2.08885 31.5302 2.16994 31.5491 2.25072V2.67472C31.5491 3.63616 31.3159 4.73862 30.8556 5.95127C30.3732 7.12541 29.6193 8.23048 28.618 9.22782C27.6815 10.1066 26.8151 10.6884 26.0494 10.9514C25.7966 11.0269 25.45 11.1012 25.0314 11.1681C24.6591 11.2261 24.2856 11.276 23.9111 11.3176Z" fill="#1e2329"></path>
						<path data-v-4aecc390="" d="M24.3502 14.629C21.3775 14.629 19.3136 11.9999 16.3813 11.9999C13.4491 11.9999 7.4082 14.6951 7.4082 23.9999C7.4082 33.3047 12.7726 39.2999 13.3726 39.9999C13.9725 40.7 15.3601 42.4994 17.5098 42.4994C19.6596 42.4994 22.0131 40.7902 24.3502 40.7902C26.6872 40.7902 29.6288 42.4994 31.5492 42.4994C33.4696 42.4994 34.2595 41.7165 35.5665 40.3662C36.8734 39.0159 39.3663 34.8952 40.2369 32.422C38.8029 31.5684 35.0021 29.2511 35.0021 23.9999C35.0021 20.4992 36.2814 17.5909 38.8401 15.2752C37.1615 13.0917 35.2147 11.9999 32.9996 11.9999C29.6769 11.9999 27.3229 14.629 24.3502 14.629Z" fill="#1e2329" stroke="#1e2329" stroke-width="4" stroke-linejoin="round"></path>
					</svg>
					<view style="font-size: 15px !important;">{{i18n.download_text}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				langs: null,
				showLanguage: !1,
				navHeight: 0,
				transfromClass: {
					position: "fixed",
					bottom: 0,
					top: 0,
					left: 0,
					right: 0
				},
				transShow: !1,
				modeClass: "slide-left",
				apk_download_url: "",
				ios_apk_download_url: "",
				site_name: "",
				down_logo: ""
			}
		},
		onShow: function() {
			var A = this;
			this.transShow = !0,
			this.$u.api.common.getSetting("apk_download_url").then((function(t) {
				"ok" == t.type && (A.apk_download_url = t.message.value)
			}
			)),
			this.$u.api.common.getSetting("site_name").then((function(t) {
				"ok" == t.type && (A.site_name = t.message.value)
			}
			)),
			this.$u.api.common.getSetting("down_logo").then((function(t) {
				"ok" == t.type && (A.down_logo = t.message.value)
			}
			)),
			this.$u.api.common.getSetting("ios_apk_download_url").then((function(t) {
				"ok" == t.type && (A.ios_apk_download_url = t.message.value)
			}
			)),
			uni.getSystemInfo({
				success: function(t) {
					var i = t.windowHeight;
					A.showDownload && A.hasClickDown,
					A.navHeight = i
				}
			})
		},
		methods: {
			open: function(A) {
				window.location.href = A
			},
			iosDown: function() {
				window.location.href = this.ios_apk_download_url
			},
			Down: function() {
				window.location.href = this.apk_download_url
			},
			back: function() {
				uni.switchTab({
					url: "/pages/index/index"
				})
			},
		},
		computed: {
			i18n() {
				return this.$t("downLoad_new")
			},
		}
	}
</script>

<style>
.downLoad{
	height:100vh;background:#fff;color:#000
}
.downLoad .bg-top{
	padding:40px 0 43px 29px;
	background:url(/static/img/bg_1.png) no-repeat 50%/100%;
	overflow:hidden;
	border:0
}
.downLoad .bg-top.android{
	padding:10px
}
.downLoad .logo{
	text-align:left
}
.downLoad .logo .image{
	display:flex;
	align-items:center;
	width:100%;
	height:20px;
	overflow:hidden;
	border:0;
	margin-bottom:42px
}
.downLoad .logo_h3{
	width:100%;
	font-size:20px;
	font-weight:600;
	color:#fff;
	line-height:36px;
	letter-spacing:2px;
	margin-bottom:10px
}
.downLoad .logo_h5{
	width:100%;
	font-size:10px;
	font-weight:500;
	color:hsla(0,0%,100%,.5);
	line-height:15px;
	letter-spacing:1px
}
.downLoad .tips-two{
	padding:10px;
	background-color:#fff
}
.downLoad .two_title{
	width:100%;
	font-size:17px;
	font-weight:500;
	color:#2d2d2d;
	line-height:32px;
	letter-spacing:1px;
	margin-bottom:10px
}
.downLoad .two_tips{
	font-size:12px;
	font-weight:500;
	color:#2d2d2d;
	line-height:17px;
	letter-spacing:1px;
	margin-bottom:31px
}
.downLoad .img_s{
	width:208px;
	height:208px;
	max-width:208px;
	border:0;
	overflow:hidden
}
.downLoad .f,
.downLoad .f-ab,
.downLoad .f-ac,
.downLoad .f-ae,
.downLoad .f-ais,
.downLoad .f-as,
.downLoad .f-c,
.downLoad .f-dc,
.downLoad .f-fe,
.downLoad .f-fs,
.downLoad .f-sa,
.downLoad .f-sb,
.downLoad .f-w{
	display:-webkit-box;
	display:-ms-flexbox;
	display:flex
}
.downLoad .f-ab{
	-webkit-box-align:baseline;
	-ms-flex-align:baseline;
	align-items:baseline
}
.downLoad .f-ae{
	-webkit-box-align:end;
	-ms-flex-align:end;
	align-items:flex-end
}
.downLoad .f-ais{
	-webkit-box-align:stretch;
	-ms-flex-align:stretch;
	align-items:stretch
}
.downLoad .f-fs{
	-webkit-box-pack:start;
	-ms-flex-pack:start;
	justify-content:flex-start
}
.downLoad .f-fe{
	-webkit-box-pack:end;
	-ms-flex-pack:end;
	justify-content:flex-end
}
.downLoad .f-w{
	-ms-flex-wrap:wrap;
	flex-wrap:wrap
}
.downLoad .f-c{
	-webkit-box-pack:center;
	-ms-flex-pack:center;
	justify-content:center
}
.downLoad .f-sb{
	-webkit-box-pack:justify;
	-ms-flex-pack:justify;
	justify-content:space-between
}
.downLoad .f-sa{
	-ms-flex-pack:distribute;
	justify-content:space-around
}
.downLoad .f-ac{
	-webkit-box-align:center;
	-ms-flex-align:center;
	align-items:center
}
.downLoad .f-dc{
	-webkit-box-orient:vertical;
	-webkit-box-direction:normal;
	-ms-flex-direction:column;
	flex-direction:column
}
.downLoad .f-as{
	-webkit-box-align:start;
	-ms-flex-align:start;
	align-items:flex-start
}
.downLoad .footer{
	width:100%;
	position:fixed;
	bottom:0;
	left:0;
	right:0;
	z-index:1000;
	background-color:initial
}
.downLoad #zhandroidfooter .andrio,
.downLoad #enandroidfooter .andrio{
	width:50%
}
.downLoad .footer-btn{
	width:100%;
	-webkit-overflow-scroll:touch;
	bottom:0;
	padding:16px 0;
	display:flex;
	z-index:100;
	justify-content:center;
	background-color:#fff;
	box-shadow:0 -10px 20px 0 rgba(0,0,0,.05);
	display:none
}
.downLoad #zhandroidfooter{
	padding:17px
}
.downLoad .tips-two.last{
	margin-bottom:60px;
	padding-bottom:70px
} 
</style>
