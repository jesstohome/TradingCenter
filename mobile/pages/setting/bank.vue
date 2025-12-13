<template>
	<view class="">
		<u-navbar backIconColor="black" :borderBottom='false' :isFixed="false" :background="{background:'rgb(242, 246, 247)'}" title-color="black" :title="$t('setting.addBank')"></u-navbar>
		<view class="mx-30 mt-30 box-shadow  bg-white p-30 border-radius-20 text-white" >
			<!-- 真实姓名 -->
			<view class="login-input-group mt-0">
				<text class="label">{{i18n.account_name}}</text>
				<input type="text" v-model="real_name" class="login-input">
			</view>
			
			<!-- 银行名称 -->
			<view class="login-input-group">
				<text class="label">{{i18n.bank_name}}</text>
				<input type="text" v-model="bank_name" class="login-input">
			</view>
			
			<!-- 开户省市 -->
			<view class="login-input-group">
				<text class="label">{{i18n.beneficiary_country}}</text>
				<input type="text" v-model="bank_dizhi" class="login-input">
			</view>

			<view class="login-input-group">
				<text class="label">{{i18n.iban}}</text>
				<input type="digit" v-model="iban" class="login-input">
			</view>
			
			<view class="login-input-group">
				<text class="label">{{i18n.bank_code}}</text>
				<input type="digit" v-model="bank_code" class="login-input">
			</view>

			<!-- 银行卡号 -->
			<!-- <view class="login-input-group">
				<text class="label">{{i18n.bank_account}}</text>
				<input type="digit" v-model="bank_account" class="login-input">
			</view> -->
			<view class="login-input-group">
				<text class="label">{{i18n.bank_address}}</text>
				<input type="digit" v-model="bank_address" class="login-input">
			</view>

			<!-- 地址 -->
			<!-- <view class="login-input-group">
				<text class="label">{{i18n.address}}</text>
				<input type="text" v-model="personal_address" class="login-input">
			</view> -->
			
			<!-- SWIFT -->
			<!-- <view class="login-input-group">
				<text class="label">{{i18n.alipay_account}}</text>
				<input type="text" v-model="alipay_account" class="login-input">
			</view> -->

			<!-- SWIFT -->
			<!-- <view class="login-input-group">
				<text class="label">{{i18n.wechat_nickname}}</text>
				<input type="text" v-model="wechat_nickname" class="login-input">
			</view> -->

			

			<!-- SWIFT -->
			<!-- <view class="login-input-group">
				<text class="label">{{i18n.wechat_account}}</text>
				<input type="text" v-model="wechat_account" class="login-input">
			</view> -->


		</view>

		
		<view class="m-30">
			<button class="warning-button py-0" @click="submit" v-if="!has" >{{$t("common.confirm")}}</button>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				real_name:'',
				bank_name:'',
				bank_account:'',
				bank_dizhi:'',
				alipay_account:'',
				wechat_nickname:'',
				wechat_account:'',
				bank_code: '',
				iban: '',
				bank_address:'',
				has:false
			};
		},
		onShow() {
			this.getCard()
		},
		methods: {
			getCard(){
				this.$u.api.setting.getCard().then(({message})=>{
					this.has = message.bank_name != ''
					this.real_name = message.real_name
					this.bank_name = message.bank_name
					this.bank_account = message.bank_account
					this.bank_dizhi = message.bank_dizhi
					this.alipay_account = message.alipay_account
					this.wechat_account = message.wechat_account
					this.wechat_nickname = message.wechat_nickname
					this.bank_code = message.bank_code
					this.iban = message.iban
					this.bank_address = message.bank_address
				})
			},
			submit() {
				let {
					i18n,real_name,bank_name,bank_account,bank_dizhi,alipay_account,wechat_account,wechat_nickname,bank_code,iban,bank_address
				} = this
				if(!real_name || !bank_name || !bank_account || !bank_dizhi||!bank_code||!iban||!bank_address){
					this.$utils.showToast(i18n.allNeed)
				}
				this.$u.api.setting.saveCard({
					real_name,bank_name,bank_account,bank_dizhi,alipay_account,wechat_account,wechat_nickname,bank_code,iban,bank_address
				}).then(res=>{
					this.$utils.showToast(res.message)
					this.getCard()
				})
			},
			
		},
		computed: {
			i18n() {
				return this.$t("buyCrypto")
			},
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
