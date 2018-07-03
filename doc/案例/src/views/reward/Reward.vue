<template>
  <div>
    <header>
      <div><</div>
      <div>舞象彩票网点(12)</div>
      <div>···</div>
    </header>
    <main>
      <section class="football">
        <div class="foot">
          <div class="foot_first">
            <p class="p"><span class="se">双色球</span><a href="javascript:;">20180698期</a><span class="tj">荐</span></p><a href="javascript:;" class="qz">@群主</a>
          </div>
          <div class="foot_second">
            <div>15</div>
            <div>14</div>
            <div>12</div>
            <div>06</div>
            <div>18</div>
            <div>20</div>
            <p>06</p>
          </div>
          <div class="foot_three">
            <div><a href="javascript:;">今晚 21:15 开奖</a></div>
            <div class="foot_btn">投注20元</div>
          </div>
        </div>
      </section>
      <section class="wenzi">
        以上号码由群主推荐，您可以按照推荐号码立即投注 也可以调整号码后投注，点击号码数字即可编辑
      </section>
      <section class="liaot">
        <div class="data">2018/06/11 11:46</div>
        <div class="right_person">
          <p class="p1_person">什么是跟单？</p>
          <p class="p2_person"></p>
        </div>
        <div class="data">11:46</div>
        <div class="right_person">
          <p class="p1_person">怎么没人回复呢？群主在不在呀？</p>
          <p class="p2_person"></p>
        </div>
        <div class="left_person">
          <p class="p4_person"></p>
          <p class="p3_person"><a href="javascript:;" class="sps">舞象小助手</a><span>来了来了，我在这里嘿嘿...</span></p>
        </div>
        <div class="left_person">
          <p class="p4_person"></p>
          <p class="p3_person"><a href="javascript:;" class="sps">舞象小助手</a><span>别人发起一个彩票的合买单,将一定比例的注数出让给其他人,其他人的参与就叫跟单,跟单是可以定制自动跟单的。</span></p>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
    export default {

    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/stylus/index";
  header {
    width 98%
    height 80px
    display flex
    justify-content space-between
    align-items center
    ft-size($font-size-large)
    margin 0 auto
    color $color-primary
    font-weight bolder
    border-bottom 1px solid #F4F4F4
    div {
      padding 0 20px
    }
  }
  main {
    .football{
      width 90%
      margin 30px auto 0
      padding-top 20px
      box-shadow 0px 5px 40px #aaa
      ft-size($font-size-middle)
      .foot{
        padding 20px
        .foot_first{
          display flex
          justify-content space-between
          .p{
            line-height 35px
            .tj{
              margin-left 20px
              display inline-block
              width 40px
              height 40px
              line-height 40px
              text-align center
              border-radius 50%
              linear-bkColor-c()
              color white
            }
            .se{
              padding 0 20px 0 0
            }
          }
          .qz{
            color #3A8DEA
          }
        }
        .foot_second{
          padding 20px 0
          display flex
          justify-content space-around
          div {
            width 60px
            height 60px
            border-radius 50%
            border: 1px double #FF5961
            text-align center
            line-height 55px
            color #FF5961
          }
          p{
            width 60px
            height 60px
            border-radius 50%
            border: 1px double #65CFF9
            text-align center
            line-height 55px
            color #65CFF9
          }
        }
        .foot_three{
          display flex
          justify-content space-between
          line-height 45px
          .foot_btn{
            width 160px;
            height 45px
            linear-bkColor-l()
            color white
            line-height 45px
            text-align center
            border-radius 20px
          }
        }
      }
    }
    .wenzi{
      width 90%
      margin 30px auto
      color $color-desc
      line-height 30px
      ft-size($font-size-small)
    }
    .liaot{
      width 90%
      margin 20px auto
      .data{
        width 100%
        padding 10px
        text-align center
        color $color-desc
        ft-size($font-size-small)
      }
      .left_person{
        margin 50px 0
        width 100%
        display flex
        align-items center
        flex-wrap wrap
        .p3_person{
          flex 1
          text-align left
          padding 10px 30px
          position relative
          .sps{
            ft-size($font-size-small-s)
            position absolute
            top 0
          }
          span{
            display inline-block
            padding-top 25px
            line-height 35px
          }
        }
        .p4_person{
          width 60px;
          height 60px;
          background url("../../../static/img/avatar-2.png") no-repeat
          background-size cover
        }
      }
      .right_person{
        width 100%
        display flex
        align-items center
        flex-wrap wrap
        .p1_person{
          flex 1
          line-height 35px
          text-align right
          padding 0 20px
        }
        .p2_person{
          width 60px;
          height 60px;
          background url("../../../static/img/avatar-1.png") no-repeat
          background-size cover
        }
      }
    }
  }
</style>
