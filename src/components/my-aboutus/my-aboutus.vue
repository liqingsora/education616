<template>
  <div class="my-aboutus">
    <div class="my-aboutus-wrap">
      <span class="brand"></span>
      <div class="title">关于我们</div>
      <div class="content">
        职击校园作为天津津企育人企业管理咨询有限公司重磅推出的项目，以“校企”联合为核心，搭建校企交流沟通平台，为校园学生就业提供网络支持，为求职开辟新路径。我们为每位学生提供私人订制专业化职场服务，助其完成从校园到职场的平稳过渡。目前主要服务内容包括职业生涯规划、简历修改及指导、职场人际关系处理培训、职位推荐及对接、职场礼仪培训和面试辅导等服务。职击校园，赢取未来，是我们不变的初衷。
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    created() {
      document.title = "职击校园"
    },
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
      padding-top: 10px
      background: #fff
      border-radius: 10px
      box-shadow: 0 0 8px rgba(94,170,248,0.4)
      text-align: center
      min-height: 500px
      .brand
        display: block
        margin: 0 auto
        width: 80px
        height: 80px
        bg-image('brand')
        background-size: cover
        background-repeat: no-repeat
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
