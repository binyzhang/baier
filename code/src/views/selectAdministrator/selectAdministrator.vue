<!--通讯录-->
<template>
  <div class="selectAdministtator">
    <section class="section">
      <div class="section_header">
        <div v-if="!isShowCancle" class="section_header_l">
          <img @click="$router.go(-1)" class="section_header_l_icon" src="https://avatars3.githubusercontent.com/u/15684156?v=4" alt="">
        </div>
        <div v-if="isShowCancle" class="section_header_l">
          <span @click="tapFinish" data-type="0" class="section_header_l_cancle">取消</span>
        </div>
        <span class="section_header_mid">选择管理员</span>
        <span @click="tapFinish" data-type="1" class="section_header_r section_header_rActive">完成<span v-if="num!=0">({{num}})</span></span>
      </div>

      <div class="section_search">
        <!--搜索-->
        <div class="section_search_top">
          <img v-if="!arrImgs.length" class="section_search_top_icon" src="../../assets/img/search-btn.png" alt="">
          <!--选中的人-->

          <img v-if="!!arrImgs.length" v-for="item in arrImgs" class="section_search_top_man" :src="item.imgSrc" alt="">

          <input v-model="value" @input="inputChange" maxlength="5" class="section_search_top_input" type="text"
                 placeholder="搜索">
        </div>

        <!--列表-->
        <div class="section_search_lists">
          <div class="section_search_lists_single" v-for="(item,index1) in arr">
            <span :id="item.type" class="section_titleWord">{{item.type}}</span>
            <template v-for="(list,index2) in item.data">
              <div :index1="index1" :index2="index2" :select_id="list.id" @click="tapSelect"
                   class="section_search_lists_single_man">
                <div class="section_search_lists_single_l">
                  <div v-if="!list.isSelect" class="section_search_lists_single_l_no"></div>
                  <!--替换选中图片-->
                  <img v-if="list.isSelect" src="https://avatars2.githubusercontent.com/u/8188778?v=4"
                       class="section_search_lists_single_l_select"></img>
                </div>
                <div class="section_search_lists_single_r">
                  <div class="section_items_item_man">
                    <img class="section_items_item_man_l" :src="list.imgSrc" alt="">
                    <div class="section_items_item_man_r">
                      <!--姓名-->
                      <span class="section_items_item_man_r_friendName">{{list.name}} </span>
                    </div>
                  </div>
                </div>
              </div>
            </template>

          </div>

        </div>


      </div>
    </section>

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
</template>

<script>
  export default {
    name: 'addressBooks',
    data: function () {
      return {
        isShowCancle: false,//左上角取消按钮
        num: 0,
        value: '',//输入框输入的值

        //选中后的图片数组展示在搜索框同一行d
        arrImgs: [],


        //展示的列表数据
        arr: [
          {
            type: "A",
            data: [
              {
                name: 'A1号',
                imgSrc: 'https://avatars1.githubusercontent.com/u/582346?v=4',
                isSelect: false,//false未选中
                id: 'A111',
              },
              {
                name: 'A2号',
                imgSrc: 'https://avatars2.githubusercontent.com/u/11371934?v=4',
                isSelect: false,
                id: 'A112',
              },
            ]
          },
          {
            type: "B",
            data: [
              {
                name: 'B1号',
                imgSrc: 'https://avatars2.githubusercontent.com/u/11371934?v=4',
                isSelect: false,
                id: 'B111',
              },
              {
                name: 'B2号',
                imgSrc: 'https://avatars2.githubusercontent.com/u/11371934?v=4',
                isSelect: false,
                id: 'B112',
              },
            ]
          },
          {
            type: "C",
            data: [
              {
                name: 'C1号',
                imgSrc: 'https://avatars2.githubusercontent.com/u/11371934?v=4',
                isSelect: false,
                id: 'C111',
              },
              {
                name: 'C2号',
                imgSrc: 'https://avatars2.githubusercontent.com/u/11371934?v=4',
                isSelect: false,
                id: 'C112',
              },
            ]
          },

        ],
      }
    },
    methods: {
      //点击选中
      tapSelect: function (e) {
        let index1 = e.currentTarget.getAttribute('index1');
        let index2 = e.currentTarget.getAttribute('index2');
        let arr = this.arr;
        console.log(index1, index2);
        arr[index1].data[index2].isSelect = !arr[index1].data[index2].isSelect;
        console.log(arr);
        this.arr = arr;


        this.isHaveSelect();

      },


      //有选中左上角是箭头，否则是取消按钮
      //和搜索框同一行的选中的图片数组
      isHaveSelect: function () {
        let that = this;
        let arr = that.arr;
        let num = 0;
        let arrImgs = [];
        that.isShowCancle = false;
        arr.map((item, index) => {
          item.data.map((list, idx) => {
            if (!!list.isSelect) {
              //有选中
              that.isShowCancle = true;
              num = num + 1;
              arrImgs.push({
                imgSrc: list.imgSrc
              });
            }
          })
        });
        that.num = num;
        that.arrImgs = arrImgs;

      },

      //点击完成或者取消按钮操作
      tapFinish(e) {
        let that = this;
        let type = e.currentTarget.getAttribute('data-type');
        if (type == 0) {
          console.log('点击取消按钮');
          this.isShowCancle = false;
          this.num = 0;
          this.arrImgs = [];
          let arr = this.arr;
          arr.map((item, index) => {
            item.data.map((list, idx) => {
              list.isSelect = false
            })
          });

        }
        if (type == 1) {
          console.log('点击完成按钮');
          let arr = that.arr;
          let id = [];//选中后的id集合
          arr.map((item, index) => {
            item.data.map((list, idx) => {
              if (!!list.isSelect) {
                id.push(list.id)
              }
            })
          });
          console.log('选中的id集合', id);
        }

      },

      //input搜索框
      inputChange: function () {
        console.log('正在输入', this.value);

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

<style scoped>
  @import 'selectAdministrator.css';
</style>
