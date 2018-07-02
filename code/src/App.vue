<template>
  <div id="app">
    <section class="app-wrapper">
      <router-view class="child-view" />
      <!--<ul class="app-menu"  v-if="this.$route.name !== 'search'">
        <router-link tag="li" class="app-menu-item" to="/index">
          <div class="app-menu-item-icon"></div>
          <p class="app-menu-item-title">首页</p>
        </router-link>
        <router-link tag="li" class="app-menu-item" to="/reward">
          <div class="app-menu-item-icon"></div>
          <p class="app-menu-item-title">开奖</p>
        </router-link>
        <router-link tag="li" class="app-menu-item" to="/discovery">
          <div class="app-menu-item-icon"></div>
          <p class="app-menu-item-title">发现</p>
        </router-link>
        <router-link tag="li" class="app-menu-item" to="/my">
          <div class="app-menu-item-icon"></div>
          <p class="app-menu-item-title">我的</p>
        </router-link>
      </ul>-->
    </section>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      menuActiveIndex: 1
    }
  }
}
</script>

<style scoped="" lang="stylus" rel="stylesheet/stylus">
@import "~assets/stylus/index";
#app, .app-wrapper{
  width: 100%;
  height: 100%;
  /*background: #f7f7f7;*/
}

.app-wrapper{
  position: relative;
  .child-view{
    width: 100%;
    height: 100%;
  }
  .app-menu{
    position: absolute;
    bottom: 0;
    display: flex;
    width: 100%;
    height: 100px;
    background: #fff;
    .app-menu-item{
      flex: 1;
      box-sizing: border-box;
      padding-top: 18px;
      .app-menu-item-icon{
        width: 114px;
        height: 40px;
        margin: 0 auto 8px;
        background-repeat: no-repeat;
        background-position: center;
      }
      .app-menu-item-title{
        ft-size($font-size-small);
        color: $color-primary;
        text-align: center;
      }
      &:first-child{
        .app-menu-item-icon{
          bg-img("assets/img/menu-index");
          background-size: contain;
        }
        &.active .app-menu-item-icon{
          bg-img("assets/img/menu-index-active");
          background-size: contain;
        }
      }
      &:nth-child(2){
        .app-menu-item-icon{
          bg-img("assets/img/menu-reward");
          background-size: contain;
        }
        &.active .app-menu-item-icon{
          bg-img("assets/img/menu-reward-active");
          background-size: contain;
        }
      }
      &:nth-child(3){
        .app-menu-item-icon{
          bg-img("assets/img/menu-discovery");
          background-size: contain;
        }
        &.active .app-menu-item-icon{
          bg-img("assets/img/menu-discovery-active");
          background-size: contain;
        }
      }
      &:last-child{
        .app-menu-item-icon{
          bg-img("assets/img/menu-my");
          background-size: contain;
        }
        &.active .app-menu-item-icon{
          bg-img("assets/img/menu-my-active");
          background-size: contain;
        }
      }
      &.active{
        .app-menu-item-title{
          color: $color-blue;
        }
      }
    }
  }
}
</style>
