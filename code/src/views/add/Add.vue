<!--通讯录-->
<template>
  <div class="add">
    <div class="add_return">
      <div>
        <img @click="$router.go(-1)" class="add_return_icon" src="https://avatars3.githubusercontent.com/u/15684156?v=4" alt="">
      </div>
    </div>
    <div class="section">
      <span class="section_title">添加</span>
      <div class="section_items_item_man">
        <img class="section_items_item_man_l" src="https://avatars2.githubusercontent.com/u/8188778?v=4" alt="">
        <div class="section_items_item_man_r">
          <span class="section_items_item_man_r_name">加入群组</span>
          <div  class="section_items_item_man_r_location">
            <span class="section_items_item_man_r_location_font">加入感兴趣的彩圈群组</span>
          </div>
          <img class="section_items_item_man_r_arrow" src="../../assets/img/arrow.png" alt="">

        </div>
      </div>

      <div class="section_items_item_man">
        <img class="section_items_item_man_l" src="https://avatars2.githubusercontent.com/u/8188778?v=4" alt="">
        <div class="section_items_item_man_r">
          <span class="section_items_item_man_r_name">关注专家</span>
          <div  class="section_items_item_man_r_location">
            <span class="section_items_item_man_r_location_font">关注更多专家，了解专业信息</span>
          </div>
          <img class="section_items_item_man_r_arrow" src="../../assets/img/arrow.png" alt="">
        </div>
      </div>
      <div class="section_items_item_man">
        <img class="section_items_item_man_l" src="https://avatars2.githubusercontent.com/u/8188778?v=4" alt="">
        <div class="section_items_item_man_r">
          <span class="section_items_item_man_r_name">邀请好友</span>
          <div  class="section_items_item_man_r_location">
            <span class="section_items_item_man_r_location_font">邀请朋友加入彩票盒子</span>
          </div>
          <img class="section_items_item_man_r_arrow" src="../../assets/img/arrow.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'addressBooks',
    data () {
      return {}
    }
  }
</script>

<style scoped>
  @import 'add.css';
</style>
