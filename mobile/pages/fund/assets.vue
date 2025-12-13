<template>
	<view>
		<view style="transform: translateX(0px); opacity: 1; position: fixed; inset: 0px; transition: -webkit-transform 300ms ease 0ms, transform 300ms ease 0ms; transform-origin: 50% 50%;">
			<view class="status_bar"></view>
			<scroll-view>
				<view style="height: 1500rpx;overflow-y: auto;">
					
					<view class="m-30">
						<view class="deposit bg">
							<view class="d-flex align-items-center">
								<text class="d-block font-size-28 mr-10">{{i18n.convert}}</text>
								<text class="iconfont icon-yanjing_xianshi font-size-36 text-333"></text>
							</view>
							<view class="mt-30">
								<view class="d-flex align-items-baseline">
									<text class="font-size-40 mr-20 font-weight-bold">{{convert}}</text>
									<text class="font-size-22">USDT</text>
								</view>
							</view>
							<view class="d-block font-size-22 opacity-50 mt-8"> ≈ {{(convert * $store.state.fiat.rate).toFixed(4)}} {{$store.state.fiat.currency_code}} </view>
							<view class="earnings-wrap">
								<view class="earnings font-size-22 d-grid-columns-3">
									<view class="">
										<text class="d-block font-size-22 opacity-50">{{i18n.currentProfit}}(USDT)</text>
										<text class="d-block font-size-34 mt-10 font-weight-bold">0.00</text>
									</view>
									<view class="">
										<text class="d-block font-size-22 opacity-50">{{i18n.totalkRevenue}}(USDT)</text>
										<text class="d-block font-size-34 mt-10 font-weight-bold">0.00</text>
									</view>
									<view class="">
										<text class="d-block font-size-22 opacity-50">{{i18n.profitRatio}}(USDT)</text>
										<text class="d-block font-size-34 mt-10 font-weight-bold">0.00</text>
									</view>
								</view>
							</view>
							<view class="dealer bg text-white" style="background: rgb(255, 255, 255);" @click="$utils.jump('/pages/fund/assets_all_record')">
								<text class="mr-10">{{i18n.record}}</text>
								<image src="/static/image/icon/copytrade-icon-1.png" style="width: 9rpx;height: 14rpx;"></image>
							</view>
						</view>
						<view class="d-grid-columns-3 pt-38 mb-24 mx-30">
							<view class="text-center " v-for="item in subNav" @click="$utils.jump(item.url)">
								<image :src="item.icon" style="width:46rpx;height: 46rpx;"></image>
								<text class="d-block font-size-22 mt-12 text-white">{{item.name}}</text>
							</view>
						</view>
					</view>
					<view class="m-30">
						<u-subsection :list="nav" v-if="showNav" :current="current" @change="tabsChange"></u-subsection>
						<view class="mt-30">
							<view class="d-flex d-flex-between-center">
								<u-checkbox-group shape="circle" @change="filterShowList">
									<u-checkbox v-model="hidden"></u-checkbox>{{i18n.hiden_zero}}
								</u-checkbox-group>
								<view style="width: 150rpx">
									<u-search bg-color="transparent" border-color="rgb(58, 58, 58)" :placeholder="$t('common.search')" v-model="keyword" :show-action="false" @change="filterShowList"></u-search>
								</view>
							</view>
							<view class="p-30 mt-30 box-shadow border-radius-20 mb-20 bg-white text-white" v-for="item in showList"
								@click="$utils.jump(`/pages/fund/assets_record?currency=${item.currency}&type_id=${currentAssetsType.id}&type_name=${currentAssetsType.name}`)">
								<view class="d-flex-between-center">
									<text class="font-size-32 font-weight-bold">{{item.currency_name }}</text>
									<u-icon name="arrow-right" color="#999"></u-icon>
								</view>
								<view class="d-grid-columns-3 mt-30" style="grid-column-gap:20rpx">
									<view class="">
										<text class="d-block font-size-28 opacity-50">{{i18n.availableQuota}}</text>
										<text class="d-block font-size-28 mt-10 font-weight-bold">{{item.balance.toFixed(4)}}</text>
									</view>
									<view class="">
										<text class="d-block font-size-28 opacity-50">{{i18n.locked}}</text>
										<text
											class="d-block font-size-28 mt-10 font-weight-bold">{{item.lock_balance.toFixed(4)}}</text>
									</view>
									<view class="">
										<text class="d-block font-size-28 opacity-50">{{i18n.converted}}(USDT)</text>
										<text class="d-block font-size-28 mt-10 font-weight-bold">
											{{item.usdt_balance}}
										</text>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
			<view class="tab-bar">
				<view :class="'tab-bar-item' + (navActive==index?' router-link-active':'') " v-for="(item,index) in navs" @click="toNav(index)">
					<view :class="'tab_img' + (navActive==index?' tab_img_select':'') ">
						<image :src="'/static/image/nav/nav-'+(index+1)+(navActive==index?'-active':'')+'.svg'"></image>
					</view>
					<view class="tab_text" :style="navActive==index?'color: rgb(39, 109, 255)':''">
						{{item}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 0:change,1:lever,2:legal,3:micro
				current: 0,
				convert: 0,
				navActive:4,
				hidden: false,
				keyword: '',
				showList: [],
				originalList: {},
				currentAssetsType: {},
				showNav:true,
			};
		},
		onLoad() {
			const _this = this
			uni.setNavigationBarTitle({
				title:_this.$t("nav")[4]
			})
		},
		onShow() {
			
			const i18n = this.$t("fund")
			this.nav = [{
					name: i18n.exchange
				}, {
					name: i18n.leverage
				}, {
					name: i18n.fiat
				}, {
					name: i18n.second
				}]
			
			// this.showNav = false
			// setTimeout(()=>{
			// 	this.showNav = true
			// },100)
				
			// this.$utils.setTabbar(this)
			// uni.showTabBar()
			this.getWalletList()
		},
		methods: {
			filterShowList(){
				switch (this.current) {
					case 0:
						this.showList = this.originalList.change_wallet.balance.filter(item => {
							if(item.currency_name.indexOf(this.keyword) > -1 && (!this.hidden||item.change_balance>0)) return item
						});
						break;
					case 1:
						this.showList = this.originalList.lever_wallet.balance.filter(item => {
							if(item.currency_name.indexOf(this.keyword) > -1 && (!this.hidden||item.lever_balance>0)) return item
						});
						break;
					case 2:
						this.showList = this.originalList.legal_wallet.balance.filter(item => {
							if(item.currency_name.indexOf(this.keyword) > -1 && (!this.hidden||item.legal_balance>0)) return item
						});
						break;
					case 3:
						this.showList = this.originalList.micro_wallet.balance.filter(item => {
							if(item.currency_name.indexOf(this.keyword) > -1 && (!this.hidden||item.micro_balance>0)) return item
						});
						break;
				}
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
			// tabs通知swiper切换
			tabsChange(index) {
				this.current = index
				this.setShowList()
			},
			getWalletList() {
				this.$u.api.wallet.getWalletList().then(res => {
					this.originalList = res.message
					const convert = Number(res.message.change_wallet.usdt_totle) + Number(res.message.lever_wallet
						.usdt_totle) + Number(res.message.legal_wallet.usdt_totle) + Number(res.message
						.micro_wallet.usdt_totle)

					this.originalList.change_wallet.balance.forEach(item => {
						item.balance = Number(item.change_balance)
						item.lock_balance = Number(item.lock_change_balance)
						item.usdt_balance = parseFloat((Number(item.change_balance) * Number(item
							.usdt_price)).toFixed(4))
					});

					this.originalList.lever_wallet.balance.forEach(item => {
						item.balance = Number(item.lever_balance)
						item.lock_balance = Number(item.lock_lever_balance)
						item.usdt_balance = parseFloat((Number(item.lever_balance) * Number(item
							.usdt_price)).toFixed(4))
					});

					this.originalList.legal_wallet.balance.forEach(item => {
						item.balance = Number(item.legal_balance)
						item.lock_balance = Number(item.lock_legal_balance)
						item.usdt_balance = parseFloat((Number(item.legal_balance) * Number(item
							.usdt_price)).toFixed(4))
					});

					this.originalList.micro_wallet.balance.forEach(item => {
						item.balance = Number(item.micro_balance)
						item.lock_balance = Number(item.lock_micro_balance)
						item.usdt_balance = parseFloat((Number(item.micro_balance) * Number(item
							.usdt_price)).toFixed(4))
					});

					this.convert = convert.toFixed(4)
					this.setShowList()
				})
			},
			setShowList() {
				switch (this.current) {
					case 0:
						this.showList = this.originalList.change_wallet.balance;
						this.currentAssetsType = this.$store.state.assetsType[1];
						break;
					case 1:
						this.showList = this.originalList.lever_wallet.balance;
						this.currentAssetsType = this.$store.state.assetsType[2];
						break;
					case 2:
						this.showList = this.originalList.legal_wallet.balance;
						this.currentAssetsType = this.$store.state.assetsType[0];
						break;
					case 3:
						this.showList = this.originalList.micro_wallet.balance;
						this.currentAssetsType = this.$store.state.assetsType[3];
						break;
				}
			}
		},
		computed: {
			navs() {
				return this.$t("nav")
			},
			i18n() {
				return this.$t("fund")
			},
			subNav(){
				const i18n = this.$t("fund")
				return [{
						name:i18n.receive,
						icon: require('static/image/icon/mine-nav-1.png'),
						url: '/pages/fund/select?url=receive'
					},{
						name:i18n.withdraw,
						icon: require('static/image/icon/mine-nav-2.png'),
						url: '/pages/fund/withdraw'
					},
					{
						name:i18n.transfer,
						icon: require('static/image/icon/mine-nav-3.png'),
						url: '/pages/fund/fundTransfer'
					},
				]
			}
		},
		watch:{
			keyword(){
				this.filterShowList()
			},
			hidden(){
				this.filterShowList()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.nav {
		background: url(../../static/image/icon/nav-shadow.png), #ff0000;
		background-size: auto 100%;
		background-position: 606rpx;
	}
	.bg {
		background: url(../../static/img/zc-bg.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
	.dealer {
		position: absolute;
		top: 26rpx;
		right: 0;
		border-radius: 31rpx 0 0 31rpx;
		background-image: linear-gradient(to right, #574625, #6B552D);
		padding: 14rpx 44rpx;
		display: flex;
		align-items: center;
	}
	.u-checkbox__icon-wrap--checked {
	    color: #fff;
	    background-color: #2979ff;
	    border-color: #2979ff;
	}
</style>
