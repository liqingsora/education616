<template>
  <div class="product-list">
    <div class="title">
      <span class="product-brand"></span>
      <span class="list-title">套餐列表</span>
    </div>
    <ul class="itemwarp">
      <li class="itembg">
        <div class="icon">
          <img width="60" height="60">
        </div>
        <div class="text">
          <h2 class="name">1</h2>
          <p class="desc">11</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll';
  export default {
    components: {
      Scroll
    }
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
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
  .itemwarp
    position:relative
    .itembg
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      bg-image('goodsbg')
</style>