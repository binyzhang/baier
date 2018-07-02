<template>
  <section class="index" ref="index">
    <div class="index-wrapper">
      <div class="index-container">
        <!-- header start -->
        <header class="header">
          <i class="scan-icon"></i>
          <h2 class="header-title">中国福彩•舞象彩票店</h2>
          <i class="order-icon"></i>
        </header>
        <!-- header end -->
        <!-- carousel start -->
        <section class="banner">
          <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="(item, index) in banner" :key="index">
              <img :src="item.imgSrc" alt="" class="banner-img">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"><span class="swiper-pagination-current">1</span>/<span class="swiper-pagination-total">{{banner.length}}</span></div>
          </swiper>
        </section>
        <!-- carousel end -->
        <!-- nav start -->
        <section class="nav">
          <ul class="nav-container">
            <li class="nav-item">
              <div class="nav-item-icon-container"></div>
              <p class="nav-item-name">合买跟单</p>
            </li>
            <li class="nav-item">
              <div class="nav-item-icon-container"></div>
              <p class="nav-item-name">扫码兑奖</p>
            </li>
            <li class="nav-item">
              <div class="nav-item-icon-container"></div>
              <p class="nav-item-name">线下取票</p>
            </li>
            <li class="nav-item">
              <div class="nav-item-icon-container"></div>
              <p class="nav-item-name">彩圈群组</p>
            </li>
          </ul>
        </section>
        <!-- nav end -->
        <!-- 购彩专区模块 start -->
        <section class="common-module buy-lottery-module">
          <header class="common-module-header">
            <h3 class="common-module-header-text buy-lottery-header-text">购彩专区</h3>
          </header>
          <div class="common-module-body">
            <div class="common-card-row">
              <div class="common-card">
                <h4 class="title">双色球</h4>
                <p class="description">累积奖池超过8.6亿</p>
              </div>
              <div class="common-card">
                <h4 class="title">福彩3D</h4>
                <p class="description">节奏快，中奖率高</p>
              </div>
              <div class="common-card">
                <h4 class="title">快三</h4>
                <p class="description">节奏快，中奖率高</p>
              </div>
            </div>
            <div class="common-card-row">
              <div class="common-card">
                <h4 class="title">东方6+1</h4>
                <p class="description">累积奖池超过8亿</p>
              </div>
              <div class="common-card">
                <h4 class="title">七乐彩</h4>
                <p class="description">节奏快，中奖率高</p>
              </div>
              <div class="common-card">
                <h4 class="title">15选5</h4>
                <p class="description">节奏快，中奖率高</p>
              </div>
            </div>
          </div>
        </section>
        <!-- 购彩专区模块 end -->

        <!-- 彩币专区模块 start -->
        <section class="common-module lottery-coin-module">
          <header class="common-module-header">
            <h3 class="common-module-header-text lottery-coin-header-text">彩币专区</h3>
            <span class="more-btn">更多</span>
            <p class="lottery-coin-header-description">商家消费累积彩币</p>
          </header>
          <div class="common-module-body lottery-coin-carousel">
            <swiper :options="swiperOption2" ref="mySwiper2">
              <swiper-slide v-for="(item, index) in coin" :key="index">
                <div class="img-wrapper">
                  <img :src="item.avatarSrc" alt="" class="lottery-img">
                </div>
                <h4 class="title">{{item.title}}</h4>
                <p class="devider"><i class="dot"></i></p>
                <button class="default-btn">{{item.value}}</button>
              </swiper-slide>
            </swiper>
          </div>
        </section>
        <!-- 彩币专区模块 end -->

        <!-- 今日运势 start -->
        <section class="common-module today-luck-module">
          <header class="common-module-header">
            <h3 class="common-module-header-text today-luck-header-text">今日运势</h3>
            <div class="today-luck-time">
              <p class="today-luck-time-text">2018年5月6日 周四</p>
              <p class="today-luck-time-text">农历四月初九 丙申年 丙申月 乙丑日</p>
            </div>
          </header>
          <div class="common-module-body">
            <ul class="today-luck-card-row">
              <li class="today-luck-card" :class="{ 'active': constellationActiveIndex === index }" v-for="(item, index) in constellation" :key="index">
                <div class="constellation" :class="constellationFilter(item)"></div>
                <p class="today-luck-card-desc">{{item}}</p>
              </li>
            </ul>
            <div class="today-luck-choice-row">
              <ul class="today-luck-choice-wrapper">
                <li class="today-luck-choice-item">
                  <div class="today-luck-choice-text">?</div>
                </li>
                <li class="today-luck-choice-item">
                  <div class="today-luck-choice-text">?</div>
                </li>
                <li class="today-luck-choice-item">
                  <div class="today-luck-choice-text">?</div>
                </li>
              </ul>
              <button class="btn-open-luck">马上开运</button>
            </div>
          </div>
        </section>
        <!-- 今日运势 end -->

          <!-- 资讯专区模块 start -->
        <section class="common-module info-module">
          <header class="common-module-header">
            <h3 class="common-module-header-text">资讯专区</h3>
            <span class="more-btn" @click="handleInfoMore">更多</span>
          </header>
          <div class="common-module-body">
            <info-list :infoListMsg="infoListMsg"></info-list>
          </div>
        </section>
        <!-- 资讯专区模块 end -->
      </div>
    </div>
  </section>
</template>

<script>
import infoList from '@/components/info-list'
export default {
  name: 'index',
  data () {
    return {
      swiperOption: {
        loop: true,
        autoplay: true,
        delay: 3000,
        slidesPerView: 'auto',
        spaceBetween: 11,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        }
      },
      banner: [
        {
          imgSrc: './static/img/banner-1.png',
          desc: ''
        },
        {
          imgSrc: './static/img/banner-2.png',
          desc: ''
        },
        {
          imgSrc: './static/img/banner-3.png',
          desc: ''
        },
        {
          imgSrc: './static/img/banner-4.png',
          desc: ''
        }
      ],
      coin: [
        {
          avatarSrc: './static/img/coin-1.png',
          title: '将太无二（北京爱琴海店）',
          value: '20彩币'
        },
        {
          avatarSrc: './static/img/coin-2.png',
          title: '霸蛮牛肉粉·酸辣高汤粉',
          value: '20彩币'
        },
        {
          avatarSrc: './static/img/coin-3.png',
          title: 'PIZZA ZANO',
          value: '20彩币'
        },
        {
          avatarSrc: './static/img/coin-4.png',
          title: '将太无二（北京爱琴海店）',
          value: '20彩币'
        },
        {
          avatarSrc: './static/img/coin-5.png',
          title: '将太无二（北京爱琴海店）',
          value: '20彩币'
        },
        {
          avatarSrc: './static/img/coin-6.png',
          title: '将太无二（北京爱琴海店）',
          value: '20彩币'
        },
        {
          avatarSrc: './static/img/coin-7.png',
          title: '将太无二（北京爱琴海店）',
          value: '20彩币'
        },
        {
          avatarSrc: './static/img/coin-8.png',
          title: '将太无二（北京爱琴海店）',
          value: '20彩币'
        },
        {
          avatarSrc: './static/img/coin-9.png',
          title: '将太无二（北京爱琴海店）',
          value: '20彩币'
        }
      ],
      swiperOption2: {
        slidesPerView: 'auto'
      },
      constellation: [ '白羊', '金牛', '双子', '巨蟹', '狮子', '处女', '天秤' ],
      constellationActiveIndex: 0,
      infoListMsg: [
        {
          title: '江西福彩助力“福彩杯”中小学生乒乓球赛和双拥篮球赛',
          address: '江门福彩',
          time: '2天前',
          src: './static/img/info-1.png'
        },
        {
          title: '山东福彩助力“福彩杯”中小学生乒乓球赛和双拥篮球赛',
          address: '山东福彩',
          time: '1天前',
          src: './static/img/info-2.png'
        },
        {
          title: '山东福彩助力“福彩杯”中小学生乒乓球赛和双拥篮球赛',
          address: '山东福彩',
          time: '1天前',
          src: './static/img/info-3.png'
        }
      ]
    }
  },
  computed: {},
  mounted () {
    this.$nextTick(() => {
      this._initScroll()
    })
  },
  methods: {
    _initScroll () {
      this.indexScroll = new this.$BScroll(this.$refs.index, {
        click: true
      })
    },
    constellationFilter (value) {
      const constellation = {
        '白羊': 'aries',
        '金牛': 'taurus',
        '双子': 'gemini',
        '巨蟹': 'cancer',
        '狮子': 'leo',
        '处女': 'virgo',
        '天秤': 'libra',
        '天蝎': 'scorpio',
        '射手': 'sagittarius',
        '魔羯': 'capricorn',
        '水瓶': 'aquarius: ',
        '双鱼': 'pisces'
      }
      return constellation[value]
    },
    handleInfoMore () {
      this.$router.push({
        path: '/discovery/info'
      })
    }
  },
  components: {
    infoList
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~assets/stylus/index";
.index-container{
  padding-bottom: 20px;
}
/* header start */
.header{
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 88px;
  padding: 0 80px;
  margin-bottom: 41px;
  .header-title{
    height: 88px;
    line-height: 88px;
    text-align: center;
    ft-size($font-size-title);
    color: $color-primary;
    font-weight: bold;
  }
  .scan-icon{
    position: absolute;
    left: 20px;
    top: 27px;
    width: 38px;
    height: 36px;
    background: url("../../assets/img/scan.png") no-repeat;
    background-size: cover;
  }
  .order-icon{
    position: absolute;
    top: 6px;
    right: 0;
    width: 80px;
    height: 76px;
    background: url("../../assets/img/order.png") no-repeat;
    background-size: contain;
  }
}
/* header end */
/* carousel start */
.banner{
  width: 100%;
  height: 342px;
  margin-bottom: 44px;
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    width: 666px;
    border-radius: 8px;
    .banner-img{
      width: 100%;
      height: 100%;
    }
  }
  .swiper-pagination{
    position: absolute;
    left: 600px;
    top: 20px;
    width: 68px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    border-radius: 19px;
    background: rgba(0, 0, 0, 0.5);
    ft-size($font-size-middle-s);
    color: #fff;
  }
}
/* carousel end */

/* nav start */
.nav{
  padding: 0 42px;
  margin-bottom: 80px;
  .nav-container{
    display: flex;
    .nav-item{
      flex: 1;
      .nav-item-icon-container{
        width: 86px;
        height: 86px;
        border-radius: 50%;
        margin: 0 auto;
        background-repeat: no-repeat;
      }
      &:nth-child(1){
        .nav-item-icon-container{
          background-image: url("../../assets/img/nav-1.png");
          background-size: cover;
        }
      }
      &:nth-child(2){
        .nav-item-icon-container{
          bg-img("../../assets/img/nav-2");
          background-size: cover;
        }
      }
      &:nth-child(3){
        .nav-item-icon-container{
          bg-img("../../assets/img/nav-3");
          background-size: cover;
        }
      }
      &:nth-child(4){
        .nav-item-icon-container{
          bg-img("../../assets/img/nav-4");
          background-size: cover;
        }
      }
      .nav-item-name{
        ft-size($font-size-middle);
        color: $color-primary;
        text-align: center;
        line-height: 26px;
      }
    }
  }
}
/* nav end */

/* 模块公共样式 start */
.common-module{
  padding: 0 42px;
  margin-bottom: 80px;
  &:last-child{
    margin-bottom: 0;
  }
  .common-module-header{
    position: relative;
    .common-module-header-text{
      ft-size($font-size-title);
      color: $color-primary;
      font-weight: bold;
      line-height: 100%;
    }
    .more-btn{
      position: absolute;
      right: 0;
      top: 22px;
      width: 70px;
      height: 24px;
      ft-size($font-size-middle);
      color: $color-desc;
      line-height: 100%;
    }
  }
  .common-module-body{
    .common-card-row{
      display: flex;
      justify-content: space-between;
      margin-bottom: 25px;
      &:last-child{
        margin-bottom: 0;
      }
      .common-card{
        flex: 0 0 207px;
        width: 207px;
        border-radius: 6px;
      }
    }
  }
}
/* 模块公共样式 end */

/* 购彩专区模块 start */
.buy-lottery-module{
  .common-module-header{
    margin-bottom: 30px;
  }
  .common-card-row:nth-child(1){
    .common-card{
      &:nth-child(1){
        background: url("../../assets/img/buy-lottery-1.png") no-repeat;
        background-size: cover;
      }
      &:nth-child(2){
        background: url("../../assets/img/buy-lottery-2.png") no-repeat;
        background-size: cover;
      }
      &:nth-child(3){
        background: url("../../assets/img/buy-lottery-3.png") no-repeat;
        background-size: cover;
      }
    }
  }
  .common-card-row:nth-child(2){
    .common-card{
      &:nth-child(1){
        background: url("../../assets/img/buy-lottery-4.png") no-repeat;
        background-size: cover;
      }
      &:nth-child(2){
        background: url("../../assets/img/buy-lottery-5.png") no-repeat;
        background-size: cover;
      }
      &:nth-child(3){
        background: url("../../assets/img/buy-lottery-6.png") no-repeat;
        background-size: cover;
      }
    }
  }
  .common-card{
    box-sizing: border-box;
    height: 275px;
    padding: 24px 16px;
    .title{
      line-height: 36px;
      ft-size($font-size-large);
      color: $color-primary;
      font-weight: bold;
    }
    .description{
      line-height: 25px;
      ft-size($font-size-small-s);
      color: $color-primary;
    }
  }
}
/* 购彩专区模块 end */

/* 彩币专区模块 start */
.lottery-coin-module{
  padding: 0 0 0 23px;
  .common-module-header{
    margin-bottom: 8px;
  }
  .lottery-coin-carousel{
    .swiper-container {
      width: 100%;
      height: 238px;
      padding: 20px 0 20px;
    }
    .swiper-slide {
      box-sizing: border-box;
      width: 206px;
      height: 238px;
      background: #fff;
      margin-right: 24px;
      padding: 18px 26px 14px;
      border-radius: 8px;
      box-shadow: 15px 0px 50px rgba(0,0,0,0.1);
      &:last-child{
        margin-right: 0;
      }
    }
  }
  .img-wrapper{
    width: 72px;
    width: 72px;
    margin: 0 auto 16px;
    .lottery-img{
      width: 100%;
      height: 100%;
    }
  }
  .title{
    height: 60px;
    overflow: hidden;
    line-height: 30px;
    text-align: center;
    ft-size($font-size-middle-s);
    color: $color-primary;
    margin-bottom: 10px;
  }
  .devider{
    display: block;
    width: 100%;
    position: relative;
    height: 5px;
    margin-bottom: 15px;
    &:before{
      position: absolute
      left: 0;
      z-index: 1;
      top: 2px;
      width: 100%;
      border-top: 1px solid $border-color; /*no*/
      content: '';
      border-compatible();
    }
    &:after{
      position: absolute
      left: 50%;
      top: 0;
      z-index: 2;
      width: 26px;
      height: 5px;
      background: #fff;
      content: '';
      transform: translateX(-13px);
    }
    .dot{
      position: absolute;
      left: 50%;
      transform: translateX(-3px);
      z-index: 3;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: $border-color;
    }
  }
  .default-btn{
    display: block;
    width: 100px;
    height: 30px;
    line-height: 28px;
    margin: 0 auto;
    border: 1px solid $btn-border-blue; /*no*/
    border-radius: 8px;
    ft-size($font-size-middle-s);
    color: $color-blue;
  }
}
.lottery-coin-header-text{
  margin-bottom: 10px;
}
.lottery-coin-header-description{
  ft-size($font-size-middle-s);
  line-height: 100%;
  color: $color-desc;
}
/* 彩币专区模块 end */

/* 今日运势 start */
.today-luck-module{
  .common-module-header{
    margin-bottom: 54px;
  }
}
.today-luck-time{
  position: absolute;
  right: 0;
  top: 0;
  ft-size($font-size-middle-s);
  color: $color-desc-l;
  text-align: right;
  line-height: 30px;
}
.today-luck-card-row{
  display: flex;
  justify-content: space-between;
  margin-bottom: 48px;
  .today-luck-card{
    flex: 1;
    .constellation{
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin: 0 auto;
      background-repeat: no-repeat;
      &.aries{
        bg-img("../../assets/img/aries");
        background-size: cover;
      }
      &.taurus{
        bg-img("../../assets/img/taurus");
        background-size: cover;
      }
      &.gemini{
        bg-img("../../assets/img/gemini");
        background-size: cover;
      }
      &.cancer{
        bg-img("../../assets/img/cancer");
        background-size: cover;
      }
      &.leo{
        bg-img("../../assets/img/leo");
        background-size: cover;
      }
      &.virgo{
        bg-img("../../assets/img/virgo");
        background-size: cover;
      }
      &.libra{
        bg-img("../../assets/img/libra");
        background-size: cover;
      }
      &.scorpio{
        bg-img("../../assets/img/scorpio");
        background-size: cover;
      }
      &.sagittarius{
        bg-img("../../assets/img/sagittarius");
        background-size: cover;
      }
      &.capricorn{
        bg-img("../../assets/img/capricorn");
        background-size: cover;
      }
      &.aquarius{
        bg-img("../../assets/img/aquarius");
        background-size: cover;
      }
      &.pisces{
        bg-img("../../assets/img/pisces");
        background-size: cover;
      }
    }
    .today-luck-card-desc{
      line-height: 1em;
      text-align: center;
      ft-size($font-size-middle);
      color: $color-normal;
    }
    &.active{
      .constellation{
        &.aries{
          bg-img("../../assets/img/aries-active");
          background-size: cover;
        }
        &.taurus{
          bg-img("../../assets/img/taurus-active");
          background-size: cover;
        }
        &.gemini{
          bg-img("../../assets/img/gemini-active");
          background-size: cover;
        }
        &.cancer{
          bg-img("../../assets/img/cancer-active");
          background-size: cover;
        }
        &.leo{
          bg-img("../../assets/img/leo-active");
          background-size: cover;
        }
        &.virgo{
          bg-img("../../assets/img/virgo-active");
          background-size: cover;
        }
        &.libra{
          bg-img("../../assets/img/libra-active");
          background-size: cover;
        }
        &.scorpio{
          bg-img("../../assets/img/scorpio-active");
          background-size: cover;
        }
        &.sagittarius{
          bg-img("../../assets/img/sagittarius-active");
          background-size: cover;
        }
        &.capricorn{
          bg-img("../../assets/img/capricorn-active");
          background-size: cover;
        }
        &.aquarius{
          bg-img("../../assets/img/aquarius-active");
          background-size: cover;
        }
        &.pisces{
          bg-img("../../assets/img/pisces-active");
          background-size: cover;
        }
      }
      .today-luck-card-desc{
        color: $color-primary;
        font-weight: 200;
      }
    }
  }
}
.today-luck-choice-row{
  display: flex;
  .today-luck-choice-wrapper{
    flex: 1;
    display: flex;
    .today-luck-choice-item{
      flex: 0 0 88px;
      width: 88px;
      height: 80px;
      margin: 0 10px;
      line-height: 76px;
      text-align: center;
      border-bottom: 4px solid #8f95a1;
      font-size: 58px; /*px*/
      color: $color-primary;
    }
  }
  .btn-open-luck{
    flex: 0 0 280px;
    width: 280px;
    height: 80px;
    border-radius:40px;
    linear-bkColor-l();
    ft-size($font-size-title);
    color: #fff;
  }
}
/* 今日运势 end */

/* 资讯专区 start*/
.info-module{
  .common-module-header{
    margin-bottom: 48px;
  }
}
/* 资讯专区 end*/
</style>
