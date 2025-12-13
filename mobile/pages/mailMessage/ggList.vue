<template>
	<scroll-view style="height: 1688rpx;">
		<view class="mailMessageDetail">
			<u-navbar backIconColor="black" :borderBottom='false' :isFixed="false" :background="{background:'rgb(242, 246, 247)'}" title-color="black" :title="$t('mailMessage.gg')"></u-navbar>
			<view class="list">
				<view class="list-item" v-for="item in list">
					<view class="title">{{item.title}}</view>
					<view class="desc">{{item.abstract}}</view>
					<view class="bottom">
						<view class="time">{{item.create_time}}</view>
						<view class="button" @click="toDetail(item.id)">{{$t('mailMessage.detail_botton')}}</view>
					</view>
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
			this.getNews()
		},
		methods: {
			toDetail(id){
				this.$utils.jump('/pages/mailMessage/ggDetail?id='+id)
			},
			//检查更新
			getNews(){
				this.$u.api.index.getNews().then(res=>{
					this.list = res.message.list
				})
			}
		}
	}
</script>

<style>
</style>