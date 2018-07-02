<!--通讯录-->
<template>
  <div class="addressBooks" ref="addressBooks">
    <div class="address-books-wrapper">
      <div class="searchAdd">
        <router-link to="/search">
          <img class="searchAdd_search" src="../../assets/img/search-btn.png" alt="">
        </router-link>
        <!--需要更换图片-->
        <router-link to="/add">
          <img class="searchAdd_add" src="../../assets/img/add.png">
        </router-link>
      </div>
      <div class="section">
        <span class="section_title">通讯录</span>
        <div class="section_tab">
          <div @click="tapTab" data-tabNum="0" class="section_tab_single section_tab_singleActive">
            <span class="section_tab_single_font">全部</span>
            <div v-if='tabNum==0' class="section_tab_single_line"></div>
          </div>
          <div @click="tapTab" data-tabNum="1" class="section_tab_single">
            <span class="section_tab_single_font">网点群组</span>
            <div v-if='tabNum==1' class="section_tab_single_line"></div>
          </div>
          <div @click="tapTab" data-tabNum="2" class="section_tab_single">
            <span class="section_tab_single_font">专家</span>
            <div v-if='tabNum==2' class="section_tab_single_line"></div>
          </div>
          <div @click="tapTab" data-tabNum="3" class="section_tab_single">
            <span class="section_tab_single_font">好友</span>
            <div v-if='tabNum==3' class="section_tab_single_line"></div>
          </div>
        </div>
        <div class="section_items">
          <!--网点群组-->
          <template v-if="tabNum==0 || tabNum==1">
            <div class="section_items_item">
              <div class="section_items_item_title">网点群组</div>
            </div>
            <div v-for='item in arr1' class="section_items_item_man">
              <img class="section_items_item_man_l" :src="item.imgSrc" alt="">
              <div class="section_items_item_man_r">
                <span class="section_items_item_man_r_name">{{item.name}}</span>
                <!--定位-->
                <div class="section_items_item_man_r_location">
                  <img class="section_items_item_man_r_location_icon"
                       src="https://avatars2.githubusercontent.com/u/8188778?v=4" alt="">
                  <span class="section_items_item_man_r_location_font">{{item.distance}}KM</span>
                </div>
                <!--关注-->
                <!--<div class="section_items_item_man_r_guanzhu">-->
                <!--<img class="section_items_item_man_r_guanzhu_icon"-->
                <!--src="https://avatars2.githubusercontent.com/u/8188778?v=4" alt="">-->
                <!--<span class="section_items_item_man_r_guanzhu_font">关注</span>-->
                <!--</div>-->
              </div>
            </div>
          </template>
          <!--专家-->
          <template v-if="tabNum==0 || tabNum==2">
            <div class="section_items_item">
              <div class="section_items_item_title">专家</div>
            </div>
            <div class="section_items_item_man" v-for="item in arr2">
              <img class="section_items_item_man_l" :src="item.imgSrc" alt="">
              <div class="section_items_item_man_r">
                <span class="section_items_item_man_r_name">{{item.name}}</span>
                <!--定位-->
                <!--<div class="section_items_item_man_r_location">-->
                <!--<img class="section_items_item_man_r_location_icon"-->
                <!--src="https://avatars2.githubusercontent.com/u/8188778?v=4" alt="">-->
                <!--<span class="section_items_item_man_r_location_font">1.5KM</span>-->
                <!--</div>-->
                <!--关注-->
                <div class="section_items_item_man_r_guanzhu">
                  <!--需要更换图片-->
                  <img class="section_items_item_man_r_guanzhu_icon"
                       :src="item.imgSrc" alt="">
                  <span class="section_items_item_man_r_guanzhu_font">{{item.num}}关注</span>
                </div>
              </div>
            </div>
          </template>
          <!--好友-->
          <template v-if="tabNum==0 || tabNum==3">
            <div class="section_items_item">
              <div class="section_items_item_title">好友</div>
            </div>
            <template v-for="item in arr3">
              <span :id="item.type" class="section_titleWord">{{item.type}}</span>
              <div v-for="list in item.data" class="section_items_item_man">
                <img class="section_items_item_man_l" :src="list.imgSrc" alt="">
                <div class="section_items_item_man_r">
                  <!--<span class="section_items_item_man_r_name">五香彩票粉丝群五香彩票粉丝群五香彩票粉丝群五香彩票粉丝群</span>-->

                  <!--定位-->
                  <!--<div class="section_items_item_man_r_location">-->
                  <!--<img class="section_items_item_man_r_location_icon"-->
                  <!--src="https://avatars2.githubusercontent.com/u/8188778?v=4" alt="">-->
                  <!--<span class="section_items_item_man_r_location_font">1.5KM</span>-->
                  <!--</div>-->
                  <!--关注-->
                  <!--<div class="section_items_item_man_r_guanzhu">-->
                  <!--<img class="section_items_item_man_r_guanzhu_icon"-->
                  <!--src="https://avatars2.githubusercontent.com/u/8188778?v=4" alt="">-->
                  <!--<span class="section_items_item_man_r_guanzhu_font">关注</span>-->
                  <!--</div>-->

                  <!--姓名-->
                  <span class="section_items_item_man_r_friendName">{{list.name}} </span>
                </div>
              </div>
            </template>
          </template>
        </div>
      </div>
      <!--abcdefg-->
      <div class="words">
        <span @click="goAnchor('A')">A</span>
        <span @click="goAnchor('B')">B</span>
        <span @click="goAnchor('C')">C</span>
        <span @click="goAnchor('D')">D</span>
        <span @click="goAnchor('E')">E</span>
        <span @click="goAnchor('F')">F</span>
        <span @click="goAnchor('G')">G</span>
        <span @click="goAnchor('H')">H</span>
        <span @click="goAnchor('I')">I</span>
        <span @click="goAnchor('J')">J</span>
        <span @click="goAnchor('K')">K</span>
        <span @click="goAnchor('L')">L</span>
        <span @click="goAnchor('M')">M</span>
        <span @click="goAnchor('N')">N</span>
        <span @click="goAnchor('O')">O</span>
        <span @click="goAnchor('P')">P</span>
        <span @click="goAnchor('Q')">Q</span>
        <span @click="goAnchor('R')">R</span>
        <span @click="goAnchor('S')">S</span>
        <span @click="goAnchor('T')">T</span>
        <span @click="goAnchor('U')">U</span>
        <span @click="goAnchor('V')">V</span>
        <span @click="goAnchor('W')">W</span>
        <span @click="goAnchor('X')">X</span>
        <span @click="goAnchor('Y')">Y</span>
        <span @click="goAnchor('Z')">Z</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'addressBooks',
  data: function () {
    return {
      isLocation: true,
      isFollow: true,

      // 点击的tab栏
      tabNum: 0,

      // 所有人
      arr0: [],
      // 网点群组
      arr1: [
        {
          imgSrc: 'https://avatars2.githubusercontent.com/u/11371934?v=4',
          name: '五香粉丝群1',
          distance: '1.5'  // 距离
        },
        {
          imgSrc: 'https://avatars2.githubusercontent.com/u/11371934?v=4',
          name: '五香粉丝群1',
          distance: '1.5'  // 距离
        },
        {
          imgSrc: 'https://avatars2.githubusercontent.com/u/11371934?v=4',
          name: '五香粉丝群1',
          distance: '555.5' // 距离
        }
      ],
      // 专家
      arr2: [
        {
          imgSrc: 'https://avatars2.githubusercontent.com/u/11371934?v=4',
          name: '一号',
          num: '99' // 关注人数
        },
        {
          imgSrc: 'https://avatars2.githubusercontent.com/u/11371934?v=4',
          name: '二号',
          distance: '5'  // 关注人数
        },
        {
          imgSrc: 'https://avatars2.githubusercontent.com/u/11371934?v=4',
          name: '三号',
          distance: '199'  // 关注人数
        }
      ],
      // 好友
      arr3: [
        {
          type: "A",
          data: [
            {
              name: '一号',
              imgSrc: 'https://avatars2.githubusercontent.com/u/11371934?v=4',
            },
            {
              name: 'er号',
              imgSrc: 'https://avatars2.githubusercontent.com/u/11371934?v=4',
            }
          ]
        },
        {
          type: "B",
          data: [
            {
              name: '一号',
              imgSrc: 'https://avatars2.githubusercontent.com/u/11371934?v=4',
            },
            {
              name: 'er号',
              imgSrc: 'https://avatars2.githubusercontent.com/u/11371934?v=4',
            },
          ]
        }
      ],

      //展示的列表
      arr: [],

    }

  },
  mounted () {
    this.$nextTick(() => {
      this._initScroll()
    })
  },
  methods: {
    _initScroll () {
      if (!this.addressBooksScroll) {
        this.addressBooksScroll = new this.$BScroll(this.$refs.addressBooks, {
          click: true
        })
      } else {
        this.addressBooksScroll.refresh()
      }
    },
    //tab栏点击事件
    tapTab: function (e) {
      console.log(e.currentTarget.getAttribute('data-tabNum'));
      this.tabNum = e.currentTarget.getAttribute('data-tabNum');
    },

    //锚点跳转
    goAnchor(selector) {
      console.log(selector);
      if (!!document.getElementById(selector)) {
        document.getElementById(selector).scrollIntoView(true);
      }

    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.addressBooks{
  width: 100%;
  heihgt: 100%;
  overflow: hidden;
}
.searchAdd {
  width: 100%;
  height: 94px;
  //background-color: pink;
  position: relative;
  .searchAdd_search {
    width: 44px;
    height: 44px;
    position: absolute;
    top: 50%;
    right: 146px;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .searchAdd_add {
    width: 44px;
    height: 44px;
    position: absolute;
    top: 50%;
    right: 42px;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
  }
}

.section {
  width: 688px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  //background-color: skyblue;
  .section_title {
    color: #454F63;
    font-size: 60px;
    line-height: 60px;
    font-weight: bold;
    margin-top: 25px;
  }
  .section_tab {
    margin-top: 44px;
    width: 688px;
    height: 44px;
    line-height: 44px;
    display: flex;
    flex-direction: row;
    //background-color: pink;
    font-size: 28px;
    color: #454F63;
    .section_tab_single {
      padding: 0 5px;
      margin-right: 60px;
      white-space: nowrap;
      .section_tab_single_font {
        color: #454F63;
        opacity: 0.6;
      }
      .section_tab_single_line {
        display: block;
        width: 100%;
        height: 2px;
        background: linear-gradient(#56CCF2, #2F80ED);
      }
    }
    .section_tab_singleActive {
      .section_tab_single_font {
        color: #454F63;
        opacity: 1;
      }
      .section_tab_single_line {
        display: block;
      }
    }

  }

  .section_items {
    width: 656px;
    .section_items_item {
      margin-top: 20px;
      width: 100%;
      .section_items_item_title {
        width: 100%;
        height: 64px;
        line-height: 64px;
        //background-color: pink;
        border-bottom: 1px solid #F4F4F4;
      }
    }
    .section_titleWord{
      font-size: 24px;
      line-height: 24px;
      color: #454F63;
      margin-top: 15px;
      display: block;
    }

    .section_items_item_man {
      width: 100%;
      height: 132px;
      position: relative;
      .section_items_item_man_l {
        border-radius: 5px;
        overflow: hidden;
        width: 92px;
        height: 92px;
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        transform: translateY(-50%);
        left: 0;
      }
      .section_items_item_man_r {
        width: 540px;
        height: 132px;
        position: absolute;
        right: 0;
        border-bottom: 1px solid #F4F4F4;
        .section_items_item_man_r_name {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          width: 480px;
          height: 30px;
          line-height: 30px;
          position: absolute;
          left: 0;
          top: 30px;
        }
        .section_items_item_man_r_location{
          height: 20px;
          position: absolute;
          top: 75px;
          left: 0;
          .section_items_item_man_r_location_icon{
            width: 20px;
            height: 20px;

          }
          .section_items_item_man_r_location_font{
            font-size: 24px;
            color: #78849E;
            opacity: .6;
          }
        }
        .section_items_item_man_r_guanzhu{
          height: 20px;
          position: absolute;
          top: 77px;
          left: 0;
          .section_items_item_man_r_guanzhu_icon{
            width: 20px;
            height: 20px;
          }
          .section_items_item_man_r_guanzhu_font{
            font-size: 24px;
            color: #78849E;
            opacity: .6;
          }
        }
        .section_items_item_man_r_friendName{
          position: absolute;
          left: 0;
          top: 50%;
          -webkit-transform: translateY(-50%);
          -moz-transform: translateY(-50%);
          -ms-transform: translateY(-50%);
          -o-transform: translateY(-50%);
          transform: translateY(-50%);
          font-size: 30px;
          color: #454F63;
        }
      }
    }
  }

}

.words{
  position: fixed;
  top: 300px;
  right: 15px;
  width: 30px;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  //background-color: pink;
  text-align: center;
  background-color: #fff;
  z-index: 999;
  span{
    margin-bottom: 5px;
  }
}
</style>
