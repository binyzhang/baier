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
			<div class="nav clearfix">
				<div
					class="nav-item fl"
					v-for="(item,key) in navLists"
					:key="key"
					:class="{active:active==item.key}"
					@click="active=item.key">
					{{item.value}}
				</div>
			</div>
			<div
				class="nav-content"
				v-for="(item,key) in navLists"
				v-show="active==item.key">
				{{key}}
			</div>
		</div>

	</div>
</template>

<script type="text/javascript">
	export default{
		name: 'Search2',
		data(){
			return{
				searchTxt:'',
				navLists:[
					{key:0,value:'全部'},
					{key:1,value:'资讯'},
					{key:2,value:'话题'},
					{key:3,value:'直播'},
					{key:4,value:'聊天记录'}
				],
				active:0,


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
	.active{
		color: #2F80ED;
		border-bottom: 2px solid #2F80ED;
	}
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
	.nav{
		.nav-item{
			width: 20%;
			text-align: center;
			padding: 40px 0 20px;
			font-size: 32px;
		}
	}
	.nav-content{
		padding: 30px 42px;
		font-size: 32px;
	}
</style>
