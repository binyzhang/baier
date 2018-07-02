<template>
   <div class="reward" ref="reward">
     <div class="reward-wrapper">
       <div class="header">
         <div class="title">开奖</div>
         <div class="icons">
           <!--<img src="./static/img/dateicon.png" class="deteicon" >-->
           <!--<img src="./static/img/mesage.png" class="messageicon">-->
         </div>
       </div>

       <div class="reward-body">
         <ul class="nav">
           <li class="cur">列表</li>
           <li >走势图</li>
           <li >专家预测</li>
           <li >开奖直播</li>
         </ul>

         <ul class="openlist">
           <li class="open-item open-item-last">
             <div class="open-item-tit">
               <span class="date1">第20180524期  </span>
               <span class="date2">2018-05-24（周四）</span>
             </div>
             <div class="open-item-number">
               <span class="open-item-number-left">01</span>
               <span class="open-item-number-left">02</span>
               <span class="open-item-number-left">03</span>
               <span class="open-item-number-left">04</span>
               <span class="open-item-number-left">05</span>
               <span class="open-item-number-left">06</span>
               <span class="open-item-number-right">08</span>
             </div>
             <span class="aray"> > </span>
           </li>
           <li class="open-item ">
             <div class="open-item-tit">
               <span class="date1">第20180524期  </span>
               <span class="date2">2018-05-24（周四）</span>
             </div>
             <div class="open-item-number">
               <span class="open-item-number-left">01</span>
               <span class="open-item-number-left">02</span>
               <span class="open-item-number-left">03</span>
               <span class="open-item-number-left">04</span>
               <span class="open-item-number-left">05</span>
               <span class="open-item-number-left">06</span>
               <span class="open-item-number-right">08</span>
             </div>
             <span class="aray"> > </span>

             <div class="haswin">

               <!--<img src="./static/img/avstor.png" alt="" class="useravstor">-->

               <span class="open-item-number-left">01</span>
               <span class="open-item-number-left">02</span>
               <span class="open-item-number-left">03</span>
               <span class="open-item-number-left">04</span>
               <span class="open-item-number-left">05</span>
               <span class="open-item-number-left">06</span>
               <span class="open-item-number-right">08</span>
               <span class="onemore">
                再试<br/>一次
              </span>
             </div>

           </li>
           <li class="open-item ">
             <div class="open-item-tit">
               <span class="date1">第20180524期  </span>
               <span class="date2">2018-05-24（周四）</span>
             </div>
             <div class="open-item-number">
               <span class="open-item-number-left">01</span>
               <span class="open-item-number-left">02</span>
               <span class="open-item-number-left">03</span>
               <span class="open-item-number-left">04</span>
               <span class="open-item-number-left">05</span>
               <span class="open-item-number-left">06</span>
               <span class="open-item-number-right">08</span>
             </div>
             <span class="aray"> > </span>
           </li>
           <li class="open-item ">
             <div class="open-item-tit">
               <span class="date1">第20180524期  </span>
               <span class="date2">2018-05-24（周四）</span>
             </div>
             <div class="open-item-number">
               <span class="open-item-number-left">01</span>
               <span class="open-item-number-left">02</span>
               <span class="open-item-number-left">03</span>
               <span class="open-item-number-left">04</span>
               <span class="open-item-number-left">05</span>
               <span class="open-item-number-left">06</span>
               <span class="open-item-number-right">08</span>
             </div>
             <span class="aray"> > </span>
           </li>
           <li class="open-item ">
             <div class="open-item-tit">
               <span class="date1">第20180524期  </span>
               <span class="date2">2018-05-24（周四）</span>
             </div>
             <div class="open-item-number">
               <span class="open-item-number-left">01</span>
               <span class="open-item-number-left">02</span>
               <span class="open-item-number-left">03</span>
               <span class="open-item-number-left">04</span>
               <span class="open-item-number-left">05</span>
               <span class="open-item-number-left">06</span>
               <span class="open-item-number-right">08</span>
             </div>
             <span class="aray"> > </span>
           </li>
         </ul>
       </div>

       <div class="swiper-wrapper">
         <swiper :options="swiperOption" ref="mySwiper" >
           <!-- slides -->
           <swiper-slide class="cur">
            <span class="swiper-name">
                双色球
            </span>
             <!--<img src="./static/img/re1.png" alt="">-->
           </swiper-slide>
           <swiper-slide>
            <span class="swiper-name">
                快三
            </span>
             <!--<img src="./static/img/re2.png" alt="">-->
           </swiper-slide>
           <swiper-slide>
            <span class="swiper-name">
                福彩3D
            </span>
             <!--<img src="./static/img/re3.png" alt="">-->
           </swiper-slide>
           <swiper-slide>
            <span class="swiper-name">
                福彩3D
            </span>
             <!--<img src="./static/img/re3.png" alt="">-->
           </swiper-slide>
           <swiper-slide>
            <span class="swiper-name">
                福彩3D
            </span>
             <!--<img src="./static/img/re3.png" alt="">-->
           </swiper-slide>
           <swiper-slide>
            <span class="swiper-name">
                福彩3D
            </span>
             <!--<img src="./static/img/re3.png" alt="">-->
           </swiper-slide>
           <swiper-slide>
            <span class="swiper-name">
                福彩3D
            </span>
             <!--<img src="./static/img/re3.png" alt="">-->
           </swiper-slide>
           <!-- Optional controls -->
         </swiper>
       </div>
     </div>
   </div>
</template>

<script>
export default {
  name : 'reward',
  data () {
    return {
      swiperOption: {
        autoPlay : false,
        slidesPerView: 'auto',
        paginationClickable: true,
        spaceBetween:12
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this._initScroll()
    })
  },
  methods: {
    _initScroll () {
      if (!this.rewardScroll) {
        this.rewardScroll = new this.$BScroll(this.$refs.reward, {
          click: true
        })
      }
    }
  }
}
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
.reward{
  width: 100%;
  heihgt: 100%;
  overflow: hidden;
}
.header
  padding:80px 40px 60px
  position:relative
  .title
    font-size:60px
    font-weight:bold
    color:#454f63
  .icons
    position:absolute
    right:40px
    top :90px
    img
      width:42px
      height:42px
    .messageicon
      margin-left:60px
.swiper-wrapper >>> .swiper-container
  padding-bottom: 42px
.swiper-wrapper >>> .swiper-slide
  width: 200px
  height: 200px
  background: #ccc
  border-radius: 5px
  position: relative
  box-shadow: 0 5px 30px #ccc
.swiper-wrapper
  padding-left: .4rem
  height: 200px
  .swiper-slide
    img
      width: 100%
    .swiper-name
      position: absolute
      left: 20px
      top: 20px
      font-size: 28px
      color: #9b9b9b
  .cur
    .swiper-name
      color: #ff6348

.reward-body
  padding: 43px 40px 20px
  .nav
    overflow: hidden
    li
      float: left
      font-size: 26px
      height: 44px
      line-height: 40px
      position: relative
      margin-right: 53px
      color: #9fa3ab
    li.cur
      color: #454f63
    li.cur:before
      content: ''
      position: absolute
      bottom: 0rem
      left: 0rem
      height: 4px
      border-radius: 4px
      width: 100%
      background: linear-gradient(to right, #67d1f3 , #3082ed);
  .open-item
    font-size: 0
    position: relative
    padding: 33px 0 0 0
    .open-item-tit
      font-size: 22px
      margin-bottom: 18px
      .date1
        color: #78849e
        margin-right: 20px
      .date2
        color: #c3c7d2
    .open-item-number-left,.open-item-number-right
      width: 68px
      height: 68px
      border: 1px solid #ff5961
      color: #ff5961
      text-align: center
      line-height: 68px
      font-size: 32px
      display: inline-block
      border-radius: 100px
      margin-right: 15px
    .open-item-number-right
      color: #65cff9
      border-color: #65cff9
    .aray
      position: absolute
      right: 0
      top: 85px
      color:shade #bbc1ce
      font-size: 22px
  .open-item-last
    .open-item-number-left
      background: #ff5961
      color: #fff
    .open-item-number-right
      background: #65cff9
      color: #fff
  .haswin
    padding-top: 20px
    position: relative
    padding-left: 76px
    .useravstor
      position: absolute
      width: 68px
      height: 68px
      border-radius: 68px
      background: #d4a1a1
      left: 0
      top: 20px
    .onemore
      background: linear-gradient(to bottom right,  #67d1f3 , #3082ed)
      position: absolute
      right: -20px
      top: 16px
      height: 80px
      width: 80px
      border-radius: 80px
      color: #fff
      font-size: 24px
      text-align: center
      padding-top: 16px
      box-sizing: border-box
    .open-item-number-left,.open-item-number-right
      width: 68px
      height: 68px
      box-sizing: border-box
    .open-item-number-left
      border-color: #e8e8e8
      color: #ff5961
      font-size: 30px
      margin-right: 7px
    .open-item-number-right
      border-color: #e6e6e6
      color: #a8e4fb
</style>
