<template>
  <div class="info">
    <div class="info-wrapper">
      <!--  info start  -->
      <div class="info-content">
        <div class="info-video-item">
          <div class="video-wrapper">
            <!--<video class="video" src=""></video>-->
            <img class="video" src="../../../assets/img/video-1.png" alt="">
            <span class="play-btn"></span>
            <span class="pause-btn"></span>
            <div class="video-img"></div>
          </div>
          <h3 class="title">福彩演播室 - 最美妈妈感动事迹</h3>
          <span class="info-msg">江门福彩·2天前</span>
        </div>
        <info-list :infoListMsg="infoListMsg"></info-list>
        <!--  info end  -->
        <div class="see-more">查看更多</div>
      </div>

      <!--  专家推荐 start  -->
      <section class="master-advise-module">
          <header class="header">
            <h4 class="title">专家推荐</h4>
            <span class="change-btn">换一换</span>
          </header>
          <div class="master-carousel">
              <swiper :options="swiperOption">
                <!-- slides -->
                <swiper-slide v-for="(item, index) in masterArr" :key="index">
                  <button class="focus-btn">关注</button>
                  <p class="location">他也在 {{item.position}}</p>
                  <div class="master-avatar">
                    <img :src="item.avatar" alt="" class="avatar"><span class="master-name">leocailand</span>
                  </div>
                  <h4 class="title">{{item.title}}</h4>
                  <p class="answer">{{item.answer}}</p>
                  <p class="master-focus-count">{{item.follow}} 关注</p>
                </swiper-slide>
              </swiper>
          </div>
        </section>
      <!--  专家推荐 end  -->
    </div>
  </div>
</template>

<script>
import infoList from '@/components/info-list'
export default {
  name: 'info',
  data () {
    return {
      infoListMsg: [
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
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 12
      },
      masterArr: [
        {
          position: '北京',
          avatar: './static/img/avatar-1.png',
          title: '彩票中那些有用又不难的数学问题？',
          answer: '根据国外媒体报道，来自澳大利亚波斯狮一位老太太近民币4787万元乐透彩票奖很多很多啊圣诞节开发加',
          follow: '367,666'
        },
        {
          position: '北京',
          avatar: './static/img/avatar-2.png',
          title: '彩票中那些有用又不难的数学问题？',
          answer: '根据国外媒体报道，来自澳大利亚波斯狮一位老太太近民币4787万元乐透彩票奖很多很多啊圣诞节开发加',
          follow: '367,666'
        },
        {
          position: '北京',
          avatar: './static/img/avatar-2.png',
          title: '彩票中那些有用又不难的数学问题？',
          answer: '根据国外媒体报道，来自澳大利亚波斯狮一位老太太近民币4787万元乐透彩票奖很多很多啊圣诞节开发加',
          follow: '367,666'
        },
        {
          position: '北京',
          avatar: './static/img/avatar-2.png',
          title: '彩票中那些有用又不难的数学问题？',
          answer: '根据国外媒体报道，来自澳大利亚波斯狮一位老太太近民币4787万元乐透彩票奖很多很多啊圣诞节开发加',
          follow: '367,666'
        }
      ]
    }
  },
  components: {
    infoList
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~assets/stylus/index";
/* info start */
.info-content {
  padding: 0 42px;
  .info-list {
    margin-bottom: 40px;
  }
  .info-video-item {
    width: 100%;
    padding-bottom: 34px;
    margin-bottom: 40px;
    border-bottom-1px(#F4F4F4);
    .video-wrapper {
      position: relative;
      width: 100%;
      height: 380px;
      margin-bottom: 36px;
      .video {
        width: 100%;
        height: 100%;
      }
    }
    .title {
      ft-size($font-size-large);
      color: $color-primary;
      line-height: 100%;
      margin-bottom: 24px;
    }
    .info-msg {
      ft-size($font-size-middle);
      color: $color-desc-l;
      line-height: 100%;
    }
  }
  .see-more {
    width: 100%;
    height: 24px;
    margin-bottom: 96px;
    text-align: center;
    line-height: 24px;
    font-size: $font-size-middle;
    color: $btn-color-blue;
  }
}
/* info end */

/* master-advise-module start */
.master-advise-module{
  .header{
    position: relative;
    padding: 0 42px;
    margin-bottom: 15px;
    .title{
      ft-size($font-size-title);
      color: $color-primary;
      line-height: 100%;
    }
    .change-btn{
      position: absolute;
      right: 42px;
      top: 6px;
      ft-size($font-size-middle);
      color: $color-desc;
      line-height: 100%;
    }
  }
  .master-carousel{
    .swiper-container{
      height: 400px;
      margin-left: 42px;
      padding: 20px 0;
    }
    .swiper-slide {
      position: relative;
      box-sizing: border-box;
      width: 508px;
      height: 100%;
      padding: 49px 26px 30px;
      background: #fff;
      border-radius: 8px;
      box-shadow: 15px 0px 50px rgba(0,0,0,0.1);
      .focus-btn{
        position: absolute;
        top: 31px;
        right: 24px;
        width: 118px;
        height: 56px;
        border-radius: 28px;
        linear-bkColor-d();
        ft-size($font-size-middle);
        color: #fff;
      }
      .location{
        ft-size($font-size-small);
        color: $color-primary;
        line-height: 100%;
        margin-bottom: 24px;
      }
      .master-avatar{
        display: flex;
        height: 66px;
        margin-bottom: 25px;
        .avatar{
          flex: 0 0 66px;
          width: 66px;
          height: 66px;
          margin-right: 20px;
          border-radius: 66px;
        }
        .master-name{
          flex:1;
          line-height: 66px;
          ft-size($font-size-large-s);
          color: $font-size-title;
          font-weight: bold;
        }
      }
      .title{
        width: 100%;
        height: 1.2em;
        line-height: 1.2em;
        ft-size($font-size-large);
        color: $color-primary;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 20px;
      }
      .answer{
        position: relative;
        width: 100%;
        height: 2.2em;
        overflow : hidden;
        margin-bottom: 22px;
        ft-size($font-size-middle);
        color: $color-desc;
        line-height: 1.2em;
        &:after{
          content: "...";
          position:absolute;
          bottom: 0;
          right: 0;
        }
      }
      .master-focus-count{
        ft-size($font-size-small);
        color: $color-desc;
      }
    }
  }
}
/* master-advise-module end */

</style>
