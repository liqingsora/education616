<template>
  <div class="my">
    <div class="my-data-wrap">
      <div class="my-photo">
        <img width="60" height="60" src="./myphoto@3x.png">
      </div>
      <p class="my-name">ppap</p>
    </div>
    <div class="my-list-wrap">
      <div class="my-edit-wrap">
        <router-link tag="div" to="/my-edit">
          <div class="my-edit">
            <span class="my-edit-img"></span>
          </div>
        </router-link>
      </div>
      <div class="my-list border-1px">
        <router-link tag="div" to="/my-purchased">
          <div class="listdiv">
            <span class="iconfont icon-yigoumai"></span><span class="text">已购套餐</span>
          </div>
        </router-link>
      </div>
      <div class="my-list border-1px">
        <router-link tag="div" to="/my-frequency">
          <div class="listdiv">
            <span class="iconfont icon-tubiaolunkuo-"></span><span class="text">我的服务</span>
          </div>
        </router-link>
      </div>
      <div class="my-list border-1px">
        <router-link tag="div" to="/my-order-list">
          <div class="listdiv">
            <span class="iconfont icon-yuyue"></span><span class="text">我的预约</span>
          </div>
        </router-link>
      </div>
      <div class="my-list border-1px">
        <router-link tag="div" to="/my-order-complete">
          <div class="listdiv">
            <span class="iconfont icon-jilu"></span><span class="text">服务记录</span>
          </div>
        </router-link>
      </div>
      <div class="my-list">
        <router-link tag="div" to="/my-aboutus">
          <div class="listdiv">
            <span class="iconfont icon-wode"></span><span class="text">关于我们</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .my
    width: 100%
    height: 100%
    bg-image('mybg')
    background-size: cover
    .my-data-wrap
      text-align: center
      .my-photo
        width: 60px
        height: 60px
        padding-top: 25px
        margin: 0 auto
      .my-name
        margin: 12px 0 19px 0
        font-size: 15px
        color: #fff
    .my-list-wrap
      margin: 0 15px 70px 15px
      background: #fff
      border-radius: 10px
      box-shadow: 0 0 8px rgba(94,170,248,0.4)
      .my-edit-wrap
        height: 28px
        position: relative
        .my-edit
          width:42px
          height:42px
          position: absolute
          top: -21px
          right: 15px
          z-index: 55
          .my-edit-img
            display: inline-block
            width: 100%
            height: 100%
            bg-image('myedit')
            background-size: cover
      .my-list
        border-1px(rgb(238,238,238),0,30px,0,30px,65.2%)
        .listdiv
          display: block
          padding: 26px 30px
          color: rgb(51,51,51)
          .iconfont
            font-size: 22px
            vertical-align:middle
          .text
            font-size: 16px
            padding-left: 19px
            vertical-align:middle
</style>