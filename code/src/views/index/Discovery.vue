<template>
  <section class="discovery" ref="discovery">
    <div class="discovery-wrapper">
      <div class="discovery-container">
        <!-- <div>{this.$route}</div> -->
        <!-- header start -->
        <header class="discovery-header" v-if="this.$route.name !== 'search'">
          <h2 class="title">发现</h2>
          <div class="header-right clearfix">
            <!-- <span class="contact-icon fr"></span> -->
            <router-link tag="span" class="contact-icon fr" to="/layout/addressBooks"><i class="icon-inner"></i></router-link>
            <router-link tag="span" class="search-icon fr" to="/search2"><i class="icon-inner"></i></router-link>
          </div>
        </header>
        <!-- header end -->

        <!-- tabs start -->
        <div class="tabs">
          <ul class="tabs-title clearfix"  v-if="this.$route.name !== 'search'">
            <router-link tag="li" class="tabs-title-item fl" to="info">资讯</router-link>
            <router-link tag="li" class="tabs-title-item fl" to="broadcast">直播</router-link>
            <router-link tag="li" class="tabs-title-item fl" to="topic">话题</router-link>
            <router-link tag="li" class="tabs-title-item fl" to="group">网点群组</router-link>
          </ul>
          <router-view></router-view>
        </div>
        <!-- tabs end -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'discovery',
  data () {
    return {}
  },
  mounted () {
    this.$nextTick(() => {
      this._initScroll()
    })
  },
  methods: {
    _initScroll () {
      this.discoveryScroll = new this.$BScroll(this.$refs.discovery, {
        click: true
      })
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~assets/stylus/index";
.discovery-container{
  padding-top: 100px;
}
/* header start */
.discovery-header{
  display: flex;
  height: 60px;
  padding: 0 42px;
  margin-bottom: 50px;
  .title{
    flex: 0 0 150px;
    width: 150px;
    ft-size(60px);
    color: $color-primary;
    font-weight: bold;
    line-height: 100%;
  }
  .header-right{
    flex: 1;
    .contact-icon{
      width: 44px;
      height: 44px;
      margin-top: 8px;
      background: url("../../assets/img/contact-btn.png") no-repeat;
      background-size: cover;
    }
    .search-icon{
      width: 44px;
      height: 44px;
      margin: 8px 60px 0 0;
      background: url("../../assets/img/search-btn.png") no-repeat;
      background-size: cover;
    }
  }
}
/* header end */

/* tabs start */
.tabs{
  .tabs-title{
    height: 36px;
    padding: 0 42px;
    margin-bottom: 48px;
    .tabs-title-item{
      position: relative;
      padding-bottom: 10px;
      ft-size($font-size-large-s);
      color: $color-desc;
      margin-right: 60px;
      &.active{
        color: $color-primary;
        &:after{
          position: absolute;
          left: 0;
          bottom: 0;
          display: block;
          content: "";
          width: 100%;
          height: 4px;
          linear-border-color();
        }
      }
      &:last-child{
        margin-right: 0;
      }
    }
  }
}
/* tabs end */

</style>
