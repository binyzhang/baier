<template>
	<div class="news" ref="news">
		<div class="news-warpper">
			<div class="news-box">
				<div class="news-title">{{news.title}}</div>
				<div class="little-title">{{news.source}}·{{news.time}}</div>
				<img :src="news.imgUrl" alt="">
				<div class="words-wrap">
					<div class="words"
								v-for="(item, index) in news.paragraph"
								:key="index">{{item.words}}</div>
				</div>
				<div class="tip">
					<span class="tip-pre">{{news.tip}}</span>
					<router-link class="tip-view" to="">{{news.view}}</router-link>
				</div>
			</div>
			<!-- 精彩推荐 -->
			<div class="recommend">
				<div class="recommend-title">精彩推荐</div>
				<info-list :infoListMsg="recommend"></info-list>
			</div>
			<div class="comment">
				<div class="comment-title">{{comment.title}}</div>
				<div class="comment-item clearfix"
					v-if="comment.lists"
					v-for="(item, index) in comment.lists"
					:key="index">
					<div class="comment-item-left fl">
						<img class="comment-item-avatar"
									:src="item.avatar" alt="">
					</div>
					<div class="comment-item-right fl">
						<div class="comment-item-source">{{item.name}}</div>
						<div class="comment-item-words">{{item.words}}</div>
						<div class="comment-item-tip">
							<div class="comment-item-time">{{item.time}}</div>
							<div class="comment-item-num">
								<i>
									<img src="../../../static/img/hander1.jpg" alt="" v-if="item.isActive">
									<img src="../../../static/img/hander3.jpg" alt="" v-else>
								</i>
								<span>{{item.num}}</span>
							</div>
						</div>
						<div class="comment-item-follow-wrap" v-if="item.followName">
							<div class="comment-item-followBox">
								<span class="comment-item-followBox-followName">{{item.followName}}</span>
								<span class="comment-item-followBox-followWords">：{{item.followWords}}</span>
							</div>
							<div class="comment-item-followBox"
										v-if="item.followed"
										v-for="(list, index) in item.followed"
										:key="index">
								<span class="comment-item-followBox-followName">{{list.followedName}}</span>
								<span>回复</span>
								<span class="comment-item-followBox-followName">{{list.name}}</span>
								<span>：{{list.words}}</span>
							</div>
							<div class="checkAll-box">
								<div class="checkAll">查看全部{{comment.listNums}}条评论</div>
							</div>
						</div>
					</div>
				</div>
				<div class="comment-add">
					<input type="text" placeholder="我知道你有话说" @click="open">
					<div class="icons">
						<div class="comment-icons">
							<img src="../../../static/img/comment.png" alt="">
							<span>评论({{comment.totalNum}})</span>
						</div>
						<div class="comment-icons">
							<img src="../../../static/img/star.png" alt="">
							<span>收藏</span>
						</div>
						<div class="comment-icons">
							<img src="../../../static/img/share.png" alt="">
							<span>分享</span>
						</div>
					</div>
				</div>
			</div>
			
		</div>
		<div class="zan" v-show="!isShow">
			<img src="../../../static/img/hander2.jpg">
		</div>
		<div class="model" v-if="isShow">
      <div class="message-box">
        <div class="message-title clearfix">
        	<div class="cancel fl" @click="cancel">取消</div>
        	<div class="submit fr" @click="submit">发布</div>
        </div>
        <div class="message-content">
        	<textarea class="textarea" placeholder="有何高见，展开讲讲"></textarea>
        </div>
      </div>
    </div>
	</div>
</template>

<script>
	import infoList from '@/components/info-list'
	export default {
    name: 'News',
    data() {
			return {
				news :{
					title: '堪培拉男子获422万澳元大奖\n兴奋到难以入眠',
					source: '江门福彩',
					time: '2天前',
					imgUrl: '../../../static/img/video-1.png',
					paragraph: [
						{
							words: '中新网 6 月 11 日电 据澳洲网报道，堪培拉一名男子近日幸运地成为 422 万元 ( 澳元 ) 彩票大奖的得主，但是他没有立即去领奖，当工作人家打电话通知他时，他表示自己这几天一直都处于"兴奋地无法入眠的状态。\n\n'
						},
						{
							words: '澳新网 8 日报道，这名幸运的男子今年 30 多岁他近日成为强力球彩票 422 万元大奖的得主，但是一直未去领奖。8 日早上，彩票公司的工作人员打电话"通知"他中奖的消息，不过这名男子表示，自己开奖后就知道自己中了大奖。"我一夜未眠，我不知道要拿这些钱做什么，我惊呆了，我每天都傻乐着。"这名男子在接受采访时说。'
						}
					],
					tip: '原网页由彩票盒子转码以便移动设备阅读',
					view: '查看原文'
				},
				recommend: [
					{
						title: '江西福彩助力“福彩杯”中小学生乒乓球赛和双拥篮球赛',
						address: '江门福彩',
						time: '2天前',
						src: './static/img/info-2.png'
					},
					{
						title: '山东福彩助力“福彩杯”中小学生乒乓球赛和双拥篮球赛',
						address: '山东福彩',
						time: '1天前',
						src: './static/img/info-3.png'
					}
				],
				comment: {
					title: '热门评论',
					listNums: 6,
					lists: [
						{
							avatar: '../../../static/img/avatar-1.png',
							name: '打南边来了个喇嘛',
							words: '这简直太幸运了吧！啊！我什么时候也可以？',
							time: '2小时前',
							isActive: true,
							num: '106',
							followName: '奔波儿灞',
							followWords: '越努力越幸运啊！加油加油……你是最棒的！',
							followed: [
								{
									followedName: 'baboer',
									name: '奔波儿灞',
									words: '越努力越幸运啊！加油加油……你是最棒的！'
								},
								{
									followedName: '打南边来了个喇嘛',
									name: '奔波儿灞',
									words: '越努力越幸运啊！加油加油……你是最棒的！'
								}
							]
						},
						{
							avatar: '../../../static/img/avatar-2.png',
							name: '起个很长的名字假装歪果仁',
							words: '社会社会，改明儿我也买它一沓彩票，把彩票店给包下来！',
							time: '2小时前',
							isActive: false,
							num: '106'
						}
					],
					totalNum: 20
				},
				isShow:false,
				newsScroll:''
			}
	},
	mounted () {
		this.$nextTick(() => {
			this._initScroll()
		})
	},
	methods: {
		_initScroll () {
			this.newsScroll = new this.$BScroll(this.$refs.news, {
				click: true
			})
		},
		open(){
			document.querySelector('body').style.overflow='hidden;'
			this.isShow=true;
			// this.newsScroll.disable()
		},
		cancel(){
			this.isShow=false;
			// this.newsScroll.enable()
		},
		submit(){
			//发送请求
			this.isShow=false;
			// this.newsScroll.enable()
		}
	},
  components: {
	infoList
  }
}
</script>

<style lang="stylus" scoped>
@import "~assets/stylus/index";

/* news start */
.news {
	box-sizing: border-box;
	padding:42px;
	height: 100%;
	&-warpper {
		padding-top:100px;
		padding-bottom: 320px;
		.news-box {
			.little-title {
				font-size: 24px;
				line-height: 72px;
				color: #78849E;
			}
			img {
				width: 560px;
				display: block;
				margin: 20px auto;
			}
			.words-wrap {
				.words {
					font-size: 30px;
					line-height: 50px;
					color: #454F63;
					white-space: pre-wrap;
					text-align: justify;
				}
			}
			.tip {
				text-align: center;
				height: 120px;
				&-pre {
					font-size: 24px;
					color: #B5BBC8;
					line-height: 120px;
				}
				&-view {
					color: #3A8DEA;
				}
			}
		}
		.recommend {
			&-title {
				height: 112px;
				line-height: 112px;
				border-bottom: 2px solid #F4F4F4;
				color: #454F63;
				font-size: 32px;
				font-weight: 700;
				margin: 40px 0;
			}
		}
		.comment {
			&-title {
				height: 112px;
				line-height: 112px;
				border-bottom: 2px solid #F4F4F4;
				color: #454F63;
				font-size: 32px;
				font-weight: 700;
				margin-top: 40px;
			}
			&-item {
				position: relative;
				padding: 40px 0 40px 72px;
				border-bottom: 2px solid #F4F4F4;
				&-left {
					width: 52px;
					position: absolute;
					top: 40px;
					left: 0;
					img {
						display: block;
						width: 100%;
						border-radius: 8px;
					}
				}
				&-right {
					width: 100%;
					font-size: 28px;
					line-height: 32px;
					color: #454F63;
				}
				&-source {
					color: #3A8DEA;
				}
				&-words {
					color: #454F63;
				}
				&-tip {
					margin-top: 12px;
					display: flex;
					justify-content: space-between;
					align-items: center;
				}
				&-time {
					color: #78849E;
					font-size: 20px;
				}
				&-num {
					color: #FB4747;
					font-size: 20px;
					i{
						display: inline-block;
						width: 35px;
						height: 35px;
						vertical-align: middle;
						img{
							width: 100%;
							height: 100%;
							
						}
					}
				}
				&-follow-wrap {
					padding: 26px;
					box-sizing: border-box;
					background: #F0F0F0;
					margin-top: 24px;
					border-radius: 8px;
					.checkAll-box {
						display: flex;
						justify-content: flex-end;
						align-items: center;
						.checkAll {
							color: #3A8DEA;
						}
					}
				}
				&-followBox {
					font-size: 28px;
					line-height: 32px;
					margin-bottom: 24px;
					&-followName {
						color: #3A8DEA;
					}
				}
			}
			&-add {
				box-sizing: border-box;
				margin: 26px 0;
				display: flex;
				justify-content: space-between;
				align-items: center;
				input {
					width: 50%;
					height: 40px;
					color: #333;
					font-size: 28px;
					line-height: 40px;
					border-left: 2px solid #56CCF2;
					padding-left: 6px;
					box-sizing: border-box;
					outline: none;
				}
				.icons {
					display: flex;
					justify-content: space-between;
					align-items: center;
					width: 50%;
					.comment-icons {
						width: 33.3%;
						text-align:center;
						img {
							display: block;
							width: 40px;
							margin: 0 auto;
						}
						span {
							display: block;
							text-align:center;
							font-size: 18px;
							color: #454F63;
							margin-top: 12px;
						}
					}
				}
			}

		}
	}
	&-title {
		color: #454F63;
		font-size: 44px;
		font-weight: 700;
		line-height 58px;
		white-space: pre-wrap;
	}
}
.zan{
	position: absolute;
	bottom: 150px;
	right: 50px;
	width: 100px;
	height: 100px;
	border-radius: 50%;
	background-color: #fff;
	box-shadow: 10px 10px 10px #ccc;
	overflow: hidden;
	img{
		width: 100%;
		height: 100%
	}
}
.model{
      position: fixed;
      top: 0;
      left: 0;
      z-index: 2001;
      background: rgba(0,0,0,.4);
      width: 100%;
      height: 100%;
      overflow: hidden;
      .message-box{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 600px;
        background: #fff;
        border-radius: 10px;
        font-size: 32px;
        overflow: hidden;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        padding-bottom: 20px;
        .message-title{
        	height: 30px;
          padding: 40px 50px 40px;
          text-align: center;
          .cancel{
          	color: #B5BBC8;
          }
          .submit{
          	color: #78849E;
          }
        }
        .message-content{
        	padding: 40px 50px;
					height: 370px;
					.textarea{
						outline: none;
						border: none;
						height: 100%;
						width: 100%;
						font-size: 32px;
						line-height: 40px;
					}
        }
      }
    }
</style>
