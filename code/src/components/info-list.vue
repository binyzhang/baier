<template>
  <ul class="info-list">
    <li class="info-item" v-for="(info, index) in infoListMsg" :key="index">
      <figure class="figure">
        <div class="figure-left">
          <figcaption class="figcaption">{{info.title}}</figcaption>
          <p class="info-address-time">{{info.address}}·{{info.time}}</p>
        </div>
        <div class="figure-right" @click="handleSkipToDetail">
          <img :src="info.src" class="figure-img" alt=""/>
        </div>
      </figure>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'info-list',
  props: {
    infoListMsg: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    handleSkipToDetail () {
      this.$router.push({
        path: '/news'
      })
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~assets/stylus/index";
.info-item{
  height: 180px;
  padding-bottom: 40px;
  margin-bottom: 40px;
  border-bottom-1px(#F4F4F4);
  &:last-child{
    margin-bottom: 0;
  }
  .figure{
    display: flex;
    .figure-left{
      position: relative;
      flex: 1;
      height: 180px;
      .figcaption{
        height: 144px;
        overflow-y: hidden;
        ft-size($font-size-large);
        color: $color-primary;
        line-height: 34px;
      }
      .info-address-time{
        position: absolute;
        left: 0;
        bottom: 0;
        ft-size($font-size-middle);
        color: $color-desc-l;
        line-height: 100%;
      }
    }
    .figure-right{
      flex: 0 0 180px;
      width: 180px;
      height: 180px;
      .figure-img{
        width: 100%;
        height: 100%;
        border-radius: 6px;
      }
    }
  }
}
</style>
