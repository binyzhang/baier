<template>
  <div class="group">
    <div class="group-wrapper" v-if="0">
      <!--  未参与群组  start  -->
      <div class="no-group">
        <div class="no-grorp-avatar">
          <img src="../../assets/img/no-result.png" alt="" class="avatar">
        </div>
        <p class="desc">您还未加入任何网点群组</p>
        <button class="create-btn">创建群组</button>
      </div>
      <!--  未参与群组  end  -->

      <!--  加入群组列表  start  -->
      <div class="join-module">
        <h3 class="module-title">也许你想加入</h3>
        <ul class="join-card-wrapper">
          <li class="join-card-row" v-for="(row, index) in cards" :key="index">
            <div class="join-card" v-for="(card, index) in row" :key="index">
              <div class="avatar-wrapper">
                <img :src="card.avatar" alt="" class="avatar">
              </div>
              <h4 class="title">{{card.title}}</h4>
              <p class="desc">{{card.distance}}</p>
              <p class="devider"><i class="dot"></i></p>
              <button class="default-btn">加入</button>
            </div>
          </li>
        </ul>
      </div>
      <!--  加入群组列表  end  -->
    </div>
    <div class="group-main">
      <div class="main-left">
        <img src="../../../static/img/avatar-2.png">
      </div>
      <div class="main-center">
        <p>舞象彩票网点粉丝群(56)</p>
        <p class="content"><a href="javascript:;">张无忌：遮住貌似不错呀！！！</a></p>
      </div>
      <div class="main-right">
        <p><a href="javascript:;">14:15</a></p>
        <p class="dian"><span>99</span></p>
      </div>
    </div>
    <div class="group-main">
      <div class="main-left">
        <img src="../../../static/img/avatar-2.png">
      </div>
      <div class="main-center">
        <p>舞象彩票网点粉丝群(56)</p>
        <p class="content"><a href="javascript:;">张无忌：遮住貌似不错呀！！！张无忌：遮住貌似不错呀！！！张无忌：遮住貌似不错呀！！！张无忌：遮住貌似不错呀！！！张无忌：遮住貌似不错呀！！！</a></p>
      </div>
      <div class="main-right">
        <p><a href="javascript:;">14:15</a></p>
        <p class="dian"><span>99</span></p>
      </div>
    </div>
    <div class="group-main main">
      <div class="main-left">
        <img src="../../../static/img/avatar-2.png">
      </div>
      <div class="main-center">
        <p>舞象彩票网点粉丝群(56)</p>
        <p class="content"><a href="javascript:;">张无忌：遮住貌似不错呀！！！</a></p>
      </div>
      <div class="main-right" v-if="!show">
        <p><a href="javascript:;">14:15</a></p>
        <p class="dian"><span>99</span></p>
      </div>
      <div v-if="show" class="setTop">置顶</div>
      <div v-if="show" class="delete">删除</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'group',
  data () {
    return {
      show: true,
      cards: [
        [
          {
            avatar: './static/img/coin-1.png',
            title: '将太无二（北京爱琴海店）',
            distance: '0.5KM'
          },
          {
            avatar: './static/img/coin-2.png',
            title: '将太无二（北京爱琴海店）',
            distance: '0.6KM'
          },
          {
            avatar: './static/img/coin-3.png',
            title: '将太无二（北京爱琴海店）',
            distance: '0.7KM'
          }
        ],
        [
          {
            avatar: './static/img/coin-4.png',
            title: '将太无二（北京爱琴海店）',
            distance: '0.5KM'
          },
          {
            avatar: './static/img/coin-5.png',
            title: '将太无二（北京爱琴海店）',
            distance: '0.6KM'
          },
          {
            avatar: './static/img/coin-6.png',
            title: '将太无二（北京爱琴海店）',
            distance: '0.7KM'
          }
        ],
        [
          {
            avatar: './static/img/coin-7.png',
            title: '将太无二（北京爱琴海店）',
            distance: '0.5KM'
          },
          {
            avatar: './static/img/coin-8.png',
            title: '将太无二（北京爱琴海店）',
            distance: '0.6KM'
          },
          {
            avatar: './static/img/coin-9.png',
            title: '将太无二（北京爱琴海店）',
            distance: '0.7KM'
          }
        ]
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
@import "~assets/stylus/index";
.group-wrapper{
  padding: 0 42px;
  /* 未参与群组 start */
  .module-title{
    ft-size($font-size-title);
    color: $color-primary;
    font-weight: bold;
    line-height: 1em;
    margin-bottom: 30px;
  }
  .no-group{
    margin-bottom 79px;
    .no-grorp-avatar{
      position: relative;
      width: 139px;
      height: 160px;
      margin: 0 auto 26px;
      .avatar{
        width: 100%;
        height: 100%;
      }
    }
    .desc{
      text-align: center;
      line-height: 1em;
      ft-size($font-size-middle);
      color: $color-desc;
      margin-bottom: 20px;
    }
    .create-btn{
      display: block;
      width: 157px;
      height: 56px;
      margin: 0 auto;
      border-radius: 28px;
      linear-bkColor-d();
      ft-size($font-size-middle);
      color: #fff;
    }
  }
  /* 未参与群组 end */
  /* 加入群组列表 start */
  .join-card-wrapper{
    .join-card-row{
      display: flex;
      justify-content: space-between;
      margin-bottom: 24px;
      &:last-child{
        margin-bottom: 0;
      }
      .join-card{
        box-sizing: border-box;
        flex: 0 0 206px;
        width: 206px;
        height: 248px;
        padding: 16px 22px 0;
        background: #fff;
        box-shadow:15px 0px 50px rgba(0,0,0,0.1);
        .avatar-wrapper{
          width:72px;
          height:72px;
          border-radius: 50%;
          margin: 0 auto 16px;
          .avatar{
            width:100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        .title{
          width: 100%;
          text-align: center;
          height: 1em;
          margin-bottom: 12px;
          line-height: 1em;
          ft-size($font-size-middle);
          color: $color-primary;
          font-weight: 200;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .desc{
          ft-size($font-size-small);
          color: $color-desc;
          line-height: 1em;
          margin-bottom: 13px;
          text-align: center;
        }
        .devider{
          display: block;
          width: 100%;
          position: relative;
          height: 5px;
          margin-bottom: 12px;
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
          width: 108px;
          height: 38px;
          line-height: 38px;
          margin: 0 auto;
          border: 1px solid $btn-color-blue; /*no*/
          border-radius: 20px;
          ft-size($font-size-middle-s);
          color: $btn-border-blue;
        }
      }
    }
  }
  /* 加入群组列表 end */
}
.group-main{
  padding 10px 0
  display flex
  width 90%
  margin 0 auto
  .main-left{
    width 12%
    height 80px
    margin 10px
    img{
      width 100%
      height 100%
    }
  }
  .main-center{
    flex 1
    max-width 70%
    text-align left
    .content{
      padding-top 20px
      a{
        display block
        overflow: hidden
        text-overflow:ellipsis
        white-space: nowrap
      }
    }
  }
  .main-right{
    width 18%
    text-align center
    .dian{
      span {
        display inline-block
        width 40px
        height 40px
        background-color red
        color white
        text-align center
        line-height 40px
        margin-top 10px
        border-radius 50%
      }
    }
  }
}
  .main {
    width 100%;
    position relative
    left -100px
    .setTop{
      position absolute
      right 7%
      width 15%
      background-color #78849E
      color white
      line-height 90px
      text-align center
    }
    .delete{
      position absolute
      right -100px
      width 20%
      background-color red
      color white
      line-height 90px
      text-align center
    }
  }
</style>
