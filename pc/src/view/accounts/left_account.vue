<template>
	<div class="partialmenu _flex-shrink bg-main" style="border-right: 3px solid white;">
		<div class="_flex partialmenu-li" :class="index == curActive ? 'router-link-active' :''" v-for="(item,index) in array" :key="index">
			<router-link :to="item.page">
				<img :src="curActive == index ? item.src2:item.src1" class="iconfont mr10">
				<span>{{item.text}}</span>
			</router-link>
		</div>
	</div>
</template>
<script>
	export default {
		name: "left_account",
		data() {
			return {
				curActive:0,
				array:[
					{
						src1: require("@/assets/images/change1.png"),
						src2: require("@/assets/images/change2.png"),
						text: this.$t('indexHeader.my_Assets'),
						icon:'icon-bibijiaoyi',
						page: 'change',
						children: ['change']
					},
					 {
						src1: require("@/assets/images/uorder1.png"),
						src2: require("@/assets/images/uorder2.png"),
					 	text: this.$t('uorder.order_center'),
            			icon:'icon-huazhuan',
					 	page:'UOrder',
					 	children:['UOrder']
					 },
					
				],
			}
		},
		created(){
		},
		mounted(){
			this.bus.$on("nav_name", name =>{
				console.log(0,name)
				this.curActive = this.array.findIndex( val => val.page === name || (val.children && val.children.includes(name))) ;
				if(this.curActive == -1){
					this.curActive = 0
				}
			})
		},
		watch: {
			'$route.name': {
				immediate: true, // 这句重要
				handler(val) {
					let name = this.$route.name;
					this.curActive = this.array.findIndex( val => val.page === name || (val.children && val.children.includes(name)))
					if(this.curActive == -1){
						this.curActive = 0
					}
				},
				deep: true
			}
		},
		methods: {
			goto(index,name) {
				this.curActive=index;
				this.$router.push({name: name, params: {lang: this.lang}})
			},

		}
	};
</script>
<style lang="scss" scoped>
	.bg-main {
		background-color: #fff;
		color: #000;
	}
	._flex-shrink {
		flex-shrink: 0;
	}
	.partialmenu {
		box-sizing: border-box;
		width: 260px;
		height: 100%;
	}
	.partialmenu-li {
		padding: 18px 0 18px 30px;
		font-size: 14px;
		color: #000;
		border-left: 3px solid transparent;
	}
	.partialmenu-li.router-link-active, .partialmenu-li:hover {
		background-color: #f7f7fa;
		color: #000;
		border-left-color: #276cff;
	}
	.partialmenu-li img {
		margin-right: 9px;
		width: 16px;
		height: 16px;
	}
	.partialmenu-li {
		padding: 18px 0 18px 30px;
		font-size: 14px;
		color: #000;
		border-left: 3px solid transparent;
	}
</style>
