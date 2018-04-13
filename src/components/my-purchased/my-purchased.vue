<template>
  <div class="my-purchased">
    <div class="title">
      <span class="product-brand"></span>
      <span class="list-title">套餐列表</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .my-purchased
    .title
      margin: 20px 0 20px 15px
      .product-brand
        display: inline-block
        vertical-align: top
        width: 60px
        height: 17px
        bg-image('pbrand')
        background-size: 60px 17px
        background-repeat: no-repeat
      .list-title
        vertical-align: top
        margin-left: 10px
        font-size: 14px
        color: rgb(50,50,50)
</style>