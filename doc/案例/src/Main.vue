<template>
  <div id="main">
    <router-view class="level-one-view"></router-view>
  </div>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
#main, .level-one-view{
  width: 100%;
  height: 100%;
}
</style>
