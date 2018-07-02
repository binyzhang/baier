// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App from './App'
// promise等全局工具解析器
import 'babel-polyfill'
// 淘宝移动端适配方案
import 'lib-flexible'
import './assets/stylus/reset.styl'
import BScroll from 'better-scroll'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
Vue.prototype.$BScroll = BScroll

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
