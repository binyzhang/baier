<template>
	<div class="search" ref="search">
		<div class="search-wrapper">
			<div class="close">
				<span @click="$router.go(-1)">×</span>
			</div>
			<div class="search-ipt">
				<input type="text" name="" v-model="searchTxt">
				<i class="icon-search"></i>
			</div>
			<div class="item item1">
				<div class="item-title">资讯</div>
				<div class="item-content clearfix">
					<div class="item-info fl" v-for="(item,key) in informationContent" :key="key">
						{{item}}
					</div>
				</div>
			</div>
			<div class="item">
				<div class="item-title">话题</div>
				<div class="item-content clearfix">
					<div class="item-info fl" v-for="(item,key) in topicContent" :key="key">
						{{item}}
					</div>
				</div>
			</div>
			<div class="item">
				<div class="item-title">直播</div>
				<div class="item-content clearfix">
					<div class="item-info fl" v-for="(item,key) in broadcastContent" :key="key">
						{{item}}
					</div>
				</div>
			</div>
			<div class="item">
				<div class="item-title">聊天记录</div>
				<div class="item-content clearfix">
					<div class="item-info fl" v-for="(item,key) in chartContent" :key="key">
						{{item}}
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script type="text/javascript">
	export default{
		name: 'Search',
		data(){
			return{
				searchTxt:'',
				informationContent:['双色球','精准预算','娱乐','七乐彩','福彩3D','概率','福彩政策'],
				topicContent:['双色球','精准预算','娱乐','七乐彩'],
				broadcastContent:['双色球'],
				chartContent:['推荐号码']

			}
		},
		mounted () {
	    this.$nextTick(() => {
	      this._initScroll()
	    })
	  },
	  methods: {
	    _initScroll () {
	      this.discoveryScroll = new this.$BScroll(this.$refs.search, {
	        click: true
	      })
	    }
	  }

	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	@import "~assets/stylus/index";

	.close{
		text-align: right;
		padding-right: 21px;
		padding-top: 21px;
		color: #ccc;
		span{
			font-size:54px;
		}
	}
	.search-ipt{
		text-align: center;
		position: relative;
		padding-left: 50px;
		padding-bottom: 1px;
		height: 60px;
		width: 600px;
		margin: 0 auto;
		border-bottom: 1px solid #ccc;
		.icon-search{
			position: absolute;
			top: 0px;
			left: 0px;
			width: 44px;
      height: 44px;
      background: url("../../assets/img/search-btn.png") no-repeat;
      background-size: cover;
		}
		input{
			position: absolute;
			top: 0px;
			left: 50px;
			width: 600px;
			height: 59px;
			font-size: 14px;
			outline: none;
			font-size: 32px;
		}
	}

	.item{
		width: 650px;
		margin: 0 auto;
		.item-title{
			padding: 36px 0;
			color: #454F63;
			opacity: 0.6;
			font-size: 30px;
		}
		.item-content{
			color: #454F63;
			.item-info{
				font-size: 32px;
				margin: 30px 0;
				width: 20%;
				text-align: center;
			}
		}
	}
	.item1{
		margin-top: 40px;
	}
</style>
