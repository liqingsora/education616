<template>
  <div class="my-aboutus">
    <div class="my-aboutus-wrap">
      <div class="title">关于我们</div>
      <div class="content">
        每次遇到中文排版页面时，需要每个段落开头缩进两格。之前傻乎乎的，用程序检测标签来进行中文段落开头的空两格缩进，还在骂HTML怎么就不能像WORD一样，自动识别中文编排格式。直到今天和公司美工在做项目时，才从他那里得知，原来自己是坐在井底看天了，CSS的一个属性就可以搞定所有的段落
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    activated(){
      this.$parent.hasFooter=false
//      console.log(this.$parent.hasFooter)
      document.body.scrollTop = 0;

    }
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .my-aboutus
    margin: 25px 7px
    .my-aboutus-wrap
      margin: 0 15px 70px 15px
      background: #fff
      border-radius: 10px
      box-shadow: 0 0 8px rgba(94,170,248,0.4)
      text-align: center
      min-height: 500px
      .title
        display: inline-block
        margin: 20px auto
        font-size: 22px
        color: rgb(51,51,51)
      .content
        margin: 22px 15px
        text-indent: 2em
        font-size: 14px
        line-height: 24px
        text-align: left
        color: #666
</style>
