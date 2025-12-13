<template>
	<scroll-view style="height: 1688rpx;">
		<view class="mailMessageDetail">
			<u-navbar backIconColor="black" :borderBottom='false' :isFixed="false" :background="{background:'rgb(242, 246, 247)'}" title-color="black" :title="$t('mailMessage.system')"></u-navbar>
		</view>
		<view class="list">
			<view class="list-item" v-for="item in list">
				<view class="title">{{item.title}}</view>
				<view class="desc">{{item.abstract}}</view>
				<view class="bottom">
					<view class="time">{{item.create_time}}</view>
					<view class="button" @click="$utils.jump('/pages/mailMessage/mailMessageDetail?id=' + item.id)">{{$t('mailMessage.detail_botton')}}</view>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				list:[],
			}
		},
		onShow() {
			this.getList()
		},
		methods: {
			//检查更新
			getList(){
				this.$u.api.mailMessage.getList().then(res=>{
					this.list = res.message
				})
			}
		}
	}
</script>

<style>
	.mailMessageDetail {
	    height: 8vh;
	}
	.mailMessageDetail .list {
	    padding: 0 15px;
	    margin: 5px 0;
	}
	.list-item {
		background-color: #fff;
		padding: 10px;
		margin: 10px 0;
	}
</style>