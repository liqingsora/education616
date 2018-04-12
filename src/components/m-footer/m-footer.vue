<template>
  <div class="footer">
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link tag="div" to="/goods">
          <span class="goods"></span><span class="text">套餐</span>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link tag="div" to="/my">
          <span class="my"></span><span class="text">我的</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{};
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .footer
    position: fixed
    left: 0
    bottom: 0
    z-index: 50
    width: 100%
    height: 49px
    .tab
      display: flex
      width: 100%
      height: 49px
      align-items: center
      justify-content: center
      //1px像素
      border-1px(rgba(7, 17, 27, 0.1))
      .tab-item
        flex: 1
        text-align: center
        & > div
          display: inline-block
          font-size: 14px
          color: rgb(52, 52, 52)
          &.router-link-active
            color:rgb(128, 185, 251)
            .goods
              bg-image('goods1')
            .my
              bg-image('my1')
        .goods
          display: block
          margin: 0 auto
          width: 30px
          height: 20px
          bg-image('goods0')
          background-size: 30px 24px
          background-repeat: no-repeat
        .my
          display: block
          margin: 0 auto
          width: 20px
          height: 20px
          bg-image('my0')
          background-size: 20px 20px
          background-repeat: no-repeat
        .text
          display: block
</style>