<template>
  <div class="my-aboutus">
    <div class="my-aboutus-wrap">
      <span class="brand"></span>
      <div class="title">关于我们</div>
      <div class="content">
        待完善
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
