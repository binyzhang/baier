<template>
  <div id="main">
    <router-view class="level-one-view"></router-view>
    22
  </div>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~assets/stylus/index";
#main, .level-one-view{
  width: 100%;
  height: 100%;
  overflow: hiddden;
  background: #f7f7f7;
}
</style>
