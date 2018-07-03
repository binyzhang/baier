<template>
  <div class="broadcast">
    <div class="broadcast-wrapper">
      <ul class="broadcast-list">
        <li class="broadcast-item">
          <div class="broadcast-item-top">
            <span class="type">双色球</span>
            <p class="msg clearfix">
              <span class="msg-left fl">第2018051期</span>
              <span class="msg-right fr">每周二 / 四 / 日 21:15 视频直播</span>
            </p>
          </div>
          <div class="broadcast-item-bottom">
            <p class="bottom-left">距离开奖还剩 <b class="time">3:02:32</b></p>
            <button class="btn-primary">立即投注</button>
          </div>
        </li>
        <li class="broadcast-item">
          <div class="broadcast-item-top">
            <span class="type">福彩3D</span>
            <p class="msg clearfix">
              <span class="msg-left fl">第2018051期</span>
              <span class="msg-right fr">每周二 / 四 / 日 21:15 视频直播</span>
            </p>
          </div>
          <div class="broadcast-item-bottom">
            <p class="bottom-left">距离开奖还剩 <b class="time">3:02:32</b></p>
            <button class="btn-primary">立即投注</button>
          </div>
        </li>
        <li class="broadcast-item">
          <div class="broadcast-item-top">
            <span class="type">快三</span>
            <p class="msg clearfix">
              <span class="msg-left fl">第2018051期</span>
              <span class="msg-right fr">每周二 / 四 / 日 21:15 视频直播</span>
            </p>
          </div>
          <div class="broadcast-item-bottom">
            <p class="bottom-left">距离开奖还剩 <b class="time">3:02:32</b></p>
            <button class="btn-primary">立即投注</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'broadcast'
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~assets/stylus/index";
.broadcast-wrapper{
  padding: 0 42px;
  .broadcast-item{
    height: 470px;
    margin-bottom 40px;
    background #fff;
    &:last-child{
      margin-bottom: 0;
    }
    .broadcast-item-top{
      position: relative;
      width: 100%;
      height: 380px;
      border-radius: 8px;
      background:rgba(188,10,10,0.2)
      .type{
        position absolute;
        left: 0;
        top: 24px;
        width: 118px;
        height: 56px;
        line-height 56px;
        text-align center;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 0px 28px 28px 0px;
        ft-size($font-size-middle-s);
        color: #fff;
      }
      .msg{
        position absolute;
        bottom: 24px;
        box-sizing: border-box;
        width: 100%;
        padding: 0 24px;
        ft-size($font-size-small);
        color: #fff;
      }
    }
    .broadcast-item-bottom{
      position: relative;
      height: 92px;
      padding-left: 24px;
      border-radius: 8px;
      line-height: 92px;
      ft-size($font-size-middle);
      color: $color-desc;
      .time{
        ft-size($font-size-title);
        color: $color-primary;
        font-weight: bold;
      }
      .btn-primary{
        position: absolute;
        top: 20px;
        right: 24px;
        width: 166px;
        height: 50px;
        border-radius: 25px;
        linear-bkColor-l();
        ft-size($font-size-large-s);
        color: #fff;
      }
    }
  }
}
</style>
