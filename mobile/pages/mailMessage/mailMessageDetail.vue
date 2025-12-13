<template>
	<view class="mail_message_detail">
		<u-navbar backIconColor="black" :borderBottom='false' :isFixed="false" :background="{background:'rgb(242, 246, 247)'}" title-color="black" :title="$t('mailMessage.detail_message')"></u-navbar>
		<view class="content" v-html="detail.content"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[],
				detail:{}
			}
		},
		onLoad(options) {
			const {id} = options
			this.id = id
		},
		onShow() {
			this.getNewsDetail()
		},
		methods:{
			getNewsDetail(){
				this.$u.api.mailMessage.getdetail(this.id).then(res=>{
					this.detail = res.message
				})
			}
		}
	}
</script>

<style>
	.content {
		    min-height: 50vh;
		    padding: 30rpx;
			margin: 0;
	}
</style>