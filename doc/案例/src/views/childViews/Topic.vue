<template>
  <div class="topic">
    <div class="topic-wrapper">
      <ul class="topic-list">
        <li class="topic-item">
          <h4 class="title">彩票中哪些有用又不难的数学问题？</h4>
          <p class="desc">据国外媒体报道，来自澳大利亚珀斯市一位老太太近日揽得1000万澳元来自澳大利亚珀斯市一位老太太近日揽得1000万澳元（约合人民币4787万元）乐透彩票奖...</p>
          <div class="interactive clearfix">
            <span class="gift icon-wrap fl">106</span>
            <span class="expression icon-wrap fl">20</span>
            <span class="comment icon-wrap fr">20</span>
          </div>
        </li>
        <li class="topic-item">
          <h4 class="title">天津福彩筑梦未来 关爱儿童温暖相伴</h4>
          <p class="desc">据国外媒体报道，来自澳大利亚珀斯市一位老太太近日揽得1000万澳元来自澳大利亚珀斯市一位老太太近日揽得1000万澳元（约合人民币4787万元）乐透彩票奖...</p>
          <div class="interactive clearfix">
            <span class="gift icon-wrap fl">106</span>
            <span class="expression icon-wrap fl">20</span>
            <span class="comment icon-wrap fr">20</span>
          </div>
        </li>
        <li class="topic-item">
          <h4 class="title">展开心中之爱 公益之路福彩与您并肩同行</h4>
          <p class="desc">据国外媒体报道，来自澳大利亚珀斯市一位老太太近日揽得1000万澳元来自澳大利亚珀斯市一位老太太近日揽得1000万澳元（约合人民币4787万元）乐透彩票奖...</p>
          <div class="interactive clearfix">
            <span class="gift icon-wrap fl">106</span>
            <span class="expression icon-wrap fl">20</span>
            <span class="comment icon-wrap fr">20</span>
          </div>
        </li>
        <li class="topic-item">
          <h4 class="title">2018福彩“智爱行动”之圆梦兴趣班</h4>
          <p class="desc">据国外媒体报道，来自澳大利亚珀斯市一位老太太近日揽得1000万澳元来自澳大利亚珀斯市一位老太太近日揽得1000万澳元（约合人民币4787万元）乐透彩票奖...</p>
          <div class="interactive clearfix">
            <span class="gift icon-wrap fl">106</span>
            <span class="expression icon-wrap fl">20</span>
            <span class="comment icon-wrap fr">20</span>
          </div>
        </li>
        <li class="topic-item">
          <h4 class="title">2018福彩“智爱行动”之圆梦兴趣班</h4>
          <p class="desc">据国外媒体报道，来自澳大利亚珀斯市一位老太太近日揽得1000万澳元来自澳大利亚珀斯市一位老太太近日揽得1000万澳元（约合人民币4787万元）乐透彩票奖...</p>
          <div class="interactive clearfix">
            <span class="gift icon-wrap fl">106</span>
            <span class="expression icon-wrap fl">20</span>
            <span class="comment icon-wrap fr">20</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'topic'
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~assets/stylus/index";
.topic-wrapper{
  padding: 0 42px;
  .topic-list{
    width: 100%;
    .topic-item{
      position: relative;
      box-sizing: border-box;
      padding: 32px 50px 32px 40px;
      height:234px;
      background: rgba(255,255,255,1);
      border-radius: 8px;
      box-shadow: 15px 0px 50px rgba(0,0,0,0.1);
      margin-bottom: 40px;
      &:last-child{
        margin-bottom: 0;
      }
      .title{
        height: 1.2em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        ft-size($font-size-large);
        line-height: 1.2em;
        font-weight: bold;
        color: $color-primary;
        margin-bottom: 10px;
      }
      .desc{
        position: relative;
        height: 2.2em;
        overflow: hidden;
        ft-size($font-size-middle);
        color: $color-desc;
        line-height: 1.2em;
        &:after{
          content: "...";
          position:absolute;
          bottom: 0;
          right: 0;
          background: #fff;
        }
      }
      .interactive{
        position: absolute;
        left: 0;
        bottom: 32px;
        box-sizing: border-box;
        width: 100%;
        padding: 0 40px;
        ft-size($font-size-small);
        color: $color-desc;
        span.icon-wrap{
          height: 1em;
          padding-left: 28px;
          &.gift{
            margin-right: 40px;
          }
        }
      }
    }
  }
}
</style>
